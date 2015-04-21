var qu = require('./index');

function asyncLogger(n,cb) {
	var timeout = (n % 2 === 0 ? 1000 : 3000);
	setTimeout(function(){
		cb(null,n);
	}, timeout);
}

var logger = qu(asyncLogger);

logger(1,print)
logger(2,print)
logger(3,print)
logger(4,print)
logger(5,print)
logger(6,print)

function print(err,num) {
	console.log(num);
}