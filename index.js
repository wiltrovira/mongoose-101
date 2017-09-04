var mongoose =  require("mongoose");

// // //conecta la promesa
var Promise = require("bluebird");
Promise.promisifyAll(require("mongoose"));
mongoose.Promise = Promise;

//------------------------------//
var conn = mongoose.createConnection("localhost","senquiu",27017);
console.log(conn);

//------------------------------//
var promotorSchema = new mongoose.Schema({
	primerNombre : String,
	primerApellido : String
});
var Promotor = conn.model("Promotor", promotorSchema, "promotores");

var nuevoPromotor = new Promotor({
	//asigno los datos del promotor
	primerNombre : "John",
	primerApellido : "Doe"
});
console.log(nuevoPromotor.primerNombre + " " + nuevoPromotor.primerApellido);

Promotor.create(nuevoPromotor, function(err, nuevoPromotor){
	if (err){
		return err;
	}else{
		console.log("guardado! --> ", nuevoPromotor);
		conn.close();
	}
});

