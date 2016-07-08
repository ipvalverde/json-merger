#! /usr/bin/env node
'use strict';

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.version(_package2.default.version).command('include <file> [otherFiles...]', 'specify the includes').action(function (file, otherFiles) {

  // console.log(file);
  console.log(otherFiles);
});

_commander2.default.parse(process.argv);