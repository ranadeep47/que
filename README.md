# que
Queues calls to async functions to execute them serial 

```
var que = require('que');

function asyncLog(n,cb) {
	var timeout = (n % 2 === 0 ? 1000 : 3000);
	setTimeout(function(){
		cb(null,n);
	}, timeout);
}

var log = que(asyncLog);

log(1,print)
log(2,print)
log(3,print)
log(4,print)
log(5,print)
log(6,print)

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
