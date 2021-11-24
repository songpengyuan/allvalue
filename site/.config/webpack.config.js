const path = require('path');

module.exports = (config) => {
    config.resolve.alias = {
        'hunter-design': path.resolve('../components'),
      };
};
