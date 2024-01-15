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



app.listen(8081, () => {
    console.log('Listening...');
   
})
