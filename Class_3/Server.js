// step-1 
const express = require("express");

// step-2
const app = express();

//step-3
const port = 3000;

// step-4
app.listen(port, () => {
    console.log(`Server is running at ${port}`);
})


// step-5
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/class3").then(() => {
    console.log("db connection done")
}).catch(() => {
    console.log("db connection failed")
});


// by function 
// async function DatabaseConnection() {
//     await mongoose.connect("mongodb://localhost:27017/class3");
//     console.log("db connection done!!!!")
// }
// DatabaseConnection()

// by function with error handling
// async function DatabaseConnection() {
//     try {
//         await mongoose.connect("mongodb://localhost:27017/class3");
//         console.log("db connection done!!!!")
//     }
//     catch (err) {
//         console.log("db connection failed", err)
//     }
// }
// DatabaseConnection()

//step-6
// app.get("/", (req, res) => {
//     res.send(`<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Home Page (Inline CSS)</title>
// </head>
// <body style="margin:0; font-family:Arial, sans-serif; background-color:#f4f6f8; color:#333;">


//     <header style="display:flex; justify-content:space-between; align-items:center; padding:15px 50px; background-color:#222;">
//         <div style="color:#fff; font-size:24px; font-weight:bold;">MyWebsite</div>
//         <nav>
//             <a href="#" style="color:#fff; margin-left:20px; text-decoration:none;">Home</a>
//             <a href="#" style="color:#fff; margin-left:20px; text-decoration:none;">About</a>
//             <a href="#" style="color:#fff; margin-left:20px; text-decoration:none;">Services</a>
//             <a href="#" style="color:#fff; margin-left:20px; text-decoration:none;">Contact</a>
//         </nav>
//     </header>


//     <section style="text-align:center; padding:100px 20px; background:linear-gradient(to right, #4facfe, #00f2fe); color:white;">
//         <h1 style="font-size:48px; margin-bottom:10px;">Welcome to My Website</h1>
//         <p style="font-size:18px; margin-bottom:20px;">Simple, clean, and responsive homepage design.</p>
//         <button style="padding:12px 25px; border:none; background-color:#fff; color:#333; font-size:16px; cursor:pointer; border-radius:5px;">
//             Get Started
//         </button>
//     </section>

//     <!-- Features -->
//     <section style="display:flex; justify-content:center; gap:20px; padding:60px 20px;">
//         <div style="background:#fff; padding:30px; width:250px; text-align:center; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
//             <h3>Fast</h3>
//             <p>Optimized for performance.</p>
//         </div>

//         <div style="background:#fff; padding:30px; width:250px; text-align:center; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
//             <h3>Responsive</h3>
//             <p>Looks great on all devices.</p>
//         </div>

//         <div style="background:#fff; padding:30px; width:250px; text-align:center; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
//             <h3>Modern</h3>
//             <p>Clean and modern UI.</p>
//         </div>
//     </section>

//     <!-- Footer -->
//     <footer style="text-align:center; padding:20px; background-color:#222; color:#fff;">
//         © 2026 MyWebsite. All rights reserved.
//     </footer>

// </body>
// </html>
// `)
// })

const user = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    age: 25,
    isActive: true
};

app.get("/", (req, res) => {
    res.json({
        data: user
    })
})

