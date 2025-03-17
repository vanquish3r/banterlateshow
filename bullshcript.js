const lateshowscene = BS.BanterScene.GetInstance();

let websiteurl = "https://screen.sdq.st:8443/?room=banterlateshow"; /* ?autoplay=1&controls=0 For YouTube Live */

let otherwebsiteurl = "https://banterlateshow.com/"; // Fire Tablet Homepage

async function somerandomStartActions() {
	const waitingForUnity = async () => { while (!lateshowscene.unityLoaded) { await new Promise(resolve => setTimeout(resolve, 500)); } };
	await waitingForUnity(); console.log("SCRIPT: Unity-Loaded");
	setTimeout(() => { 

// TOGGLES ON GITHUB NO LONGER IN USE!
		
		/* PLEASE ENABLE ONLY ONE OF THESE AT A TIME */
		/* UNCOMMENTED THIS TO ENABLE THE YOUTUBE PLAYER */
			//  enableVideoPlayer();
		/* UNCOMMENTED THIS TO ENABLE KARAOKE PLAYER */
			//  enableKaraokePlayer();
		/* UNCOMMENTED THIS TO ENABLE SCREEN CAST / YOUTUBE LIVE */
			//  enableScreenStuff();

    setTimeout(() => { enableScreenThingy(); }, 8000);
	}, 3000);
};


// Video Player Toggle by HBR & FireRat
let ytplayerdisabled = true;
  function enableVideoPlayer() {
  if (ytplayerdisabled){
    console.log("yt player enabling");
    ytplayerdisabled = false;
    const videoplayer = document.createElement("script");
		videoplayer.id = "bls-videoplayer";
		videoplayer.setAttribute("scale", "1 1 1");
		videoplayer.setAttribute("mip-maps", "0");
		videoplayer.setAttribute("rotation", "0 0 0");
		videoplayer.setAttribute("position", "0 -3 0");
		videoplayer.setAttribute("hand-controls", "true");
		videoplayer.setAttribute("button-position", "0 3.05 -1.23");
		videoplayer.setAttribute("volume", "3");
		videoplayer.setAttribute("button-rotation", "0 0 0");
		videoplayer.setAttribute("button-scale", "2 2 2");
		videoplayer.setAttribute("spatial", "false");
		// videoplayer.setAttribute("spatial-min-distance", "1");
		// videoplayer.setAttribute("spatial-max-distance", "1000");
		videoplayer.setAttribute("playlist", "PLC7QdSXG8EDYIqWudXaAsJqMlbZvOaC-_");
		videoplayer.setAttribute("announce", "false");
		videoplayer.setAttribute("announce-events", "false");
		videoplayer.setAttribute("data-playlist-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/Playlist.png?v=1713028119937");
		videoplayer.setAttribute("data-vol-up-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/VolUp.png?v=1713028119640");
		videoplayer.setAttribute("data-vol-down-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/VolDown.png?v=1713028119279");
		videoplayer.setAttribute("data-mute-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/Mute.png?v=1713028120228");
		videoplayer.setAttribute("data-skip-forward-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/Forward.png?v=1713028118642");
		videoplayer.setAttribute("data-skip-backward-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/Backwardsd.png?v=1713028118986");
      	videoplayer.setAttribute("src", "https://best-v-player.glitch.me/playlist.js"); // https://vidya.sdq.st/playlist.js
    document.querySelector("a-scene").appendChild(videoplayer);
  } else {console.log("enable yt player called");}
};

// Fire Screen Toggle
let screenstuffDisabled = true;
function enableScreenStuff() {
  if (screenstuffDisabled){
		screenstuffDisabled = false;
		console.log("Adding Screen Cast");
		const firescreen = document.createElement("script");
		firescreen.id = "bls-firescreen";
		firescreen.setAttribute("scale", "1 1 1");
		firescreen.setAttribute("rotation", "0 0 0");
		firescreen.setAttribute("screen-rotation", "0 0 0");
		firescreen.setAttribute("screen-scale", "0.515 0.515 1");
		firescreen.setAttribute("position", "0 -3 0");
		firescreen.setAttribute("lock-position", "true");
		firescreen.setAttribute("mipmaps", "0");
		firescreen.setAttribute("pixelsperunit", "1600");
		firescreen.setAttribute("castmode", "true");
		firescreen.setAttribute("backdrop", "false");
		firescreen.setAttribute("disable-rotation", "true");
		firescreen.setAttribute("hand-controls", "false");
		firescreen.setAttribute("announce", "false");
		firescreen.setAttribute("announce-events", "false");
		firescreen.setAttribute("announce-four-twenty", "false");
		firescreen.setAttribute("volume", "0.25");
		firescreen.setAttribute("width", "1920");
		firescreen.setAttribute("height", "1080");
		firescreen.setAttribute("screen-position", "0 0 0");
		firescreen.setAttribute("website", websiteurl);
		firescreen.setAttribute("src", "https://firer.at/scripts/firescreenv2.js");
		document.querySelector("a-scene").appendChild(firescreen);
		if (websiteurl.includes("hyperbeam.com/i/")) {
			setTimeout(async () => { 
				let theBrowserthingy = await lateshowscene.Find(`MyBrowser2`);
				let thebrowserpart = theBrowserthingy.GetComponent(BS.ComponentType.BanterBrowser);
				thebrowserpart.RunActions(JSON.stringify({"actions": [{ "actionType": "runscript","strparam1": "const checkbox = document.querySelector(`.p-checkbox-box[role='checkbox']`); const joinButton = document.querySelector('.footer_3Yiou .joinBtn_1TAU6'); if (checkbox) checkbox.click(); if (joinButton) { const observer = new MutationObserver(() => { if (!joinButton.classList.contains('p-disabled')) { joinButton.click(); observer.disconnect(); setTimeout(() => { const skipButton = document.querySelector('.dialog-secondary-btn'); if (skipButton) skipButton.click(); }, 3000); } }); observer.observe(joinButton, { attributes: true, attributeFilter: ['class'] }); }" }]}));
				setTimeout(async () => {
					thebrowserpart.RunActions(JSON.stringify({"actions": [{ "actionType": "runscript","strparam1": "var fullscreenButton = document.querySelector(`.p-button.p-component.tu-button.btn-tertiary.btn_2YRyp svg path[d^='M3 3h6.429']`); if (fullscreenButton) { fullscreenButton.closest('button').click(); } setTimeout(async () => { var chatButton = document.querySelector(`.p-button.p-component.tu-button.btn-tertiary.fsChatBtn_2cCyy svg path[d^='M22 22h-2V2h2v20zM2 11h12.17']`); if (chatButton) { chatButton.closest('button').click(); } }, 3500);" }]}));
				}, 5000);
			}, 3000);
		}
  }
	console.log("Screen Stuff enabled: " + screenstuffDisabled);
};

