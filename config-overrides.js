//配置具體的修改規則
const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
		libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
)