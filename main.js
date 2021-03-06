	var purpleSkin = new Skin( { fill:"#6060A8" } );

	var tempNamesStyle = new Style( { font: "bold 16px", color:"black" } );
	var titleStyle = new Style ({ font: "bold 30px Copperplate Gothic Light", color: "#BBBBE1" } );
	var thisIsEqStyle = new Style( { font: "bold 12px Copperplate Gothic Light", color:"#BBBBE1" } );
	var sliderNumStyle = new Style({font: "bold 60px", color: "#BBBBE1" });
	var buttonStyle = new Style({ font: "bold 17px Book Antiqua", color: "black"});
	var blueButtonStyle = new Style({ font: "bold 15px Book Antiqua", color: "blue"});
	
	var cStyle = new Style({font: "bold 27px", color: "#20476D" });
	var fStyle = new Style({font: "bold 27px", color: "#8A8AC5" });
	var dStyle = new Style({font: "bold 27px", color: "#422372" });
	var rStyle = new Style({font: "bold 27px", color: "#292975" });
	var kStyle = new Style({font: "bold 27px", color: "#7E9DBB" });
	var nStyle = new Style({font: "bold 27px", color: "#40408D" });
	
	var cStyleSmall = new Style({font: "bold 17px Book Antiqua", color: "#20476D" });
	var fStyleSmall = new Style({font: "bold 17px Book Antiqua", color: "#8A8AC5" });
	var dStyleSmall = new Style({font: "bold 17px Book Antiqua", color: "#422372" });
	var rStyleSmall = new Style({font: "bold 17px Book Antiqua", color: "#292975" });
	var kStyleSmall = new Style({font: "bold 17px Book Antiqua", color: "#7E9DBB" });
	var nStyleSmall = new Style({font: "bold 17px Book Antiqua", color: "#40408D" });
	
			
	var THEME = require('themes/flat/theme');
	THEME.labeledButtonStyle = buttonStyle;
	var BUTTONS = require('controls/buttons');
	var SLIDERS = require('controls/sliders');
	
	var fVal, cVal, kVal, rVal, dVal, nVal;
	var celsiusIn, fahrenheitIn, kelvinIn, rankineIn, delisleIn, newtIn;
	var celsiusOut, fahrenheitOut, kelvinOut, rankineOut, delisleOut, newtOut;
	
	var backCon = new Container({
		left:0, right:0, top:0, bottom:0,
		skin: purpleSkin,
		contents:[
			new Label({left:0, right:0, top:0, height: 60, string: "Temp to Temp", style: titleStyle})
		]
	});
	
		// the slider bar, sets new tempLabel for any changes to slider, and recalculates if a scale is collected
		var mySlider = SLIDERS.HorizontalSlider.template(function($){ return {
			top: 50, height: 50, left:0, right:0,
			behavior: Object.create(SLIDERS.HorizontalSliderBehavior.prototype, {
				onValueChanged: { value: function(container){
					SLIDERS.HorizontalSliderBehavior.prototype.onValueChanged.call(this, container);
					var numVal = Math.round(this.data.value);
					tempLabel.string = "" + numVal;
					if (celsiusIn || fahrenheitIn || kelvinIn || rankineIn || newtIn || delisleIn){
						calcTemp();
					}
			}}})
		}});
		
		// the label inside the temperature display container (read from slider bar)
		var tempLabel = new Label({left:90, right:0, top:50, height: 80, string: "", style: sliderNumStyle});
		var tempLabel2 = new Label({left:90, right:0, top:50, height: 80, string: "0", style: sliderNumStyle});
		
		var inputLabel = new Label({left:90, right:0, top:15, height: 80, string: "INPUT", style: blueButtonStyle});
		var outputLabel = new Label({left:90, right:0, top:80, height: 80, string: "OUTPUT", style: blueButtonStyle});
		
		
		// the temperature display container (reads data from the slider bar)
		var initTempCon = new Container({
			left:0, 
			right:100, 
			top: 60, 
			bottom:260,
			contents:[
				inputLabel, tempLabel
			]
		});
		
		var outputTempCon = new Container({
			left:0, 
			right:100, 
			top: 160, 
			bottom:200,
			contents:[
				outputLabel, tempLabel2
			]
		});
		
		
		// a radio group, one button for each temperature scale being used, with a listened that sets the boolean value for the temperature scale selected to true
		var myRadioGroup = BUTTONS.RadioGroup.template(function($){ return {
			top:100, bottom: 0, left: 0, right: 0, height:50, 
			behavior: Object.create(BUTTONS.RadioGroupBehavior.prototype, {
				onRadioButtonSelected: { value: function(buttonName){
					trace("Radio button with name " + buttonName + " was selected. \n");
					if (buttonName == "\u00B0 Celsius"){
						inputLabel.string = "INPUT (\u00B0 C)";
						inputLabel.style = cStyleSmall;
						celsiusIn = true;
						fahrenheitIn = false;
						kelvinIn = false;
						rankineIn = false;
						delisleIn = false;
						newtIn = false;
					} else if (buttonName == "\u00B0 Fahrenheit"){
						inputLabel.string = "INPUT (\u00B0 F)";
						inputLabel.style = fStyleSmall;		
						fahrenheitIn = true;
						celsiusIn = false;
						rankineIn = false;
						kelvinIn = false;
					} else if (buttonName == "Kelvin") {
						inputLabel.string = "INPUT (Kelvin)";
						inputLabel.style = kStyleSmall;
						kelvinIn = true;
						fahrenheitIn = false;
						rankineIn = false;
						celsiusIn = false;
						delisleIn = false;
						newtIn = false;
					} else if (buttonName == "Rankine"){
						inputLabel.string = "INPUT (Rankine)";
						inputLabel.style = rStyleSmall;
						rankineIn = true;
						delisleIn = false;
						newtIn = false;
						fahrenheitIn = false;
						celsiusIn = false;
						kelvinIn = false;
					} else if (buttonName == "Delisle"){
						inputLabel.string = "INPUT (Delisle)";
						inputLabel.style = dStyleSmall;
						delisleIn = true;
						newtIn = false;
						rankineIn = false;
						fahrenheitIn = false;
						celsiusIn = false;
						kelvinIn = false;
					} else if (buttonName == "Newton"){
						inputLabel.string = "INPUT (Newton)";
						inputLabel.style = nStyleSmall;
						newtIn = true;
						delisleIn = false;
						rankineIn = false;
						fahrenheitIn = false;
						celsiusIn = false;
						kelvinIn = false;
					} 
					calcTemp();

			}}})
		}});
		
		
		// a radio group, one button for each temperature scale being used, with a listened that sets the boolean value for the temperature scale selected to true
		var myRadioGroup2 = BUTTONS.RadioGroup.template(function($){ return {
			top:100, bottom: 0, left: 210, right: 0, height:50, 
			behavior: Object.create(BUTTONS.RadioGroupBehavior.prototype, {
				onRadioButtonSelected: { value: function(buttonName){
					trace("Radio button with name " + buttonName + " was selected. \n");
					if (buttonName == "\u00B0 Celsius"){
						outputLabel.string = "OUTPUT (\u00B0 C)";
						outputLabel.style = cStyleSmall;
						celsiusOut = true;
						fahrenheitOut = false;
						kelvinOut = false;
						rankineOut = false;
						delisleOut = false;
						newtOut = false;
					} else if (buttonName == "\u00B0 Fahrenheit"){
						outputLabel.string = "OUTPUT (\u00B0 F)";
						outputLabel.style = fStyleSmall;
						fahrenheitOut = true;
						celsiusOut = false;
						rankineOut = false;
						kelvinOut = false;
						delisleOut = false;
						newtOut = false;
					} else if (buttonName == "Kelvin") {
						outputLabel.string = "OUTPUT (Kelvin)";
						outputLabel.style = kStyleSmall;
						kelvinOut = true;
						fahrenheitOut = false;
						rankineOut = false;
						celsiusOut = false;
						delisleOut = false;
						newtOut = false;
					} else if (buttonName == "Rankine"){
						outputLabel.string = "OUTPUT (Rankine)";
						outputLabel.style = rStyleSmall;
						rankineOut = true;
						fahrenheitOut = false;
						celsiusOut = false;
						kelvinOut = false;
						delisleOut = false;
						newtOut = false;
					} else if (buttonName == "Delisle"){
						outputLabel.string = "OUTPUT (Delisle)";
						outputLabel.style = dStyleSmall;
						delisleOut = true;
						newtOut = false;
						rankineOut = false;
						fahrenheitOut = false;
						celsiusOut = false;
						kelvinOut = false;
					} else if (buttonName == "Newton"){
						outputLabel.string = "OUTPUT (Newton)";
						outputLabel.style = nStyleSmall;
						newtOut = true;
						delisleOut = false;
						rankineOut = false;
						fahrenheitOut = false;
						celsiusOut = false;
						kelvinOut = false;
					} 
					calcTemp();
					trace(celsLabel.string + "\n");
					trace(fahrLabel.string + "\n");
					trace(kelvLabel.string + "\n");
					trace(rankLabel.string + "\n");
			}}})
		}});
		

		// creation of both the slider + radio buttons
		var slider = new mySlider({ min: 0, max: 350, value: 175, });
		var radioGroup = new myRadioGroup({style: tempNamesStyle, buttonNames:"\u00B0 Celsius,\u00B0 Fahrenheit,Kelvin,Rankine,Delisle,Newton" });
		var radioGroup2 = new myRadioGroup2({style: tempNamesStyle, buttonNames:"\u00B0 Celsius,\u00B0 Fahrenheit,Kelvin,Rankine,Delisle,Newton" });
		
		// the transition between input + output
		var displayCon = new Container({
			left:0, right:0, top:320, bottom:0,
			contents:[
				new Label({
					left:0, right:0, top:0, height: 40,
					string: "If you're curious, this is equivalent to... ", 
					style: thisIsEqStyle, 
					editable: true})
			]
		});
		
		
		
		// the converted temperature displays, different labels for the name + numbers
		var celsLabel = new Label({left:0, right:0, top:20, height: 40, string: "\u00B0 CELSIUS", style: tempNamesStyle});
		var fahrLabel = new Label({left:0, right:0, top:20, height: 40, string: "\u00B0 FAHRENHEIT", style: tempNamesStyle});
		var kelvLabel = new Label({left:0, right:0, top:80, height: 40, string: "KELVIN", style: tempNamesStyle});
		var rankLabel = new Label({left:0, right:0, top:80, height: 40, string: "RANKINE", style: tempNamesStyle});
		var deliLabel = new Label({left:0, right:0, top:140, height: 40, string: "DELISLE", style: tempNamesStyle});
		var newtLabel = new Label({left:0, right:0, top:140, height: 40, string: "NEWTON", style: tempNamesStyle});
		
		var celsTemp = new Label({left:0, right:0, top:0, height: 40, string: "0", style: cStyle});
		var fahrTemp = new Label({left:0, right:0, top:0, height: 40, string: "0", style: fStyle});
		var kelvTemp = new Label({left:0, right:0, top:60, height: 40, string: "0", style: kStyle});
		var rankTemp = new Label({left:0, right:0, top:60, height: 40, string: "0", style: rStyle});
		var deliTemp = new Label({left:0, right:0, top:120, height: 40, string: "0", style: dStyle});
		var newtTemp = new Label({left:0, right:0, top:120, height: 40, string: "0", style: nStyle});
		
		// half of the labels
		var tempCon = new Container({
			left:0, 
			right:150, 
			top:350, 
			bottom:0,
			contents:[
			fahrTemp, fahrLabel, kelvTemp, kelvLabel, newtTemp, newtLabel
			]
		});
		
		// the other half
		var tempCon2 = new Container({
			left:150, 
			right:0, 
			top:350, 
			bottom:0,
			contents:[
				celsTemp, celsLabel, rankTemp, rankLabel, deliTemp, deliLabel
			]
		});
				
		// TEMPERATURE CONVERSION FORMULAS, i.e where the math happens
		function calcTemp(){
			tempVal = Math.round(slider.behavior.data.value);
			
			if (celsiusIn){
				cVal = tempVal;
				fVal = (cVal * (9/5) + 32).toFixed(2);
				kVal = (cVal + 273.15).toFixed(2);
				rVal = ((cVal + 273.15)*(9/5)).toFixed(2);
				dVal = ((100 - cVal) * (3/2)).toFixed(2);
				nVal = (cVal * (33/100)).toFixed(2);
			} else if (fahrenheitIn){
				fVal = tempVal;
				cVal = ((fVal - 32) * (5/9)).toFixed(2);
				kVal = ((fVal + 459.67) * (5/9)).toFixed(2);
				rVal = (fVal + 459.67).toFixed(2);
				dVal = ((212 - fVal) * (5/6)).toFixed(2);
				nVal = ((fVal - 32) * (11/60)).toFixed(2);
			} else if (kelvinIn) {
				kVal = tempVal;
				fVal = ((kVal * 9/5) - 459.67).toFixed(2);
				cVal = (kVal - 273.15).toFixed(2);
				rVal = (kVal * (9/5)).toFixed(2);
				dVal = ((373.15 - kVal) * (3/2)).toFixed(2);
				nVal = ((kVal - 273.15) * (33/100)).toFixed(2);
			} else if (rankineIn){
				rVal = tempVal;
				fVal = (rVal - 459.67).toFixed(2);
				cVal = ((rVal - 491.67) * (5/9)).toFixed(2);
				kVal = (rVal * (5/9)).toFixed(2);
				dVal = ((671.67 - rVal) * (5/6)).toFixed(2);
				nVal = ((rVal - 491.67) * (11/60)).toFixed(2);	
			} else if (newtIn) {
				nVal = tempVal;
				cVal = (nVal * (100/33)).toFixed(2);
				fVal = ((nVal * (60/11)) + 32).toFixed(2);
				rVal = (nVal * (60/11) + 491.67).toFixed(2);
				dVal = ((33 - nVal) * (50/11)).toFixed(2);
				kVal = (nVal * (100/33) + 273.15).toFixed(2);
			} else if (delisleIn) {
				dVal = tempVal;
				rVal = (671.67 - dVal * (6/5)).toFixed(2);
				fVal = (212 - dVal * (6/5)).toFixed(2);
				cVal = (100 - dVal * (2/3)).toFixed(2);
				nVal = (33 - dVal *(11/50)).toFixed(2);
				kVal = (373.15 - (dVal * (2/3))).toFixed(2);
			} 
			celsTemp.string = cVal;
			fahrTemp.string = fVal;
			kelvTemp.string = kVal;
			rankTemp.string = rVal;
			newtTemp.string = nVal;
			deliTemp.string = dVal;
			
			if (celsiusOut){
				tempLabel2.string = Math.round(cVal);
			} else if (fahrenheitOut){
				tempLabel2.string = Math.round(fVal);
			} else if (kelvinOut) {
				tempLabel2.string = Math.round(kVal);
			} else if (rankineOut){
				tempLabel2.string =Math.round(rVal);
			} else if (newtOut) {
				tempLabel2.string = Math.round(nVal);
			} else if (delisleOut) {
				tempLabel2.string = Math.round(dVal);
			} 
			
		}
	
	// add all containers to the application so they're displayed
	application.add(backCon);
	application.add(displayCon);
	application.add(tempCon);
	application.add(tempCon2);
	application.add(initTempCon);
	application.add(outputTempCon);
	backCon.add(radioGroup);
	backCon.add(radioGroup2);
	backCon.add(slider);

	
	
