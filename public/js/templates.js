
(function (global) {

    var templateContainer = {};

    function init(templateIDList) {
        for (var i = 0; i < arguments.length; i++) {
            var templateID = arguments[i];
            var templateSource = document.getElementById(templateID).innerHTML;
            templateContainer[templateID] = Handlebars.compile(templateSource);
        }
    }

    global.templates = {
        init: init,
        get: function(templateID) {
            if (!templateContainer[templateID]) {
                init(templateID);
            }
            return templateContainer[templateID];
        }
    }
}(window));