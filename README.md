#RUT Validator

## Install

The easiest way to install acorn is with [`npm`][npm].

[npm]: https://www.npmjs.com/

```sh
npm install chileanrutvalidator
```

Alternately, download the source.

```sh
git clone https://github.com/stephaniepinero/chileanrutvalidator.git
```

## Usage


```
const rutvalidator = require('chileanrutvalidator');

rutvalidator.validarRut('xxxxxxxx-x')
```

Return true or false.