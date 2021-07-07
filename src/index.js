document.addEventListener("DOMContentLoaded", () => {



const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl)
    .then((res) => res.json())
    .then((data) => {
        data.message.forEach(dog => {
         let image = document.createElement('img')
         image.src = dog
         let div = document.getElementById("dog-image-container").append(image)
        }
    )})

const breedUrl = 'https://dog.ceo/api/breeds/list/all'


fetch(breedUrl)
    .then((res) => res.json())
    .then((data) => {
        let breeds = []
        for (var breed in data.message) {
            // console.log(breed)
            let li = document.createElement('li')
             li.addEventListener('click', function(){
               li.style.color = '#03fc62'
            }) 
            breeds.push(breed)
        }
            //    let dropdown = document.getElementById("breed-dropdown").addEventListener('change', filterDogs())

//     function filterDogs(){
//         let x = breed.filter( y => y.startsWith(event.target.value)) 
         
//     }
//         let ul = document.getElementById("dog-breeds")

//           ul.innerHTML = ""
          
//          ul.append(li)

//          x.forEach(element => {
//             const li = document.createElement("li")
//             li.innerText = element
//             ul.append(li)

// })
      
      let dropdown = document.getElementById("breed-dropdown").addEventListener('change', function(){
          
        let filteredBreeds = breeds.filter( y => y.startsWith(event.target.value)) 

        let ul = document.getElementById("dog-breeds")
        ul.innerHTML = ""
        filteredBreeds.forEach(element => {
                        const li = document.createElement("li")
                        li.innerText = element
                        ul.append(li)
            
        })

      })

    }) 
    
    

//     function filterDogs(){
//         let x = breed.filter( y => y.startsWith(event.target.value)) 
         
//     }
//         

//           ul.innerHTML = ""
          
//          ul.append(li)

//          x.forEach(element => {
//             const li = document.createElement("li")
//             li.innerText = element
//             ul.append(li)

// })

    
    

    
    
    
    
    
    
    
});