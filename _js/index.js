import Pjax from 'pjax';
import SmoothScroll from 'smooth-scroll';
import Player from '@vimeo/player';
import topbar from 'topbar';

// Home

function domReady() {
  // Cycle button
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

// Pjax

document.addEventListener("pjax:send", function() {
  topbar.show();
})

document.addEventListener("pjax:success", function() {
  topbar.hide();
  domReady();
  var slug = document.querySelector('article.content').dataset.bodyClass || 'home';
  document.body.className = slug;

  // Only used for menu links on the About page; slightly kludgy
  var hash = document.location.hash;
  if (hash.length > 0) {
    document.querySelector('a[href="' + hash + '"]').click();
  }
  
  // We need to manually change the document language
  document.querySelector('html').lang = document.querySelector('article.content').dataset.lang;
  
  // Move focus to main article
  document.querySelector('article.content').focus();
});

new Pjax({
  debug: false,
  elements: ['a[href]:not(#cycle-button)'],
  selectors: ['title', 'header#menu', 'article.content', 'section.projects header', 'footer']
});

// Topbar

topbar.config({
  barColors: { '0': 'white', '1.0': 'white' },
});

// Smooth scroll
var smoothScroll = new SmoothScroll('a[href*="#"]', { speed: 400 });

// Initialize
domReady();
