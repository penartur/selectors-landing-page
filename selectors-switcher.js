(function() {
    "use strict";
    /*global window: false, document: false, selectorsSwitcherConfig: false */
    
    var query = decodeURIComponent(window.location.search);
    query = query.substr(1);
    if(!query || query.indexOf('/') < 0) {
        window.location.search = selectorsSwitcherConfig.defaultSelector.templateName + '/' + selectorsSwitcherConfig.defaultSelector.typeName;
        return;
    }
    
    var queryParts = query.split('/');
    var selector = {
        templateName: queryParts[0],
        typeName: queryParts[1]
    };
    
    var init = function init() {
        var placeholder = document.getElementById('selectors-placeholder');
        if(!placeholder) {
            window.setTimeout(init, 100);
        } else {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = selectorsSwitcherConfig.selectors[selector.templateName][selector.typeName];
            var div = document.createElement('div');
            div.id = 'ccs-selector-wrapper';
            placeholder.appendChild(script);
            placeholder.appendChild(div);
        }
    };
    init();
    
}());
