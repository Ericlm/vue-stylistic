// @ts-check

import eslint from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'

export default [
  eslint.configs.recommended,
  stylistic.configs['recommended-flat'],
]
