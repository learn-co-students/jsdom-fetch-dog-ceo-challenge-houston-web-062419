
function fill_the_list(dd_value){
	

	const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
  .then(resp => resp.json())
  .then(function(json) {

  	const ul = document.querySelector("#dog-breeds")
  	while (ul.firstChild) {
        ul.firstChild.remove();
    }

	for (const key in json.message) {  		
  		let li = document.createElement("li")
  		li.id = key
  		li.innerText = key
  		if ((key.charAt(0) == dd_value) || (dd_value == "all"))
  			ul.append(li)
  	}

  	ul.addEventListener("click", function (event){
		if (event.target.tagName == "LI")
			event.target.style.color == "firebrick" ? event.target.style.color = "black" : event.target.style.color = "firebrick"		
		
	})

  });
}
  

function fill_the_imgs(){
	
	url = 'https://dog.ceo/api/breeds/image/random/4'
	fetch(url, configObj)
	  .then(resp => resp.json())
	  .then(function(json) {
  	for (var i = json.message.length - 1; i >= 0; i--) {
  
  		const doc = document.querySelector("#dog-image-container")
  		let img = document.createElement("img")
  		img.src = json.message[i]
  		doc.append(img)
  	}
  });
}  

function fill_the_cat_imgs(){
	let configObj = {
                method: "GET",
                headers: {
                 "Content-Type": "application/json",
                  "Accept": "application/json",
                  "x-api-key":"17d94b92-754f-46eb-99a0-65be65b5d18f"
                 },
        };

      //  curl --location --request GET "https://api.thecatapi.com//api/v1/images/?limit=10"

	url = "https://api.thecatapi.com/v1/favourites"
	fetch(url, configObj)
	  .then(resp => resp.json())
	  .then(function(json) {
	//debugger
  	for (var i = json.length - 1; i >= 0; i--) {
  
  		const doc = document.querySelector("#dog-image-container")
  		let img = document.createElement("img")
  		console.log(json[i].image.url)
  		img.src = json[i].image.url
  		if (json[i].image.url)
  			doc.append(img)
  	}
  });
}  
document.addEventListener("DOMContentLoaded", function() {

const dd_menu = document.querySelector("#breed-dropdown")
	
	for (i = 4; i < 26; i++){
		let chr = String.fromCharCode(97 + i);
		//console.log(chr)
		let select = document.createElement("option")
		select.id = chr
		select.innerText = chr
		dd_menu.append(select)
	}
	fill_the_cat_imgs()
	fill_the_list(dd_menu.value);

	

	dd_menu.onchange = function(){
		console.log(dd_menu.value)
			fill_the_list(dd_menu.value);

	}
	
});














console.log('%c HI', 'color: firebrick')
