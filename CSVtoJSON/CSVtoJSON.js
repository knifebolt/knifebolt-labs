var CSVtoJSON = {
	Init: function(){
	
	},
	GetJSON: function (csv){
		var JSON = [];
		
		//todo: look for all groups of double quotes with an odd count above 3
		
		//replace all instances of ,""""" and """"", """""/n
		//zdblqtz is a placeholder for double quotes that should never occur in your source text
		csv = csv.replace(/,"""""/g, ",\"zdblqtzzdblqtz")
				.replace(/""""",/g, ",\"zdblqtzzdblqtz\",")
				.replace(/"""""(\r\n|\r|\n)/g,"zdblqtzzdblqtz\r");
		
		//replace all instances of ,""" and """, """/n 
		csv = csv.replace(/,"""/g, ",\"zdblqtz")	//double quotes at beginning of cell
				.replace(/""",/g, "zdblqtz\",")		//double quotes at end of cell	
				.replace(/"""(\r\n|\r|\n)/g,"zdblqtz\"\r")	//double quotes at end of line
				csv.replace(/"""/g, "\"zdblqtz")	//double quotes at beginning of line
		
		//replace all double double quotes
		csv = csv.replace(/""/g, "zdblqtz");
		
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
				thisRow.push(CSVtoJSON.FixCellDoubleQuotes(thisCell));
				rows.push(thisRow);
				
				thisCell = "";
				thisRow = [];
			}
			
			//if we are not between quotes and the current character is a comma, add cell to this row and clear this cell
			else if (!betweenDoubleQuotes && csv[i] == ','){
				thisRow.push(CSVtoJSON.FixCellDoubleQuotes(thisCell));
				thisCell = "";
			}
			
			//else add current character to this cell
			else {
				thisCell += csv[i];
			}
			
		}
		
		JSON = rows;
		
		//if we have multiple rows, assume the first row is headers
		if (rows.length > 1){
			
			JSON = [];
			
			var keys = rows[0];
			
			for (let i = 1; i < rows.length; i++) {
				var thisObject = {};
				
				for (let j = 0; j < rows[i].length; j++) {
					thisObject[keys[j]] = rows[i][j];
				}
				JSON.push(thisObject);
			}
			
		}
		
		return JSON;
	},
	
	FixCellDoubleQuotes: function (cell){
		
		//if our cell is surrounded by double quotes, remove them
		if (cell[0] !== undefined && cell[0] == '"' && cell[cell.length-1] == '"'){
			cell = cell.slice(1,-1);
			cell = cell.replace(/zdblqtz/g,'"');
		}
		
		//if our cell is a number without a leading zero, change it to a number
		else if (!isNaN(cell) && cell[0] != undefined && cell[0] != "0"){
			cell = Number(cell);
		}

		else {
			cell = cell.replace(/zdblqtz/g,'"');
		}
		
		return cell;
	}
}
CSVtoJSON.Init();
