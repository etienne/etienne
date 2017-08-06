Mon site web.

## Installation

```
gem install bundler
bundle
brew install homebrew/science/vips --with-webp --with-graphicsmagick
npm install
```

Peut-être nécessaire:

```
npm install -g node-gyp
cd node_modules/sharp && node-gyp rebuild
```

## Démarrer le serveur

```
bundle exec jekyll serve --livereload
gulp
```

## Tester les liens

```
rake test
```
