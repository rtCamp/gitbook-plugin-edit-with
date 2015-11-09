require(["gitbook", "jQuery"], function(gitbook, $) {
    gitbook.events.bind('start', function (e, config) {
        var conf = config['edit-link'];
        var label = conf.label;
        var base = conf.base;
        var multi = true;
        
        // Check if our configuration contains multilingual property
        if (typeof(conf.multilingual) !== "undefined") {
            multi = conf.multilingual;
        }

        // Add slash at the end if not present
        if (base.slice(-1) != "/") {
            base = base + "/";
        }

        gitbook.toolbar.createButton({
            icon: 'fa fa-edit',
            text: label,
            onClick: function() {
                var filepath = gitbook.state.filepath;
                var lang = '';
                
                // If multilingual, get language from html `lang` tag
                if (multi) {
                    lang = $('html').attr('lang');
                    if (lang) lang = lang + '/';
                }

                window.open(base + lang + filepath);
            }
        });
    });

});
