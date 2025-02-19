// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt([
  {
    rules: {
      'no-console': 'warn', // console.logの使用を警告
      'no-unused-vars': 'error', // 未使用の変数をエラーとして報告
      'eqeqeq': 'error', // 厳密等価演算子（===）の使用を強制
      'curly': 'error', // すべての制御文に波括弧を強制
      'stylistic/semi': 'off', // stylistic/semiルールを無効化
      'quotes': ['error', 'single'], // シングルクォートの使用を強制
      'no-trailing-spaces': 'error', // 行末の空白を禁止
      'indent': ['error', 2], // インデント2スペース
      'comma-dangle': ['error', 'always-multiline'], // 複数行の場合は末尾カンマを強制
      'no-var': 'error', // varの使用を禁止
      'prefer-const': 'error', // 再代入がない場合はconstを強制
    },
    languageOptions: {
      globals: {
        browser: true,
        node: true,
        es6: true,
      },
      ecmaVersion: 2020,
      sourceType: 'module',
    },
  },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/require-v-for-key': 'error', // v-forディレクティブでkeyの指定を強制
      'vue/no-use-v-if-with-v-for': 'error', // v-ifとv-forの同時使用を禁止
      'vue/multi-word-component-names': 'error', // コンポーネント名は複数単語を強制
      'vue/html-indent': ['error', 2], // テンプレートのインデントを2スペースに
      'vue/html-closing-bracket-newline': ['error', {
        singleline: 'never', // 単一行の場合は改行なし
        multiline: 'always', // 複数行の場合は改行を強制
      }],
    },
  },
  {
    files: ['**/*.vue', '**/*.ts'],
    rules: {
      'no-console': 'error', // 本番環境ではconsole.logを禁止
      '@typescript-eslint/no-explicit-any': 'error', // any型の使用を禁止
      '@typescript-eslint/explicit-function-return-type': 'error', // 関数の戻り値の型を明示的に指定
      '@typescript-eslint/no-unused-vars': 'error', // 未使用の変数をエラーとして報告
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'], // 型定義に一貫性を強制
    },
  },
])
