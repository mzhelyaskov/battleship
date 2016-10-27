(function(global) {

    function getPreparedExpireTime(expires) {
        if (typeof expires == "number" && expires) {
            var expireDate = new Date();
            expireDate.setTime(expireDate.getTime() + expires * 1000);
            expires = options.expires = expireDate;
        }
        if (expires && expires.toUTCString) {
            return expires.toUTCString();
        }
        return expires;
    }

    function getOptionUpdatedCookie(cookie, options) {
        options.expires = getPreparedExpireTime(options.expires);
        for (var propName in options) {
            if (!options.hasOwnProperty(propName)) continue;
            cookie += "; " + propName;
            var propValue = options[propName];
            if (propValue !== true) {
                cookie += "=" + propValue;
            }
        }
        return cookie;
    }

    function setCookie(name, value, options) {
        var cookie = name + "=" + encodeURIComponent(value);
        document.cookie = getOptionUpdatedCookie(cookie, options || {});
    }

    function getCookie(name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    function deleteCookie(name) {
        setCookie(name, "", {
            expires: -1
        })
    }

    global.cookieUtils = {
        getCookie: getCookie,
        setCookie: setCookie,
        deleteCookie: deleteCookie
    }
})(typeof window !== "undefined" ? window : this);