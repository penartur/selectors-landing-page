(function() {
    "use strict";
    /*jshint multistr: true */
    /*global window: false */
    
    var urls = {
        battery: 'http://selectors.cnetcontentsolutions.com/battery/demo-1/',
        inktoner: 'http://selectors.cnetcontentsolutions.com/inktoner/demo-1/',
        memory: 'http://selectors.cnetcontentsolutions.com/memory/demo-1/'
    };
    
    var query = decodeURIComponent(window.location.search).substr(1);
    var queryParts = query.split('/');
    var selectorTypeName = queryParts[1];
    var url = urls[selectorTypeName];
    
    window.this_url = url + 'q.asp';
    window.dtext = new Array ("Select your Device Type","Select the Manufacturer","Select the Product Line","Select the Model");
    window.mscm=0;

    var placeholder = document.getElementById('selectors-placeholder');
    placeholder.className = 'IEbug';
    
    var json2007 = document.createElement('script');
    json2007.type = 'text/javascript';
    json2007.src = 'http://selectors.cnetcontentsolutions.com/common/shared/json2007.js';
    placeholder.appendChild(json2007);
    
    var rsh = document.createElement('script');
    rsh.type = 'text/javascript';
    rsh.src = 'http://selectors.cnetcontentsolutions.com/common/shared/rsh.js';
    placeholder.appendChild(rsh);
    
    var rshForm = document.createElement('form');
    rshForm.id = 'rshStorageForm';
    rshForm.style = 'left:-1000px;top:-1000px;width:1px;height:1px;border:0;position:absolute;';
    placeholder.appendChild(rshForm);
    
    var rshTextarea = document.createElement('textarea');
    rshTextarea.id = 'rshStorageField';
    rshTextarea.style = 'left:-1000px;top:-1000px;width:1px;height:1px;border:0;position:absolute;';
    rshForm.appendChild(rshTextarea);
    
    var ajax = document.createElement('script');
    ajax.type = 'text/javascript';
    ajax.src = url + 'ajax.js';
    placeholder.appendChild(ajax);
    
    var runAjax = function runAjax() {
        if(!window.dosubmit) {
            setTimeout(runAjax, 100);
        } else {
            window.onload();
        }
    };
    runAjax();
    
    var css = document.createElement('link');
    css.rel = 'stylesheet';
    css.type = 'text/css';
    css.href = url + 'selector.css?=v2';
    placeholder.appendChild(css);
    
    var selProduct = document.createElement('div');
    selProduct.id = 'IEbug';
    selProduct.className = 'sel_product';
    selProduct.innerHTML = '\
<div class="sel_banner_' + selectorTypeName + '"><!-- Banner Space --></div>\
<div class="sel_search">\
    <table width=90% border=0 cellspacing=0 cellpadding=3>\
        <tr>\
            <td>\
                <span class=sel_inactivetext id=category_select_text>Select the Product Category:</span>\
                <span id=sel_clear class=sel_hiddentext>[<a href="javascript:clear_search();">Clear Search</a>]</span>\
            </td>\
        </tr>\
        <tr>\
            <td>\
                <select id=category_select name=category_code size=1 onChange="dosubmit(this.value,1);" disabled="disabled">\
                    <option value="">Select your Device Type</option>\
                </select>\
            </td>\
        </tr>\
        <tr>\
            <td>\
                <span class=sel_inactivetext id=manufacturer_select_text>Select the Manufacturer:</span>\
            </td>\
        </tr>\
        <tr>\
            <td>\
                <select id=manufacturer_select name=manufacturer_id size=1 onChange="dosubmit(this.value,2);" disabled="disabled">\
                    <option value=""></option>\
                    <option value="padding">Select the Manufacturer</option>\
                </select>\
            </td>\
        </tr>\
        <tr>\
            <td>\
                <span class=sel_inactivetext id=product_line_select_text>Select the Product Line:</span>\
            </td>\
        </tr>\
        <tr>\
            <td>\
                <select id=product_line_select name=product_line_id size=1 onChange="dosubmit(this.value,3);" disabled="disabled">\
                    <option value=""></option>\
                    <option value="padding">Select the Product Line</option>\
                </select>\
            </td>\
        </tr>\
        <tr>\
            <td>\
                <span class=sel_inactivetext id=model_line_select_text>Select the Model:</span>\
            </td>\
        </tr>\
        <tr>\
            <td>\
                <select id=model_line_select name=model_line_id size=1 onChange="dosubmit(this.value,4);" disabled="disabled">\
                    <option value=""></option>\
                    <option value="padding">Select the Model</option>\
                </select>\
            </td>\
        </tr>\
    </table>\
</div>\
<div class=sel_search>\
    <table width=90% border=0 cellspacing=0 cellpadding=3>\
        <tr>\
            <td>\
                <span class=bold_text>OR</span> Enter your Product Model:\
                <span class=sel_smtxt>(i.e. Presario, iMac, or ThinkPad)</span><br>\
            </td>\
        </tr>\
        <tr>\
            <td>\
                <input type=text id=q value="" size=20 maxlength=30 onKeyPress="checkEntersrch(event)">\
                <input type=button value="Search" border=0 onClick="modelsearch();" id=button1 class=sel_button>\
            </td>\
        </tr>\
    </table>\
</div>\
<div class="sel_footer">\
    <div id="copyright">&copy; ' + (new Date()).getYear() + ' CNET Content Solutions - All rights reserved.</div>\
</div>\
';

    placeholder.appendChild(selProduct);
    
}());
