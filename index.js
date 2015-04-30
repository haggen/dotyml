var yaml = require('yamljs');
var dot = require('dot-component');

module.exports = function(src, path) {
  var value = dot.get(yaml.parse(src), path);
  return value && value.toString ? value.toString() : '';
};
