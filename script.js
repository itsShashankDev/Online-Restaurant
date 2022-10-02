const Items = [
  {
        url: "images/kitchen-section-images/pizza1.jpg",
        ratings: 3.5,
        descrip: "home made pizza",
        time: "50-60min",
        pricing: "$19",

    },
    {
        url: "images/kitchen-section-images/pizza2.jpg",
        ratings: 3.5,
        descrip: "home made pizza",
        time: "50-60min",
        pricing : "$23",

    },
    {
        url: "images/kitchen-section-images/pizza3.jpg",
        ratings: 3.5,
        descrip: "home made pizza",
        time: "50-60min",
         pricing : "$23",

    },
    {
        url: "images/kitchen-section-images/pizza4.jpg",
        ratings: 3.5,
        descrip: "home made pizza",
        time: "50-60min",
         pricing : "$23",

    },
    {
        url: "images/kitchen-section-images/pizza5.jpg",
        ratings: 3.5,
        descrip: "home made pizza",
        time: "50-60min",
        pricing : "$25",

    },
    {
        url: "images/kitchen-section-images/pizza6.jpg",
        ratings: 3.5,
        descrip: "home made pizza",
        time: "50-60min",
        pricing : "$23",

    },
    {
        url: "images/kitchen-section-images/pizza7.jpg",
        ratings: 3.5,
        descrip: "home made pizza",
        time: "50-60min",
        pricing : "$23",

    },
    
    {
        url: "images/kitchen-section-images/pizza8.jpg",
        ratings: 3.5,
        descrip: "home made pizza",
        time: "50-60min",
        pricing : "$23",

    },
    {
        url: "images/kitchen-section-images/pizza1.jpg",
        ratings: 3.5,
        descrip: "home made pizza",
        time: "50-60min",
        pricing : "$23",

    },
    {
        url: "images/kitchen-section-images/pizza2.jpg",
        ratings: 3.5,
        descrip: "home made pizza",
        time: "50-60min",
        pricing : "$23",

    },
    {
        url: "images/kitchen-section-images/pizza3.jpg",
        ratings: 3.5,
        descrip: "home made pizza",
        time: "50-60min",
        pricing : "$23",

    },
     {
        url: "images/kitchen-section-images/pizza4.jpg",
        ratings: 3.5,
        descrip: "home made pizza",
        time: "50-60min",
        pricing : "$23",

    },
    
];

const cardsHome = document.querySelector(".cards-home");
console.log(cardsHome);
Items.forEach((item) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    cardsHome.appendChild(productCard);

    const pizzaImage = document.createElement("img");
    pizzaImage.setAttribute("src", `${item.url}`);
    pizzaImage.setAttribute("alt", "home-made-pizza");
    pizzaImage.setAttribute("width", "255");
    
    productCard.appendChild(pizzaImage);

    // product description : append details , price;
    const productDescription = document.createElement("div");
    productDescription.classList.add("product-description");
    productCard.appendChild(productDescription);

    //price
    const descriptionPrice = document.createElement("div");
    descriptionPrice.classList.add("description-price");

    const des = document.createElement("p");
    des.innerHTML = `${item.descrip}`;
    descriptionPrice.appendChild(des);

    const price = document.createElement("p");
    price.innerHTML = `${item.pricing}`;
    descriptionPrice.appendChild(price);

    productDescription.appendChild(descriptionPrice);
    // details
    const productDetails = document.createElement("div");
    productDetails.classList.add("product-details");

    productDescription.appendChild(productDetails);
    // APPEND STARrATING  , TIME TAKEN , BUTTON IN DETAILS
    const starRating = document.createElement("div");
    starRating.classList.add("star-rating");
    productDetails.appendChild(starRating);

    const starImage = document.createElement("img");
    starImage.setAttribute("src", "images/kitchen-section-images/Star-rating.png");
    starImage.setAttribute("alt", "star-rating-logo");

    starRating.appendChild(starImage);

    const rating = document.createElement("span");
    rating.innerHTML = `${item.ratings}`;

    starRating.appendChild(rating);

    // TIMETAKEN
    const timeTaken = document.createElement("p");
    timeTaken.classList.add("time-taken");
    timeTaken.innerHTML = `${item.time}`;

    productDetails.appendChild(timeTaken);

    //button
    const addBtn = document.createElement("button");
    addBtn.classList.add("add-food-btn");
    const addImage = document.createElement("img");
    addImage.setAttribute("src", "images/kitchen-section-images/iconoir_add-to-cart.png");
    addImage.setAttribute("alt", "add-btn");

    addBtn.appendChild(addImage);
    productDetails.appendChild(addBtn);

    
});

//################################################# modal handling #################################################
const body = document.querySelector("body");
const cartModalOpenBtn = document.getElementById('open-cart-modal');
const cartModalContainer = document.getElementById('cart-modal-container');
const cartModalCloseBtn = document.getElementById("close-cart-modal");

cartModalOpenBtn.addEventListener('click', () => {
    cartModalContainer.classList.add('show');
    body.style.overflow = "hidden";
    
});

cartModalCloseBtn.addEventListener('click', () => {
    cartModalContainer.classList.remove('show');
    body.style.overflow = "auto";
});


const requestDishBtn = document.getElementById("request-dish-open-modal");
const cancelDishBtn = document.getElementById("request-dish-close-modal");
const submitDishBtn = document.getElementById("response-submitted-close-modal");
const requestDishModalContainer = document.getElementById("request-dish-modal-container");

requestDishBtn.addEventListener('click', () => {
    requestDishModalContainer.classList.add('show');
    body.style.overflow = "hidden";
    
});

cancelDishBtn.addEventListener('click', () => {
    requestDishModalContainer.classList.remove('show');
    body.style.overflow = "auto";
});

submitDishBtn.addEventListener('click', () => {
    requestDishModalContainer.classList.remove('show');
    body.style.overflow = "auto";
});

const foodVideo = document.getElementById("vdo1");

const playVdoBtn = document.getElementById("playVdoBtn");

playVdoBtn.addEventListener("click", () => {
    foodVideo.play();
    playVdoBtn.style.display = "none";
})

foodVideo.addEventListener("click", () => {
    foodVideo.pause();
    playVdoBtn.style.display = "block";

})



