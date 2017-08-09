require(["gitbook", "jQuery"], function(gitbook, $) {
    gitbook.events.bind('start', function (e, config) {
        var conf     = config['edit-link'];
        var base     = conf.base;
        var icon     = ("icon" in conf)     ? conf.icon     : 'fa fa-edit';
        var label    = ("label" in conf)    ? conf.label    : "Edit This Page";
        var title    = ("title" in conf)    ? conf.title    : '';
        var position = ("position" in conf) ? conf.position : 'left';

        var lang = gitbook.state.innerLanguage;
        if (lang) {
            // label can be a unique string for multi-languages site
            if (typeof label === 'object') label = label[lang];

            lang = lang + '/';
        } else {
          lang = '';
        }

        // Add slash at the end if not present
        if (base.slice(-1) != "/") {
            base = base + "/";
        }

        gitbook.toolbar.createButton({
            icon: icon,
            text: label,
            label: title,
            position: position,
            onClick: function() {
                var filepath = gitbook.state.filepath;
                window.open(base + lang + filepath);
            }
        });
    });

});
