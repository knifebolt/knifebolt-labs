var JSONtoHTML = {
 
	Options: "",  
	SpanOpen: "",
	SpanClose: "",
   
	Init: function() {
   
	},
   
	GetHTML: function (jsonObj,options){
		var htmlOutput = JSONtoHTML.BuildHTML(jsonObj,options);
		return htmlOutput + JSONtoHTML.StaticStyle.replace(/[\r\n\t]/g, "");
	},
   
	//get html for a jsonObj object
	BuildHTML: function(jsonObj, options) {
				   
		if (options != undefined) {
			if (options.Spans != undefined && options.Spans){
				JSONtoHTML.SpanOpen = "<span>";
				JSONtoHTML.SpanClose = "</span>";
			}
		}

		var html = "";
	   
		//check if this jsonObj is an array
		if (Array.isArray(jsonObj)){   
			if (jsonObj.length > 0 && (typeof jsonObj[0] === 'object' && !Array.isArray(jsonObj[0]) && jsonObj[0] !== null)){
				html = JSONtoHTML.Get2DTable(jsonObj);
			} else {
				html = jsonObj.toString();
			}
		}
	   
		//check if this jsonObj is an object
		else if (typeof jsonObj === 'object' && !Array.isArray(jsonObj) && jsonObj !== null){
			html = JSONtoHTML.GetKeyValueTable(jsonObj);
		}
	   
		//if this jsonObj is not an object or an array it's just a value
		else {			   
			html = "";
			if (jsonObj != null) {
							html = jsonObj.toString();
			}
		}

		return html;
	},
   
	//get table
	Get2DTable: function(jsonObj) {
				   
		var tableHead = "";
		var tableBody = "";
	   
		//get our columns
		var columns = JSONtoHTML.GetDistinctKeys(jsonObj);
	   
		for (var i = 0; i < columns.length; i++) {
			tableHead += "<th>" + JSONtoHTML.SpanOpen + columns[i] + JSONtoHTML.SpanClose + "</th>"
		}
	   
		//get our rows and values
		for (var i = 0; i < jsonObj.length; i++) {
			var thisRow = "";
		   
			//loop over our keys
			for (var j = 0; j < columns.length; j++) {								   
				if (jsonObj[i][columns[j]] != undefined && jsonObj.length > 0) {
					thisRow += "<td>" + JSONtoHTML.SpanOpen + JSONtoHTML.BuildHTML(jsonObj[i][columns[j]]) + JSONtoHTML.SpanClose + "</td>";
				} else {
					thisRow += "<td>" + JSONtoHTML.SpanOpen +"--" + JSONtoHTML.SpanClose + "</td>";
				}
			}                                              
			tableBody += "<tr>" + thisRow + "</tr>";
		}                              
		return "<table class='j2h-table'><thead><tr>" + tableHead + "</tr></thead><tbody>" + tableBody + "</tbody></table>";
	},
   
	//get key value list
	GetKeyValueTable: function(jsonObj) {
   
		var tableBody = "";
	   
		for (const key in jsonObj) {
			if (jsonObj.hasOwnProperty(key)) {
				tableBody += "<tr><td class='key-td label'>" + JSONtoHTML.SpanOpen + key +  JSONtoHTML.SpanClose + "</td><td class='value-td'>" + JSONtoHTML.SpanOpen + JSONtoHTML.BuildHTML(jsonObj[key]) +  JSONtoHTML.SpanClose + "</td></tr>";
			}
		}
		return "<table><tbody>" + tableBody + "</tbody></table>";
	},
   
	//get distinct keys
	GetDistinctKeys: function (jsonObj) {
		var keys = [];
	   
		for (var n = 0; n < jsonObj.length; n++) {
			for (const key in jsonObj[n]) {
				if (jsonObj[n].hasOwnProperty(key)) {
					keys.push(key);
				}
			}
		}
		return keys.filter((value, index, array) => array.indexOf(value) === index);
	},
   
	StaticStyle: `<style>
		.j2h-table {
		font-family: 'SegoeUI', 'Segoe UI';
		font-size: 13px;
		color: rgb(51, 51, 51);
		border-right: 1px solid rgb(216, 216, 216);
		border-left: 1px solid rgb(216, 216, 216);
		border-bottom: 1px solid rgb(216, 216, 216);
		white-space: nowrap;
		color: rgb(51, 51, 51);
		font-weight: normal;
		font-size: 14px;
		border-collapse: collapse;
		margin: 10px;
	}
	.j2h-table th,.key-td {
		color: black;
		cursor: pointer;
		text-align: left;
		padding: 5px;
		font-weight: bold;
	   
		border: 1px solid rgb(216, 216, 216);
		background-color: #f2f2f2;
	}
	.j2h-table td {
		border: 1px solid rgb(216, 216, 216);
		padding: 5px;
		background: white;
	}
	.j2h-table th {
		top: -2px;
		position: sticky;
	}
	</style>
	`
}
JSONtoHTML.Init();

