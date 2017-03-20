let env = require('../env.json');

module.exports.config = function() {
  let node_env = process.env.node_env || 'development';
  return env[node_env];

  
};