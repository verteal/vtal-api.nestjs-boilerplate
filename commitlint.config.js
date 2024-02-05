module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'references-empty': [2, 'never'],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-enum': [
      2,
      'always',
      [
        'feat', // Features
        'fix', // Bug Fixes
        'docs', // Documentation
        'style', // Styles
        'refactor', // Code Refactoring
        'perf', // Performance Improvements
        'test', // Tests
        'build', // Builds
        'ci', // Continuous Integrations
        'chore', // Chores
        'revert', // Reverts
      ],
    ],
  },
  parserPreset: {
    parserOpts: {
      issuePrefixes: ['VDEV-'],
    },
  },
}
