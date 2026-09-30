// ORDER FUNCTION

function orderFood(foodName) {

    alert(foodName + " added to your order!");

}


// CATEGORY FILTER

function filterFood(category) {

    let foods = document.querySelectorAll(".food-card");

    let buttons = document.querySelectorAll(".category");


    // Active button

    buttons.forEach(function(button) {
        button.classList.remove("active");
    });

    event.target.classList.add("active");


    // Filter food

    foods.forEach(function(food) {

        if (
            category == "all" ||
            food.classList.contains(category)
        ) {

            food.style.display = "block";

        } else {

            food.style.display = "none";

        }

    });

}


// SEARCH

let search = document.getElementById("search");

search.addEventListener("keyup", function() {

    let value = search.value.toLowerCase();

    let foods = document.querySelectorAll(".food-card");


    foods.forEach(function(food) {

        let name =
            food.querySelector("h3").innerText.toLowerCase();


        if (name.includes(value)) {

            food.style.display = "block";

        } else {

            food.style.display = "none";

        }

    });

});