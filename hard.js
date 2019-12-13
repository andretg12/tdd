//////////////////////////
//          ENDPOINTS   //
//////////////////////////
//GET::localhost:PORT/array brings two arrays and joins them together and sorts them
//GET::localhost:PORT/reverse/:name reverses the name that you put in
//GET::localhost:PORT/time gives you the current date and time
//Setting up the environment
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

//Here i set up my arrays for the first endpoint
let fullArray = [];
const fruitArr = ["apple", "watermelon", "orange"];
const veggieArr = ["spinach", "lettuce", "broccoli"];
//Here i create the endpoint for the array join and sort and send it in a json format
app.get("/array", (req, res) => {
	fullArray = fruitArr.concat(veggieArr).sort();
	res.send(fullArray);
});
// Here i set up the endpoint to reverse the parameter that the client puts in
app.get("/reverse/:name", (req, res) => {
	const name = req.params.name;
	let nameReverse = name
		.split("")
		.reverse()
		.join("");
	res.json(nameReverse);
});
//Here I create the endpoint to get the time and date and return in jeson format
app.get("/time", (req, res) => {
	const today = new Date();
	const date =
		today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
	const time =
		today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	const dateTime = date + " " + time;
	res.json(dateTime);
});
//Setting up server
app.listen(PORT, () => {
	console.log(`Server is listening on ${PORT}`);
});
