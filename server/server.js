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
    console.log("Request Body:", req.body); // Add this line for debugging

    const sql = "INSERT INTO customers (`Date`, `PlateNumber`, `PhoneNumber`, `VehicleDescription`, `VehicleType`, `ExtraCharge`) VALUES (?, ?, ?, ?, ?, ?)";
    const formData = [
        req.body.date,
        req.body.plateNumber,
        req.body.phoneNumber,
        req.body.vehicleDescription,
        req.body.vehicleType,
        req.body.extraCharge
    ]
    
    console.log("SQL Query:", sql, "Values:", formData); // Add this line for debugging
    db.query(sql, formData, (err, data)=>{
        if (err) {
            console.error("Error:", err);
            return res.json(err);
        }
        console.log("Insert Result:", data); // Add this line for debugging
        return res.json(data);
    });

});




app.listen(8081, () => {
    console.log('Listening...');
   
})
