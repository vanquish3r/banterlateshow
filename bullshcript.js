// --- URLs & Global Variables ---
const websiteurl = "https://vdo.ninja/?view=banterlateshow&bitrate=20000&codec=vp9&stereo";
const otherwebsiteurl = "https://lateshow.bant.ing/";

// Player Toggle's by FireRat
let ytplayerdisabled = true;
let karaokeplayerdisabled = true;
let screenstuffDisabled = true;
let screenPortableDisabled = true;

// Declare scene variable globally, but instantiate it AFTER the scene loads
let lateshowscene;

/////////////// RENDER SCRIPT LOADER STUFF ///////////////
async function injectRenderScript(theScriptsURL, TheScriptsName = "UnNamed", attributes = {}, appendTo = document.body) {
  const scriptUrl = theScriptsURL;
  try {
    console.log("Waking up the server...");
    await fetch(scriptUrl, { method: 'HEAD', mode: 'no-cors' }); 
    console.log("Server is awake! Injecting script..."); 
    
    const script = document.createElement("script"); 
    script.id = `${TheScriptsName}`;
    script.setAttribute("src", scriptUrl); 
    Object.entries(attributes).forEach(([key, value]) => { script.setAttribute(key, value); });
    
    appendTo.appendChild(script);
    script.onload = () => { console.log(`${TheScriptsName} script loaded successfully!`); }; 
    script.onerror = () => { console.error(`Failed to load the ${TheScriptsName} script.`); };
  } catch (error) { 
    console.error("The warm-up request failed. The script might not load.", error); 
  }
}

/////////////// TOGGLE FUNCTIONS ///////////////
async function enableVideoPlayer() {	
	// If Browser already exists, DESTROY IT!
	var browser = await lateshowscene.Find('MainParentObject2');
	if (browser) { console.log("Browser2 Found, Removing it!"); cleanupFireScreenV2(2); screenstuffDisabled = true; }
	// If Karaoke Player exists, Destroy it!
	let delayYT = false;
	if (window.karaokePlayerInstance) { delayYT = true; karaokeplayerdisabled = true; console.log("Karaoke Player exists, Destroying it!"); window.cleanupVideoPlayer(); }
    
  	if (ytplayerdisabled) {
		setTimeout(() => {  
			console.log("yt player enabling");
			ytplayerdisabled = false;
			const youtubeAttributes = {
				"scale": "1 1 1", "mip-maps": "0", "rotation": "0 0 0",
				"position": "0 -3 0", "hand-controls": "false",
				"button-position": "0 3.05 -1.1", "volume": "3",
				"button-rotation": "0 0 0", "button-scale": "1 1 1",
				"spatial": "false",
				"playlist": "PLC7QdSXG8EDYIqWudXaAsJqMlbZvOaC-_",
				"announce": "false", "instance": "banterlateshow",
				"announce-events": "false", "announce-four-twenty": "false"
			};
			injectRenderScript("https://vidya.firer.at/playlist.js", "bls-videoplayer", youtubeAttributes, document.querySelector("a-scene"));
		}, delayYT ? 2000 : 0);
	} else {
        console.log("enable yt player called");
    }
}

async function enableScreenStuff() {	
	// If Karaoke or YT Player exists, Destroy them!
	if (window.karaokePlayerInstance) { karaokeplayerdisabled = true; console.log("Karaoke Player exists, Destroying it!"); window.cleanupVideoPlayer(); }
	if (window.playlistPlayerInstance) { ytplayerdisabled = true; console.log("YouTube Player exists, Destroying it!"); window.cleanupVideoPlayer(); }
	
    setTimeout(() => {
		if (screenstuffDisabled){
            screenstuffDisabled = false;
            const firescreenAttributes = {
                "scale": "1 1 1", "mipmaps": "0", "rotation": "0 0 0", "screen-rotation": "0 0 0",
                "screen-scale": "0.68 0.68 1", "position": "0 -3 0", "lock-position": "true",
                "hand-controls": "false", "pixelsperunit": "1600", "castmode": "true",
                "backdrop": "false", "disable-rotation": "true", "announce": "false",
                "announce-events": "false", "announce-420": "false", "volume": "0.25",
                "width": "1920", "height": "1080", "screen-position": "0 0 0",
                "website": websiteurl
            };
            const firescreen = document.createElement("script");
            firescreen.id = "bls-firescreen";
            firescreen.setAttribute("src", "https://firer.at/scripts/firescreenv2.js");
            Object.entries(firescreenAttributes).forEach(([key, value]) => { firescreen.setAttribute(key, value); });
            document.querySelector("a-scene").appendChild(firescreen);
		}
	}, 2500);
	console.log("Screen Stuff enabled: " + screenstuffDisabled);
}

