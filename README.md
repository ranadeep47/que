# que
Queues calls to async functions to execute them serial 

```
var que = require('que');

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
```
Prints 

```
1
2
3
4
5
6
```