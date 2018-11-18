function http(url, success, failure) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.onload = function (e) {
		if (xhr.status === 200) {
			if (typeof (success) !== 'function') throw 'callback(string responseText) on http get successed not provided';
			success(xhr.responseText);
		} else {
			failure = failure || function (msg) {
				alert(msg);
			};
			failure('Http error code [' + xhr.status + '], maybe my site service down.');
		}
	};
	xhr.onerror = function (e) {
		failure = failure || function (msg) {
			alert(msg);
		};
		failure('Http error, maybe my site service down.');
	};
	xhr.send(null);
}