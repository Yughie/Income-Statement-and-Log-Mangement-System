const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'southside_db'

})

app.post('/', (req, res) => {
  console.log("Request Payload:", req.body);
  const sql = "SELECT * FROM user WHERE username = ? AND password = ?";

  db.query(sql, [req.body.username, req.body.password], (err, data) => {
    if (err) {
      console.error(err);
      return res.json("Error during login");
    }

    if (data.length > 0) {
      // Redirect to the dashboard upon successful login

      return res.json({ success: true, redirect: '/dashboard' });

    } else {

      return res.json({ success: false, message: "Login Failed!" });
    }
  })

});


app.post('/create-new-service', (req, res) => {
  console.log("Request Body:", req.body);

  const sqlInsertCustomer = "INSERT INTO customers (`date`, `plateNumber`, `phoneNumber`, `vehicleDescription`, `vehicleType`, `workHour`, `vehicleSizing`, `extraCharge`, `total`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
  const formDataCustomer = [
    req.body.date,
    req.body.plateNumber,
    req.body.phoneNumber,
    req.body.vehicleDescription,
    req.body.vehicleType,
    req.body.workHour,
    req.body.vehicleSize,
    req.body.extraCharge,
    req.body.total,
  ];

  console.log("SQL Query:", sqlInsertCustomer, "Values:", formDataCustomer);

  try {
    db.query(sqlInsertCustomer, formDataCustomer, (err, data) => {
      if (err) {
        console.error("Error during customer insertion:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      const customerID = data.insertId; // Get the inserted customer ID
      const sqlInsertServices = "INSERT IGNORE INTO CustomerServices (customerID, serviceID) VALUES (?, (SELECT serviceID FROM Services WHERE serviceCode = ?))";

      const selectedServices = req.body.selectedServices;
      for (const category in selectedServices) {
        for (const serviceName in selectedServices[category]) {
          if (selectedServices[category][serviceName]) {
            db.query(sqlInsertServices, [customerID, serviceName], (err) => {
              if (err) {
                console.error("Error during service insertion:", err);
                return res.status(500).json({ error: "Internal Server Error" });
              }
            });
          }
        }
      }

      console.log("Insert Result:", data);
      return res.json({ success: true, message: "Inserted Successfully" });
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// daily financial log form insertion to database 
app.post('/income-statement', (req, res) => {
  console.log("Request Body:", req.body);

  const rawCurrentDate = new Date();
  rawCurrentDate.setUTCHours(rawCurrentDate.getUTCHours() + 8);
  const currentDate = rawCurrentDate.toISOString().split("T")[0];

  // Check if a record with the current date already exists
  const sqlCheckExistingRecord = "SELECT * FROM dailyfinanciallog WHERE `date` = ?";

  db.query(sqlCheckExistingRecord, [currentDate], (checkErr, checkData) => {
    if (checkErr) {
      console.error("Error checking for existing record:", checkErr);
      return res.status(500).json({ success: false, error: "Internal Server Error", message: "Failed to check for existing record" });
    }

    if (checkData.length > 0) {
      // If a record with the current date already exists, update the existing record
      const updateFields = Object.entries(req.body)
        .filter(([key, value]) => value !== null && value !== '')
        .map(([key, value]) => `${key} = ?`);

      const updateQuery = `
        UPDATE dailyfinanciallog
        SET ${updateFields.join(', ')}
        WHERE date = ?`;

      const updateData = [...Object.values(req.body).filter(value => value !== null && value !== ''), currentDate];

      db.query(updateQuery, updateData, (updateErr, updateResult) => {
        if (updateErr) {
          console.error("Error updating existing record:", updateErr);
          return res.status(500).json({ success: false, error: "Internal Server Error", message: "Failed to update existing record" });
        }

        console.log("Update Result:", updateResult);
        return res.json({ success: true, message: "Updated Successfully" });
      });
    } else {
      // If no record exists, proceed with the insertion
      const sqlInsertDailyFinancialLog = "INSERT INTO dailyfinanciallog (`date`, `sales`, `return_amount`, `discount`, `net_sales`, `materials`, `labor`, `overhead`, `total_cost_of_srvcs_provided`, `gross_profit`, `wages`, `repairs_maintenance`, `depreciation`, `interest`, `other_expenses`, `total_operating_exp`, `operating_profit`, `other_income`, `interest_income`, `profit_before_taxes`, `tax_expense`, `net_profit`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

      const formDataDailyFinancialLog = [
        currentDate,
        req.body.sales,
        req.body.return_amount,
        req.body.discount,
        req.body.net_sales,
        req.body.materials,
        req.body.labor,
        req.body.overhead,
        req.body.total_cost_of_srvcs_provided,
        req.body.gross_profit,
        req.body.wages,
        req.body.repairs_maintenance,
        req.body.depreciation,
        req.body.interest,
        req.body.other_expenses,
        req.body.total_operating_exp,
        req.body.operating_profit,
        req.body.other_income,
        req.body.interest_income,
        req.body.profit_before_taxes,
        req.body.tax_expense,
        req.body.net_profit
      ];

      db.query(sqlInsertDailyFinancialLog, formDataDailyFinancialLog, (insertErr, insertData) => {
        if (insertErr) {
          console.error("Error during dailyfinanciallog insertion:", insertErr);
          return res.status(500).json({ success: false, error: "Internal Server Error", message: "Failed to insert data into the database" });
        }

        console.log("Insert Result:", insertData);
        return res.json({ success: true, message: "Inserted Successfully" });
      });
    }
  });
});

app.get('/log', (req, res) => {

  const startDate = req.query.startDate;
  const endDate = req.query.endDate;

  const isValidDate = (dateString) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(dateString);
  };
  if (startDate && endDate && isValidDate(startDate) && isValidDate(endDate)) {
    // If valid date range provided, modify the SQL query to include date filtering
    const sqlQuery = `
        SELECT 
            customer.CustomerID,
            customer.plateNumber,
            customer.vehicleType,
            customer.vehicleDescription,
            customer.phoneNumber,
            customer.extraCharge,
            customer.date,
            customer.total,
            customer.vehicleSizing,
            customer.workHour,
            GROUP_CONCAT(services.ServiceName) AS serviceNames,
            MAX(IF(services.ServiceName = 'Carwash', 1, 0)) AS carwash,
            MAX(IF(services.ServiceName = 'Motorwash', 1, 0)) AS motorWash,
            MAX(IF(services.ServiceName = 'Tricycle (Private)', 1, 0)) AS tricyclePriv,
            MAX(IF(services.ServiceName = 'Tricycle (Public)', 1, 0)) AS tricyclePub,
            MAX(IF(services.ServiceName = 'Wax', 1, 0)) AS Wax,
            MAX(IF(services.ServiceName = 'Back 2 Zero', 1, 0)) AS back2Zero,
            MAX(IF(services.ServiceName = 'Buffing', 1, 0)) AS buffing,
            MAX(IF(services.ServiceName = 'Engine Wash', 1, 0)) AS engineWash,
            MAX(IF(services.ServiceName = 'Promo Package', 1, 0)) AS promoPackage,
            MAX(IF(services.ServiceName = 'Interior Detailing', 1, 0)) AS interiorDetailing,
            MAX(IF(services.ServiceName = 'Exterior Detailing', 1, 0)) AS exteriorDetailing
        FROM 
            Customers AS customer
        LEFT JOIN 
            CustomerServices AS customerServices ON customer.CustomerID = customerServices.CustomerID
        LEFT JOIN 
            Services AS services ON customerServices.ServiceID = services.ServiceID
WHERE 
        customer.date BETWEEN '${startDate}' AND '${endDate}'
      GROUP BY 
        customer.CustomerID;
        
        `;

    db.query(sqlQuery, (err, results) => {
      if (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        console.log('Results:', results);
        res.json(results);
      }
    });
  } else {
    // If invalid date range provided, return an error response
    res.status(400).json({ error: 'Invalid date range' });
  }
});

// DELETE endpoint to delete a customer

app.delete('/log/:id', (req, res) => {
  const customerId = parseInt(req.params.id);

  // Delete associated records in customerservices table
  const sqlDeleteCustomerServices = `DELETE FROM customerservices WHERE CustomerID = ?`;

  db.query(sqlDeleteCustomerServices, [customerId], (err, result) => {
    if (err) {
      console.error('Error deleting associated customer services:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      // Now, delete the customer from the customers table
      const sqlDeleteCustomer = `DELETE FROM customers WHERE customerID = ?`;

      db.query(sqlDeleteCustomer, [customerId], (err, result) => {
        if (err) {
          console.error('Error deleting customer:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          res.json({ success: true });
        }
      });
    }
  });
});





try {
  // Endpoint for current day
  app.get('/dashboard/day', (req, res) => {
    const rawCurrentDate = new Date();
    rawCurrentDate.setUTCHours(rawCurrentDate.getUTCHours() + 8);
    const currentDate = rawCurrentDate.toISOString().split("T")[0];

    const sqlQuery = `
        SELECT 
          customer.CustomerID,
          customer.plateNumber,
          customer.vehicleType,
          customer.vehicleDescription,
          customer.phoneNumber,
          customer.extraCharge,
          customer.date,
          customer.total,
          GROUP_CONCAT(services.ServiceName) AS serviceNames
        FROM 
          Customers AS customer
        LEFT JOIN 
          CustomerServices AS customerServices ON customer.CustomerID = customerServices.CustomerID
        LEFT JOIN 
          Services AS services ON customerServices.ServiceID = services.ServiceID
        WHERE
          customer.date = '${currentDate}'
        GROUP BY 
          customer.CustomerID;
      `;

    db.query(sqlQuery, (err, results) => {
      if (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
  });

  // Endpoint for past week
  app.get('/dashboard/week', (req, res) => {
    const rawCurrentDate = new Date();
    rawCurrentDate.setUTCHours(rawCurrentDate.getUTCHours() + 8);
    const currentDate = rawCurrentDate.toISOString().split("T")[0];
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6);

    const sqlQuery = `
        SELECT 
          customer.CustomerID,
          customer.plateNumber,
          customer.vehicleType,
          customer.vehicleDescription,
          customer.phoneNumber,
          customer.extraCharge,
          customer.date,
          customer.total,
          GROUP_CONCAT(services.ServiceName) AS serviceNames
        FROM 
          Customers AS customer
        LEFT JOIN 
          CustomerServices AS customerServices ON customer.CustomerID = customerServices.CustomerID
        LEFT JOIN 
          Services AS services ON customerServices.ServiceID = services.ServiceID
        WHERE
          customer.date BETWEEN '${sevenDaysAgo.toISOString().split('T')[0]}' AND '${currentDate}'
        GROUP BY 
          customer.CustomerID, customer.date;
      `;

    db.query(sqlQuery, (err, results) => {
      if (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
  });

  app.get('/dashboard/month', (req, res) => {
    const rawCurrentDate = new Date();
    rawCurrentDate.setUTCHours(rawCurrentDate.getUTCHours() + 8);
    const currentDate = rawCurrentDate.toISOString().split("T")[0];

    // Get the first day of the current month
    const firstDayOfMonth = new Date(rawCurrentDate.getFullYear(), rawCurrentDate.getMonth(), 1);

    const sqlQuery = `
        SELECT 
          customer.CustomerID,
          customer.plateNumber,
          customer.vehicleType,
          customer.vehicleDescription,
          customer.phoneNumber,
          customer.extraCharge,
          customer.date,
          customer.total,
          customer.vehicleSizing,  -- Include vehicle size in the query
          GROUP_CONCAT(services.ServiceName) AS serviceNames
        FROM 
          Customers AS customer
        LEFT JOIN 
          CustomerServices AS customerServices ON customer.CustomerID = customerServices.CustomerID
        LEFT JOIN 
          Services AS services ON customerServices.ServiceID = services.ServiceID
        WHERE
          customer.date BETWEEN '${firstDayOfMonth.toISOString().split('T')[0]}' AND '${currentDate}'
        GROUP BY 
          customer.CustomerID, customer.date, customer.vehicleSizing;
      `;

    db.query(sqlQuery, (err, results) => {
      if (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
  });

  app.get('/services', (req, res) => {
    const sqlQuery = `
        SELECT ServiceName FROM services;
      `;

    db.query(sqlQuery, (err, results) => {
      if (err) {
        console.error('Error fetching service names:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        const serviceNames = results.map(result => result.ServiceName);
        res.json({ serviceNames });
      }
    });
  });
  // Endpoint for sum of total column within the current date 
  app.get('/customers/total', (req, res) => {
    const rawCurrentDate = new Date();
    rawCurrentDate.setUTCHours(rawCurrentDate.getUTCHours() + 8);
    const currentDate = rawCurrentDate.toISOString().split("T")[0];


    const sqlQuery = `
          SELECT 
              total
          FROM 
              Customers
          WHERE
              date = '${currentDate}';
      `;

    db.query(sqlQuery, (err, results) => {
      if (err) {
        console.error('Error fetching total column for the current date:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        console.log("current date: " + currentDate);
        const totalValues = results.map(result => result.total);
        res.json({ total: totalValues });
      }
    });
  });

  // endpoint to get normal wage of the day
  app.get('/customers/totalNormalWage', (req, res) => {
    try {
      const rawCurrentDate = new Date();
      rawCurrentDate.setUTCHours(rawCurrentDate.getUTCHours() + 8);
      const currentDate = rawCurrentDate.toISOString().split("T")[0];

      const sqlQuery = `
          SELECT 
            SUM(total * 0.3) AS totalNormalWage
          FROM 
            Customers
          WHERE
            workHour = 'normal' AND date = ?;
        `;

      db.query(sqlQuery, [currentDate], (err, results) => {
        if (err) {
          console.error('Error fetching total normal wage for the current date:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          const totalNormalWage = results[0] ? results[0].totalNormalWage : 0;
          res.json({ totalNormalWage });
        }
      });
    } catch (error) {
      console.error("Unexpected error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // endpoint to get overtime wage of the day
  app.get('/customers/totalOvertimeWage', (req, res) => {
    try {
      const rawCurrentDate = new Date();
      rawCurrentDate.setUTCHours(rawCurrentDate.getUTCHours() + 8);
      const currentDate = rawCurrentDate.toISOString().split("T")[0];

      const sqlQuery = `
          SELECT 
            SUM(total * 0.5) AS totalOvertimeWage
          FROM 
            Customers
          WHERE
            workHour = 'overtime' AND date = ?;
        `;

      db.query(sqlQuery, [currentDate], (err, results) => {
        if (err) {
          console.error('Error fetching total overtime wage for the current date:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          const totalOvertimeWage = results[0] ? results[0].totalOvertimeWage : 0;
          res.json({ totalOvertimeWage });
        }
      });
    } catch (error) {
      console.error("Unexpected error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // Endpoint for fetching forms data based on the current date
  app.get('/dailyfinanciallog/forms-data', (req, res) => {
    const rawCurrentDate = new Date();
    rawCurrentDate.setUTCHours(rawCurrentDate.getUTCHours() + 8);
    const currentDate = rawCurrentDate.toISOString().split("T")[0];

    const sqlQuery = `
        SELECT 
          sales,
          return_amount,
          discount,
          net_sales,
          materials,
          labor,
          overhead,
          total_cost_of_srvcs_provided,
          gross_profit,
          repairs_maintenance,
          depreciation,
          interest,
          other_expenses,
          total_operating_exp,
          operating_profit,
          other_income,
          interest_income,
          profit_before_taxes,
          tax_expense,
          net_profit
        FROM 
          dailyfinanciallog
        WHERE
          date = '${currentDate}';
      `;

    db.query(sqlQuery, (err, results) => {
      if (err) {
        console.error('Error fetching income data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        console.log('Raw results from database:', results);
      } else {
        // If there is no data for the current date, return an empty object
        const formsData = results.length > 0 ? results[0] : {};
        res.json(formsData);
        console.log('Raw results from database:', results);
      }
    });
  });



  // Endpoint for fetching forms data based on the selected date

  function isValidDate(dateString) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(dateString);
  }
  app.get('/dailyfinanciallog/selected-forms-data', (req, res) => {
    const { selectedDate } = req.query; // Use req.query to get query parameters

    // Validate if selectedDate is in the correct format (adjust as needed)
    if (!selectedDate || !isValidDate(selectedDate)) {
      console.log("date here: ", selectedDate);
      return res.status(400).json({ error: 'Invalid date format' });
    }

    const sqlQuery = `
    SELECT 
      sales,
      return_amount,
      discount,
      net_sales,
      materials,
      labor,
      overhead,
      total_cost_of_srvcs_provided,
      gross_profit,
      wages,
      repairs_maintenance,
      depreciation,
      interest,
      other_expenses,
      total_operating_exp,
      operating_profit,
      other_income,
      interest_income,
      profit_before_taxes,
      tax_expense,
      net_profit
    FROM 
      dailyfinanciallog
    WHERE
      date = '${selectedDate}';
  `;
    console.log('SQL Query:', sqlQuery);
    console.log('Received Date:', selectedDate);

    db.query(sqlQuery, [new Date(selectedDate)], (err, results) => {
      if (err) {
        console.error('Error fetching income data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        console.log('Raw results from database:', results);
        console.log('NICE :', results);


        console.log('SQL Query:', sqlQuery);
        console.log('Received Date:', selectedDate);
      } else {

        const formsData = results.length > 0 ? results[0] : {};
        res.json(formsData);
        console.log('Raw results from database:', results);
        console.log('emoty');
      }
    });
  });

  // Endpoint for fetching forms data of a whole month (for monthly income statement)
  app.get('/dailyfinanciallog/current-month-forms-data', (req, res) => {
    const currentMonth = new Date().toISOString().slice(0, 7); // Get current month in 'YYYY-MM' format

    const sqlQuery = `
      SELECT 
        SUM(sales) AS total_sales,
        SUM(return_amount) AS total_return_amount,
        SUM(discount) AS total_discount,
        SUM(net_sales) AS total_net_sales,
        SUM(materials) AS total_materials,
        SUM(labor) AS total_labor,
        SUM(overhead) AS total_overhead,
        SUM(total_cost_of_srvcs_provided) AS total_cost_of_services_provided,
        SUM(gross_profit) AS total_gross_profit,
        SUM(wages) AS total_wages,
        SUM(repairs_maintenance) AS total_repairs_maintenance,
        SUM(depreciation) AS total_depreciation,
        SUM(interest) AS total_interest,
        SUM(other_expenses) AS total_other_expenses,
        SUM(total_operating_exp) AS total_operating_expenses,
        SUM(operating_profit) AS total_operating_profit,
        SUM(other_income) AS total_other_income,
        SUM(interest_income) AS total_interest_income,
        SUM(profit_before_taxes) AS total_profit_before_taxes,
        SUM(tax_expense) AS total_tax_expense,
        SUM(net_profit) AS total_net_profit
      FROM 
        dailyfinanciallog
      WHERE
        DATE_FORMAT(date, '%Y-%m') = '${currentMonth}'
    `;

    db.query(sqlQuery, (err, results) => {
      if (err) {
        console.error('Error fetching current month data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        // Extract the totals from the results
        const totals = results[0] || {};
        res.json(totals);
      }
    });
  });

  // Endpoint for fetching forms data of a selected month
  app.get('/dailyfinanciallog/selected-month-forms-data/:year-:month', (req, res) => {
    const { year, month } = req.params;

    const sqlQuery = `
      SELECT 
          SUM(sales) AS total_sales,
          SUM(return_amount) AS total_return_amount,
          SUM(discount) AS total_discount,
          SUM(net_sales) AS total_net_sales,
          SUM(materials) AS total_materials,
          SUM(labor) AS total_labor,
          SUM(overhead) AS total_overhead,
          SUM(total_cost_of_srvcs_provided) AS total_cost_of_services_provided,
          SUM(gross_profit) AS total_gross_profit,
          SUM(wages) AS total_wages,
          SUM(repairs_maintenance) AS total_repairs_maintenance,
          SUM(depreciation) AS total_depreciation,
          SUM(interest) AS total_interest,
          SUM(other_expenses) AS total_other_expenses,
          SUM(total_operating_exp) AS total_operating_expenses,
          SUM(operating_profit) AS total_operating_profit,
          SUM(other_income) AS total_other_income,
          SUM(interest_income) AS total_interest_income,
          SUM(profit_before_taxes) AS total_profit_before_taxes,
          SUM(tax_expense) AS total_tax_expense,
          SUM(net_profit) AS total_net_profit
      FROM 
          dailyfinanciallog
      WHERE
          DATE_FORMAT(date, '%Y-%m') = '${year}-${month}'
  `;

    db.query(sqlQuery, (err, results) => {
      if (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        console.log("HEY ", results);
        console.log("year ", year);
        console.log("month ", month);
        const totals = results[0] || {};
        res.json(totals);
      }
    });
  });









} catch (error) {
  console.error("Unexpected error:", error);
  res.status(500).json({ error: "Internal Server Error" });
}



app.listen(8081, () => {
  console.log('Listening...');

})