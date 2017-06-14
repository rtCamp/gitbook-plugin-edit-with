require(["gitbook", "jQuery"], function(gitbook, $) {
    gitbook.events.bind('start', function (e, config) {
        var conf = config['edit-link'];
        var label = conf.label;
        var base = conf.base;
        var icon = conf.icon ? conf.icon : 'fa fa-edit';
        var addpath= conf.addpath ? conf.addpath : true;
        var lang = gitbook.state.innerLanguage;
        if (lang) {
            // label can be a unique string for multi-languages site
            if (typeof label === 'object') label = label[lang];

            lang = lang + '/';
        }

        // Add slash at the end if not present
        if (base.slice(-1) != "/") {
            base = base + "/";
        }

        gitbook.toolbar.createButton({
            icon: icon,
            text: label,
            onClick: function() {
                var filepath = gitbook.state.filepath;
                console.log(base);
                console.log(lang);
                console.log(addpath);
                window.open(base + lang + (addpath ? filepath : '') );
            }
        });
    });

});
