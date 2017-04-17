
var stepAmount = "00ffff"; // Make sure these are 6 hex characters

function lockNotify(peripheralId, service, characteristic, type, data, notifyEmitter, callback){
//	console.log('    lock notify hook'.yellow);
	var datastr = data.toString('hex');


// Extract the parts of the string we want to keep
	var strpart1 = datastr.substr(0, 10);
	var strpart2 = datastr.substring(18);

	//Add in the step count
	var data = strpart1 + stepAmount + strpart2;
	console.log(`Received         ${datastr}, overwriting with ${data}`);

	callback(null, new Buffer(data,'hex'));

}


module.exports.lockNotify = lockNotify;
