//TO USE THIS API, PLEASE FOLLOW THE INSTRUCTIONS BELOW.
//EXAMPLE : eval(await $.get('https://api.jadynekena.com/index.js?param1=val1&parm2=val2'))
function results(){
	url = localStorage['url']
	localStorage.clear()

	return url
}
results().toString()