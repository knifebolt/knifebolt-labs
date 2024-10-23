var CSVtoJSON = {
	Init: function(){
	
	},
	GetJSON: function (csv){
		var JSON = [];
		
		//todo: look for all groups of double quotes with an odd count above 3
		
		//replace all instances of ,""""" and """"", """""/n
		csv = csv.replace(/,"""""/g, ",\"[[doublequote]][[doublequote]]").replace(/""""",/g, ",\"[[doublequote]][[doublequote]]\",").replace(/"""""(\r\n|\r|\n)/g,"[[doublequote]][[doublequote]]\r");
		
		//replace all instances of ,""" and """, """/n
		csv = csv.replace(/,"""/g, ",\"[[doublequote]]").replace(/""",/g, ",\"[[doublequote]]\",").replace(/"""(\r\n|\r|\n)/g,"[[doublequote]]\r");
		
		//replace all double double quotes
		csv = csv.replace(/""/g, ",\"[|[doublequote]|]");
		
		//replace \r\n with \n
		csv = csv.replace(/\r\n/g, "\n");
		
		//replace all carriage returns
		var rows = [];
		var betweenDoubleQuotes = false;
		var thisRow = [];
		var thisCell = "";

		
		//break into 2d array
		for (let i = 0; i < csv.length; i++) {
			
			//if the current character is a double quote and we are not between double quotes, now we are
			if (csv[i] == '"' && betweenDoubleQuotes == false){
				betweenDoubleQuotes = true;
			}
			
			//if the current character is a double quote and we are between double quotes, we no longer are
			else if (csv[i] == '"' && betweenDoubleQuotes == true){
				betweenDoubleQuotes = false;
			}
			
			//if we are not between quotes and the current character is a newline, add cell to this row, add row to rows, and clear this row and this cell, 
			//also advance i to skip the next character
			if (!betweenDoubleQuotes && (csv[i] == "\n" || csv[i] == "\r")){
				thisRow.push(thisCell);
				rows.push(thisRow);
				
				thisCell = "";
				thisRow = [];
			}
			
			//if we are not between quotes and the current character is a comma, add cell to this row and clear this cell
			else if (!betweenDoubleQuotes && csv[i] == ','){
				thisRow.push(thisCell);
				thisCell = "";
			}
			
			//else add current character to this cell
			else {
				thisCell += csv[i];
			}
			
		}
		
		JSON = rows;
		
		return JSON;
	}
}
CSVtoJSON.Init();
