module.exports = api => {
  api.cache(true)
  const presets = [
    [
      '@babel/preset-env',
      {
        'targets': {
          'node': '4.9.1'
        },
        'useBuiltIns': 'usage',
        'modules': 'commonjs'
      }
    ]
  ]

  return {
    presets
  }
}
