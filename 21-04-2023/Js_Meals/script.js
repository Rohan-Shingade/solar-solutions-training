$.ajax({
  type: "get", //type request you ar sending
	url: "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian",
	success: function (response) {
		
		for (var i=0; i<response.meals.length; i++) {
			var newItem = `<div class='col-md-3 m-2 shadow-lg p-3 mb-5 bg-body rounded'> 
				<p>${response.meals[i].strMeal}</p>
				<img src = ${response.meals[i].strMealThumb} class = 'img-fluid' />
				<p>${response.meals[i].idMeal}</p>
			</div>`

			$('#myItems').append(newItem);

		}

	},
	error: function (error) {
		console.log(error);
	},
});
