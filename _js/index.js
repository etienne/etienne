import Pjax from 'pjax';
import Plyr from 'plyr';
import SmoothScroll from 'smooth-scroll';
import topbar from 'topbar';

// Home

let loadStart = Date.now();
let player;

function domReady() {
  // Videos
  player = new Plyr('#video', {
    controls: ['play', 'progress', 'mute', 'fullscreen'],
    // controls: ['play', 'progress', 'mute'],
    iconUrl: '/assets/plyr-sprites.svg',
    tooltips: { controls: false, seek: false },
    hideControls: true,
  });
  
  // Accessibility (required to move focus after page load)
  document.querySelector('article.content').tabIndex = -1;
}

// Pjax

document.addEventListener("pjax:send", function() {
  loadStart = Date.now();
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

function updatePiwik() {
  _paq.push(['setCustomUrl', location.pathname]);
  _paq.push(['setDocumentTitle', document.title]);
  _paq.push(['setGenerationTimeMs', Date.now() - loadStart]);
  _paq.push(['trackPageView']);
}

new Pjax({
  analytics: updatePiwik,
  cacheBust: false,
  debug: false,
  elements: ['a[href]:not(#cycle-button)'],
  selectors: ['title', 'meta', 'header#menu', 'article.content', 'section.projects', 'footer']
});

// Topbar

topbar.config({
  className: 'topbar',
  barColors: { '0': '#8325ff', '1.0': '#8325ff' },
});

// Smooth scroll
var smoothScroll = new SmoothScroll('a[href*="#"]', { speed: 400 });

// Initialize
domReady();
