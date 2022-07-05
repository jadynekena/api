//TO USE THIS API, PLEASE FOLLOW THE INSTRUCTIONS BELOW.
//EXAMPLE : res = $.get('http://api.jadynekena.com/index.js?param=0'); final_res=eval(res.body.innerText);

return results().toString()
function results(){
	url = localStorage['url']
	localStorage.clear()

	return url
}