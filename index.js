var yaml = require('yamljs');
var dot = require('dot-component');

module.exports = function(src, path) {
  return dot.get(yaml.parse(src), path);
};
