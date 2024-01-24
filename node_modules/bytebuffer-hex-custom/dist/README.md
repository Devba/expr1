Distributions
=============

ByteBuffer.js uses either ArrayBuffers in the browser or Buffers under node.js.

### Browser: [ArrayBuffer](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)-backed

##### Accessed through Typed Arrays

Using Typed Arrays here is pretty much ideal, but it [requires a somewhat recent browser](http://caniuse.com/#feat=typedarrays).

* **[bytebuffer.js](https://raw.githubusercontent.com/dcodeIO/ByteBuffer.js/master/dist/bytebuffer.js)**
  uses an ArrayBuffer as its backing buffer, accessed through an [Uint8Array](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array).

##### Accessed through a DataView ([polyfill](https://github.com/inexorabletash/polyfill/blob/master/typedarray.js) compatible)

Using DataViews is [generally slower](https://github.com/dcodeIO/ByteBuffer.js/issues/16) but works well with common polyfills for
older browsers (avoids array access operators on Typed Arrays).

* **[bytebuffer-dataview.js](https://raw.githubusercontent.com/dcodeIO/ByteBuffer.js/master/dist/bytebuffer-dataview.js)**
  uses an ArrayBuffer as its backing buffer, accessed through a [DataView](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/DataView).

### node.js: [Buffer](https://nodejs.org/api/buffer.html)-backed

* **[bytebuffer-node.js](https://raw.githubusercontent.com/dcodeIO/ByteBuffer.js/master/dist/bytebuffer-node.js)**
  uses a [node Buffer](https://nodejs.org/api/buffer.html) as its backing buffer and accessor.
  
Also available as `bytebuffer` on [npm](https://www.npmjs.org/package/bytebuffer) and
[bower](http://bower.io/search/?q=bytebuffer).
