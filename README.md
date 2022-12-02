# &lt;blink-text&gt; element

An element which blinks in and out to try to get the users attention like the traditional blink element found in the browsers of yesteryear

## Installation
Available on [npm](https://www.npmjs.com/) as [**blink-text-element**](https://www.npmjs.com/package/blink-text-element).
```
$ npm install --save blink-text-element
```

## Usage

### Script

Import as ES modules:

```js
import 'blink-text-element'
```

Include with a script tag:

```html
<script type="module" src="./node_modules/blink-text-element/dist/index.js">
```

```html
<blink-text>
  This text will blink!
</blink-text>
```

## Browser support

Browsers without native [custom element support][support] require a [polyfill][].
- Chrome
- Firefox
- Safari
- Microsoft Edge

[support]: https://caniuse.com/custom-elementsv1
[polyfill]: https://github.com/webcomponents/custom-elements

## License

Distributed under the MIT license. See LICENSE for details.