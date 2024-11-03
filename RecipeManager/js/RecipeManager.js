function asyncTimeout (ms) {
  return new Promise(function(resolve){
    setTimeout(resolve, ms);
  });
};

var RecipeManager = {
	
	Init: function (){
		
		RecipeManager.BindFunctions();
		console.log("did this here");
		document.head.insertAdjacentHTML( 'beforeend', RecipeManager.StyleTag.replace(/[\r\n\t]/g, ""));
	},
	
	LiquidParts: 32,
	
	RenderMenu: async function (){
		for (let m = 0; m < Recipes.length; m++) {
			var thisGlass =  "<div id='glassDiv" + m + "'><div>";
			$("#recipeMenu").append(thisGlass);
			RecipeManager.RenderCocktail(Recipes[m],"#glassDiv"+m,false)
		}
	},
	
	DropElement: async function (selector,intHeightInPx){
		for (let z = intHeightInPx -1; z >= 0; z = z-2) {
			$(selector).css("transform","translateY(-"+ z +"px)");
			await asyncTimeout(0.1);
		}
	},
	
	RenderCocktail: async function (recipe,glassDivSelector,pour){
		
		var allGarnishes = `#apple-slice-flesh,
		#apple-slice-skin,
		#celery-stalk,
		#celery-leaves,
		#strawberry-body,
		#strawberry-leaf,
		#red-chili-body,
		#red-chili-stem,
		#speared-grapes,
		#speared-grapes-pick,
		#stemmed-grapes,
		#stemmed-grape-stem,
		#speared-berries,
		#speared-berries-pick,
		#mint-sprig-stem,
		#mint-sprig-stem-2,
		#mint-sprig-leaves,
		#onion-crown,
		#onion-body,
		#onion-pick,
		#mint-leaf-1,
		#mint-leaf-1-stem,
		#mint-leaf-2,
		#mint-leaf-2-stem,
		#pineapple-wedge-flesh,
		#pineapple-wedge-skin,
		#kit-kat-piece,
		#ice-cube-1,
		#ice-cube-2,
		#citrus-slice,
		#citrus-wedge,
		#citrus-wedge-outline,
		#cherry-fruit,
		#cherry-stem,
		#olive-pick,
		#olive-eye,
		#olive-body,
		#coffee-beans,
		#whipped-cream,
		#peach-slice-flesh,
		#peach-slice-skin,
		#peach-slice-center`;
		
		$(glassDivSelector).find(allGarnishes).hide();
		
		$(glassDivSelector + ",#ingredientsSpan").empty();
		
		
		
		if (recipe.Glass =="Glass stemmed mug" 
			
		){
			$(glassDivSelector).append(Glasses[recipe.Glass]);
		} 
		else if (recipe.Glass.toLowerCase() == "clay mug"){
			$(glassDivSelector).append(Glasses["Clay mug"]);
			var glassSelGlass = $(glassDivSelector).find("#glass");
			glassSelGlass[0].style.setProperty('fill', '#cc5302', 'important');
		}
		else if (recipe.Glass.toLowerCase() == "copper mug"){
			$(glassDivSelector).append(Glasses["Copper mug"]);
			var glassSelGlass = $(glassDivSelector).find("#glass");
			glassSelGlass[0].style.setProperty('fill', '#fa883c', 'important');
		}
		else if (recipe.Glass.toLowerCase() == "julep"){
			$(glassDivSelector).append(Glasses["Julep"]);
			var glassSelGlass = $(glassDivSelector).find("#glass");
			glassSelGlass[0].style.setProperty('fill', '#a4a6a6', 'important');
		}
		
		else {
			$(glassDivSelector).append(Glasses["Rocks"]);
		}
		
		$(glassDivSelector).find("[id*='Liquid-']").css("fill","transparent");
		$(glassDivSelector).find("[id*='Liquid-']").css("stroke","transparent");
		
		$("#titleSpan").text(recipe.Name);
		$("#directionsSpan").text(recipe.Directions);
		
		$(glassDivSelector).find("#Ice-cube-1,#Ice-cube-2,#Mint-leaf1,#Mint-leaf2,#Half-wedge,#Full-wedge,#Strawberry-body,#Strawberry-Leaf,#Olive-body,#Olive-eye,#Olive-pick,#Cherry").hide();
		
		if (recipe.Ice){
			$(glassDivSelector).find("[id*='ice-cube']").show();
			if (pour){
				await RecipeManager.DropElement($(glassDivSelector).find("[id*='ice']"),40);
			} 
		}

		//get ingredients with oz
		var ingredientsOz = [];
		var totalOz = 0;
		var ingredientTemplateHTML = "<div class='ingredient'>" +
					"<span class='ingredient-key-color' style='background-color:{{color}};'>&nbsp;</span>" +
					"<span class='ingredient-name'>{{name}}</span></div>";
		
		//for ingredients measured in liquid oz get oz total and add to array
		for (let i = 0; i < recipe.Ingredients.length; i++) {
			
			var thisIngredientHTML = ingredientTemplateHTML.replace("{{name}}",recipe.Ingredients[i])
										.replace("{{color}}",RecipeManager.GetIngredientColor(recipe.Ingredients[i].split(" - ")[1]));
			
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
							
				
				totalOz += Number(thisIngredient.split(" - ")[0]);
				ingredientsOz.push(thisIngredient);
			}
		}
		
		currentPartToFill = 1;
		
		ingredientsOz = ingredientsOz.reverse();
		
		for (let i = ingredientsOz.length -1; i >=0; i--) {
			
			//get number of ounces for this ingredient
			var ingredientName = ingredientsOz[i].split(" - ")[1];
			var oz = ingredientsOz[i].split(" - ")[0].replace(" oz","").replace("oz","");
			
			//get number of parts to fill 
			//formula: (this ingredient oz * total number of parts in image)/total oz in drink, rounded to nearest whole number
			var partsToFill = Math.round((Number(oz) * RecipeManager.LiquidParts)/totalOz);
			if (pour){
				await RecipeManager.FillLiquidParts(currentPartToFill,(currentPartToFill+partsToFill),ingredientName,glassDivSelector,pour);
			} else {
				RecipeManager.FillLiquidParts(currentPartToFill,(currentPartToFill+partsToFill),ingredientName,glassDivSelector,false);
			}
			
			currentPartToFill = currentPartToFill+partsToFill;
		}
		
		var garnishes = recipe.Garnishes;
		
		
		
		if (garnishes != "" && garnishes.length > 0){
			for (let i = 0; i < garnishes.length; i++) {
				RecipeManager.ShowGarnish(garnishes[i],glassDivSelector,pour);
			}
		}
		/*
		var adders = ["Cherry","Olive","Mint","Strawberry"]
		for (let i = 0; i < adders.length; i++) {
			if (recipe[adders[i]]){
				$(glassDivSelector).find("[id*='" + [adders[i]] + "']").show();
				if (pour){
					await RecipeManager.DropElement($(glassDivSelector).find("[id*='" + [adders[i]] + "']"),40);
				} 
			}
		}

		
		if (recipe.Garnish.toLowerCase().indexOf("lemon") > -1){
			$(glassDivSelector).find("#Full-wedge").show().css("fill","yellow").css("stroke","yellow");
			if (pour){
				await RecipeManager.DropElement($(glassDivSelector).find("#Full-wedge"),40);
			} 
		}
		
		if (recipe.Garnish.toLowerCase().indexOf("lime") > -1){
			$(glassDivSelector).find("#Full-wedge").show().css("fill","green").css("stroke","green");
			if (pour){
				await RecipeManager.DropElement($(glassDivSelector).find("#Full-wedge"),40);
			} 
		}
		
		if (recipe.Garnish.toLowerCase().indexOf("orange") > -1){
			$(glassDivSelector).find("#Half-wedge").show().css("fill","orange").css("stroke","orange");
			if (pour){
				await RecipeManager.DropElement($(glassDivSelector).find("#Half-wedge"),40);
			} 
		}
		*/
		
		
	},
	
	ShowGarnish: async function(garnishName,glassDivSelector,isPour){
		var garnish = {};
		
		for (let g = 0; g < Garnishes.length; g++) {
			if (garnishName.toLowerCase() == Garnishes[g].Name.toLowerCase()){
				garnish =  Garnishes[g];
			}
		}
		if (garnish.ColorChange != undefined && garnish.ColorChange != "" && garnish.ColorChange.indexOf(",") > -1){
			var garnishSelector = garnish.ColorChange.split(',')[0];
			var garnishNewColor = garnish.ColorChange.split(',')[1];
			$(glassDivSelector).find(garnish.ColorChange.split(',')[0]).css("fill",garnishNewColor).css("stroke",garnishNewColor);
			
		}
		
		if (garnish.Name != undefined && garnish.Selector != undefined) {
			$(glassDivSelector).find("[id*='" + garnish.Selector + "']").show();
			if (isPour){
				await RecipeManager.DropElement($(glassDivSelector).find("[id*='" + garnish.Selector + "']"),40);
			}
		}
	},
	
	FillLiquidParts: async function (start,end,ingredientName,glassDivSelector,pour){
		//get ingredient color
		
		var ingredientColor = RecipeManager.GetIngredientColor(ingredientName);
		
		for (let z = start; z < end; z++) {
			if (pour){
				await asyncTimeout(25);
			}
			$(glassDivSelector).find("#Liquid-" + z).css("fill",ingredientColor);
			$(glassDivSelector).find("#Liquid-" + z).css("stroke",ingredientColor);
		}
	},
	
	GetIngredientColor: function(ingredientName){
		var ingredientColor = "black";
		if (ingredientName != undefined){
			for (let z = 0; z < IngredientColors.length; z++) {
				if (IngredientColors[z].Name.toLowerCase() == ingredientName.toLowerCase()){
					ingredientColor = IngredientColors[z].Color;
				}
			}
			
		}
		return ingredientColor;
	},
	
	BindFunctions: function(){
		
	},
	
	StyleTag: `<style id='recipeManagerStyle'>
			#recipeDiv,#recipeMenu {
			background: black;
			color: white;
			font-size: 25px;
			font-family: Arial;
		}
		#recipeDiv {
			width: 50vw;
		}
		#glass {
			fill: white !important;
			stroke: black !important;
			stroke-width: 4 !important;
		}
		#glassDiv,#recipeMenu,#recipeDiv {
			display: inline-block;
		}
		#ingredientsDiv {
			display: inline-block;
			vertical-align: top;
		}
		span.ingredient-key-color {
			min-width: 50px !important;
			display: inline-block;
		}
		.ingredient {
			padding: 5px;

		}
		span.ingredient-name {
			padding-left: 10px;
		}
		span#ingredientsSpan {
			margin-top: 50px;
			display: inline-block;
		}
		#recipeDiv {
			margin: 20px;
		}
		[id*='Liquid-']{
			stroke-width: 5 !important;
		}
		#recipeMenu {
			vertical-align: top;
			padding-right: 50px;
			float: right;
			overflow-y: scroll;
			height: 600px;
			margin: 20px;
		}
		span#ingredientsSpan {
			font-size: 20px;
		}

		#recipeMenu > [id*='glassDiv'] > svg:hover{
			background: #404040;
			border-radius: 10px;
			cursor: pointer;
		}
		#recipeMenu > [id*='glassDiv'] > svg:active{
			background: gray;

		}
		#Ice-cube-1,#Ice-cube-2{
			stroke-width: 2 !important;
			opacity: 0.8 !important;
		}
		#apple-slice-flesh,
		#apple-slice-skin,
		#celery-stalk,
		#celery-leaves,
		#strawberry-body,
		#strawberry-leaf,
		#red-chili-body,
		#red-chili-stem,
		#speared-grapes,
		#speared-grapes-pick,
		#stemmed-grapes,
		#stemmed-grape-stem,
		#speared-berries,
		#speared-berries-pick,
		#mint-sprig-stem,
		#mint-sprig-stem-2,
		#mint-sprig-leaves,
		#onion-crown,
		#onion-body,
		#onion-pick,
		#mint-leaf-1,
		#mint-leaf-1-stem,
		#mint-leaf-2,
		#mint-leaf-2-stem,
		#pineapple-wedge-flesh,
		#pineapple-wedge-skin,
		#kit-kat-piece,
		#ice-cube-1,
		#ice-cube-2,
		#citrus-slice,
		#citrus-wedge,
		#citrus-wedge-outline,
		#cherry-fruit,
		#cherry-stem,
		#olive-pick,
		#olive-eye,
		#olive-body,
		#coffee-beans,
		#whipped-cream,
		#peach-slice-flesh,
		#peach-slice-skin,
		#peach-slice-center
		
		{
			display: none;
		}

		/* width */
		::-webkit-scrollbar {
		  width: 8px;
		}

		/* Track */
		::-webkit-scrollbar-track {
		  background: #f1f1f1;
		  border-radius: 4px;
		  opacity: 0.5;
		}

		/* Handle */
		::-webkit-scrollbar-thumb {
		  background: #888;
		  border-radius: 4px;
		}

		/* Handle on hover */
		::-webkit-scrollbar-thumb:hover {
		  background: #555;
		}
	
	</style>`
	
}
RecipeManager.Init();


async function testAsync(){
console.log("first");
await asyncTimeout(1000);
console.log("second");
}
