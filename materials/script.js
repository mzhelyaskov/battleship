!function(e, t) {
    function n(e) {
        var t = e.length
          , n = ue.type(e);
        return ue.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function i(e) {
        var t = Te[e] = {};
        return ue.each(e.match(de) || [], function(e, n) {
            t[n] = !0
        }),
        t
    }
    function r(e, n, i, r) {
        if (ue.acceptData(e)) {
            var o, s, a = ue.expando, l = e.nodeType, c = l ? ue.cache : e, u = l ? e[a] : e[a] && a;
            if (u && c[u] && (r || c[u].data) || i !== t || "string" != typeof n)
                return u || (u = l ? e[a] = te.pop() || ue.guid++ : a),
                c[u] || (c[u] = l ? {} : {
                    toJSON: ue.noop
                }),
                ("object" == typeof n || "function" == typeof n) && (r ? c[u] = ue.extend(c[u], n) : c[u].data = ue.extend(c[u].data, n)),
                s = c[u],
                r || (s.data || (s.data = {}),
                s = s.data),
                i !== t && (s[ue.camelCase(n)] = i),
                "string" == typeof n ? (o = s[n],
                null == o && (o = s[ue.camelCase(n)])) : o = s,
                o
        }
    }
    function o(e, t, n) {
        if (ue.acceptData(e)) {
            var i, r, o = e.nodeType, s = o ? ue.cache : e, l = o ? e[ue.expando] : ue.expando;
            if (s[l]) {
                if (t && (i = n ? s[l] : s[l].data)) {
                    ue.isArray(t) ? t = t.concat(ue.map(t, ue.camelCase)) : t in i ? t = [t] : (t = ue.camelCase(t),
                    t = t in i ? [t] : t.split(" ")),
                    r = t.length;
                    for (; r--; )
                        delete i[t[r]];
                    if (n ? !a(i) : !ue.isEmptyObject(i))
                        return
                }
                (n || (delete s[l].data,
                a(s[l]))) && (o ? ue.cleanData([e], !0) : ue.support.deleteExpando || s != s.window ? delete s[l] : s[l] = null )
            }
        }
    }
    function s(e, n, i) {
        if (i === t && 1 === e.nodeType) {
            var r = "data-" + n.replace(Ee, "-$1").toLowerCase();
            if (i = e.getAttribute(r),
            "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : Ne.test(i) ? ue.parseJSON(i) : i
                } catch (o) {}
                ue.data(e, n, i)
            } else
                i = t
        }
        return i
    }
    function a(e) {
        var t;
        for (t in e)
            if (("data" !== t || !ue.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;
        return !0
    }
    function l() {
        return !0
    }
    function c() {
        return !1
    }
    function u() {
        try {
            return V.activeElement
        } catch (e) {}
    }
    function f(e, t) {
        do
            e = e[t];
        while (e && 1 !== e.nodeType);return e
    }
    function d(e, t, n) {
        if (ue.isFunction(t))
            return ue.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
        if (t.nodeType)
            return ue.grep(e, function(e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (ze.test(t))
                return ue.filter(t, e, n);
            t = ue.filter(t, e)
        }
        return ue.grep(e, function(e) {
            return ue.inArray(e, t) >= 0 !== n
        })
    }
    function p(e) {
        var t = Xe.split("|")
          , n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length; )
                n.createElement(t.pop());
        return n
    }
    function h(e, t) {
        return ue.nodeName(e, "table") && ue.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function g(e) {
        return e.type = (null !== ue.find.attr(e, "type")) + "/" + e.type,
        e
    }
    function m(e) {
        var t = rt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function v(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++)
            ue._data(n, "globalEval", !t || ue._data(t[i], "globalEval"))
    }
    function y(e, t) {
        if (1 === t.nodeType && ue.hasData(e)) {
            var n, i, r, o = ue._data(e), s = ue._data(t, o), a = o.events;
            if (a) {
                delete s.handle,
                s.events = {};
                for (n in a)
                    for (i = 0,
                    r = a[n].length; r > i; i++)
                        ue.event.add(t, n, a[n][i])
            }
            s.data && (s.data = ue.extend({}, s.data))
        }
    }
    function b(e, t) {
        var n, i, r;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(),
            !ue.support.noCloneEvent && t[ue.expando]) {
                r = ue._data(t);
                for (i in r.events)
                    ue.removeEvent(t, i, r.handle);
                t.removeAttribute(ue.expando)
            }
            "script" === n && t.text !== e.text ? (g(t).text = e.text,
            m(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
            ue.support.html5Clone && e.innerHTML && !ue.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tt.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
            t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    function x(e, n) {
        var i, r, o = 0, s = typeof e.getElementsByTagName !== G ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== G ? e.querySelectorAll(n || "*") : t;
        if (!s)
            for (s = [],
            i = e.childNodes || e; null != (r = i[o]); o++)
                !n || ue.nodeName(r, n) ? s.push(r) : ue.merge(s, x(r, n));
        return n === t || n && ue.nodeName(e, n) ? ue.merge([e], s) : s
    }
    function _(e) {
        tt.test(e.type) && (e.defaultChecked = e.checked)
    }
    function w(e, t) {
        if (t in e)
            return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = kt.length; r--; )
            if (t = kt[r] + n,
            t in e)
                return t;
        return i
    }
    function C(e, t) {
        return e = t || e,
        "none" === ue.css(e, "display") || !ue.contains(e.ownerDocument, e)
    }
    function k(e, t) {
        for (var n, i, r, o = [], s = 0, a = e.length; a > s; s++)
            i = e[s],
            i.style && (o[s] = ue._data(i, "olddisplay"),
            n = i.style.display,
            t ? (o[s] || "none" !== n || (i.style.display = ""),
            "" === i.style.display && C(i) && (o[s] = ue._data(i, "olddisplay", S(i.nodeName)))) : o[s] || (r = C(i),
            (n && "none" !== n || !r) && ue._data(i, "olddisplay", r ? n : ue.css(i, "display"))));
        for (s = 0; a > s; s++)
            i = e[s],
            i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[s] || "" : "none"));
        return e
    }
    function T(e, t, n) {
        var i = vt.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }
    function N(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2)
            "margin" === n && (s += ue.css(e, n + Ct[o], !0, r)),
            i ? ("content" === n && (s -= ue.css(e, "padding" + Ct[o], !0, r)),
            "margin" !== n && (s -= ue.css(e, "border" + Ct[o] + "Width", !0, r))) : (s += ue.css(e, "padding" + Ct[o], !0, r),
            "padding" !== n && (s += ue.css(e, "border" + Ct[o] + "Width", !0, r)));
        return s
    }
    function E(e, t, n) {
        var i = !0
          , r = "width" === t ? e.offsetWidth : e.offsetHeight
          , o = ut(e)
          , s = ue.support.boxSizing && "border-box" === ue.css(e, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = ft(e, t, o),
            (0 > r || null == r) && (r = e.style[t]),
            yt.test(r))
                return r;
            i = s && (ue.support.boxSizingReliable || r === e.style[t]),
            r = parseFloat(r) || 0
        }
        return r + N(e, t, n || (s ? "border" : "content"), i, o) + "px"
    }
    function S(e) {
        var t = V
          , n = xt[e];
        return n || (n = D(e, t),
        "none" !== n && n || (ct = (ct || ue("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement),
        t = (ct[0].contentWindow || ct[0].contentDocument).document,
        t.write("<!doctype html><html><body>"),
        t.close(),
        n = D(e, t),
        ct.detach()),
        xt[e] = n),
        n
    }
    function D(e, t) {
        var n = ue(t.createElement(e)).appendTo(t.body)
          , i = ue.css(n[0], "display");
        return n.remove(),
        i
    }
    function P(e, t, n, i) {
        var r;
        if (ue.isArray(t))
            ue.each(t, function(t, r) {
                n || Nt.test(e) ? i(e, r) : P(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
            });
        else if (n || "object" !== ue.type(t))
            i(e, t);
        else
            for (r in t)
                P(e + "[" + r + "]", t[r], n, i)
    }
    function A(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var i, r = 0, o = t.toLowerCase().match(de) || [];
            if (ue.isFunction(n))
                for (; i = o[r++]; )
                    "+" === i[0] ? (i = i.slice(1) || "*",
                    (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }
    function L(e, n, i, r) {
        function o(l) {
            var c;
            return s[l] = !0,
            ue.each(e[l] || [], function(e, l) {
                var u = l(n, i, r);
                return "string" != typeof u || a || s[u] ? a ? !(c = u) : t : (n.dataTypes.unshift(u),
                o(u),
                !1)
            }),
            c
        }
        var s = {}
          , a = e === Bt;
        return o(n.dataTypes[0]) || !s["*"] && o("*")
    }
    function j(e, n) {
        var i, r, o = ue.ajaxSettings.flatOptions || {};
        for (r in n)
            n[r] !== t && ((o[r] ? e : i || (i = {}))[r] = n[r]);
        return i && ue.extend(!0, e, i),
        e
    }
    function H(e, n, i) {
        for (var r, o, s, a, l = e.contents, c = e.dataTypes; "*" === c[0]; )
            c.shift(),
            o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o)
            for (a in l)
                if (l[a] && l[a].test(o)) {
                    c.unshift(a);
                    break
                }
        if (c[0]in i)
            s = c[0];
        else {
            for (a in i) {
                if (!c[0] || e.converters[a + " " + c[0]]) {
                    s = a;
                    break
                }
                r || (r = a)
            }
            s = s || r
        }
        return s ? (s !== c[0] && c.unshift(s),
        i[s]) : t
    }
    function O(e, t, n, i) {
        var r, o, s, a, l, c = {}, u = e.dataTypes.slice();
        if (u[1])
            for (s in e.converters)
                c[s.toLowerCase()] = e.converters[s];
        for (o = u.shift(); o; )
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            l = o,
            o = u.shift())
                if ("*" === o)
                    o = l;
                else if ("*" !== l && l !== o) {
                    if (s = c[l + " " + o] || c["* " + o],
                    !s)
                        for (r in c)
                            if (a = r.split(" "),
                            a[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                s === !0 ? s = c[r] : c[r] !== !0 && (o = a[0],
                                u.unshift(a[1]));
                                break
                            }
                    if (s !== !0)
                        if (s && e["throws"])
                            t = s(t);
                        else
                            try {
                                t = s(t)
                            } catch (f) {
                                return {
                                    state: "parsererror",
                                    error: s ? f : "No conversion from " + l + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function I() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    function M() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function W() {
        return setTimeout(function() {
            Kt = t
        }),
        Kt = ue.now()
    }
    function F(e, t, n) {
        for (var i, r = (on[t] || []).concat(on["*"]), o = 0, s = r.length; s > o; o++)
            if (i = r[o].call(n, t, e))
                return i
    }
    function q(e, t, n) {
        var i, r, o = 0, s = rn.length, a = ue.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (r)
                return !1;
            for (var t = Kt || W(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, o = 1 - i, s = 0, l = c.tweens.length; l > s; s++)
                c.tweens[s].run(o);
            return a.notifyWith(e, [c, o, n]),
            1 > o && l ? n : (a.resolveWith(e, [c]),
            !1)
        }
        , c = a.promise({
            elem: e,
            props: ue.extend({}, t),
            opts: ue.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Kt || W(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var i = ue.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(i),
                i
            },
            stop: function(t) {
                var n = 0
                  , i = t ? c.tweens.length : 0;
                if (r)
                    return this;
                for (r = !0; i > n; n++)
                    c.tweens[n].run(1);
                return t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]),
                this
            }
        }), u = c.props;
        for (R(u, c.opts.specialEasing); s > o; o++)
            if (i = rn[o].call(c, e, u, c.opts))
                return i;
        return ue.map(u, F, c),
        ue.isFunction(c.opts.start) && c.opts.start.call(e, c),
        ue.fx.timer(ue.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })),
        c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    function R(e, t) {
        var n, i, r, o, s;
        for (n in e)
            if (i = ue.camelCase(n),
            r = t[i],
            o = e[n],
            ue.isArray(o) && (r = o[1],
            o = e[n] = o[0]),
            n !== i && (e[i] = o,
            delete e[n]),
            s = ue.cssHooks[i],
            s && "expand"in s) {
                o = s.expand(o),
                delete e[i];
                for (n in o)
                    n in e || (e[n] = o[n],
                    t[n] = r)
            } else
                t[i] = r
    }
    function z(e, t, n) {
        var i, r, o, s, a, l, c = this, u = {}, f = e.style, d = e.nodeType && C(e), p = ue._data(e, "fxshow");
        n.queue || (a = ue._queueHooks(e, "fx"),
        null == a.unqueued && (a.unqueued = 0,
        l = a.empty.fire,
        a.empty.fire = function() {
            a.unqueued || l()
        }
        ),
        a.unqueued++,
        c.always(function() {
            c.always(function() {
                a.unqueued--,
                ue.queue(e, "fx").length || a.empty.fire()
            })
        })),
        1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY],
        "inline" === ue.css(e, "display") && "none" === ue.css(e, "float") && (ue.support.inlineBlockNeedsLayout && "inline" !== S(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")),
        n.overflow && (f.overflow = "hidden",
        ue.support.shrinkWrapBlocks || c.always(function() {
            f.overflow = n.overflow[0],
            f.overflowX = n.overflow[1],
            f.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (r = t[i],
            en.exec(r)) {
                if (delete t[i],
                o = o || "toggle" === r,
                r === (d ? "hide" : "show"))
                    continue;u[i] = p && p[i] || ue.style(e, i)
            }
        if (!ue.isEmptyObject(u)) {
            p ? "hidden"in p && (d = p.hidden) : p = ue._data(e, "fxshow", {}),
            o && (p.hidden = !d),
            d ? ue(e).show() : c.done(function() {
                ue(e).hide()
            }),
            c.done(function() {
                var t;
                ue._removeData(e, "fxshow");
                for (t in u)
                    ue.style(e, t, u[t])
            });
            for (i in u)
                s = F(d ? p[i] : 0, i, c),
                i in p || (p[i] = s.start,
                d && (s.end = s.start,
                s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }
    function B(e, t, n, i, r) {
        return new B.prototype.init(e,t,n,i,r)
    }
    function $(e, t) {
        var n, i = {
            height: e
        }, r = 0;
        for (t = t ? 1 : 0; 4 > r; r += 2 - t)
            n = Ct[r],
            i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function U(e) {
        return ue.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var X, Y, 
        G = typeof t, 
        J = e.location, 
        V = e.document, 
        Q = V.documentElement, 
        K = e.jQuery, 
        Z = e.$, 
        ee = {}, 
        te = [], 
        ne = "1.10.0", 
        ie = te.concat, 
        re = te.push, 
        oe = te.slice, 
        se = te.indexOf, 
        ae = ee.toString, 
        le = ee.hasOwnProperty, 
        ce = ne.trim, 
        ue = function(e, t) {
            return new ue.fn.init(e,t,Y)
        }
    , fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, de = /\S+/g, pe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, he = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ge = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, me = /^[\],:{}\s]*$/, ve = /(?:^|:|,)(?:\s*\[)+/g, ye = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, be = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, xe = /^-ms-/, _e = /-([\da-z])/gi, we = function(e, t) {
        return t.toUpperCase()
    }
    , Ce = function(e) {
        (V.addEventListener || "load" === e.type || "complete" === V.readyState) && (ke(),
        ue.ready())
    }
    , ke = function() {
        V.addEventListener ? (V.removeEventListener("DOMContentLoaded", Ce, !1),
        e.removeEventListener("load", Ce, !1)) : (V.detachEvent("onreadystatechange", Ce),
        e.detachEvent("onload", Ce))
    }
    ;
    ue.fn = ue.prototype = {
        jquery: ne,
        constructor: ue,
        init: function(e, n, i) {
            var r, o;
            if (!e)
                return this;
            if ("string" == typeof e) {
                if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null , e, null ] : he.exec(e),
                !r || !r[1] && n)
                    return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e);
                if (r[1]) {
                    if (n = n instanceof ue ? n[0] : n,
                    ue.merge(this, ue.parseHTML(r[1], n && n.nodeType ? n.ownerDocument || n : V, !0)),
                    ge.test(r[1]) && ue.isPlainObject(n))
                        for (r in n)
                            ue.isFunction(this[r]) ? this[r](n[r]) : this.attr(r, n[r]);
                    return this
                }
                if (o = V.getElementById(r[2]),
                o && o.parentNode) {
                    if (o.id !== r[2])
                        return i.find(e);
                    this.length = 1,
                    this[0] = o
                }
                return this.context = V,
                this.selector = e,
                this
            }
            return e.nodeType ? (this.context = this[0] = e,
            this.length = 1,
            this) : ue.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector,
            this.context = e.context),
            ue.makeArray(e, this))
        },
        selector: "",
        length: 0,
        toArray: function() {
            return oe.call(this)
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function(e) {
            var t = ue.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return ue.each(this, e, t)
        },
        ready: function(e) {
            return ue.ready.promise().done(e),
            this
        },
        slice: function() {
            return this.pushStack(oe.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function(e) {
            return this.pushStack(ue.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null )
        },
        push: re,
        sort: [].sort,
        splice: [].splice
    },
    ue.fn.init.prototype = ue.fn,
    ue.extend = ue.fn.extend = function() {
        var e, n, i, r, o, s, a = arguments[0] || {}, l = 1, c = arguments.length, u = !1;
        for ("boolean" == typeof a && (u = a,
        a = arguments[1] || {},
        l = 2),
        "object" == typeof a || ue.isFunction(a) || (a = {}),
        c === l && (a = this,
        --l); c > l; l++)
            if (null != (o = arguments[l]))
                for (r in o)
                    e = a[r],
                    i = o[r],
                    a !== i && (u && i && (ue.isPlainObject(i) || (n = ue.isArray(i))) ? (n ? (n = !1,
                    s = e && ue.isArray(e) ? e : []) : s = e && ue.isPlainObject(e) ? e : {},
                    a[r] = ue.extend(u, s, i)) : i !== t && (a[r] = i));
        return a
    }
    ,
    ue.extend({
        expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) {
            return e.$ === ue && (e.$ = Z),
            t && e.jQuery === ue && (e.jQuery = K),
            ue
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? ue.readyWait++ : ue.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--ue.readyWait : !ue.isReady) {
                if (!V.body)
                    return setTimeout(ue.ready);
                ue.isReady = !0,
                e !== !0 && --ue.readyWait > 0 || (X.resolveWith(V, [ue]),
                ue.fn.trigger && ue(V).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) {
            return "function" === ue.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === ue.type(e)
        }
        ,
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[ae.call(e)] || "object" : typeof e
        },
        isPlainObject: function(e) {
            var n;
            if (!e || "object" !== ue.type(e) || e.nodeType || ue.isWindow(e))
                return !1;
            try {
                if (e.constructor && !le.call(e, "constructor") && !le.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (i) {
                return !1
            }
            if (ue.support.ownLast)
                for (n in e)
                    return le.call(e, n);
            for (n in e)
                ;
            return n === t || le.call(e, n)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        error: function(e) {
            throw Error(e)
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e)
                return null ;
            "boolean" == typeof t && (n = t,
            t = !1),
            t = t || V;
            var i = ge.exec(e)
              , r = !n && [];
            return i ? [t.createElement(i[1])] : (i = ue.buildFragment([e], t, r),
            r && ue(r).remove(),
            ue.merge([], i.childNodes))
        },
        parseJSON: function(n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = ue.trim(n),
            n && me.test(n.replace(ye, "@").replace(be, "]").replace(ve, ""))) ? Function("return " + n)() : (ue.error("Invalid JSON: " + n),
            t)
        },
        parseXML: function(n) {
            var i, r;
            if (!n || "string" != typeof n)
                return null ;
            try {
                e.DOMParser ? (r = new DOMParser,
                i = r.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"),
                i.async = "false",
                i.loadXML(n))
            } catch (o) {
                i = t
            }
            return i && i.documentElement && !i.getElementsByTagName("parsererror").length || ue.error("Invalid XML: " + n),
            i
        },
        noop: function() {},
        globalEval: function(t) {
            t && ue.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            }
            )(t)
        },
        camelCase: function(e) {
            return e.replace(xe, "ms-").replace(_e, we)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, i) {
            var r, o = 0, s = e.length, a = n(e);
            if (i) {
                if (a)
                    for (; s > o && (r = t.apply(e[o], i),
                    r !== !1); o++)
                        ;
                else
                    for (o in e)
                        if (r = t.apply(e[o], i),
                        r === !1)
                            break
            } else if (a)
                for (; s > o && (r = t.call(e[o], o, e[o]),
                r !== !1); o++)
                    ;
            else
                for (o in e)
                    if (r = t.call(e[o], o, e[o]),
                    r === !1)
                        break;
            return e
        },
        trim: ce && !ce.call("\ufeff�") ? function(e) {
            return null == e ? "" : ce.call(e)
        }
        : function(e) {
            return null == e ? "" : (e + "").replace(pe, "")
        }
        ,
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? ue.merge(i, "string" == typeof e ? [e] : e) : re.call(i, e)),
            i
        },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (se)
                    return se.call(t, e, n);
                for (i = t.length,
                n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in t && t[n] === e)
                        return n
            }
            return -1
        },
        merge: function(e, n) {
            var i = n.length
              , r = e.length
              , o = 0;
            if ("number" == typeof i)
                for (; i > o; o++)
                    e[r++] = n[o];
            else
                for (; n[o] !== t; )
                    e[r++] = n[o++];
            return e.length = r,
            e
        },
        grep: function(e, t, n) {
            var i, r = [], o = 0, s = e.length;
            for (n = !!n; s > o; o++)
                i = !!t(e[o], o),
                n !== i && r.push(e[o]);
            return r
        },
        map: function(e, t, i) {
            var r, o = 0, s = e.length, a = n(e), l = [];
            if (a)
                for (; s > o; o++)
                    r = t(e[o], o, i),
                    null != r && (l[l.length] = r);
            else
                for (o in e)
                    r = t(e[o], o, i),
                    null != r && (l[l.length] = r);
            return ie.apply([], l)
        },
        guid: 1,
        proxy: function(e, n) {
            var i, r, o;
            return "string" == typeof n && (o = e[n],
            n = e,
            e = o),
            ue.isFunction(e) ? (i = oe.call(arguments, 2),
            r = function() {
                return e.apply(n || this, i.concat(oe.call(arguments)))
            }
            ,
            r.guid = e.guid = e.guid || ue.guid++,
            r) : t
        },
        access: function(e, n, i, r, o, s, a) {
            var l = 0
              , c = e.length
              , u = null == i;
            if ("object" === ue.type(i)) {
                o = !0;
                for (l in i)
                    ue.access(e, n, l, i[l], !0, s, a)
            } else if (r !== t && (o = !0,
            ue.isFunction(r) || (a = !0),
            u && (a ? (n.call(e, r),
            n = null ) : (u = n,
            n = function(e, t, n) {
                return u.call(ue(e), n)
            }
            )),
            n))
                for (; c > l; l++)
                    n(e[l], i, a ? r : r.call(e[l], l, n(e[l], i)));
            return o ? e : u ? n.call(e) : c ? n(e[0], i) : s
        },
        now: function() {
            return (new Date).getTime()
        },
        swap: function(e, t, n, i) {
            var r, o, s = {};
            for (o in t)
                s[o] = e.style[o],
                e.style[o] = t[o];
            r = n.apply(e, i || []);
            for (o in t)
                e.style[o] = s[o];
            return r
        }
    }),
    ue.ready.promise = function(t) {
        if (!X)
            if (X = ue.Deferred(),
            "complete" === V.readyState)
                setTimeout(ue.ready);
            else if (V.addEventListener)
                V.addEventListener("DOMContentLoaded", Ce, !1),
                e.addEventListener("load", Ce, !1);
            else {
                V.attachEvent("onreadystatechange", Ce),
                e.attachEvent("onload", Ce);
                var n = !1;
                try {
                    n = null == e.frameElement && V.documentElement
                } catch (i) {}
                n && n.doScroll && function r() {
                    if (!ue.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(r, 50)
                        }
                        ke(),
                        ue.ready()
                    }
                }()
            }
        return X.promise(t)
    }
    ,
    ue.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        ee["[object " + t + "]"] = t.toLowerCase()
    }),
    Y = ue(V),
    function(e, t) {
        function n(e, t, n, i) {
            var r, o, s, a, l, c, u, f, d, p;
            if ((t ? t.ownerDocument || t : $) !== I && O(t),
            t = t || I,
            n = n || [],
            !e || "string" != typeof e)
                return n;
            if (1 !== (a = t.nodeType) && 9 !== a)
                return [];
            if (W && !i) {
                if (r = Ce.exec(e))
                    if (s = r[1]) {
                        if (9 === a) {
                            if (o = t.getElementById(s),
                            !o || !o.parentNode)
                                return n;
                            if (o.id === s)
                                return n.push(o),
                                n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && z(t, o) && o.id === s)
                            return n.push(o),
                            n
                    } else {
                        if (r[2])
                            return re.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((s = r[3]) && E.getElementsByClassName && t.getElementsByClassName)
                            return re.apply(n, t.getElementsByClassName(s)),
                            n
                    }
                if (E.qsa && (!F || !F.test(e))) {
                    if (f = u = B,
                    d = t,
                    p = 9 === a && e,
                    1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (c = g(e),
                        (u = t.getAttribute("id")) ? f = u.replace(Ne, "\\$&") : t.setAttribute("id", f),
                        f = "[id='" + f + "'] ",
                        l = c.length; l--; )
                            c[l] = f + m(c[l]);
                        d = ve.test(e) && t.parentNode || t,
                        p = c.join(",")
                    }
                    if (p)
                        try {
                            return re.apply(n, d.querySelectorAll(p)),
                            n
                        } catch (h) {} finally {
                            u || t.removeAttribute("id")
                        }
                }
            }
            return k(e.replace(he, "$1"), t, n, i)
        }
        function i(e) {
            return we.test(e + "")
        }
        function r() {
            function e(n, i) {
                return t.push(n += " ") > D.cacheLength && delete e[t.shift()],
                e[n] = i
            }
            var t = [];
            return e
        }
        function o(e) {
            return e[B] = !0,
            e
        }
        function s(e) {
            var t = I.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function a(e, t, n) {
            e = e.split("|");
            for (var i, r = e.length, o = n ? null : t; r--; )
                (i = D.attrHandle[e[r]]) && i !== t || (D.attrHandle[e[r]] = o)
        }
        function l(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : e[t] === !0 ? t.toLowerCase() : null
        }
        function c(e, t) {
            return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }
        function u(e) {
            return "input" === e.nodeName.toLowerCase() ? e.defaultValue : t
        }
        function f(e, t) {
            var n = t && e
              , i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Z) - (~e.sourceIndex || Z);
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function d(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function p(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function h(e) {
            return o(function(t) {
                return t = +t,
                o(function(n, i) {
                    for (var r, o = e([], n.length, t), s = o.length; s--; )
                        n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }
        function g(e, t) {
            var i, r, o, s, a, l, c, u = G[e + " "];
            if (u)
                return t ? 0 : u.slice(0);
            for (a = e,
            l = [],
            c = D.preFilter; a; ) {
                (!i || (r = ge.exec(a))) && (r && (a = a.slice(r[0].length) || a),
                l.push(o = [])),
                i = !1,
                (r = me.exec(a)) && (i = r.shift(),
                o.push({
                    value: i,
                    type: r[0].replace(he, " ")
                }),
                a = a.slice(i.length));
                for (s in D.filter)
                    !(r = _e[s].exec(a)) || c[s] && !(r = c[s](r)) || (i = r.shift(),
                    o.push({
                        value: i,
                        type: s,
                        matches: r
                    }),
                    a = a.slice(i.length));
                if (!i)
                    break
            }
            return t ? a.length : a ? n.error(e) : G(e, l).slice(0)
        }
        function m(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++)
                i += e[t].value;
            return i
        }
        function v(e, t, n) {
            var i = t.dir
              , r = n && "parentNode" === i
              , o = X++;
            return t.first ? function(t, n, o) {
                for (; t = t[i]; )
                    if (1 === t.nodeType || r)
                        return e(t, n, o)
            }
            : function(t, n, s) {
                var a, l, c, u = U + " " + o;
                if (s) {
                    for (; t = t[i]; )
                        if ((1 === t.nodeType || r) && e(t, n, s))
                            return !0
                } else
                    for (; t = t[i]; )
                        if (1 === t.nodeType || r)
                            if (c = t[B] || (t[B] = {}),
                            (l = c[i]) && l[0] === u) {
                                if ((a = l[1]) === !0 || a === S)
                                    return a === !0
                            } else if (l = c[i] = [u],
                            l[1] = e(t, n, s) || S,
                            l[1] === !0)
                                return !0
            }
        }
        function y(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--; )
                    if (!e[r](t, n, i))
                        return !1;
                return !0
            }
            : e[0]
        }
        function b(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, c = null != t; l > a; a++)
                (o = e[a]) && (!n || n(o, i, r)) && (s.push(o),
                c && t.push(a));
            return s
        }
        function x(e, t, n, i, r, s) {
            return i && !i[B] && (i = x(i)),
            r && !r[B] && (r = x(r, s)),
            o(function(o, s, a, l) {
                var c, u, f, d = [], p = [], h = s.length, g = o || C(t || "*", a.nodeType ? [a] : a, []), m = !e || !o && t ? g : b(g, d, e, a, l), v = n ? r || (o ? e : h || i) ? [] : s : m;
                if (n && n(m, v, a, l),
                i)
                    for (c = b(v, p),
                    i(c, [], a, l),
                    u = c.length; u--; )
                        (f = c[u]) && (v[p[u]] = !(m[p[u]] = f));
                if (o) {
                    if (r || e) {
                        if (r) {
                            for (c = [],
                            u = v.length; u--; )
                                (f = v[u]) && c.push(m[u] = f);
                            r(null , v = [], c, l)
                        }
                        for (u = v.length; u--; )
                            (f = v[u]) && (c = r ? se.call(o, f) : d[u]) > -1 && (o[c] = !(s[c] = f))
                    }
                } else
                    v = b(v === s ? v.splice(h, v.length) : v),
                    r ? r(null , s, v, l) : re.apply(s, v)
            })
        }
        function _(e) {
            for (var t, n, i, r = e.length, o = D.relative[e[0].type], s = o || D.relative[" "], a = o ? 1 : 0, l = v(function(e) {
                return e === t
            }, s, !0), c = v(function(e) {
                return se.call(t, e) > -1
            }, s, !0), u = [function(e, n, i) {
                return !o && (i || n !== j) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i))
            }
            ]; r > a; a++)
                if (n = D.relative[e[a].type])
                    u = [v(y(u), n)];
                else {
                    if (n = D.filter[e[a].type].apply(null , e[a].matches),
                    n[B]) {
                        for (i = ++a; r > i && !D.relative[e[i].type]; i++)
                            ;
                        return x(a > 1 && y(u), a > 1 && m(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(he, "$1"), n, i > a && _(e.slice(a, i)), r > i && _(e = e.slice(i)), r > i && m(e))
                    }
                    u.push(n)
                }
            return y(u)
        }
        function w(e, t) {
            var i = 0
              , r = t.length > 0
              , s = e.length > 0
              , a = function(o, a, l, c, u) {
                var f, d, p, h = [], g = 0, m = "0", v = o && [], y = null != u, x = j, _ = o || s && D.find.TAG("*", u && a.parentNode || a), w = U += null == x ? 1 : Math.random() || .1;
                for (y && (j = a !== I && a,
                S = i); null != (f = _[m]); m++) {
                    if (s && f) {
                        for (d = 0; p = e[d++]; )
                            if (p(f, a, l)) {
                                c.push(f);
                                break
                            }
                        y && (U = w,
                        S = ++i)
                    }
                    r && ((f = !p && f) && g--,
                    o && v.push(f))
                }
                if (g += m,
                r && m !== g) {
                    for (d = 0; p = t[d++]; )
                        p(v, h, a, l);
                    if (o) {
                        if (g > 0)
                            for (; m--; )
                                v[m] || h[m] || (h[m] = ne.call(c));
                        h = b(h)
                    }
                    re.apply(c, h),
                    y && !o && h.length > 0 && g + t.length > 1 && n.uniqueSort(c)
                }
                return y && (U = w,
                j = x),
                v
            }
            ;
            return r ? o(a) : a
        }
        function C(e, t, i) {
            for (var r = 0, o = t.length; o > r; r++)
                n(e, t[r], i);
            return i
        }
        function k(e, t, n, i) {
            var r, o, s, a, l, c = g(e);
            if (!i && 1 === c.length) {
                if (o = c[0] = c[0].slice(0),
                o.length > 2 && "ID" === (s = o[0]).type && E.getById && 9 === t.nodeType && W && D.relative[o[1].type]) {
                    if (t = (D.find.ID(s.matches[0].replace(Ee, Se), t) || [])[0],
                    !t)
                        return n;
                    e = e.slice(o.shift().value.length)
                }
                for (r = _e.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r],
                !D.relative[a = s.type]); )
                    if ((l = D.find[a]) && (i = l(s.matches[0].replace(Ee, Se), ve.test(o[0].type) && t.parentNode || t))) {
                        if (o.splice(r, 1),
                        e = i.length && m(o),
                        !e)
                            return re.apply(n, i),
                            n;
                        break
                    }
            }
            return L(e, c)(i, t, !W, n, ve.test(e)),
            n
        }
        function T() {}
        var N, E, S, D, P, A, L, j, H, O, I, M, W, F, q, R, z, B = "sizzle" + -new Date, $ = e.document, U = 0, X = 0, Y = r(), G = r(), J = r(), V = !1, Q = function() {
            return 0
        }
        , K = typeof t, Z = 1 << 31, ee = {}.hasOwnProperty, te = [], ne = te.pop, ie = te.push, re = te.push, oe = te.slice, se = te.indexOf || function(e) {
            for (var t = 0, n = this.length; n > t; t++)
                if (this[t] === e)
                    return t;
            return -1
        }
        , ae = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", le = "[\\x20\\t\\r\\n\\f]", ce = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", fe = ce.replace("w", "w#"), de = "\\[" + le + "*(" + ce + ")" + le + "*(?:([*^$|!~]?=)" + le + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + fe + ")|)|)" + le + "*\\]", pe = ":(" + ce + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + de.replace(3, 8) + ")*)|.*)\\)|)", he = RegExp("^" + le + "+|((?:^|[^\\\\])(?:\\\\.)*)" + le + "+$", "g"), ge = RegExp("^" + le + "*," + le + "*"), me = RegExp("^" + le + "*([>+~]|" + le + ")" + le + "*"), ve = RegExp(le + "*[+~]"), ye = RegExp("=" + le + "*([^\\]'\"]*)" + le + "*\\]", "g"), be = RegExp(pe), xe = RegExp("^" + fe + "$"), _e = {
            ID: RegExp("^#(" + ce + ")"),
            CLASS: RegExp("^\\.(" + ce + ")"),
            TAG: RegExp("^(" + ce.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + de),
            PSEUDO: RegExp("^" + pe),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + le + "*(even|odd|(([+-]|)(\\d*)n|)" + le + "*(?:([+-]|)" + le + "*(\\d+)|))" + le + "*\\)|)", "i"),
            bool: RegExp("^(?:" + ae + ")$", "i"),
            needsContext: RegExp("^" + le + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + le + "*((?:-\\d)?\\d*)" + le + "*\\)|)(?=[^-]|$)", "i")
        }, we = /^[^{]+\{\s*\[native \w/, Ce = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ke = /^(?:input|select|textarea|button)$/i, Te = /^h\d$/i, Ne = /'|\\/g, Ee = RegExp("\\\\([\\da-f]{1,6}" + le + "?|(" + le + ")|.)", "ig"), Se = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
        }
        ;
        try {
            re.apply(te = oe.call($.childNodes), $.childNodes),
            te[$.childNodes.length].nodeType
        } catch (De) {
            re = {
                apply: te.length ? function(e, t) {
                    ie.apply(e, oe.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        A = n.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }
        ,
        E = n.support = {},
        O = n.setDocument = function(e) {
            var n = e ? e.ownerDocument || e : $;
            return n !== I && 9 === n.nodeType && n.documentElement ? (I = n,
            M = n.documentElement,
            W = !A(n),
            E.attributes = s(function(e) {
                return e.innerHTML = "<a href='#'></a>",
                a("type|href|height|width", c, "#" === e.firstChild.getAttribute("href")),
                a(ae, l, null == e.getAttribute("disabled")),
                e.className = "i",
                !e.getAttribute("className")
            }),
            E.input = s(function(e) {
                return e.innerHTML = "<input>",
                e.firstChild.setAttribute("value", ""),
                "" === e.firstChild.getAttribute("value")
            }),
            a("value", u, E.attributes && E.input),
            E.getElementsByTagName = s(function(e) {
                return e.appendChild(n.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            E.getElementsByClassName = s(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>",
                e.firstChild.className = "i",
                2 === e.getElementsByClassName("i").length
            }),
            E.getById = s(function(e) {
                return M.appendChild(e).id = B,
                !n.getElementsByName || !n.getElementsByName(B).length
            }),
            E.getById ? (D.find.ID = function(e, t) {
                if (typeof t.getElementById !== K && W) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }
            ,
            D.filter.ID = function(e) {
                var t = e.replace(Ee, Se);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete D.find.ID,
            D.filter.ID = function(e) {
                var t = e.replace(Ee, Se);
                return function(e) {
                    var n = typeof e.getAttributeNode !== K && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ),
            D.find.TAG = E.getElementsByTagName ? function(e, n) {
                return typeof n.getElementsByTagName !== K ? n.getElementsByTagName(e) : t
            }
            : function(e, t) {
                var n, i = [], r = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++]; )
                        1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }
            ,
            D.find.CLASS = E.getElementsByClassName && function(e, n) {
                return typeof n.getElementsByClassName !== K && W ? n.getElementsByClassName(e) : t
            }
            ,
            q = [],
            F = [],
            (E.qsa = i(n.querySelectorAll)) && (s(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>",
                e.querySelectorAll("[selected]").length || F.push("\\[" + le + "*(?:value|" + ae + ")"),
                e.querySelectorAll(":checked").length || F.push(":checked")
            }),
            s(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("t", ""),
                e.querySelectorAll("[t^='']").length && F.push("[*^$]=" + le + "*(?:''|\"\")"),
                e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                F.push(",.*:")
            })),
            (E.matchesSelector = i(R = M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && s(function(e) {
                E.disconnectedMatch = R.call(e, "div"),
                R.call(e, "[s!='']:x"),
                q.push("!=", pe)
            }),
            F = F.length && RegExp(F.join("|")),
            q = q.length && RegExp(q.join("|")),
            z = i(M.contains) || M.compareDocumentPosition ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            E.sortDetached = s(function(e) {
                return 1 & e.compareDocumentPosition(n.createElement("div"))
            }),
            Q = M.compareDocumentPosition ? function(e, t) {
                if (e === t)
                    return V = !0,
                    0;
                var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                return i ? 1 & i || !E.sortDetached && t.compareDocumentPosition(e) === i ? e === n || z($, e) ? -1 : t === n || z($, t) ? 1 : H ? se.call(H, e) - se.call(H, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            }
            : function(e, t) {
                var i, r = 0, o = e.parentNode, s = t.parentNode, a = [e], l = [t];
                if (e === t)
                    return V = !0,
                    0;
                if (!o || !s)
                    return e === n ? -1 : t === n ? 1 : o ? -1 : s ? 1 : H ? se.call(H, e) - se.call(H, t) : 0;
                if (o === s)
                    return f(e, t);
                for (i = e; i = i.parentNode; )
                    a.unshift(i);
                for (i = t; i = i.parentNode; )
                    l.unshift(i);
                for (; a[r] === l[r]; )
                    r++;
                return r ? f(a[r], l[r]) : a[r] === $ ? -1 : l[r] === $ ? 1 : 0
            }
            ,
            n) : I
        }
        ,
        n.matches = function(e, t) {
            return n(e, null , null , t)
        }
        ,
        n.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== I && O(e),
            t = t.replace(ye, "='$1']"),
            !(!E.matchesSelector || !W || q && q.test(t) || F && F.test(t)))
                try {
                    var i = R.call(e, t);
                    if (i || E.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return i
                } catch (r) {}
            return n(t, I, null , [e]).length > 0
        }
        ,
        n.contains = function(e, t) {
            return (e.ownerDocument || e) !== I && O(e),
            z(e, t)
        }
        ,
        n.attr = function(e, n) {
            (e.ownerDocument || e) !== I && O(e);
            var i = D.attrHandle[n.toLowerCase()]
              , r = i && ee.call(D.attrHandle, n.toLowerCase()) ? i(e, n, !W) : t;
            return r === t ? E.attributes || !W ? e.getAttribute(n) : (r = e.getAttributeNode(n)) && r.specified ? r.value : null : r
        }
        ,
        n.error = function(e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        n.uniqueSort = function(e) {
            var t, n = [], i = 0, r = 0;
            if (V = !E.detectDuplicates,
            H = !E.sortStable && e.slice(0),
            e.sort(Q),
            V) {
                for (; t = e[r++]; )
                    t === e[r] && (i = n.push(r));
                for (; i--; )
                    e.splice(n[i], 1)
            }
            return e
        }
        ,
        P = n.getText = function(e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += P(e)
                } else if (3 === r || 4 === r)
                    return e.nodeValue
            } else
                for (; t = e[i]; i++)
                    n += P(t);
            return n
        }
        ,
        D = n.selectors = {
            cacheLength: 50,
            createPseudo: o,
            match: _e,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(Ee, Se),
                    e[3] = (e[4] || e[5] || "").replace(Ee, Se),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var n, i = !e[5] && e[2];
                    return _e.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : i && be.test(i) && (n = g(i, !0)) && (n = i.indexOf(")", i.length - n) - i.length) && (e[0] = e[0].slice(0, n),
                    e[2] = i.slice(0, n)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(Ee, Se).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = Y[e + " "];
                    return t || (t = RegExp("(^|" + le + ")" + e + "(" + le + "|$)")) && Y(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== K && e.getAttribute("class") || "");
                    })
                },
                ATTR: function(e, t, i) {
                    return function(r) {
                        var o = n.attr(r, e);
                        return null == o ? "!=" === t : t ? (o += "",
                        "=" === t ? o === i : "!=" === t ? o !== i : "^=" === t ? i && 0 === o.indexOf(i) : "*=" === t ? i && o.indexOf(i) > -1 : "$=" === t ? i && o.slice(-i.length) === i : "~=" === t ? (" " + o + " ").indexOf(i) > -1 : "|=" === t ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3)
                      , s = "last" !== e.slice(-4)
                      , a = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, l) {
                        var c, u, f, d, p, h, g = o !== s ? "nextSibling" : "previousSibling", m = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !l && !a;
                        if (m) {
                            if (o) {
                                for (; g; ) {
                                    for (f = t; f = f[g]; )
                                        if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType)
                                            return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? m.firstChild : m.lastChild],
                            s && y) {
                                for (u = m[B] || (m[B] = {}),
                                c = u[e] || [],
                                p = c[0] === U && c[1],
                                d = c[0] === U && c[2],
                                f = p && m.childNodes[p]; f = ++p && f && f[g] || (d = p = 0) || h.pop(); )
                                    if (1 === f.nodeType && ++d && f === t) {
                                        u[e] = [U, p, d];
                                        break
                                    }
                            } else if (y && (c = (t[B] || (t[B] = {}))[e]) && c[0] === U)
                                d = c[1];
                            else
                                for (; (f = ++p && f && f[g] || (d = p = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++d || (y && ((f[B] || (f[B] = {}))[e] = [U, d]),
                                f !== t)); )
                                    ;
                            return d -= r,
                            d === i || 0 === d % i && d / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var i, r = D.pseudos[e] || D.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                    return r[B] ? r(t) : r.length > 1 ? (i = [e, e, "", t],
                    D.setFilters.hasOwnProperty(e.toLowerCase()) ? o(function(e, n) {
                        for (var i, o = r(e, t), s = o.length; s--; )
                            i = se.call(e, o[s]),
                            e[i] = !(n[i] = o[s])
                    }) : function(e) {
                        return r(e, 0, i)
                    }
                    ) : r
                }
            },
            pseudos: {
                not: o(function(e) {
                    var t = []
                      , n = []
                      , i = L(e.replace(he, "$1"));
                    return i[B] ? o(function(e, t, n, r) {
                        for (var o, s = i(e, null , r, []), a = e.length; a--; )
                            (o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function(e, r, o) {
                        return t[0] = e,
                        i(t, null , o, n),
                        !n.pop()
                    }
                }),
                has: o(function(e) {
                    return function(t) {
                        return n(e, t).length > 0
                    }
                }),
                contains: o(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || P(t)).indexOf(e) > -1
                    }
                }),
                lang: o(function(e) {
                    return xe.test(e || "") || n.error("unsupported lang: " + e),
                    e = e.replace(Ee, Se).toLowerCase(),
                    function(t) {
                        var n;
                        do
                            if (n = W ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return n = n.toLowerCase(),
                                n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === M
                },
                focus: function(e) {
                    return e === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !D.pseudos.empty(e)
                },
                header: function(e) {
                    return Te.test(e.nodeName)
                },
                input: function(e) {
                    return ke.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                },
                first: h(function() {
                    return [0]
                }),
                last: h(function(e, t) {
                    return [t - 1]
                }),
                eq: h(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: h(function(e, t) {
                    for (var n = 0; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                odd: h(function(e, t) {
                    for (var n = 1; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                lt: h(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0; )
                        e.push(i);
                    return e
                }),
                gt: h(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; t > ++i; )
                        e.push(i);
                    return e
                })
            }
        };
        for (N in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            D.pseudos[N] = d(N);
        for (N in {
            submit: !0,
            reset: !0
        })
            D.pseudos[N] = p(N);
        L = n.compile = function(e, t) {
            var n, i = [], r = [], o = J[e + " "];
            if (!o) {
                for (t || (t = g(e)),
                n = t.length; n--; )
                    o = _(t[n]),
                    o[B] ? i.push(o) : r.push(o);
                o = J(e, w(r, i))
            }
            return o
        }
        ,
        D.pseudos.nth = D.pseudos.eq,
        T.prototype = D.filters = D.pseudos,
        D.setFilters = new T,
        E.sortStable = B.split("").sort(Q).join("") === B,
        O(),
        [0, 0].sort(Q),
        E.detectDuplicates = V,
        ue.find = n,
        ue.expr = n.selectors,
        ue.expr[":"] = ue.expr.pseudos,
        ue.unique = n.uniqueSort,
        ue.text = n.getText,
        ue.isXMLDoc = n.isXML,
        ue.contains = n.contains
    }(e);
    var Te = {};
    ue.Callbacks = function(e) {
        e = "string" == typeof e ? Te[e] || i(e) : ue.extend({}, e);
        var n, r, o, s, a, l, c = [], u = !e.once && [], f = function(t) {
            for (r = e.memory && t,
            o = !0,
            a = l || 0,
            l = 0,
            s = c.length,
            n = !0; c && s > a; a++)
                if (c[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                    r = !1;
                    break
                }
            n = !1,
            c && (u ? u.length && f(u.shift()) : r ? c = [] : d.disable())
        }
        , d = {
            add: function() {
                if (c) {
                    var t = c.length;
                    !function i(t) {
                        ue.each(t, function(t, n) {
                            var r = ue.type(n);
                            "function" === r ? e.unique && d.has(n) || c.push(n) : n && n.length && "string" !== r && i(n)
                        })
                    }(arguments),
                    n ? s = c.length : r && (l = t,
                    f(r))
                }
                return this
            },
            remove: function() {
                return c && ue.each(arguments, function(e, t) {
                    for (var i; (i = ue.inArray(t, c, i)) > -1; )
                        c.splice(i, 1),
                        n && (s >= i && s--,
                        a >= i && a--)
                }),
                this
            },
            has: function(e) {
                return e ? ue.inArray(e, c) > -1 : !(!c || !c.length)
            },
            empty: function() {
                return c = [],
                s = 0,
                this
            },
            disable: function() {
                return c = u = r = t,
                this
            },
            disabled: function() {
                return !c
            },
            lock: function() {
                return u = t,
                r || d.disable(),
                this
            },
            locked: function() {
                return !u
            },
            fireWith: function(e, t) {
                return t = t || [],
                t = [e, t.slice ? t.slice() : t],
                !c || o && !u || (n ? u.push(t) : f(t)),
                this
            },
            fire: function() {
                return d.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        };
        return d
    }
    ,
    ue.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", ue.Callbacks("once memory"), "resolved"], ["reject", "fail", ue.Callbacks("once memory"), "rejected"], ["notify", "progress", ue.Callbacks("memory")]]
              , n = "pending"
              , i = {
                state: function() {
                    return n
                },
                always: function() {
                    return r.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return ue.Deferred(function(n) {
                        ue.each(t, function(t, o) {
                            var s = o[0]
                              , a = ue.isFunction(e[t]) && e[t];
                            r[o[1]](function() {
                                var e = a && a.apply(this, arguments);
                                e && ue.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? ue.extend(e, i) : i
                }
            }
              , r = {};
            return i.pipe = i.then,
            ue.each(t, function(e, o) {
                var s = o[2]
                  , a = o[3];
                i[o[1]] = s.add,
                a && s.add(function() {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock),
                r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i : this, arguments),
                    this
                }
                ,
                r[o[0] + "With"] = s.fireWith
            }),
            i.promise(r),
            e && e.call(r, r),
            r
        },
        when: function(e) {
            var t, n, i, r = 0, o = oe.call(arguments), s = o.length, a = 1 !== s || e && ue.isFunction(e.promise) ? s : 0, l = 1 === a ? e : ue.Deferred(), c = function(e, n, i) {
                return function(r) {
                    n[e] = this,
                    i[e] = arguments.length > 1 ? oe.call(arguments) : r,
                    i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                }
            }
            ;
            if (s > 1)
                for (t = Array(s),
                n = Array(s),
                i = Array(s); s > r; r++)
                    o[r] && ue.isFunction(o[r].promise) ? o[r].promise().done(c(r, i, o)).fail(l.reject).progress(c(r, n, t)) : --a;
            return a || l.resolveWith(i, o),
            l.promise()
        }
    }),
    ue.support = function(t) {
        var n, i, r, o, s, a, l, c, u, f = V.createElement("div");
        if (f.setAttribute("className", "t"),
        f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        n = f.getElementsByTagName("*") || [],
        i = f.getElementsByTagName("a")[0],
        !i || !i.style || !n.length)
            return t;
        o = V.createElement("select"),
        a = o.appendChild(V.createElement("option")),
        r = f.getElementsByTagName("input")[0],
        i.style.cssText = "top:1px;float:left;opacity:.5",
        t.getSetAttribute = "t" !== f.className,
        t.leadingWhitespace = 3 === f.firstChild.nodeType,
        t.tbody = !f.getElementsByTagName("tbody").length,
        t.htmlSerialize = !!f.getElementsByTagName("link").length,
        t.style = /top/.test(i.getAttribute("style")),
        t.hrefNormalized = "/a" === i.getAttribute("href"),
        t.opacity = /^0.5/.test(i.style.opacity),
        t.cssFloat = !!i.style.cssFloat,
        t.checkOn = !!r.value,
        t.optSelected = a.selected,
        t.enctype = !!V.createElement("form").enctype,
        t.html5Clone = "<:nav></:nav>" !== V.createElement("nav").cloneNode(!0).outerHTML,
        t.inlineBlockNeedsLayout = !1,
        t.shrinkWrapBlocks = !1,
        t.pixelPosition = !1,
        t.deleteExpando = !0,
        t.noCloneEvent = !0,
        t.reliableMarginRight = !0,
        t.boxSizingReliable = !0,
        r.checked = !0,
        t.noCloneChecked = r.cloneNode(!0).checked,
        o.disabled = !0,
        t.optDisabled = !a.disabled;
        try {
            delete f.test
        } catch (d) {
            t.deleteExpando = !1
        }
        r = V.createElement("input"),
        r.setAttribute("value", ""),
        t.input = "" === r.getAttribute("value"),
        r.value = "t",
        r.setAttribute("type", "radio"),
        t.radioValue = "t" === r.value,
        r.setAttribute("checked", "t"),
        r.setAttribute("name", "t"),
        s = V.createDocumentFragment(),
        s.appendChild(r),
        t.appendChecked = r.checked,
        t.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked,
        f.attachEvent && (f.attachEvent("onclick", function() {
            t.noCloneEvent = !1
        }),
        f.cloneNode(!0).click());
        for (u in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            f.setAttribute(l = "on" + u, "t"),
            t[u + "Bubbles"] = l in e || f.attributes[l].expando === !1;
        f.style.backgroundClip = "content-box",
        f.cloneNode(!0).style.backgroundClip = "",
        t.clearCloneStyle = "content-box" === f.style.backgroundClip;
        for (u in ue(t))
            break;
        return t.ownLast = "0" !== u,
        ue(function() {
            var n, i, r, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", s = V.getElementsByTagName("body")[0];
            s && (n = V.createElement("div"),
            n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
            s.appendChild(n).appendChild(f),
            f.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
            r = f.getElementsByTagName("td"),
            r[0].style.cssText = "padding:0;margin:0;border:0;display:none",
            c = 0 === r[0].offsetHeight,
            r[0].style.display = "",
            r[1].style.display = "none",
            t.reliableHiddenOffsets = c && 0 === r[0].offsetHeight,
            f.innerHTML = "",
            f.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
            ue.swap(s, null != s.style.zoom ? {
                zoom: 1
            } : {}, function() {
                t.boxSizing = 4 === f.offsetWidth
            }),
            e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(f, null ) || {}).top,
            t.boxSizingReliable = "4px" === (e.getComputedStyle(f, null ) || {
                width: "4px"
            }).width,
            i = f.appendChild(V.createElement("div")),
            i.style.cssText = f.style.cssText = o,
            i.style.marginRight = i.style.width = "0",
            f.style.width = "1px",
            t.reliableMarginRight = !parseFloat((e.getComputedStyle(i, null ) || {}).marginRight)),
            typeof f.style.zoom !== G && (f.innerHTML = "",
            f.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1",
            t.inlineBlockNeedsLayout = 3 === f.offsetWidth,
            f.style.display = "block",
            f.innerHTML = "<div></div>",
            f.firstChild.style.width = "5px",
            t.shrinkWrapBlocks = 3 !== f.offsetWidth,
            t.inlineBlockNeedsLayout && (s.style.zoom = 1)),
            s.removeChild(n),
            n = f = r = i = null )
        }),
        n = o = s = a = i = r = null ,
        t
    }({});
    var Ne = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/
      , Ee = /([A-Z])/g;
    ue.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? ue.cache[e[ue.expando]] : e[ue.expando],
            !!e && !a(e)
        },
        data: function(e, t, n) {
            return r(e, t, n)
        },
        removeData: function(e, t) {
            return o(e, t)
        },
        _data: function(e, t, n) {
            return r(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return o(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType)
                return !1;
            var t = e.nodeName && ue.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }),
    ue.fn.extend({
        data: function(e, n) {
            var i, r, o = null , a = 0, l = this[0];
            if (e === t) {
                if (this.length && (o = ue.data(l),
                1 === l.nodeType && !ue._data(l, "parsedAttrs"))) {
                    for (i = l.attributes; i.length > a; a++)
                        r = i[a].name,
                        0 === r.indexOf("data-") && (r = ue.camelCase(r.slice(5)),
                        s(l, r, o[r]));
                    ue._data(l, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                ue.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                ue.data(this, e, n)
            }) : l ? s(l, e, ue.data(l, e)) : null
        },
        removeData: function(e) {
            return this.each(function() {
                ue.removeData(this, e)
            })
        }
    }),
    ue.extend({
        queue: function(e, n, i) {
            var r;
            return e ? (n = (n || "fx") + "queue",
            r = ue._data(e, n),
            i && (!r || ue.isArray(i) ? r = ue._data(e, n, ue.makeArray(i)) : r.push(i)),
            r || []) : t
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ue.queue(e, t)
              , i = n.length
              , r = n.shift()
              , o = ue._queueHooks(e, t)
              , s = function() {
                ue.dequeue(e, t)
            }
            ;
            "inprogress" === r && (r = n.shift(),
            i--),
            o.cur = r,
            r && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            r.call(e, s, o)),
            !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ue._data(e, n) || ue._data(e, n, {
                empty: ue.Callbacks("once memory").add(function() {
                    ue._removeData(e, t + "queue"),
                    ue._removeData(e, n)
                })
            })
        }
    }),
    ue.fn.extend({
        queue: function(e, n) {
            var i = 2;
            return "string" != typeof e && (n = e,
            e = "fx",
            i--),
            i > arguments.length ? ue.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = ue.queue(this, e, n);
                ue._queueHooks(this, e),
                "fx" === e && "inprogress" !== t[0] && ue.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ue.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = ue.fx ? ue.fx.speeds[e] || e : e,
            t = t || "fx",
            this.queue(t, function(t, n) {
                var i = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var i, r = 1, o = ue.Deferred(), s = this, a = this.length, l = function() {
                --r || o.resolveWith(s, [s])
            }
            ;
            for ("string" != typeof e && (n = e,
            e = t),
            e = e || "fx"; a--; )
                i = ue._data(s[a], e + "queueHooks"),
                i && i.empty && (r++,
                i.empty.add(l));
            return l(),
            o.promise(n)
        }
    });
    var Se, De, Pe = /[\t\r\n\f]/g, Ae = /\r/g, Le = /^(?:input|select|textarea|button|object)$/i, je = /^(?:a|area)$/i, He = /^(?:checked|selected)$/i, Oe = ue.support.getSetAttribute, Ie = ue.support.input;
    ue.fn.extend({
        attr: function(e, t) {
            return ue.access(this, ue.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ue.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return ue.access(this, ue.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = ue.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = t,
                    delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, i, r, o, s = 0, a = this.length, l = "string" == typeof e && e;
            if (ue.isFunction(e))
                return this.each(function(t) {
                    ue(this).addClass(e.call(this, t, this.className))
                });
            if (l)
                for (t = (e || "").match(de) || []; a > s; s++)
                    if (n = this[s],
                    i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Pe, " ") : " ")) {
                        for (o = 0; r = t[o++]; )
                            0 > i.indexOf(" " + r + " ") && (i += r + " ");
                        n.className = ue.trim(i)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, s = 0, a = this.length, l = 0 === arguments.length || "string" == typeof e && e;
            if (ue.isFunction(e))
                return this.each(function(t) {
                    ue(this).removeClass(e.call(this, t, this.className))
                });
            if (l)
                for (t = (e || "").match(de) || []; a > s; s++)
                    if (n = this[s],
                    i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Pe, " ") : "")) {
                        for (o = 0; r = t[o++]; )
                            for (; i.indexOf(" " + r + " ") >= 0; )
                                i = i.replace(" " + r + " ", " ");
                        n.className = e ? ue.trim(i) : ""
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e
              , i = "boolean" == typeof t;
            return ue.isFunction(e) ? this.each(function(n) {
                ue(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n)
                    for (var r, o = 0, s = ue(this), a = t, l = e.match(de) || []; r = l[o++]; )
                        a = i ? a : !s.hasClass(r),
                        s[a ? "addClass" : "removeClass"](r);
                else
                    (n === G || "boolean" === n) && (this.className && ue._data(this, "__className__", this.className),
                    this.className = this.className || e === !1 ? "" : ue._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Pe, " ").indexOf(t) >= 0)
                    return !0;
            return !1
        },
        val: function(e) {
            var n, i, r, o = this[0];
            return arguments.length ? (r = ue.isFunction(e),
            this.each(function(n) {
                var o;
                1 === this.nodeType && (o = r ? e.call(this, n, ue(this).val()) : e,
                null == o ? o = "" : "number" == typeof o ? o += "" : ue.isArray(o) && (o = ue.map(o, function(e) {
                    return null == e ? "" : e + ""
                })),
                i = ue.valHooks[this.type] || ue.valHooks[this.nodeName.toLowerCase()],
                i && "set"in i && i.set(this, o, "value") !== t || (this.value = o))
            })) : o ? (i = ue.valHooks[o.type] || ue.valHooks[o.nodeName.toLowerCase()],
            i && "get"in i && (n = i.get(o, "value")) !== t ? n : (n = o.value,
            "string" == typeof n ? n.replace(Ae, "") : null == n ? "" : n)) : void 0
        }
    }),
    ue.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ue.find.attr(e, "value");
                    return null != t ? t : e.text
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, l = 0 > r ? a : o ? r : 0; a > l; l++)
                        if (n = i[l],
                        !(!n.selected && l !== r || (ue.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ue.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ue(n).val(),
                            o)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = ue.makeArray(t), s = r.length; s--; )
                        i = r[s],
                        (i.selected = ue.inArray(ue(i).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        },
        attr: function(e, n, i) {
            var r, o, s = e.nodeType;
            return e && 3 !== s && 8 !== s && 2 !== s ? typeof e.getAttribute === G ? ue.prop(e, n, i) : (1 === s && ue.isXMLDoc(e) || (n = n.toLowerCase(),
            r = ue.attrHooks[n] || (ue.expr.match.bool.test(n) ? De : Se)),
            i === t ? r && "get"in r && null !== (o = r.get(e, n)) ? o : (o = ue.find.attr(e, n),
            null == o ? t : o) : null !== i ? r && "set"in r && (o = r.set(e, i, n)) !== t ? o : (e.setAttribute(n, i + ""),
            i) : (ue.removeAttr(e, n),
            t)) : void 0
        },
        removeAttr: function(e, t) {
            var n, i, r = 0, o = t && t.match(de);
            if (o && 1 === e.nodeType)
                for (; n = o[r++]; )
                    i = ue.propFix[n] || n,
                    ue.expr.match.bool.test(n) ? Ie && Oe || !He.test(n) ? e[i] = !1 : e[ue.camelCase("default-" + n)] = e[i] = !1 : ue.attr(e, n, ""),
                    e.removeAttribute(Oe ? n : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ue.support.radioValue && "radio" === t && ue.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, n, i) {
            var r, o, s, a = e.nodeType;
            return e && 3 !== a && 8 !== a && 2 !== a ? (s = 1 !== a || !ue.isXMLDoc(e),
            s && (n = ue.propFix[n] || n,
            o = ue.propHooks[n]),
            i !== t ? o && "set"in o && (r = o.set(e, i, n)) !== t ? r : e[n] = i : o && "get"in o && null !== (r = o.get(e, n)) ? r : e[n]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ue.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Le.test(e.nodeName) || je.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }),
    De = {
        set: function(e, t, n) {
            return t === !1 ? ue.removeAttr(e, n) : Ie && Oe || !He.test(n) ? e.setAttribute(!Oe && ue.propFix[n] || n, n) : e[ue.camelCase("default-" + n)] = e[n] = !0,
            n
        }
    },
    ue.each(ue.expr.match.bool.source.match(/\w+/g), function(e, n) {
        var i = ue.expr.attrHandle[n] || ue.find.attr;
        ue.expr.attrHandle[n] = Ie && Oe || !He.test(n) ? function(e, n, r) {
            var o = ue.expr.attrHandle[n]
              , s = r ? t : (ue.expr.attrHandle[n] = t) != i(e, n, r) ? n.toLowerCase() : null ;
            return ue.expr.attrHandle[n] = o,
            s
        }
        : function(e, n, i) {
            return i ? t : e[ue.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }),
    Ie && Oe || (ue.attrHooks.value = {
        set: function(e, n, i) {
            return ue.nodeName(e, "input") ? (e.defaultValue = n,
            t) : Se && Se.set(e, n, i)
        }
    }),
    Oe || (Se = {
        set: function(e, n, i) {
            var r = e.getAttributeNode(i);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(i)),
            r.value = n += "",
            "value" === i || n === e.getAttribute(i) ? n : t
        }
    },
    ue.expr.attrHandle.id = ue.expr.attrHandle.name = ue.expr.attrHandle.coords = function(e, n, i) {
        var r;
        return i ? t : (r = e.getAttributeNode(n)) && "" !== r.value ? r.value : null
    }
    ,
    ue.valHooks.button = {
        get: function(e, n) {
            var i = e.getAttributeNode(n);
            return i && i.specified ? i.value : t
        },
        set: Se.set
    },
    ue.attrHooks.contenteditable = {
        set: function(e, t, n) {
            Se.set(e, "" === t ? !1 : t, n)
        }
    },
    ue.each(["width", "height"], function(e, n) {
        ue.attrHooks[n] = {
            set: function(e, i) {
                return "" === i ? (e.setAttribute(n, "auto"),
                i) : t
            }
        }
    })),
    ue.support.hrefNormalized || ue.each(["href", "src"], function(e, t) {
        ue.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }),
    ue.support.style || (ue.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }),
    ue.support.optSelected || (ue.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
            null
        }
    }),
    ue.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ue.propFix[this.toLowerCase()] = this
    }),
    ue.support.enctype || (ue.propFix.enctype = "encoding"),
    ue.each(["radio", "checkbox"], function() {
        ue.valHooks[this] = {
            set: function(e, n) {
                return ue.isArray(n) ? e.checked = ue.inArray(ue(e).val(), n) >= 0 : t
            }
        },
        ue.support.checkOn || (ue.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var Me = /^(?:input|select|textarea)$/i
      , We = /^key/
      , Fe = /^(?:mouse|contextmenu)|click/
      , qe = /^(?:focusinfocus|focusoutblur)$/
      , Re = /^([^.]*)(?:\.(.+)|)$/;
    ue.event = {
        global: {},
        add: function(e, n, i, r, o) {
            var s, a, l, c, u, f, d, p, h, g, m, v = ue._data(e);
            if (v) {
                for (i.handler && (c = i,
                i = c.handler,
                o = c.selector),
                i.guid || (i.guid = ue.guid++),
                (a = v.events) || (a = v.events = {}),
                (f = v.handle) || (f = v.handle = function(e) {
                    return typeof ue === G || e && ue.event.triggered === e.type ? t : ue.event.dispatch.apply(f.elem, arguments)
                }
                ,
                f.elem = e),
                n = (n || "").match(de) || [""],
                l = n.length; l--; )
                    s = Re.exec(n[l]) || [],
                    h = m = s[1],
                    g = (s[2] || "").split(".").sort(),
                    h && (u = ue.event.special[h] || {},
                    h = (o ? u.delegateType : u.bindType) || h,
                    u = ue.event.special[h] || {},
                    d = ue.extend({
                        type: h,
                        origType: m,
                        data: r,
                        handler: i,
                        guid: i.guid,
                        selector: o,
                        needsContext: o && ue.expr.match.needsContext.test(o),
                        namespace: g.join(".")
                    }, c),
                    (p = a[h]) || (p = a[h] = [],
                    p.delegateCount = 0,
                    u.setup && u.setup.call(e, r, g, f) !== !1 || (e.addEventListener ? e.addEventListener(h, f, !1) : e.attachEvent && e.attachEvent("on" + h, f))),
                    u.add && (u.add.call(e, d),
                    d.handler.guid || (d.handler.guid = i.guid)),
                    o ? p.splice(p.delegateCount++, 0, d) : p.push(d),
                    ue.event.global[h] = !0);
                e = null
            }
        },
        remove: function(e, t, n, i, r) {
            var o, s, a, l, c, u, f, d, p, h, g, m = ue.hasData(e) && ue._data(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(de) || [""],
                c = t.length; c--; )
                    if (a = Re.exec(t[c]) || [],
                    p = g = a[1],
                    h = (a[2] || "").split(".").sort(),
                    p) {
                        for (f = ue.event.special[p] || {},
                        p = (i ? f.delegateType : f.bindType) || p,
                        d = u[p] || [],
                        a = a[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        l = o = d.length; o--; )
                            s = d[o],
                            !r && g !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (d.splice(o, 1),
                            s.selector && d.delegateCount--,
                            f.remove && f.remove.call(e, s));
                        l && !d.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || ue.removeEvent(e, p, m.handle),
                        delete u[p])
                    } else
                        for (p in u)
                            ue.event.remove(e, p + t[c], n, i, !0);
                ue.isEmptyObject(u) && (delete m.handle,
                ue._removeData(e, "events"))
            }
        },
        trigger: function(n, i, r, o) {
            var s, a, l, c, u, f, d, p = [r || V], h = le.call(n, "type") ? n.type : n, g = le.call(n, "namespace") ? n.namespace.split(".") : [];
            if (l = f = r = r || V,
            3 !== r.nodeType && 8 !== r.nodeType && !qe.test(h + ue.event.triggered) && (h.indexOf(".") >= 0 && (g = h.split("."),
            h = g.shift(),
            g.sort()),
            a = 0 > h.indexOf(":") && "on" + h,
            n = n[ue.expando] ? n : new ue.Event(h,"object" == typeof n && n),
            n.isTrigger = o ? 2 : 3,
            n.namespace = g.join("."),
            n.namespace_re = n.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null ,
            n.result = t,
            n.target || (n.target = r),
            i = null == i ? [n] : ue.makeArray(i, [n]),
            u = ue.event.special[h] || {},
            o || !u.trigger || u.trigger.apply(r, i) !== !1)) {
                if (!o && !u.noBubble && !ue.isWindow(r)) {
                    for (c = u.delegateType || h,
                    qe.test(c + h) || (l = l.parentNode); l; l = l.parentNode)
                        p.push(l),
                        f = l;
                    f === (r.ownerDocument || V) && p.push(f.defaultView || f.parentWindow || e)
                }
                for (d = 0; (l = p[d++]) && !n.isPropagationStopped(); )
                    n.type = d > 1 ? c : u.bindType || h,
                    s = (ue._data(l, "events") || {})[n.type] && ue._data(l, "handle"),
                    s && s.apply(l, i),
                    s = a && l[a],
                    s && ue.acceptData(l) && s.apply && s.apply(l, i) === !1 && n.preventDefault();
                if (n.type = h,
                !o && !n.isDefaultPrevented() && (!u._default || u._default.apply(p.pop(), i) === !1) && ue.acceptData(r) && a && r[h] && !ue.isWindow(r)) {
                    f = r[a],
                    f && (r[a] = null ),
                    ue.event.triggered = h;
                    try {
                        r[h]()
                    } catch (m) {}
                    ue.event.triggered = t,
                    f && (r[a] = f)
                }
                return n.result
            }
        },
        dispatch: function(e) {
            e = ue.event.fix(e);
            var n, i, r, o, s, a = [], l = oe.call(arguments), c = (ue._data(this, "events") || {})[e.type] || [], u = ue.event.special[e.type] || {};
            if (l[0] = e,
            e.delegateTarget = this,
            !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (a = ue.event.handlers.call(this, e, c),
                n = 0; (o = a[n++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = o.elem,
                    s = 0; (r = o.handlers[s++]) && !e.isImmediatePropagationStopped(); )
                        (!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r,
                        e.data = r.data,
                        i = ((ue.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l),
                        i !== t && (e.result = i) === !1 && (e.preventDefault(),
                        e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, n) {
            var i, r, o, s, a = [], l = n.delegateCount, c = e.target;
            if (l && c.nodeType && (!e.button || "click" !== e.type))
                for (; c != this; c = c.parentNode || this)
                    if (1 === c.nodeType && (c.disabled !== !0 || "click" !== e.type)) {
                        for (o = [],
                        s = 0; l > s; s++)
                            r = n[s],
                            i = r.selector + " ",
                            o[i] === t && (o[i] = r.needsContext ? ue(i, this).index(c) >= 0 : ue.find(i, this, null , [c]).length),
                            o[i] && o.push(r);
                        o.length && a.push({
                            elem: c,
                            handlers: o
                        })
                    }
            return n.length > l && a.push({
                elem: this,
                handlers: n.slice(l)
            }),
            a
        },
        fix: function(e) {
            if (e[ue.expando])
                return e;
            var t, n, i, r = e.type, o = e, s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = Fe.test(r) ? this.mouseHooks : We.test(r) ? this.keyHooks : {}),
            i = s.props ? this.props.concat(s.props) : this.props,
            e = new ue.Event(o),
            t = i.length; t--; )
                n = i[t],
                e[n] = o[n];
            return e.target || (e.target = o.srcElement || V),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            s.filter ? s.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var i, r, o, s = n.button, a = n.fromElement;
                return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || V,
                o = r.documentElement,
                i = r.body,
                e.pageX = n.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0),
                e.pageY = n.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)),
                !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a),
                e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== u() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === u() && this.blur ? (this.blur(),
                    !1) : t
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return ue.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                    !1) : t
                },
                _default: function(e) {
                    return ue.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, i) {
            var r = ue.extend(new ue.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? ue.event.trigger(r, null , t) : ue.event.dispatch.call(t, r),
            r.isDefaultPrevented() && n.preventDefault()
        }
    },
    ue.removeEvent = V.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }
    : function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === G && (e[i] = null ),
        e.detachEvent(i, n))
    }
    ,
    ue.Event = function(e, n) {
        return this instanceof ue.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? l : c) : this.type = e,
        n && ue.extend(this, n),
        this.timeStamp = e && e.timeStamp || ue.now(),
        this[ue.expando] = !0,
        t) : new ue.Event(e,n)
    }
    ,
    ue.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = l,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = l,
            e && (e.stopPropagation && e.stopPropagation(),
            e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = l,
            this.stopPropagation()
        }
    },
    ue.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        ue.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this, r = e.relatedTarget, o = e.handleObj;
                return (!r || r !== i && !ue.contains(i, r)) && (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    ue.support.submitBubbles || (ue.event.special.submit = {
        setup: function() {
            return ue.nodeName(this, "form") ? !1 : (ue.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target
                  , i = ue.nodeName(n, "input") || ue.nodeName(n, "button") ? n.form : t;
                i && !ue._data(i, "submitBubbles") && (ue.event.add(i, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }),
                ue._data(i, "submitBubbles", !0))
            }),
            t)
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble,
            this.parentNode && !e.isTrigger && ue.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return ue.nodeName(this, "form") ? !1 : (ue.event.remove(this, "._submit"),
            t)
        }
    }),
    ue.support.changeBubbles || (ue.event.special.change = {
        setup: function() {
            return Me.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ue.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }),
            ue.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1),
                ue.event.simulate("change", this, e, !0)
            })),
            !1) : (ue.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Me.test(t.nodeName) && !ue._data(t, "changeBubbles") && (ue.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || ue.event.simulate("change", this.parentNode, e, !0)
                }),
                ue._data(t, "changeBubbles", !0))
            }),
            t)
        },
        handle: function(e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function() {
            return ue.event.remove(this, "._change"),
            !Me.test(this.nodeName)
        }
    }),
    ue.support.focusinBubbles || ue.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0
          , i = function(e) {
            ue.event.simulate(t, e.target, ue.event.fix(e), !0)
        }
        ;
        ue.event.special[t] = {
            setup: function() {
                0 === n++ && V.addEventListener(e, i, !0)
            },
            teardown: function() {
                0 === --n && V.removeEventListener(e, i, !0)
            }
        }
    }),
    ue.fn.extend({
        on: function(e, n, i, r, o) {
            var s, a;
            if ("object" == typeof e) {
                "string" != typeof n && (i = i || n,
                n = t);
                for (s in e)
                    this.on(s, n, i, e[s], o);
                return this
            }
            if (null == i && null == r ? (r = n,
            i = n = t) : null == r && ("string" == typeof n ? (r = i,
            i = t) : (r = i,
            i = n,
            n = t)),
            r === !1)
                r = c;
            else if (!r)
                return this;
            return 1 === o && (a = r,
            r = function(e) {
                return ue().off(e),
                a.apply(this, arguments)
            }
            ,
            r.guid = a.guid || (a.guid = ue.guid++)),
            this.each(function() {
                ue.event.add(this, e, r, i, n)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, n, i) {
            var r, o;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                ue(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (o in e)
                    this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (i = n,
            n = t),
            i === !1 && (i = c),
            this.each(function() {
                ue.event.remove(this, e, i, n)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                ue.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, n) {
            var i = this[0];
            return i ? ue.event.trigger(e, n, i, !0) : t
        }
    });
    var ze = /^.[^:#\[\.,]*$/
      , Be = /^(?:parents|prev(?:Until|All))/
      , $e = ue.expr.match.needsContext
      , Ue = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    ue.fn.extend({
        find: function(e) {
            var t, n = [], i = this, r = i.length;
            if ("string" != typeof e)
                return this.pushStack(ue(e).filter(function() {
                    for (t = 0; r > t; t++)
                        if (ue.contains(i[t], this))
                            return !0
                }));
            for (t = 0; r > t; t++)
                ue.find(e, i[t], n);
            return n = this.pushStack(r > 1 ? ue.unique(n) : n),
            n.selector = this.selector ? this.selector + " " + e : e,
            n
        },
        has: function(e) {
            var t, n = ue(e, this), i = n.length;
            return this.filter(function() {
                for (t = 0; i > t; t++)
                    if (ue.contains(this, n[t]))
                        return !0
            })
        },
        not: function(e) {
            return this.pushStack(d(this, e || [], !0))
        },
        filter: function(e) {
            return this.pushStack(d(this, e || [], !1))
        },
        is: function(e) {
            return !!d(this, "string" == typeof e && $e.test(e) ? ue(e) : e || [], !1).length
        },
        closest: function(e, t) {
            for (var n, i = 0, r = this.length, o = [], s = $e.test(e) || "string" != typeof e ? ue(e, t || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (11 > n.nodeType && (s ? s.index(n) > -1 : 1 === n.nodeType && ue.find.matchesSelector(n, e))) {
                        n = o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? ue.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? ue.inArray(this[0], ue(e)) : ue.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? ue(e, t) : ue.makeArray(e && e.nodeType ? [e] : e)
              , i = ue.merge(this.get(), n);
            return this.pushStack(ue.unique(i))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    ue.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return ue.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return ue.dir(e, "parentNode", n)
        },
        next: function(e) {
            return f(e, "nextSibling")
        },
        prev: function(e) {
            return f(e, "previousSibling")
        },
        nextAll: function(e) {
            return ue.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return ue.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return ue.dir(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return ue.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return ue.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return ue.sibling(e.firstChild)
        },
        contents: function(e) {
            return ue.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ue.merge([], e.childNodes)
        }
    }, function(e, t) {
        ue.fn[e] = function(n, i) {
            var r = ue.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (r = ue.filter(i, r)),
            this.length > 1 && (Ue[e] || (r = ue.unique(r)),
            Be.test(e) && (r = r.reverse())),
            this.pushStack(r)
        }
    }),
    ue.extend({
        filter: function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === i.nodeType ? ue.find.matchesSelector(i, e) ? [i] : [] : ue.find.matches(e, ue.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        },
        dir: function(e, n, i) {
            for (var r = [], o = e[n]; o && 9 !== o.nodeType && (i === t || 1 !== o.nodeType || !ue(o).is(i)); )
                1 === o.nodeType && r.push(o),
                o = o[n];
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var Xe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , Ye = / jQuery\d+="(?:null|\d+)"/g
      , Ge = RegExp("<(?:" + Xe + ")[\\s/>]", "i")
      , Je = /^\s+/
      , Ve = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , Qe = /<([\w:]+)/
      , Ke = /<tbody/i
      , Ze = /<|&#?\w+;/
      , et = /<(?:script|style|link)/i
      , tt = /^(?:checkbox|radio)$/i
      , nt = /checked\s*(?:[^=]|=\s*.checked.)/i
      , it = /^$|\/(?:java|ecma)script/i
      , rt = /^true\/(.*)/
      , ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , st = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ue.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }
      , at = p(V)
      , lt = at.appendChild(V.createElement("div"));
    st.optgroup = st.option,
    st.tbody = st.tfoot = st.colgroup = st.caption = st.thead,
    st.th = st.td,
    ue.fn.extend({
        text: function(e) {
            return ue.access(this, function(e) {
                return e === t ? ue.text(this) : this.empty().append((this[0] && this[0].ownerDocument || V).createTextNode(e))
            }, null , e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = h(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = h(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, i = e ? ue.filter(e, this) : this, r = 0; null != (n = i[r]); r++)
                t || 1 !== n.nodeType || ue.cleanData(x(n)),
                n.parentNode && (t && ue.contains(n.ownerDocument, n) && v(x(n, "script")),
                n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ue.cleanData(x(e, !1)); e.firstChild; )
                    e.removeChild(e.firstChild);
                e.options && ue.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e,
            t = null == t ? e : t,
            this.map(function() {
                return ue.clone(this, e, t)
            })
        },
        html: function(e) {
            return ue.access(this, function(e) {
                var n = this[0] || {}
                  , i = 0
                  , r = this.length;
                if (e === t)
                    return 1 === n.nodeType ? n.innerHTML.replace(Ye, "") : t;
                if (!("string" != typeof e || et.test(e) || !ue.support.htmlSerialize && Ge.test(e) || !ue.support.leadingWhitespace && Je.test(e) || st[(Qe.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Ve, "<$1></$2>");
                    try {
                        for (; r > i; i++)
                            n = this[i] || {},
                            1 === n.nodeType && (ue.cleanData(x(n, !1)),
                            n.innerHTML = e);
                        n = 0
                    } catch (o) {}
                }
                n && this.empty().append(e)
            }, null , e, arguments.length)
        },
        replaceWith: function() {
            var e = ue.map(this, function(e) {
                return [e.nextSibling, e.parentNode]
            })
              , t = 0;
            return this.domManip(arguments, function(n) {
                var i = e[t++]
                  , r = e[t++];
                r && (i && i.parentNode !== r && (i = this.nextSibling),
                ue(this).remove(),
                r.insertBefore(n, i))
            }, !0),
            t ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t, n) {
            e = ie.apply([], e);
            var i, r, o, s, a, l, c = 0, u = this.length, f = this, d = u - 1, p = e[0], h = ue.isFunction(p);
            if (h || !(1 >= u || "string" != typeof p || ue.support.checkClone) && nt.test(p))
                return this.each(function(i) {
                    var r = f.eq(i);
                    h && (e[0] = p.call(this, i, r.html())),
                    r.domManip(e, t, n)
                });
            if (u && (l = ue.buildFragment(e, this[0].ownerDocument, !1, !n && this),
            i = l.firstChild,
            1 === l.childNodes.length && (l = i),
            i)) {
                for (s = ue.map(x(l, "script"), g),
                o = s.length; u > c; c++)
                    r = l,
                    c !== d && (r = ue.clone(r, !0, !0),
                    o && ue.merge(s, x(r, "script"))),
                    t.call(this[c], r, c);
                if (o)
                    for (a = s[s.length - 1].ownerDocument,
                    ue.map(s, m),
                    c = 0; o > c; c++)
                        r = s[c],
                        it.test(r.type || "") && !ue._data(r, "globalEval") && ue.contains(a, r) && (r.src ? ue._evalUrl(r.src) : ue.globalEval((r.text || r.textContent || r.innerHTML || "").replace(ot, "")));
                l = i = null
            }
            return this
        }
    }),
    ue.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        ue.fn[e] = function(e) {
            for (var n, i = 0, r = [], o = ue(e), s = o.length - 1; s >= i; i++)
                n = i === s ? this : this.clone(!0),
                ue(o[i])[t](n),
                re.apply(r, n.get());
            return this.pushStack(r)
        }
    }),
    ue.extend({
        clone: function(e, t, n) {
            var i, r, o, s, a, l = ue.contains(e.ownerDocument, e);
            if (ue.support.html5Clone || ue.isXMLDoc(e) || !Ge.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (lt.innerHTML = e.outerHTML,
            lt.removeChild(o = lt.firstChild)),
            !(ue.support.noCloneEvent && ue.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ue.isXMLDoc(e)))
                for (i = x(o),
                a = x(e),
                s = 0; null != (r = a[s]); ++s)
                    i[s] && b(r, i[s]);
            if (t)
                if (n)
                    for (a = a || x(e),
                    i = i || x(o),
                    s = 0; null != (r = a[s]); s++)
                        y(r, i[s]);
                else
                    y(e, o);
            return i = x(o, "script"),
            i.length > 0 && v(i, !l && x(e, "script")),
            i = a = r = null ,
            o
        },
        buildFragment: function(e, t, n, i) {
            for (var r, o, s, a, l, c, u, f = e.length, d = p(t), h = [], g = 0; f > g; g++)
                if (o = e[g],
                o || 0 === o)
                    if ("object" === ue.type(o))
                        ue.merge(h, o.nodeType ? [o] : o);
                    else if (Ze.test(o)) {
                        for (a = a || d.appendChild(t.createElement("div")),
                        l = (Qe.exec(o) || ["", ""])[1].toLowerCase(),
                        u = st[l] || st._default,
                        a.innerHTML = u[1] + o.replace(Ve, "<$1></$2>") + u[2],
                        r = u[0]; r--; )
                            a = a.lastChild;
                        if (!ue.support.leadingWhitespace && Je.test(o) && h.push(t.createTextNode(Je.exec(o)[0])),
                        !ue.support.tbody)
                            for (o = "table" !== l || Ke.test(o) ? "<table>" !== u[1] || Ke.test(o) ? 0 : a : a.firstChild,
                            r = o && o.childNodes.length; r--; )
                                ue.nodeName(c = o.childNodes[r], "tbody") && !c.childNodes.length && o.removeChild(c);
                        for (ue.merge(h, a.childNodes),
                        a.textContent = ""; a.firstChild; )
                            a.removeChild(a.firstChild);
                        a = d.lastChild
                    } else
                        h.push(t.createTextNode(o));
            for (a && d.removeChild(a),
            ue.support.appendChecked || ue.grep(x(h, "input"), _),
            g = 0; o = h[g++]; )
                if ((!i || -1 === ue.inArray(o, i)) && (s = ue.contains(o.ownerDocument, o),
                a = x(d.appendChild(o), "script"),
                s && v(a),
                n))
                    for (r = 0; o = a[r++]; )
                        it.test(o.type || "") && n.push(o);
            return a = null ,
            d
        },
        cleanData: function(e, t) {
            for (var n, i, r, o, s = 0, a = ue.expando, l = ue.cache, c = ue.support.deleteExpando, u = ue.event.special; null != (n = e[s]); s++)
                if ((t || ue.acceptData(n)) && (r = n[a],
                o = r && l[r])) {
                    if (o.events)
                        for (i in o.events)
                            u[i] ? ue.event.remove(n, i) : ue.removeEvent(n, i, o.handle);
                    l[r] && (delete l[r],
                    c ? delete n[a] : typeof n.removeAttribute !== G ? n.removeAttribute(a) : n[a] = null ,
                    te.push(r))
                }
        },
        _evalUrl: function(e) {
            return ue.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }),
    ue.fn.extend({
        wrapAll: function(e) {
            if (ue.isFunction(e))
                return this.each(function(t) {
                    ue(this).wrapAll(e.call(this, t))
                });
            if (this[0]) {
                var t = ue(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; )
                        e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return ue.isFunction(e) ? this.each(function(t) {
                ue(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = ue(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = ue.isFunction(e);
            return this.each(function(n) {
                ue(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ue.nodeName(this, "body") || ue(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var ct, ut, ft, dt = /alpha\([^)]*\)/i, pt = /opacity\s*=\s*([^)]*)/, ht = /^(top|right|bottom|left)$/, gt = /^(none|table(?!-c[ea]).+)/, mt = /^margin/, vt = RegExp("^(" + fe + ")(.*)$", "i"), yt = RegExp("^(" + fe + ")(?!px)[a-z%]+$", "i"), bt = RegExp("^([+-])=(" + fe + ")", "i"), xt = {
        BODY: "block"
    }, _t = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, wt = {
        letterSpacing: 0,
        fontWeight: 400
    }, Ct = ["Top", "Right", "Bottom", "Left"], kt = ["Webkit", "O", "Moz", "ms"];
    ue.fn.extend({
        css: function(e, n) {
            return ue.access(this, function(e, n, i) {
                var r, o, s = {}, a = 0;
                if (ue.isArray(n)) {
                    for (o = ut(e),
                    r = n.length; r > a; a++)
                        s[n[a]] = ue.css(e, n[a], !1, o);
                    return s
                }
                return i !== t ? ue.style(e, n, i) : ue.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return k(this, !0)
        },
        hide: function() {
            return k(this)
        },
        toggle: function(e) {
            var t = "boolean" == typeof e;
            return this.each(function() {
                (t ? e : C(this)) ? ue(this).show() : ue(this).hide()
            })
        }
    }),
    ue.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = ft(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ue.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, i, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, s, a, l = ue.camelCase(n), c = e.style;
                if (n = ue.cssProps[l] || (ue.cssProps[l] = w(c, l)),
                a = ue.cssHooks[n] || ue.cssHooks[l],
                i === t)
                    return a && "get"in a && (o = a.get(e, !1, r)) !== t ? o : c[n];
                if (s = typeof i,
                "string" === s && (o = bt.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(ue.css(e, n)),
                s = "number"),
                !(null == i || "number" === s && isNaN(i) || ("number" !== s || ue.cssNumber[l] || (i += "px"),
                ue.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (c[n] = "inherit"),
                a && "set"in a && (i = a.set(e, i, r)) === t)))
                    try {
                        c[n] = i
                    } catch (u) {}
            }
        },
        css: function(e, n, i, r) {
            var o, s, a, l = ue.camelCase(n);
            return n = ue.cssProps[l] || (ue.cssProps[l] = w(e.style, l)),
            a = ue.cssHooks[n] || ue.cssHooks[l],
            a && "get"in a && (s = a.get(e, !0, i)),
            s === t && (s = ft(e, n, r)),
            "normal" === s && n in wt && (s = wt[n]),
            "" === i || i ? (o = parseFloat(s),
            i === !0 || ue.isNumeric(o) ? o || 0 : s) : s
        }
    }),
    e.getComputedStyle ? (ut = function(t) {
        return e.getComputedStyle(t, null )
    }
    ,
    ft = function(e, n, i) {
        var r, o, s, a = i || ut(e), l = a ? a.getPropertyValue(n) || a[n] : t, c = e.style;
        return a && ("" !== l || ue.contains(e.ownerDocument, e) || (l = ue.style(e, n)),
        yt.test(l) && mt.test(n) && (r = c.width,
        o = c.minWidth,
        s = c.maxWidth,
        c.minWidth = c.maxWidth = c.width = l,
        l = a.width,
        c.width = r,
        c.minWidth = o,
        c.maxWidth = s)),
        l
    }
    ) : V.documentElement.currentStyle && (ut = function(e) {
        return e.currentStyle
    }
    ,
    ft = function(e, n, i) {
        var r, o, s, a = i || ut(e), l = a ? a[n] : t, c = e.style;
        return null == l && c && c[n] && (l = c[n]),
        yt.test(l) && !ht.test(n) && (r = c.left,
        o = e.runtimeStyle,
        s = o && o.left,
        s && (o.left = e.currentStyle.left),
        c.left = "fontSize" === n ? "1em" : l,
        l = c.pixelLeft + "px",
        c.left = r,
        s && (o.left = s)),
        "" === l ? "auto" : l
    }
    ),
    ue.each(["height", "width"], function(e, n) {
        ue.cssHooks[n] = {
            get: function(e, i, r) {
                return i ? 0 === e.offsetWidth && gt.test(ue.css(e, "display")) ? ue.swap(e, _t, function() {
                    return E(e, n, r)
                }) : E(e, n, r) : t
            },
            set: function(e, t, i) {
                var r = i && ut(e);
                return T(e, t, i ? N(e, n, i, ue.support.boxSizing && "border-box" === ue.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }),
    ue.support.opacity || (ue.cssHooks.opacity = {
        get: function(e, t) {
            return pt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style
              , i = e.currentStyle
              , r = ue.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
              , o = i && i.filter || n.filter || "";
            n.zoom = 1,
            (t >= 1 || "" === t) && "" === ue.trim(o.replace(dt, "")) && n.removeAttribute && (n.removeAttribute("filter"),
            "" === t || i && !i.filter) || (n.filter = dt.test(o) ? o.replace(dt, r) : o + " " + r)
        }
    }),
    ue(function() {
        ue.support.reliableMarginRight || (ue.cssHooks.marginRight = {
            get: function(e, n) {
                return n ? ue.swap(e, {
                    display: "inline-block"
                }, ft, [e, "marginRight"]) : t
            }
        }),
        !ue.support.pixelPosition && ue.fn.position && ue.each(["top", "left"], function(e, n) {
            ue.cssHooks[n] = {
                get: function(e, i) {
                    return i ? (i = ft(e, n),
                    yt.test(i) ? ue(e).position()[n] + "px" : i) : t
                }
            }
        })
    }),
    ue.expr && ue.expr.filters && (ue.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !ue.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ue.css(e, "display"))
    }
    ,
    ue.expr.filters.visible = function(e) {
        return !ue.expr.filters.hidden(e)
    }
    ),
    ue.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        ue.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)
                    r[e + Ct[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        },
        mt.test(e) || (ue.cssHooks[e + t].set = T)
    });
    var Tt = /%20/g
      , Nt = /\[\]$/
      , Et = /\r?\n/g
      , St = /^(?:submit|button|image|reset|file)$/i
      , Dt = /^(?:input|select|textarea|keygen)/i;
    ue.fn.extend({
        serialize: function() {
            return ue.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ue.prop(this, "elements");
                return e ? ue.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ue(this).is(":disabled") && Dt.test(this.nodeName) && !St.test(e) && (this.checked || !tt.test(e))
            }).map(function(e, t) {
                var n = ue(this).val();
                return null == n ? null : ue.isArray(n) ? ue.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Et, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Et, "\r\n")
                }
            }).get()
        }
    }),
    ue.param = function(e, n) {
        var i, r = [], o = function(e, t) {
            t = ue.isFunction(t) ? t() : null == t ? "" : t,
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        }
        ;
        if (n === t && (n = ue.ajaxSettings && ue.ajaxSettings.traditional),
        ue.isArray(e) || e.jquery && !ue.isPlainObject(e))
            ue.each(e, function() {
                o(this.name, this.value)
            });
        else
            for (i in e)
                P(i, e[i], n, o);
        return r.join("&").replace(Tt, "+")
    }
    ,
    ue.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        ue.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null , e, n) : this.trigger(t)
        }
    }),
    ue.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null , t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null , t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Pt, At, Lt = ue.now(), jt = /\?/, Ht = /#.*$/, Ot = /([?&])_=[^&]*/, It = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Mt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Wt = /^(?:GET|HEAD)$/, Ft = /^\/\//, qt = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Rt = ue.fn.load, zt = {}, Bt = {}, $t = "*/".concat("*");
    try {
        At = J.href
    } catch (Ut) {
        At = V.createElement("a"),
        At.href = "",
        At = At.href
    }
    Pt = qt.exec(At.toLowerCase()) || [],
    ue.fn.load = function(e, n, i) {
        if ("string" != typeof e && Rt)
            return Rt.apply(this, arguments);
        var r, o, s, a = this, l = e.indexOf(" ");
        return l >= 0 && (r = e.slice(l, e.length),
        e = e.slice(0, l)),
        ue.isFunction(n) ? (i = n,
        n = t) : n && "object" == typeof n && (s = "POST"),
        a.length > 0 && ue.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: n
        }).done(function(e) {
            o = arguments,
            a.html(r ? ue("<div>").append(ue.parseHTML(e)).find(r) : e)
        }).complete(i && function(e, t) {
            a.each(i, o || [e.responseText, t, e])
        }
        ),
        this
    }
    ,
    ue.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ue.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    ue.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: At,
            type: "GET",
            isLocal: Mt.test(Pt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ue.parseJSON,
                "text xml": ue.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? j(j(e, ue.ajaxSettings), t) : j(ue.ajaxSettings, e)
        },
        ajaxPrefilter: A(zt),
        ajaxTransport: A(Bt),
        ajax: function(e, n) {
            function i(e, n, i, r) {
                var o, f, y, b, _, C = n;
                2 !== x && (x = 2,
                l && clearTimeout(l),
                u = t,
                a = r || "",
                w.readyState = e > 0 ? 4 : 0,
                o = e >= 200 && 300 > e || 304 === e,
                i && (b = H(d, w, i)),
                b = O(d, b, w, o),
                o ? (d.ifModified && (_ = w.getResponseHeader("Last-Modified"),
                _ && (ue.lastModified[s] = _),
                _ = w.getResponseHeader("etag"),
                _ && (ue.etag[s] = _)),
                204 === e || "HEAD" === d.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state,
                f = b.data,
                y = b.error,
                o = !y)) : (y = C,
                (e || !C) && (C = "error",
                0 > e && (e = 0))),
                w.status = e,
                w.statusText = (n || C) + "",
                o ? g.resolveWith(p, [f, C, w]) : g.rejectWith(p, [w, C, y]),
                w.statusCode(v),
                v = t,
                c && h.trigger(o ? "ajaxSuccess" : "ajaxError", [w, d, o ? f : y]),
                m.fireWith(p, [w, C]),
                c && (h.trigger("ajaxComplete", [w, d]),
                --ue.active || ue.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e,
            e = t),
            n = n || {};
            var r, o, s, a, l, c, u, f, d = ue.ajaxSetup({}, n), p = d.context || d, h = d.context && (p.nodeType || p.jquery) ? ue(p) : ue.event, g = ue.Deferred(), m = ue.Callbacks("once memory"), v = d.statusCode || {}, y = {}, b = {}, x = 0, _ = "canceled", w = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === x) {
                        if (!f)
                            for (f = {}; t = It.exec(a); )
                                f[t[1].toLowerCase()] = t[2];
                        t = f[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? a : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return x || (e = b[n] = b[n] || e,
                    y[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return x || (d.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (2 > x)
                            for (t in e)
                                v[t] = [v[t], e[t]];
                        else
                            w.always(e[w.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || _;
                    return u && u.abort(t),
                    i(0, t),
                    this
                }
            };
            if (g.promise(w).complete = m.add,
            w.success = w.done,
            w.error = w.fail,
            d.url = ((e || d.url || At) + "").replace(Ht, "").replace(Ft, Pt[1] + "//"),
            d.type = n.method || n.type || d.method || d.type,
            d.dataTypes = ue.trim(d.dataType || "*").toLowerCase().match(de) || [""],
            null == d.crossDomain && (r = qt.exec(d.url.toLowerCase()),
            d.crossDomain = !(!r || r[1] === Pt[1] && r[2] === Pt[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (Pt[3] || ("http:" === Pt[1] ? "80" : "443")))),
            d.data && d.processData && "string" != typeof d.data && (d.data = ue.param(d.data, d.traditional)),
            L(zt, d, n, w),
            2 === x)
                return w;
            c = d.global,
            c && 0 === ue.active++ && ue.event.trigger("ajaxStart"),
            d.type = d.type.toUpperCase(),
            d.hasContent = !Wt.test(d.type),
            s = d.url,
            d.hasContent || (d.data && (s = d.url += (jt.test(s) ? "&" : "?") + d.data,
            delete d.data),
            d.cache === !1 && (d.url = Ot.test(s) ? s.replace(Ot, "$1_=" + Lt++) : s + (jt.test(s) ? "&" : "?") + "_=" + Lt++)),
            d.ifModified && (ue.lastModified[s] && w.setRequestHeader("If-Modified-Since", ue.lastModified[s]),
            ue.etag[s] && w.setRequestHeader("If-None-Match", ue.etag[s])),
            (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && w.setRequestHeader("Content-Type", d.contentType),
            w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : d.accepts["*"]);
            for (o in d.headers)
                w.setRequestHeader(o, d.headers[o]);
            if (d.beforeSend && (d.beforeSend.call(p, w, d) === !1 || 2 === x))
                return w.abort();
            _ = "abort";
            for (o in {
                success: 1,
                error: 1,
                complete: 1
            })
                w[o](d[o]);
            if (u = L(Bt, d, n, w)) {
                w.readyState = 1,
                c && h.trigger("ajaxSend", [w, d]),
                d.async && d.timeout > 0 && (l = setTimeout(function() {
                    w.abort("timeout")
                }, d.timeout));
                try {
                    x = 1,
                    u.send(y, i)
                } catch (C) {
                    if (!(2 > x))
                        throw C;
                    i(-1, C)
                }
            } else
                i(-1, "No Transport");
            return w
        },
        getJSON: function(e, t, n) {
            return ue.get(e, t, n, "json")
        },
        getScript: function(e, n) {
            return ue.get(e, t, n, "script")
        }
    }),
    ue.each(["get", "post"], function(e, n) {
        ue[n] = function(e, i, r, o) {
            return ue.isFunction(i) && (o = o || r,
            r = i,
            i = t),
            ue.ajax({
                url: e,
                type: n,
                dataType: o,
                data: i,
                success: r
            })
        }
    }),
    ue.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return ue.globalEval(e),
                e
            }
        }
    }),
    ue.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1),
        e.crossDomain && (e.type = "GET",
        e.global = !1)
    }),
    ue.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, i = V.head || ue("head")[0] || V.documentElement;
            return {
                send: function(t, r) {
                    n = V.createElement("script"),
                    n.async = !0,
                    e.scriptCharset && (n.charset = e.scriptCharset),
                    n.src = e.url,
                    n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null ,
                        n.parentNode && n.parentNode.removeChild(n),
                        n = null ,
                        t || r(200, "success"))
                    }
                    ,
                    i.insertBefore(n, i.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Xt = []
      , Yt = /(=)\?(?=&|$)|\?\?/;
    ue.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Xt.pop() || ue.expando + "_" + Lt++;
            return this[e] = !0,
            e
        }
    }),
    ue.ajaxPrefilter("json jsonp", function(n, i, r) {
        var o, s, a, l = n.jsonp !== !1 && (Yt.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ue.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback,
        l ? n[l] = n[l].replace(Yt, "$1" + o) : n.jsonp !== !1 && (n.url += (jt.test(n.url) ? "&" : "?") + n.jsonp + "=" + o),
        n.converters["script json"] = function() {
            return a || ue.error(o + " was not called"),
            a[0]
        }
        ,
        n.dataTypes[0] = "json",
        s = e[o],
        e[o] = function() {
            a = arguments
        }
        ,
        r.always(function() {
            e[o] = s,
            n[o] && (n.jsonpCallback = i.jsonpCallback,
            Xt.push(o)),
            a && ue.isFunction(s) && s(a[0]),
            a = s = t
        }),
        "script") : t
    });
    var Gt, Jt, Vt = 0, Qt = e.ActiveXObject && function() {
        var e;
        for (e in Gt)
            Gt[e](t, !0)
    }
    ;
    ue.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && I() || M()
    }
    : I,
    Jt = ue.ajaxSettings.xhr(),
    ue.support.cors = !!Jt && "withCredentials"in Jt,
    Jt = ue.support.ajax = !!Jt,
    Jt && ue.ajaxTransport(function(n) {
        if (!n.crossDomain || ue.support.cors) {
            var i;
            return {
                send: function(r, o) {
                    var s, a, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async),
                    n.xhrFields)
                        for (a in n.xhrFields)
                            l[a] = n.xhrFields[a];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType),
                    n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (a in r)
                            l.setRequestHeader(a, r[a])
                    } catch (c) {}
                    l.send(n.hasContent && n.data || null ),
                    i = function(e, r) {
                        var a, c, u, f;
                        try {
                            if (i && (r || 4 === l.readyState))
                                if (i = t,
                                s && (l.onreadystatechange = ue.noop,
                                Qt && delete Gt[s]),
                                r)
                                    4 !== l.readyState && l.abort();
                                else {
                                    f = {},
                                    a = l.status,
                                    c = l.getAllResponseHeaders(),
                                    "string" == typeof l.responseText && (f.text = l.responseText);
                                    try {
                                        u = l.statusText
                                    } catch (d) {
                                        u = ""
                                    }
                                    a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = f.text ? 200 : 404
                                }
                        } catch (p) {
                            r || o(-1, p)
                        }
                        f && o(a, u, f, c)
                    }
                    ,
                    n.async ? 4 === l.readyState ? setTimeout(i) : (s = ++Vt,
                    Qt && (Gt || (Gt = {},
                    ue(e).unload(Qt)),
                    Gt[s] = i),
                    l.onreadystatechange = i) : i()
                },
                abort: function() {
                    i && i(t, !0)
                }
            }
        }
    });
    var Kt, Zt, en = /^(?:toggle|show|hide)$/, tn = RegExp("^(?:([+-])=|)(" + fe + ")([a-z%]*)$", "i"), nn = /queueHooks$/, rn = [z], on = {
        "*": [function(e, t) {
            var n = this.createTween(e, t)
              , i = n.cur()
              , r = tn.exec(t)
              , o = r && r[3] || (ue.cssNumber[e] ? "" : "px")
              , s = (ue.cssNumber[e] || "px" !== o && +i) && tn.exec(ue.css(n.elem, e))
              , a = 1
              , l = 20;
            if (s && s[3] !== o) {
                o = o || s[3],
                r = r || [],
                s = +i || 1;
                do
                    a = a || ".5",
                    s /= a,
                    ue.style(n.elem, e, s + o);
                while (a !== (a = n.cur() / i) && 1 !== a && --l)
            }
            return r && (n.unit = o,
            n.start = +s || +i || 0,
            n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]),
            n
        }
        ]
    };
    ue.Animation = ue.extend(q, {
        tweener: function(e, t) {
            ue.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.split(" ");
            for (var n, i = 0, r = e.length; r > i; i++)
                n = e[i],
                on[n] = on[n] || [],
                on[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? rn.unshift(e) : rn.push(e)
        }
    }),
    ue.Tween = B,
    B.prototype = {
        constructor: B,
        init: function(e, t, n, i, r, o) {
            this.elem = e,
            this.prop = n,
            this.easing = r || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = o || (ue.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = B.propHooks[this.prop];
            return e && e.get ? e.get(this) : B.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = B.propHooks[this.prop];
            return this.pos = t = this.options.duration ? ue.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : B.propHooks._default.set(this),
            this
        }
    },
    B.prototype.init.prototype = B.prototype,
    B.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ue.css(e.elem, e.prop, ""),
                t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                ue.fx.step[e.prop] ? ue.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ue.cssProps[e.prop]] || ue.cssHooks[e.prop]) ? ue.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    B.propHooks.scrollTop = B.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    ue.each(["toggle", "show", "hide"], function(e, t) {
        var n = ue.fn[t];
        ue.fn[t] = function(e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate($(t, !0), e, i, r)
        }
    }),
    ue.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(C).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, i) {
            var r = ue.isEmptyObject(e)
              , o = ue.speed(t, n, i)
              , s = function() {
                var t = q(this, ue.extend({}, e), o);
                s.finish = function() {
                    t.stop(!0)
                }
                ,
                (r || ue._data(this, "finish")) && t.stop(!0)
            }
            ;
            return s.finish = s,
            r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(e, n, i) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(i)
            }
            ;
            return "string" != typeof e && (i = n,
            n = e,
            e = t),
            n && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , n = null != e && e + "queueHooks"
                  , o = ue.timers
                  , s = ue._data(this);
                if (n)
                    s[n] && s[n].stop && r(s[n]);
                else
                    for (n in s)
                        s[n] && s[n].stop && nn.test(n) && r(s[n]);
                for (n = o.length; n--; )
                    o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(i),
                    t = !1,
                    o.splice(n, 1));
                (t || !i) && ue.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = ue._data(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = ue.timers, s = i ? i.length : 0;
                for (n.finish = !0,
                ue.queue(this, e, []),
                r && r.cur && r.cur.finish && r.cur.finish.call(this),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; s > t; t++)
                    i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    ue.each({
        slideDown: $("show"),
        slideUp: $("hide"),
        slideToggle: $("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        ue.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }),
    ue.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? ue.extend({}, e) : {
            complete: n || !n && t || ue.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !ue.isFunction(t) && t
        };
        return i.duration = ue.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ue.fx.speeds ? ue.fx.speeds[i.duration] : ue.fx.speeds._default,
        (null == i.queue || i.queue === !0) && (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            ue.isFunction(i.old) && i.old.call(this),
            i.queue && ue.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    ue.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    },
    ue.timers = [],
    ue.fx = B.prototype.init,
    ue.fx.tick = function() {
        var e, n = ue.timers, i = 0;
        for (Kt = ue.now(); n.length > i; i++)
            e = n[i],
            e() || n[i] !== e || n.splice(i--, 1);
        n.length || ue.fx.stop(),
        Kt = t
    }
    ,
    ue.fx.timer = function(e) {
        e() && ue.timers.push(e) && ue.fx.start()
    }
    ,
    ue.fx.interval = 13,
    ue.fx.start = function() {
        Zt || (Zt = setInterval(ue.fx.tick, ue.fx.interval))
    }
    ,
    ue.fx.stop = function() {
        clearInterval(Zt),
        Zt = null
    }
    ,
    ue.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    ue.fx.step = {},
    ue.expr && ue.expr.filters && (ue.expr.filters.animated = function(e) {
        return ue.grep(ue.timers, function(t) {
            return e === t.elem
        }).length
    }
    ),
    ue.fn.offset = function(e) {
        if (arguments.length)
            return e === t ? this : this.each(function(t) {
                ue.offset.setOffset(this, e, t)
            });
        var n, i, r = {
            top: 0,
            left: 0
        }, o = this[0], s = o && o.ownerDocument;
        return s ? (n = s.documentElement,
        ue.contains(n, o) ? (typeof o.getBoundingClientRect !== G && (r = o.getBoundingClientRect()),
        i = U(s),
        {
            top: r.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: r.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : r) : void 0
    }
    ,
    ue.offset = {
        setOffset: function(e, t, n) {
            var i = ue.css(e, "position");
            "static" === i && (e.style.position = "relative");
            var r, o, s = ue(e), a = s.offset(), l = ue.css(e, "top"), c = ue.css(e, "left"), u = ("absolute" === i || "fixed" === i) && ue.inArray("auto", [l, c]) > -1, f = {}, d = {};
            u ? (d = s.position(),
            r = d.top,
            o = d.left) : (r = parseFloat(l) || 0,
            o = parseFloat(c) || 0),
            ue.isFunction(t) && (t = t.call(e, n, a)),
            null != t.top && (f.top = t.top - a.top + r),
            null != t.left && (f.left = t.left - a.left + o),
            "using"in t ? t.using.call(e, f) : s.css(f)
        }
    },
    ue.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                }, i = this[0];
                return "fixed" === ue.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                ue.nodeName(e[0], "html") || (n = e.offset()),
                n.top += ue.css(e[0], "borderTopWidth", !0),
                n.left += ue.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - ue.css(i, "marginTop", !0),
                    left: t.left - n.left - ue.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Q; e && !ue.nodeName(e, "html") && "static" === ue.css(e, "position"); )
                    e = e.offsetParent;
                return e || Q
            })
        }
    }),
    ue.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var i = /Y/.test(n);
        ue.fn[e] = function(r) {
            return ue.access(this, function(e, r, o) {
                var s = U(e);
                return o === t ? s ? n in s ? s[n] : s.document.documentElement[r] : e[r] : (s ? s.scrollTo(i ? ue(s).scrollLeft() : o, i ? o : ue(s).scrollTop()) : e[r] = o,
                t)
            }, e, r, arguments.length, null )
        }
    }),
    ue.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        ue.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(i, r) {
            ue.fn[r] = function(r, o) {
                var s = arguments.length && (i || "boolean" != typeof r)
                  , a = i || (r === !0 || o === !0 ? "margin" : "border");
                return ue.access(this, function(n, i, r) {
                    var o;
                    return ue.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement,
                    Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : r === t ? ue.css(n, i, a) : ue.style(n, i, r, a)
                }, n, s ? r : t, s, null )
            }
        })
    }),
    ue.fn.size = function() {
        return this.length
    }
    ,
    ue.fn.andSelf = ue.fn.addBack,
    "object" == typeof module && "object" == typeof module.exports ? module.exports = ue : (e.jQuery = e.$ = ue,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return ue
    }))
}(window),
function(e, t) {
    function n(t, n) {
        var r, o, s, a = t.nodeName.toLowerCase();
        return "area" === a ? (r = t.parentNode,
        o = r.name,
        t.href && o && "map" === r.nodeName.toLowerCase() ? (s = e("img[usemap=#" + o + "]")[0],
        !!s && i(s)) : !1) : (/input|select|textarea|button|object/.test(a) ? !t.disabled : "a" === a ? t.href || n : n) && i(t)
    }
    function i(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
            return "hidden" === e.css(this, "visibility")
        }).length
    }
    var r = 0
      , o = /^ui-id-\d+$/;
    e.ui = e.ui || {},
    e.extend(e.ui, {
        version: "1.10.3",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }),
    e.fn.extend({
        focus: function(t) {
            return function(n, i) {
                return "number" == typeof n ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        e(t).focus(),
                        i && i.call(t)
                    }, n)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus),
        scrollParent: function() {
            var t;
            return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0),
            /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        },
        zIndex: function(n) {
            if (n !== t)
                return this.css("zIndex", n);
            if (this.length)
                for (var i, r, o = e(this[0]); o.length && o[0] !== document; ) {
                    if (i = o.css("position"),
                    ("absolute" === i || "relative" === i || "fixed" === i) && (r = parseInt(o.css("zIndex"), 10),
                    !isNaN(r) && 0 !== r))
                        return r;
                    o = o.parent()
                }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++r)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                o.test(this.id) && e(this).removeAttr("id")
            })
        }
    }),
    e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(n) {
                return !!e.data(n, t)
            }
        }) : function(t, n, i) {
            return !!e.data(t, i[3])
        }
        ,
        focusable: function(t) {
            return n(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var i = e.attr(t, "tabindex")
              , r = isNaN(i);
            return (r || i >= 0) && n(t, !r)
        }
    }),
    e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(n, i) {
        function r(t, n, i, r) {
            return e.each(o, function() {
                n -= parseFloat(e.css(t, "padding" + this)) || 0,
                i && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0),
                r && (n -= parseFloat(e.css(t, "margin" + this)) || 0)
            }),
            n
        }
        var o = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"]
          , s = i.toLowerCase()
          , a = {
            innerWidth: e.fn.innerWidth,
            innerHeight: e.fn.innerHeight,
            outerWidth: e.fn.outerWidth,
            outerHeight: e.fn.outerHeight
        };
        e.fn["inner" + i] = function(n) {
            return n === t ? a["inner" + i].call(this) : this.each(function() {
                e(this).css(s, r(this, n) + "px")
            })
        }
        ,
        e.fn["outer" + i] = function(t, n) {
            return "number" != typeof t ? a["outer" + i].call(this, t) : this.each(function() {
                e(this).css(s, r(this, t, !0, n) + "px")
            })
        }
    }),
    e.fn.addBack || (e.fn.addBack = function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
    ),
    e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(n) {
            return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this)
        }
    }(e.fn.removeData)),
    e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
    e.support.selectstart = "onselectstart"in document.createElement("div"),
    e.fn.extend({
        disableSelection: function() {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                e.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }),
    e.extend(e.ui, {
        plugin: {
            add: function(t, n, i) {
                var r, o = e.ui[t].prototype;
                for (r in i)
                    o.plugins[r] = o.plugins[r] || [],
                    o.plugins[r].push([n, i[r]])
            },
            call: function(e, t, n) {
                var i, r = e.plugins[t];
                if (r && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)
                    for (i = 0; r.length > i; i++)
                        e.options[r[i][0]] && r[i][1].apply(e.element, n)
            }
        },
        hasScroll: function(t, n) {
            if ("hidden" === e(t).css("overflow"))
                return !1;
            var i = n && "left" === n ? "scrollLeft" : "scrollTop"
              , r = !1;
            return t[i] > 0 ? !0 : (t[i] = 1,
            r = t[i] > 0,
            t[i] = 0,
            r)
        }
    })
}(jQuery),




