requirejs.config({
    paths : {
        plyr : 'node_modules/plyr/dist/plyr',
        jquery : 'node_modules/jquery/dist/jquery',

        plyrModule : 'modules/plyrModule',

        app : 'app'
    },
    shim : {
        plyrModule : {
            deps : ['plyr', 'jquery']
        }
    }
});

requirejs(['app']);