var App = function() {
    "use strict";
    var t, e, i, r, n, o, a, l, s, c, d, u, p, h, f, g, m, b, v, y, w, k, S = {
            assetsPath: "assets",
            imgPath: "img",
            jsPath: "js",
            libsPath: "lib",
            leftSidebarSlideSpeed: 200,
            enableSwipe: !0,
            swipeTreshold: 100,
            scrollTop: !0,
            openLeftSidebarClass: "open-left-sidebar",
            openRightSidebarClass: "open-right-sidebar",
            removeLeftSidebarClass: "am-nosidebar-left",
            openLeftSidebarOnClick: !1,
            openLeftSidebarOnClickClass: "am-left-sidebar--click",
            enableLeftSidebarOpenSubMenuDelay: !1,
            enableLeftSidebarOpenSubMenuDelayClass: "am-left-sidebar--delay",
            leftSidebarOpenSubMenuDelay: 500,
            leftSidebarCloseSubMenuDelay: 400,
            transitionClass: "am-animate",
            openSidebarDelay: 400,
            syncSubMenuOnHover: !1
        },
        A = {},
        C = {};

    function x(t) {
        t.update()
    }

    function T(t) {
        t.destroy()
    }

    function M(t) {
        return new PerfectScrollbar(t[0], {
            wheelPropagation: !1
        })
    }

    function _() {
        var i = $(".sidebar-elements > li > a", r),
            n = $(".sidebar-elements > li > ul", r),
            c = !(!r.hasClass(S.openLeftSidebarOnClickClass) && !S.openLeftSidebarOnClick),
            d = !(!r.hasClass(S.enableLeftSidebarOpenSubMenuDelayClass) && !S.enableLeftSidebarOpenSubMenuDelay);

        function u(t) {
            var e = $(".sidebar-elements > li", r);
            void 0 !== t && (e = t), $.each(e, function(t, e) {
                var i = $(this).find("> a span").html(),
                    r = $(this).find("> ul"),
                    n = $("> li", r),
                    o = (i = $('<li class="title">' + i + "</li>"), $('<li class="nav-items"><div class="am-scroller"><div class="content"><ul></ul></div></div></li>'));
                !r.find("> li.title").length > 0 && (r.prepend(i), n.appendTo(o.find(".content ul")), o.appendTo(r))
            })
        }

        function f() {
            t.removeClass(S.openLeftSidebarClass).addClass(S.transitionClass), L()
        }

        function g() {
            $("ul.visible", r).removeClass("visible").parent().removeClass("open")
        }

        function m(t, e, i) {
            var r = $(t).parent(),
                n = r.find("> ul"),
                o = n.find(".am-scroller"),
                a = r.hasClass("open"),
                s = "touchstart" == e.type;
            $.isXs() || (d && !s || g(), (!i || i && !a) && (d && !i ? l = setTimeout(function() {
                r.is(":hover") && (g(), r.addClass("open"), n.addClass("visible"))
            }, S.leftSidebarOpenSubMenuDelay) : (r.addClass("open"), n.addClass("visible"))), n.removeClass("hide")), void 0 !== p && T(p), void 0 !== p && p && p.nodeName || (p = M(o)), i && r.hasClass("parent") ? e.preventDefault() : S.syncSubMenuOnHover && u(r)
        }(u(), $(".am-toggle-left-sidebar").on("click", function(e) {
            s && t.hasClass(S.openLeftSidebarClass) ? f() : s || (t.addClass(S.openLeftSidebarClass + " " + S.transitionClass), s = !0), e.stopPropagation(), e.preventDefault()
        }), $(document).on("touchstart mousedown focusin", function(e) {
            !$(e.target).closest(r).length && t.hasClass(S.openLeftSidebarClass) ? f() : $(e.target).closest(r).length || $.isXs() || $("ul.visible", r).removeClass("visible").parent().removeClass("open")
        }), c ? i.on("click", function(t) {
            $.isXs() || m(this, t, !0)
        }) : (i.on("mouseover", function(t) {
            var e = $(this).parent();
            clearTimeout(o), clearTimeout(a), clearTimeout(l), e.hasClass("open") || m(this, t, !1)
        }), i.on("focus", function(t) {
            m(this, t, !1)
        }), i.on("touchstart", function(t) {
            $.isXs() || m(this, t, !0)
        }), i.on("mouseleave", function() {
            var t = $(this).parent(),
                e = t.find("> ul");
            clearTimeout(l), $.isXs() || (e.length > 0 ? o = setTimeout(function() {
                e.is(":hover") || g()
            }, S.leftSidebarCloseSubMenuDelay) : t.removeClass("open"))
        }), n.on({
            mouseenter: function() {
                clearTimeout(o), clearTimeout(a)
            },
            mouseleave: function() {
                var t = $(this),
                    e = t.parent();
                a = setTimeout(function() {
                    e.is(":hover") || (t.removeClass("visible"), e.removeClass("open"))
                }, S.leftSidebarCloseSubMenuDelay)
            }
        })), $(".sidebar-elements li a", r).on("click", function(t) {
            if ($.isXs()) {
                var e, i = $(this),
                    r = S.leftSidebarSlideSpeed,
                    n = i.parent(),
                    o = i.next();
                (e = n.siblings(".open")) && e.find("> ul:visible").slideUp({
                    duration: r,
                    complete: function() {
                        e.toggleClass("open"), $(this).removeAttr("style").removeClass("visible")
                    }
                }), n.hasClass("open") ? o.slideUp({
                    duration: r,
                    complete: function() {
                        n.toggleClass("open"), $(this).removeAttr("style").removeClass("visible")
                    }
                }) : o.slideDown({
                    duration: r,
                    complete: function() {
                        n.toggleClass("open"), $(this).removeAttr("style").addClass("visible")
                    }
                }), i.next().is("ul") && t.preventDefault(), void 0 !== p && T(p)
            }
        }), $("li.active", r).parents(".parent").addClass("active"), e.hasClass("am-fixed-sidebar")) && ($(".am-left-sidebar > .content").wrap('<div class="am-scroller-fixed-left-sidebar"></div>'), h = M($(".am-scroller-fixed-left-sidebar")), $(window).resize(function() {
            x(h)
        }));
        $(window).resize(function() {
            P(function() {
                $.isXs() || void 0 !== p && x(p)
            }, 500, "am_check_phone_classes")
        })
    }

    function E() {
        var e = $(".am-scroller-announcement"),
            i = $(".am-scroller-chat"),
            r = $(".am-scroller-faqs"),
            o = $(".am-scroller-ticket");

        function a() {
            t.removeClass(S.openRightSidebarClass).addClass(S.transitionClass), L()
        }
        n.length > 0 && ($(".am-toggle-right-sidebar").on("click", function(e) {
            s && t.hasClass(S.openRightSidebarClass) ? a() : s || (t.addClass(S.openRightSidebarClass + " " + S.transitionClass), s = !0), e.stopPropagation(), e.preventDefault()
        }), $(document).on("mousedown touchstart", function(e) {
            !$(e.target).closest(n).length && t.hasClass(S.openRightSidebarClass) && a()
        })), void 0 !== m && m && m.nodeName || (m = M(e)), void 0 !== b && b && b.nodeName || (b = M(i)), void 0 !== v && v && v.nodeName || (v = M(r)), void 0 !== y && y && y.nodeName || (y = M(o)), $(window).resize(function() {
            P(function() {
                x(m), x(b), x(v), x(y)
            }, 500)
        }), $('a[data-toggle="tab"]', n).on("shown.bs.tab", function(t) {
            x(m), x(b), x(v), x(y)
        })
    }

    function L() {
        s = !0, setTimeout(function() {
            s = !1
        }, S.openSidebarDelay)
    }

    function D() {
        var t = $(".am-right-sidebar .tab-pane.chat"),
            e = $(".chat-contacts", t),
            i = $(".chat-window", t),
            r = $(".chat-messages", i),
            n = $(".content > ul", r),
            o = $(".am-scroller-messages", r),
            a = $(".chat-input", i),
            l = $("input", a),
            s = $(".send-msg", a);

        function c(t, e) {
            var i = $('<li class="' + (e ? "self" : "friend") + '"></li>');
            "" != t && ($('<div class="msg">' + t + "</div>").appendTo(i), i.appendTo(n), o.stop().animate({
                scrollTop: o.prop("scrollHeight")
            }, 900, "swing"), x(w))
        }
        $(".user a", e).on("click", function(e) {
            t.hasClass("chat-opened") || (t.addClass("chat-opened"), void 0 !== w && w && w.nodeName || (w = M(o))), e.preventDefault()
        }), $(".title .return", i).on("click", function(e) {
            t.hasClass("chat-opened") && t.removeClass("chat-opened")
        }), l.keypress(function(t) {
            var e = t.keyCode ? t.keyCode : t.which,
                i = $(this).val();
            "13" == e && (c(i, !0), $(this).val("")), t.stopPropagation()
        }), s.on("click", function() {
            c(l.val(), !0), l.val("")
        })
    }

    function Y(t) {
        var e = $("<div>", {
                class: t
            }).appendTo("body"),
            i = e.css("background-color");
        return e.remove(), i
    }
    var R, P = (R = {}, function(t, e, i) {
        i || (i = "x1x2x3x4"), R[i] && clearTimeout(R[i]), R[i] = setTimeout(t, e)
    });
    return {
        conf: S,
        color: A,
        scroller: C,
        init: function(o) {
            var a, l;
            e = $(".am-wrapper"), i = $(".main-content", e), r = $(".am-left-sidebar", e), n = $(".am-right-sidebar", e), t = $("body"), s = !1, c = $("html").hasClass("rtl"), d = $(".am-icons-nav"), u = $(".am-scroller-aside"), $.extend(S, o), r.length && _(), FastClick.attach(document.body), n.length && E(), D(), S.enableSwipe && function() {
                var r = !1;

                function o() {
                    s || e.hasClass(S.removeLeftSidebarClass) || (t.addClass(S.openLeftSidebarClass + " " + S.transitionClass), s = !0)
                }

                function a() {
                    !s && n.length > 0 && (t.addClass(S.openRightSidebarClass + " " + S.transitionClass), s = !0)
                }
                i.swipe({
                    allowPageScroll: "vertical",
                    preventDefaultEvents: !1,
                    fallbackToMouseEvents: !1,
                    swipeRight: function(t) {
                        c ? a() : o()
                    },
                    swipeLeft: function(t) {
                        c ? o() : a()
                    },
                    swipeStatus: function(t, e) {
                        switch (e) {
                            case "start":
                                s && (r = !0);
                                break;
                            case "end":
                                if (r) return r = !1, !1;
                                break;
                            case "cancel":
                                r = !1
                        }
                    },
                    threshold: S.swipeTreshold
                })
            }(), r.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                t.removeClass(S.transitionClass)
            }), S.scrollTop && ((a = $('<div class="am-scroll-top"></div>')).appendTo("body"), $(window).on("scroll", function() {
                $(this).scrollTop() > 220 ? a.fadeIn(500) : a.fadeOut(500)
            }), a.on("touchstart mouseup", function(t) {
                $("html, body").animate({
                    scrollTop: 0
                }, 500), t.preventDefault()
            })), A.primary = Y("clr-primary"), A.success = Y("clr-success"), A.info = Y("clr-info"), A.warning = Y("clr-warning"), A.danger = Y("clr-danger"), A.alt1 = Y("clr-alt1"), A.alt2 = Y("clr-alt2"), A.alt3 = Y("clr-alt3"), A.alt4 = Y("clr-alt4"), $(".am-connections").on("click", function(t) {
                t.stopPropagation()
            }), d.length && (f = M($(".am-scroller-top-messages")), g = M($(".am-scroller-notifications"))), u.length && (l = u, $.isSm() || (k = M(u)), $(window).resize(function() {
                $.isSm() ? void 0 !== k && T(k) : l.hasClass("ps") ? x(k) : void 0 !== k && k && k.nodeName || (k = M(u))
            })), C.am_scroller = p, C.fixed_left_sidebar_scroll = h, C.notifications_scroll = g, C.top_messages_scroll = f, C.announcement_scroll = m, C.chat_scroll = b, C.faqs_scroll = v, C.ticket_scroll = y, C.messages_scroll = w, C.aside_scroll = k, C.updateScroller = x, C.destroyScroller = T, C.initScroller = M, $(".am-icons-nav .dropdown").on("shown.bs.dropdown", function() {
                x(f), x(g)
            }), $('[data-toggle="tooltip"]').tooltip(), $('[data-toggle="popover"]').popover(), $(".modal").on("show.bs.modal", function() {
                $("html").addClass("am-modal-open")
            }), $(".modal").on("hidden.bs.modal", function() {
                $("html").removeClass("am-modal-open")
            }), $(".am-close").on("click", function() {
                var t = "";
                $(this).parents(".card").length ? t = $(this).parents(".card") : $(this).parents(".widget").length && (t = $(this).parents(".widget")), t.fadeOut("slow", function() {
                    t.remove()
                })
            })
        },
        leftSidebarInit: _,
        rightSidebarInit: E,
        closeSubMenu: function() {
            var t = $(".sidebar-elements > li > ul:visible", r);
            t.addClass("hide"), setTimeout(function() {
                t.removeClass("hide")
            }, 50)
        }
    }
}();

function FastClick(t, e) {
    "use strict";
    var i;
    if (e = e || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = e.touchBoundary || 10, this.layer = t, this.tapDelay = e.tapDelay || 200, !FastClick.notNeeded(t)) {
        for (var r = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], n = 0, o = r.length; n < o; n++) this[r[n]] = a(this[r[n]], this);
        deviceIsAndroid && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), t.addEventListener("mouseup", this.onMouse, !0)), t.addEventListener("click", this.onClick, !0), t.addEventListener("touchstart", this.onTouchStart, !1), t.addEventListener("touchmove", this.onTouchMove, !1), t.addEventListener("touchend", this.onTouchEnd, !1), t.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (t.removeEventListener = function(e, i, r) {
            var n = Node.prototype.removeEventListener;
            "click" === e ? n.call(t, e, i.hijacked || i, r) : n.call(t, e, i, r)
        }, t.addEventListener = function(e, i, r) {
            var n = Node.prototype.addEventListener;
            "click" === e ? n.call(t, e, i.hijacked || (i.hijacked = function(t) {
                t.propagationStopped || i(t)
            }), r) : n.call(t, e, i, r)
        }), "function" == typeof t.onclick && (i = t.onclick, t.addEventListener("click", function(t) {
            i(t)
        }, !1), t.onclick = null)
    }

    function a(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
}
var deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0,
    deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent),
    deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent),
    deviceIsIOSWithBadTarget = deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),
    deviceIsBlackBerry10 = navigator.userAgent.indexOf("BB10") > 0;
