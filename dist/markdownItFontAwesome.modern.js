/*! markdown-it-fontawesome 0.3.0-2 https://github.com//GerHobbelt/markdown-it-fontawesome @license MIT */

let Plugin = require('@gerhobbelt/markdown-it-regexp');

module.exports = function fontawesome_plugin(md) {
  // FA4 style.
  md.use(Plugin(/\:fa-([\w\-]+)\:/, function (match, utils) {
    return '<i class="fa fa-' + utils.escape(match[1]) + '"></i>';
  })); // FA5 style.

  md.use(Plugin(/\:fa([\w])-([\w\-]+)\:/, function (match, utils) {
    return '<i class="fa' + utils.escape(match[1]) + ' fa-' + utils.escape(match[2]) + '"></i>';
  }));
};
//# sourceMappingURL=markdownItFontAwesome.modern.js.map
