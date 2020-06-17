
let describe = require('mocha').describe;
let it = require('mocha').it;
let before = require('mocha').before;
let expect = require('chai').expect;
let md = require('@gerhobbelt/markdown-it')();
let MarkdownFa = require('../index.js');

describe('Font Awesome tests', function () {
  before(function () {
    md.use(MarkdownFa);
  });

  it('Should convert simple :fa-flag: style definitions to FA4 format', function (done) {
    // Convert the markdown.
    let output = md.render(':fa-flag:');

    // Assert it contains the correct font awesome HTML.
    expect(output).to.contain('<i class="fa fa-flag"></i>');
    done();
  });

  it('Should convert brand and light :fab-github: :fal-something: style definitions to FA5 format', function (done) {
    // Convert the markdown.
    let output = md.render(':fal-flag: :fab-github:');

    // Assert it contains the correct font awesome HTML.
    expect(output).to.contain('<i class="fal fa-flag"></i>');
    expect(output).to.contain('<i class="fab fa-github"></i>');
    done();
  });

  it('Should handle all 1-part FA names, e.g. fa-flag', function (done) {
    // Convert the markdown.
    let output = md.render(':fa-flag:');

    // Assert it contains the correct font awesome HTML.
    expect(output).to.contain('<i class="fa fa-flag"></i>');
    done();
  });

  it('Should handle all 2-part FA names, e.g. fa-address-card', function (done) {
    // Convert the markdown.
    let output = md.render(':fa-address-card:');

    // Assert it contains the correct font awesome HTML.
    expect(output).to.contain('<i class="fa fa-address-card"></i>');
    done();
  });

  it('Should handle all 3-part FA names, e.g. fa-angle-double-down', function (done) {
    // Convert the markdown.
    let output = md.render(':fa-angle-double-down:');

    // Assert it contains the correct font awesome HTML.
    expect(output).to.contain('<i class="fa fa-angle-double-down"></i>');
    done();
  });

  it('Should handle all 4-part FA names, e.g. fa-arrow-alt-circle-right', function (done) {
    // Convert the markdown.
    let output = md.render(':fa-arrow-alt-circle-right:');

    // Assert it contains the correct font awesome HTML.
    expect(output).to.contain('<i class="fa fa-arrow-alt-circle-right"></i>');
    done();
  });

});
