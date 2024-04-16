var Chords = {
	
	//this is used to make unique IDs so styles/queries don't affect other rendered chords
	RenderedChordCount: 2072000,
	
	//this is used to make unique IDs so notes don't share context/gain nodes
	RenderedNoteCount: 1000,
	
	//chords can have different names, such as A# and Bb
	JSONChordDictionary: {
		"a": 1,
		"a#": 2,
		"bb": 2,
		"b": 3,
		"c": 4,
		"c#": 5,
		"db": 5,
		"d": 6,
		"d#": 7,
		"eb": 7,
		"e": 8,
		"f": 9,
		"f#": 10,
		"gb": 10,
		"g": 11,
		"g#": 12,
		"ab": 12
	},
	
	NoteFrequencies: {
		
		//if we don't get a number, assume we are looking for a middle C note
		"C":	261.6256,
		"C#":	277.1826,
		"Db":	277.1826,
		"D":	293.6648,
		"D#":	311.1270,
		"Eb":	311.1270,
		"E":	329.6276,
		"F":	349.2282,
		"F#":	369.9944,
		"Gb":	369.9944,
		"G":	391.9954,
		"G#":	415.3047,
		"Ab":	415.3047,
		"A":	440,
		"A#":	446.1638,
		"Bb":	446.1638,
		"B":	493.8833,
		
		//two octaves below middle C, guitar notes
		"C2":	65.40639,
		"C#2":	69.29566,
		"Db2":	69.29566,
		"D2":	73.41619,
		"D#2":	77.78175,
		"Eb2":	77.78175,
		"E2":	82.40689,
		"F2":	87.30706,
		"F#2":	92.49861,
		"Gb2":	92.49861,
		"G2":	97.99886,
		"G#2":	103.8262,
		"Ab2":	103.8262,
		"A2":	110.0000,
		"A#2":	116.5409,
		"Bb2":	116.5409,
		"B2":	123.4708,
		
		//one octave below middle C#
		"C3":	130.8128,
		"C#3":	138.5913,
		"Db3":	138.5913,
		"D3":	146.8324,
		"D#3":	155.5635,
		"Eb3":	155.5635,
		"E3":	164.8138,
		"F3":	174.6141,
		"F#3":	184.9972,
		"Gb3":	184.9972,
		"G3":	195.9977,
		"G#3":	207.6523,
		"Ab3":	207.6523,
		"A3":	220.0000,
		"A#3":	233.0819,
		"Bb3":	233.0819,
		"B3":	246.9417,
		
		//middle C notes
		"C4":	261.6256,
		"C#4":	277.1826,
		"Db4":	277.1826,
		"D4":	293.6648,
		"D#4":	311.1270,
		"Eb4":	311.1270,
		"E4":	329.6276,
		"F4":	349.2282,
		"F#4":	369.9944,
		"Gb4":	369.9944,
		"G4":	391.9954,
		"G#4":	415.3047,
		"Ab4":	415.3047,
		"A4":	440,
		"A#4":	466.1638,
		"Bb4":	466.1638,
		"B4":	493.8833,
		
		//next group of notes above middle C
		"C5":	523.2511,
		"C#5":  554.3653,
		"Db5":  554.3653,
		"D5":	587.3295,
		"D#5":	622.2540,
		"Eb5":	622.2540,
		"E5":	659.2551,
		"F5":	698.4565,
		"F#5":	739.9888,
		"Gb5":	739.9888,
		"G5":	783.9909,
		"G#5":	830.6094,
		"Ab5":	830.6094,
		"A5":	880.0000,
		"A#5":	932.3275,
		"Bb5":	932.3275,
		"B5":	987.7666,
		
		//next next group
		"C6":	1046.502,
		
	},
	
	GuitarStringNoteMappings: [
		["E2","F2","F#2","G2","Ab2","A2"],
		["A2","Bb2","B2","C3","C#3","D3"],
		["D3","Eb3","E3","F3","F#3","G3"],
		["G3","Ab3","A3","Bb3","B3","C4"],
		["B3","C4","C#4","D4","Eb4","E4"],
		["E4","F4","F#4","G4","Ab4","A4"],
	],
	
	UkuleleStringNoteMappings: [
		["G3","Ab3","A3","Bb3","B3","C4"],
		["C4","C#4","D4","Eb4","E4","F4"],
		["E4","F4","F#4","G4","Ab4","A4"],
		["A4","Bb4","B4","C5","C#5","D5"],
	],
	
	JSONChordOutput: [ "A", "Bb", "B", "C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab"],
	
	//split on space, finger positions for each string then chord name
	GuitarChords: [
		//major 
		"002220 A",
		"013331 Bb",
		"024400 B",
		"032010 C",
		"XX3121 C#",
		"000232 D",
		"XX5343 Eb",
		"022100 E",
		"133211 F",
		"244322 F#",
		"320003 G",
		"X41114 Ab",
		
		//minor
		"002210 Am",
		"013321 Bbm",
		"024430 Bm",
		"XX1013 Cm",
		"002120 C#m",
		"000231 Dm",
		"004342 Ebm",
		"022000 Em",
		"133111 Fm",
		"244222 F#m",
		"355333 Gm",
		"001104 Abm",
		
		//sevenths
		"002020 A7",
		"013131 Bb7",
		"021202 B7",
		"032310 C7",
		"043404 C#7",
		"000212 D7",
		"001323 Eb7",
		"020100 E7",
		"131211 F7",
		"242322 F#7",
		"320001 G7",
		"001112 Ab7",
		
		//minor sevenths
		"002010 Am7",
		"013121 Bbm7",
		"X20202 Bm7",
		"001313 Cm7",
		"042100 C#m7",
		"000211 Dm7",
		"001322 Ebm7",
		"022030 Em7",
		"001111 Fm7",
		"004220 F#m7",
		"003333 Gm7",
		"004444 Abm7",
		
		//sixths
		"002222 A6",
		"113333 Bb6",
		"224444 B6",
		"032010 C6",
		"013121 C#6",
		"000202 D6",
		"011313 Eb6",
		"022120 E6",
		"X00211 F6",
		"XX1322 F#6",
		"320000 G6",
		"XX1111 Ab6",
		
		//minor sixths
		"002212 Am6",
		"XX3323 Bbm6",
		"020102 Bm6",
		"001213 Cm6",
		"XX2324 C#m6",
		"000201 Dm6",
		"001312 Ebm6",
		"022020 Em6",
		"XX0111 Fm6",
		"201222 F#m6",
		"XX4400 Gm6",
		"XX1101 Abm6",
		
		//suspended fourths
		"X02230 Asus4",
		"X11341 Bbsus4",
		"X22X04 Bsus4",
		"X33010 Csus4",
		"X4412X C#sus4",
		"XX0233 Dsus4",
		"XX1344 Ebsus4",
		"022200 Esus4",
		"XX3311 Fsus4",
		"224422 F#sus4",
		"330013 Gsus4",
		"44112X Absus4",
		
		//sevenths with suspended fourths
		"X02030 A7sus4",
		"X11141 Bb7sus4",
		"X22200 B7sus4",
		"X33311 C7sus4",
		"X44422 C#7sus4",
		"X00213 D7sus4",
		"XX1124 Eb7sus4",
		"000200 E7sus4",
		"111311 F7sus4",
		"222422 F#7sus4",
		"330011 G7sus4",
		"XX1122 Ab7sus4",
		
		//major sevenths
		"X02120 Amaj7",
		"X13231 Bbmaj7",
		"X24342 Bmaj7",
		"X32000 Cmaj7",
		"X43111 C#maj7",
		"XX0222 Dmaj7",
		"XX1333 Ebmaj7",
		"021100 Emaj7",
		"XX3210 Fmaj7",
		"XX4321 F#maj7",
		"320002 Gmaj7",
		"XX1113 Abmaj7",
		
		//suspended seconds
		"X02200 Asus2",
		"X13311 Bbsus2",
		"X24422 Bsus2",
		"X30033 Csus2",
		"XX1144 C#sus2",
		"XX0230 Dsus2",
		"XX1341 Ebsus2",
		"024400 Esus2",
		"XX3011 Fsus2",
		"XX4122 F#sus2",
		"300033 Gsus2",
		"411144 Absus2",
		
		//minor major sevenths
		"X02110 Ammaj7",
		"X13221 Bbmmaj7",
		"XX0302 Bmmaj7",
		"XX1003 Cmmaj7",
		"X4211X C#mmaj7",
		"XX0221 Dmmaj7",
		"XX1332 Ebmmaj7",
		"021000 Emmaj7",
		"132111 Fmmaj7",
		"243222 F#mmaj7",
		"XX0032 Gmmaj7",
		"XXX103 Abmmaj7",
		
		//ninths
		"X02423 A9",
		"X10111 Bb9",
		"X21222 B9",
		"X32330 C9",
		"X43444 C#9",
		"X00210 D9",
		"XX1021 Eb9",
		"XX0102 E9",
		"X01013 F9",
		"XX2124 F#9",
		"XX0201 G9",
		"XX1312 Ab9",
		
		//diminished chords
		"X01212 Adim",
		"X12020 Bbdim",
		"X23431 Bdim",
		"XX1212 Cdim",
		"XX2323 C#dim",
		"XX3434 Ddim",
		"XX1212 Ebdim",
		"XX2323 Edim",
		"XX3434 Fdim",
		"XX1212 F#dim",
		"XX2323 Gdim",
		"XX3434 Abdim",
		
		//augmented chords
		"X03221 A+",
		"XX0332 Bb+",
		"X21003 B+",
		"X32110 C+",
		"XX3225 C#+",
		"XX0332 D+",
		"XX1003 Eb+",
		"032110 E+",
		"XX3221 F+",
		"XX4332 F#+",
		"XX1003 G+",
		"XX2110 Ab+",
		
		//irregular chords
		"024432 Bm*",
		"X32003 Cmaj7*",
		
	],
	
	//split on space, keys then chord name
	KeyboardChords: [		
		
		//major chords
		"A4,Db5,E5 A",
		"Bb4,D5,F5 Bb",
		"B4,Eb5,Gb5 B",
		"C4,E4,G4 C",
		"Db4,F4,Ab4 C#",
		"D4,Gb4,A4 D",
		"Eb4,G4,Bb4 Eb",
		"E4,Ab4,B4 E",
		"F4,A4,C5 F",
		"Gb4,Bb4,Db5 F#",
		"G4,B4,D5 G",
		"Ab4,C5,Eb5 Ab",
		
		//minor chords
		"A4,C5,E5 Am",
		"F4,Bb4,Db5 Bbm",
		"B4,D5,Gb5 Bm",
		"C4,Eb4,G4 Cm",
		"Db4,E4,Ab4 C#m",
		"D4,F4,A4 Dm",
		"Eb4,Gb4,Bb4 Ebm",
		"E4,G4,B4 Em",
		"F4,Ab4,C5 Fm",
		"Gb4,A4,Db5 F#m",
		"G4,Bb4,D5 Gm",
		"Ab4,B4,Eb5 Abm",
		
		//sevenths
		"A4,Db5,E5,G5 A7",
		"Bb4,D5,F5,Ab5 Bb7",
		"A4,B4,Eb5,Gb5 B7",
		"C4,E4,G4,Bb4 C7",
		"Db4,F4,Ab4,B4 C#7",
		"D4,Gb4,A4,C5 D7",
		"Eb4,G4,Bb4,Db5 Eb7",
		"E4,Ab4,B4,D5 E7",
		"F4,A4,C5,Eb5 F7",
		"Gb4,Bb4,Db5,E5 F#7",
		"G4,B4,D5,F5 G7",
		"Ab4,C5,Eb5,Gb5 Ab7",
		
		//minor sevenths
		"A4,C5,E5,G5 Am7",
		"Bb4,Db5,F5,Ab5 Bbm7",
		"A4,B4,D5,Gb5 Bm7",
		"C4,Eb4,G4,Bb4 Cm7",
		"Db4,E4,Ab4,B4 C#m7",
		"Db4,E4,Ab4,B4 Dbm7",
		"D4,F4,A4,C5 Dm7",
		"Eb4,Gb4,Bb4,Db4 Ebm7",
		"E4,G4,B4,D5 Em7",
		"F4,Ab4,C5,Eb5 Fm7",
		"Gb4,A4,Db5,E5 F#m7",
		"Gb4,A4,Db5,E5 Gbm7",
		"G4,Bb4,D5,F5 Gm7",
		"Ab4,B4,Eb5,Gb5 Abm7",
		
		//sixths
		"A4,Db5,E5,Gb5 A6",
		"Bb4,D5,F5,G5 Bb6",
		"B4,Eb5,Gb5,Ab5 B6",
		"C4,E4,G4,A4 C6",
		"Db4,F4,Ab4,Bb4 C#6",
		"D4,Gb4,A4,B4 D6",
		"Eb4,G4,Bb4,C5 Eb6",
		"E4,Ab4,B4,Db5 E6",
		"F4,A4,C5,D5 F6",
		"Gb4,Bb4,Db5,Eb5 F#6",
		"G4,B4,D5,E5 G6",
		"Ab4,C5,Eb5,F5 Ab6",
		
		//minor sixths
		
		//suspended fourths
		
		//sevenths with suspended fourths

		//major sevenths

		//suspended seconds

		//minor major sevenths
		
		//ninths
		
		//diminished chords
		
		//augmented chords
		
		//irregular chords
	],
	
	MIDIMappingsDictionary: {
		"48": "C4",
		"49": "C#4",
		"50": "D4",
		"51": "Eb4",
		"52": "E4",
		"53": "F4",
		"54": "F#4",
		"55": "G4",
		"56": "Ab4",
		"57": "A4",
		"58": "Bb4",
		"59": "B4",
		
		"60": "C5",
		"61": "C#5",
		"62": "D5",
		"63": "Eb5",
		"64": "E5",
		"65": "F5",
		"66": "F#5",
		"67": "G5",
		"68": "Ab5",
		"69": "A5",
		"70": "Bb5",
		"71": "B5",
		"72": "C6",
		
	},
	
	Init: function(){
		
		//add css styles for hover and active
		var chordsCSS = `
			<style>
				[id*='key_']:hover{
					fill: #ffcccc !important;
					cursor: pointer;
				}
				[id*='key_']:active{
					fill: red !important;
					cursor: pointer;
				}
				ellipse:hover {
					fill: #ffcccc !important;
					cursor: pointer;
					fill-opacity: 0.7 !important;
				}
				ellipse:active{
					fill: red !important;
				}
				.chord-name:hover {
					color: gray;
					cursor: pointer;
				}
				.chord-name:active {
					color: red;
				}
				[id='1-x'],[id='2-x'],[id='3-x'],[id='4-x'],[id='5-x'],[id='6-x'] {
					cursor: pointer;
				}
				.keyboard-key-down {
					fill: red !important;
				}
			</style>
			
		`;
		document.querySelector("head").insertAdjacentHTML('beforeend',chordsCSS);
	},
	
	/*
		TODO:
			-push to CDN
			-build demo page
				-default to loading all the most common chords
			-add more guitar chords
			-add more keyboard chords
			-add ability to render all chords
			X 	multiple chords at once (space or comma-separated)
			-capo input for guitar/baritone uke
			X	add options object
				X	chord label color
				X 	outline color
				X	key/dot color
				X 	height (for keyboard make width 1/3 of height)
	
	*/
	
	//render the chord diagram	
	RenderChord: function (target,chordName,instrument,options) {
		
		var capo = 0;
		
		if (options != undefined && options.Capo != undefined){
			capo = options.Capo;
		}
		
		//trim spaces and remove double spaces
		chordName = chordName.trim().replace("  "," ").replace(" ",",");
		
		//for 'all' loop over the available chords and render all the chords which don't have an asterisk (one-off chord variant) in the name
		if (chordName.toLowerCase() == "all") {
			
			var allChords = "";
			if (instrument != undefined && (instrument.toLowerCase() == "piano" || instrument.toLowerCase() == "keyboard")){
				for (var i = 0; i < Chords.KeyboardChords.length; i++) {
					if (Chords.KeyboardChords[i].split(" ")[1].indexOf("*") == -1){
						allChords += Chords.KeyboardChords[i].split(" ")[1] + " ";
					}
				}
			} else {
				for (var i = 0; i < Chords.GuitarChords.length; i++) {
					if (Chords.GuitarChords[i].split(" ")[1].indexOf("*") == -1){
						allChords += Chords.GuitarChords[i].split(" ")[1] + " ";
					}
				}
			}
			Chords.RenderChord(target,allChords,instrument,options);
		}
		
		//if we have multiple chords, split and loop over them
		else if (chordName.indexOf(",") > -1) {
			
			chordNames = chordName.split(",");
			
			for (var z = 0; z < chordNames.length; z++) {
				Chords.RenderChord(target,chordNames[z],instrument,options);
			}
		
		//we should now always have a single chord with no whitespace
		} else {
			
			//increment so we have a unique element id when we want to find and manipulate it
			Chords.RenderedChordCount++;
			
			//if someone went to the trouble to input a flat character, remove it from the chord render process
			chordName = chordName.replace("♭","b");	
			
			//some chords have multiple names, remove the duplicates for our matching
			var compareName = chordName.toLowerCase().replace("db","c#").replace("a#","bb").replace("d#","eb").replace("gb","f#").replace("g#","ab");
			
			//figure out what instrument we are looking at
			if (instrument == undefined || instrument.toLowerCase() == "guitar") {
				instrument = "Guitar";
			} else if (instrument.toLowerCase().indexOf("baritone") > -1){
				instrument = "Baritone Ukulele";
			} else if (instrument.toLowerCase() == "ukulele" || instrument.toLowerCase() == "uke" || instrument.toLowerCase() == "ukelele"){
				instrument = "Ukulele";
				
				//add logic to add 5 half steps for a ukulele
				capo = capo + 5;
				
				if (capo > 11){
					capo = capo - 12;
				}
			} else {
				instrument = "Keyboard";
			}
			
			//keyboards don't get a capo modifier
			if (capo != 0 && instrument != "Keyboard"){
				compareName = Chords.ConvertChord(compareName,capo).toLowerCase();
			}
			
			var thisChordShape = "";
			
			var newChord = Chords[instrument.replace("Baritone ","") + "ChordTemplate"].replace("{{name}}",chordName.replace("b","&#9837;"))
			.replace(/{{unique-name}}/g,chordName + "-" + Chords.RenderedChordCount)
			.replace("{{instrument}}",instrument.toLowerCase());
			document.querySelector(target).insertAdjacentHTML('beforeend',newChord);
			
			var thisChordDiv = document.querySelector("[name='" +  chordName + "-" + Chords.RenderedChordCount + "']");
			
			//set label color, label font size, and overall size of the svg
			if (options != undefined) {
				
				//set the color of the label text
				if (options.LabelTextColor != undefined){
					thisChordDiv.querySelector(".chord-name").style.color = options.LabelTextColor;
				}
				//set the font size of the label text
				if (options.LabelFontSize != undefined) {
					thisChordDiv.querySelector(".chord-name").style.fontSize = options.LabelFontSize;
				}
				
				//set the size
				if (options.Size != undefined){
					
					//for keyboard, height should be 1/3 of width
					if (instrument == "Keyboard"){
						thisChordDiv.querySelector("svg").style.width = options.Size;
						thisChordDiv.querySelector("svg").style.height = Number(options.Size.replace("px","")/3) + "px";
					}
					//for guitar/ukulele make height and width the same
					else {
						thisChordDiv.querySelector("svg").style.width = options.Size;
						thisChordDiv.querySelector("svg").style.height = options.Size;
					}
				}
			}
			
			//for guitars and ukuleles
			if (instrument != "Keyboard"){
				
				//want to hide all the positions and Xs so we can show the relevant ones
				thisChordDiv.querySelectorAll("ellipse[id*='-'],[id*='-x']").forEach(function(item){
					item.style.fill = "transparent";
				});
			
				//get the matching chord shape
				for (var i = 0; i < Chords.GuitarChords.length; i++) {
				  if (compareName == Chords.GuitarChords[i].split(" ")[1].toLowerCase()){		  
					thisChordShape = Chords.GuitarChords[i].split(" ")[0].toLowerCase();
					
					//show the formation name if a capo is being used (for a ukulele the distance is 5 by default)
					if ((capo != 0 && instrument != "Ukulele") || (capo != 5 && instrument == "Ukulele")){
						thisChordDiv.querySelector(".chord-name").innerHTML = Chords.GuitarChords[i].split(" ")[1];
					}
				  };		  
				}
				
				//show the appropriate finger positions for the matching shape
				for (var i = 0; i < thisChordShape.length; i++) {			
					var thisPosition = thisChordDiv.querySelector("[id='" + (i+1) + "-" + thisChordShape[i] + "']");
					if (thisChordShape[i] != "0" && thisPosition != null && thisPosition.style != null){
						if (thisPosition.id.toLowerCase().indexOf("x") > -1){
							thisPosition.style.fill = "red";
						} else {
							thisPosition.style.fill = "#00aad4";
						}
						
					}
					if (options != undefined && options.FingerPlacementColor != undefined){
						thisPosition.style.fill = options.FingerPlacementColor;
					}
				}
				
				//options
				if (options != undefined){
					if (options.OutlineColor != undefined) {
						thisChordDiv.querySelector("#fret-board").style.fill = options.OutlineColor;
					}
					
				}
				
				//play note when click down on fret position, stop note when click up or mouse out
				var allFretPositions = thisChordDiv.querySelectorAll("ellipse,[id='1-x'],[id='2-x'],[id='3-x'],[id='4-x'],[id='5-x'],[id='6-x']");
				for (var i = 0; i < allFretPositions.length; i++) {
					
					if (allFretPositions[i].id != undefined){
						//baritone ukuleles and guitars
						if (instrument.toLowerCase().indexOf("ba") > -1 || instrument.toLowerCase().indexOf("gu") > -1) {

								allFretPositions[i].addEventListener("mousedown", function (e) {
									Chords.PlayNote(Chords.GuitarStringNoteMappings[Number(this.id.split("-")[0])-1][Number(this.id.split("-")[1].replace("x","0"))],0);
								});
								allFretPositions[i].addEventListener("mouseup", function (e) {
									Chords.StopNote(Chords.GuitarStringNoteMappings[Number(this.id.split("-")[0])-1][Number(this.id.split("-")[1].replace("x","0"))]);
								});
								allFretPositions[i].addEventListener("mouseout", function (e) {
									Chords.StopNote(Chords.GuitarStringNoteMappings[Number(this.id.split("-")[0])-1][Number(this.id.split("-")[1].replace("x","0"))]);
								});
							
						//regular ukuleles
						} else {
								
								allFretPositions[i].addEventListener("mousedown", function (e) {
									Chords.PlayNote(Chords.UkuleleStringNoteMappings[Number(this.id.split("-")[0])-3][Number(this.id.split("-")[1].replace("x","0"))],0);
								});
								allFretPositions[i].addEventListener("mouseup", function (e) {
									Chords.StopNote(Chords.UkuleleStringNoteMappings[Number(this.id.split("-")[0])-3][Number(this.id.split("-")[1].replace("x","0"))]);
								});
								allFretPositions[i].addEventListener("mouseout", function (e) {
									Chords.StopNote(Chords.UkuleleStringNoteMappings[Number(this.id.split("-")[0])-3][Number(this.id.split("-")[1].replace("x","0"))]);
								});
						}
					}
				}
				
				//play chord when click on name - guitar
				document.querySelector(".chord-name[name='" + chordName + "-" + Chords.RenderedChordCount + "']").addEventListener("click", function (e) {
					
					//only guitars have the two bass strings
					if (instrument.toLowerCase().indexOf("uk") == -1){
						Chords.PlayNote(Chords.GuitarStringNoteMappings[0][Number(thisChordShape[0])],1250);
						setTimeout(function(){Chords.PlayNote(Chords.GuitarStringNoteMappings[1][Number(thisChordShape[1])],1175);},75);
					}
					//baritone ukuleles and guitars
					if (instrument.toLowerCase().indexOf("ba") > -1 || instrument.toLowerCase().indexOf("gu") > -1) {
						setTimeout(function(){Chords.PlayNote(Chords.GuitarStringNoteMappings[2][Number(thisChordShape[2])],1100);},150);
						setTimeout(function(){Chords.PlayNote(Chords.GuitarStringNoteMappings[3][Number(thisChordShape[3])],1025);},225);
						setTimeout(function(){Chords.PlayNote(Chords.GuitarStringNoteMappings[4][Number(thisChordShape[4])],950);},300);
						setTimeout(function(){Chords.PlayNote(Chords.GuitarStringNoteMappings[5][Number(thisChordShape[5])],875);},375);
					
					//regular ukuleles
					} else {
						setTimeout(function(){Chords.PlayNote(Chords.UkuleleStringNoteMappings[0][Number(thisChordShape[2])],1100);},150);
						setTimeout(function(){Chords.PlayNote(Chords.UkuleleStringNoteMappings[1][Number(thisChordShape[3])],1025);},225);
						setTimeout(function(){Chords.PlayNote(Chords.UkuleleStringNoteMappings[2][Number(thisChordShape[4])],950);},300);
						setTimeout(function(){Chords.PlayNote(Chords.UkuleleStringNoteMappings[3][Number(thisChordShape[5])],875);},375);
					}
					

				});
				
			
			//for keyboards
			} else {
				
				//get this chord shape
				for (var i = 0; i < Chords.KeyboardChords.length; i++) {
				  if (compareName == Chords.KeyboardChords[i].split(" ")[1].toLowerCase()){
					  thisChordShape = Chords.KeyboardChords[i].split(" ")[0].split(",");
				  };		  
				}
				
				var newChord = document.querySelector("[name='" + chordName + "-" + Chords.RenderedChordCount + "']");
			
				//set the outline and the black keys to the options color if there is one
				if (options != undefined){
					if (options.OutlineColor != undefined) {
						newChord.querySelector(".keyboard-outline").style.fill = options.OutlineColor;
						newChord.querySelector(".keyboard-outline").style.stroke = options.OutlineColor;
					
						var blackKeys = newChord.querySelectorAll("[id='key_Db4'],[id='key_Eb4'],[id='key_Gb4'],[id='key_Ab4'],[id='key_Bb4'],[id='key_Db5'],[id='key_Eb5'],[id='key_Fb5'],[id='key_Gb5'],[id='key_Ab5']");
						
						for (var i = 0; i < blackKeys.length; i++) {
							blackKeys[i].style.fill = options.OutlineColor;
							blackKeys[i].style.stroke = options.OutlineColor;
						}					
					}
				}
			
				for (var i = 0; i < thisChordShape.length; i++) {
					
					newChord.querySelector("[id='key_" + thisChordShape[i] + "']").style.fill = "#00AAD4";

					if (options != undefined && options.FingerPlacementColor != undefined) {
						newChord.querySelector("[id='key_" + thisChordShape[i] + "']").style.fill = options.FingerPlacementColor;
					}
					
				}
				
				//play note when click down on key, stop note when stop click or mouseout of key
				var allKeys = newChord.querySelectorAll("[id*='key_']");
				for (var i = 0; i < allKeys.length; i++) {
					allKeys[i].addEventListener("mousedown", function (e) {
						Chords.PlayNote(this.id.replace("key_",""),0);
					});
					allKeys[i].addEventListener("mouseup", function (e) {
						Chords.StopNote(this.id.replace("key_",""));
					});
					allKeys[i].addEventListener("mouseout", function (e) {
						Chords.StopNote(this.id.replace("key_",""));
					});
				}	
				
				//play chord when click on name
				document.querySelector(".chord-name[name='" + chordName + "-" + Chords.RenderedChordCount + "']").addEventListener("click", function (e) {
					
					Chords.PlayNote(thisChordShape[0],900);
					
					setTimeout(function(){
						Chords.PlayNote(thisChordShape[1],800)
					},100);
					
					setTimeout(function(){
						Chords.PlayNote(thisChordShape[2],700)
					},200);
					
					if (thisChordShape[3] != undefined){
						setTimeout(function(){
							Chords.PlayNote(thisChordShape[3],600)
						},300);
					}
				});
				
				Chords.EnableMIDI();
			}	
		}		
	},
	
	//useful when dealing with capos or converting between guitar/baritone uke and regular uke
	ConvertChord: function (inputChord, capoNumber) {

		newChordString = "";
		
		inputChord = inputChord.replace("maj","").replace("dim","");
 
		matches = [];
		thisMatch = "";
		for (z = 0; z < Object.keys(Chords.JSONChordDictionary).length; z++){
			if (inputChord.indexOf(Object.keys(Chords.JSONChordDictionary)[z].toLowerCase()) > -1){
				matches.push(Object.keys(Chords.JSONChordDictionary)[z].toLowerCase());
			}			
		}
		
		if (matches.length > 1){
				if (matches[0].length == 2){
					thisMatch = matches[0];
				} else if (matches[1].length == 2){
					thisMatch = matches[1];
				} else if (matches[2] != undefined && matches[2].length == 2) {
					thisMatch = 'd';
				}
		} else if (matches.length == 1) {
			thisMatch = matches[0];
		}
		thisMatchValue =Chords.JSONChordDictionary[thisMatch];
		newChordValue = parseInt(thisMatchValue) - parseInt(capoNumber);
		if (newChordValue < 1){
			newChordValue += 12;
		}
		if (newChordValue > 12){
			newChordValue -= 12;
		}
		return inputChord.replace(thisMatch,Chords.JSONChordOutput[newChordValue -1]);		
	},	

	PlayNote: function (noteOrFrequency,stopAfter) {
		
		if (noteOrFrequency == undefined || noteOrFrequency == null || noteOrFrequency.toLowerCase() == "x"){
			return;
		}
		
		Chords.StopNote(noteOrFrequency);
		Chords.RenderedNoteCount++;

		console.log("Playing note " + noteOrFrequency);
		
		var freq = 0;
		
		//if we get a note name
		if (isNaN(noteOrFrequency)){
			var note = noteOrFrequency;
			note = note.replace("♭","b");
			freq = Chords.NoteFrequencies[note];
			
		//if we start with a frequency
		} else {
			freq = Number(noteOrFrequency);
		}
		if (Chords.AudioContext == undefined){
			Chords.AudioContext = new (window.AudioContext || window.webkitAudioContext)();
		}
		const gainNode = Chords.AudioContext.createGain();
		gainNode.connect(Chords.AudioContext.destination);
		
		const oscNode = Chords.AudioContext.createOscillator();
		oscNode.type = 'triangle';
		oscNode.frequency.value = freq;
		oscNode.connect(gainNode);
		oscNode.gainNode = gainNode;
		oscNode.start(0);
		if (stopAfter == undefined){
			setTimeout(function(){
				gainNode.gain.setValueAtTime(gainNode.gain.value, Chords.AudioContext.currentTime); 
				gainNode.gain.exponentialRampToValueAtTime(0.0001, Chords.AudioContext.currentTime + 0.03);
			},500);
		} else if (stopAfter != 0) {
			setTimeout(function(){
				gainNode.gain.setValueAtTime(gainNode.gain.value, Chords.AudioContext.currentTime); 
				gainNode.gain.exponentialRampToValueAtTime(0.0001, Chords.AudioContext.currentTime + 0.03);
			},stopAfter);
		}
		Chords["OscNode" + noteOrFrequency] = oscNode;
		return oscNode;
	},
	StopNote: function (noteOrFrequency){
		if (Chords["OscNode" + noteOrFrequency] != undefined){
			Chords["OscNode" + noteOrFrequency].gainNode.gain.setTargetAtTime(0, Chords.AudioContext.currentTime, 0.015);
			Chords["OscNode" + noteOrFrequency] = undefined;
		}
	},
	
	EnableMIDI: function() {

		if (Chords.MIDIOn){
			return;
		}

		const onMIDISuccess = (midiAccess) => {
			for (var input of midiAccess.inputs.values()) input.onmidimessage = getMIDIMessage;
			Chords.MIDIOn = true;
		}
		const getMIDIMessage = message => {
			
			const [command, note, velocity] = message.data;
			var noteString = Chords.MIDIMappingsDictionary[note.toString()];
			noteString = noteString.replace("C#","Db").replace("F#","Gb");
			switch (command) {

				case 144: // on
					Chords.PlayNote(noteString,0);
					
					document.querySelector("[id='key_" + noteString + "']").classList.add("keyboard-key-down");
					
					if (velocity > 0) {
						console.log("down " + note);
						
					}
				break;
				case 128: // off
					Chords.StopNote(noteString);
					document.querySelector("[id='key_" + noteString + "']").classList.remove("keyboard-key-down");
					console.log("up " + note);
					
				break;
			}
		}
		if (navigator.requestMIDIAccess) {
			navigator.requestMIDIAccess().then(onMIDISuccess, () => console.log('Could not access your MIDI devices.'));
		}
	},



	//svg representing a guitar chord
	GuitarChordTemplate: `<div class="chord-div guitar" instrument="guitar" name="{{unique-name}}" style="width:fit-content;display:inline-block;">
	<div class="chord-name" name="{{unique-name}}" style="font-size:20px;font-family:Arial;text-align:center;">{{name}}</div><?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="150px"
   height="150px"
   style="margin-top:-5px;" 
   viewBox="0 0 150 150"
   version="1.1"
   id="svg8"
   class="chord"
   sodipodi:docname="Chord.svg"
   inkscape:version="0.92.3 (2405546, 2018-03-11)">
  <defs
     id="defs2" />
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="1.979899"
     inkscape:cx="150.97439"
     inkscape:cy="295.12074"
     inkscape:document-units="mm"
     inkscape:current-layer="layer1"
     showgrid="false"
     inkscape:window-width="3200"
     inkscape:window-height="1644"
     inkscape:window-x="3184"
     inkscape:window-y="-16"
     inkscape:window-maximized="1" />
  <metadata
     id="metadata5">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1"
     transform="translate(0,-147)">
    <path
       id="fret-board"
       style="opacity:1;fill:#4d4d4d;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 85.283855,163.26246 h 2.792046 v 123.50486 h -2.792046 z m 20.871125,1.06908 h 2.79204 V 287.8364 h -2.79204 z m -42.020185,-0.38747 h 3.75068 v 123.83698 h -3.75068 z m -21.217047,-0.53454 h 3.750679 V 287.24651 H 42.917748 Z M 24.87483,286.33793 h 102.89909 v 2.64583 H 24.87483 Z M 24.290086,261.31321 H 127.18917 v 2.64583 H 24.290086 Z M 24.039683,236.80013 H 126.93877 v 2.64584 H 24.039683 Z m 0.182857,-24.90057 h 102.89909 v 2.64583 H 24.22254 Z m 102.57294,-46.36531 h 2.79205 v 123.50487 h -2.79205 z M 23.542267,187.20696 H 129.05052 v 3.02381 H 23.542267 Z m -2.418116,-22.06018 h 3.750679 v 123.83698 h -3.750679 z m -0.01399,-7.42982 H 129.58753 v 7.81729 H 21.110162 Z"
       inkscape:connector-curvature="0" />
    <ellipse
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="6-1"
       cx="127.82166"
       cy="175.9269"
       rx="9.2876158"
       ry="8.9535294" />
    <ellipse
       ry="8.9535294"
       rx="9.2876158"
       cy="200.78297"
       cx="127.68802"
       id="6-2"
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <ellipse
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="6-3"
       cx="127.68802"
       cy="224.83722"
       rx="9.2876158"
       ry="8.9535294"
       inkscape:label="#6-3" />
    <ellipse
       ry="8.9535294"
       rx="9.2876158"
       cy="249.82692"
       cx="128.08893"
       id="6-4"
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <ellipse
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="6-5"
       cx="127.95529"
       cy="275.08392"
       rx="9.2876158"
       ry="8.9535294" />
    <ellipse
       ry="8.9535294"
       rx="9.2876158"
       cy="176.19417"
       cx="107.2419"
       id="5-1"
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       inkscape:label="#5-1" />
    <ellipse
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="5-2"
       cx="107.37553"
       cy="201.05023"
       rx="9.2876158"
       ry="8.9535294" />
    <ellipse
       ry="8.9535294"
       rx="9.2876158"
       cy="225.10449"
       cx="107.10826"
       id="5-3"
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <ellipse
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="5-4"
       cx="107.50917"
       cy="250.09419"
       rx="9.2876158"
       ry="8.9535294" />
    <ellipse
       ry="8.9535294"
       rx="9.2876158"
       cy="275.3512"
       cx="107.37553"
       id="5-5"
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <ellipse
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="4-1"
       cx="86.795776"
       cy="176.06053"
       rx="9.2876158"
       ry="8.9535294" />
    <ellipse
       ry="8.9535294"
       rx="9.2876158"
       cy="200.9166"
       cx="86.66214"
       id="4-2"
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <ellipse
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="4-3"
       cx="86.66214"
       cy="224.97086"
       rx="9.2876158"
       ry="8.9535294" />
    <ellipse
       ry="8.9535294"
       rx="9.2876158"
       cy="249.96056"
       cx="87.063049"
       id="4-4"
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <ellipse
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="4-5"
       cx="86.929405"
       cy="275.21756"
       rx="9.2876158"
       ry="8.9535294" />
    <ellipse
       ry="8.9535294"
       rx="9.2876158"
       cy="176.06053"
       cx="65.815117"
       id="3-1"
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <ellipse
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="3-2"
       cx="65.68148"
       cy="200.9166"
       rx="9.2876158"
       ry="8.9535294" />
    <ellipse
       ry="8.9535294"
       rx="9.2876158"
       cy="224.97086"
       cx="65.68148"
       id="3-3"
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <ellipse
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="3-4"
       cx="66.08239"
       cy="249.96056"
       rx="9.2876158"
       ry="8.9535294" />
    <ellipse
       ry="8.9535294"
       rx="9.2876158"
       cy="275.21756"
       cx="65.948746"
       id="3-5"
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <ellipse
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="2-1"
       cx="44.834454"
       cy="176.19417"
       rx="9.2876158"
       ry="8.9535294" />
    <ellipse
       ry="8.9535294"
       rx="9.2876158"
       cy="201.05023"
       cx="44.700817"
       id="2-2"
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <ellipse
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="2-3"
       cx="44.700817"
       cy="225.10449"
       rx="9.2876158"
       ry="8.9535294" />
    <ellipse
       ry="8.9535294"
       rx="9.2876158"
       cy="250.09419"
       cx="45.101727"
       id="2-4"
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <ellipse
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="2-5"
       cx="44.968082"
       cy="275.3512"
       rx="9.2876158"
       ry="8.9535294" />
    <ellipse
       ry="8.9535294"
       rx="9.2876158"
       cy="176.59508"
       cx="23.051987"
       id="1-1"
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <ellipse
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="1-2"
       cx="22.784716"
       cy="201.3175"
       rx="9.2876158"
       ry="8.9535294" />
    <ellipse
       ry="8.9535294"
       rx="9.2876158"
       cy="225.37177"
       cx="22.784716"
       id="1-3"
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <ellipse
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="1-4"
       cx="23.185625"
       cy="250.36148"
       rx="9.2876158"
       ry="8.9535294" />
    <ellipse
       ry="8.9535294"
       rx="9.2876158"
       cy="275.61847"
       cx="23.051981"
       id="1-5"
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <path
       id="6-x"
       style="opacity:1;fill:#ff0000;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 121.3407,158.21133 2.79702,-2.79702 10.43214,10.43214 -2.79703,2.79703 z m 0.0756,7.63512 10.35654,-10.35655 2.64583,2.64583 -10.35654,10.35655 z"
       inkscape:connector-curvature="0" />
    <path
       inkscape:connector-curvature="0"
       d="m 101.16185,158.34497 2.79702,-2.79703 10.43213,10.43214 -2.79703,2.79703 z m 0.0756,7.63511 10.35653,-10.35654 2.64583,2.64583 -10.35653,10.35654 z"
       style="opacity:1;fill:#ff0000;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="5-x"
       inkscape:label="#5-x" />
    <path
       id="4-x"
       style="opacity:1;fill:#ff0000;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 80.314826,158.21133 2.79702,-2.79702 10.432138,10.43214 -2.79703,2.79703 z m 0.0756,7.63512 10.356538,-10.35655 2.64583,2.64583 -10.356538,10.35655 z"
       inkscape:connector-curvature="0" />
    <path
       inkscape:connector-curvature="0"
       d="m 59.467803,157.81043 2.79702,-2.79703 10.432138,10.43215 -2.79703,2.79702 z m 0.0756,7.63511 10.356538,-10.35654 2.64583,2.64583 -10.356538,10.35655 z"
       style="opacity:1;fill:#ff0000;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="3-x" />
    <path
       id="2-x"
       style="opacity:1;fill:#ff0000;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 38.086241,158.4786 2.79702,-2.79702 10.432138,10.43214 -2.79703,2.79703 z m 0.0756,7.63512 10.356538,-10.35655 2.64583,2.64583 -10.356538,10.35655 z"
       inkscape:connector-curvature="0" />
    <path
       inkscape:connector-curvature="0"
       d="m 16.036505,158.0777 2.79702,-2.79703 10.432138,10.43214 -2.79703,2.79703 z m 0.0756,7.63511 10.356538,-10.35654 2.64583,2.64583 -10.356538,10.35655 z"
       style="opacity:1;fill:#ff0000;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="1-x" />
  </g>
</svg>`,

	//svg representing a ukulele chord
	UkuleleChordTemplate: `<div class="chord-div ukulele" instrument="{{instrument}}" name="{{unique-name}}" style="width:fit-content;display:inline-block;">
	<div class="chord-name" name="{{unique-name}}" style="font-size:20px;font-family:Arial;text-align:center;">{{name}}</div><?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="150px"
   height="150px"
   style="margin-top:-5px;" 
   viewBox="0 0 150 150"
   version="1.1"
   id="svg8"
   class="chord"
   sodipodi:docname="Baritone Ukulele Chord.svg"
   inkscape:version="0.92.5 (2060ec1f9f, 2020-04-08)">
  <defs
     id="defs2">
    <inkscape:perspective
       sodipodi:type="inkscape:persp3d"
       inkscape:vp_x="0 : 150 : 1"
       inkscape:vp_y="0 : 1000 : 0"
       inkscape:vp_z="150 : 150 : 1"
       inkscape:persp3d-origin="75 : 100 : 1"
       id="perspective943" />
  </defs>
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="0.9899495"
     inkscape:cx="109.82803"
     inkscape:cy="335.52684"
     inkscape:document-units="mm"
     inkscape:current-layer="layer1"
     showgrid="false"
     inkscape:window-width="1920"
     inkscape:window-height="986"
     inkscape:window-x="2389"
     inkscape:window-y="-11"
     inkscape:window-maximized="1"
     inkscape:object-nodes="false" />
  <metadata
     id="metadata5">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1"
     transform="translate(0,-147)">
    <path
       style="opacity:1;fill:#4d4d4d;stroke:#000000;stroke-width:0.26164976;stroke-opacity:1"
       d="m 29.124182,158.90724 v 6.92794 H 59.017319 V 186.6123 H 32.206266 v -20.75387 h -3.062932 v 120.42275 h -0.04998 v 2.82699 h 90.414666 v -2.82699 h -0.0309 v -120.446 -6.92794 z m 32.10824,6.92794 H 89.805467 V 186.6123 H 61.232422 Z m 30.788148,0 h 25.24151 V 186.6123 H 92.02057 Z m -59.814304,23.4532 h 26.811053 v 21.91515 H 32.206266 Z m 29.026156,0 h 28.573045 v 21.91515 H 61.232422 Z m 30.788148,0 h 25.24151 v 21.91515 H 92.02057 Z m -59.814304,24.59124 h 26.811053 v 22.45006 H 32.206266 Z m 29.026156,0 h 28.573045 v 22.45006 H 61.232422 Z m 30.788148,0 h 25.24151 v 22.45006 H 92.02057 Z m -59.814304,25.12614 h 26.811053 v 22.44955 H 32.206266 Z m 29.026156,0 h 28.573045 v 22.44955 H 61.232422 Z m 30.788148,0 h 25.24151 v 22.44955 H 92.02057 Z m -59.814304,25.12563 h 26.811053 v 22.14979 H 32.206266 Z m 29.026156,0 h 28.573045 v 22.14979 H 61.232422 Z m 30.788148,0 h 25.24151 v 22.14979 H 92.02057 Z"
       id="rect871"
       inkscape:connector-curvature="0" />
    <ellipse
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="6-1"
       cx="118.19996"
       cy="175.9269"
       rx="9.2876158"
       ry="8.9535294" />
    <ellipse
       ry="8.9535294"
       rx="9.2876158"
       cy="200.78297"
       cx="118.06632"
       id="6-2"
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <ellipse
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="6-3"
       cx="118.06632"
       cy="224.83722"
       rx="9.2876158"
       ry="8.9535294"
       inkscape:label="#6-3" />
    <ellipse
       ry="8.9535294"
       rx="9.2876158"
       cy="249.82692"
       cx="118.46722"
       id="6-4"
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <ellipse
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="6-5"
       cx="118.33359"
       cy="275.08392"
       rx="9.2876158"
       ry="8.9535294" />
    <ellipse
       ry="8.9535294"
       rx="9.2876158"
       cy="175.65964"
       cx="90.938454"
       id="5-1"
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       inkscape:label="#5-1" />
    <ellipse
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="5-2"
       cx="91.072083"
       cy="200.5157"
       rx="9.2876158"
       ry="8.9535294" />
    <ellipse
       ry="8.9535294"
       rx="9.2876158"
       cy="224.56996"
       cx="90.804817"
       id="5-3"
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <ellipse
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="5-4"
       cx="91.205727"
       cy="249.55966"
       rx="9.2876158"
       ry="8.9535294" />
    <ellipse
       ry="8.9535294"
       rx="9.2876158"
       cy="274.81665"
       cx="91.072083"
       id="5-5"
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <ellipse
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="4-1"
       cx="59.801556"
       cy="175.79327"
       rx="9.2876158"
       ry="8.9535294" />
    <ellipse
       ry="8.9535294"
       rx="9.2876158"
       cy="200.64934"
       cx="59.667919"
       id="4-2"
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <ellipse
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="4-3"
       cx="59.667919"
       cy="224.7036"
       rx="9.2876158"
       ry="8.9535294" />
    <ellipse
       ry="8.9535294"
       rx="9.2876158"
       cy="249.6933"
       cx="60.068829"
       id="4-4"
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <ellipse
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="4-5"
       cx="59.935184"
       cy="274.95029"
       rx="9.2876158"
       ry="8.9535294" />
    <ellipse
       ry="8.9535294"
       rx="9.2876158"
       cy="175.79326"
       cx="30.535538"
       id="3-1"
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <ellipse
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="3-2"
       cx="30.134632"
       cy="200.64932"
       rx="9.2876158"
       ry="8.9535294" />
    <ellipse
       ry="8.9535294"
       rx="9.2876158"
       cy="224.70358"
       cx="30.134632"
       id="3-3"
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <ellipse
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="3-4"
       cx="30.535542"
       cy="249.69328"
       rx="9.2876158"
       ry="8.9535294" />
    <ellipse
       ry="8.9535294"
       rx="9.2876158"
       cy="274.95029"
       cx="30.401897"
       id="3-5"
       style="opacity:1;fill:#00aad4;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <path
       id="6-x"
       style="opacity:1;fill:#ff0000;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 111.719,158.21133 2.79702,-2.79702 10.43214,10.43214 -2.79703,2.79703 z m 0.0756,7.63512 10.35654,-10.35655 2.64583,2.64583 -10.35654,10.35655 z"
       inkscape:connector-curvature="0" />
    <path
       inkscape:connector-curvature="0"
       d="m 84.858409,157.54316 2.79702,-2.79703 10.432125,10.43214 -2.797025,2.79703 z m 0.0756,7.63511 10.35653,-10.35654 2.645825,2.64583 -10.356525,10.35654 z"
       style="opacity:1;fill:#ff0000;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="5-x"
       inkscape:label="#5-x" />
    <path
       id="4-x"
       style="opacity:1;fill:#ff0000;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 53.587874,157.94406 2.79702,-2.79702 10.432138,10.43214 -2.79703,2.79703 z m 0.0756,7.63512 10.356538,-10.35655 2.64583,2.64583 -10.356538,10.35655 z"
       inkscape:connector-curvature="0" />
    <path
       inkscape:connector-curvature="0"
       d="m 23.505401,157.99418 2.79702,-2.79703 10.432138,10.43215 -2.79703,2.79702 z m 0.0756,7.63511 10.356538,-10.35654 2.64583,2.64583 -10.356538,10.35655 z"
       style="opacity:1;fill:#ff0000;fill-opacity:1;stroke:none;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="3-x" />
  </g>
</svg>`,

	//svg representing a keyboard chord
	KeyboardChordTemplate: `<div class="chord-div keyboard" instrument="keyboard" name="{{unique-name}}" style="width:fit-content;display:inline-block;">
	<div class="chord-name" name="{{unique-name}}" style="font-size:20px;font-family:Arial;text-align:center;">{{name}}</div><?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="240px"
   height="70px"
   style="margin-top:-5px;" 
   viewBox="0 0 120 40"
   version="1.1"
   id="svg8"
   inkscape:version="0.92.5 (2060ec1f9f, 2020-04-08)"
   sodipodi:docname="piano_diagram_small.svg">
  <defs
     id="defs2" />
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="1.6150167"
     inkscape:cx="421.45748"
     inkscape:cy="125.69529"
     inkscape:document-units="mm"
     inkscape:current-layer="layer1"
     showgrid="false"
     inkscape:snap-global="false"
     inkscape:window-width="1920"
     inkscape:window-height="986"
     inkscape:window-x="2389"
     inkscape:window-y="-11"
     inkscape:window-maximized="1" />
  <metadata
     id="metadata5">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1"
     transform="translate(0,-257)"
     style="display:inline">
    <rect
       style="fill:#ffffff;stroke-width:0.06414709"
       id="key_C4"
       width="7.9328046"
       height="32.350758"
       x="3.5941927"
       y="260.96301"
       inkscape:label="#rect10" />
    <rect
       style="fill:#ffffff;stroke-width:0.06414709"
       id="key_D4"
       width="7.9328046"
       height="32.350758"
       x="12.300621"
       y="260.96301"
       inkscape:label="#rect10-1" />
    <rect
       style="fill:#ffffff;stroke-width:0.06414709"
       id="key_E4"
       width="7.9328046"
       height="32.350758"
       x="21.085978"
       y="260.9227"
       inkscape:label="#rect10-1-0" />
    <rect
       style="fill:#ffffff;stroke-width:0.06414709"
       id="key_F4"
       width="7.9328046"
       height="32.350758"
       x="29.853725"
       y="260.9227"
       inkscape:label="#rect10-1-0-7" />
    <rect
       style="fill:#ffffff;stroke-width:0.06414709"
       id="key_G4"
       width="7.9328046"
       height="32.350758"
       x="38.64333"
       y="260.86945"
       inkscape:label="#rect10-2" />
    <rect
       style="fill:#ffffff;stroke-width:0.06414709"
       id="key_A4"
       width="7.9328046"
       height="32.350758"
       x="47.349758"
       y="260.86945"
       inkscape:label="#rect10-1-4" />
    <rect
       style="fill:#ffffff;stroke-width:0.06414709"
       id="key_B4"
       width="7.9328046"
       height="32.350758"
       x="56.135113"
       y="260.8291"
       inkscape:label="#rect10-1-0-9" />
    <rect
       style="fill:#ffffff;stroke-width:0.06414709"
       id="key_C5"
       width="7.9328046"
       height="32.350758"
       x="64.902863"
       y="260.8291"
       inkscape:label="#rect10-1-0-7-0" />
    <rect
       style="fill:#ffffff;stroke-width:0.06414709"
       id="key_D5"
       width="7.9328046"
       height="32.350758"
       x="73.628357"
       y="260.79602"
       inkscape:label="#rect10-0" />
    <rect
       style="fill:#ffffff;stroke-width:0.06414709"
       id="key_E5"
       width="7.9328046"
       height="32.350758"
       x="82.334785"
       y="260.79602"
       inkscape:label="#rect10-1-6" />
    <rect
       style="fill:#ffffff;stroke-width:0.06414709"
       id="key_F5"
       width="7.9328046"
       height="32.350758"
       x="91.120132"
       y="260.75568"
       inkscape:label="#rect10-1-0-97" />
    <rect
       style="fill:#ffffff;stroke-width:0.06414709"
       id="key_G5"
       width="7.9328046"
       height="32.350758"
       x="99.887878"
       y="260.75568"
       inkscape:label="#rect10-1-0-7-5" />
    <rect
       style="fill:#333333;stroke-width:0.06141884"
       id="key_Db4"
       width="6.1030393"
       height="21.803621"
       x="8.8062572"
       y="261.09406"
       ry="0"
       inkscape:label="#rect99" />
    <rect
       style="fill:#333333;stroke-width:0.06141884"
       id="key_Eb4"
       width="6.1030393"
       height="21.803621"
       x="17.445068"
       y="261.05734"
       ry="0"
       inkscape:label="#rect99-9" />
    <rect
       style="fill:#333333;stroke-width:0.06141884"
       id="key_Gb4"
       width="6.1030393"
       height="21.803621"
       x="34.808643"
       y="260.98392"
       ry="0"
       inkscape:label="#rect99-1" />
    <rect
       style="fill:#333333;stroke-width:0.06141884"
       id="key_Ab4"
       width="6.1030393"
       height="21.803621"
       x="43.920231"
       y="260.91052"
       ry="0"
       inkscape:label="#rect99-6" />
    <rect
       style="fill:#333333;stroke-width:0.06141884"
       id="key_Bb4"
       width="6.1030393"
       height="21.803621"
       x="52.430099"
       y="260.83713"
       ry="0"
       inkscape:label="#rect99-8" />
    <rect
       style="fill:#333333;stroke-width:0.06141884"
       id="key_Db5"
       width="6.1030393"
       height="21.803621"
       x="70.051552"
       y="260.76367"
       ry="0"
       inkscape:label="#rect99-61" />
    <rect
       style="fill:#333333;stroke-width:0.06141884"
       id="key_Eb5"
       width="6.1030393"
       height="21.803621"
       x="78.647369"
       y="260.83713"
       ry="0"
       inkscape:label="#rect99-5" />
    <rect
       style="fill:#333333;stroke-width:0.06141884"
       id="key_Gb5"
       width="6.1030393"
       height="21.803621"
       x="96.268837"
       y="260.76367"
       ry="0"
       inkscape:label="#rect99-2" />
    <rect
       style="fill:#333333;stroke-width:0.04312275"
       id="key_Ab5"
       width="3.0085404"
       height="21.803621"
       x="104.95061"
       y="260.69028"
       ry="0"
       inkscape:label="#rect99-87" />


    <path
	   class="keyboard-outline" 
       style="opacity:1;fill:#333333;stroke:#000000;stroke-width:0.11234274;stroke-opacity:1"
       d="m 2.877268,277.20074 v -16.87099 h 52.940858 52.940864 v 16.87099 16.87098 H 55.818126 2.877268 Z m 8.631001,10.95316 v -5.19108 h 0.363555 0.363556 l 0.03152,5.16512 0.03152,5.16512 3.981201,0.0274 3.981202,0.0274 v -5.2444 -5.24441 h 0.425471 0.425473 v 5.19108 5.19107 h 3.95081 3.950811 v -16.14037 -16.14037 l -12.703376,-4.5e-4 -12.7033739,-4.5e-4 v 16.19274 16.19274 h 3.9508103 3.9508096 z m 26.257693,-0.10382 V 282.859 h 0.425473 0.425471 v 5.1925 5.19249 l 3.981201,-0.0274 3.9812,-0.0274 0.03151,-5.21702 0.03151,-5.21703 h 0.363565 0.363567 v 5.24298 5.24298 h 3.95081 3.950809 v -5.29489 -5.29489 h 0.424361 0.424356 l 0.0315,5.26894 0.0315,5.26893 3.92042,0.0274 3.920419,0.0274 V 277.0632 260.88242 l -4.041982,-0.0637 c -2.223091,-0.035 -8.719135,-0.0212 -14.435653,0.0307 -5.71652,0.0519 -11.583472,0.0964 -13.037676,0.0988 l -2.644001,0.004 v 16.14423 16.14425 h 3.950809 3.950809 z m 35.102541,-0.12977 0.0315,-5.26895 h 0.363581 0.363573 v 5.24299 5.24298 h 3.950809 3.950815 v -5.24298 -5.24299 h 0.425468 0.425476 v 5.24299 5.24298 h 3.950809 3.950811 v -16.19615 -16.19615 h -8.854307 c -4.869866,0 -10.586386,0.0309 -12.703369,0.0686 l -3.849075,0.0686 v 16.11017 c 0,8.86058 0.03722,16.14195 0.08269,16.18079 0.04549,0.0389 1.837021,0.0583 3.981202,0.0432 l 3.898506,-0.0274 z m 26.165415,-0.026 v -5.24299 h 0.42547 0.425471 v 5.24299 5.24298 h 3.950811 3.95081 v -5.29489 c 0,-3.46072 0.0421,-5.2949 0.12157,-5.2949 0.0803,0 0.12156,-3.72575 0.12156,-10.96962 v -10.96961 l -2.39004,0.0683 c -1.31452,0.0376 -5.11641,0.0684 -8.448656,0.0684 h -6.058622 v 16.19615 16.19615 h 3.950818 3.950808 z"
       id="path844"
       inkscape:connector-curvature="0" />

  </g>
</svg>`
}
Chords.Init();