function EraImage(form) {
		era = form.era.value;
		if(era=="PikeNShot")
			document.getElementById("eraimage").innerHTML="<img src=\"Tercio.png\" width=\"475px\">";
		if(era=="LineWarfare")
			document.getElementById("eraimage").innerHTML="<img src=\"LineInfantry.png\" width=\"475px\">";
		if(era=="VictorianEra")
			document.getElementById("eraimage").innerHTML="<img src=\"Victorian.png\" width=\"475px\">";
	}
	
	function TerrainImage(form) {
		terrain = form.terrain.value;
		if(terrain=="Forest")
			document.getElementById("terrainimage").innerHTML="<img src=\"Forest.png\" width=\"475px\">";
		if(terrain=="Hills")
			document.getElementById("terrainimage").innerHTML="<img src=\"hills.png\" width=\"475px\">";
		if(terrain=="Jungle")
			document.getElementById("terrainimage").innerHTML="<img src=\"jungle.png\" width=\"475px\">";
		if(terrain=="Mountains")
			document.getElementById("terrainimage").innerHTML="<img src=\"mountains.png\" width=\"475px\">";
		if(terrain=="Plains")
			document.getElementById("terrainimage").innerHTML="<img src=\"plains.png\" width=\"475px\">";
	}
	
	function Battle() {
		var audio = new Audio('battle.mp3');
		audio.play();
	
		Era = document.getElementById('Era').value;
		Terrain = document.getElementById('Terrain').value;
		Fortifications = document.getElementById('Fortifications').value;
		River = document.getElementById('River').value;
		
		DLevies = document.getElementById('DLevies').value * 1;
		DMilitia = document.getElementById('DMilitia').value * 1;
		DLightInfantry = document.getElementById('DLightInfantry').value * 1;
		DHeavyInfantry = document.getElementById('DHeavyInfantry').value * 1;
		DArchers = document.getElementById('DArchers').value * 1;
		DCrossbowmen = document.getElementById('DCrossbowmen').value * 1;
		DHandCannoneers = document.getElementById('DHandCannoneers').value * 1;
		DMusketeers = document.getElementById('DMusketeers').value * 1;
		DRiflemen = document.getElementById('DRiflemen').value * 1;
		DLightCavalry = document.getElementById('DLightCavalry').value * 1;
		DHeavyCavalry = document.getElementById('DHeavyCavalry').value * 1;
		DCannons = document.getElementById('DCannons').value * 1;
		DEliteInfantry = document.getElementById('DEliteInfantry').value * 1;
		DEliteCavalry = document.getElementById('DEliteCavalry').value * 1;
		DQuality = document.getElementById('DQuality').value * 1;
		DMorale = document.getElementById('DMorale').value * 1;
		DDiscipline = document.getElementById('DDiscipline').value * 1;
		DGMTacticsAdvantage = document.getElementById('DGMTacticsAdvantage').value * 1;
	
		ALevies = document.getElementById('ALevies').value * 1;
		AMilitia = document.getElementById('AMilitia').value * 1;
		ALightInfantry = document.getElementById('ALightInfantry').value * 1;
		AHeavyInfantry = document.getElementById('AHeavyInfantry').value * 1;
		AArchers = document.getElementById('AArchers').value * 1;
		ACrossbowmen = document.getElementById('ACrossbowmen').value * 1;
		AHandCannoneers = document.getElementById('AHandCannoneers').value * 1;
		AMusketeers = document.getElementById('AMusketeers').value * 1;
		ARiflemen = document.getElementById('ARiflemen').value * 1;
		ALightCavalry = document.getElementById('ALightCavalry').value * 1;
		AHeavyCavalry = document.getElementById('AHeavyCavalry').value * 1;
		ACannons = document.getElementById('ACannons').value * 1;
		AEliteInfantry = document.getElementById('AEliteInfantry').value * 1;
		AEliteCavalry = document.getElementById('AEliteCavalry').value * 1;
		AQuality = document.getElementById('AQuality').value * 1;
		AMorale = document.getElementById('AMorale').value * 1;
		ADiscipline = document.getElementById('ADiscipline').value * 1;
		AGMTacticsAdvantage = document.getElementById('AGMTacticsAdvantage').value * 1;
		
		if(Era=="PikeNShot") {
			var DLeviesEff = 0.35 * 1;
			var DMilitiaEff = 0.5 * 1;
			var DLightInfantryEff = 0.7 * 1;
			var DHeavyInfantryEff = 1 * 1;
			var DArchersEff = 0.5 * 1;
			var DCrossbowmenEff = 0.5 * 1;
			var DHandCannoneersEff = 0.5 * 1;
			var DMusketeersEff = 1 * 1;
			var DRiflemenEff = 1 * 1;
			var DLightCavalryEff = 0.85 * 1;
			var DHeavyCavalryEff = 1.1 * 1;
			var DCannonsEff = 25 * 1;
			var DEliteInfantryEff = 1.3 * 1;
			var DEliteCavalryEff = 1.4 * 1;
			
			var ALeviesEff = 0.25 * 1;
			var AMilitiaEff = 0.5 * 1;
			var ALightInfantryEff = 0.7 * 1;
			var AHeavyInfantryEff = 1 * 1;
			var AArchersEff = 0.5 * 1;
			var ACrossbowmenEff = 0.5 * 1;
			var AHandCannoneersEff = 0.5 * 1;
			var AMusketeersEff = 1 * 1;
			var ARiflemenEff = 1 * 1;
			var ALightCavalryEff = 0.85 * 1;
			var AHeavyCavalryEff = 1.1 * 1;
			var ACannonsEff = 25 * 1;
			var AEliteInfantryEff = 1.3 * 1;
			var AEliteCavalryEff = 1.4 * 1;
			
		}
		
		if(Era=="LineWarfare") {
			var DLeviesEff = 0.2 * 1;
			var DMilitiaEff = 0.75 * 1;
			var DLightInfantryEff = 0.5 * 1;
			var DHeavyInfantryEff = 0.4 * 1;
			var DArchersEff = 0.25 * 1;
			var DCrossbowmenEff = 0.25 * 1;
			var DHandCannoneersEff = 0.25 * 1;
			var DMusketeersEff = 1.25 * 1;
			var DRiflemenEff = 1.5 * 1;
			var DLightCavalryEff = 1.2 * 1;
			var DHeavyCavalryEff = 1.2 * 1;
			var DCannonsEff = 50 * 1;
			var DEliteInfantryEff = 1.75 * 1;
			var DEliteCavalryEff = 1.75 * 1;
			
			var ALeviesEff = 0.2 * 1;
			var AMilitiaEff = 0.75 * 1;
			var ALightInfantryEff = 0.5 * 1;
			var AHeavyInfantryEff = 0.4 * 1;
			var AArchersEff = 0.25 * 1;
			var ACrossbowmenEff = 0.25 * 1;
			var AHandCannoneersEff = 0.25 * 1;
			var AMusketeersEff = 1.25 * 1;
			var ARiflemenEff = 1.5 * 1;
			var ALightCavalryEff = 1.2 * 1;
			var AHeavyCavalryEff = 1.2 * 1;
			var ACannonsEff = 50 * 1;
			var AEliteInfantryEff = 1.75 * 1;
			var AEliteCavalryEff = 1.75 * 1;
			
		}
		
		if(Era=="VictorianEra") {
			var DLeviesEff = 0.2 * 1;
			var DMilitiaEff = 1 * 1;
			var DLightInfantryEff = 0.3 * 1;
			var DHeavyInfantryEff = 0.25 * 1;
			var DArchersEff = 0.2 * 1;
			var DCrossbowmenEff = 0.2 * 1;
			var DHandCannoneersEff = 0.2 * 1;
			var DMusketeersEff = 1.25 * 1;
			var DRiflemenEff = 2.5 * 1;
			var DLightCavalryEff = 1.3 * 1;
			var DHeavyCavalryEff = 1.3 * 1;
			var DCannonsEff = 100 * 1;
			var DEliteInfantryEff = 3 * 1;
			var DEliteCavalryEff = 2.5 * 1;
			
			var ALeviesEff = 0.2 * 1;
			var AMilitiaEff = 1 * 1;
			var ALightInfantryEff = 0.3 * 1;
			var AHeavyInfantryEff = 0.25 * 1;
			var AArchersEff = 0.2 * 1;
			var ACrossbowmenEff = 0.2 * 1;
			var AHandCannoneersEff = 0.2 * 1;
			var AMusketeersEff = 1.25 * 1;
			var ARiflemenEff = 2.5 * 1;
			var ALightCavalryEff = 1.3 * 1;
			var AHeavyCavalryEff = 1.3 * 1;
			var ACannonsEff = 100 * 1;
			var AEliteInfantryEff = 3 * 1;
			var AEliteCavalryEff = 2.5 * 1;
			
		}
		
		if(DQuality > AQuality) {
			var DQualityAdv = DQuality - AQuality;
			var AQualityAdv = 0 * 1;
		}
		if(AQuality > DQuality) {
			var AQualityAdv = AQuality - DQuality;
			var DQualityAdv = 0 * 1;
		}
		if(AQuality == DQuality) {
			var AQualityAdv = 0 * 1;
			var DQualityAdv = 0 * 1;
		}
		
		if(DMorale > AMorale) {
			var DMoraleAdv = DMorale - AMorale;
			var AMoraleAdv = 0 * 1;
		}
		if(AMorale > DMorale) {
			var AMoraleAdv = AMorale - DMorale;
			var DMoraleAdv = 0 * 1;
		}
		if(AMorale == DMorale) {
			var AMoraleAdv = 0 * 1;
			var DMoraleAdv = 0 * 1;
		}
		
		if(DDiscipline > ADiscipline) {
			var DDisciplineAdv = DDiscipline - ADiscipline;
			var ADisciplineAdv = 0 * 1;
		}
		if(ADiscipline > DDiscipline) {
			var ADisciplineAdv = ADiscipline - DDiscipline;
			var DDisciplineAdv = 0 * 1;
		}
		if(ADiscipline == DDiscipline) {
			var ADisciplineAdv = 0 * 1;
			var DDisciplineAdv = 0 * 1;
		}
		
		Dice = document.getElementById('Dice').value;
		if(Dice=="None") {
			var ADiceAdv = 0 * 1;
			var DDiceAdv = 0 * 1;
		}
		if(Dice=="SmallDice") {
			var ADiceAdv = Math.floor(Math.random() * 3);
			var DDiceAdv = Math.floor(Math.random() * 3);
		}
		if(Dice=="BigDice") {
			var ADiceAdv = Math.floor(Math.random() * 6);
			var DDiceAdv = Math.floor(Math.random() * 6);
		}
		
		if(Terrain=="Forest"){
			DLeviesEff = DLeviesEff;
			DMilitiaEff = DMilitiaEff;
			DLightInfantryEff = DLightInfantryEff * 1.4;
			DHeavyInfantryEff = DHeavyInfantryEff * 0.75;
			DArchersEff = DArchersEff * 1.3;
			DCrossbowmenEff = DCrossbowmenEff * 1.3;
			DHandCannoneersEff = DHandCannoneersEff;
			DMusketeersEff = DMusketeersEff * 0.95;
			DRiflemenEff = DRiflemenEff * 1.35;
			DLightCavalryEff = DLightCavalryEff * 0.9;
			DHeavyCavalryEff = DHeavyCavalryEff * 0.75;
			DCannonsEff = DCannonsEff * 0.7;
			DEliteInfantryEff = DEliteInfantryEff * 1.4;
			DEliteCavalryEff = DEliteCavalryEff;
			
			ALeviesEff = ALeviesEff;
			AMilitiaEff = AMilitiaEff;
			ALightInfantryEff = ALightInfantryEff * 1.35;
			AHeavyInfantryEff = AHeavyInfantryEff * 0.7;
			AArchersEff = AArchersEff * 1.2;
			ACrossbowmenEff = ACrossbowmenEff * 1.2;
			AHandCannoneersEff = AHandCannoneersEff;
			AMusketeersEff = AMusketeersEff * 0.85;
			ARiflemenEff = ARiflemenEff * 1.25;
			ALightCavalryEff = ALightCavalryEff * 0.9;
			AHeavyCavalryEff = AHeavyCavalryEff * 0.75;
			ACannonsEff = ACannonsEff * 0.7;
			AEliteInfantryEff = AEliteInfantryEff * 1.35;
			AEliteCavalryEff = AEliteCavalryEff;
		}
		
		if(Terrain=="Hills"){
			DLeviesEff = DLeviesEff * 1.15;
			DMilitiaEff = DMilitiaEff * 1.15;
			DLightInfantryEff = DLightInfantryEff * 1.15;
			DHeavyInfantryEff = DHeavyInfantryEff * 1.15;
			DArchersEff = DArchersEff * 1.15;
			DCrossbowmenEff = DCrossbowmenEff * 1.15;
			DHandCannoneersEff = DHandCannoneersEff * 1.15;
			DMusketeersEff = DMusketeersEff * 1.15;
			DRiflemenEff = DRiflemenEff * 1.15;
			DLightCavalryEff = DLightCavalryEff * 1;
			DHeavyCavalryEff = DHeavyCavalryEff * 1;
			DCannonsEff = DCannonsEff * 1.2;
			DEliteInfantryEff = DEliteInfantryEff * 1.15;
			DEliteCavalryEff = DEliteCavalryEff * 1.15;
			
			ALeviesEff = ALeviesEff * 0.9;
			AMilitiaEff = AMilitiaEff * 0.9;
			ALightInfantryEff = ALightInfantryEff * 0.9;
			AHeavyInfantryEff = AHeavyInfantryEff * 0.9;
			AArchersEff = AArchersEff * 0.9;
			ACrossbowmenEff = ACrossbowmenEff * 0.9;
			AHandCannoneersEff = AHandCannoneersEff * 0.9;
			AMusketeersEff = AMusketeersEff * 0.9;
			ARiflemenEff = ARiflemenEff * 0.9;
			ALightCavalryEff = ALightCavalryEff * 0.75;
			AHeavyCavalryEff = AHeavyCavalryEff * 0.65;
			ACannonsEff = ACannonsEff;
			AEliteInfantryEff = AEliteInfantryEff;
			AEliteCavalryEff = AEliteCavalryEff * 0.9;
		}
		
		if(Terrain=="Jungle"){
			DLeviesEff = DLeviesEff;
			DMilitiaEff = DMilitiaEff;
			DLightInfantryEff = DLightInfantryEff * 1.6;
			DHeavyInfantryEff = DHeavyInfantryEff * 0.6;
			DArchersEff = DArchersEff * 1.5;
			DCrossbowmenEff = DCrossbowmenEff * 1.5;
			DHandCannoneersEff = DHandCannoneersEff * 0.25;
			DMusketeersEff = DMusketeersEff * 0.8;
			DRiflemenEff = DRiflemenEff * 1.25;
			DLightCavalryEff = DLightCavalryEff * 0.4;
			DHeavyCavalryEff = DHeavyCavalryEff * 0.3;
			DCannonsEff = DCannonsEff * 0.4;
			DEliteInfantryEff = DEliteInfantryEff * 1.6;
			DEliteCavalryEff = DEliteCavalryEff * 0.5;
			
			ALeviesEff = ALeviesEff;
			AMilitiaEff = AMilitiaEff;
			ALightInfantryEff = ALightInfantryEff * 1.7;
			AHeavyInfantryEff = AHeavyInfantryEff * 0.6;
			AArchersEff = AArchersEff * 1.4;
			ACrossbowmenEff = ACrossbowmenEff * 1.4;
			AHandCannoneersEff = AHandCannoneersEff * 0.25;
			AMusketeersEff = AMusketeersEff * 0.8;
			ARiflemenEff = ARiflemenEff * 1.2;
			ALightCavalryEff = ALightCavalryEff * 0.4;
			AHeavyCavalryEff = AHeavyCavalryEff * 0.3;
			ACannonsEff = ACannonsEff * 0.3;
			AEliteInfantryEff = AEliteInfantryEff * 1.6;
			AEliteCavalryEff = AEliteCavalryEff * 0.5;
		}
		
		if(Terrain=="Mountains"){
			DLeviesEff = DLeviesEff * 1.25;
			DMilitiaEff = DMilitiaEff * 1.25;
			DLightInfantryEff = DLightInfantryEff * 1.25;
			DHeavyInfantryEff = DHeavyInfantryEff * 1.15;
			DArchersEff = DArchersEff * 1.25;
			DCrossbowmenEff = DCrossbowmenEff * 1.25;
			DHandCannoneersEff = DHandCannoneersEff * 1.25;
			DMusketeersEff = DMusketeersEff * 1.25;
			DRiflemenEff = DRiflemenEff * 1.5;
			DLightCavalryEff = DLightCavalryEff * 0.4;
			DHeavyCavalryEff = DHeavyCavalryEff * 0.3;
			DCannonsEff = DCannonsEff;
			DEliteInfantryEff = DEliteInfantryEff * 1.3;
			DEliteCavalryEff = DEliteCavalryEff * 0.5;
			
			ALeviesEff = ALeviesEff * 0.6;
			AMilitiaEff = AMilitiaEff * 0.6;
			ALightInfantryEff = ALightInfantryEff * 0.8;
			AHeavyInfantryEff = AHeavyInfantryEff * 0.65;
			AArchersEff = AArchersEff * 0.7;
			ACrossbowmenEff = ACrossbowmenEff * 0.7;
			AHandCannoneersEff = AHandCannoneersEff * 0.7;
			AMusketeersEff = AMusketeersEff * 0.7;
			ARiflemenEff = ARiflemenEff * 1.1;
			ALightCavalryEff = ALightCavalryEff * 0.3;
			AHeavyCavalryEff = AHeavyCavalryEff * 0.2;
			ACannonsEff = ACannonsEff * 0.8;
			AEliteInfantryEff = AEliteInfantryEff * 1.2;
			AEliteCavalryEff = AEliteCavalryEff * 0.4;
		}
		
		if(Terrain=="Plains" && Fortifications!="UndamagedFortifications" && Fortifications!="LightlyDamagedFortifications" && Fortifications!="HeavilyDamagedFortifications"){
			DLeviesEff = DLeviesEff;
			DMilitiaEff = DMilitiaEff;
			DLightInfantryEff = DLightInfantryEff;
			DHeavyInfantryEff = DHeavyInfantryEff;
			DArchersEff = DArchersEff;
			DCrossbowmenEff = DCrossbowmenEff;
			DHandCannoneersEff = DHandCannoneersEff;
			DMusketeersEff = DMusketeersEff;
			DRiflemenEff = DRiflemenEff;
			DLightCavalryEff = DLightCavalryEff * 1.25;
			DHeavyCavalryEff = DHeavyCavalryEff * 1.25;
			DCannonsEff = DCannonsEff;
			DEliteInfantryEff = DEliteInfantryEff;
			DEliteCavalryEff = DEliteCavalryEff * 1.25;
			
			ALeviesEff = ALeviesEff;
			AMilitiaEff = AMilitiaEff;
			ALightInfantryEff = ALightInfantryEff;
			AHeavyInfantryEff = AHeavyInfantryEff;
			AArchersEff = AArchersEff;
			ACrossbowmenEff = ACrossbowmenEff;
			AHandCannoneersEff = AHandCannoneersEff;
			AMusketeersEff = AMusketeersEff;
			ARiflemenEff = ARiflemenEff;
			ALightCavalryEff = ALightCavalryEff * 1.25;
			AHeavyCavalryEff = AHeavyCavalryEff * 1.25;
			ACannonsEff = ACannonsEff;
			AEliteInfantryEff = AEliteInfantryEff;
			AEliteCavalryEff = AEliteCavalryEff * 1.25;
		}
		
		if(Fortifications=="LightImprovised") {
			DLeviesEff = DLeviesEff * 1.1;
			DMilitiaEff = DMilitiaEff * 1.1;
			DLightInfantryEff = DLightInfantryEff * 1.1;
			DHeavyInfantryEff = DHeavyInfantryEff * 1.1;
			DArchersEff = DArchersEff * 1.1;
			DCrossbowmenEff = DCrossbowmenEff * 1.1;
			DHandCannoneersEff = DHandCannoneersEff * 1.1;
			DMusketeersEff = DMusketeersEff * 1.1;
			DRiflemenEff = DRiflemenEff * 1.1;
			DLightCavalryEff = DLightCavalryEff;
			DHeavyCavalryEff = DHeavyCavalryEff;
			DCannonsEff = DCannonsEff * 1.1;
			DEliteInfantryEff = DEliteInfantryEff * 1.1;
			DEliteCavalryEff = DEliteCavalryEff;
			
			ALeviesEff = ALeviesEff * 0.9;
			AMilitiaEff = AMilitiaEff * 0.9;
			ALightInfantryEff = ALightInfantryEff * 0.9;
			AHeavyInfantryEff = AHeavyInfantryEff * 0.9;
			AArchersEff = AArchersEff * 0.9;
			ACrossbowmenEff = ACrossbowmenEff * 0.9;
			AHandCannoneersEff = AHandCannoneersEff * 0.9;
			AMusketeersEff = AMusketeersEff * 0.9;
			ARiflemenEff = ARiflemenEff * 0.9;
			ALightCavalryEff = ALightCavalryEff * 0.9;
			AHeavyCavalryEff = AHeavyCavalryEff * 0.9;
			ACannonsEff = ACannonsEff * 0.9;
			AEliteInfantryEff = AEliteInfantryEff * 0.95;
			AEliteCavalryEff = AEliteCavalryEff * 0.9;
		}
		if(Fortifications=="HeavyImprovised") {
			DLeviesEff = DLeviesEff * 1.2;
			DMilitiaEff = DMilitiaEff * 1.2;
			DLightInfantryEff = DLightInfantryEff * 1.2;
			DHeavyInfantryEff = DHeavyInfantryEff * 1.2;
			DArchersEff = DArchersEff * 1.2;
			DCrossbowmenEff = DCrossbowmenEff * 1.2;
			DHandCannoneersEff = DHandCannoneersEff * 1.2;
			DMusketeersEff = DMusketeersEff * 1.2;
			DRiflemenEff = DRiflemenEff * 1.2;
			DLightCavalryEff = DLightCavalryEff;
			DHeavyCavalryEff = DHeavyCavalryEff;
			DCannonsEff = DCannonsEff * 1.2;
			DEliteInfantryEff = DEliteInfantryEff * 1.2;
			DEliteCavalryEff = DEliteCavalryEff;
			
			ALeviesEff = ALeviesEff * 0.85;
			AMilitiaEff = AMilitiaEff * 0.85;
			ALightInfantryEff = ALightInfantryEff * 0.85;
			AHeavyInfantryEff = AHeavyInfantryEff * 0.85;
			AArchersEff = AArchersEff * 0.85;
			ACrossbowmenEff = ACrossbowmenEff * 0.85;
			AHandCannoneersEff = AHandCannoneersEff * 0.85;
			AMusketeersEff = AMusketeersEff * 0.85;
			ARiflemenEff = ARiflemenEff * 0.85;
			ALightCavalryEff = ALightCavalryEff * 0.85;
			AHeavyCavalryEff = AHeavyCavalryEff * 0.85;
			ACannonsEff = ACannonsEff * 0.85;
			AEliteInfantryEff = AEliteInfantryEff * 0.9;
			AEliteCavalryEff = AEliteCavalryEff * 0.85;
		}
		if(Fortifications=="UndamagedFortifications") {
			DLeviesEff = DLeviesEff * 1.5;
			DMilitiaEff = DMilitiaEff * 1.5;
			DLightInfantryEff = DLightInfantryEff * 1.5;
			DHeavyInfantryEff = DHeavyInfantryEff * 1.5;
			DArchersEff = DArchersEff * 1.5;
			DCrossbowmenEff = DCrossbowmenEff * 1.5;
			DHandCannoneersEff = DHandCannoneersEff * 1.5;
			DMusketeersEff = DMusketeersEff * 1.5;
			DRiflemenEff = DRiflemenEff * 1.5;
			DLightCavalryEff = DLightCavalryEff;
			DHeavyCavalryEff = DHeavyCavalryEff;
			DCannonsEff = DCannonsEff * 1.5;
			DEliteInfantryEff = DEliteInfantryEff * 1.5;
			DEliteCavalryEff = DEliteCavalryEff;
			
			ALeviesEff = ALeviesEff * 0.6;
			AMilitiaEff = AMilitiaEff * 0.6;
			ALightInfantryEff = ALightInfantryEff * 0.6;
			AHeavyInfantryEff = AHeavyInfantryEff * 0.6;
			AArchersEff = AArchersEff * 0.6;
			ACrossbowmenEff = ACrossbowmenEff * 0.6;
			AHandCannoneersEff = AHandCannoneersEff * 0.6;
			AMusketeersEff = AMusketeersEff * 0.6;
			ARiflemenEff = ARiflemenEff * 0.6;
			ALightCavalryEff = ALightCavalryEff * 0.25;
			AHeavyCavalryEff = AHeavyCavalryEff * 0.25;
			ACannonsEff = ACannonsEff * 0.6;
			AEliteInfantryEff = AEliteInfantryEff * 0.7;
			AEliteCavalryEff = AEliteCavalryEff * 0.3;
		}
		if(Fortifications=="LightlyDamagedFortifications") {
			DLeviesEff = DLeviesEff * 1.35;
			DMilitiaEff = DMilitiaEff * 1.35;
			DLightInfantryEff = DLightInfantryEff * 1.35;
			DHeavyInfantryEff = DHeavyInfantryEff * 1.35;
			DArchersEff = DArchersEff * 1.35;
			DCrossbowmenEff = DCrossbowmenEff * 1.35;
			DHandCannoneersEff = DHandCannoneersEff * 1.35;
			DMusketeersEff = DMusketeersEff * 1.35;
			DRiflemenEff = DRiflemenEff * 1.35;
			DLightCavalryEff = DLightCavalryEff;
			DHeavyCavalryEff = DHeavyCavalryEff;
			DCannonsEff = DCannonsEff * 1.35;
			DEliteInfantryEff = DEliteInfantryEff * 1.35;
			DEliteCavalryEff = DEliteCavalryEff;
			
			ALeviesEff = ALeviesEff * 0.75;
			AMilitiaEff = AMilitiaEff * 0.75;
			ALightInfantryEff = ALightInfantryEff * 0.75;
			AHeavyInfantryEff = AHeavyInfantryEff * 0.75;
			AArchersEff = AArchersEff * 0.75;
			ACrossbowmenEff = ACrossbowmenEff * 0.75;
			AHandCannoneersEff = AHandCannoneersEff * 0.75;
			AMusketeersEff = AMusketeersEff * 0.75;
			ARiflemenEff = ARiflemenEff * 0.75;
			ALightCavalryEff = ALightCavalryEff * 0.5;
			AHeavyCavalryEff = AHeavyCavalryEff * 0.5;
			ACannonsEff = ACannonsEff * 0.75;
			AEliteInfantryEff = AEliteInfantryEff * 0.8;
			AEliteCavalryEff = AEliteCavalryEff * 0.6;
		}
		if(Fortifications=="HeavilyDamagedFortifications") {
			DLeviesEff = DLeviesEff * 1.25;
			DMilitiaEff = DMilitiaEff * 1.25;
			DLightInfantryEff = DLightInfantryEff * 1.25;
			DHeavyInfantryEff = DHeavyInfantryEff * 1.25;
			DArchersEff = DArchersEff * 1.25;
			DCrossbowmenEff = DCrossbowmenEff * 1.25;
			DHandCannoneersEff = DHandCannoneersEff * 1.25;
			DMusketeersEff = DMusketeersEff * 1.25;
			DRiflemenEff = DRiflemenEff * 1.25;
			DLightCavalryEff = DLightCavalryEff;
			DHeavyCavalryEff = DHeavyCavalryEff;
			DCannonsEff = DCannonsEff * 1.25;
			DEliteInfantryEff = DEliteInfantryEff * 1.25;
			DEliteCavalryEff = DEliteCavalryEff;
			
			ALeviesEff = ALeviesEff * 0.8;
			AMilitiaEff = AMilitiaEff * 0.8;
			ALightInfantryEff = ALightInfantryEff * 0.8;
			AHeavyInfantryEff = AHeavyInfantryEff * 0.8;
			AArchersEff = AArchersEff * 0.8;
			ACrossbowmenEff = ACrossbowmenEff * 0.8;
			AHandCannoneersEff = AHandCannoneersEff * 0.8;
			AMusketeersEff = AMusketeersEff * 0.8;
			ARiflemenEff = ARiflemenEff * 0.8;
			ALightCavalryEff = ALightCavalryEff * 0.7;
			AHeavyCavalryEff = AHeavyCavalryEff * 0.7;
			ACannonsEff = ACannonsEff * 0.8;
			AEliteInfantryEff = AEliteInfantryEff * 0.85;
			AEliteCavalryEff = AEliteCavalryEff * 0.75;
		}
		
		if(River=="SmallBetween") {
			DLeviesEff = DLeviesEff * 1.1;
			DMilitiaEff = DMilitiaEff * 1.1;
			DLightInfantryEff = DLightInfantryEff * 1.1;
			DHeavyInfantryEff = DHeavyInfantryEff * 1.1;
			DArchersEff = DArchersEff * 1.1;
			DCrossbowmenEff = DCrossbowmenEff * 1.1;
			DHandCannoneersEff = DHandCannoneersEff * 1.1;
			DMusketeersEff = DMusketeersEff * 1.1;
			DRiflemenEff = DRiflemenEff * 1.1;
			DLightCavalryEff = DLightCavalryEff;
			DHeavyCavalryEff = DHeavyCavalryEff;
			DCannonsEff = DCannonsEff * 1.1;
			DEliteInfantryEff = DEliteInfantryEff * 1.1;
			DEliteCavalryEff = DEliteCavalryEff;
			
			ALeviesEff = ALeviesEff * 0.9;
			AMilitiaEff = AMilitiaEff * 0.9;
			ALightInfantryEff = ALightInfantryEff * 0.9;
			AHeavyInfantryEff = AHeavyInfantryEff * 0.9;
			AArchersEff = AArchersEff * 0.9;
			ACrossbowmenEff = ACrossbowmenEff * 0.9;
			AHandCannoneersEff = AHandCannoneersEff * 0.9;
			AMusketeersEff = AMusketeersEff * 0.9;
			ARiflemenEff = ARiflemenEff * 0.9;
			ALightCavalryEff = ALightCavalryEff * 0.9;
			AHeavyCavalryEff = AHeavyCavalryEff * 0.9;
			ACannonsEff = ACannonsEff * 0.9;
			AEliteInfantryEff = AEliteInfantryEff * 0.95;
			AEliteCavalryEff = AEliteCavalryEff * 0.9;
		}
		if(River=="BigBetween") {
			DLeviesEff = DLeviesEff * 1.2;
			DMilitiaEff = DMilitiaEff * 1.2;
			DLightInfantryEff = DLightInfantryEff * 1.2;
			DHeavyInfantryEff = DHeavyInfantryEff * 1.2;
			DArchersEff = DArchersEff * 1.2;
			DCrossbowmenEff = DCrossbowmenEff * 1.2;
			DHandCannoneersEff = DHandCannoneersEff * 1.2;
			DMusketeersEff = DMusketeersEff * 1.2;
			DRiflemenEff = DRiflemenEff * 1.2;
			DLightCavalryEff = DLightCavalryEff;
			DHeavyCavalryEff = DHeavyCavalryEff;
			DCannonsEff = DCannonsEff * 1.2;
			DEliteInfantryEff = DEliteInfantryEff * 1.2;
			DEliteCavalryEff = DEliteCavalryEff;
			
			ALeviesEff = ALeviesEff * 0.85;
			AMilitiaEff = AMilitiaEff * 0.85;
			ALightInfantryEff = ALightInfantryEff * 0.85;
			AHeavyInfantryEff = AHeavyInfantryEff * 0.85;
			AArchersEff = AArchersEff * 0.85;
			ACrossbowmenEff = ACrossbowmenEff * 0.85;
			AHandCannoneersEff = AHandCannoneersEff * 0.85;
			AMusketeersEff = AMusketeersEff * 0.85;
			ARiflemenEff = ARiflemenEff * 0.85;
			ALightCavalryEff = ALightCavalryEff * 0.85;
			AHeavyCavalryEff = AHeavyCavalryEff * 0.85;
			ACannonsEff = ACannonsEff * 0.85;
			AEliteInfantryEff = AEliteInfantryEff * 0.9;
			AEliteCavalryEff = AEliteCavalryEff * 0.85;
		}
		
		if(Terrain=="Plains" || Terrain=="Hills"){
			if(Fortifications!="UndamagedFortifications" && Fortifications!="LightlyDamagedFortifications" && Fortifications!="HeavilyDamagedFortifications"){
				if( (DLightCavalry + DHeavyCavalry + DEliteCavalry) > (ALightCavalry + AHeavyCavalry + AEliteCavalry) * 2) {
					DLightCavalryEff = DLightCavalryEff * 1.2;
					DHeavyCavalryEff = DHeavyCavalryEff * 1.2;
					DEliteCavalryEff = DEliteCavalryEff * 1.2;
				}
				if( (DLightCavalry + DHeavyCavalry + DEliteCavalry) * 2 < (ALightCavalry + AHeavyCavalry + AEliteCavalry) ) {
					ALightCavalryEff = ALightCavalryEff * 1.2;
					AHeavyCavalryEff = AHeavyCavalryEff * 1.2;
					AEliteCavalryEff = AEliteCavalryEff * 1.2;
				}
			}
		}
		
			DLeviesEff = DLeviesEff * (1 + DQualityAdv / 4 + DMoraleAdv + DDisciplineAdv * 5 + DGMTacticsAdvantage / 10 + DDiceAdv / 10);
			DMilitiaEff = DMilitiaEff * (1 + DQualityAdv / 4 + DMoraleAdv + DDisciplineAdv * 5 + DGMTacticsAdvantage / 10 + DDiceAdv / 10);
			DLightInfantryEff = DLightInfantryEff * (1 + DQualityAdv / 4 + DMoraleAdv + DDisciplineAdv * 5 + DGMTacticsAdvantage / 10 + DDiceAdv / 10);
			DHeavyInfantryEff = DHeavyInfantryEff * (1 + DQualityAdv / 4 + DMoraleAdv + DDisciplineAdv * 5 + DGMTacticsAdvantage / 10 + DDiceAdv / 10);
			DArchersEff = DArchersEff * (1 + DQualityAdv / 4 + DMoraleAdv + DDisciplineAdv * 5 + DGMTacticsAdvantage / 10 + DDiceAdv / 10);
			DCrossbowmenEff = DCrossbowmenEff * (1 + DQualityAdv / 4 + DMoraleAdv + DDisciplineAdv * 5 + DGMTacticsAdvantage / 10 + DDiceAdv / 10);
			DHandCannoneersEff = DHandCannoneersEff * (1 + DQualityAdv / 4 + DMoraleAdv + DDisciplineAdv * 5 + DGMTacticsAdvantage / 10 + DDiceAdv / 10);
			DMusketeersEff = DMusketeersEff * (1 + DQualityAdv / 4 + DMoraleAdv + DDisciplineAdv * 5 + DGMTacticsAdvantage / 10 + DDiceAdv / 10);
			DRiflemenEff = DRiflemenEff * (1 + DQualityAdv / 4 + DMoraleAdv + DDisciplineAdv * 5 + DGMTacticsAdvantage / 10 + DDiceAdv / 10);
			DLightCavalryEff = DLightCavalryEff * (1 + DQualityAdv / 4 + DMoraleAdv + DDisciplineAdv * 5 + DGMTacticsAdvantage / 10 + DDiceAdv / 10);
			DHeavyCavalryEff = DHeavyCavalryEff * (1 + DQualityAdv / 4 + DMoraleAdv + DDisciplineAdv * 5 + DGMTacticsAdvantage / 10 + DDiceAdv / 10);
			DCannonsEff = DCannonsEff * (1 + DQualityAdv / 4 + DMoraleAdv + DDisciplineAdv * 5 + DGMTacticsAdvantage / 10 + DDiceAdv / 10);
			DEliteInfantryEff = DEliteInfantryEff * (1 + DQualityAdv / 4 + DMoraleAdv + DDisciplineAdv * 5 + DGMTacticsAdvantage / 10 + DDiceAdv / 10);
			DEliteCavalryEff = DEliteCavalryEff * (1 + DQualityAdv / 4 + DMoraleAdv + DDisciplineAdv * 5 + DGMTacticsAdvantage / 10 + DDiceAdv / 10);
		
			ALeviesEff = ALeviesEff * (1 + AQualityAdv / 4 + AMoraleAdv + ADisciplineAdv * 5 + AGMTacticsAdvantage / 10 + ADiceAdv / 10);
			AMilitiaEff = AMilitiaEff * (1 + AQualityAdv / 4 + AMoraleAdv + ADisciplineAdv * 5 + AGMTacticsAdvantage / 10 + ADiceAdv / 10);
			ALightInfantryEff = ALightInfantryEff * (1 + AQualityAdv / 4 + AMoraleAdv + ADisciplineAdv * 5 + AGMTacticsAdvantage / 10 + ADiceAdv / 10);
			AHeavyInfantryEff = AHeavyInfantryEff * (1 + AQualityAdv / 4 + AMoraleAdv + ADisciplineAdv * 5 + AGMTacticsAdvantage / 10 + ADiceAdv / 10);
			AArchersEff = AArchersEff * (1 + AQualityAdv / 5 + AMoraleAdv + ADisciplineAdv * 5 + AGMTacticsAdvantage / 10 + ADiceAdv / 10);
			ACrossbowmenEff = ACrossbowmenEff * (1 + AQualityAdv / 4 + AMoraleAdv + ADisciplineAdv * 5 + AGMTacticsAdvantage / 10 + ADiceAdv / 10);
			AHandCannoneersEff = AHandCannoneersEff * (1 + AQualityAdv / 4 + AMoraleAdv + ADisciplineAdv * 5 + AGMTacticsAdvantage / 10 + ADiceAdv / 10);
			AMusketeersEff = AMusketeersEff * (1 + AQualityAdv / 4 + AMoraleAdv + ADisciplineAdv * 5 + AGMTacticsAdvantage / 10 + ADiceAdv / 10);
			ARiflemenEff = ARiflemenEff * (1 + AQualityAdv / 4 + AMoraleAdv + ADisciplineAdv * 5 + AGMTacticsAdvantage / 10 + ADiceAdv / 10);
			ALightCavalryEff = ALightCavalryEff * (1 + AQualityAdv / 4 + AMoraleAdv + ADisciplineAdv * 5 + AGMTacticsAdvantage / 10 + ADiceAdv / 10);
			AHeavyCavalryEff = AHeavyCavalryEff * (1 + AQualityAdv / 4 + AMoraleAdv + ADisciplineAdv * 5 + AGMTacticsAdvantage / 10 + ADiceAdv / 10);
			ACannonsEff = ACannonsEff * (1 + AQualityAdv / 4 + AMoraleAdv + ADisciplineAdv * 5 + AGMTacticsAdvantage / 10 + ADiceAdv / 10);
			AEliteInfantryEff = AEliteInfantryEff * (1 + AQualityAdv / 4 + AMoraleAdv + ADisciplineAdv * 5 + AGMTacticsAdvantage / 10 + ADiceAdv / 10);
			AEliteCavalryEff = AEliteCavalryEff * (1 + AQualityAdv / 4 + AMoraleAdv + ADisciplineAdv * 5 + AGMTacticsAdvantage / 10 + ADiceAdv / 10);
			
			var DPower = 
			DLevies * DLeviesEff + 
			DMilitia * DMilitiaEff + 
			DLightInfantry * DLightInfantryEff + 
			DHeavyInfantry * DHeavyInfantryEff + 
			DArchers * DArchersEff + 
			DCrossbowmen * DCrossbowmenEff + 
			DHandCannoneers * DHandCannoneersEff + 
			DMusketeers * DMusketeersEff + 
			DRiflemen * DRiflemenEff + 
			DLightCavalry * DLightCavalryEff + 
			DHeavyCavalry * DHeavyCavalryEff + 
			DCannons * DCannonsEff + 
			DEliteInfantry * DEliteInfantryEff + 
			DEliteCavalry * DEliteCavalryEff;
			var APower = 
			ALevies * ALeviesEff + 
			AMilitia * AMilitiaEff + 
			ALightInfantry * ALightInfantryEff + 
			AHeavyInfantry * AHeavyInfantryEff + 
			AArchers * AArchersEff + 
			ACrossbowmen * ACrossbowmenEff + 
			AHandCannoneers * AHandCannoneersEff + 
			AMusketeers * AMusketeersEff + 
			ARiflemen * ARiflemenEff + 
			ALightCavalry * ALightCavalryEff + 
			AHeavyCavalry * AHeavyCavalryEff + 
			ACannons * ACannonsEff + 
			AEliteInfantry * AEliteInfantryEff + 
			AEliteCavalry * AEliteCavalryEff;
			
			if(APower > DPower){
				var PowerDifference = APower / DPower - 1;
				var DCasualtyRate = 0.2 + PowerDifference / 10;
				var ACasualtyRate = 0.2 - PowerDifference / 12;
			}
			if(DPower > APower){
				var PowerDifference = DPower / APower - 1;
				var DCasualtyRate = 0.25 - PowerDifference / 10;
				var ACasualtyRate = 0.25 + PowerDifference / 8;
			}
			if(DPower == APower){
				var DCasualtyRate = 0.2;
				var ACasualtyRate = 0.25;
			}
			if(Fortifications=="LightImprovised") {
				DCasualtyRate = DCasualtyRate * 0.95;
				ACasualtyRate = ACasualtyRate * 1.05;
			}
			if(Fortifications=="HeavyImprovised") {
				DCasualtyRate = DCasualtyRate * 0.9;
				ACasualtyRate = ACasualtyRate * 1.1;
			}
			if(Fortifications=="UndamagedFortifications") {
				DCasualtyRate = DCasualtyRate * 0.75;
				ACasualtyRate = ACasualtyRate * 1.25;
			}
			if(Fortifications=="LightlyDamagedFortifications") {
				DCasualtyRate = DCasualtyRate * 0.8;
				ACasualtyRate = ACasualtyRate * 1.2;
			}
			if(Fortifications=="HeavilyDamagedFortifications") {
				DCasualtyRate = DCasualtyRate * 0.85;
				ACasualtyRate = ACasualtyRate * 1.15;
			}
			if(River=="SmallBetween") {
				DCasualtyRate = DCasualtyRate * 0.95;
				ACasualtyRate = ACasualtyRate * 1.05;
			}
			if(River=="BigBetween") {
				DCasualtyRate = DCasualtyRate * 0.85;
				ACasualtyRate = ACasualtyRate * 1.1;
			}
			if(River=="SmallBehindDefender") {
				DCasualtyRate = DCasualtyRate * 1.1;
			}
			if(River=="SmallBehindAttacker") {
				ACasualtyRate = ACasualtyRate * 1.1;
			}
			if(River=="BigBehindDefender") {
				DCasualtyRate = DCasualtyRate * 1.25;
			}
			if(River=="BigBehindAttacker") {
				ACasualtyRate = ACasualtyRate * 1.25;
			}
			
			DCasualtyRate = Math.max(DCasualtyRate, 0.005);
			ACasualtyRate = Math.max(ACasualtyRate, 0.005);
			DCasualtyRate = Math.min(DCasualtyRate, 1);
			ACasualtyRate = Math.min(ACasualtyRate, 1);
			
			var DLeviesCas = Math.floor( DLevies * DCasualtyRate );
			var DMilitiaCas = Math.floor( DMilitia * DCasualtyRate );
			var DLightInfantryCas = Math.floor( DLightInfantry * DCasualtyRate );
			var DHeavyInfantryCas = Math.floor( DHeavyInfantry * DCasualtyRate );
			var DArchersCas = Math.floor( DArchers * DCasualtyRate );
			var DCrossbowmenCas = Math.floor( DCrossbowmen * DCasualtyRate );
			var DHandCannoneersCas = Math.floor( DHandCannoneers * DCasualtyRate );
			var DMusketeersCas = Math.floor( DMusketeers * DCasualtyRate );
			var DRiflemenCas = Math.floor( DRiflemen * DCasualtyRate );
			var DLightCavalryCas = Math.floor( DLightCavalry * DCasualtyRate );
			var DHeavyCavalryCas = Math.floor( DHeavyCavalry * DCasualtyRate );
			var DCannonsCas = Math.floor( DCannons * DCasualtyRate );
			var DEliteInfantryCas = Math.floor( DEliteInfantry * DCasualtyRate );
			var DEliteCavalryCas = Math.floor( DEliteCavalry * DCasualtyRate );

			var ALeviesCas = Math.floor( ALevies * ACasualtyRate );
			var AMilitiaCas = Math.floor( AMilitia * ACasualtyRate );
			var ALightInfantryCas = Math.floor( ALightInfantry * ACasualtyRate );
			var AHeavyInfantryCas = Math.floor( AHeavyInfantry * ACasualtyRate );
			var AArchersCas = Math.floor( AArchers * ACasualtyRate );
			var ACrossbowmenCas = Math.floor( ACrossbowmen * ACasualtyRate );
			var AHandCannoneersCas = Math.floor( AHandCannoneers * ACasualtyRate );
			var AMusketeersCas = Math.floor( AMusketeers * ACasualtyRate );
			var ARiflemenCas = Math.floor( ARiflemen * ACasualtyRate );
			var ALightCavalryCas = Math.floor( ALightCavalry * ACasualtyRate );
			var AHeavyCavalryCas = Math.floor( AHeavyCavalry * ACasualtyRate );
			var ACannonsCas = Math.floor( ACannons * ACasualtyRate );
			var AEliteInfantryCas = Math.floor( AEliteInfantry * ACasualtyRate );
			var AEliteCavalryCas = Math.floor( AEliteCavalry * ACasualtyRate );

		var DCasualties = ( DLeviesCas + DMilitiaCas + DLightInfantryCas + DHeavyInfantryCas + DArchersCas + DCrossbowmenCas + DHandCannoneersCas + DMusketeersCas + DRiflemenCas + DLightCavalryCas + DHeavyCavalryCas + DCannonsCas + DEliteInfantryCas + DEliteCavalryCas 
		);
		
		var ACasualties = ( ALeviesCas + AMilitiaCas + ALightInfantryCas + AHeavyInfantryCas + AArchersCas + ACrossbowmenCas + AHandCannoneersCas + AMusketeersCas + ARiflemenCas + ALightCavalryCas + AHeavyCavalryCas + ACannonsCas + AEliteInfantryCas + AEliteCavalryCas 
		);
		
		document.getElementById("atkresults").innerHTML = 
		'<br> +' + ACasualties + ' Casualties' +
		'<br> -' + ALeviesCas + ' Levies' +
		'<br> -' + AMilitiaCas + ' Militia' +
		'<br> -' + ALightInfantryCas + ' LightInf' +
		'<br> -' + AHeavyInfantryCas + ' HeavyInf' +
		'<br> -' + AArchersCas + ' Archers' +
		'<br> -' + ACrossbowmenCas + ' Crossbowmen' +
		'<br> -' + AHandCannoneersCas + ' HandCannoneers' +
		'<br> -' + AMusketeersCas + ' Musketeers' +
		'<br> -' + ARiflemenCas + ' Riflemen' +
		'<br> -' + ALightCavalryCas + ' LightCav' +
		'<br> -' + AHeavyCavalryCas + ' HeavyCav' +
		'<br> -' + ACannonsCas + ' Cannons' +
		'<br> -' + AEliteInfantryCas + ' EliteInf' +
		'<br> -' + AEliteCavalryCas + ' EliteCav';
		
		document.getElementById("defresults").innerHTML = 
		'<br> +' + DCasualties + ' Casualties' +
		'<br> -' + DLeviesCas + ' Levies' +
		'<br> -' + DMilitiaCas + ' Militia' +
		'<br> -' + DLightInfantryCas + ' LightInf' +
		'<br> -' + DHeavyInfantryCas + ' HeavyInf' +
		'<br> -' + DArchersCas + ' Archers' +
		'<br> -' + DCrossbowmenCas + ' Crossbowmen' +
		'<br> -' + DHandCannoneersCas + ' HandCannoneers' +
		'<br> -' + DMusketeersCas + ' Musketeers' +
		'<br> -' + DRiflemenCas + ' Riflemen' +
		'<br> -' + DLightCavalryCas + ' LightCav' +
		'<br> -' + DHeavyCavalryCas + ' HeavyCav' +
		'<br> -' + DCannonsCas + ' Cannons' +
		'<br> -' + DEliteInfantryCas + ' EliteInf' +
		'<br> -' + DEliteCavalryCas + ' EliteCav';
		
		if(APower > DPower){
			if(PowerDifference <= 0.5){
				document.getElementById("mainresults").innerHTML = '<br> <h2> Minor Victory for Attackers </h2>';
			}
			if(PowerDifference > 0.5){
				document.getElementById("mainresults").innerHTML = '<br> <h2> Major Victory for Attackers </h2>';
			}
		}
		if(DPower > APower){
			if(PowerDifference <= 0.5){
				document.getElementById("mainresults").innerHTML = '<br> <h2> Minor Victory for Defenders </h2>';
			}
			if(PowerDifference > 0.5){
				document.getElementById("mainresults").innerHTML = '<br> <h2> Major Victory for Defenders </h2>';
			}
		}
		if(DPower == APower){
			document.getElementById("mainresults").innerHTML = '<br> PowerDifference: 0 <br> <h2> Draw </h2>';
		}
		
	/*	document.getElementById("atkresults").innerHTML = 
		'<br>' + 
		'ADiceAdv: ' + ADiceAdv + '<br>' + 
		'ALeviesEff: ' + ALeviesEff + '<br>' + 
		'AMilitiaEff: ' + AMilitiaEff + '<br>' + 
		'ALightInfantryEff: ' + ALightInfantryEff + '<br>' + 
		'AHeavyInfantryEff: ' + AHeavyInfantryEff + '<br>' + 
		'AArchersEff: ' + AArchersEff + '<br>' + 
		'ACrossbowmenEff: ' + ACrossbowmenEff + '<br>' + 
		'AHandCannoneersEff: ' + AHandCannoneersEff + '<br>' + 
		'AMusketeersEff: ' + AMusketeersEff + '<br>' + 
		'ARiflemenEff: ' + ARiflemenEff + '<br>' + 
		'ALightCavalryEff: ' + ALightCavalryEff + '<br>' + 
		'AHeavyCavalryEff: ' + AHeavyCavalryEff + '<br>' + 
		'ACannonsEff: ' + ACannonsEff + '<br>' + 
		'AEliteInfantryEff: ' + AEliteInfantryEff + '<br>' + 
		'AEliteCavalryEff: ' + AEliteCavalryEff + '<br>'; 
		
		document.getElementById("defresults").innerHTML = 
		'<br>' + 
		'DDiceAdv: ' + DDiceAdv + '<br>' + 
		'DLeviesEff: ' + DLeviesEff + '<br>' + 
		'DMilitiaEff: ' + DMilitiaEff + '<br>' + 
		'DLightInfantryEff: ' + DLightInfantryEff + '<br>' + 
		'DHeavyInfantryEff: ' + DHeavyInfantryEff + '<br>' + 
		'DArchersEff: ' + DArchersEff + '<br>' + 
		'DCrossbowmenEff: ' + DCrossbowmenEff + '<br>' + 
		'DHandCannoneersEff: ' + DHandCannoneersEff + '<br>' + 
		'DMusketeersEff: ' + DMusketeersEff + '<br>' + 
		'DRiflemenEff: ' + DRiflemenEff + '<br>' + 
		'DLightCavalryEff: ' + DLightCavalryEff + '<br>' + 
		'DHeavyCavalryEff: ' + DHeavyCavalryEff + '<br>' + 
		'DCannonsEff: ' + DCannonsEff + '<br>' + 
		'DEliteInfantryEff: ' + DEliteInfantryEff + '<br>' + 
		'DEliteCavalryEff: ' + DEliteCavalryEff + '<br>'; */
	}