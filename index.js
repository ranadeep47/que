module.exports = function(fn) {
	var _cache = [];
	var _this = this;
	var isRunning = false;

	return function run() {
		var args = toArray(arguments);

		if(isRunning) {
			_cache.push(args);
		}
		else {
			isRunning = true;
			var cb = args.pop();

			args.push(function() {
				var _args = toArray(arguments);
				cb.apply(this,_args);
				isRunning = false;

				if(_cache.length) {
					var arr = _cache.shift();
					run.apply(_this,arr);
				}

			})

			fn.apply(_this, args);
		
		}

	}
}

function toArray(obj) {
	return Array.prototype.slice.call(obj);
}