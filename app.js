const  unsplashApi = `I031RVdkP37rAKy1TqiycVP3cuuVlpIhJEXg7zWMrAc`;
let searchBtn = document.getElementById("search-btn");
let searchInput = document.getElementById("search-input");

async function updateBackground(city) {
    const url = `https://api.unsplash.com/photos/random?query=${city},landmark&client_id=${unsplashApi}`;

    try {
        const response = await fetch(url);
        const data = await response.json()

        const imageUrl= data.urls.regular;

        const bgImg = document.querySelector(".background");
        bgImg.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${imageUrl}')`;
        console.log("Background Change to ${city} image");
        
    } catch (error) {
        console.error("The background is not updated");
    }
}


searchBtn.addEventListener("click",function() {
    let city = searchInput.value;
    console.log(city);
        if(searchInput !== ""){
            updateBackground(city)
        }
        else{
            console.error("Please enter the image name");
        }
    
})