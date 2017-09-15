import SmoothScroll from 'smooth-scroll';
import Player from '@vimeo/player';

// Home

var storage = window.localStorage;
var loadStart = Date.now();

if (!storage.group) {
  storage.group = 1;
}

function domReady() {
  // Randomly pick the intro text
  if (document.querySelector('.cycle')) {
    var totalGroups = parseInt(document.querySelector('.cycle span:last-child').dataset.group);
    document.querySelectorAll('.cycle span').forEach(function(element) {
      element.classList.add('hide');
    });
    document.querySelectorAll(".cycle span[data-group='" + storage.group + "']").forEach(function(element) {
      element.classList.remove('hide');
    });
    storage.group = storage.group >= totalGroups ? 1 : parseInt(storage.group) + 1;
  }
  
  // Videos
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
    var player = new Player(this, {autoplay: true});
  }
  
  // Accessibility (required to move focus after page load)
  document.querySelector('article.content').tabIndex = -1;
}

function updatePiwik() {
  _paq.push(['setCustomUrl', location.pathname]);
  _paq.push(['setDocumentTitle', document.title]);
  _paq.push(['setGenerationTimeMs', Date.now() - loadStart]);
  _paq.push(['trackPageView']);
}

// Smooth scroll
var smoothScroll = new SmoothScroll('a[href*="#"]', { speed: 400 });

// Initialize
domReady();
