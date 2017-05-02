# maptalks.windylayer

[![NPM Version](https://img.shields.io/npm/v/maptalks.windylayer.svg)](https://github.com/maptalks/maptalks.windylayer)

An experiment layer plugin to draw animation of wind, this is a fork of Esri's [wind-js](https://github.com/Esri/wind-js). Most of the codes is ported from original great works.

![screenshot](https://camo.githubusercontent.com/23c6c087b534f84b8579722e46431141ef72c748/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f3335313136342f323334393839352f33366261316339612d613536392d313165332d383539642d3564373533656130383938632e6a706567)

## Examples

* [Wind Visualization from GFS Data](https://fuzhenn.github.io/maptalks.windylayer/demo/). ([Original](http://esri.github.io/wind-js/))

## Install
  
* Install with npm: ```npm install maptalks.windylayer```. 
* Download from [dist directory](https://github.com/maptalks/maptalks.windylayer/tree/gh-pages/dist).
* Use unpkg CDN: ```https://unpkg.com/maptalks.windylayer/dist/maptalks.windylayer.min.js```

## Usage

As a plugin, ```maptalks.windylayer``` must be loaded after ```maptalks.js``` in browsers.
```html
<script type="text/javascript" src="https://unpkg.com/maptalks/dist/maptalks.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/maptalks.windylayer/dist/maptalks.windylayer.min.js"></script>
<script>
var windyLayer = new maptalks.WindyLayer('wind', data, { 'opacity' : 0.3 }).addTo(map);
</script>
```

## Supported Browsers

IE 9-11, Chrome, Firefox, other modern and mobile browsers.

## API Reference

```WindyLayer``` is a subclass of [maptalks.Layer](http://docs.maptalks.org/api/maptalks.Layer.html) and inherits all the methods of its parent.

### `Constructor`

```javascript
new maptalks.WindyLayer(id, data, options)
```

* id **String** layer id
* data **Marker[]** layer data, an array of maptalks.Marker
* options **Object** options
    * options defined in [maptalks.Layer](http://docs.maptalks.org/api/maptalks.Layer.html)

### `getData`

get layer's data

**Returns** `Object`

### `setData(data)`

set new data

* data **Object** data to set

**Returns** `this`

### `toJSON()`

export the layer's JSON.

```javascript
var json = windyLayer.toJSON();
```

**Returns** `Object`

## Contributing

We welcome any kind of contributions including issue reportings, pull requests, documentation corrections, feature requests and any other helps.

## Develop

The only source file is ```index.js```.

It is written in ES6, transpiled by [babel](https://babeljs.io/) and tested with [mocha](https://mochajs.org) and [expect.js](https://github.com/Automattic/expect.js).

### Scripts

* Install dependencies
```shell
$ npm install
```

* Watch source changes and generate runnable bundle repeatedly
```shell
$ gulp watch
```

* Tests
```shell
$ npm test
```

* Watch source changes and run tests repeatedly
```shell
$ gulp tdd
```

* Package and generate minified bundles to dist directory
```shell
$ gulp minify
```

* Lint
```shell
$ npm run lint
```
