
/**
 * @type {import('eslint').Linter.Config}
 * @doc https://eslint.org/docs/latest/use/getting-started
 */
 module.exports = {
  // 指定解析器
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // 设置ES的版本
    ecmaVersion: "latest",
    // 设置源代码类型
    sourceType: "module",
    // 设置使用的额外的语言特性
    ecmaFeatures: {
      jsx: true,//启用jsx
    },
  },
  extends: [
    'eslint:recommended',// eslint推荐规则
    'plugin:@typescript-eslint/recommended', // eslint推荐规则的typescript版本
  ],
  // 指定脚本的运行环境
  env: {
    browser: true, // 浏览器环境中的全局变量
    node: true, // Node.js 全局变量和 Node.js 作用域
    es6: true, // ECMAScript 6 特性
  },
  rules: {
    // 禁止使用 var
    "no-var": "error",
  },
};
