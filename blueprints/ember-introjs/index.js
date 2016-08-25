module.exports = {
  name: 'ember-introjs',

  normalizeEntityName: function() {},

  afterInstall: function(options) {
    return this.addBowerPackageToProject('intro.js', '1.0.0');
  },

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/introjs/intro.js');
  }
};
