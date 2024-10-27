var CSVtoJSON = {
	Init: function(){
	
	},
	GetJSON: function (csv, options){
		
		var JSON = [];
		
		//replace \r\n with \n
		csv = csv.replace(/\r\n/g, "\n");
		
		//replace all carriage returns
		var rows = [];
		var betweenDoubleQuotes = false;
		var thisRow = [];
		var thisCell = new String();

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
			if (!betweenDoubleQuotes && (csv[i] == "\n" || csv[i] == "\r")){
				//cast numbers as numbers unless they have a leading zero
				if (!isNaN(thisCell) && thisCell[0] != undefined && thisCell[0] != "0"){
					thisCell = Number(thisCell);
				}
				thisRow.push(thisCell);
				rows.push(thisRow);
				
				thisCell = new String();
				thisRow = [];
			}
			
			//if we are not between quotes and the current character is a comma, add cell to this row and clear this cell
			else if (!betweenDoubleQuotes && csv[i] == ','){
				
				//cast numbers as numbers unless they have a leading zero
				if (!isNaN(thisCell) && thisCell[0] != undefined && thisCell[0] != "0"){
					thisCell = Number(thisCell);
				}
				thisRow.push(thisCell);
				thisCell = new String();
			}
			
			//else add current character to this cell, unless current character is an escaped double quote which would already be added
			else if (!isEscapedDoubleQuote && csv[i] != '"'){
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
		
		//check if we have an options object with cells to split and strings to split them on
		if (options != undefined && options.Splits != undefined){
			for (let a = 0; a < options.Splits.length; a++) {
				if (options.Splits[a].SplitFields != undefined && options.Splits[a].SplitOnString != undefined) {
					JSON = CSVtoJSON.SplitFields(JSON,options.Splits[a].SplitFields,options.Splits[a].SplitOnString)
				}
			}
		}
		
		return JSON;
	},
	
	//for an exact match field name, split its contents on a provided string
	SplitFields: function (JSON,fields,splitOnString){
		var splitFields = fields.split(',');
			
		//loop over field names, then loop over contents of that field in each row
		for (let i = 0; i < splitFields.length; i++) {			
			for (let j = 0; j < JSON.length; j++) {
				if (JSON[j][splitFields[i]] != undefined){
					JSON[j][splitFields[i]] = JSON[j][splitFields[i]].split(splitOnString);
				
					//trim empty spaces from the split out field, remove elements which are empty string if they are not the first element
					var updatedArray = [];
					updatedArray.push(JSON[j][splitFields[i]][0]);
					
					//loop over new child array to trim contents and remove empty members (mainly from trailing carriage returns)
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
}
CSVtoJSON.Init();
