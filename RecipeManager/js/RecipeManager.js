var Recipes = [

	{
		Name: "Manhattan",
		Ingredients: [
			"Whiskey - 2oz",
			"Red Vermouth - 0.75oz",
			"Bitters - 1 dash",
		],
		Garnish: "Olive",
		Directions: "Pour all ingredients into shaker with ice cubes, stir, strain into glass",
		Cherry: true,
		Olive: false,
		Glass: "Martini",
		Ice: false,
	},
	
	{
		Name: "Daiquiri",
		Ingredients: [
			"White Rum - 1.5oz",
			"Lime Juice - 1oz",
			"Simple Syrup - 0.5oz",
			"Lime slice"
		],
		Garnish: "Lime slice",
		Directions: "Pour all ingredients into shaker with ice cubes, stir, strain into glass",
		Cherry: false,
		Olive: false,
		Glass: "Martini",
		Ice: false,
	},
	
	{
		Name: "Martini",
		Ingredients: [
			"Gin - 2oz",
			"Dry Vermouth - 1oz",
			"Bitters - 1 dash",
		],
		Garnish: "Olive",
		Directions: "Pour all ingredients into shaker with ice cubes, stir, strain into glass",
		Cherry: false,
		Olive: true,
		Glass: "Martini",
		Ice: false,
	},
	
	{
		Name: "Gimlet",
		Ingredients: [
			"Gin - 2oz",
			"Simple Syrup - 0.75oz",
			"Lime Juice - 0.75 dash",
		],
		Garnish: "Lime slice",
		Directions: "Pour all ingredients into shaker with ice cubes, stir, strain into glass",
		Cherry: false,
		Olive: false,
		Glass: "Martini",
		Ice: false,
	},
	
	{
		Name: "Cosmopolitan",
		Ingredients: [
			"Citrus Vodka - 1.5oz",
			"Cranberry Juice - 1oz",
			"Cointreau - 0.5oz",
			"Lime Juice - 0.5oz",
		],
		Garnish: "Lime Slice",
		Directions: "Pour all ingredients into mixing glass with ice cubes, shake, strain into glass",
		Cherry: false,
		Olive: false,
		Glass: "Martini",
		Ice: false,
	},
	{
		Name: "Mojito",
		Ingredients: [
			"White Rum - 2oz",
			"Lime Juice - 0.75oz",
			"3 mint leaves",
			"Sugar - 2 teaspoons",
			"Soda water to fill",
			"Lime slice"
		],
		Garnish: "Lime Slice",
		Directions: "Muddle mint and sugar and lime juice in a shaking tin, add ice and rest of ingredients, shake to chill, strain into glass with ice, add soda water to fill",
		Cherry: false,
		Olive: false,
		Mint: true,
		Glass: "Highball",
		Ice: true,
	},
	{
		Name: "Tom Collins",
		Ingredients: [
			"Gin - 2oz",
			"Lemon Juice - 1oz",
			"Simple Syrup - 0.5oz",
			"Soda Water - 2oz",
			"Lemon slice"
		],
		Garnish: "Lemon Slice",
		Directions: "Add all ingredients into glass with ice and stir, add soda water to fill, add lemon slice and cherry",
		Cherry: true,
		Olive: false,
		Mint: false,
		Glass: "Highball",
		Ice: true,
	},
	{
		Name: "Gin and Tonic",
		Ingredients: [
			"Gin - 2oz",
			"Tonic Water - 4oz",
			"Ice to fill",
			"Lime slice"
		],
		Garnish: "Lime Slice",
		Directions: "Add ice and gin to glass, fill to top with tonic water, stir, add lime to garnish",
		Cherry: false,
		Olive: false,
		Mint: false,
		Glass: "Highball",
		Ice: true,
	},
	{
		Name: "Screwdriver",
		Ingredients: [
			"Vodka - 2oz",
			"Orange Juice - 4oz",
			"Ice to fill",
			"Orange slice"
		],
		Garnish: "Orange Slice",
		Directions: "Add vodka and orange juice to glass, stir, add ice to fill",
		Cherry: false,
		Olive: false,
		Glass: "Highball",
		Ice: true,
	},
	
	{
		Name: "Long Island Iced Tea",
		Ingredients: [
			"Vodka - .75oz",
			"White Rum - .75oz",
			"Silver Tequila - .75oz",
			"Gin - .75oz",
			"Triple Sec - .75oz",
			"Lemon Juice - 0.5oz",
			"Cola - 4oz",
			"Ice to fill",
			"Lemon slice"
		],
		Garnish: "Lemon slice",
		Cherry: false,
		Olive: false,
		Directions: "Add all ingredients, stir, add ice to fill",
		Glass: "Highball",
		Ice: true,
	},
	
	{
		Name: "Whiskey Sour",
		Ingredients: [
			"Whiskey - 1.5oz",
			"Lemon Juice - 1oz",
			"Simple Syrup - 0.75oz",
			"Orange slice",
			"Cherry"
		],
		Garnish: "Orange slice",
		Cherry: true,
		Olive: false,
		Directions: "Add whiskey, lemon juice, and simple syrup to glass, shake until chilled. Fill glass with ice cubes, add whiskey and cherry and orange slice garnish",
		Glass: "Rocks",
		Ice: true,
	},
	
	{
		Name: "Old Fashioned",
		Ingredients: [
			"Whiskey - 1.5oz",
			"1 Sugar cube",
			"Bitters - 2 dashes",
			"Water - 2 dashes",
			"Orange slice",
			"Cherry"
		],
		Garnish: "Orange slice",
		Cherry: true,
		Olive: false,
		Directions: "Add sugar cube to glass, soak with bitters, add water, muddle. Fill glass with ice cubes, add whiskey and cherry and orange slice garnish",
		Glass: "Rocks",
		Ice: true,
	},
	
	{
		Name: "White Russian",
		Ingredients: [
			"Vodka - 2oz",
			"Kahlua - 1oz",
			"Cream - 1oz"
		],
		Garnish: "",
		Cherry: false,
		Olive: false,
		Directions: "Stir vodka and Kahlua into glass over ice, float cream on top",
		Glass: "Rocks",
		Ice: true,
	},
	{
		Name: "Negroni",
		Ingredients: [
			"Gin - 1oz",
			"Campari - 1oz",
			"Red Vermouth - 1oz"
		],
		Garnish: "Orange slice",
		Cherry: false,
		Olive: false,
		Directions: "Stir into glass over ice, add orange slice garnish",
		Glass: "Rocks",
		Ice: true,
	},

]
var RecipeManager = {
	
	Init: function (){
		
		RecipeManager.BindFunctions();
		console.log("did this here");
		
	},
	
	LiquidParts: 32,
	
	RenderMenu: function (){
		for (let m = 0; m < Recipes.length; m++) {
			var thisGlass =  "<div id='glassDiv" + m + "'><div>";
			$("#recipeMenu").append(thisGlass);
			RecipeManager.RenderCocktail(Recipes[m],"#glassDiv"+m)
		}
	},
	
	RenderCocktail: function (recipe,glassDivSelector){
		
		$(glassDivSelector + ",#ingredientsSpan").empty();
		$(glassDivSelector).append(Glasses[recipe.Glass]);
		
		$(glassDivSelector).find("[id*='Liquid-']").css("fill","transparent");
		$(glassDivSelector).find("[id*='Liquid-']").css("stroke","transparent");
		
		$("#titleSpan").text(recipe.Name);
		$("#directionsSpan").text(recipe.Directions);
		
		
		$(glassDivSelector).find("#Ice-cube-1,#Ice-cube-2,#Mint-leaf1,#Mint-leaf2,#Half-wedge,#Full-wedge,#Strawberry-body,#Strawberry-Leaf,#Olive-body,#Olive-eye,#Olive-pick,#Cherry").hide();
		
		//get ingredients with oz
		var ingredientsOz = [];
		var totalOz = 0;
		var ingredientTemplateHTML = "<div class='ingredient'>" +
					"<span class='ingredient-key-color' style='background-color:{{color}};'>&nbsp;</span>" +
					"<span class='ingredient-name'>{{name}}</span></div>";
		
		//for ingredients measured in liquid oz get oz total and add to array
		for (let i = 0; i < recipe.Ingredients.length; i++) {
			
			var thisIngredientHTML = ingredientTemplateHTML.replace("{{name}}",recipe.Ingredients[i])
										.replace("{{color}}",RecipeManager.GetIngredientColor(recipe.Ingredients[i].split(" - ")[0]));
			
			$("#ingredientsSpan").append(thisIngredientHTML);
			
			
			
			//for ingredients measured in liquid oz
			if (recipe.Ingredients[i].indexOf("oz") > -1 && recipe.Ingredients[i].indexOf(" - ") > -1){
				var thisIngredient = recipe.Ingredients[i];
				thisIngredient = thisIngredient.replace(" 1/4",".25")
							.replace(" 1/2",".5")
							.replace(" 3/4",".75")
							.replace("1/4",".25")
							.replace("1/2",".5")
							.replace("3/4",".75")
							.replace(" oz","")
							.replace("oz","");
							
				
				totalOz += Number(thisIngredient.split(" - ")[1]);
				ingredientsOz.push(thisIngredient);
			}
		}
		
		currentPartToFill = 1;
		
		for (let i = 0; i < ingredientsOz.length; i++) {
			
			//get number of ounces for this ingredient
			var ingredientName = ingredientsOz[i].split(" - ")[0];
			var oz = ingredientsOz[i].split(" - ")[1].replace(" oz","").replace("oz","");
			
			//get number of parts to fill 
			//formula: (this ingredient oz * total number of parts in image)/total oz in drink, rounded to nearest whole number
			var partsToFill = Math.round((Number(oz) * RecipeManager.LiquidParts)/totalOz);
			
			RecipeManager.FillLiquidParts(currentPartToFill,(currentPartToFill+partsToFill),ingredientName,glassDivSelector);
			currentPartToFill = currentPartToFill+partsToFill;
		}
		
		var adders = ["Cherry","Ice","Olive","Mint","Strawberry"]
		
		for (let i = 0; i < adders.length; i++) {
			if (recipe[adders[i]]){
				$(glassDivSelector).find("[id*='" + [adders[i]] + "']").show();
			}
		}

		
		if (recipe.Garnish.toLowerCase().indexOf("lemon") > -1){
			$(glassDivSelector).find("#Full-wedge").show().css("fill","yellow").css("stroke","yellow");
		}
		
		if (recipe.Garnish.toLowerCase().indexOf("lime") > -1){
			$(glassDivSelector).find("#Full-wedge").show().css("fill","green").css("stroke","green");
		}
		
		if (recipe.Garnish.toLowerCase().indexOf("orange") > -1){
			$(glassDivSelector).find("#Half-wedge").show().css("fill","orange").css("stroke","orange");
		}
		
		
		
	},
	
	FillLiquidParts(start,end,ingredientName,glassDivSelector){
		//get ingredient color
		
		var ingredientColor = RecipeManager.GetIngredientColor(ingredientName);
		
		for (let z = start; z < end; z++) {
			$(glassDivSelector).find("#Liquid-" + z).css("fill",ingredientColor);
			$(glassDivSelector).find("#Liquid-" + z).css("stroke",ingredientColor);
		}
	},
	
	GetIngredientColor(ingredientName){
		var ingredientColor = "black";
		for (let z = 0; z < IngredientColors.length; z++) {
			if (IngredientColors[z].Name == ingredientName){
				ingredientColor = IngredientColors[z].Color;
			}
		}
		return ingredientColor;
	},
	
	BindFunctions: function(){
		
	}
	
}
RecipeManager.Init();