module.exports = {
  semi: true,
  tabWidth: 2,
  useTabs: false,
  bracketSameLine: false,
  singleQuote: true,
  bracketSpacing: true,
  trailingComma: 'es5',
  printWidth: 80,
  arrowParens: 'always',
  endOfLine: 'lf',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      options: {
        semi: false,
        arrowParens: 'avoid',
        singleAttributePerLine: true,
      },
    },
  ],
};
