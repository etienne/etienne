var svgstore = require('svgstore');
var fs = require('fs');
 
var sprites = svgstore()
  .add('plyr-play', fs.readFileSync('./_svg/play.svg', 'utf8'))
  .add('plyr-pause', fs.readFileSync('./_svg/pause.svg', 'utf8'))
  .add('plyr-enter-fullscreen', fs.readFileSync('./_svg/enter-fullscreen.svg', 'utf8'))
  .add('plyr-exit-fullscreen', fs.readFileSync('./_svg/exit-fullscreen.svg', 'utf8'))
  .add('plyr-volume', fs.readFileSync('./_svg/volume.svg', 'utf8'))
  .add('plyr-muted', fs.readFileSync('./_svg/muted.svg', 'utf8'));
 
fs.writeFileSync('./assets/plyr-sprites.svg', sprites);
