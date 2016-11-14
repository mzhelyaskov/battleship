
(function (global) {

    var templateContainer = {};

    function compile(templateIDList) {
        for (var i = 0; i < arguments.length; i++) {
            var templateID = arguments[i];
            var templateSource = document.getElementById(templateID).innerHTML;
            templateContainer[templateID] = Handlebars.compile(templateSource);
        }
    }

    global.templateEngine = {
        compile: compile,
        get: function(templateID) {
            if (!templateContainer[templateID]) {
                compile(templateID);
            }
            return templateContainer[templateID];
        }
    }
}(window));