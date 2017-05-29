import Pjax from 'pjax';
import smoothScroll from 'smooth-scroll';
import Player from '@vimeo/player';

// Home

var cycleButton = document.getElementById('cycle-button');
if (cycleButton) {
  cycleButton.onclick = function() {
    var currentGroup = parseInt(this.dataset.currentGroup);
    var totalGroups = parseInt(document.querySelector('.cycle span:last-child').dataset.group);
    var nextGroup = currentGroup + 1 > totalGroups ? 1 : currentGroup + 1;
    document.querySelectorAll('.cycle span').forEach(function(element) {
      element.classList.add('hide');
    });
    document.querySelectorAll(".cycle span[data-group='" + nextGroup + "']").forEach(function(element) {
      element.classList.remove('hide');
    });
    this.dataset.currentGroup = nextGroup;
    return false;
  };
}

// Pjax

document.addEventListener("pjax:complete", function() {
  var slug = document.querySelector('article.content').dataset.bodyClass || '';
  document.body.className = slug;
  var currentProject = document.querySelector('article.current');
  
  if (currentProject) {
    currentProject.classList.remove('current');
  }
  
  if (slug) {
    document.querySelector('article.' + slug).classList.add('current');
  }
})

new Pjax({ selectors: ['title', 'article.content'] });

// Smooth scroll

smoothScroll.init({ speed: 400 });

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
