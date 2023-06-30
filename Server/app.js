const express = require("express");
const app = express();

// Allowing our APIs to be accessible from different origins while still maintaining security.
// If not use this then the server that hosts the requested resource explicitly allows cross-origin requests.


// =============== For specific domains are allowed to make cross-origin requests =============== //

// // Set up a whitelist of allowed domains
// const whitelist = ['http://example1.com', 'http://example2.com'];

// // Set up the CORS options
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   }
// };

// The !origin means not origin header such as request from local file.
// (such as requests from file:// URLs or from a script running in a web worker) are allowed.

var cors = require('cors');
app.use(cors());
// app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true })); // parse incoming request bodies or req.body
app.use(express.json()); // Parse incoming request bodies that are in JSON format and convert it into a JavaScript object.


const foodRoute = require("./routes/foodRoutes");
app.use("/", foodRoute);



app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running on port 5000');
});
