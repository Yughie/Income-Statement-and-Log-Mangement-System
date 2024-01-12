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
})

app.post('/create-new-service', (req, res) => {
    const {
        serviceDate,
        plateNumber,
        phoneNumber,
        vehicleDescription,
        VehicleType,
        extraCharge,
        selectedServices, 
        workHour,
        vehicleSize,
    } = req.body;


    // Begin a transaction
    db.beginTransaction((err) => {
        if (err) {
            console.error(err);
            return res.json({ success: false, message: "Error beginning transaction" });
        }

        // Insert data into 'Customers' table
        const customerSql = "INSERT INTO Customers (Date, PlateNumber, PhoneNumber, VehicleDescription, VehicleType, ExtraCharge) VALUES (?, ?, ?, ?, ?, ?)";

         db.query(customerSql, [serviceDate, plateNumber, phoneNumber, vehicleDescription, VehicleType, extraCharge], (err, result) => {
            if (err) {
                return db.rollback(() => {
                    console.error(err);
                    return res.json({ success: false, message: "Error creating new service" });
                });
            }


            const customerId = result.insertId;

            // Insert data into 'CustomerServices' table
            const customerServicesSql = "INSERT INTO CustomerServices (CustomerID, ServiceID) VALUES ?";
            const customerServicesValues = selectedServices.map(serviceId => [customerId, serviceId]);


            db.query(customerServicesSql, [customerServicesValues], (err) => {
                if (err) {
                    return db.rollback(() => {
                        console.error(err);
                        return res.json({ success: false, message: "Error creating new service" });
                    });
                }

                // Fetch pricing details for selected services
                const pricingSql = "SELECT * FROM Pricing WHERE ServiceID IN (?) AND WorkHour = ? AND VehicleSizing = ?";
                const pricingValues = [selectedServices, workHour, vehicleSize];

                db.query(pricingSql, [pricingValues], (err, pricingResults) => {
                    if (err) {
                        return db.rollback(() => {
                            console.error(err);
                            return res.json({ success: false, message: "Error fetching pricing details" });
                        });
                    }

                    // Use pricingResults to calculate total cost or handle pricing details as needed

                
                  // Commit the transaction
                  db.commit((err) => {
                    if (err) {
                        return db.rollback(() => {
                            console.error(err);
                            return res.json({ success: false, message: "Error committing transaction" });
                        });
                    }
                    return res.json({ success: true, message: "New service created successfully" });
                });
            });
        });
        });
    })
});


const createServiceRoute = require('./create-service');
 



app.listen(8081, () => {
    console.log('Listening...');
})
