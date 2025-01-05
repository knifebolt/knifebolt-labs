var ColorPicker = {

	CurrentTarget: null,
	
	Options: null,
	
	HTML: `<div id="color-picker">
		<table id="color-table"><thead></thead><tbody></tbody></table>
		<table id="selected-gradient"><tbody></tbody></table>
		<table id="outputs">
			<tr><td><div id="selected-block">&nbsp;</div></td></tr>
			<tr><td><input id="hex-value" type="text" value="#FFFFFF"><br><input id="rgb-value" type="text" value="255,255,255"></td></tr>
			<tr><td><input id="select-color" type="submit" value="SELECT"/>
		</table>
		</div>
	`,
	
	Style: `
		table#color-table,#selected-gradient {
		border-collapse: collapse;
		}
		#color-table > tbody > tr > td,#selected-gradient > tbody > tr > td{
			height: 8px;
			width: 15px;
		}
		#color-table > thead > tr > td {
			height: 12px;
			width: 15px;
		}
		
		#selected-gradient {
			margin-left: 3px;
		}
		
		#color-table > thead {
			display: block;
			margin-bottom: 6px;
		}
		
		#color-table > tbody > tr > td:hover,#color-table > thead> tr > td:hover,#selected-gradient > tbody > tr > td:hover {
			cursor: pointer;
			outline: 2px solid yellow;

		}
		#color-table,#selected-gradient,#outputs,#bw-table {
			display: inline-block;
		}
		#selected-block {
			display: inline-block;
			background: white;
			vertical-align: top;
			height: 67px;
			width: 83px;
			border-radius: 3px;
			margin-bottom: -3px;
		}
		#color-picker {
			background-color:#BFBFBF;
			padding: 8px;
			width: fit-content;
			border-radius: 4px;
			padding-left: 11px;
			position: fixed;
		}

		#hex-value,#rgb-value {
			width: 77px;
			border: none;
			outline: none;
			padding: 3px;
			margin-top: 4px;
			border-radius: 2px;
			background-color: #DFDFDF;

		}
		#select-color {
			width: 83px;
			border: none;
			border-radius: 3px;
			padding: 7px;
			cursor: pointer;
			background: #919191;
			color: white;
			font: 12px Arial;
			margin-bottom: -3px;
		}
		#select-color:hover {
			background: #A7A7A7;
		}
	`,

	CoreColors: [
		
		{
			"Name":	"Red",
			"RGB": "255,0,0",
			"Red":	255,
			"Green": 0,
			"Blue": 0
		},
		{
			"Name":	"Red-Orange",
			"RGB":	"255,63,0",
			"Red":	255,
			"Green": 63,
			"Blue": 0
		},
		{
			"Name":	"Orange",
			"RGB":	"255,127,0",
			"Red":	255,
			"Green": 127,
			"Blue": 0
		},
		{
			"Name":	"Orange-Yellow",
			"RGB":	"255,191,0",
			"Red":	255,
			"Green": 191,
			"Blue": 0
		},
		{
			"Name":	"Yellow",
			"RGB":	"255,255,0",
			"Red":	255,
			"Green": 255,
			"Blue": 0
		},
		{
			"Name":	"Yellow-Yellow-Green",
			"RGB":	"191,255,0",
			"Red":	191,
			"Green": 255,
			"Blue": 0
		},
		{
			"Name":	"Yellow-Green",
			"RGB":	"127,255,0",
			"Red":	127,
			"Green": 255,
			"Blue": 0
		},
		{
			"Name":	"Yellow-Green-Green",
			"RGB":	"63,255,0",
			"Red":	63,
			"Green": 255,
			"Blue": 0
		},
		{
			"Name":	"Green",
			"RGB":	"0,255,0",
			"Red":	0,
			"Green": 255,
			"Blue": 0
		},
		{
			"Name":	"Green-Blue-Green",
			"RGB":	"0,255,63",
			"Red":	0,
			"Green": 255,
			"Blue": 63
		},
		{
			"Name":	"Blue-Green",
			"RGB":	"0,255,127",
			"Red":	0,
			"Green": 255,
			"Blue": 127
		},
		{
			"Name":	"Blue-Green-Teal",
			"RGB":	"0,255,191",
			"Red":	0,
			"Green": 255,
			"Blue": 191
		},
		{
			"Name":	"Teal",
			"RGB":	"0,255,255",
			"Red":	0,
			"Green": 255,
			"Blue": 255
		},
		{
			"Name":	"Teal-Turquoise",
			"RGB":	"0,191,255",
			"Red":	0,
			"Green": 191,
			"Blue": 255
		},
		{
			"Name":	"Turquoise",
			"RGB":	"0,127,255",
			"Red":	0,
			"Green": 127,
			"Blue": 255
		},
		{
			"Name":	"Turquois-Blue",
			"RGB":	"0,63,255",
			"Red":	0,
			"Green": 63,
			"Blue": 255
		},
		{
			"Name":	"Blue",
			"RGB":	"0,0,255",
			"Red":	0,
			"Green": 0,
			"Blue": 255
		},
		{
			"Name":	"Blue-Violet",
			"RGB":	"63,0,255",
			"Red":	63,
			"Green": 0,
			"Blue": 255
		},
		{
			"Name":	"Violet",
			"RGB":	"127,0,255",
			"Red":	127,
			"Green": 0,
			"Blue": 255
		},
		{
			"Name":	"Violet-Fuchsia",
			"RGB":	"191,0,255",
			"Red":	191,
			"Green": 0,
			"Blue": 255
		},
		{
			"Name":	"Fuchsia",
			"RGB":	"255,0,255",
			"Red":	255,
			"Green": 0,
			"Blue": 255
		},
		{
			"Name":	"Fuchsia-Fuchsia-Red",
			"RGB":	"255,0,191",
			"Red":	255,
			"Green": 0,
			"Blue": 191
		},
		{
			"Name":	"Fuchsia-Red",
			"RGB":	"255,0,127",
			"Red":	255,
			"Green": 0,
			"Blue": 127
		},
		{
			"Name":	"Fuchsia-Red-Red",
			"RGB":	"255,0,63",
			"Red":	255,
			"Green": 0,
			"Blue": 63
		},
	],
	
	Init: function (){
		
		document.querySelectorAll(".color-picker").forEach(function(el){
			el.addEventListener("click", function(e){
				ColorPicker.LaunchColorPicker(e.target);
			});
		});
	},
	


	LaunchColorPicker: function(targetElement,options){
		
		if (options != undefined){
			ColorPicker.Options = options;
		}
		ColorPicker.CurrentTarget = targetElement;
		
		var colorPicker = document.getElementById("color-picker");
		if (colorPicker != null) {
			colorPicker.remove();
		}
		var colorPickerStyle = document.getElementById("color-picker-style");
		if (colorPickerStyle != null){
			colorPickerStyle.remove();
		}
		
		document.body.insertAdjacentHTML("beforeEnd",ColorPicker.HTML);
		targetElement.after(document.getElementById("color-picker"));
		document.head.insertAdjacentHTML("beforeEnd","<style id='color-picker-style'>" + ColorPicker.Style + "</style>");
		
		if (ColorPicker.Options != null && ColorPicker.Options.Simplified != undefined && ColorPicker.Options.Simplified == true){
			$("#selected-gradient,#outputs").hide();
		}
		
		ColorPicker.RenderGrayRow();

		ColorPicker.RenderColorRow(191);
		ColorPicker.RenderColorRow(159);
		ColorPicker.RenderColorRow(127);
		ColorPicker.RenderColorRow(95);
		ColorPicker.RenderColorRow(63);
		ColorPicker.RenderColorRow(31);
		ColorPicker.RenderColorRow(0);
		ColorPicker.RenderColorRow(-31);
		ColorPicker.RenderColorRow(-63);
		ColorPicker.RenderColorRow(-95);
		ColorPicker.RenderColorRow(-127);
		ColorPicker.RenderColorRow(-159);
		ColorPicker.RenderColorRow(-191);
		
		ColorPicker.BindActions();
		
		document.querySelectorAll("[rgb='255,0,0']")[0].click();
	},
	
	RenderGrayRow:function() {
		
		var rgbCollection = "";
		var tdTemplate = '<td rgb="{{rgb}}" style="background-color: rgb({{rgb}});"></td>';
		
		for (let i = 0; i < 23; i++) {
			rgbCollection += tdTemplate.replace(/{{rgb}}/g, (255 - (i * 11)) + "," + (255 - (i * 11)) + "," + (255 - (i * 11)));
		}
		rgbCollection += tdTemplate.replace(/{{rgb}}/g, 0 + "," + 0 + "," + 0);
		document.querySelectorAll("#color-table > thead")[0].insertAdjacentHTML("beforeEnd","<tr class='gray-row'>" + rgbCollection + "</tr>");
	
	},
	
	RenderColorRow: function(incr) {
		
		var rgbCollection = "";
		var rgbDarkerCollection = "";
		var tdTemplate = '<td main-color="{{main-color}}" rgb="{{rgb}}" style="background-color: rgb({{rgb}});"></td>';
		
		for (let i = 0; i < ColorPicker.CoreColors.length; i++) {
		
			var red = ColorPicker.GetColorValue(ColorPicker.CoreColors[i].Red, incr);
			var green = ColorPicker.GetColorValue(ColorPicker.CoreColors[i].Green, incr);
			var blue = ColorPicker.GetColorValue(ColorPicker.CoreColors[i].Blue, incr);
		
			rgbCollection += tdTemplate.replace("{{main-color}}",ColorPicker.CoreColors[i].Name)
									.replace(/{{rgb}}/g,red + "," + green + "," + blue);
		}
		document.querySelectorAll("#color-table > tbody")[0].insertAdjacentHTML("beforeEnd","<tr>" + rgbCollection + "</tr>");
	},
	
	RenderSelectedGradient: function (r,g,b) {
	
		var step = 12;
		var rgbCollection = "";
		var trTemplate = '<tr><td rgb="{{rgb}}" style="background-color: rgb({{rgb}});"></td></tr>';
		
		//lighter
		for (let i = 0; i < 8; i++) {
			var red = ColorPicker.GetColorValue(r, 72 - (i * step));
			var green = ColorPicker.GetColorValue(g, 72 - (i * step));
			var blue = ColorPicker.GetColorValue(b, 72 - (i * step));
			rgbCollection += trTemplate.replace(/{{rgb}}/g, red + "," + green + "," + blue);
		}
		
		//darker
		for (let i = 2; i < 9; i++) {
			rgbCollection += trTemplate.replace(/{{rgb}}/g, (r - (i * step)) + "," + (g - (i * step)) + "," + (b - (i * step)));
		}
		document.querySelectorAll("#selected-gradient > tbody")[0].innerHTML = '';
		document.querySelectorAll("#selected-gradient > tbody")[0].insertAdjacentHTML("beforeEnd",rgbCollection);
	},
	
	RgbToHex(r, g, b) {
		return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	},
	
	HexToRgb(hex) {
		hex = hex.replace("#","");
		var bigint = parseInt(hex, 16);
		var r = (bigint >> 16) & 255;
		var g = (bigint >> 8) & 255;
		var b = bigint & 255;

		return r + "," + g + "," + b;
	},
	
	GetColorValue: function (rawValue,incr){
		var val = rawValue + incr;
		if (val > 255)
			val = 255;
			
		if (val < 0) 
			val = 0;
			
		return val;
	},
	
	CheckParentHierarchy: function (parent, child){
		let node = child.parentNode;
		
		if (parent == child){
			return true;
		}
 
		// keep iterating unless null
		while (node != null) {
			if (node == parent) {
				return true;
			}
			node = node.parentNode;
		}
        return false;
	},

	
	BindActions: function(){
		
		document.addEventListener("click",function(e) {

			if (document.getElementById("color-picker") != null &&
				ColorPicker.CurrentTarget != null &&
				e.target != ColorPicker.CurrentTarget &&
				!ColorPicker.CheckParentHierarchy(document.getElementById("color-picker"),e.target)){
				document.getElementById("color-picker").remove();
			}
		
		});
		document.getElementById("select-color").addEventListener("click",function(e){
			var hexColor = document.getElementById("hex-value").value;
			
			if (ColorPicker.CurrentTarget != null 
			&& ColorPicker.CurrentTarget.tagName.toLowerCase() == "input"
			&& ColorPicker.CurrentTarget.getAttribute('type') == 'text'
			){
				ColorPicker.CurrentTarget.value = hexColor;
				var event = new Event('change');
				ColorPicker.CurrentTarget.dispatchEvent(event);
			}
			document.getElementById("color-picker").remove();
		});
		
		document.getElementById("rgb-value").addEventListener("change",function(e){
			var rgb = e.target.value;
			document.getElementById("selected-block").style.backgroundColor = "rgb("+rgb+")";
			var rgbSplit = rgb.split(",")
			document.getElementById("hex-value").value = ColorPicker.RgbToHex(Number(rgbSplit[0]),Number(rgbSplit[1]),Number(rgbSplit[2])).toUpperCase();
		});
		
		document.getElementById("hex-value").addEventListener("change",function(e){
			var rgb = ColorPicker.HexToRgb(e.target.value);
			document.getElementById("rgb-value").value = rgb;
			document.getElementById("selected-block").style.backgroundColor = "rgb("+rgb+")";
		});
		
		
		
		document.querySelectorAll("#color-table > tbody > tr > td,#color-table > thead > tr > td").forEach(function(el){
			el.addEventListener("click", function(e){
				var rgb = e.target.getAttribute("rgb");
				document.getElementById("selected-block").style.backgroundColor = "rgb("+rgb+")";
				var rgbSplit = rgb.split(",")

				var hexColor = ColorPicker.RgbToHex(Number(rgbSplit[0]),Number(rgbSplit[1]),Number(rgbSplit[2])).toUpperCase();
				document.getElementById("hex-value").value = hexColor;
				document.getElementById("rgb-value").value = rgb;
				ColorPicker.RenderSelectedGradient(Number(rgbSplit[0]),Number(rgbSplit[1]),Number(rgbSplit[2]));
				
				if (ColorPicker.Options != null && ColorPicker.Options.Simplified != undefined && ColorPicker.Options.Simplified == true){
					//ColorPicker.CurrentTarget.value = hexColor;
					//var event = new Event('change');
					//ColorPicker.CurrentTarget.dispatchEvent(event);
					//document.getElementById("color-picker").remove();
				} else {
					
					//we can't bind this event until the selected gradient exists from the function in the line above
					document.querySelectorAll("#selected-gradient > tbody > tr > td").forEach(function(el){
						el.addEventListener("click", function(e){
							var rgb = e.target.getAttribute("rgb");
							document.getElementById("selected-block").style.backgroundColor = "rgb("+rgb+")";
							var rgbSplit = rgb.split(",")
							document.getElementById("hex-value").value = ColorPicker.RgbToHex(Number(rgbSplit[0]),Number(rgbSplit[1]),Number(rgbSplit[2])).toUpperCase();
							document.getElementById("rgb-value").value = rgb;
						});
					});
				}
			});
		});
		
	}
}
ColorPicker.Init();
