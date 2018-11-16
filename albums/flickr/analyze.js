var fs = require('fs');

for (var n in cookies)
	headers.Cookie += n + '; '

console.log(url);

function test() {
	var photos = {};
	var fn1 = 'flickr-group-large-scenery-p500-';
	var fn2 = '.json';
	for (var i = 1; i <= 6; i++) {
		var fn = fn1 + i + fn2;
		var pg = JSON.parse(fs.readFileSync(fn, 'utf8'));
		console.log(fn + ': include [' + pg.photos.photo.length + '] photos.')
		for (var j = 0; j < pg.photos.photo.length; j++) {
			var p = pg.photos.photo[j];
			//large enough
			if (p.url_o && (p.width_o > 1600 || p.height_o > 1600)) {
				photos[p.id] = p;
				p.width__ = p.width_o;
				p.height__ = p.height_o;
			} else if (p.width_k && p.height_k) {
				photos[p.id] = p;
				p.width__ = p.width_k;
				p.height__ = p.height_k;
			}
			// for (var prop in p) {
			// 	if (prop.startsWith('width_') || prop.startsWith('height_')) {
			// 		var v = p[prop];
			// 		if (v > 2048) {
			// 			console.log('Large found [' + prop + '=' + v + ']: ' + p.id);
			// 		}
			// 	}
			// }
		}
	}
	console.log("Found photos of enough size: " + Object.keys(photos).length);
}