function(e, t) {
    var n = 0
      , i = Array.prototype.slice
      , r = e.cleanData;
    e.cleanData = function(t) {
        for (var n, i = 0; null != (n = t[i]); i++)
            try {
                e(n).triggerHandler("remove")
            } catch (o) {}
        r(t)
    }
    ,
    e.widget = function(n, i, r) {
        var o, s, a, l, c = {}, u = n.split(".")[0];
        n = n.split(".")[1],
        o = u + "-" + n,
        r || (r = i,
        i = e.Widget),
        e.expr[":"][o.toLowerCase()] = function(t) {
            return !!e.data(t, o)
        }
        ,
        e[u] = e[u] || {},
        s = e[u][n],
        a = e[u][n] = function(e, n) {
            return this._createWidget ? (arguments.length && this._createWidget(e, n),
            t) : new a(e,n)
        }
        ,
        e.extend(a, s, {
            version: r.version,
            _proto: e.extend({}, r),
            _childConstructors: []
        }),
        l = new i,
        l.options = e.widget.extend({}, l.options),
        e.each(r, function(n, r) {
            return e.isFunction(r) ? (c[n] = function() {
                var e = function() {
                    return i.prototype[n].apply(this, arguments)
                }
                  , t = function(e) {
                    return i.prototype[n].apply(this, e)
                }
                ;
                return function() {
                    var n, i = this._super, o = this._superApply;
                    return this._super = e,
                    this._superApply = t,
                    n = r.apply(this, arguments),
                    this._super = i,
                    this._superApply = o,
                    n
                }
            }(),
            t) : (c[n] = r,
            t)
        }),
        a.prototype = e.widget.extend(l, {
            widgetEventPrefix: s ? l.widgetEventPrefix : n
        }, c, {
            constructor: a,
            namespace: u,
            widgetName: n,
            widgetFullName: o
        }),
        s ? (e.each(s._childConstructors, function(t, n) {
            var i = n.prototype;
            e.widget(i.namespace + "." + i.widgetName, a, n._proto)
        }),
        delete s._childConstructors) : i._childConstructors.push(a),
        e.widget.bridge(n, a)
    }
    ,
    e.widget.extend = function(n) {
        for (var r, o, s = i.call(arguments, 1), a = 0, l = s.length; l > a; a++)
            for (r in s[a])
                o = s[a][r],
                s[a].hasOwnProperty(r) && o !== t && (n[r] = e.isPlainObject(o) ? e.isPlainObject(n[r]) ? e.widget.extend({}, n[r], o) : e.widget.extend({}, o) : o);
        return n
    }
    ,
    e.widget.bridge = function(n, r) {
        var o = r.prototype.widgetFullName || n;
        e.fn[n] = function(s) {
            var a = "string" == typeof s
              , l = i.call(arguments, 1)
              , c = this;
            return s = !a && l.length ? e.widget.extend.apply(null , [s].concat(l)) : s,
            a ? this.each(function() {
                var i, r = e.data(this, o);
                return r ? e.isFunction(r[s]) && "_" !== s.charAt(0) ? (i = r[s].apply(r, l),
                i !== r && i !== t ? (c = i && i.jquery ? c.pushStack(i.get()) : i,
                !1) : t) : e.error("no such method '" + s + "' for " + n + " widget instance") : e.error("cannot call methods on " + n + " prior to initialization; attempted to call method '" + s + "'")
            }) : this.each(function() {
                var t = e.data(this, o);
                t ? t.option(s || {})._init() : e.data(this, o, new r(s,this))
            }),
            c
        }
    }
    ,
    e.Widget = function() {}
    ,
    e.Widget._childConstructors = [],
    e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, i) {
            i = e(i || this.defaultElement || this)[0],
            this.element = e(i),
            this.uuid = n++,
            this.eventNamespace = "." + this.widgetName + this.uuid,
            this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t),
            this.bindings = e(),
            this.hoverable = e(),
            this.focusable = e(),
            i !== this && (e.data(i, this.widgetFullName, this),
            this._on(!0, this.element, {
                remove: function(e) {
                    e.target === i && this.destroy()
                }
            }),
            this.document = e(i.style ? i.ownerDocument : i.document || i),
            this.window = e(this.document[0].defaultView || this.document[0].parentWindow)),
            this._create(),
            this._trigger("create", null , this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            this._destroy(),
            this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
            this.bindings.unbind(this.eventNamespace),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function() {
            return this.element
        },
        option: function(n, i) {
            var r, o, s, a = n;
            if (0 === arguments.length)
                return e.widget.extend({}, this.options);
            if ("string" == typeof n)
                if (a = {},
                r = n.split("."),
                n = r.shift(),
                r.length) {
                    for (o = a[n] = e.widget.extend({}, this.options[n]),
                    s = 0; r.length - 1 > s; s++)
                        o[r[s]] = o[r[s]] || {},
                        o = o[r[s]];
                    if (n = r.pop(),
                    i === t)
                        return o[n] === t ? null : o[n];
                    o[n] = i
                } else {
                    if (i === t)
                        return this.options[n] === t ? null : this.options[n];
                    a[n] = i
                }
            return this._setOptions(a),
            this
        },
        _setOptions: function(e) {
            var t;
            for (t in e)
                this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return this.options[e] = t,
            "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus")),
            this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(n, i, r) {
            var o, s = this;
            "boolean" != typeof n && (r = i,
            i = n,
            n = !1),
            r ? (i = o = e(i),
            this.bindings = this.bindings.add(i)) : (r = i,
            i = this.element,
            o = this.widget()),
            e.each(r, function(r, a) {
                function l() {
                    return n || s.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? s[a] : a).apply(s, arguments) : t
                }
                "string" != typeof a && (l.guid = a.guid = a.guid || l.guid || e.guid++);
                var c = r.match(/^(\w+)\s*(.*)$/)
                  , u = c[1] + s.eventNamespace
                  , f = c[2];
                f ? o.delegate(f, u, l) : i.bind(u, l)
            })
        },
        _off: function(e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
            e.unbind(t).undelegate(t)
        },
        _delay: function(e, t) {
            function n() {
                return ("string" == typeof e ? i[e] : e).apply(i, arguments)
            }
            var i = this;
            return setTimeout(n, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t),
            this._on(t, {
                mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t),
            this._on(t, {
                focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, n, i) {
            var r, o, s = this.options[t];
            if (i = i || {},
            n = e.Event(n),
            n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(),
            n.target = this.element[0],
            o = n.originalEvent)
                for (r in o)
                    r in n || (n[r] = o[r]);
            return this.element.trigger(n, i),
            !(e.isFunction(s) && s.apply(this.element[0], [n].concat(i)) === !1 || n.isDefaultPrevented())
        }
    },
    e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, n) {
        e.Widget.prototype["_" + t] = function(i, r, o) {
            "string" == typeof r && (r = {
                effect: r
            });
            var s, a = r ? r === !0 || "number" == typeof r ? n : r.effect || n : t;
            r = r || {},
            "number" == typeof r && (r = {
                duration: r
            }),
            s = !e.isEmptyObject(r),
            r.complete = o,
            r.delay && i.delay(r.delay),
            s && e.effects && e.effects.effect[a] ? i[t](r) : a !== t && i[a] ? i[a](r.duration, r.easing, o) : i.queue(function(n) {
                e(this)[t](),
                o && o.call(i[0]),
                n()
            })
        }
    })
}(jQuery),



