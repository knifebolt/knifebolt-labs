var Icons = {
	
	SVGs: [],
	CanEditAndInsert: true,
	IsMobile: false,
	
	Init: async function() {
		
		if (window.innerWidth < window.innerHeight){
			Icons.SwitchToMobileUI();
			Icons.IsMobile = true;
		}
		
		$("#overlay").hide();
		$("#icon-editor").hide();
		Icons.BindActions();
		clientSecret = new URLSearchParams(window.location.search).get('client-secret');
		
		if (clientSecret == null){
			
			Icons.CanEditAndInsert = false;
			$("#save-svg").hide();
			$("#delete-svg").hide();
			$(".keywords-input-div").hide();
			$("#is-frame").parent().hide();
			$("#download-js").hide();
			Icons.SVGs = SVGs;
		} else {
			clientID = new URLSearchParams(window.location.search).get('client-id');
			await Squidex.Init(clientID,clientSecret,"icons/icons");
			Icons.SVGs = await Squidex.GetRecords();
		}

		Icons.LoadIcons();
		
		
	},
	
	SwitchToMobileUI: function() {
		$("#title").hide();
		$("#topnav").css("height","8vh").css("top","0px").css("position","sticky").css("margin-top","-8px")
		$(".switch,#search,#add,#close-editor").css("zoom",2.75);
		$("#search").css("margin-right","10px");
		$("#icon-editor").css("width","90vw");
		$("#icons").css("text-align","center");
		$("#icons > svg").css("margin","20px");
		$("#icon-editor-table").css("zoom",2.5).css("top","-20px").css("position","relative");
	},
	
	LoadIcons: function() {
		
		var svgHtml = "";
		
		for (let i = 0; i < Icons.SVGs.length; i++) {
			if (eval("Icons.SVGs[" + i + "].data.name.iv") != undefined){
				Icons.SVGs[i].name = Icons.SVGs[i].data.name.iv;
			} else {
				Icons.SVGs[i].name = "";
			}
		}
		
		Icons.SVGs = Icons.SVGs.sortByValue("name");
		
		for (let i = 0; i < Icons.SVGs.length; i++) {
			var keywords = Icons.SVGs[i].data.name.iv + ",";
			if (Icons.SVGs[i].data.keywords.iv != undefined && Icons.SVGs[i].data.keywords.iv != null){
				keywords += Icons.SVGs[i].data.keywords.iv;
			}
			if (Icons.SVGs[i].data.svg.iv.indexOf("svg style=") > -1){
				svgHtml += Icons.SVGs[i].data.svg.iv.replace("<svg",'<svg name="' + Icons.SVGs[i].data.name.iv +'" record-id="' + Icons.SVGs[i].id + '" keywords=" ' + keywords + '"');
			} else {
				svgHtml += Icons.SVGs[i].data.svg.iv.replace("<svg",'<svg style="height:75px;width:75px;" viewBox="0 0 500 500" name="' + Icons.SVGs[i].data.name.iv +'" keywords="' + keywords + '" record-id="' + Icons.SVGs[i].id + '"');
			}
		}
		document.querySelectorAll("#icons")[0].insertAdjacentHTML("beforeEnd",svgHtml);
		document.querySelectorAll("#icon-loader")[0].remove();
		
		if (Icons.IsMobile){
			var svgIcons = document.querySelectorAll("#icons > svg");
			for (let i = 0; i < svgIcons.length; i++) {
				svgIcons[i].style.height = "18vw";
				svgIcons[i].style.width = "18vw";
				
			}
		}
		
		$("path").each(function(){
			var thisFillColor = $(this).css("fill");
			$(this).attr("original-fill",thisFillColor);
		});
	},
	
	DownloadJS: function() {
		var fileContent = "var SVGs = " + JSON.stringify(Icons.SVGs);
		
		//remove extra carriage returns
		fileContent = fileContent.replace(/  \n/g,"");
		
		var element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(fileContent));
		element.setAttribute('download',"SVGs.js");
		element.style.display = 'none';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
	},
	
	DownloadSVG: function() {

		//let users choose pixel size of svg
		var size = $("#size-input").val();
		
		if (size == null || size == 0 || size ==""){
			size = 75;
		}

		var fileName = $("#file-name").val();
		
		//remove extra svg attributes by using a template for svg + innerHTML
		var svgTagTemplate = '<svg style="height:{{size}}px;width:{{size}}px;" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" height="500" width="500" version="1.1"  id="{{name}}">';
		
		var svgTag = svgTagTemplate.replace("{{name}}",fileName).replace(/{{size}}/g,size);
		
		var svg = document.querySelectorAll("#selected-icon > svg")[0];
		
		//remove color-picker class from all paths
		$(svg).find("path").removeClass("color-picker");
		
		//remove stroke width from all paths
		$(svg).find("path").css("stroke-width",0);
		
		//remove metadata and defs tags
		$(svg).find("metadata,defs").remove();
		
		//remove sodipodi tag
		$(svg).find("sodipodi\\:namedview").remove()
		
		//remove inkscape connector
		$(svg).find("path").removeAttr("inkscape:connector-curvature");
		$(svg).find("g").removeAttr("inkscape:label").removeAttr("inkscape:groupmode");
		
		//strip and replace svg tags
		var fileContent = svgTag + svg.innerHTML + "</svg>";
		
		//remove extra carriage returns
		fileContent = fileContent.replace(/  \n/g,"");
		
		var element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(fileContent));
		element.setAttribute('download', fileName + ".svg");
		element.style.display = 'none';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
	},
	
	DownloadRaster: function() {
		var fileType = $("#file-type-select").val();
		var fileName = $("#file-name").val();
		var size = $("#size-input").val();
		if (size == null || size == 0 || size ==""){
			size = 75;
		}
		const output = {"name": fileName + "." + fileType, "width": size, "height": size}
		const svgElem = document.querySelectorAll("#selected-icon > svg")[0];
		const uriData = `data:image/svg+xml;base64,${btoa(new XMLSerializer().serializeToString(svgElem))}`
		const img = new Image()
		img.src = uriData
		img.onload = () => {
			const canvas = document.createElement("canvas");
			[canvas.width, canvas.height] = [output.width, output.height]
			const ctx = canvas.getContext("2d")

			if (fileType == "jpeg"){
				ctx.fillStyle = "white";
				ctx.fillRect(0, 0, canvas.width, canvas.height);
			}
			ctx.drawImage(img, 0, 0, output.width, output.height)
			
			const a = document.createElement("a")
			const quality = 3.0;
			a.href = canvas.toDataURL("image/" + fileType, quality)
			a.download = output.name
			a.append(canvas)
			a.click()
			a.remove()
		}
	},
	
	HandleFileSelect() {
		Icons.ClearForm();
		const input = document.getElementById('svg-upload');
		const file = input.files[0];
		const reader = new FileReader();
		reader.onload = function() {
			
			$("#entire-color").val("");
			$("#selected-icon").empty();
			const contents = reader.result;
			const fileName = file.name.replace(".SVG","").replace(".svg","").trim();
			
			var svgTagTemplate = '<svg style="height:{{height}}px;width:{{width}}px;" viewBox="{{viewbox}}" xmlns="http://www.w3.org/2000/svg" height="500" width="500" version="1.1"  id="{{name}}">';
			var height = 75;
			var width = 75;
			var viewBox = "0 0 500 500";
			
			
			if (contents.indexOf("height") > -1){
				height = contents.split('height="')[1].split('"')[0].replace("px","");
			}
			if (contents.indexOf("width") > -1){
				width = contents.split('width="')[1].split('"')[0].replace("px","");
			}
			if (contents.toLowerCase().indexOf("viewbox") > -1){
				viewBox = contents.toLowerCase().split('viewbox="')[1].split('"')[0];
			} 
			
			var svgTag = svgTagTemplate.replace("{{name}}",fileName)
									.replace("{{height}}",height)
									.replace("{{width}}",width)
									.replace("{{viewbox}}",viewBox);
			var svg = $.parseHTML(contents);
			$("#selected-icon").append(svg);
			//strip and replace svg tags
			var svg = document.querySelectorAll("#selected-icon > svg")[0];
			svg = svgTag + svg.innerHTML + "</svg>";
			svg = $.parseHTML(svg);
			
			
			$("#selected-icon").empty();
			$("#file-name").val(fileName);
			$(svg).find("path").css("stroke-opacity",0);
			$(svg).css("height","75px").css("width","75px")
			$("#selected-icon").append(svg);
			
			//remove stroke width from all paths
			$(svg).find("path").css("stroke-width",0);
			
			//remove metadata and defs tags
			$(svg).find("metadata,defs").remove();
			
			//remove sodipodi tag
			$(svg).find("sodipodi\\:namedview").remove()
			
			//remove inkscape connector
			$(svg).find("path").removeAttr("inkscape:connector-curvature");
			$(svg).find("g").removeAttr("inkscape:label")
							.removeAttr("inkscape:groupmode");

			$("#overlay").show();
						
			$("#icon-editor").toggle("slide", { direction: "right" }, 400);
			
			document.getElementById('svg-upload').value = null;

			setTimeout(function(){
				$("#selected-icon path").addClass("color-picker");
			},200);

		};
		reader.readAsText(file,'ISO-8859-3');
	},
	
	GetIconData: function (id){
		var icon = {};
		for (let i = 0; i < Icons.SVGs.length; i++) {
			if (id == Icons.SVGs[i].id){
				icon = Icons.SVGs[i];
			}
		}
		return icon;
	},
	
	ClearForm: function () {
		$("#entire-color").val("");
		$("#selected-path-color").val("");
		$("#selected-icon").empty();
		$("#is-frame").val(0);
		$("#keywords-input").val("");
		$("#size-input").val("");
		$("#rotate-input").val("");
		$("#file-name").val("");
		$("#file-type-select").val("svg");
		$("#opacity-input").val("");
	},
	
	BindActions: function () {
		$("#close-editor").click(function(){
			$("#icon-editor").toggle("slide", { direction: "right" }, 200);
			setTimeout(function(){$("#overlay").hide()},200);
		});
		
		$("#delete-svg").click(async function(){
			var iconID = $("#selected-icon > svg").attr("record-id");
			if (iconID != undefined && iconID != ""){
				await Squidex.DeleteRecord(iconID);
				$("#icon-editor").toggle("slide", { direction: "right" }, 200);
				setTimeout(function(){$("#overlay").hide()},200);
				Icons.ClearForm();
				$("[record-id='" + iconID + "']").remove();
				alert("deleted record with id " + iconID);
			} else {
				alert("record not created yet, cannot be deleted");
			}
		});
		
		$("#save-svg").click(async function(){
			
			//remove stroke width from all paths
			$("#selected-icon").find("path").css("stroke-width",0);
			
			var svg = document.querySelectorAll("#selected-icon > svg")[0].outerHTML;
			var name = $("#file-name").val();
			var keywords = $("#keywords-input").val();
			var isFrame = false;
			if ($("#is-frame").val() == "1"){
				isFrame = true;
			}
			
			var icon = {
				name: {"iv": name},
				svg: {"iv": svg},
				keywords: {"iv": keywords},
				isframe:{"iv":isFrame}
			}
			var iconID = $("#selected-icon > svg").attr("record-id");
			if (iconID != undefined && iconID != ""){
				var result = await Squidex.UpdateRecord(iconID,icon);
				alert("updated record with id " + iconID);
			} else {
				var result = await Squidex.CreateRecord(icon);
				$("#selected-icon > svg").attr("record-id",result.id);
				alert("created record with id " + result.id);
			}
			
		});

		$("#icons").on("click","svg",function(){
			Icons.ClearForm();
			var selectedIcon = $(this).clone();
			var fileName = $(this).attr("name");
			$("#file-name").val(fileName);

			$(selectedIcon).find("path").css("stroke-opacity",0);
			
			$("#selected-icon").append(selectedIcon);
			
			var iconID = $("#selected-icon > svg").attr("record-id");
			var icon = Icons.GetIconData(iconID);
			if (icon.data != undefined && icon.data.keywords != undefined &&icon.data.keywords.iv != undefined && icon.data.keywords.iv != null){
				$("#keywords-input").val(icon.data.keywords.iv);
			}
			if (icon.data != undefined && icon.data.isframe != undefined && icon.data.isframe.iv != null && icon.data.isframe.iv != false){
				$("#is-frame").val(1);
			}
			
			$("#overlay").show();
						
			$("#icon-editor").toggle("slide", { direction: "right" }, 400);
			
			setTimeout(function(){
				$("#selected-icon path").addClass("color-picker");
			},200);
			
		});
		
		$("#add").click(function(){
			$("#svg-upload").trigger("click");
		});

		$("#selected-icon").on("click","svg path", function(){
			ColorPicker.StartingColor = $(this).css("fill");
			$("#selected-icon svg path").css("stroke-width",0);
			$(this).css("stroke","yellow").css("stroke-width",5);
			setTimeout(function(){$("#selected-path-color").click();},50);
			$("#selected-path-id").val($(this).attr("id"));
			
			var opacity = $(this).css("opacity")
			if (opacity != undefined && opacity != null && opacity != ""){
				$("#opacity-input").val(opacity)
			} else {
				$("#opacity-input").val(1)
			}
			
		});

		$("#selected-path-color").on("change",function(){
			var selectedPathID = $("#selected-path-id").val();
			$("#selected-icon #"+selectedPathID).css("fill",$("#selected-path-color").val()).css("stroke-width",0);
		});
		
		$("#opacity-input").on("change",function(){
			var selectedPathID = $("#selected-path-id").val();
			$("#selected-icon #"+selectedPathID).css("opacity",$("#opacity-input").val());
		});

		$("#entire-color").on("change",function(){
			if ($("#entire-color").val() != null && $("#entire-color").val() != ""){
				$("#selected-icon path").css("fill",$("#entire-color").val()).css("stroke-width",0);
			}
		});

		$("#rotate-input").on("change",function(){
			var rot = $("#rotate-input").val();
			var rotDist = 0;
			if (rot == null || rot == ""){
				rot = 0;
			}
			
			
			//need to get the scaling factor
			if (rot >= 270){
				rotDist = rot - 270;
			} else if (rot >= 180){
				rotDist = rot - 180;
			} else if (rot >= 90) {
				rotDist = rot - 90;
			} else {
				rotDist = rot;
			}
			
			if (rotDist >= 45){
				rotDist = rotDist - 45;
			} else {
				rotDist = 45 - rotDist;
			}
			
			rotDist = (rotDist * (2/3))/100;
			var scale = .7 + rotDist;
			
			
			$("#selected-icon > svg").css("transform","scale("+ scale +")rotate(" + rot +"deg)");
			
			
		});
		
		$("#color-switch").on("change",function(){
			if ($(this).is(":checked")){
				$("path").css("fill","black");
			} else {
				$("path").each(function(){
					var originalFillColor = $(this).attr("original-fill");
					$(this).css("fill",originalFillColor);
				});
			}
		});
		
		$("#search-input").on("keyup",function(){
			var searchVal = $(this).val().toLowerCase();
			if (searchVal.length > 1){
				$("#icons > svg").hide();
				$("[keywords*='" + searchVal + "']").fadeIn(200);
			} else {
				$("#icons > svg").fadeIn(200);
			}
		});
		/*
		$("body").on("mouseenter","#icons > svg", function(){
			$(this).find("path").css("stroke","yellow").css("stroke-width",10);
		});
		
		$("body").on("mouseleave","#icons > svg", function(){
			$(this).find("path").css("stroke","yellow").css("stroke-width",0);
		});
		*/
		
		$("#download-js").click(function(){
			
			Icons.DownloadJS();
			
		});

		$("#download-icon").on("click",function(){
			
			var fileType = $("#file-type-select").val()
			
			if (fileType == "svg"){
				Icons.DownloadSVG();
			} else {
				Icons.DownloadRaster();
			}
			
		});
		
	},
};
Icons.Init();