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


//callback function tính dien tich hinh tron với r được load từ data.txt
readFile('./data.txt', (data) =>{
	var r = Number(data);
	var s = Math.PI*r*r;
	return s;
});
