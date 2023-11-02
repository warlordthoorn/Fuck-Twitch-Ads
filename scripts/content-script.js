var videoAdTimer = setTimeout(videoAdAPI, 1000);
var videoAdTargetNode;
const videoAdClassToSearch = "video-player"
const videoAdaBreakDivs = ["hZVELi", "eTyJeu"] // cause twitch likes to change them thus we just keep a list of them

function videoAdAPI() {
  videoAdTargetNode = document.getElementsByClassName(videoAdClassToSearch)[0];
  if (!videoAdTargetNode) {
    videoAdTimer = setTimeout(videoAdAPI, 5000);
  } else {
    console.log("Found the stream buffer");
    var stream = undefined;

    var pbypStream = undefined;

    const config = { attributes: true, childList: true, subtree: true };

    var currentStatus = false;

    const callback = async (mutationList, observer) => {
      // if updated we need to check if a class with name eTyJeu is added
      // this class contains the streamer is in adbreak message
      var foundAd = false;
      for (var ad of videoAdaBreakDivs) {
        if (document.getElementsByClassName(ad)[0]) {
          foundAd = true;
          break;
        }
      }
      if (foundAd) {
        // console.log("Ad has started, trying to mute the ad and unmute the stream");
        // each new ad (in ad reel) will trigger the previous if
        // just mute very stream that isn't player by player
        // console.log( document.getElementsByTagName("video"))
        for (var stream of document.getElementsByTagName("video")) {
          if (stream) { // only proceed if it actually found video 
            // console.log("Video found now muting the stream");
            currentStatus = true;
            stream.muted = true;
            // console.log(stream)
          }
        }
        // not every ad has a player by player video
        const pbypCheck = document.getElementsByClassName("pbyp-player-instance")[0]
        if (pbypCheck) {
          pbypStream = pbypCheck.getElementsByTagName("video")[0];
          pbypStream.muted = false;
          // TODO extra would be swapping the stream screens
        }
      } else if (currentStatus) {
        for (var stream of document.getElementsByTagName("video")) {
          if (stream) { // only proceed if it actually found video 
            // console.log("unMuting");
            // console.log(stream);
            stream.muted = false;
            currentStatus = false;
          }
        }
        if (pbypStream) { // close pbypStream
          pbypStream.muted = true;
          pbypStream = undefined;
        }
      }
    }

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations

    observer.observe(videoAdTargetNode, config);
  }
}

var bannerAdTimer = setTimeout(bannerAdAPI, 1000);
const bannerAdIdToSearch = "stream-lowerthird"
const iFrameClass = "stream-display-ad__frame_lower-third"

function bannerAdAPI() {
  if (!document.getElementById(bannerAdIdToSearch)) {
    bannerAdTimer = setTimeout(bannerAdAPI, 5000);
  } else {
    console.log("Found the banner div");

    var iFrameAdded = setTimeout(addedIframe, 5000);
    
    function addedIframe() {
      const temp = document.getElementById(bannerAdIdToSearch)
      if (temp) {
        temp.setAttribute("hidden", true)
      } else {
        iFrameAdded = setTimeout(addedIframe, 10000);
      }
    }
  }
}
