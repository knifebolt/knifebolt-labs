var CSVtoJSON = {
	Init: function(){
	
	},
	GetJSON: function (csv, options){
		
		var JSON = [];
		
		//todo: look for all groups of double quotes with an odd count above 3
		
		/*
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
		*/
		
		//replace \r\n with \n
		csv = csv.replace(/\r\n/g, "\n");
		
		//replace all carriage returns
		var rows = [];
		var betweenDoubleQuotes = false;
		var thisRow = [];
		var thisCell = '';

		
		//break into 2d array
		for (let i = 0; i < csv.length; i++) {
			
			var isEscapedDoubleQuote = false;
			
			//if the current character is a double quote and we are not between double quotes, now we are
			if (csv[i] == '"' && betweenDoubleQuotes == false){
				betweenDoubleQuotes = true;
			}
			
			//if we are between double quotes and this character and the next character are both double quotes, increment one extra and add our replace string
			else if (csv[i] == '"' && betweenDoubleQuotes == true && csv[i+1] != undefined && csv[i+1] == '"'){
				isEscapedDoubleQuote = true;
				thisCell += '"'
				i++;
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
			
			//else add current character to this cell, unless current character is an escaped double quote which would already be added
			else if (!isEscapedDoubleQuote){
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
		
		if (options != undefined && options.Splits != undefined){
			for (let a = 0; a < options.Splits.length; a++) {
				if (options.Splits[a].SplitFields != undefined && options.Splits[a].SplitOnString != undefined) {
					JSON = CSVtoJSON.SplitFields(JSON,options.Splits[a].SplitFields,options.Splits[a].SplitOnString)
				}
			}
		}
		
		
		return JSON;
	},
	
	SplitFields: function (JSON,fields,splitOnString){
		var splitFields = fields.split(',');
				
		for (let i = 0; i < splitFields.length; i++) {
			
			for (let j = 0; j < JSON.length; j++) {
				if (JSON[j][splitFields[i]] != undefined){
					JSON[j][splitFields[i]] = JSON[j][splitFields[i]].split(splitOnString);
				
					//trim empty spaces from the split out field, remove elements which are empty string if they are not the first element
					var updatedArray = [];
					updatedArray.push(JSON[j][splitFields[i]][0]);
					for (let a = 0; a < JSON[j][splitFields[i]].length; a++) {
						JSON[j][splitFields[i]][a] = JSON[j][splitFields[i]][a].trim();
						
						if (a != 0 && JSON[j][splitFields[i]][a] != ""){
							updatedArray.push(JSON[j][splitFields[i]][a]);
						}
					}
					JSON[j][splitFields[i]] = updatedArray;
				}
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
