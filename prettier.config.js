/** @type {import('prettier').Config} */
module.exports = {
  arrowParens: 'always',
  bracketSameLine: true,
  endOfLine: 'lf',
  plugins: [
    'prettier-plugin-pkg',
    'prettier-plugin-imports',
    'prettier-plugin-jsdoc',
  ],
  printWidth: 80,
  quoteProps: 'consistent',
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
};
