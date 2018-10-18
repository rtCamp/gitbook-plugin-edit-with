require(["gitbook"], function(gitbook) {
    gitbook.events.bind('start', function (e, config) {
        var conf = config['edit-link'];
        var label = conf.label;
        var base = conf.base;
        // support The template
        // default vars: ${filename}, ${.md}
        var template = conf.template
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
            icon: 'fa fa-edit',
            text: label,
            onClick: function() {
                var filepath = gitbook.state.filepath;
                var href = base + lang 
                if (template) {
                    href = href + template
                    var templateVars = {
                        '${filename}': filepath.slice(0, -3),
                        '${.md}': '.md'
                    }
                    for (var key in templateVars) {
                        href = href.replace(key, templateVars[key])
                    }
                } else {
                    href = href + filepath;
                }

                window.open(href);
            }
        });
    });

});