const { join, resolve } = require('path');

const PROJECT_PATH = resolve(__dirname + '/../..');

module.exports = {
    PROJECT_PATH,

    SRC_PATH: join(PROJECT_PATH, '/src'),
    RES_PATH: join(PROJECT_PATH, '/res'),

    SRC_SERVICE_PATH: join(PROJECT_PATH, '/src/service'),
    SRC_UTILS_PATH: join(PROJECT_PATH, '/src/util'),

    SRC_VUE_COMPONENT_PATH: join(PROJECT_PATH, '/src/vue/component'),
    SRC_VUE_VIEW_PATH: join(PROJECT_PATH, '/src/vue/view'),

    DIST_PATH: join(PROJECT_PATH, '/dist'),
};
