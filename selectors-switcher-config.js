(function() {
    "use strict";
    /*global window: false */
    
    window.selectorsSwitcherConfig = {
        selectors: {
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
        },
        
        legacySelectors: {
            legacy: {
                battery: 'http://selectors.cnetcontentsolutions.com/battery/demo-1/',
                inktoner: 'http://selectors.cnetcontentsolutions.com/inktoner/demo-1/',
                memory: 'http://selectors.cnetcontentsolutions.com/memory/demo-1/'
            }
        },
        
        defaultSelector: {
            templateName: 'stepped',
            typeName: 'memory'
        }
    };
}());