function(e) {
    var t = !1;
    e(document).mouseup(function() {
        t = !1
    }),
    e.widget("ui.mouse", {
        version: "1.10.3",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function(n) {
                return !0 === e.data(n.target, t.widgetName + ".preventClickEvent") ? (e.removeData(n.target, t.widgetName + ".preventClickEvent"),
                n.stopImmediatePropagation(),
                !1) : void 0
            }),
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName),
            this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(n) {
            if (!t) {
                this._mouseStarted && this._mouseUp(n),
                this._mouseDownEvent = n;
                var i = this
                  , r = 1 === n.which
                  , o = "string" == typeof this.options.cancel && n.target.nodeName ? e(n.target).closest(this.options.cancel).length : !1;
                return r && !o && this._mouseCapture(n) ? (this.mouseDelayMet = !this.options.delay,
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    i.mouseDelayMet = !0
                }, this.options.delay)),
                this._mouseDistanceMet(n) && this._mouseDelayMet(n) && (this._mouseStarted = this._mouseStart(n) !== !1,
                !this._mouseStarted) ? (n.preventDefault(),
                !0) : (!0 === e.data(n.target, this.widgetName + ".preventClickEvent") && e.removeData(n.target, this.widgetName + ".preventClickEvent"),
                this._mouseMoveDelegate = function(e) {
                    return i._mouseMove(e)
                }
                ,
                this._mouseUpDelegate = function(e) {
                    return i._mouseUp(e)
                }
                ,
                e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                n.preventDefault(),
                t = !0,
                !0)) : !0
            }
        },
        _mouseMove: function(t) {
            return e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t),
            t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1,
            this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)),
            !this._mouseStarted)
        },
        _mouseUp: function(t) {
            return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted && (this._mouseStarted = !1,
            t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(t)),
            !1
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
}(jQuery),