FastClick.prototype.needsClick = function(t) {
        "use strict";
        switch (t.nodeName.toLowerCase()) {
            case "button":
            case "select":
            case "textarea":
                if (t.disabled) return !0;
                break;
            case "input":
                if (deviceIsIOS && "file" === t.type || t.disabled) return !0;
                break;
            case "label":
            case "video":
                return !0
        }
        return /\bneedsclick\b/.test(t.className)
    }, FastClick.prototype.needsFocus = function(t) {
        "use strict";
        switch (t.nodeName.toLowerCase()) {
            case "textarea":
                return !0;
            case "select":
                return !deviceIsAndroid;
            case "input":
                switch (t.type) {
                    case "button":
                    case "checkbox":
                    case "file":
                    case "image":
                    case "radio":
                    case "submit":
                        return !1
                }
                return !t.disabled && !t.readOnly;
            default:
                return /\bneedsfocus\b/.test(t.className)
        }
    }, FastClick.prototype.sendClick = function(t, e) {
        "use strict";
        var i, r, n, o;
        document.activeElement && document.activeElement !== t && document.activeElement.blur(), o = e.changedTouches[0], (n = document.createEvent("MouseEvents")).initMouseEvent("mousedown", !0, !0, window, 1, o.screenX, o.screenY, o.clientX, o.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, t.dispatchEvent(n), (r = document.createEvent("MouseEvents")).initMouseEvent("mouseup", !0, !0, window, 1, o.screenX, o.screenY, o.clientX, o.clientY, !1, !1, !1, !1, 0, null), r.forwardedTouchEvent = !0, t.dispatchEvent(r), (i = document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(t), !0, !0, window, 1, o.screenX, o.screenY, o.clientX, o.clientY, !1, !1, !1, !1, 0, null), i.forwardedTouchEvent = !0, t.dispatchEvent(i)
    }, FastClick.prototype.determineEventType = function(t) {
        "use strict";
        return deviceIsAndroid && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
    }, FastClick.prototype.focus = function(t) {
        "use strict";
        var e;
        deviceIsIOS && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus()
    }, FastClick.prototype.updateScrollParent = function(t) {
        "use strict";
        var e, i;
        if (!(e = t.fastClickScrollParent) || !e.contains(t)) {
            i = t;
            do {
                if (i.scrollHeight > i.offsetHeight) {
                    e = i, t.fastClickScrollParent = i;
                    break
                }
                i = i.parentElement
            } while (i)
        }
        e && (e.fastClickLastScrollTop = e.scrollTop)
    }, FastClick.prototype.getTargetElementFromEventTarget = function(t) {
        "use strict";
        return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
    }, FastClick.prototype.onTouchStart = function(t) {
        "use strict";
        var e, i, r;
        if (t.targetTouches.length > 1) return !0;
        if (e = this.getTargetElementFromEventTarget(t.target), i = t.targetTouches[0], deviceIsIOS) {
            if ((r = window.getSelection()).rangeCount && !r.isCollapsed) return !0;
            if (!deviceIsIOS4) {
                if (i.identifier && i.identifier === this.lastTouchIdentifier) return t.preventDefault(), !1;
                this.lastTouchIdentifier = i.identifier, this.updateScrollParent(e)
            }
        }
        return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, this.touchStartX = i.pageX, this.touchStartY = i.pageY, t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(), !0
    }, FastClick.prototype.touchHasMoved = function(t) {
        "use strict";
        var e = t.changedTouches[0],
            i = this.touchBoundary;
        return Math.abs(e.pageX - this.touchStartX) > i || Math.abs(e.pageY - this.touchStartY) > i
    }, FastClick.prototype.onTouchMove = function(t) {
        "use strict";
        return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0)
    }, FastClick.prototype.findControl = function(t) {
        "use strict";
        return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    }, FastClick.prototype.onTouchEnd = function(t) {
        "use strict";
        var e, i, r, n, o, a = this.targetElement;
        if (!this.trackingClick) return !0;
        if (t.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
        if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, i = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, deviceIsIOSWithBadTarget && (o = t.changedTouches[0], (a = document.elementFromPoint(o.pageX - window.pageXOffset, o.pageY - window.pageYOffset) || a).fastClickScrollParent = this.targetElement.fastClickScrollParent), "label" === (r = a.tagName.toLowerCase())) {
            if (e = this.findControl(a)) {
                if (this.focus(a), deviceIsAndroid) return !1;
                a = e
            }
        } else if (this.needsFocus(a)) return t.timeStamp - i > 100 || deviceIsIOS && window.top !== window && "input" === r ? (this.targetElement = null, !1) : (this.focus(a), this.sendClick(a, t), deviceIsIOS && "select" === r || (this.targetElement = null, t.preventDefault()), !1);
        return !(!deviceIsIOS || deviceIsIOS4 || !(n = a.fastClickScrollParent) || n.fastClickLastScrollTop === n.scrollTop) || (this.needsClick(a) || (t.preventDefault(), this.sendClick(a, t)), !1)
    }, FastClick.prototype.onTouchCancel = function() {
        "use strict";
        this.trackingClick = !1, this.targetElement = null
    }, FastClick.prototype.onMouse = function(t) {
        "use strict";
        return !(this.targetElement && !t.forwardedTouchEvent && t.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) && (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), 1))
    }, FastClick.prototype.onClick = function(t) {
        "use strict";
        var e;
        return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === t.target.type && 0 === t.detail || ((e = this.onMouse(t)) || (this.targetElement = null), e)
    }, FastClick.prototype.destroy = function() {
        "use strict";
        var t = this.layer;
        deviceIsAndroid && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)), t.removeEventListener("click", this.onClick, !0), t.removeEventListener("touchstart", this.onTouchStart, !1), t.removeEventListener("touchmove", this.onTouchMove, !1), t.removeEventListener("touchend", this.onTouchEnd, !1), t.removeEventListener("touchcancel", this.onTouchCancel, !1)
    }, FastClick.notNeeded = function(t) {
        "use strict";
        var e, i, r;
        if (void 0 === window.ontouchstart) return !0;
        if (i = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
            if (!deviceIsAndroid) return !0;
            if (e = document.querySelector("meta[name=viewport]")) {
                if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
                if (i > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
            }
        }
        if (deviceIsBlackBerry10 && (r = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/))[1] >= 10 && r[2] >= 3 && (e = document.querySelector("meta[name=viewport]"))) {
            if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
            if (document.documentElement.scrollWidth <= window.outerWidth) return !0
        }
        return "none" === t.style.msTouchAction
    }, FastClick.attach = function(t, e) {
        "use strict";
        return new FastClick(t, e)
    }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
        "use strict";
        return FastClick
    }) : "undefined" != typeof module && module.exports ? (module.exports = FastClick.attach, module.exports.FastClick = FastClick) : window.FastClick = FastClick,
    function(t) {
        "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], t) : t("undefined" != typeof module && module.exports ? require("jquery") : jQuery)
    }(function(t) {
        "use strict";

        function e(e) {
            return !e || void 0 !== e.allowPageScroll || void 0 === e.swipe && void 0 === e.swipeStatus || (e.allowPageScroll = s), void 0 !== e.click && void 0 === e.tap && (e.tap = e.click), e || (e = {}), e = t.extend({}, t.fn.swipe.defaults, e), this.each(function() {
                var T = t(this),
                    M = T.data(x);
                M || (M = new function(e, T) {
                    function M(e) {
                        if (!(!0 === St.data(x + "_intouch") || t(e.target).closest(T.excludedElements, St).length > 0)) {
                            var a = e.originalEvent ? e.originalEvent : e;
                            if (!a.pointerType || "mouse" != a.pointerType || 0 != T.fallbackToMouseEvents) {
                                var l, s = a.touches,
                                    c = s ? s[0] : a;
                                return At = y, s ? Ct = s.length : !1 !== T.preventDefaultEvents && e.preventDefault(), pt = 0, ht = null, ft = null, wt = null, gt = 0, mt = 0, bt = 0, vt = 1, yt = 0, (d = {})[i] = et(i), d[r] = et(r), d[n] = et(n), d[o] = et(o), kt = d, q(), K(0, c), !s || Ct === T.fingers || T.fingers === b || O() ? (xt = ot(), 2 == Ct && (K(1, s[1]), mt = bt = rt($t[0].start, $t[1].start)), (T.swipeStatus || T.pinchStatus) && (l = P(a, At))) : l = !1, !1 === l ? (P(a, At = S), l) : (T.hold && (Dt = setTimeout(t.proxy(function() {
                                    St.trigger("hold", [a.target]), T.hold && (l = T.hold.call(St, a, a.target))
                                }, this), T.longTapThreshold)), Q(!0), null)
                            }
                        }
                        var d
                    }

                    function _(e) {
                        var d, u, p, h, f, v, y, A, C = e.originalEvent ? e.originalEvent : e;
                        if (At !== k && At !== S && !J()) {
                            var $, x = C.touches,
                                M = x ? x[0] : C,
                                _ = Z(M);
                            if (Tt = ot(), x && (Ct = x.length), T.hold && clearTimeout(Dt), At = w, 2 == Ct && (0 == mt ? (K(1, x[1]), mt = bt = rt($t[0].start, $t[1].start)) : (Z(x[1]), bt = rt($t[0].end, $t[1].end), $t[0].end, $t[1].end, wt = vt < 1 ? l : a), vt = (bt / mt * 1).toFixed(2), yt = Math.abs(mt - bt)), Ct === T.fingers || T.fingers === b || !x || O()) {
                                if (ht = nt(_.start, _.end), ft = nt(_.last, _.end), function(t, e) {
                                        if (!1 !== T.preventDefaultEvents)
                                            if (T.allowPageScroll === s) t.preventDefault();
                                            else {
                                                var a = T.allowPageScroll === c;
                                                switch (e) {
                                                    case i:
                                                        (T.swipeLeft && a || !a && T.allowPageScroll != g) && t.preventDefault();
                                                        break;
                                                    case r:
                                                        (T.swipeRight && a || !a && T.allowPageScroll != g) && t.preventDefault();
                                                        break;
                                                    case n:
                                                        (T.swipeUp && a || !a && T.allowPageScroll != m) && t.preventDefault();
                                                        break;
                                                    case o:
                                                        (T.swipeDown && a || !a && T.allowPageScroll != m) && t.preventDefault()
                                                }
                                            }
                                    }(e, ft), y = _.start, A = _.end, pt = Math.round(Math.sqrt(Math.pow(A.x - y.x, 2) + Math.pow(A.y - y.y, 2))), gt = it(), v = pt, (f = ht) != s && (v = Math.max(v, tt(f)), kt[f].distance = v), $ = P(C, At), !T.triggerOnTouchEnd || T.triggerOnTouchLeave) {
                                    var E = !0;
                                    if (T.triggerOnTouchLeave) {
                                        var L = {
                                            left: (h = (p = t(p = this)).offset()).left,
                                            right: h.left + p.outerWidth(),
                                            top: h.top,
                                            bottom: h.top + p.outerHeight()
                                        };
                                        d = _.end, u = L, E = d.x > u.left && d.x < u.right && d.y > u.top && d.y < u.bottom
                                    }!T.triggerOnTouchEnd && E ? At = R(w) : T.triggerOnTouchLeave && !E && (At = R(k)), At != S && At != k || P(C, At)
                                }
                            } else P(C, At = S);
                            !1 === $ && P(C, At = S)
                        }
                    }

                    function E(t) {
                        var e, i = t.originalEvent ? t.originalEvent : t,
                            r = i.touches;
                        if (r) {
                            if (r.length && !J()) return e = i, Mt = ot(), _t = e.touches.length + 1, !0;
                            if (r.length && J()) return !0
                        }
                        return J() && (Ct = _t), Tt = ot(), gt = it(), X() || !W() ? P(i, At = S) : T.triggerOnTouchEnd || !1 === T.triggerOnTouchEnd && At === w ? (!1 !== T.preventDefaultEvents && !1 !== t.cancelable && t.preventDefault(), P(i, At = k)) : !T.triggerOnTouchEnd && U() ? F(i, At = k, p) : At === w && P(i, At = S), Q(!1), null
                    }

                    function L() {
                        Ct = 0, Tt = 0, xt = 0, mt = 0, bt = 0, vt = 1, q(), Q(!1)
                    }

                    function D(t) {
                        var e = t.originalEvent ? t.originalEvent : t;
                        T.triggerOnTouchLeave && (At = R(k), P(e, At))
                    }

                    function Y() {
                        St.unbind(lt, M), St.unbind(ut, L), St.unbind(st, _), St.unbind(ct, E), dt && St.unbind(dt, D), Q(!1)
                    }

                    function R(t) {
                        var e = t,
                            i = H(),
                            r = W(),
                            n = X();
                        return !i || n ? e = S : !r || t != w || T.triggerOnTouchEnd && !T.triggerOnTouchLeave ? !r && t == k && T.triggerOnTouchLeave && (e = S) : e = k, e
                    }

                    function P(t, e) {
                        var i, r = t.touches;
                        return (!(!N() || !B()) || B()) && (i = F(t, e, d)), (!(!I() || !O()) || O()) && !1 !== i && (i = F(t, e, u)), G() && V() && !1 !== i ? i = F(t, e, h) : gt > T.longTapThreshold && pt < v && T.longTap && !1 !== i ? i = F(t, e, f) : !(1 !== Ct && A || !(isNaN(pt) || pt < T.threshold) || !U()) && !1 !== i && (i = F(t, e, p)), e === S && L(), e === k && (r && r.length || L()), i
                    }

                    function F(e, s, c) {
                        var g;
                        if (c == d) {
                            if (St.trigger("swipeStatus", [s, ht || null, pt || 0, gt || 0, Ct, $t, ft]), T.swipeStatus && !1 === (g = T.swipeStatus.call(St, e, s, ht || null, pt || 0, gt || 0, Ct, $t, ft))) return !1;
                            if (s == k && N()) {
                                if (clearTimeout(Lt), clearTimeout(Dt), St.trigger("swipe", [ht, pt, gt, Ct, $t, ft]), T.swipe && !1 === (g = T.swipe.call(St, e, ht, pt, gt, Ct, $t, ft))) return !1;
                                switch (ht) {
                                    case i:
                                        St.trigger("swipeLeft", [ht, pt, gt, Ct, $t, ft]), T.swipeLeft && (g = T.swipeLeft.call(St, e, ht, pt, gt, Ct, $t, ft));
                                        break;
                                    case r:
                                        St.trigger("swipeRight", [ht, pt, gt, Ct, $t, ft]), T.swipeRight && (g = T.swipeRight.call(St, e, ht, pt, gt, Ct, $t, ft));
                                        break;
                                    case n:
                                        St.trigger("swipeUp", [ht, pt, gt, Ct, $t, ft]), T.swipeUp && (g = T.swipeUp.call(St, e, ht, pt, gt, Ct, $t, ft));
                                        break;
                                    case o:
                                        St.trigger("swipeDown", [ht, pt, gt, Ct, $t, ft]), T.swipeDown && (g = T.swipeDown.call(St, e, ht, pt, gt, Ct, $t, ft))
                                }
                            }
                        }
                        if (c == u) {
                            if (St.trigger("pinchStatus", [s, wt || null, yt || 0, gt || 0, Ct, vt, $t]), T.pinchStatus && !1 === (g = T.pinchStatus.call(St, e, s, wt || null, yt || 0, gt || 0, Ct, vt, $t))) return !1;
                            if (s == k && I()) switch (wt) {
                                case a:
                                    St.trigger("pinchIn", [wt || null, yt || 0, gt || 0, Ct, vt, $t]), T.pinchIn && (g = T.pinchIn.call(St, e, wt || null, yt || 0, gt || 0, Ct, vt, $t));
                                    break;
                                case l:
                                    St.trigger("pinchOut", [wt || null, yt || 0, gt || 0, Ct, vt, $t]), T.pinchOut && (g = T.pinchOut.call(St, e, wt || null, yt || 0, gt || 0, Ct, vt, $t))
                            }
                        }
                        return c == p ? s !== S && s !== k || (clearTimeout(Lt), clearTimeout(Dt), V() && !G() ? (Et = ot(), Lt = setTimeout(t.proxy(function() {
                            Et = null, St.trigger("tap", [e.target]), T.tap && (g = T.tap.call(St, e, e.target))
                        }, this), T.doubleTapThreshold)) : (Et = null, St.trigger("tap", [e.target]), T.tap && (g = T.tap.call(St, e, e.target)))) : c == h ? s !== S && s !== k || (clearTimeout(Lt), clearTimeout(Dt), Et = null, St.trigger("doubletap", [e.target]), T.doubleTap && (g = T.doubleTap.call(St, e, e.target))) : c == f && (s !== S && s !== k || (clearTimeout(Lt), Et = null, St.trigger("longtap", [e.target]), T.longTap && (g = T.longTap.call(St, e, e.target)))), g
                    }

                    function W() {
                        var t = !0;
                        return null !== T.threshold && (t = pt >= T.threshold), t
                    }

                    function X() {
                        var t = !1;
                        return null !== T.cancelThreshold && null !== ht && (t = tt(ht) - pt >= T.cancelThreshold), t
                    }

                    function H() {
                        return !(T.maxTimeThreshold && gt >= T.maxTimeThreshold)
                    }

                    function I() {
                        var t = z(),
                            e = j(),
                            i = null === T.pinchThreshold || yt >= T.pinchThreshold;
                        return t && e && i
                    }

                    function O() {
                        return !!(T.pinchStatus || T.pinchIn || T.pinchOut)
                    }

                    function N() {
                        var t = H(),
                            e = W(),
                            i = z(),
                            r = j(),
                            n = X(),
                            o = !n && r && i && e && t;
                        return o
                    }

                    function B() {
                        return !!(T.swipe || T.swipeStatus || T.swipeLeft || T.swipeRight || T.swipeUp || T.swipeDown)
                    }

                    function z() {
                        return Ct === T.fingers || T.fingers === b || !A
                    }

                    function j() {
                        return 0 !== $t[0].end.x
                    }

                    function U() {
                        return !!T.tap
                    }

                    function V() {
                        return !!T.doubleTap
                    }

                    function G() {
                        if (null == Et) return !1;
                        var t = ot();
                        return V() && t - Et <= T.doubleTapThreshold
                    }

                    function q() {
                        Mt = 0, _t = 0
                    }

                    function J() {
                        var t = !1;
                        if (Mt) {
                            var e = ot() - Mt;
                            e <= T.fingerReleaseThreshold && (t = !0)
                        }
                        return t
                    }

                    function Q(t) {
                        St && (!0 === t ? (St.bind(st, _), St.bind(ct, E), dt && St.bind(dt, D)) : (St.unbind(st, _, !1), St.unbind(ct, E, !1), dt && St.unbind(dt, D, !1)), St.data(x + "_intouch", !0 === t))
                    }

                    function K(t, e) {
                        var i = {
                            start: {
                                x: 0,
                                y: 0
                            },
                            last: {
                                x: 0,
                                y: 0
                            },
                            end: {
                                x: 0,
                                y: 0
                            }
                        };
                        return i.start.x = i.last.x = i.end.x = e.pageX || e.clientX, i.start.y = i.last.y = i.end.y = e.pageY || e.clientY, $t[t] = i, i
                    }

                    function Z(t) {
                        var e = void 0 !== t.identifier ? t.identifier : 0,
                            i = $t[e] || null;
                        return null === i && (i = K(e, t)), i.last.x = i.end.x, i.last.y = i.end.y, i.end.x = t.pageX || t.clientX, i.end.y = t.pageY || t.clientY, i
                    }

                    function tt(t) {
                        if (kt[t]) return kt[t].distance
                    }

                    function et(t) {
                        return {
                            direction: t,
                            distance: 0
                        }
                    }

                    function it() {
                        return Tt - xt
                    }

                    function rt(t, e) {
                        var i = Math.abs(t.x - e.x),
                            r = Math.abs(t.y - e.y);
                        return Math.round(Math.sqrt(i * i + r * r))
                    }

                    function nt(t, e) {
                        if (l = e, (a = t).x == l.x && a.y == l.y) return s;
                        var a, l, c, d, u, p, h, f, g = (d = e, u = (c = t).x - d.x, p = d.y - c.y, h = Math.atan2(p, u), (f = Math.round(180 * h / Math.PI)) < 0 && (f = 360 - Math.abs(f)), f);
                        return g <= 45 && g >= 0 ? i : g <= 360 && g >= 315 ? i : g >= 135 && g <= 225 ? r : g > 45 && g < 135 ? o : n
                    }

                    function ot() {
                        var t = new Date;
                        return t.getTime()
                    }
                    var T = t.extend({}, T),
                        at = A || $ || !T.fallbackToMouseEvents,
                        lt = at ? $ ? C ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
                        st = at ? $ ? C ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
                        ct = at ? $ ? C ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
                        dt = at ? $ ? "mouseleave" : null : "mouseleave",
                        ut = $ ? C ? "MSPointerCancel" : "pointercancel" : "touchcancel",
                        pt = 0,
                        ht = null,
                        ft = null,
                        gt = 0,
                        mt = 0,
                        bt = 0,
                        vt = 1,
                        yt = 0,
                        wt = 0,
                        kt = null,
                        St = t(e),
                        At = "start",
                        Ct = 0,
                        $t = {},
                        xt = 0,
                        Tt = 0,
                        Mt = 0,
                        _t = 0,
                        Et = 0,
                        Lt = null,
                        Dt = null;
                    try {
                        St.bind(lt, M), St.bind(ut, L)
                    } catch (e) {
                        t.error("events not supported " + lt + "," + ut + " on jQuery.swipe")
                    }
                    this.enable = function() {
                        return this.disable(), St.bind(lt, M), St.bind(ut, L), St
                    }, this.disable = function() {
                        return Y(), St
                    }, this.destroy = function() {
                        Y(), St.data(x, null), St = null
                    }, this.option = function(e, i) {
                        if ("object" == typeof e) T = t.extend(T, e);
                        else if (void 0 !== T[e]) {
                            if (void 0 === i) return T[e];
                            T[e] = i
                        } else {
                            if (!e) return T;
                            t.error("Option " + e + " does not exist on jQuery.swipe.options")
                        }
                        return null
                    }
                }(this, e), T.data(x, M))
            })
        }
        var i = "left",
            r = "right",
            n = "up",
            o = "down",
            a = "in",
            l = "out",
            s = "none",
            c = "auto",
            d = "swipe",
            u = "pinch",
            p = "tap",
            h = "doubletap",
            f = "longtap",
            g = "horizontal",
            m = "vertical",
            b = "all",
            v = 10,
            y = "start",
            w = "move",
            k = "end",
            S = "cancel",
            A = "ontouchstart" in window,
            C = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !A,
            $ = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !A,
            x = "TouchSwipe";
        t.fn.swipe = function(i) {
            var r = t(this),
                n = r.data(x);
            if (n && "string" == typeof i) {
                if (n[i]) return n[i].apply(n, Array.prototype.slice.call(arguments, 1));
                t.error("Method " + i + " does not exist on jQuery.swipe")
            } else if (n && "object" == typeof i) n.option.apply(n, arguments);
            else if (!(n || "object" != typeof i && i)) return e.apply(this, arguments);
            return r
        }, t.fn.swipe.version = "1.6.18", t.fn.swipe.defaults = {
            fingers: 1,
            threshold: 75,
            cancelThreshold: null,
            pinchThreshold: 20,
            maxTimeThreshold: null,
            fingerReleaseThreshold: 250,
            longTapThreshold: 500,
            doubleTapThreshold: 200,
            swipe: null,
            swipeLeft: null,
            swipeRight: null,
            swipeUp: null,
            swipeDown: null,
            swipeStatus: null,
            pinchIn: null,
            pinchOut: null,
            pinchStatus: null,
            click: null,
            tap: null,
            doubleTap: null,
            longTap: null,
            hold: null,
            triggerOnTouchEnd: !0,
            triggerOnTouchLeave: !1,
            allowPageScroll: "auto",
            fallbackToMouseEvents: !0,
            excludedElements: ".noSwipe",
            preventDefaultEvents: !0
        }, t.fn.swipe.phases = {
            PHASE_START: y,
            PHASE_MOVE: w,
            PHASE_END: k,
            PHASE_CANCEL: S
        }, t.fn.swipe.directions = {
            LEFT: i,
            RIGHT: r,
            UP: n,
            DOWN: o,
            IN: a,
            OUT: l
        }, t.fn.swipe.pageScroll = {
            NONE: s,
            HORIZONTAL: g,
            VERTICAL: m,
            AUTO: c
        }, t.fn.swipe.fingers = {
            ONE: 1,
            TWO: 2,
            THREE: 3,
            FOUR: 4,
            FIVE: 5,
            ALL: b
        }
    }),
    function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.PerfectScrollbar = e()
    }(this, function() {
        "use strict";

        function t(t) {
            return getComputedStyle(t)
        }

        function e(t, e) {
            for (var i in e) {
                var r = e[i];
                "number" == typeof r && (r += "px"), t.style[i] = r
            }
            return t
        }

        function i(t) {
            var e = document.createElement("div");
            return e.className = t, e
        }

        function r(t, e) {
            if (!h) throw new Error("No element matching method supported");
            return h.call(t, e)
        }

        function n(t) {
            t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
        }

        function o(t, e) {
            return Array.prototype.filter.call(t.children, function(t) {
                return r(t, e)
            })
        }

        function a(t, e) {
            var i = t.element.classList,
                r = f.state.scrolling(e);
            i.contains(r) ? clearTimeout(g[e]) : i.add(r)
        }

        function l(t, e) {
            g[e] = setTimeout(function() {
                return t.isAlive && t.element.classList.remove(f.state.scrolling(e))
            }, t.settings.scrollingThreshold)
        }

        function s(t) {
            if ("function" == typeof window.CustomEvent) return new CustomEvent(t);
            var e = document.createEvent("CustomEvent");
            return e.initCustomEvent(t, !1, !1, void 0), e
        }

        function c(t, e, i, r, n) {
            var o = i[0],
                c = i[1],
                d = i[2],
                u = i[3],
                p = i[4],
                h = i[5];
            void 0 === r && (r = !0), void 0 === n && (n = !1);
            var f, g, m = t.element;
            t.reach[u] = null, m[d] < 1 && (t.reach[u] = "start"), m[d] > t[o] - t[c] - 1 && (t.reach[u] = "end"), e && (m.dispatchEvent(s("ps-scroll-" + u)), e < 0 ? m.dispatchEvent(s("ps-scroll-" + p)) : e > 0 && m.dispatchEvent(s("ps-scroll-" + h)), r && (a(f = t, g = u), l(f, g))), t.reach[u] && (e || n) && m.dispatchEvent(s("ps-" + u + "-reach-" + t.reach[u]))
        }

        function d(t) {
            return parseInt(t, 10) || 0
        }

        function u(t, e) {
            return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e
        }

        function p(t, e) {
            function i(e) {
                m[p] = b + y * (e[s] - v), a(t, h), k(t), e.stopPropagation(), e.preventDefault()
            }

            function r() {
                l(t, h), t[g].classList.remove(f.state.clicking), t.event.unbind(t.ownerDocument, "mousemove", i)
            }
            var n = e[0],
                o = e[1],
                s = e[2],
                c = e[3],
                d = e[4],
                u = e[5],
                p = e[6],
                h = e[7],
                g = e[8],
                m = t.element,
                b = null,
                v = null,
                y = null;
            t.event.bind(t[d], "mousedown", function(e) {
                b = m[p], v = e[s], y = (t[o] - t[n]) / (t[c] - t[u]), t.event.bind(t.ownerDocument, "mousemove", i), t.event.once(t.ownerDocument, "mouseup", r), t[g].classList.add(f.state.clicking), e.stopPropagation(), e.preventDefault()
            })
        }
        var h = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector),
            f = {
                main: "ps",
                element: {
                    thumb: function(t) {
                        return "ps__thumb-" + t
                    },
                    rail: function(t) {
                        return "ps__rail-" + t
                    },
                    consuming: "ps__child--consume"
                },
                state: {
                    focus: "ps--focus",
                    clicking: "ps--clicking",
                    active: function(t) {
                        return "ps--active-" + t
                    },
                    scrolling: function(t) {
                        return "ps--scrolling-" + t
                    }
                }
            },
            g = {
                x: null,
                y: null
            },
            m = function(t) {
                this.element = t, this.handlers = {}
            },
            b = {
                isEmpty: {
                    configurable: !0
                }
            };
        m.prototype.bind = function(t, e) {
            void 0 === this.handlers[t] && (this.handlers[t] = []), this.handlers[t].push(e), this.element.addEventListener(t, e, !1)
        }, m.prototype.unbind = function(t, e) {
            var i = this;
            this.handlers[t] = this.handlers[t].filter(function(r) {
                return !(!e || r === e) || (i.element.removeEventListener(t, r, !1), !1)
            })
        }, m.prototype.unbindAll = function() {
            for (var t in this.handlers) this.unbind(t)
        }, b.isEmpty.get = function() {
            var t = this;
            return Object.keys(this.handlers).every(function(e) {
                return 0 === t.handlers[e].length
            })
        }, Object.defineProperties(m.prototype, b);
        var v = function() {
            this.eventElements = []
        };
        v.prototype.eventElement = function(t) {
            var e = this.eventElements.filter(function(e) {
                return e.element === t
            })[0];
            return e || (e = new m(t), this.eventElements.push(e)), e
        }, v.prototype.bind = function(t, e, i) {
            this.eventElement(t).bind(e, i)
        }, v.prototype.unbind = function(t, e, i) {
            var r = this.eventElement(t);
            r.unbind(e, i), r.isEmpty && this.eventElements.splice(this.eventElements.indexOf(r), 1)
        }, v.prototype.unbindAll = function() {
            this.eventElements.forEach(function(t) {
                return t.unbindAll()
            }), this.eventElements = []
        }, v.prototype.once = function(t, e, i) {
            var r = this.eventElement(t),
                n = function(t) {
                    r.unbind(e, n), i(t)
                };
            r.bind(e, n)
        };
        var y = function(t, e, i, r, n) {
                var o;
                if (void 0 === r && (r = !0), void 0 === n && (n = !1), "top" === e) o = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
                else {
                    if ("left" !== e) throw new Error("A proper axis should be provided");
                    o = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"]
                }
                c(t, i, o, r, n)
            },
            w = {
                isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
                supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
                supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
                isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
            },
            k = function(t) {
                var i = t.element,
                    r = Math.floor(i.scrollTop);
                t.containerWidth = i.clientWidth, t.containerHeight = i.clientHeight, t.contentWidth = i.scrollWidth, t.contentHeight = i.scrollHeight, i.contains(t.scrollbarXRail) || (o(i, f.element.rail("x")).forEach(function(t) {
                        return n(t)
                    }), i.appendChild(t.scrollbarXRail)), i.contains(t.scrollbarYRail) || (o(i, f.element.rail("y")).forEach(function(t) {
                        return n(t)
                    }), i.appendChild(t.scrollbarYRail)), !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth ? (t.scrollbarXActive = !0, t.railXWidth = t.containerWidth - t.railXMarginWidth, t.railXRatio = t.containerWidth / t.railXWidth, t.scrollbarXWidth = u(t, d(t.railXWidth * t.containerWidth / t.contentWidth)), t.scrollbarXLeft = d((t.negativeScrollAdjustment + i.scrollLeft) * (t.railXWidth - t.scrollbarXWidth) / (t.contentWidth - t.containerWidth))) : t.scrollbarXActive = !1, !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight ? (t.scrollbarYActive = !0, t.railYHeight = t.containerHeight - t.railYMarginHeight, t.railYRatio = t.containerHeight / t.railYHeight, t.scrollbarYHeight = u(t, d(t.railYHeight * t.containerHeight / t.contentHeight)), t.scrollbarYTop = d(r * (t.railYHeight - t.scrollbarYHeight) / (t.contentHeight - t.containerHeight))) : t.scrollbarYActive = !1, t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth), t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight),
                    function(t, i) {
                        var r = {
                                width: i.railXWidth
                            },
                            n = Math.floor(t.scrollTop);
                        i.isRtl ? r.left = i.negativeScrollAdjustment + t.scrollLeft + i.containerWidth - i.contentWidth : r.left = t.scrollLeft, i.isScrollbarXUsingBottom ? r.bottom = i.scrollbarXBottom - n : r.top = i.scrollbarXTop + n, e(i.scrollbarXRail, r);
                        var o = {
                            top: n,
                            height: i.railYHeight
                        };
                        i.isScrollbarYUsingRight ? i.isRtl ? o.right = i.contentWidth - (i.negativeScrollAdjustment + t.scrollLeft) - i.scrollbarYRight - i.scrollbarYOuterWidth : o.right = i.scrollbarYRight - t.scrollLeft : i.isRtl ? o.left = i.negativeScrollAdjustment + t.scrollLeft + 2 * i.containerWidth - i.contentWidth - i.scrollbarYLeft - i.scrollbarYOuterWidth : o.left = i.scrollbarYLeft + t.scrollLeft, e(i.scrollbarYRail, o), e(i.scrollbarX, {
                            left: i.scrollbarXLeft,
                            width: i.scrollbarXWidth - i.railBorderXWidth
                        }), e(i.scrollbarY, {
                            top: i.scrollbarYTop,
                            height: i.scrollbarYHeight - i.railBorderYWidth
                        })
                    }(i, t), t.scrollbarXActive ? i.classList.add(f.state.active("x")) : (i.classList.remove(f.state.active("x")), t.scrollbarXWidth = 0, t.scrollbarXLeft = 0, i.scrollLeft = 0), t.scrollbarYActive ? i.classList.add(f.state.active("y")) : (i.classList.remove(f.state.active("y")), t.scrollbarYHeight = 0, t.scrollbarYTop = 0, i.scrollTop = 0)
            },
            S = {
                "click-rail": function(t) {
                    t.event.bind(t.scrollbarY, "mousedown", function(t) {
                        return t.stopPropagation()
                    }), t.event.bind(t.scrollbarYRail, "mousedown", function(e) {
                        var i = e.pageY - window.pageYOffset - t.scrollbarYRail.getBoundingClientRect().top > t.scrollbarYTop ? 1 : -1;
                        t.element.scrollTop += i * t.containerHeight, k(t), e.stopPropagation()
                    }), t.event.bind(t.scrollbarX, "mousedown", function(t) {
                        return t.stopPropagation()
                    }), t.event.bind(t.scrollbarXRail, "mousedown", function(e) {
                        var i = e.pageX - window.pageXOffset - t.scrollbarXRail.getBoundingClientRect().left > t.scrollbarXLeft ? 1 : -1;
                        t.element.scrollLeft += i * t.containerWidth, k(t), e.stopPropagation()
                    })
                },
                "drag-thumb": function(t) {
                    p(t, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]), p(t, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"])
                },
                keyboard: function(t) {
                    var e = t.element;
                    t.event.bind(t.ownerDocument, "keydown", function(i) {
                        if (!(i.isDefaultPrevented && i.isDefaultPrevented() || i.defaultPrevented) && (r(e, ":hover") || r(t.scrollbarX, ":focus") || r(t.scrollbarY, ":focus"))) {
                            var n = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
                            if (n) {
                                if ("IFRAME" === n.tagName) n = n.contentDocument.activeElement;
                                else
                                    for (; n.shadowRoot;) n = n.shadowRoot.activeElement;
                                if (r(l = n, "input,[contenteditable]") || r(l, "select,[contenteditable]") || r(l, "textarea,[contenteditable]") || r(l, "button,[contenteditable]")) return
                            }
                            var o = 0,
                                a = 0;
                            switch (i.which) {
                                case 37:
                                    o = i.metaKey ? -t.contentWidth : i.altKey ? -t.containerWidth : -30;
                                    break;
                                case 38:
                                    a = i.metaKey ? t.contentHeight : i.altKey ? t.containerHeight : 30;
                                    break;
                                case 39:
                                    o = i.metaKey ? t.contentWidth : i.altKey ? t.containerWidth : 30;
                                    break;
                                case 40:
                                    a = i.metaKey ? -t.contentHeight : i.altKey ? -t.containerHeight : -30;
                                    break;
                                case 32:
                                    a = i.shiftKey ? t.containerHeight : -t.containerHeight;
                                    break;
                                case 33:
                                    a = t.containerHeight;
                                    break;
                                case 34:
                                    a = -t.containerHeight;
                                    break;
                                case 36:
                                    a = t.contentHeight;
                                    break;
                                case 35:
                                    a = -t.contentHeight;
                                    break;
                                default:
                                    return
                            }
                            t.settings.suppressScrollX && 0 !== o || t.settings.suppressScrollY && 0 !== a || (e.scrollTop -= a, e.scrollLeft += o, k(t), function(i, r) {
                                var n = Math.floor(e.scrollTop);
                                if (0 === i) {
                                    if (!t.scrollbarYActive) return !1;
                                    if (0 === n && r > 0 || n >= t.contentHeight - t.containerHeight && r < 0) return !t.settings.wheelPropagation
                                }
                                var o = e.scrollLeft;
                                if (0 === r) {
                                    if (!t.scrollbarXActive) return !1;
                                    if (0 === o && i < 0 || o >= t.contentWidth - t.containerWidth && i > 0) return !t.settings.wheelPropagation
                                }
                                return !0
                            }(o, a) && i.preventDefault())
                        }
                        var l
                    })
                },
                wheel: function(e) {
                    function i(i) {
                        var n, o, a, l, s, c, d, u, p, h, g = (o = (n = i).deltaX, a = -1 * n.deltaY, void 0 !== o && void 0 !== a || (o = -1 * n.wheelDeltaX / 6, a = n.wheelDeltaY / 6), n.deltaMode && 1 === n.deltaMode && (o *= 10, a *= 10), o != o && a != a && (o = 0, a = n.wheelDelta), n.shiftKey ? [-a, -o] : [o, a]),
                            m = g[0],
                            b = g[1];
                        if (! function(e, i, n) {
                                if (!w.isWebKit && r.querySelector("select:focus")) return !0;
                                if (!r.contains(e)) return !1;
                                for (var o = e; o && o !== r;) {
                                    if (o.classList.contains(f.element.consuming)) return !0;
                                    var a = t(o);
                                    if ([a.overflow, a.overflowX, a.overflowY].join("").match(/(scroll|auto)/)) {
                                        var l = o.scrollHeight - o.clientHeight;
                                        if (l > 0 && !(0 === o.scrollTop && n > 0 || o.scrollTop === l && n < 0)) return !0;
                                        var s = o.scrollWidth - o.clientWidth;
                                        if (s > 0 && !(0 === o.scrollLeft && i < 0 || o.scrollLeft === s && i > 0)) return !0
                                    }
                                    o = o.parentNode
                                }
                                return !1
                            }(i.target, m, b)) {
                            var v = !1;
                            e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (b ? r.scrollTop -= b * e.settings.wheelSpeed : r.scrollTop += m * e.settings.wheelSpeed, v = !0) : e.scrollbarXActive && !e.scrollbarYActive && (m ? r.scrollLeft += m * e.settings.wheelSpeed : r.scrollLeft -= b * e.settings.wheelSpeed, v = !0) : (r.scrollTop -= b * e.settings.wheelSpeed, r.scrollLeft += m * e.settings.wheelSpeed), k(e), (v = v || (l = m, s = b, c = Math.floor(r.scrollTop), d = 0 === r.scrollTop, u = c + r.offsetHeight === r.scrollHeight, p = 0 === r.scrollLeft, h = r.scrollLeft + r.offsetWidth === r.scrollWidth, !(Math.abs(s) > Math.abs(l) ? d || u : p || h) || !e.settings.wheelPropagation)) && !i.ctrlKey && (i.stopPropagation(), i.preventDefault())
                        }
                    }
                    var r = e.element;
                    void 0 !== window.onwheel ? e.event.bind(r, "wheel", i) : void 0 !== window.onmousewheel && e.event.bind(r, "mousewheel", i)
                },
                touch: function(e) {
                    function i(t, i) {
                        s.scrollTop -= i, s.scrollLeft -= t, k(e)
                    }

                    function r(t) {
                        return t.targetTouches ? t.targetTouches[0] : t
                    }

                    function n(t) {
                        return !(t.pointerType && "pen" === t.pointerType && 0 === t.buttons || (!t.targetTouches || 1 !== t.targetTouches.length) && (!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE))
                    }

                    function o(t) {
                        if (n(t)) {
                            var e = r(t);
                            c.pageX = e.pageX, c.pageY = e.pageY, d = (new Date).getTime(), null !== p && clearInterval(p)
                        }
                    }

                    function a(o) {
                        if (n(o)) {
                            var a = r(o),
                                l = {
                                    pageX: a.pageX,
                                    pageY: a.pageY
                                },
                                p = l.pageX - c.pageX,
                                h = l.pageY - c.pageY;
                            if (function(e, i, r) {
                                    if (!s.contains(e)) return !1;
                                    for (var n = e; n && n !== s;) {
                                        if (n.classList.contains(f.element.consuming)) return !0;
                                        var o = t(n);
                                        if ([o.overflow, o.overflowX, o.overflowY].join("").match(/(scroll|auto)/)) {
                                            var a = n.scrollHeight - n.clientHeight;
                                            if (a > 0 && !(0 === n.scrollTop && r > 0 || n.scrollTop === a && r < 0)) return !0;
                                            var l = n.scrollLeft - n.clientWidth;
                                            if (l > 0 && !(0 === n.scrollLeft && i < 0 || n.scrollLeft === l && i > 0)) return !0
                                        }
                                        n = n.parentNode
                                    }
                                    return !1
                                }(o.target, p, h)) return;
                            i(p, h), c = l;
                            var g = (new Date).getTime(),
                                m = g - d;
                            m > 0 && (u.x = p / m, u.y = h / m, d = g),
                                function(t, i) {
                                    var r = Math.floor(s.scrollTop),
                                        n = s.scrollLeft,
                                        o = Math.abs(t),
                                        a = Math.abs(i);
                                    if (a > o) {
                                        if (i < 0 && r === e.contentHeight - e.containerHeight || i > 0 && 0 === r) return 0 === window.scrollY && i > 0 && w.isChrome
                                    } else if (o > a && (t < 0 && n === e.contentWidth - e.containerWidth || t > 0 && 0 === n)) return !0;
                                    return !0
                                }(p, h) && o.preventDefault()
                        }
                    }

                    function l() {
                        e.settings.swipeEasing && (clearInterval(p), p = setInterval(function() {
                            e.isInitialized ? clearInterval(p) : u.x || u.y ? Math.abs(u.x) < .01 && Math.abs(u.y) < .01 ? clearInterval(p) : (i(30 * u.x, 30 * u.y), u.x *= .8, u.y *= .8) : clearInterval(p)
                        }, 10))
                    }
                    if (w.supportsTouch || w.supportsIePointer) {
                        var s = e.element,
                            c = {},
                            d = 0,
                            u = {},
                            p = null;
                        w.supportsTouch ? (e.event.bind(s, "touchstart", o), e.event.bind(s, "touchmove", a), e.event.bind(s, "touchend", l)) : w.supportsIePointer && (window.PointerEvent ? (e.event.bind(s, "pointerdown", o), e.event.bind(s, "pointermove", a), e.event.bind(s, "pointerup", l)) : window.MSPointerEvent && (e.event.bind(s, "MSPointerDown", o), e.event.bind(s, "MSPointerMove", a), e.event.bind(s, "MSPointerUp", l)))
                    }
                }
            },
            A = function(r, n) {
                var o = this;
                if (void 0 === n && (n = {}), "string" == typeof r && (r = document.querySelector(r)), !r || !r.nodeName) throw new Error("no element is specified to initialize PerfectScrollbar");
                for (var a in this.element = r, r.classList.add(f.main), this.settings = {
                        handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
                        maxScrollbarLength: null,
                        minScrollbarLength: null,
                        scrollingThreshold: 1e3,
                        scrollXMarginOffset: 0,
                        scrollYMarginOffset: 0,
                        suppressScrollX: !1,
                        suppressScrollY: !1,
                        swipeEasing: !0,
                        useBothWheelAxes: !1,
                        wheelPropagation: !0,
                        wheelSpeed: 1
                    }, n) o.settings[a] = n[a];
                this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;
                var l, s, c = function() {
                        return r.classList.add(f.state.focus)
                    },
                    u = function() {
                        return r.classList.remove(f.state.focus)
                    };
                this.isRtl = "rtl" === t(r).direction, this.isNegativeScroll = (s = r.scrollLeft, r.scrollLeft = -1, l = r.scrollLeft < 0, r.scrollLeft = s, l), this.negativeScrollAdjustment = this.isNegativeScroll ? r.scrollWidth - r.clientWidth : 0, this.event = new v, this.ownerDocument = r.ownerDocument || document, this.scrollbarXRail = i(f.element.rail("x")), r.appendChild(this.scrollbarXRail), this.scrollbarX = i(f.element.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", c), this.event.bind(this.scrollbarX, "blur", u), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
                var p = t(this.scrollbarXRail);
                this.scrollbarXBottom = parseInt(p.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = d(p.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = d(p.borderLeftWidth) + d(p.borderRightWidth), e(this.scrollbarXRail, {
                    display: "block"
                }), this.railXMarginWidth = d(p.marginLeft) + d(p.marginRight), e(this.scrollbarXRail, {
                    display: ""
                }), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = i(f.element.rail("y")), r.appendChild(this.scrollbarYRail), this.scrollbarY = i(f.element.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", c), this.event.bind(this.scrollbarY, "blur", u), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
                var h, g, m = t(this.scrollbarYRail);
                this.scrollbarYRight = parseInt(m.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = d(m.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? (h = this.scrollbarY, d((g = t(h)).width) + d(g.paddingLeft) + d(g.paddingRight) + d(g.borderLeftWidth) + d(g.borderRightWidth)) : null, this.railBorderYWidth = d(m.borderTopWidth) + d(m.borderBottomWidth), e(this.scrollbarYRail, {
                    display: "block"
                }), this.railYMarginHeight = d(m.marginTop) + d(m.marginBottom), e(this.scrollbarYRail, {
                    display: ""
                }), this.railYHeight = null, this.railYRatio = null, this.reach = {
                    x: r.scrollLeft <= 0 ? "start" : r.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
                    y: r.scrollTop <= 0 ? "start" : r.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
                }, this.isAlive = !0, this.settings.handlers.forEach(function(t) {
                    return S[t](o)
                }), this.lastScrollTop = Math.floor(r.scrollTop), this.lastScrollLeft = r.scrollLeft, this.event.bind(this.element, "scroll", function(t) {
                    return o.onScroll(t)
                }), k(this)
            };
        return A.prototype.update = function() {
            this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, e(this.scrollbarXRail, {
                display: "block"
            }), e(this.scrollbarYRail, {
                display: "block"
            }), this.railXMarginWidth = d(t(this.scrollbarXRail).marginLeft) + d(t(this.scrollbarXRail).marginRight), this.railYMarginHeight = d(t(this.scrollbarYRail).marginTop) + d(t(this.scrollbarYRail).marginBottom), e(this.scrollbarXRail, {
                display: "none"
            }), e(this.scrollbarYRail, {
                display: "none"
            }), k(this), y(this, "top", 0, !1, !0), y(this, "left", 0, !1, !0), e(this.scrollbarXRail, {
                display: ""
            }), e(this.scrollbarYRail, {
                display: ""
            }))
        }, A.prototype.onScroll = function(t) {
            this.isAlive && (k(this), y(this, "top", this.element.scrollTop - this.lastScrollTop), y(this, "left", this.element.scrollLeft - this.lastScrollLeft), this.lastScrollTop = Math.floor(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft)
        }, A.prototype.destroy = function() {
            this.isAlive && (this.event.unbindAll(), n(this.scrollbarX), n(this.scrollbarY), n(this.scrollbarXRail), n(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1)
        }, A.prototype.removePsClasses = function() {
            this.element.className = this.element.className.split(" ").filter(function(t) {
                return !t.match(/^ps([-_].+|)$/)
            }).join(" ")
        }, A
    }),
    function(t) {
        function e(i, r) {
            if (r = r || {}, (i = i || "") instanceof e) return i;
            if (!(this instanceof e)) return new e(i, r);
            var n, o, a, l, s, c, d, u, p, h, f, g = (o = {
                r: 0,
                g: 0,
                b: 0
            }, a = 1, l = null, s = null, c = null, d = !1, u = !1, "string" == typeof(n = i) && (n = function(t) {
                t = t.replace(M, "").replace(_, "").toLowerCase();
                var e, i = !1;
                if (X[t]) t = X[t], i = !0;
                else if ("transparent" == t) return {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 0,
                    format: "name"
                };
                return (e = I.rgb.exec(t)) ? {
                    r: e[1],
                    g: e[2],
                    b: e[3]
                } : (e = I.rgba.exec(t)) ? {
                    r: e[1],
                    g: e[2],
                    b: e[3],
                    a: e[4]
                } : (e = I.hsl.exec(t)) ? {
                    h: e[1],
                    s: e[2],
                    l: e[3]
                } : (e = I.hsla.exec(t)) ? {
                    h: e[1],
                    s: e[2],
                    l: e[3],
                    a: e[4]
                } : (e = I.hsv.exec(t)) ? {
                    h: e[1],
                    s: e[2],
                    v: e[3]
                } : (e = I.hsva.exec(t)) ? {
                    h: e[1],
                    s: e[2],
                    v: e[3],
                    a: e[4]
                } : (e = I.hex8.exec(t)) ? {
                    r: S(e[1]),
                    g: S(e[2]),
                    b: S(e[3]),
                    a: x(e[4]),
                    format: i ? "name" : "hex8"
                } : (e = I.hex6.exec(t)) ? {
                    r: S(e[1]),
                    g: S(e[2]),
                    b: S(e[3]),
                    format: i ? "name" : "hex"
                } : (e = I.hex4.exec(t)) ? {
                    r: S(e[1] + "" + e[1]),
                    g: S(e[2] + "" + e[2]),
                    b: S(e[3] + "" + e[3]),
                    a: x(e[4] + "" + e[4]),
                    format: i ? "name" : "hex8"
                } : !!(e = I.hex3.exec(t)) && {
                    r: S(e[1] + "" + e[1]),
                    g: S(e[2] + "" + e[2]),
                    b: S(e[3] + "" + e[3]),
                    format: i ? "name" : "hex"
                }
            }(n)), "object" == typeof n && (T(n.r) && T(n.g) && T(n.b) ? (p = n.r, h = n.g, f = n.b, o = {
                r: 255 * w(p, 255),
                g: 255 * w(h, 255),
                b: 255 * w(f, 255)
            }, d = !0, u = "%" === String(n.r).substr(-1) ? "prgb" : "rgb") : T(n.h) && T(n.s) && T(n.v) ? (l = C(n.s), s = C(n.v), o = function(e, i, r) {
                e = 6 * w(e, 360), i = w(i, 100), r = w(r, 100);
                var n = t.floor(e),
                    o = e - n,
                    a = r * (1 - i),
                    l = r * (1 - o * i),
                    s = r * (1 - (1 - o) * i),
                    c = n % 6;
                return {
                    r: 255 * [r, l, a, a, s, r][c],
                    g: 255 * [s, r, r, l, a, a][c],
                    b: 255 * [a, a, s, r, r, l][c]
                }
            }(n.h, l, s), d = !0, u = "hsv") : T(n.h) && T(n.s) && T(n.l) && (l = C(n.s), c = C(n.l), o = function(t, e, i) {
                function r(t, e, i) {
                    return 0 > i && (i += 1), i > 1 && (i -= 1), 1 / 6 > i ? t + 6 * (e - t) * i : .5 > i ? e : 2 / 3 > i ? t + 6 * (e - t) * (2 / 3 - i) : t
                }
                var n, o, a;
                if (t = w(t, 360), e = w(e, 100), i = w(i, 100), 0 === e) n = o = a = i;
                else {
                    var l = .5 > i ? i * (1 + e) : i + e - i * e,
                        s = 2 * i - l;
                    n = r(s, l, t + 1 / 3), o = r(s, l, t), a = r(s, l, t - 1 / 3)
                }
                return {
                    r: 255 * n,
                    g: 255 * o,
                    b: 255 * a
                }
            }(n.h, l, c), d = !0, u = "hsl"), n.hasOwnProperty("a") && (a = n.a)), a = y(a), {
                ok: d,
                format: n.format || u,
                r: D(255, Y(o.r, 0)),
                g: D(255, Y(o.g, 0)),
                b: D(255, Y(o.b, 0)),
                a: a
            });
            this._originalInput = i, this._r = g.r, this._g = g.g, this._b = g.b, this._a = g.a, this._roundA = L(100 * this._a) / 100, this._format = r.format || g.format, this._gradientType = r.gradientType, this._r < 1 && (this._r = L(this._r)), this._g < 1 && (this._g = L(this._g)), this._b < 1 && (this._b = L(this._b)), this._ok = g.ok, this._tc_id = E++
        }

        function i(t, e, i) {
            t = w(t, 255), e = w(e, 255), i = w(i, 255);
            var r, n, o = Y(t, e, i),
                a = D(t, e, i),
                l = (o + a) / 2;
            if (o == a) r = n = 0;
            else {
                var s = o - a;
                switch (n = l > .5 ? s / (2 - o - a) : s / (o + a), o) {
                    case t:
                        r = (e - i) / s + (i > e ? 6 : 0);
                        break;
                    case e:
                        r = (i - t) / s + 2;
                        break;
                    case i:
                        r = (t - e) / s + 4
                }
                r /= 6
            }
            return {
                h: r,
                s: n,
                l: l
            }
        }

        function r(t, e, i) {
            t = w(t, 255), e = w(e, 255), i = w(i, 255);
            var r, n, o = Y(t, e, i),
                a = D(t, e, i),
                l = o,
                s = o - a;
            if (n = 0 === o ? 0 : s / o, o == a) r = 0;
            else {
                switch (o) {
                    case t:
                        r = (e - i) / s + (i > e ? 6 : 0);
                        break;
                    case e:
                        r = (i - t) / s + 2;
                        break;
                    case i:
                        r = (t - e) / s + 4
                }
                r /= 6
            }
            return {
                h: r,
                s: n,
                v: l
            }
        }

        function n(t, e, i, r) {
            var n = [A(L(t).toString(16)), A(L(e).toString(16)), A(L(i).toString(16))];
            return r && n[0].charAt(0) == n[0].charAt(1) && n[1].charAt(0) == n[1].charAt(1) && n[2].charAt(0) == n[2].charAt(1) ? n[0].charAt(0) + n[1].charAt(0) + n[2].charAt(0) : n.join("")
        }

        function o(t, e, i, r) {
            return [A($(r)), A(L(t).toString(16)), A(L(e).toString(16)), A(L(i).toString(16))].join("")
        }

        function a(t, i) {
            i = 0 === i ? 0 : i || 10;
            var r = e(t).toHsl();
            return r.s -= i / 100, r.s = k(r.s), e(r)
        }

        function l(t, i) {
            i = 0 === i ? 0 : i || 10;
            var r = e(t).toHsl();
            return r.s += i / 100, r.s = k(r.s), e(r)
        }

        function s(t) {
            return e(t).desaturate(100)
        }

        function c(t, i) {
            i = 0 === i ? 0 : i || 10;
            var r = e(t).toHsl();
            return r.l += i / 100, r.l = k(r.l), e(r)
        }

        function d(t, i) {
            i = 0 === i ? 0 : i || 10;
            var r = e(t).toRgb();
            return r.r = Y(0, D(255, r.r - L(-i / 100 * 255))), r.g = Y(0, D(255, r.g - L(-i / 100 * 255))), r.b = Y(0, D(255, r.b - L(-i / 100 * 255))), e(r)
        }

        function u(t, i) {
            i = 0 === i ? 0 : i || 10;
            var r = e(t).toHsl();
            return r.l -= i / 100, r.l = k(r.l), e(r)
        }

        function p(t, i) {
            var r = e(t).toHsl(),
                n = (r.h + i) % 360;
            return r.h = 0 > n ? 360 + n : n, e(r)
        }

        function h(t) {
            var i = e(t).toHsl();
            return i.h = (i.h + 180) % 360, e(i)
        }

        function f(t) {
            var i = e(t).toHsl(),
                r = i.h;
            return [e(t), e({
                h: (r + 120) % 360,
                s: i.s,
                l: i.l
            }), e({
                h: (r + 240) % 360,
                s: i.s,
                l: i.l
            })]
        }

        function g(t) {
            var i = e(t).toHsl(),
                r = i.h;
            return [e(t), e({
                h: (r + 90) % 360,
                s: i.s,
                l: i.l
            }), e({
                h: (r + 180) % 360,
                s: i.s,
                l: i.l
            }), e({
                h: (r + 270) % 360,
                s: i.s,
                l: i.l
            })]
        }

        function m(t) {
            var i = e(t).toHsl(),
                r = i.h;
            return [e(t), e({
                h: (r + 72) % 360,
                s: i.s,
                l: i.l
            }), e({
                h: (r + 216) % 360,
                s: i.s,
                l: i.l
            })]
        }

        function b(t, i, r) {
            i = i || 6, r = r || 30;
            var n = e(t).toHsl(),
                o = 360 / r,
                a = [e(t)];
            for (n.h = (n.h - (o * i >> 1) + 720) % 360; --i;) n.h = (n.h + o) % 360, a.push(e(n));
            return a
        }

        function v(t, i) {
            i = i || 6;
            for (var r = e(t).toHsv(), n = r.h, o = r.s, a = r.v, l = [], s = 1 / i; i--;) l.push(e({
                h: n,
                s: o,
                v: a
            })), a = (a + s) % 1;
            return l
        }

        function y(t) {
            return t = parseFloat(t), (isNaN(t) || 0 > t || t > 1) && (t = 1), t
        }

        function w(e, i) {
            var r;
            "string" == typeof(r = e) && -1 != r.indexOf(".") && 1 === parseFloat(r) && (e = "100%");
            var n, o = "string" == typeof(n = e) && -1 != n.indexOf("%");
            return e = D(i, Y(0, parseFloat(e))), o && (e = parseInt(e * i, 10) / 100), t.abs(e - i) < 1e-6 ? 1 : e % i / parseFloat(i)
        }

        function k(t) {
            return D(1, Y(0, t))
        }

        function S(t) {
            return parseInt(t, 16)
        }

        function A(t) {
            return 1 == t.length ? "0" + t : "" + t
        }

        function C(t) {
            return 1 >= t && (t = 100 * t + "%"), t
        }

        function $(e) {
            return t.round(255 * parseFloat(e)).toString(16)
        }

        function x(t) {
            return S(t) / 255
        }

        function T(t) {
            return !!I.CSS_UNIT.exec(t)
        }
        var M = /^\s+/,
            _ = /\s+$/,
            E = 0,
            L = t.round,
            D = t.min,
            Y = t.max,
            R = t.random;
        e.prototype = {
            isDark: function() {
                return this.getBrightness() < 128
            },
            isLight: function() {
                return !this.isDark()
            },
            isValid: function() {
                return this._ok
            },
            getOriginalInput: function() {
                return this._originalInput
            },
            getFormat: function() {
                return this._format
            },
            getAlpha: function() {
                return this._a
            },
            getBrightness: function() {
                var t = this.toRgb();
                return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3
            },
            getLuminance: function() {
                var e, i, r, n = this.toRgb();
                return e = n.r / 255, i = n.g / 255, r = n.b / 255, .2126 * (.03928 >= e ? e / 12.92 : t.pow((e + .055) / 1.055, 2.4)) + .7152 * (.03928 >= i ? i / 12.92 : t.pow((i + .055) / 1.055, 2.4)) + .0722 * (.03928 >= r ? r / 12.92 : t.pow((r + .055) / 1.055, 2.4))
            },
            setAlpha: function(t) {
                return this._a = y(t), this._roundA = L(100 * this._a) / 100, this
            },
            toHsv: function() {
                var t = r(this._r, this._g, this._b);
                return {
                    h: 360 * t.h,
                    s: t.s,
                    v: t.v,
                    a: this._a
                }
            },
            toHsvString: function() {
                var t = r(this._r, this._g, this._b),
                    e = L(360 * t.h),
                    i = L(100 * t.s),
                    n = L(100 * t.v);
                return 1 == this._a ? "hsv(" + e + ", " + i + "%, " + n + "%)" : "hsva(" + e + ", " + i + "%, " + n + "%, " + this._roundA + ")"
            },
            toHsl: function() {
                var t = i(this._r, this._g, this._b);
                return {
                    h: 360 * t.h,
                    s: t.s,
                    l: t.l,
                    a: this._a
                }
            },
            toHslString: function() {
                var t = i(this._r, this._g, this._b),
                    e = L(360 * t.h),
                    r = L(100 * t.s),
                    n = L(100 * t.l);
                return 1 == this._a ? "hsl(" + e + ", " + r + "%, " + n + "%)" : "hsla(" + e + ", " + r + "%, " + n + "%, " + this._roundA + ")"
            },
            toHex: function(t) {
                return n(this._r, this._g, this._b, t)
            },
            toHexString: function(t) {
                return "#" + this.toHex(t)
            },
            toHex8: function(t) {
                return e = this._r, i = this._g, r = this._b, n = this._a, o = t, a = [A(L(e).toString(16)), A(L(i).toString(16)), A(L(r).toString(16)), A($(n))], o && a[0].charAt(0) == a[0].charAt(1) && a[1].charAt(0) == a[1].charAt(1) && a[2].charAt(0) == a[2].charAt(1) && a[3].charAt(0) == a[3].charAt(1) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
                var e, i, r, n, o, a
            },
            toHex8String: function(t) {
                return "#" + this.toHex8(t)
            },
            toRgb: function() {
                return {
                    r: L(this._r),
                    g: L(this._g),
                    b: L(this._b),
                    a: this._a
                }
            },
            toRgbString: function() {
                return 1 == this._a ? "rgb(" + L(this._r) + ", " + L(this._g) + ", " + L(this._b) + ")" : "rgba(" + L(this._r) + ", " + L(this._g) + ", " + L(this._b) + ", " + this._roundA + ")"
            },
            toPercentageRgb: function() {
                return {
                    r: L(100 * w(this._r, 255)) + "%",
                    g: L(100 * w(this._g, 255)) + "%",
                    b: L(100 * w(this._b, 255)) + "%",
                    a: this._a
                }
            },
            toPercentageRgbString: function() {
                return 1 == this._a ? "rgb(" + L(100 * w(this._r, 255)) + "%, " + L(100 * w(this._g, 255)) + "%, " + L(100 * w(this._b, 255)) + "%)" : "rgba(" + L(100 * w(this._r, 255)) + "%, " + L(100 * w(this._g, 255)) + "%, " + L(100 * w(this._b, 255)) + "%, " + this._roundA + ")"
            },
            toName: function() {
                return 0 === this._a ? "transparent" : !(this._a < 1) && (H[n(this._r, this._g, this._b, !0)] || !1)
            },
            toFilter: function(t) {
                var i = "#" + o(this._r, this._g, this._b, this._a),
                    r = i,
                    n = this._gradientType ? "GradientType = 1, " : "";
                if (t) {
                    var a = e(t);
                    r = "#" + o(a._r, a._g, a._b, a._a)
                }
                return "progid:DXImageTransform.Microsoft.gradient(" + n + "startColorstr=" + i + ",endColorstr=" + r + ")"
            },
            toString: function(t) {
                var e = !!t;
                t = t || this._format;
                var i = !1,
                    r = this._a < 1 && this._a >= 0;
                return !e && r && ("hex" === t || "hex6" === t || "hex3" === t || "hex4" === t || "hex8" === t || "name" === t) ? "name" === t && 0 === this._a ? this.toName() : this.toRgbString() : ("rgb" === t && (i = this.toRgbString()), "prgb" === t && (i = this.toPercentageRgbString()), ("hex" === t || "hex6" === t) && (i = this.toHexString()), "hex3" === t && (i = this.toHexString(!0)), "hex4" === t && (i = this.toHex8String(!0)), "hex8" === t && (i = this.toHex8String()), "name" === t && (i = this.toName()), "hsl" === t && (i = this.toHslString()), "hsv" === t && (i = this.toHsvString()), i || this.toHexString())
            },
            clone: function() {
                return e(this.toString())
            },
            _applyModification: function(t, e) {
                var i = t.apply(null, [this].concat([].slice.call(e)));
                return this._r = i._r, this._g = i._g, this._b = i._b, this.setAlpha(i._a), this
            },
            lighten: function() {
                return this._applyModification(c, arguments)
            },
            brighten: function() {
                return this._applyModification(d, arguments)
            },
            darken: function() {
                return this._applyModification(u, arguments)
            },
            desaturate: function() {
                return this._applyModification(a, arguments)
            },
            saturate: function() {
                return this._applyModification(l, arguments)
            },
            greyscale: function() {
                return this._applyModification(s, arguments)
            },
            spin: function() {
                return this._applyModification(p, arguments)
            },
            _applyCombination: function(t, e) {
                return t.apply(null, [this].concat([].slice.call(e)))
            },
            analogous: function() {
                return this._applyCombination(b, arguments)
            },
            complement: function() {
                return this._applyCombination(h, arguments)
            },
            monochromatic: function() {
                return this._applyCombination(v, arguments)
            },
            splitcomplement: function() {
                return this._applyCombination(m, arguments)
            },
            triad: function() {
                return this._applyCombination(f, arguments)
            },
            tetrad: function() {
                return this._applyCombination(g, arguments)
            }
        }, e.fromRatio = function(t, i) {
            if ("object" == typeof t) {
                var r = {};
                for (var n in t) t.hasOwnProperty(n) && (r[n] = "a" === n ? t[n] : C(t[n]));
                t = r
            }
            return e(t, i)
        }, e.equals = function(t, i) {
            return !(!t || !i) && e(t).toRgbString() == e(i).toRgbString()
        }, e.random = function() {
            return e.fromRatio({
                r: R(),
                g: R(),
                b: R()
            })
        }, e.mix = function(t, i, r) {
            r = 0 === r ? 0 : r || 50;
            var n = e(t).toRgb(),
                o = e(i).toRgb(),
                a = r / 100;
            return e({
                r: (o.r - n.r) * a + n.r,
                g: (o.g - n.g) * a + n.g,
                b: (o.b - n.b) * a + n.b,
                a: (o.a - n.a) * a + n.a
            })
        }, e.readability = function(i, r) {
            var n = e(i),
                o = e(r);
            return (t.max(n.getLuminance(), o.getLuminance()) + .05) / (t.min(n.getLuminance(), o.getLuminance()) + .05)
        }, e.isReadable = function(t, i, r) {
            var n, o, a, l, s, c = e.readability(t, i);
            switch (o = !1, "AA" !== (l = ((a = (a = r) || {
                level: "AA",
                size: "small"
            }).level || "AA").toUpperCase()) && "AAA" !== l && (l = "AA"), "small" !== (s = (a.size || "small").toLowerCase()) && "large" !== s && (s = "small"), (n = {
                level: l,
                size: s
            }).level + n.size) {
                case "AAsmall":
                case "AAAlarge":
                    o = c >= 4.5;
                    break;
                case "AAlarge":
                    o = c >= 3;
                    break;
                case "AAAsmall":
                    o = c >= 7
            }
            return o
        }, e.mostReadable = function(t, i, r) {
            var n, o, a, l, s = null,
                c = 0;
            o = (r = r || {}).includeFallbackColors, a = r.level, l = r.size;
            for (var d = 0; d < i.length; d++)(n = e.readability(t, i[d])) > c && (c = n, s = e(i[d]));
            return e.isReadable(t, s, {
                level: a,
                size: l
            }) || !o ? s : (r.includeFallbackColors = !1, e.mostReadable(t, ["#fff", "#000"], r))
        };
        var P, F, W, X = e.names = {
                aliceblue: "f0f8ff",
                antiquewhite: "faebd7",
                aqua: "0ff",
                aquamarine: "7fffd4",
                azure: "f0ffff",
                beige: "f5f5dc",
                bisque: "ffe4c4",
                black: "000",
                blanchedalmond: "ffebcd",
                blue: "00f",
                blueviolet: "8a2be2",
                brown: "a52a2a",
                burlywood: "deb887",
                burntsienna: "ea7e5d",
                cadetblue: "5f9ea0",
                chartreuse: "7fff00",
                chocolate: "d2691e",
                coral: "ff7f50",
                cornflowerblue: "6495ed",
                cornsilk: "fff8dc",
                crimson: "dc143c",
                cyan: "0ff",
                darkblue: "00008b",
                darkcyan: "008b8b",
                darkgoldenrod: "b8860b",
                darkgray: "a9a9a9",
                darkgreen: "006400",
                darkgrey: "a9a9a9",
                darkkhaki: "bdb76b",
                darkmagenta: "8b008b",
                darkolivegreen: "556b2f",
                darkorange: "ff8c00",
                darkorchid: "9932cc",
                darkred: "8b0000",
                darksalmon: "e9967a",
                darkseagreen: "8fbc8f",
                darkslateblue: "483d8b",
                darkslategray: "2f4f4f",
                darkslategrey: "2f4f4f",
                darkturquoise: "00ced1",
                darkviolet: "9400d3",
                deeppink: "ff1493",
                deepskyblue: "00bfff",
                dimgray: "696969",
                dimgrey: "696969",
                dodgerblue: "1e90ff",
                firebrick: "b22222",
                floralwhite: "fffaf0",
                forestgreen: "228b22",
                fuchsia: "f0f",
                gainsboro: "dcdcdc",
                ghostwhite: "f8f8ff",
                gold: "ffd700",
                goldenrod: "daa520",
                gray: "808080",
                green: "008000",
                greenyellow: "adff2f",
                grey: "808080",
                honeydew: "f0fff0",
                hotpink: "ff69b4",
                indianred: "cd5c5c",
                indigo: "4b0082",
                ivory: "fffff0",
                khaki: "f0e68c",
                lavender: "e6e6fa",
                lavenderblush: "fff0f5",
                lawngreen: "7cfc00",
                lemonchiffon: "fffacd",
                lightblue: "add8e6",
                lightcoral: "f08080",
                lightcyan: "e0ffff",
                lightgoldenrodyellow: "fafad2",
                lightgray: "d3d3d3",
                lightgreen: "90ee90",
                lightgrey: "d3d3d3",
                lightpink: "ffb6c1",
                lightsalmon: "ffa07a",
                lightseagreen: "20b2aa",
                lightskyblue: "87cefa",
                lightslategray: "789",
                lightslategrey: "789",
                lightsteelblue: "b0c4de",
                lightyellow: "ffffe0",
                lime: "0f0",
                limegreen: "32cd32",
                linen: "faf0e6",
                magenta: "f0f",
                maroon: "800000",
                mediumaquamarine: "66cdaa",
                mediumblue: "0000cd",
                mediumorchid: "ba55d3",
                mediumpurple: "9370db",
                mediumseagreen: "3cb371",
                mediumslateblue: "7b68ee",
                mediumspringgreen: "00fa9a",
                mediumturquoise: "48d1cc",
                mediumvioletred: "c71585",
                midnightblue: "191970",
                mintcream: "f5fffa",
                mistyrose: "ffe4e1",
                moccasin: "ffe4b5",
                navajowhite: "ffdead",
                navy: "000080",
                oldlace: "fdf5e6",
                olive: "808000",
                olivedrab: "6b8e23",
                orange: "ffa500",
                orangered: "ff4500",
                orchid: "da70d6",
                palegoldenrod: "eee8aa",
                palegreen: "98fb98",
                paleturquoise: "afeeee",
                palevioletred: "db7093",
                papayawhip: "ffefd5",
                peachpuff: "ffdab9",
                peru: "cd853f",
                pink: "ffc0cb",
                plum: "dda0dd",
                powderblue: "b0e0e6",
                purple: "800080",
                rebeccapurple: "663399",
                red: "f00",
                rosybrown: "bc8f8f",
                royalblue: "4169e1",
                saddlebrown: "8b4513",
                salmon: "fa8072",
                sandybrown: "f4a460",
                seagreen: "2e8b57",
                seashell: "fff5ee",
                sienna: "a0522d",
                silver: "c0c0c0",
                skyblue: "87ceeb",
                slateblue: "6a5acd",
                slategray: "708090",
                slategrey: "708090",
                snow: "fffafa",
                springgreen: "00ff7f",
                steelblue: "4682b4",
                tan: "d2b48c",
                teal: "008080",
                thistle: "d8bfd8",
                tomato: "ff6347",
                turquoise: "40e0d0",
                violet: "ee82ee",
                wheat: "f5deb3",
                white: "fff",
                whitesmoke: "f5f5f5",
                yellow: "ff0",
                yellowgreen: "9acd32"
            },
            H = e.hexNames = function(t) {
                var e = {};
                for (var i in t) t.hasOwnProperty(i) && (e[t[i]] = i);
                return e
            }(X),
            I = (F = "[\\s|\\(]+(" + (P = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + P + ")[,|\\s]+(" + P + ")\\s*\\)?", W = "[\\s|\\(]+(" + P + ")[,|\\s]+(" + P + ")[,|\\s]+(" + P + ")[,|\\s]+(" + P + ")\\s*\\)?", {
                CSS_UNIT: new RegExp(P),
                rgb: new RegExp("rgb" + F),
                rgba: new RegExp("rgba" + W),
                hsl: new RegExp("hsl" + F),
                hsla: new RegExp("hsla" + W),
                hsv: new RegExp("hsv" + F),
                hsva: new RegExp("hsva" + W),
                hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
            });
        "undefined" != typeof module && module.exports ? module.exports = e : "function" == typeof define && define.amd ? define(function() {
            return e
        }) : window.tinycolor = e
    }(Math),
    function(t) {
        t.isBreakpoint = function(e) {
            var i, r, n;
            switch (e) {
                case "xs":
                    n = "d-none d-sm-block";
                    break;
                case "sm":
                    n = "d-none d-md-block";
                    break;
                case "md":
                    n = "d-none d-lg-block";
                    break;
                case "lg":
                    n = "d-none d-xl-block";
                    break;
                case "xl":
                    n = "d-none"
            }
            return r = (i = t("<div/>", {
                class: n
            }).appendTo("body")).is(":hidden"), i.remove(), r
        }, t.extend(t, {
            isXs: function() {
                return t.isBreakpoint("xs")
            },
            isSm: function() {
                return t.isBreakpoint("sm")
            },
            isMd: function() {
                return t.isBreakpoint("md")
            },
            isLg: function() {
                return t.isBreakpoint("lg")
            },
            isXl: function() {
                return t.isBreakpoint("xl")
            }
        })
    }(jQuery);
App = function() {
    "use strict";
    return App.bootstrapSpinner = function() {
        $('input[name="postfix"]').TouchSpin({
            min: 0,
            max: 100,
            step: .1,
            decimals: 2,
            boostat: 5,
            maxboostedstep: 10,
            postfix: "%"
        }), $('input[name="postfix"]').TouchSpin({
            min: 0,
            max: 100,
            step: .1,
            decimals: 2,
            boostat: 5,
            maxboostedstep: 10,
            postfix: "%"
        }), $("input[name='prefix']").TouchSpin({
            min: -1e9,
            max: 1e9,
            stepinterval: 50,
            maxboostedstep: 1e7,
            prefix: "$"
        }), $("input[name='vertical']").TouchSpin({
            verticalbuttons: !0
        }), $("input[name='empty']").TouchSpin(), $("input[name='init']").TouchSpin({
            initval: 40
        }), $("input[name='sm-spinner']").TouchSpin({
            postfix: "a button",
            postfix_extraclass: "btn btn-secondary btn-sm"
        }), $("input[name='lg-spinner']").TouchSpin({
            postfix: "a button",
            postfix_extraclass: "btn btn-secondary btn-lg"
        }), $("input[name='btn-group-spinner']").TouchSpin({
            prefix: "pre",
            postfix: "post"
        }), $("input[name='btn-class']").TouchSpin({
            buttondown_class: "btn btn-primary",
            buttonup_class: "btn btn-primary"
        })
    }, App
}(), App = function() {
    "use strict";
    return App.ChartJs = function() {
        var t, e, i, r, n, o, a, l, s, c, d, u, p, h, f, g, m, b, v, y, w, k, S, A, C, $, x = function() {
            return Math.round(100 * Math.random())
        };
        t = tinycolor(App.color.primary), e = tinycolor(App.color.primary).lighten(22), i = document.getElementById("line-chart"), r = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "My First dataset",
                borderColor: t.toString(),
                backgroundColor: t.setAlpha(.8).toString(),
                data: [x(), x(), x(), x(), x(), x(), x()]
            }, {
                label: "My Second dataset",
                borderColor: e.toString(),
                backgroundColor: e.setAlpha(.5).toString(),
                data: [x(), x(), x(), x(), x(), x(), x()]
            }]
        }, new Chart(i, {
            type: "line",
            data: r
        }), n = tinycolor(App.color.primary), o = tinycolor(App.color.primary).lighten(22), a = document.getElementById("bar-chart"), l = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "Credit",
                borderColor: n.toString(),
                backgroundColor: n.setAlpha(.8).toString(),
                data: [x(), x(), x(), x(), x(), x(), x()]
            }, {
                label: "Debit",
                borderColor: o.toString(),
                backgroundColor: o.setAlpha(.5).toString(),
                data: [x(), x(), x(), x(), x(), x(), x()]
            }]
        }, new Chart(a, {
            type: "bar",
            data: l,
            options: {
                elements: {
                    rectangle: {
                        borderWidth: 2,
                        borderColor: "rgb(0, 255, 0)",
                        borderSkipped: "bottom"
                    }
                }
            }
        }), s = tinycolor(App.color.primary).lighten(20), c = tinycolor(App.color.primary), d = document.getElementById("radar-chart"), u = {
            labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
            datasets: [{
                label: "First Year",
                backgroundColor: s.setAlpha(.3).toString(),
                borderColor: s.toString(),
                pointBackgroundColor: s.toString(),
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: s.toString(),
                data: [65, 59, 90, 81, 56, 55, 40]
            }, {
                label: "Second Year",
                backgroundColor: c.setAlpha(.4).toString(),
                borderColor: c.toString(),
                pointBackgroundColor: c.toString(),
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: c.toString(),
                data: [28, 48, 40, 19, 96, 27, 100]
            }]
        }, new Chart(d, {
            type: "radar",
            data: u
        }), p = App.color.primary, h = tinycolor(App.color.primary).lighten(7).toString(), f = tinycolor(App.color.primary).lighten(14).toString(), g = tinycolor(App.color.primary).lighten(21).toString(), m = tinycolor(App.color.primary).lighten(28).toString(), b = document.getElementById("polar-chart"), new Chart(b, {
            type: "polarArea",
            data: {
                datasets: [{
                    data: [11, 16, 14, 7, 14],
                    backgroundColor: [p, h, f, g, m],
                    label: "My dataset"
                }],
                labels: ["January", "February", "March", "April", "May"]
            }
        }), v = App.color.primary, y = tinycolor(App.color.primary).lighten(12).toString(), w = tinycolor(App.color.primary).lighten(22).toString(), k = document.getElementById("pie-chart"), new Chart(k, {
            type: "pie",
            data: {
                labels: ["Red", "Blue", "Yellow"],
                datasets: [{
                    data: [300, 50, 100],
                    backgroundColor: [v, y, w],
                    hoverBackgroundColor: [v, y, w]
                }]
            }
        }), S = App.color.primary, A = tinycolor(App.color.primary).lighten(12).toString(), C = tinycolor(App.color.primary).lighten(22).toString(), $ = document.getElementById("donut-chart"), new Chart($, {
            type: "doughnut",
            data: {
                labels: ["Red", "Blue", "Yellow"],
                datasets: [{
                    data: [300, 50, 100],
                    backgroundColor: [S, A, C],
                    hoverBackgroundColor: [S, A, C]
                }]
            }
        })
    }, App
}(), App = function() {
    "use strict";
    return App.chartsMorris = function() {
        var t, e, i, r, n, o, a, l, s, c, d, u = [{
            period: "2013",
            licensed: 400,
            sorned: 550
        }, {
            period: "2012",
            licensed: 450,
            sorned: 400
        }, {
            period: "2011",
            licensed: 350,
            sorned: 550
        }, {
            period: "2010",
            licensed: 500,
            sorned: 700
        }, {
            period: "2009",
            licensed: 250,
            sorned: 380
        }, {
            period: "2008",
            licensed: 350,
            sorned: 240
        }, {
            period: "2007",
            licensed: 180,
            sorned: 300
        }, {
            period: "2006",
            licensed: 300,
            sorned: 250
        }, {
            period: "2005",
            licensed: 200,
            sorned: 150
        }];
        t = App.color.primary, e = tinycolor(App.color.primary).lighten(15).toString(), new Morris.Line({
            element: "line-chart",
            data: u,
            xkey: "period",
            ykeys: ["licensed", "sorned"],
            labels: ["Licensed", "Off the road"],
            lineColors: [t, e]
        }), i = tinycolor(App.color.alt3).lighten(15).toString(), r = tinycolor(App.color.alt3).brighten(3).toString(), Morris.Bar({
            element: "bar-chart",
            data: [{
                device: "iPhone",
                geekbench: 136,
                macbench: 180
            }, {
                device: "iPhone 3G",
                geekbench: 137,
                macbench: 200
            }, {
                device: "iPhone 3GS",
                geekbench: 275,
                macbench: 350
            }, {
                device: "iPhone 4",
                geekbench: 380,
                macbench: 500
            }, {
                device: "iPhone 4S",
                geekbench: 655,
                macbench: 900
            }, {
                device: "iPhone 5",
                geekbench: 1571,
                macbench: 1700
            }],
            xkey: "device",
            ykeys: ["geekbench", "macbench"],
            labels: ["Geekbench", "Macbench"],
            barColors: [i, r],
            barRatio: .4,
            xLabelAngle: 35,
            hideHover: "auto"
        }), n = App.color.alt2, App.color.alt4, o = App.color.alt3, a = App.color.alt1, l = tinycolor(App.color.primary).lighten(5).toString(), Morris.Donut({
            element: "donut-chart",
            data: [{
                label: "Facebook",
                value: 25
            }, {
                label: "Google",
                value: 40
            }, {
                label: "Twitter",
                value: 25
            }, {
                label: "Pinterest",
                value: 10
            }],
            colors: [n, l, o, a],
            formatter: function(t) {
                return t + "%"
            }
        }), s = App.color.alt2, App.color.alt4, App.color.alt3, c = App.color.alt1, d = tinycolor(App.color.primary).lighten(5).toString(), Morris.Area({
            element: "area-chart",
            data: [{
                period: "2010 Q1",
                iphone: 2666,
                ipad: null,
                itouch: 2647
            }, {
                period: "2010 Q2",
                iphone: 2778,
                ipad: 2294,
                itouch: 2441
            }, {
                period: "2010 Q3",
                iphone: 4912,
                ipad: 1969,
                itouch: 2501
            }, {
                period: "2010 Q4",
                iphone: 3767,
                ipad: 3597,
                itouch: 5689
            }, {
                period: "2011 Q1",
                iphone: 6810,
                ipad: 1914,
                itouch: 2293
            }, {
                period: "2011 Q2",
                iphone: 5670,
                ipad: 4293,
                itouch: 1881
            }, {
                period: "2011 Q3",
                iphone: 4820,
                ipad: 3795,
                itouch: 1588
            }, {
                period: "2011 Q4",
                iphone: 15073,
                ipad: 5967,
                itouch: 5175
            }, {
                period: "2012 Q1",
                iphone: 10687,
                ipad: 4460,
                itouch: 2028
            }, {
                period: "2012 Q2",
                iphone: 8432,
                ipad: 5713,
                itouch: 1791
            }],
            xkey: "period",
            ykeys: ["iphone", "ipad", "itouch"],
            labels: ["iPhone", "iPad", "iPod Touch"],
            lineColors: [d, c, s],
            pointSize: 2,
            hideHover: "auto"
        })
    }, App
}(), App = function() {
    "use strict";
    return App.chartsSparklines = function() {
        var t = tinycolor(App.color.primary),
            e = tinycolor(App.color.alt1),
            i = tinycolor(App.color.alt2),
            r = tinycolor(App.color.alt3),
            n = t.toString(),
            o = e.toString(),
            a = i.toString(),
            l = r.toString();
        $.fn.sparkline.defaults.common.lineColor = n, $.fn.sparkline.defaults.common.fillColor = t.setAlpha(.3).toString(), $.fn.sparkline.defaults.line.spotColor = n, $.fn.sparkline.defaults.line.minSpotColor = n, $.fn.sparkline.defaults.line.maxSpotColor = n, $.fn.sparkline.defaults.line.highlightSpotColor = n, $.fn.sparkline.defaults.line.highlightLineColor = n, $.fn.sparkline.defaults.bar.barColor = n, $.fn.sparkline.defaults.bar.negBarColor = o, $.fn.sparkline.defaults.bar.stackedBarColor[0] = n, $.fn.sparkline.defaults.bar.stackedBarColor[1] = o, $.fn.sparkline.defaults.tristate.posBarColor = n, $.fn.sparkline.defaults.tristate.negBarColor = o, $.fn.sparkline.defaults.discrete.thresholdColor = o, $.fn.sparkline.defaults.bullet.targetColor = n, $.fn.sparkline.defaults.bullet.performanceColor = o, $.fn.sparkline.defaults.bullet.rangeColors[0] = e.setAlpha(.2).toString(), $.fn.sparkline.defaults.bullet.rangeColors[1] = e.setAlpha(.5).toString(), $.fn.sparkline.defaults.bullet.rangeColors[2] = e.setAlpha(.45).toString(), $.fn.sparkline.defaults.pie.sliceColors[0] = n, $.fn.sparkline.defaults.pie.sliceColors[1] = o, $.fn.sparkline.defaults.pie.sliceColors[2] = a, $.fn.sparkline.defaults.box.medianColor = n, $.fn.sparkline.defaults.box.boxFillColor = e.setAlpha(.5).toString(), $.fn.sparkline.defaults.box.boxLineColor = n, $.fn.sparkline.defaults.box.whiskerColor = l, $(".compositebar").sparkline("html", {
            type: "bar",
            barColor: o
        }), $(".compositebar").sparkline([4, 1, 5, 7, 9, 9, 8, 7, 6, 6, 4, 7, 8, 4, 3, 2, 2, 5, 6, 7], {
            composite: !0,
            fillColor: !1
        }), $(".sparkline").sparkline(), $(".linecustom").sparkline("html", {
            height: "1.5em",
            width: "8em",
            lineColor: a,
            fillColor: i.setAlpha(.4).toString(),
            minSpotColor: !1,
            maxSpotColor: !1,
            spotColor: l,
            spotRadius: 3
        }), $(".sparkbar").sparkline("html", {
            type: "bar"
        }), $(".sparktristate").sparkline("html", {
            type: "tristate"
        }), $(".compositeline").sparkline("html", {
            fillColor: !1,
            changeRangeMin: 0,
            chartRangeMax: 10
        }), $(".compositeline").sparkline([4, 1, 5, 7, 9, 9, 8, 7, 6, 6, 4, 7, 8, 4, 3, 2, 2, 5, 6, 7], {
            composite: !0,
            fillColor: !1,
            lineColor: o,
            changeRangeMin: 0,
            chartRangeMax: 10
        }), $(".normalline").sparkline("html", {
            fillColor: !1,
            normalRangeMin: -1,
            normalRangeMax: 8
        }), $(".discrete1").sparkline("html", {
            type: "discrete",
            xwidth: 18
        }), $(".discrete2").sparkline("html", {
            type: "discrete",
            thresholdValue: 4
        }), $(".sparkbullet").sparkline("html", {
            type: "bullet"
        }), $(".sparkpie").sparkline("html", {
            type: "pie",
            height: "1.0em"
        }), $(".sparkboxplot").sparkline("html", {
            type: "box"
        }), $("#line-chart").sparkline([4, 3.5, 5, 7, 9, 9, 8, 7, 6, 6, 5, 7, 8, 4, 3, 4, 4, 5, 6, 7, 5, 6, 7, 8, 8.2, 7.5, 7.4, 7.2, 7], {
            width: "100%",
            height: "220px",
            lineWidth: 1.7,
            spotRadius: 3,
            fillColor: t.setAlpha(.2).toString()
        }), $("#pie-chart").sparkline([2, 5, 2.5], {
            type: "pie",
            sliceColors: [a, o, n],
            height: "200px"
        }), $("#bar-chart").sparkline([4, 3.5, 5, 7, 9, 9, 8, 7, 8, 4, 3, 4, 4, 5, 6, 7, 5, 6, 7, 8, 8.2, 7.5, 7.4], {
            type: "bar",
            barColor: l,
            barWidth: 8,
            width: "100%",
            height: "200px"
        })
    }, App
}(), App = function() {
    "use strict";
    return App.charts = function() {
        function t() {
            return Math.floor(31 * Math.random()) + 10
        }
        var e, i, r, n, o, a, l, s, c, d, u, p, h, f, g, m, b, v, y, w, k, S;
        $('[data-toggle="counter"]').each(function(t, e) {
                var i = $(this),
                    r = "",
                    n = "",
                    o = 0,
                    a = 0,
                    l = 0,
                    s = 2.5;
                i.data("prefix") && (r = i.data("prefix")), i.data("suffix") && (n = i.data("suffix")), i.data("start") && (o = i.data("start")), i.data("end") && (a = i.data("end")), i.data("decimals") && (l = i.data("decimals")), i.data("duration") && (s = i.data("duration")), new CountUp(i.get(0), o, a, l, s, {
                    suffix: n,
                    prefix: r
                }).start()
            }), e = App.color.alt2, $.plot($("#line-chart1"), [{
                data: [
                    [0, 20],
                    [1, 30],
                    [2, 25],
                    [3, 39],
                    [4, 35],
                    [5, 40],
                    [6, 30],
                    [7, 45]
                ],
                label: "Page Views"
            }], {
                series: {
                    lines: {
                        show: !0,
                        lineWidth: 2,
                        fill: !0,
                        fillColor: {
                            colors: [{
                                opacity: .2
                            }, {
                                opacity: .2
                            }]
                        }
                    },
                    points: {
                        show: !0
                    },
                    shadowSize: 0
                },
                legend: {
                    show: !1
                },
                grid: {
                    margin: {
                        left: -8,
                        right: -8,
                        top: 0,
                        bottom: 0
                    },
                    show: !1,
                    labelMargin: 15,
                    axisMargin: 500,
                    hoverable: !0,
                    clickable: !0,
                    tickColor: "rgba(0,0,0,0.15)",
                    borderWidth: 0
                },
                colors: [e],
                xaxis: {
                    ticks: 11,
                    tickDecimals: 0
                },
                yaxis: {
                    autoscaleMargin: .5,
                    ticks: 4,
                    tickDecimals: 0
                }
            }), i = tinycolor(App.color.primary).brighten(9).toString(), r = tinycolor(App.color.primary).lighten(13).toString(), n = tinycolor(App.color.primary).lighten(20).toString(), o = tinycolor(App.color.primary).lighten(27).toString(), $.plot("#pie-chart4", [{
                label: "Google",
                data: 45
            }, {
                label: "Dribbble",
                data: 25
            }, {
                label: "Twitter",
                data: 20
            }, {
                label: "Facebook",
                data: 10
            }], {
                series: {
                    pie: {
                        show: !0,
                        innerRadius: .27,
                        shadow: {
                            top: 5,
                            left: 15,
                            alpha: .3
                        },
                        stroke: {
                            width: 0
                        },
                        label: {
                            show: !0,
                            formatter: function(t, e) {
                                return '<div style="font-size:12px;text-align:center;padding:2px;color:#333;">' + t + "</div>"
                            }
                        },
                        highlight: {
                            opacity: .08
                        }
                    }
                },
                grid: {
                    hoverable: !0,
                    clickable: !0
                },
                colors: [i, r, n, o],
                legend: {
                    show: !1
                }
            }), a = tinycolor(App.color.alt3).lighten(15).toString(), l = tinycolor(App.color.alt3).brighten(3).toString(), $.plot($("#bar-chart1"), [{
                data: [
                    [0, 15],
                    [1, 15],
                    [2, 19],
                    [3, 28],
                    [4, 30],
                    [5, 37],
                    [6, 35],
                    [7, 38],
                    [8, 48],
                    [9, 43],
                    [10, 38],
                    [11, 32],
                    [12, 38]
                ],
                label: "Page Views"
            }, {
                data: [
                    [0, 7],
                    [1, 10],
                    [2, 15],
                    [3, 23],
                    [4, 24],
                    [5, 29],
                    [6, 25],
                    [7, 33],
                    [8, 35],
                    [9, 38],
                    [10, 32],
                    [11, 27],
                    [12, 32]
                ],
                label: "Unique Visitor"
            }], {
                series: {
                    bars: {
                        align: "center",
                        show: !0,
                        lineWidth: 1,
                        barWidth: .6,
                        fill: !0,
                        fillColor: {
                            colors: [{
                                opacity: 1
                            }, {
                                opacity: 1
                            }]
                        }
                    },
                    shadowSize: 2
                },
                legend: {
                    show: !1
                },
                grid: {
                    margin: 0,
                    show: !1,
                    labelMargin: 10,
                    axisMargin: 500,
                    hoverable: !0,
                    clickable: !0,
                    tickColor: "rgba(0,0,0,0.15)",
                    borderWidth: 0
                },
                colors: [a, l],
                xaxis: {
                    ticks: 11,
                    tickDecimals: 0
                },
                yaxis: {
                    autoscaleMargin: .5,
                    ticks: 4,
                    tickDecimals: 0
                }
            }), s = tinycolor(App.color.primary).lighten(5).toString(), c = App.color.alt2, d = App.color.alt1, u = $("#widget-top-1").parent().next().find(".legend"), $.plot("#widget-top-1", [{
                label: "Premium Purchases",
                data: 15
            }, {
                label: "Standard Plans",
                data: 25
            }, {
                label: "Services",
                data: 60
            }], {
                series: {
                    pie: {
                        show: !0,
                        highlight: {
                            opacity: .1
                        }
                    }
                },
                grid: {
                    hoverable: !0
                },
                legend: {
                    container: u
                },
                colors: [s, c, d]
            }), p = tinycolor(App.color.alt1).lighten(7).toString(), h = App.color.alt1, $.plot("#linechart-mini1", [{
                data: [
                    [1, 20],
                    [2, 60],
                    [3, 35],
                    [4, 70],
                    [5, 45]
                ],
                canvasRender: !0
            }, {
                data: [
                    [1, 60],
                    [2, 20],
                    [3, 65],
                    [4, 35],
                    [5, 65]
                ],
                canvasRender: !0
            }], {
                series: {
                    lines: {
                        show: !0,
                        lineWidth: 0,
                        fill: !0,
                        fillColor: {
                            colors: [{
                                opacity: .7
                            }, {
                                opacity: .7
                            }]
                        }
                    },
                    fillColor: "rgba(0, 0, 0, 1)",
                    shadowSize: 0,
                    curvedLines: {
                        apply: !0,
                        active: !0,
                        monotonicFit: !0
                    }
                },
                legend: {
                    show: !1
                },
                grid: {
                    show: !1,
                    hoverable: !0,
                    clickable: !0
                },
                colors: [p, h],
                xaxis: {
                    autoscaleMargin: 0,
                    ticks: 11,
                    tickDecimals: 0
                },
                yaxis: {
                    autoscaleMargin: .5,
                    ticks: 5,
                    tickDecimals: 0
                }
            }),
            function() {
                var t = App.color.alt2,
                    e = [],
                    i = 300;

                function r() {
                    for (e.length > 0 && (e = e.slice(1)); e.length < i;) {
                        var t = (e.length > 0 ? e[e.length - 1] : 50) + 10 * Math.random() - 5;
                        t < 0 ? t = 0 : t > 100 && (t = 100), e.push(t)
                    }
                    for (var r = [], n = 0; n < e.length; ++n) r.push([n, e[n]]);
                    return r
                }
                var n = 30,
                    o = $.plot("#live-data", [r()], {
                        series: {
                            shadowSize: 0,
                            lines: {
                                show: !0,
                                lineWidth: 2,
                                fill: !0,
                                fillColor: {
                                    colors: [{
                                        opacity: .2
                                    }, {
                                        opacity: .2
                                    }]
                                }
                            }
                        },
                        grid: {
                            show: !0,
                            margin: {
                                top: 3,
                                bottom: 0,
                                left: 0,
                                right: 0
                            },
                            labelMargin: 0,
                            axisMargin: 0,
                            hoverable: !0,
                            clickable: !0,
                            tickColor: "rgba(0,0,0,0)",
                            borderWidth: 0,
                            minBorderMargin: 0
                        },
                        colors: [t],
                        yaxis: {
                            show: !1,
                            autoscaleMargin: .2,
                            ticks: 5,
                            tickDecimals: 0
                        },
                        xaxis: {
                            show: !1,
                            autoscaleMargin: 0
                        }
                    });
                ! function t() {
                    o.setData([r()]), o.draw(), setTimeout(t, n)
                }()
            }(), f = tinycolor(App.color.primary).lighten(22), g = App.color.primary, m = [
                [1, t()],
                [2, t()],
                [3, 2 + t()],
                [4, 3 + t()],
                [5, 5 + t()],
                [6, 10 + t()],
                [7, 15 + t()],
                [8, 20 + t()],
                [9, 25 + t()],
                [10, 30 + t()],
                [11, 35 + t()],
                [12, 25 + t()],
                [13, 15 + t()],
                [14, 20 + t()],
                [15, 45 + t()],
                [16, 50 + t()],
                [17, 65 + t()],
                [18, 70 + t()],
                [19, 85 + t()],
                [20, 80 + t()],
                [21, 75 + t()],
                [22, 80 + t()],
                [23, 75 + t()]
            ], b = [
                [1, t()],
                [2, t()],
                [3, 10 + t()],
                [4, 15 + t()],
                [5, 20 + t()],
                [6, 25 + t()],
                [7, 30 + t()],
                [8, 35 + t()],
                [9, 40 + t()],
                [10, 45 + t()],
                [11, 50 + t()],
                [12, 55 + t()],
                [13, 60 + t()],
                [14, 70 + t()],
                [15, 75 + t()],
                [16, 80 + t()],
                [17, 85 + t()],
                [18, 90 + t()],
                [19, 95 + t()],
                [20, 100 + t()],
                [21, 110 + t()],
                [22, 120 + t()],
                [23, 130 + t()]
            ], $.plot($("#line-chart-live"), [{
                data: b,
                showLabels: !0,
                label: "New Visitors",
                labelPlacement: "below",
                canvasRender: !0,
                cColor: "#FFFFFF"
            }, {
                data: m,
                showLabels: !0,
                label: "Old Visitors",
                labelPlacement: "below",
                canvasRender: !0,
                cColor: "#FFFFFF"
            }], {
                series: {
                    lines: {
                        show: !0,
                        lineWidth: 1.5,
                        fill: !0,
                        fillColor: {
                            colors: [{
                                opacity: .5
                            }, {
                                opacity: .5
                            }]
                        }
                    },
                    fillColor: "rgba(0, 0, 0, 1)",
                    points: {
                        show: !1,
                        fill: !0
                    },
                    shadowSize: 0
                },
                legend: {
                    show: !1
                },
                grid: {
                    show: !0,
                    margin: {
                        top: -20,
                        bottom: 0,
                        left: 0,
                        right: 0
                    },
                    labelMargin: 0,
                    axisMargin: 0,
                    hoverable: !0,
                    clickable: !0,
                    tickColor: "rgba(0,0,0,0)",
                    borderWidth: 0,
                    minBorderMargin: 0
                },
                colors: [f, g],
                xaxis: {
                    autoscaleMargin: 0,
                    ticks: 11,
                    tickDecimals: 0
                },
                yaxis: {
                    autoscaleMargin: .2,
                    ticks: 5,
                    tickDecimals: 0
                }
            }), v = App.color.alt3, y = $("#line-chart2").parent().find(".counter .value").get(0), $.plot("#line-chart2", [{
                data: [
                    [1, 10],
                    [2, 30],
                    [3, 55],
                    [4, 36],
                    [5, 57],
                    [6, 80],
                    [7, 65],
                    [8, 50],
                    [9, 80],
                    [10, 70],
                    [11, 90],
                    [12, 67],
                    [12, 67]
                ],
                showLabels: !0,
                label: "New Visitors",
                labelPlacement: "below",
                canvasRender: !0,
                cColor: "#FFFFFF"
            }], {
                series: {
                    lines: {
                        show: !0,
                        lineWidth: 2,
                        fill: !0,
                        fillColor: {
                            colors: [{
                                opacity: .6
                            }, {
                                opacity: .6
                            }]
                        }
                    },
                    fillColor: "rgba(0, 0, 0, 1)",
                    points: {
                        show: !0,
                        fill: !0,
                        fillColor: v
                    },
                    shadowSize: 0
                },
                legend: {
                    show: !1
                },
                grid: {
                    show: !1,
                    margin: {
                        left: -8,
                        right: -8,
                        top: 0,
                        botttom: 0
                    },
                    labelMargin: 0,
                    axisMargin: 0,
                    hoverable: !0,
                    clickable: !0,
                    tickColor: "rgba(0, 0, 0, 0)",
                    borderWidth: 0
                },
                colors: [v],
                xaxis: {
                    autoscaleMargin: 0,
                    ticks: 11,
                    tickDecimals: 0
                },
                yaxis: {
                    autoscaleMargin: .5,
                    ticks: 5,
                    tickDecimals: 0
                }
            }), new CountUp(y, 0, 80, 0, 2.5, {
                suffix: "%"
            }).start(), w = tinycolor(App.color.primary).lighten(5).toString(), $.plot($("#line-chart3"), [{
                data: [
                    [0, 20],
                    [1, 30],
                    [2, 25],
                    [3, 39],
                    [4, 35],
                    [5, 40],
                    [6, 30],
                    [7, 45]
                ],
                label: "Page Views"
            }], {
                series: {
                    lines: {
                        show: !0,
                        lineWidth: 2,
                        fill: !0,
                        fillColor: {
                            colors: [{
                                opacity: .1
                            }, {
                                opacity: .1
                            }]
                        }
                    },
                    points: {
                        show: !0
                    },
                    shadowSize: 0
                },
                legend: {
                    show: !1
                },
                grid: {
                    labelMargin: 15,
                    axisMargin: 500,
                    hoverable: !0,
                    clickable: !0,
                    tickColor: "rgba(0,0,0,0.15)",
                    borderWidth: 0
                },
                colors: [w],
                xaxis: {
                    ticks: 11,
                    tickDecimals: 0
                },
                yaxis: {
                    ticks: 4,
                    tickSize: 15,
                    tickDecimals: 0
                }
            }), k = App.color.alt3, S = tinycolor(App.color.alt3).lighten(22).toString(), $.plot($("#bar-chart2"), [{
                data: [
                    [0, 7],
                    [1, 13],
                    [2, 17],
                    [3, 20],
                    [4, 26],
                    [5, 37],
                    [6, 35],
                    [7, 28],
                    [8, 38],
                    [9, 38],
                    [10, 32]
                ],
                label: "Page Views"
            }, {
                data: [
                    [0, 15],
                    [1, 10],
                    [2, 15],
                    [3, 25],
                    [4, 30],
                    [5, 29],
                    [6, 25],
                    [7, 33],
                    [8, 45],
                    [9, 43],
                    [10, 38]
                ],
                label: "Unique Visitor"
            }], {
                series: {
                    bars: {
                        order: 2,
                        align: "center",
                        show: !0,
                        lineWidth: 1,
                        barWidth: .35,
                        fill: !0,
                        fillColor: {
                            colors: [{
                                opacity: 1
                            }, {
                                opacity: 1
                            }]
                        }
                    },
                    shadowSize: 2
                },
                legend: {
                    show: !1
                },
                grid: {
                    labelMargin: 10,
                    axisMargin: 500,
                    hoverable: !0,
                    clickable: !0,
                    tickColor: "rgba(0,0,0,0.15)",
                    borderWidth: 0
                },
                colors: [k, S],
                xaxis: {
                    ticks: 11,
                    tickDecimals: 0
                },
                yaxis: {
                    ticks: 4,
                    tickDecimals: 0
                }
            })
    }, App
}(), App = function() {
    "use strict";
    return App.dashboard = function() {
        var t, e, i, r, n, o, a, l, s, c, d, u;
        $('[data-toggle="counter"]').each(function(t, e) {
            var i = $(this),
                r = "",
                n = "",
                o = 0,
                a = 0,
                l = 0,
                s = 2.5;
            i.data("prefix") && (r = i.data("prefix")), i.data("suffix") && (n = i.data("suffix")), i.data("start") && (o = i.data("start")), i.data("end") && (a = i.data("end")), i.data("decimals") && (l = i.data("decimals")), i.data("duration") && (s = i.data("duration")), new CountUp(i.get(0), o, a, l, s, {
                suffix: n,
                prefix: r
            }).start()
        }), t = tinycolor(App.color.primary).lighten(5).toString(), e = App.color.alt2, i = App.color.alt1, r = $("#widget-top-1").parent().next().find(".legend"), $.plot("#widget-top-1", [{
            label: "Premium Purchases",
            data: 15
        }, {
            label: "Standard Plans",
            data: 25
        }, {
            label: "Services",
            data: 60
        }], {
            series: {
                pie: {
                    show: !0,
                    highlight: {
                        opacity: .1
                    }
                }
            },
            grid: {
                hoverable: !0
            },
            legend: {
                container: r
            },
            colors: [t, e, i]
        }), n = App.color.alt2, o = App.color.alt4, a = App.color.alt3, l = App.color.alt1, s = tinycolor(App.color.primary).lighten(5).toString(), c = $("#widget-top-2").parent().next().find(".legend"), $.plot("#widget-top-2", [{
            label: "Direct Access",
            data: 20
        }, {
            label: "Advertisment",
            data: 15
        }, {
            label: "Facebook",
            data: 15
        }, {
            label: "Twitter",
            data: 30
        }, {
            label: "Google Plus",
            data: 20
        }], {
            series: {
                pie: {
                    innerRadius: .5,
                    show: !0,
                    highlight: {
                        opacity: .1
                    }
                }
            },
            grid: {
                hoverable: !0
            },
            legend: {
                container: c
            },
            colors: [n, o, a, l, s]
        }), d = App.color.alt3, u = tinycolor(App.color.alt4).lighten(6.5).toString(), $.plot("#widget-top-3", [{
            label: "Google Ads",
            data: 70
        }, {
            label: "Facebook",
            data: 30
        }], {
            series: {
                pie: {
                    show: !0,
                    label: {
                        show: !1
                    },
                    highlight: {
                        opacity: .1
                    }
                }
            },
            grid: {
                hoverable: !0
            },
            legend: {
                show: !1
            },
            colors: [d, u]
        });
        var p, h, f, g, m, b, v, y, w, k = App.color.alt2,
            S = tinycolor(App.color.primary).lighten(5).toString();
        $("#spk1").sparkline([2, 4, 3, 6, 7, 5, 8, 9, 4, 2, 10], {
                type: "bar",
                width: "80px",
                height: "30px",
                barColor: k
            }), $("#spk2").sparkline([5, 3, 5, 6, 5, 7, 4, 8, 6, 9, 8], {
                type: "bar",
                width: "80px",
                height: "30px",
                barColor: S
            }),
            function() {
                var t = $(".widget-calendar"),
                    e = $(".cal-notes", t),
                    i = $(".day", e),
                    r = $(".date", e),
                    n = new Date,
                    o = new Array(7);
                o[0] = "Sunday", o[1] = "Monday", o[2] = "Tuesday", o[3] = "Wednesday", o[4] = "Thursday", o[5] = "Friday", o[6] = "Saturday";
                var a = o[n.getDay()];
                i.html(a);
                var l = new Array;
                l[0] = "January", l[1] = "February", l[2] = "March", l[3] = "April", l[4] = "May", l[5] = "June", l[6] = "July", l[7] = "August", l[8] = "September", l[9] = "October", l[10] = "November", l[11] = "December";
                var s = l[n.getMonth()],
                    c = n.getDate();
                r.html(s + " " + c), void 0 !== jQuery.ui && $(".ui-datepicker").datepicker({
                    onSelect: function(t, e) {
                        var n = new Date(t),
                            a = o[n.getDay()],
                            s = l[n.getMonth()],
                            c = n.getDate();
                        i.html(a), r.html(s + " " + c)
                    }
                })
            }(),
            function() {
                $("#line-chart1");
                var t = App.color.alt3;
                $.plot("#line-chart1", [{
                    data: [
                        [1, 10],
                        [2, 30],
                        [3, 55],
                        [4, 36],
                        [5, 57],
                        [6, 80],
                        [7, 65],
                        [8, 50],
                        [9, 80],
                        [10, 70],
                        [11, 90],
                        [12, 67],
                        [12, 67]
                    ],
                    showLabels: !0,
                    label: "New Visitors",
                    labelPlacement: "below",
                    canvasRender: !0,
                    cColor: "#FFFFFF"
                }], {
                    series: {
                        lines: {
                            show: !0,
                            lineWidth: 2,
                            fill: !0,
                            fillColor: {
                                colors: [{
                                    opacity: .6
                                }, {
                                    opacity: .6
                                }]
                            }
                        },
                        fillColor: "rgba(0, 0, 0, 1)",
                        points: {
                            show: !0,
                            fill: !0,
                            fillColor: t
                        },
                        shadowSize: 0
                    },
                    legend: {
                        show: !1
                    },
                    grid: {
                        show: !1,
                        margin: {
                            left: -8,
                            right: -8,
                            top: 0,
                            botttom: 0
                        },
                        labelMargin: 0,
                        axisMargin: 0,
                        hoverable: !0,
                        clickable: !0,
                        tickColor: "rgba(0, 0, 0, 0)",
                        borderWidth: 0
                    },
                    colors: [t, "#1fb594"],
                    xaxis: {
                        autoscaleMargin: 0,
                        ticks: 11,
                        tickDecimals: 0
                    },
                    yaxis: {
                        autoscaleMargin: .5,
                        ticks: 5,
                        tickDecimals: 0
                    }
                })
            }(), p = App.color.alt2, $.plot("#linechart-mini1", [{
                data: [
                    [1, 20],
                    [2, 60],
                    [3, 35],
                    [4, 70],
                    [5, 45]
                ],
                canvasRender: !0
            }, {
                data: [
                    [1, 60],
                    [2, 20],
                    [3, 65],
                    [4, 35],
                    [5, 65]
                ],
                canvasRender: !0
            }], {
                series: {
                    lines: {
                        show: !0,
                        lineWidth: 0,
                        fill: !0,
                        fillColor: {
                            colors: [{
                                opacity: .7
                            }, {
                                opacity: .7
                            }]
                        }
                    },
                    fillColor: "rgba(0, 0, 0, 1)",
                    shadowSize: 0,
                    curvedLines: {
                        apply: !0,
                        active: !0,
                        monotonicFit: !0
                    }
                },
                legend: {
                    show: !1
                },
                grid: {
                    show: !1,
                    hoverable: !0,
                    clickable: !0
                },
                colors: [p, p],
                xaxis: {
                    autoscaleMargin: 0,
                    ticks: 11,
                    tickDecimals: 0
                },
                yaxis: {
                    autoscaleMargin: .5,
                    ticks: 5,
                    tickDecimals: 0
                }
            }), h = tinycolor(App.color.primary).lighten(23).toString(), f = tinycolor(App.color.primary).brighten(5).toString(), $.plot($("#barchart-mini1"), [{
                data: [
                    [0, 15],
                    [1, 15],
                    [2, 19],
                    [3, 28],
                    [4, 30],
                    [5, 37],
                    [6, 35],
                    [7, 38],
                    [8, 48],
                    [9, 43],
                    [10, 38],
                    [11, 32],
                    [12, 38]
                ],
                label: "Page Views"
            }, {
                data: [
                    [0, 7],
                    [1, 10],
                    [2, 15],
                    [3, 23],
                    [4, 24],
                    [5, 29],
                    [6, 25],
                    [7, 33],
                    [8, 35],
                    [9, 38],
                    [10, 32],
                    [11, 27],
                    [12, 32]
                ],
                label: "Unique Visitor"
            }], {
                series: {
                    bars: {
                        align: "center",
                        show: !0,
                        lineWidth: 1,
                        barWidth: .8,
                        fill: !0,
                        fillColor: {
                            colors: [{
                                opacity: 1
                            }, {
                                opacity: 1
                            }]
                        }
                    },
                    shadowSize: 0
                },
                legend: {
                    show: !1
                },
                grid: {
                    margin: 0,
                    show: !1,
                    labelMargin: 10,
                    axisMargin: 500,
                    hoverable: !0,
                    clickable: !0,
                    tickColor: "rgba(0,0,0,0.15)",
                    borderWidth: 0
                },
                colors: [h, f],
                xaxis: {
                    ticks: 11,
                    tickDecimals: 0
                },
                yaxis: {
                    autoscaleMargin: .5,
                    ticks: 4,
                    tickDecimals: 0
                }
            }), g = App.color.alt1, $("#world-map").vectorMap({
                map: "world_mill_en",
                backgroundColor: "transparent",
                regionStyle: {
                    initial: {
                        fill: g
                    },
                    hover: {
                        "fill-opacity": .8
                    }
                },
                markerStyle: {
                    initial: {
                        r: 10
                    },
                    hover: {
                        r: 12,
                        stroke: "rgba(255,255,255,0.8)",
                        "stroke-width": 4
                    }
                },
                markers: [{
                    latLng: [41.9, 12.45],
                    name: "1.512 Visits",
                    style: {
                        fill: "#F07878",
                        stroke: "rgba(255,255,255,0.7)",
                        "stroke-width": 3
                    }
                }, {
                    latLng: [1.3, 103.8],
                    name: "940 Visits",
                    style: {
                        fill: "#F07878",
                        stroke: "rgba(255,255,255,0.7)",
                        "stroke-width": 3
                    }
                }, {
                    latLng: [51.511214, -.119824],
                    name: "530 Visits",
                    style: {
                        fill: "#F07878",
                        stroke: "rgba(255,255,255,0.7)",
                        "stroke-width": 3
                    }
                }, {
                    latLng: [40.714353, -74.005973],
                    name: "340 Visits",
                    style: {
                        fill: "#F07878",
                        stroke: "rgba(255,255,255,0.7)",
                        "stroke-width": 3
                    }
                }, {
                    latLng: [-22.913395, -43.20071],
                    name: "1.800 Visits",
                    style: {
                        fill: "#F07878",
                        stroke: "rgba(255,255,255,0.7)",
                        "stroke-width": 3
                    }
                }]
            }), m = tinycolor(App.color.primary).lighten(6), b = tinycolor(App.color.alt4).lighten(6.5), v = document.getElementById("radar-chart1"), y = {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "Second Year",
                    backgroundColor: m.setAlpha(.5).toString(),
                    borderColor: m.setAlpha(.8).toString(),
                    borderWidth: 2,
                    pointBackgroundColor: m.setAlpha(.8).toString(),
                    data: [28, 48, 40, 19, 96, 27, 100]
                }, {
                    label: "First Year",
                    backgroundColor: b.setAlpha(.5).toString(),
                    borderColor: b.setAlpha(.8).toString(),
                    borderWidth: 2,
                    pointBackgroundColor: b.setAlpha(.8).toString(),
                    data: [65, 59, 90, 81, 56, 55, 40]
                }]
            }, w = {
                legend: {
                    display: !1
                },
                scale: {
                    ticks: {
                        display: !1
                    },
                    gridLines: {
                        color: b.setAlpha(.4).toString()
                    }
                }
            }, new Chart(v, {
                type: "radar",
                data: y,
                options: w
            })
    }, App
}(), App = function() {
    "use strict";
    return App.dashboard2 = function() {
        function t() {
            return Math.floor(31 * Math.random()) + 10
        }
        var e, i, r, n, o, a, l, s, c, d, u, p, h;
        $('[data-toggle="counter"]').each(function(t, e) {
                var i = $(this),
                    r = "",
                    n = "",
                    o = 0,
                    a = 0,
                    l = 0,
                    s = 2.5;
                i.data("prefix") && (r = i.data("prefix")), i.data("suffix") && (n = i.data("suffix")), i.data("start") && (o = i.data("start")), i.data("end") && (a = i.data("end")), i.data("decimals") && (l = i.data("decimals")), i.data("duration") && (s = i.data("duration")), new CountUp(i.get(0), o, a, l, s, {
                    suffix: n,
                    prefix: r
                }).start()
            }), e = [
                [1, t()],
                [2, t()],
                [3, 2 + t()],
                [4, 3 + t()],
                [5, 5 + t()],
                [6, 10 + t()],
                [7, 15 + t()],
                [8, 20 + t()],
                [9, 25 + t()],
                [10, 30 + t()],
                [11, 35 + t()],
                [12, 25 + t()],
                [13, 15 + t()],
                [14, 20 + t()],
                [15, 45 + t()],
                [16, 50 + t()],
                [17, 65 + t()],
                [18, 70 + t()],
                [19, 85 + t()],
                [20, 80 + t()],
                [21, 75 + t()],
                [22, 80 + t()],
                [23, 75 + t()]
            ], i = [
                [1, t()],
                [2, t()],
                [3, 10 + t()],
                [4, 15 + t()],
                [5, 20 + t()],
                [6, 25 + t()],
                [7, 30 + t()],
                [8, 35 + t()],
                [9, 40 + t()],
                [10, 45 + t()],
                [11, 50 + t()],
                [12, 55 + t()],
                [13, 60 + t()],
                [14, 70 + t()],
                [15, 75 + t()],
                [16, 80 + t()],
                [17, 85 + t()],
                [18, 90 + t()],
                [19, 95 + t()],
                [20, 100 + t()],
                [21, 110 + t()],
                [22, 120 + t()],
                [23, 130 + t()]
            ], r = tinycolor(App.color.primary).lighten(22), n = App.color.primary, $.plot($("#line-chart-live"), [{
                data: i,
                showLabels: !0,
                label: "New Visitors",
                labelPlacement: "below",
                canvasRender: !0,
                cColor: "#FFFFFF"
            }, {
                data: e,
                showLabels: !0,
                label: "Old Visitors",
                labelPlacement: "below",
                canvasRender: !0,
                cColor: "#FFFFFF"
            }], {
                series: {
                    lines: {
                        show: !0,
                        lineWidth: 1.5,
                        fill: !0,
                        fillColor: {
                            colors: [{
                                opacity: .5
                            }, {
                                opacity: .5
                            }]
                        }
                    },
                    fillColor: "rgba(0, 0, 0, 1)",
                    points: {
                        show: !1,
                        fill: !0
                    },
                    shadowSize: 0
                },
                legend: {
                    show: !1
                },
                grid: {
                    show: !0,
                    margin: {
                        top: -20,
                        bottom: 0,
                        left: 0,
                        right: 0
                    },
                    labelMargin: 0,
                    axisMargin: 0,
                    hoverable: !0,
                    clickable: !0,
                    tickColor: "rgba(0,0,0,0)",
                    borderWidth: 0,
                    minBorderMargin: 0
                },
                colors: [r, n],
                xaxis: {
                    autoscaleMargin: 0,
                    ticks: 11,
                    tickDecimals: 0
                },
                yaxis: {
                    autoscaleMargin: .2,
                    ticks: 5,
                    tickDecimals: 0
                }
            }), o = tinycolor(App.color.primary).lighten(5).toString(), $.plot($("#line-chart1"), [{
                data: [
                    [0, 20],
                    [1, 30],
                    [2, 25],
                    [3, 39],
                    [4, 35],
                    [5, 40],
                    [6, 30],
                    [7, 45]
                ],
                label: "Page Views"
            }], {
                series: {
                    lines: {
                        show: !0,
                        lineWidth: 2,
                        fill: !0,
                        fillColor: {
                            colors: [{
                                opacity: .1
                            }, {
                                opacity: .1
                            }]
                        }
                    },
                    points: {
                        show: !0
                    },
                    shadowSize: 0
                },
                legend: {
                    show: !1
                },
                grid: {
                    margin: {
                        left: -8,
                        right: -8,
                        top: 0,
                        bottom: 0
                    },
                    show: !1,
                    labelMargin: 15,
                    axisMargin: 500,
                    hoverable: !0,
                    clickable: !0,
                    tickColor: "rgba(0,0,0,0.15)",
                    borderWidth: 0
                },
                colors: [o, "#95D9F0", "#FFDC7A"],
                xaxis: {
                    ticks: 11,
                    tickDecimals: 0
                },
                yaxis: {
                    autoscaleMargin: .5,
                    ticks: 4,
                    tickDecimals: 0
                }
            }), a = tinycolor(App.color.primary).brighten(9).toString(), l = tinycolor(App.color.primary).lighten(13).toString(), s = tinycolor(App.color.primary).lighten(20).toString(), c = tinycolor(App.color.primary).lighten(27).toString(), $.plot("#pie-chart4", [{
                label: "Google",
                data: 45
            }, {
                label: "Dribbble",
                data: 25
            }, {
                label: "Twitter",
                data: 20
            }, {
                label: "Facebook",
                data: 10
            }], {
                series: {
                    pie: {
                        show: !0,
                        innerRadius: .27,
                        shadow: {
                            top: 5,
                            left: 15,
                            alpha: .3
                        },
                        stroke: {
                            width: 0
                        },
                        label: {
                            show: !0,
                            formatter: function(t, e) {
                                return '<div style="font-size:12px;text-align:center;padding:2px;color:#333;">' + t + "</div>"
                            }
                        },
                        highlight: {
                            opacity: .08
                        }
                    }
                },
                grid: {
                    hoverable: !0,
                    clickable: !0
                },
                colors: [a, l, s, c],
                legend: {
                    show: !1
                }
            }), d = tinycolor(App.color.primary).lighten(23).toString(), u = tinycolor(App.color.primary).brighten(5).toString(), $.plot($("#bar-chart1"), [{
                data: [
                    [0, 15],
                    [1, 15],
                    [2, 19],
                    [3, 28],
                    [4, 30],
                    [5, 37],
                    [6, 35],
                    [7, 38],
                    [8, 48],
                    [9, 43],
                    [10, 38],
                    [11, 32],
                    [12, 38]
                ],
                label: "Page Views"
            }, {
                data: [
                    [0, 7],
                    [1, 10],
                    [2, 15],
                    [3, 23],
                    [4, 24],
                    [5, 29],
                    [6, 25],
                    [7, 33],
                    [8, 35],
                    [9, 38],
                    [10, 32],
                    [11, 27],
                    [12, 32]
                ],
                label: "Unique Visitor"
            }], {
                series: {
                    bars: {
                        align: "center",
                        show: !0,
                        lineWidth: 1,
                        barWidth: .6,
                        fill: !0,
                        fillColor: {
                            colors: [{
                                opacity: 1
                            }, {
                                opacity: 1
                            }]
                        }
                    },
                    shadowSize: 2
                },
                legend: {
                    show: !1
                },
                grid: {
                    margin: 0,
                    show: !1,
                    labelMargin: 10,
                    axisMargin: 500,
                    hoverable: !0,
                    clickable: !0,
                    tickColor: "rgba(0,0,0,0.15)",
                    borderWidth: 0
                },
                colors: [d, u],
                xaxis: {
                    ticks: 11,
                    tickDecimals: 0
                },
                yaxis: {
                    autoscaleMargin: .5,
                    ticks: 4,
                    tickDecimals: 0
                }
            }),
            function() {
                var t = $(".widget-calendar"),
                    e = $(".cal-notes", t),
                    i = $(".day", e),
                    r = $(".date", e),
                    n = new Date,
                    o = new Array(7);
                o[0] = "Sunday", o[1] = "Monday", o[2] = "Tuesday", o[3] = "Wednesday", o[4] = "Thursday", o[5] = "Friday", o[6] = "Saturday";
                var a = o[n.getDay()];
                i.html(a);
                var l = new Array;
                l[0] = "January", l[1] = "February", l[2] = "March", l[3] = "April", l[4] = "May", l[5] = "June", l[6] = "July", l[7] = "August", l[8] = "September", l[9] = "October", l[10] = "November", l[11] = "December";
                var s = l[n.getMonth()],
                    c = n.getDate();
                r.html(s + " " + c), void 0 !== jQuery.ui && $(".ui-datepicker").datepicker({
                    onSelect: function(t, e) {
                        var n = new Date(t),
                            a = o[n.getDay()],
                            s = l[n.getMonth()],
                            c = n.getDate();
                        i.html(a), r.html(s + " " + c)
                    }
                })
            }(), p = $(".widget-weather"), (h = new Skycons({
                color: "#555555"
            })).add($(".icon1", p)[0], Skycons.CLEAR_DAY), h.add($(".icon2", p)[0], Skycons.PARTLY_CLOUDY_DAY), h.add($(".icon3", p)[0], Skycons.RAIN), h.play()
    }, App
}(), App = function() {
    "use strict";
    return App.formElements = function() {
        $(".datetimepicker").datetimepicker({
            autoclose: !0,
            componentIcon: ".s7-date",
            navIcons: {
                rightIcon: "s7-angle-right",
                leftIcon: "s7-angle-left"
            }
        }), $(".select2").select2({
            width: "100%"
        }), $(".tags").select2({
            tags: !0,
            width: "100%"
        }), $(".bslider").bootstrapSlider()
    }, App
}(), App = function() {
    "use strict";
    return App.masks = function() {
        $("[data-mask='date']").mask("99/99/9999"), $("[data-mask='phone']").mask("(999) 999-9999"), $("[data-mask='phone-ext']").mask("(999) 999-9999? x99999"), $("[data-mask='phone-int']").mask("+33 999 999 999"), $("[data-mask='taxid']").mask("99-9999999"), $("[data-mask='ssn']").mask("999-99-9999"), $("[data-mask='product-key']").mask("a*-999-a999"), $("[data-mask='percent']").mask("99%"), $("[data-mask='currency']").mask("$999,999,999.99")
    }, App
}(), App = function() {
    "use strict";
    return App.wizard = function() {
        $(".wizard-ux").wizard(), $(".wizard-ux").on("changed.fu.wizard", function() {
            $(".bslider").slider()
        }), $(".wizard-next").click(function(t) {
            var e = $(this).data("wizard");
            $(e).wizard("next"), t.preventDefault()
        }), $(".wizard-previous").click(function(t) {
            var e = $(this).data("wizard");
            $(e).wizard("previous"), t.preventDefault()
        }), $(".select2").select2({
            width: "100%"
        }), $(".tags").select2({
            tags: !0,
            width: "100%"
        }), $("#credit_slider").slider().on("slide", function(t) {
            $("#credits").html("$" + t.value)
        }), $("#rate_slider").slider().on("slide", function(t) {
            $("#rate").html(t.value + "%")
        })
    }, App
}(), App = function() {
    "use strict";
    return App.textEditors = function() {
        $("#editor1").summernote({
            height: 300
        })
    }, App
}(), App = function() {
    "use strict";
    return App.emailCompose = function() {
        $(".tags").select2({
            tags: 0,
            width: "100%"
        }), $("#email-editor").summernote({
            height: 200
        })
    }, App
}(), App = function() {
    "use strict";
    return App.emailInbox = function() {
        $(".am-select-all input").on("change", function() {
            var t = $(".email-list").find('input[type="checkbox"]');
            $(this).is(":checked") ? t.prop("checked", !0) : t.prop("checked", !1)
        })
    }, App
}(), App = function() {
    "use strict";
    return App.mapsGoogle = function() {
        var t = {
            zoom: 14,
            center: new google.maps.LatLng(-33.877827, 151.188598),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        new google.maps.Map(document.getElementById("map_one"), t);
        t = {
            zoom: 14,
            center: new google.maps.LatLng(-33.877827, 151.188598),
            mapTypeId: google.maps.MapTypeId.HYBRID
        };
        new google.maps.Map(document.getElementById("map_two"), t);
        t = {
            zoom: 14,
            center: new google.maps.LatLng(-33.877827, 151.188598),
            mapTypeId: google.maps.MapTypeId.TERRAIN
        };
        new google.maps.Map(document.getElementById("map_three"), t)
    }, App
}(), App = function() {
    "use strict";
    return App.mapsVector = function() {
        var t = App.color.alt3,
            e = App.color.alt2,
            i = App.color.primary,
            r = App.color.alt4,
            n = tinycolor(App.color.alt1).lighten(3).toString(),
            o = App.color.success,
            a = tinycolor(App.color.alt4).lighten(5).toString();
        $("#usa-map").vectorMap({
            map: "us_merc_en",
            backgroundColor: "transparent",
            regionStyle: {
                initial: {
                    fill: t
                },
                hover: {
                    "fill-opacity": .8
                }
            }
        }), $("#france-map").vectorMap({
            map: "fr_merc_en",
            backgroundColor: "transparent",
            regionStyle: {
                initial: {
                    fill: e
                },
                hover: {
                    "fill-opacity": .8
                }
            }
        }), $("#uk-map").vectorMap({
            map: "uk_mill_en",
            backgroundColor: "transparent",
            regionStyle: {
                initial: {
                    fill: i
                },
                hover: {
                    "fill-opacity": .8
                }
            }
        }), $("#chicago-map").vectorMap({
            map: "us-il-chicago_mill_en",
            backgroundColor: "transparent",
            regionStyle: {
                initial: {
                    fill: r
                },
                hover: {
                    "fill-opacity": .8
                }
            }
        }), $("#australia-map").vectorMap({
            map: "au_mill_en",
            backgroundColor: "transparent",
            regionStyle: {
                initial: {
                    fill: n
                },
                hover: {
                    "fill-opacity": .8
                }
            }
        }), $("#india-map").vectorMap({
            map: "in_mill_en",
            backgroundColor: "transparent",
            regionStyle: {
                initial: {
                    fill: o
                },
                hover: {
                    "fill-opacity": .8
                }
            }
        }), $("#vector-map").vectorMap({
            map: "map",
            backgroundColor: "transparent",
            regionStyle: {
                initial: {
                    fill: a,
                    "fill-opacity": .8,
                    stroke: "none",
                    "stroke-width": 0,
                    "stroke-opacity": 1
                },
                hover: {
                    "fill-opacity": .8
                }
            },
            markerStyle: {
                initial: {
                    r: 10
                }
            },
            markers: [{
                coords: [100, 100],
                name: "Marker 1",
                style: {
                    fill: "#acb1b6",
                    stroke: "#cfd5db",
                    "stroke-width": 3
                }
            }, {
                coords: [200, 200],
                name: "Marker 2",
                style: {
                    fill: "#acb1b6",
                    stroke: "#cfd5db",
                    "stroke-width": 3
                }
            }]
        }), $("#canada-map").vectorMap({
            map: "ca_lcc_en",
            backgroundColor: "transparent",
            regionStyle: {
                initial: {
                    fill: t
                },
                hover: {
                    "fill-opacity": .8
                }
            }
        })
    }, App
}(), App = function() {
    "use strict";
    return App.pageCalendar = function() {
        $("#external-events .fc-event").each(function() {
            $(this).data("event", {
                title: $.trim($(this).text()),
                stick: !0
            }), $(this).draggable({
                zIndex: 999,
                revert: !0,
                revertDuration: 0
            })
        });
        var t, e, i = new Date,
            r = i.getDate(),
            n = i.getMonth(),
            o = i.getFullYear();
        $("#calendar").fullCalendar({
            header: {
                left: "title",
                center: "",
                right: "month,agendaWeek,agendaDay, today, prev,next"
            },
            defaultDate: i,
            editable: !0,
            eventLimit: !0,
            droppable: !0,
            drop: function() {
                $("#drop-remove").is(":checked") && $(this).remove()
            },
            events: [{
                title: "All Day Event",
                start: new Date(o, n, r - 1)
            }, {
                title: "Long Event",
                start: new Date(o, n, r - 5),
                end: new Date(o, n, r - 1)
            }, {
                id: 999,
                title: "Repeating Event",
                start: new Date(o, n, r - 3, 16, 0),
                allDay: !1
            }, {
                id: 999,
                title: "Repeating Event",
                start: new Date(o, n, r + 4, 16, 0),
                allDay: !1
            }, {
                title: "Meeting",
                start: new Date(o, n, r, 10, 30),
                allDay: !1
            }, {
                title: "Lunch",
                start: new Date(o, n, r, 12, 0),
                end: new Date(o, n, r, 14, 0),
                allDay: !1
            }, {
                title: "Birthday Party",
                start: new Date(o, n, r + 1, 19, 0),
                end: new Date(o, n, r + 1, 22, 30),
                allDay: !1
            }, {
                title: "Click for Google",
                start: new Date(o, n, 28),
                end: new Date(o, n, 30),
                url: "http://google.com/"
            }]
        }), t = $(".widget-weather"), (e = new Skycons({
            color: "#555555"
        })).add($(".icon1", t)[0], Skycons.CLEAR_DAY), e.add($(".icon2", t)[0], Skycons.PARTLY_CLOUDY_DAY), e.add($(".icon3", t)[0], Skycons.RAIN), e.play()
    }, App
}(), App = function() {
    "use strict";
    return App.pageGallery = function() {
        var t = $(".gallery-container");
        t.masonry({
            columnWidth: 0,
            itemSelector: ".item"
        }), $("#sidebar-collapse").click(function() {
            t.masonry()
        }), $(".image-zoom").magnificPopup({
            type: "image",
            mainClass: "mfp-with-zoom",
            zoom: {
                enabled: !0,
                duration: 300,
                easing: "ease-in-out",
                opener: function(t) {
                    return $(t).parents("div.img")
                }
            }
        }), t.masonry()
    }, App
}(), App = function() {
    "use strict";
    return App.pageProfile = function() {
        $.plot("#linechart-mini1", [{
                data: [
                    [1, 20],
                    [2, 60],
                    [3, 35],
                    [4, 70],
                    [5, 45]
                ],
                canvasRender: !0
            }, {
                data: [
                    [1, 60],
                    [2, 20],
                    [3, 65],
                    [4, 35],
                    [5, 65]
                ],
                canvasRender: !0
            }], {
                series: {
                    lines: {
                        show: !0,
                        lineWidth: 0,
                        fill: !0,
                        fillColor: {
                            colors: [{
                                opacity: .7
                            }, {
                                opacity: .7
                            }]
                        }
                    },
                    fillColor: "rgba(0, 0, 0, 1)",
                    shadowSize: 0,
                    curvedLines: {
                        apply: !0,
                        active: !0,
                        monotonicFit: !0
                    }
                },
                legend: {
                    show: !1
                },
                grid: {
                    show: !1,
                    hoverable: !0,
                    clickable: !0
                },
                colors: ["#FFDC7A", "#FFDC7A"],
                xaxis: {
                    autoscaleMargin: 0,
                    ticks: 11,
                    tickDecimals: 0
                },
                yaxis: {
                    autoscaleMargin: .5,
                    ticks: 5,
                    tickDecimals: 0
                }
            }), $.plot($("#barchart-mini1"), [{
                data: [
                    [0, 15],
                    [1, 15],
                    [2, 19],
                    [3, 28],
                    [4, 30],
                    [5, 37],
                    [6, 35],
                    [7, 38],
                    [8, 48],
                    [9, 43],
                    [10, 38],
                    [11, 32],
                    [12, 38]
                ],
                label: "Page Views"
            }, {
                data: [
                    [0, 7],
                    [1, 10],
                    [2, 15],
                    [3, 23],
                    [4, 24],
                    [5, 29],
                    [6, 25],
                    [7, 33],
                    [8, 35],
                    [9, 38],
                    [10, 32],
                    [11, 27],
                    [12, 32]
                ],
                label: "Unique Visitor"
            }], {
                series: {
                    bars: {
                        align: "center",
                        show: !0,
                        lineWidth: 1,
                        barWidth: .8,
                        fill: !0,
                        fillColor: {
                            colors: [{
                                opacity: 1
                            }, {
                                opacity: 1
                            }]
                        }
                    },
                    shadowSize: 0
                },
                legend: {
                    show: !1
                },
                grid: {
                    margin: 0,
                    show: !1,
                    labelMargin: 10,
                    axisMargin: 500,
                    hoverable: !0,
                    clickable: !0,
                    tickColor: "rgba(0,0,0,0.15)",
                    borderWidth: 0
                },
                colors: ["#ADC0D8", "#88A3C6"],
                xaxis: {
                    ticks: 11,
                    tickDecimals: 0
                },
                yaxis: {
                    autoscaleMargin: .5,
                    ticks: 4,
                    tickDecimals: 0
                }
            }),
            function() {
                var t = $(".widget-calendar"),
                    e = $(".cal-notes", t),
                    i = $(".day", e),
                    r = $(".date", e),
                    n = new Date,
                    o = new Array(7);
                o[0] = "Sunday", o[1] = "Monday", o[2] = "Tuesday", o[3] = "Wednesday", o[4] = "Thursday", o[5] = "Friday", o[6] = "Saturday";
                var a = o[n.getDay()];
                i.html(a);
                var l = new Array;
                l[0] = "January", l[1] = "February", l[2] = "March", l[3] = "April", l[4] = "May", l[5] = "June", l[6] = "July", l[7] = "August", l[8] = "September", l[9] = "October", l[10] = "November", l[11] = "December";
                var s = l[n.getMonth()],
                    c = n.getDate();
                r.html(s + " " + c), void 0 !== jQuery.ui && $(".ui-datepicker").datepicker({
                    onSelect: function(t, e) {
                        var n = new Date(t),
                            a = o[n.getDay()],
                            s = l[n.getMonth()],
                            c = n.getDate();
                        i.html(a), r.html(s + " " + c)
                    }
                })
            }()
    }, App
}(), App = function() {
    "use strict";
    return App.dataTables = function() {
        $.extend(!0, $.fn.dataTable.defaults, {
            dom: "<'row am-datatable-header'<'col-sm-6'l><'col-sm-6'f>><'row am-datatable-body'<'col-sm-12'tr>><'row am-datatable-footer'<'col-sm-5'i><'col-sm-7'p>>"
        }), $.extend($.fn.dataTable.ext.classes, {
            sFilterInput: "form-control form-control-sm",
            sLengthSelect: "form-control form-control-sm"
        }), $("#table1").dataTable(), $("#table2").dataTable({
            pageLength: 6,
            dom: "<'row am-datatable-body'<'col-sm-12'tr>><'row am-datatable-footer'<'col-sm-5'i><'col-sm-7'p>>"
        }), $("#table3").dataTable({
            buttons: [{
                extend: "copy",
                className: "btn-secondary"
            }, {
                extend: "excel",
                className: "btn-secondary"
            }, {
                extend: "pdf",
                className: "btn-secondary"
            }, {
                extend: "print",
                className: "btn-secondary"
            }],
            lengthMenu: [
                [6, 10, 25, 50, -1],
                [6, 10, 25, 50, "All"]
            ],
            dom: "<'row am-datatable-header'<'col-sm-6'l><'col-sm-6 text-right'B>><'row am-datatable-body'<'col-sm-12'tr>><'row am-datatable-footer'<'col-sm-5'i><'col-sm-7'p>>"
        })
    }, App
}(), App = function() {
    "use strict";
    return App.uiChat = function() {
        var t, e;
        t = App.scroller.initScroller($(".am-scroller-page-chat")), e = App.scroller.initScroller($(".am-scroller-page-messages")), $(window).resize(function() {
            waitForFinalEvent(function() {
                App.scroller.updateScroller(t), App.scroller.updateScroller(e)
            }, 500)
        })
    }, App
}(), App = function() {
    "use strict";
    return App.uiNestableLists = function() {
        function t(t, e) {
            var i = $(t).nestable("serialize");
            $(e).html(window.JSON.stringify(i))
        }
        $(".dd").nestable(), t("#list1", "#out1"), t("#list2", "#out2"), $("#list1").on("change", function() {
            t("#list1", "#out1")
        }), $("#list2").on("change", function() {
            t("#list2", "#out2")
        })
    }, App
}(), App = function() {
    "use strict";
    return App.uiNotifications = function() {
        $("html").hasClass("rtl") && $.extend($.gritter.options, {
            position: "top-left"
        }), $("#not-basic").click(function() {
            return $.gritter.add({
                title: "Samantha new msg!",
                text: "You have a new Thomas message, let's checkout your inbox.",
                image: App.conf.assetsPath + "/" + App.conf.imgPath + "/avatar.jpg",
                time: "",
                class_name: "img-rounded"
            }), !1
        }), $("#not-theme").click(function() {
            return $.gritter.add({
                title: "Welcome home!",
                text: "You can start your day checking the new messages.",
                image: App.conf.assetsPath + "/" + App.conf.imgPath + "/avatar6.jpg",
                class_name: "clean img-rounded",
                time: ""
            }), !1
        }), $("#not-sticky").click(function() {
            return $.gritter.add({
                title: "Sticky Note",
                text: "Your daily goal is 130 new code lines, don't forget to update your work.",
                image: App.conf.assetsPath + "/" + App.conf.imgPath + "/slack_logo.png",
                class_name: "clean",
                sticky: !0,
                time: ""
            }), !1
        }), $("#not-text").click(function() {
            return $.gritter.add({
                title: "Just Text",
                text: "This is a simple Gritter Notification. Etiam efficitur efficitur nisl eu dictum, nullam non orci elementum.",
                class_name: "clean",
                time: ""
            }), !1
        }), $("#not-tr").click(function() {
            return $.extend($.gritter.options, {
                position: "top-right"
            }), $.gritter.add({
                title: "Top Right",
                text: "This is a simple Gritter Notification. Etiam efficitur efficitur nisl eu dictum, nullam non orci elementum",
                class_name: "clean"
            }), !1
        }), $("#not-tl").click(function() {
            return $.extend($.gritter.options, {
                position: "top-left"
            }), $.gritter.add({
                title: "Top Left",
                text: "This is a simple Gritter Notification. Etiam efficitur efficitur nisl eu dictum, nullam non orci elementum",
                class_name: "clean"
            }), !1
        }), $("#not-bl").click(function() {
            return $.extend($.gritter.options, {
                position: "bottom-left"
            }), $.gritter.add({
                title: "Bottom Left",
                text: "This is a simple Gritter Notification. Etiam efficitur efficitur nisl eu dictum, nullam non orci elementum",
                class_name: "clean"
            }), !1
        }), $("#not-br").click(function() {
            return $.extend($.gritter.options, {
                position: "bottom-right"
            }), $.gritter.add({
                title: "Bottom Right",
                text: "This is a simple Gritter Notification. Etiam efficitur efficitur nisl eu dictum, nullam non orci elementum",
                class_name: "clean"
            }), !1
        }), $("#not-facebook").click(function() {
            return $.gritter.add({
                title: "You have comments!",
                text: "You can start your day checking the new messages.",
                image: App.conf.assetsPath + "/" + App.conf.imgPath + "/fb-icon.png",
                class_name: "color facebook"
            }), !1
        }), $("#not-twitter").click(function() {
            return $.gritter.add({
                title: "You have new followers!",
                text: "You can start your day checking the new messages.",
                image: App.conf.assetsPath + "/" + App.conf.imgPath + "/tw-icon.png",
                class_name: "color twitter"
            }), !1
        }), $("#not-google-plus").click(function() {
            return $.gritter.add({
                title: "You have new +1!",
                text: "You can start your day checking the new messages.",
                image: App.conf.assetsPath + "/" + App.conf.imgPath + "/gp-icon.png",
                class_name: "color google-plus"
            }), !1
        }), $("#not-dribbble").click(function() {
            return $.gritter.add({
                title: "You have new comments!",
                text: "You can start your day checking the new comments.",
                image: App.conf.assetsPath + "/" + App.conf.imgPath + "/db-icon.png",
                class_name: "color dribbble"
            }), !1
        }), $("#not-flickr").click(function() {
            return $.gritter.add({
                title: "You have new comments!",
                text: "You can start your day checking the new comments.",
                image: App.conf.assetsPath + "/" + App.conf.imgPath + "/fl-icon.png",
                class_name: "color flickr"
            }), !1
        }), $("#not-linkedin").click(function() {
            return $.gritter.add({
                title: "You have new comments!",
                text: "You can start your day checking the new comments.",
                image: App.conf.assetsPath + "/" + App.conf.imgPath + "/in-icon.png",
                class_name: "color linkedin"
            }), !1
        }), $("#not-youtube").click(function() {
            return $.gritter.add({
                title: "You have new comments!",
                text: "You can start your day checking the new comments.",
                image: App.conf.assetsPath + "/" + App.conf.imgPath + "/yt-icon.png",
                class_name: "color youtube"
            }), !1
        }), $("#not-pinterest").click(function() {
            return $.gritter.add({
                title: "You have new comments!",
                text: "You can start your day checking the new comments.",
                image: App.conf.assetsPath + "/" + App.conf.imgPath + "/pi-icon.png",
                class_name: "color pinterest"
            }), !1
        }), $("#not-github").click(function() {
            return $.gritter.add({
                title: "You have new forks!",
                text: "You can start your day checking the new comments.",
                image: App.conf.assetsPath + "/" + App.conf.imgPath + "/gh-icon.png",
                class_name: "color github"
            }), !1
        }), $("#not-tumblr").click(function() {
            return $.gritter.add({
                title: "You have new comments!",
                text: "You can start your day checking the new comments.",
                image: App.conf.assetsPath + "/" + App.conf.imgPath + "/tu-icon.png",
                class_name: "color tumblr"
            }), !1
        }), $("#not-primary").click(function() {
            $.gritter.add({
                title: "Primary",
                text: "This is a simple Gritter Notification.",
                class_name: "color primary"
            })
        }), $("#not-success").click(function() {
            $.gritter.add({
                title: "Success",
                text: "This is a simple Gritter Notification.",
                class_name: "color success"
            })
        }), $("#not-info").click(function() {
            $.gritter.add({
                title: "Info",
                text: "This is a simple Gritter Notification.",
                class_name: "color info"
            })
        }), $("#not-warning").click(function() {
            $.gritter.add({
                title: "Warning",
                text: "This is a simple Gritter Notification.",
                class_name: "color warning"
            })
        }), $("#not-danger").click(function() {
            $.gritter.add({
                title: "Danger",
                text: "This is a simple Gritter Notification.",
                class_name: "color danger"
            })
        }), $("#not-ac1").click(function() {
            $.gritter.add({
                title: "Alt Color 1",
                text: "This is a simple Gritter Notification.",
                class_name: "color alt1"
            })
        }), $("#not-ac2").click(function() {
            $.gritter.add({
                title: "Alt Color 2",
                text: "This is a simple Gritter Notification.",
                class_name: "color alt2"
            })
        }), $("#not-ac3").click(function() {
            $.gritter.add({
                title: "Alt Color 3",
                text: "This is a simple Gritter Notification.",
                class_name: "color alt3"
            })
        }), $("#not-ac4").click(function() {
            $.gritter.add({
                title: "Alt Color 4",
                text: "This is a simple Gritter Notification.",
                class_name: "color alt4"
            })
        }), $("#not-dark").click(function() {
            $.gritter.add({
                title: "Dark Color",
                text: "This is a simple Gritter Notification.",
                class_name: "color dark"
            })
        })
    }, App
}();