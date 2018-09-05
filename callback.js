const fs = require('fs');

function readFile(path,callback){
	fs.readFile(path, 'utf-8',(err, data) =>{
		if(err){
			return err;
		}
		else{
			console.log("readFile success");
			return callback(data);
		}
	});
}



readFile('./data.txt', (txt) =>{
	console.log(txt);
});