function(e) {
    e.widget("ui.draggable", e.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null ,
            start: null ,
            stop: null
        },
        _create: function() {
            "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"),
            this.options.addClasses && this.element.addClass("ui-draggable"),
            this.options.disabled && this.element.addClass("ui-draggable-disabled"),
            this._mouseInit()
        },
        _destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),
            this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var n = this.options;
            return this.helper || n.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t),
            this.handle ? (e(n.iframeFix === !0 ? "iframe" : n.iframeFix).each(function() {
                e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(e(this).offset()).appendTo("body")
            }),
            !0) : !1)
        },
        _mouseStart: function(t) {
            var n = this.options;
            return this.helper = this._createHelper(t),
            this.helper.addClass("ui-draggable-dragging"),
            this._cacheHelperProportions(),
            e.ui.ddmanager && (e.ui.ddmanager.current = this),
            this._cacheMargins(),
            this.cssPosition = this.helper.css("position"),
            this.scrollParent = this.helper.scrollParent(),
            this.offsetParent = this.helper.offsetParent(),
            this.offsetParentCssPosition = this.offsetParent.css("position"),
            this.offset = this.positionAbs = this.element.offset(),
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            },
            this.offset.scroll = !1,
            e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }),
            this.originalPosition = this.position = this._generatePosition(t),
            this.originalPageX = t.pageX,
            this.originalPageY = t.pageY,
            n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt),
            this._setContainment(),
            this._trigger("start", t) === !1 ? (this._clear(),
            !1) : (this._cacheHelperProportions(),
            e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t),
            this._mouseDrag(t, !0),
            e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t),
            !0)
        },
        _mouseDrag: function(t, n) {
            if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()),
            this.position = this._generatePosition(t),
            this.positionAbs = this._convertPositionTo("absolute"),
            !n) {
                var i = this._uiHash();
                if (this._trigger("drag", t, i) === !1)
                    return this._mouseUp({}),
                    !1;
                this.position = i.position
            }
            return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"),
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"),
            e.ui.ddmanager && e.ui.ddmanager.drag(this, t),
            !1
        },
        _mouseStop: function(t) {
            var n = this
              , i = !1;
            return e.ui.ddmanager && !this.options.dropBehaviour && (i = e.ui.ddmanager.drop(this, t)),
            this.dropped && (i = this.dropped,
            this.dropped = !1),
            "original" !== this.options.helper || e.contains(this.element[0].ownerDocument, this.element[0]) ? ("invalid" === this.options.revert && !i || "valid" === this.options.revert && i || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                n._trigger("stop", t) !== !1 && n._clear()
            }) : this._trigger("stop", t) !== !1 && this._clear(),
            !1) : !1
        },
        _mouseUp: function(t) {
            return e("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }),
            e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t),
            e.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(),
            this
        },
        _getHandle: function(t) {
            return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _createHelper: function(t) {
            var n = this.options
              , i = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t])) : "clone" === n.helper ? this.element.clone().removeAttr("id") : this.element;
            return i.parents("body").length || i.appendTo("parent" === n.appendTo ? this.element[0].parentNode : n.appendTo),
            i[0] === this.element[0] || /(fixed|absolute)/.test(i.css("position")) || i.css("position", "absolute"),
            i
        },
        _adjustOffsetFromHelper: function(t) {
            "string" == typeof t && (t = t.split(" ")),
            e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }),
            "left"in t && (this.offset.click.left = t.left + this.margins.left),
            "right"in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
            "top"in t && (this.offset.click.top = t.top + this.margins.top),
            "bottom"in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            var t = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(),
            t.top += this.scrollParent.scrollTop()),
            (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                top: 0,
                left: 0
            }),
            {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var e = this.element.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t, n, i, r = this.options;
            return r.containment ? "window" === r.containment ? void (this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === r.containment ? void (this.containment = [0, 0, e(document).width() - this.helperProportions.width - this.margins.left, (e(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : r.containment.constructor === Array ? void (this.containment = r.containment) : ("parent" === r.containment && (r.containment = this.helper[0].parentNode),
            n = e(r.containment),
            i = n[0],
            void (i && (t = "hidden" !== n.css("overflow"),
            this.containment = [(parseInt(n.css("borderLeftWidth"), 10) || 0) + (parseInt(n.css("paddingLeft"), 10) || 0), (parseInt(n.css("borderTopWidth"), 10) || 0) + (parseInt(n.css("paddingTop"), 10) || 0), (t ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(n.css("borderRightWidth"), 10) || 0) - (parseInt(n.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(n.css("borderBottomWidth"), 10) || 0) - (parseInt(n.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom],
            this.relative_container = n))) : void (this.containment = null )
        },
        _convertPositionTo: function(t, n) {
            n || (n = this.position);
            var i = "absolute" === t ? 1 : -1
              , r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
            return this.offset.scroll || (this.offset.scroll = {
                top: r.scrollTop(),
                left: r.scrollLeft()
            }),
            {
                top: n.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * i,
                left: n.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * i
            }
        },
        _generatePosition: function(t) {
            var n, i, r, o, s = this.options, a = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, l = t.pageX, c = t.pageY;
            return this.offset.scroll || (this.offset.scroll = {
                top: a.scrollTop(),
                left: a.scrollLeft()
            }),
            this.originalPosition && (this.containment && (this.relative_container ? (i = this.relative_container.offset(),
            n = [this.containment[0] + i.left, this.containment[1] + i.top, this.containment[2] + i.left, this.containment[3] + i.top]) : n = this.containment,
            t.pageX - this.offset.click.left < n[0] && (l = n[0] + this.offset.click.left),
            t.pageY - this.offset.click.top < n[1] && (c = n[1] + this.offset.click.top),
            t.pageX - this.offset.click.left > n[2] && (l = n[2] + this.offset.click.left),
            t.pageY - this.offset.click.top > n[3] && (c = n[3] + this.offset.click.top)),
            s.grid && (r = s.grid[1] ? this.originalPageY + Math.round((c - this.originalPageY) / s.grid[1]) * s.grid[1] : this.originalPageY,
            c = n ? r - this.offset.click.top >= n[1] || r - this.offset.click.top > n[3] ? r : r - this.offset.click.top >= n[1] ? r - s.grid[1] : r + s.grid[1] : r,
            o = s.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / s.grid[0]) * s.grid[0] : this.originalPageX,
            l = n ? o - this.offset.click.left >= n[0] || o - this.offset.click.left > n[2] ? o : o - this.offset.click.left >= n[0] ? o - s.grid[0] : o + s.grid[0] : o)),
            {
                top: c - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
                left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"),
            this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(),
            this.helper = null ,
            this.cancelHelperRemoval = !1
        },
        _trigger: function(t, n, i) {
            return i = i || this._uiHash(),
            e.ui.plugin.call(this, t, [n, i]),
            "drag" === t && (this.positionAbs = this._convertPositionTo("absolute")),
            e.Widget.prototype._trigger.call(this, t, n, i)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }),
    e.ui.plugin.add("draggable", "connectToSortable", {
        start: function(t, n) {
            var i = e(this).data("ui-draggable")
              , r = i.options
              , o = e.extend({}, n, {
                item: i.element
            });
            i.sortables = [],
            e(r.connectToSortable).each(function() {
                var n = e.data(this, "ui-sortable");
                n && !n.options.disabled && (i.sortables.push({
                    instance: n,
                    shouldRevert: n.options.revert
                }),
                n.refreshPositions(),
                n._trigger("activate", t, o))
            })
        },
        stop: function(t, n) {
            var i = e(this).data("ui-draggable")
              , r = e.extend({}, n, {
                item: i.element
            });
            e.each(i.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0,
                i.cancelHelperRemoval = !0,
                this.instance.cancelHelperRemoval = !1,
                this.shouldRevert && (this.instance.options.revert = this.shouldRevert),
                this.instance._mouseStop(t),
                this.instance.options.helper = this.instance.options._helper,
                "original" === i.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1,
                this.instance._trigger("deactivate", t, r))
            })
        },
        drag: function(t, n) {
            var i = e(this).data("ui-draggable")
              , r = this;
            e.each(i.sortables, function() {
                var o = !1
                  , s = this;
                this.instance.positionAbs = i.positionAbs,
                this.instance.helperProportions = i.helperProportions,
                this.instance.offset.click = i.offset.click,
                this.instance._intersectsWith(this.instance.containerCache) && (o = !0,
                e.each(i.sortables, function() {
                    return this.instance.positionAbs = i.positionAbs,
                    this.instance.helperProportions = i.helperProportions,
                    this.instance.offset.click = i.offset.click,
                    this !== s && this.instance._intersectsWith(this.instance.containerCache) && e.contains(s.instance.element[0], this.instance.element[0]) && (o = !1),
                    o
                })),
                o ? (this.instance.isOver || (this.instance.isOver = 1,
                this.instance.currentItem = e(r).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0),
                this.instance.options._helper = this.instance.options.helper,
                this.instance.options.helper = function() {
                    return n.helper[0]
                }
                ,
                t.target = this.instance.currentItem[0],
                this.instance._mouseCapture(t, !0),
                this.instance._mouseStart(t, !0, !0),
                this.instance.offset.click.top = i.offset.click.top,
                this.instance.offset.click.left = i.offset.click.left,
                this.instance.offset.parent.left -= i.offset.parent.left - this.instance.offset.parent.left,
                this.instance.offset.parent.top -= i.offset.parent.top - this.instance.offset.parent.top,
                i._trigger("toSortable", t),
                i.dropped = this.instance.element,
                i.currentItem = i.element,
                this.instance.fromOutside = i),
                this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0,
                this.instance.cancelHelperRemoval = !0,
                this.instance.options.revert = !1,
                this.instance._trigger("out", t, this.instance._uiHash(this.instance)),
                this.instance._mouseStop(t, !0),
                this.instance.options.helper = this.instance.options._helper,
                this.instance.currentItem.remove(),
                this.instance.placeholder && this.instance.placeholder.remove(),
                i._trigger("fromSortable", t),
                i.dropped = !1)
            })
        }
    }),
    e.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var t = e("body")
              , n = e(this).data("ui-draggable").options;
            t.css("cursor") && (n._cursor = t.css("cursor")),
            t.css("cursor", n.cursor)
        },
        stop: function() {
            var t = e(this).data("ui-draggable").options;
            t._cursor && e("body").css("cursor", t._cursor)
        }
    }),
    e.ui.plugin.add("draggable", "opacity", {
        start: function(t, n) {
            var i = e(n.helper)
              , r = e(this).data("ui-draggable").options;
            i.css("opacity") && (r._opacity = i.css("opacity")),
            i.css("opacity", r.opacity)
        },
        stop: function(t, n) {
            var i = e(this).data("ui-draggable").options;
            i._opacity && e(n.helper).css("opacity", i._opacity)
        }
    }),
    e.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var t = e(this).data("ui-draggable");
            t.scrollParent[0] !== document && "HTML" !== t.scrollParent[0].tagName && (t.overflowOffset = t.scrollParent.offset())
        },
        drag: function(t) {
            var n = e(this).data("ui-draggable")
              , i = n.options
              , r = !1;
            n.scrollParent[0] !== document && "HTML" !== n.scrollParent[0].tagName ? (i.axis && "x" === i.axis || (n.overflowOffset.top + n.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? n.scrollParent[0].scrollTop = r = n.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - n.overflowOffset.top < i.scrollSensitivity && (n.scrollParent[0].scrollTop = r = n.scrollParent[0].scrollTop - i.scrollSpeed)),
            i.axis && "y" === i.axis || (n.overflowOffset.left + n.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? n.scrollParent[0].scrollLeft = r = n.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - n.overflowOffset.left < i.scrollSensitivity && (n.scrollParent[0].scrollLeft = r = n.scrollParent[0].scrollLeft - i.scrollSpeed))) : (i.axis && "x" === i.axis || (t.pageY - e(document).scrollTop() < i.scrollSensitivity ? r = e(document).scrollTop(e(document).scrollTop() - i.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < i.scrollSensitivity && (r = e(document).scrollTop(e(document).scrollTop() + i.scrollSpeed))),
            i.axis && "y" === i.axis || (t.pageX - e(document).scrollLeft() < i.scrollSensitivity ? r = e(document).scrollLeft(e(document).scrollLeft() - i.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < i.scrollSensitivity && (r = e(document).scrollLeft(e(document).scrollLeft() + i.scrollSpeed)))),
            r !== !1 && e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(n, t)
        }
    }),
    e.ui.plugin.add("draggable", "snap", {
        start: function() {
            var t = e(this).data("ui-draggable")
              , n = t.options;
            t.snapElements = [],
            e(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
                var n = e(this)
                  , i = n.offset();
                this !== t.element[0] && t.snapElements.push({
                    item: this,
                    width: n.outerWidth(),
                    height: n.outerHeight(),
                    top: i.top,
                    left: i.left
                })
            })
        },
        drag: function(t, n) {
            var i, r, o, s, a, l, c, u, f, d, p = e(this).data("ui-draggable"), h = p.options, g = h.snapTolerance, m = n.offset.left, v = m + p.helperProportions.width, y = n.offset.top, b = y + p.helperProportions.height;
            for (f = p.snapElements.length - 1; f >= 0; f--)
                a = p.snapElements[f].left,
                l = a + p.snapElements[f].width,
                c = p.snapElements[f].top,
                u = c + p.snapElements[f].height,
                a - g > v || m > l + g || c - g > b || y > u + g || !e.contains(p.snapElements[f].item.ownerDocument, p.snapElements[f].item) ? (p.snapElements[f].snapping && p.options.snap.release && p.options.snap.release.call(p.element, t, e.extend(p._uiHash(), {
                    snapItem: p.snapElements[f].item
                })),
                p.snapElements[f].snapping = !1) : ("inner" !== h.snapMode && (i = g >= Math.abs(c - b),
                r = g >= Math.abs(u - y),
                o = g >= Math.abs(a - v),
                s = g >= Math.abs(l - m),
                i && (n.position.top = p._convertPositionTo("relative", {
                    top: c - p.helperProportions.height,
                    left: 0
                }).top - p.margins.top),
                r && (n.position.top = p._convertPositionTo("relative", {
                    top: u,
                    left: 0
                }).top - p.margins.top),
                o && (n.position.left = p._convertPositionTo("relative", {
                    top: 0,
                    left: a - p.helperProportions.width
                }).left - p.margins.left),
                s && (n.position.left = p._convertPositionTo("relative", {
                    top: 0,
                    left: l
                }).left - p.margins.left)),
                d = i || r || o || s,
                "outer" !== h.snapMode && (i = g >= Math.abs(c - y),
                r = g >= Math.abs(u - b),
                o = g >= Math.abs(a - m),
                s = g >= Math.abs(l - v),
                i && (n.position.top = p._convertPositionTo("relative", {
                    top: c,
                    left: 0
                }).top - p.margins.top),
                r && (n.position.top = p._convertPositionTo("relative", {
                    top: u - p.helperProportions.height,
                    left: 0
                }).top - p.margins.top),
                o && (n.position.left = p._convertPositionTo("relative", {
                    top: 0,
                    left: a
                }).left - p.margins.left),
                s && (n.position.left = p._convertPositionTo("relative", {
                    top: 0,
                    left: l - p.helperProportions.width
                }).left - p.margins.left)),
                !p.snapElements[f].snapping && (i || r || o || s || d) && p.options.snap.snap && p.options.snap.snap.call(p.element, t, e.extend(p._uiHash(), {
                    snapItem: p.snapElements[f].item
                })),
                p.snapElements[f].snapping = i || r || o || s || d)
        }
    }),
    e.ui.plugin.add("draggable", "stack", {
        start: function() {
            var t, n = this.data("ui-draggable").options, i = e.makeArray(e(n.stack)).sort(function(t, n) {
                return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(n).css("zIndex"), 10) || 0)
            });
            i.length && (t = parseInt(e(i[0]).css("zIndex"), 10) || 0,
            e(i).each(function(n) {
                e(this).css("zIndex", t + n)
            }),
            this.css("zIndex", t + i.length))
        }
    }),
    e.ui.plugin.add("draggable", "zIndex", {
        start: function(t, n) {
            var i = e(n.helper)
              , r = e(this).data("ui-draggable").options;
            i.css("zIndex") && (r._zIndex = i.css("zIndex")),
            i.css("zIndex", r.zIndex)
        },
        stop: function(t, n) {
            var i = e(this).data("ui-draggable").options;
            i._zIndex && e(n.helper).css("zIndex", i._zIndex)
        }
    })
}(jQuery),
    
    
    
    
function(e) {
    e.fn.shake = function(t) {
        var n = {
            shakes: 2,
            distance: 4,
            duration: 250
        };
        t && e.extend(n, t);
        var i, r;
        return this.each(function() {
            r = e(this),
            i = r.css("position"),
            i && "static" !== i || r.css("position", "relative");
            for (var t = 1; t <= n.shakes; t++)
                r.animate({
                    left: -1 * n.distance
                }, n.duration / n.shakes / 4).animate({
                    left: n.distance
                }, n.duration / n.shakes / 2).animate({
                    left: 0
                }, n.duration / n.shakes / 4)
        })
    }
}(jQuery),
    
    
    
    
    
    
function(e) {
    function t(e, t) {
        if (!(e.originalEvent.touches.length > 1)) {
            e.preventDefault();
            var n = e.originalEvent.changedTouches[0]
              , i = document.createEvent("MouseEvents");
            i.initMouseEvent(t, !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null ),
            e.target.dispatchEvent(i)
        }
    }
    if (e.support.touch = "ontouchend"in document,
    e.support.touch) {
        var n, i = e.ui.mouse.prototype, r = i._mouseInit;
        i._touchStart = function(e) {
            var i = this;
            !n && i._mouseCapture(e.originalEvent.changedTouches[0]) && (n = !0,
            i._touchMoved = !1,
            t(e, "mouseover"),
            t(e, "mousemove"),
            t(e, "mousedown"))
        }
        ,
        i._touchMove = function(e) {
            n && (this._touchMoved = !0,
            t(e, "mousemove"))
        }
        ,
        i._touchEnd = function(e) {
            n && (t(e, "mouseup"),
            t(e, "mouseout"),
            this._touchMoved || t(e, "click"),
            n = !1)
        }
        ,
        i._mouseInit = function() {
            var t = this;
            t.element.bind("touchstart", e.proxy(t, "_touchStart")).bind("touchmove", e.proxy(t, "_touchMove")).bind("touchend", e.proxy(t, "_touchEnd")),
            r.call(t)
        }
    }
}(jQuery),
    
    
    

