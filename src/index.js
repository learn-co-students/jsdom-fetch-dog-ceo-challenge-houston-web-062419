console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

// function displayImg() {

// } 

fetch(imgUrl)
    .then(res => res.json())
    .then(data => {
        data.message.forEach(element => {
            // console.log(element)
            const div = document.querySelector("#dog-image-container")
            const img = document.createElement("img")
            img.src = element
            div.append(img)
        });
    })

fetch(breedUrl)
    .then(res => res.json())
    .then(data => {
        const breed = Object.keys(data.message)

        const option = document.querySelector("#breed-dropdown")
        option.addEventListener("change", function(event){
        const startsWithN = breed.filter((breed) => breed.startsWith(event.target.value))
        console.log(startsWithN)
        // console.log(breed)
        const ul = document.querySelector("#dog-breeds")
        ul.innerHTML = ""
        startsWithN.forEach(element =>{
            // 

            const li = document.createElement("li")
            li.innerText = element
            ul.append(li)

            li.addEventListener("click",function(event){
                li.style.color = "green"
            
            })

        })


        })

    })



