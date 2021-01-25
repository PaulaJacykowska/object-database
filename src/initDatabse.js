const mongoose = require('mongoose');

const URI = "mongodb+srv://bazmanWroc:bazman69@cluster0.xwio9.mongodb.net/ObjectiveHospital?retryWrites=true&w=majority";

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
  .then(() => console.log("DB CONNECTED"))
  .catch(() => console.error("DB CONNECTION ERROR"));