function(e) {
    "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery)
}(function(e) {
    function t(e) {
        return e
    }
    function n(e) {
        return decodeURIComponent(e.replace(r, " "))
    }
    function i(e) {
        0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return o.json ? JSON.parse(e) : e
        } catch (t) {}
    }
    var r = /\+/g
      , o = e.cookie = function(r, s, a) {
        if (void 0 !== s) {
            if (a = e.extend({}, o.defaults, a),
            "number" == typeof a.expires) {
                var l = a.expires
                  , c = a.expires = new Date;
                c.setDate(c.getDate() + l)
            }
            return s = o.json ? JSON.stringify(s) : String(s),
            document.cookie = [encodeURIComponent(r), "=", o.raw ? s : encodeURIComponent(s), a.expires ? "; expires=" + a.expires.toUTCString() : "", a.path ? "; path=" + a.path : "", a.domain ? "; domain=" + a.domain : "", a.secure ? "; secure" : ""].join("")
        }
        for (var u = o.raw ? t : n, f = document.cookie.split("; "), d = r ? void 0 : {}, p = 0, h = f.length; h > p; p++) {
            var g = f[p].split("=")
              , m = u(g.shift())
              , v = u(g.join("="));
            if (r && r === m) {
                d = i(v);
                break
            }
            r || (d[m] = i(v))
        }
        return d
    }
    ;
    o.defaults = {},
    e.removeCookie = function(t, n) {
        return void 0 !== e.cookie(t) ? (e.cookie(t, "", e.extend(n, {
            expires: -1
        })),
        !0) : !1
    }
}),
function(e) {
    "console"in e || (e.console = {
        error: function() {},
        warn: function() {},
        log: function() {}
    })
}(window);
var sprintf = function(e) {
    function t(e) {
        return "string" == typeof e
    }
    function n(e) {
        return e
    }
    var i = /%[sdj%]/g;
    if (!t(e)) {
        for (var r = [], o = 0; o < arguments.length; o++)
            r.push(n(arguments[o]));
        return r.join(" ")
    }
    var o = 1
      , s = arguments
      , a = s.length
      , l = String(e).replace(i, function(e) {
        if ("%%" === e)
            return "%";
        if (o >= a)
            return e;
        switch (e) {
        case "%s":
            return String(s[o++]);
        case "%d":
            return Number(s[o++]);
        case "%j":
            try {
                return JSON.stringify(s[o++])
            } catch (t) {
                return "[Circular]"
            }
        default:
            return e
        }
    });
    return l
};











