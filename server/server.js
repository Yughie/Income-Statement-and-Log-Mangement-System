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



try {
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
            GROUP_CONCAT(services.ServiceName) AS serviceNames
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
            res.json(results);
          }
        });
      } else {
        // If invalid date range provided, return an error response
        res.status(400).json({ error: 'Invalid date range' });
      }
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
  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }



app.listen(8081, () => {
    console.log('Listening...');
   
})
