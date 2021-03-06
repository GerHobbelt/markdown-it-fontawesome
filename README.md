# markdown-it-fontawesome

[![Build Status](https://img.shields.io/travis/GerHobbelt/markdown-it-fontawesome/master.svg?style=flat)](https://travis-ci.org/GerHobbelt/markdown-it-fontawesome)
[![NPM version](https://img.shields.io/npm/v/@gerhobbelt/markdown-it-fontawesome.svg?style=flat)](https://www.npmjs.org/package/@gerhobbelt/markdown-it-fontawesome)
[![Coverage Status](https://img.shields.io/coveralls/GerHobbelt/markdown-it-fontawesome/master.svg?style=flat)](https://coveralls.io/r/GerHobbelt/markdown-it-fontawesome?branch=master)

[Markdown-it][markdown-it] plugin that adds [Font Awesome][fontawesome] icons support.

Turn this:

```md
Hello World! :fa-flag:
```

Into this:

```html
<p>Hello World! <i class="fa fa-flag"></i></p>
```


## Install
```bash
$ npm install @gerhobbelt/markdown-it-fontawesome --save
```



## Usage


### Enable plugin

```js
var md = require('@gerhobbelt/markdown-it');
var fa = require('@gerhobbelt/markdown-it-fontawesome');

md().use(fa);
```


### Font Awesome version 4 example

```md
Hello World! :fa-flag:

- [:fa-google: Google](https://www.google.com/)
- [:fa-github: GitHub](https://github.com/)
```

Gets converted to:

```html
<p>Hello World! <i class="fa fa-flag"></i></p>
<ul>
<li><a href="https://www.google.com/"><i class="fa fa-google"></i> Google</a></li>
<li><a href="https://github.com/"><i class="fa fa-github"></i> GitHub</a></li>
</ul>
```


### Font Awesome 5+ example


```md
Hello World! :fal-flag:

- [:fab-google: Google](https://www.google.com/)
- [:fab-github: GitHub](https://github.com/)
```

gets converted to: 

```html
<p>Hello World! <i class="fal fa-flag"></i></p>
<ul>
<li><a href="https://www.google.com/"><i class="fab fa-google"></i> Google</a></li>
<li><a href="https://github.com/"><i class="fab fa-github"></i> GitHub</a></li>
</ul>
```


[markdown-it]: https://github.com/markdown-it/markdown-it
[fontawesome]: https://fortawesome.github.io/Font-Awesome/


### Credits 

Original: https://github.com/nunof07

Font awesome 5 support and tests: https://github.com/rjjakes


### License

MIT
