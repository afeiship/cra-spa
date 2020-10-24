# prettier
> uniform format.

```json
{
  "trailingComma": "none",
  "arrowParens": "always",
  "printWidth": 100,
  "bracketSpacing": true,
  "jsxBracketSameLine": true,
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true,
  "overrides": [
    {
      "files": ["*.json", ".eslintrc", ".tslintrc", ".prettierrc", ".tern-project"],
      "options": {
        "parser": "json",
        "tabWidth": 2
      }
    },
    {
      "files": "*.{css,sass,scss,less}",
      "options": {
        "parser": "postcss",
        "tabWidth": 2
      }
    },
    {
      "files": "*.ts",
      "options": {
        "parser": "typescript"
      }
    }
  ]
}
```