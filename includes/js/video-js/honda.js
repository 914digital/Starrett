'use strict';
var c;
function k() {
}
k.prototype.init = function (a) {
    this.uc = a;
    this.i = !1
};
k.prototype.load = function (a) {
    var b = new XMLHttpRequest;
    b.open("GET", this.uc + "local/" + a + ".json", !0);
    b.onreadystatechange = this.Yd.bind(this);
    b.send(null)
};
k.prototype.Yd = function (a) {
    a = a.currentTarget;
    4 == a.readyState && 200 == a.status && (this.jc = JSON.parse(a.responseText), this.i = !0)
};
function m(a, b) {
    for (var d = a.jc.length; d--;)if (a.jc[d].term === b)return a.jc[d].definition;
    return "Localisation. Value not found for key: " + b
}
k.prototype.m = function () {
    return this.i
};
function n() {
}
n.prototype.init = function (a) {
    this.b = a
};
function q(a, b, d, e) {
    var f = window.ga;
    f && a && b && (e ? (f("send", "event", a, b, d, e), f("sample10.send", "event", a, b, d, e)) : d ? (f("send", "event", a, b, d), f("sample10.send", "event", a, b, d)) : (f("send", "event", a, b), f("sample10.send", "event", a, b)))
}
function s(a) {
    q("Links", "click", a, void 0)
}
window.location.origin || (window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : ""));
function t(a, b, d, e, f) {
    f && (document.body.style.background = "#000000", this.h = new u, this.h.init(a, b, d, e), requestAnimationFrame(this.update.bind(this)), createjs.Ticker.setFPS(60))
}
t.prototype.update = function () {
    requestAnimationFrame(this.update.bind(this));
    this.h.update()
};
t.prototype.fb = function () {
    this.h.fb()
};
t.prototype.gb = function (a) {
    this.h.gb(a)
};
t.prototype.hb = function (a, b) {
    this.h.hb(a, b)
};
(function () {
    for (var a = 0, b = ["ms", "moz", "webkit", "o"], d = 0; d < b.length && !window.requestAnimationFrame; ++d)window.requestAnimationFrame = window[b[d] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[b[d] + "CancelAnimationFrame"] || window[b[d] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function (b) {
        var d = (new Date).getTime(), g = Math.max(0, 16 - (d - a)), h = window.setTimeout(function () {
            b(d + g)
        }, g);
        a = d + g;
        return h
    });
    window.cancelAnimationFrame || (window.cancelAnimationFrame =
        function (a) {
            clearTimeout(a)
        })
})();
window.Application = t;
t.prototype.onYouTubeAPIReady = t.prototype.fb;
t.prototype.onYouTubePlayerReady = t.prototype.gb;
t.prototype.onYouTubePlayerStateChange = t.prototype.hb;
function u() {
}
c = u.prototype;
c.init = function (a, b, d, e) {
    this.sc = a;
    this.r = b;
    this.ta = d;
    this.uc = e;
    this.Id = -1 < navigator.userAgent.indexOf("Chrome");
    navigator.userAgent.indexOf("MSIE");
    navigator.userAgent.indexOf("Firefox");
    this.ic = -1 < navigator.userAgent.indexOf("Safari");
    navigator.userAgent.indexOf("Presto");
    this.Id && this.ic && (this.ic = !1);
    this.tc = "de-at ee nl-be fr-be cs dk fi fr de hu it nl no pl pt sk es se fr-ch de-ch it-ch en-gb".split(" ");
    this.Ic = 0;
    this.Jc = 1;
    this.Fc = 2;
    this.Gc = 3;
    this.Hc = 4;
    this.Lc = 5;
    this.Nc = 6;
    this.Kc = 7;
    this.Ad =
        8;
    this.Mc = 9;
    this.O = this.Ic;
    this.Bc = 0;
    this.Wb = 1;
    this.Ua = 2;
    this.Zb = 3;
    this.Yb = 4;
    this.mode = this.Bc;
    var f = !1;
    if (!0 === document.fullscreenEnabled || !0 === document.mozFullScreenEnabled || document.documentElement.webkitRequestFullScreen || document.documentElement.msRequestFullscreen)f = !0;
    this.vc = f;
    this.N = !1;
    !0 === this.vc && (document.addEventListener("fullscreenchange", this.Mb.bind(this), !1), document.addEventListener("mozfullscreenchange", this.Mb.bind(this), !1), document.addEventListener("webkitfullscreenchange",
        this.Mb.bind(this), !1), document.addEventListener("MSFullscreenChange", this.Mb.bind(this), !1));
    this.e = new k;
    this.na = new w;
    this.Vb = new x;
    this.R = new y;
    this.$ = new z;
    this.Ya = new A;
    this.wa = new B;
    this.b = new C;
    this.ca = new D;
    this.ja = new E;
    this.H = new n;
    this.e.init(e);
    this.na.init(a, 900, this.e);
    this.Vb.init(a, 1E3, this.e, d, b, this.tc, this.R);
    this.R.init(d, this.tc);
    this.$.init(a, 900, this.e, d, b, this, this.R);
    this.Ya.init(a, 802, this.b, d);
    this.wa.init(a, 500, this.e, d);
    this.b.init(a, this, 700, this.e, this.Ya, d, this.r);
    this.ja.init(a, 600, this.e, d, b);
    this.ca.init(this, a, 100, this.e, d, b);
    this.H.init(this.b);
    window.onresize = this.l.bind(this);
    this.e.load(b)
};
c.update = function () {
    var a = this.mode;
    if (a === this.Bc) {
        var b = this.O, d = this.e, a = this.Vb, e = this.R, f = this.$, g = this.Ya, h = this.wa, l = this.b, r = this.ja;
        if (b === this.Ic)!0 === d.m() && (this.na.K(), this.$.K(), this.b.K(), this.ca.K(), this.ja.K(), this.O = this.Jc, a.s()); else if (b === this.Jc)!0 === a.m() && (this.O = this.Fc, e.s()); else if (b === this.Fc) {
            if (!0 === e.m()) {
                b = F(f.R, this.r, 0.25);
                d = document.createElement("div");
                d.style.cssText = "position: absolute; width: 25px; height: 15px; top: 0px; left: 0px; overflow: hidden;";
                f.Ka.appendChild(d);
                d.appendChild(b);
                var b = a.Sb, d = a.ub, e = a.R, h = g = 0, p;
                for (p = 0; p < b.length; p++)l = document.createElement("div"), l.bd = b[p], l.style.cssText = "position: absolute; width: 50px; height: 53px; top: " + 69 * g + "px; left: " + 77 * h + "px; overflow: hidden; cursor: pointer; ", d.appendChild(l), r = F(e, b[p], 0.5), l.appendChild(r), l.onclick = a.Qd.bind(a), h++, 5 === h && (h = 0, g++);
                this.O = this.Gc;
                f.s()
            }
        } else b === this.Gc ? !0 === f.m() && (this.O = this.Hc, h.s()) : b === this.Hc ? !0 === h.m() && (this.O = this.Lc, l.s()) : b === this.Lc ? !0 === l.m() && (this.O = this.Nc,
            this.ca.s()) : b === this.Nc ? !0 === this.ca.m() && (this.O = this.Kc, r.s()) : b === this.Kc ? !0 === r.m() && (this.O = this.Mc, g.s()) : b === this.Mc && !0 === g.m() && (this.O = this.Ad, this.na.j(), this.H.Jd = (new Date).getTime());
        !0 === this.na.q && this.W(this.Wb)
    } else a === this.Wb ? !0 === this.wa.q && this.W(this.Ua) : a === this.Ua ? !0 === this.b.q && this.W(this.Zb) : a === this.Zb ? !0 === this.ca.q && (!0 === this.ca.oc ? this.W(this.Ua) : this.W(this.Yb)) : a === this.Yb && (!0 === this.ja.Ob && this.ca.A(), !0 === this.ja.q && this.W(this.Ua));
    this.na.update();
    this.Ya.update();
    this.b.update()
};
c.W = function (a) {
    a === this.Wb ? (this.wa.show(), this.$.show(), this.mode = a) : a === this.Ua ? (this.b.show(), this.mode = a) : a === this.Zb ? (this.ca.show(), this.mode = a) : a === this.Yb && (this.ja.show(), this.mode = a)
};
c.fb = function () {
    this.b.fb()
};
c.gb = function (a) {
    this.b.gb(a)
};
c.hb = function (a, b) {
    this.b.hb(a, b)
};
function G() {
    document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
}
c.Mb = function () {
    !1 === document.fullscreen && (this.N = !1);
    null === document.msFullscreenElement && (this.N = !1);
    !1 === document.mozFullScreen && (this.N = !1);
    !1 === document.webkitIsFullScreen && (this.N = !1);
    !1 === this.N && (this.b.kc(), this.b.l(), this.$.a.style.visibility = "visible")
};
c.l = function () {
    var a = window.innerWidth, b = window.innerHeight;
    this.na.l && this.na.l();
    this.wa.l && this.wa.l();
    this.b.l && this.b.l();
    this.$.l && this.$.l();
    this.ja.l(a, b)
};
function w() {
}
c = w.prototype;
c.init = function (a, b, d) {
    this.e = d;
    this.p = 500;
    this.q = !1;
    this.Ia = 0;
    this.re = 3;
    this.a = document.createElement("div");
    this.a.id = "preloader";
    this.a.className = "page";
    this.a.style.cssText += "z-index: " + b + ";";
    a.appendChild(this.a);
    this.n = document.createElement("div");
    this.n.className = "center_v";
    this.a.appendChild(this.n);
    this.k = document.createElement("div");
    this.k.className = "center_h";
    this.n.appendChild(this.k);
    this.Qb = document.createElement("img");
    this.Qb.style.cssText = "position: absolute;width: 104px; height: 92px; left: -58px; top:-51px;";
    this.Qb.src =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABcCAIAAAANlWdNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMjgwMTE3NDA3MjA2ODExODA4M0RCNjYyRjE0NzMwMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpENDI0QTA3RTJBQTgxMUU0OUVEM0JDOTE0QjM5NjE3QyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpENDI0QTA3RDJBQTgxMUU0OUVEM0JDOTE0QjM5NjE3QyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDM4MDExNzQwNzIwNjgxMTgwODNEQjY2MkYxNDczMDIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDI4MDExNzQwNzIwNjgxMTgwODNEQjY2MkYxNDczMDIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz56pDxTAAAGm0lEQVR42uycbVMSaxjH2V0SKCpMMBxBw0cssUayyeo0ZdP0qr5PH6HP0PkcvqmmNM6EikceRMwHlkeBFRUXZUBhORe7Z0oTdu8957w53Pc14/9FA4795r6v6/rfT5RGo7l06ZKGhBi1Wk0QBJRPUh0dHeVymSCT4u3bt+/evUP5pPb09FSo1WiGCQQC9Xr9f/Hfg7+Toqj//FsTLtfDhw9V/MalpSUYnwaDAfPhls/n4/E44odp+Pny5QsoAVcqlex2O+QuVHAfPnwAvXz5MubglpeXQbu6utSNuLt372IObn5+HvTmzZuo4GpiPH36FHNwnz9/BjWbzajgoNxAcXj85DHm4KCvgAE0Pj6uAhx8wT3p/gc1vp0COEB9cLvdKsBBGdbpdKSwHh0d3bt3DxUchMfjATWZTJiDOz4+Hh0dZRgGFdynT59AO02dmIPb3NzUarVmswUV3OzsLGivrRdzcGCiQO12Gyo4nufBtE5PT2MO7uvXr6A9PT2o4CBOTk4ePHiAOTjI9VAqb926pQJcpVKZnJzEHBxAgMKKYqJ+gjs8PAS3odfrMWdXKBRQeuCf4BYWFkAtFgsB53SOqQAntXLd3d2Yg+Ny3LVrV01KndlPcNLiEhlxvmUf6ODgACo46P2q1Sqi4WhncL4GuP7+flRwkuEghXVurrEq19fXpwKcWIlxH3H5/G6pVALHigqOoigYcTC3waxhzy7vdDpRwUHHHIlEaJq2Wq0E3MjIiIqpuuBttHI2mw1zcBzH9Vit8l7gHDjPHx5Ei9vesb6+DplLPs2dA+f1egVBGBoawhxcIBAAledwDhz0cTxfdLlcmINbWmq0cgMDA6jgRKtfuHPnDubgIpE1GEPqwIkW10m2u7LZ7KAqcKlUymAwIG7KtnEAuIHBQRXg/lxZUZzeOEQmkwG7KjPzfgW3tLiIYnHbPliWZRhmeHgYFdzcPJLFbftYW1sDvX37Niq4Is+D1R8bG8McXDAYBHWOOlHBSU5NcW2g7WNFzPWOAYcKcLu7uzJzG5OoVCocl5PJ9XTTSmyxWK5cuYI5u1QqbbPZVYCLRCKgJM0lEon+/j4V4Pz+FdHiDmIOLhaLwbRrte3XBNziYuPgicOBew+8tbUF2uqcYRNw0WgUUiMxD1LKarVWRDf911w2S1blggGxlWux+dAcXCabRTmx096xt79XLBZbbSQ0B7eTyfTZ+xjst7uibLTVRkJzcNtbWxRNObH3D2yUbXVfhJbJi2QpeHNz02w263Q6VHB+vx9UcW8Rh1YOtOlB1ebgQqFQvV4nHcn29narVq45uGq1moH6gP2q3MbGBujExAQqOIhkMknAgV2FMdS0M2sJLpFM9vbifhZCEATwUWaLWQW4eCxmMOjJoPv+/bul2UUbWqYSg5IDmuvr611dXdDVooKTWrkJ1wRZI9Fqta5xFyo4abdiZBT3Vi6ZTIBefFajJTie5/f3D3p7cb8WF2MbD2rcv38fFZzYN7PkrFwsHtPU6xfdJy3fN1utuIMrl8updLqzs1MdOJPpOtnugjp58e64HDiWZUHJJdZQKKgOnGRxyZWR1dWwXq//5TA+Ld80a8gLOBpNOp0GnZmZQQW3s7NTLldsdtwd6056p5GyzrdycuDq9fr29pbFjPt9woTYA0+dX86kFSzuxgY51losFg95/pcLqQrgImtrN27cINtdoWDQaGy0ZT8OtyqAi7IsTdNu7Aur3+83Gq9K6QsJXEJ8+lDdy5HtGD6fz6DXn73dpQBO2uZBfOCqnR1rLAaT9NmzZ6jg4omEIAiKlzfbPna5XZiiKsBVT0/j8Th55SvH5UAfPXqECg4iHA6D1T9bUDCMQqFQq9VGRoZVgFsNha5fN50tKBgG5KvV8KpOp1cDLhzu6OhwOByYz9Zln+/sIRJlcJlMBvT58+eYg/v2zXv2bWVlcNLawDT2rRz0wOAFfiyyKYNLpRrg3Bd2K3CLg4MD0FevXqGCK5WO8/k8OFYCTnO+lVOOjx8/chyHOTitVgu1VcKHNOLE6b1iNBoxB1etVhPxhMFgkPpZJHBgcfU6PWHnXfBCfaBoGhVcMpnSUJqXL19iDs7j8TA0Q6OPOCnBkef35+bmKJqyiufQkcDlcpxocXF/fl8aQK/fvEEFVyzyJycnMncQMYlSqQQ68+JFo8iifAHsfSAQcDqdmF/wkrzqb0+eoILTNJ4bWpyampJOYWMe3d3dDMOggnv//ve9vX1C7e/A+wmlfxV/CTAANEGtd9goXcsAAAAASUVORK5CYII=";
    this.k.appendChild(this.Qb);
    this.da = document.createElement("div");
    this.da.id = "spinner";
    this.da.style.cssText = "position: absolute; background: #000; width: 50px; height: 180px; left: -25px; top: -90px;";
    this.k.appendChild(this.da);
    this.LOADING = document.createElement("div");
    this.LOADING.id = "content";
    this.LOADING.className = "preloader";
    this.LOADING.innerHTML = "";
    this.k.appendChild(this.LOADING);
    this.LOADING.style.webkitTransform = "skew(8deg, 0deg)";
    this.LOADING.style.Kd = "skew(8deg, 0deg)";
    this.LOADING.style.msTransform =
        "skew(8deg, 0deg)";
    this.LOADING.style.Ld = "skew(8deg, 0deg)";
    this.LOADING.style.transform = "skew(8deg, 0deg)"
};
c.j = function () {
    this.a.alpha = 1;
    createjs.Tween.get(this.a).to({alpha: 0}, this.p, createjs.Ease.quadOut).call(this.A, [], this).addEventListener("change", this.lc.bind(this))
};
c.lc = function () {
    this.a.style.opacity = this.a.alpha
};
c.A = function () {
    this.a.style.visibility = "hidden";
    this.q = !0
};
c.update = function () {
    this.Ia += this.re;
    360 < this.Ia && (this.Ia -= 360);
    var a = this.Ia;
    this.da.style.webkitTransform = "rotate(" + a + "deg)";
    this.da.style.Kd = "rotate(" + a + "deg)";
    this.da.style.msTransform = "rotate(" + a + "deg)";
    this.da.style.Ld = "rotate(" + a + "deg)";
    this.da.style.transform = "rotate(" + a + "deg)"
};
c.K = function () {
    this.LOADING.innerHTML = m(this.e, "loading").toUpperCase()
};
function x() {
}
c = x.prototype;
c.init = function (a, b, d, e, f, g, h) {
    this.e = d;
    this.ec = this.r = f;
    this.Sb = g;
    this.R = h;
    this.Nb = null;
    this.wd = {
        cs: "CZECH REPUBLIC (ENGLISH)",
        de: "DEUTSCHLAND",
        "de-at": "&#xD6;sterreich",
        "de-ch": "SCHWEIZ (DEUTSCH)",
        dk: "DENMARK (ENGLISH)",
        ee: "BALTICS (ENGLISH)",
        "en-gb": "UNITED KINGDOM",
        es: "Espa&#xF1;a",
        fi: "FINLAND (ENGLISH)",
        fr: "FRANCE",
        "fr-be": "Belgique (Fran&#xE7;ais)",
        "fr-ch": "Suisse (Fran&#xE7;ais)",
        hu: "Magyarorsz&#xE1;g",
        it: "ITALY (ENGLISH)",
        "it-ch": "SVIZZERA (ITALIANO)",
        nl: "Nederland",
        "nl-be": "Belgi&#xEB; (Nederlands)",
        no: "NORWAY (ENGLISH)",
        pl: "Polska",
        pt: "Portugal",
        se: "SWEDEN (ENGLISH)",
        sk: "SLOVAKIA (ENGLISH)"
    };
    this.i = !1;
    this.c = new createjs.LoadQueue(!0, e);
    this.c.on("complete", this.B.bind(this), this);
    this.p = this.u = 500;
    this.a = document.createElement("div");
    this.a.id = "language-selector";
    this.a.style.cssText = "position: absolute; width: 100%; height: 100%; z-index: " + b + ";";
    a.appendChild(this.a);
    this.t = document.createElement("div");
    this.t.id = "language-selector-block";
    this.t.style.cssText = "position: absolute; width: 100%; height: 100%; cursor: pointer; opacity: 0.7; background-color: #000000;";
    this.a.appendChild(this.t);
    this.n = document.createElement("div");
    this.n.className = "center_v";
    this.n.style.cssText += "pointer-events: none;";
    this.a.appendChild(this.n);
    this.xa = document.createElement("div");
    this.xa.style.cssText = "position: absolute; width: 438px; height: 480px; left: -219px; top: 26px; pointer-events: auto; background-color: #000000;";
    this.n.appendChild(this.xa);
    this.ub = document.createElement("div");
    this.ub.id = "flags";
    this.ub.style.cssText = "position: absolute; top: 41px; left: 42px; ";
    this.xa.appendChild(this.ub);
    this.$a = document.createElement("div");
    this.$a.id = "selected_holder";
    this.$a.style.cssText = "position: absolute; width: 200px; height: 53px; top: 416px; left: 29px; ";
    this.xa.appendChild(this.$a);
    this.ab = document.createElement("div");
    this.ab.id = "selected_flag";
    this.ab.style.cssText = "position: absolute; width: 50px; height: 34px; overflow: hidden; ";
    this.$a.appendChild(this.ab);
    this.Da = document.createElement("div");
    this.Da.id = "selected_flag";
    this.Da.className = "language_selection skew";
    this.Da.style.cssText += "position: absolute; width: 350px; height: 53px; left: 61px; top: 6px; pointer-events: none; overflow: hidden; text-transform: uppercase;";
    this.$a.appendChild(this.Da);
    this.bb = document.createElement("div");
    this.bb.id = "selector";
    this.bb.style.cssText = "position: absolute; width: 60px; height: 53px; cursor: pointer; pointer-events: auto; top: 408px; left: 356px; ";
    this.xa.appendChild(this.bb);
    this.a.style.visibility = "hidden";
    this.a.style.display = "none";
    this.a.style.opacity = 0
};
c.show = function () {
    this.t.onclick = this.Md.bind(this);
    this.bb.onclick = this.be.bind(this);
    H(this, this.r);
    this.a.style.visibility = "visible";
    this.a.style.display = "block";
    this.a.alpha = 0;
    createjs.Tween.get(this.a).to({alpha: 1}, this.u, createjs.Ease.quadOut).addEventListener("change", this.o.bind(this))
};
c.j = function () {
    this.t.onclick = null;
    this.a.alpha = 1;
    createjs.Tween.get(this.a).to({alpha: 0}, this.p, createjs.Ease.quadOut).call(this.A, [], this).addEventListener("change", this.o.bind(this))
};
c.o = function () {
    this.a.style.opacity = this.a.alpha
};
c.A = function () {
    this.a.style.visibility = "hidden"
};
c.Qd = function (a) {
    a.preventDefault();
    H(this, a.target.bd)
};
function H(a, b) {
    a.ec = b;
    null !== a.Nb && (a.ab.removeChild(a.Nb), a.Nb = null);
    var d = F(a.R, b, 0.5);
    a.ab.appendChild(d);
    a.Nb = d;
    a.Da.innerHTML = a.wd[b] || b
}
c.be = function (a) {
    a.preventDefault();
    this.j();
    this.r !== this.ec && (window.top.location.href = "?override=1&x=" + this.ec)
};
c.Md = function (a) {
    a.preventDefault();
    this.j()
};
c.s = function () {
    this.c.loadManifest([{id: "bg", src: "desktop/image/language_selector_background.png"}, {
        id: "checked",
        src: "desktop/image/checked.png"
    }])
};
c.B = function () {
    this.xa.style.backgroundImage = 'url("' + this.c.getResult("bg").src + '")';
    this.bb.style.backgroundImage = 'url("' + this.c.getResult("checked").src + '")';
    this.i = !0
};
c.m = function () {
    return this.i
};
function y() {
}
y.prototype.init = function (a, b) {
    this.Sb = b;
    this.vd = 100;
    this.ud = 105;
    this.qd = 2200;
    this.i = !1;
    this.c = new createjs.LoadQueue(!0, a);
    this.c.on("complete", this.B.bind(this), this)
};
y.prototype.s = function () {
    this.c.loadManifest([{id: "bg", src: "common/image/language_flags.png"}])
};
y.prototype.B = function () {
    this.i = !0
};
y.prototype.m = function () {
    return this.i
};
function F(a, b, d) {
    var e = a.Sb.indexOf(b), f = a.vd, g = a.ud, h = a.qd, l;
    l = document.createElement("div");
    l.style.cssText = "position: absolute; width: " + h * d + "px;height: " + g * d + "px; left: " + e * -(f * d) + "px; pointer-events: none; ";
    e = document.createElement("img");
    e.bd = b;
    e.src = a.c.getResult("bg").src;
    e.style.cssText = "position: absolute;width: " + h * d + "px;height: " + g * d + "px; ";
    l.appendChild(e);
    return l
};
function I() {
}
c = I.prototype;
c.init = function (a, b, d, e, f, g) {
    this.h = a;
    this.e = e;
    this.r = f;
    this.a = document.createElement("div");
    b.appendChild(this.a);
    this.ta = g;
    this.i = !1;
    this.c = new createjs.LoadQueue(!0, g);
    this.c.on("complete", this.B.bind(this), this);
    a = this.a;
    this.C = document.createElement("div");
    this.C.id = "social";
    a.appendChild(this.C);
    this.qb = document.createElement("div");
    this.qb.style.cssText = "position: absolute; top: 34px; left: 26px; width: 47px; height: 40px;  cursor: pointer; pointer-events: auto;";
    this.C.appendChild(this.qb);
    this.ob = document.createElement("div");
    this.ob.style.cssText = "position: absolute; top: 34px; left: 84px;width: 47px; height: 40px;  cursor: pointer; pointer-events: auto;";
    this.C.appendChild(this.ob);
    this.pb = document.createElement("div");
    this.pb.style.cssText = "position: absolute; top: 34px; left: 142px;width: 47px; height: 40px;  cursor: pointer; pointer-events: auto;";
    this.C.appendChild(this.pb);
    this.nb = document.createElement("div");
    this.nb.style.cssText = "position: absolute; top: 34px; left: 201px;width: 47px; height: 40px;  cursor: pointer; pointer-events: auto;";
    this.C.appendChild(this.nb);
    this.Sc = new J;
    this.Qc = new K;
    this.Rc = new L;
    this.Pc = new M;
    this.Sc.init(this.h.H);
    this.Qc.init(this.h.H);
    this.Rc.init(this.h.H);
    this.Pc.init(this.h.H);
    this.qb.onclick = this.ie.bind(this);
    this.ob.onclick = this.ge.bind(this);
    this.pb.onclick = this.he.bind(this);
    this.nb.onclick = this.fe.bind(this)
};
c.ie = function (a) {
    a.preventDefault();
    this.Sc.sa(window.location.origin + "/" + ("en-gb" == this.r ? "" : "o/" + this.r), m(this.e, "share_twitter_text"))
};
c.ge = function (a) {
    a.preventDefault();
    this.Qc.sa(window.location.origin + "/" + ("en-gb" == this.r ? "" : "o/" + this.r))
};
c.he = function (a) {
    a.preventDefault();
    this.Rc.sa(window.location.origin + "/" + ("en-gb" == this.r ? "" : "o/" + this.r))
};
c.fe = function (a) {
    a.preventDefault();
    this.Pc.sa(m(this.e, "share_email_subject"), m(this.e, "share_email_body"))
};
c.s = function () {
    this.c.loadManifest([{id: "asset_twitter", src: "desktop/image/social_twitter_retina.png"}, {
        id: "asset_facebook",
        src: "desktop/image/social_facebook_retina.png"
    }, {id: "asset_google", src: "desktop/image/social_google_retina.png"}, {
        id: "asset_email",
        src: "desktop/image/social_email_retina.png"
    }])
};
c.B = function () {
    var a = document.createElement("img");
    a.src = this.c.getResult("asset_twitter").src;
    this.qb.appendChild(a);
    a = document.createElement("img");
    a.src = this.c.getResult("asset_facebook").src;
    this.ob.appendChild(a);
    a = document.createElement("img");
    a.src = this.c.getResult("asset_google").src;
    this.pb.appendChild(a);
    a = document.createElement("img");
    a.src = this.c.getResult("asset_email").src;
    this.nb.appendChild(a);
    this.i = !0
};
c.m = function () {
    return this.i
};
function z() {
}
c = z.prototype;
c.init = function (a, b, d, e, f, g, h) {
    this.e = d;
    this.h = g;
    this.R = h;
    this.i = !1;
    this.c = new createjs.LoadQueue(!0, e);
    this.c.on("complete", this.B.bind(this), this);
    this.p = this.u = 500;
    this.ed = this.fd = this.dd = this.eb = this.cb = "";
    this.a = document.createElement("div");
    this.a.id = "pagefooter";
    this.a.style.cssText = "position: absolute; width: 100%; height: 256px; top: 545px; background: #000000; z-index: " + b + "; ";
    a.appendChild(this.a);
    this.Ga = document.createElement("div");
    this.Ga.className = "footer_subtitle skew";
    this.Ga.style.cssText +=
        "position: absolute; top: 18px; left: 21px; width: 226px; text-align: center; ";
    this.Ga.innerHTML = "";
    this.a.appendChild(this.Ga);
    this.C = new I;
    this.C.init(this.h, this.a, b, d, f, e);
    this.Fa = document.createElement("div");
    this.Fa.className = "footer_subtitle skew";
    this.Fa.style.cssText += "position: absolute;top: 18px; left: 273px; width: 210px; text-align: center; ";
    this.Fa.innerHTML = "";
    this.a.appendChild(this.Fa);
    this.La = document.createElement("div");
    this.La.id = "more_honda";
    this.La.style.cssText = "position: absolute; top: 34px; left: 310px; width: 48px; height: 40px; cursor: pointer; pointer-events: auto;";
    this.a.appendChild(this.La);
    this.Ma = document.createElement("div");
    this.Ma.id = "more_typer";
    this.Ma.style.cssText = "position: absolute; top: 34px; left: 374px;width: 135px; height: 40px; cursor: pointer; pointer-events: auto;";
    this.a.appendChild(this.Ma);
    this.La.onclick = this.Vd.bind(this);
    this.Ma.onclick = this.Wd.bind(this);
    this.Ka = document.createElement("div");
    this.Ka.style.cssText = "position: absolute; left: 36px; top: 91px;width: 47px; height: 14px; cursor: pointer; pointer-events: auto;";
    this.a.appendChild(this.Ka);
    this.Ka.onclick = this.Ud.bind(this);
    this.Ea = document.createElement("div");
    this.Ea.id = "terms";
    this.Ea.className = "footer_terms skew";
    this.Ea.style.cssText += "position: absolute; left: 103px; top: 93px;";
    this.a.appendChild(this.Ea);
    this.a.style.visibility = "hidden";
    this.a.style.opacity = 0
};
c.show = function () {
    this.a.style.visibility = "visible";
    this.a.alpha = 0;
    createjs.Tween.get(this.a).to({alpha: 1}, this.u, createjs.Ease.quadOut).addEventListener("change", this.o.bind(this))
};
c.j = function () {
    this.a.alpha = 1;
    createjs.Tween.get(this.a).to({alpha: 0}, this.p, createjs.Ease.quadOut).call(this.A, [], this).addEventListener("change", this.o.bind(this))
};
c.o = function () {
    this.a.style.opacity = this.a.alpha
};
c.A = function () {
    this.a.style.visibility = "hidden"
};
c.K = function () {
    var a = this.e;
    this.Ga.innerHTML = m(a, "share_experience").toUpperCase();
    var b;
    b = "" + (m(a, "copyright").toUpperCase() + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
    b += '<a id="terms_honda"style="cursor: pointer; pointer-events: auto;">' + m(a, "link_honda_co_uk").toUpperCase() + "</a>&nbsp;&nbsp;|&nbsp;";
    b += '<a id="terms_terms"style="cursor: pointer; pointer-events: auto;">' + String(m(a, "link_terms")).toUpperCase() + "</a>&nbsp;&nbsp;|&nbsp;";
    b += '<a id="terms_privacy"style="cursor: pointer; pointer-events: auto;">' +
        m(a, "link_privacy").toUpperCase() + "</a>";
    this.Ea.innerHTML = b;
    document.getElementById("terms_honda").onclick = this.je.bind(this);
    document.getElementById("terms_terms").onclick = this.le.bind(this);
    document.getElementById("terms_privacy").onclick = this.ke.bind(this);
    this.Fa.innerHTML = m(a, "more").toUpperCase();
    this.cb = m(a, "url_civic");
    this.eb = m(a, "url_type_r");
    this.dd = m(a, "url_footer_honda");
    this.fd = m(a, "url_footer_terms");
    this.ed = m(a, "url_footer_privacy")
};
c.Vd = function (a) {
    a.preventDefault();
    window.open(this.cb, "_blank")
};
c.Wd = function (a) {
    a.preventDefault();
    window.open(this.eb, "_blank")
};
c.Ud = function (a) {
    a.preventDefault();
    a = this.h;
    a.b && !a.b.getPaused() && a.b.pause();
    a.Vb.show()
};
c.je = function (a) {
    a.preventDefault();
    s("external-honda");
    window.open(this.dd, "_blank")
};
c.le = function (a) {
    a.preventDefault();
    s("external-terms");
    window.open(this.fd, "_blank")
};
c.ke = function (a) {
    a.preventDefault();
    s("external-privacy");
    window.open(this.ed, "_blank")
};
c.s = function () {
    this.c.loadManifest([{id: "asset_honda", src: "desktop/image/more_honda_retina.png"}, {
        id: "asset_typer",
        src: "desktop/image/more_typer_retina.png"
    }, {id: "asset_arrow", src: "desktop/image/language_arrow.png"}]);
    this.C.s()
};
c.B = function () {
    var a = document.createElement("img");
    a.src = this.c.getResult("asset_arrow").src;
    a.style.position = "absolute";
    a.style.top = "1px";
    a.style.left = "30px";
    this.Ka.appendChild(a);
    a = document.createElement("img");
    a.src = this.c.getResult("asset_honda").src;
    this.La.appendChild(a);
    a = document.createElement("img");
    a.src = this.c.getResult("asset_typer").src;
    this.Ma.appendChild(a);
    this.i = !0
};
c.m = function () {
    return this.i && this.C.m()
};
function A() {
}
c = A.prototype;
c.init = function (a, b, d, e) {
    this.b = d;
    this.Xb = 0;
    this.Cc = 1;
    this.Ac = 2;
    this.zc = this.Xb;
    this.fa = 0;
    this.Bd = 0.12;
    this.ad = 2 * Math.PI;
    this.u = 1E3;
    this.p = 500;
    this.i = !1;
    this.c = new createjs.LoadQueue(!0, e);
    this.c.on("complete", this.B.bind(this), this);
    this.a = document.createElement("div");
    this.a.id = "pressr";
    this.a.style.cssText += "position: absolute; width: 100px; height: 129px; z-index: " + b + "; right: 0px; bottom: 0px; text-align: center;";
    a.appendChild(this.a);
    this.Db = document.createElement("div");
    this.Db.id = "white";
    this.Db.style.cssText = "position: absolute; pointer-events: none;";
    this.a.appendChild(this.Db);
    this.U = document.createElement("div");
    this.U.id = "red";
    this.U.style.cssText = "position: absolute; pointer-events: none;";
    this.a.appendChild(this.U);
    this.U.style.opacity = 0;
    this.a.style.visibility = "hidden"
};
c.jd = function () {
    N(this.b);
    this.W(this.Ac);
    document.onmouseup = this.kd.bind(this)
};
c.kd = function () {
    O(this.b);
    this.W(this.Xb);
    document.onmouseup = null
};
c.Eb = function () {
    this.a.onmousedown = this.jd.bind(this);
    this.a.ontouchstart = this.jd.bind(this);
    this.a.ontouchend = this.kd.bind(this)
};
c.Gb = function () {
    this.a.onmousedown = null;
    document.onmouseup = null;
    this.a.ontouchstart = null;
    this.a.ontouchend = null
};
c.W = function (a) {
    switch (a) {
        case this.Xb:
            this.fa = 0;
            this.U.style.opacity = 0;
            break;
        case this.Cc:
            this.fa = 0;
            this.U.style.opacity = 0;
            break;
        case this.Ac:
            this.U.style.opacity = 1
    }
    this.zc = a
};
c.update = function () {
    this.zc === this.Cc && (this.fa += this.Bd, this.fa > this.ad && (this.fa -= this.ad), this.U.style.opacity = 0.5 + 0.5 * Math.sin(this.fa))
};
c.s = function () {
    this.c.loadManifest([{id: "asset_r", src: "desktop/image/press_r.png"}, {
        id: "asset_r_red",
        src: "desktop/image/press_r_red.png"
    }])
};
c.B = function () {
    var a = document.createElement("img");
    a.src = this.c.getResult("asset_r").src;
    this.Db.appendChild(a);
    a = document.createElement("img");
    a.src = this.c.getResult("asset_r_red").src;
    this.U.appendChild(a);
    this.i = !0
};
c.m = function () {
    return this.i
};
c.show = function () {
    this.a.style.visibility = "visible";
    this.a.style.opacity = 0;
    this.a.alpha = 0;
    createjs.Tween.get(this.a).to({alpha: 1}, this.u, createjs.Ease.quadOut).addEventListener("change", this.o.bind(this))
};
c.j = function () {
    this.a.alpha = 1;
    createjs.Tween.get(this.a).to({alpha: 0}, this.p, createjs.Ease.quadOut).call(this.A, [], this).addEventListener("change", this.o.bind(this))
};
c.o = function () {
    this.a.style.opacity = this.a.alpha
};
c.A = function () {
    this.a.style.visibility = "hidden"
};
function M() {
}
M.prototype.init = function (a) {
    this.H = a
};
M.prototype.sa = function (a, b) {
    s("sharing-email");
    window.location.href = "mailto:" + encodeURIComponent("") + "?subject=" + encodeURIComponent(a) + "&body=" + encodeURIComponent(b)
};
function J() {
}
J.prototype.init = function (a) {
    this.H = a
};
J.prototype.sa = function (a, b) {
    s("sharing-twitter");
    window.open("https://twitter.com/share?url=" + encodeURIComponent(a) + "&text=" + encodeURIComponent(b), "_blank")
};
function K() {
}
K.prototype.init = function (a) {
    this.H = a
};
K.prototype.sa = function (a) {
    s("sharing-facebook");
    window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(a), "_blank")
};
function L() {
}
L.prototype.init = function (a) {
    this.H = a
};
L.prototype.sa = function (a) {
    s("sharing-google");
    window.open("https://plus.google.com/share?url=" + encodeURIComponent(a), "_blank")
};
function B() {
}
c = B.prototype;
c.init = function (a, b, d, e) {
    this.e = d;
    this.i = !1;
    this.c = new createjs.LoadQueue(!0, e);
    this.c.on("complete", this.B.bind(this), this);
    this.u = 1E3;
    this.p = 500;
    this.q = !1;
    this.a = document.createElement("div");
    this.a.id = "intro";
    this.a.className = "page";
    this.a.style.cssText = "z-index: " + b + ";";
    a.appendChild(this.a);
    this.n = document.createElement("div");
    this.n.className = "center_v";
    this.a.appendChild(this.n);
    this.k = document.createElement("div");
    this.k.className = "center_h";
    this.n.appendChild(this.k);
    this.D = document.createElement("div");
    this.D.id = "intro_button_play";
    this.D.className = "dev";
    this.k.appendChild(this.D);
    this.a.style.visibility = "hidden";
    this.a.style.display = "none";
    this.a.style.opacity = 0
};
c.gd = function (a) {
    a.preventDefault();
    this.j()
};
c.show = function () {
    this.D.onclick = this.gd.bind(this);
    this.D.ontouchend = this.gd.bind(this);
    this.D.onmouseover = this.od.bind(this);
    this.D.onmouseout = this.nd.bind(this);
    this.q = !1;
    this.a.style.visibility = "visible";
    this.a.style.display = "block";
    this.a.alpha = 0;
    createjs.Tween.get(this.a).to({alpha: 1}, this.u, createjs.Ease.quadOut).addEventListener("change", this.o.bind(this))
};
c.j = function () {
    this.D.onclick = null;
    this.D.ontouchend = null;
    this.D.onmouseover = null;
    this.D.onmouseout = null;
    this.a.style.visibility = "hidden";
    this.a.style.display = "none";
    this.a.alpha = 1;
    createjs.Tween.get(this.a).to({alpha: 0}, this.p, createjs.Ease.quadOut).call(this.A, [], this).addEventListener("change", this.o.bind(this))
};
c.o = function () {
    this.a.style.opacity = this.a.alpha
};
c.A = function () {
    this.a.style.visibility = "hidden";
    this.q = !0
};
c.od = function (a) {
    (a.srcElement || a.target).style.opacity = 0.7
};
c.nd = function (a) {
    (a.srcElement || a.target).style.opacity = 0.85
};
c.s = function () {
    this.c.loadManifest([{id: "bg", src: "desktop/image/intro_background.jpg"}, {
        id: "play",
        src: "desktop/image/intro_play.png"
    }])
};
c.B = function () {
    this.a.style.backgroundImage = 'url("' + this.c.getResult("bg").src + '")';
    var a = document.createElement("img");
    a.src = this.c.getResult("play").src;
    this.D.appendChild(a);
    this.i = !0
};
c.m = function () {
    return this.i
};
c.l = function () {
};
function C() {
}
c = C.prototype;
c.init = function (a, b, d, e, f, g, h) {
    this.h = b;
    this.e = e;
    this.Ya = f;
    this.ta = g;
    this.tb = h;
    this.u = 1E3;
    this.p = 500;
    this.Tb = 545;
    this.ac = 0;
    this.V = -1;
    this.Ub = 10;
    this.ea = this.Lb = this.muted = this.paused = this.q = this.hc = !1;
    document.addEventListener("keydown", this.Sd.bind(this), !1);
    document.addEventListener("keyup", this.Td.bind(this), !1);
    this.a = document.createElement("div");
    this.a.id = "appplayer";
    this.a.className = "page";
    this.a.style.cssText += "top: 0px; z-index: " + d + ";";
    a.appendChild(this.a);
    this.t = document.createElement("div");
    this.t.id = "appplayer_block";
    this.t.className = "appplayer-content";
    this.t.style.cssText += "z-index: " + (d + 30) + ";";
    this.a.appendChild(this.t);
    this.t.onmousedown = this.gc.bind(this);
    this.t.onmouseup = this.gc.bind(this);
    this.t.onclick = this.gc.bind(this);
    this.f = new P;
    this.g = new P;
    this.yb = document.createElement("div");
    this.yb.id = "lb";
    this.yb.style.cssText = "position: absolute; top: 300px; width: 1262px; height: 100px; background-color: #000000; z-index: " + (d + 25) + ";";
    this.a.appendChild(this.yb);
    this.P = document.createElement("div");
    this.P.id = "appplayer_control";
    this.P.className = "appplayer-content";
    this.P.style.cssText += "z-index: " + (d + 40) + "; margin: 0 auto;";
    this.a.appendChild(this.P);
    this.v = new Q;
    this.Y = document.createElement("div");
    this.Y.id = "appplayer_pause";
    this.Y.className = "appplayer-content";
    this.Y.style.cssText += "pointer-events: none; z-index: " + (d + 60) + ";";
    this.a.appendChild(this.Y);
    this.T = new R;
    this.ba = new S;
    this.f.init(this.a, 0, d + 10, this.h, this.tb);
    this.g.init(this.a, 1, d + 20, this.h, this.tb);
    this.v.init(this.P, this.h,
        this, window.innerWidth, 545, d + 40);
    this.T.init(this.a, d + 50, this);
    this.ba.init(this.a, d + 40, this.e);
    this.a.style.top = "-2000px"
};
c.show = function () {
    this.Lb = !0;
    this.v.Eb();
    var a = this.v;
    a.d.Fb = 1;
    a.Ha();
    this.T.Eb();
    this.q = !1;
    this.hc = !0;
    this.a.style.top = "0px";
    this.a.style.visibility = "visible";
    this.a.style.opacity = 0;
    this.a.style.display = "block";
    this.V = this.Ub;
    this.f.show();
    this.g.j();
    this.l();
    this.play();
    this.a.alpha = 0;
    createjs.Tween.get(this.a).to({alpha: 1}, this.u, createjs.Ease.quadOut).addEventListener("change", this.o.bind(this))
};
c.j = function () {
    this.Lb = !1;
    !0 === this.ea && O(this);
    this.v.Gb();
    this.T.Gb();
    !0 === this.h.N && G();
    this.hc = !1;
    this.f.stop();
    this.g.stop();
    this.a.alpha = 1;
    createjs.Tween.get(this.a).to({alpha: 0}, this.p, createjs.Ease.quadOut).call(this.A, [], this).addEventListener("change", this.o.bind(this))
};
c.o = function () {
    this.a.style.opacity = this.a.alpha
};
c.A = function () {
    this.a.style.visibility = "hidden";
    this.a.style.display = "none";
    this.a.style.top = "-2000px";
    this.seek(0);
    this.f.mute();
    this.g.mute();
    this.q = !0
};
c.update = function () {
    var a = this.v, b = this.getCurrentTime(), d = this.f.getDuration();
    if (this.hc) {
        0 < this.V && (this.V--, 0 == this.V && (this.V = -1, this.v.j()));
        a.rc = d;
        var e = b / d * window.innerWidth, f = Math.floor(b / 60), g = Math.floor(d / 60);
        !1 === a.jb && (a.mb.style.width = e + "px", a.M.style.left = e - 15 + "px");
        a.ka.innerHTML = f + ":" + T(Math.floor(b - 60 * f)) + " / " + g + ":" + T(Math.floor(d - 60 * g));
        this.ba.update(b);
        1 < b && 1 < d && b > d - 0.3 && this.j()
    }
};
c.Sd = function (a) {
    if (this.Lb)switch (a.keyCode) {
        case 82:
            N(this);
            break;
        case 81:
            this.j()
    }
};
c.Td = function (a) {
    if (this.Lb)switch (a.keyCode) {
        case 82:
            O(this)
    }
};
function N(a) {
    if (!a.ea) {
        a.ea = !0;
        var b = a.ba;
        b.dc = !0;
        !0 === b.qc && b.j();
        U(a);
        a.f.j();
        a.g.show();
        a.muted || (a.f.mute(), a.g.ha());
        0 === a.ac && (b = a.h.H, b.Hd = Math.round(1E3 * b.b.getCurrentTime() - b.startTime), q("Experience", "Video", "pressedRTime", b.Hd));
        a.ac += 1
    }
}
function O(a) {
    a.ea = !1;
    U(a);
    a.f.show();
    a.g.j();
    a.muted || (a.f.ha(), a.g.mute())
}
function U(a) {
    var b = a.f.getCurrentTime();
    0.2 >= Math.abs(b - a.g.getCurrentTime()) || (a.ea && (b = a.g.getCurrentTime()), a.seek(b))
}
c.play = function () {
    var a;
    this.paused = !1;
    this.ea ? (a = this.g.getCurrentTime(), this.f.mute(), this.g.ha(), this.f.j(), this.g.show()) : (a = this.f.getCurrentTime(), this.muted ? this.f.mute() : this.f.ha(), this.g.mute(), this.f.show(), this.g.j());
    this.seek(a);
    this.f.play();
    this.g.play();
    this.v.kb();
    this.T.kb();
    a = this.h.H;
    a.startTime = Math.round(1E3 * a.b.getCurrentTime());
    a.te = Math.round((new Date).getTime() - a.Jd);
    q("Experience", "Video", "experienceStartedAfter", a.te)
};
c.pause = function () {
    this.paused = !0;
    this.v.pc();
    this.T.pc();
    this.seek(this.getCurrentTime());
    this.f.pause();
    this.g.pause()
};
c.lb = function () {
    this.paused = !1;
    this.v.kb();
    this.T.kb();
    this.f.lb();
    this.g.lb()
};
c.getPaused = function () {
    return this.paused
};
c.K = function () {
    this.ba.K()
};
c.s = function () {
    var a = document.createElement("script");
    a.src = "https://www.youtube.com/iframe_api";
    var b = document.getElementsByTagName("script")[0];
    b.parentNode.insertBefore(a, b)
};
c.fb = function () {
    this.f.cc = m(this.e, "youtube_day");
    this.g.cc = m(this.e, "youtube_night");
    V(this.f);
    V(this.g)
};
c.gb = function (a) {
    0 === a ? W(this.f) : W(this.g)
};
c.hb = function (a, b) {
    0 === a ? aa(this.f, b) : aa(this.g, b)
};
c.m = function () {
    return this.f.m() && this.g.m()
};
c.mute = function () {
    this.muted = !0;
    var a = this.v;
    a.za.style.visibility = "visible";
    a.Wa.style.visibility = "hidden";
    this.f.mute();
    this.g.mute()
};
c.ha = function () {
    this.muted = !1;
    var a = this.v;
    a.Wa.style.visibility = "visible";
    a.za.style.visibility = "hidden";
    this.ea ? (this.f.mute(), this.g.ha()) : (this.f.ha(), this.g.mute())
};
c.seek = function (a) {
    this.f.seek(a);
    this.g.seek(a)
};
c.getCurrentTime = function () {
    return this.ea ? this.g.getCurrentTime() : this.f.getCurrentTime()
};
c.l = function () {
    var a = window.innerWidth, b = window.innerHeight, d = a / 16 * 9, e = this.yb;
    !0 === this.h.N ? (void 0 !== document.msFullscreenElement ? (this.a.style.height = b + "px", this.t.style.height = b + "px", this.Y.style.height = "100%", this.T.ra(b), this.P.style.height = "100%", X(this.v, b), this.ba.ra(b - 100), Y(this.ba), this.f.l(a, b, 0), this.g.l(a, b, 0)) : (this.a.style.height = "100%", this.t.style.height = "100%", this.Y.style.height = "100%", this.T.ra(b), this.P.style.height = "100%", X(this.v, b), this.ba.ra(b - 100), this.f.l(a, d, 0), this.g.l(a,
        d, 0)), e.style.visibility = "hidden") : (this.a.style.height = "545px", this.t.style.height = "545px", this.Y.style.height = "545px", this.T.ra(545), this.P.style.height = "545px", X(this.v, 545), this.ba.ra(545), b = d < this.Tb ? 0.5 * (this.Tb - d) : 0.5 * -(d - this.Tb), b -= 2, this.f.l(a, d, b), this.g.l(a, d, b), 1056 === a ? (e.style.visibility = "visible", e.style.top = "510px") : 850 === a ? (e.style.visibility = "visible", e.style.top = "470px") : e.style.visibility = "hidden")
};
c.kc = function () {
    this.v.kc()
};
c.gc = function (a) {
    a.preventDefault()
};
function P() {
}
c = P.prototype;
c.init = function (a, b, d, e, f) {
    this.sc = a;
    this.h = e;
    this.Ba = b;
    this.tb = f;
    this.cc = "";
    this.i = !1;
    b = (b = /[?&]size=([^&]*)/.exec(window.location.search)) && decodeURIComponent(b[1].replace(/\+/g, " "));
    "small" !== b && "medium" !== b && "large" !== b && "hd720" !== b && "hd1080" !== b && "highres" !== b && "default" !== b && (b = "hd720");
    "fr" === this.tb && (b = "large");
    this.Ec = b;
    this.a = document.createElement("div");
    this.a.style.cssText = "position: absolute; width: 100%; height: 545px;z-index: " + (d + 1) + "; margin: 0 auto;";
    a.appendChild(this.a);
    this.Qa =
        document.createElement("div");
    this.Qa.style.cssText = "position: absolute; top: 0px;";
    this.a.appendChild(this.Qa);
    this.xc = document.createElement("div");
    this.xc.id = "youtube_player_" + this.Ba;
    this.Qa.appendChild(this.xc);
    1 === this.Ba && this.j()
};
function V(a) {
    a.b = new YT.Player("youtube_player_" + a.Ba, {
        height: 545,
        width: 800,
        playerVars: {controls: 0, modestBranding: 1, showinfo: 0, rel: 0, fs: 1, html5: 1}
    });
    a.b.addEventListener("onReady", "onPlayerReady_" + a.Ba);
    a.b.addEventListener("onStateChange", "onPlayerStateChange_" + a.Ba)
}
function W(a) {
    a.b.setPlaybackQuality(a.Ec);
    a.b.cueVideoById(a.cc)
}
function aa(a, b) {
    switch (b.data) {
        case 3:
            a.b.setPlaybackQuality(a.Ec);
            break;
        case 5:
            a.i = !0
    }
}
c.play = function () {
    this.b.playVideo()
};
c.stop = function () {
    this.b.pauseVideo()
};
c.mute = function () {
    this.b.mute()
};
c.ha = function () {
    this.b.unMute()
};
c.pause = function () {
    this.b.pauseVideo()
};
c.lb = function () {
    this.b.playVideo()
};
c.show = function () {
    this.Qa.style.top = "0px"
};
c.j = function () {
    this.Qa.style.top = "-2000px"
};
c.seek = function (a) {
    this.b.seekTo(a, !0)
};
c.l = function (a, b, d) {
    this.a.style.width = a + "px";
    this.a.style.height = b + "px";
    this.a.style.top = d + "px";
    this.a.style.marginTop = "";
    !0 === this.h.N && (this.a.style.top = "50%", this.a.style.marginTop = b / 2 * -1 + "px");
    d = document.getElementById("youtube_player_" + this.Ba);
    void 0 !== d && (d.width = a, d.height = b)
};
c.m = function () {
    return this.i
};
c.getDuration = function () {
    return !1 === this.i ? 0 : this.b.getDuration()
};
c.getCurrentTime = function () {
    return !1 === this.i ? 0 : this.b.getCurrentTime()
};
function Q() {
}
c = Q.prototype;
c.init = function (a, b, d, e, f, g) {
    this.b = d;
    this.h = b;
    this.wc = f;
    this.ua = 8;
    this.va = 36;
    this.zb = this.va - this.ua;
    this.u = 300;
    this.p = 500;
    this.jb = this.muted = !1;
    this.rc = this.md = 0;
    this.a = document.createElement("div");
    this.a.id = "player-video-controls";
    this.a.className = "appplayer-content";
    this.a.style.cssText += "width: 100%; height: 100%; top: 0px;";
    a.appendChild(this.a);
    this.d = document.createElement("div");
    this.d.id = "content";
    this.d.className = "dev";
    this.d.style.cssText += "position: absolute; width: 100%; height:" + this.va +
        "px; top:" + (f - this.va) + "px; background-color: #000;";
    this.a.appendChild(this.d);
    this.Na = document.createElement("img");
    this.Na.src = "static/desktop/image/transparent.png";
    this.Na.width = 1262;
    this.Na.height = this.va;
    this.Na.style.cssText = "position: absolute; ";
    this.d.appendChild(this.Na);
    this.a.onmouseenter = this.mc.bind(this);
    this.a.onmouseleave = this.nc.bind(this);
    this.Pb = document.createElement("div");
    this.Pb.id = "loading";
    this.Pb.style.cssText = "position: absolute; width: 100%; height:" + this.ua + "px; background-color: #828382;z-index: " +
        (g + 2) + ";";
    this.d.appendChild(this.Pb);
    this.mb = document.createElement("div");
    this.mb.id = "progress";
    this.mb.style.cssText = "position: absolute; width: 0px; height:" + this.ua + "px; background-color: #cc0324; cursor: pointer; z-index: " + (g + 3) + ";";
    this.d.appendChild(this.mb);
    this.ka = document.createElement("div");
    this.ka.id = "info";
    this.ka.className = "player_controls_info";
    this.ka.style.cssText += "position: absolute; width: 200px; height:" + this.zb + "px; top: 15px; left: 97px; z-index: " + (g + 4) + ";";
    this.d.appendChild(this.ka);
    this.ka.innerHTML = "0:00 / 0:00";
    this.ma = document.createElement("div");
    this.ma.id = "pause";
    this.ma.style.cssText = "position: absolute; width: 30px; height: " + this.zb + "px; left: 10px; top: " + this.ua + "px; z-index: " + (g + 5) + "; pointer-events: auto; cursor: pointer;";
    this.d.appendChild(this.ma);
    this.Xa = document.createElement("img");
    this.Xa.style.cssText = "position: absolute; top: 6px; left: 7px; width: 16px; height: 16px; z-index: " + (g + 6) + ";pointer-events: none;";
    this.ma.appendChild(this.Xa);
    this.Xa.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADFJREFUeNpi/P//PwMlgAVElJWVYZjS1dXFiMzHpYaJgUIwasCoAaMGQAAjpdkZIMAAnCQOGxBm+S4AAAAASUVORK5CYII=";
    this.Aa = document.createElement("img");
    this.Aa.style.cssText = "position: absolute; top: 6px; left: 7px; width: 16px; height: 16px; z-index: " + (g + 7) + ";pointer-events: none;";
    this.ma.appendChild(this.Aa);
    this.Aa.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAM5JREFUeNqc06EKAkEUheFZEZPBog9gsItgt2m2iY+gdbEp2FYwKIgvYBKzJjG6YLCZ1GowGEyW9V+YW0RX7hz4YGBnzmUG1ouiyPi+nzPGPIwyQRCYlF2vMEVBWyIFGXRwxgBZbYEkPtjHBV1brCqQ5DHBCa2Efb8/2BSxwAF1lwJJGWtsUXUpkNSwxxIllwKJZ5m08uAOPYTaKxzRsFcINW9wRRsVbL5t+HWFO4aY45U04bPgiTFGdv03UhBPmdmpN82rSkHT5XeO8xZgAAsPJCuyNzJ9AAAAAElFTkSuQmCC";
    this.Aa.style.visibility = "hidden";
    this.la = document.createElement("div");
    this.la.id = "mute";
    this.la.style.cssText = "position: absolute; width: 30px; height: " + this.zb + "px; left: 50px; top: " + this.ua + "px; z-index: " + (g + 8) + "; pointer-events: auto; cursor: pointer;";
    this.d.appendChild(this.la);
    this.Wa = document.createElement("img");
    this.Wa.style.cssText = "position: absolute; top: 6px; left: 4px; width: 21px; height: 16px; z-index: " + (g + 9) + ";pointer-events: none;";
    this.la.appendChild(this.Wa);
    this.Wa.src =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAQCAIAAAB2uKNyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQNJREFUeNqsUjEORFAQ3chKVJQKkWxLQSQOoHIUJ+AUbuAoKo1OIhS0ElEoqSQaLztb2P37RcIrJjL+m3nzZoTHNQgX+U/ejyiKEOM43ifDMERsmibP82mauP2JzCLLMtBM03Qch6ufJQdB4Pu+rutFUZRliYxt21/6eQ0JsixblqWqKvpXVfV6AxXTND3lH971fQ++YRjrunZdhyRKHPm3R13XiNBPnGEYECVJumF/p/gYHsrxQco1TUNcluWsfliFOI5j27aiKNIUVOvD398Ju4t5nvEaZLjoui74cBGm/tf/c3NAkiS0ApDpcrDFo/nZEgTP8xRFwf3SFd2Aq/vbBBgA/xdwLuAc9jwAAAAASUVORK5CYII=";
    this.za =
        document.createElement("img");
    this.za.style.cssText = "position: absolute; top: 6px; left: 4px; width: 21px; height: 16px; z-index: " + (g + 10) + ";pointer-events: none;";
    this.la.appendChild(this.za);
    this.za.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAQCAIAAAB2uKNyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAGlJREFUeNpiYqAMMNFKfykYkKmfGJ049ROvGQhYiNRTUlICJHt6etC4pIUfRBuEJC380WyGi5BgP9wIZDYTqY5HYzORqhnNI9Dw7+7uJib+IJqBJNw4RvzpB9lcEtIfQW1UA5TmP4AAAwDRtir6UpavzAAAAABJRU5ErkJggg==";
    this.za.style.visibility =
        "hidden";
    this.aa = document.createElement("div");
    this.aa.id = "fullscreen";
    this.aa.style.cssText = "position: absolute; width: 30px; height: " + this.zb + "px; right: 10px; top: " + this.ua + "px; z-index: " + (g + 11) + "; pointer-events: auto; cursor: pointer; ";
    this.d.appendChild(this.aa);
    this.Va = document.createElement("img");
    this.Va.style.cssText = "position: absolute; top: 6px; left: 4px; width: 21px; height: 16px; z-index: " + (g + 12) + "; pointer-events: none;";
    this.aa.appendChild(this.Va);
    this.Va.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAiCAYAAAApkEs2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAG9JREFUeNrsmEEKwDAIBGPJm32En7b0noIBTRBmD7k6sAtxFXcfHTS/R1VDtGYmmcN35j6jiQAtyWh1Fnczv8ou1gMKaJKkyxeK9YACCiiggAKa10JPbfjRdkoLBRTQ6l7/dxO6dXvCelpoB70CDAClmSVBWdZvRQAAAABJRU5ErkJggg==";
    this.ya = document.createElement("img");
    this.ya.style.cssText = "position: absolute; top: 6px; left: 4px; width: 21px; height: 16px; z-index: " + (g + 13) + ";pointer-events: none;";
    this.aa.appendChild(this.ya);
    this.ya.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAiCAYAAAApkEs2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAG9JREFUeNrsl0sOwCAIBcX0zByCS+Nak6bG6OLZeWsDE36CZWZRUC0iemYfunsX+oiwFYerdmQiCiigcl0/duVpvfkbpwGp/y2o8dcDCiiggAJ6x/a062aatU/qqdGv2ju1+XPXAwooN5N4RJsAAwB5kCVBwHinaQAAAABJRU5ErkJggg==";
    this.ya.style.visibility = "hidden";
    if (!1 === this.h.vc || this.h.ic)this.aa.style.visibility = "hidden";
    this.Oa = document.createElement("div");
    this.Oa.style.cssText = "position: absolute; width: 100%; height: 14px; top: -3px; left: 0px; pointer-events: auto; z-index: " + (g + 14) + "; ";
    this.d.appendChild(this.Oa);
    this.Pa = document.createElement("img");
    this.Pa.src = "static/desktop/image/transparent.png";
    this.Pa.width = 1262;
    this.Pa.height = 14;
    this.Pa.style.cssText = "position: absolute; ";
    this.Oa.appendChild(this.Pa);
    this.M =
        document.createElement("div");
    this.M.id = "player-controls-holder-seek";
    this.M.className = "cursored";
    this.M.style.cssText = "z-index: " + (g + 15) + "; ";
    this.d.appendChild(this.M);
    this.X = document.createElement("img");
    this.X.id = "seek";
    this.X.style.cssText = "position: absolute; width: 18px; height: 18px; top: 6px; left: 6px; pointer-events: none; z-index: " + (g + 16) + ";";
    this.M.appendChild(this.X);
    this.X.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NDM3M0FDNjU5MjA2ODExODA4Mzk4OTJGODdDRDNGOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGMTQ4MUQzODJFRUQxMUU0QUYwMUE3QjM2RThDM0NDNiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGMTQ4MUQzNzJFRUQxMUU0QUYwMUE3QjM2RThDM0NDNiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTQzNzNBQzY1OTIwNjgxMTgwODM5ODkyRjg3Q0QzRjkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTQzNzNBQzY1OTIwNjgxMTgwODM5ODkyRjg3Q0QzRjkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5OPtv+AAAA2klEQVR42qxUwQ2EIBBEcw8eduBHnnRwsQCvObuwirMAWzh+vKjAjz9u17BmxfPUyCSTwMJsYFg2896LFHjsxBvgC1gDdYh9gAPwDew3CjwRYwVsgaPfxxj2VFwbJ+n8eXQ8GU/U+uto40TNwXX+XRO1i9lobMG9m6ZJWGuFc26el2UplFJCSsm3FUHbU6I6fgRMYoxZ5jTWWsdbZ20eJptVOslRjLS5SIScFdsK6MmZGGnJI6zYJ19FY/l1yOwfGHhl337+5AWZ9Ivc+rTZTj+63EayVI3tK8AAIztAUaU0JHgAAAAASUVORK5CYII=";
    this.d.Fb = 1;
    this.Ha()
};
c.Eb = function () {
    this.jb = !1;
    this.ma.onclick = this.pe.bind(this);
    this.la.onclick = this.oe.bind(this);
    this.aa.onclick = this.me.bind(this);
    this.Oa.onclick = this.ne.bind(this);
    this.M.onmousedown = this.ae.bind(this);
    this.M.onmouseup = this.ld.bind(this)
};
c.Gb = function () {
    this.ma.onclick = null;
    this.la.onclick = null;
    this.aa.onclick = null;
    this.Oa.onclick = null;
    this.M.onmousedown = null;
    document.onmousemove = null;
    document.onmouseup = null
};
c.pe = function (a) {
    a.preventDefault();
    this.b.getPaused() ? this.b.lb() : this.b.pause()
};
c.pc = function () {
    this.Aa.style.visibility = "visible";
    this.Xa.style.visibility = "hidden"
};
c.kb = function () {
    this.Aa.style.visibility = "hidden";
    this.Xa.style.visibility = "visible"
};
c.oe = function (a) {
    a.preventDefault();
    !1 === this.b.muted ? this.b.mute() : this.b.ha()
};
c.ne = function (a) {
    a.preventDefault();
    this.b.seek(a.pageX / window.innerWidth * this.rc)
};
c.ae = function (a) {
    a.preventDefault();
    this.jb = !0;
    document.onmousemove = this.$d.bind(this);
    document.onmouseup = this.ld.bind(this)
};
c.$d = function (a) {
    a.preventDefault();
    !0 === this.jb && (a = a.pageX, this.M.style.left = a - 15 + "px", this.md = a)
};
c.ld = function (a) {
    a.preventDefault();
    this.jb = !1;
    document.onmousemove = null;
    document.onmouseup = null;
    this.b.seek(this.md / window.innerWidth * this.rc)
};
c.me = function (a) {
    a.preventDefault();
    if (!1 === this.h.N) {
        this.ya.style.visibility = "visible";
        this.Va.style.visibility = "hidden";
        a = this.h;
        var b = a.sc;
        b.requestFullscreen ? b.requestFullscreen() : b.msRequestFullscreen ? b.msRequestFullscreen() : b.mozRequestFullScreen ? b.mozRequestFullScreen() : b.webkitRequestFullScreen && b.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        a.$.a.style.visibility = "hidden";
        a.N = !0
    } else G()
};
c.kc = function () {
    this.ya.style.visibility = "hidden";
    this.Va.style.visibility = "visible"
};
c.show = function () {
    createjs.Tween.removeTweens(this.d);
    createjs.Tween.get(this.d).to({Fb: 1}, this.u, createjs.Ease.quadOut).addEventListener("change", this.Ha.bind(this))
};
c.j = function () {
    createjs.Tween.removeTweens(this.d);
    createjs.Tween.get(this.d).to({Fb: 0}, this.p, createjs.Ease.quadOut).addEventListener("change", this.Ha.bind(this))
};
c.Ha = function () {
    var a = this.d.Fb, b = 18 * a, d = 6 + 9 * (1 - a);
    this.d.style.top = this.wc - (this.va - 3) * a - 3 + "px";
    this.X.style.top = d + "px";
    this.X.style.left = d + "px";
    this.X.style.width = b + "px";
    this.X.style.height = b + "px"
};
c.mc = function () {
    var a = this.b;
    a.V = -1;
    a.v.show()
};
c.nc = function () {
    var a = this.b;
    a.V = a.Ub
};
function X(a, b) {
    a.wc = b;
    a.d.style.top = b - a.va + "px"
}
function T(a) {
    return 10 > a ? "0" + a : "" + a
};
function R() {
}
c = R.prototype;
c.init = function (a, b, d) {
    this.b = d;
    this.a = document.createElement("div");
    this.a.id = "pause";
    this.a.style.cssText = "position: absolute; top: 0px; left: 0px; width: 100%; z-index: " + b + "; cursor: pointer;";
    a.appendChild(this.a);
    this.p = this.u = 500;
    this.I = document.createElement("img");
    this.I.style.cssText = "position: absolute; width: 48px; height: 56px; left: 50%; top: 250px; margin-left: -24px; z-index: " + (b + 1) + "; pointer-events: none;";
    this.I.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAA4CAYAAAC7UXvqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMjgwMTE3NDA3MjA2ODExODIyQTg0MEYwMjJDNDFBQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEOUY1RDVBRDJGMEUxMUU0QUYwMUE3QjM2RThDM0NDNiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEOUY1RDVBQzJGMEUxMUU0QUYwMUE3QjM2RThDM0NDNiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDA2Qzc3NDA3MjIwNjgxMTgwODM5ODkyRjg3Q0QzRjkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDI4MDExNzQwNzIwNjgxMTgyMkE4NDBGMDIyQzQxQUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4sMH4VAAAB40lEQVR42tyaW0sDMRCFzUClYqkg+OCT99X+Df+3v8P77ckHQbBULPZhTSALpbjbzGzO4GRh6MthvpxdejbJxtV1vWH5Il9XvmpBXTI4MEYwcCs0f87QwhjBwI2w+QVDC2MUYeBJ2PyYoYUxnE+hgf/9ETRf+NpM1MIYFEVvguZhUPuMgUAYFH8fhY/4hKGFMBoDdwpRCmE0Bq4VkgjCIPSLBv0yawzcC5ufMbQQhouTuaGvb0Hzua+tRC2EQUuid0HzMKg9xkCyMwgdc+gopQwxVylEaZViwOSkrigDJqPULa2Jt33NBM2/fI0StdkZtCL6EDQPg9plDCQrg7QWHigGoWMOHaWktXZFMYozYC5K3crW4tjXp6D51NdOojYrg/4QTQXNx7FSB5KNQZp7OAgGaa2cUAzSmHAhGUUaMPU2Nv8ndi2fmGZxBsi9RnHGmXJlYVCL6Fl4h44Y2iwM0lo5oRiktXZFMYo1YCZK2wyY2aVzHV/qw0bsUAAIG7HzRG1vBnWIXoR36JCh7c0grZUTitFlwMRXGwLE3EQhSifIJ1ApPIEqxYCJKHVrDjyF4wEDASAcD1gkansxaI3oVXiHDhjaXox1Bh6EzU8Z2l4MAqWE2qSueAP//mXmrB+7/BVgAJsvtzGzkebLAAAAAElFTkSuQmCC";
    this.a.appendChild(this.I);
    this.J = document.createElement("div");
    this.J.id = "pauser";
    this.J.style.cssText = "position: absolute; width: 100%; height: 500px; z-index: " + (b + 2) + ";";
    this.a.appendChild(this.J);
    this.Ab = document.createElement("img");
    this.Ab.src = "static/desktop/image/transparent.png";
    this.Ab.width = 1262;
    this.Ab.height = 500;
    this.J.appendChild(this.Ab);
    this.I.style.opacity = 0
};
c.Eb = function () {
    this.J.onclick = this.Xd.bind(this);
    this.J.onmouseenter = this.mc.bind(this);
    this.J.onmouseleave = this.nc.bind(this)
};
c.Gb = function () {
    this.J.onclick = null;
    this.J.onmouseenter = null;
    this.J.onmouseleave = null
};
c.Xd = function (a) {
    a.preventDefault();
    !1 === this.b.getPaused() ? this.b.pause() : this.b.lb()
};
c.pc = function () {
    this.I.style.opacity = 0;
    this.I.alpha = 0;
    createjs.Tween.get(this.I).to({alpha: 1}, this.u, createjs.Ease.quadOut).call(this.Rd, [], this).addEventListener("change", this.o.bind(this))
};
c.o = function () {
    this.I.style.opacity = this.I.alpha
};
c.Rd = function () {
    createjs.Tween.get(this.I).to({alpha: 0}, this.p, createjs.Ease.quadOut).addEventListener("change", this.o.bind(this))
};
c.kb = function () {
};
c.ra = function (a) {
    this.J.style.height = a - 45 + "px";
    this.I.style.top = 0.5 * (a - 45) + "px"
};
c.mc = function () {
    var a = this.b;
    a.V = -1;
    a.v.show()
};
c.nc = function () {
    var a = this.b;
    a.V = a.Ub
};
function S() {
}
c = S.prototype;
c.init = function (a, b, d) {
    this.e = d;
    this.dc = this.qc = !1;
    this.Cd = 22;
    this.Ed = 27;
    this.Dd = 35;
    this.Fd = 40;
    this.Tc = 54;
    this.Uc = 68;
    this.Vc = 91;
    this.Wc = 112;
    this.Xc = 125;
    this.Yc = 141;
    this.Zc = 159;
    this.qe = !1;
    this.a = document.createElement("div");
    this.a.id = "prompt";
    this.a.style.cssText = "position: absolute; top: 0px; left: 0px; width: 100%; height: 545px; pointer-events: none; z-index: " + b + "; ";
    a.appendChild(this.a);
    this.n = document.createElement("div");
    this.n.className = "center_v";
    this.a.appendChild(this.n);
    this.k = document.createElement("div");
    this.k.className = "center_h";
    this.n.appendChild(this.k);
    this.Za = document.createElement("div");
    this.Za.className = "skew";
    this.Za.style.cssText = "position: absolute; z-index: " + (b + 1) + "; width: 100px; height: 91px; left: -50px; top: -38px; background-color: #000000; opacity: 0.7; pointer-events: none;";
    this.k.appendChild(this.Za);
    this.oa = document.createElement("div");
    this.oa.className = "player_prompt skew";
    this.oa.style.cssText += "position: absolute;z-index: " + (b + 2) + "; top: -29px; text-align: center; white-space: nowrap; pointer-events: none;";
    this.k.appendChild(this.oa);
    this.pa = document.createElement("div");
    this.pa.className = "player_prompt skew";
    this.pa.style.cssText += "position: absolute;z-index: " + (b + 3) + "; top: 2px; text-align: center; white-space: nowrap; pointer-events: none;";
    this.k.appendChild(this.pa);
    this.a.style.opacity = 0
};
c.update = function (a) {
    !0 !== this.dc && (a > this.Cd && a < this.Ed || a > this.Dd && a < this.Fd || a > this.Tc && a < this.Tc + 5 || a > this.Uc && a < this.Uc + 5 || a > this.Vc && a < this.Vc + 5 || a > this.Wc && a < this.Wc + 5 || a > this.Xc && a < this.Xc + 5 || a > this.Yc && a < this.Yc + 5 || a > this.Zc && a < this.Zc + 5 ? this.show() : this.j())
};
c.show = function () {
    !1 === this.qe && Y(this);
    !0 !== this.dc && (this.a.style.opacity = 1, this.qc = !0)
};
c.j = function () {
    this.a.style.opacity = 0;
    this.qc = !1
};
c.ra = function (a) {
    this.a.style.height = a + "px"
};
c.K = function () {
    var a = m(this.e, "Press_R_Prompt_Desktop1"), b = m(this.e, "Press_R_Prompt_Desktop2"), d = a.indexOf("*"), e = b.indexOf("*"), f = "", g = "", h = "";
    -1 < d && (f = a.substring(0, d), g = a.substring(d + 1, d + 2), h = a.substring(d + 2, a.length), a = f + '<span class="player_prompt_highlight">' + g + "</span>" + h);
    -1 < e && (f = b.substring(0, e), g = b.substring(e + 1, e + 2), h = b.substring(e + 2, b.length), b = f + '<span class="player_prompt_highlight">' + g + "</span>" + h);
    this.oa.innerHTML = a;
    this.pa.innerHTML = b;
    Y(this)
};
function Y(a) {
    var b = a.oa.offsetWidth, d = a.pa.offsetWidth, e;
    e = b;
    d > e && (e = d);
    e += 60;
    a.oa.style.left = Math.floor(-0.5 * b) + "px";
    a.pa.style.left = Math.floor(-0.5 * d) + "px";
    a.Za.style.width = e + "px";
    a.Za.style.left = Math.floor(-0.5 * e) + "px"
};
function E() {
}
c = E.prototype;
c.init = function (a, b, d, e, f) {
    this.e = d;
    this.r = f;
    this.i = !1;
    this.c = new createjs.LoadQueue(!0, e);
    this.c.on("complete", this.B.bind(this), this);
    this.u = 1E3;
    this.p = 500;
    this.Ob = this.q = !1;
    this.Kb = this.Jb = this.Ib = this.Hb = 0;
    this.Oc = this.bc = 20;
    this.G = 1262;
    this.$b = 970;
    this.Dc = 0.5 * (this.G - this.$b);
    this.xd = 500;
    this.ib = window.innerWidth;
    this.F = 545;
    this.Cb = 41;
    this.$c = 0;
    this.Gd = 80;
    this.qa = 0;
    this.fc = !1;
    this.eb = this.cb = "";
    this.a = document.createElement("div");
    this.a.id = "outro";
    this.a.style.cssText += "position: absolute; width: 100%; height: 545px;overflow: hidden;z-index: " +
        b + ";";
    a.appendChild(this.a);
    this.k = document.createElement("div");
    this.k.id = "center_h";
    this.k.style.cssText = "position: absolute; left: 50%;";
    this.a.appendChild(this.k);
    this.d = document.createElement("div");
    this.d.id = "content";
    this.d.style.cssText = "position: absolute;width: " + this.G + "px;height: " + this.F + "px;left:" + -0.5 * this.G + "px;";
    this.k.appendChild(this.d);
    this.ia = document.createElement("img");
    this.ia.style.cssText = "width: " + this.$b + "px;height: " + this.F + "px;";
    this.Z = document.createElement("img");
    this.Z.style.cssText =
        "width: " + this.$b + "px;height: " + this.F + "px;";
    this.Ra = document.createElement("img");
    this.yc = document.createElement("img");
    this.w = document.createElement("canvas");
    this.w.id = "outro_canvas";
    this.w.width = this.G;
    this.w.height = this.F;
    this.w.style.cssText = "position: absolute; z-index: " + (b + 1) + ";";
    this.d.appendChild(this.w);
    this.rb = document.createElement("canvas");
    this.rb.width = this.G;
    this.rb.height = this.F;
    this.sb = document.createElement("canvas");
    this.sb.width = this.G;
    this.sb.height = this.F;
    this.rd = this.w.getContext("2d");
    this.Ja = document.createElement("div");
    this.Ja.id = "arrows";
    this.Ja.style.cssText = "position: absolute; z-index:" + (b + 2) + "; top: 108px; width: 56px; height: 29px; pointer-events: none;";
    this.d.appendChild(this.Ja);
    this.L = document.createElement("div");
    this.L.id = "restart";
    this.L.style.cssText = "position: absolute; right: 20px; top: 21px; pointer-events: auto; cursor: pointer; z-index: " + (b + 4) + ";";
    this.d.appendChild(this.L);
    this.vb = document.createElement("img");
    this.vb.src = "static/desktop/image/transparent.png";
    this.L.appendChild(this.vb);
    this.a.style.visibility = "hidden";
    this.a.style.opacity = 0
};
c.show = function () {
    this.Ob = this.q = !1;
    this.l(window.innerWidth, window.innerHeight);
    this.a.pd = 1;
    this.Hb = 2 * -this.Cb;
    this.Ib = -this.F;
    this.Jb = 2 * this.Cb;
    this.Kb = this.F;
    Z(this, 0.5 * this.G);
    createjs.Tween.get(this.a).to({pd: 0}, this.u, createjs.Ease.quadOut).call(this.ce, [], this).addEventListener("change", this.Ha.bind(this));
    this.a.style.visibility = "visible";
    this.a.style.opacity = 1
};
c.Ha = function () {
    var a = this.a.pd, b = this.F, d = 2 * this.Cb;
    this.Hb = a * d;
    this.Ib = a * b;
    this.Jb = a * -d;
    this.Kb = a * -b;
    Z(this, this.qa)
};
c.ce = function () {
    this.Ob = !0;
    this.Kb = this.Jb = this.Ib = this.Hb = 0;
    this.w.style.cursor = "auto";
    Z(this, this.qa);
    this.L.onclick = this.Nd.bind(this);
    this.w.onmousedown = this.Pd.bind(this);
    this.w.onmousemove = this.Od.bind(this);
    this.w.onmouseup = this.hd.bind(this);
    this.w.onmouseleave = this.hd.bind(this)
};
c.j = function () {
    this.L.onclick = null;
    this.w.onmousedown = null;
    this.w.onmousemove = null;
    this.w.onmouseup = null;
    this.w.onmouseleave = null;
    this.Ob = !1;
    this.a.alpha = 1;
    createjs.Tween.get(this.a).to({alpha: 0}, this.p, createjs.Ease.quadOut).call(this.A, [], this).addEventListener("change", this.lc.bind(this))
};
c.lc = function () {
    this.a.style.opacity = this.a.alpha
};
c.A = function () {
    this.a.style.visibility = "hidden";
    this.q = !0
};
c.Nd = function (a) {
    a.preventDefault();
    this.j()
};
function ba(a, b) {
    var d = a.Gd, e = a.qa + d, f = 1;
    b < a.qa - d ? f = 0 : b > e && (f = 2);
    return f
}
function $(a, b) {
    return b - 0.5 * (a.ib - a.G)
}
function ca(a, b) {
    var d = $(a, a.$c), e = $(a, a.ib) - a.$c;
    b < d ? b = d : b > e && (b = e);
    return b
}
c.Pd = function (a) {
    a.preventDefault();
    a = a.pageX;
    a = $(this, a);
    a = ba(this, a);
    0 === a ? window.open(this.cb, "_blank") : 1 === a ? this.fc = !0 : 2 === a && window.open(this.eb, "_blank")
};
c.Od = function (a) {
    a.preventDefault();
    a = a.pageX;
    var b;
    a = $(this, a);
    b = ba(this, a);
    !1 === this.fc ? this.w.style.cursor = 1 === b ? "pointer" : "auto" : (a = ca(this, a), Z(this, a))
};
c.hd = function (a) {
    a.preventDefault();
    this.fc = !1
};
function Z(a, b) {
    var d = a.rd, e = a.G, f = a.F, g = a.Cb, h = a.Hb, l = a.Ib, r = a.Jb, p = a.Kb, v = a.xd;
    a.qa = b;
    d.save();
    d.translate(0, 0);
    d.clearRect(0, 0, e, f);
    d.translate(h, l);
    d.beginPath();
    d.moveTo(-v, 0);
    d.lineTo(b - g + 1, 0);
    d.lineTo(b + g + 1, f);
    d.lineTo(-v, f);
    d.closePath();
    d.fillStyle = a.yd;
    d.fill();
    d.setTransform(1, 0, 0, 1, 0, 0);
    d.translate(r, p);
    d.beginPath();
    d.moveTo(e + v, 0);
    d.lineTo(b - g, 0);
    d.lineTo(b + g, f);
    d.lineTo(e + v, f);
    d.closePath();
    d.fillStyle = a.zd;
    d.fill();
    d.restore();
    a.Ja.style.left = b - 50 + "px"
}
c.K = function () {
    var a = this.e;
    this.cb = m(a, "url_civic");
    this.eb = m(a, "url_type_r")
};
c.s = function () {
    this.c.loadManifest([{
        id: "asset_left",
        src: "desktop/image/outro_left/outro_left_" + this.r + ".jpg"
    }, {id: "asset_right", src: "desktop/image/outro_right/outro_right_" + this.r + ".jpg"}, {
        id: "asset_restart_left",
        src: "common/image/outro_restart/outro_restart_left_" + this.r + ".png"
    }, {
        id: "asset_restart_right",
        src: "common/image/outro_restart/outro_restart_right_" + this.r + ".png"
    }, {id: "asset_arrow_left", src: "desktop/image/outro_arrow_left.png"}, {
        id: "asset_arrow_right",
        src: "desktop/image/outro_arrow_right.png"
    }])
};
c.B = function () {
    this.ia.src = this.c.getResult("asset_left").src;
    this.Z.src = this.c.getResult("asset_right").src;
    this.Ra.src = this.c.getResult("asset_restart_left").src;
    this.yc.src = this.c.getResult("asset_restart_right").src;
    var a = this.c.getResult("asset_arrow_left").src, b = this.c.getResult("asset_arrow_right").src;
    this.Ja.innerHTML = '<img src="' + a + '" alt="" /><img src="' + b + '" alt="" />';
    da(this);
    Z(this, 0.5 * this.G);
    this.i = !0
};
c.m = function () {
    return this.i
};
function da(a) {
    var b = $(a, a.ib) - a.Ra.width - a.Oc, d = a.rb.getContext("2d");
    d.rect(0, 0, a.G, a.F);
    d.fillStyle = "#ffffff";
    d.fill();
    d.drawImage(a.ia, a.Dc, 0);
    d.drawImage(a.Ra, b, a.bc);
    a.yd = d.createPattern(a.rb, "no-repeat");
    d = a.sb.getContext("2d");
    d.rect(0, 0, a.G, a.F);
    d.fillStyle = "#000000";
    d.fill();
    d.drawImage(a.Z, a.Dc, 0);
    d.drawImage(a.yc, b, a.bc);
    a.zd = d.createPattern(a.sb, "no-repeat")
}
c.l = function (a) {
    this.ib = a;
    da(this);
    a = this.Ra.width;
    var b = this.Ra.height;
    this.L.style.width = a + "px";
    this.L.style.height = b + "px";
    this.L.style.left = $(this, this.ib) - a - this.Oc + "px";
    this.L.style.top = this.bc + "px";
    this.vb.width = a;
    this.vb.height = b;
    a = this.qa;
    b = ca(this, a);
    a !== b ? Z(this, b) : Z(this, this.qa)
};
function ea() {
}
ea.prototype.init = function (a, b) {
    this.sd = b;
    this.a = document.createElement("div");
    this.a.style.cssText = "position: absolute;";
    a.appendChild(this.a);
    this.ia = document.createElement("img");
    this.ia.style.cssText = "position: absolute; top: 0px; left 0px; width: 12px; height: 42px;";
    this.a.appendChild(this.ia);
    this.wb = document.createElement("img");
    this.wb.style.cssText = "position: absolute; top: 0px; left: 12px; width: 20px; height: 42px;";
    this.a.appendChild(this.wb);
    this.Z = document.createElement("img");
    this.Z.style.cssText =
        "position: absolute; top: 0px; left 31px; width: 41px; height: 42px;";
    this.a.appendChild(this.Z);
    this.S = document.createElement("div");
    this.S.className = "outro_restart skew";
    this.S.style.cssText += "position: absolute; top: 13px; left: 22px; white-space: nowrap; pointer-events: none;";
    this.S.innerHTML = "";
    this.a.appendChild(this.S)
};
function D() {
}
c = D.prototype;
c.init = function (a, b, d, e, f, g) {
    this.h = a;
    this.e = e;
    this.ta = f;
    this.r = g;
    this.i = this.oc = !1;
    this.c = new createjs.LoadQueue(!0, f);
    this.c.on("complete", this.B.bind(this), this);
    this.u = 1E3;
    this.p = 500;
    this.td = 4E3;
    this.q = !1;
    this.a = document.createElement("div");
    this.a.id = "share";
    this.a.className = "page";
    this.a.style.cssText = "z-index: " + d + ";";
    b.appendChild(this.a);
    this.n = document.createElement("div");
    this.n.className = "center_v";
    this.a.appendChild(this.n);
    this.k = document.createElement("div");
    this.k.className = "center_h";
    this.n.appendChild(this.k);
    this.d = document.createElement("div");
    this.d.id = "content";
    this.k.appendChild(this.d);
    this.Sa = document.createElement("div");
    this.Sa.id = "share_left";
    this.Sa.style.cssText = "position: absolute;";
    this.d.appendChild(this.Sa);
    this.Ta = document.createElement("div");
    this.Ta.id = "share_left_title";
    this.Ta.className = "social_title skew";
    this.Ta.style.cssText = "position: absolute; width: 400px; height: 50px; top: -60px; left: -200px; text-align: center;";
    this.Sa.appendChild(this.Ta);
    this.xb =
        document.createElement("div");
    this.xb.id = "share_left_social";
    this.xb.style.cssText = "position: absolute; top: -70px; left: -136px; ";
    this.Sa.appendChild(this.xb);
    this.C = new I;
    this.C.init(this.h, this.xb, d, e, g, f);
    this.Bb = document.createElement("div");
    this.Bb.id = "share_right";
    this.Bb.style.cssText = "position: absolute;";
    this.d.appendChild(this.Bb);
    this.Ca = document.createElement("div");
    this.Ca.style.cssText = "position: absolute; top: 40px; left: 4px;cursor: pointer;";
    this.Bb.appendChild(this.Ca);
    this.Rb =
        new ea;
    this.Rb.init(this.Ca, !0);
    this.a.style.visibility = "hidden"
};
c.show = function () {
    this.oc = this.q = !1;
    this.Ca.onclick = this.Zd.bind(this);
    this.a.style.visibility = "visible";
    this.a.style.opacity = 0;
    this.a.alpha = 0;
    createjs.Tween.get(this.a).to({alpha: 1}, this.u, createjs.Ease.quadOut).addEventListener("change", this.o.bind(this));
    this.cd = setTimeout(this.j.bind(this), this.td)
};
c.j = function () {
    clearTimeout(this.cd);
    this.Ca.onclick = null;
    this.q = !0
};
c.o = function () {
    this.a.style.opacity = this.a.alpha
};
c.A = function () {
    this.q = !0;
    this.a.style.visibility = "hidden"
};
c.od = function (a) {
    (a.srcElement || a.target).style.opacity = 0.7
};
c.nd = function (a) {
    (a.srcElement || a.target).style.opacity = 0.85
};
c.s = function () {
    this.C.s();
    this.B()
};
c.B = function () {
};
c.m = function () {
    return this.C.m()
};
c.l = function () {
};
c.K = function () {
    this.Ta.innerHTML = m(this.e, "share_experience").toUpperCase();
    var a = this.Rb, b = this.ta + "desktop/image/replay_middle.png", d = this.ta + "desktop/image/replay_right.png";
    a.ia.src = this.ta + "desktop/image/replay_left.png";
    a.wb.src = b;
    a.Z.src = d;
    a = this.Rb;
    a.S.innerHTML = m(this.e, "restart").toUpperCase();
    b = Math.max(a.S.offsetWidth, a.S.scrollWidth, a.S.clientWidth);
    d = b + 20 + 53;
    a.wb.style.width = b + 20 + "px";
    a.Z.style.left = 12 + b + 20 + "px";
    a.a.style.left = !0 === a.sd ? 0.5 * -d + "px" : -d + "px"
};
c.Zd = function () {
    this.oc = !0;
    clearTimeout(this.cd);
    this.Ca.onclick = null;
    this.a.alpha = 1;
    createjs.Tween.get(this.a).to({alpha: 0}, this.p, createjs.Ease.quadOut).call(this.A, [], this).addEventListener("change", this.o.bind(this))
};
