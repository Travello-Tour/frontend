require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  rules: {
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
        selfClosingTag: {
          singleline: 'never',
          multiline: 'always',
        },
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    "vue/html-indent": ["error", 2, {
      "attribute": 1,
      "baseIndent": 1,
      "closeBracket": 0,
      "alignAttributesVertically": true,
      "ignores": []
    }],
    "vue/mustache-interpolation-spacing": ["error", "always"],
    "vue/attribute-hyphenation": ["error", "never", {
      "ignore": []
    }],
  },
}
