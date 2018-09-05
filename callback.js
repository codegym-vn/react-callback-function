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


//callback function tính diện tích hình tròn với dữ liệu được load từ file data.txt

readFile('./data.txt', (data) =>{
	var r = Number(data); //parse string to number
	var s = Math.PI*r*r; // công thức tính diện tích hình tròn
	return s;
});
