const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 3977;
const urlMongoAtlas =
  "mongodb+srv://admin:admin123456@vicendb.divx8.mongodb.net/myFirstDatabase";

mongoose.connect(urlMongoAtlas, (err, res) => {
  try {
    if (err) {
      throw err;
    } else {
        console.log("La conexión s la DB es correcta");
        
      app.listen(port, () => {
        console.log(
          `Servidor del API REST está funcionando en http://localhost:${port}`
        );
      });
    }
  } catch (error) {
    console.log(error);
  }
  
});
