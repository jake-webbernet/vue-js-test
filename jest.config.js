module.exports = {
    moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],

    transform: {
        ".*\\.(vue)$": "vue-jest",
        '^.+\\.vue$': 'vue-jest',
        '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
            'jest-transform-stub',
        '^.+\\.(js|jsx)?$': 'babel-jest'
    },

    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/components/$1'
    },

    testMatch: [
        '<rootDir>/(tests/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))'
    ],

    transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
