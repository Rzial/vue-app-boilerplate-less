module.exports = {
    clearMocks: true,

    collectCoverage: true,
    collectCoverageFrom: [
        '**/src/**/*.{[tj]s?(x),vue}',
    ],

    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '<rootDir>/src/main.js',
    ],

    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },

    moduleFileExtensions: ['js', 'json', 'vue'],
    moduleNameMapper: {
        '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$': '<rootDir>/test/__mocks__/file.js',

        '@src/(.*)$': '<rootDir>/src/$1',
        '@res/(.*)$': '<rootDir>/res/$1',

        '@service/(.*)$': '<rootDir>/src/service/$1',
        '@util/(.*)$': '<rootDir>/src/util/$1',

        '@vue-component/(.*)$': '<rootDir>/src/vue/component/$1',
        '@vue-view/(.*)$': '<rootDir>/src/vue/view/$1',
    },

    snapshotSerializers: ['jest-serializer-vue'],

    testMatch: [
        '**/test/**/?(*.)+(spec|test).[tj]s?(x)',
    ],

    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.vue$': 'vue-jest',
    },
};
