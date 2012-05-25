(function() {
    "use strict";
    
    console.log("begin");
    
    var selectors = {
        stepped: {
            battery: 'http://selectors.cnetcontentsolutions.com/battery/demo/hook.ws',
            inktoner: 'http://selectors.cnetcontentsolutions.com/inktoner/demo/hook.ws',
            memory: 'http://selectors.cnetcontentsolutions.com/memory/demo/hook.ws'
            //memory: 'test.js'
        },
        accordion: {
            battery: 'http://selectors.cnetcontentsolutions.com/battery/demo-3/hook.ws',
            inktoner: 'http://selectors.cnetcontentsolutions.com/inktoner/demo-3/hook.ws',
            memory: 'http://selectors.cnetcontentsolutions.com/memory/demo-3/hook.ws'
        },
        legacy: {
            battery: 'legacyhook.js',
            inktoner: 'legacyhook.js',
            memory: 'legacyhook.js'
        },
        classic: {
            battery: 'http://selectors.cnetcontentsolutions.com/battery/demo-4/hook.ws',
            inktoner: 'http://selectors.cnetcontentsolutions.com/inktoner/demo-4/hook.ws',
            memory: 'http://selectors.cnetcontentsolutions.com/memory/demo-4/hook.ws'
        }
    };
    
    var defaultSelector = {
        templateName: 'stepped',
        typeName: 'memory'
    };
    
    var query = decodeURIComponent(window.location.search);
    query = query.substr(1);
    if(!query || query.indexOf('/') < 0) {
        window.location.search = defaultSelector.templateName + '/' + defaultSelector.typeName;
        return;
    }
    
    var queryParts = query.split('/');
    var selector = {
        templateName: queryParts[0],
        typeName: queryParts[1]
    };
    console.log(selector);
    
    var init = function init() {
        var placeholder = document.getElementById('selectors-placeholder');
        if(!placeholder) {
            setTimeout(init, 100);
        } else {
            console.log('adding');
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = selectors[selector.templateName][selector.typeName];
            var div = document.createElement('div');
            div.id = 'ccs-selector-wrapper';
            placeholder.appendChild(script);
            placeholder.appendChild(div);
            console.log('added');
        }
    };
    init();
    
}());