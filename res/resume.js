function init() {
	document.getElementById('main').innerHTML = '';
	var radios = document.getElementsByName('switcher');
	for (var i = 0; i < radios.length; i++) {
		radios[i].checked = undefined;
		radios[i].onchange=function(){
			if (this.value.endsWith('\.html')) fetch(this.value);
			else {
				var dot = this.value.lastIndexOf('.');
				window.location.replace("archs/" + this.value.substr(0, dot) + "-2018" + this.value.substr(dot));
			}
		};
	}
	var spans = document.getElementsByClassName('switcher-span');
	for (var i = 0; i < spans.length; i++) {
		spans[i].onclick=function(){this.previousElementSibling.click();};
	}
	radios[0].click();
}

function fetch(value) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "inner/" + value, true);
	xhr.onload = function(e){
		if (xhr.status === 200) {
			document.getElementById('main').innerHTML = xhr.responseText;
			document.title = document.getElementById('doc-title').value;
		} else {
			alert('Http error, maybe my site service down.');
			document.getElementById('main').innerHTML = '';
		}				
	};
	xhr.onerror = function (e) {
		alert('Http error, maybe my site service down.');
		document.getElementById('main').innerHTML = '';
	};
	xhr.send(null);
}