!function(window, document, n) {
    function i(e, t, n) {
        t instanceof String && (t = t.split("|"));
        var i = {
            cs: function(e) {
                return Number(1 == e ? 0 : e >= 2 && 4 >= e ? 1 : 2)
            },
            da: function(e) {
                return Number(1 != e)
            },
            de: function(e) {
                return Number(1 != e)
            },
            el: function(e) {
                return Number(1 != e)
            },
            en: function(e) {
                return Number(1 != e)
            },
            es: function(e) {
                return Number(1 != e)
            },
            fi: function(e) {
                return Number(1 != e)
            },
            fr: function(e) {
                return Number(e > 1)
            },
            hu: function(e) {
                return Number(1 != e)
            },
            it: function(e) {
                return Number(1 != e)
            },
            nl: function(e) {
                return Number(1 != e)
            },
            pl: function(e) {
                return Number(1 == e ? 0 : e % 10 >= 2 && 4 >= e % 10 && (10 > e % 100 || e % 100 >= 20) ? 1 : 2)
            },
            pt: function(e) {
                return Number(1 != e)
            },
            ru: function(e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && 4 >= e % 10 && (10 > e % 100 || e % 100 >= 20) ? 1 : 2)
            },
            sr: function(e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && 4 >= e % 10 && (10 > e % 100 || e % 100 >= 20) ? 1 : 2)
            },
            sv: function(e) {
                return Number(1 != e)
            },
            uk: function(e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && 4 >= e % 10 && (10 > e % 100 || e % 100 >= 20) ? 1 : 2)
            },
            zh: function(e) {
                return 0
            },
            ja: function(e) {
                return 0
            },
            be: function(e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && 4 >= e % 10 && (10 > e % 100 || e % 100 >= 20) ? 1 : 2)
            },
            lv: function(e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 != e ? 1 : 2)
            },
            tr: function(e) {
                return Number(e > 1)
            }
        };
        return t[i[n](e)]
    }
    function r(e, t) {
        var n = e.match(/%plural\([^%]+\)%/g);
        if (n && n.length)
            for (var r = 0; r < n.length; r++) {
                var o = n[r]
                  , s = o.match(/[^()|%\]]+/g)
                  , a = s[1]
                  , l = s.slice(2)
                  , c = i(a, l, t);
                e = e.replace(o, c)
            }
        return e
    }
    function o() {
        var t = ""
          , n = window.location.host.split(".");
        return n.length > 2 && (t = n[0]),
        t
    }
    function s() {
        var t = window.location.pathname;
        return 0 != t.indexOf("/") && (t = "/" + t),
        t
    }
    function a() {
        var n = o()
          , i = document.documentElement.getAttribute("lang");
        if (2 == n.length)
            i = n;
        else if ("https:" == window.location.protocol) {
            var r = s().split("/");
            r.length >= 2 && 2 == r[1].length && (i = r[1])
        }
        return i
    }
    function topLimit() {
        var t = "http";
        return "https:" == window.location.protocol && (t += "s"),
        t
    }
    function leftLimit() {
        var t = "ws";
        return "https:" == window.location.protocol && (t += "s"),
        t = "wss"
    }
    
    var u = document.getElementsByTagName("script")
      , f = JSON.parse(u[u.length - 1].innerHTML)
      , d = f.i18n
      , p = "battleship-game.org"
      , h = o()
      , g = a()
      , m = "/services/";
    window.adblock = "undefined" == typeof window.adblock || !1 !== window.adblock;

    var v = function() {
        return window.MozWebSocket && (window.WebSocket = window.MozWebSocket),
        !!("WebSocket"in window && 2 == WebSocket.CLOSING)
    }()
      , y = function() {
        try {
            (new Date).toLocaleTimeString("i")
        } catch (e) {
            return "RangeError" == e.name
        }
        return !1
    }()
      , b = function() {
        return navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate,
        !!navigator.vibrate
    }()
      , x = function() {
        var e = document.createElement("test");
        return e.style.cssText = "pointer-events:auto",
        "auto" === e.style.pointerEvents
    }()
      , _ = window.chrome && window.chrome.webstore
      , w = "undefined" != typeof InstallTrigger
      , C = {
        reachGoal: function(t, n) {
            n = n || {};
            var i = function() {
                return window.yaCounter20587900
            }
              , r = function() {
                var e = i();
                e && e.reachGoal(t, n)
            }
            ;
            i() ? r() : $(window).on("load", r)
        }
    };
    jQuery(function($) {
        function o(e) {
            for (var t in Ct)
                if (e === Ct[t])
                    return t;
            return !1
        }
        function createFieldAndInitializeAdditionalData() {
            var e, t, n = [], i = [];
            shipObjects = [],
            ht.find(".battlefield-table-placeholder").html("");
            for (var r = 0; r < battleFieldSize.height; r++, i = []) {
                FieldBusyOrFreeCellMap[r] = [],
                St[r] = [],
                Dt[r] = [];
                for (var o = 0; o < battleFieldSize.width; o++)
                    t = "&#160;",
                    0 === o && (t += '<div class="marker marker__row">' + (r + 1) + "</div>"),
                    0 === r && (t += '<div class="marker marker__col">' + Et[o] + "</div>"),
                    i.push('<td class="battlefield-cell battlefield-cell__empty"><div class="battlefield-cell-content" data-y="' + r + '" data-x="' + o + '" ><span class="z"></span>' + t + "</div></td>"),
                    FieldBusyOrFreeCellMap[r][o] = marker.FREE,
                    St[r][o] = Ct.INITIALIZED,
                    Dt[r][o] = Ct.INITIALIZED;
                n.push('<tr class="battlefield-row">' + i.join("") + "</tr>")
            }
            e = '<table class="battlefield-table">' + n.join("") + "</table>",
            ht.find(".battlefield-table-placeholder").html(e)
        }
        /**
         * В функцию попал ID корабля который начали перетискивать
         * Удаляет объект по ID из списка объъектов на боевом поле
         * и отмечаем что эти поля освободились в объекте который
         * хранит целую картину свободных и занятых объектов.
         * */
        function deleteObjectsFromShipObjectsListAndMakeFreeNeddedCells(shipId) {
            var newShipObjectsList = [];
            for (var j = 0; j < shipObjects.length; j++) {
                var shipObject = shipObjects[j];
                if (shipObject.id != shipId) {
                    newShipObjectsList.push(shipObject);
                } else {
                    var coords = shipObject.coords;
                    for (var i = 0; i < coords.length; i++) {
                        var deck = coords[i];
                        FieldBusyOrFreeCellMap[deck.y][deck.x] = marker.FREE;
                    }
                }
            }
            shipObjects = newShipObjectsList
        }

        function isCellCorrect(dataY, dataX, dataLength, dataPosition, r, o, checkAroundCells) {
            dataPosition = "h" == dataPosition ? "h" : "v";
            var row, col, cellY = dataY, cellX = dataX, countOfCorrectCells = 0;
            checkAroundCells = checkAroundCells || checkCellsAround;
            var newShipObject = {
                id: o || ze(),
                state: shipStatus.HIDDEN,
                y: dataY,
                x: dataX,
                len: dataLength,
                pos: dataPosition,
                coords: []
            };
            for (var p = 0; p < dataLength; p++) {
                if (dataPosition == "h") {
                    row = cellY;
                    col = cellX + p;
                } else {
                    row = cellY + p;
                    col = cellX;
                }
                if (r) {
                    checkAroundCells(row, col) && countOfCorrectCells++;
                } else {
                    FieldBusyOrFreeCellMap[row][col] = marker.BUSY;
                    newShipObject.coords.push({
                        y: row,
                        x: col,
                        state: kt.HIDDEN
                    });
                }
            }
            if (r) {
                return countOfCorrectCells === dataLength;
            }
            shipObjects.push(newShipObject);
            return newShipObject.id;
            // return r ? r ? f === dataLength : void 0 : (shipObjects.push(newShipObject), newShipObject.id)
        }
        function k(e) {
            e = parseInt(e, 10);
            var t = Re(0, battleFieldSize.height - 1)
              , n = Re(0, battleFieldSize.width - 1)
              , i = 0 === Re(0, 1) ? "h" : "v";
            isCellCorrect(t, n, e, i, !0) ? (isCellCorrect(t, n, e, i),
            T()) : k(e)
        }
        function T() {
            _t.length && k(_t.shift())
        }
        function N() {
            _t = [];
            for (var e = 0; e < collocation.length; e++)
                for (var t = collocation[e], n = 0; n < t.count; n++)
                    _t.push(t.size);
            T()
        }
        function E(e) {
            function t(e) {
                for (var t = {}, n = 0; n < collocation.length; n++) {
                    var i = collocation[n];
                    t[i.size] = i.count
                }
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    t[r.length]--
                }
                for (var o in t)
                    if (0 != t[o])
                        return !1;
                return !0
            }
            if (!e) {
                var n = "ships__" + (bt ? "classic" : "default");
                "undefined" != typeof localStorage && "undefined" != typeof localStorage[n] && "" != localStorage[n] && (e = JSON.parse(localStorage[n]))
            }
            if (e) {
                var i = t(e);
                if (!i)
                    return void N();
                for (var r, o, s, a, l, c = 0; c < e.length; c++)
                    l = e[c],
                    r = l[0].y,
                    o = l[0].x,
                    s = l.length,
                    a = "h",
                    s > 1 && l[0].x === l[1].x && (a = "v"),
                    isCellCorrect(r, o, s, a)
            } else
                N()
        }
        function isCellFreeCore(row, col) {
            return !!FieldBusyOrFreeCellMap[row][col] == marker.BUSY
        }
        function isCellFree(row, col) {
            return areIndexesWithinThePermissibleRange(row, col) && !isCellFreeCore(row, col)
        }
        function areIndexesWithinThePermissibleRange(row, col) {
            return row >= 0 && row < battleFieldSize.height && col >= 0 && col < battleFieldSize.width ? !0 : !1
        }
        function areCellAroundFree(row, col) {
            for (var r in Tt) {
                var n = row + Tt[r][0];
                var i = col + Tt[r][1];
                if (areIndexesWithinThePermissibleRange(n, i) && isCellFreeCore(n, i)) {
                    return true;
                }
            }
            return false;
        }
        function cellsAroundAreNotFree(row, col) {
            return !areCellAroundFree(row, col)
        }
        function checkCellsAround(row, col) {
            return areIndexesWithinThePermissibleRange(row, col)
                && isCellFree(row, col)
                && cellsAroundAreNotFree(row, col);
        }
        function H(e, t) {
            for (var n, i, r, o = 0; o < e.length; o++) {
                r = e[o];
                for (var s in Tt)
                    n = r.y + Tt[s][0],
                    i = r.x + Tt[s][1],
                    I(n, i, t, !0)
            }
        }
        function O(e, t, n) {
            var i, r;
            for (var o in Nt)
                i = e + Nt[o][0],
                r = t + Nt[o][1],
                I(i, r, n, !0)
        }
        function I(e, t, n, i) {
            if (qe(et.shoothint)) {
                var r = n.find("tr:nth-child(" + (e + 1) + ") td:nth-child(" + (t + 1) + ")");
                return r.length && r.is(".battlefield-cell__empty") ? (r.removeClass("battlefield-cell__empty").addClass("battlefield-cell__miss"),
                i && r.addClass("battlefield-cell__miss__auto"),
                r.find(".battlefield-cell-content").unbind("click", ee),
                !0) : !1
            }
        }
        function M(e) {
            if ("undefined" != typeof e)
                for (var t, n, i = 0; i < e.length; i++)
                    t = e[i].y,
                    n = e[i].x,
                    mt.find("tr:nth-child(" + (t + 1) + ") td:nth-child(" + (n + 1) + ")").addClass("battlefield-cell__undiscovered")
        }
        function W(e, t, n, i) {
            O(e, t, i)
        }
        function F(e, t, n, i) {
            function r(e) {
                for (var t, n = 0; n < e.length; n++)
                    t = e[n],
                    i.find("tr:nth-child(" + (t.y + 1) + ") td:nth-child(" + (t.x + 1) + ")").addClass("battlefield-cell__done");
                if (i.is(".battlefield__rival")) {
                    var r = q(e);
                    V(r.y, r.x, r.len, r.pos, i)
                }
                H(e, i),
                je(e, i)
            }
            var o = [];
            n[e][t] === Ct.KILLED && !function(e, t) {
                if (o.push({
                    y: e,
                    x: t
                }),
                "undefined" != typeof n[e][t - 1] && n[e][t - 1] > Ct.MISSED || "undefined" != typeof n[e][t + 1] && n[e][t + 1] > Ct.MISSED)
                    for (var i, s = 1, a = -1, l = !1; !l; s++)
                        i = t + a * s,
                        "undefined" != n[e][i] && n[e][i] > Ct.MISSED ? o.push({
                            y: e,
                            x: i
                        }) : 0 > a ? (a = 1,
                        s = 0) : l = !0;
                else if ("undefined" != typeof n[e - 1] && "undefined" != typeof n[e - 1][t] && n[e - 1][t] > Ct.MISSED || "undefined" != typeof n[e + 1] && "undefined" != typeof n[e + 1][t] && n[e + 1][t] > Ct.MISSED)
                    for (var c, s = 1, a = -1, l = !1; !l; s++)
                        c = e + a * s,
                        "undefined" != typeof n[c] && "undefined" != n[c][t] && n[c][t] > Ct.MISSED ? o.push({
                            y: c,
                            x: t
                        }) : 0 > a ? (a = 1,
                        s = 0) : l = !0;
                r(o)
            }(e, t)
        }
        function q(e) {
            for (var t, n, i, r = {}, o = 0, s = 0, a = 0; a < e.length; a++)
                i = e[a],
                "undefined" == typeof t && "undefined" == typeof n && (t = i.y,
                n = i.x),
                t > i.y && (t = i.y),
                n > i.x && (n = i.x),
                o += i.y,
                s += i.x;
            return r.y = t,
            r.x = n,
            r.coords = e,
            r.len = e.length,
            o / r.len === r.y ? r.pos = "h" : r.pos = "v",
            r
        }
        function findShipInShipObjectsById(shipObjects, shipId) {
            var shipObject = null;
            for (var i = 0; i < shipObjects.length && (shipObject = shipObjects[i], shipObject.id !== shipId); i++);
            return shipObject
        }
        function z(e, t) {
            for (var n in e)
                B(e[n], t)
        }
        function B(e, t) {
            var n = e.coords[0];
            V(n.y, n.x, e.len, e.pos, t, e.id),
            X(e, t)
        }
        function $(e) {
            var t = findShipInShipObjectsById(shipObjects, e);
            t && X(t, gt)
        }

        /**
         * Используя ID определяет установлен ли корабыль на боле.
         * Если установлен то освобождает клетки на которыех он установлен
         * путем перемены классов с busy на empty */
        function findShipByIdAndChangeFromBusyToEmptyForTdsUnderShip(shipId) {
            var shipObject = findShipInShipObjectsById(shipObjects, shipId);
            if (shipObject) {
                changeFromBusyToEmptyForTdsUnderShip(shipObject, gt);
            }
        }
        function X(e, t) {
            for (var n, i = e.coords, r = 0; r < i.length; r++)
                n = i[r],
                t.find("tr:nth-child(" + (n.y + 1) + ") td:nth-child(" + (n.x + 1) + ")").removeClass("battlefield-cell__empty").addClass("battlefield-cell__busy")
        }
        function changeFromBusyToEmptyForTdsUnderShip(shipObject, battleField) {
            var deckCoords = shipObject.coords;
            for (var i = 0; i < i.length; i++) {
                var deck = deckCoords[i];
                var cell = battleField.find("tr:nth-child(" + (deck.y + 1) + ") td:nth-child(" + (deck.x + 1) + ")");
                cell.removeClass("battlefield-cell__busy");
                cell.addClass("battlefield-cell__empty");
            }
        }
        function G() {
            var lines = i(".port-lines");
            lines.html("");
            for (var i = 0; i < collocation.length; i++) {
                for (var n = collocation[i], r = i('<div class="port-line clearfix" />'), o = 0; o < n.count; o++) {
                    var portShip = i('<div class="port-ship" />')
                      , a = J(n.size, "h", ze());
                    portShip.attr("style", a.attr("style")).append(a),
                    r.append(portShip)
                }
                lines.append(r)
            }
        }
        function J(size, position, id) {
            id = id || "";
            var r = 1; 
            var length = size; 
            var s = {
                right: 0,
                bottom: size - 1
            };
            "h" == position && (r = size, length = 1, s.right = size - 1, s.bottom = 0);
            var a = 2;
            return $('<div data-id="' + id + '" data-length="' + size + '" data-position="' + position + '" class="ship-box ship-box__' + position + '" style="width: ' + r * a + "em; height: " + length * a + "em; padding-right: " + s.right + "px; padding-bottom: " + s.bottom + 'px;" />')
        }
        function V(e, t, n, i, r, o) {
            var s = J(n, i, o);
            return r.find("tr:nth-child(" + (e + 1) + ") td:nth-child(" + (t + 1) + ")").find(".battlefield-cell-content").append(s),
            s
        }
        function Q(shipObjects, t) {
            var n, i, r, o = [];
            for (var s in shipObjects) {
                n = shipObjects[s],
                r = n.coords,
                i = [];
                for (var a = 0; a < r.length; a++) {
                    var l = {
                        y: r[a].y,
                        x: r[a].x
                    };
                    t && (l = [r[a].y, r[a].x]),
                    i.push(l)
                }
                o.push(i)
            }
            return o
        }
        function K(t) {
            var n = new RegExp("^" + Ze + "[a-zA-Z0-9]{12}$")
              , i = new RegExp("^[a-zA-Z0-9]{12}$")
              , r = "";
            return t = t || "",
            r = t.match(n) ? t : t.match(i) ? Ze + t : Ze + ze(),
            window.name = r,
            r
        }
        function Z() {
            var t = K(window.name);
            return t.substr(Ze.length)
        }
        function ee() {
            var e = $(this)
              , t = e.attr("data-x")
              , n = e.attr("data-y");
            mt.hasClass("battlefield__processed") || ie(n, t, e)
        }
        function te(e) {
            mt.hasClass("battlefield__processed") || (mt.addClass("battlefield__processed"),
            e.closest(".battlefield-cell").addClass("battlefield-cell__processed"))
        }
        function ne() {
            mt.removeClass("battlefield__processed"),
            mt.find(".battlefield-cell__processed").removeClass("battlefield-cell__processed")
        }
        function ie(e, t, n) {
            e = parseInt(e, 10),
            t = parseInt(t, 10),
            "undefined" != typeof Dt[e] && "undefined" != Dt[e][t] && Dt[e][t] === Ct.INITIALIZED && (Dt[e][t] = Ct.PROCESSED,
            te(n));
            var i = function(e) {
                ne(),
                he(e)
            }
              , r = function(e) {
                ne(),
                me(e)
            }
            ;
            pe({
                command: "register-shoot",
                shoot: {
                    y: e,
                    x: t
                }
            }, !0, i, r)
        }
        function re(e) {
            var t = $(".chat-state__typing");
            e ? t.addClass("chat-state__invisible") : t.removeClass("chat-state__invisible")
        }
        function oe(e) {
            return e = $.trim(e),
            "" != e ? (C.reachGoal("chatMessage"),
            st = !1,
            pe({
                command: "chat-message",
                message: e
            }, !0, he, me),
            !0) : !1
        }
        function se() {
            ft = !0,
            $(".body").removeClass("body__game_freeze").addClass("body__game_over")
        }
        function ae() {
            dt = !0,
            $(".body").addClass("body__game_freeze")
        }
        function le() {
            mt.find(".battlefield-cell-content").bind("click", ee);
            var shipCollocation = Q(shipObjects);
            ce(shipCollocation),
            "off" == $.cookie("websocket") && (v = !1);
            var t = s().replace(/^\/[a-z]{2}\//, "/")
              , n = 0 === t.toLowerCase().indexOf("/id") ? t.substr(3) : ""
              , r = function(e) {
                Ge = e.id,
                K(Ge),
                Ae(),
                Le(),
                he(e)
            }
            ;
            pe({
                command: "create",
                connect: n,
                ships: shipCollocation,
                type: bt ? "classic" : "default"
            }, !0, r, me)
        }
        function ce(e) {
            if (e = e || Q(shipObjects),
            "undefined" != typeof localStorage)
                try {
                    var t = "ships__" + (bt ? "classic" : "default")
                      , n = JSON.stringify(e);
                    localStorage[t] = n
                } catch (i) {}
        }
        function ue() {
            if ("undefined" != typeof localStorage)
                try {
                    var e = "ships__" + (bt ? "classic" : "default") + "__archive"
                      , t = JSON.stringify(Q(shipObjects, !0))
                      , n = localStorage[e] ? JSON.parse(localStorage[e]) : [];
                    -1 == n.indexOf(t) && n.push(t),
                    localStorage[e] = JSON.stringify(n)
                } catch (i) {}
        }
        function fe() {
            if (clearTimeout(Je),
            !ft) {
                var e = 15e3;
                "undefined" == typeof navigator.onLine || navigator.onLine || (e = 1e3),
                Je = setTimeout(function() {
                    pe({
                        command: "ping"
                    }, !0, he, me),
                    fe()
                }, e)
            }
        }
        function de() {
            "undefined" != typeof Ue && pe(Ue.obj, Ue.async, Ue.callback, Ue.fallback)
        }
        function pe(t, n, r, o) {
            if (r = r || function() {}, o = o || function() {}, !ft) {
                var s = Z();
                Ue = {
                    obj: t,
                    async: n,
                    callback: r,
                    fallback: o
                };
                var a = JSON.stringify(t);
                if (v) {
                    var l = leftLimit(), u = p;
                    "ws" == l && (u = (h || g) + "." + u);

                    var f = WebSocket.OPEN || 1, d = l + "://" + u + "/ws/" + s;
                    if ($e && $e.socket && $e.socket.readyState === f) {
                        if ($e.socket.url === d)
                            return $e.callback = r,
                            $e.fallback = o,
                            void $e.socket.send(a);
                        try {
                            $e.socket.onclose = null ,
                            $e.socket.onerror = null ,
                            $e.socket && $e.socket.readyState === f && $e.socket.close()
                        } catch (y) {}
                    }
                    $e = {
                        socket: new WebSocket(d),
                        callback: r,
                        fallback: o
                    },
                    $e.socket.onopen = function(e) {
                        this.send(a)
                    }
                    ,
                    $e.socket.onerror = function(e) {
                        this.readyState === f && this.close(),
                        C.reachGoal("webSocketError")
                    }
                    ,
                    $e.socket.onclose = function(t) {
                        if ("undefined" != typeof t.code && 1e3 != t.code) {
                            if ("undefined" != typeof navigator.onLine && !navigator.onLine)
                                return void this.fallback.call(window, {
                                    status: 0
                                });
                            this.fallback.call(window, {
                                status: 502
                            }),
                            it++,
                            it >= rt && (v = !1,
                            $.cookie("websocket", "off", {
                                expires: 1,
                                path: "/",
                                domain: "." + p
                            }),
                            C.reachGoal("fromWebSocketToLongPolling")),
                            C.reachGoal("webSocketClose")
                        }
                    }
                    .bind($e),
                    $e.socket.onmessage = function(t) {
                        var n = JSON.parse(t.data);
                        fe(),
                        200 != n.status ? this.fallback.call(window, n) : this.callback.call(window, n)
                    }
                    .bind($e)
                } else
                    n = "undefined" == typeof n || n ? !0 : !1,
                    $e && 4 != $e.readyState && $e.abort && $e.abort(),
                    clearTimeout(Xe),
                    $e = $.ajax({
                        cache: !1,
                        type: "post",
                        dataType: "json",
                        contentType: "application/json",
                        url: m + s,
                        data: a,
                        async: n,
                        error: o,
                        success: r
                    }),
                    Xe = setTimeout(function() {
                        $e.abort(),
                        de()
                    }, 25e3)
            }
        }
        function he(e) {
            var t = !1
              , n = r(sprintf(d.whoIsOnline, e.online, e.online), d.lang);
            if (e.online && $(".online_count").text(n),
            e.events) {
                e.events.sort(function(e, t) {
                    return e.id - t.id
                });
                var o = e.events.shift();
                be(o),
                ge(o),
                t = !0
            }
            t || ge()
        }
        function ge(e) {
            if (Ge && !ft) {
                var t = {
                    command: "waiting-for-event"
                };
                "undefined" != typeof e && (t.reid = e.id),
                pe(t, !0, he, me)
            }
        }
        function me(e) {
            if (!ft)
                switch (e.status) {
                case 0:
                    setTimeout(function() {
                        (!v && 0 === $e.readyState || v && $e.socket && $e.socket.readyState == $e.socket.CLOSED) && (C.reachGoal("reconnect"),
                        de())
                    }, 1e3);
                    break;
                case 501:
                    C.reachGoal("gameError"),
                    xe("game-error"),
                    se();
                    break;
                case 502:
                    clearTimeout(Ye),
                    nt > tt ? Ye = setTimeout(function() {
                        tt++,
                        de()
                    }, 500) : (C.reachGoal("serverError"),
                    xe("server-error"),
                    se());
                    break;
                case 408:
                case 504:
                    ge();
                    break;
                default:
                    ge()
                }
        }
        function ve() {
            function e() {
                document.title = Ke.replace(/\s/g, "�"),
                setTimeout(function() {
                    document.title = Ke
                }, 250)
            }
            !function n() {
                clearTimeout(Qe),
                at ? e() : (ut && (document.title = document.title == Ke ? "..." : Ke),
                Qe = setTimeout(n, 1e3))
            }()
        }
        function ye(e) {
            b && navigator.vibrate(e)
        }
        function be(e) {
            var t = e.name + "," + e.id;
            if ("undefined" == typeof ot[t] && (ot[t] = !1,
            ve(),
            !ft)) {
                $(".body__game_over").removeClass("body__game_over");
                var n = e.name
                  , r = e.payload
                  , o = !0;
                switch (n) {
                case "rival-leave":
                    C.reachGoal("rivalLeave"),
                    se(),
                    dt && (o = !1);
                    break;
                case "waiting-for-rival":
                    $(".leave").removeClass("none"),
                    $(".battlefield-start-hint").removeClass("none"),
                    gt.addClass("battlefield__wait");
                    break;
                case "chat-message-typing":
                    re();
                    break;
                case "chat-message-stop-typing":
                    re(!0);
                    break;
                case "chat-message":
                    "rival" == r.owner && (re(!0),
                    ke("chat")),
                    we(r);
                    break;
                case "game-started-move-off":
                case "game-started-move-on":
                    ke("game_started"),
                    $(".chat-gap").removeClass("none"),
                    $(".leave").removeClass("none"),
                    $(".battlefield-start").addClass("none"),
                    $(".battlefield-stat").removeClass("none"),
                    mt.removeClass("none"),
                    ut = !0,
                    ft = !1,
                    dt = !1,
                    /-on$/.test(n) ? (mt.removeClass("battlefield__wait"),
                    gt.addClass("battlefield__wait")) : (mt.addClass("battlefield__wait"),
                    gt.removeClass("battlefield__wait")),
                    He();
                    break;
                case "move-on":
                    ne(),
                    mt.removeClass("battlefield__wait"),
                    gt.addClass("battlefield__wait"),
                    _e(r);
                    break;
                case "move-off":
                    mt.addClass("battlefield__wait"),
                    gt.removeClass("battlefield__wait"),
                    _e(r);
                    break;
                case "game-over-win":
                    ue();
                case "game-over-lose":
                    ke(n.replace(/game-over-/, "")),
                    _e(r),
                    M(r.undiscovered),
                    C.reachGoal("gameOver"),
                    ae()
                }
                o && xe(n),
                ot[t] = !0
            }
        }
        function xe(e, t) {
            var n = $(".notification__" + e);
            (n.length || t) && ($(".notification").addClass("none"),
            n.removeClass("none"),
            De(n.find(".notification-message").text()))
        }
        function _e(e) {
            if ("undefined" != typeof e) {
                var t = !1
                  , n = gt
                  , i = St
                  , r = e["register-self-shoot"] || e["register-rival-shoot"]
                  , s = "battlefield-cell__miss";
                if ("undefined" != typeof e["register-self-shoot"] && (t = !0),
                r && "undefined" != r.state) {
                    if (r.state >= Ct.WOUNDED && (s = "battlefield-cell__hit"),
                    r.state === Ct.KILLED && (s += " battlefield-cell__done"),
                    t && (n = mt,
                    i = Dt),
                    n.find(".battlefield-cell__last").removeClass("battlefield-cell__last"),
                    s += " battlefield-cell__last",
                    i[r.y][r.x] >= Ct.MISSED)
                        return;
                    i[r.y][r.x] = r.state;
                    var a = n.find("tr:nth-child(" + (r.y + 1) + ") td:nth-child(" + (r.x + 1) + ")");
                    a.removeClass("battlefield-cell__empty").addClass(s),
                    t && (a.find(".battlefield-cell-content").unbind("click", ee),
                    ne()),
                    r.state === Ct.KILLED ? (F(r.y, r.x, i, n),
                    ye(250)) : r.state === Ct.WOUNDED && (W(r.y, r.x, i, n),
                    ye(100)),
                    ke("shoot_" + o(r.state).toLowerCase())
                }
            }
        }
        function we(t) {
            var n, r = $(".chat-message__holder");
            if (y)
                n = new Date(t.date).toLocaleTimeString(navigator.language, {
                    hour12: !1
                });
            else {
                var o = new Date(t.date).toLocaleTimeString();
                o = o.toUpperCase(),
                n = o.match(/\d\d?:\d\d:\d\d/)[0];
                var s = n.split(":")
                  , a = s[0]
                  , l = s[1]
                  , c = s[2];
                -1 != o.indexOf("AM") && 12 == a && (a = 0),
                -1 != o.indexOf("PM") && 12 > a && (a = parseInt(a, 10) + 12),
                10 > a && (a = "0" + a),
                n = [a, l, c].join(":")
            }
            var u = $('<li class="chat-message chat-message__' + t.owner + '"><span class="chat-message-time">' + n + '</span> <span class="chat-message-text">' + Be(t.message) + "</span></li>");
            u.insertAfter(r),
            $(window).trigger("resize")
        }
        function Ce() {
            if ("undefined" == typeof Audio)
                return !1;
            for (var e, t = new Audio, n = ["ogg", "mp3"], i = 0; i < n.length; i++)
                if (t.canPlayType("audio/" + n[i])) {
                    e = n[i];
                    break
                }
            return "undefined" != typeof e ? e : !1
        }
        function ke(t) {
            if (qe(et.sound))
                try {
                    var n, r, o = $(".sound__" + t), s = window.navigator.userAgent;
                    "game_started" == t || "chat" == t ? n = o : (r = o.clone(),
                    n = r),
                    /(ipad|iphone)/i.test(s) ? o.get(0).play() : n.get(0).play()
                } catch (a) {}
        }
        function Te() {
            qe(et.notifications) && "denied" != Notification.permission && Notification.requestPermission(function(e) {
                "permission"in Notification || (Notification.permission = e)
            })
        }
        function Ne() {
            return Notification && "granted" == Notification.permission
        }
        function Ee() {
            return Notification && "denied" == Notification.permission
        }
        function Se() {
            return Notification && "default" == Notification.permission
        }
        function De(e) {
            if (qe(et.notifications) && !at && Ne()) {
                var t = new Notification(ct,{
                    body: e
                });
                lt.push(t)
            }
        }
        function Pe() {
            for (var e = 0; e < lt.length; e++)
                lt[e].close();
            lt = []
        }
        function Ae() {
            $(window).bind("beforeunload", function(e) {
                if (Ge && !ft) {
                    if (!pt && !dt)
                        return $(".leave").attr("data-confirm");
                    pe({
                        command: "leave"
                    }, !1)
                }
            }),
            $(window).unload(function() {
                Ge && (ut ? ft || (pe({
                    command: "leave"
                }, !1),
                C.reachGoal("leaveWhilePlaying", {
                    exit: pt ? "click" : "close"
                })) : C.reachGoal("leaveWithoutPlaying", {
                    exit: pt ? "click" : "close"
                }))
            })
        }
        function Le() {
            $(window).bind("online", function() {
                C.reachGoal("online"),
                $(".body").removeClass("body__offline")
            }),
            $(window).bind("offline", function() {
                $(".body").addClass("body__offline")
            })
        }
        function je(e, t) {
            for (var n, i = e.length, r = [], o = 0; i > o; o++)
                r.push(e[o].y + "," + e[o].x);
            if (n = r.join(";"),
            !t.find(".battlefield-stat .ship[data-coords='" + n + "']").length) {
                var s = t.find(".battlefield-stat .ship-type__len_" + i + " .ship").filter(":not(.ship__killed)").last();
                s.attr("data-coords", n).addClass("ship__killed")
            }
        }
        function He() {
            for (var e = [], t = 0; t < collocation.length; t++) {
                for (var n = collocation[t], r = [], o = 0; o < n.count; o++) {
                    for (var s = [], a = 0; a < n.size; a++)
                        s.push('<span class="ship-part"></span>');
                    r.push('<span class="ship">' + s.join("") + "</span>")
                }
                e.push('<div class="ship-type ship-type__len_' + n.size + '">' + r.join("") + "</div>")
            }
            $(".battlefield-stat").html('<div class="ship-types">' + e.join("") + "</div>").removeClass("none")
        }
        function getCellSizeObject() {
            var e = $(".battlefield-cell-content").last();
            return {
                height: e.height(),
                width: e.width()
            }
        }
        function turnShip() {
            var e = $(this);
            if (!e.closest(".port").length) {
                var t = e.css("height")
                  , n = e.css("width");
                if (t !== n) {
                    var r = e.closest(".battlefield-cell-content")
                      , o = parseInt(r.attr("data-y"), 10)
                      , s = parseInt(r.attr("data-x"), 10)
                      , a = parseInt(e.attr("data-length"), 10)
                      , l = e.attr("data-position")
                      , c = "v" == l ? "h" : "v"
                      , d = e.attr("data-id");
                    if (findShipByIdAndChangeFromBusyToEmptyForTdsUnderShip(d),
                    deleteObjectsFromShipObjectsListAndMakeFreeNeddedCells(d),
                    isCellCorrect(o, s, a, c, !0)) {
                        var p = e.css("padding-right")
                          , h = e.css("padding-bottom");
                        e.css({
                            height: n,
                            width: t,
                            paddingRight: h,
                            paddingBottom: p
                        });
                        var g = "v";
                        parseInt(t, 10) > parseInt(n, 10) && (g = "h"),
                        e.removeClass("ship-box__h ship-box__v").addClass("ship-box__" + g),
                        e.attr("data-position", g),
                        isCellCorrect(o, s, a, c, !1, d),
                        $(d)
                    } else {
                        isCellCorrect(o, s, a, l, !1, d),
                        $(d);
                        var m = {
                            duration: 250
                        };
                        e = $(".ship-box[data-id=" + d + "]"),
                        e.addClass("ship-box__placeholder_error"),
                        clearTimeout(Lt),
                        e.stop(!0).shake(m),
                        Lt = setTimeout(function() {
                            e.removeClass("ship-box__placeholder_error")
                        }, m.duration)
                    }
                }
            }
        }




        function Me() {
            var e = $(".ship-box__draggable");
            e.draggable("destroy"),
            e.unbind("click"),
            e.removeClass("ship-box__draggable")
        }
        function We() {
            function e(e) {
                var t = e.closest(".battlefield-cell-content");
                if (t.length) {
                    var n = parseInt(t.attr("data-y"), 10)
                      , i = parseInt(t.attr("data-x"), 10)
                      , r = e.attr("data-id")
                      , o = parseInt(e.attr("data-length"), 10)
                      , s = e.attr("data-position");
                    isCellCorrect(n, i, o, s, !1, r),
                    $(r)
                }
            }
            $(".ship-box:not(.ship-box__draggable)").draggable({
                create: function(e, t) {
                    $(this).addClass("ship-box__draggable"),
                    $(this).bind("click", turnShip)
                },
                start: function(e, t) {
                    /*
                     * Освобождает поле от объекта и освобождает карту занятых клеточек
                     */
                    var shipElem = t.helper;
                    var shipId = shipElem.attr("data-id");
                    findShipByIdAndChangeFromBusyToEmptyForTdsUnderShip(shipId);
                    deleteObjectsFromShipObjectsListAndMakeFreeNeddedCells(shipId);
                },
                stop: function(t, originalShipJQ) {
                    var originalShip = originalShipJQ.helper;
                    originalShip.removeClass("ship-box__transparent");

                    var placeholder = $(".ship-box__placeholder");
                    if (placeholder.length) {
                        placeholder.before(originalShip);
                        placeholder.remove();
                        e(originalShip);
                        $(".placeships-variant__hands_inactive").removeClass("placeships-variant__hands_inactive");
                        setTimeout(function() {
                            $(".port .ship-box").length || ($(".battlefields").removeClass("battlefields__handly"),
                                $(".battlefield-start").removeClass("none"))
                        }, 500);
                    } else {
                        e(originalShip);
                        originalShip.css({
                            left: 0,
                            top: 0,
                            margin: "-2px"
                        })
                    }
                },
                drag: function(e, originalShip) {
                    var originalShipJQ = $(this);

                    /* Создали и подготовили клон.
                     * Клон будет прилипить (он же placeholder)
                     * Удалили ненужные для клона классы */
                    var cloneShipElemJS = originalShipJQ.clone(false);
                    cloneShipElemJS.removeClass("ui-draggable ui-draggable-dragging ship-box__transparent");
                    cloneShipElemJS.addClass("ship-box__placeholder"); //Делает плейсхолдер зеленым
                    cloneShipElemJS.css({left: 0, top: 0, margin: "-2px"});

                    /* Удалить зеленую область старого клона(placeholder) */
                    var cellContent = $(".battlefield__self .battlefield-cell-content");
                    cellContent.find(".ship-box__placeholder").remove();

                    var cellSize = getCellSizeObject();
                    var shipTopCenter = originalShip.offset.top + cellSize.height / 2;
                    var shipLeftCenter = originalShip.offset.left + cellSize.width / 2;

                    originalShipJQ.removeClass("ship-box__transparent");

                    /* Перебор всех клеток на поле по очереди
                     * определение на какую клетку собирается приземлиться
                     * корабль и если все клетки для корабля доступны то
                     * установить в эту клетку клон а оргинальный корабль сделать невидимым. */
                    cellContent.each(function() {
                        var cell = $(this);
                        var cellOffsets = cell.offset();
                        var cellWidth = cell.width();
                        var cellHeight = cell.height();
                        if (shipLeftCenter >= cellOffsets.left && shipLeftCenter <= cellOffsets.left + cellWidth && shipTopCenter >= cellOffsets.top && shipTopCenter <= cellOffsets.top + cellHeight) {
                            var dataY = parseInt(cell.attr("data-y"), 10);
                            var dataX = parseInt(cell.attr("data-x"), 10);
                            var dataLength = parseInt(originalShipJQ.attr("data-length"), 10);
                            var dataPosition = originalShipJQ.attr("data-position");
                            if (isCellCorrect(dataY, dataX, dataLength, dataPosition, true, n)) {
                                cell.append(cloneShipElemJS);
                                originalShipJQ.addClass("ship-box__transparent");
                            }
                            return false;
                        }
                    })
                }
            })
        }





        function Fe() {
            function n() {
                x && $(".body").addClass("body__with-pointerevents")
            }
            function r() {
                v && (C.reachGoal("supportWebSocket"),
                "off" == $.cookie("websocket") && C.reachGoal("websocketOff")),
                b && C.reachGoal("supportVibrate")
            }
            function o() {
                function e() {
                    var e = JSON.stringify(Q(shipObjects, !0))
                      , t = "dock-table__current"
                      , n = $(".dock-table");
                    n.each(function() {
                        var n = $(this).attr("data-coords")
                          , r = n === e;
                        r ? $(this).addClass(t) : $(this).removeClass(t)
                    })
                }
                function n() {
                    e(),
                    $(".dock").removeClass("none"),
                    $(".placeships-variant__archive").addClass("placeships-variant__archive_inactive");
                    var t = $(".battlefields");
                    t.is(".battlefields__handly") && (t.removeClass("battlefields__handly"),
                    $(".placeships-variant__hands_inactive").removeClass("placeships-variant__hands_inactive"),
                    createFieldAndInitializeAdditionalData(),
                    E(),
                    z(shipObjects, gt),
                    $(".battlefield-start").removeClass("none"))
                }
                function r() {
                    $(".dock").addClass("none"),
                    $(".placeships-variant__archive").removeClass("placeships-variant__archive_inactive")
                }
                var o = bt ? "ships__classic__archive" : "ships__default__archive";
                if ("undefined" != typeof localStorage && "undefined" != typeof localStorage[o] && "" != localStorage[o]) {
                    var s = JSON.parse(localStorage[o]);
                    if (s.length) {
                        $(".placeships-variant__archive").removeClass("none"),
                        s.forEach(function(e, t) {
                            for (var n = JSON.parse(e), r = $('<table class="dock-table" data-coords="' + e + '"></table>'), o = 0; o < battleFieldSize.height; o++) {
                                for (var s = $("<tr></tr>"), a = 0; a < battleFieldSize.width; a++) {
                                    var l = $('<td class="dock-table-cell"></td>');
                                    0 === o && 0 === a && l.html('<span class="dock-table-cell-position-gap"><span class="dock-table-cell-position">' + (t + 1) + ")</span></span>"),
                                    s.append(l)
                                }
                                r.append(s)
                            }
                            $(".dock-sets").append(r),
                            n.forEach(function(e) {
                                e.forEach(function(e) {
                                    var t = r.find("tr:nth-child(" + (e[0] + 1) + ") td:nth-child(" + (e[1] + 1) + ")");
                                    t.addClass("dock-table-cell__marked")
                                })
                            })
                        }),
                        $(".placeships-variant__archive .placeships-variant-link").on("click", function() {
                            n()
                        });
                        var l = function(e) {
                            ($(e.target).is(".dock-closer") || !$(e.target).closest(".dock").length && !$(e.target).closest(".placeships-variant__archive").length) && r()
                        }
                        ;
                        $(document).on("click", l),
                        $(".dock-table").on("click", function() {
                            var e = JSON.parse($(this).attr("data-coords"));
                            e.forEach(function(e, t) {
                                e.forEach(function(t, n) {
                                    e[n] = {
                                        y: t[0],
                                        x: t[1]
                                    }
                                })
                            }),
                            createFieldAndInitializeAdditionalData(),
                            E(e),
                            z(shipObjects, gt),
                            We(),
                            r(),
                            C.reachGoal("chooseShipsFromArchive")
                        })
                    }
                }
            }
            function c() {
                2 == g.length && $.cookie("lang", g, {
                    expires: 365,
                    path: "/",
                    domain: "." + p
                })
            }
            function u() {
                Ke = document.title,
                document.onfocusin = function(e) {
                    "undefined" == typeof e && null == event.toElement && (at = !0,
                    Pe())
                }
                ,
                document.onfocusout = function(e) {
                    "undefined" == typeof e && null == event.toElement && (at = !1)
                }
                ,
                $(window).focus(function() {
                    at = !0,
                    Pe()
                }).blur(function() {
                    at = !1
                })
            }
            function f() {
                var e = $(".chat-teletype");
                e.bind("keydown", function(e) {
                    13 == e.keyCode ? oe($(this).val()) && $(this).val("") : st || (st = !0,
                    pe({
                        command: "chat-message-typing"
                    }, !0, he, me))
                }),
                e.bind("keyup blur", function(e) {
                    if (st) {
                        var t = "blur" == e.type ? 0 : 3e3;
                        13 != e.keyCode && (clearTimeout(Ve),
                        Ve = setTimeout(function() {
                            st = !1,
                            pe({
                                command: "chat-message-stop-typing"
                            }, !0, he, me)
                        }, t))
                    }
                })
            }
            function d() {
                function e(e) {
                    createFieldAndInitializeAdditionalData(),
                    e ? N() : E(),
                    z(shipObjects, gt),
                    We(),
                    $(".battlefields").removeClass("battlefields__handly"),
                    $(".battlefield-start").removeClass("none")
                }
                function t() {
                    createFieldAndInitializeAdditionalData(),
                    $(".battlefields").addClass("battlefields__handly"),
                    $(".battlefield-start").addClass("none"),
                    G(),
                    We()
                }
                function n() {
                    $(this).off("click", n),
                    $(this).addClass("battlefield-start-button__disabled"),
                    $(".placeships").addClass("none"),
                    Me(),
                    xe("connect-to-server"),
                    r(),
                    le()
                }
                $(".placeships-variant__hands").click(function() {
                    t(),
                    $(this).addClass("placeships-variant__hands_inactive")
                }),
                $(".placeships-variant__randomly").click(function() {
                    e(!0),
                    $(".placeships-variant__hands_inactive").removeClass("placeships-variant__hands_inactive")
                }),
                e(),
                $(".battlefield-start-button").on("click", n)
            }
            function m() {
                function t() {
                    qe(et.compactchat) && ($(".chat-gap").addClass("chat-gap__compact"),
                    $(window).trigger("resize"))
                }
                function n() {
                    var e = Ce();
                    e && $(".setting__sound").removeClass("none")
                }
                function r() {
                    if ("Notification"in window) {
                        var t = $(".setting__notifications");
                        t.removeClass("none"),
                        Ee() && (t.find(".setting-input").prop("disabled", !0),
                        t.attr("title", t.attr("data-title-blocked"))),
                        Se() && qe(et.notifications) && (et.notifications = "off",
                        t.find(".setting-input").prop("checked", !1))
                    }
                }
                $(".setting").each(function() {
                    var t = $(this).attr("data-name")
                      , n = "setting__" + t
                      , r = !1
                      , o = $("#" + n);
                    $.cookie(n) && o.attr("checked", "on" == $.cookie(n)),
                    o.click(function() {
                        et[t] = $(this).is(":checked") ? "on" : "off";
                        var o = "." + p;
                        "notifications" == t && ("https" == topLimit() ? (o = p,
                        r = !0) : o = h + "." + p),
                        $.cookie(n, et[t], {
                            expires: 365,
                            path: "/",
                            domain: o,
                            secure: r
                        }),
                        "sound" == t && "on" == et[t] && ke("click"),
                        "notifications" == t && "on" == et[t] && Te(),
                        "compactchat" == t && ("on" == et[t] ? $(".chat-gap").addClass("chat-gap__compact") : $(".chat-gap").removeClass("chat-gap__compact"),
                        $(window).trigger("resize"))
                    }),
                    et[t] = o.is(":checked")
                }),
                n(),
                t(),
                r()
            }
            function y() {
                function e() {
                    $(".battlefield-start-choose_rival-variant").removeClass("battlefield-start-choose_rival-variant__active"),
                    $(".battlefield-start-choose_rival-variant-link").each(function() {
                        if ($(this).attr("href") == s() && ($(this).closest(".battlefield-start-choose_rival-variant").addClass("battlefield-start-choose_rival-variant__active"),
                        $(this).is(".battlefield-start-choose_rival-variant-link__connect"))) {
                            var e = $(this).closest(".battlefield-start-choose_rival-variant").find(".battlefield-start-choose_rival-variant-url-input");
                            e.val(location.href).attr("data-value", location.href),
                            e.on("click", function() {
                                $(this).trigger("select")
                            }),
                            e.on("keydown keyup", function(e) {
                                var t = e.ctrlKey || e.metaKey;
                                t && 67 == e.keyCode || e.preventDefault()
                            }),
                            e.on("touchstart", function(e) {
                                e.preventDefault(),
                                $(this).trigger("focus"),
                                $(this).get(0).setSelectionRange(0, 9999)
                            })
                        }
                    })
                }
                function t() {
                    var e = s()
                      , t = e.replace(/^\/[a-z]{2}\//, "/");
                    0 == t.toLowerCase().indexOf("/id") && (e = e.replace(/\/$/, ""),
                    $(".battlefield-start-ships_types-gap").removeClass("none"),
                    -1 != e.indexOf("/classic") ? ($(".battlefield-start-ships_type__classic").addClass("battlefield-start-ships_type__active"),
                    $(".battlefield-start-ships_type-link").attr("href", e),
                    $(".battlefield-start-ships_type__default .battlefield-start-ships_type-link").attr("href", e.replace(/\/classic\/?/, ""))) : ($(".battlefield-start-ships_type__default").addClass("battlefield-start-ships_type__active"),
                    $(".battlefield-start-ships_type-link").attr("href", e),
                    $(".battlefield-start-ships_type__classic .battlefield-start-ships_type-link").attr("href", e + "/classic")))
                }
                !function() {
                    var e = "";
                    "https" == topLimit() && (e = "/" + g);
                    var t = s().replace(/^\/[a-z]{2}\//, "/")
                      , n = $(".battlefield-start-choose_rival-variant-link");
                    n.attr("href", e + "/");
                    var r = $(".battlefield-start-choose_rival-variant-link__connect");
                    0 === t.toLowerCase().indexOf("/id") ? r.attr("href", e + t) : r.attr("href", e + "/id" + Re(1e7, 99999999))
                }(),
                $(".battlefield-start-choose_rival-variant-link").click(function() {
                    ce()
                }),
                e(),
                t()
            }
            function _() {
                $(".restart").click(function() {
                    location.reload(!0)
                }),
                $(".leave-link").attr("href", location.href).on("click", function(e) {
                    function t(e) {
                        location.reload(!0)
                    }
                    e.preventDefault(),
                    pt = !0,
                    pe({
                        command: "leave"
                    }, !1, t, t)
                })
            }
            n(),
            c(),
            y(),
            m(),
            d(),
            f(),
            u(),
            o(),
            _()
        }
        function qe(e) {
            return !/^(off|false|undefined|null|0)?$/i.test(e + "")
        }
        function Re(e, t) {
            return Math.floor((t - e + 1) * Math.random() + e)
        }
        function ze() {
            for (var e, t = 12, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i = "", r = 0; t > r; r++)
                e = Math.floor(Math.random() * n.length),
                i += n.substring(e, e + 1);
            return i
        }
        function Be(e) {
            return $("<div />").text(e).html()
        }
        var $e, Ue, Xe, Ye, Ge, Je, Ve, Qe, Ke, Ze = "battleship__", 
            et = {}, 
            tt = 0, 
            nt = 10, 
            it = 0, 
            rt = 5, 
            ot = {}, 
            st = !1,
            at = !0, 
            lt = [], 
            ct = d.title, 
            ut = !1, 
            ft = !1, 
            dt = !1, 
            pt = !1, 
            ht = $(".battlefield"),
            gt = ht.filter(".battlefield__self"), 
            mt = ht.filter(".battlefield__rival"), 
            battleFieldSize = {
                height: 10,
                width: 10
            }, 
            marker = {
                FREE: 0,
                BUSY: 1
            }, 
            bt = -1 != location.pathname.indexOf("/classic"), 
            collocation = [
                {
                    size: 4,
                    count: 1
                }, 
                {
                    size: 3,
                    count: 2
                }, 
                {
                    size: 2,
                    count: 3
                }, 
                {
                    size: 1,
                    count: 4
                }
            ];
        
        
            bt && (collocation = [{
                size: 5,
                count: 1
            }, {
                size: 4,
                count: 1
            }, {
                size: 3,
                count: 2
            }, {
                size: 2,
                count: 1
            }]);
        var _t = []
          , shipStatus = {
            HIDDEN: -1,
            WOUNDED: 0,
            KILLED: 1
        }
          , Ct = {
            INITIALIZED: -3,
            PROCESSED: -2,
            MISSED: -1,
            WOUNDED: 0,
            KILLED: 1
        }
          , kt = {
            HIDDEN: 0,
            FOUNDED: 1
        }
          , Tt = [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]]
          , Nt = [[-1, 1], [1, 1], [1, -1], [-1, -1]]
          , Et = d.letters.split(",")
          , St = []
          , Dt = []
          , shipObjects = []
          , FieldBusyOrFreeCellMap = []
          , Lt = 0;
        Fe(),
        function() {
            function t() {
                r.removeClass("sda__fixed");
                var t = r.offset().top + s + a;
                $(window).height() > t && r.addClass("sda__fixed"),
                n || ($(".sda__vh").removeClass("sda__vh"),
                n = !0)
            }
            try {
                var n = !1
                  , r = $(".sda");
                if (!r.length)
                    return;
                var o = r.find(".sda-block")
                  , s = r.height()
                  , a = parseInt(o.css("padding-top"), 10);
                $(window).resize(t),
                t()
            } catch (l) {}
        }(),
        function() {
            function n(e) {
                var r = $(".sound:not([data-inited])").first();
                r.length ? (r.on("canplay", function() {
                    $(this).attr("data-inited", "yes")
                }),
                r.get(0).play(),
                r.get(0).pause()) : $(document).off("touchstart", n)
            }
            var r = window.navigator.userAgent;
            /(ipad|iphone)/i.test(r) && $(document).on("touchstart", n)
        }(),
        function() {
            _ && $(".copyright-link__chrome").removeClass("none")
        }(),
        function() {
            w && ($(".copyright-link__marketplace").removeClass("none"),
            -1 != window.location.search.indexOf("from=fmp") && $.cookie("fmp", "1", {
                expires: 3650,
                path: "/",
                domain: "." + p
            }),
            "undefined" != typeof $.cookie("fmp") && $(".body").addClass("body__fmp"))
        }(),
        function() {
            "https:" == window.location.protocol && $(".body").addClass("body__ssl")
        }(),
        function() {
            -1 != window.location.href.indexOf("vk.com") && $(".body").addClass("body__vk")
        }(),
        function() {
            $(".body-iframe a[href^='mailto:']").on("click", function() {
                return window.top.location = $(this).attr("href"),
                !1
            })
        }(),
        function() {
            function e() {
                var e = $("." + o);
                e.length && (e.removeClass(o).attr("style", ""),
                r.removeClass(s))
            }
            function n() {
                var e = $(".langs");
                e.is("." + o) || (e.addClass(o),
                r.addClass(s))
            }
            var r = $(".body")
              , o = "langs__opened"
              , s = "body__with-" + o;
            $(".lang__selected .lang-link").on("click", function(t) {
                var r = $(t.target);
                t.preventDefault(),
                r.closest("." + o).length ? e() : n()
            });
            var a = ($("html").attr("data-accept-language") || "").split(",");
            if (a.length && a[0].length)
                for (var l = 0; l < a.length; l++) {
                    var c = a[l]
                      , u = $(".lang__" + c);
                    u.length && u.addClass("lang__priority")
                }
            $(document).click(function(t) {
                var n = $(t.target);
                n.closest(".langs").length || e()
            }),
            $(document).keyup(function(t) {
                27 == t.keyCode && e()
            })
        }(),
        function() {
            function e(e) {
                var t = parseFloat(e, 10);
                return isNaN(t) ? 0 : t
            }
            function t(t) {
                var n = 3650;
                if ("cancel" == t) {
                    var r = e($.cookie("review-cancel-count")) + 1;
                    $.cookie("review-cancel-count", r, {
                        expires: 3650,
                        path: "/",
                        domain: "." + p
                    }),
                    n = 30 * r
                }
                $.cookie("review", t, {
                    expires: n,
                    path: "/",
                    domain: "." + p
                })
            }
            function n() {
                return "undefined" != typeof $.cookie("review")
            }
            function r() {
                return e($.cookie("visit")) > 50
            }
            var o = e($.cookie("visit"));
            if ($.cookie("visit", o + 1, {
                expires: 3650,
                path: "/",
                domain: "." + p
            }),
            (_ || w) && r() && !n() && !$(".body-iframe").length && "undefined" == typeof $.cookie("fmp")) {
                var s = $(".body")
                  , a = $(".notification__init")
                  , l = $(_ ? ".notification__cws" : ".notification__fmp");
                l.find(".notification-submit__accept").on("click", function() {
                    t("accept"),
                    location.href = $(this).attr("data-target")
                }),
                l.find(".notification-submit__cancel").on("click", function() {
                    t("cancel"),
                    s.removeClass("body__game_over"),
                    a.removeClass("none"),
                    l.addClass("none")
                }),
                s.addClass("body__game_over"),
                a.addClass("none"),
                l.removeClass("none"),
                $(".body-sda").addClass("none");
            }
        }(),
        function() {
            window.adblock && C.reachGoal("hasAdBlock")
        }()
    })
}(window, document);
