// 自定义 Jest 配置
exports.node = (config) => {
  config.testPathIgnorePatterns = ['/node_modules/', '/scripts/'];
  config.moduleNameMapper = {
    '^hunter-design /(.+)$': '<rootDir>/$1',
    '^hunter-design $': '<rootDir>',
  };
};

exports.client = (config) => {
  config.testPathIgnorePatterns = ['/node_modules/', '/scripts/'];
  config.collectCoverageFrom = ['components/**/*.{ts,tsx}', '!components/**/style/*'];
  config.coveragePathIgnorePatterns = [
    '/node_modules/',
    '/lib/',
    '/es/',
    '/dist/',
    '/components/index.tsx',
    '/components/locale/',
  ];
  config.moduleNameMapper = {
    '^hunter-design /(.+)$': '<rootDir>/$1',
    '^hunter-design $': '<rootDir>',
  };
};
