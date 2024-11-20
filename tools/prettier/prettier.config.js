module.exports = {
  arrowParens: 'always',
  importOrder: ['^(react|next).*', '<BUILTIN_MODULES>', '<THIRD_PARTY_MODULES>', '^[./]'],
  plugins: ['prettier-plugin-imports', 'prettier-plugin-jsdoc', 'prettier-plugin-pkg', 'prettier-plugin-tailwindcss'],
  printWidth: 120,
  quoteProps: 'consistent',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
};
