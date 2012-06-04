(function () {
    "use strict";
    /*global window: false, document: false, selectorsSwitcherConfig: false */

    var query,
        queryParts,
        selector,
        initSelector,
        initLeftsideMenu,
        setInnerText = function (elem, text) {
            elem.textContent = elem.innerText = text;
        };

    document.write = function() { }; //to prevent subsequent document.write in hook.ws

    query = decodeURIComponent(window.location.search).substr(1);
    if (!query || query.indexOf('/') < 0) {
        window.location.search = selectorsSwitcherConfig.defaultSelector.templateName + '/' + selectorsSwitcherConfig.defaultSelector.typeName;
        return;
    }

    queryParts = query.split('/');
    selector = {
        templateName: queryParts[0],
        typeName: queryParts[1]
    };

    initSelector = function initSelector() {
        var script,
            div,
            placeholder = document.getElementById('selectors-placeholder');
        if (!placeholder) {
            window.setTimeout(initSelector, 30);
        } else {
            script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = selectorsSwitcherConfig.selectors[selector.templateName][selector.typeName];
            div = document.createElement('div');
            div.id = 'ccs-selector-wrapper';
            placeholder.appendChild(script);
            placeholder.appendChild(div);
        }
    };
    initSelector();

    initLeftsideMenu = function initLeftsideMenu() {
        /*jslint plusplus: true */
        var i,
            j,
            templateHeadDiv,
            templateBodyDiv,
            templateUl,
            typeLi,
            typeA,
            placeholder = document.getElementById('extlinkLeft');
        if (!placeholder) {
            window.setTimeout(initLeftsideMenu, 30);
        } else {
            for (i = 0; i < selectorsSwitcherConfig.uiTemplates.length; i++) {
                templateHeadDiv = document.createElement('div');
                templateHeadDiv.className = 'head';
                setInnerText(templateHeadDiv, selectorsSwitcherConfig.uiTemplates[i].uiName);
                placeholder.appendChild(templateHeadDiv);

                templateBodyDiv = document.createElement('div');
                templateBodyDiv.className = 'body';
                placeholder.appendChild(templateBodyDiv);

                templateUl = document.createElement('ul');
                templateBodyDiv.appendChild(templateUl);

                for (j = 0; j < selectorsSwitcherConfig.uiTypes.length; j++) {
                    typeLi = document.createElement('li');
                    templateUl.appendChild(typeLi);

                    typeA = document.createElement('a');
                    typeA.title = selectorsSwitcherConfig.uiTypes[j].uiName;
                    setInnerText(typeA, selectorsSwitcherConfig.uiTypes[j].uiName);
                    typeA.href = '?' + selectorsSwitcherConfig.uiTemplates[i].name + '/' + selectorsSwitcherConfig.uiTypes[j].name;
                    typeLi.appendChild(typeA);
                }
            }

            templateHeadDiv = document.createElement('div');
            templateHeadDiv.className = 'head';
            setInnerText(templateHeadDiv, 'Product finders');
            placeholder.appendChild(templateHeadDiv);

            templateBodyDiv = document.createElement('div');
            templateBodyDiv.className = 'body';
            placeholder.appendChild(templateBodyDiv);

            templateUl = document.createElement('ul');
            templateBodyDiv.appendChild(templateUl);

            typeLi = document.createElement('li');
            templateUl.appendChild(typeLi);

            typeA = document.createElement('a');
            typeA.title = 'Product finders demo';
            setInnerText(typeA, 'Product finders demo');
            typeA.href = 'http://selectors.cnetcontentsolutions.com/finders/';
            typeLi.appendChild(typeA);
        }
    };
    initLeftsideMenu();

}());
