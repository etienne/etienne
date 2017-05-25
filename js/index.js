smoothScroll.init({ speed: 400 });

var videos = document.getElementsByClassName('video');

for(var i = 0; i < videos.length; i++) {
  var video = videos.item(i);
  
  if (typeof window.orientation !== 'undefined') {
    initializeVideo.bind(video)();
  } else {
    video.onclick = initializeVideo;
  }
}

function initializeVideo() {
  var player = new Vimeo.Player(this, {autoplay: true});
}
