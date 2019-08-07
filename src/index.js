

document.addEventListener("DOMContentLoaded", () => {

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

    fetch(imgUrl)
    .then(function(res) {
        return res.json()
    })
    .then(function(data) {
        data.message.forEach(function(dog) {
            let image = document.createElement('img')
            image.src = dog
            let div = document.getElementById('dog-image-container').append(image)
        })
    });

    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    fetch(breedUrl)
    .then(function(res){
        return res.json()
    })
    .then(function(data) {
        for (var breed in data.message) {
        let li = document.createElement('li')
        li.innerText = breed
        let ul = document.getElementById('dog-breeds').append(li)
        li.addEventListener('click', function() {
            li.style.color =  ('#0077b3')
        })
        }
    })  

    var dogs = document.getElementById('breed-dropdown')
    dogs.addEventListener('change', function(){
        filterDogs(dogs.value)
    })

    filterDogs() {
        const x = breed.filter( breed => breed.startsWith(event.target.value))
        const ul = document.querySelector('#dog-breeds')
        ul.innerHTML = ""
        x.forEach(element =>{
            const li = document.createElement("li")
            li.innerText = element
            
        })
    }

        
    
    
})

   

