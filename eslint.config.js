// @ts-check

import eslint from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import vueParser from 'vue-eslint-parser'

export default [
  eslint.configs.recommended,
  stylistic.configs['recommended-flat'],

  {
    files: ['**/*.vue'],

    languageOptions: {
      parser: vueParser,
    },
  },
]
