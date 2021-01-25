require("./initDatabse");
const Bed = require("./models/bed");

new Bed({bed_number: "eee"}).save().then(() => console.log("eee"))
