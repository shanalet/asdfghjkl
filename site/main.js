var lyric = 0;

function lyricGain(number){
	lyric = lyric + number
	document.getElementById("lyric").innerHTML = lyric;
};

var clickvalue = 1;

function getClickValue(){
	clickvalue = Math.floor(1 + (perSecond * 0.13))
	document.getElementById('clickvalue').innerHTML = clickvalue;
};

window.setInterval(function(){
	getClickValue();
}, 10);

//Building Code Starts Here//

var radio = 0;

function buyRadio(){
	var RadioCost = Math.floor(25 * Math.pow(1.2, radio));
	if (lyric >= RadioCost){
		radio = radio + 1;
		lyric = lyric - RadioCost;
		document.getElementById('radio').innerHTML = radio;
		document.getElementById('lyric').innerHTML = lyric;
	};
	var nextCost = Math.floor(25 * Math.pow(1.2, radio));
	document.getElementById('RadioCost').innerHTML = nextCost;
};
	
window.setInterval(function(){
	lyricGain(radio * radioMultiplier);
}, 1000);

var track = 0;

function buyTrack(){
	var TrackCost = Math.floor(800 * Math.pow(1.2, track));
	if (lyric >= TrackCost){
		track = track + 1;
		lyric = lyric - TrackCost;
		document.getElementById('track').innerHTML = track;
		document.getElementById('lyric').innerHTML = lyric;
	};
	var nextCost = Math.floor(800 * Math.pow(1.2, track));
	document.getElementById('TrackCost').innerHTML = nextCost;
};

var TrackInterval = 200;

function GetTrackInterval(){
	var TrackInterval = Math.floor(1000 / TrackNumber);
};

window.setInterval(function(){
	GetTrackInterval();
}, 20);

window.setInterval(function(){
	lyricGain(track);
}, TrackInterval);

var mixtape = 0;

function buyMixtape(){
	var MixtapeCost = Math.floor(3500 * Math.pow(1.2, mixtape));
	if (lyric >= MixtapeCost){
		mixtape = mixtape + 1;
		lyric = lyric - MixtapeCost;
		document.getElementById('mixtape').innerHTML = mixtape;
		document.getElementById('lyric').innerHTML = lyric;
	};
	var nextCost = Math.floor(3500 * Math.pow(1.2, mixtape));
	document.getElementById('MixtapeCost').innerHTML = nextCost;
};

window.setInterval(function(){
	lyricGain(mixtape);
}, 100);

var album = 0;

function buyAlbum(){
	var AlbumCost = Math.floor(10000 * Math.pow(1.15, mixtape));
	if (lyric >= AlbumCost){
		album = album + 1;
		lyric = lyric - AlbumCost;
		document.getElementById('Album').innerHTML = album;
		document.getElementById('lyric').innerHTML = lyric;
	};
	var nextCost = Math.floor(10000 * Math.pow(1.15, album));
	document.getElementById('AlbumCost').innerHTML = nextCost;
};

var compilation = 0;

function buyCompilation(){
	var CompilationCost = Math.floor(35000 * Math.pow(1.12, compliation))
	if (lyric >= CompilationCost){
		compilation = compilation + 1;
		lyric = lyric - CompilationCost;
		document.getElementByID('Compilation').innerHTML = compilation
		document.getElementByID('lyric').innerHTML = lyric;
	};
	var nextCost = Math.floor(35000 * Math.pow(1.12, compilation));
	document.getElementByID('CompilationCost').innerHTML = nextCost;
};

window.setInterval(function(){
	lyricGain(compilation);
}, 40);

var ukcharts = 0;

function buyUKChart(){
	var ukchartsCost = Math.floor(100000 * Math.pow(1.1, ukcharts))
	if (lyric >= ukchartsCost){
		ukcharts = ukcharts + 1;
		lyric = lyric - ukchartsCost;
		document.getElementByID('ukcharts').innerHTML = ukcharts
		document.getElementByID('lyric').innerHTML = lyric;
	};
	var nextCost = Math.floor(10000 * Math.pow(1.1, ukcharts))
	document.getElementByID('ukchartsCost').innerHTML = nextCost;
};

window.setInterval(function(){
	lyricGain(ukcharts);
}, 25);

//Upgrade Code Starts Here//	
	
var radioMultiplier = 1;

function radioUpgrade(){
	var radioMultiplierCost = Math.floor(10 * Math.pow(2, 4 + radioMultiplier));
	if (lyric>=radioMultiplierCost){
		radioMultiplier = radioMultiplier + 1
		lyric = lyric - radioMultiplierCost;
		document.getElementById('radioMultiplier').innerHTML = radioMultiplier;
		document.getElementById('lyric').innerHTML = lyric;
	};
	var nextCost = Math.floor(10 * Math.pow(2, 4 + radioMultiplier));
	document.getElementById('radioMultiplierCost').innerHTML = nextCost;
};

var TrackNumber = 5;

function IncreaseTrack(){
	var IncreaseTrackCost = Math.floor(15 * Math.pow(2, TrackNumber));
	if (lyric >= IncreaseTrackCost){
		TrackNumber = TrackNumber + 1
		lyric = lyric - IncreaseTrackCost;
		document.getElementById('TrackNumber').innerHTML = TrackNumber;
		document.getElementById('TrackNumber').innerHTML = TrackNumber;
		document.getElementById('lyric').innerHTML = lyric;
	};
	var nextCost = Math.floor(15 * Math.pow(2,TrackNumber));
	document.getElementById('IncreaseTrackCost').innerHTML = nextCost;
} ;

var mixtapeMultiplier = 1;

function mixtapeUpgrade(){
	var mixtapeUpgradeCost = Math.floor(1500 * Math.pow(2, 1 + mixtapeMultiplier));
	if (lyric >= mixtapeUpgradeCost){
		mixtapeMultiplier = mixtapeMultiplier + 1;
		lyric = lyric - mixtapeUpgradeCost;
		document.getElementById('mixtapeMultiplier').innerHTML = mixtapeMultiplier;
		document.getElementById('lyric').innerHTMK = lyric;
	};
	var nextCost = Math.floor(1500 * Math.pow(2, 1 + mixtapeMultiplier));
	document.getElementById('mixtapeUpgradeCost').innerHTML = nextCost;
};

//Calculating the perSecond//

var perSecond = 0;

function getperSecond(){
	perSecond = (radio * radioMultiplier) + (track * TrackNumber) + (mixtape * mixtapeMultiplier * 10) + (album * 15) + (compilation * 25) + (ukcharts * 40);
		document.getElementById('perSecond').innerHTML = perSecond;
};

window.setInterval(function(){
	getperSecond();
}, 10)