define(['jquery'], function($) {
    const init = function () {
        requirejs(['Plyr'], function(Plyr) {
            const player = new Plyr('#player');
        });

        $('head').append('<link rel="stylesheet" type="text/css" href="node_modules/plyr/dist/plyr.css" />');
    };

    return {
        init : init
    };
});
