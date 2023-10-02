// Class name of player
const targetNode = document.getElementsByClassName("dbhvRM")[0];

// stream feed
var stream = undefined;

var pbypStream = undefined;

const config = { attributes: true, childList: true, subtree: true };

var currentStatus = false;

const callback = async (mutationList, observer) => {
  // if updated we need to check if a class with name eTyJeu is added
  // this class contains the streamer is in adbreak message
  if (document.getElementsByClassName("eTyJeu")[0]) {
    // each new ad (in ad reel) will trigger the previous if
    // we don't want to do the process everytime, because MutationObserver freeze the DOM
    // if (!currentStatus) {
      stream = document.getElementsByClassName("video-ref")[0].getElementsByTagName("video")[0]; // cause main video doesn't have a tag
      if (stream) { // only proceed if it actually found video 
        currentStatus = true;
        stream.muted = true;
        // not every ad has a player by player video
        const pbypCheck = document.getElementsByClassName("pbyp-player-instance")[0]
        if (pbypCheck) {
          pbypStream = pbypCheck.getElementsByTagName("video")[0];
          pbypStream.muted = false;
          // TODO extra would be swapping the stream screens
        }
      }
    // }
  } else if (currentStatus) {
    currentStatus = false;
    if (stream) {
      stream.muted = false; // unmute stream 
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
observer.observe(targetNode, config);