const loadFood = () => {
    let inputText = "Potato";
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`
     console.log("url value "+url);
    fetch(url)
        .then(res => res.json())
        .then(data => showMeals(data.meals))
        .catch(error => console.log('Error: ', error));
}

loadFood();

const showMeals = (meals) => {
    // console.log('Data is: ', meals);
    let container = document.getElementById("result-container");
    container.innerHTML = '';
    meals.forEach(meal => {
        let mealCard = document.createElement('div');    
        mealCard.classList = 'card card-compact bg-base-100 shadow-xl';
        
        mealCard.innerHTML = `
            <figure>
                <img src=${meal.strMealThumb} alt="Image of ${meal.strMeal}" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">${meal.strMeal}</h2>
                <p title="${meal.strInstructions}" >${meal.strInstructions.slice(0,200)}...</p>
            </div>   
        `;
    container.appendChild(mealCard);
    });
}
