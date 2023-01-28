const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://rasheda:2529@nodeexpressprojects.biarccz.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority";

mongoose.connect(connectionString);