// Karaoke Player Toggle
let karaokeplayerdisabled = true;
  function enableKaraokePlayer() {
  if (karaokeplayerdisabled){
    console.log("karaoke player enabling");
    karaokeplayerdisabled = false;
    const videoplayer = document.createElement("script");
		videoplayer.id = "bls-karaokeplayer";
		videoplayer.setAttribute("scale", "1 1 1");
		videoplayer.setAttribute("mip-maps", "0");
		videoplayer.setAttribute("rotation", "0 0 0");
		videoplayer.setAttribute("position", "0 -3 0");
		videoplayer.setAttribute("hand-controls", "true");
		videoplayer.setAttribute("button-position", "-0 -5 0");
		videoplayer.setAttribute("volume", "10");
		videoplayer.setAttribute("button-rotation", "0 0 0");
		videoplayer.setAttribute("button-scale", "0.7 0.7 0.7");
		videoplayer.setAttribute("singer-button-position", "-0.06 -3.7 29.1");
		videoplayer.setAttribute("singer-button-rotation", "0 180 0");
		// videoplayer.setAttribute("singer-button-scale", "1.5 1.5 1.5");
	  	videoplayer.setAttribute("spatial", "false");
		// videoplayer.setAttribute("spatial-min-distance", "1");
		// videoplayer.setAttribute("spatial-max-distance", "1000");
		videoplayer.setAttribute("playlist", "");
		videoplayer.setAttribute("announce", "false");
	  	videoplayer.setAttribute("announce-events", "false");
		// videoplayer.setAttribute("data-playlist-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/Playlist.png?v=1713028119937");
		// videoplayer.setAttribute("data-vol-up-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/VolUp.png?v=1713028119640");
		// videoplayer.setAttribute("data-vol-down-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/VolDown.png?v=1713028119279");
		// videoplayer.setAttribute("data-mute-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/Mute.png?v=1713028120228");
		// videoplayer.setAttribute("data-skip-forward-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/Forward.png?v=1713028118642");
		// videoplayer.setAttribute("data-skip-backward-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/Backwardsd.png?v=1713028118986");
		videoplayer.setAttribute("src", "https://vidya.sdq.st/karaoke.js"); // https://best-v-player.glitch.me/karaoke.js
    document.querySelector("a-scene").appendChild(videoplayer);
  } else {console.log("enable karaoke player called");}
};

// Fire Tablet Toggle
let otherScreenDisabled = true;

function enableScreenThingy() {
	console.log("File: loaded");
	if (otherScreenDisabled) {
		otherScreenDisabled = false;
		console.log("Adding Screen");
		const firescreen = document.createElement("script");
		firescreen.id = "bls-firetablet";
		firescreen.setAttribute("scale", "0.8 0.8 1");
		firescreen.setAttribute("position", "4.2 0.609 -15.2");
		firescreen.setAttribute("rotation", "0 6.5 0");		
		firescreen.setAttribute("mipmaps", "0");
		firescreen.setAttribute("pixelsperunit", "1200");
		firescreen.setAttribute("hand-controls", "true");
		firescreen.setAttribute("announce", "false");
		firescreen.setAttribute("announce-events", "false");
		firescreen.setAttribute("announce-four-twenty", "false");
		firescreen.setAttribute("volume", "0.25");
		firescreen.setAttribute("width", "1280");
		firescreen.setAttribute("height", "720");
		firescreen.setAttribute("website", otherwebsiteurl);
		// firescreen.setAttribute("disable-rotation", "false");
		firescreen.setAttribute("custom-button01-url", "https://banterlateshow.glitch.me/0-0-shownotes-0-0.txt");
		firescreen.setAttribute("custom-button01-text", "BLS Show Notes");
		firescreen.setAttribute("custom-button02-url", "https://banterlateshow.glitch.me/darwinawards.html");
		firescreen.setAttribute("custom-button02-text", "Darwin Awards");
		firescreen.setAttribute("custom-button03-url", "https://banterlateshow.glitch.me/cag-shownotes.txt");
		firescreen.setAttribute("custom-button03-text", "CAG Show Notes");
		//firescreen.setAttribute("custom-button04-url", "https://bls.firer.at/shownotes.html");
		//firescreen.setAttribute("custom-button04-text", "firer.at shownotes");
		firescreen.setAttribute("custom-button04-url", "https://banterlateshow.com");
		firescreen.setAttribute("custom-button04-text", "Banter Late Show");
		firescreen.setAttribute("src", "https://firer.at/scripts/firescreenv2.js");
		document.querySelector("a-scene").appendChild(firescreen);
	};
}

setTimeout(() => { somerandomStartActions(); }, 5000);
