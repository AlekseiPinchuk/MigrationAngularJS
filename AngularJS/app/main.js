require.config({
    baseUrl: "./",

    // alias libraries paths
    paths: {
        'angular': './angular/angular',
        'angular-route': './angular-route/angular-route',
        'table': './modules/table/table.js',
        'app': './app'
    },

    shim: {
        'app': ['angular-route'],
        'angular-route': ['angular']
    },

    // kick start application
    deps: ['app']

});
