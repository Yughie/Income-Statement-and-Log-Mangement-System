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

   
  
    db.query(sql, [req.body.username, req.body.password], (err, data) =>{
        if (err) {
            console.error(err);
            return res.json("Error during login");
        }

        if(data.length > 0){
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


// Endpoint for creating entries in the dailyfinanciallog table
/*
app.post('/income-statement', (req, res) => {
  console.log("Request Body AAAAAAAAAAAAAAA:", req.body);

  const sqlInsertDailyFinancialLog = "INSERT INTO customers (`date`, `sales`, `return_amount`, `discount`, `net_sales`, `materials`, `labor`, `overhead`, `total_cost_of_srvcs_provided`, `gross_profit`, `wages`, `repairs_maintenance`, `depreciation`, `interest`, `other_expenses`, `total_operating_exp`, `operating_profit`, `other_income`, `interest_income`, `profit_before_taxes`, `tax_expense`, `net_profit`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  const formDataDailyFinancialLog = [
    /*parseFloat(req.body.date),
    parseFloat(req.body.sales),
    parseFloat(req.body.return_amount),
    parseFloat(req.body.discount),
    parseFloat(req.body.net_sales),
    parseFloat(req.body.materials),
    parseFloat(req.body.labor),
    parseFloat(req.body.overhead),
    parseFloat(req.body.total_cost_of_srvcs_provided),
    parseFloat(req.body.gross_profit),
    parseFloat(req.body.wages),
    parseFloat(req.body.repairs_maintenance),
    parseFloat(req.body.depreciation),
    parseFloat(req.body.interest),
    parseFloat(req.body.other_expenses),
    parseFloat(req.body.total_operating_exp),
    parseFloat(req.body.operating_profit),
    parseFloat(req.body.other_income),
    parseFloat(req.body.interest_income),
    parseFloat(req.body.profit_before_taxes),
    parseFloat(req.body.tax_expense),
    parseFloat(req.body.net_profit)

    req.body.date,
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

  console.log("SQL Query:", sqlInsertDailyFinancialLog, "Values:", formDataDailyFinancialLog);

  try {
    db.query(sqlInsertDailyFinancialLog, formDataDailyFinancialLog, (err, data) => {
      if (err) {
        console.error("Error during dailyfinanciallog insertion:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      console.log("Insert Result:", data);
      return res.json({ success: true, message: "Inserted Successfully" });
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}); */

app.post('/income-statement', (req, res) => {
  console.log("Request Body:", req.body);

  const sqlInsertDailyFinancialLog = "INSERT INTO dailyfinanciallog (`date`, `sales`, `return_amount`, `discount`, `net_sales`, `materials`, `labor`, `overhead`, `total_cost_of_srvcs_provided`, `gross_profit`, `wages`, `repairs_maintenance`, `depreciation`, `interest`, `other_expenses`, `total_operating_exp`, `operating_profit`, `other_income`, `interest_income`, `profit_before_taxes`, `tax_expense`, `net_profit`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  const formDataDailyFinancialLog = [
    req.body.date,
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

  console.log("SQL Query:", sqlInsertDailyFinancialLog, "Values:", formDataDailyFinancialLog);

  db.query(sqlInsertDailyFinancialLog, formDataDailyFinancialLog, (err, data) => {
    if (err) {
      console.error("Error during dailyfinanciallog insertion:", err);
      return res.status(500).json({ success: false, error: "Internal Server Error", message: "Failed to insert data into the database" });
    }

    console.log("Insert Result:", data);
    return res.json({ success: true, message: "Inserted Successfully" });
  });
});




try {
    app.get('/log', (req, res) => {
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
GROUP BY 
    customer.CustomerID;
      `;
  
      db.query(sqlQuery, (err, results) => {
        if (err) {
          console.error('Error fetching data:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          // No need for additional formatting if the query is correctly organized
          res.json(results);
        }
      });
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }


  try {
    // Endpoint for current day
    app.get('/dashboard/day', (req, res) => {
      const currentDate = new Date().toISOString().split('T')[0];
  
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
      const currentDate = new Date().toISOString().split('T')[0];
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

    // Endpoint for total within the current date (southside_db/customers/total)
    app.get('/customers/total', (req, res) => {
      const currentDate = new Date().toISOString().split('T')[0];
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
              // The result should contain an array of total column values
              const totalValues = results.map(result => result.total);
              res.json({ total: totalValues });
          }
      });
    });

    app.use((req, res, next) => {
      console.log(`Received request: ${req.method} ${req.url}`);
      next();
    });
    
    

  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }



app.listen(8081, () => {
    console.log('Listening...');
   
})