async function enableKaraokePlayer() {	
	// If Browser or YT Player exists, DESTROY IT!
	var browser = await lateshowscene.Find('MainParentObject2');
	if (browser) { console.log("Browser2 Found, Removing it!"); cleanupFireScreenV2(2); screenstuffDisabled = true; }
	let delayYT = false;
	if (window.playlistPlayerInstance) { delayYT = true; ytplayerdisabled = true; console.log("YouTube Player exists, Destroying it!"); window.cleanupVideoPlayer(); }
	
    if (karaokeplayerdisabled){ 
        karaokeplayerdisabled = false;
		setTimeout(() => {  
			console.log("karaoke player enabling");
			const karaokeAttributes = {
				"scale": "1 1 1", "mip-maps": "0", "rotation": "0 0 0",
				"position": "0 -3 0", "hand-controls": "true",
				"button-position": "0 3.05 -1.1", "volume": "10",
				"button-rotation": "0 0 0", "button-scale": "1.3 1.3 1.3",
				"singer-button-position": "0 -10 0", "singer-button-rotation": "0 180 0",
				"spatial": "false", "playlist": "", "announce": "false",
				"announce-events": "false", "announce-four-twenty": "false"
			};
			injectRenderScript("https://vidya.firer.at/karaoke.js", "bls-karaokeplayer", karaokeAttributes, document.querySelector("a-scene"));
		}, delayYT ? 2000 : 0);
	} else {
        console.log("enable karaoke player called");
    }
}

async function enableScreenThingy() {
  if (screenPortableDisabled){ 
    screenPortableDisabled = false;
	console.log("Adding Fire Tablet");
	const firescreenAttributes = {
		"scale": "0.7 0.7 1", "mipmaps": "0", "rotation": "0 0 0",
		"position": "4.2 0.609 -15.2", "pixelsperunit": "1200",
		"width": "1280", "height": "720", "announce": "false",
		"announce-events": "false", "announce-420": "false",
		"volume": "0.25", "backdrop": "true", "hand-controls": "true",
		"custom-button01-url": "https://vanquish3r.github.io/banterlateshow/0-0-shownotes-0-0.txt",
		"custom-button01-text": "BLS Show Notes",
		"custom-button02-url": "https://vanquish3r.github.io/banterlateshow/darwinawards.html",
		"custom-button02-text": "Darwin Awards",
		"custom-button04-url": "https://lateshow.bant.ing/",
		"custom-button04-text": "Banter Late Show",
		"website": otherwebsiteurl
	};
	const firescreen = document.createElement("script");
	firescreen.id = "bls-firetablet";
	firescreen.setAttribute("src", "https://firer.at/scripts/firescreenv2.js");
	Object.entries(firescreenAttributes).forEach(([key, value]) => { firescreen.setAttribute(key, value); });
	document.querySelector("a-scene").appendChild(firescreen);
  }
  console.log("Fire Tablet enabled");
}

// --- INITIALIZATION ---
window.addEventListener("bs-loaded", () => {
    console.log("SCRIPT: Unity-Loaded via bs-loaded event listener");

    // Instantiate BanterScene safely now that we are sure the scene has loaded
    lateshowscene = BS.BanterScene.GetInstance();
    
    setTimeout(() => { 
        /* PLEASE ENABLE ONLY ONE OF THESE AT A TIME */

        /* UNCOMMENT THIS TO ENABLE THE YOUTUBE PLAYER */
        // enableVideoPlayer();
        
        /* UNCOMMENT THIS TO ENABLE KARAOKE PLAYER */
        // enableKaraokePlayer();
        
        /* UNCOMMENT THIS TO ENABLE SCREEN CAST / YOUTUBE LIVE */
        // enableScreenStuff();
    }, 1000);
    
    // Automatically trigger the fire tablet logic 
    enableScreenThingy();
});
