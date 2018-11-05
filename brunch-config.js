module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'app.js': 'app/**',
        'vendor.js': 'node_modules/**' // speed up incremental compilation
      }
    }
  },
  modules: {
    autoRequire: {
      'app.js': ['app']
    }
  },
  npm: {
    static: [
      // https://github.com/photonstorm/phaser/issues/1977
      'node_modules/phaser/dist/phaser.js'
    ]
  },
  plugins: {
    brunchTypescript: {
      ignoreErrors: true // https://stackoverflow.com/a/51688940/5044950
    }
  }
};
