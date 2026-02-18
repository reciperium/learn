import { r as $f, a as w, R as _u, g as ed, j as _, b as Wn, E as yv, H as US, s as BS, c as HS, l as qS } from "./codeMirror-DE3yekCk.js";
(async () => {
  (function() {
    const r = document.createElement("link").relList;
    if (r && r.supports && r.supports("modulepreload")) return;
    for (const u of document.querySelectorAll('link[rel="modulepreload"]')) a(u);
    new MutationObserver((u) => {
      for (const s of u) if (s.type === "childList") for (const d of s.addedNodes) d.tagName === "LINK" && d.rel === "modulepreload" && a(d);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function i(u) {
      const s = {};
      return u.integrity && (s.integrity = u.integrity), u.referrerPolicy && (s.referrerPolicy = u.referrerPolicy), u.crossOrigin === "use-credentials" ? s.credentials = "include" : u.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
    }
    function a(u) {
      if (u.ep) return;
      u.ep = true;
      const s = i(u);
      fetch(u.href, s);
    }
  })();
  var ef = {
    exports: {}
  }, ia = {}, tf = {
    exports: {}
  }, nf = {};
  var Dg;
  function VS() {
    return Dg || (Dg = 1, (function(n) {
      function r(N, Q) {
        var H = N.length;
        N.push(Q);
        e: for (; 0 < H; ) {
          var $ = H - 1 >>> 1, A = N[$];
          if (0 < u(A, Q)) N[$] = Q, N[H] = A, H = $;
          else break e;
        }
      }
      function i(N) {
        return N.length === 0 ? null : N[0];
      }
      function a(N) {
        if (N.length === 0) return null;
        var Q = N[0], H = N.pop();
        if (H !== Q) {
          N[0] = H;
          e: for (var $ = 0, A = N.length, be = A >>> 1; $ < be; ) {
            var ye = 2 * ($ + 1) - 1, E = N[ye], he = ye + 1, Be = N[he];
            if (0 > u(E, H)) he < A && 0 > u(Be, E) ? (N[$] = Be, N[he] = H, $ = he) : (N[$] = E, N[ye] = H, $ = ye);
            else if (he < A && 0 > u(Be, H)) N[$] = Be, N[he] = H, $ = he;
            else break e;
          }
        }
        return Q;
      }
      function u(N, Q) {
        var H = N.sortIndex - Q.sortIndex;
        return H !== 0 ? H : N.id - Q.id;
      }
      if (n.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        n.unstable_now = function() {
          return s.now();
        };
      } else {
        var d = Date, h = d.now();
        n.unstable_now = function() {
          return d.now() - h;
        };
      }
      var p = [], m = [], g = 1, y = null, x = 3, b = false, T = false, C = false, k = false, O = typeof setTimeout == "function" ? setTimeout : null, V = typeof clearTimeout == "function" ? clearTimeout : null, j = typeof setImmediate < "u" ? setImmediate : null;
      function G(N) {
        for (var Q = i(m); Q !== null; ) {
          if (Q.callback === null) a(m);
          else if (Q.startTime <= N) a(m), Q.sortIndex = Q.expirationTime, r(p, Q);
          else break;
          Q = i(m);
        }
      }
      function J(N) {
        if (C = false, G(N), !T) if (i(p) !== null) T = true, D || (D = true, W());
        else {
          var Q = i(m);
          Q !== null && P(J, Q.startTime - N);
        }
      }
      var D = false, Z = -1, X = 5, re = -1;
      function ie() {
        return k ? true : !(n.unstable_now() - re < X);
      }
      function te() {
        if (k = false, D) {
          var N = n.unstable_now();
          re = N;
          var Q = true;
          try {
            e: {
              T = false, C && (C = false, V(Z), Z = -1), b = true;
              var H = x;
              try {
                t: {
                  for (G(N), y = i(p); y !== null && !(y.expirationTime > N && ie()); ) {
                    var $ = y.callback;
                    if (typeof $ == "function") {
                      y.callback = null, x = y.priorityLevel;
                      var A = $(y.expirationTime <= N);
                      if (N = n.unstable_now(), typeof A == "function") {
                        y.callback = A, G(N), Q = true;
                        break t;
                      }
                      y === i(p) && a(p), G(N);
                    } else a(p);
                    y = i(p);
                  }
                  if (y !== null) Q = true;
                  else {
                    var be = i(m);
                    be !== null && P(J, be.startTime - N), Q = false;
                  }
                }
                break e;
              } finally {
                y = null, x = H, b = false;
              }
              Q = void 0;
            }
          } finally {
            Q ? W() : D = false;
          }
        }
      }
      var W;
      if (typeof j == "function") W = function() {
        j(te);
      };
      else if (typeof MessageChannel < "u") {
        var se = new MessageChannel(), ne = se.port2;
        se.port1.onmessage = te, W = function() {
          ne.postMessage(null);
        };
      } else W = function() {
        O(te, 0);
      };
      function P(N, Q) {
        Z = O(function() {
          N(n.unstable_now());
        }, Q);
      }
      n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(N) {
        N.callback = null;
      }, n.unstable_forceFrameRate = function(N) {
        0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : X = 0 < N ? Math.floor(1e3 / N) : 5;
      }, n.unstable_getCurrentPriorityLevel = function() {
        return x;
      }, n.unstable_next = function(N) {
        switch (x) {
          case 1:
          case 2:
          case 3:
            var Q = 3;
            break;
          default:
            Q = x;
        }
        var H = x;
        x = Q;
        try {
          return N();
        } finally {
          x = H;
        }
      }, n.unstable_requestPaint = function() {
        k = true;
      }, n.unstable_runWithPriority = function(N, Q) {
        switch (N) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            N = 3;
        }
        var H = x;
        x = N;
        try {
          return Q();
        } finally {
          x = H;
        }
      }, n.unstable_scheduleCallback = function(N, Q, H) {
        var $ = n.unstable_now();
        switch (typeof H == "object" && H !== null ? (H = H.delay, H = typeof H == "number" && 0 < H ? $ + H : $) : H = $, N) {
          case 1:
            var A = -1;
            break;
          case 2:
            A = 250;
            break;
          case 5:
            A = 1073741823;
            break;
          case 4:
            A = 1e4;
            break;
          default:
            A = 5e3;
        }
        return A = H + A, N = {
          id: g++,
          callback: Q,
          priorityLevel: N,
          startTime: H,
          expirationTime: A,
          sortIndex: -1
        }, H > $ ? (N.sortIndex = H, r(m, N), i(p) === null && N === i(m) && (C ? (V(Z), Z = -1) : C = true, P(J, H - $))) : (N.sortIndex = A, r(p, N), T || b || (T = true, D || (D = true, W()))), N;
      }, n.unstable_shouldYield = ie, n.unstable_wrapCallback = function(N) {
        var Q = x;
        return function() {
          var H = x;
          x = Q;
          try {
            return N.apply(this, arguments);
          } finally {
            x = H;
          }
        };
      };
    })(nf)), nf;
  }
  var jg;
  function GS() {
    return jg || (jg = 1, tf.exports = VS()), tf.exports;
  }
  var lf = {
    exports: {}
  }, yt = {};
  var Lg;
  function YS() {
    if (Lg) return yt;
    Lg = 1;
    var n = $f();
    function r(p) {
      var m = "https://react.dev/errors/" + p;
      if (1 < arguments.length) {
        m += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var g = 2; g < arguments.length; g++) m += "&args[]=" + encodeURIComponent(arguments[g]);
      }
      return "Minified React error #" + p + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function i() {
    }
    var a = {
      d: {
        f: i,
        r: function() {
          throw Error(r(522));
        },
        D: i,
        C: i,
        L: i,
        m: i,
        X: i,
        S: i,
        M: i
      },
      p: 0,
      findDOMNode: null
    }, u = /* @__PURE__ */ Symbol.for("react.portal");
    function s(p, m, g) {
      var y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: u,
        key: y == null ? null : "" + y,
        children: p,
        containerInfo: m,
        implementation: g
      };
    }
    var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function h(p, m) {
      if (p === "font") return "";
      if (typeof m == "string") return m === "use-credentials" ? m : "";
    }
    return yt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a, yt.createPortal = function(p, m) {
      var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11) throw Error(r(299));
      return s(p, m, null, g);
    }, yt.flushSync = function(p) {
      var m = d.T, g = a.p;
      try {
        if (d.T = null, a.p = 2, p) return p();
      } finally {
        d.T = m, a.p = g, a.d.f();
      }
    }, yt.preconnect = function(p, m) {
      typeof p == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, a.d.C(p, m));
    }, yt.prefetchDNS = function(p) {
      typeof p == "string" && a.d.D(p);
    }, yt.preinit = function(p, m) {
      if (typeof p == "string" && m && typeof m.as == "string") {
        var g = m.as, y = h(g, m.crossOrigin), x = typeof m.integrity == "string" ? m.integrity : void 0, b = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        g === "style" ? a.d.S(p, typeof m.precedence == "string" ? m.precedence : void 0, {
          crossOrigin: y,
          integrity: x,
          fetchPriority: b
        }) : g === "script" && a.d.X(p, {
          crossOrigin: y,
          integrity: x,
          fetchPriority: b,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0
        });
      }
    }, yt.preinitModule = function(p, m) {
      if (typeof p == "string") if (typeof m == "object" && m !== null) {
        if (m.as == null || m.as === "script") {
          var g = h(m.as, m.crossOrigin);
          a.d.M(p, {
            crossOrigin: g,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
            nonce: typeof m.nonce == "string" ? m.nonce : void 0
          });
        }
      } else m == null && a.d.M(p);
    }, yt.preload = function(p, m) {
      if (typeof p == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
        var g = m.as, y = h(g, m.crossOrigin);
        a.d.L(p, g, {
          crossOrigin: y,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0
        });
      }
    }, yt.preloadModule = function(p, m) {
      if (typeof p == "string") if (m) {
        var g = h(m.as, m.crossOrigin);
        a.d.m(p, {
          as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
          crossOrigin: g,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0
        });
      } else a.d.m(p);
    }, yt.requestFormReset = function(p) {
      a.d.r(p);
    }, yt.unstable_batchedUpdates = function(p, m) {
      return p(m);
    }, yt.useFormState = function(p, m, g) {
      return d.H.useFormState(p, m, g);
    }, yt.useFormStatus = function() {
      return d.H.useHostTransitionStatus();
    }, yt.version = "19.2.4", yt;
  }
  var Ug;
  function vv() {
    if (Ug) return lf.exports;
    Ug = 1;
    function n() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
    }
    return n(), lf.exports = YS(), lf.exports;
  }
  var Bg;
  function XS() {
    if (Bg) return ia;
    Bg = 1;
    var n = GS(), r = $f(), i = vv();
    function a(e) {
      var t = "https://react.dev/errors/" + e;
      if (1 < arguments.length) {
        t += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var l = 2; l < arguments.length; l++) t += "&args[]=" + encodeURIComponent(arguments[l]);
      }
      return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function u(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function s(e) {
      var t = e, l = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, (t.flags & 4098) !== 0 && (l = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? l : null;
    }
    function d(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function h(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function p(e) {
      if (s(e) !== e) throw Error(a(188));
    }
    function m(e) {
      var t = e.alternate;
      if (!t) {
        if (t = s(e), t === null) throw Error(a(188));
        return t !== e ? null : e;
      }
      for (var l = e, o = t; ; ) {
        var c = l.return;
        if (c === null) break;
        var f = c.alternate;
        if (f === null) {
          if (o = c.return, o !== null) {
            l = o;
            continue;
          }
          break;
        }
        if (c.child === f.child) {
          for (f = c.child; f; ) {
            if (f === l) return p(c), e;
            if (f === o) return p(c), t;
            f = f.sibling;
          }
          throw Error(a(188));
        }
        if (l.return !== o.return) l = c, o = f;
        else {
          for (var v = false, S = c.child; S; ) {
            if (S === l) {
              v = true, l = c, o = f;
              break;
            }
            if (S === o) {
              v = true, o = c, l = f;
              break;
            }
            S = S.sibling;
          }
          if (!v) {
            for (S = f.child; S; ) {
              if (S === l) {
                v = true, l = f, o = c;
                break;
              }
              if (S === o) {
                v = true, o = f, l = c;
                break;
              }
              S = S.sibling;
            }
            if (!v) throw Error(a(189));
          }
        }
        if (l.alternate !== o) throw Error(a(190));
      }
      if (l.tag !== 3) throw Error(a(188));
      return l.stateNode.current === l ? e : t;
    }
    function g(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = g(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    var y = Object.assign, x = /* @__PURE__ */ Symbol.for("react.element"), b = /* @__PURE__ */ Symbol.for("react.transitional.element"), T = /* @__PURE__ */ Symbol.for("react.portal"), C = /* @__PURE__ */ Symbol.for("react.fragment"), k = /* @__PURE__ */ Symbol.for("react.strict_mode"), O = /* @__PURE__ */ Symbol.for("react.profiler"), V = /* @__PURE__ */ Symbol.for("react.consumer"), j = /* @__PURE__ */ Symbol.for("react.context"), G = /* @__PURE__ */ Symbol.for("react.forward_ref"), J = /* @__PURE__ */ Symbol.for("react.suspense"), D = /* @__PURE__ */ Symbol.for("react.suspense_list"), Z = /* @__PURE__ */ Symbol.for("react.memo"), X = /* @__PURE__ */ Symbol.for("react.lazy"), re = /* @__PURE__ */ Symbol.for("react.activity"), ie = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), te = Symbol.iterator;
    function W(e) {
      return e === null || typeof e != "object" ? null : (e = te && e[te] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var se = /* @__PURE__ */ Symbol.for("react.client.reference");
    function ne(e) {
      if (e == null) return null;
      if (typeof e == "function") return e.$$typeof === se ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case C:
          return "Fragment";
        case O:
          return "Profiler";
        case k:
          return "StrictMode";
        case J:
          return "Suspense";
        case D:
          return "SuspenseList";
        case re:
          return "Activity";
      }
      if (typeof e == "object") switch (e.$$typeof) {
        case T:
          return "Portal";
        case j:
          return e.displayName || "Context";
        case V:
          return (e._context.displayName || "Context") + ".Consumer";
        case G:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Z:
          return t = e.displayName || null, t !== null ? t : ne(e.type) || "Memo";
        case X:
          t = e._payload, e = e._init;
          try {
            return ne(e(t));
          } catch {
          }
      }
      return null;
    }
    var P = Array.isArray, N = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = {
      pending: false,
      data: null,
      method: null,
      action: null
    }, $ = [], A = -1;
    function be(e) {
      return {
        current: e
      };
    }
    function ye(e) {
      0 > A || (e.current = $[A], $[A] = null, A--);
    }
    function E(e, t) {
      A++, $[A] = e.current, e.current = t;
    }
    var he = be(null), Be = be(null), Ee = be(null), me = be(null);
    function Ze(e, t) {
      switch (E(Ee, t), E(Be, e), E(he, null), t.nodeType) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? lg(e) : 0;
          break;
        default:
          if (e = t.tagName, t = t.namespaceURI) t = lg(t), e = rg(t, e);
          else switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
      }
      ye(he), E(he, e);
    }
    function et() {
      ye(he), ye(Be), ye(Ee);
    }
    function ft(e) {
      e.memoizedState !== null && E(me, e);
      var t = he.current, l = rg(t, e.type);
      t !== l && (E(Be, e), E(he, l));
    }
    function bt(e) {
      Be.current === e && (ye(he), ye(Be)), me.current === e && (ye(me), ta._currentValue = H);
    }
    var Pt, kn;
    function Rn(e) {
      if (Pt === void 0) try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        Pt = t && t[1] || "", kn = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
      return `
` + Pt + e + kn;
    }
    var ur = false;
    function cr(e, t) {
      if (!e || ur) return "";
      ur = true;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var K = function() {
                  throw Error();
                };
                if (Object.defineProperty(K.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(K, []);
                  } catch (q) {
                    var B = q;
                  }
                  Reflect.construct(e, [], K);
                } else {
                  try {
                    K.call();
                  } catch (q) {
                    B = q;
                  }
                  e.call(K.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (q) {
                  B = q;
                }
                (K = e()) && typeof K.catch == "function" && K.catch(function() {
                });
              }
            } catch (q) {
              if (q && B && typeof q.stack == "string") return [
                q.stack,
                B.stack
              ];
            }
            return [
              null,
              null
            ];
          }
        };
        o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var c = Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot, "name");
        c && c.configurable && Object.defineProperty(o.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot"
        });
        var f = o.DetermineComponentFrameRoot(), v = f[0], S = f[1];
        if (v && S) {
          var M = v.split(`
`), U = S.split(`
`);
          for (c = o = 0; o < M.length && !M[o].includes("DetermineComponentFrameRoot"); ) o++;
          for (; c < U.length && !U[c].includes("DetermineComponentFrameRoot"); ) c++;
          if (o === M.length || c === U.length) for (o = M.length - 1, c = U.length - 1; 1 <= o && 0 <= c && M[o] !== U[c]; ) c--;
          for (; 1 <= o && 0 <= c; o--, c--) if (M[o] !== U[c]) {
            if (o !== 1 || c !== 1) do
              if (o--, c--, 0 > c || M[o] !== U[c]) {
                var Y = `
` + M[o].replace(" at new ", " at ");
                return e.displayName && Y.includes("<anonymous>") && (Y = Y.replace("<anonymous>", e.displayName)), Y;
              }
            while (1 <= o && 0 <= c);
            break;
          }
        }
      } finally {
        ur = false, Error.prepareStackTrace = l;
      }
      return (l = e ? e.displayName || e.name : "") ? Rn(l) : "";
    }
    function ka(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return Rn(e.type);
        case 16:
          return Rn("Lazy");
        case 13:
          return e.child !== t && t !== null ? Rn("Suspense Fallback") : Rn("Suspense");
        case 19:
          return Rn("SuspenseList");
        case 0:
        case 15:
          return cr(e.type, false);
        case 11:
          return cr(e.type.render, false);
        case 1:
          return cr(e.type, true);
        case 31:
          return Rn("Activity");
        default:
          return "";
      }
    }
    function Ra(e) {
      try {
        var t = "", l = null;
        do
          t += ka(e, l), l = e, e = e.return;
        while (e);
        return t;
      } catch (o) {
        return `
Error generating stack: ` + o.message + `
` + o.stack;
      }
    }
    var sr = Object.prototype.hasOwnProperty, fr = n.unstable_scheduleCallback, hi = n.unstable_cancelCallback, Hu = n.unstable_shouldYield, qu = n.unstable_requestPaint, xt = n.unstable_now, Vu = n.unstable_getCurrentPriorityLevel, I = n.unstable_ImmediatePriority, le = n.unstable_UserBlockingPriority, pe = n.unstable_NormalPriority, Ce = n.unstable_LowPriority, je = n.unstable_IdlePriority, Ut = n.log, Nn = n.unstable_setDisableYieldValue, St = null, at = null;
    function At(e) {
      if (typeof Ut == "function" && Nn(e), at && typeof at.setStrictMode == "function") try {
        at.setStrictMode(St, e);
      } catch {
      }
    }
    var Ge = Math.clz32 ? Math.clz32 : Ex, nl = Math.log, dn = Math.LN2;
    function Ex(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (nl(e) / dn | 0) | 0;
    }
    var Na = 256, za = 262144, Da = 4194304;
    function Ll(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return e;
      }
    }
    function ja(e, t, l) {
      var o = e.pendingLanes;
      if (o === 0) return 0;
      var c = 0, f = e.suspendedLanes, v = e.pingedLanes;
      e = e.warmLanes;
      var S = o & 134217727;
      return S !== 0 ? (o = S & ~f, o !== 0 ? c = Ll(o) : (v &= S, v !== 0 ? c = Ll(v) : l || (l = S & ~e, l !== 0 && (c = Ll(l))))) : (S = o & ~f, S !== 0 ? c = Ll(S) : v !== 0 ? c = Ll(v) : l || (l = o & ~e, l !== 0 && (c = Ll(l)))), c === 0 ? 0 : t !== 0 && t !== c && (t & f) === 0 && (f = c & -c, l = t & -t, f >= l || f === 32 && (l & 4194048) !== 0) ? t : c;
    }
    function mi(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function Cx(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function Bd() {
      var e = Da;
      return Da <<= 1, (Da & 62914560) === 0 && (Da = 4194304), e;
    }
    function Gu(e) {
      for (var t = [], l = 0; 31 > l; l++) t.push(e);
      return t;
    }
    function pi(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function Ax(e, t, l, o, c, f) {
      var v = e.pendingLanes;
      e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
      var S = e.entanglements, M = e.expirationTimes, U = e.hiddenUpdates;
      for (l = v & ~l; 0 < l; ) {
        var Y = 31 - Ge(l), K = 1 << Y;
        S[Y] = 0, M[Y] = -1;
        var B = U[Y];
        if (B !== null) for (U[Y] = null, Y = 0; Y < B.length; Y++) {
          var q = B[Y];
          q !== null && (q.lane &= -536870913);
        }
        l &= ~K;
      }
      o !== 0 && Hd(e, o, 0), f !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(v & ~t));
    }
    function Hd(e, t, l) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var o = 31 - Ge(t);
      e.entangledLanes |= t, e.entanglements[o] = e.entanglements[o] | 1073741824 | l & 261930;
    }
    function qd(e, t) {
      var l = e.entangledLanes |= t;
      for (e = e.entanglements; l; ) {
        var o = 31 - Ge(l), c = 1 << o;
        c & t | e[o] & t && (e[o] |= t), l &= ~c;
      }
    }
    function Vd(e, t) {
      var l = t & -t;
      return l = (l & 42) !== 0 ? 1 : Yu(l), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l;
    }
    function Yu(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function Xu(e) {
      return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
    }
    function Gd() {
      var e = Q.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Tg(e.type));
    }
    function Yd(e, t) {
      var l = Q.p;
      try {
        return Q.p = e, t();
      } finally {
        Q.p = l;
      }
    }
    var ll = Math.random().toString(36).slice(2), dt = "__reactFiber$" + ll, _t = "__reactProps$" + ll, dr = "__reactContainer$" + ll, Iu = "__reactEvents$" + ll, _x = "__reactListeners$" + ll, Tx = "__reactHandles$" + ll, Xd = "__reactResources$" + ll, gi = "__reactMarker$" + ll;
    function Qu(e) {
      delete e[dt], delete e[_t], delete e[Iu], delete e[_x], delete e[Tx];
    }
    function hr(e) {
      var t = e[dt];
      if (t) return t;
      for (var l = e.parentNode; l; ) {
        if (t = l[dr] || l[dt]) {
          if (l = t.alternate, t.child !== null || l !== null && l.child !== null) for (e = fg(e); e !== null; ) {
            if (l = e[dt]) return l;
            e = fg(e);
          }
          return t;
        }
        e = l, l = e.parentNode;
      }
      return null;
    }
    function mr(e) {
      if (e = e[dt] || e[dr]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
      }
      return null;
    }
    function yi(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
      throw Error(a(33));
    }
    function pr(e) {
      var t = e[Xd];
      return t || (t = e[Xd] = {
        hoistableStyles: /* @__PURE__ */ new Map(),
        hoistableScripts: /* @__PURE__ */ new Map()
      }), t;
    }
    function ct(e) {
      e[gi] = true;
    }
    var Id = /* @__PURE__ */ new Set(), Qd = {};
    function Ul(e, t) {
      gr(e, t), gr(e + "Capture", t);
    }
    function gr(e, t) {
      for (Qd[e] = t, e = 0; e < t.length; e++) Id.add(t[e]);
    }
    var Mx = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Fd = {}, Kd = {};
    function Ox(e) {
      return sr.call(Kd, e) ? true : sr.call(Fd, e) ? false : Mx.test(e) ? Kd[e] = true : (Fd[e] = true, false);
    }
    function La(e, t, l) {
      if (Ox(t)) if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var o = t.toLowerCase().slice(0, 5);
            if (o !== "data-" && o !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + l);
      }
    }
    function Ua(e, t, l) {
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        e.setAttribute(t, "" + l);
      }
    }
    function zn(e, t, l, o) {
      if (o === null) e.removeAttribute(l);
      else {
        switch (typeof o) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(l);
            return;
        }
        e.setAttributeNS(t, l, "" + o);
      }
    }
    function Jt(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return e;
        default:
          return "";
      }
    }
    function Zd(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function kx(e, t, l) {
      var o = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      if (!e.hasOwnProperty(t) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
        var c = o.get, f = o.set;
        return Object.defineProperty(e, t, {
          configurable: true,
          get: function() {
            return c.call(this);
          },
          set: function(v) {
            l = "" + v, f.call(this, v);
          }
        }), Object.defineProperty(e, t, {
          enumerable: o.enumerable
        }), {
          getValue: function() {
            return l;
          },
          setValue: function(v) {
            l = "" + v;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function Fu(e) {
      if (!e._valueTracker) {
        var t = Zd(e) ? "checked" : "value";
        e._valueTracker = kx(e, t, "" + e[t]);
      }
    }
    function Pd(e) {
      if (!e) return false;
      var t = e._valueTracker;
      if (!t) return true;
      var l = t.getValue(), o = "";
      return e && (o = Zd(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== l ? (t.setValue(e), true) : false;
    }
    function Ba(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Rx = /[\n"\\]/g;
    function Wt(e) {
      return e.replace(Rx, function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      });
    }
    function Ku(e, t, l, o, c, f, v, S) {
      e.name = "", v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? e.type = v : e.removeAttribute("type"), t != null ? v === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Jt(t)) : e.value !== "" + Jt(t) && (e.value = "" + Jt(t)) : v !== "submit" && v !== "reset" || e.removeAttribute("value"), t != null ? Zu(e, v, Jt(t)) : l != null ? Zu(e, v, Jt(l)) : o != null && e.removeAttribute("value"), c == null && f != null && (e.defaultChecked = !!f), c != null && (e.checked = c && typeof c != "function" && typeof c != "symbol"), S != null && typeof S != "function" && typeof S != "symbol" && typeof S != "boolean" ? e.name = "" + Jt(S) : e.removeAttribute("name");
    }
    function Jd(e, t, l, o, c, f, v, S) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.type = f), t != null || l != null) {
        if (!(f !== "submit" && f !== "reset" || t != null)) {
          Fu(e);
          return;
        }
        l = l != null ? "" + Jt(l) : "", t = t != null ? "" + Jt(t) : l, S || t === e.value || (e.value = t), e.defaultValue = t;
      }
      o = o ?? c, o = typeof o != "function" && typeof o != "symbol" && !!o, e.checked = S ? e.checked : !!o, e.defaultChecked = !!o, v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" && (e.name = v), Fu(e);
    }
    function Zu(e, t, l) {
      t === "number" && Ba(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
    }
    function yr(e, t, l, o) {
      if (e = e.options, t) {
        t = {};
        for (var c = 0; c < l.length; c++) t["$" + l[c]] = true;
        for (l = 0; l < e.length; l++) c = t.hasOwnProperty("$" + e[l].value), e[l].selected !== c && (e[l].selected = c), c && o && (e[l].defaultSelected = true);
      } else {
        for (l = "" + Jt(l), t = null, c = 0; c < e.length; c++) {
          if (e[c].value === l) {
            e[c].selected = true, o && (e[c].defaultSelected = true);
            return;
          }
          t !== null || e[c].disabled || (t = e[c]);
        }
        t !== null && (t.selected = true);
      }
    }
    function Wd(e, t, l) {
      if (t != null && (t = "" + Jt(t), t !== e.value && (e.value = t), l == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = l != null ? "" + Jt(l) : "";
    }
    function $d(e, t, l, o) {
      if (t == null) {
        if (o != null) {
          if (l != null) throw Error(a(92));
          if (P(o)) {
            if (1 < o.length) throw Error(a(93));
            o = o[0];
          }
          l = o;
        }
        l == null && (l = ""), t = l;
      }
      l = Jt(t), e.defaultValue = l, o = e.textContent, o === l && o !== "" && o !== null && (e.value = o), Fu(e);
    }
    function vr(e, t) {
      if (t) {
        var l = e.firstChild;
        if (l && l === e.lastChild && l.nodeType === 3) {
          l.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var Nx = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function eh(e, t, l) {
      var o = t.indexOf("--") === 0;
      l == null || typeof l == "boolean" || l === "" ? o ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : o ? e.setProperty(t, l) : typeof l != "number" || l === 0 || Nx.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
    }
    function th(e, t, l) {
      if (t != null && typeof t != "object") throw Error(a(62));
      if (e = e.style, l != null) {
        for (var o in l) !l.hasOwnProperty(o) || t != null && t.hasOwnProperty(o) || (o.indexOf("--") === 0 ? e.setProperty(o, "") : o === "float" ? e.cssFloat = "" : e[o] = "");
        for (var c in t) o = t[c], t.hasOwnProperty(c) && l[c] !== o && eh(e, c, o);
      } else for (var f in t) t.hasOwnProperty(f) && eh(e, f, t[f]);
    }
    function Pu(e) {
      if (e.indexOf("-") === -1) return false;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var zx = /* @__PURE__ */ new Map([
      [
        "acceptCharset",
        "accept-charset"
      ],
      [
        "htmlFor",
        "for"
      ],
      [
        "httpEquiv",
        "http-equiv"
      ],
      [
        "crossOrigin",
        "crossorigin"
      ],
      [
        "accentHeight",
        "accent-height"
      ],
      [
        "alignmentBaseline",
        "alignment-baseline"
      ],
      [
        "arabicForm",
        "arabic-form"
      ],
      [
        "baselineShift",
        "baseline-shift"
      ],
      [
        "capHeight",
        "cap-height"
      ],
      [
        "clipPath",
        "clip-path"
      ],
      [
        "clipRule",
        "clip-rule"
      ],
      [
        "colorInterpolation",
        "color-interpolation"
      ],
      [
        "colorInterpolationFilters",
        "color-interpolation-filters"
      ],
      [
        "colorProfile",
        "color-profile"
      ],
      [
        "colorRendering",
        "color-rendering"
      ],
      [
        "dominantBaseline",
        "dominant-baseline"
      ],
      [
        "enableBackground",
        "enable-background"
      ],
      [
        "fillOpacity",
        "fill-opacity"
      ],
      [
        "fillRule",
        "fill-rule"
      ],
      [
        "floodColor",
        "flood-color"
      ],
      [
        "floodOpacity",
        "flood-opacity"
      ],
      [
        "fontFamily",
        "font-family"
      ],
      [
        "fontSize",
        "font-size"
      ],
      [
        "fontSizeAdjust",
        "font-size-adjust"
      ],
      [
        "fontStretch",
        "font-stretch"
      ],
      [
        "fontStyle",
        "font-style"
      ],
      [
        "fontVariant",
        "font-variant"
      ],
      [
        "fontWeight",
        "font-weight"
      ],
      [
        "glyphName",
        "glyph-name"
      ],
      [
        "glyphOrientationHorizontal",
        "glyph-orientation-horizontal"
      ],
      [
        "glyphOrientationVertical",
        "glyph-orientation-vertical"
      ],
      [
        "horizAdvX",
        "horiz-adv-x"
      ],
      [
        "horizOriginX",
        "horiz-origin-x"
      ],
      [
        "imageRendering",
        "image-rendering"
      ],
      [
        "letterSpacing",
        "letter-spacing"
      ],
      [
        "lightingColor",
        "lighting-color"
      ],
      [
        "markerEnd",
        "marker-end"
      ],
      [
        "markerMid",
        "marker-mid"
      ],
      [
        "markerStart",
        "marker-start"
      ],
      [
        "overlinePosition",
        "overline-position"
      ],
      [
        "overlineThickness",
        "overline-thickness"
      ],
      [
        "paintOrder",
        "paint-order"
      ],
      [
        "panose-1",
        "panose-1"
      ],
      [
        "pointerEvents",
        "pointer-events"
      ],
      [
        "renderingIntent",
        "rendering-intent"
      ],
      [
        "shapeRendering",
        "shape-rendering"
      ],
      [
        "stopColor",
        "stop-color"
      ],
      [
        "stopOpacity",
        "stop-opacity"
      ],
      [
        "strikethroughPosition",
        "strikethrough-position"
      ],
      [
        "strikethroughThickness",
        "strikethrough-thickness"
      ],
      [
        "strokeDasharray",
        "stroke-dasharray"
      ],
      [
        "strokeDashoffset",
        "stroke-dashoffset"
      ],
      [
        "strokeLinecap",
        "stroke-linecap"
      ],
      [
        "strokeLinejoin",
        "stroke-linejoin"
      ],
      [
        "strokeMiterlimit",
        "stroke-miterlimit"
      ],
      [
        "strokeOpacity",
        "stroke-opacity"
      ],
      [
        "strokeWidth",
        "stroke-width"
      ],
      [
        "textAnchor",
        "text-anchor"
      ],
      [
        "textDecoration",
        "text-decoration"
      ],
      [
        "textRendering",
        "text-rendering"
      ],
      [
        "transformOrigin",
        "transform-origin"
      ],
      [
        "underlinePosition",
        "underline-position"
      ],
      [
        "underlineThickness",
        "underline-thickness"
      ],
      [
        "unicodeBidi",
        "unicode-bidi"
      ],
      [
        "unicodeRange",
        "unicode-range"
      ],
      [
        "unitsPerEm",
        "units-per-em"
      ],
      [
        "vAlphabetic",
        "v-alphabetic"
      ],
      [
        "vHanging",
        "v-hanging"
      ],
      [
        "vIdeographic",
        "v-ideographic"
      ],
      [
        "vMathematical",
        "v-mathematical"
      ],
      [
        "vectorEffect",
        "vector-effect"
      ],
      [
        "vertAdvY",
        "vert-adv-y"
      ],
      [
        "vertOriginX",
        "vert-origin-x"
      ],
      [
        "vertOriginY",
        "vert-origin-y"
      ],
      [
        "wordSpacing",
        "word-spacing"
      ],
      [
        "writingMode",
        "writing-mode"
      ],
      [
        "xmlnsXlink",
        "xmlns:xlink"
      ],
      [
        "xHeight",
        "x-height"
      ]
    ]), Dx = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Ha(e) {
      return Dx.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function Dn() {
    }
    var Ju = null;
    function Wu(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var br = null, xr = null;
    function nh(e) {
      var t = mr(e);
      if (t && (e = t.stateNode)) {
        var l = e[_t] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (Ku(e, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), t = l.name, l.type === "radio" && t != null) {
              for (l = e; l.parentNode; ) l = l.parentNode;
              for (l = l.querySelectorAll('input[name="' + Wt("" + t) + '"][type="radio"]'), t = 0; t < l.length; t++) {
                var o = l[t];
                if (o !== e && o.form === e.form) {
                  var c = o[_t] || null;
                  if (!c) throw Error(a(90));
                  Ku(o, c.value, c.defaultValue, c.defaultValue, c.checked, c.defaultChecked, c.type, c.name);
                }
              }
              for (t = 0; t < l.length; t++) o = l[t], o.form === e.form && Pd(o);
            }
            break e;
          case "textarea":
            Wd(e, l.value, l.defaultValue);
            break e;
          case "select":
            t = l.value, t != null && yr(e, !!l.multiple, t, false);
        }
      }
    }
    var $u = false;
    function lh(e, t, l) {
      if ($u) return e(t, l);
      $u = true;
      try {
        var o = e(t);
        return o;
      } finally {
        if ($u = false, (br !== null || xr !== null) && (To(), br && (t = br, e = xr, xr = br = null, nh(t), e))) for (t = 0; t < e.length; t++) nh(e[t]);
      }
    }
    function vi(e, t) {
      var l = e.stateNode;
      if (l === null) return null;
      var o = l[_t] || null;
      if (o === null) return null;
      l = o[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (o = !o.disabled) || (e = e.type, o = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !o;
          break e;
        default:
          e = false;
      }
      if (e) return null;
      if (l && typeof l != "function") throw Error(a(231, t, typeof l));
      return l;
    }
    var jn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ec = false;
    if (jn) try {
      var bi = {};
      Object.defineProperty(bi, "passive", {
        get: function() {
          ec = true;
        }
      }), window.addEventListener("test", bi, bi), window.removeEventListener("test", bi, bi);
    } catch {
      ec = false;
    }
    var rl = null, tc = null, qa = null;
    function rh() {
      if (qa) return qa;
      var e, t = tc, l = t.length, o, c = "value" in rl ? rl.value : rl.textContent, f = c.length;
      for (e = 0; e < l && t[e] === c[e]; e++) ;
      var v = l - e;
      for (o = 1; o <= v && t[l - o] === c[f - o]; o++) ;
      return qa = c.slice(e, 1 < o ? 1 - o : void 0);
    }
    function Va(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Ga() {
      return true;
    }
    function ih() {
      return false;
    }
    function Tt(e) {
      function t(l, o, c, f, v) {
        this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = f, this.target = v, this.currentTarget = null;
        for (var S in e) e.hasOwnProperty(S) && (l = e[S], this[S] = l ? l(f) : f[S]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === false) ? Ga : ih, this.isPropagationStopped = ih, this;
      }
      return y(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = true;
          var l = this.nativeEvent;
          l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = false), this.isDefaultPrevented = Ga);
        },
        stopPropagation: function() {
          var l = this.nativeEvent;
          l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = true), this.isPropagationStopped = Ga);
        },
        persist: function() {
        },
        isPersistent: Ga
      }), t;
    }
    var Bl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ya = Tt(Bl), xi = y({}, Bl, {
      view: 0,
      detail: 0
    }), jx = Tt(xi), nc, lc, Si, Xa = y({}, xi, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ic,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== Si && (Si && e.type === "mousemove" ? (nc = e.screenX - Si.screenX, lc = e.screenY - Si.screenY) : lc = nc = 0, Si = e), nc);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : lc;
      }
    }), ah = Tt(Xa), Lx = y({}, Xa, {
      dataTransfer: 0
    }), Ux = Tt(Lx), Bx = y({}, xi, {
      relatedTarget: 0
    }), rc = Tt(Bx), Hx = y({}, Bl, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), qx = Tt(Hx), Vx = y({}, Bl, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Gx = Tt(Vx), Yx = y({}, Bl, {
      data: 0
    }), oh = Tt(Yx), Xx = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Ix = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, Qx = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Fx(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = Qx[e]) ? !!t[e] : false;
    }
    function ic() {
      return Fx;
    }
    var Kx = y({}, xi, {
      key: function(e) {
        if (e.key) {
          var t = Xx[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = Va(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ix[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ic,
      charCode: function(e) {
        return e.type === "keypress" ? Va(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Va(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Zx = Tt(Kx), Px = y({}, Xa, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), uh = Tt(Px), Jx = y({}, xi, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ic
    }), Wx = Tt(Jx), $x = y({}, Bl, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), e1 = Tt($x), t1 = y({}, Xa, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), n1 = Tt(t1), l1 = y({}, Bl, {
      newState: 0,
      oldState: 0
    }), r1 = Tt(l1), i1 = [
      9,
      13,
      27,
      32
    ], ac = jn && "CompositionEvent" in window, wi = null;
    jn && "documentMode" in document && (wi = document.documentMode);
    var a1 = jn && "TextEvent" in window && !wi, ch = jn && (!ac || wi && 8 < wi && 11 >= wi), sh = " ", fh = false;
    function dh(e, t) {
      switch (e) {
        case "keyup":
          return i1.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function hh(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    var Sr = false;
    function o1(e, t) {
      switch (e) {
        case "compositionend":
          return hh(t);
        case "keypress":
          return t.which !== 32 ? null : (fh = true, sh);
        case "textInput":
          return e = t.data, e === sh && fh ? null : e;
        default:
          return null;
      }
    }
    function u1(e, t) {
      if (Sr) return e === "compositionend" || !ac && dh(e, t) ? (e = rh(), qa = tc = rl = null, Sr = false, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return ch && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    var c1 = {
      color: true,
      date: true,
      datetime: true,
      "datetime-local": true,
      email: true,
      month: true,
      number: true,
      password: true,
      range: true,
      search: true,
      tel: true,
      text: true,
      time: true,
      url: true,
      week: true
    };
    function mh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!c1[e.type] : t === "textarea";
    }
    function ph(e, t, l, o) {
      br ? xr ? xr.push(o) : xr = [
        o
      ] : br = o, t = Do(t, "onChange"), 0 < t.length && (l = new Ya("onChange", "change", null, l, o), e.push({
        event: l,
        listeners: t
      }));
    }
    var Ei = null, Ci = null;
    function s1(e) {
      Jp(e, 0);
    }
    function Ia(e) {
      var t = yi(e);
      if (Pd(t)) return e;
    }
    function gh(e, t) {
      if (e === "change") return t;
    }
    var yh = false;
    if (jn) {
      var oc;
      if (jn) {
        var uc = "oninput" in document;
        if (!uc) {
          var vh = document.createElement("div");
          vh.setAttribute("oninput", "return;"), uc = typeof vh.oninput == "function";
        }
        oc = uc;
      } else oc = false;
      yh = oc && (!document.documentMode || 9 < document.documentMode);
    }
    function bh() {
      Ei && (Ei.detachEvent("onpropertychange", xh), Ci = Ei = null);
    }
    function xh(e) {
      if (e.propertyName === "value" && Ia(Ci)) {
        var t = [];
        ph(t, Ci, e, Wu(e)), lh(s1, t);
      }
    }
    function f1(e, t, l) {
      e === "focusin" ? (bh(), Ei = t, Ci = l, Ei.attachEvent("onpropertychange", xh)) : e === "focusout" && bh();
    }
    function d1(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ia(Ci);
    }
    function h1(e, t) {
      if (e === "click") return Ia(t);
    }
    function m1(e, t) {
      if (e === "input" || e === "change") return Ia(t);
    }
    function p1(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Bt = typeof Object.is == "function" ? Object.is : p1;
    function Ai(e, t) {
      if (Bt(e, t)) return true;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null) return false;
      var l = Object.keys(e), o = Object.keys(t);
      if (l.length !== o.length) return false;
      for (o = 0; o < l.length; o++) {
        var c = l[o];
        if (!sr.call(t, c) || !Bt(e[c], t[c])) return false;
      }
      return true;
    }
    function Sh(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function wh(e, t) {
      var l = Sh(e);
      e = 0;
      for (var o; l; ) {
        if (l.nodeType === 3) {
          if (o = e + l.textContent.length, e <= t && o >= t) return {
            node: l,
            offset: t - e
          };
          e = o;
        }
        e: {
          for (; l; ) {
            if (l.nextSibling) {
              l = l.nextSibling;
              break e;
            }
            l = l.parentNode;
          }
          l = void 0;
        }
        l = Sh(l);
      }
    }
    function Eh(e, t) {
      return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? Eh(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
    }
    function Ch(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = Ba(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var l = typeof t.contentWindow.location.href == "string";
        } catch {
          l = false;
        }
        if (l) e = t.contentWindow;
        else break;
        t = Ba(e.document);
      }
      return t;
    }
    function cc(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    var g1 = jn && "documentMode" in document && 11 >= document.documentMode, wr = null, sc = null, _i = null, fc = false;
    function Ah(e, t, l) {
      var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
      fc || wr == null || wr !== Ba(o) || (o = wr, "selectionStart" in o && cc(o) ? o = {
        start: o.selectionStart,
        end: o.selectionEnd
      } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
        anchorNode: o.anchorNode,
        anchorOffset: o.anchorOffset,
        focusNode: o.focusNode,
        focusOffset: o.focusOffset
      }), _i && Ai(_i, o) || (_i = o, o = Do(sc, "onSelect"), 0 < o.length && (t = new Ya("onSelect", "select", null, t, l), e.push({
        event: t,
        listeners: o
      }), t.target = wr)));
    }
    function Hl(e, t) {
      var l = {};
      return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
    }
    var Er = {
      animationend: Hl("Animation", "AnimationEnd"),
      animationiteration: Hl("Animation", "AnimationIteration"),
      animationstart: Hl("Animation", "AnimationStart"),
      transitionrun: Hl("Transition", "TransitionRun"),
      transitionstart: Hl("Transition", "TransitionStart"),
      transitioncancel: Hl("Transition", "TransitionCancel"),
      transitionend: Hl("Transition", "TransitionEnd")
    }, dc = {}, _h = {};
    jn && (_h = document.createElement("div").style, "AnimationEvent" in window || (delete Er.animationend.animation, delete Er.animationiteration.animation, delete Er.animationstart.animation), "TransitionEvent" in window || delete Er.transitionend.transition);
    function ql(e) {
      if (dc[e]) return dc[e];
      if (!Er[e]) return e;
      var t = Er[e], l;
      for (l in t) if (t.hasOwnProperty(l) && l in _h) return dc[e] = t[l];
      return e;
    }
    var Th = ql("animationend"), Mh = ql("animationiteration"), Oh = ql("animationstart"), y1 = ql("transitionrun"), v1 = ql("transitionstart"), b1 = ql("transitioncancel"), kh = ql("transitionend"), Rh = /* @__PURE__ */ new Map(), hc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    hc.push("scrollEnd");
    function hn(e, t) {
      Rh.set(e, t), Ul(t, [
        e
      ]);
    }
    var Qa = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, $t = [], Cr = 0, mc = 0;
    function Fa() {
      for (var e = Cr, t = mc = Cr = 0; t < e; ) {
        var l = $t[t];
        $t[t++] = null;
        var o = $t[t];
        $t[t++] = null;
        var c = $t[t];
        $t[t++] = null;
        var f = $t[t];
        if ($t[t++] = null, o !== null && c !== null) {
          var v = o.pending;
          v === null ? c.next = c : (c.next = v.next, v.next = c), o.pending = c;
        }
        f !== 0 && Nh(l, c, f);
      }
    }
    function Ka(e, t, l, o) {
      $t[Cr++] = e, $t[Cr++] = t, $t[Cr++] = l, $t[Cr++] = o, mc |= o, e.lanes |= o, e = e.alternate, e !== null && (e.lanes |= o);
    }
    function pc(e, t, l, o) {
      return Ka(e, t, l, o), Za(e);
    }
    function Vl(e, t) {
      return Ka(e, null, null, t), Za(e);
    }
    function Nh(e, t, l) {
      e.lanes |= l;
      var o = e.alternate;
      o !== null && (o.lanes |= l);
      for (var c = false, f = e.return; f !== null; ) f.childLanes |= l, o = f.alternate, o !== null && (o.childLanes |= l), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & 1 || (c = true)), e = f, f = f.return;
      return e.tag === 3 ? (f = e.stateNode, c && t !== null && (c = 31 - Ge(l), e = f.hiddenUpdates, o = e[c], o === null ? e[c] = [
        t
      ] : o.push(t), t.lane = l | 536870912), f) : null;
    }
    function Za(e) {
      if (50 < Ki) throw Ki = 0, Cs = null, Error(a(185));
      for (var t = e.return; t !== null; ) e = t, t = e.return;
      return e.tag === 3 ? e.stateNode : null;
    }
    var Ar = {};
    function x1(e, t, l, o) {
      this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function Ht(e, t, l, o) {
      return new x1(e, t, l, o);
    }
    function gc(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function Ln(e, t) {
      var l = e.alternate;
      return l === null ? (l = Ht(e.tag, t, e.key, e.mode), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
      }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
    }
    function zh(e, t) {
      e.flags &= 65011714;
      var l = e.alternate;
      return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
      }), e;
    }
    function Pa(e, t, l, o, c, f) {
      var v = 0;
      if (o = e, typeof e == "function") gc(e) && (v = 1);
      else if (typeof e == "string") v = AS(e, l, he.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else e: switch (e) {
        case re:
          return e = Ht(31, l, t, c), e.elementType = re, e.lanes = f, e;
        case C:
          return Gl(l.children, c, f, t);
        case k:
          v = 8, c |= 24;
          break;
        case O:
          return e = Ht(12, l, t, c | 2), e.elementType = O, e.lanes = f, e;
        case J:
          return e = Ht(13, l, t, c), e.elementType = J, e.lanes = f, e;
        case D:
          return e = Ht(19, l, t, c), e.elementType = D, e.lanes = f, e;
        default:
          if (typeof e == "object" && e !== null) switch (e.$$typeof) {
            case j:
              v = 10;
              break e;
            case V:
              v = 9;
              break e;
            case G:
              v = 11;
              break e;
            case Z:
              v = 14;
              break e;
            case X:
              v = 16, o = null;
              break e;
          }
          v = 29, l = Error(a(130, e === null ? "null" : typeof e, "")), o = null;
      }
      return t = Ht(v, l, t, c), t.elementType = e, t.type = o, t.lanes = f, t;
    }
    function Gl(e, t, l, o) {
      return e = Ht(7, e, o, t), e.lanes = l, e;
    }
    function yc(e, t, l) {
      return e = Ht(6, e, null, t), e.lanes = l, e;
    }
    function Dh(e) {
      var t = Ht(18, null, null, 0);
      return t.stateNode = e, t;
    }
    function vc(e, t, l) {
      return t = Ht(4, e.children !== null ? e.children : [], e.key, t), t.lanes = l, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }
    var jh = /* @__PURE__ */ new WeakMap();
    function en(e, t) {
      if (typeof e == "object" && e !== null) {
        var l = jh.get(e);
        return l !== void 0 ? l : (t = {
          value: e,
          source: t,
          stack: Ra(t)
        }, jh.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: Ra(t)
      };
    }
    var _r = [], Tr = 0, Ja = null, Ti = 0, tn = [], nn = 0, il = null, vn = 1, bn = "";
    function Un(e, t) {
      _r[Tr++] = Ti, _r[Tr++] = Ja, Ja = e, Ti = t;
    }
    function Lh(e, t, l) {
      tn[nn++] = vn, tn[nn++] = bn, tn[nn++] = il, il = e;
      var o = vn;
      e = bn;
      var c = 32 - Ge(o) - 1;
      o &= ~(1 << c), l += 1;
      var f = 32 - Ge(t) + c;
      if (30 < f) {
        var v = c - c % 5;
        f = (o & (1 << v) - 1).toString(32), o >>= v, c -= v, vn = 1 << 32 - Ge(t) + c | l << c | o, bn = f + e;
      } else vn = 1 << f | l << c | o, bn = e;
    }
    function bc(e) {
      e.return !== null && (Un(e, 1), Lh(e, 1, 0));
    }
    function xc(e) {
      for (; e === Ja; ) Ja = _r[--Tr], _r[Tr] = null, Ti = _r[--Tr], _r[Tr] = null;
      for (; e === il; ) il = tn[--nn], tn[nn] = null, bn = tn[--nn], tn[nn] = null, vn = tn[--nn], tn[nn] = null;
    }
    function Uh(e, t) {
      tn[nn++] = vn, tn[nn++] = bn, tn[nn++] = il, vn = t.id, bn = t.overflow, il = e;
    }
    var ht = null, Qe = null, Oe = false, al = null, ln = false, Sc = Error(a(519));
    function ol(e) {
      var t = Error(a(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
      throw Mi(en(t, e)), Sc;
    }
    function Bh(e) {
      var t = e.stateNode, l = e.type, o = e.memoizedProps;
      switch (t[dt] = e, t[_t] = o, l) {
        case "dialog":
          _e("cancel", t), _e("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          _e("load", t);
          break;
        case "video":
        case "audio":
          for (l = 0; l < Pi.length; l++) _e(Pi[l], t);
          break;
        case "source":
          _e("error", t);
          break;
        case "img":
        case "image":
        case "link":
          _e("error", t), _e("load", t);
          break;
        case "details":
          _e("toggle", t);
          break;
        case "input":
          _e("invalid", t), Jd(t, o.value, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name, true);
          break;
        case "select":
          _e("invalid", t);
          break;
        case "textarea":
          _e("invalid", t), $d(t, o.value, o.defaultValue, o.children);
      }
      l = o.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || o.suppressHydrationWarning === true || tg(t.textContent, l) ? (o.popover != null && (_e("beforetoggle", t), _e("toggle", t)), o.onScroll != null && _e("scroll", t), o.onScrollEnd != null && _e("scrollend", t), o.onClick != null && (t.onclick = Dn), t = true) : t = false, t || ol(e, true);
    }
    function Hh(e) {
      for (ht = e.return; ht; ) switch (ht.tag) {
        case 5:
        case 31:
        case 13:
          ln = false;
          return;
        case 27:
        case 3:
          ln = true;
          return;
        default:
          ht = ht.return;
      }
    }
    function Mr(e) {
      if (e !== ht) return false;
      if (!Oe) return Hh(e), Oe = true, false;
      var t = e.tag, l;
      if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || Hs(e.type, e.memoizedProps)), l = !l), l && Qe && ol(e), Hh(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(a(317));
        Qe = sg(e);
      } else if (t === 31) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(a(317));
        Qe = sg(e);
      } else t === 27 ? (t = Qe, Sl(e.type) ? (e = Xs, Xs = null, Qe = e) : Qe = t) : Qe = ht ? an(e.stateNode.nextSibling) : null;
      return true;
    }
    function Yl() {
      Qe = ht = null, Oe = false;
    }
    function wc() {
      var e = al;
      return e !== null && (Rt === null ? Rt = e : Rt.push.apply(Rt, e), al = null), e;
    }
    function Mi(e) {
      al === null ? al = [
        e
      ] : al.push(e);
    }
    var Ec = be(null), Xl = null, Bn = null;
    function ul(e, t, l) {
      E(Ec, t._currentValue), t._currentValue = l;
    }
    function Hn(e) {
      e._currentValue = Ec.current, ye(Ec);
    }
    function Cc(e, t, l) {
      for (; e !== null; ) {
        var o = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, o !== null && (o.childLanes |= t)) : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t), e === l) break;
        e = e.return;
      }
    }
    function Ac(e, t, l, o) {
      var c = e.child;
      for (c !== null && (c.return = e); c !== null; ) {
        var f = c.dependencies;
        if (f !== null) {
          var v = c.child;
          f = f.firstContext;
          e: for (; f !== null; ) {
            var S = f;
            f = c;
            for (var M = 0; M < t.length; M++) if (S.context === t[M]) {
              f.lanes |= l, S = f.alternate, S !== null && (S.lanes |= l), Cc(f.return, l, e), o || (v = null);
              break e;
            }
            f = S.next;
          }
        } else if (c.tag === 18) {
          if (v = c.return, v === null) throw Error(a(341));
          v.lanes |= l, f = v.alternate, f !== null && (f.lanes |= l), Cc(v, l, e), v = null;
        } else v = c.child;
        if (v !== null) v.return = c;
        else for (v = c; v !== null; ) {
          if (v === e) {
            v = null;
            break;
          }
          if (c = v.sibling, c !== null) {
            c.return = v.return, v = c;
            break;
          }
          v = v.return;
        }
        c = v;
      }
    }
    function Or(e, t, l, o) {
      e = null;
      for (var c = t, f = false; c !== null; ) {
        if (!f) {
          if ((c.flags & 524288) !== 0) f = true;
          else if ((c.flags & 262144) !== 0) break;
        }
        if (c.tag === 10) {
          var v = c.alternate;
          if (v === null) throw Error(a(387));
          if (v = v.memoizedProps, v !== null) {
            var S = c.type;
            Bt(c.pendingProps.value, v.value) || (e !== null ? e.push(S) : e = [
              S
            ]);
          }
        } else if (c === me.current) {
          if (v = c.alternate, v === null) throw Error(a(387));
          v.memoizedState.memoizedState !== c.memoizedState.memoizedState && (e !== null ? e.push(ta) : e = [
            ta
          ]);
        }
        c = c.return;
      }
      e !== null && Ac(t, e, l, o), t.flags |= 262144;
    }
    function Wa(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!Bt(e.context._currentValue, e.memoizedValue)) return true;
        e = e.next;
      }
      return false;
    }
    function Il(e) {
      Xl = e, Bn = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function mt(e) {
      return qh(Xl, e);
    }
    function $a(e, t) {
      return Xl === null && Il(e), qh(e, t);
    }
    function qh(e, t) {
      var l = t._currentValue;
      if (t = {
        context: t,
        memoizedValue: l,
        next: null
      }, Bn === null) {
        if (e === null) throw Error(a(308));
        Bn = t, e.dependencies = {
          lanes: 0,
          firstContext: t
        }, e.flags |= 524288;
      } else Bn = Bn.next = t;
      return l;
    }
    var S1 = typeof AbortController < "u" ? AbortController : function() {
      var e = [], t = this.signal = {
        aborted: false,
        addEventListener: function(l, o) {
          e.push(o);
        }
      };
      this.abort = function() {
        t.aborted = true, e.forEach(function(l) {
          return l();
        });
      };
    }, w1 = n.unstable_scheduleCallback, E1 = n.unstable_NormalPriority, tt = {
      $$typeof: j,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };
    function _c() {
      return {
        controller: new S1(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function Oi(e) {
      e.refCount--, e.refCount === 0 && w1(E1, function() {
        e.controller.abort();
      });
    }
    var ki = null, Tc = 0, kr = 0, Rr = null;
    function C1(e, t) {
      if (ki === null) {
        var l = ki = [];
        Tc = 0, kr = ks(), Rr = {
          status: "pending",
          value: void 0,
          then: function(o) {
            l.push(o);
          }
        };
      }
      return Tc++, t.then(Vh, Vh), t;
    }
    function Vh() {
      if (--Tc === 0 && ki !== null) {
        Rr !== null && (Rr.status = "fulfilled");
        var e = ki;
        ki = null, kr = 0, Rr = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function A1(e, t) {
      var l = [], o = {
        status: "pending",
        value: null,
        reason: null,
        then: function(c) {
          l.push(c);
        }
      };
      return e.then(function() {
        o.status = "fulfilled", o.value = t;
        for (var c = 0; c < l.length; c++) (0, l[c])(t);
      }, function(c) {
        for (o.status = "rejected", o.reason = c, c = 0; c < l.length; c++) (0, l[c])(void 0);
      }), o;
    }
    var Gh = N.S;
    N.S = function(e, t) {
      Ap = xt(), typeof t == "object" && t !== null && typeof t.then == "function" && C1(e, t), Gh !== null && Gh(e, t);
    };
    var Ql = be(null);
    function Mc() {
      var e = Ql.current;
      return e !== null ? e : Ye.pooledCache;
    }
    function eo(e, t) {
      t === null ? E(Ql, Ql.current) : E(Ql, t.pool);
    }
    function Yh() {
      var e = Mc();
      return e === null ? null : {
        parent: tt._currentValue,
        pool: e
      };
    }
    var Nr = Error(a(460)), Oc = Error(a(474)), to = Error(a(542)), no = {
      then: function() {
      }
    };
    function Xh(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function Ih(e, t, l) {
      switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(Dn, Dn), t = l), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, Fh(e), e;
        default:
          if (typeof t.status == "string") t.then(Dn, Dn);
          else {
            if (e = Ye, e !== null && 100 < e.shellSuspendCounter) throw Error(a(482));
            e = t, e.status = "pending", e.then(function(o) {
              if (t.status === "pending") {
                var c = t;
                c.status = "fulfilled", c.value = o;
              }
            }, function(o) {
              if (t.status === "pending") {
                var c = t;
                c.status = "rejected", c.reason = o;
              }
            });
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, Fh(e), e;
          }
          throw Kl = t, Nr;
      }
    }
    function Fl(e) {
      try {
        var t = e._init;
        return t(e._payload);
      } catch (l) {
        throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Kl = l, Nr) : l;
      }
    }
    var Kl = null;
    function Qh() {
      if (Kl === null) throw Error(a(459));
      var e = Kl;
      return Kl = null, e;
    }
    function Fh(e) {
      if (e === Nr || e === to) throw Error(a(483));
    }
    var zr = null, Ri = 0;
    function lo(e) {
      var t = Ri;
      return Ri += 1, zr === null && (zr = []), Ih(zr, e, t);
    }
    function Ni(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function ro(e, t) {
      throw t.$$typeof === x ? Error(a(525)) : (e = Object.prototype.toString.call(t), Error(a(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
    }
    function Kh(e) {
      function t(z, R) {
        if (e) {
          var L = z.deletions;
          L === null ? (z.deletions = [
            R
          ], z.flags |= 16) : L.push(R);
        }
      }
      function l(z, R) {
        if (!e) return null;
        for (; R !== null; ) t(z, R), R = R.sibling;
        return null;
      }
      function o(z) {
        for (var R = /* @__PURE__ */ new Map(); z !== null; ) z.key !== null ? R.set(z.key, z) : R.set(z.index, z), z = z.sibling;
        return R;
      }
      function c(z, R) {
        return z = Ln(z, R), z.index = 0, z.sibling = null, z;
      }
      function f(z, R, L) {
        return z.index = L, e ? (L = z.alternate, L !== null ? (L = L.index, L < R ? (z.flags |= 67108866, R) : L) : (z.flags |= 67108866, R)) : (z.flags |= 1048576, R);
      }
      function v(z) {
        return e && z.alternate === null && (z.flags |= 67108866), z;
      }
      function S(z, R, L, F) {
        return R === null || R.tag !== 6 ? (R = yc(L, z.mode, F), R.return = z, R) : (R = c(R, L), R.return = z, R);
      }
      function M(z, R, L, F) {
        var fe = L.type;
        return fe === C ? Y(z, R, L.props.children, F, L.key) : R !== null && (R.elementType === fe || typeof fe == "object" && fe !== null && fe.$$typeof === X && Fl(fe) === R.type) ? (R = c(R, L.props), Ni(R, L), R.return = z, R) : (R = Pa(L.type, L.key, L.props, null, z.mode, F), Ni(R, L), R.return = z, R);
      }
      function U(z, R, L, F) {
        return R === null || R.tag !== 4 || R.stateNode.containerInfo !== L.containerInfo || R.stateNode.implementation !== L.implementation ? (R = vc(L, z.mode, F), R.return = z, R) : (R = c(R, L.children || []), R.return = z, R);
      }
      function Y(z, R, L, F, fe) {
        return R === null || R.tag !== 7 ? (R = Gl(L, z.mode, F, fe), R.return = z, R) : (R = c(R, L), R.return = z, R);
      }
      function K(z, R, L) {
        if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint") return R = yc("" + R, z.mode, L), R.return = z, R;
        if (typeof R == "object" && R !== null) {
          switch (R.$$typeof) {
            case b:
              return L = Pa(R.type, R.key, R.props, null, z.mode, L), Ni(L, R), L.return = z, L;
            case T:
              return R = vc(R, z.mode, L), R.return = z, R;
            case X:
              return R = Fl(R), K(z, R, L);
          }
          if (P(R) || W(R)) return R = Gl(R, z.mode, L, null), R.return = z, R;
          if (typeof R.then == "function") return K(z, lo(R), L);
          if (R.$$typeof === j) return K(z, $a(z, R), L);
          ro(z, R);
        }
        return null;
      }
      function B(z, R, L, F) {
        var fe = R !== null ? R.key : null;
        if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint") return fe !== null ? null : S(z, R, "" + L, F);
        if (typeof L == "object" && L !== null) {
          switch (L.$$typeof) {
            case b:
              return L.key === fe ? M(z, R, L, F) : null;
            case T:
              return L.key === fe ? U(z, R, L, F) : null;
            case X:
              return L = Fl(L), B(z, R, L, F);
          }
          if (P(L) || W(L)) return fe !== null ? null : Y(z, R, L, F, null);
          if (typeof L.then == "function") return B(z, R, lo(L), F);
          if (L.$$typeof === j) return B(z, R, $a(z, L), F);
          ro(z, L);
        }
        return null;
      }
      function q(z, R, L, F, fe) {
        if (typeof F == "string" && F !== "" || typeof F == "number" || typeof F == "bigint") return z = z.get(L) || null, S(R, z, "" + F, fe);
        if (typeof F == "object" && F !== null) {
          switch (F.$$typeof) {
            case b:
              return z = z.get(F.key === null ? L : F.key) || null, M(R, z, F, fe);
            case T:
              return z = z.get(F.key === null ? L : F.key) || null, U(R, z, F, fe);
            case X:
              return F = Fl(F), q(z, R, L, F, fe);
          }
          if (P(F) || W(F)) return z = z.get(L) || null, Y(R, z, F, fe, null);
          if (typeof F.then == "function") return q(z, R, L, lo(F), fe);
          if (F.$$typeof === j) return q(z, R, L, $a(R, F), fe);
          ro(R, F);
        }
        return null;
      }
      function ae(z, R, L, F) {
        for (var fe = null, Re = null, ce = R, xe = R = 0, Me = null; ce !== null && xe < L.length; xe++) {
          ce.index > xe ? (Me = ce, ce = null) : Me = ce.sibling;
          var Ne = B(z, ce, L[xe], F);
          if (Ne === null) {
            ce === null && (ce = Me);
            break;
          }
          e && ce && Ne.alternate === null && t(z, ce), R = f(Ne, R, xe), Re === null ? fe = Ne : Re.sibling = Ne, Re = Ne, ce = Me;
        }
        if (xe === L.length) return l(z, ce), Oe && Un(z, xe), fe;
        if (ce === null) {
          for (; xe < L.length; xe++) ce = K(z, L[xe], F), ce !== null && (R = f(ce, R, xe), Re === null ? fe = ce : Re.sibling = ce, Re = ce);
          return Oe && Un(z, xe), fe;
        }
        for (ce = o(ce); xe < L.length; xe++) Me = q(ce, z, xe, L[xe], F), Me !== null && (e && Me.alternate !== null && ce.delete(Me.key === null ? xe : Me.key), R = f(Me, R, xe), Re === null ? fe = Me : Re.sibling = Me, Re = Me);
        return e && ce.forEach(function(_l) {
          return t(z, _l);
        }), Oe && Un(z, xe), fe;
      }
      function de(z, R, L, F) {
        if (L == null) throw Error(a(151));
        for (var fe = null, Re = null, ce = R, xe = R = 0, Me = null, Ne = L.next(); ce !== null && !Ne.done; xe++, Ne = L.next()) {
          ce.index > xe ? (Me = ce, ce = null) : Me = ce.sibling;
          var _l = B(z, ce, Ne.value, F);
          if (_l === null) {
            ce === null && (ce = Me);
            break;
          }
          e && ce && _l.alternate === null && t(z, ce), R = f(_l, R, xe), Re === null ? fe = _l : Re.sibling = _l, Re = _l, ce = Me;
        }
        if (Ne.done) return l(z, ce), Oe && Un(z, xe), fe;
        if (ce === null) {
          for (; !Ne.done; xe++, Ne = L.next()) Ne = K(z, Ne.value, F), Ne !== null && (R = f(Ne, R, xe), Re === null ? fe = Ne : Re.sibling = Ne, Re = Ne);
          return Oe && Un(z, xe), fe;
        }
        for (ce = o(ce); !Ne.done; xe++, Ne = L.next()) Ne = q(ce, z, xe, Ne.value, F), Ne !== null && (e && Ne.alternate !== null && ce.delete(Ne.key === null ? xe : Ne.key), R = f(Ne, R, xe), Re === null ? fe = Ne : Re.sibling = Ne, Re = Ne);
        return e && ce.forEach(function(LS) {
          return t(z, LS);
        }), Oe && Un(z, xe), fe;
      }
      function Ve(z, R, L, F) {
        if (typeof L == "object" && L !== null && L.type === C && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
          switch (L.$$typeof) {
            case b:
              e: {
                for (var fe = L.key; R !== null; ) {
                  if (R.key === fe) {
                    if (fe = L.type, fe === C) {
                      if (R.tag === 7) {
                        l(z, R.sibling), F = c(R, L.props.children), F.return = z, z = F;
                        break e;
                      }
                    } else if (R.elementType === fe || typeof fe == "object" && fe !== null && fe.$$typeof === X && Fl(fe) === R.type) {
                      l(z, R.sibling), F = c(R, L.props), Ni(F, L), F.return = z, z = F;
                      break e;
                    }
                    l(z, R);
                    break;
                  } else t(z, R);
                  R = R.sibling;
                }
                L.type === C ? (F = Gl(L.props.children, z.mode, F, L.key), F.return = z, z = F) : (F = Pa(L.type, L.key, L.props, null, z.mode, F), Ni(F, L), F.return = z, z = F);
              }
              return v(z);
            case T:
              e: {
                for (fe = L.key; R !== null; ) {
                  if (R.key === fe) if (R.tag === 4 && R.stateNode.containerInfo === L.containerInfo && R.stateNode.implementation === L.implementation) {
                    l(z, R.sibling), F = c(R, L.children || []), F.return = z, z = F;
                    break e;
                  } else {
                    l(z, R);
                    break;
                  }
                  else t(z, R);
                  R = R.sibling;
                }
                F = vc(L, z.mode, F), F.return = z, z = F;
              }
              return v(z);
            case X:
              return L = Fl(L), Ve(z, R, L, F);
          }
          if (P(L)) return ae(z, R, L, F);
          if (W(L)) {
            if (fe = W(L), typeof fe != "function") throw Error(a(150));
            return L = fe.call(L), de(z, R, L, F);
          }
          if (typeof L.then == "function") return Ve(z, R, lo(L), F);
          if (L.$$typeof === j) return Ve(z, R, $a(z, L), F);
          ro(z, L);
        }
        return typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint" ? (L = "" + L, R !== null && R.tag === 6 ? (l(z, R.sibling), F = c(R, L), F.return = z, z = F) : (l(z, R), F = yc(L, z.mode, F), F.return = z, z = F), v(z)) : l(z, R);
      }
      return function(z, R, L, F) {
        try {
          Ri = 0;
          var fe = Ve(z, R, L, F);
          return zr = null, fe;
        } catch (ce) {
          if (ce === Nr || ce === to) throw ce;
          var Re = Ht(29, ce, null, z.mode);
          return Re.lanes = F, Re.return = z, Re;
        }
      };
    }
    var Zl = Kh(true), Zh = Kh(false), cl = false;
    function kc(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          lanes: 0,
          hiddenCallbacks: null
        },
        callbacks: null
      };
    }
    function Rc(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function sl(e) {
      return {
        lane: e,
        tag: 0,
        payload: null,
        callback: null,
        next: null
      };
    }
    function fl(e, t, l) {
      var o = e.updateQueue;
      if (o === null) return null;
      if (o = o.shared, (ze & 2) !== 0) {
        var c = o.pending;
        return c === null ? t.next = t : (t.next = c.next, c.next = t), o.pending = t, t = Za(e), Nh(e, null, l), t;
      }
      return Ka(e, o, t, l), Za(e);
    }
    function zi(e, t, l) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
        var o = t.lanes;
        o &= e.pendingLanes, l |= o, t.lanes = l, qd(e, l);
      }
    }
    function Nc(e, t) {
      var l = e.updateQueue, o = e.alternate;
      if (o !== null && (o = o.updateQueue, l === o)) {
        var c = null, f = null;
        if (l = l.firstBaseUpdate, l !== null) {
          do {
            var v = {
              lane: l.lane,
              tag: l.tag,
              payload: l.payload,
              callback: null,
              next: null
            };
            f === null ? c = f = v : f = f.next = v, l = l.next;
          } while (l !== null);
          f === null ? c = f = t : f = f.next = t;
        } else c = f = t;
        l = {
          baseState: o.baseState,
          firstBaseUpdate: c,
          lastBaseUpdate: f,
          shared: o.shared,
          callbacks: o.callbacks
        }, e.updateQueue = l;
        return;
      }
      e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t;
    }
    var zc = false;
    function Di() {
      if (zc) {
        var e = Rr;
        if (e !== null) throw e;
      }
    }
    function ji(e, t, l, o) {
      zc = false;
      var c = e.updateQueue;
      cl = false;
      var f = c.firstBaseUpdate, v = c.lastBaseUpdate, S = c.shared.pending;
      if (S !== null) {
        c.shared.pending = null;
        var M = S, U = M.next;
        M.next = null, v === null ? f = U : v.next = U, v = M;
        var Y = e.alternate;
        Y !== null && (Y = Y.updateQueue, S = Y.lastBaseUpdate, S !== v && (S === null ? Y.firstBaseUpdate = U : S.next = U, Y.lastBaseUpdate = M));
      }
      if (f !== null) {
        var K = c.baseState;
        v = 0, Y = U = M = null, S = f;
        do {
          var B = S.lane & -536870913, q = B !== S.lane;
          if (q ? (Te & B) === B : (o & B) === B) {
            B !== 0 && B === kr && (zc = true), Y !== null && (Y = Y.next = {
              lane: 0,
              tag: S.tag,
              payload: S.payload,
              callback: null,
              next: null
            });
            e: {
              var ae = e, de = S;
              B = t;
              var Ve = l;
              switch (de.tag) {
                case 1:
                  if (ae = de.payload, typeof ae == "function") {
                    K = ae.call(Ve, K, B);
                    break e;
                  }
                  K = ae;
                  break e;
                case 3:
                  ae.flags = ae.flags & -65537 | 128;
                case 0:
                  if (ae = de.payload, B = typeof ae == "function" ? ae.call(Ve, K, B) : ae, B == null) break e;
                  K = y({}, K, B);
                  break e;
                case 2:
                  cl = true;
              }
            }
            B = S.callback, B !== null && (e.flags |= 64, q && (e.flags |= 8192), q = c.callbacks, q === null ? c.callbacks = [
              B
            ] : q.push(B));
          } else q = {
            lane: B,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          }, Y === null ? (U = Y = q, M = K) : Y = Y.next = q, v |= B;
          if (S = S.next, S === null) {
            if (S = c.shared.pending, S === null) break;
            q = S, S = q.next, q.next = null, c.lastBaseUpdate = q, c.shared.pending = null;
          }
        } while (true);
        Y === null && (M = K), c.baseState = M, c.firstBaseUpdate = U, c.lastBaseUpdate = Y, f === null && (c.shared.lanes = 0), gl |= v, e.lanes = v, e.memoizedState = K;
      }
    }
    function Ph(e, t) {
      if (typeof e != "function") throw Error(a(191, e));
      e.call(t);
    }
    function Jh(e, t) {
      var l = e.callbacks;
      if (l !== null) for (e.callbacks = null, e = 0; e < l.length; e++) Ph(l[e], t);
    }
    var Dr = be(null), io = be(0);
    function Wh(e, t) {
      e = Kn, E(io, e), E(Dr, t), Kn = e | t.baseLanes;
    }
    function Dc() {
      E(io, Kn), E(Dr, Dr.current);
    }
    function jc() {
      Kn = io.current, ye(Dr), ye(io);
    }
    var qt = be(null), rn = null;
    function dl(e) {
      var t = e.alternate;
      E(We, We.current & 1), E(qt, e), rn === null && (t === null || Dr.current !== null || t.memoizedState !== null) && (rn = e);
    }
    function Lc(e) {
      E(We, We.current), E(qt, e), rn === null && (rn = e);
    }
    function $h(e) {
      e.tag === 22 ? (E(We, We.current), E(qt, e), rn === null && (rn = e)) : hl();
    }
    function hl() {
      E(We, We.current), E(qt, qt.current);
    }
    function Vt(e) {
      ye(qt), rn === e && (rn = null), ye(We);
    }
    var We = be(0);
    function ao(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var l = t.memoizedState;
          if (l !== null && (l = l.dehydrated, l === null || Gs(l) || Ys(l))) return t;
        } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var qn = 0, ve = null, He = null, nt = null, oo = false, jr = false, Pl = false, uo = 0, Li = 0, Lr = null, _1 = 0;
    function Pe() {
      throw Error(a(321));
    }
    function Uc(e, t) {
      if (t === null) return false;
      for (var l = 0; l < t.length && l < e.length; l++) if (!Bt(e[l], t[l])) return false;
      return true;
    }
    function Bc(e, t, l, o, c, f) {
      return qn = f, ve = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, N.H = e === null || e.memoizedState === null ? Lm : $c, Pl = false, f = l(o, c), Pl = false, jr && (f = tm(t, l, o, c)), em(e), f;
    }
    function em(e) {
      N.H = Hi;
      var t = He !== null && He.next !== null;
      if (qn = 0, nt = He = ve = null, oo = false, Li = 0, Lr = null, t) throw Error(a(300));
      e === null || lt || (e = e.dependencies, e !== null && Wa(e) && (lt = true));
    }
    function tm(e, t, l, o) {
      ve = e;
      var c = 0;
      do {
        if (jr && (Lr = null), Li = 0, jr = false, 25 <= c) throw Error(a(301));
        if (c += 1, nt = He = null, e.updateQueue != null) {
          var f = e.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        N.H = Um, f = t(l, o);
      } while (jr);
      return f;
    }
    function T1() {
      var e = N.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? Ui(t) : t, e = e.useState()[0], (He !== null ? He.memoizedState : null) !== e && (ve.flags |= 1024), t;
    }
    function Hc() {
      var e = uo !== 0;
      return uo = 0, e;
    }
    function qc(e, t, l) {
      t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
    }
    function Vc(e) {
      if (oo) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        oo = false;
      }
      qn = 0, nt = He = ve = null, jr = false, Li = uo = 0, Lr = null;
    }
    function wt() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return nt === null ? ve.memoizedState = nt = e : nt = nt.next = e, nt;
    }
    function $e() {
      if (He === null) {
        var e = ve.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = He.next;
      var t = nt === null ? ve.memoizedState : nt.next;
      if (t !== null) nt = t, He = e;
      else {
        if (e === null) throw ve.alternate === null ? Error(a(467)) : Error(a(310));
        He = e, e = {
          memoizedState: He.memoizedState,
          baseState: He.baseState,
          baseQueue: He.baseQueue,
          queue: He.queue,
          next: null
        }, nt === null ? ve.memoizedState = nt = e : nt = nt.next = e;
      }
      return nt;
    }
    function co() {
      return {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null
      };
    }
    function Ui(e) {
      var t = Li;
      return Li += 1, Lr === null && (Lr = []), e = Ih(Lr, e, t), t = ve, (nt === null ? t.memoizedState : nt.next) === null && (t = t.alternate, N.H = t === null || t.memoizedState === null ? Lm : $c), e;
    }
    function so(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return Ui(e);
        if (e.$$typeof === j) return mt(e);
      }
      throw Error(a(438, String(e)));
    }
    function Gc(e) {
      var t = null, l = ve.updateQueue;
      if (l !== null && (t = l.memoCache), t == null) {
        var o = ve.alternate;
        o !== null && (o = o.updateQueue, o !== null && (o = o.memoCache, o != null && (t = {
          data: o.data.map(function(c) {
            return c.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = {
        data: [],
        index: 0
      }), l === null && (l = co(), ve.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0) for (l = t.data[t.index] = Array(e), o = 0; o < e; o++) l[o] = ie;
      return t.index++, l;
    }
    function Vn(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function fo(e) {
      var t = $e();
      return Yc(t, He, e);
    }
    function Yc(e, t, l) {
      var o = e.queue;
      if (o === null) throw Error(a(311));
      o.lastRenderedReducer = l;
      var c = e.baseQueue, f = o.pending;
      if (f !== null) {
        if (c !== null) {
          var v = c.next;
          c.next = f.next, f.next = v;
        }
        t.baseQueue = c = f, o.pending = null;
      }
      if (f = e.baseState, c === null) e.memoizedState = f;
      else {
        t = c.next;
        var S = v = null, M = null, U = t, Y = false;
        do {
          var K = U.lane & -536870913;
          if (K !== U.lane ? (Te & K) === K : (qn & K) === K) {
            var B = U.revertLane;
            if (B === 0) M !== null && (M = M.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: U.action,
              hasEagerState: U.hasEagerState,
              eagerState: U.eagerState,
              next: null
            }), K === kr && (Y = true);
            else if ((qn & B) === B) {
              U = U.next, B === kr && (Y = true);
              continue;
            } else K = {
              lane: 0,
              revertLane: U.revertLane,
              gesture: null,
              action: U.action,
              hasEagerState: U.hasEagerState,
              eagerState: U.eagerState,
              next: null
            }, M === null ? (S = M = K, v = f) : M = M.next = K, ve.lanes |= B, gl |= B;
            K = U.action, Pl && l(f, K), f = U.hasEagerState ? U.eagerState : l(f, K);
          } else B = {
            lane: K,
            revertLane: U.revertLane,
            gesture: U.gesture,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          }, M === null ? (S = M = B, v = f) : M = M.next = B, ve.lanes |= K, gl |= K;
          U = U.next;
        } while (U !== null && U !== t);
        if (M === null ? v = f : M.next = S, !Bt(f, e.memoizedState) && (lt = true, Y && (l = Rr, l !== null))) throw l;
        e.memoizedState = f, e.baseState = v, e.baseQueue = M, o.lastRenderedState = f;
      }
      return c === null && (o.lanes = 0), [
        e.memoizedState,
        o.dispatch
      ];
    }
    function Xc(e) {
      var t = $e(), l = t.queue;
      if (l === null) throw Error(a(311));
      l.lastRenderedReducer = e;
      var o = l.dispatch, c = l.pending, f = t.memoizedState;
      if (c !== null) {
        l.pending = null;
        var v = c = c.next;
        do
          f = e(f, v.action), v = v.next;
        while (v !== c);
        Bt(f, t.memoizedState) || (lt = true), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), l.lastRenderedState = f;
      }
      return [
        f,
        o
      ];
    }
    function nm(e, t, l) {
      var o = ve, c = $e(), f = Oe;
      if (f) {
        if (l === void 0) throw Error(a(407));
        l = l();
      } else l = t();
      var v = !Bt((He || c).memoizedState, l);
      if (v && (c.memoizedState = l, lt = true), c = c.queue, Fc(im.bind(null, o, c, e), [
        e
      ]), c.getSnapshot !== t || v || nt !== null && nt.memoizedState.tag & 1) {
        if (o.flags |= 2048, Ur(9, {
          destroy: void 0
        }, rm.bind(null, o, c, l, t), null), Ye === null) throw Error(a(349));
        f || (qn & 127) !== 0 || lm(o, t, l);
      }
      return l;
    }
    function lm(e, t, l) {
      e.flags |= 16384, e = {
        getSnapshot: t,
        value: l
      }, t = ve.updateQueue, t === null ? (t = co(), ve.updateQueue = t, t.stores = [
        e
      ]) : (l = t.stores, l === null ? t.stores = [
        e
      ] : l.push(e));
    }
    function rm(e, t, l, o) {
      t.value = l, t.getSnapshot = o, am(t) && om(e);
    }
    function im(e, t, l) {
      return l(function() {
        am(t) && om(e);
      });
    }
    function am(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var l = t();
        return !Bt(e, l);
      } catch {
        return true;
      }
    }
    function om(e) {
      var t = Vl(e, 2);
      t !== null && Nt(t, e, 2);
    }
    function Ic(e) {
      var t = wt();
      if (typeof e == "function") {
        var l = e;
        if (e = l(), Pl) {
          At(true);
          try {
            l();
          } finally {
            At(false);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Vn,
        lastRenderedState: e
      }, t;
    }
    function um(e, t, l, o) {
      return e.baseState = l, Yc(e, He, typeof o == "function" ? o : Vn);
    }
    function M1(e, t, l, o, c) {
      if (po(e)) throw Error(a(485));
      if (e = t.action, e !== null) {
        var f = {
          payload: c,
          action: e,
          next: null,
          isTransition: true,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(v) {
            f.listeners.push(v);
          }
        };
        N.T !== null ? l(true) : f.isTransition = false, o(f), l = t.pending, l === null ? (f.next = t.pending = f, cm(t, f)) : (f.next = l.next, t.pending = l.next = f);
      }
    }
    function cm(e, t) {
      var l = t.action, o = t.payload, c = e.state;
      if (t.isTransition) {
        var f = N.T, v = {};
        N.T = v;
        try {
          var S = l(c, o), M = N.S;
          M !== null && M(v, S), sm(e, t, S);
        } catch (U) {
          Qc(e, t, U);
        } finally {
          f !== null && v.types !== null && (f.types = v.types), N.T = f;
        }
      } else try {
        f = l(c, o), sm(e, t, f);
      } catch (U) {
        Qc(e, t, U);
      }
    }
    function sm(e, t, l) {
      l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(o) {
        fm(e, t, o);
      }, function(o) {
        return Qc(e, t, o);
      }) : fm(e, t, l);
    }
    function fm(e, t, l) {
      t.status = "fulfilled", t.value = l, dm(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, cm(e, l)));
    }
    function Qc(e, t, l) {
      var o = e.pending;
      if (e.pending = null, o !== null) {
        o = o.next;
        do
          t.status = "rejected", t.reason = l, dm(t), t = t.next;
        while (t !== o);
      }
      e.action = null;
    }
    function dm(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function hm(e, t) {
      return t;
    }
    function mm(e, t) {
      if (Oe) {
        var l = Ye.formState;
        if (l !== null) {
          e: {
            var o = ve;
            if (Oe) {
              if (Qe) {
                t: {
                  for (var c = Qe, f = ln; c.nodeType !== 8; ) {
                    if (!f) {
                      c = null;
                      break t;
                    }
                    if (c = an(c.nextSibling), c === null) {
                      c = null;
                      break t;
                    }
                  }
                  f = c.data, c = f === "F!" || f === "F" ? c : null;
                }
                if (c) {
                  Qe = an(c.nextSibling), o = c.data === "F!";
                  break e;
                }
              }
              ol(o);
            }
            o = false;
          }
          o && (t = l[0]);
        }
      }
      return l = wt(), l.memoizedState = l.baseState = t, o = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: hm,
        lastRenderedState: t
      }, l.queue = o, l = zm.bind(null, ve, o), o.dispatch = l, o = Ic(false), f = Wc.bind(null, ve, false, o.queue), o = wt(), c = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, o.queue = c, l = M1.bind(null, ve, c, f, l), c.dispatch = l, o.memoizedState = e, [
        t,
        l,
        false
      ];
    }
    function pm(e) {
      var t = $e();
      return gm(t, He, e);
    }
    function gm(e, t, l) {
      if (t = Yc(e, t, hm)[0], e = fo(Vn)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
        var o = Ui(t);
      } catch (v) {
        throw v === Nr ? to : v;
      }
      else o = t;
      t = $e();
      var c = t.queue, f = c.dispatch;
      return l !== t.memoizedState && (ve.flags |= 2048, Ur(9, {
        destroy: void 0
      }, O1.bind(null, c, l), null)), [
        o,
        f,
        e
      ];
    }
    function O1(e, t) {
      e.action = t;
    }
    function ym(e) {
      var t = $e(), l = He;
      if (l !== null) return gm(t, l, e);
      $e(), t = t.memoizedState, l = $e();
      var o = l.queue.dispatch;
      return l.memoizedState = e, [
        t,
        o,
        false
      ];
    }
    function Ur(e, t, l, o) {
      return e = {
        tag: e,
        create: l,
        deps: o,
        inst: t,
        next: null
      }, t = ve.updateQueue, t === null && (t = co(), ve.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (o = l.next, l.next = e, e.next = o, t.lastEffect = e), e;
    }
    function vm() {
      return $e().memoizedState;
    }
    function ho(e, t, l, o) {
      var c = wt();
      ve.flags |= e, c.memoizedState = Ur(1 | t, {
        destroy: void 0
      }, l, o === void 0 ? null : o);
    }
    function mo(e, t, l, o) {
      var c = $e();
      o = o === void 0 ? null : o;
      var f = c.memoizedState.inst;
      He !== null && o !== null && Uc(o, He.memoizedState.deps) ? c.memoizedState = Ur(t, f, l, o) : (ve.flags |= e, c.memoizedState = Ur(1 | t, f, l, o));
    }
    function bm(e, t) {
      ho(8390656, 8, e, t);
    }
    function Fc(e, t) {
      mo(2048, 8, e, t);
    }
    function k1(e) {
      ve.flags |= 4;
      var t = ve.updateQueue;
      if (t === null) t = co(), ve.updateQueue = t, t.events = [
        e
      ];
      else {
        var l = t.events;
        l === null ? t.events = [
          e
        ] : l.push(e);
      }
    }
    function xm(e) {
      var t = $e().memoizedState;
      return k1({
        ref: t,
        nextImpl: e
      }), function() {
        if ((ze & 2) !== 0) throw Error(a(440));
        return t.impl.apply(void 0, arguments);
      };
    }
    function Sm(e, t) {
      return mo(4, 2, e, t);
    }
    function wm(e, t) {
      return mo(4, 4, e, t);
    }
    function Em(e, t) {
      if (typeof t == "function") {
        e = e();
        var l = t(e);
        return function() {
          typeof l == "function" ? l() : t(null);
        };
      }
      if (t != null) return e = e(), t.current = e, function() {
        t.current = null;
      };
    }
    function Cm(e, t, l) {
      l = l != null ? l.concat([
        e
      ]) : null, mo(4, 4, Em.bind(null, t, e), l);
    }
    function Kc() {
    }
    function Am(e, t) {
      var l = $e();
      t = t === void 0 ? null : t;
      var o = l.memoizedState;
      return t !== null && Uc(t, o[1]) ? o[0] : (l.memoizedState = [
        e,
        t
      ], e);
    }
    function _m(e, t) {
      var l = $e();
      t = t === void 0 ? null : t;
      var o = l.memoizedState;
      if (t !== null && Uc(t, o[1])) return o[0];
      if (o = e(), Pl) {
        At(true);
        try {
          e();
        } finally {
          At(false);
        }
      }
      return l.memoizedState = [
        o,
        t
      ], o;
    }
    function Zc(e, t, l) {
      return l === void 0 || (qn & 1073741824) !== 0 && (Te & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = Tp(), ve.lanes |= e, gl |= e, l);
    }
    function Tm(e, t, l, o) {
      return Bt(l, t) ? l : Dr.current !== null ? (e = Zc(e, l, o), Bt(e, t) || (lt = true), e) : (qn & 42) === 0 || (qn & 1073741824) !== 0 && (Te & 261930) === 0 ? (lt = true, e.memoizedState = l) : (e = Tp(), ve.lanes |= e, gl |= e, t);
    }
    function Mm(e, t, l, o, c) {
      var f = Q.p;
      Q.p = f !== 0 && 8 > f ? f : 8;
      var v = N.T, S = {};
      N.T = S, Wc(e, false, t, l);
      try {
        var M = c(), U = N.S;
        if (U !== null && U(S, M), M !== null && typeof M == "object" && typeof M.then == "function") {
          var Y = A1(M, o);
          Bi(e, t, Y, Xt(e));
        } else Bi(e, t, o, Xt(e));
      } catch (K) {
        Bi(e, t, {
          then: function() {
          },
          status: "rejected",
          reason: K
        }, Xt());
      } finally {
        Q.p = f, v !== null && S.types !== null && (v.types = S.types), N.T = v;
      }
    }
    function R1() {
    }
    function Pc(e, t, l, o) {
      if (e.tag !== 5) throw Error(a(476));
      var c = Om(e).queue;
      Mm(e, c, t, H, l === null ? R1 : function() {
        return km(e), l(o);
      });
    }
    function Om(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: H,
        baseState: H,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Vn,
          lastRenderedState: H
        },
        next: null
      };
      var l = {};
      return t.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Vn,
          lastRenderedState: l
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function km(e) {
      var t = Om(e);
      t.next === null && (t = e.alternate.memoizedState), Bi(e, t.next.queue, {}, Xt());
    }
    function Jc() {
      return mt(ta);
    }
    function Rm() {
      return $e().memoizedState;
    }
    function Nm() {
      return $e().memoizedState;
    }
    function N1(e) {
      for (var t = e.return; t !== null; ) {
        switch (t.tag) {
          case 24:
          case 3:
            var l = Xt();
            e = sl(l);
            var o = fl(t, e, l);
            o !== null && (Nt(o, t, l), zi(o, t, l)), t = {
              cache: _c()
            }, e.payload = t;
            return;
        }
        t = t.return;
      }
    }
    function z1(e, t, l) {
      var o = Xt();
      l = {
        lane: o,
        revertLane: 0,
        gesture: null,
        action: l,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, po(e) ? Dm(t, l) : (l = pc(e, t, l, o), l !== null && (Nt(l, e, o), jm(l, t, o)));
    }
    function zm(e, t, l) {
      var o = Xt();
      Bi(e, t, l, o);
    }
    function Bi(e, t, l, o) {
      var c = {
        lane: o,
        revertLane: 0,
        gesture: null,
        action: l,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (po(e)) Dm(t, c);
      else {
        var f = e.alternate;
        if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) try {
          var v = t.lastRenderedState, S = f(v, l);
          if (c.hasEagerState = true, c.eagerState = S, Bt(S, v)) return Ka(e, t, c, 0), Ye === null && Fa(), false;
        } catch {
        }
        if (l = pc(e, t, c, o), l !== null) return Nt(l, e, o), jm(l, t, o), true;
      }
      return false;
    }
    function Wc(e, t, l, o) {
      if (o = {
        lane: 2,
        revertLane: ks(),
        gesture: null,
        action: o,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, po(e)) {
        if (t) throw Error(a(479));
      } else t = pc(e, l, o, 2), t !== null && Nt(t, e, 2);
    }
    function po(e) {
      var t = e.alternate;
      return e === ve || t !== null && t === ve;
    }
    function Dm(e, t) {
      jr = oo = true;
      var l = e.pending;
      l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
    }
    function jm(e, t, l) {
      if ((l & 4194048) !== 0) {
        var o = t.lanes;
        o &= e.pendingLanes, l |= o, t.lanes = l, qd(e, l);
      }
    }
    var Hi = {
      readContext: mt,
      use: so,
      useCallback: Pe,
      useContext: Pe,
      useEffect: Pe,
      useImperativeHandle: Pe,
      useLayoutEffect: Pe,
      useInsertionEffect: Pe,
      useMemo: Pe,
      useReducer: Pe,
      useRef: Pe,
      useState: Pe,
      useDebugValue: Pe,
      useDeferredValue: Pe,
      useTransition: Pe,
      useSyncExternalStore: Pe,
      useId: Pe,
      useHostTransitionStatus: Pe,
      useFormState: Pe,
      useActionState: Pe,
      useOptimistic: Pe,
      useMemoCache: Pe,
      useCacheRefresh: Pe
    };
    Hi.useEffectEvent = Pe;
    var Lm = {
      readContext: mt,
      use: so,
      useCallback: function(e, t) {
        return wt().memoizedState = [
          e,
          t === void 0 ? null : t
        ], e;
      },
      useContext: mt,
      useEffect: bm,
      useImperativeHandle: function(e, t, l) {
        l = l != null ? l.concat([
          e
        ]) : null, ho(4194308, 4, Em.bind(null, t, e), l);
      },
      useLayoutEffect: function(e, t) {
        return ho(4194308, 4, e, t);
      },
      useInsertionEffect: function(e, t) {
        ho(4, 2, e, t);
      },
      useMemo: function(e, t) {
        var l = wt();
        t = t === void 0 ? null : t;
        var o = e();
        if (Pl) {
          At(true);
          try {
            e();
          } finally {
            At(false);
          }
        }
        return l.memoizedState = [
          o,
          t
        ], o;
      },
      useReducer: function(e, t, l) {
        var o = wt();
        if (l !== void 0) {
          var c = l(t);
          if (Pl) {
            At(true);
            try {
              l(t);
            } finally {
              At(false);
            }
          }
        } else c = t;
        return o.memoizedState = o.baseState = c, e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: c
        }, o.queue = e, e = e.dispatch = z1.bind(null, ve, e), [
          o.memoizedState,
          e
        ];
      },
      useRef: function(e) {
        var t = wt();
        return e = {
          current: e
        }, t.memoizedState = e;
      },
      useState: function(e) {
        e = Ic(e);
        var t = e.queue, l = zm.bind(null, ve, t);
        return t.dispatch = l, [
          e.memoizedState,
          l
        ];
      },
      useDebugValue: Kc,
      useDeferredValue: function(e, t) {
        var l = wt();
        return Zc(l, e, t);
      },
      useTransition: function() {
        var e = Ic(false);
        return e = Mm.bind(null, ve, e.queue, true, false), wt().memoizedState = e, [
          false,
          e
        ];
      },
      useSyncExternalStore: function(e, t, l) {
        var o = ve, c = wt();
        if (Oe) {
          if (l === void 0) throw Error(a(407));
          l = l();
        } else {
          if (l = t(), Ye === null) throw Error(a(349));
          (Te & 127) !== 0 || lm(o, t, l);
        }
        c.memoizedState = l;
        var f = {
          value: l,
          getSnapshot: t
        };
        return c.queue = f, bm(im.bind(null, o, f, e), [
          e
        ]), o.flags |= 2048, Ur(9, {
          destroy: void 0
        }, rm.bind(null, o, f, l, t), null), l;
      },
      useId: function() {
        var e = wt(), t = Ye.identifierPrefix;
        if (Oe) {
          var l = bn, o = vn;
          l = (o & ~(1 << 32 - Ge(o) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = uo++, 0 < l && (t += "H" + l.toString(32)), t += "_";
        } else l = _1++, t = "_" + t + "r_" + l.toString(32) + "_";
        return e.memoizedState = t;
      },
      useHostTransitionStatus: Jc,
      useFormState: mm,
      useActionState: mm,
      useOptimistic: function(e) {
        var t = wt();
        t.memoizedState = t.baseState = e;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return t.queue = l, t = Wc.bind(null, ve, true, l), l.dispatch = t, [
          e,
          t
        ];
      },
      useMemoCache: Gc,
      useCacheRefresh: function() {
        return wt().memoizedState = N1.bind(null, ve);
      },
      useEffectEvent: function(e) {
        var t = wt(), l = {
          impl: e
        };
        return t.memoizedState = l, function() {
          if ((ze & 2) !== 0) throw Error(a(440));
          return l.impl.apply(void 0, arguments);
        };
      }
    }, $c = {
      readContext: mt,
      use: so,
      useCallback: Am,
      useContext: mt,
      useEffect: Fc,
      useImperativeHandle: Cm,
      useInsertionEffect: Sm,
      useLayoutEffect: wm,
      useMemo: _m,
      useReducer: fo,
      useRef: vm,
      useState: function() {
        return fo(Vn);
      },
      useDebugValue: Kc,
      useDeferredValue: function(e, t) {
        var l = $e();
        return Tm(l, He.memoizedState, e, t);
      },
      useTransition: function() {
        var e = fo(Vn)[0], t = $e().memoizedState;
        return [
          typeof e == "boolean" ? e : Ui(e),
          t
        ];
      },
      useSyncExternalStore: nm,
      useId: Rm,
      useHostTransitionStatus: Jc,
      useFormState: pm,
      useActionState: pm,
      useOptimistic: function(e, t) {
        var l = $e();
        return um(l, He, e, t);
      },
      useMemoCache: Gc,
      useCacheRefresh: Nm
    };
    $c.useEffectEvent = xm;
    var Um = {
      readContext: mt,
      use: so,
      useCallback: Am,
      useContext: mt,
      useEffect: Fc,
      useImperativeHandle: Cm,
      useInsertionEffect: Sm,
      useLayoutEffect: wm,
      useMemo: _m,
      useReducer: Xc,
      useRef: vm,
      useState: function() {
        return Xc(Vn);
      },
      useDebugValue: Kc,
      useDeferredValue: function(e, t) {
        var l = $e();
        return He === null ? Zc(l, e, t) : Tm(l, He.memoizedState, e, t);
      },
      useTransition: function() {
        var e = Xc(Vn)[0], t = $e().memoizedState;
        return [
          typeof e == "boolean" ? e : Ui(e),
          t
        ];
      },
      useSyncExternalStore: nm,
      useId: Rm,
      useHostTransitionStatus: Jc,
      useFormState: ym,
      useActionState: ym,
      useOptimistic: function(e, t) {
        var l = $e();
        return He !== null ? um(l, He, e, t) : (l.baseState = e, [
          e,
          l.queue.dispatch
        ]);
      },
      useMemoCache: Gc,
      useCacheRefresh: Nm
    };
    Um.useEffectEvent = xm;
    function es(e, t, l, o) {
      t = e.memoizedState, l = l(o, t), l = l == null ? t : y({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
    }
    var ts = {
      enqueueSetState: function(e, t, l) {
        e = e._reactInternals;
        var o = Xt(), c = sl(o);
        c.payload = t, l != null && (c.callback = l), t = fl(e, c, o), t !== null && (Nt(t, e, o), zi(t, e, o));
      },
      enqueueReplaceState: function(e, t, l) {
        e = e._reactInternals;
        var o = Xt(), c = sl(o);
        c.tag = 1, c.payload = t, l != null && (c.callback = l), t = fl(e, c, o), t !== null && (Nt(t, e, o), zi(t, e, o));
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var l = Xt(), o = sl(l);
        o.tag = 2, t != null && (o.callback = t), t = fl(e, o, l), t !== null && (Nt(t, e, l), zi(t, e, l));
      }
    };
    function Bm(e, t, l, o, c, f, v) {
      return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, f, v) : t.prototype && t.prototype.isPureReactComponent ? !Ai(l, o) || !Ai(c, f) : true;
    }
    function Hm(e, t, l, o) {
      e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, o), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, o), t.state !== e && ts.enqueueReplaceState(t, t.state, null);
    }
    function Jl(e, t) {
      var l = t;
      if ("ref" in t) {
        l = {};
        for (var o in t) o !== "ref" && (l[o] = t[o]);
      }
      if (e = e.defaultProps) {
        l === t && (l = y({}, l));
        for (var c in e) l[c] === void 0 && (l[c] = e[c]);
      }
      return l;
    }
    function qm(e) {
      Qa(e);
    }
    function Vm(e) {
      console.error(e);
    }
    function Gm(e) {
      Qa(e);
    }
    function go(e, t) {
      try {
        var l = e.onUncaughtError;
        l(t.value, {
          componentStack: t.stack
        });
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function Ym(e, t, l) {
      try {
        var o = e.onCaughtError;
        o(l.value, {
          componentStack: l.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (c) {
        setTimeout(function() {
          throw c;
        });
      }
    }
    function ns(e, t, l) {
      return l = sl(l), l.tag = 3, l.payload = {
        element: null
      }, l.callback = function() {
        go(e, t);
      }, l;
    }
    function Xm(e) {
      return e = sl(e), e.tag = 3, e;
    }
    function Im(e, t, l, o) {
      var c = l.type.getDerivedStateFromError;
      if (typeof c == "function") {
        var f = o.value;
        e.payload = function() {
          return c(f);
        }, e.callback = function() {
          Ym(t, l, o);
        };
      }
      var v = l.stateNode;
      v !== null && typeof v.componentDidCatch == "function" && (e.callback = function() {
        Ym(t, l, o), typeof c != "function" && (yl === null ? yl = /* @__PURE__ */ new Set([
          this
        ]) : yl.add(this));
        var S = o.stack;
        this.componentDidCatch(o.value, {
          componentStack: S !== null ? S : ""
        });
      });
    }
    function D1(e, t, l, o, c) {
      if (l.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
        if (t = l.alternate, t !== null && Or(t, l, c, true), l = qt.current, l !== null) {
          switch (l.tag) {
            case 31:
            case 13:
              return rn === null ? Mo() : l.alternate === null && Je === 0 && (Je = 3), l.flags &= -257, l.flags |= 65536, l.lanes = c, o === no ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([
                o
              ]) : t.add(o), Ts(e, o, c)), false;
            case 22:
              return l.flags |= 65536, o === no ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([
                  o
                ])
              }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([
                o
              ]) : l.add(o)), Ts(e, o, c)), false;
          }
          throw Error(a(435, l.tag));
        }
        return Ts(e, o, c), Mo(), false;
      }
      if (Oe) return t = qt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = c, o !== Sc && (e = Error(a(422), {
        cause: o
      }), Mi(en(e, l)))) : (o !== Sc && (t = Error(a(423), {
        cause: o
      }), Mi(en(t, l))), e = e.current.alternate, e.flags |= 65536, c &= -c, e.lanes |= c, o = en(o, l), c = ns(e.stateNode, o, c), Nc(e, c), Je !== 4 && (Je = 2)), false;
      var f = Error(a(520), {
        cause: o
      });
      if (f = en(f, l), Fi === null ? Fi = [
        f
      ] : Fi.push(f), Je !== 4 && (Je = 2), t === null) return true;
      o = en(o, l), l = t;
      do {
        switch (l.tag) {
          case 3:
            return l.flags |= 65536, e = c & -c, l.lanes |= e, e = ns(l.stateNode, o, e), Nc(l, e), false;
          case 1:
            if (t = l.type, f = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (yl === null || !yl.has(f)))) return l.flags |= 65536, c &= -c, l.lanes |= c, c = Xm(c), Im(c, e, l, o), Nc(l, c), false;
        }
        l = l.return;
      } while (l !== null);
      return false;
    }
    var ls = Error(a(461)), lt = false;
    function pt(e, t, l, o) {
      t.child = e === null ? Zh(t, null, l, o) : Zl(t, e.child, l, o);
    }
    function Qm(e, t, l, o, c) {
      l = l.render;
      var f = t.ref;
      if ("ref" in o) {
        var v = {};
        for (var S in o) S !== "ref" && (v[S] = o[S]);
      } else v = o;
      return Il(t), o = Bc(e, t, l, v, f, c), S = Hc(), e !== null && !lt ? (qc(e, t, c), Gn(e, t, c)) : (Oe && S && bc(t), t.flags |= 1, pt(e, t, o, c), t.child);
    }
    function Fm(e, t, l, o, c) {
      if (e === null) {
        var f = l.type;
        return typeof f == "function" && !gc(f) && f.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = f, Km(e, t, f, o, c)) : (e = Pa(l.type, null, o, t, t.mode, c), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (f = e.child, !fs(e, c)) {
        var v = f.memoizedProps;
        if (l = l.compare, l = l !== null ? l : Ai, l(v, o) && e.ref === t.ref) return Gn(e, t, c);
      }
      return t.flags |= 1, e = Ln(f, o), e.ref = t.ref, e.return = t, t.child = e;
    }
    function Km(e, t, l, o, c) {
      if (e !== null) {
        var f = e.memoizedProps;
        if (Ai(f, o) && e.ref === t.ref) if (lt = false, t.pendingProps = o = f, fs(e, c)) (e.flags & 131072) !== 0 && (lt = true);
        else return t.lanes = e.lanes, Gn(e, t, c);
      }
      return rs(e, t, l, o, c);
    }
    function Zm(e, t, l, o) {
      var c = o.children, f = e !== null ? e.memoizedState : null;
      if (e === null && t.stateNode === null && (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), o.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (f = f !== null ? f.baseLanes | l : l, e !== null) {
            for (o = t.child = e.child, c = 0; o !== null; ) c = c | o.lanes | o.childLanes, o = o.sibling;
            o = c & ~f;
          } else o = 0, t.child = null;
          return Pm(e, t, f, l, o);
        }
        if ((l & 536870912) !== 0) t.memoizedState = {
          baseLanes: 0,
          cachePool: null
        }, e !== null && eo(t, f !== null ? f.cachePool : null), f !== null ? Wh(t, f) : Dc(), $h(t);
        else return o = t.lanes = 536870912, Pm(e, t, f !== null ? f.baseLanes | l : l, l, o);
      } else f !== null ? (eo(t, f.cachePool), Wh(t, f), hl(), t.memoizedState = null) : (e !== null && eo(t, null), Dc(), hl());
      return pt(e, t, c, l), t.child;
    }
    function qi(e, t) {
      return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), t.sibling;
    }
    function Pm(e, t, l, o, c) {
      var f = Mc();
      return f = f === null ? null : {
        parent: tt._currentValue,
        pool: f
      }, t.memoizedState = {
        baseLanes: l,
        cachePool: f
      }, e !== null && eo(t, null), Dc(), $h(t), e !== null && Or(e, t, o, true), t.childLanes = c, null;
    }
    function yo(e, t) {
      return t = bo({
        mode: t.mode,
        children: t.children
      }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function Jm(e, t, l) {
      return Zl(t, e.child, null, l), e = yo(t, t.pendingProps), e.flags |= 2, Vt(t), t.memoizedState = null, e;
    }
    function j1(e, t, l) {
      var o = t.pendingProps, c = (t.flags & 128) !== 0;
      if (t.flags &= -129, e === null) {
        if (Oe) {
          if (o.mode === "hidden") return e = yo(t, o), t.lanes = 536870912, qi(null, e);
          if (Lc(t), (e = Qe) ? (e = cg(e, ln), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
            dehydrated: e,
            treeContext: il !== null ? {
              id: vn,
              overflow: bn
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, l = Dh(e), l.return = t, t.child = l, ht = t, Qe = null)) : e = null, e === null) throw ol(t);
          return t.lanes = 536870912, null;
        }
        return yo(t, o);
      }
      var f = e.memoizedState;
      if (f !== null) {
        var v = f.dehydrated;
        if (Lc(t), c) if (t.flags & 256) t.flags &= -257, t = Jm(e, t, l);
        else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
        else throw Error(a(558));
        else if (lt || Or(e, t, l, false), c = (l & e.childLanes) !== 0, lt || c) {
          if (o = Ye, o !== null && (v = Vd(o, l), v !== 0 && v !== f.retryLane)) throw f.retryLane = v, Vl(e, v), Nt(o, e, v), ls;
          Mo(), t = Jm(e, t, l);
        } else e = f.treeContext, Qe = an(v.nextSibling), ht = t, Oe = true, al = null, ln = false, e !== null && Uh(t, e), t = yo(t, o), t.flags |= 4096;
        return t;
      }
      return e = Ln(e.child, {
        mode: o.mode,
        children: o.children
      }), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function vo(e, t) {
      var l = t.ref;
      if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof l != "function" && typeof l != "object") throw Error(a(284));
        (e === null || e.ref !== l) && (t.flags |= 4194816);
      }
    }
    function rs(e, t, l, o, c) {
      return Il(t), l = Bc(e, t, l, o, void 0, c), o = Hc(), e !== null && !lt ? (qc(e, t, c), Gn(e, t, c)) : (Oe && o && bc(t), t.flags |= 1, pt(e, t, l, c), t.child);
    }
    function Wm(e, t, l, o, c, f) {
      return Il(t), t.updateQueue = null, l = tm(t, o, l, c), em(e), o = Hc(), e !== null && !lt ? (qc(e, t, f), Gn(e, t, f)) : (Oe && o && bc(t), t.flags |= 1, pt(e, t, l, f), t.child);
    }
    function $m(e, t, l, o, c) {
      if (Il(t), t.stateNode === null) {
        var f = Ar, v = l.contextType;
        typeof v == "object" && v !== null && (f = mt(v)), f = new l(o, f), t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = ts, t.stateNode = f, f._reactInternals = t, f = t.stateNode, f.props = o, f.state = t.memoizedState, f.refs = {}, kc(t), v = l.contextType, f.context = typeof v == "object" && v !== null ? mt(v) : Ar, f.state = t.memoizedState, v = l.getDerivedStateFromProps, typeof v == "function" && (es(t, l, v, o), f.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (v = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), v !== f.state && ts.enqueueReplaceState(f, f.state, null), ji(t, o, f, c), Di(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), o = true;
      } else if (e === null) {
        f = t.stateNode;
        var S = t.memoizedProps, M = Jl(l, S);
        f.props = M;
        var U = f.context, Y = l.contextType;
        v = Ar, typeof Y == "object" && Y !== null && (v = mt(Y));
        var K = l.getDerivedStateFromProps;
        Y = typeof K == "function" || typeof f.getSnapshotBeforeUpdate == "function", S = t.pendingProps !== S, Y || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (S || U !== v) && Hm(t, f, o, v), cl = false;
        var B = t.memoizedState;
        f.state = B, ji(t, o, f, c), Di(), U = t.memoizedState, S || B !== U || cl ? (typeof K == "function" && (es(t, l, K, o), U = t.memoizedState), (M = cl || Bm(t, l, M, o, B, U, v)) ? (Y || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = o, t.memoizedState = U), f.props = o, f.state = U, f.context = v, o = M) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), o = false);
      } else {
        f = t.stateNode, Rc(e, t), v = t.memoizedProps, Y = Jl(l, v), f.props = Y, K = t.pendingProps, B = f.context, U = l.contextType, M = Ar, typeof U == "object" && U !== null && (M = mt(U)), S = l.getDerivedStateFromProps, (U = typeof S == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (v !== K || B !== M) && Hm(t, f, o, M), cl = false, B = t.memoizedState, f.state = B, ji(t, o, f, c), Di();
        var q = t.memoizedState;
        v !== K || B !== q || cl || e !== null && e.dependencies !== null && Wa(e.dependencies) ? (typeof S == "function" && (es(t, l, S, o), q = t.memoizedState), (Y = cl || Bm(t, l, Y, o, B, q, M) || e !== null && e.dependencies !== null && Wa(e.dependencies)) ? (U || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(o, q, M), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(o, q, M)), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || v === e.memoizedProps && B === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && B === e.memoizedState || (t.flags |= 1024), t.memoizedProps = o, t.memoizedState = q), f.props = o, f.state = q, f.context = M, o = Y) : (typeof f.componentDidUpdate != "function" || v === e.memoizedProps && B === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && B === e.memoizedState || (t.flags |= 1024), o = false);
      }
      return f = o, vo(e, t), o = (t.flags & 128) !== 0, f || o ? (f = t.stateNode, l = o && typeof l.getDerivedStateFromError != "function" ? null : f.render(), t.flags |= 1, e !== null && o ? (t.child = Zl(t, e.child, null, c), t.child = Zl(t, null, l, c)) : pt(e, t, l, c), t.memoizedState = f.state, e = t.child) : e = Gn(e, t, c), e;
    }
    function ep(e, t, l, o) {
      return Yl(), t.flags |= 256, pt(e, t, l, o), t.child;
    }
    var is = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    };
    function as(e) {
      return {
        baseLanes: e,
        cachePool: Yh()
      };
    }
    function os(e, t, l) {
      return e = e !== null ? e.childLanes & ~l : 0, t && (e |= Yt), e;
    }
    function tp(e, t, l) {
      var o = t.pendingProps, c = false, f = (t.flags & 128) !== 0, v;
      if ((v = f) || (v = e !== null && e.memoizedState === null ? false : (We.current & 2) !== 0), v && (c = true, t.flags &= -129), v = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (Oe) {
          if (c ? dl(t) : hl(), (e = Qe) ? (e = cg(e, ln), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
            dehydrated: e,
            treeContext: il !== null ? {
              id: vn,
              overflow: bn
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, l = Dh(e), l.return = t, t.child = l, ht = t, Qe = null)) : e = null, e === null) throw ol(t);
          return Ys(e) ? t.lanes = 32 : t.lanes = 536870912, null;
        }
        var S = o.children;
        return o = o.fallback, c ? (hl(), c = t.mode, S = bo({
          mode: "hidden",
          children: S
        }, c), o = Gl(o, c, l, null), S.return = t, o.return = t, S.sibling = o, t.child = S, o = t.child, o.memoizedState = as(l), o.childLanes = os(e, v, l), t.memoizedState = is, qi(null, o)) : (dl(t), us(t, S));
      }
      var M = e.memoizedState;
      if (M !== null && (S = M.dehydrated, S !== null)) {
        if (f) t.flags & 256 ? (dl(t), t.flags &= -257, t = cs(e, t, l)) : t.memoizedState !== null ? (hl(), t.child = e.child, t.flags |= 128, t = null) : (hl(), S = o.fallback, c = t.mode, o = bo({
          mode: "visible",
          children: o.children
        }, c), S = Gl(S, c, l, null), S.flags |= 2, o.return = t, S.return = t, o.sibling = S, t.child = o, Zl(t, e.child, null, l), o = t.child, o.memoizedState = as(l), o.childLanes = os(e, v, l), t.memoizedState = is, t = qi(null, o));
        else if (dl(t), Ys(S)) {
          if (v = S.nextSibling && S.nextSibling.dataset, v) var U = v.dgst;
          v = U, o = Error(a(419)), o.stack = "", o.digest = v, Mi({
            value: o,
            source: null,
            stack: null
          }), t = cs(e, t, l);
        } else if (lt || Or(e, t, l, false), v = (l & e.childLanes) !== 0, lt || v) {
          if (v = Ye, v !== null && (o = Vd(v, l), o !== 0 && o !== M.retryLane)) throw M.retryLane = o, Vl(e, o), Nt(v, e, o), ls;
          Gs(S) || Mo(), t = cs(e, t, l);
        } else Gs(S) ? (t.flags |= 192, t.child = e.child, t = null) : (e = M.treeContext, Qe = an(S.nextSibling), ht = t, Oe = true, al = null, ln = false, e !== null && Uh(t, e), t = us(t, o.children), t.flags |= 4096);
        return t;
      }
      return c ? (hl(), S = o.fallback, c = t.mode, M = e.child, U = M.sibling, o = Ln(M, {
        mode: "hidden",
        children: o.children
      }), o.subtreeFlags = M.subtreeFlags & 65011712, U !== null ? S = Ln(U, S) : (S = Gl(S, c, l, null), S.flags |= 2), S.return = t, o.return = t, o.sibling = S, t.child = o, qi(null, o), o = t.child, S = e.child.memoizedState, S === null ? S = as(l) : (c = S.cachePool, c !== null ? (M = tt._currentValue, c = c.parent !== M ? {
        parent: M,
        pool: M
      } : c) : c = Yh(), S = {
        baseLanes: S.baseLanes | l,
        cachePool: c
      }), o.memoizedState = S, o.childLanes = os(e, v, l), t.memoizedState = is, qi(e.child, o)) : (dl(t), l = e.child, e = l.sibling, l = Ln(l, {
        mode: "visible",
        children: o.children
      }), l.return = t, l.sibling = null, e !== null && (v = t.deletions, v === null ? (t.deletions = [
        e
      ], t.flags |= 16) : v.push(e)), t.child = l, t.memoizedState = null, l);
    }
    function us(e, t) {
      return t = bo({
        mode: "visible",
        children: t
      }, e.mode), t.return = e, e.child = t;
    }
    function bo(e, t) {
      return e = Ht(22, e, null, t), e.lanes = 0, e;
    }
    function cs(e, t, l) {
      return Zl(t, e.child, null, l), e = us(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
    }
    function np(e, t, l) {
      e.lanes |= t;
      var o = e.alternate;
      o !== null && (o.lanes |= t), Cc(e.return, t, l);
    }
    function ss(e, t, l, o, c, f) {
      var v = e.memoizedState;
      v === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: o,
        tail: l,
        tailMode: c,
        treeForkCount: f
      } : (v.isBackwards = t, v.rendering = null, v.renderingStartTime = 0, v.last = o, v.tail = l, v.tailMode = c, v.treeForkCount = f);
    }
    function lp(e, t, l) {
      var o = t.pendingProps, c = o.revealOrder, f = o.tail;
      o = o.children;
      var v = We.current, S = (v & 2) !== 0;
      if (S ? (v = v & 1 | 2, t.flags |= 128) : v &= 1, E(We, v), pt(e, t, o, l), o = Oe ? Ti : 0, !S && e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && np(e, l, t);
        else if (e.tag === 19) np(e, l, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      switch (c) {
        case "forwards":
          for (l = t.child, c = null; l !== null; ) e = l.alternate, e !== null && ao(e) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = t.child, t.child = null) : (c = l.sibling, l.sibling = null), ss(t, false, c, l, f, o);
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (l = null, c = t.child, t.child = null; c !== null; ) {
            if (e = c.alternate, e !== null && ao(e) === null) {
              t.child = c;
              break;
            }
            e = c.sibling, c.sibling = l, l = c, c = e;
          }
          ss(t, true, l, null, f, o);
          break;
        case "together":
          ss(t, false, null, null, void 0, o);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Gn(e, t, l) {
      if (e !== null && (t.dependencies = e.dependencies), gl |= t.lanes, (l & t.childLanes) === 0) if (e !== null) {
        if (Or(e, t, l, false), (l & t.childLanes) === 0) return null;
      } else return null;
      if (e !== null && t.child !== e.child) throw Error(a(153));
      if (t.child !== null) {
        for (e = t.child, l = Ln(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; ) e = e.sibling, l = l.sibling = Ln(e, e.pendingProps), l.return = t;
        l.sibling = null;
      }
      return t.child;
    }
    function fs(e, t) {
      return (e.lanes & t) !== 0 ? true : (e = e.dependencies, !!(e !== null && Wa(e)));
    }
    function L1(e, t, l) {
      switch (t.tag) {
        case 3:
          Ze(t, t.stateNode.containerInfo), ul(t, tt, e.memoizedState.cache), Yl();
          break;
        case 27:
        case 5:
          ft(t);
          break;
        case 4:
          Ze(t, t.stateNode.containerInfo);
          break;
        case 10:
          ul(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return t.flags |= 128, Lc(t), null;
          break;
        case 13:
          var o = t.memoizedState;
          if (o !== null) return o.dehydrated !== null ? (dl(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? tp(e, t, l) : (dl(t), e = Gn(e, t, l), e !== null ? e.sibling : null);
          dl(t);
          break;
        case 19:
          var c = (e.flags & 128) !== 0;
          if (o = (l & t.childLanes) !== 0, o || (Or(e, t, l, false), o = (l & t.childLanes) !== 0), c) {
            if (o) return lp(e, t, l);
            t.flags |= 128;
          }
          if (c = t.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), E(We, We.current), o) break;
          return null;
        case 22:
          return t.lanes = 0, Zm(e, t, l, t.pendingProps);
        case 24:
          ul(t, tt, e.memoizedState.cache);
      }
      return Gn(e, t, l);
    }
    function rp(e, t, l) {
      if (e !== null) if (e.memoizedProps !== t.pendingProps) lt = true;
      else {
        if (!fs(e, l) && (t.flags & 128) === 0) return lt = false, L1(e, t, l);
        lt = (e.flags & 131072) !== 0;
      }
      else lt = false, Oe && (t.flags & 1048576) !== 0 && Lh(t, Ti, t.index);
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: {
            var o = t.pendingProps;
            if (e = Fl(t.elementType), t.type = e, typeof e == "function") gc(e) ? (o = Jl(e, o), t.tag = 1, t = $m(null, t, e, o, l)) : (t.tag = 0, t = rs(null, t, e, o, l));
            else {
              if (e != null) {
                var c = e.$$typeof;
                if (c === G) {
                  t.tag = 11, t = Qm(null, t, e, o, l);
                  break e;
                } else if (c === Z) {
                  t.tag = 14, t = Fm(null, t, e, o, l);
                  break e;
                }
              }
              throw t = ne(e) || e, Error(a(306, t, ""));
            }
          }
          return t;
        case 0:
          return rs(e, t, t.type, t.pendingProps, l);
        case 1:
          return o = t.type, c = Jl(o, t.pendingProps), $m(e, t, o, c, l);
        case 3:
          e: {
            if (Ze(t, t.stateNode.containerInfo), e === null) throw Error(a(387));
            o = t.pendingProps;
            var f = t.memoizedState;
            c = f.element, Rc(e, t), ji(t, o, null, l);
            var v = t.memoizedState;
            if (o = v.cache, ul(t, tt, o), o !== f.cache && Ac(t, [
              tt
            ], l, true), Di(), o = v.element, f.isDehydrated) if (f = {
              element: o,
              isDehydrated: false,
              cache: v.cache
            }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
              t = ep(e, t, o, l);
              break e;
            } else if (o !== c) {
              c = en(Error(a(424)), t), Mi(c), t = ep(e, t, o, l);
              break e;
            } else for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Qe = an(e.firstChild), ht = t, Oe = true, al = null, ln = true, l = Zh(t, null, o, l), t.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
            else {
              if (Yl(), o === c) {
                t = Gn(e, t, l);
                break e;
              }
              pt(e, t, o, l);
            }
            t = t.child;
          }
          return t;
        case 26:
          return vo(e, t), e === null ? (l = pg(t.type, null, t.pendingProps, null)) ? t.memoizedState = l : Oe || (l = t.type, e = t.pendingProps, o = jo(Ee.current).createElement(l), o[dt] = t, o[_t] = e, gt(o, l, e), ct(o), t.stateNode = o) : t.memoizedState = pg(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
        case 27:
          return ft(t), e === null && Oe && (o = t.stateNode = dg(t.type, t.pendingProps, Ee.current), ht = t, ln = true, c = Qe, Sl(t.type) ? (Xs = c, Qe = an(o.firstChild)) : Qe = c), pt(e, t, t.pendingProps.children, l), vo(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && Oe && ((c = o = Qe) && (o = dS(o, t.type, t.pendingProps, ln), o !== null ? (t.stateNode = o, ht = t, Qe = an(o.firstChild), ln = false, c = true) : c = false), c || ol(t)), ft(t), c = t.type, f = t.pendingProps, v = e !== null ? e.memoizedProps : null, o = f.children, Hs(c, f) ? o = null : v !== null && Hs(c, v) && (t.flags |= 32), t.memoizedState !== null && (c = Bc(e, t, T1, null, null, l), ta._currentValue = c), vo(e, t), pt(e, t, o, l), t.child;
        case 6:
          return e === null && Oe && ((e = l = Qe) && (l = hS(l, t.pendingProps, ln), l !== null ? (t.stateNode = l, ht = t, Qe = null, e = true) : e = false), e || ol(t)), null;
        case 13:
          return tp(e, t, l);
        case 4:
          return Ze(t, t.stateNode.containerInfo), o = t.pendingProps, e === null ? t.child = Zl(t, null, o, l) : pt(e, t, o, l), t.child;
        case 11:
          return Qm(e, t, t.type, t.pendingProps, l);
        case 7:
          return pt(e, t, t.pendingProps, l), t.child;
        case 8:
          return pt(e, t, t.pendingProps.children, l), t.child;
        case 12:
          return pt(e, t, t.pendingProps.children, l), t.child;
        case 10:
          return o = t.pendingProps, ul(t, t.type, o.value), pt(e, t, o.children, l), t.child;
        case 9:
          return c = t.type._context, o = t.pendingProps.children, Il(t), c = mt(c), o = o(c), t.flags |= 1, pt(e, t, o, l), t.child;
        case 14:
          return Fm(e, t, t.type, t.pendingProps, l);
        case 15:
          return Km(e, t, t.type, t.pendingProps, l);
        case 19:
          return lp(e, t, l);
        case 31:
          return j1(e, t, l);
        case 22:
          return Zm(e, t, l, t.pendingProps);
        case 24:
          return Il(t), o = mt(tt), e === null ? (c = Mc(), c === null && (c = Ye, f = _c(), c.pooledCache = f, f.refCount++, f !== null && (c.pooledCacheLanes |= l), c = f), t.memoizedState = {
            parent: o,
            cache: c
          }, kc(t), ul(t, tt, c)) : ((e.lanes & l) !== 0 && (Rc(e, t), ji(t, null, null, l), Di()), c = e.memoizedState, f = t.memoizedState, c.parent !== o ? (c = {
            parent: o,
            cache: o
          }, t.memoizedState = c, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = c), ul(t, tt, o)) : (o = f.cache, ul(t, tt, o), o !== c.cache && Ac(t, [
            tt
          ], l, true))), pt(e, t, t.pendingProps.children, l), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(a(156, t.tag));
    }
    function Yn(e) {
      e.flags |= 4;
    }
    function ds(e, t, l, o, c) {
      if ((t = (e.mode & 32) !== 0) && (t = false), t) {
        if (e.flags |= 16777216, (c & 335544128) === c) if (e.stateNode.complete) e.flags |= 8192;
        else if (Rp()) e.flags |= 8192;
        else throw Kl = no, Oc;
      } else e.flags &= -16777217;
    }
    function ip(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
      else if (e.flags |= 16777216, !xg(t)) if (Rp()) e.flags |= 8192;
      else throw Kl = no, Oc;
    }
    function xo(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Bd() : 536870912, e.lanes |= t, Vr |= t);
    }
    function Vi(e, t) {
      if (!Oe) switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var l = null; t !== null; ) t.alternate !== null && (l = t), t = t.sibling;
          l === null ? e.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = e.tail;
          for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
          o === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null;
      }
    }
    function Fe(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, l = 0, o = 0;
      if (t) for (var c = e.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 65011712, o |= c.flags & 65011712, c.return = e, c = c.sibling;
      else for (c = e.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = e, c = c.sibling;
      return e.subtreeFlags |= o, e.childLanes = l, t;
    }
    function U1(e, t, l) {
      var o = t.pendingProps;
      switch (xc(t), t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Fe(t), null;
        case 1:
          return Fe(t), null;
        case 3:
          return l = t.stateNode, o = null, e !== null && (o = e.memoizedState.cache), t.memoizedState.cache !== o && (t.flags |= 2048), Hn(tt), et(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (Mr(t) ? Yn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, wc())), Fe(t), null;
        case 26:
          var c = t.type, f = t.memoizedState;
          return e === null ? (Yn(t), f !== null ? (Fe(t), ip(t, f)) : (Fe(t), ds(t, c, null, o, l))) : f ? f !== e.memoizedState ? (Yn(t), Fe(t), ip(t, f)) : (Fe(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== o && Yn(t), Fe(t), ds(t, c, e, o, l)), null;
        case 27:
          if (bt(t), l = Ee.current, c = t.type, e !== null && t.stateNode != null) e.memoizedProps !== o && Yn(t);
          else {
            if (!o) {
              if (t.stateNode === null) throw Error(a(166));
              return Fe(t), null;
            }
            e = he.current, Mr(t) ? Bh(t) : (e = dg(c, o, l), t.stateNode = e, Yn(t));
          }
          return Fe(t), null;
        case 5:
          if (bt(t), c = t.type, e !== null && t.stateNode != null) e.memoizedProps !== o && Yn(t);
          else {
            if (!o) {
              if (t.stateNode === null) throw Error(a(166));
              return Fe(t), null;
            }
            if (f = he.current, Mr(t)) Bh(t);
            else {
              var v = jo(Ee.current);
              switch (f) {
                case 1:
                  f = v.createElementNS("http://www.w3.org/2000/svg", c);
                  break;
                case 2:
                  f = v.createElementNS("http://www.w3.org/1998/Math/MathML", c);
                  break;
                default:
                  switch (c) {
                    case "svg":
                      f = v.createElementNS("http://www.w3.org/2000/svg", c);
                      break;
                    case "math":
                      f = v.createElementNS("http://www.w3.org/1998/Math/MathML", c);
                      break;
                    case "script":
                      f = v.createElement("div"), f.innerHTML = "<script><\/script>", f = f.removeChild(f.firstChild);
                      break;
                    case "select":
                      f = typeof o.is == "string" ? v.createElement("select", {
                        is: o.is
                      }) : v.createElement("select"), o.multiple ? f.multiple = true : o.size && (f.size = o.size);
                      break;
                    default:
                      f = typeof o.is == "string" ? v.createElement(c, {
                        is: o.is
                      }) : v.createElement(c);
                  }
              }
              f[dt] = t, f[_t] = o;
              e: for (v = t.child; v !== null; ) {
                if (v.tag === 5 || v.tag === 6) f.appendChild(v.stateNode);
                else if (v.tag !== 4 && v.tag !== 27 && v.child !== null) {
                  v.child.return = v, v = v.child;
                  continue;
                }
                if (v === t) break e;
                for (; v.sibling === null; ) {
                  if (v.return === null || v.return === t) break e;
                  v = v.return;
                }
                v.sibling.return = v.return, v = v.sibling;
              }
              t.stateNode = f;
              e: switch (gt(f, c, o), c) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = true;
                  break e;
                default:
                  o = false;
              }
              o && Yn(t);
            }
          }
          return Fe(t), ds(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l), null;
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== o && Yn(t);
          else {
            if (typeof o != "string" && t.stateNode === null) throw Error(a(166));
            if (e = Ee.current, Mr(t)) {
              if (e = t.stateNode, l = t.memoizedProps, o = null, c = ht, c !== null) switch (c.tag) {
                case 27:
                case 5:
                  o = c.memoizedProps;
              }
              e[dt] = t, e = !!(e.nodeValue === l || o !== null && o.suppressHydrationWarning === true || tg(e.nodeValue, l)), e || ol(t, true);
            } else e = jo(e).createTextNode(o), e[dt] = t, t.stateNode = e;
          }
          return Fe(t), null;
        case 31:
          if (l = t.memoizedState, e === null || e.memoizedState !== null) {
            if (o = Mr(t), l !== null) {
              if (e === null) {
                if (!o) throw Error(a(318));
                if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(a(557));
                e[dt] = t;
              } else Yl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
              Fe(t), e = false;
            } else l = wc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = true;
            if (!e) return t.flags & 256 ? (Vt(t), t) : (Vt(t), null);
            if ((t.flags & 128) !== 0) throw Error(a(558));
          }
          return Fe(t), null;
        case 13:
          if (o = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (c = Mr(t), o !== null && o.dehydrated !== null) {
              if (e === null) {
                if (!c) throw Error(a(318));
                if (c = t.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(a(317));
                c[dt] = t;
              } else Yl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
              Fe(t), c = false;
            } else c = wc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c), c = true;
            if (!c) return t.flags & 256 ? (Vt(t), t) : (Vt(t), null);
          }
          return Vt(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = o !== null, e = e !== null && e.memoizedState !== null, l && (o = t.child, c = null, o.alternate !== null && o.alternate.memoizedState !== null && o.alternate.memoizedState.cachePool !== null && (c = o.alternate.memoizedState.cachePool.pool), f = null, o.memoizedState !== null && o.memoizedState.cachePool !== null && (f = o.memoizedState.cachePool.pool), f !== c && (o.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), xo(t, t.updateQueue), Fe(t), null);
        case 4:
          return et(), e === null && Ds(t.stateNode.containerInfo), Fe(t), null;
        case 10:
          return Hn(t.type), Fe(t), null;
        case 19:
          if (ye(We), o = t.memoizedState, o === null) return Fe(t), null;
          if (c = (t.flags & 128) !== 0, f = o.rendering, f === null) if (c) Vi(o, false);
          else {
            if (Je !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
              if (f = ao(e), f !== null) {
                for (t.flags |= 128, Vi(o, false), e = f.updateQueue, t.updateQueue = e, xo(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; ) zh(l, e), l = l.sibling;
                return E(We, We.current & 1 | 2), Oe && Un(t, o.treeForkCount), t.child;
              }
              e = e.sibling;
            }
            o.tail !== null && xt() > Ao && (t.flags |= 128, c = true, Vi(o, false), t.lanes = 4194304);
          }
          else {
            if (!c) if (e = ao(f), e !== null) {
              if (t.flags |= 128, c = true, e = e.updateQueue, t.updateQueue = e, xo(t, e), Vi(o, true), o.tail === null && o.tailMode === "hidden" && !f.alternate && !Oe) return Fe(t), null;
            } else 2 * xt() - o.renderingStartTime > Ao && l !== 536870912 && (t.flags |= 128, c = true, Vi(o, false), t.lanes = 4194304);
            o.isBackwards ? (f.sibling = t.child, t.child = f) : (e = o.last, e !== null ? e.sibling = f : t.child = f, o.last = f);
          }
          return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = xt(), e.sibling = null, l = We.current, E(We, c ? l & 1 | 2 : l & 1), Oe && Un(t, o.treeForkCount), e) : (Fe(t), null);
        case 22:
        case 23:
          return Vt(t), jc(), o = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== o && (t.flags |= 8192) : o && (t.flags |= 8192), o ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Fe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Fe(t), l = t.updateQueue, l !== null && xo(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), o = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (o = t.memoizedState.cachePool.pool), o !== l && (t.flags |= 2048), e !== null && ye(Ql), null;
        case 24:
          return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Hn(tt), Fe(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(a(156, t.tag));
    }
    function B1(e, t) {
      switch (xc(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
          return Hn(tt), et(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return bt(t), null;
        case 31:
          if (t.memoizedState !== null) {
            if (Vt(t), t.alternate === null) throw Error(a(340));
            Yl();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 13:
          if (Vt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null) throw Error(a(340));
            Yl();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
          return ye(We), null;
        case 4:
          return et(), null;
        case 10:
          return Hn(t.type), null;
        case 22:
        case 23:
          return Vt(t), jc(), e !== null && ye(Ql), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 24:
          return Hn(tt), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function ap(e, t) {
      switch (xc(t), t.tag) {
        case 3:
          Hn(tt), et();
          break;
        case 26:
        case 27:
        case 5:
          bt(t);
          break;
        case 4:
          et();
          break;
        case 31:
          t.memoizedState !== null && Vt(t);
          break;
        case 13:
          Vt(t);
          break;
        case 19:
          ye(We);
          break;
        case 10:
          Hn(t.type);
          break;
        case 22:
        case 23:
          Vt(t), jc(), e !== null && ye(Ql);
          break;
        case 24:
          Hn(tt);
      }
    }
    function Gi(e, t) {
      try {
        var l = t.updateQueue, o = l !== null ? l.lastEffect : null;
        if (o !== null) {
          var c = o.next;
          l = c;
          do {
            if ((l.tag & e) === e) {
              o = void 0;
              var f = l.create, v = l.inst;
              o = f(), v.destroy = o;
            }
            l = l.next;
          } while (l !== c);
        }
      } catch (S) {
        Ue(t, t.return, S);
      }
    }
    function ml(e, t, l) {
      try {
        var o = t.updateQueue, c = o !== null ? o.lastEffect : null;
        if (c !== null) {
          var f = c.next;
          o = f;
          do {
            if ((o.tag & e) === e) {
              var v = o.inst, S = v.destroy;
              if (S !== void 0) {
                v.destroy = void 0, c = t;
                var M = l, U = S;
                try {
                  U();
                } catch (Y) {
                  Ue(c, M, Y);
                }
              }
            }
            o = o.next;
          } while (o !== f);
        }
      } catch (Y) {
        Ue(t, t.return, Y);
      }
    }
    function op(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var l = e.stateNode;
        try {
          Jh(t, l);
        } catch (o) {
          Ue(e, e.return, o);
        }
      }
    }
    function up(e, t, l) {
      l.props = Jl(e.type, e.memoizedProps), l.state = e.memoizedState;
      try {
        l.componentWillUnmount();
      } catch (o) {
        Ue(e, t, o);
      }
    }
    function Yi(e, t) {
      try {
        var l = e.ref;
        if (l !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var o = e.stateNode;
              break;
            case 30:
              o = e.stateNode;
              break;
            default:
              o = e.stateNode;
          }
          typeof l == "function" ? e.refCleanup = l(o) : l.current = o;
        }
      } catch (c) {
        Ue(e, t, c);
      }
    }
    function xn(e, t) {
      var l = e.ref, o = e.refCleanup;
      if (l !== null) if (typeof o == "function") try {
        o();
      } catch (c) {
        Ue(e, t, c);
      } finally {
        e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
      }
      else if (typeof l == "function") try {
        l(null);
      } catch (c) {
        Ue(e, t, c);
      }
      else l.current = null;
    }
    function cp(e) {
      var t = e.type, l = e.memoizedProps, o = e.stateNode;
      try {
        e: switch (t) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            l.autoFocus && o.focus();
            break e;
          case "img":
            l.src ? o.src = l.src : l.srcSet && (o.srcset = l.srcSet);
        }
      } catch (c) {
        Ue(e, e.return, c);
      }
    }
    function hs(e, t, l) {
      try {
        var o = e.stateNode;
        aS(o, e.type, l, t), o[_t] = t;
      } catch (c) {
        Ue(e, e.return, c);
      }
    }
    function sp(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Sl(e.type) || e.tag === 4;
    }
    function ms(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || sp(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && Sl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function ps(e, t, l) {
      var o = e.tag;
      if (o === 5 || o === 6) e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = Dn));
      else if (o !== 4 && (o === 27 && Sl(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null)) for (ps(e, t, l), e = e.sibling; e !== null; ) ps(e, t, l), e = e.sibling;
    }
    function So(e, t, l) {
      var o = e.tag;
      if (o === 5 || o === 6) e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
      else if (o !== 4 && (o === 27 && Sl(e.type) && (l = e.stateNode), e = e.child, e !== null)) for (So(e, t, l), e = e.sibling; e !== null; ) So(e, t, l), e = e.sibling;
    }
    function fp(e) {
      var t = e.stateNode, l = e.memoizedProps;
      try {
        for (var o = e.type, c = t.attributes; c.length; ) t.removeAttributeNode(c[0]);
        gt(t, o, l), t[dt] = e, t[_t] = l;
      } catch (f) {
        Ue(e, e.return, f);
      }
    }
    var Xn = false, rt = false, gs = false, dp = typeof WeakSet == "function" ? WeakSet : Set, st = null;
    function H1(e, t) {
      if (e = e.containerInfo, Us = Go, e = Ch(e), cc(e)) {
        if ("selectionStart" in e) var l = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
        else e: {
          l = (l = e.ownerDocument) && l.defaultView || window;
          var o = l.getSelection && l.getSelection();
          if (o && o.rangeCount !== 0) {
            l = o.anchorNode;
            var c = o.anchorOffset, f = o.focusNode;
            o = o.focusOffset;
            try {
              l.nodeType, f.nodeType;
            } catch {
              l = null;
              break e;
            }
            var v = 0, S = -1, M = -1, U = 0, Y = 0, K = e, B = null;
            t: for (; ; ) {
              for (var q; K !== l || c !== 0 && K.nodeType !== 3 || (S = v + c), K !== f || o !== 0 && K.nodeType !== 3 || (M = v + o), K.nodeType === 3 && (v += K.nodeValue.length), (q = K.firstChild) !== null; ) B = K, K = q;
              for (; ; ) {
                if (K === e) break t;
                if (B === l && ++U === c && (S = v), B === f && ++Y === o && (M = v), (q = K.nextSibling) !== null) break;
                K = B, B = K.parentNode;
              }
              K = q;
            }
            l = S === -1 || M === -1 ? null : {
              start: S,
              end: M
            };
          } else l = null;
        }
        l = l || {
          start: 0,
          end: 0
        };
      } else l = null;
      for (Bs = {
        focusedElem: e,
        selectionRange: l
      }, Go = false, st = t; st !== null; ) if (t = st, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, st = e;
      else for (; st !== null; ) {
        switch (t = st, f = t.alternate, e = t.flags, t.tag) {
          case 0:
            if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null)) for (l = 0; l < e.length; l++) c = e[l], c.ref.impl = c.nextImpl;
            break;
          case 11:
          case 15:
            break;
          case 1:
            if ((e & 1024) !== 0 && f !== null) {
              e = void 0, l = t, c = f.memoizedProps, f = f.memoizedState, o = l.stateNode;
              try {
                var ae = Jl(l.type, c);
                e = o.getSnapshotBeforeUpdate(ae, f), o.__reactInternalSnapshotBeforeUpdate = e;
              } catch (de) {
                Ue(l, l.return, de);
              }
            }
            break;
          case 3:
            if ((e & 1024) !== 0) {
              if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9) Vs(e);
              else if (l === 1) switch (e.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  Vs(e);
                  break;
                default:
                  e.textContent = "";
              }
            }
            break;
          case 5:
          case 26:
          case 27:
          case 6:
          case 4:
          case 17:
            break;
          default:
            if ((e & 1024) !== 0) throw Error(a(163));
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, st = e;
          break;
        }
        st = t.return;
      }
    }
    function hp(e, t, l) {
      var o = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Qn(e, l), o & 4 && Gi(5, l);
          break;
        case 1:
          if (Qn(e, l), o & 4) if (e = l.stateNode, t === null) try {
            e.componentDidMount();
          } catch (v) {
            Ue(l, l.return, v);
          }
          else {
            var c = Jl(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(c, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (v) {
              Ue(l, l.return, v);
            }
          }
          o & 64 && op(l), o & 512 && Yi(l, l.return);
          break;
        case 3:
          if (Qn(e, l), o & 64 && (e = l.updateQueue, e !== null)) {
            if (t = null, l.child !== null) switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
            try {
              Jh(e, t);
            } catch (v) {
              Ue(l, l.return, v);
            }
          }
          break;
        case 27:
          t === null && o & 4 && fp(l);
        case 26:
        case 5:
          Qn(e, l), t === null && o & 4 && cp(l), o & 512 && Yi(l, l.return);
          break;
        case 12:
          Qn(e, l);
          break;
        case 31:
          Qn(e, l), o & 4 && gp(e, l);
          break;
        case 13:
          Qn(e, l), o & 4 && yp(e, l), o & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = K1.bind(null, l), mS(e, l))));
          break;
        case 22:
          if (o = l.memoizedState !== null || Xn, !o) {
            t = t !== null && t.memoizedState !== null || rt, c = Xn;
            var f = rt;
            Xn = o, (rt = t) && !f ? Fn(e, l, (l.subtreeFlags & 8772) !== 0) : Qn(e, l), Xn = c, rt = f;
          }
          break;
        case 30:
          break;
        default:
          Qn(e, l);
      }
    }
    function mp(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, mp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Qu(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    var Ke = null, Mt = false;
    function In(e, t, l) {
      for (l = l.child; l !== null; ) pp(e, t, l), l = l.sibling;
    }
    function pp(e, t, l) {
      if (at && typeof at.onCommitFiberUnmount == "function") try {
        at.onCommitFiberUnmount(St, l);
      } catch {
      }
      switch (l.tag) {
        case 26:
          rt || xn(l, t), In(e, t, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
          break;
        case 27:
          rt || xn(l, t);
          var o = Ke, c = Mt;
          Sl(l.type) && (Ke = l.stateNode, Mt = false), In(e, t, l), Wi(l.stateNode), Ke = o, Mt = c;
          break;
        case 5:
          rt || xn(l, t);
        case 6:
          if (o = Ke, c = Mt, Ke = null, In(e, t, l), Ke = o, Mt = c, Ke !== null) if (Mt) try {
            (Ke.nodeType === 9 ? Ke.body : Ke.nodeName === "HTML" ? Ke.ownerDocument.body : Ke).removeChild(l.stateNode);
          } catch (f) {
            Ue(l, t, f);
          }
          else try {
            Ke.removeChild(l.stateNode);
          } catch (f) {
            Ue(l, t, f);
          }
          break;
        case 18:
          Ke !== null && (Mt ? (e = Ke, og(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.stateNode), Zr(e)) : og(Ke, l.stateNode));
          break;
        case 4:
          o = Ke, c = Mt, Ke = l.stateNode.containerInfo, Mt = true, In(e, t, l), Ke = o, Mt = c;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          ml(2, l, t), rt || ml(4, l, t), In(e, t, l);
          break;
        case 1:
          rt || (xn(l, t), o = l.stateNode, typeof o.componentWillUnmount == "function" && up(l, t, o)), In(e, t, l);
          break;
        case 21:
          In(e, t, l);
          break;
        case 22:
          rt = (o = rt) || l.memoizedState !== null, In(e, t, l), rt = o;
          break;
        default:
          In(e, t, l);
      }
    }
    function gp(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
        e = e.dehydrated;
        try {
          Zr(e);
        } catch (l) {
          Ue(t, t.return, l);
        }
      }
    }
    function yp(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
        Zr(e);
      } catch (l) {
        Ue(t, t.return, l);
      }
    }
    function q1(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new dp()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new dp()), t;
        default:
          throw Error(a(435, e.tag));
      }
    }
    function wo(e, t) {
      var l = q1(e);
      t.forEach(function(o) {
        if (!l.has(o)) {
          l.add(o);
          var c = Z1.bind(null, e, o);
          o.then(c, c);
        }
      });
    }
    function Ot(e, t) {
      var l = t.deletions;
      if (l !== null) for (var o = 0; o < l.length; o++) {
        var c = l[o], f = e, v = t, S = v;
        e: for (; S !== null; ) {
          switch (S.tag) {
            case 27:
              if (Sl(S.type)) {
                Ke = S.stateNode, Mt = false;
                break e;
              }
              break;
            case 5:
              Ke = S.stateNode, Mt = false;
              break e;
            case 3:
            case 4:
              Ke = S.stateNode.containerInfo, Mt = true;
              break e;
          }
          S = S.return;
        }
        if (Ke === null) throw Error(a(160));
        pp(f, v, c), Ke = null, Mt = false, f = c.alternate, f !== null && (f.return = null), c.return = null;
      }
      if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) vp(t, e), t = t.sibling;
    }
    var mn = null;
    function vp(e, t) {
      var l = e.alternate, o = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ot(t, e), kt(e), o & 4 && (ml(3, e, e.return), Gi(3, e), ml(5, e, e.return));
          break;
        case 1:
          Ot(t, e), kt(e), o & 512 && (rt || l === null || xn(l, l.return)), o & 64 && Xn && (e = e.updateQueue, e !== null && (o = e.callbacks, o !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? o : l.concat(o))));
          break;
        case 26:
          var c = mn;
          if (Ot(t, e), kt(e), o & 512 && (rt || l === null || xn(l, l.return)), o & 4) {
            var f = l !== null ? l.memoizedState : null;
            if (o = e.memoizedState, l === null) if (o === null) if (e.stateNode === null) {
              e: {
                o = e.type, l = e.memoizedProps, c = c.ownerDocument || c;
                t: switch (o) {
                  case "title":
                    f = c.getElementsByTagName("title")[0], (!f || f[gi] || f[dt] || f.namespaceURI === "http://www.w3.org/2000/svg" || f.hasAttribute("itemprop")) && (f = c.createElement(o), c.head.insertBefore(f, c.querySelector("head > title"))), gt(f, o, l), f[dt] = e, ct(f), o = f;
                    break e;
                  case "link":
                    var v = vg("link", "href", c).get(o + (l.href || ""));
                    if (v) {
                      for (var S = 0; S < v.length; S++) if (f = v[S], f.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && f.getAttribute("rel") === (l.rel == null ? null : l.rel) && f.getAttribute("title") === (l.title == null ? null : l.title) && f.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                        v.splice(S, 1);
                        break t;
                      }
                    }
                    f = c.createElement(o), gt(f, o, l), c.head.appendChild(f);
                    break;
                  case "meta":
                    if (v = vg("meta", "content", c).get(o + (l.content || ""))) {
                      for (S = 0; S < v.length; S++) if (f = v[S], f.getAttribute("content") === (l.content == null ? null : "" + l.content) && f.getAttribute("name") === (l.name == null ? null : l.name) && f.getAttribute("property") === (l.property == null ? null : l.property) && f.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && f.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                        v.splice(S, 1);
                        break t;
                      }
                    }
                    f = c.createElement(o), gt(f, o, l), c.head.appendChild(f);
                    break;
                  default:
                    throw Error(a(468, o));
                }
                f[dt] = e, ct(f), o = f;
              }
              e.stateNode = o;
            } else bg(c, e.type, e.stateNode);
            else e.stateNode = yg(c, o, e.memoizedProps);
            else f !== o ? (f === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : f.count--, o === null ? bg(c, e.type, e.stateNode) : yg(c, o, e.memoizedProps)) : o === null && e.stateNode !== null && hs(e, e.memoizedProps, l.memoizedProps);
          }
          break;
        case 27:
          Ot(t, e), kt(e), o & 512 && (rt || l === null || xn(l, l.return)), l !== null && o & 4 && hs(e, e.memoizedProps, l.memoizedProps);
          break;
        case 5:
          if (Ot(t, e), kt(e), o & 512 && (rt || l === null || xn(l, l.return)), e.flags & 32) {
            c = e.stateNode;
            try {
              vr(c, "");
            } catch (ae) {
              Ue(e, e.return, ae);
            }
          }
          o & 4 && e.stateNode != null && (c = e.memoizedProps, hs(e, c, l !== null ? l.memoizedProps : c)), o & 1024 && (gs = true);
          break;
        case 6:
          if (Ot(t, e), kt(e), o & 4) {
            if (e.stateNode === null) throw Error(a(162));
            o = e.memoizedProps, l = e.stateNode;
            try {
              l.nodeValue = o;
            } catch (ae) {
              Ue(e, e.return, ae);
            }
          }
          break;
        case 3:
          if (Bo = null, c = mn, mn = Lo(t.containerInfo), Ot(t, e), mn = c, kt(e), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
            Zr(t.containerInfo);
          } catch (ae) {
            Ue(e, e.return, ae);
          }
          gs && (gs = false, bp(e));
          break;
        case 4:
          o = mn, mn = Lo(e.stateNode.containerInfo), Ot(t, e), kt(e), mn = o;
          break;
        case 12:
          Ot(t, e), kt(e);
          break;
        case 31:
          Ot(t, e), kt(e), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, wo(e, o)));
          break;
        case 13:
          Ot(t, e), kt(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Co = xt()), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, wo(e, o)));
          break;
        case 22:
          c = e.memoizedState !== null;
          var M = l !== null && l.memoizedState !== null, U = Xn, Y = rt;
          if (Xn = U || c, rt = Y || M, Ot(t, e), rt = Y, Xn = U, kt(e), o & 8192) e: for (t = e.stateNode, t._visibility = c ? t._visibility & -2 : t._visibility | 1, c && (l === null || M || Xn || rt || Wl(e)), l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                M = l = t;
                try {
                  if (f = M.stateNode, c) v = f.style, typeof v.setProperty == "function" ? v.setProperty("display", "none", "important") : v.display = "none";
                  else {
                    S = M.stateNode;
                    var K = M.memoizedProps.style, B = K != null && K.hasOwnProperty("display") ? K.display : null;
                    S.style.display = B == null || typeof B == "boolean" ? "" : ("" + B).trim();
                  }
                } catch (ae) {
                  Ue(M, M.return, ae);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                M = t;
                try {
                  M.stateNode.nodeValue = c ? "" : M.memoizedProps;
                } catch (ae) {
                  Ue(M, M.return, ae);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                M = t;
                try {
                  var q = M.stateNode;
                  c ? ug(q, true) : ug(M.stateNode, false);
                } catch (ae) {
                  Ue(M, M.return, ae);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              l === t && (l = null), t = t.return;
            }
            l === t && (l = null), t.sibling.return = t.return, t = t.sibling;
          }
          o & 4 && (o = e.updateQueue, o !== null && (l = o.retryQueue, l !== null && (o.retryQueue = null, wo(e, l))));
          break;
        case 19:
          Ot(t, e), kt(e), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, wo(e, o)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          Ot(t, e), kt(e);
      }
    }
    function kt(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          for (var l, o = e.return; o !== null; ) {
            if (sp(o)) {
              l = o;
              break;
            }
            o = o.return;
          }
          if (l == null) throw Error(a(160));
          switch (l.tag) {
            case 27:
              var c = l.stateNode, f = ms(e);
              So(e, f, c);
              break;
            case 5:
              var v = l.stateNode;
              l.flags & 32 && (vr(v, ""), l.flags &= -33);
              var S = ms(e);
              So(e, S, v);
              break;
            case 3:
            case 4:
              var M = l.stateNode.containerInfo, U = ms(e);
              ps(e, U, M);
              break;
            default:
              throw Error(a(161));
          }
        } catch (Y) {
          Ue(e, e.return, Y);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function bp(e) {
      if (e.subtreeFlags & 1024) for (e = e.child; e !== null; ) {
        var t = e;
        bp(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
    }
    function Qn(e, t) {
      if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) hp(e, t.alternate, t), t = t.sibling;
    }
    function Wl(e) {
      for (e = e.child; e !== null; ) {
        var t = e;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            ml(4, t, t.return), Wl(t);
            break;
          case 1:
            xn(t, t.return);
            var l = t.stateNode;
            typeof l.componentWillUnmount == "function" && up(t, t.return, l), Wl(t);
            break;
          case 27:
            Wi(t.stateNode);
          case 26:
          case 5:
            xn(t, t.return), Wl(t);
            break;
          case 22:
            t.memoizedState === null && Wl(t);
            break;
          case 30:
            Wl(t);
            break;
          default:
            Wl(t);
        }
        e = e.sibling;
      }
    }
    function Fn(e, t, l) {
      for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
        var o = t.alternate, c = e, f = t, v = f.flags;
        switch (f.tag) {
          case 0:
          case 11:
          case 15:
            Fn(c, f, l), Gi(4, f);
            break;
          case 1:
            if (Fn(c, f, l), o = f, c = o.stateNode, typeof c.componentDidMount == "function") try {
              c.componentDidMount();
            } catch (U) {
              Ue(o, o.return, U);
            }
            if (o = f, c = o.updateQueue, c !== null) {
              var S = o.stateNode;
              try {
                var M = c.shared.hiddenCallbacks;
                if (M !== null) for (c.shared.hiddenCallbacks = null, c = 0; c < M.length; c++) Ph(M[c], S);
              } catch (U) {
                Ue(o, o.return, U);
              }
            }
            l && v & 64 && op(f), Yi(f, f.return);
            break;
          case 27:
            fp(f);
          case 26:
          case 5:
            Fn(c, f, l), l && o === null && v & 4 && cp(f), Yi(f, f.return);
            break;
          case 12:
            Fn(c, f, l);
            break;
          case 31:
            Fn(c, f, l), l && v & 4 && gp(c, f);
            break;
          case 13:
            Fn(c, f, l), l && v & 4 && yp(c, f);
            break;
          case 22:
            f.memoizedState === null && Fn(c, f, l), Yi(f, f.return);
            break;
          case 30:
            break;
          default:
            Fn(c, f, l);
        }
        t = t.sibling;
      }
    }
    function ys(e, t) {
      var l = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && Oi(l));
    }
    function vs(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Oi(e));
    }
    function pn(e, t, l, o) {
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) xp(e, t, l, o), t = t.sibling;
    }
    function xp(e, t, l, o) {
      var c = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          pn(e, t, l, o), c & 2048 && Gi(9, t);
          break;
        case 1:
          pn(e, t, l, o);
          break;
        case 3:
          pn(e, t, l, o), c & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Oi(e)));
          break;
        case 12:
          if (c & 2048) {
            pn(e, t, l, o), e = t.stateNode;
            try {
              var f = t.memoizedProps, v = f.id, S = f.onPostCommit;
              typeof S == "function" && S(v, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
            } catch (M) {
              Ue(t, t.return, M);
            }
          } else pn(e, t, l, o);
          break;
        case 31:
          pn(e, t, l, o);
          break;
        case 13:
          pn(e, t, l, o);
          break;
        case 23:
          break;
        case 22:
          f = t.stateNode, v = t.alternate, t.memoizedState !== null ? f._visibility & 2 ? pn(e, t, l, o) : Xi(e, t) : f._visibility & 2 ? pn(e, t, l, o) : (f._visibility |= 2, Br(e, t, l, o, (t.subtreeFlags & 10256) !== 0 || false)), c & 2048 && ys(v, t);
          break;
        case 24:
          pn(e, t, l, o), c & 2048 && vs(t.alternate, t);
          break;
        default:
          pn(e, t, l, o);
      }
    }
    function Br(e, t, l, o, c) {
      for (c = c && ((t.subtreeFlags & 10256) !== 0 || false), t = t.child; t !== null; ) {
        var f = e, v = t, S = l, M = o, U = v.flags;
        switch (v.tag) {
          case 0:
          case 11:
          case 15:
            Br(f, v, S, M, c), Gi(8, v);
            break;
          case 23:
            break;
          case 22:
            var Y = v.stateNode;
            v.memoizedState !== null ? Y._visibility & 2 ? Br(f, v, S, M, c) : Xi(f, v) : (Y._visibility |= 2, Br(f, v, S, M, c)), c && U & 2048 && ys(v.alternate, v);
            break;
          case 24:
            Br(f, v, S, M, c), c && U & 2048 && vs(v.alternate, v);
            break;
          default:
            Br(f, v, S, M, c);
        }
        t = t.sibling;
      }
    }
    function Xi(e, t) {
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) {
        var l = e, o = t, c = o.flags;
        switch (o.tag) {
          case 22:
            Xi(l, o), c & 2048 && ys(o.alternate, o);
            break;
          case 24:
            Xi(l, o), c & 2048 && vs(o.alternate, o);
            break;
          default:
            Xi(l, o);
        }
        t = t.sibling;
      }
    }
    var Ii = 8192;
    function Hr(e, t, l) {
      if (e.subtreeFlags & Ii) for (e = e.child; e !== null; ) Sp(e, t, l), e = e.sibling;
    }
    function Sp(e, t, l) {
      switch (e.tag) {
        case 26:
          Hr(e, t, l), e.flags & Ii && e.memoizedState !== null && _S(l, mn, e.memoizedState, e.memoizedProps);
          break;
        case 5:
          Hr(e, t, l);
          break;
        case 3:
        case 4:
          var o = mn;
          mn = Lo(e.stateNode.containerInfo), Hr(e, t, l), mn = o;
          break;
        case 22:
          e.memoizedState === null && (o = e.alternate, o !== null && o.memoizedState !== null ? (o = Ii, Ii = 16777216, Hr(e, t, l), Ii = o) : Hr(e, t, l));
          break;
        default:
          Hr(e, t, l);
      }
    }
    function wp(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function Qi(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null) for (var l = 0; l < t.length; l++) {
          var o = t[l];
          st = o, Cp(o, e);
        }
        wp(e);
      }
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) Ep(e), e = e.sibling;
    }
    function Ep(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Qi(e), e.flags & 2048 && ml(9, e, e.return);
          break;
        case 3:
          Qi(e);
          break;
        case 12:
          Qi(e);
          break;
        case 22:
          var t = e.stateNode;
          e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Eo(e)) : Qi(e);
          break;
        default:
          Qi(e);
      }
    }
    function Eo(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null) for (var l = 0; l < t.length; l++) {
          var o = t[l];
          st = o, Cp(o, e);
        }
        wp(e);
      }
      for (e = e.child; e !== null; ) {
        switch (t = e, t.tag) {
          case 0:
          case 11:
          case 15:
            ml(8, t, t.return), Eo(t);
            break;
          case 22:
            l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, Eo(t));
            break;
          default:
            Eo(t);
        }
        e = e.sibling;
      }
    }
    function Cp(e, t) {
      for (; st !== null; ) {
        var l = st;
        switch (l.tag) {
          case 0:
          case 11:
          case 15:
            ml(8, l, t);
            break;
          case 23:
          case 22:
            if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
              var o = l.memoizedState.cachePool.pool;
              o != null && o.refCount++;
            }
            break;
          case 24:
            Oi(l.memoizedState.cache);
        }
        if (o = l.child, o !== null) o.return = l, st = o;
        else e: for (l = e; st !== null; ) {
          o = st;
          var c = o.sibling, f = o.return;
          if (mp(o), o === l) {
            st = null;
            break e;
          }
          if (c !== null) {
            c.return = f, st = c;
            break e;
          }
          st = f;
        }
      }
    }
    var V1 = {
      getCacheForType: function(e) {
        var t = mt(tt), l = t.data.get(e);
        return l === void 0 && (l = e(), t.data.set(e, l)), l;
      },
      cacheSignal: function() {
        return mt(tt).controller.signal;
      }
    }, G1 = typeof WeakMap == "function" ? WeakMap : Map, ze = 0, Ye = null, Ae = null, Te = 0, Le = 0, Gt = null, pl = false, qr = false, bs = false, Kn = 0, Je = 0, gl = 0, $l = 0, xs = 0, Yt = 0, Vr = 0, Fi = null, Rt = null, Ss = false, Co = 0, Ap = 0, Ao = 1 / 0, _o = null, yl = null, ot = 0, vl = null, Gr = null, Zn = 0, ws = 0, Es = null, _p = null, Ki = 0, Cs = null;
    function Xt() {
      return (ze & 2) !== 0 && Te !== 0 ? Te & -Te : N.T !== null ? ks() : Gd();
    }
    function Tp() {
      if (Yt === 0) if ((Te & 536870912) === 0 || Oe) {
        var e = za;
        za <<= 1, (za & 3932160) === 0 && (za = 262144), Yt = e;
      } else Yt = 536870912;
      return e = qt.current, e !== null && (e.flags |= 32), Yt;
    }
    function Nt(e, t, l) {
      (e === Ye && (Le === 2 || Le === 9) || e.cancelPendingCommit !== null) && (Yr(e, 0), bl(e, Te, Yt, false)), pi(e, l), ((ze & 2) === 0 || e !== Ye) && (e === Ye && ((ze & 2) === 0 && ($l |= l), Je === 4 && bl(e, Te, Yt, false)), Sn(e));
    }
    function Mp(e, t, l) {
      if ((ze & 6) !== 0) throw Error(a(327));
      var o = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || mi(e, t), c = o ? I1(e, t) : _s(e, t, true), f = o;
      do {
        if (c === 0) {
          qr && !o && bl(e, t, 0, false);
          break;
        } else {
          if (l = e.current.alternate, f && !Y1(l)) {
            c = _s(e, t, false), f = false;
            continue;
          }
          if (c === 2) {
            if (f = t, e.errorRecoveryDisabledLanes & f) var v = 0;
            else v = e.pendingLanes & -536870913, v = v !== 0 ? v : v & 536870912 ? 536870912 : 0;
            if (v !== 0) {
              t = v;
              e: {
                var S = e;
                c = Fi;
                var M = S.current.memoizedState.isDehydrated;
                if (M && (Yr(S, v).flags |= 256), v = _s(S, v, false), v !== 2) {
                  if (bs && !M) {
                    S.errorRecoveryDisabledLanes |= f, $l |= f, c = 4;
                    break e;
                  }
                  f = Rt, Rt = c, f !== null && (Rt === null ? Rt = f : Rt.push.apply(Rt, f));
                }
                c = v;
              }
              if (f = false, c !== 2) continue;
            }
          }
          if (c === 1) {
            Yr(e, 0), bl(e, t, 0, true);
            break;
          }
          e: {
            switch (o = e, f = c, f) {
              case 0:
              case 1:
                throw Error(a(345));
              case 4:
                if ((t & 4194048) !== t) break;
              case 6:
                bl(o, t, Yt, !pl);
                break e;
              case 2:
                Rt = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(a(329));
            }
            if ((t & 62914560) === t && (c = Co + 300 - xt(), 10 < c)) {
              if (bl(o, t, Yt, !pl), ja(o, 0, true) !== 0) break e;
              Zn = t, o.timeoutHandle = ig(Op.bind(null, o, l, Rt, _o, Ss, t, Yt, $l, Vr, pl, f, "Throttled", -0, 0), c);
              break e;
            }
            Op(o, l, Rt, _o, Ss, t, Yt, $l, Vr, pl, f, null, -0, 0);
          }
        }
        break;
      } while (true);
      Sn(e);
    }
    function Op(e, t, l, o, c, f, v, S, M, U, Y, K, B, q) {
      if (e.timeoutHandle = -1, K = t.subtreeFlags, K & 8192 || (K & 16785408) === 16785408) {
        K = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: true,
          waitingForViewTransition: false,
          unsuspend: Dn
        }, Sp(t, f, K);
        var ae = (f & 62914560) === f ? Co - xt() : (f & 4194048) === f ? Ap - xt() : 0;
        if (ae = TS(K, ae), ae !== null) {
          Zn = f, e.cancelPendingCommit = ae(Up.bind(null, e, t, f, l, o, c, v, S, M, Y, K, null, B, q)), bl(e, f, v, !U);
          return;
        }
      }
      Up(e, t, f, l, o, c, v, S, M);
    }
    function Y1(e) {
      for (var t = e; ; ) {
        var l = t.tag;
        if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null))) for (var o = 0; o < l.length; o++) {
          var c = l[o], f = c.getSnapshot;
          c = c.value;
          try {
            if (!Bt(f(), c)) return false;
          } catch {
            return false;
          }
        }
        if (l = t.child, t.subtreeFlags & 16384 && l !== null) l.return = t, t = l;
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return true;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return true;
    }
    function bl(e, t, l, o) {
      t &= ~xs, t &= ~$l, e.suspendedLanes |= t, e.pingedLanes &= ~t, o && (e.warmLanes |= t), o = e.expirationTimes;
      for (var c = t; 0 < c; ) {
        var f = 31 - Ge(c), v = 1 << f;
        o[f] = -1, c &= ~v;
      }
      l !== 0 && Hd(e, l, t);
    }
    function To() {
      return (ze & 6) === 0 ? (Zi(0), false) : true;
    }
    function As() {
      if (Ae !== null) {
        if (Le === 0) var e = Ae.return;
        else e = Ae, Bn = Xl = null, Vc(e), zr = null, Ri = 0, e = Ae;
        for (; e !== null; ) ap(e.alternate, e), e = e.return;
        Ae = null;
      }
    }
    function Yr(e, t) {
      var l = e.timeoutHandle;
      l !== -1 && (e.timeoutHandle = -1, cS(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), Zn = 0, As(), Ye = e, Ae = l = Ln(e.current, null), Te = t, Le = 0, Gt = null, pl = false, qr = mi(e, t), bs = false, Vr = Yt = xs = $l = gl = Je = 0, Rt = Fi = null, Ss = false, (t & 8) !== 0 && (t |= t & 32);
      var o = e.entangledLanes;
      if (o !== 0) for (e = e.entanglements, o &= t; 0 < o; ) {
        var c = 31 - Ge(o), f = 1 << c;
        t |= e[c], o &= ~f;
      }
      return Kn = t, Fa(), l;
    }
    function kp(e, t) {
      ve = null, N.H = Hi, t === Nr || t === to ? (t = Qh(), Le = 3) : t === Oc ? (t = Qh(), Le = 4) : Le = t === ls ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Gt = t, Ae === null && (Je = 1, go(e, en(t, e.current)));
    }
    function Rp() {
      var e = qt.current;
      return e === null ? true : (Te & 4194048) === Te ? rn === null : (Te & 62914560) === Te || (Te & 536870912) !== 0 ? e === rn : false;
    }
    function Np() {
      var e = N.H;
      return N.H = Hi, e === null ? Hi : e;
    }
    function zp() {
      var e = N.A;
      return N.A = V1, e;
    }
    function Mo() {
      Je = 4, pl || (Te & 4194048) !== Te && qt.current !== null || (qr = true), (gl & 134217727) === 0 && ($l & 134217727) === 0 || Ye === null || bl(Ye, Te, Yt, false);
    }
    function _s(e, t, l) {
      var o = ze;
      ze |= 2;
      var c = Np(), f = zp();
      (Ye !== e || Te !== t) && (_o = null, Yr(e, t)), t = false;
      var v = Je;
      e: do
        try {
          if (Le !== 0 && Ae !== null) {
            var S = Ae, M = Gt;
            switch (Le) {
              case 8:
                As(), v = 6;
                break e;
              case 3:
              case 2:
              case 9:
              case 6:
                qt.current === null && (t = true);
                var U = Le;
                if (Le = 0, Gt = null, Xr(e, S, M, U), l && qr) {
                  v = 0;
                  break e;
                }
                break;
              default:
                U = Le, Le = 0, Gt = null, Xr(e, S, M, U);
            }
          }
          X1(), v = Je;
          break;
        } catch (Y) {
          kp(e, Y);
        }
      while (true);
      return t && e.shellSuspendCounter++, Bn = Xl = null, ze = o, N.H = c, N.A = f, Ae === null && (Ye = null, Te = 0, Fa()), v;
    }
    function X1() {
      for (; Ae !== null; ) Dp(Ae);
    }
    function I1(e, t) {
      var l = ze;
      ze |= 2;
      var o = Np(), c = zp();
      Ye !== e || Te !== t ? (_o = null, Ao = xt() + 500, Yr(e, t)) : qr = mi(e, t);
      e: do
        try {
          if (Le !== 0 && Ae !== null) {
            t = Ae;
            var f = Gt;
            t: switch (Le) {
              case 1:
                Le = 0, Gt = null, Xr(e, t, f, 1);
                break;
              case 2:
              case 9:
                if (Xh(f)) {
                  Le = 0, Gt = null, jp(t);
                  break;
                }
                t = function() {
                  Le !== 2 && Le !== 9 || Ye !== e || (Le = 7), Sn(e);
                }, f.then(t, t);
                break e;
              case 3:
                Le = 7;
                break e;
              case 4:
                Le = 5;
                break e;
              case 7:
                Xh(f) ? (Le = 0, Gt = null, jp(t)) : (Le = 0, Gt = null, Xr(e, t, f, 7));
                break;
              case 5:
                var v = null;
                switch (Ae.tag) {
                  case 26:
                    v = Ae.memoizedState;
                  case 5:
                  case 27:
                    var S = Ae;
                    if (v ? xg(v) : S.stateNode.complete) {
                      Le = 0, Gt = null;
                      var M = S.sibling;
                      if (M !== null) Ae = M;
                      else {
                        var U = S.return;
                        U !== null ? (Ae = U, Oo(U)) : Ae = null;
                      }
                      break t;
                    }
                }
                Le = 0, Gt = null, Xr(e, t, f, 5);
                break;
              case 6:
                Le = 0, Gt = null, Xr(e, t, f, 6);
                break;
              case 8:
                As(), Je = 6;
                break e;
              default:
                throw Error(a(462));
            }
          }
          Q1();
          break;
        } catch (Y) {
          kp(e, Y);
        }
      while (true);
      return Bn = Xl = null, N.H = o, N.A = c, ze = l, Ae !== null ? 0 : (Ye = null, Te = 0, Fa(), Je);
    }
    function Q1() {
      for (; Ae !== null && !Hu(); ) Dp(Ae);
    }
    function Dp(e) {
      var t = rp(e.alternate, e, Kn);
      e.memoizedProps = e.pendingProps, t === null ? Oo(e) : Ae = t;
    }
    function jp(e) {
      var t = e, l = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = Wm(l, t, t.pendingProps, t.type, void 0, Te);
          break;
        case 11:
          t = Wm(l, t, t.pendingProps, t.type.render, t.ref, Te);
          break;
        case 5:
          Vc(t);
        default:
          ap(l, t), t = Ae = zh(t, Kn), t = rp(l, t, Kn);
      }
      e.memoizedProps = e.pendingProps, t === null ? Oo(e) : Ae = t;
    }
    function Xr(e, t, l, o) {
      Bn = Xl = null, Vc(t), zr = null, Ri = 0;
      var c = t.return;
      try {
        if (D1(e, c, t, l, Te)) {
          Je = 1, go(e, en(l, e.current)), Ae = null;
          return;
        }
      } catch (f) {
        if (c !== null) throw Ae = c, f;
        Je = 1, go(e, en(l, e.current)), Ae = null;
        return;
      }
      t.flags & 32768 ? (Oe || o === 1 ? e = true : qr || (Te & 536870912) !== 0 ? e = false : (pl = e = true, (o === 2 || o === 9 || o === 3 || o === 6) && (o = qt.current, o !== null && o.tag === 13 && (o.flags |= 16384))), Lp(t, e)) : Oo(t);
    }
    function Oo(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          Lp(t, pl);
          return;
        }
        e = t.return;
        var l = U1(t.alternate, t, Kn);
        if (l !== null) {
          Ae = l;
          return;
        }
        if (t = t.sibling, t !== null) {
          Ae = t;
          return;
        }
        Ae = t = e;
      } while (t !== null);
      Je === 0 && (Je = 5);
    }
    function Lp(e, t) {
      do {
        var l = B1(e.alternate, e);
        if (l !== null) {
          l.flags &= 32767, Ae = l;
          return;
        }
        if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
          Ae = e;
          return;
        }
        Ae = e = l;
      } while (e !== null);
      Je = 6, Ae = null;
    }
    function Up(e, t, l, o, c, f, v, S, M) {
      e.cancelPendingCommit = null;
      do
        ko();
      while (ot !== 0);
      if ((ze & 6) !== 0) throw Error(a(327));
      if (t !== null) {
        if (t === e.current) throw Error(a(177));
        if (f = t.lanes | t.childLanes, f |= mc, Ax(e, l, f, v, S, M), e === Ye && (Ae = Ye = null, Te = 0), Gr = t, vl = e, Zn = l, ws = f, Es = c, _p = o, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, P1(pe, function() {
          return Gp(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), o = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || o) {
          o = N.T, N.T = null, c = Q.p, Q.p = 2, v = ze, ze |= 4;
          try {
            H1(e, t, l);
          } finally {
            ze = v, Q.p = c, N.T = o;
          }
        }
        ot = 1, Bp(), Hp(), qp();
      }
    }
    function Bp() {
      if (ot === 1) {
        ot = 0;
        var e = vl, t = Gr, l = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || l) {
          l = N.T, N.T = null;
          var o = Q.p;
          Q.p = 2;
          var c = ze;
          ze |= 4;
          try {
            vp(t, e);
            var f = Bs, v = Ch(e.containerInfo), S = f.focusedElem, M = f.selectionRange;
            if (v !== S && S && S.ownerDocument && Eh(S.ownerDocument.documentElement, S)) {
              if (M !== null && cc(S)) {
                var U = M.start, Y = M.end;
                if (Y === void 0 && (Y = U), "selectionStart" in S) S.selectionStart = U, S.selectionEnd = Math.min(Y, S.value.length);
                else {
                  var K = S.ownerDocument || document, B = K && K.defaultView || window;
                  if (B.getSelection) {
                    var q = B.getSelection(), ae = S.textContent.length, de = Math.min(M.start, ae), Ve = M.end === void 0 ? de : Math.min(M.end, ae);
                    !q.extend && de > Ve && (v = Ve, Ve = de, de = v);
                    var z = wh(S, de), R = wh(S, Ve);
                    if (z && R && (q.rangeCount !== 1 || q.anchorNode !== z.node || q.anchorOffset !== z.offset || q.focusNode !== R.node || q.focusOffset !== R.offset)) {
                      var L = K.createRange();
                      L.setStart(z.node, z.offset), q.removeAllRanges(), de > Ve ? (q.addRange(L), q.extend(R.node, R.offset)) : (L.setEnd(R.node, R.offset), q.addRange(L));
                    }
                  }
                }
              }
              for (K = [], q = S; q = q.parentNode; ) q.nodeType === 1 && K.push({
                element: q,
                left: q.scrollLeft,
                top: q.scrollTop
              });
              for (typeof S.focus == "function" && S.focus(), S = 0; S < K.length; S++) {
                var F = K[S];
                F.element.scrollLeft = F.left, F.element.scrollTop = F.top;
              }
            }
            Go = !!Us, Bs = Us = null;
          } finally {
            ze = c, Q.p = o, N.T = l;
          }
        }
        e.current = t, ot = 2;
      }
    }
    function Hp() {
      if (ot === 2) {
        ot = 0;
        var e = vl, t = Gr, l = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || l) {
          l = N.T, N.T = null;
          var o = Q.p;
          Q.p = 2;
          var c = ze;
          ze |= 4;
          try {
            hp(e, t.alternate, t);
          } finally {
            ze = c, Q.p = o, N.T = l;
          }
        }
        ot = 3;
      }
    }
    function qp() {
      if (ot === 4 || ot === 3) {
        ot = 0, qu();
        var e = vl, t = Gr, l = Zn, o = _p;
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? ot = 5 : (ot = 0, Gr = vl = null, Vp(e, e.pendingLanes));
        var c = e.pendingLanes;
        if (c === 0 && (yl = null), Xu(l), t = t.stateNode, at && typeof at.onCommitFiberRoot == "function") try {
          at.onCommitFiberRoot(St, t, void 0, (t.current.flags & 128) === 128);
        } catch {
        }
        if (o !== null) {
          t = N.T, c = Q.p, Q.p = 2, N.T = null;
          try {
            for (var f = e.onRecoverableError, v = 0; v < o.length; v++) {
              var S = o[v];
              f(S.value, {
                componentStack: S.stack
              });
            }
          } finally {
            N.T = t, Q.p = c;
          }
        }
        (Zn & 3) !== 0 && ko(), Sn(e), c = e.pendingLanes, (l & 261930) !== 0 && (c & 42) !== 0 ? e === Cs ? Ki++ : (Ki = 0, Cs = e) : Ki = 0, Zi(0);
      }
    }
    function Vp(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Oi(t)));
    }
    function ko() {
      return Bp(), Hp(), qp(), Gp();
    }
    function Gp() {
      if (ot !== 5) return false;
      var e = vl, t = ws;
      ws = 0;
      var l = Xu(Zn), o = N.T, c = Q.p;
      try {
        Q.p = 32 > l ? 32 : l, N.T = null, l = Es, Es = null;
        var f = vl, v = Zn;
        if (ot = 0, Gr = vl = null, Zn = 0, (ze & 6) !== 0) throw Error(a(331));
        var S = ze;
        if (ze |= 4, Ep(f.current), xp(f, f.current, v, l), ze = S, Zi(0, false), at && typeof at.onPostCommitFiberRoot == "function") try {
          at.onPostCommitFiberRoot(St, f);
        } catch {
        }
        return true;
      } finally {
        Q.p = c, N.T = o, Vp(e, t);
      }
    }
    function Yp(e, t, l) {
      t = en(l, t), t = ns(e.stateNode, t, 2), e = fl(e, t, 2), e !== null && (pi(e, 2), Sn(e));
    }
    function Ue(e, t, l) {
      if (e.tag === 3) Yp(e, e, l);
      else for (; t !== null; ) {
        if (t.tag === 3) {
          Yp(t, e, l);
          break;
        } else if (t.tag === 1) {
          var o = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (yl === null || !yl.has(o))) {
            e = en(l, e), l = Xm(2), o = fl(t, l, 2), o !== null && (Im(l, o, t, e), pi(o, 2), Sn(o));
            break;
          }
        }
        t = t.return;
      }
    }
    function Ts(e, t, l) {
      var o = e.pingCache;
      if (o === null) {
        o = e.pingCache = new G1();
        var c = /* @__PURE__ */ new Set();
        o.set(t, c);
      } else c = o.get(t), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(t, c));
      c.has(l) || (bs = true, c.add(l), e = F1.bind(null, e, t, l), t.then(e, e));
    }
    function F1(e, t, l) {
      var o = e.pingCache;
      o !== null && o.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Ye === e && (Te & l) === l && (Je === 4 || Je === 3 && (Te & 62914560) === Te && 300 > xt() - Co ? (ze & 2) === 0 && Yr(e, 0) : xs |= l, Vr === Te && (Vr = 0)), Sn(e);
    }
    function Xp(e, t) {
      t === 0 && (t = Bd()), e = Vl(e, t), e !== null && (pi(e, t), Sn(e));
    }
    function K1(e) {
      var t = e.memoizedState, l = 0;
      t !== null && (l = t.retryLane), Xp(e, l);
    }
    function Z1(e, t) {
      var l = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var o = e.stateNode, c = e.memoizedState;
          c !== null && (l = c.retryLane);
          break;
        case 19:
          o = e.stateNode;
          break;
        case 22:
          o = e.stateNode._retryCache;
          break;
        default:
          throw Error(a(314));
      }
      o !== null && o.delete(t), Xp(e, l);
    }
    function P1(e, t) {
      return fr(e, t);
    }
    var Ro = null, Ir = null, Ms = false, No = false, Os = false, xl = 0;
    function Sn(e) {
      e !== Ir && e.next === null && (Ir === null ? Ro = Ir = e : Ir = Ir.next = e), No = true, Ms || (Ms = true, W1());
    }
    function Zi(e, t) {
      if (!Os && No) {
        Os = true;
        do
          for (var l = false, o = Ro; o !== null; ) {
            if (e !== 0) {
              var c = o.pendingLanes;
              if (c === 0) var f = 0;
              else {
                var v = o.suspendedLanes, S = o.pingedLanes;
                f = (1 << 31 - Ge(42 | e) + 1) - 1, f &= c & ~(v & ~S), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (l = true, Kp(o, f));
            } else f = Te, f = ja(o, o === Ye ? f : 0, o.cancelPendingCommit !== null || o.timeoutHandle !== -1), (f & 3) === 0 || mi(o, f) || (l = true, Kp(o, f));
            o = o.next;
          }
        while (l);
        Os = false;
      }
    }
    function J1() {
      Ip();
    }
    function Ip() {
      No = Ms = false;
      var e = 0;
      xl !== 0 && uS() && (e = xl);
      for (var t = xt(), l = null, o = Ro; o !== null; ) {
        var c = o.next, f = Qp(o, t);
        f === 0 ? (o.next = null, l === null ? Ro = c : l.next = c, c === null && (Ir = l)) : (l = o, (e !== 0 || (f & 3) !== 0) && (No = true)), o = c;
      }
      ot !== 0 && ot !== 5 || Zi(e), xl !== 0 && (xl = 0);
    }
    function Qp(e, t) {
      for (var l = e.suspendedLanes, o = e.pingedLanes, c = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
        var v = 31 - Ge(f), S = 1 << v, M = c[v];
        M === -1 ? ((S & l) === 0 || (S & o) !== 0) && (c[v] = Cx(S, t)) : M <= t && (e.expiredLanes |= S), f &= ~S;
      }
      if (t = Ye, l = Te, l = ja(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), o = e.callbackNode, l === 0 || e === t && (Le === 2 || Le === 9) || e.cancelPendingCommit !== null) return o !== null && o !== null && hi(o), e.callbackNode = null, e.callbackPriority = 0;
      if ((l & 3) === 0 || mi(e, l)) {
        if (t = l & -l, t === e.callbackPriority) return t;
        switch (o !== null && hi(o), Xu(l)) {
          case 2:
          case 8:
            l = le;
            break;
          case 32:
            l = pe;
            break;
          case 268435456:
            l = je;
            break;
          default:
            l = pe;
        }
        return o = Fp.bind(null, e), l = fr(l, o), e.callbackPriority = t, e.callbackNode = l, t;
      }
      return o !== null && o !== null && hi(o), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function Fp(e, t) {
      if (ot !== 0 && ot !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
      var l = e.callbackNode;
      if (ko() && e.callbackNode !== l) return null;
      var o = Te;
      return o = ja(e, e === Ye ? o : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), o === 0 ? null : (Mp(e, o, t), Qp(e, xt()), e.callbackNode != null && e.callbackNode === l ? Fp.bind(null, e) : null);
    }
    function Kp(e, t) {
      if (ko()) return null;
      Mp(e, t, true);
    }
    function W1() {
      sS(function() {
        (ze & 6) !== 0 ? fr(I, J1) : Ip();
      });
    }
    function ks() {
      if (xl === 0) {
        var e = kr;
        e === 0 && (e = Na, Na <<= 1, (Na & 261888) === 0 && (Na = 256)), xl = e;
      }
      return xl;
    }
    function Zp(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Ha("" + e);
    }
    function Pp(e, t) {
      var l = t.ownerDocument.createElement("input");
      return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
    }
    function $1(e, t, l, o, c) {
      if (t === "submit" && l && l.stateNode === c) {
        var f = Zp((c[_t] || null).action), v = o.submitter;
        v && (t = (t = v[_t] || null) ? Zp(t.formAction) : v.getAttribute("formAction"), t !== null && (f = t, v = null));
        var S = new Ya("action", "action", null, o, c);
        e.push({
          event: S,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (o.defaultPrevented) {
                  if (xl !== 0) {
                    var M = v ? Pp(c, v) : new FormData(c);
                    Pc(l, {
                      pending: true,
                      data: M,
                      method: c.method,
                      action: f
                    }, null, M);
                  }
                } else typeof f == "function" && (S.preventDefault(), M = v ? Pp(c, v) : new FormData(c), Pc(l, {
                  pending: true,
                  data: M,
                  method: c.method,
                  action: f
                }, f, M));
              },
              currentTarget: c
            }
          ]
        });
      }
    }
    for (var Rs = 0; Rs < hc.length; Rs++) {
      var Ns = hc[Rs], eS = Ns.toLowerCase(), tS = Ns[0].toUpperCase() + Ns.slice(1);
      hn(eS, "on" + tS);
    }
    hn(Th, "onAnimationEnd"), hn(Mh, "onAnimationIteration"), hn(Oh, "onAnimationStart"), hn("dblclick", "onDoubleClick"), hn("focusin", "onFocus"), hn("focusout", "onBlur"), hn(y1, "onTransitionRun"), hn(v1, "onTransitionStart"), hn(b1, "onTransitionCancel"), hn(kh, "onTransitionEnd"), gr("onMouseEnter", [
      "mouseout",
      "mouseover"
    ]), gr("onMouseLeave", [
      "mouseout",
      "mouseover"
    ]), gr("onPointerEnter", [
      "pointerout",
      "pointerover"
    ]), gr("onPointerLeave", [
      "pointerout",
      "pointerover"
    ]), Ul("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ul("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ul("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), Ul("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ul("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ul("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Pi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), nS = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Pi));
    function Jp(e, t) {
      t = (t & 4) !== 0;
      for (var l = 0; l < e.length; l++) {
        var o = e[l], c = o.event;
        o = o.listeners;
        e: {
          var f = void 0;
          if (t) for (var v = o.length - 1; 0 <= v; v--) {
            var S = o[v], M = S.instance, U = S.currentTarget;
            if (S = S.listener, M !== f && c.isPropagationStopped()) break e;
            f = S, c.currentTarget = U;
            try {
              f(c);
            } catch (Y) {
              Qa(Y);
            }
            c.currentTarget = null, f = M;
          }
          else for (v = 0; v < o.length; v++) {
            if (S = o[v], M = S.instance, U = S.currentTarget, S = S.listener, M !== f && c.isPropagationStopped()) break e;
            f = S, c.currentTarget = U;
            try {
              f(c);
            } catch (Y) {
              Qa(Y);
            }
            c.currentTarget = null, f = M;
          }
        }
      }
    }
    function _e(e, t) {
      var l = t[Iu];
      l === void 0 && (l = t[Iu] = /* @__PURE__ */ new Set());
      var o = e + "__bubble";
      l.has(o) || (Wp(t, e, 2, false), l.add(o));
    }
    function zs(e, t, l) {
      var o = 0;
      t && (o |= 4), Wp(l, e, o, t);
    }
    var zo = "_reactListening" + Math.random().toString(36).slice(2);
    function Ds(e) {
      if (!e[zo]) {
        e[zo] = true, Id.forEach(function(l) {
          l !== "selectionchange" && (nS.has(l) || zs(l, false, e), zs(l, true, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[zo] || (t[zo] = true, zs("selectionchange", false, t));
      }
    }
    function Wp(e, t, l, o) {
      switch (Tg(t)) {
        case 2:
          var c = kS;
          break;
        case 8:
          c = RS;
          break;
        default:
          c = Zs;
      }
      l = c.bind(null, t, l, e), c = void 0, !ec || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (c = true), o ? c !== void 0 ? e.addEventListener(t, l, {
        capture: true,
        passive: c
      }) : e.addEventListener(t, l, true) : c !== void 0 ? e.addEventListener(t, l, {
        passive: c
      }) : e.addEventListener(t, l, false);
    }
    function js(e, t, l, o, c) {
      var f = o;
      if ((t & 1) === 0 && (t & 2) === 0 && o !== null) e: for (; ; ) {
        if (o === null) return;
        var v = o.tag;
        if (v === 3 || v === 4) {
          var S = o.stateNode.containerInfo;
          if (S === c) break;
          if (v === 4) for (v = o.return; v !== null; ) {
            var M = v.tag;
            if ((M === 3 || M === 4) && v.stateNode.containerInfo === c) return;
            v = v.return;
          }
          for (; S !== null; ) {
            if (v = hr(S), v === null) return;
            if (M = v.tag, M === 5 || M === 6 || M === 26 || M === 27) {
              o = f = v;
              continue e;
            }
            S = S.parentNode;
          }
        }
        o = o.return;
      }
      lh(function() {
        var U = f, Y = Wu(l), K = [];
        e: {
          var B = Rh.get(e);
          if (B !== void 0) {
            var q = Ya, ae = e;
            switch (e) {
              case "keypress":
                if (Va(l) === 0) break e;
              case "keydown":
              case "keyup":
                q = Zx;
                break;
              case "focusin":
                ae = "focus", q = rc;
                break;
              case "focusout":
                ae = "blur", q = rc;
                break;
              case "beforeblur":
              case "afterblur":
                q = rc;
                break;
              case "click":
                if (l.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                q = ah;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                q = Ux;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                q = Wx;
                break;
              case Th:
              case Mh:
              case Oh:
                q = qx;
                break;
              case kh:
                q = e1;
                break;
              case "scroll":
              case "scrollend":
                q = jx;
                break;
              case "wheel":
                q = n1;
                break;
              case "copy":
              case "cut":
              case "paste":
                q = Gx;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                q = uh;
                break;
              case "toggle":
              case "beforetoggle":
                q = r1;
            }
            var de = (t & 4) !== 0, Ve = !de && (e === "scroll" || e === "scrollend"), z = de ? B !== null ? B + "Capture" : null : B;
            de = [];
            for (var R = U, L; R !== null; ) {
              var F = R;
              if (L = F.stateNode, F = F.tag, F !== 5 && F !== 26 && F !== 27 || L === null || z === null || (F = vi(R, z), F != null && de.push(Ji(R, F, L))), Ve) break;
              R = R.return;
            }
            0 < de.length && (B = new q(B, ae, null, l, Y), K.push({
              event: B,
              listeners: de
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (B = e === "mouseover" || e === "pointerover", q = e === "mouseout" || e === "pointerout", B && l !== Ju && (ae = l.relatedTarget || l.fromElement) && (hr(ae) || ae[dr])) break e;
            if ((q || B) && (B = Y.window === Y ? Y : (B = Y.ownerDocument) ? B.defaultView || B.parentWindow : window, q ? (ae = l.relatedTarget || l.toElement, q = U, ae = ae ? hr(ae) : null, ae !== null && (Ve = s(ae), de = ae.tag, ae !== Ve || de !== 5 && de !== 27 && de !== 6) && (ae = null)) : (q = null, ae = U), q !== ae)) {
              if (de = ah, F = "onMouseLeave", z = "onMouseEnter", R = "mouse", (e === "pointerout" || e === "pointerover") && (de = uh, F = "onPointerLeave", z = "onPointerEnter", R = "pointer"), Ve = q == null ? B : yi(q), L = ae == null ? B : yi(ae), B = new de(F, R + "leave", q, l, Y), B.target = Ve, B.relatedTarget = L, F = null, hr(Y) === U && (de = new de(z, R + "enter", ae, l, Y), de.target = L, de.relatedTarget = Ve, F = de), Ve = F, q && ae) t: {
                for (de = lS, z = q, R = ae, L = 0, F = z; F; F = de(F)) L++;
                F = 0;
                for (var fe = R; fe; fe = de(fe)) F++;
                for (; 0 < L - F; ) z = de(z), L--;
                for (; 0 < F - L; ) R = de(R), F--;
                for (; L--; ) {
                  if (z === R || R !== null && z === R.alternate) {
                    de = z;
                    break t;
                  }
                  z = de(z), R = de(R);
                }
                de = null;
              }
              else de = null;
              q !== null && $p(K, B, q, de, false), ae !== null && Ve !== null && $p(K, Ve, ae, de, true);
            }
          }
          e: {
            if (B = U ? yi(U) : window, q = B.nodeName && B.nodeName.toLowerCase(), q === "select" || q === "input" && B.type === "file") var Re = gh;
            else if (mh(B)) if (yh) Re = m1;
            else {
              Re = d1;
              var ce = f1;
            }
            else q = B.nodeName, !q || q.toLowerCase() !== "input" || B.type !== "checkbox" && B.type !== "radio" ? U && Pu(U.elementType) && (Re = gh) : Re = h1;
            if (Re && (Re = Re(e, U))) {
              ph(K, Re, l, Y);
              break e;
            }
            ce && ce(e, B, U), e === "focusout" && U && B.type === "number" && U.memoizedProps.value != null && Zu(B, "number", B.value);
          }
          switch (ce = U ? yi(U) : window, e) {
            case "focusin":
              (mh(ce) || ce.contentEditable === "true") && (wr = ce, sc = U, _i = null);
              break;
            case "focusout":
              _i = sc = wr = null;
              break;
            case "mousedown":
              fc = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              fc = false, Ah(K, l, Y);
              break;
            case "selectionchange":
              if (g1) break;
            case "keydown":
            case "keyup":
              Ah(K, l, Y);
          }
          var xe;
          if (ac) e: {
            switch (e) {
              case "compositionstart":
                var Me = "onCompositionStart";
                break e;
              case "compositionend":
                Me = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Me = "onCompositionUpdate";
                break e;
            }
            Me = void 0;
          }
          else Sr ? dh(e, l) && (Me = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (Me = "onCompositionStart");
          Me && (ch && l.locale !== "ko" && (Sr || Me !== "onCompositionStart" ? Me === "onCompositionEnd" && Sr && (xe = rh()) : (rl = Y, tc = "value" in rl ? rl.value : rl.textContent, Sr = true)), ce = Do(U, Me), 0 < ce.length && (Me = new oh(Me, e, null, l, Y), K.push({
            event: Me,
            listeners: ce
          }), xe ? Me.data = xe : (xe = hh(l), xe !== null && (Me.data = xe)))), (xe = a1 ? o1(e, l) : u1(e, l)) && (Me = Do(U, "onBeforeInput"), 0 < Me.length && (ce = new oh("onBeforeInput", "beforeinput", null, l, Y), K.push({
            event: ce,
            listeners: Me
          }), ce.data = xe)), $1(K, e, U, l, Y);
        }
        Jp(K, t);
      });
    }
    function Ji(e, t, l) {
      return {
        instance: e,
        listener: t,
        currentTarget: l
      };
    }
    function Do(e, t) {
      for (var l = t + "Capture", o = []; e !== null; ) {
        var c = e, f = c.stateNode;
        if (c = c.tag, c !== 5 && c !== 26 && c !== 27 || f === null || (c = vi(e, l), c != null && o.unshift(Ji(e, c, f)), c = vi(e, t), c != null && o.push(Ji(e, c, f))), e.tag === 3) return o;
        e = e.return;
      }
      return [];
    }
    function lS(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function $p(e, t, l, o, c) {
      for (var f = t._reactName, v = []; l !== null && l !== o; ) {
        var S = l, M = S.alternate, U = S.stateNode;
        if (S = S.tag, M !== null && M === o) break;
        S !== 5 && S !== 26 && S !== 27 || U === null || (M = U, c ? (U = vi(l, f), U != null && v.unshift(Ji(l, U, M))) : c || (U = vi(l, f), U != null && v.push(Ji(l, U, M)))), l = l.return;
      }
      v.length !== 0 && e.push({
        event: t,
        listeners: v
      });
    }
    var rS = /\r\n?/g, iS = /\u0000|\uFFFD/g;
    function eg(e) {
      return (typeof e == "string" ? e : "" + e).replace(rS, `
`).replace(iS, "");
    }
    function tg(e, t) {
      return t = eg(t), eg(e) === t;
    }
    function qe(e, t, l, o, c, f) {
      switch (l) {
        case "children":
          typeof o == "string" ? t === "body" || t === "textarea" && o === "" || vr(e, o) : (typeof o == "number" || typeof o == "bigint") && t !== "body" && vr(e, "" + o);
          break;
        case "className":
          Ua(e, "class", o);
          break;
        case "tabIndex":
          Ua(e, "tabindex", o);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          Ua(e, l, o);
          break;
        case "style":
          th(e, o, f);
          break;
        case "data":
          if (t !== "object") {
            Ua(e, "data", o);
            break;
          }
        case "src":
        case "href":
          if (o === "" && (t !== "a" || l !== "href")) {
            e.removeAttribute(l);
            break;
          }
          if (o == null || typeof o == "function" || typeof o == "symbol" || typeof o == "boolean") {
            e.removeAttribute(l);
            break;
          }
          o = Ha("" + o), e.setAttribute(l, o);
          break;
        case "action":
        case "formAction":
          if (typeof o == "function") {
            e.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
            break;
          } else typeof f == "function" && (l === "formAction" ? (t !== "input" && qe(e, t, "name", c.name, c, null), qe(e, t, "formEncType", c.formEncType, c, null), qe(e, t, "formMethod", c.formMethod, c, null), qe(e, t, "formTarget", c.formTarget, c, null)) : (qe(e, t, "encType", c.encType, c, null), qe(e, t, "method", c.method, c, null), qe(e, t, "target", c.target, c, null)));
          if (o == null || typeof o == "symbol" || typeof o == "boolean") {
            e.removeAttribute(l);
            break;
          }
          o = Ha("" + o), e.setAttribute(l, o);
          break;
        case "onClick":
          o != null && (e.onclick = Dn);
          break;
        case "onScroll":
          o != null && _e("scroll", e);
          break;
        case "onScrollEnd":
          o != null && _e("scrollend", e);
          break;
        case "dangerouslySetInnerHTML":
          if (o != null) {
            if (typeof o != "object" || !("__html" in o)) throw Error(a(61));
            if (l = o.__html, l != null) {
              if (c.children != null) throw Error(a(60));
              e.innerHTML = l;
            }
          }
          break;
        case "multiple":
          e.multiple = o && typeof o != "function" && typeof o != "symbol";
          break;
        case "muted":
          e.muted = o && typeof o != "function" && typeof o != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (o == null || typeof o == "function" || typeof o == "boolean" || typeof o == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          l = Ha("" + o), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(l, "" + o) : e.removeAttribute(l);
          break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          o && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
          break;
        case "capture":
        case "download":
          o === true ? e.setAttribute(l, "") : o !== false && o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(l, o) : e.removeAttribute(l);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          o != null && typeof o != "function" && typeof o != "symbol" && !isNaN(o) && 1 <= o ? e.setAttribute(l, o) : e.removeAttribute(l);
          break;
        case "rowSpan":
        case "start":
          o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o) ? e.removeAttribute(l) : e.setAttribute(l, o);
          break;
        case "popover":
          _e("beforetoggle", e), _e("toggle", e), La(e, "popover", o);
          break;
        case "xlinkActuate":
          zn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", o);
          break;
        case "xlinkArcrole":
          zn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", o);
          break;
        case "xlinkRole":
          zn(e, "http://www.w3.org/1999/xlink", "xlink:role", o);
          break;
        case "xlinkShow":
          zn(e, "http://www.w3.org/1999/xlink", "xlink:show", o);
          break;
        case "xlinkTitle":
          zn(e, "http://www.w3.org/1999/xlink", "xlink:title", o);
          break;
        case "xlinkType":
          zn(e, "http://www.w3.org/1999/xlink", "xlink:type", o);
          break;
        case "xmlBase":
          zn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", o);
          break;
        case "xmlLang":
          zn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", o);
          break;
        case "xmlSpace":
          zn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", o);
          break;
        case "is":
          La(e, "is", o);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = zx.get(l) || l, La(e, l, o));
      }
    }
    function Ls(e, t, l, o, c, f) {
      switch (l) {
        case "style":
          th(e, o, f);
          break;
        case "dangerouslySetInnerHTML":
          if (o != null) {
            if (typeof o != "object" || !("__html" in o)) throw Error(a(61));
            if (l = o.__html, l != null) {
              if (c.children != null) throw Error(a(60));
              e.innerHTML = l;
            }
          }
          break;
        case "children":
          typeof o == "string" ? vr(e, o) : (typeof o == "number" || typeof o == "bigint") && vr(e, "" + o);
          break;
        case "onScroll":
          o != null && _e("scroll", e);
          break;
        case "onScrollEnd":
          o != null && _e("scrollend", e);
          break;
        case "onClick":
          o != null && (e.onclick = Dn);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (!Qd.hasOwnProperty(l)) e: {
            if (l[0] === "o" && l[1] === "n" && (c = l.endsWith("Capture"), t = l.slice(2, c ? l.length - 7 : void 0), f = e[_t] || null, f = f != null ? f[l] : null, typeof f == "function" && e.removeEventListener(t, f, c), typeof o == "function")) {
              typeof f != "function" && f !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, o, c);
              break e;
            }
            l in e ? e[l] = o : o === true ? e.setAttribute(l, "") : La(e, l, o);
          }
      }
    }
    function gt(e, t, l) {
      switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          _e("error", e), _e("load", e);
          var o = false, c = false, f;
          for (f in l) if (l.hasOwnProperty(f)) {
            var v = l[f];
            if (v != null) switch (f) {
              case "src":
                o = true;
                break;
              case "srcSet":
                c = true;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(a(137, t));
              default:
                qe(e, t, f, v, l, null);
            }
          }
          c && qe(e, t, "srcSet", l.srcSet, l, null), o && qe(e, t, "src", l.src, l, null);
          return;
        case "input":
          _e("invalid", e);
          var S = f = v = c = null, M = null, U = null;
          for (o in l) if (l.hasOwnProperty(o)) {
            var Y = l[o];
            if (Y != null) switch (o) {
              case "name":
                c = Y;
                break;
              case "type":
                v = Y;
                break;
              case "checked":
                M = Y;
                break;
              case "defaultChecked":
                U = Y;
                break;
              case "value":
                f = Y;
                break;
              case "defaultValue":
                S = Y;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (Y != null) throw Error(a(137, t));
                break;
              default:
                qe(e, t, o, Y, l, null);
            }
          }
          Jd(e, f, S, M, U, v, c, false);
          return;
        case "select":
          _e("invalid", e), o = v = f = null;
          for (c in l) if (l.hasOwnProperty(c) && (S = l[c], S != null)) switch (c) {
            case "value":
              f = S;
              break;
            case "defaultValue":
              v = S;
              break;
            case "multiple":
              o = S;
            default:
              qe(e, t, c, S, l, null);
          }
          t = f, l = v, e.multiple = !!o, t != null ? yr(e, !!o, t, false) : l != null && yr(e, !!o, l, true);
          return;
        case "textarea":
          _e("invalid", e), f = c = o = null;
          for (v in l) if (l.hasOwnProperty(v) && (S = l[v], S != null)) switch (v) {
            case "value":
              o = S;
              break;
            case "defaultValue":
              c = S;
              break;
            case "children":
              f = S;
              break;
            case "dangerouslySetInnerHTML":
              if (S != null) throw Error(a(91));
              break;
            default:
              qe(e, t, v, S, l, null);
          }
          $d(e, o, c, f);
          return;
        case "option":
          for (M in l) l.hasOwnProperty(M) && (o = l[M], o != null) && (M === "selected" ? e.selected = o && typeof o != "function" && typeof o != "symbol" : qe(e, t, M, o, l, null));
          return;
        case "dialog":
          _e("beforetoggle", e), _e("toggle", e), _e("cancel", e), _e("close", e);
          break;
        case "iframe":
        case "object":
          _e("load", e);
          break;
        case "video":
        case "audio":
          for (o = 0; o < Pi.length; o++) _e(Pi[o], e);
          break;
        case "image":
          _e("error", e), _e("load", e);
          break;
        case "details":
          _e("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          _e("error", e), _e("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (U in l) if (l.hasOwnProperty(U) && (o = l[U], o != null)) switch (U) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(a(137, t));
            default:
              qe(e, t, U, o, l, null);
          }
          return;
        default:
          if (Pu(t)) {
            for (Y in l) l.hasOwnProperty(Y) && (o = l[Y], o !== void 0 && Ls(e, t, Y, o, l, void 0));
            return;
          }
      }
      for (S in l) l.hasOwnProperty(S) && (o = l[S], o != null && qe(e, t, S, o, l, null));
    }
    function aS(e, t, l, o) {
      switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var c = null, f = null, v = null, S = null, M = null, U = null, Y = null;
          for (q in l) {
            var K = l[q];
            if (l.hasOwnProperty(q) && K != null) switch (q) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                M = K;
              default:
                o.hasOwnProperty(q) || qe(e, t, q, null, o, K);
            }
          }
          for (var B in o) {
            var q = o[B];
            if (K = l[B], o.hasOwnProperty(B) && (q != null || K != null)) switch (B) {
              case "type":
                f = q;
                break;
              case "name":
                c = q;
                break;
              case "checked":
                U = q;
                break;
              case "defaultChecked":
                Y = q;
                break;
              case "value":
                v = q;
                break;
              case "defaultValue":
                S = q;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (q != null) throw Error(a(137, t));
                break;
              default:
                q !== K && qe(e, t, B, q, o, K);
            }
          }
          Ku(e, v, S, M, U, Y, f, c);
          return;
        case "select":
          q = v = S = B = null;
          for (f in l) if (M = l[f], l.hasOwnProperty(f) && M != null) switch (f) {
            case "value":
              break;
            case "multiple":
              q = M;
            default:
              o.hasOwnProperty(f) || qe(e, t, f, null, o, M);
          }
          for (c in o) if (f = o[c], M = l[c], o.hasOwnProperty(c) && (f != null || M != null)) switch (c) {
            case "value":
              B = f;
              break;
            case "defaultValue":
              S = f;
              break;
            case "multiple":
              v = f;
            default:
              f !== M && qe(e, t, c, f, o, M);
          }
          t = S, l = v, o = q, B != null ? yr(e, !!l, B, false) : !!o != !!l && (t != null ? yr(e, !!l, t, true) : yr(e, !!l, l ? [] : "", false));
          return;
        case "textarea":
          q = B = null;
          for (S in l) if (c = l[S], l.hasOwnProperty(S) && c != null && !o.hasOwnProperty(S)) switch (S) {
            case "value":
              break;
            case "children":
              break;
            default:
              qe(e, t, S, null, o, c);
          }
          for (v in o) if (c = o[v], f = l[v], o.hasOwnProperty(v) && (c != null || f != null)) switch (v) {
            case "value":
              B = c;
              break;
            case "defaultValue":
              q = c;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (c != null) throw Error(a(91));
              break;
            default:
              c !== f && qe(e, t, v, c, o, f);
          }
          Wd(e, B, q);
          return;
        case "option":
          for (var ae in l) B = l[ae], l.hasOwnProperty(ae) && B != null && !o.hasOwnProperty(ae) && (ae === "selected" ? e.selected = false : qe(e, t, ae, null, o, B));
          for (M in o) B = o[M], q = l[M], o.hasOwnProperty(M) && B !== q && (B != null || q != null) && (M === "selected" ? e.selected = B && typeof B != "function" && typeof B != "symbol" : qe(e, t, M, B, o, q));
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var de in l) B = l[de], l.hasOwnProperty(de) && B != null && !o.hasOwnProperty(de) && qe(e, t, de, null, o, B);
          for (U in o) if (B = o[U], q = l[U], o.hasOwnProperty(U) && B !== q && (B != null || q != null)) switch (U) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (B != null) throw Error(a(137, t));
              break;
            default:
              qe(e, t, U, B, o, q);
          }
          return;
        default:
          if (Pu(t)) {
            for (var Ve in l) B = l[Ve], l.hasOwnProperty(Ve) && B !== void 0 && !o.hasOwnProperty(Ve) && Ls(e, t, Ve, void 0, o, B);
            for (Y in o) B = o[Y], q = l[Y], !o.hasOwnProperty(Y) || B === q || B === void 0 && q === void 0 || Ls(e, t, Y, B, o, q);
            return;
          }
      }
      for (var z in l) B = l[z], l.hasOwnProperty(z) && B != null && !o.hasOwnProperty(z) && qe(e, t, z, null, o, B);
      for (K in o) B = o[K], q = l[K], !o.hasOwnProperty(K) || B === q || B == null && q == null || qe(e, t, K, B, o, q);
    }
    function ng(e) {
      switch (e) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
          return true;
        default:
          return false;
      }
    }
    function oS() {
      if (typeof performance.getEntriesByType == "function") {
        for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), o = 0; o < l.length; o++) {
          var c = l[o], f = c.transferSize, v = c.initiatorType, S = c.duration;
          if (f && S && ng(v)) {
            for (v = 0, S = c.responseEnd, o += 1; o < l.length; o++) {
              var M = l[o], U = M.startTime;
              if (U > S) break;
              var Y = M.transferSize, K = M.initiatorType;
              Y && ng(K) && (M = M.responseEnd, v += Y * (M < S ? 1 : (S - U) / (M - U)));
            }
            if (--o, t += 8 * (f + v) / (c.duration / 1e3), e++, 10 < e) break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
    }
    var Us = null, Bs = null;
    function jo(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function lg(e) {
      switch (e) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function rg(e, t) {
      if (e === 0) switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
      return e === 1 && t === "foreignObject" ? 0 : e;
    }
    function Hs(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    var qs = null;
    function uS() {
      var e = window.event;
      return e && e.type === "popstate" ? e === qs ? false : (qs = e, true) : (qs = null, false);
    }
    var ig = typeof setTimeout == "function" ? setTimeout : void 0, cS = typeof clearTimeout == "function" ? clearTimeout : void 0, ag = typeof Promise == "function" ? Promise : void 0, sS = typeof queueMicrotask == "function" ? queueMicrotask : typeof ag < "u" ? function(e) {
      return ag.resolve(null).then(e).catch(fS);
    } : ig;
    function fS(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Sl(e) {
      return e === "head";
    }
    function og(e, t) {
      var l = t, o = 0;
      do {
        var c = l.nextSibling;
        if (e.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$" || l === "/&") {
          if (o === 0) {
            e.removeChild(c), Zr(t);
            return;
          }
          o--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&") o++;
        else if (l === "html") Wi(e.ownerDocument.documentElement);
        else if (l === "head") {
          l = e.ownerDocument.head, Wi(l);
          for (var f = l.firstChild; f; ) {
            var v = f.nextSibling, S = f.nodeName;
            f[gi] || S === "SCRIPT" || S === "STYLE" || S === "LINK" && f.rel.toLowerCase() === "stylesheet" || l.removeChild(f), f = v;
          }
        } else l === "body" && Wi(e.ownerDocument.body);
        l = c;
      } while (l);
      Zr(t);
    }
    function ug(e, t) {
      var l = e;
      e = 0;
      do {
        var o = l.nextSibling;
        if (l.nodeType === 1 ? t ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (t ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), o && o.nodeType === 8) if (l = o.data, l === "/$") {
          if (e === 0) break;
          e--;
        } else l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || e++;
        l = o;
      } while (l);
    }
    function Vs(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var l = t;
        switch (t = t.nextSibling, l.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            Vs(l), Qu(l);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (l.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(l);
      }
    }
    function dS(e, t, l, o) {
      for (; e.nodeType === 1; ) {
        var c = l;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!o && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
        } else if (o) {
          if (!e[gi]) switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence")) break;
              if (f !== c.rel || e.getAttribute("href") !== (c.href == null || c.href === "" ? null : c.href) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin) || e.getAttribute("title") !== (c.title == null ? null : c.title)) break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (f = e.getAttribute("src"), (f !== (c.src == null ? null : c.src) || e.getAttribute("type") !== (c.type == null ? null : c.type) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
              return e;
            default:
              return e;
          }
        } else if (t === "input" && e.type === "hidden") {
          var f = c.name == null ? null : "" + c.name;
          if (c.type === "hidden" && e.getAttribute("name") === f) return e;
        } else return e;
        if (e = an(e.nextSibling), e === null) break;
      }
      return null;
    }
    function hS(e, t, l) {
      if (t === "") return null;
      for (; e.nodeType !== 3; ) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = an(e.nextSibling), e === null)) return null;
      return e;
    }
    function cg(e, t) {
      for (; e.nodeType !== 8; ) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = an(e.nextSibling), e === null)) return null;
      return e;
    }
    function Gs(e) {
      return e.data === "$?" || e.data === "$~";
    }
    function Ys(e) {
      return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
    }
    function mS(e, t) {
      var l = e.ownerDocument;
      if (e.data === "$~") e._reactRetry = t;
      else if (e.data !== "$?" || l.readyState !== "loading") t();
      else {
        var o = function() {
          t(), l.removeEventListener("DOMContentLoaded", o);
        };
        l.addEventListener("DOMContentLoaded", o), e._reactRetry = o;
      }
    }
    function an(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
          if (t === "/$" || t === "/&") return null;
        }
      }
      return e;
    }
    var Xs = null;
    function sg(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var l = e.data;
          if (l === "/$" || l === "/&") {
            if (t === 0) return an(e.nextSibling);
            t--;
          } else l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function fg(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var l = e.data;
          if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
            if (t === 0) return e;
            t--;
          } else l !== "/$" && l !== "/&" || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function dg(e, t, l) {
      switch (t = jo(l), e) {
        case "html":
          if (e = t.documentElement, !e) throw Error(a(452));
          return e;
        case "head":
          if (e = t.head, !e) throw Error(a(453));
          return e;
        case "body":
          if (e = t.body, !e) throw Error(a(454));
          return e;
        default:
          throw Error(a(451));
      }
    }
    function Wi(e) {
      for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
      Qu(e);
    }
    var on = /* @__PURE__ */ new Map(), hg = /* @__PURE__ */ new Set();
    function Lo(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    var Pn = Q.d;
    Q.d = {
      f: pS,
      r: gS,
      D: yS,
      C: vS,
      L: bS,
      m: xS,
      X: wS,
      S: SS,
      M: ES
    };
    function pS() {
      var e = Pn.f(), t = To();
      return e || t;
    }
    function gS(e) {
      var t = mr(e);
      t !== null && t.tag === 5 && t.type === "form" ? km(t) : Pn.r(e);
    }
    var Qr = typeof document > "u" ? null : document;
    function mg(e, t, l) {
      var o = Qr;
      if (o && typeof t == "string" && t) {
        var c = Wt(t);
        c = 'link[rel="' + e + '"][href="' + c + '"]', typeof l == "string" && (c += '[crossorigin="' + l + '"]'), hg.has(c) || (hg.add(c), e = {
          rel: e,
          crossOrigin: l,
          href: t
        }, o.querySelector(c) === null && (t = o.createElement("link"), gt(t, "link", e), ct(t), o.head.appendChild(t)));
      }
    }
    function yS(e) {
      Pn.D(e), mg("dns-prefetch", e, null);
    }
    function vS(e, t) {
      Pn.C(e, t), mg("preconnect", e, t);
    }
    function bS(e, t, l) {
      Pn.L(e, t, l);
      var o = Qr;
      if (o && e && t) {
        var c = 'link[rel="preload"][as="' + Wt(t) + '"]';
        t === "image" && l && l.imageSrcSet ? (c += '[imagesrcset="' + Wt(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (c += '[imagesizes="' + Wt(l.imageSizes) + '"]')) : c += '[href="' + Wt(e) + '"]';
        var f = c;
        switch (t) {
          case "style":
            f = Fr(e);
            break;
          case "script":
            f = Kr(e);
        }
        on.has(f) || (e = y({
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        }, l), on.set(f, e), o.querySelector(c) !== null || t === "style" && o.querySelector($i(f)) || t === "script" && o.querySelector(ea(f)) || (t = o.createElement("link"), gt(t, "link", e), ct(t), o.head.appendChild(t)));
      }
    }
    function xS(e, t) {
      Pn.m(e, t);
      var l = Qr;
      if (l && e) {
        var o = t && typeof t.as == "string" ? t.as : "script", c = 'link[rel="modulepreload"][as="' + Wt(o) + '"][href="' + Wt(e) + '"]', f = c;
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            f = Kr(e);
        }
        if (!on.has(f) && (e = y({
          rel: "modulepreload",
          href: e
        }, t), on.set(f, e), l.querySelector(c) === null)) {
          switch (o) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (l.querySelector(ea(f))) return;
          }
          o = l.createElement("link"), gt(o, "link", e), ct(o), l.head.appendChild(o);
        }
      }
    }
    function SS(e, t, l) {
      Pn.S(e, t, l);
      var o = Qr;
      if (o && e) {
        var c = pr(o).hoistableStyles, f = Fr(e);
        t = t || "default";
        var v = c.get(f);
        if (!v) {
          var S = {
            loading: 0,
            preload: null
          };
          if (v = o.querySelector($i(f))) S.loading = 5;
          else {
            e = y({
              rel: "stylesheet",
              href: e,
              "data-precedence": t
            }, l), (l = on.get(f)) && Is(e, l);
            var M = v = o.createElement("link");
            ct(M), gt(M, "link", e), M._p = new Promise(function(U, Y) {
              M.onload = U, M.onerror = Y;
            }), M.addEventListener("load", function() {
              S.loading |= 1;
            }), M.addEventListener("error", function() {
              S.loading |= 2;
            }), S.loading |= 4, Uo(v, t, o);
          }
          v = {
            type: "stylesheet",
            instance: v,
            count: 1,
            state: S
          }, c.set(f, v);
        }
      }
    }
    function wS(e, t) {
      Pn.X(e, t);
      var l = Qr;
      if (l && e) {
        var o = pr(l).hoistableScripts, c = Kr(e), f = o.get(c);
        f || (f = l.querySelector(ea(c)), f || (e = y({
          src: e,
          async: true
        }, t), (t = on.get(c)) && Qs(e, t), f = l.createElement("script"), ct(f), gt(f, "link", e), l.head.appendChild(f)), f = {
          type: "script",
          instance: f,
          count: 1,
          state: null
        }, o.set(c, f));
      }
    }
    function ES(e, t) {
      Pn.M(e, t);
      var l = Qr;
      if (l && e) {
        var o = pr(l).hoistableScripts, c = Kr(e), f = o.get(c);
        f || (f = l.querySelector(ea(c)), f || (e = y({
          src: e,
          async: true,
          type: "module"
        }, t), (t = on.get(c)) && Qs(e, t), f = l.createElement("script"), ct(f), gt(f, "link", e), l.head.appendChild(f)), f = {
          type: "script",
          instance: f,
          count: 1,
          state: null
        }, o.set(c, f));
      }
    }
    function pg(e, t, l, o) {
      var c = (c = Ee.current) ? Lo(c) : null;
      if (!c) throw Error(a(446));
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof l.precedence == "string" && typeof l.href == "string" ? (t = Fr(l.href), l = pr(c).hoistableStyles, o = l.get(t), o || (o = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, l.set(t, o)), o) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        case "link":
          if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
            e = Fr(l.href);
            var f = pr(c).hoistableStyles, v = f.get(e);
            if (v || (c = c.ownerDocument || c, v = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            }, f.set(e, v), (f = c.querySelector($i(e))) && !f._p && (v.instance = f, v.state.loading = 5), on.has(e) || (l = {
              rel: "preload",
              as: "style",
              href: l.href,
              crossOrigin: l.crossOrigin,
              integrity: l.integrity,
              media: l.media,
              hrefLang: l.hrefLang,
              referrerPolicy: l.referrerPolicy
            }, on.set(e, l), f || CS(c, e, l, v.state))), t && o === null) throw Error(a(528, ""));
            return v;
          }
          if (t && o !== null) throw Error(a(529, ""));
          return null;
        case "script":
          return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Kr(l), l = pr(c).hoistableScripts, o = l.get(t), o || (o = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, l.set(t, o)), o) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        default:
          throw Error(a(444, e));
      }
    }
    function Fr(e) {
      return 'href="' + Wt(e) + '"';
    }
    function $i(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function gg(e) {
      return y({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function CS(e, t, l, o) {
      e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? o.loading = 1 : (t = e.createElement("link"), o.preload = t, t.addEventListener("load", function() {
        return o.loading |= 1;
      }), t.addEventListener("error", function() {
        return o.loading |= 2;
      }), gt(t, "link", l), ct(t), e.head.appendChild(t));
    }
    function Kr(e) {
      return '[src="' + Wt(e) + '"]';
    }
    function ea(e) {
      return "script[async]" + e;
    }
    function yg(e, t, l) {
      if (t.count++, t.instance === null) switch (t.type) {
        case "style":
          var o = e.querySelector('style[data-href~="' + Wt(l.href) + '"]');
          if (o) return t.instance = o, ct(o), o;
          var c = y({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return o = (e.ownerDocument || e).createElement("style"), ct(o), gt(o, "style", c), Uo(o, l.precedence, e), t.instance = o;
        case "stylesheet":
          c = Fr(l.href);
          var f = e.querySelector($i(c));
          if (f) return t.state.loading |= 4, t.instance = f, ct(f), f;
          o = gg(l), (c = on.get(c)) && Is(o, c), f = (e.ownerDocument || e).createElement("link"), ct(f);
          var v = f;
          return v._p = new Promise(function(S, M) {
            v.onload = S, v.onerror = M;
          }), gt(f, "link", o), t.state.loading |= 4, Uo(f, l.precedence, e), t.instance = f;
        case "script":
          return f = Kr(l.src), (c = e.querySelector(ea(f))) ? (t.instance = c, ct(c), c) : (o = l, (c = on.get(f)) && (o = y({}, l), Qs(o, c)), e = e.ownerDocument || e, c = e.createElement("script"), ct(c), gt(c, "link", o), e.head.appendChild(c), t.instance = c);
        case "void":
          return null;
        default:
          throw Error(a(443, t.type));
      }
      else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (o = t.instance, t.state.loading |= 4, Uo(o, l.precedence, e));
      return t.instance;
    }
    function Uo(e, t, l) {
      for (var o = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), c = o.length ? o[o.length - 1] : null, f = c, v = 0; v < o.length; v++) {
        var S = o[v];
        if (S.dataset.precedence === t) f = S;
        else if (f !== c) break;
      }
      f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
    }
    function Is(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function Qs(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    var Bo = null;
    function vg(e, t, l) {
      if (Bo === null) {
        var o = /* @__PURE__ */ new Map(), c = Bo = /* @__PURE__ */ new Map();
        c.set(l, o);
      } else c = Bo, o = c.get(l), o || (o = /* @__PURE__ */ new Map(), c.set(l, o));
      if (o.has(e)) return o;
      for (o.set(e, null), l = l.getElementsByTagName(e), c = 0; c < l.length; c++) {
        var f = l[c];
        if (!(f[gi] || f[dt] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== "http://www.w3.org/2000/svg") {
          var v = f.getAttribute(t) || "";
          v = e + v;
          var S = o.get(v);
          S ? S.push(f) : o.set(v, [
            f
          ]);
        }
      }
      return o;
    }
    function bg(e, t, l) {
      e = e.ownerDocument || e, e.head.insertBefore(l, t === "title" ? e.querySelector("head > title") : null);
    }
    function AS(e, t, l) {
      if (l === 1 || t.itemProp != null) return false;
      switch (e) {
        case "meta":
        case "title":
          return true;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
          return true;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
          return t.rel === "stylesheet" ? (e = t.disabled, typeof t.precedence == "string" && e == null) : true;
        case "script":
          if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return true;
      }
      return false;
    }
    function xg(e) {
      return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
    }
    function _S(e, t, l, o) {
      if (l.type === "stylesheet" && (typeof o.media != "string" || matchMedia(o.media).matches !== false) && (l.state.loading & 4) === 0) {
        if (l.instance === null) {
          var c = Fr(o.href), f = t.querySelector($i(c));
          if (f) {
            t = f._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Ho.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = f, ct(f);
            return;
          }
          f = t.ownerDocument || t, o = gg(o), (c = on.get(c)) && Is(o, c), f = f.createElement("link"), ct(f);
          var v = f;
          v._p = new Promise(function(S, M) {
            v.onload = S, v.onerror = M;
          }), gt(f, "link", o), l.instance = f;
        }
        e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = Ho.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
      }
    }
    var Fs = 0;
    function TS(e, t) {
      return e.stylesheets && e.count === 0 && Vo(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
        var o = setTimeout(function() {
          if (e.stylesheets && Vo(e, e.stylesheets), e.unsuspend) {
            var f = e.unsuspend;
            e.unsuspend = null, f();
          }
        }, 6e4 + t);
        0 < e.imgBytes && Fs === 0 && (Fs = 62500 * oS());
        var c = setTimeout(function() {
          if (e.waitingForImages = false, e.count === 0 && (e.stylesheets && Vo(e, e.stylesheets), e.unsuspend)) {
            var f = e.unsuspend;
            e.unsuspend = null, f();
          }
        }, (e.imgBytes > Fs ? 50 : 800) + t);
        return e.unsuspend = l, function() {
          e.unsuspend = null, clearTimeout(o), clearTimeout(c);
        };
      } : null;
    }
    function Ho() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets) Vo(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    var qo = null;
    function Vo(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, qo = /* @__PURE__ */ new Map(), t.forEach(MS, e), qo = null, Ho.call(e));
    }
    function MS(e, t) {
      if (!(t.state.loading & 4)) {
        var l = qo.get(e);
        if (l) var o = l.get(null);
        else {
          l = /* @__PURE__ */ new Map(), qo.set(e, l);
          for (var c = e.querySelectorAll("link[data-precedence],style[data-precedence]"), f = 0; f < c.length; f++) {
            var v = c[f];
            (v.nodeName === "LINK" || v.getAttribute("media") !== "not all") && (l.set(v.dataset.precedence, v), o = v);
          }
          o && l.set(null, o);
        }
        c = t.instance, v = c.getAttribute("data-precedence"), f = l.get(v) || o, f === o && l.set(null, c), l.set(v, c), this.count++, o = Ho.bind(this), c.addEventListener("load", o), c.addEventListener("error", o), f ? f.parentNode.insertBefore(c, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(c, e.firstChild)), t.state.loading |= 4;
      }
    }
    var ta = {
      $$typeof: j,
      Provider: null,
      Consumer: null,
      _currentValue: H,
      _currentValue2: H,
      _threadCount: 0
    };
    function OS(e, t, l, o, c, f, v, S, M) {
      this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Gu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gu(0), this.hiddenUpdates = Gu(null), this.identifierPrefix = o, this.onUncaughtError = c, this.onCaughtError = f, this.onRecoverableError = v, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = M, this.incompleteTransitions = /* @__PURE__ */ new Map();
    }
    function Sg(e, t, l, o, c, f, v, S, M, U, Y, K) {
      return e = new OS(e, t, l, v, M, U, Y, K, S), t = 1, f === true && (t |= 24), f = Ht(3, null, null, t), e.current = f, f.stateNode = e, t = _c(), t.refCount++, e.pooledCache = t, t.refCount++, f.memoizedState = {
        element: o,
        isDehydrated: l,
        cache: t
      }, kc(f), e;
    }
    function wg(e) {
      return e ? (e = Ar, e) : Ar;
    }
    function Eg(e, t, l, o, c, f) {
      c = wg(c), o.context === null ? o.context = c : o.pendingContext = c, o = sl(t), o.payload = {
        element: l
      }, f = f === void 0 ? null : f, f !== null && (o.callback = f), l = fl(e, o, t), l !== null && (Nt(l, e, t), zi(l, e, t));
    }
    function Cg(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var l = e.retryLane;
        e.retryLane = l !== 0 && l < t ? l : t;
      }
    }
    function Ks(e, t) {
      Cg(e, t), (e = e.alternate) && Cg(e, t);
    }
    function Ag(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = Vl(e, 67108864);
        t !== null && Nt(t, e, 67108864), Ks(e, 67108864);
      }
    }
    function _g(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = Xt();
        t = Yu(t);
        var l = Vl(e, t);
        l !== null && Nt(l, e, t), Ks(e, t);
      }
    }
    var Go = true;
    function kS(e, t, l, o) {
      var c = N.T;
      N.T = null;
      var f = Q.p;
      try {
        Q.p = 2, Zs(e, t, l, o);
      } finally {
        Q.p = f, N.T = c;
      }
    }
    function RS(e, t, l, o) {
      var c = N.T;
      N.T = null;
      var f = Q.p;
      try {
        Q.p = 8, Zs(e, t, l, o);
      } finally {
        Q.p = f, N.T = c;
      }
    }
    function Zs(e, t, l, o) {
      if (Go) {
        var c = Ps(o);
        if (c === null) js(e, t, o, Yo, l), Mg(e, o);
        else if (zS(c, e, t, l, o)) o.stopPropagation();
        else if (Mg(e, o), t & 4 && -1 < NS.indexOf(e)) {
          for (; c !== null; ) {
            var f = mr(c);
            if (f !== null) switch (f.tag) {
              case 3:
                if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                  var v = Ll(f.pendingLanes);
                  if (v !== 0) {
                    var S = f;
                    for (S.pendingLanes |= 2, S.entangledLanes |= 2; v; ) {
                      var M = 1 << 31 - Ge(v);
                      S.entanglements[1] |= M, v &= ~M;
                    }
                    Sn(f), (ze & 6) === 0 && (Ao = xt() + 500, Zi(0));
                  }
                }
                break;
              case 31:
              case 13:
                S = Vl(f, 2), S !== null && Nt(S, f, 2), To(), Ks(f, 2);
            }
            if (f = Ps(o), f === null && js(e, t, o, Yo, l), f === c) break;
            c = f;
          }
          c !== null && o.stopPropagation();
        } else js(e, t, o, null, l);
      }
    }
    function Ps(e) {
      return e = Wu(e), Js(e);
    }
    var Yo = null;
    function Js(e) {
      if (Yo = null, e = hr(e), e !== null) {
        var t = s(e);
        if (t === null) e = null;
        else {
          var l = t.tag;
          if (l === 13) {
            if (e = d(t), e !== null) return e;
            e = null;
          } else if (l === 31) {
            if (e = h(t), e !== null) return e;
            e = null;
          } else if (l === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return Yo = e, null;
    }
    function Tg(e) {
      switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 8;
        case "message":
          switch (Vu()) {
            case I:
              return 2;
            case le:
              return 8;
            case pe:
            case Ce:
              return 32;
            case je:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var Ws = false, wl = null, El = null, Cl = null, na = /* @__PURE__ */ new Map(), la = /* @__PURE__ */ new Map(), Al = [], NS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Mg(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          wl = null;
          break;
        case "dragenter":
        case "dragleave":
          El = null;
          break;
        case "mouseover":
        case "mouseout":
          Cl = null;
          break;
        case "pointerover":
        case "pointerout":
          na.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          la.delete(t.pointerId);
      }
    }
    function ra(e, t, l, o, c, f) {
      return e === null || e.nativeEvent !== f ? (e = {
        blockedOn: t,
        domEventName: l,
        eventSystemFlags: o,
        nativeEvent: f,
        targetContainers: [
          c
        ]
      }, t !== null && (t = mr(t), t !== null && Ag(t)), e) : (e.eventSystemFlags |= o, t = e.targetContainers, c !== null && t.indexOf(c) === -1 && t.push(c), e);
    }
    function zS(e, t, l, o, c) {
      switch (t) {
        case "focusin":
          return wl = ra(wl, e, t, l, o, c), true;
        case "dragenter":
          return El = ra(El, e, t, l, o, c), true;
        case "mouseover":
          return Cl = ra(Cl, e, t, l, o, c), true;
        case "pointerover":
          var f = c.pointerId;
          return na.set(f, ra(na.get(f) || null, e, t, l, o, c)), true;
        case "gotpointercapture":
          return f = c.pointerId, la.set(f, ra(la.get(f) || null, e, t, l, o, c)), true;
      }
      return false;
    }
    function Og(e) {
      var t = hr(e.target);
      if (t !== null) {
        var l = s(t);
        if (l !== null) {
          if (t = l.tag, t === 13) {
            if (t = d(l), t !== null) {
              e.blockedOn = t, Yd(e.priority, function() {
                _g(l);
              });
              return;
            }
          } else if (t === 31) {
            if (t = h(l), t !== null) {
              e.blockedOn = t, Yd(e.priority, function() {
                _g(l);
              });
              return;
            }
          } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Xo(e) {
      if (e.blockedOn !== null) return false;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var l = Ps(e.nativeEvent);
        if (l === null) {
          l = e.nativeEvent;
          var o = new l.constructor(l.type, l);
          Ju = o, l.target.dispatchEvent(o), Ju = null;
        } else return t = mr(l), t !== null && Ag(t), e.blockedOn = l, false;
        t.shift();
      }
      return true;
    }
    function kg(e, t, l) {
      Xo(e) && l.delete(t);
    }
    function DS() {
      Ws = false, wl !== null && Xo(wl) && (wl = null), El !== null && Xo(El) && (El = null), Cl !== null && Xo(Cl) && (Cl = null), na.forEach(kg), la.forEach(kg);
    }
    function Io(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Ws || (Ws = true, n.unstable_scheduleCallback(n.unstable_NormalPriority, DS)));
    }
    var Qo = null;
    function Rg(e) {
      Qo !== e && (Qo = e, n.unstable_scheduleCallback(n.unstable_NormalPriority, function() {
        Qo === e && (Qo = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t], o = e[t + 1], c = e[t + 2];
          if (typeof o != "function") {
            if (Js(o || l) === null) continue;
            break;
          }
          var f = mr(l);
          f !== null && (e.splice(t, 3), t -= 3, Pc(f, {
            pending: true,
            data: c,
            method: l.method,
            action: o
          }, o, c));
        }
      }));
    }
    function Zr(e) {
      function t(M) {
        return Io(M, e);
      }
      wl !== null && Io(wl, e), El !== null && Io(El, e), Cl !== null && Io(Cl, e), na.forEach(t), la.forEach(t);
      for (var l = 0; l < Al.length; l++) {
        var o = Al[l];
        o.blockedOn === e && (o.blockedOn = null);
      }
      for (; 0 < Al.length && (l = Al[0], l.blockedOn === null); ) Og(l), l.blockedOn === null && Al.shift();
      if (l = (e.ownerDocument || e).$$reactFormReplay, l != null) for (o = 0; o < l.length; o += 3) {
        var c = l[o], f = l[o + 1], v = c[_t] || null;
        if (typeof f == "function") v || Rg(l);
        else if (v) {
          var S = null;
          if (f && f.hasAttribute("formAction")) {
            if (c = f, v = f[_t] || null) S = v.formAction;
            else if (Js(c) !== null) continue;
          } else S = v.action;
          typeof S == "function" ? l[o + 1] = S : (l.splice(o, 3), o -= 3), Rg(l);
        }
      }
    }
    function Ng() {
      function e(f) {
        f.canIntercept && f.info === "react-transition" && f.intercept({
          handler: function() {
            return new Promise(function(v) {
              return c = v;
            });
          },
          focusReset: "manual",
          scroll: "manual"
        });
      }
      function t() {
        c !== null && (c(), c = null), o || setTimeout(l, 20);
      }
      function l() {
        if (!o && !navigation.transition) {
          var f = navigation.currentEntry;
          f && f.url != null && navigation.navigate(f.url, {
            state: f.getState(),
            info: "react-transition",
            history: "replace"
          });
        }
      }
      if (typeof navigation == "object") {
        var o = false, c = null;
        return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(l, 100), function() {
          o = true, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), c !== null && (c(), c = null);
        };
      }
    }
    function $s(e) {
      this._internalRoot = e;
    }
    Fo.prototype.render = $s.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error(a(409));
      var l = t.current, o = Xt();
      Eg(l, o, e, t, null, null);
    }, Fo.prototype.unmount = $s.prototype.unmount = function() {
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Eg(e.current, 2, null, e, null, null), To(), t[dr] = null;
      }
    };
    function Fo(e) {
      this._internalRoot = e;
    }
    Fo.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = Gd();
        e = {
          blockedOn: null,
          target: e,
          priority: t
        };
        for (var l = 0; l < Al.length && t !== 0 && t < Al[l].priority; l++) ;
        Al.splice(l, 0, e), l === 0 && Og(e);
      }
    };
    var zg = r.version;
    if (zg !== "19.2.4") throw Error(a(527, zg, "19.2.4"));
    Q.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0) throw typeof e.render == "function" ? Error(a(188)) : (e = Object.keys(e).join(","), Error(a(268, e)));
      return e = m(t), e = e !== null ? g(e) : null, e = e === null ? null : e.stateNode, e;
    };
    var jS = {
      bundleType: 0,
      version: "19.2.4",
      rendererPackageName: "react-dom",
      currentDispatcherRef: N,
      reconcilerVersion: "19.2.4"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var Ko = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Ko.isDisabled && Ko.supportsFiber) try {
        St = Ko.inject(jS), at = Ko;
      } catch {
      }
    }
    return ia.createRoot = function(e, t) {
      if (!u(e)) throw Error(a(299));
      var l = false, o = "", c = qm, f = Vm, v = Gm;
      return t != null && (t.unstable_strictMode === true && (l = true), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onUncaughtError !== void 0 && (c = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (v = t.onRecoverableError)), t = Sg(e, 1, false, null, null, l, o, null, c, f, v, Ng), e[dr] = t.current, Ds(e), new $s(t);
    }, ia.hydrateRoot = function(e, t, l) {
      if (!u(e)) throw Error(a(299));
      var o = false, c = "", f = qm, v = Vm, S = Gm, M = null;
      return l != null && (l.unstable_strictMode === true && (o = true), l.identifierPrefix !== void 0 && (c = l.identifierPrefix), l.onUncaughtError !== void 0 && (f = l.onUncaughtError), l.onCaughtError !== void 0 && (v = l.onCaughtError), l.onRecoverableError !== void 0 && (S = l.onRecoverableError), l.formState !== void 0 && (M = l.formState)), t = Sg(e, 1, true, t, l ?? null, o, c, M, f, v, S, Ng), t.context = wg(null), l = t.current, o = Xt(), o = Yu(o), c = sl(o), c.callback = null, fl(l, c, o), l = o, t.current.lanes = l, pi(t, l), Sn(t), e[dr] = t.current, Ds(e), new Fo(t);
    }, ia.version = "19.2.4", ia;
  }
  var Hg;
  function IS() {
    if (Hg) return ef.exports;
    Hg = 1;
    function n() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
    }
    return n(), ef.exports = XS(), ef.exports;
  }
  var QS = IS();
  function FS(n, r) {
    if (n instanceof RegExp) return {
      keys: false,
      pattern: n
    };
    var i, a, u, s, d = [], h = "", p = n.split("/");
    for (p[0] || p.shift(); u = p.shift(); ) i = u[0], i === "*" ? (d.push(i), h += u[1] === "?" ? "(?:/(.*))?" : "/(.*)") : i === ":" ? (a = u.indexOf("?", 1), s = u.indexOf(".", 1), d.push(u.substring(1, ~a ? a : ~s ? s : u.length)), h += ~a && !~s ? "(?:/([^/]+?))?" : "/([^/]+?)", ~s && (h += (~a ? "?" : "") + "\\" + u.substring(s))) : h += "/" + u;
    return {
      keys: d,
      pattern: new RegExp("^" + h + (r ? "(?=$|/)" : "/?$"), "i")
    };
  }
  var rf = {
    exports: {}
  }, af = {};
  var qg;
  function KS() {
    if (qg) return af;
    qg = 1;
    var n = $f();
    function r(y, x) {
      return y === x && (y !== 0 || 1 / y === 1 / x) || y !== y && x !== x;
    }
    var i = typeof Object.is == "function" ? Object.is : r, a = n.useState, u = n.useEffect, s = n.useLayoutEffect, d = n.useDebugValue;
    function h(y, x) {
      var b = x(), T = a({
        inst: {
          value: b,
          getSnapshot: x
        }
      }), C = T[0].inst, k = T[1];
      return s(function() {
        C.value = b, C.getSnapshot = x, p(C) && k({
          inst: C
        });
      }, [
        y,
        b,
        x
      ]), u(function() {
        return p(C) && k({
          inst: C
        }), y(function() {
          p(C) && k({
            inst: C
          });
        });
      }, [
        y
      ]), d(b), b;
    }
    function p(y) {
      var x = y.getSnapshot;
      y = y.value;
      try {
        var b = x();
        return !i(y, b);
      } catch {
        return true;
      }
    }
    function m(y, x) {
      return x();
    }
    var g = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? m : h;
    return af.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : g, af;
  }
  var Vg;
  function ZS() {
    return Vg || (Vg = 1, rf.exports = KS()), rf.exports;
  }
  var PS = ZS();
  const JS = _u.useInsertionEffect, WS = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", bv = WS ? w.useLayoutEffect : w.useEffect, $S = JS || bv, td = (n) => {
    const r = w.useRef([
      n,
      (...i) => r[0](...i)
    ]).current;
    return $S(() => {
      r[0] = n;
    }), r[1];
  }, ew = "popstate", nd = "pushState", ld = "replaceState", tw = "hashchange", Gg = [
    ew,
    nd,
    ld,
    tw
  ], nw = (n) => {
    for (const r of Gg) addEventListener(r, n);
    return () => {
      for (const r of Gg) removeEventListener(r, n);
    };
  }, xv = (n, r) => PS.useSyncExternalStore(nw, n, r), Yg = () => location.search, lw = ({ ssrSearch: n } = {}) => xv(Yg, n != null ? () => n : Yg), Xg = () => location.pathname, rw = ({ ssrPath: n } = {}) => xv(Xg, n != null ? () => n : Xg), iw = (n, { replace: r = false, state: i = null } = {}) => history[r ? ld : nd](i, "", n), aw = (n = {}) => [
    rw(n),
    iw
  ], Ig = /* @__PURE__ */ Symbol.for("wouter_v3");
  if (typeof history < "u" && typeof window[Ig] > "u") {
    for (const n of [
      nd,
      ld
    ]) {
      const r = history[n];
      history[n] = function() {
        const i = r.apply(this, arguments), a = new Event(n);
        return a.arguments = arguments, dispatchEvent(a), i;
      };
    }
    Object.defineProperty(window, Ig, {
      value: true
    });
  }
  const ow = (n, r) => r.toLowerCase().indexOf(n.toLowerCase()) ? "~" + r : r.slice(n.length) || "/", Sv = (n = "") => n === "/" ? "" : n, uw = (n, r) => n[0] === "~" ? n.slice(1) : Sv(r) + n, cw = (n = "", r) => ow(Qg(Sv(n)), Qg(r)), Qg = (n) => {
    try {
      return decodeURI(n);
    } catch {
      return n;
    }
  }, wv = {
    hook: aw,
    searchHook: lw,
    parser: FS,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    ssrContext: void 0,
    hrefs: (n) => n,
    aroundNav: (n, r, i) => n(r, i)
  }, Ev = w.createContext(wv), ui = () => w.useContext(Ev), Cv = {}, Av = w.createContext(Cv), sw = () => w.useContext(Av), Sa = (n) => {
    const [r, i] = n.hook(n);
    return [
      cw(n.base, r),
      td((a, u) => n.aroundNav(i, uw(a, n.base), u))
    ];
  }, fw = () => Sa(ui()), _v = (n, r, i, a) => {
    const { pattern: u, keys: s } = r instanceof RegExp ? {
      keys: false,
      pattern: r
    } : n(r || "*", a), d = u.exec(i) || [], [h, ...p] = d;
    return h !== void 0 ? [
      true,
      (() => {
        const m = s !== false ? Object.fromEntries(s.map((y, x) => [
          y,
          p[x]
        ])) : d.groups;
        let g = {
          ...p
        };
        return m && Object.assign(g, m), g;
      })(),
      ...a ? [
        h
      ] : []
    ] : [
      false,
      null
    ];
  }, dw = ({ children: n, ...r }) => {
    var _a2, _b2, _c;
    const i = ui(), a = r.hook ? wv : i;
    let u = a;
    const [s, d = r.ssrSearch ?? ""] = ((_a2 = r.ssrPath) == null ? void 0 : _a2.split("?")) ?? [];
    s && (r.ssrSearch = d, r.ssrPath = s), r.hrefs = r.hrefs ?? ((_b2 = r.hook) == null ? void 0 : _b2.hrefs), r.searchHook = r.searchHook ?? ((_c = r.hook) == null ? void 0 : _c.searchHook);
    let h = w.useRef({}), p = h.current, m = p;
    for (let g in a) {
      const y = g === "base" ? a[g] + (r[g] ?? "") : r[g] ?? a[g];
      p === m && y !== m[g] && (h.current = m = {
        ...m
      }), m[g] = y, (y !== a[g] || y !== u[g]) && (u = m);
    }
    return w.createElement(Ev.Provider, {
      value: u,
      children: n
    });
  }, Fg = ({ children: n, component: r }, i) => r ? w.createElement(r, {
    params: i
  }) : typeof n == "function" ? n(i) : n, hw = (n) => {
    let r = w.useRef(Cv);
    const i = r.current;
    return r.current = Object.keys(n).length !== Object.keys(i).length || Object.entries(n).some(([a, u]) => u !== i[a]) ? n : i;
  }, of = ({ path: n, nest: r, match: i, ...a }) => {
    const u = ui(), [s] = Sa(u), [d, h, p] = i ?? _v(u.parser, n, s, r), m = hw({
      ...sw(),
      ...h
    });
    if (!d) return null;
    const g = p ? w.createElement(dw, {
      base: p
    }, Fg(a, m)) : Fg(a, m);
    return w.createElement(Av.Provider, {
      value: m,
      children: g
    });
  }, da = w.forwardRef((n, r) => {
    const i = ui(), [a, u] = Sa(i), { to: s = "", href: d = s, onClick: h, asChild: p, children: m, className: g, replace: y, state: x, transition: b, ...T } = n, C = td((O) => {
      O.ctrlKey || O.metaKey || O.altKey || O.shiftKey || O.button !== 0 || (h == null ? void 0 : h(O), O.defaultPrevented || (O.preventDefault(), u(d, n)));
    }), k = i.hrefs(d[0] === "~" ? d.slice(1) : i.base + d, i);
    return p && w.isValidElement(m) ? w.cloneElement(m, {
      onClick: C,
      href: k
    }) : w.createElement("a", {
      ...T,
      onClick: C,
      href: k,
      className: (g == null ? void 0 : g.call) ? g(a === d) : g,
      children: m,
      ref: r
    });
  }), Tv = (n) => Array.isArray(n) ? n.flatMap((r) => Tv(r && r.type === w.Fragment ? r.props.children : r)) : [
    n
  ], mw = ({ children: n, location: r }) => {
    const i = ui(), [a] = Sa(i);
    for (const u of Tv(n)) {
      let s = 0;
      if (w.isValidElement(u) && (s = _v(i.parser, u.props.path, r || a, u.props.nest))[0]) return w.cloneElement(u, {
        match: s
      });
    }
    return null;
  }, Kg = (n) => {
    const { to: r, href: i = r } = n, a = ui(), [, u] = Sa(a), s = td(() => u(r || i, n)), { ssrContext: d } = a;
    return bv(() => {
      s();
    }, []), d && (d.redirectTo = r), null;
  };
  function un(n) {
    return n.map((r) => r.split(`
`).map((i) => i.trim()).join(`
`)).join("");
  }
  const Mv = [
    {
      contentMd: un`This interactive tutorial will guide you through creating your own recipes using a simple and intuitive language.

        Let's start by learning how to add ingredients to your recipe.

        **Task**

        Create an ingredient: Wrap the word "flour" in curly braces: \`{}\`.

        **Example**

        \`\`\`
        {flour}
        \`\`\`

        **Remember**: Curly braces are used to define ingredients in Reciperium.

        Let's get started! Write your first ingredient in the text box.

        **Extra challenge**: if you see any other ingredient, also wrap it in curly braces.
        `,
      validation: (n) => n.ingredients.find((r) => r.name === "flour") !== void 0,
      defaultRecipe: un`Mix flour with water.`,
      title: "Your First Ingredient: A Tutorial"
    },
    {
      contentMd: un`Congratulations on creating your first ingredient!

      Now let's add more detail to your recipe by specifying the quantity and unit of each ingredient.

      **Task**

      Add quantity and unit: After the curly braces, add parentheses containing the quantity and unit.

      **Example**

      \`\`\`
      {flour}(125 gr)
      \`\`\`

      **Remember**: The quantity is the numerical value, and the unit is the unit of measurement (e.g., gr, cups, tbps).

      **Extra challenge**: if you see any other ingredient, also add the amount and quantity.
    `,
      validation: (n) => n.ingredients.find((r) => r.quantity !== void 0 && r.unit !== void 0) !== void 0,
      defaultRecipe: un`Mix {flour} with {water}.`,
      title: "Adding Quantity and Units",
      alias: [
        "quantity-and-units"
      ]
    },
    {
      contentMd: un`Great job adding quantity and units!

    Now let's introduce materials. Materials are the tools or equipment needed for your recipe.

    **Task**

    Add a material: Use the ampersand symbol (\`&\`) followed by curly braces to define a material: \`&{}\`.

    **Examples**

    \`\`\`
    &{pan}
    &{blender}
    &{proofing basket}
    \`\`\`
    `,
      validation: (n) => n.materials.length > 0,
      defaultRecipe: un`Mix {flour}(125 gr) with {water}(300 ml).
      Cook in a pan.
    `,
      title: "Adding Materials"
    },
    {
      title: "Adding timers",
      contentMd: un`Now let's add timers to your recipe.
    Timers are used to indicate the time needed for a specific step in your recipe.

    **Task**

    Add a timer: Add the letter \`t\` followed by curly braces to define a timer: \`t{}\`.

    **Example**

    \`\`\`
    t{1 minute}
    \`\`\`

    **Remember**: Timers are used to indicate the time needed for a specific step in your recipe.
    `,
      validation: (n) => n.timers.length > 0,
      defaultRecipe: un`Mix {flour}(125 gr) with {water}(300 ml).
      Cook in a &{pan} for 1 minute.
    `
    },
    {
      contentMd: un`Well done adding materials!

    Now let's add a recipe reference. Recipe references are links to other recipes that you can use in your recipe.

    **Task**

    Add a recipe reference: Use the at symbol (\`@\`) followed by curly braces to define: \`@{}\`.

    **Example**

    \`\`\`
    @{woile/oat-milk}
    \`\`\`

    **Remember**: Recipe references are used to refer to other recipes in Reciperium, and they work just like ingredients,
    so you can add amounts and quantities to them as well.
    `,
      validation: (n) => n.recipes_refs.length > 0,
      defaultRecipe: un`Mix {flour}(125 gr) with woile/oat-milk.
      Cook in a &{pan} for t{1 minute}.
    `,
      title: "Adding Recipe References"
    },
    {
      contentMd: un`Now let's add tags to your recipe. Tags are keywords that help categorize your recipe.

    **Task**

    Add tags: **At the beginning of the recipe**, add \`>>\` followed by \`tags: \` and a space and a comma-separated list of tags.

    **Example**

    \`\`\`
    >> tags: breakfast, vegan, gluten-free
    \`\`\`

    **Remember**: Tags should be descriptive and relevant to your recipe's content.

    **Hint**: What are some possible tags for a pancake recipe? Consider the ingredients, dietary restrictions, or cooking methods
    `,
      validation: (n) => {
        var _a2, _b2;
        return (((_b2 = (_a2 = n.metadata) == null ? void 0 : _a2.get("tags")) == null ? void 0 : _b2.split(",").filter((i) => !!i)) || []).length > 0;
      },
      title: "Adding Tags",
      defaultRecipe: un`Mix {flour}(125 gr) with @{woile/oat-milk}.
      Cook in a &{pan} for t{1 minute}.
    `
    }
  ], pw = Mv.length, gw = "/assets/recipe-parser_bg-lFpNQ4-Q.wasm", yw = async (n = {}, r) => {
    let i;
    if (r.startsWith("data:")) {
      const a = r.replace(/^data:.*?base64,/, "");
      let u;
      if (typeof Buffer == "function" && typeof Buffer.from == "function") u = Buffer.from(a, "base64");
      else if (typeof atob == "function") {
        const s = atob(a);
        u = new Uint8Array(s.length);
        for (let d = 0; d < s.length; d++) u[d] = s.charCodeAt(d);
      } else throw new Error("Cannot decode base64-encoded data URL");
      i = await WebAssembly.instantiate(u, n);
    } else {
      const a = await fetch(r), u = a.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && u.startsWith("application/wasm")) i = await WebAssembly.instantiateStreaming(a, n);
      else {
        const s = await a.arrayBuffer();
        i = await WebAssembly.instantiate(s, n);
      }
    }
    return i.instance.exports;
  };
  function vw(n) {
    const r = Ov(n, sn.__wbindgen_malloc, sn.__wbindgen_realloc), i = pu, a = sn.parse(r, i);
    if (a[2]) throw Pg(a[1]);
    return Pg(a[0]);
  }
  function bw(n, r) {
    return Error(rd(n, r));
  }
  function xw(n, r) {
    const i = zf(r), a = Ov(i, sn.__wbindgen_malloc, sn.__wbindgen_realloc), u = pu;
    Zg().setInt32(n + 4, u, true), Zg().setInt32(n + 0, a, true);
  }
  function Sw(n) {
    return typeof n == "string";
  }
  function ww(n, r) {
    throw new Error(rd(n, r));
  }
  function Ew() {
    return new Object();
  }
  function Cw() {
    return new Array();
  }
  function Aw() {
    return /* @__PURE__ */ new Map();
  }
  function _w(n, r, i) {
    return n.set(r, i);
  }
  function Tw(n, r, i) {
    n[r] = i;
  }
  function Mw(n, r, i) {
    n[r >>> 0] = i;
  }
  function Ow(n) {
    return n;
  }
  function kw(n, r) {
    return rd(n, r);
  }
  function Rw(n) {
    return BigInt.asUintN(64, n);
  }
  function Nw() {
    const n = sn.__wbindgen_externrefs, r = n.grow(4);
    n.set(0, void 0), n.set(r + 0, void 0), n.set(r + 1, null), n.set(r + 2, true), n.set(r + 3, false);
  }
  function zf(n) {
    const r = typeof n;
    if (r == "number" || r == "boolean" || n == null) return `${n}`;
    if (r == "string") return `"${n}"`;
    if (r == "symbol") {
      const u = n.description;
      return u == null ? "Symbol" : `Symbol(${u})`;
    }
    if (r == "function") {
      const u = n.name;
      return typeof u == "string" && u.length > 0 ? `Function(${u})` : "Function";
    }
    if (Array.isArray(n)) {
      const u = n.length;
      let s = "[";
      u > 0 && (s += zf(n[0]));
      for (let d = 1; d < u; d++) s += ", " + zf(n[d]);
      return s += "]", s;
    }
    const i = /\[object ([^\]]+)\]/.exec(toString.call(n));
    let a;
    if (i && i.length > 1) a = i[1];
    else return toString.call(n);
    if (a == "Object") try {
      return "Object(" + JSON.stringify(n) + ")";
    } catch {
      return "Object";
    }
    return n instanceof Error ? `${n.name}: ${n.message}
${n.stack}` : a;
  }
  let Pr = null;
  function Zg() {
    return (Pr === null || Pr.buffer.detached === true || Pr.buffer.detached === void 0 && Pr.buffer !== sn.memory.buffer) && (Pr = new DataView(sn.memory.buffer)), Pr;
  }
  function rd(n, r) {
    return n = n >>> 0, Dw(n, r);
  }
  let Zo = null;
  function ou() {
    return (Zo === null || Zo.byteLength === 0) && (Zo = new Uint8Array(sn.memory.buffer)), Zo;
  }
  function Ov(n, r, i) {
    if (i === void 0) {
      const h = ha.encode(n), p = r(h.length, 1) >>> 0;
      return ou().subarray(p, p + h.length).set(h), pu = h.length, p;
    }
    let a = n.length, u = r(a, 1) >>> 0;
    const s = ou();
    let d = 0;
    for (; d < a; d++) {
      const h = n.charCodeAt(d);
      if (h > 127) break;
      s[u + d] = h;
    }
    if (d !== a) {
      d !== 0 && (n = n.slice(d)), u = i(u, a, a = d + n.length * 3, 1) >>> 0;
      const h = ou().subarray(u + d, u + a), p = ha.encodeInto(n, h);
      d += p.written, u = i(u, a, d, 1) >>> 0;
    }
    return pu = d, u;
  }
  function Pg(n) {
    const r = sn.__wbindgen_externrefs.get(n);
    return sn.__externref_table_dealloc(n), r;
  }
  let uu = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  uu.decode();
  const zw = 2146435072;
  let uf = 0;
  function Dw(n, r) {
    return uf += r, uf >= zw && (uu = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), uu.decode(), uf = r), uu.decode(ou().subarray(n, n + r));
  }
  const ha = new TextEncoder();
  "encodeInto" in ha || (ha.encodeInto = function(n, r) {
    const i = ha.encode(n);
    return r.set(i), {
      read: n.length,
      written: i.length
    };
  });
  let pu = 0, sn;
  function jw(n) {
    sn = n;
  }
  URL = globalThis.URL;
  const nr = await yw({
    "./recipe-parser_bg.js": {
      __wbg_set_3f1d0b984ed272ed: Tw,
      __wbg_new_dca287b076112a51: Aw,
      __wbg_new_3eb36ae241fe6f44: Cw,
      __wbg_new_361308b2356cecd0: Ew,
      __wbg_set_1eb0999cf5d27fc8: _w,
      __wbg_set_f43e577aea94465b: Mw,
      __wbg___wbindgen_throw_be289d5034ed271b: ww,
      __wbg_Error_8c4e43fe74559d73: bw,
      __wbg___wbindgen_is_string_cd444516edc5b180: Sw,
      __wbg___wbindgen_debug_string_0bc8482c6e3508ae: xw,
      __wbindgen_init_externref_table: Nw,
      __wbindgen_cast_0000000000000001: Ow,
      __wbindgen_cast_0000000000000002: kw,
      __wbindgen_cast_0000000000000003: Rw
    }
  }, gw), Lw = nr.memory, Uw = nr.parse, Bw = nr.__wbindgen_malloc, Hw = nr.__wbindgen_realloc, qw = nr.__wbindgen_externrefs, Vw = nr.__externref_table_dealloc, kv = nr.__wbindgen_start, Gw = Object.freeze(Object.defineProperty({
    __proto__: null,
    __externref_table_dealloc: Vw,
    __wbindgen_externrefs: qw,
    __wbindgen_malloc: Bw,
    __wbindgen_realloc: Hw,
    __wbindgen_start: kv,
    memory: Lw,
    parse: Uw
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  jw(Gw);
  kv();
  function Yw(n, r) {
    const i = {};
    return (n[n.length - 1] === "" ? [
      ...n,
      ""
    ] : n).join((i.padRight ? " " : "") + "," + (i.padLeft === false ? "" : " ")).trim();
  }
  const Xw = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Iw = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Qw = {};
  function Jg(n, r) {
    return (Qw.jsx ? Iw : Xw).test(n);
  }
  const Fw = /[ \t\n\f\r]/g;
  function Kw(n) {
    return typeof n == "object" ? n.type === "text" ? Wg(n.value) : false : Wg(n);
  }
  function Wg(n) {
    return n.replace(Fw, "") === "";
  }
  class wa {
    constructor(r, i, a) {
      this.normal = i, this.property = r, a && (this.space = a);
    }
  }
  wa.prototype.normal = {};
  wa.prototype.property = {};
  wa.prototype.space = void 0;
  function Rv(n, r) {
    const i = {}, a = {};
    for (const u of n) Object.assign(i, u.property), Object.assign(a, u.normal);
    return new wa(i, a, r);
  }
  function Df(n) {
    return n.toLowerCase();
  }
  class Lt {
    constructor(r, i) {
      this.attribute = i, this.property = r;
    }
  }
  Lt.prototype.attribute = "";
  Lt.prototype.booleanish = false;
  Lt.prototype.boolean = false;
  Lt.prototype.commaOrSpaceSeparated = false;
  Lt.prototype.commaSeparated = false;
  Lt.prototype.defined = false;
  Lt.prototype.mustUseProperty = false;
  Lt.prototype.number = false;
  Lt.prototype.overloadedBoolean = false;
  Lt.prototype.property = "";
  Lt.prototype.spaceSeparated = false;
  Lt.prototype.space = void 0;
  let Zw = 0;
  const Se = lr(), it = lr(), jf = lr(), ee = lr(), Xe = lr(), li = lr(), It = lr();
  function lr() {
    return 2 ** ++Zw;
  }
  const Lf = Object.freeze(Object.defineProperty({
    __proto__: null,
    boolean: Se,
    booleanish: it,
    commaOrSpaceSeparated: It,
    commaSeparated: li,
    number: ee,
    overloadedBoolean: jf,
    spaceSeparated: Xe
  }, Symbol.toStringTag, {
    value: "Module"
  })), cf = Object.keys(Lf);
  class id extends Lt {
    constructor(r, i, a, u) {
      let s = -1;
      if (super(r, i), $g(this, "space", u), typeof a == "number") for (; ++s < cf.length; ) {
        const d = cf[s];
        $g(this, cf[s], (a & Lf[d]) === Lf[d]);
      }
    }
  }
  id.prototype.defined = true;
  function $g(n, r, i) {
    i && (n[r] = i);
  }
  function ci(n) {
    const r = {}, i = {};
    for (const [a, u] of Object.entries(n.properties)) {
      const s = new id(a, n.transform(n.attributes || {}, a), u, n.space);
      n.mustUseProperty && n.mustUseProperty.includes(a) && (s.mustUseProperty = true), r[a] = s, i[Df(a)] = a, i[Df(s.attribute)] = a;
    }
    return new wa(r, i, n.space);
  }
  const Nv = ci({
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: it,
      ariaAutoComplete: null,
      ariaBusy: it,
      ariaChecked: it,
      ariaColCount: ee,
      ariaColIndex: ee,
      ariaColSpan: ee,
      ariaControls: Xe,
      ariaCurrent: null,
      ariaDescribedBy: Xe,
      ariaDetails: null,
      ariaDisabled: it,
      ariaDropEffect: Xe,
      ariaErrorMessage: null,
      ariaExpanded: it,
      ariaFlowTo: Xe,
      ariaGrabbed: it,
      ariaHasPopup: null,
      ariaHidden: it,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: Xe,
      ariaLevel: ee,
      ariaLive: null,
      ariaModal: it,
      ariaMultiLine: it,
      ariaMultiSelectable: it,
      ariaOrientation: null,
      ariaOwns: Xe,
      ariaPlaceholder: null,
      ariaPosInSet: ee,
      ariaPressed: it,
      ariaReadOnly: it,
      ariaRelevant: null,
      ariaRequired: it,
      ariaRoleDescription: Xe,
      ariaRowCount: ee,
      ariaRowIndex: ee,
      ariaRowSpan: ee,
      ariaSelected: it,
      ariaSetSize: ee,
      ariaSort: null,
      ariaValueMax: ee,
      ariaValueMin: ee,
      ariaValueNow: ee,
      ariaValueText: null,
      role: null
    },
    transform(n, r) {
      return r === "role" ? r : "aria-" + r.slice(4).toLowerCase();
    }
  });
  function zv(n, r) {
    return r in n ? n[r] : r;
  }
  function Dv(n, r) {
    return zv(n, r.toLowerCase());
  }
  const Pw = ci({
    attributes: {
      acceptcharset: "accept-charset",
      classname: "class",
      htmlfor: "for",
      httpequiv: "http-equiv"
    },
    mustUseProperty: [
      "checked",
      "multiple",
      "muted",
      "selected"
    ],
    properties: {
      abbr: null,
      accept: li,
      acceptCharset: Xe,
      accessKey: Xe,
      action: null,
      allow: null,
      allowFullScreen: Se,
      allowPaymentRequest: Se,
      allowUserMedia: Se,
      alt: null,
      as: null,
      async: Se,
      autoCapitalize: null,
      autoComplete: Xe,
      autoFocus: Se,
      autoPlay: Se,
      blocking: Xe,
      capture: null,
      charSet: null,
      checked: Se,
      cite: null,
      className: Xe,
      cols: ee,
      colSpan: null,
      content: null,
      contentEditable: it,
      controls: Se,
      controlsList: Xe,
      coords: ee | li,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: Se,
      defer: Se,
      dir: null,
      dirName: null,
      disabled: Se,
      download: jf,
      draggable: it,
      encType: null,
      enterKeyHint: null,
      fetchPriority: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: Se,
      formTarget: null,
      headers: Xe,
      height: ee,
      hidden: jf,
      high: ee,
      href: null,
      hrefLang: null,
      htmlFor: Xe,
      httpEquiv: Xe,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inert: Se,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: Se,
      itemId: null,
      itemProp: Xe,
      itemRef: Xe,
      itemScope: Se,
      itemType: Xe,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: Se,
      low: ee,
      manifest: null,
      max: null,
      maxLength: ee,
      media: null,
      method: null,
      min: null,
      minLength: ee,
      multiple: Se,
      muted: Se,
      name: null,
      nonce: null,
      noModule: Se,
      noValidate: Se,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforeMatch: null,
      onBeforePrint: null,
      onBeforeToggle: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextLost: null,
      onContextMenu: null,
      onContextRestored: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onScrollEnd: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: Se,
      optimum: ee,
      pattern: null,
      ping: Xe,
      placeholder: null,
      playsInline: Se,
      popover: null,
      popoverTarget: null,
      popoverTargetAction: null,
      poster: null,
      preload: null,
      readOnly: Se,
      referrerPolicy: null,
      rel: Xe,
      required: Se,
      reversed: Se,
      rows: ee,
      rowSpan: ee,
      sandbox: Xe,
      scope: null,
      scoped: Se,
      seamless: Se,
      selected: Se,
      shadowRootClonable: Se,
      shadowRootDelegatesFocus: Se,
      shadowRootMode: null,
      shape: null,
      size: ee,
      sizes: null,
      slot: null,
      span: ee,
      spellCheck: it,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: ee,
      step: null,
      style: null,
      tabIndex: ee,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: Se,
      useMap: null,
      value: it,
      width: ee,
      wrap: null,
      writingSuggestions: null,
      align: null,
      aLink: null,
      archive: Xe,
      axis: null,
      background: null,
      bgColor: null,
      border: ee,
      borderColor: null,
      bottomMargin: ee,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: Se,
      declare: Se,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: ee,
      leftMargin: ee,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: ee,
      marginWidth: ee,
      noResize: Se,
      noHref: Se,
      noShade: Se,
      noWrap: Se,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: ee,
      rules: null,
      scheme: null,
      scrolling: it,
      standby: null,
      summary: null,
      text: null,
      topMargin: ee,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: ee,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: Se,
      disableRemotePlayback: Se,
      prefix: null,
      property: null,
      results: ee,
      security: null,
      unselectable: null
    },
    space: "html",
    transform: Dv
  }), Jw = ci({
    attributes: {
      accentHeight: "accent-height",
      alignmentBaseline: "alignment-baseline",
      arabicForm: "arabic-form",
      baselineShift: "baseline-shift",
      capHeight: "cap-height",
      className: "class",
      clipPath: "clip-path",
      clipRule: "clip-rule",
      colorInterpolation: "color-interpolation",
      colorInterpolationFilters: "color-interpolation-filters",
      colorProfile: "color-profile",
      colorRendering: "color-rendering",
      crossOrigin: "crossorigin",
      dataType: "datatype",
      dominantBaseline: "dominant-baseline",
      enableBackground: "enable-background",
      fillOpacity: "fill-opacity",
      fillRule: "fill-rule",
      floodColor: "flood-color",
      floodOpacity: "flood-opacity",
      fontFamily: "font-family",
      fontSize: "font-size",
      fontSizeAdjust: "font-size-adjust",
      fontStretch: "font-stretch",
      fontStyle: "font-style",
      fontVariant: "font-variant",
      fontWeight: "font-weight",
      glyphName: "glyph-name",
      glyphOrientationHorizontal: "glyph-orientation-horizontal",
      glyphOrientationVertical: "glyph-orientation-vertical",
      hrefLang: "hreflang",
      horizAdvX: "horiz-adv-x",
      horizOriginX: "horiz-origin-x",
      horizOriginY: "horiz-origin-y",
      imageRendering: "image-rendering",
      letterSpacing: "letter-spacing",
      lightingColor: "lighting-color",
      markerEnd: "marker-end",
      markerMid: "marker-mid",
      markerStart: "marker-start",
      navDown: "nav-down",
      navDownLeft: "nav-down-left",
      navDownRight: "nav-down-right",
      navLeft: "nav-left",
      navNext: "nav-next",
      navPrev: "nav-prev",
      navRight: "nav-right",
      navUp: "nav-up",
      navUpLeft: "nav-up-left",
      navUpRight: "nav-up-right",
      onAbort: "onabort",
      onActivate: "onactivate",
      onAfterPrint: "onafterprint",
      onBeforePrint: "onbeforeprint",
      onBegin: "onbegin",
      onCancel: "oncancel",
      onCanPlay: "oncanplay",
      onCanPlayThrough: "oncanplaythrough",
      onChange: "onchange",
      onClick: "onclick",
      onClose: "onclose",
      onCopy: "oncopy",
      onCueChange: "oncuechange",
      onCut: "oncut",
      onDblClick: "ondblclick",
      onDrag: "ondrag",
      onDragEnd: "ondragend",
      onDragEnter: "ondragenter",
      onDragExit: "ondragexit",
      onDragLeave: "ondragleave",
      onDragOver: "ondragover",
      onDragStart: "ondragstart",
      onDrop: "ondrop",
      onDurationChange: "ondurationchange",
      onEmptied: "onemptied",
      onEnd: "onend",
      onEnded: "onended",
      onError: "onerror",
      onFocus: "onfocus",
      onFocusIn: "onfocusin",
      onFocusOut: "onfocusout",
      onHashChange: "onhashchange",
      onInput: "oninput",
      onInvalid: "oninvalid",
      onKeyDown: "onkeydown",
      onKeyPress: "onkeypress",
      onKeyUp: "onkeyup",
      onLoad: "onload",
      onLoadedData: "onloadeddata",
      onLoadedMetadata: "onloadedmetadata",
      onLoadStart: "onloadstart",
      onMessage: "onmessage",
      onMouseDown: "onmousedown",
      onMouseEnter: "onmouseenter",
      onMouseLeave: "onmouseleave",
      onMouseMove: "onmousemove",
      onMouseOut: "onmouseout",
      onMouseOver: "onmouseover",
      onMouseUp: "onmouseup",
      onMouseWheel: "onmousewheel",
      onOffline: "onoffline",
      onOnline: "ononline",
      onPageHide: "onpagehide",
      onPageShow: "onpageshow",
      onPaste: "onpaste",
      onPause: "onpause",
      onPlay: "onplay",
      onPlaying: "onplaying",
      onPopState: "onpopstate",
      onProgress: "onprogress",
      onRateChange: "onratechange",
      onRepeat: "onrepeat",
      onReset: "onreset",
      onResize: "onresize",
      onScroll: "onscroll",
      onSeeked: "onseeked",
      onSeeking: "onseeking",
      onSelect: "onselect",
      onShow: "onshow",
      onStalled: "onstalled",
      onStorage: "onstorage",
      onSubmit: "onsubmit",
      onSuspend: "onsuspend",
      onTimeUpdate: "ontimeupdate",
      onToggle: "ontoggle",
      onUnload: "onunload",
      onVolumeChange: "onvolumechange",
      onWaiting: "onwaiting",
      onZoom: "onzoom",
      overlinePosition: "overline-position",
      overlineThickness: "overline-thickness",
      paintOrder: "paint-order",
      panose1: "panose-1",
      pointerEvents: "pointer-events",
      referrerPolicy: "referrerpolicy",
      renderingIntent: "rendering-intent",
      shapeRendering: "shape-rendering",
      stopColor: "stop-color",
      stopOpacity: "stop-opacity",
      strikethroughPosition: "strikethrough-position",
      strikethroughThickness: "strikethrough-thickness",
      strokeDashArray: "stroke-dasharray",
      strokeDashOffset: "stroke-dashoffset",
      strokeLineCap: "stroke-linecap",
      strokeLineJoin: "stroke-linejoin",
      strokeMiterLimit: "stroke-miterlimit",
      strokeOpacity: "stroke-opacity",
      strokeWidth: "stroke-width",
      tabIndex: "tabindex",
      textAnchor: "text-anchor",
      textDecoration: "text-decoration",
      textRendering: "text-rendering",
      transformOrigin: "transform-origin",
      typeOf: "typeof",
      underlinePosition: "underline-position",
      underlineThickness: "underline-thickness",
      unicodeBidi: "unicode-bidi",
      unicodeRange: "unicode-range",
      unitsPerEm: "units-per-em",
      vAlphabetic: "v-alphabetic",
      vHanging: "v-hanging",
      vIdeographic: "v-ideographic",
      vMathematical: "v-mathematical",
      vectorEffect: "vector-effect",
      vertAdvY: "vert-adv-y",
      vertOriginX: "vert-origin-x",
      vertOriginY: "vert-origin-y",
      wordSpacing: "word-spacing",
      writingMode: "writing-mode",
      xHeight: "x-height",
      playbackOrder: "playbackorder",
      timelineBegin: "timelinebegin"
    },
    properties: {
      about: It,
      accentHeight: ee,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: ee,
      amplitude: ee,
      arabicForm: null,
      ascent: ee,
      attributeName: null,
      attributeType: null,
      azimuth: ee,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: ee,
      by: null,
      calcMode: null,
      capHeight: ee,
      className: Xe,
      clip: null,
      clipPath: null,
      clipPathUnits: null,
      clipRule: null,
      color: null,
      colorInterpolation: null,
      colorInterpolationFilters: null,
      colorProfile: null,
      colorRendering: null,
      content: null,
      contentScriptType: null,
      contentStyleType: null,
      crossOrigin: null,
      cursor: null,
      cx: null,
      cy: null,
      d: null,
      dataType: null,
      defaultAction: null,
      descent: ee,
      diffuseConstant: ee,
      direction: null,
      display: null,
      dur: null,
      divisor: ee,
      dominantBaseline: null,
      download: Se,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: ee,
      enableBackground: null,
      end: null,
      event: null,
      exponent: ee,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: ee,
      fillRule: null,
      filter: null,
      filterRes: null,
      filterUnits: null,
      floodColor: null,
      floodOpacity: null,
      focusable: null,
      focusHighlight: null,
      fontFamily: null,
      fontSize: null,
      fontSizeAdjust: null,
      fontStretch: null,
      fontStyle: null,
      fontVariant: null,
      fontWeight: null,
      format: null,
      fr: null,
      from: null,
      fx: null,
      fy: null,
      g1: li,
      g2: li,
      glyphName: li,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: ee,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: ee,
      horizOriginX: ee,
      horizOriginY: ee,
      id: null,
      ideographic: ee,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: ee,
      k: ee,
      k1: ee,
      k2: ee,
      k3: ee,
      k4: ee,
      kernelMatrix: It,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: ee,
      local: null,
      markerEnd: null,
      markerMid: null,
      markerStart: null,
      markerHeight: null,
      markerUnits: null,
      markerWidth: null,
      mask: null,
      maskContentUnits: null,
      maskUnits: null,
      mathematical: null,
      max: null,
      media: null,
      mediaCharacterEncoding: null,
      mediaContentEncodings: null,
      mediaSize: ee,
      mediaTime: null,
      method: null,
      min: null,
      mode: null,
      name: null,
      navDown: null,
      navDownLeft: null,
      navDownRight: null,
      navLeft: null,
      navNext: null,
      navPrev: null,
      navRight: null,
      navUp: null,
      navUpLeft: null,
      navUpRight: null,
      numOctaves: null,
      observer: null,
      offset: null,
      onAbort: null,
      onActivate: null,
      onAfterPrint: null,
      onBeforePrint: null,
      onBegin: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnd: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFocusIn: null,
      onFocusOut: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadStart: null,
      onMessage: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onMouseWheel: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRepeat: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onShow: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onZoom: null,
      opacity: null,
      operator: null,
      order: null,
      orient: null,
      orientation: null,
      origin: null,
      overflow: null,
      overlay: null,
      overlinePosition: ee,
      overlineThickness: ee,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: ee,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: Xe,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: ee,
      pointsAtY: ee,
      pointsAtZ: ee,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: It,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: It,
      rev: It,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: It,
      requiredFeatures: It,
      requiredFonts: It,
      requiredFormats: It,
      resource: null,
      restart: null,
      result: null,
      rotate: null,
      rx: null,
      ry: null,
      scale: null,
      seed: null,
      shapeRendering: null,
      side: null,
      slope: null,
      snapshotTime: null,
      specularConstant: ee,
      specularExponent: ee,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: ee,
      strikethroughThickness: ee,
      string: null,
      stroke: null,
      strokeDashArray: It,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: ee,
      strokeOpacity: ee,
      strokeWidth: null,
      style: null,
      surfaceScale: ee,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: It,
      tabIndex: ee,
      tableValues: null,
      target: null,
      targetX: ee,
      targetY: ee,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: It,
      to: null,
      transform: null,
      transformOrigin: null,
      u1: null,
      u2: null,
      underlinePosition: ee,
      underlineThickness: ee,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: ee,
      values: null,
      vAlphabetic: ee,
      vMathematical: ee,
      vectorEffect: null,
      vHanging: ee,
      vIdeographic: ee,
      version: null,
      vertAdvY: ee,
      vertOriginX: ee,
      vertOriginY: ee,
      viewBox: null,
      viewTarget: null,
      visibility: null,
      width: null,
      widths: null,
      wordSpacing: null,
      writingMode: null,
      x: null,
      x1: null,
      x2: null,
      xChannelSelector: null,
      xHeight: ee,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null
    },
    space: "svg",
    transform: zv
  }), jv = ci({
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null
    },
    space: "xlink",
    transform(n, r) {
      return "xlink:" + r.slice(5).toLowerCase();
    }
  }), Lv = ci({
    attributes: {
      xmlnsxlink: "xmlns:xlink"
    },
    properties: {
      xmlnsXLink: null,
      xmlns: null
    },
    space: "xmlns",
    transform: Dv
  }), Uv = ci({
    properties: {
      xmlBase: null,
      xmlLang: null,
      xmlSpace: null
    },
    space: "xml",
    transform(n, r) {
      return "xml:" + r.slice(3).toLowerCase();
    }
  }), Ww = {
    classId: "classID",
    dataType: "datatype",
    itemId: "itemID",
    strokeDashArray: "strokeDasharray",
    strokeDashOffset: "strokeDashoffset",
    strokeLineCap: "strokeLinecap",
    strokeLineJoin: "strokeLinejoin",
    strokeMiterLimit: "strokeMiterlimit",
    typeOf: "typeof",
    xLinkActuate: "xlinkActuate",
    xLinkArcRole: "xlinkArcrole",
    xLinkHref: "xlinkHref",
    xLinkRole: "xlinkRole",
    xLinkShow: "xlinkShow",
    xLinkTitle: "xlinkTitle",
    xLinkType: "xlinkType",
    xmlnsXLink: "xmlnsXlink"
  }, $w = /[A-Z]/g, ey = /-[a-z]/g, eE = /^data[-\w.:]+$/i;
  function tE(n, r) {
    const i = Df(r);
    let a = r, u = Lt;
    if (i in n.normal) return n.property[n.normal[i]];
    if (i.length > 4 && i.slice(0, 4) === "data" && eE.test(r)) {
      if (r.charAt(4) === "-") {
        const s = r.slice(5).replace(ey, lE);
        a = "data" + s.charAt(0).toUpperCase() + s.slice(1);
      } else {
        const s = r.slice(4);
        if (!ey.test(s)) {
          let d = s.replace($w, nE);
          d.charAt(0) !== "-" && (d = "-" + d), r = "data" + d;
        }
      }
      u = id;
    }
    return new u(a, r);
  }
  function nE(n) {
    return "-" + n.toLowerCase();
  }
  function lE(n) {
    return n.charAt(1).toUpperCase();
  }
  const rE = Rv([
    Nv,
    Pw,
    jv,
    Lv,
    Uv
  ], "html"), ad = Rv([
    Nv,
    Jw,
    jv,
    Lv,
    Uv
  ], "svg");
  function iE(n) {
    return n.join(" ").trim();
  }
  var Jr = {}, sf, ty;
  function aE() {
    if (ty) return sf;
    ty = 1;
    var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, r = /\n/g, i = /^\s*/, a = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, u = /^:\s*/, s = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, d = /^[;\s]*/, h = /^\s+|\s+$/g, p = `
`, m = "/", g = "*", y = "", x = "comment", b = "declaration";
    function T(k, O) {
      if (typeof k != "string") throw new TypeError("First argument must be a string");
      if (!k) return [];
      O = O || {};
      var V = 1, j = 1;
      function G(ne) {
        var P = ne.match(r);
        P && (V += P.length);
        var N = ne.lastIndexOf(p);
        j = ~N ? ne.length - N : j + ne.length;
      }
      function J() {
        var ne = {
          line: V,
          column: j
        };
        return function(P) {
          return P.position = new D(ne), re(), P;
        };
      }
      function D(ne) {
        this.start = ne, this.end = {
          line: V,
          column: j
        }, this.source = O.source;
      }
      D.prototype.content = k;
      function Z(ne) {
        var P = new Error(O.source + ":" + V + ":" + j + ": " + ne);
        if (P.reason = ne, P.filename = O.source, P.line = V, P.column = j, P.source = k, !O.silent) throw P;
      }
      function X(ne) {
        var P = ne.exec(k);
        if (P) {
          var N = P[0];
          return G(N), k = k.slice(N.length), P;
        }
      }
      function re() {
        X(i);
      }
      function ie(ne) {
        var P;
        for (ne = ne || []; P = te(); ) P !== false && ne.push(P);
        return ne;
      }
      function te() {
        var ne = J();
        if (!(m != k.charAt(0) || g != k.charAt(1))) {
          for (var P = 2; y != k.charAt(P) && (g != k.charAt(P) || m != k.charAt(P + 1)); ) ++P;
          if (P += 2, y === k.charAt(P - 1)) return Z("End of comment missing");
          var N = k.slice(2, P - 2);
          return j += 2, G(N), k = k.slice(P), j += 2, ne({
            type: x,
            comment: N
          });
        }
      }
      function W() {
        var ne = J(), P = X(a);
        if (P) {
          if (te(), !X(u)) return Z("property missing ':'");
          var N = X(s), Q = ne({
            type: b,
            property: C(P[0].replace(n, y)),
            value: N ? C(N[0].replace(n, y)) : y
          });
          return X(d), Q;
        }
      }
      function se() {
        var ne = [];
        ie(ne);
        for (var P; P = W(); ) P !== false && (ne.push(P), ie(ne));
        return ne;
      }
      return re(), se();
    }
    function C(k) {
      return k ? k.replace(h, y) : y;
    }
    return sf = T, sf;
  }
  var ny;
  function oE() {
    if (ny) return Jr;
    ny = 1;
    var n = Jr && Jr.__importDefault || function(a) {
      return a && a.__esModule ? a : {
        default: a
      };
    };
    Object.defineProperty(Jr, "__esModule", {
      value: true
    }), Jr.default = i;
    const r = n(aE());
    function i(a, u) {
      let s = null;
      if (!a || typeof a != "string") return s;
      const d = (0, r.default)(a), h = typeof u == "function";
      return d.forEach((p) => {
        if (p.type !== "declaration") return;
        const { property: m, value: g } = p;
        h ? u(m, g, p) : g && (s = s || {}, s[m] = g);
      }), s;
    }
    return Jr;
  }
  var aa = {}, ly;
  function uE() {
    if (ly) return aa;
    ly = 1, Object.defineProperty(aa, "__esModule", {
      value: true
    }), aa.camelCase = void 0;
    var n = /^--[a-zA-Z0-9_-]+$/, r = /-([a-z])/g, i = /^[^-]+$/, a = /^-(webkit|moz|ms|o|khtml)-/, u = /^-(ms)-/, s = function(m) {
      return !m || i.test(m) || n.test(m);
    }, d = function(m, g) {
      return g.toUpperCase();
    }, h = function(m, g) {
      return "".concat(g, "-");
    }, p = function(m, g) {
      return g === void 0 && (g = {}), s(m) ? m : (m = m.toLowerCase(), g.reactCompat ? m = m.replace(u, h) : m = m.replace(a, h), m.replace(r, d));
    };
    return aa.camelCase = p, aa;
  }
  var oa, ry;
  function cE() {
    if (ry) return oa;
    ry = 1;
    var n = oa && oa.__importDefault || function(u) {
      return u && u.__esModule ? u : {
        default: u
      };
    }, r = n(oE()), i = uE();
    function a(u, s) {
      var d = {};
      return !u || typeof u != "string" || (0, r.default)(u, function(h, p) {
        h && p && (d[(0, i.camelCase)(h, s)] = p);
      }), d;
    }
    return a.default = a, oa = a, oa;
  }
  var sE = cE();
  const fE = ed(sE), Bv = Hv("end"), od = Hv("start");
  function Hv(n) {
    return r;
    function r(i) {
      const a = i && i.position && i.position[n] || {};
      if (typeof a.line == "number" && a.line > 0 && typeof a.column == "number" && a.column > 0) return {
        line: a.line,
        column: a.column,
        offset: typeof a.offset == "number" && a.offset > -1 ? a.offset : void 0
      };
    }
  }
  function dE(n) {
    const r = od(n), i = Bv(n);
    if (r && i) return {
      start: r,
      end: i
    };
  }
  function ma(n) {
    return !n || typeof n != "object" ? "" : "position" in n || "type" in n ? iy(n.position) : "start" in n || "end" in n ? iy(n) : "line" in n || "column" in n ? Uf(n) : "";
  }
  function Uf(n) {
    return ay(n && n.line) + ":" + ay(n && n.column);
  }
  function iy(n) {
    return Uf(n && n.start) + "-" + Uf(n && n.end);
  }
  function ay(n) {
    return n && typeof n == "number" ? n : 1;
  }
  class vt extends Error {
    constructor(r, i, a) {
      super(), typeof i == "string" && (a = i, i = void 0);
      let u = "", s = {}, d = false;
      if (i && ("line" in i && "column" in i ? s = {
        place: i
      } : "start" in i && "end" in i ? s = {
        place: i
      } : "type" in i ? s = {
        ancestors: [
          i
        ],
        place: i.position
      } : s = {
        ...i
      }), typeof r == "string" ? u = r : !s.cause && r && (d = true, u = r.message, s.cause = r), !s.ruleId && !s.source && typeof a == "string") {
        const p = a.indexOf(":");
        p === -1 ? s.ruleId = a : (s.source = a.slice(0, p), s.ruleId = a.slice(p + 1));
      }
      if (!s.place && s.ancestors && s.ancestors) {
        const p = s.ancestors[s.ancestors.length - 1];
        p && (s.place = p.position);
      }
      const h = s.place && "start" in s.place ? s.place.start : s.place;
      this.ancestors = s.ancestors || void 0, this.cause = s.cause || void 0, this.column = h ? h.column : void 0, this.fatal = void 0, this.file = "", this.message = u, this.line = h ? h.line : void 0, this.name = ma(s.place) || "1:1", this.place = s.place || void 0, this.reason = this.message, this.ruleId = s.ruleId || void 0, this.source = s.source || void 0, this.stack = d && s.cause && typeof s.cause.stack == "string" ? s.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
    }
  }
  vt.prototype.file = "";
  vt.prototype.name = "";
  vt.prototype.reason = "";
  vt.prototype.message = "";
  vt.prototype.stack = "";
  vt.prototype.column = void 0;
  vt.prototype.line = void 0;
  vt.prototype.ancestors = void 0;
  vt.prototype.cause = void 0;
  vt.prototype.fatal = void 0;
  vt.prototype.place = void 0;
  vt.prototype.ruleId = void 0;
  vt.prototype.source = void 0;
  const ud = {}.hasOwnProperty, hE = /* @__PURE__ */ new Map(), mE = /[A-Z]/g, pE = /* @__PURE__ */ new Set([
    "table",
    "tbody",
    "thead",
    "tfoot",
    "tr"
  ]), gE = /* @__PURE__ */ new Set([
    "td",
    "th"
  ]), qv = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
  function yE(n, r) {
    if (!r || r.Fragment === void 0) throw new TypeError("Expected `Fragment` in options");
    const i = r.filePath || void 0;
    let a;
    if (r.development) {
      if (typeof r.jsxDEV != "function") throw new TypeError("Expected `jsxDEV` in options when `development: true`");
      a = AE(i, r.jsxDEV);
    } else {
      if (typeof r.jsx != "function") throw new TypeError("Expected `jsx` in production options");
      if (typeof r.jsxs != "function") throw new TypeError("Expected `jsxs` in production options");
      a = CE(i, r.jsx, r.jsxs);
    }
    const u = {
      Fragment: r.Fragment,
      ancestors: [],
      components: r.components || {},
      create: a,
      elementAttributeNameCase: r.elementAttributeNameCase || "react",
      evaluater: r.createEvaluater ? r.createEvaluater() : void 0,
      filePath: i,
      ignoreInvalidStyle: r.ignoreInvalidStyle || false,
      passKeys: r.passKeys !== false,
      passNode: r.passNode || false,
      schema: r.space === "svg" ? ad : rE,
      stylePropertyNameCase: r.stylePropertyNameCase || "dom",
      tableCellAlignToStyle: r.tableCellAlignToStyle !== false
    }, s = Vv(u, n, void 0);
    return s && typeof s != "string" ? s : u.create(n, u.Fragment, {
      children: s || void 0
    }, void 0);
  }
  function Vv(n, r, i) {
    if (r.type === "element") return vE(n, r, i);
    if (r.type === "mdxFlowExpression" || r.type === "mdxTextExpression") return bE(n, r);
    if (r.type === "mdxJsxFlowElement" || r.type === "mdxJsxTextElement") return SE(n, r, i);
    if (r.type === "mdxjsEsm") return xE(n, r);
    if (r.type === "root") return wE(n, r, i);
    if (r.type === "text") return EE(n, r);
  }
  function vE(n, r, i) {
    const a = n.schema;
    let u = a;
    r.tagName.toLowerCase() === "svg" && a.space === "html" && (u = ad, n.schema = u), n.ancestors.push(r);
    const s = Yv(n, r.tagName, false), d = _E(n, r);
    let h = sd(n, r);
    return pE.has(r.tagName) && (h = h.filter(function(p) {
      return typeof p == "string" ? !Kw(p) : true;
    })), Gv(n, d, s, r), cd(d, h), n.ancestors.pop(), n.schema = a, n.create(r, s, d, i);
  }
  function bE(n, r) {
    if (r.data && r.data.estree && n.evaluater) {
      const a = r.data.estree.body[0];
      return a.type, n.evaluater.evaluateExpression(a.expression);
    }
    ya(n, r.position);
  }
  function xE(n, r) {
    if (r.data && r.data.estree && n.evaluater) return n.evaluater.evaluateProgram(r.data.estree);
    ya(n, r.position);
  }
  function SE(n, r, i) {
    const a = n.schema;
    let u = a;
    r.name === "svg" && a.space === "html" && (u = ad, n.schema = u), n.ancestors.push(r);
    const s = r.name === null ? n.Fragment : Yv(n, r.name, true), d = TE(n, r), h = sd(n, r);
    return Gv(n, d, s, r), cd(d, h), n.ancestors.pop(), n.schema = a, n.create(r, s, d, i);
  }
  function wE(n, r, i) {
    const a = {};
    return cd(a, sd(n, r)), n.create(r, n.Fragment, a, i);
  }
  function EE(n, r) {
    return r.value;
  }
  function Gv(n, r, i, a) {
    typeof i != "string" && i !== n.Fragment && n.passNode && (r.node = a);
  }
  function cd(n, r) {
    if (r.length > 0) {
      const i = r.length > 1 ? r : r[0];
      i && (n.children = i);
    }
  }
  function CE(n, r, i) {
    return a;
    function a(u, s, d, h) {
      const m = Array.isArray(d.children) ? i : r;
      return h ? m(s, d, h) : m(s, d);
    }
  }
  function AE(n, r) {
    return i;
    function i(a, u, s, d) {
      const h = Array.isArray(s.children), p = od(a);
      return r(u, s, d, h, {
        columnNumber: p ? p.column - 1 : void 0,
        fileName: n,
        lineNumber: p ? p.line : void 0
      }, void 0);
    }
  }
  function _E(n, r) {
    const i = {};
    let a, u;
    for (u in r.properties) if (u !== "children" && ud.call(r.properties, u)) {
      const s = ME(n, u, r.properties[u]);
      if (s) {
        const [d, h] = s;
        n.tableCellAlignToStyle && d === "align" && typeof h == "string" && gE.has(r.tagName) ? a = h : i[d] = h;
      }
    }
    if (a) {
      const s = i.style || (i.style = {});
      s[n.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = a;
    }
    return i;
  }
  function TE(n, r) {
    const i = {};
    for (const a of r.attributes) if (a.type === "mdxJsxExpressionAttribute") if (a.data && a.data.estree && n.evaluater) {
      const s = a.data.estree.body[0];
      s.type;
      const d = s.expression;
      d.type;
      const h = d.properties[0];
      h.type, Object.assign(i, n.evaluater.evaluateExpression(h.argument));
    } else ya(n, r.position);
    else {
      const u = a.name;
      let s;
      if (a.value && typeof a.value == "object") if (a.value.data && a.value.data.estree && n.evaluater) {
        const h = a.value.data.estree.body[0];
        h.type, s = n.evaluater.evaluateExpression(h.expression);
      } else ya(n, r.position);
      else s = a.value === null ? true : a.value;
      i[u] = s;
    }
    return i;
  }
  function sd(n, r) {
    const i = [];
    let a = -1;
    const u = n.passKeys ? /* @__PURE__ */ new Map() : hE;
    for (; ++a < r.children.length; ) {
      const s = r.children[a];
      let d;
      if (n.passKeys) {
        const p = s.type === "element" ? s.tagName : s.type === "mdxJsxFlowElement" || s.type === "mdxJsxTextElement" ? s.name : void 0;
        if (p) {
          const m = u.get(p) || 0;
          d = p + "-" + m, u.set(p, m + 1);
        }
      }
      const h = Vv(n, s, d);
      h !== void 0 && i.push(h);
    }
    return i;
  }
  function ME(n, r, i) {
    const a = tE(n.schema, r);
    if (!(i == null || typeof i == "number" && Number.isNaN(i))) {
      if (Array.isArray(i) && (i = a.commaSeparated ? Yw(i) : iE(i)), a.property === "style") {
        let u = typeof i == "object" ? i : OE(n, String(i));
        return n.stylePropertyNameCase === "css" && (u = kE(u)), [
          "style",
          u
        ];
      }
      return [
        n.elementAttributeNameCase === "react" && a.space ? Ww[a.property] || a.property : a.attribute,
        i
      ];
    }
  }
  function OE(n, r) {
    try {
      return fE(r, {
        reactCompat: true
      });
    } catch (i) {
      if (n.ignoreInvalidStyle) return {};
      const a = i, u = new vt("Cannot parse `style` attribute", {
        ancestors: n.ancestors,
        cause: a,
        ruleId: "style",
        source: "hast-util-to-jsx-runtime"
      });
      throw u.file = n.filePath || void 0, u.url = qv + "#cannot-parse-style-attribute", u;
    }
  }
  function Yv(n, r, i) {
    let a;
    if (!i) a = {
      type: "Literal",
      value: r
    };
    else if (r.includes(".")) {
      const u = r.split(".");
      let s = -1, d;
      for (; ++s < u.length; ) {
        const h = Jg(u[s]) ? {
          type: "Identifier",
          name: u[s]
        } : {
          type: "Literal",
          value: u[s]
        };
        d = d ? {
          type: "MemberExpression",
          object: d,
          property: h,
          computed: !!(s && h.type === "Literal"),
          optional: false
        } : h;
      }
      a = d;
    } else a = Jg(r) && !/^[a-z]/.test(r) ? {
      type: "Identifier",
      name: r
    } : {
      type: "Literal",
      value: r
    };
    if (a.type === "Literal") {
      const u = a.value;
      return ud.call(n.components, u) ? n.components[u] : u;
    }
    if (n.evaluater) return n.evaluater.evaluateExpression(a);
    ya(n);
  }
  function ya(n, r) {
    const i = new vt("Cannot handle MDX estrees without `createEvaluater`", {
      ancestors: n.ancestors,
      place: r,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    });
    throw i.file = n.filePath || void 0, i.url = qv + "#cannot-handle-mdx-estrees-without-createevaluater", i;
  }
  function kE(n) {
    const r = {};
    let i;
    for (i in n) ud.call(n, i) && (r[RE(i)] = n[i]);
    return r;
  }
  function RE(n) {
    let r = n.replace(mE, NE);
    return r.slice(0, 3) === "ms-" && (r = "-" + r), r;
  }
  function NE(n) {
    return "-" + n.toLowerCase();
  }
  const ff = {
    action: [
      "form"
    ],
    cite: [
      "blockquote",
      "del",
      "ins",
      "q"
    ],
    data: [
      "object"
    ],
    formAction: [
      "button",
      "input"
    ],
    href: [
      "a",
      "area",
      "base",
      "link"
    ],
    icon: [
      "menuitem"
    ],
    itemId: null,
    manifest: [
      "html"
    ],
    ping: [
      "a",
      "area"
    ],
    poster: [
      "video"
    ],
    src: [
      "audio",
      "embed",
      "iframe",
      "img",
      "input",
      "script",
      "source",
      "track",
      "video"
    ]
  }, zE = {};
  function DE(n, r) {
    const i = zE, a = typeof i.includeImageAlt == "boolean" ? i.includeImageAlt : true, u = typeof i.includeHtml == "boolean" ? i.includeHtml : true;
    return Xv(n, a, u);
  }
  function Xv(n, r, i) {
    if (jE(n)) {
      if ("value" in n) return n.type === "html" && !i ? "" : n.value;
      if (r && "alt" in n && n.alt) return n.alt;
      if ("children" in n) return oy(n.children, r, i);
    }
    return Array.isArray(n) ? oy(n, r, i) : "";
  }
  function oy(n, r, i) {
    const a = [];
    let u = -1;
    for (; ++u < n.length; ) a[u] = Xv(n[u], r, i);
    return a.join("");
  }
  function jE(n) {
    return !!(n && typeof n == "object");
  }
  const uy = document.createElement("i");
  function fd(n) {
    const r = "&" + n + ";";
    uy.innerHTML = r;
    const i = uy.textContent;
    return i.charCodeAt(i.length - 1) === 59 && n !== "semi" || i === r ? false : i;
  }
  function Tn(n, r, i, a) {
    const u = n.length;
    let s = 0, d;
    if (r < 0 ? r = -r > u ? 0 : u + r : r = r > u ? u : r, i = i > 0 ? i : 0, a.length < 1e4) d = Array.from(a), d.unshift(r, i), n.splice(...d);
    else for (i && n.splice(r, i); s < a.length; ) d = a.slice(s, s + 1e4), d.unshift(r, 0), n.splice(...d), s += 1e4, r += 1e4;
  }
  function cn(n, r) {
    return n.length > 0 ? (Tn(n, n.length, 0, r), n) : r;
  }
  const cy = {}.hasOwnProperty;
  function LE(n) {
    const r = {};
    let i = -1;
    for (; ++i < n.length; ) UE(r, n[i]);
    return r;
  }
  function UE(n, r) {
    let i;
    for (i in r) {
      const u = (cy.call(n, i) ? n[i] : void 0) || (n[i] = {}), s = r[i];
      let d;
      if (s) for (d in s) {
        cy.call(u, d) || (u[d] = []);
        const h = s[d];
        BE(u[d], Array.isArray(h) ? h : h ? [
          h
        ] : []);
      }
    }
  }
  function BE(n, r) {
    let i = -1;
    const a = [];
    for (; ++i < r.length; ) (r[i].add === "after" ? n : a).push(r[i]);
    Tn(n, 0, 0, a);
  }
  function Iv(n, r) {
    const i = Number.parseInt(n, r);
    return i < 9 || i === 11 || i > 13 && i < 32 || i > 126 && i < 160 || i > 55295 && i < 57344 || i > 64975 && i < 65008 || (i & 65535) === 65535 || (i & 65535) === 65534 || i > 1114111 ? "\uFFFD" : String.fromCodePoint(i);
  }
  function ri(n) {
    return n.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
  }
  const En = zl(/[A-Za-z]/), Ft = zl(/[\dA-Za-z]/), HE = zl(/[#-'*+\--9=?A-Z^-~]/);
  function Bf(n) {
    return n !== null && (n < 32 || n === 127);
  }
  const Hf = zl(/\d/), qE = zl(/[\dA-Fa-f]/), VE = zl(/[!-/:-@[-`{-~]/);
  function ge(n) {
    return n !== null && n < -2;
  }
  function Dt(n) {
    return n !== null && (n < 0 || n === 32);
  }
  function De(n) {
    return n === -2 || n === -1 || n === 32;
  }
  const GE = zl(new RegExp("\\p{P}|\\p{S}", "u")), YE = zl(/\s/);
  function zl(n) {
    return r;
    function r(i) {
      return i !== null && i > -1 && n.test(String.fromCharCode(i));
    }
  }
  function si(n) {
    const r = [];
    let i = -1, a = 0, u = 0;
    for (; ++i < n.length; ) {
      const s = n.charCodeAt(i);
      let d = "";
      if (s === 37 && Ft(n.charCodeAt(i + 1)) && Ft(n.charCodeAt(i + 2))) u = 2;
      else if (s < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s)) || (d = String.fromCharCode(s));
      else if (s > 55295 && s < 57344) {
        const h = n.charCodeAt(i + 1);
        s < 56320 && h > 56319 && h < 57344 ? (d = String.fromCharCode(s, h), u = 1) : d = "\uFFFD";
      } else d = String.fromCharCode(s);
      d && (r.push(n.slice(a, i), encodeURIComponent(d)), a = i + u + 1, d = ""), u && (i += u, u = 0);
    }
    return r.join("") + n.slice(a);
  }
  function Ie(n, r, i, a) {
    const u = a ? a - 1 : Number.POSITIVE_INFINITY;
    let s = 0;
    return d;
    function d(p) {
      return De(p) ? (n.enter(i), h(p)) : r(p);
    }
    function h(p) {
      return De(p) && s++ < u ? (n.consume(p), h) : (n.exit(i), r(p));
    }
  }
  const XE = {
    tokenize: IE
  };
  function IE(n) {
    const r = n.attempt(this.parser.constructs.contentInitial, a, u);
    let i;
    return r;
    function a(h) {
      if (h === null) {
        n.consume(h);
        return;
      }
      return n.enter("lineEnding"), n.consume(h), n.exit("lineEnding"), Ie(n, r, "linePrefix");
    }
    function u(h) {
      return n.enter("paragraph"), s(h);
    }
    function s(h) {
      const p = n.enter("chunkText", {
        contentType: "text",
        previous: i
      });
      return i && (i.next = p), i = p, d(h);
    }
    function d(h) {
      if (h === null) {
        n.exit("chunkText"), n.exit("paragraph"), n.consume(h);
        return;
      }
      return ge(h) ? (n.consume(h), n.exit("chunkText"), s) : (n.consume(h), d);
    }
  }
  const QE = {
    tokenize: FE
  }, sy = {
    tokenize: KE
  };
  function FE(n) {
    const r = this, i = [];
    let a = 0, u, s, d;
    return h;
    function h(j) {
      if (a < i.length) {
        const G = i[a];
        return r.containerState = G[1], n.attempt(G[0].continuation, p, m)(j);
      }
      return m(j);
    }
    function p(j) {
      if (a++, r.containerState._closeFlow) {
        r.containerState._closeFlow = void 0, u && V();
        const G = r.events.length;
        let J = G, D;
        for (; J--; ) if (r.events[J][0] === "exit" && r.events[J][1].type === "chunkFlow") {
          D = r.events[J][1].end;
          break;
        }
        O(a);
        let Z = G;
        for (; Z < r.events.length; ) r.events[Z][1].end = {
          ...D
        }, Z++;
        return Tn(r.events, J + 1, 0, r.events.slice(G)), r.events.length = Z, m(j);
      }
      return h(j);
    }
    function m(j) {
      if (a === i.length) {
        if (!u) return x(j);
        if (u.currentConstruct && u.currentConstruct.concrete) return T(j);
        r.interrupt = !!(u.currentConstruct && !u._gfmTableDynamicInterruptHack);
      }
      return r.containerState = {}, n.check(sy, g, y)(j);
    }
    function g(j) {
      return u && V(), O(a), x(j);
    }
    function y(j) {
      return r.parser.lazy[r.now().line] = a !== i.length, d = r.now().offset, T(j);
    }
    function x(j) {
      return r.containerState = {}, n.attempt(sy, b, T)(j);
    }
    function b(j) {
      return a++, i.push([
        r.currentConstruct,
        r.containerState
      ]), x(j);
    }
    function T(j) {
      if (j === null) {
        u && V(), O(0), n.consume(j);
        return;
      }
      return u = u || r.parser.flow(r.now()), n.enter("chunkFlow", {
        _tokenizer: u,
        contentType: "flow",
        previous: s
      }), C(j);
    }
    function C(j) {
      if (j === null) {
        k(n.exit("chunkFlow"), true), O(0), n.consume(j);
        return;
      }
      return ge(j) ? (n.consume(j), k(n.exit("chunkFlow")), a = 0, r.interrupt = void 0, h) : (n.consume(j), C);
    }
    function k(j, G) {
      const J = r.sliceStream(j);
      if (G && J.push(null), j.previous = s, s && (s.next = j), s = j, u.defineSkip(j.start), u.write(J), r.parser.lazy[j.start.line]) {
        let D = u.events.length;
        for (; D--; ) if (u.events[D][1].start.offset < d && (!u.events[D][1].end || u.events[D][1].end.offset > d)) return;
        const Z = r.events.length;
        let X = Z, re, ie;
        for (; X--; ) if (r.events[X][0] === "exit" && r.events[X][1].type === "chunkFlow") {
          if (re) {
            ie = r.events[X][1].end;
            break;
          }
          re = true;
        }
        for (O(a), D = Z; D < r.events.length; ) r.events[D][1].end = {
          ...ie
        }, D++;
        Tn(r.events, X + 1, 0, r.events.slice(Z)), r.events.length = D;
      }
    }
    function O(j) {
      let G = i.length;
      for (; G-- > j; ) {
        const J = i[G];
        r.containerState = J[1], J[0].exit.call(r, n);
      }
      i.length = j;
    }
    function V() {
      u.write([
        null
      ]), s = void 0, u = void 0, r.containerState._closeFlow = void 0;
    }
  }
  function KE(n, r, i) {
    return Ie(n, n.attempt(this.parser.constructs.document, r, i), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
  }
  function fy(n) {
    if (n === null || Dt(n) || YE(n)) return 1;
    if (GE(n)) return 2;
  }
  function dd(n, r, i) {
    const a = [];
    let u = -1;
    for (; ++u < n.length; ) {
      const s = n[u].resolveAll;
      s && !a.includes(s) && (r = s(r, i), a.push(s));
    }
    return r;
  }
  const qf = {
    name: "attention",
    resolveAll: ZE,
    tokenize: PE
  };
  function ZE(n, r) {
    let i = -1, a, u, s, d, h, p, m, g;
    for (; ++i < n.length; ) if (n[i][0] === "enter" && n[i][1].type === "attentionSequence" && n[i][1]._close) {
      for (a = i; a--; ) if (n[a][0] === "exit" && n[a][1].type === "attentionSequence" && n[a][1]._open && r.sliceSerialize(n[a][1]).charCodeAt(0) === r.sliceSerialize(n[i][1]).charCodeAt(0)) {
        if ((n[a][1]._close || n[i][1]._open) && (n[i][1].end.offset - n[i][1].start.offset) % 3 && !((n[a][1].end.offset - n[a][1].start.offset + n[i][1].end.offset - n[i][1].start.offset) % 3)) continue;
        p = n[a][1].end.offset - n[a][1].start.offset > 1 && n[i][1].end.offset - n[i][1].start.offset > 1 ? 2 : 1;
        const y = {
          ...n[a][1].end
        }, x = {
          ...n[i][1].start
        };
        dy(y, -p), dy(x, p), d = {
          type: p > 1 ? "strongSequence" : "emphasisSequence",
          start: y,
          end: {
            ...n[a][1].end
          }
        }, h = {
          type: p > 1 ? "strongSequence" : "emphasisSequence",
          start: {
            ...n[i][1].start
          },
          end: x
        }, s = {
          type: p > 1 ? "strongText" : "emphasisText",
          start: {
            ...n[a][1].end
          },
          end: {
            ...n[i][1].start
          }
        }, u = {
          type: p > 1 ? "strong" : "emphasis",
          start: {
            ...d.start
          },
          end: {
            ...h.end
          }
        }, n[a][1].end = {
          ...d.start
        }, n[i][1].start = {
          ...h.end
        }, m = [], n[a][1].end.offset - n[a][1].start.offset && (m = cn(m, [
          [
            "enter",
            n[a][1],
            r
          ],
          [
            "exit",
            n[a][1],
            r
          ]
        ])), m = cn(m, [
          [
            "enter",
            u,
            r
          ],
          [
            "enter",
            d,
            r
          ],
          [
            "exit",
            d,
            r
          ],
          [
            "enter",
            s,
            r
          ]
        ]), m = cn(m, dd(r.parser.constructs.insideSpan.null, n.slice(a + 1, i), r)), m = cn(m, [
          [
            "exit",
            s,
            r
          ],
          [
            "enter",
            h,
            r
          ],
          [
            "exit",
            h,
            r
          ],
          [
            "exit",
            u,
            r
          ]
        ]), n[i][1].end.offset - n[i][1].start.offset ? (g = 2, m = cn(m, [
          [
            "enter",
            n[i][1],
            r
          ],
          [
            "exit",
            n[i][1],
            r
          ]
        ])) : g = 0, Tn(n, a - 1, i - a + 3, m), i = a + m.length - g - 2;
        break;
      }
    }
    for (i = -1; ++i < n.length; ) n[i][1].type === "attentionSequence" && (n[i][1].type = "data");
    return n;
  }
  function PE(n, r) {
    const i = this.parser.constructs.attentionMarkers.null, a = this.previous, u = fy(a);
    let s;
    return d;
    function d(p) {
      return s = p, n.enter("attentionSequence"), h(p);
    }
    function h(p) {
      if (p === s) return n.consume(p), h;
      const m = n.exit("attentionSequence"), g = fy(p), y = !g || g === 2 && u || i.includes(p), x = !u || u === 2 && g || i.includes(a);
      return m._open = !!(s === 42 ? y : y && (u || !x)), m._close = !!(s === 42 ? x : x && (g || !y)), r(p);
    }
  }
  function dy(n, r) {
    n.column += r, n.offset += r, n._bufferIndex += r;
  }
  const JE = {
    name: "autolink",
    tokenize: WE
  };
  function WE(n, r, i) {
    let a = 0;
    return u;
    function u(b) {
      return n.enter("autolink"), n.enter("autolinkMarker"), n.consume(b), n.exit("autolinkMarker"), n.enter("autolinkProtocol"), s;
    }
    function s(b) {
      return En(b) ? (n.consume(b), d) : b === 64 ? i(b) : m(b);
    }
    function d(b) {
      return b === 43 || b === 45 || b === 46 || Ft(b) ? (a = 1, h(b)) : m(b);
    }
    function h(b) {
      return b === 58 ? (n.consume(b), a = 0, p) : (b === 43 || b === 45 || b === 46 || Ft(b)) && a++ < 32 ? (n.consume(b), h) : (a = 0, m(b));
    }
    function p(b) {
      return b === 62 ? (n.exit("autolinkProtocol"), n.enter("autolinkMarker"), n.consume(b), n.exit("autolinkMarker"), n.exit("autolink"), r) : b === null || b === 32 || b === 60 || Bf(b) ? i(b) : (n.consume(b), p);
    }
    function m(b) {
      return b === 64 ? (n.consume(b), g) : HE(b) ? (n.consume(b), m) : i(b);
    }
    function g(b) {
      return Ft(b) ? y(b) : i(b);
    }
    function y(b) {
      return b === 46 ? (n.consume(b), a = 0, g) : b === 62 ? (n.exit("autolinkProtocol").type = "autolinkEmail", n.enter("autolinkMarker"), n.consume(b), n.exit("autolinkMarker"), n.exit("autolink"), r) : x(b);
    }
    function x(b) {
      if ((b === 45 || Ft(b)) && a++ < 63) {
        const T = b === 45 ? x : y;
        return n.consume(b), T;
      }
      return i(b);
    }
  }
  const Tu = {
    partial: true,
    tokenize: $E
  };
  function $E(n, r, i) {
    return a;
    function a(s) {
      return De(s) ? Ie(n, u, "linePrefix")(s) : u(s);
    }
    function u(s) {
      return s === null || ge(s) ? r(s) : i(s);
    }
  }
  const Qv = {
    continuation: {
      tokenize: tC
    },
    exit: nC,
    name: "blockQuote",
    tokenize: eC
  };
  function eC(n, r, i) {
    const a = this;
    return u;
    function u(d) {
      if (d === 62) {
        const h = a.containerState;
        return h.open || (n.enter("blockQuote", {
          _container: true
        }), h.open = true), n.enter("blockQuotePrefix"), n.enter("blockQuoteMarker"), n.consume(d), n.exit("blockQuoteMarker"), s;
      }
      return i(d);
    }
    function s(d) {
      return De(d) ? (n.enter("blockQuotePrefixWhitespace"), n.consume(d), n.exit("blockQuotePrefixWhitespace"), n.exit("blockQuotePrefix"), r) : (n.exit("blockQuotePrefix"), r(d));
    }
  }
  function tC(n, r, i) {
    const a = this;
    return u;
    function u(d) {
      return De(d) ? Ie(n, s, "linePrefix", a.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(d) : s(d);
    }
    function s(d) {
      return n.attempt(Qv, r, i)(d);
    }
  }
  function nC(n) {
    n.exit("blockQuote");
  }
  const Fv = {
    name: "characterEscape",
    tokenize: lC
  };
  function lC(n, r, i) {
    return a;
    function a(s) {
      return n.enter("characterEscape"), n.enter("escapeMarker"), n.consume(s), n.exit("escapeMarker"), u;
    }
    function u(s) {
      return VE(s) ? (n.enter("characterEscapeValue"), n.consume(s), n.exit("characterEscapeValue"), n.exit("characterEscape"), r) : i(s);
    }
  }
  const Kv = {
    name: "characterReference",
    tokenize: rC
  };
  function rC(n, r, i) {
    const a = this;
    let u = 0, s, d;
    return h;
    function h(y) {
      return n.enter("characterReference"), n.enter("characterReferenceMarker"), n.consume(y), n.exit("characterReferenceMarker"), p;
    }
    function p(y) {
      return y === 35 ? (n.enter("characterReferenceMarkerNumeric"), n.consume(y), n.exit("characterReferenceMarkerNumeric"), m) : (n.enter("characterReferenceValue"), s = 31, d = Ft, g(y));
    }
    function m(y) {
      return y === 88 || y === 120 ? (n.enter("characterReferenceMarkerHexadecimal"), n.consume(y), n.exit("characterReferenceMarkerHexadecimal"), n.enter("characterReferenceValue"), s = 6, d = qE, g) : (n.enter("characterReferenceValue"), s = 7, d = Hf, g(y));
    }
    function g(y) {
      if (y === 59 && u) {
        const x = n.exit("characterReferenceValue");
        return d === Ft && !fd(a.sliceSerialize(x)) ? i(y) : (n.enter("characterReferenceMarker"), n.consume(y), n.exit("characterReferenceMarker"), n.exit("characterReference"), r);
      }
      return d(y) && u++ < s ? (n.consume(y), g) : i(y);
    }
  }
  const hy = {
    partial: true,
    tokenize: aC
  }, my = {
    concrete: true,
    name: "codeFenced",
    tokenize: iC
  };
  function iC(n, r, i) {
    const a = this, u = {
      partial: true,
      tokenize: J
    };
    let s = 0, d = 0, h;
    return p;
    function p(D) {
      return m(D);
    }
    function m(D) {
      const Z = a.events[a.events.length - 1];
      return s = Z && Z[1].type === "linePrefix" ? Z[2].sliceSerialize(Z[1], true).length : 0, h = D, n.enter("codeFenced"), n.enter("codeFencedFence"), n.enter("codeFencedFenceSequence"), g(D);
    }
    function g(D) {
      return D === h ? (d++, n.consume(D), g) : d < 3 ? i(D) : (n.exit("codeFencedFenceSequence"), De(D) ? Ie(n, y, "whitespace")(D) : y(D));
    }
    function y(D) {
      return D === null || ge(D) ? (n.exit("codeFencedFence"), a.interrupt ? r(D) : n.check(hy, C, G)(D)) : (n.enter("codeFencedFenceInfo"), n.enter("chunkString", {
        contentType: "string"
      }), x(D));
    }
    function x(D) {
      return D === null || ge(D) ? (n.exit("chunkString"), n.exit("codeFencedFenceInfo"), y(D)) : De(D) ? (n.exit("chunkString"), n.exit("codeFencedFenceInfo"), Ie(n, b, "whitespace")(D)) : D === 96 && D === h ? i(D) : (n.consume(D), x);
    }
    function b(D) {
      return D === null || ge(D) ? y(D) : (n.enter("codeFencedFenceMeta"), n.enter("chunkString", {
        contentType: "string"
      }), T(D));
    }
    function T(D) {
      return D === null || ge(D) ? (n.exit("chunkString"), n.exit("codeFencedFenceMeta"), y(D)) : D === 96 && D === h ? i(D) : (n.consume(D), T);
    }
    function C(D) {
      return n.attempt(u, G, k)(D);
    }
    function k(D) {
      return n.enter("lineEnding"), n.consume(D), n.exit("lineEnding"), O;
    }
    function O(D) {
      return s > 0 && De(D) ? Ie(n, V, "linePrefix", s + 1)(D) : V(D);
    }
    function V(D) {
      return D === null || ge(D) ? n.check(hy, C, G)(D) : (n.enter("codeFlowValue"), j(D));
    }
    function j(D) {
      return D === null || ge(D) ? (n.exit("codeFlowValue"), V(D)) : (n.consume(D), j);
    }
    function G(D) {
      return n.exit("codeFenced"), r(D);
    }
    function J(D, Z, X) {
      let re = 0;
      return ie;
      function ie(P) {
        return D.enter("lineEnding"), D.consume(P), D.exit("lineEnding"), te;
      }
      function te(P) {
        return D.enter("codeFencedFence"), De(P) ? Ie(D, W, "linePrefix", a.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(P) : W(P);
      }
      function W(P) {
        return P === h ? (D.enter("codeFencedFenceSequence"), se(P)) : X(P);
      }
      function se(P) {
        return P === h ? (re++, D.consume(P), se) : re >= d ? (D.exit("codeFencedFenceSequence"), De(P) ? Ie(D, ne, "whitespace")(P) : ne(P)) : X(P);
      }
      function ne(P) {
        return P === null || ge(P) ? (D.exit("codeFencedFence"), Z(P)) : X(P);
      }
    }
  }
  function aC(n, r, i) {
    const a = this;
    return u;
    function u(d) {
      return d === null ? i(d) : (n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), s);
    }
    function s(d) {
      return a.parser.lazy[a.now().line] ? i(d) : r(d);
    }
  }
  const df = {
    name: "codeIndented",
    tokenize: uC
  }, oC = {
    partial: true,
    tokenize: cC
  };
  function uC(n, r, i) {
    const a = this;
    return u;
    function u(m) {
      return n.enter("codeIndented"), Ie(n, s, "linePrefix", 5)(m);
    }
    function s(m) {
      const g = a.events[a.events.length - 1];
      return g && g[1].type === "linePrefix" && g[2].sliceSerialize(g[1], true).length >= 4 ? d(m) : i(m);
    }
    function d(m) {
      return m === null ? p(m) : ge(m) ? n.attempt(oC, d, p)(m) : (n.enter("codeFlowValue"), h(m));
    }
    function h(m) {
      return m === null || ge(m) ? (n.exit("codeFlowValue"), d(m)) : (n.consume(m), h);
    }
    function p(m) {
      return n.exit("codeIndented"), r(m);
    }
  }
  function cC(n, r, i) {
    const a = this;
    return u;
    function u(d) {
      return a.parser.lazy[a.now().line] ? i(d) : ge(d) ? (n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), u) : Ie(n, s, "linePrefix", 5)(d);
    }
    function s(d) {
      const h = a.events[a.events.length - 1];
      return h && h[1].type === "linePrefix" && h[2].sliceSerialize(h[1], true).length >= 4 ? r(d) : ge(d) ? u(d) : i(d);
    }
  }
  const sC = {
    name: "codeText",
    previous: dC,
    resolve: fC,
    tokenize: hC
  };
  function fC(n) {
    let r = n.length - 4, i = 3, a, u;
    if ((n[i][1].type === "lineEnding" || n[i][1].type === "space") && (n[r][1].type === "lineEnding" || n[r][1].type === "space")) {
      for (a = i; ++a < r; ) if (n[a][1].type === "codeTextData") {
        n[i][1].type = "codeTextPadding", n[r][1].type = "codeTextPadding", i += 2, r -= 2;
        break;
      }
    }
    for (a = i - 1, r++; ++a <= r; ) u === void 0 ? a !== r && n[a][1].type !== "lineEnding" && (u = a) : (a === r || n[a][1].type === "lineEnding") && (n[u][1].type = "codeTextData", a !== u + 2 && (n[u][1].end = n[a - 1][1].end, n.splice(u + 2, a - u - 2), r -= a - u - 2, a = u + 2), u = void 0);
    return n;
  }
  function dC(n) {
    return n !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
  }
  function hC(n, r, i) {
    let a = 0, u, s;
    return d;
    function d(y) {
      return n.enter("codeText"), n.enter("codeTextSequence"), h(y);
    }
    function h(y) {
      return y === 96 ? (n.consume(y), a++, h) : (n.exit("codeTextSequence"), p(y));
    }
    function p(y) {
      return y === null ? i(y) : y === 32 ? (n.enter("space"), n.consume(y), n.exit("space"), p) : y === 96 ? (s = n.enter("codeTextSequence"), u = 0, g(y)) : ge(y) ? (n.enter("lineEnding"), n.consume(y), n.exit("lineEnding"), p) : (n.enter("codeTextData"), m(y));
    }
    function m(y) {
      return y === null || y === 32 || y === 96 || ge(y) ? (n.exit("codeTextData"), p(y)) : (n.consume(y), m);
    }
    function g(y) {
      return y === 96 ? (n.consume(y), u++, g) : u === a ? (n.exit("codeTextSequence"), n.exit("codeText"), r(y)) : (s.type = "codeTextData", m(y));
    }
  }
  class mC {
    constructor(r) {
      this.left = r ? [
        ...r
      ] : [], this.right = [];
    }
    get(r) {
      if (r < 0 || r >= this.left.length + this.right.length) throw new RangeError("Cannot access index `" + r + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
      return r < this.left.length ? this.left[r] : this.right[this.right.length - r + this.left.length - 1];
    }
    get length() {
      return this.left.length + this.right.length;
    }
    shift() {
      return this.setCursor(0), this.right.pop();
    }
    slice(r, i) {
      const a = i ?? Number.POSITIVE_INFINITY;
      return a < this.left.length ? this.left.slice(r, a) : r > this.left.length ? this.right.slice(this.right.length - a + this.left.length, this.right.length - r + this.left.length).reverse() : this.left.slice(r).concat(this.right.slice(this.right.length - a + this.left.length).reverse());
    }
    splice(r, i, a) {
      const u = i || 0;
      this.setCursor(Math.trunc(r));
      const s = this.right.splice(this.right.length - u, Number.POSITIVE_INFINITY);
      return a && ua(this.left, a), s.reverse();
    }
    pop() {
      return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
    }
    push(r) {
      this.setCursor(Number.POSITIVE_INFINITY), this.left.push(r);
    }
    pushMany(r) {
      this.setCursor(Number.POSITIVE_INFINITY), ua(this.left, r);
    }
    unshift(r) {
      this.setCursor(0), this.right.push(r);
    }
    unshiftMany(r) {
      this.setCursor(0), ua(this.right, r.reverse());
    }
    setCursor(r) {
      if (!(r === this.left.length || r > this.left.length && this.right.length === 0 || r < 0 && this.left.length === 0)) if (r < this.left.length) {
        const i = this.left.splice(r, Number.POSITIVE_INFINITY);
        ua(this.right, i.reverse());
      } else {
        const i = this.right.splice(this.left.length + this.right.length - r, Number.POSITIVE_INFINITY);
        ua(this.left, i.reverse());
      }
    }
  }
  function ua(n, r) {
    let i = 0;
    if (r.length < 1e4) n.push(...r);
    else for (; i < r.length; ) n.push(...r.slice(i, i + 1e4)), i += 1e4;
  }
  function Zv(n) {
    const r = {};
    let i = -1, a, u, s, d, h, p, m;
    const g = new mC(n);
    for (; ++i < g.length; ) {
      for (; i in r; ) i = r[i];
      if (a = g.get(i), i && a[1].type === "chunkFlow" && g.get(i - 1)[1].type === "listItemPrefix" && (p = a[1]._tokenizer.events, s = 0, s < p.length && p[s][1].type === "lineEndingBlank" && (s += 2), s < p.length && p[s][1].type === "content")) for (; ++s < p.length && p[s][1].type !== "content"; ) p[s][1].type === "chunkText" && (p[s][1]._isInFirstContentOfListItem = true, s++);
      if (a[0] === "enter") a[1].contentType && (Object.assign(r, pC(g, i)), i = r[i], m = true);
      else if (a[1]._container) {
        for (s = i, u = void 0; s--; ) if (d = g.get(s), d[1].type === "lineEnding" || d[1].type === "lineEndingBlank") d[0] === "enter" && (u && (g.get(u)[1].type = "lineEndingBlank"), d[1].type = "lineEnding", u = s);
        else if (!(d[1].type === "linePrefix" || d[1].type === "listItemIndent")) break;
        u && (a[1].end = {
          ...g.get(u)[1].start
        }, h = g.slice(u, i), h.unshift(a), g.splice(u, i - u + 1, h));
      }
    }
    return Tn(n, 0, Number.POSITIVE_INFINITY, g.slice(0)), !m;
  }
  function pC(n, r) {
    const i = n.get(r)[1], a = n.get(r)[2];
    let u = r - 1;
    const s = [];
    let d = i._tokenizer;
    d || (d = a.parser[i.contentType](i.start), i._contentTypeTextTrailing && (d._contentTypeTextTrailing = true));
    const h = d.events, p = [], m = {};
    let g, y, x = -1, b = i, T = 0, C = 0;
    const k = [
      C
    ];
    for (; b; ) {
      for (; n.get(++u)[1] !== b; ) ;
      s.push(u), b._tokenizer || (g = a.sliceStream(b), b.next || g.push(null), y && d.defineSkip(b.start), b._isInFirstContentOfListItem && (d._gfmTasklistFirstContentOfListItem = true), d.write(g), b._isInFirstContentOfListItem && (d._gfmTasklistFirstContentOfListItem = void 0)), y = b, b = b.next;
    }
    for (b = i; ++x < h.length; ) h[x][0] === "exit" && h[x - 1][0] === "enter" && h[x][1].type === h[x - 1][1].type && h[x][1].start.line !== h[x][1].end.line && (C = x + 1, k.push(C), b._tokenizer = void 0, b.previous = void 0, b = b.next);
    for (d.events = [], b ? (b._tokenizer = void 0, b.previous = void 0) : k.pop(), x = k.length; x--; ) {
      const O = h.slice(k[x], k[x + 1]), V = s.pop();
      p.push([
        V,
        V + O.length - 1
      ]), n.splice(V, 2, O);
    }
    for (p.reverse(), x = -1; ++x < p.length; ) m[T + p[x][0]] = T + p[x][1], T += p[x][1] - p[x][0] - 1;
    return m;
  }
  const gC = {
    resolve: vC,
    tokenize: bC
  }, yC = {
    partial: true,
    tokenize: xC
  };
  function vC(n) {
    return Zv(n), n;
  }
  function bC(n, r) {
    let i;
    return a;
    function a(h) {
      return n.enter("content"), i = n.enter("chunkContent", {
        contentType: "content"
      }), u(h);
    }
    function u(h) {
      return h === null ? s(h) : ge(h) ? n.check(yC, d, s)(h) : (n.consume(h), u);
    }
    function s(h) {
      return n.exit("chunkContent"), n.exit("content"), r(h);
    }
    function d(h) {
      return n.consume(h), n.exit("chunkContent"), i.next = n.enter("chunkContent", {
        contentType: "content",
        previous: i
      }), i = i.next, u;
    }
  }
  function xC(n, r, i) {
    const a = this;
    return u;
    function u(d) {
      return n.exit("chunkContent"), n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), Ie(n, s, "linePrefix");
    }
    function s(d) {
      if (d === null || ge(d)) return i(d);
      const h = a.events[a.events.length - 1];
      return !a.parser.constructs.disable.null.includes("codeIndented") && h && h[1].type === "linePrefix" && h[2].sliceSerialize(h[1], true).length >= 4 ? r(d) : n.interrupt(a.parser.constructs.flow, i, r)(d);
    }
  }
  function Pv(n, r, i, a, u, s, d, h, p) {
    const m = p || Number.POSITIVE_INFINITY;
    let g = 0;
    return y;
    function y(O) {
      return O === 60 ? (n.enter(a), n.enter(u), n.enter(s), n.consume(O), n.exit(s), x) : O === null || O === 32 || O === 41 || Bf(O) ? i(O) : (n.enter(a), n.enter(d), n.enter(h), n.enter("chunkString", {
        contentType: "string"
      }), C(O));
    }
    function x(O) {
      return O === 62 ? (n.enter(s), n.consume(O), n.exit(s), n.exit(u), n.exit(a), r) : (n.enter(h), n.enter("chunkString", {
        contentType: "string"
      }), b(O));
    }
    function b(O) {
      return O === 62 ? (n.exit("chunkString"), n.exit(h), x(O)) : O === null || O === 60 || ge(O) ? i(O) : (n.consume(O), O === 92 ? T : b);
    }
    function T(O) {
      return O === 60 || O === 62 || O === 92 ? (n.consume(O), b) : b(O);
    }
    function C(O) {
      return !g && (O === null || O === 41 || Dt(O)) ? (n.exit("chunkString"), n.exit(h), n.exit(d), n.exit(a), r(O)) : g < m && O === 40 ? (n.consume(O), g++, C) : O === 41 ? (n.consume(O), g--, C) : O === null || O === 32 || O === 40 || Bf(O) ? i(O) : (n.consume(O), O === 92 ? k : C);
    }
    function k(O) {
      return O === 40 || O === 41 || O === 92 ? (n.consume(O), C) : C(O);
    }
  }
  function Jv(n, r, i, a, u, s) {
    const d = this;
    let h = 0, p;
    return m;
    function m(b) {
      return n.enter(a), n.enter(u), n.consume(b), n.exit(u), n.enter(s), g;
    }
    function g(b) {
      return h > 999 || b === null || b === 91 || b === 93 && !p || b === 94 && !h && "_hiddenFootnoteSupport" in d.parser.constructs ? i(b) : b === 93 ? (n.exit(s), n.enter(u), n.consume(b), n.exit(u), n.exit(a), r) : ge(b) ? (n.enter("lineEnding"), n.consume(b), n.exit("lineEnding"), g) : (n.enter("chunkString", {
        contentType: "string"
      }), y(b));
    }
    function y(b) {
      return b === null || b === 91 || b === 93 || ge(b) || h++ > 999 ? (n.exit("chunkString"), g(b)) : (n.consume(b), p || (p = !De(b)), b === 92 ? x : y);
    }
    function x(b) {
      return b === 91 || b === 92 || b === 93 ? (n.consume(b), h++, y) : y(b);
    }
  }
  function Wv(n, r, i, a, u, s) {
    let d;
    return h;
    function h(x) {
      return x === 34 || x === 39 || x === 40 ? (n.enter(a), n.enter(u), n.consume(x), n.exit(u), d = x === 40 ? 41 : x, p) : i(x);
    }
    function p(x) {
      return x === d ? (n.enter(u), n.consume(x), n.exit(u), n.exit(a), r) : (n.enter(s), m(x));
    }
    function m(x) {
      return x === d ? (n.exit(s), p(d)) : x === null ? i(x) : ge(x) ? (n.enter("lineEnding"), n.consume(x), n.exit("lineEnding"), Ie(n, m, "linePrefix")) : (n.enter("chunkString", {
        contentType: "string"
      }), g(x));
    }
    function g(x) {
      return x === d || x === null || ge(x) ? (n.exit("chunkString"), m(x)) : (n.consume(x), x === 92 ? y : g);
    }
    function y(x) {
      return x === d || x === 92 ? (n.consume(x), g) : g(x);
    }
  }
  function pa(n, r) {
    let i;
    return a;
    function a(u) {
      return ge(u) ? (n.enter("lineEnding"), n.consume(u), n.exit("lineEnding"), i = true, a) : De(u) ? Ie(n, a, i ? "linePrefix" : "lineSuffix")(u) : r(u);
    }
  }
  const SC = {
    name: "definition",
    tokenize: EC
  }, wC = {
    partial: true,
    tokenize: CC
  };
  function EC(n, r, i) {
    const a = this;
    let u;
    return s;
    function s(b) {
      return n.enter("definition"), d(b);
    }
    function d(b) {
      return Jv.call(a, n, h, i, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(b);
    }
    function h(b) {
      return u = ri(a.sliceSerialize(a.events[a.events.length - 1][1]).slice(1, -1)), b === 58 ? (n.enter("definitionMarker"), n.consume(b), n.exit("definitionMarker"), p) : i(b);
    }
    function p(b) {
      return Dt(b) ? pa(n, m)(b) : m(b);
    }
    function m(b) {
      return Pv(n, g, i, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(b);
    }
    function g(b) {
      return n.attempt(wC, y, y)(b);
    }
    function y(b) {
      return De(b) ? Ie(n, x, "whitespace")(b) : x(b);
    }
    function x(b) {
      return b === null || ge(b) ? (n.exit("definition"), a.parser.defined.push(u), r(b)) : i(b);
    }
  }
  function CC(n, r, i) {
    return a;
    function a(h) {
      return Dt(h) ? pa(n, u)(h) : i(h);
    }
    function u(h) {
      return Wv(n, s, i, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(h);
    }
    function s(h) {
      return De(h) ? Ie(n, d, "whitespace")(h) : d(h);
    }
    function d(h) {
      return h === null || ge(h) ? r(h) : i(h);
    }
  }
  const AC = {
    name: "hardBreakEscape",
    tokenize: _C
  };
  function _C(n, r, i) {
    return a;
    function a(s) {
      return n.enter("hardBreakEscape"), n.consume(s), u;
    }
    function u(s) {
      return ge(s) ? (n.exit("hardBreakEscape"), r(s)) : i(s);
    }
  }
  const TC = {
    name: "headingAtx",
    resolve: MC,
    tokenize: OC
  };
  function MC(n, r) {
    let i = n.length - 2, a = 3, u, s;
    return n[a][1].type === "whitespace" && (a += 2), i - 2 > a && n[i][1].type === "whitespace" && (i -= 2), n[i][1].type === "atxHeadingSequence" && (a === i - 1 || i - 4 > a && n[i - 2][1].type === "whitespace") && (i -= a + 1 === i ? 2 : 4), i > a && (u = {
      type: "atxHeadingText",
      start: n[a][1].start,
      end: n[i][1].end
    }, s = {
      type: "chunkText",
      start: n[a][1].start,
      end: n[i][1].end,
      contentType: "text"
    }, Tn(n, a, i - a + 1, [
      [
        "enter",
        u,
        r
      ],
      [
        "enter",
        s,
        r
      ],
      [
        "exit",
        s,
        r
      ],
      [
        "exit",
        u,
        r
      ]
    ])), n;
  }
  function OC(n, r, i) {
    let a = 0;
    return u;
    function u(g) {
      return n.enter("atxHeading"), s(g);
    }
    function s(g) {
      return n.enter("atxHeadingSequence"), d(g);
    }
    function d(g) {
      return g === 35 && a++ < 6 ? (n.consume(g), d) : g === null || Dt(g) ? (n.exit("atxHeadingSequence"), h(g)) : i(g);
    }
    function h(g) {
      return g === 35 ? (n.enter("atxHeadingSequence"), p(g)) : g === null || ge(g) ? (n.exit("atxHeading"), r(g)) : De(g) ? Ie(n, h, "whitespace")(g) : (n.enter("atxHeadingText"), m(g));
    }
    function p(g) {
      return g === 35 ? (n.consume(g), p) : (n.exit("atxHeadingSequence"), h(g));
    }
    function m(g) {
      return g === null || g === 35 || Dt(g) ? (n.exit("atxHeadingText"), h(g)) : (n.consume(g), m);
    }
  }
  const kC = [
    "address",
    "article",
    "aside",
    "base",
    "basefont",
    "blockquote",
    "body",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "iframe",
    "legend",
    "li",
    "link",
    "main",
    "menu",
    "menuitem",
    "nav",
    "noframes",
    "ol",
    "optgroup",
    "option",
    "p",
    "param",
    "search",
    "section",
    "summary",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul"
  ], py = [
    "pre",
    "script",
    "style",
    "textarea"
  ], RC = {
    concrete: true,
    name: "htmlFlow",
    resolveTo: DC,
    tokenize: jC
  }, NC = {
    partial: true,
    tokenize: UC
  }, zC = {
    partial: true,
    tokenize: LC
  };
  function DC(n) {
    let r = n.length;
    for (; r-- && !(n[r][0] === "enter" && n[r][1].type === "htmlFlow"); ) ;
    return r > 1 && n[r - 2][1].type === "linePrefix" && (n[r][1].start = n[r - 2][1].start, n[r + 1][1].start = n[r - 2][1].start, n.splice(r - 2, 2)), n;
  }
  function jC(n, r, i) {
    const a = this;
    let u, s, d, h, p;
    return m;
    function m(E) {
      return g(E);
    }
    function g(E) {
      return n.enter("htmlFlow"), n.enter("htmlFlowData"), n.consume(E), y;
    }
    function y(E) {
      return E === 33 ? (n.consume(E), x) : E === 47 ? (n.consume(E), s = true, C) : E === 63 ? (n.consume(E), u = 3, a.interrupt ? r : A) : En(E) ? (n.consume(E), d = String.fromCharCode(E), k) : i(E);
    }
    function x(E) {
      return E === 45 ? (n.consume(E), u = 2, b) : E === 91 ? (n.consume(E), u = 5, h = 0, T) : En(E) ? (n.consume(E), u = 4, a.interrupt ? r : A) : i(E);
    }
    function b(E) {
      return E === 45 ? (n.consume(E), a.interrupt ? r : A) : i(E);
    }
    function T(E) {
      const he = "CDATA[";
      return E === he.charCodeAt(h++) ? (n.consume(E), h === he.length ? a.interrupt ? r : W : T) : i(E);
    }
    function C(E) {
      return En(E) ? (n.consume(E), d = String.fromCharCode(E), k) : i(E);
    }
    function k(E) {
      if (E === null || E === 47 || E === 62 || Dt(E)) {
        const he = E === 47, Be = d.toLowerCase();
        return !he && !s && py.includes(Be) ? (u = 1, a.interrupt ? r(E) : W(E)) : kC.includes(d.toLowerCase()) ? (u = 6, he ? (n.consume(E), O) : a.interrupt ? r(E) : W(E)) : (u = 7, a.interrupt && !a.parser.lazy[a.now().line] ? i(E) : s ? V(E) : j(E));
      }
      return E === 45 || Ft(E) ? (n.consume(E), d += String.fromCharCode(E), k) : i(E);
    }
    function O(E) {
      return E === 62 ? (n.consume(E), a.interrupt ? r : W) : i(E);
    }
    function V(E) {
      return De(E) ? (n.consume(E), V) : ie(E);
    }
    function j(E) {
      return E === 47 ? (n.consume(E), ie) : E === 58 || E === 95 || En(E) ? (n.consume(E), G) : De(E) ? (n.consume(E), j) : ie(E);
    }
    function G(E) {
      return E === 45 || E === 46 || E === 58 || E === 95 || Ft(E) ? (n.consume(E), G) : J(E);
    }
    function J(E) {
      return E === 61 ? (n.consume(E), D) : De(E) ? (n.consume(E), J) : j(E);
    }
    function D(E) {
      return E === null || E === 60 || E === 61 || E === 62 || E === 96 ? i(E) : E === 34 || E === 39 ? (n.consume(E), p = E, Z) : De(E) ? (n.consume(E), D) : X(E);
    }
    function Z(E) {
      return E === p ? (n.consume(E), p = null, re) : E === null || ge(E) ? i(E) : (n.consume(E), Z);
    }
    function X(E) {
      return E === null || E === 34 || E === 39 || E === 47 || E === 60 || E === 61 || E === 62 || E === 96 || Dt(E) ? J(E) : (n.consume(E), X);
    }
    function re(E) {
      return E === 47 || E === 62 || De(E) ? j(E) : i(E);
    }
    function ie(E) {
      return E === 62 ? (n.consume(E), te) : i(E);
    }
    function te(E) {
      return E === null || ge(E) ? W(E) : De(E) ? (n.consume(E), te) : i(E);
    }
    function W(E) {
      return E === 45 && u === 2 ? (n.consume(E), N) : E === 60 && u === 1 ? (n.consume(E), Q) : E === 62 && u === 4 ? (n.consume(E), be) : E === 63 && u === 3 ? (n.consume(E), A) : E === 93 && u === 5 ? (n.consume(E), $) : ge(E) && (u === 6 || u === 7) ? (n.exit("htmlFlowData"), n.check(NC, ye, se)(E)) : E === null || ge(E) ? (n.exit("htmlFlowData"), se(E)) : (n.consume(E), W);
    }
    function se(E) {
      return n.check(zC, ne, ye)(E);
    }
    function ne(E) {
      return n.enter("lineEnding"), n.consume(E), n.exit("lineEnding"), P;
    }
    function P(E) {
      return E === null || ge(E) ? se(E) : (n.enter("htmlFlowData"), W(E));
    }
    function N(E) {
      return E === 45 ? (n.consume(E), A) : W(E);
    }
    function Q(E) {
      return E === 47 ? (n.consume(E), d = "", H) : W(E);
    }
    function H(E) {
      if (E === 62) {
        const he = d.toLowerCase();
        return py.includes(he) ? (n.consume(E), be) : W(E);
      }
      return En(E) && d.length < 8 ? (n.consume(E), d += String.fromCharCode(E), H) : W(E);
    }
    function $(E) {
      return E === 93 ? (n.consume(E), A) : W(E);
    }
    function A(E) {
      return E === 62 ? (n.consume(E), be) : E === 45 && u === 2 ? (n.consume(E), A) : W(E);
    }
    function be(E) {
      return E === null || ge(E) ? (n.exit("htmlFlowData"), ye(E)) : (n.consume(E), be);
    }
    function ye(E) {
      return n.exit("htmlFlow"), r(E);
    }
  }
  function LC(n, r, i) {
    const a = this;
    return u;
    function u(d) {
      return ge(d) ? (n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), s) : i(d);
    }
    function s(d) {
      return a.parser.lazy[a.now().line] ? i(d) : r(d);
    }
  }
  function UC(n, r, i) {
    return a;
    function a(u) {
      return n.enter("lineEnding"), n.consume(u), n.exit("lineEnding"), n.attempt(Tu, r, i);
    }
  }
  const BC = {
    name: "htmlText",
    tokenize: HC
  };
  function HC(n, r, i) {
    const a = this;
    let u, s, d;
    return h;
    function h(A) {
      return n.enter("htmlText"), n.enter("htmlTextData"), n.consume(A), p;
    }
    function p(A) {
      return A === 33 ? (n.consume(A), m) : A === 47 ? (n.consume(A), J) : A === 63 ? (n.consume(A), j) : En(A) ? (n.consume(A), X) : i(A);
    }
    function m(A) {
      return A === 45 ? (n.consume(A), g) : A === 91 ? (n.consume(A), s = 0, T) : En(A) ? (n.consume(A), V) : i(A);
    }
    function g(A) {
      return A === 45 ? (n.consume(A), b) : i(A);
    }
    function y(A) {
      return A === null ? i(A) : A === 45 ? (n.consume(A), x) : ge(A) ? (d = y, Q(A)) : (n.consume(A), y);
    }
    function x(A) {
      return A === 45 ? (n.consume(A), b) : y(A);
    }
    function b(A) {
      return A === 62 ? N(A) : A === 45 ? x(A) : y(A);
    }
    function T(A) {
      const be = "CDATA[";
      return A === be.charCodeAt(s++) ? (n.consume(A), s === be.length ? C : T) : i(A);
    }
    function C(A) {
      return A === null ? i(A) : A === 93 ? (n.consume(A), k) : ge(A) ? (d = C, Q(A)) : (n.consume(A), C);
    }
    function k(A) {
      return A === 93 ? (n.consume(A), O) : C(A);
    }
    function O(A) {
      return A === 62 ? N(A) : A === 93 ? (n.consume(A), O) : C(A);
    }
    function V(A) {
      return A === null || A === 62 ? N(A) : ge(A) ? (d = V, Q(A)) : (n.consume(A), V);
    }
    function j(A) {
      return A === null ? i(A) : A === 63 ? (n.consume(A), G) : ge(A) ? (d = j, Q(A)) : (n.consume(A), j);
    }
    function G(A) {
      return A === 62 ? N(A) : j(A);
    }
    function J(A) {
      return En(A) ? (n.consume(A), D) : i(A);
    }
    function D(A) {
      return A === 45 || Ft(A) ? (n.consume(A), D) : Z(A);
    }
    function Z(A) {
      return ge(A) ? (d = Z, Q(A)) : De(A) ? (n.consume(A), Z) : N(A);
    }
    function X(A) {
      return A === 45 || Ft(A) ? (n.consume(A), X) : A === 47 || A === 62 || Dt(A) ? re(A) : i(A);
    }
    function re(A) {
      return A === 47 ? (n.consume(A), N) : A === 58 || A === 95 || En(A) ? (n.consume(A), ie) : ge(A) ? (d = re, Q(A)) : De(A) ? (n.consume(A), re) : N(A);
    }
    function ie(A) {
      return A === 45 || A === 46 || A === 58 || A === 95 || Ft(A) ? (n.consume(A), ie) : te(A);
    }
    function te(A) {
      return A === 61 ? (n.consume(A), W) : ge(A) ? (d = te, Q(A)) : De(A) ? (n.consume(A), te) : re(A);
    }
    function W(A) {
      return A === null || A === 60 || A === 61 || A === 62 || A === 96 ? i(A) : A === 34 || A === 39 ? (n.consume(A), u = A, se) : ge(A) ? (d = W, Q(A)) : De(A) ? (n.consume(A), W) : (n.consume(A), ne);
    }
    function se(A) {
      return A === u ? (n.consume(A), u = void 0, P) : A === null ? i(A) : ge(A) ? (d = se, Q(A)) : (n.consume(A), se);
    }
    function ne(A) {
      return A === null || A === 34 || A === 39 || A === 60 || A === 61 || A === 96 ? i(A) : A === 47 || A === 62 || Dt(A) ? re(A) : (n.consume(A), ne);
    }
    function P(A) {
      return A === 47 || A === 62 || Dt(A) ? re(A) : i(A);
    }
    function N(A) {
      return A === 62 ? (n.consume(A), n.exit("htmlTextData"), n.exit("htmlText"), r) : i(A);
    }
    function Q(A) {
      return n.exit("htmlTextData"), n.enter("lineEnding"), n.consume(A), n.exit("lineEnding"), H;
    }
    function H(A) {
      return De(A) ? Ie(n, $, "linePrefix", a.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(A) : $(A);
    }
    function $(A) {
      return n.enter("htmlTextData"), d(A);
    }
  }
  const hd = {
    name: "labelEnd",
    resolveAll: YC,
    resolveTo: XC,
    tokenize: IC
  }, qC = {
    tokenize: QC
  }, VC = {
    tokenize: FC
  }, GC = {
    tokenize: KC
  };
  function YC(n) {
    let r = -1;
    const i = [];
    for (; ++r < n.length; ) {
      const a = n[r][1];
      if (i.push(n[r]), a.type === "labelImage" || a.type === "labelLink" || a.type === "labelEnd") {
        const u = a.type === "labelImage" ? 4 : 2;
        a.type = "data", r += u;
      }
    }
    return n.length !== i.length && Tn(n, 0, n.length, i), n;
  }
  function XC(n, r) {
    let i = n.length, a = 0, u, s, d, h;
    for (; i--; ) if (u = n[i][1], s) {
      if (u.type === "link" || u.type === "labelLink" && u._inactive) break;
      n[i][0] === "enter" && u.type === "labelLink" && (u._inactive = true);
    } else if (d) {
      if (n[i][0] === "enter" && (u.type === "labelImage" || u.type === "labelLink") && !u._balanced && (s = i, u.type !== "labelLink")) {
        a = 2;
        break;
      }
    } else u.type === "labelEnd" && (d = i);
    const p = {
      type: n[s][1].type === "labelLink" ? "link" : "image",
      start: {
        ...n[s][1].start
      },
      end: {
        ...n[n.length - 1][1].end
      }
    }, m = {
      type: "label",
      start: {
        ...n[s][1].start
      },
      end: {
        ...n[d][1].end
      }
    }, g = {
      type: "labelText",
      start: {
        ...n[s + a + 2][1].end
      },
      end: {
        ...n[d - 2][1].start
      }
    };
    return h = [
      [
        "enter",
        p,
        r
      ],
      [
        "enter",
        m,
        r
      ]
    ], h = cn(h, n.slice(s + 1, s + a + 3)), h = cn(h, [
      [
        "enter",
        g,
        r
      ]
    ]), h = cn(h, dd(r.parser.constructs.insideSpan.null, n.slice(s + a + 4, d - 3), r)), h = cn(h, [
      [
        "exit",
        g,
        r
      ],
      n[d - 2],
      n[d - 1],
      [
        "exit",
        m,
        r
      ]
    ]), h = cn(h, n.slice(d + 1)), h = cn(h, [
      [
        "exit",
        p,
        r
      ]
    ]), Tn(n, s, n.length, h), n;
  }
  function IC(n, r, i) {
    const a = this;
    let u = a.events.length, s, d;
    for (; u--; ) if ((a.events[u][1].type === "labelImage" || a.events[u][1].type === "labelLink") && !a.events[u][1]._balanced) {
      s = a.events[u][1];
      break;
    }
    return h;
    function h(x) {
      return s ? s._inactive ? y(x) : (d = a.parser.defined.includes(ri(a.sliceSerialize({
        start: s.end,
        end: a.now()
      }))), n.enter("labelEnd"), n.enter("labelMarker"), n.consume(x), n.exit("labelMarker"), n.exit("labelEnd"), p) : i(x);
    }
    function p(x) {
      return x === 40 ? n.attempt(qC, g, d ? g : y)(x) : x === 91 ? n.attempt(VC, g, d ? m : y)(x) : d ? g(x) : y(x);
    }
    function m(x) {
      return n.attempt(GC, g, y)(x);
    }
    function g(x) {
      return r(x);
    }
    function y(x) {
      return s._balanced = true, i(x);
    }
  }
  function QC(n, r, i) {
    return a;
    function a(y) {
      return n.enter("resource"), n.enter("resourceMarker"), n.consume(y), n.exit("resourceMarker"), u;
    }
    function u(y) {
      return Dt(y) ? pa(n, s)(y) : s(y);
    }
    function s(y) {
      return y === 41 ? g(y) : Pv(n, d, h, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(y);
    }
    function d(y) {
      return Dt(y) ? pa(n, p)(y) : g(y);
    }
    function h(y) {
      return i(y);
    }
    function p(y) {
      return y === 34 || y === 39 || y === 40 ? Wv(n, m, i, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(y) : g(y);
    }
    function m(y) {
      return Dt(y) ? pa(n, g)(y) : g(y);
    }
    function g(y) {
      return y === 41 ? (n.enter("resourceMarker"), n.consume(y), n.exit("resourceMarker"), n.exit("resource"), r) : i(y);
    }
  }
  function FC(n, r, i) {
    const a = this;
    return u;
    function u(h) {
      return Jv.call(a, n, s, d, "reference", "referenceMarker", "referenceString")(h);
    }
    function s(h) {
      return a.parser.defined.includes(ri(a.sliceSerialize(a.events[a.events.length - 1][1]).slice(1, -1))) ? r(h) : i(h);
    }
    function d(h) {
      return i(h);
    }
  }
  function KC(n, r, i) {
    return a;
    function a(s) {
      return n.enter("reference"), n.enter("referenceMarker"), n.consume(s), n.exit("referenceMarker"), u;
    }
    function u(s) {
      return s === 93 ? (n.enter("referenceMarker"), n.consume(s), n.exit("referenceMarker"), n.exit("reference"), r) : i(s);
    }
  }
  const ZC = {
    name: "labelStartImage",
    resolveAll: hd.resolveAll,
    tokenize: PC
  };
  function PC(n, r, i) {
    const a = this;
    return u;
    function u(h) {
      return n.enter("labelImage"), n.enter("labelImageMarker"), n.consume(h), n.exit("labelImageMarker"), s;
    }
    function s(h) {
      return h === 91 ? (n.enter("labelMarker"), n.consume(h), n.exit("labelMarker"), n.exit("labelImage"), d) : i(h);
    }
    function d(h) {
      return h === 94 && "_hiddenFootnoteSupport" in a.parser.constructs ? i(h) : r(h);
    }
  }
  const JC = {
    name: "labelStartLink",
    resolveAll: hd.resolveAll,
    tokenize: WC
  };
  function WC(n, r, i) {
    const a = this;
    return u;
    function u(d) {
      return n.enter("labelLink"), n.enter("labelMarker"), n.consume(d), n.exit("labelMarker"), n.exit("labelLink"), s;
    }
    function s(d) {
      return d === 94 && "_hiddenFootnoteSupport" in a.parser.constructs ? i(d) : r(d);
    }
  }
  const hf = {
    name: "lineEnding",
    tokenize: $C
  };
  function $C(n, r) {
    return i;
    function i(a) {
      return n.enter("lineEnding"), n.consume(a), n.exit("lineEnding"), Ie(n, r, "linePrefix");
    }
  }
  const cu = {
    name: "thematicBreak",
    tokenize: eA
  };
  function eA(n, r, i) {
    let a = 0, u;
    return s;
    function s(m) {
      return n.enter("thematicBreak"), d(m);
    }
    function d(m) {
      return u = m, h(m);
    }
    function h(m) {
      return m === u ? (n.enter("thematicBreakSequence"), p(m)) : a >= 3 && (m === null || ge(m)) ? (n.exit("thematicBreak"), r(m)) : i(m);
    }
    function p(m) {
      return m === u ? (n.consume(m), a++, p) : (n.exit("thematicBreakSequence"), De(m) ? Ie(n, h, "whitespace")(m) : h(m));
    }
  }
  const zt = {
    continuation: {
      tokenize: rA
    },
    exit: aA,
    name: "list",
    tokenize: lA
  }, tA = {
    partial: true,
    tokenize: oA
  }, nA = {
    partial: true,
    tokenize: iA
  };
  function lA(n, r, i) {
    const a = this, u = a.events[a.events.length - 1];
    let s = u && u[1].type === "linePrefix" ? u[2].sliceSerialize(u[1], true).length : 0, d = 0;
    return h;
    function h(b) {
      const T = a.containerState.type || (b === 42 || b === 43 || b === 45 ? "listUnordered" : "listOrdered");
      if (T === "listUnordered" ? !a.containerState.marker || b === a.containerState.marker : Hf(b)) {
        if (a.containerState.type || (a.containerState.type = T, n.enter(T, {
          _container: true
        })), T === "listUnordered") return n.enter("listItemPrefix"), b === 42 || b === 45 ? n.check(cu, i, m)(b) : m(b);
        if (!a.interrupt || b === 49) return n.enter("listItemPrefix"), n.enter("listItemValue"), p(b);
      }
      return i(b);
    }
    function p(b) {
      return Hf(b) && ++d < 10 ? (n.consume(b), p) : (!a.interrupt || d < 2) && (a.containerState.marker ? b === a.containerState.marker : b === 41 || b === 46) ? (n.exit("listItemValue"), m(b)) : i(b);
    }
    function m(b) {
      return n.enter("listItemMarker"), n.consume(b), n.exit("listItemMarker"), a.containerState.marker = a.containerState.marker || b, n.check(Tu, a.interrupt ? i : g, n.attempt(tA, x, y));
    }
    function g(b) {
      return a.containerState.initialBlankLine = true, s++, x(b);
    }
    function y(b) {
      return De(b) ? (n.enter("listItemPrefixWhitespace"), n.consume(b), n.exit("listItemPrefixWhitespace"), x) : i(b);
    }
    function x(b) {
      return a.containerState.size = s + a.sliceSerialize(n.exit("listItemPrefix"), true).length, r(b);
    }
  }
  function rA(n, r, i) {
    const a = this;
    return a.containerState._closeFlow = void 0, n.check(Tu, u, s);
    function u(h) {
      return a.containerState.furtherBlankLines = a.containerState.furtherBlankLines || a.containerState.initialBlankLine, Ie(n, r, "listItemIndent", a.containerState.size + 1)(h);
    }
    function s(h) {
      return a.containerState.furtherBlankLines || !De(h) ? (a.containerState.furtherBlankLines = void 0, a.containerState.initialBlankLine = void 0, d(h)) : (a.containerState.furtherBlankLines = void 0, a.containerState.initialBlankLine = void 0, n.attempt(nA, r, d)(h));
    }
    function d(h) {
      return a.containerState._closeFlow = true, a.interrupt = void 0, Ie(n, n.attempt(zt, r, i), "linePrefix", a.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(h);
    }
  }
  function iA(n, r, i) {
    const a = this;
    return Ie(n, u, "listItemIndent", a.containerState.size + 1);
    function u(s) {
      const d = a.events[a.events.length - 1];
      return d && d[1].type === "listItemIndent" && d[2].sliceSerialize(d[1], true).length === a.containerState.size ? r(s) : i(s);
    }
  }
  function aA(n) {
    n.exit(this.containerState.type);
  }
  function oA(n, r, i) {
    const a = this;
    return Ie(n, u, "listItemPrefixWhitespace", a.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
    function u(s) {
      const d = a.events[a.events.length - 1];
      return !De(s) && d && d[1].type === "listItemPrefixWhitespace" ? r(s) : i(s);
    }
  }
  const gy = {
    name: "setextUnderline",
    resolveTo: uA,
    tokenize: cA
  };
  function uA(n, r) {
    let i = n.length, a, u, s;
    for (; i--; ) if (n[i][0] === "enter") {
      if (n[i][1].type === "content") {
        a = i;
        break;
      }
      n[i][1].type === "paragraph" && (u = i);
    } else n[i][1].type === "content" && n.splice(i, 1), !s && n[i][1].type === "definition" && (s = i);
    const d = {
      type: "setextHeading",
      start: {
        ...n[a][1].start
      },
      end: {
        ...n[n.length - 1][1].end
      }
    };
    return n[u][1].type = "setextHeadingText", s ? (n.splice(u, 0, [
      "enter",
      d,
      r
    ]), n.splice(s + 1, 0, [
      "exit",
      n[a][1],
      r
    ]), n[a][1].end = {
      ...n[s][1].end
    }) : n[a][1] = d, n.push([
      "exit",
      d,
      r
    ]), n;
  }
  function cA(n, r, i) {
    const a = this;
    let u;
    return s;
    function s(m) {
      let g = a.events.length, y;
      for (; g--; ) if (a.events[g][1].type !== "lineEnding" && a.events[g][1].type !== "linePrefix" && a.events[g][1].type !== "content") {
        y = a.events[g][1].type === "paragraph";
        break;
      }
      return !a.parser.lazy[a.now().line] && (a.interrupt || y) ? (n.enter("setextHeadingLine"), u = m, d(m)) : i(m);
    }
    function d(m) {
      return n.enter("setextHeadingLineSequence"), h(m);
    }
    function h(m) {
      return m === u ? (n.consume(m), h) : (n.exit("setextHeadingLineSequence"), De(m) ? Ie(n, p, "lineSuffix")(m) : p(m));
    }
    function p(m) {
      return m === null || ge(m) ? (n.exit("setextHeadingLine"), r(m)) : i(m);
    }
  }
  const sA = {
    tokenize: fA
  };
  function fA(n) {
    const r = this, i = n.attempt(Tu, a, n.attempt(this.parser.constructs.flowInitial, u, Ie(n, n.attempt(this.parser.constructs.flow, u, n.attempt(gC, u)), "linePrefix")));
    return i;
    function a(s) {
      if (s === null) {
        n.consume(s);
        return;
      }
      return n.enter("lineEndingBlank"), n.consume(s), n.exit("lineEndingBlank"), r.currentConstruct = void 0, i;
    }
    function u(s) {
      if (s === null) {
        n.consume(s);
        return;
      }
      return n.enter("lineEnding"), n.consume(s), n.exit("lineEnding"), r.currentConstruct = void 0, i;
    }
  }
  const dA = {
    resolveAll: eb()
  }, hA = $v("string"), mA = $v("text");
  function $v(n) {
    return {
      resolveAll: eb(n === "text" ? pA : void 0),
      tokenize: r
    };
    function r(i) {
      const a = this, u = this.parser.constructs[n], s = i.attempt(u, d, h);
      return d;
      function d(g) {
        return m(g) ? s(g) : h(g);
      }
      function h(g) {
        if (g === null) {
          i.consume(g);
          return;
        }
        return i.enter("data"), i.consume(g), p;
      }
      function p(g) {
        return m(g) ? (i.exit("data"), s(g)) : (i.consume(g), p);
      }
      function m(g) {
        if (g === null) return true;
        const y = u[g];
        let x = -1;
        if (y) for (; ++x < y.length; ) {
          const b = y[x];
          if (!b.previous || b.previous.call(a, a.previous)) return true;
        }
        return false;
      }
    }
  }
  function eb(n) {
    return r;
    function r(i, a) {
      let u = -1, s;
      for (; ++u <= i.length; ) s === void 0 ? i[u] && i[u][1].type === "data" && (s = u, u++) : (!i[u] || i[u][1].type !== "data") && (u !== s + 2 && (i[s][1].end = i[u - 1][1].end, i.splice(s + 2, u - s - 2), u = s + 2), s = void 0);
      return n ? n(i, a) : i;
    }
  }
  function pA(n, r) {
    let i = 0;
    for (; ++i <= n.length; ) if ((i === n.length || n[i][1].type === "lineEnding") && n[i - 1][1].type === "data") {
      const a = n[i - 1][1], u = r.sliceStream(a);
      let s = u.length, d = -1, h = 0, p;
      for (; s--; ) {
        const m = u[s];
        if (typeof m == "string") {
          for (d = m.length; m.charCodeAt(d - 1) === 32; ) h++, d--;
          if (d) break;
          d = -1;
        } else if (m === -2) p = true, h++;
        else if (m !== -1) {
          s++;
          break;
        }
      }
      if (r._contentTypeTextTrailing && i === n.length && (h = 0), h) {
        const m = {
          type: i === n.length || p || h < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: s ? d : a.start._bufferIndex + d,
            _index: a.start._index + s,
            line: a.end.line,
            column: a.end.column - h,
            offset: a.end.offset - h
          },
          end: {
            ...a.end
          }
        };
        a.end = {
          ...m.start
        }, a.start.offset === a.end.offset ? Object.assign(a, m) : (n.splice(i, 0, [
          "enter",
          m,
          r
        ], [
          "exit",
          m,
          r
        ]), i += 2);
      }
      i++;
    }
    return n;
  }
  const gA = {
    42: zt,
    43: zt,
    45: zt,
    48: zt,
    49: zt,
    50: zt,
    51: zt,
    52: zt,
    53: zt,
    54: zt,
    55: zt,
    56: zt,
    57: zt,
    62: Qv
  }, yA = {
    91: SC
  }, vA = {
    [-2]: df,
    [-1]: df,
    32: df
  }, bA = {
    35: TC,
    42: cu,
    45: [
      gy,
      cu
    ],
    60: RC,
    61: gy,
    95: cu,
    96: my,
    126: my
  }, xA = {
    38: Kv,
    92: Fv
  }, SA = {
    [-5]: hf,
    [-4]: hf,
    [-3]: hf,
    33: ZC,
    38: Kv,
    42: qf,
    60: [
      JE,
      BC
    ],
    91: JC,
    92: [
      AC,
      Fv
    ],
    93: hd,
    95: qf,
    96: sC
  }, wA = {
    null: [
      qf,
      dA
    ]
  }, EA = {
    null: [
      42,
      95
    ]
  }, CA = {
    null: []
  }, AA = Object.freeze(Object.defineProperty({
    __proto__: null,
    attentionMarkers: EA,
    contentInitial: yA,
    disable: CA,
    document: gA,
    flow: bA,
    flowInitial: vA,
    insideSpan: wA,
    string: xA,
    text: SA
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  function _A(n, r, i) {
    let a = {
      _bufferIndex: -1,
      _index: 0,
      line: i && i.line || 1,
      column: i && i.column || 1,
      offset: i && i.offset || 0
    };
    const u = {}, s = [];
    let d = [], h = [];
    const p = {
      attempt: Z(J),
      check: Z(D),
      consume: V,
      enter: j,
      exit: G,
      interrupt: Z(D, {
        interrupt: true
      })
    }, m = {
      code: null,
      containerState: {},
      defineSkip: C,
      events: [],
      now: T,
      parser: n,
      previous: null,
      sliceSerialize: x,
      sliceStream: b,
      write: y
    };
    let g = r.tokenize.call(m, p);
    return r.resolveAll && s.push(r), m;
    function y(te) {
      return d = cn(d, te), k(), d[d.length - 1] !== null ? [] : (X(r, 0), m.events = dd(s, m.events, m), m.events);
    }
    function x(te, W) {
      return MA(b(te), W);
    }
    function b(te) {
      return TA(d, te);
    }
    function T() {
      const { _bufferIndex: te, _index: W, line: se, column: ne, offset: P } = a;
      return {
        _bufferIndex: te,
        _index: W,
        line: se,
        column: ne,
        offset: P
      };
    }
    function C(te) {
      u[te.line] = te.column, ie();
    }
    function k() {
      let te;
      for (; a._index < d.length; ) {
        const W = d[a._index];
        if (typeof W == "string") for (te = a._index, a._bufferIndex < 0 && (a._bufferIndex = 0); a._index === te && a._bufferIndex < W.length; ) O(W.charCodeAt(a._bufferIndex));
        else O(W);
      }
    }
    function O(te) {
      g = g(te);
    }
    function V(te) {
      ge(te) ? (a.line++, a.column = 1, a.offset += te === -3 ? 2 : 1, ie()) : te !== -1 && (a.column++, a.offset++), a._bufferIndex < 0 ? a._index++ : (a._bufferIndex++, a._bufferIndex === d[a._index].length && (a._bufferIndex = -1, a._index++)), m.previous = te;
    }
    function j(te, W) {
      const se = W || {};
      return se.type = te, se.start = T(), m.events.push([
        "enter",
        se,
        m
      ]), h.push(se), se;
    }
    function G(te) {
      const W = h.pop();
      return W.end = T(), m.events.push([
        "exit",
        W,
        m
      ]), W;
    }
    function J(te, W) {
      X(te, W.from);
    }
    function D(te, W) {
      W.restore();
    }
    function Z(te, W) {
      return se;
      function se(ne, P, N) {
        let Q, H, $, A;
        return Array.isArray(ne) ? ye(ne) : "tokenize" in ne ? ye([
          ne
        ]) : be(ne);
        function be(Ee) {
          return me;
          function me(Ze) {
            const et = Ze !== null && Ee[Ze], ft = Ze !== null && Ee.null, bt = [
              ...Array.isArray(et) ? et : et ? [
                et
              ] : [],
              ...Array.isArray(ft) ? ft : ft ? [
                ft
              ] : []
            ];
            return ye(bt)(Ze);
          }
        }
        function ye(Ee) {
          return Q = Ee, H = 0, Ee.length === 0 ? N : E(Ee[H]);
        }
        function E(Ee) {
          return me;
          function me(Ze) {
            return A = re(), $ = Ee, Ee.partial || (m.currentConstruct = Ee), Ee.name && m.parser.constructs.disable.null.includes(Ee.name) ? Be() : Ee.tokenize.call(W ? Object.assign(Object.create(m), W) : m, p, he, Be)(Ze);
          }
        }
        function he(Ee) {
          return te($, A), P;
        }
        function Be(Ee) {
          return A.restore(), ++H < Q.length ? E(Q[H]) : N;
        }
      }
    }
    function X(te, W) {
      te.resolveAll && !s.includes(te) && s.push(te), te.resolve && Tn(m.events, W, m.events.length - W, te.resolve(m.events.slice(W), m)), te.resolveTo && (m.events = te.resolveTo(m.events, m));
    }
    function re() {
      const te = T(), W = m.previous, se = m.currentConstruct, ne = m.events.length, P = Array.from(h);
      return {
        from: ne,
        restore: N
      };
      function N() {
        a = te, m.previous = W, m.currentConstruct = se, m.events.length = ne, h = P, ie();
      }
    }
    function ie() {
      a.line in u && a.column < 2 && (a.column = u[a.line], a.offset += u[a.line] - 1);
    }
  }
  function TA(n, r) {
    const i = r.start._index, a = r.start._bufferIndex, u = r.end._index, s = r.end._bufferIndex;
    let d;
    if (i === u) d = [
      n[i].slice(a, s)
    ];
    else {
      if (d = n.slice(i, u), a > -1) {
        const h = d[0];
        typeof h == "string" ? d[0] = h.slice(a) : d.shift();
      }
      s > 0 && d.push(n[u].slice(0, s));
    }
    return d;
  }
  function MA(n, r) {
    let i = -1;
    const a = [];
    let u;
    for (; ++i < n.length; ) {
      const s = n[i];
      let d;
      if (typeof s == "string") d = s;
      else switch (s) {
        case -5: {
          d = "\r";
          break;
        }
        case -4: {
          d = `
`;
          break;
        }
        case -3: {
          d = `\r
`;
          break;
        }
        case -2: {
          d = r ? " " : "	";
          break;
        }
        case -1: {
          if (!r && u) continue;
          d = " ";
          break;
        }
        default:
          d = String.fromCharCode(s);
      }
      u = s === -2, a.push(d);
    }
    return a.join("");
  }
  function OA(n) {
    const a = {
      constructs: LE([
        AA,
        ...(n || {}).extensions || []
      ]),
      content: u(XE),
      defined: [],
      document: u(QE),
      flow: u(sA),
      lazy: {},
      string: u(hA),
      text: u(mA)
    };
    return a;
    function u(s) {
      return d;
      function d(h) {
        return _A(a, s, h);
      }
    }
  }
  function kA(n) {
    for (; !Zv(n); ) ;
    return n;
  }
  const yy = /[\0\t\n\r]/g;
  function RA() {
    let n = 1, r = "", i = true, a;
    return u;
    function u(s, d, h) {
      const p = [];
      let m, g, y, x, b;
      for (s = r + (typeof s == "string" ? s.toString() : new TextDecoder(d || void 0).decode(s)), y = 0, r = "", i && (s.charCodeAt(0) === 65279 && y++, i = void 0); y < s.length; ) {
        if (yy.lastIndex = y, m = yy.exec(s), x = m && m.index !== void 0 ? m.index : s.length, b = s.charCodeAt(x), !m) {
          r = s.slice(y);
          break;
        }
        if (b === 10 && y === x && a) p.push(-3), a = void 0;
        else switch (a && (p.push(-5), a = void 0), y < x && (p.push(s.slice(y, x)), n += x - y), b) {
          case 0: {
            p.push(65533), n++;
            break;
          }
          case 9: {
            for (g = Math.ceil(n / 4) * 4, p.push(-2); n++ < g; ) p.push(-1);
            break;
          }
          case 10: {
            p.push(-4), n = 1;
            break;
          }
          default:
            a = true, n = 1;
        }
        y = x + 1;
      }
      return h && (a && p.push(-5), r && p.push(r), p.push(null)), p;
    }
  }
  const NA = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
  function zA(n) {
    return n.replace(NA, DA);
  }
  function DA(n, r, i) {
    if (r) return r;
    if (i.charCodeAt(0) === 35) {
      const u = i.charCodeAt(1), s = u === 120 || u === 88;
      return Iv(i.slice(s ? 2 : 1), s ? 16 : 10);
    }
    return fd(i) || n;
  }
  const tb = {}.hasOwnProperty;
  function jA(n, r, i) {
    return typeof r != "string" && (i = r, r = void 0), LA(i)(kA(OA(i).document().write(RA()(n, r, true))));
  }
  function LA(n) {
    const r = {
      transforms: [],
      canContainEols: [
        "emphasis",
        "fragment",
        "heading",
        "paragraph",
        "strong"
      ],
      enter: {
        autolink: s(sr),
        autolinkProtocol: re,
        autolinkEmail: re,
        atxHeading: s(ur),
        blockQuote: s(ft),
        characterEscape: re,
        characterReference: re,
        codeFenced: s(bt),
        codeFencedFenceInfo: d,
        codeFencedFenceMeta: d,
        codeIndented: s(bt, d),
        codeText: s(Pt, d),
        codeTextData: re,
        data: re,
        codeFlowValue: re,
        definition: s(kn),
        definitionDestinationString: d,
        definitionLabelString: d,
        definitionTitleString: d,
        emphasis: s(Rn),
        hardBreakEscape: s(cr),
        hardBreakTrailing: s(cr),
        htmlFlow: s(ka, d),
        htmlFlowData: re,
        htmlText: s(ka, d),
        htmlTextData: re,
        image: s(Ra),
        label: d,
        link: s(sr),
        listItem: s(hi),
        listItemValue: x,
        listOrdered: s(fr, y),
        listUnordered: s(fr),
        paragraph: s(Hu),
        reference: E,
        referenceString: d,
        resourceDestinationString: d,
        resourceTitleString: d,
        setextHeading: s(ur),
        strong: s(qu),
        thematicBreak: s(Vu)
      },
      exit: {
        atxHeading: p(),
        atxHeadingSequence: J,
        autolink: p(),
        autolinkEmail: et,
        autolinkProtocol: Ze,
        blockQuote: p(),
        characterEscapeValue: ie,
        characterReferenceMarkerHexadecimal: Be,
        characterReferenceMarkerNumeric: Be,
        characterReferenceValue: Ee,
        characterReference: me,
        codeFenced: p(k),
        codeFencedFence: C,
        codeFencedFenceInfo: b,
        codeFencedFenceMeta: T,
        codeFlowValue: ie,
        codeIndented: p(O),
        codeText: p(P),
        codeTextData: ie,
        data: ie,
        definition: p(),
        definitionDestinationString: G,
        definitionLabelString: V,
        definitionTitleString: j,
        emphasis: p(),
        hardBreakEscape: p(W),
        hardBreakTrailing: p(W),
        htmlFlow: p(se),
        htmlFlowData: ie,
        htmlText: p(ne),
        htmlTextData: ie,
        image: p(Q),
        label: $,
        labelText: H,
        lineEnding: te,
        link: p(N),
        listItem: p(),
        listOrdered: p(),
        listUnordered: p(),
        paragraph: p(),
        referenceString: he,
        resourceDestinationString: A,
        resourceTitleString: be,
        resource: ye,
        setextHeading: p(X),
        setextHeadingLineSequence: Z,
        setextHeadingText: D,
        strong: p(),
        thematicBreak: p()
      }
    };
    nb(r, (n || {}).mdastExtensions || []);
    const i = {};
    return a;
    function a(I) {
      let le = {
        type: "root",
        children: []
      };
      const pe = {
        stack: [
          le
        ],
        tokenStack: [],
        config: r,
        enter: h,
        exit: m,
        buffer: d,
        resume: g,
        data: i
      }, Ce = [];
      let je = -1;
      for (; ++je < I.length; ) if (I[je][1].type === "listOrdered" || I[je][1].type === "listUnordered") if (I[je][0] === "enter") Ce.push(je);
      else {
        const Ut = Ce.pop();
        je = u(I, Ut, je);
      }
      for (je = -1; ++je < I.length; ) {
        const Ut = r[I[je][0]];
        tb.call(Ut, I[je][1].type) && Ut[I[je][1].type].call(Object.assign({
          sliceSerialize: I[je][2].sliceSerialize
        }, pe), I[je][1]);
      }
      if (pe.tokenStack.length > 0) {
        const Ut = pe.tokenStack[pe.tokenStack.length - 1];
        (Ut[1] || vy).call(pe, void 0, Ut[0]);
      }
      for (le.position = {
        start: Tl(I.length > 0 ? I[0][1].start : {
          line: 1,
          column: 1,
          offset: 0
        }),
        end: Tl(I.length > 0 ? I[I.length - 2][1].end : {
          line: 1,
          column: 1,
          offset: 0
        })
      }, je = -1; ++je < r.transforms.length; ) le = r.transforms[je](le) || le;
      return le;
    }
    function u(I, le, pe) {
      let Ce = le - 1, je = -1, Ut = false, Nn, St, at, At;
      for (; ++Ce <= pe; ) {
        const Ge = I[Ce];
        switch (Ge[1].type) {
          case "listUnordered":
          case "listOrdered":
          case "blockQuote": {
            Ge[0] === "enter" ? je++ : je--, At = void 0;
            break;
          }
          case "lineEndingBlank": {
            Ge[0] === "enter" && (Nn && !At && !je && !at && (at = Ce), At = void 0);
            break;
          }
          case "linePrefix":
          case "listItemValue":
          case "listItemMarker":
          case "listItemPrefix":
          case "listItemPrefixWhitespace":
            break;
          default:
            At = void 0;
        }
        if (!je && Ge[0] === "enter" && Ge[1].type === "listItemPrefix" || je === -1 && Ge[0] === "exit" && (Ge[1].type === "listUnordered" || Ge[1].type === "listOrdered")) {
          if (Nn) {
            let nl = Ce;
            for (St = void 0; nl--; ) {
              const dn = I[nl];
              if (dn[1].type === "lineEnding" || dn[1].type === "lineEndingBlank") {
                if (dn[0] === "exit") continue;
                St && (I[St][1].type = "lineEndingBlank", Ut = true), dn[1].type = "lineEnding", St = nl;
              } else if (!(dn[1].type === "linePrefix" || dn[1].type === "blockQuotePrefix" || dn[1].type === "blockQuotePrefixWhitespace" || dn[1].type === "blockQuoteMarker" || dn[1].type === "listItemIndent")) break;
            }
            at && (!St || at < St) && (Nn._spread = true), Nn.end = Object.assign({}, St ? I[St][1].start : Ge[1].end), I.splice(St || Ce, 0, [
              "exit",
              Nn,
              Ge[2]
            ]), Ce++, pe++;
          }
          if (Ge[1].type === "listItemPrefix") {
            const nl = {
              type: "listItem",
              _spread: false,
              start: Object.assign({}, Ge[1].start),
              end: void 0
            };
            Nn = nl, I.splice(Ce, 0, [
              "enter",
              nl,
              Ge[2]
            ]), Ce++, pe++, at = void 0, At = true;
          }
        }
      }
      return I[le][1]._spread = Ut, pe;
    }
    function s(I, le) {
      return pe;
      function pe(Ce) {
        h.call(this, I(Ce), Ce), le && le.call(this, Ce);
      }
    }
    function d() {
      this.stack.push({
        type: "fragment",
        children: []
      });
    }
    function h(I, le, pe) {
      this.stack[this.stack.length - 1].children.push(I), this.stack.push(I), this.tokenStack.push([
        le,
        pe || void 0
      ]), I.position = {
        start: Tl(le.start),
        end: void 0
      };
    }
    function p(I) {
      return le;
      function le(pe) {
        I && I.call(this, pe), m.call(this, pe);
      }
    }
    function m(I, le) {
      const pe = this.stack.pop(), Ce = this.tokenStack.pop();
      if (Ce) Ce[0].type !== I.type && (le ? le.call(this, I, Ce[0]) : (Ce[1] || vy).call(this, I, Ce[0]));
      else throw new Error("Cannot close `" + I.type + "` (" + ma({
        start: I.start,
        end: I.end
      }) + "): it\u2019s not open");
      pe.position.end = Tl(I.end);
    }
    function g() {
      return DE(this.stack.pop());
    }
    function y() {
      this.data.expectingFirstListItemValue = true;
    }
    function x(I) {
      if (this.data.expectingFirstListItemValue) {
        const le = this.stack[this.stack.length - 2];
        le.start = Number.parseInt(this.sliceSerialize(I), 10), this.data.expectingFirstListItemValue = void 0;
      }
    }
    function b() {
      const I = this.resume(), le = this.stack[this.stack.length - 1];
      le.lang = I;
    }
    function T() {
      const I = this.resume(), le = this.stack[this.stack.length - 1];
      le.meta = I;
    }
    function C() {
      this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = true);
    }
    function k() {
      const I = this.resume(), le = this.stack[this.stack.length - 1];
      le.value = I.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
    }
    function O() {
      const I = this.resume(), le = this.stack[this.stack.length - 1];
      le.value = I.replace(/(\r?\n|\r)$/g, "");
    }
    function V(I) {
      const le = this.resume(), pe = this.stack[this.stack.length - 1];
      pe.label = le, pe.identifier = ri(this.sliceSerialize(I)).toLowerCase();
    }
    function j() {
      const I = this.resume(), le = this.stack[this.stack.length - 1];
      le.title = I;
    }
    function G() {
      const I = this.resume(), le = this.stack[this.stack.length - 1];
      le.url = I;
    }
    function J(I) {
      const le = this.stack[this.stack.length - 1];
      if (!le.depth) {
        const pe = this.sliceSerialize(I).length;
        le.depth = pe;
      }
    }
    function D() {
      this.data.setextHeadingSlurpLineEnding = true;
    }
    function Z(I) {
      const le = this.stack[this.stack.length - 1];
      le.depth = this.sliceSerialize(I).codePointAt(0) === 61 ? 1 : 2;
    }
    function X() {
      this.data.setextHeadingSlurpLineEnding = void 0;
    }
    function re(I) {
      const pe = this.stack[this.stack.length - 1].children;
      let Ce = pe[pe.length - 1];
      (!Ce || Ce.type !== "text") && (Ce = xt(), Ce.position = {
        start: Tl(I.start),
        end: void 0
      }, pe.push(Ce)), this.stack.push(Ce);
    }
    function ie(I) {
      const le = this.stack.pop();
      le.value += this.sliceSerialize(I), le.position.end = Tl(I.end);
    }
    function te(I) {
      const le = this.stack[this.stack.length - 1];
      if (this.data.atHardBreak) {
        const pe = le.children[le.children.length - 1];
        pe.position.end = Tl(I.end), this.data.atHardBreak = void 0;
        return;
      }
      !this.data.setextHeadingSlurpLineEnding && r.canContainEols.includes(le.type) && (re.call(this, I), ie.call(this, I));
    }
    function W() {
      this.data.atHardBreak = true;
    }
    function se() {
      const I = this.resume(), le = this.stack[this.stack.length - 1];
      le.value = I;
    }
    function ne() {
      const I = this.resume(), le = this.stack[this.stack.length - 1];
      le.value = I;
    }
    function P() {
      const I = this.resume(), le = this.stack[this.stack.length - 1];
      le.value = I;
    }
    function N() {
      const I = this.stack[this.stack.length - 1];
      if (this.data.inReference) {
        const le = this.data.referenceType || "shortcut";
        I.type += "Reference", I.referenceType = le, delete I.url, delete I.title;
      } else delete I.identifier, delete I.label;
      this.data.referenceType = void 0;
    }
    function Q() {
      const I = this.stack[this.stack.length - 1];
      if (this.data.inReference) {
        const le = this.data.referenceType || "shortcut";
        I.type += "Reference", I.referenceType = le, delete I.url, delete I.title;
      } else delete I.identifier, delete I.label;
      this.data.referenceType = void 0;
    }
    function H(I) {
      const le = this.sliceSerialize(I), pe = this.stack[this.stack.length - 2];
      pe.label = zA(le), pe.identifier = ri(le).toLowerCase();
    }
    function $() {
      const I = this.stack[this.stack.length - 1], le = this.resume(), pe = this.stack[this.stack.length - 1];
      if (this.data.inReference = true, pe.type === "link") {
        const Ce = I.children;
        pe.children = Ce;
      } else pe.alt = le;
    }
    function A() {
      const I = this.resume(), le = this.stack[this.stack.length - 1];
      le.url = I;
    }
    function be() {
      const I = this.resume(), le = this.stack[this.stack.length - 1];
      le.title = I;
    }
    function ye() {
      this.data.inReference = void 0;
    }
    function E() {
      this.data.referenceType = "collapsed";
    }
    function he(I) {
      const le = this.resume(), pe = this.stack[this.stack.length - 1];
      pe.label = le, pe.identifier = ri(this.sliceSerialize(I)).toLowerCase(), this.data.referenceType = "full";
    }
    function Be(I) {
      this.data.characterReferenceType = I.type;
    }
    function Ee(I) {
      const le = this.sliceSerialize(I), pe = this.data.characterReferenceType;
      let Ce;
      pe ? (Ce = Iv(le, pe === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : Ce = fd(le);
      const je = this.stack[this.stack.length - 1];
      je.value += Ce;
    }
    function me(I) {
      const le = this.stack.pop();
      le.position.end = Tl(I.end);
    }
    function Ze(I) {
      ie.call(this, I);
      const le = this.stack[this.stack.length - 1];
      le.url = this.sliceSerialize(I);
    }
    function et(I) {
      ie.call(this, I);
      const le = this.stack[this.stack.length - 1];
      le.url = "mailto:" + this.sliceSerialize(I);
    }
    function ft() {
      return {
        type: "blockquote",
        children: []
      };
    }
    function bt() {
      return {
        type: "code",
        lang: null,
        meta: null,
        value: ""
      };
    }
    function Pt() {
      return {
        type: "inlineCode",
        value: ""
      };
    }
    function kn() {
      return {
        type: "definition",
        identifier: "",
        label: null,
        title: null,
        url: ""
      };
    }
    function Rn() {
      return {
        type: "emphasis",
        children: []
      };
    }
    function ur() {
      return {
        type: "heading",
        depth: 0,
        children: []
      };
    }
    function cr() {
      return {
        type: "break"
      };
    }
    function ka() {
      return {
        type: "html",
        value: ""
      };
    }
    function Ra() {
      return {
        type: "image",
        title: null,
        url: "",
        alt: null
      };
    }
    function sr() {
      return {
        type: "link",
        title: null,
        url: "",
        children: []
      };
    }
    function fr(I) {
      return {
        type: "list",
        ordered: I.type === "listOrdered",
        start: null,
        spread: I._spread,
        children: []
      };
    }
    function hi(I) {
      return {
        type: "listItem",
        spread: I._spread,
        checked: null,
        children: []
      };
    }
    function Hu() {
      return {
        type: "paragraph",
        children: []
      };
    }
    function qu() {
      return {
        type: "strong",
        children: []
      };
    }
    function xt() {
      return {
        type: "text",
        value: ""
      };
    }
    function Vu() {
      return {
        type: "thematicBreak"
      };
    }
  }
  function Tl(n) {
    return {
      line: n.line,
      column: n.column,
      offset: n.offset
    };
  }
  function nb(n, r) {
    let i = -1;
    for (; ++i < r.length; ) {
      const a = r[i];
      Array.isArray(a) ? nb(n, a) : UA(n, a);
    }
  }
  function UA(n, r) {
    let i;
    for (i in r) if (tb.call(r, i)) switch (i) {
      case "canContainEols": {
        const a = r[i];
        a && n[i].push(...a);
        break;
      }
      case "transforms": {
        const a = r[i];
        a && n[i].push(...a);
        break;
      }
      case "enter":
      case "exit": {
        const a = r[i];
        a && Object.assign(n[i], a);
        break;
      }
    }
  }
  function vy(n, r) {
    throw n ? new Error("Cannot close `" + n.type + "` (" + ma({
      start: n.start,
      end: n.end
    }) + "): a different token (`" + r.type + "`, " + ma({
      start: r.start,
      end: r.end
    }) + ") is open") : new Error("Cannot close document, a token (`" + r.type + "`, " + ma({
      start: r.start,
      end: r.end
    }) + ") is still open");
  }
  function BA(n) {
    const r = this;
    r.parser = i;
    function i(a) {
      return jA(a, {
        ...r.data("settings"),
        ...n,
        extensions: r.data("micromarkExtensions") || [],
        mdastExtensions: r.data("fromMarkdownExtensions") || []
      });
    }
  }
  function HA(n, r) {
    const i = {
      type: "element",
      tagName: "blockquote",
      properties: {},
      children: n.wrap(n.all(r), true)
    };
    return n.patch(r, i), n.applyData(r, i);
  }
  function qA(n, r) {
    const i = {
      type: "element",
      tagName: "br",
      properties: {},
      children: []
    };
    return n.patch(r, i), [
      n.applyData(r, i),
      {
        type: "text",
        value: `
`
      }
    ];
  }
  function VA(n, r) {
    const i = r.value ? r.value + `
` : "", a = {}, u = r.lang ? r.lang.split(/\s+/) : [];
    u.length > 0 && (a.className = [
      "language-" + u[0]
    ]);
    let s = {
      type: "element",
      tagName: "code",
      properties: a,
      children: [
        {
          type: "text",
          value: i
        }
      ]
    };
    return r.meta && (s.data = {
      meta: r.meta
    }), n.patch(r, s), s = n.applyData(r, s), s = {
      type: "element",
      tagName: "pre",
      properties: {},
      children: [
        s
      ]
    }, n.patch(r, s), s;
  }
  function GA(n, r) {
    const i = {
      type: "element",
      tagName: "del",
      properties: {},
      children: n.all(r)
    };
    return n.patch(r, i), n.applyData(r, i);
  }
  function YA(n, r) {
    const i = {
      type: "element",
      tagName: "em",
      properties: {},
      children: n.all(r)
    };
    return n.patch(r, i), n.applyData(r, i);
  }
  function XA(n, r) {
    const i = typeof n.options.clobberPrefix == "string" ? n.options.clobberPrefix : "user-content-", a = String(r.identifier).toUpperCase(), u = si(a.toLowerCase()), s = n.footnoteOrder.indexOf(a);
    let d, h = n.footnoteCounts.get(a);
    h === void 0 ? (h = 0, n.footnoteOrder.push(a), d = n.footnoteOrder.length) : d = s + 1, h += 1, n.footnoteCounts.set(a, h);
    const p = {
      type: "element",
      tagName: "a",
      properties: {
        href: "#" + i + "fn-" + u,
        id: i + "fnref-" + u + (h > 1 ? "-" + h : ""),
        dataFootnoteRef: true,
        ariaDescribedBy: [
          "footnote-label"
        ]
      },
      children: [
        {
          type: "text",
          value: String(d)
        }
      ]
    };
    n.patch(r, p);
    const m = {
      type: "element",
      tagName: "sup",
      properties: {},
      children: [
        p
      ]
    };
    return n.patch(r, m), n.applyData(r, m);
  }
  function IA(n, r) {
    const i = {
      type: "element",
      tagName: "h" + r.depth,
      properties: {},
      children: n.all(r)
    };
    return n.patch(r, i), n.applyData(r, i);
  }
  function QA(n, r) {
    if (n.options.allowDangerousHtml) {
      const i = {
        type: "raw",
        value: r.value
      };
      return n.patch(r, i), n.applyData(r, i);
    }
  }
  function lb(n, r) {
    const i = r.referenceType;
    let a = "]";
    if (i === "collapsed" ? a += "[]" : i === "full" && (a += "[" + (r.label || r.identifier) + "]"), r.type === "imageReference") return [
      {
        type: "text",
        value: "![" + r.alt + a
      }
    ];
    const u = n.all(r), s = u[0];
    s && s.type === "text" ? s.value = "[" + s.value : u.unshift({
      type: "text",
      value: "["
    });
    const d = u[u.length - 1];
    return d && d.type === "text" ? d.value += a : u.push({
      type: "text",
      value: a
    }), u;
  }
  function FA(n, r) {
    const i = String(r.identifier).toUpperCase(), a = n.definitionById.get(i);
    if (!a) return lb(n, r);
    const u = {
      src: si(a.url || ""),
      alt: r.alt
    };
    a.title !== null && a.title !== void 0 && (u.title = a.title);
    const s = {
      type: "element",
      tagName: "img",
      properties: u,
      children: []
    };
    return n.patch(r, s), n.applyData(r, s);
  }
  function KA(n, r) {
    const i = {
      src: si(r.url)
    };
    r.alt !== null && r.alt !== void 0 && (i.alt = r.alt), r.title !== null && r.title !== void 0 && (i.title = r.title);
    const a = {
      type: "element",
      tagName: "img",
      properties: i,
      children: []
    };
    return n.patch(r, a), n.applyData(r, a);
  }
  function ZA(n, r) {
    const i = {
      type: "text",
      value: r.value.replace(/\r?\n|\r/g, " ")
    };
    n.patch(r, i);
    const a = {
      type: "element",
      tagName: "code",
      properties: {},
      children: [
        i
      ]
    };
    return n.patch(r, a), n.applyData(r, a);
  }
  function PA(n, r) {
    const i = String(r.identifier).toUpperCase(), a = n.definitionById.get(i);
    if (!a) return lb(n, r);
    const u = {
      href: si(a.url || "")
    };
    a.title !== null && a.title !== void 0 && (u.title = a.title);
    const s = {
      type: "element",
      tagName: "a",
      properties: u,
      children: n.all(r)
    };
    return n.patch(r, s), n.applyData(r, s);
  }
  function JA(n, r) {
    const i = {
      href: si(r.url)
    };
    r.title !== null && r.title !== void 0 && (i.title = r.title);
    const a = {
      type: "element",
      tagName: "a",
      properties: i,
      children: n.all(r)
    };
    return n.patch(r, a), n.applyData(r, a);
  }
  function WA(n, r, i) {
    const a = n.all(r), u = i ? $A(i) : rb(r), s = {}, d = [];
    if (typeof r.checked == "boolean") {
      const g = a[0];
      let y;
      g && g.type === "element" && g.tagName === "p" ? y = g : (y = {
        type: "element",
        tagName: "p",
        properties: {},
        children: []
      }, a.unshift(y)), y.children.length > 0 && y.children.unshift({
        type: "text",
        value: " "
      }), y.children.unshift({
        type: "element",
        tagName: "input",
        properties: {
          type: "checkbox",
          checked: r.checked,
          disabled: true
        },
        children: []
      }), s.className = [
        "task-list-item"
      ];
    }
    let h = -1;
    for (; ++h < a.length; ) {
      const g = a[h];
      (u || h !== 0 || g.type !== "element" || g.tagName !== "p") && d.push({
        type: "text",
        value: `
`
      }), g.type === "element" && g.tagName === "p" && !u ? d.push(...g.children) : d.push(g);
    }
    const p = a[a.length - 1];
    p && (u || p.type !== "element" || p.tagName !== "p") && d.push({
      type: "text",
      value: `
`
    });
    const m = {
      type: "element",
      tagName: "li",
      properties: s,
      children: d
    };
    return n.patch(r, m), n.applyData(r, m);
  }
  function $A(n) {
    let r = false;
    if (n.type === "list") {
      r = n.spread || false;
      const i = n.children;
      let a = -1;
      for (; !r && ++a < i.length; ) r = rb(i[a]);
    }
    return r;
  }
  function rb(n) {
    const r = n.spread;
    return r ?? n.children.length > 1;
  }
  function e2(n, r) {
    const i = {}, a = n.all(r);
    let u = -1;
    for (typeof r.start == "number" && r.start !== 1 && (i.start = r.start); ++u < a.length; ) {
      const d = a[u];
      if (d.type === "element" && d.tagName === "li" && d.properties && Array.isArray(d.properties.className) && d.properties.className.includes("task-list-item")) {
        i.className = [
          "contains-task-list"
        ];
        break;
      }
    }
    const s = {
      type: "element",
      tagName: r.ordered ? "ol" : "ul",
      properties: i,
      children: n.wrap(a, true)
    };
    return n.patch(r, s), n.applyData(r, s);
  }
  function t2(n, r) {
    const i = {
      type: "element",
      tagName: "p",
      properties: {},
      children: n.all(r)
    };
    return n.patch(r, i), n.applyData(r, i);
  }
  function n2(n, r) {
    const i = {
      type: "root",
      children: n.wrap(n.all(r))
    };
    return n.patch(r, i), n.applyData(r, i);
  }
  function l2(n, r) {
    const i = {
      type: "element",
      tagName: "strong",
      properties: {},
      children: n.all(r)
    };
    return n.patch(r, i), n.applyData(r, i);
  }
  function r2(n, r) {
    const i = n.all(r), a = i.shift(), u = [];
    if (a) {
      const d = {
        type: "element",
        tagName: "thead",
        properties: {},
        children: n.wrap([
          a
        ], true)
      };
      n.patch(r.children[0], d), u.push(d);
    }
    if (i.length > 0) {
      const d = {
        type: "element",
        tagName: "tbody",
        properties: {},
        children: n.wrap(i, true)
      }, h = od(r.children[1]), p = Bv(r.children[r.children.length - 1]);
      h && p && (d.position = {
        start: h,
        end: p
      }), u.push(d);
    }
    const s = {
      type: "element",
      tagName: "table",
      properties: {},
      children: n.wrap(u, true)
    };
    return n.patch(r, s), n.applyData(r, s);
  }
  function i2(n, r, i) {
    const a = i ? i.children : void 0, s = (a ? a.indexOf(r) : 1) === 0 ? "th" : "td", d = i && i.type === "table" ? i.align : void 0, h = d ? d.length : r.children.length;
    let p = -1;
    const m = [];
    for (; ++p < h; ) {
      const y = r.children[p], x = {}, b = d ? d[p] : void 0;
      b && (x.align = b);
      let T = {
        type: "element",
        tagName: s,
        properties: x,
        children: []
      };
      y && (T.children = n.all(y), n.patch(y, T), T = n.applyData(y, T)), m.push(T);
    }
    const g = {
      type: "element",
      tagName: "tr",
      properties: {},
      children: n.wrap(m, true)
    };
    return n.patch(r, g), n.applyData(r, g);
  }
  function a2(n, r) {
    const i = {
      type: "element",
      tagName: "td",
      properties: {},
      children: n.all(r)
    };
    return n.patch(r, i), n.applyData(r, i);
  }
  const by = 9, xy = 32;
  function o2(n) {
    const r = String(n), i = /\r?\n|\r/g;
    let a = i.exec(r), u = 0;
    const s = [];
    for (; a; ) s.push(Sy(r.slice(u, a.index), u > 0, true), a[0]), u = a.index + a[0].length, a = i.exec(r);
    return s.push(Sy(r.slice(u), u > 0, false)), s.join("");
  }
  function Sy(n, r, i) {
    let a = 0, u = n.length;
    if (r) {
      let s = n.codePointAt(a);
      for (; s === by || s === xy; ) a++, s = n.codePointAt(a);
    }
    if (i) {
      let s = n.codePointAt(u - 1);
      for (; s === by || s === xy; ) u--, s = n.codePointAt(u - 1);
    }
    return u > a ? n.slice(a, u) : "";
  }
  function u2(n, r) {
    const i = {
      type: "text",
      value: o2(String(r.value))
    };
    return n.patch(r, i), n.applyData(r, i);
  }
  function c2(n, r) {
    const i = {
      type: "element",
      tagName: "hr",
      properties: {},
      children: []
    };
    return n.patch(r, i), n.applyData(r, i);
  }
  const s2 = {
    blockquote: HA,
    break: qA,
    code: VA,
    delete: GA,
    emphasis: YA,
    footnoteReference: XA,
    heading: IA,
    html: QA,
    imageReference: FA,
    image: KA,
    inlineCode: ZA,
    linkReference: PA,
    link: JA,
    listItem: WA,
    list: e2,
    paragraph: t2,
    root: n2,
    strong: l2,
    table: r2,
    tableCell: a2,
    tableRow: i2,
    text: u2,
    thematicBreak: c2,
    toml: Po,
    yaml: Po,
    definition: Po,
    footnoteDefinition: Po
  };
  function Po() {
  }
  const ib = -1, Mu = 0, ga = 1, gu = 2, md = 3, pd = 4, gd = 5, yd = 6, ab = 7, ob = 8, wy = typeof self == "object" ? self : globalThis, f2 = (n, r) => {
    const i = (u, s) => (n.set(s, u), u), a = (u) => {
      if (n.has(u)) return n.get(u);
      const [s, d] = r[u];
      switch (s) {
        case Mu:
        case ib:
          return i(d, u);
        case ga: {
          const h = i([], u);
          for (const p of d) h.push(a(p));
          return h;
        }
        case gu: {
          const h = i({}, u);
          for (const [p, m] of d) h[a(p)] = a(m);
          return h;
        }
        case md:
          return i(new Date(d), u);
        case pd: {
          const { source: h, flags: p } = d;
          return i(new RegExp(h, p), u);
        }
        case gd: {
          const h = i(/* @__PURE__ */ new Map(), u);
          for (const [p, m] of d) h.set(a(p), a(m));
          return h;
        }
        case yd: {
          const h = i(/* @__PURE__ */ new Set(), u);
          for (const p of d) h.add(a(p));
          return h;
        }
        case ab: {
          const { name: h, message: p } = d;
          return i(new wy[h](p), u);
        }
        case ob:
          return i(BigInt(d), u);
        case "BigInt":
          return i(Object(BigInt(d)), u);
        case "ArrayBuffer":
          return i(new Uint8Array(d).buffer, d);
        case "DataView": {
          const { buffer: h } = new Uint8Array(d);
          return i(new DataView(h), d);
        }
      }
      return i(new wy[s](d), u);
    };
    return a;
  }, Ey = (n) => f2(/* @__PURE__ */ new Map(), n)(0), Wr = "", { toString: d2 } = {}, { keys: h2 } = Object, ca = (n) => {
    const r = typeof n;
    if (r !== "object" || !n) return [
      Mu,
      r
    ];
    const i = d2.call(n).slice(8, -1);
    switch (i) {
      case "Array":
        return [
          ga,
          Wr
        ];
      case "Object":
        return [
          gu,
          Wr
        ];
      case "Date":
        return [
          md,
          Wr
        ];
      case "RegExp":
        return [
          pd,
          Wr
        ];
      case "Map":
        return [
          gd,
          Wr
        ];
      case "Set":
        return [
          yd,
          Wr
        ];
      case "DataView":
        return [
          ga,
          i
        ];
    }
    return i.includes("Array") ? [
      ga,
      i
    ] : i.includes("Error") ? [
      ab,
      i
    ] : [
      gu,
      i
    ];
  }, Jo = ([n, r]) => n === Mu && (r === "function" || r === "symbol"), m2 = (n, r, i, a) => {
    const u = (d, h) => {
      const p = a.push(d) - 1;
      return i.set(h, p), p;
    }, s = (d) => {
      if (i.has(d)) return i.get(d);
      let [h, p] = ca(d);
      switch (h) {
        case Mu: {
          let g = d;
          switch (p) {
            case "bigint":
              h = ob, g = d.toString();
              break;
            case "function":
            case "symbol":
              if (n) throw new TypeError("unable to serialize " + p);
              g = null;
              break;
            case "undefined":
              return u([
                ib
              ], d);
          }
          return u([
            h,
            g
          ], d);
        }
        case ga: {
          if (p) {
            let x = d;
            return p === "DataView" ? x = new Uint8Array(d.buffer) : p === "ArrayBuffer" && (x = new Uint8Array(d)), u([
              p,
              [
                ...x
              ]
            ], d);
          }
          const g = [], y = u([
            h,
            g
          ], d);
          for (const x of d) g.push(s(x));
          return y;
        }
        case gu: {
          if (p) switch (p) {
            case "BigInt":
              return u([
                p,
                d.toString()
              ], d);
            case "Boolean":
            case "Number":
            case "String":
              return u([
                p,
                d.valueOf()
              ], d);
          }
          if (r && "toJSON" in d) return s(d.toJSON());
          const g = [], y = u([
            h,
            g
          ], d);
          for (const x of h2(d)) (n || !Jo(ca(d[x]))) && g.push([
            s(x),
            s(d[x])
          ]);
          return y;
        }
        case md:
          return u([
            h,
            d.toISOString()
          ], d);
        case pd: {
          const { source: g, flags: y } = d;
          return u([
            h,
            {
              source: g,
              flags: y
            }
          ], d);
        }
        case gd: {
          const g = [], y = u([
            h,
            g
          ], d);
          for (const [x, b] of d) (n || !(Jo(ca(x)) || Jo(ca(b)))) && g.push([
            s(x),
            s(b)
          ]);
          return y;
        }
        case yd: {
          const g = [], y = u([
            h,
            g
          ], d);
          for (const x of d) (n || !Jo(ca(x))) && g.push(s(x));
          return y;
        }
      }
      const { message: m } = d;
      return u([
        h,
        {
          name: p,
          message: m
        }
      ], d);
    };
    return s;
  }, Cy = (n, { json: r, lossy: i } = {}) => {
    const a = [];
    return m2(!(r || i), !!r, /* @__PURE__ */ new Map(), a)(n), a;
  }, yu = typeof structuredClone == "function" ? (n, r) => r && ("json" in r || "lossy" in r) ? Ey(Cy(n, r)) : structuredClone(n) : (n, r) => Ey(Cy(n, r));
  function p2(n, r) {
    const i = [
      {
        type: "text",
        value: "\u21A9"
      }
    ];
    return r > 1 && i.push({
      type: "element",
      tagName: "sup",
      properties: {},
      children: [
        {
          type: "text",
          value: String(r)
        }
      ]
    }), i;
  }
  function g2(n, r) {
    return "Back to reference " + (n + 1) + (r > 1 ? "-" + r : "");
  }
  function y2(n) {
    const r = typeof n.options.clobberPrefix == "string" ? n.options.clobberPrefix : "user-content-", i = n.options.footnoteBackContent || p2, a = n.options.footnoteBackLabel || g2, u = n.options.footnoteLabel || "Footnotes", s = n.options.footnoteLabelTagName || "h2", d = n.options.footnoteLabelProperties || {
      className: [
        "sr-only"
      ]
    }, h = [];
    let p = -1;
    for (; ++p < n.footnoteOrder.length; ) {
      const m = n.footnoteById.get(n.footnoteOrder[p]);
      if (!m) continue;
      const g = n.all(m), y = String(m.identifier).toUpperCase(), x = si(y.toLowerCase());
      let b = 0;
      const T = [], C = n.footnoteCounts.get(y);
      for (; C !== void 0 && ++b <= C; ) {
        T.length > 0 && T.push({
          type: "text",
          value: " "
        });
        let V = typeof i == "string" ? i : i(p, b);
        typeof V == "string" && (V = {
          type: "text",
          value: V
        }), T.push({
          type: "element",
          tagName: "a",
          properties: {
            href: "#" + r + "fnref-" + x + (b > 1 ? "-" + b : ""),
            dataFootnoteBackref: "",
            ariaLabel: typeof a == "string" ? a : a(p, b),
            className: [
              "data-footnote-backref"
            ]
          },
          children: Array.isArray(V) ? V : [
            V
          ]
        });
      }
      const k = g[g.length - 1];
      if (k && k.type === "element" && k.tagName === "p") {
        const V = k.children[k.children.length - 1];
        V && V.type === "text" ? V.value += " " : k.children.push({
          type: "text",
          value: " "
        }), k.children.push(...T);
      } else g.push(...T);
      const O = {
        type: "element",
        tagName: "li",
        properties: {
          id: r + "fn-" + x
        },
        children: n.wrap(g, true)
      };
      n.patch(m, O), h.push(O);
    }
    if (h.length !== 0) return {
      type: "element",
      tagName: "section",
      properties: {
        dataFootnotes: true,
        className: [
          "footnotes"
        ]
      },
      children: [
        {
          type: "element",
          tagName: s,
          properties: {
            ...yu(d),
            id: "footnote-label"
          },
          children: [
            {
              type: "text",
              value: u
            }
          ]
        },
        {
          type: "text",
          value: `
`
        },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: n.wrap(h, true)
        },
        {
          type: "text",
          value: `
`
        }
      ]
    };
  }
  const ub = (function(n) {
    if (n == null) return S2;
    if (typeof n == "function") return Ou(n);
    if (typeof n == "object") return Array.isArray(n) ? v2(n) : b2(n);
    if (typeof n == "string") return x2(n);
    throw new Error("Expected function, string, or object as test");
  });
  function v2(n) {
    const r = [];
    let i = -1;
    for (; ++i < n.length; ) r[i] = ub(n[i]);
    return Ou(a);
    function a(...u) {
      let s = -1;
      for (; ++s < r.length; ) if (r[s].apply(this, u)) return true;
      return false;
    }
  }
  function b2(n) {
    const r = n;
    return Ou(i);
    function i(a) {
      const u = a;
      let s;
      for (s in n) if (u[s] !== r[s]) return false;
      return true;
    }
  }
  function x2(n) {
    return Ou(r);
    function r(i) {
      return i && i.type === n;
    }
  }
  function Ou(n) {
    return r;
    function r(i, a, u) {
      return !!(w2(i) && n.call(this, i, typeof a == "number" ? a : void 0, u || void 0));
    }
  }
  function S2() {
    return true;
  }
  function w2(n) {
    return n !== null && typeof n == "object" && "type" in n;
  }
  const cb = [], E2 = true, Ay = false, C2 = "skip";
  function A2(n, r, i, a) {
    let u;
    typeof r == "function" && typeof i != "function" ? (a = i, i = r) : u = r;
    const s = ub(u), d = a ? -1 : 1;
    h(n, void 0, [])();
    function h(p, m, g) {
      const y = p && typeof p == "object" ? p : {};
      if (typeof y.type == "string") {
        const b = typeof y.tagName == "string" ? y.tagName : typeof y.name == "string" ? y.name : void 0;
        Object.defineProperty(x, "name", {
          value: "node (" + (p.type + (b ? "<" + b + ">" : "")) + ")"
        });
      }
      return x;
      function x() {
        let b = cb, T, C, k;
        if ((!r || s(p, m, g[g.length - 1] || void 0)) && (b = _2(i(p, g)), b[0] === Ay)) return b;
        if ("children" in p && p.children) {
          const O = p;
          if (O.children && b[0] !== C2) for (C = (a ? O.children.length : -1) + d, k = g.concat(O); C > -1 && C < O.children.length; ) {
            const V = O.children[C];
            if (T = h(V, C, k)(), T[0] === Ay) return T;
            C = typeof T[1] == "number" ? T[1] : C + d;
          }
        }
        return b;
      }
    }
  }
  function _2(n) {
    return Array.isArray(n) ? n : typeof n == "number" ? [
      E2,
      n
    ] : n == null ? cb : [
      n
    ];
  }
  function sb(n, r, i, a) {
    let u, s, d;
    typeof r == "function" && typeof i != "function" ? (s = void 0, d = r, u = i) : (s = r, d = i, u = a), A2(n, s, h, u);
    function h(p, m) {
      const g = m[m.length - 1], y = g ? g.children.indexOf(p) : void 0;
      return d(p, y, g);
    }
  }
  const Vf = {}.hasOwnProperty, T2 = {};
  function M2(n, r) {
    const i = r || T2, a = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), d = {
      ...s2,
      ...i.handlers
    }, h = {
      all: m,
      applyData: k2,
      definitionById: a,
      footnoteById: u,
      footnoteCounts: s,
      footnoteOrder: [],
      handlers: d,
      one: p,
      options: i,
      patch: O2,
      wrap: N2
    };
    return sb(n, function(g) {
      if (g.type === "definition" || g.type === "footnoteDefinition") {
        const y = g.type === "definition" ? a : u, x = String(g.identifier).toUpperCase();
        y.has(x) || y.set(x, g);
      }
    }), h;
    function p(g, y) {
      const x = g.type, b = h.handlers[x];
      if (Vf.call(h.handlers, x) && b) return b(h, g, y);
      if (h.options.passThrough && h.options.passThrough.includes(x)) {
        if ("children" in g) {
          const { children: C, ...k } = g, O = yu(k);
          return O.children = h.all(g), O;
        }
        return yu(g);
      }
      return (h.options.unknownHandler || R2)(h, g, y);
    }
    function m(g) {
      const y = [];
      if ("children" in g) {
        const x = g.children;
        let b = -1;
        for (; ++b < x.length; ) {
          const T = h.one(x[b], g);
          if (T) {
            if (b && x[b - 1].type === "break" && (!Array.isArray(T) && T.type === "text" && (T.value = _y(T.value)), !Array.isArray(T) && T.type === "element")) {
              const C = T.children[0];
              C && C.type === "text" && (C.value = _y(C.value));
            }
            Array.isArray(T) ? y.push(...T) : y.push(T);
          }
        }
      }
      return y;
    }
  }
  function O2(n, r) {
    n.position && (r.position = dE(n));
  }
  function k2(n, r) {
    let i = r;
    if (n && n.data) {
      const a = n.data.hName, u = n.data.hChildren, s = n.data.hProperties;
      if (typeof a == "string") if (i.type === "element") i.tagName = a;
      else {
        const d = "children" in i ? i.children : [
          i
        ];
        i = {
          type: "element",
          tagName: a,
          properties: {},
          children: d
        };
      }
      i.type === "element" && s && Object.assign(i.properties, yu(s)), "children" in i && i.children && u !== null && u !== void 0 && (i.children = u);
    }
    return i;
  }
  function R2(n, r) {
    const i = r.data || {}, a = "value" in r && !(Vf.call(i, "hProperties") || Vf.call(i, "hChildren")) ? {
      type: "text",
      value: r.value
    } : {
      type: "element",
      tagName: "div",
      properties: {},
      children: n.all(r)
    };
    return n.patch(r, a), n.applyData(r, a);
  }
  function N2(n, r) {
    const i = [];
    let a = -1;
    for (r && i.push({
      type: "text",
      value: `
`
    }); ++a < n.length; ) a && i.push({
      type: "text",
      value: `
`
    }), i.push(n[a]);
    return r && n.length > 0 && i.push({
      type: "text",
      value: `
`
    }), i;
  }
  function _y(n) {
    let r = 0, i = n.charCodeAt(r);
    for (; i === 9 || i === 32; ) r++, i = n.charCodeAt(r);
    return n.slice(r);
  }
  function Ty(n, r) {
    const i = M2(n, r), a = i.one(n, void 0), u = y2(i), s = Array.isArray(a) ? {
      type: "root",
      children: a
    } : a || {
      type: "root",
      children: []
    };
    return u && s.children.push({
      type: "text",
      value: `
`
    }, u), s;
  }
  function z2(n, r) {
    return n && "run" in n ? async function(i, a) {
      const u = Ty(i, {
        file: a,
        ...r
      });
      await n.run(u, a);
    } : function(i, a) {
      return Ty(i, {
        file: a,
        ...n || r
      });
    };
  }
  function My(n) {
    if (n) throw n;
  }
  var mf, Oy;
  function D2() {
    if (Oy) return mf;
    Oy = 1;
    var n = Object.prototype.hasOwnProperty, r = Object.prototype.toString, i = Object.defineProperty, a = Object.getOwnPropertyDescriptor, u = function(m) {
      return typeof Array.isArray == "function" ? Array.isArray(m) : r.call(m) === "[object Array]";
    }, s = function(m) {
      if (!m || r.call(m) !== "[object Object]") return false;
      var g = n.call(m, "constructor"), y = m.constructor && m.constructor.prototype && n.call(m.constructor.prototype, "isPrototypeOf");
      if (m.constructor && !g && !y) return false;
      var x;
      for (x in m) ;
      return typeof x > "u" || n.call(m, x);
    }, d = function(m, g) {
      i && g.name === "__proto__" ? i(m, g.name, {
        enumerable: true,
        configurable: true,
        value: g.newValue,
        writable: true
      }) : m[g.name] = g.newValue;
    }, h = function(m, g) {
      if (g === "__proto__") if (n.call(m, g)) {
        if (a) return a(m, g).value;
      } else return;
      return m[g];
    };
    return mf = function p() {
      var m, g, y, x, b, T, C = arguments[0], k = 1, O = arguments.length, V = false;
      for (typeof C == "boolean" && (V = C, C = arguments[1] || {}, k = 2), (C == null || typeof C != "object" && typeof C != "function") && (C = {}); k < O; ++k) if (m = arguments[k], m != null) for (g in m) y = h(C, g), x = h(m, g), C !== x && (V && x && (s(x) || (b = u(x))) ? (b ? (b = false, T = y && u(y) ? y : []) : T = y && s(y) ? y : {}, d(C, {
        name: g,
        newValue: p(V, T, x)
      })) : typeof x < "u" && d(C, {
        name: g,
        newValue: x
      }));
      return C;
    }, mf;
  }
  var j2 = D2();
  const pf = ed(j2);
  function Gf(n) {
    if (typeof n != "object" || n === null) return false;
    const r = Object.getPrototypeOf(n);
    return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in n) && !(Symbol.iterator in n);
  }
  function L2() {
    const n = [], r = {
      run: i,
      use: a
    };
    return r;
    function i(...u) {
      let s = -1;
      const d = u.pop();
      if (typeof d != "function") throw new TypeError("Expected function as last argument, not " + d);
      h(null, ...u);
      function h(p, ...m) {
        const g = n[++s];
        let y = -1;
        if (p) {
          d(p);
          return;
        }
        for (; ++y < u.length; ) (m[y] === null || m[y] === void 0) && (m[y] = u[y]);
        u = m, g ? U2(g, h)(...m) : d(null, ...m);
      }
    }
    function a(u) {
      if (typeof u != "function") throw new TypeError("Expected `middelware` to be a function, not " + u);
      return n.push(u), r;
    }
  }
  function U2(n, r) {
    let i;
    return a;
    function a(...d) {
      const h = n.length > d.length;
      let p;
      h && d.push(u);
      try {
        p = n.apply(this, d);
      } catch (m) {
        const g = m;
        if (h && i) throw g;
        return u(g);
      }
      h || (p && p.then && typeof p.then == "function" ? p.then(s, u) : p instanceof Error ? u(p) : s(p));
    }
    function u(d, ...h) {
      i || (i = true, r(d, ...h));
    }
    function s(d) {
      u(null, d);
    }
  }
  const wn = {
    basename: B2,
    dirname: H2,
    extname: q2,
    join: V2,
    sep: "/"
  };
  function B2(n, r) {
    if (r !== void 0 && typeof r != "string") throw new TypeError('"ext" argument must be a string');
    Ea(n);
    let i = 0, a = -1, u = n.length, s;
    if (r === void 0 || r.length === 0 || r.length > n.length) {
      for (; u--; ) if (n.codePointAt(u) === 47) {
        if (s) {
          i = u + 1;
          break;
        }
      } else a < 0 && (s = true, a = u + 1);
      return a < 0 ? "" : n.slice(i, a);
    }
    if (r === n) return "";
    let d = -1, h = r.length - 1;
    for (; u--; ) if (n.codePointAt(u) === 47) {
      if (s) {
        i = u + 1;
        break;
      }
    } else d < 0 && (s = true, d = u + 1), h > -1 && (n.codePointAt(u) === r.codePointAt(h--) ? h < 0 && (a = u) : (h = -1, a = d));
    return i === a ? a = d : a < 0 && (a = n.length), n.slice(i, a);
  }
  function H2(n) {
    if (Ea(n), n.length === 0) return ".";
    let r = -1, i = n.length, a;
    for (; --i; ) if (n.codePointAt(i) === 47) {
      if (a) {
        r = i;
        break;
      }
    } else a || (a = true);
    return r < 0 ? n.codePointAt(0) === 47 ? "/" : "." : r === 1 && n.codePointAt(0) === 47 ? "//" : n.slice(0, r);
  }
  function q2(n) {
    Ea(n);
    let r = n.length, i = -1, a = 0, u = -1, s = 0, d;
    for (; r--; ) {
      const h = n.codePointAt(r);
      if (h === 47) {
        if (d) {
          a = r + 1;
          break;
        }
        continue;
      }
      i < 0 && (d = true, i = r + 1), h === 46 ? u < 0 ? u = r : s !== 1 && (s = 1) : u > -1 && (s = -1);
    }
    return u < 0 || i < 0 || s === 0 || s === 1 && u === i - 1 && u === a + 1 ? "" : n.slice(u, i);
  }
  function V2(...n) {
    let r = -1, i;
    for (; ++r < n.length; ) Ea(n[r]), n[r] && (i = i === void 0 ? n[r] : i + "/" + n[r]);
    return i === void 0 ? "." : G2(i);
  }
  function G2(n) {
    Ea(n);
    const r = n.codePointAt(0) === 47;
    let i = Y2(n, !r);
    return i.length === 0 && !r && (i = "."), i.length > 0 && n.codePointAt(n.length - 1) === 47 && (i += "/"), r ? "/" + i : i;
  }
  function Y2(n, r) {
    let i = "", a = 0, u = -1, s = 0, d = -1, h, p;
    for (; ++d <= n.length; ) {
      if (d < n.length) h = n.codePointAt(d);
      else {
        if (h === 47) break;
        h = 47;
      }
      if (h === 47) {
        if (!(u === d - 1 || s === 1)) if (u !== d - 1 && s === 2) {
          if (i.length < 2 || a !== 2 || i.codePointAt(i.length - 1) !== 46 || i.codePointAt(i.length - 2) !== 46) {
            if (i.length > 2) {
              if (p = i.lastIndexOf("/"), p !== i.length - 1) {
                p < 0 ? (i = "", a = 0) : (i = i.slice(0, p), a = i.length - 1 - i.lastIndexOf("/")), u = d, s = 0;
                continue;
              }
            } else if (i.length > 0) {
              i = "", a = 0, u = d, s = 0;
              continue;
            }
          }
          r && (i = i.length > 0 ? i + "/.." : "..", a = 2);
        } else i.length > 0 ? i += "/" + n.slice(u + 1, d) : i = n.slice(u + 1, d), a = d - u - 1;
        u = d, s = 0;
      } else h === 46 && s > -1 ? s++ : s = -1;
    }
    return i;
  }
  function Ea(n) {
    if (typeof n != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(n));
  }
  const X2 = {
    cwd: I2
  };
  function I2() {
    return "/";
  }
  function Yf(n) {
    return !!(n !== null && typeof n == "object" && "href" in n && n.href && "protocol" in n && n.protocol && n.auth === void 0);
  }
  function Q2(n) {
    if (typeof n == "string") n = new URL(n);
    else if (!Yf(n)) {
      const r = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + n + "`");
      throw r.code = "ERR_INVALID_ARG_TYPE", r;
    }
    if (n.protocol !== "file:") {
      const r = new TypeError("The URL must be of scheme file");
      throw r.code = "ERR_INVALID_URL_SCHEME", r;
    }
    return F2(n);
  }
  function F2(n) {
    if (n.hostname !== "") {
      const a = new TypeError('File URL host must be "localhost" or empty on darwin');
      throw a.code = "ERR_INVALID_FILE_URL_HOST", a;
    }
    const r = n.pathname;
    let i = -1;
    for (; ++i < r.length; ) if (r.codePointAt(i) === 37 && r.codePointAt(i + 1) === 50) {
      const a = r.codePointAt(i + 2);
      if (a === 70 || a === 102) {
        const u = new TypeError("File URL path must not include encoded / characters");
        throw u.code = "ERR_INVALID_FILE_URL_PATH", u;
      }
    }
    return decodeURIComponent(r);
  }
  const gf = [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ];
  class fb {
    constructor(r) {
      let i;
      r ? Yf(r) ? i = {
        path: r
      } : typeof r == "string" || K2(r) ? i = {
        value: r
      } : i = r : i = {}, this.cwd = "cwd" in i ? "" : X2.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
      let a = -1;
      for (; ++a < gf.length; ) {
        const s = gf[a];
        s in i && i[s] !== void 0 && i[s] !== null && (this[s] = s === "history" ? [
          ...i[s]
        ] : i[s]);
      }
      let u;
      for (u in i) gf.includes(u) || (this[u] = i[u]);
    }
    get basename() {
      return typeof this.path == "string" ? wn.basename(this.path) : void 0;
    }
    set basename(r) {
      vf(r, "basename"), yf(r, "basename"), this.path = wn.join(this.dirname || "", r);
    }
    get dirname() {
      return typeof this.path == "string" ? wn.dirname(this.path) : void 0;
    }
    set dirname(r) {
      ky(this.basename, "dirname"), this.path = wn.join(r || "", this.basename);
    }
    get extname() {
      return typeof this.path == "string" ? wn.extname(this.path) : void 0;
    }
    set extname(r) {
      if (yf(r, "extname"), ky(this.dirname, "extname"), r) {
        if (r.codePointAt(0) !== 46) throw new Error("`extname` must start with `.`");
        if (r.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots");
      }
      this.path = wn.join(this.dirname, this.stem + (r || ""));
    }
    get path() {
      return this.history[this.history.length - 1];
    }
    set path(r) {
      Yf(r) && (r = Q2(r)), vf(r, "path"), this.path !== r && this.history.push(r);
    }
    get stem() {
      return typeof this.path == "string" ? wn.basename(this.path, this.extname) : void 0;
    }
    set stem(r) {
      vf(r, "stem"), yf(r, "stem"), this.path = wn.join(this.dirname || "", r + (this.extname || ""));
    }
    fail(r, i, a) {
      const u = this.message(r, i, a);
      throw u.fatal = true, u;
    }
    info(r, i, a) {
      const u = this.message(r, i, a);
      return u.fatal = void 0, u;
    }
    message(r, i, a) {
      const u = new vt(r, i, a);
      return this.path && (u.name = this.path + ":" + u.name, u.file = this.path), u.fatal = false, this.messages.push(u), u;
    }
    toString(r) {
      return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(r || void 0).decode(this.value);
    }
  }
  function yf(n, r) {
    if (n && n.includes(wn.sep)) throw new Error("`" + r + "` cannot be a path: did not expect `" + wn.sep + "`");
  }
  function vf(n, r) {
    if (!n) throw new Error("`" + r + "` cannot be empty");
  }
  function ky(n, r) {
    if (!n) throw new Error("Setting `" + r + "` requires `path` to be set too");
  }
  function K2(n) {
    return !!(n && typeof n == "object" && "byteLength" in n && "byteOffset" in n);
  }
  const Z2 = (function(n) {
    const a = this.constructor.prototype, u = a[n], s = function() {
      return u.apply(s, arguments);
    };
    return Object.setPrototypeOf(s, a), s;
  }), P2 = {}.hasOwnProperty;
  class vd extends Z2 {
    constructor() {
      super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = L2();
    }
    copy() {
      const r = new vd();
      let i = -1;
      for (; ++i < this.attachers.length; ) {
        const a = this.attachers[i];
        r.use(...a);
      }
      return r.data(pf(true, {}, this.namespace)), r;
    }
    data(r, i) {
      return typeof r == "string" ? arguments.length === 2 ? (Sf("data", this.frozen), this.namespace[r] = i, this) : P2.call(this.namespace, r) && this.namespace[r] || void 0 : r ? (Sf("data", this.frozen), this.namespace = r, this) : this.namespace;
    }
    freeze() {
      if (this.frozen) return this;
      const r = this;
      for (; ++this.freezeIndex < this.attachers.length; ) {
        const [i, ...a] = this.attachers[this.freezeIndex];
        if (a[0] === false) continue;
        a[0] === true && (a[0] = void 0);
        const u = i.call(r, ...a);
        typeof u == "function" && this.transformers.use(u);
      }
      return this.frozen = true, this.freezeIndex = Number.POSITIVE_INFINITY, this;
    }
    parse(r) {
      this.freeze();
      const i = Wo(r), a = this.parser || this.Parser;
      return bf("parse", a), a(String(i), i);
    }
    process(r, i) {
      const a = this;
      return this.freeze(), bf("process", this.parser || this.Parser), xf("process", this.compiler || this.Compiler), i ? u(void 0, i) : new Promise(u);
      function u(s, d) {
        const h = Wo(r), p = a.parse(h);
        a.run(p, h, function(g, y, x) {
          if (g || !y || !x) return m(g);
          const b = y, T = a.stringify(b, x);
          $2(T) ? x.value = T : x.result = T, m(g, x);
        });
        function m(g, y) {
          g || !y ? d(g) : s ? s(y) : i(void 0, y);
        }
      }
    }
    processSync(r) {
      let i = false, a;
      return this.freeze(), bf("processSync", this.parser || this.Parser), xf("processSync", this.compiler || this.Compiler), this.process(r, u), Ny("processSync", "process", i), a;
      function u(s, d) {
        i = true, My(s), a = d;
      }
    }
    run(r, i, a) {
      Ry(r), this.freeze();
      const u = this.transformers;
      return !a && typeof i == "function" && (a = i, i = void 0), a ? s(void 0, a) : new Promise(s);
      function s(d, h) {
        const p = Wo(i);
        u.run(r, p, m);
        function m(g, y, x) {
          const b = y || r;
          g ? h(g) : d ? d(b) : a(void 0, b, x);
        }
      }
    }
    runSync(r, i) {
      let a = false, u;
      return this.run(r, i, s), Ny("runSync", "run", a), u;
      function s(d, h) {
        My(d), u = h, a = true;
      }
    }
    stringify(r, i) {
      this.freeze();
      const a = Wo(i), u = this.compiler || this.Compiler;
      return xf("stringify", u), Ry(r), u(r, a);
    }
    use(r, ...i) {
      const a = this.attachers, u = this.namespace;
      if (Sf("use", this.frozen), r != null) if (typeof r == "function") p(r, i);
      else if (typeof r == "object") Array.isArray(r) ? h(r) : d(r);
      else throw new TypeError("Expected usable value, not `" + r + "`");
      return this;
      function s(m) {
        if (typeof m == "function") p(m, []);
        else if (typeof m == "object") if (Array.isArray(m)) {
          const [g, ...y] = m;
          p(g, y);
        } else d(m);
        else throw new TypeError("Expected usable value, not `" + m + "`");
      }
      function d(m) {
        if (!("plugins" in m) && !("settings" in m)) throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
        h(m.plugins), m.settings && (u.settings = pf(true, u.settings, m.settings));
      }
      function h(m) {
        let g = -1;
        if (m != null) if (Array.isArray(m)) for (; ++g < m.length; ) {
          const y = m[g];
          s(y);
        }
        else throw new TypeError("Expected a list of plugins, not `" + m + "`");
      }
      function p(m, g) {
        let y = -1, x = -1;
        for (; ++y < a.length; ) if (a[y][0] === m) {
          x = y;
          break;
        }
        if (x === -1) a.push([
          m,
          ...g
        ]);
        else if (g.length > 0) {
          let [b, ...T] = g;
          const C = a[x][1];
          Gf(C) && Gf(b) && (b = pf(true, C, b)), a[x] = [
            m,
            b,
            ...T
          ];
        }
      }
    }
  }
  const J2 = new vd().freeze();
  function bf(n, r) {
    if (typeof r != "function") throw new TypeError("Cannot `" + n + "` without `parser`");
  }
  function xf(n, r) {
    if (typeof r != "function") throw new TypeError("Cannot `" + n + "` without `compiler`");
  }
  function Sf(n, r) {
    if (r) throw new Error("Cannot call `" + n + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
  }
  function Ry(n) {
    if (!Gf(n) || typeof n.type != "string") throw new TypeError("Expected node, got `" + n + "`");
  }
  function Ny(n, r, i) {
    if (!i) throw new Error("`" + n + "` finished async. Use `" + r + "` instead");
  }
  function Wo(n) {
    return W2(n) ? n : new fb(n);
  }
  function W2(n) {
    return !!(n && typeof n == "object" && "message" in n && "messages" in n);
  }
  function $2(n) {
    return typeof n == "string" || e_(n);
  }
  function e_(n) {
    return !!(n && typeof n == "object" && "byteLength" in n && "byteOffset" in n);
  }
  const t_ = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", zy = [], Dy = {
    allowDangerousHtml: true
  }, n_ = /^(https?|ircs?|mailto|xmpp)$/i, l_ = [
    {
      from: "astPlugins",
      id: "remove-buggy-html-in-markdown-parser"
    },
    {
      from: "allowDangerousHtml",
      id: "remove-buggy-html-in-markdown-parser"
    },
    {
      from: "allowNode",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "allowElement"
    },
    {
      from: "allowedTypes",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "allowedElements"
    },
    {
      from: "disallowedTypes",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "disallowedElements"
    },
    {
      from: "escapeHtml",
      id: "remove-buggy-html-in-markdown-parser"
    },
    {
      from: "includeElementIndex",
      id: "#remove-includeelementindex"
    },
    {
      from: "includeNodeIndex",
      id: "change-includenodeindex-to-includeelementindex"
    },
    {
      from: "linkTarget",
      id: "remove-linktarget"
    },
    {
      from: "plugins",
      id: "change-plugins-to-remarkplugins",
      to: "remarkPlugins"
    },
    {
      from: "rawSourcePos",
      id: "#remove-rawsourcepos"
    },
    {
      from: "renderers",
      id: "change-renderers-to-components",
      to: "components"
    },
    {
      from: "source",
      id: "change-source-to-children",
      to: "children"
    },
    {
      from: "sourcePos",
      id: "#remove-sourcepos"
    },
    {
      from: "transformImageUri",
      id: "#add-urltransform",
      to: "urlTransform"
    },
    {
      from: "transformLinkUri",
      id: "#add-urltransform",
      to: "urlTransform"
    }
  ];
  function r_(n) {
    const r = i_(n), i = a_(n);
    return o_(r.runSync(r.parse(i), i), n);
  }
  function i_(n) {
    const r = n.rehypePlugins || zy, i = n.remarkPlugins || zy, a = n.remarkRehypeOptions ? {
      ...n.remarkRehypeOptions,
      ...Dy
    } : Dy;
    return J2().use(BA).use(i).use(z2, a).use(r);
  }
  function a_(n) {
    const r = n.children || "", i = new fb();
    return typeof r == "string" && (i.value = r), i;
  }
  function o_(n, r) {
    const i = r.allowedElements, a = r.allowElement, u = r.components, s = r.disallowedElements, d = r.skipHtml, h = r.unwrapDisallowed, p = r.urlTransform || u_;
    for (const g of l_) Object.hasOwn(r, g.from) && ("" + g.from + (g.to ? "use `" + g.to + "` instead" : "remove it") + t_ + g.id, void 0);
    return r.className && (n = {
      type: "element",
      tagName: "div",
      properties: {
        className: r.className
      },
      children: n.type === "root" ? n.children : [
        n
      ]
    }), sb(n, m), yE(n, {
      Fragment: _.Fragment,
      components: u,
      ignoreInvalidStyle: true,
      jsx: _.jsx,
      jsxs: _.jsxs,
      passKeys: true,
      passNode: true
    });
    function m(g, y, x) {
      if (g.type === "raw" && x && typeof y == "number") return d ? x.children.splice(y, 1) : x.children[y] = {
        type: "text",
        value: g.value
      }, y;
      if (g.type === "element") {
        let b;
        for (b in ff) if (Object.hasOwn(ff, b) && Object.hasOwn(g.properties, b)) {
          const T = g.properties[b], C = ff[b];
          (C === null || C.includes(g.tagName)) && (g.properties[b] = p(String(T || ""), b, g));
        }
      }
      if (g.type === "element") {
        let b = i ? !i.includes(g.tagName) : s ? s.includes(g.tagName) : false;
        if (!b && a && typeof y == "number" && (b = !a(g, y, x)), b && x && typeof y == "number") return h && g.children ? x.children.splice(y, 1, ...g.children) : x.children.splice(y, 1), y;
      }
    }
  }
  function u_(n) {
    const r = n.indexOf(":"), i = n.indexOf("?"), a = n.indexOf("#"), u = n.indexOf("/");
    return r === -1 || u !== -1 && r > u || i !== -1 && r > i || a !== -1 && r > a || n_.test(n.slice(0, r)) ? n : "";
  }
  const db = (...n) => n.filter((r, i, a) => !!r && r.trim() !== "" && a.indexOf(r) === i).join(" ").trim();
  const c_ = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  const s_ = (n) => n.replace(/^([A-Z])|[\s-_]+(\w)/g, (r, i, a) => a ? a.toUpperCase() : i.toLowerCase());
  const jy = (n) => {
    const r = s_(n);
    return r.charAt(0).toUpperCase() + r.slice(1);
  };
  var f_ = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  const d_ = (n) => {
    for (const r in n) if (r.startsWith("aria-") || r === "role" || r === "title") return true;
    return false;
  };
  const h_ = w.forwardRef(({ color: n = "currentColor", size: r = 24, strokeWidth: i = 2, absoluteStrokeWidth: a, className: u = "", children: s, iconNode: d, ...h }, p) => w.createElement("svg", {
    ref: p,
    ...f_,
    width: r,
    height: r,
    stroke: n,
    strokeWidth: a ? Number(i) * 24 / Number(r) : i,
    className: db("lucide", u),
    ...!s && !d_(h) && {
      "aria-hidden": "true"
    },
    ...h
  }, [
    ...d.map(([m, g]) => w.createElement(m, g)),
    ...Array.isArray(s) ? s : [
      s
    ]
  ]));
  const Dl = (n, r) => {
    const i = w.forwardRef(({ className: a, ...u }, s) => w.createElement(h_, {
      ref: s,
      iconNode: r,
      className: db(`lucide-${c_(jy(n))}`, `lucide-${n}`, a),
      ...u
    }));
    return i.displayName = jy(n), i;
  };
  const m_ = [
    [
      "path",
      {
        d: "M20 6 9 17l-5-5",
        key: "1gmf2c"
      }
    ]
  ], p_ = Dl("check", m_);
  const g_ = [
    [
      "path",
      {
        d: "m9 18 6-6-6-6",
        key: "mthhwq"
      }
    ]
  ], y_ = Dl("chevron-right", g_);
  const v_ = [
    [
      "path",
      {
        d: "M21.801 10A10 10 0 1 1 17 3.335",
        key: "yps3ct"
      }
    ],
    [
      "path",
      {
        d: "m9 11 3 3L22 4",
        key: "1pflzl"
      }
    ]
  ], b_ = Dl("circle-check-big", v_);
  const x_ = [
    [
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
      }
    ],
    [
      "path",
      {
        d: "M8 12h8",
        key: "1wcyev"
      }
    ],
    [
      "path",
      {
        d: "M12 8v8",
        key: "napkw2"
      }
    ]
  ], S_ = Dl("circle-plus", x_);
  const w_ = [
    [
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
      }
    ]
  ], E_ = Dl("circle", w_);
  const C_ = [
    [
      "path",
      {
        d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
        key: "kfwtm"
      }
    ]
  ], A_ = Dl("moon", C_);
  const __ = [
    [
      "circle",
      {
        cx: "18",
        cy: "5",
        r: "3",
        key: "gq8acd"
      }
    ],
    [
      "circle",
      {
        cx: "6",
        cy: "12",
        r: "3",
        key: "w7nqdw"
      }
    ],
    [
      "circle",
      {
        cx: "18",
        cy: "19",
        r: "3",
        key: "1xt0gg"
      }
    ],
    [
      "line",
      {
        x1: "8.59",
        x2: "15.42",
        y1: "13.51",
        y2: "17.49",
        key: "47mynk"
      }
    ],
    [
      "line",
      {
        x1: "15.41",
        x2: "8.59",
        y1: "6.51",
        y2: "10.49",
        key: "1n3mei"
      }
    ]
  ], T_ = Dl("share-2", __);
  const M_ = [
    [
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "4",
        key: "4exip2"
      }
    ],
    [
      "path",
      {
        d: "M12 2v2",
        key: "tus03m"
      }
    ],
    [
      "path",
      {
        d: "M12 20v2",
        key: "1lh1kg"
      }
    ],
    [
      "path",
      {
        d: "m4.93 4.93 1.41 1.41",
        key: "149t6j"
      }
    ],
    [
      "path",
      {
        d: "m17.66 17.66 1.41 1.41",
        key: "ptbguv"
      }
    ],
    [
      "path",
      {
        d: "M2 12h2",
        key: "1t8f8n"
      }
    ],
    [
      "path",
      {
        d: "M20 12h2",
        key: "1q8mjw"
      }
    ],
    [
      "path",
      {
        d: "m6.34 17.66-1.41 1.41",
        key: "1m8zz5"
      }
    ],
    [
      "path",
      {
        d: "m19.07 4.93-1.41 1.41",
        key: "1shlcs"
      }
    ]
  ], O_ = Dl("sun", M_);
  function Ly(n, r) {
    if (typeof n == "function") return n(r);
    n != null && (n.current = r);
  }
  function rr(...n) {
    return (r) => {
      let i = false;
      const a = n.map((u) => {
        const s = Ly(u, r);
        return !i && typeof s == "function" && (i = true), s;
      });
      if (i) return () => {
        for (let u = 0; u < a.length; u++) {
          const s = a[u];
          typeof s == "function" ? s() : Ly(n[u], null);
        }
      };
    };
  }
  function jt(...n) {
    return w.useCallback(rr(...n), n);
  }
  var k_ = /* @__PURE__ */ Symbol.for("react.lazy"), vu = _u[" use ".trim().toString()];
  function R_(n) {
    return typeof n == "object" && n !== null && "then" in n;
  }
  function hb(n) {
    return n != null && typeof n == "object" && "$$typeof" in n && n.$$typeof === k_ && "_payload" in n && R_(n._payload);
  }
  function N_(n) {
    const r = D_(n), i = w.forwardRef((a, u) => {
      let { children: s, ...d } = a;
      hb(s) && typeof vu == "function" && (s = vu(s._payload));
      const h = w.Children.toArray(s), p = h.find(L_);
      if (p) {
        const m = p.props.children, g = h.map((y) => y === p ? w.Children.count(m) > 1 ? w.Children.only(null) : w.isValidElement(m) ? m.props.children : null : y);
        return _.jsx(r, {
          ...d,
          ref: u,
          children: w.isValidElement(m) ? w.cloneElement(m, void 0, g) : null
        });
      }
      return _.jsx(r, {
        ...d,
        ref: u,
        children: s
      });
    });
    return i.displayName = `${n}.Slot`, i;
  }
  var z_ = N_("Slot");
  function D_(n) {
    const r = w.forwardRef((i, a) => {
      let { children: u, ...s } = i;
      if (hb(u) && typeof vu == "function" && (u = vu(u._payload)), w.isValidElement(u)) {
        const d = B_(u), h = U_(s, u.props);
        return u.type !== w.Fragment && (h.ref = a ? rr(a, d) : d), w.cloneElement(u, h);
      }
      return w.Children.count(u) > 1 ? w.Children.only(null) : null;
    });
    return r.displayName = `${n}.SlotClone`, r;
  }
  var j_ = /* @__PURE__ */ Symbol("radix.slottable");
  function L_(n) {
    return w.isValidElement(n) && typeof n.type == "function" && "__radixId" in n.type && n.type.__radixId === j_;
  }
  function U_(n, r) {
    const i = {
      ...r
    };
    for (const a in r) {
      const u = n[a], s = r[a];
      /^on[A-Z]/.test(a) ? u && s ? i[a] = (...h) => {
        const p = s(...h);
        return u(...h), p;
      } : u && (i[a] = u) : a === "style" ? i[a] = {
        ...u,
        ...s
      } : a === "className" && (i[a] = [
        u,
        s
      ].filter(Boolean).join(" "));
    }
    return {
      ...n,
      ...i
    };
  }
  function B_(n) {
    var _a2, _b2;
    let r = (_a2 = Object.getOwnPropertyDescriptor(n.props, "ref")) == null ? void 0 : _a2.get, i = r && "isReactWarning" in r && r.isReactWarning;
    return i ? n.ref : (r = (_b2 = Object.getOwnPropertyDescriptor(n, "ref")) == null ? void 0 : _b2.get, i = r && "isReactWarning" in r && r.isReactWarning, i ? n.props.ref : n.props.ref || n.ref);
  }
  function mb(n) {
    var r, i, a = "";
    if (typeof n == "string" || typeof n == "number") a += n;
    else if (typeof n == "object") if (Array.isArray(n)) {
      var u = n.length;
      for (r = 0; r < u; r++) n[r] && (i = mb(n[r])) && (a && (a += " "), a += i);
    } else for (i in n) n[i] && (a && (a += " "), a += i);
    return a;
  }
  function bd() {
    for (var n, r, i = 0, a = "", u = arguments.length; i < u; i++) (n = arguments[i]) && (r = mb(n)) && (a && (a += " "), a += r);
    return a;
  }
  const Uy = (n) => typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n, By = bd, pb = (n, r) => (i) => {
    var a;
    if ((r == null ? void 0 : r.variants) == null) return By(n, i == null ? void 0 : i.class, i == null ? void 0 : i.className);
    const { variants: u, defaultVariants: s } = r, d = Object.keys(u).map((m) => {
      const g = i == null ? void 0 : i[m], y = s == null ? void 0 : s[m];
      if (g === null) return null;
      const x = Uy(g) || Uy(y);
      return u[m][x];
    }), h = i && Object.entries(i).reduce((m, g) => {
      let [y, x] = g;
      return x === void 0 || (m[y] = x), m;
    }, {}), p = r == null || (a = r.compoundVariants) === null || a === void 0 ? void 0 : a.reduce((m, g) => {
      let { class: y, className: x, ...b } = g;
      return Object.entries(b).every((T) => {
        let [C, k] = T;
        return Array.isArray(k) ? k.includes({
          ...s,
          ...h
        }[C]) : {
          ...s,
          ...h
        }[C] === k;
      }) ? [
        ...m,
        y,
        x
      ] : m;
    }, []);
    return By(n, d, p, i == null ? void 0 : i.class, i == null ? void 0 : i.className);
  }, H_ = (n, r) => {
    const i = new Array(n.length + r.length);
    for (let a = 0; a < n.length; a++) i[a] = n[a];
    for (let a = 0; a < r.length; a++) i[n.length + a] = r[a];
    return i;
  }, q_ = (n, r) => ({
    classGroupId: n,
    validator: r
  }), gb = (n = /* @__PURE__ */ new Map(), r = null, i) => ({
    nextPart: n,
    validators: r,
    classGroupId: i
  }), bu = "-", Hy = [], V_ = "arbitrary..", G_ = (n) => {
    const r = X_(n), { conflictingClassGroups: i, conflictingClassGroupModifiers: a } = n;
    return {
      getClassGroupId: (d) => {
        if (d.startsWith("[") && d.endsWith("]")) return Y_(d);
        const h = d.split(bu), p = h[0] === "" && h.length > 1 ? 1 : 0;
        return yb(h, p, r);
      },
      getConflictingClassGroupIds: (d, h) => {
        if (h) {
          const p = a[d], m = i[d];
          return p ? m ? H_(m, p) : p : m || Hy;
        }
        return i[d] || Hy;
      }
    };
  }, yb = (n, r, i) => {
    if (n.length - r === 0) return i.classGroupId;
    const u = n[r], s = i.nextPart.get(u);
    if (s) {
      const m = yb(n, r + 1, s);
      if (m) return m;
    }
    const d = i.validators;
    if (d === null) return;
    const h = r === 0 ? n.join(bu) : n.slice(r).join(bu), p = d.length;
    for (let m = 0; m < p; m++) {
      const g = d[m];
      if (g.validator(h)) return g.classGroupId;
    }
  }, Y_ = (n) => n.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
    const r = n.slice(1, -1), i = r.indexOf(":"), a = r.slice(0, i);
    return a ? V_ + a : void 0;
  })(), X_ = (n) => {
    const { theme: r, classGroups: i } = n;
    return I_(i, r);
  }, I_ = (n, r) => {
    const i = gb();
    for (const a in n) {
      const u = n[a];
      xd(u, i, a, r);
    }
    return i;
  }, xd = (n, r, i, a) => {
    const u = n.length;
    for (let s = 0; s < u; s++) {
      const d = n[s];
      Q_(d, r, i, a);
    }
  }, Q_ = (n, r, i, a) => {
    if (typeof n == "string") {
      F_(n, r, i);
      return;
    }
    if (typeof n == "function") {
      K_(n, r, i, a);
      return;
    }
    Z_(n, r, i, a);
  }, F_ = (n, r, i) => {
    const a = n === "" ? r : vb(r, n);
    a.classGroupId = i;
  }, K_ = (n, r, i, a) => {
    if (P_(n)) {
      xd(n(a), r, i, a);
      return;
    }
    r.validators === null && (r.validators = []), r.validators.push(q_(i, n));
  }, Z_ = (n, r, i, a) => {
    const u = Object.entries(n), s = u.length;
    for (let d = 0; d < s; d++) {
      const [h, p] = u[d];
      xd(p, vb(r, h), i, a);
    }
  }, vb = (n, r) => {
    let i = n;
    const a = r.split(bu), u = a.length;
    for (let s = 0; s < u; s++) {
      const d = a[s];
      let h = i.nextPart.get(d);
      h || (h = gb(), i.nextPart.set(d, h)), i = h;
    }
    return i;
  }, P_ = (n) => "isThemeGetter" in n && n.isThemeGetter === true, J_ = (n) => {
    if (n < 1) return {
      get: () => {
      },
      set: () => {
      }
    };
    let r = 0, i = /* @__PURE__ */ Object.create(null), a = /* @__PURE__ */ Object.create(null);
    const u = (s, d) => {
      i[s] = d, r++, r > n && (r = 0, a = i, i = /* @__PURE__ */ Object.create(null));
    };
    return {
      get(s) {
        let d = i[s];
        if (d !== void 0) return d;
        if ((d = a[s]) !== void 0) return u(s, d), d;
      },
      set(s, d) {
        s in i ? i[s] = d : u(s, d);
      }
    };
  }, Xf = "!", qy = ":", W_ = [], Vy = (n, r, i, a, u) => ({
    modifiers: n,
    hasImportantModifier: r,
    baseClassName: i,
    maybePostfixModifierPosition: a,
    isExternal: u
  }), $_ = (n) => {
    const { prefix: r, experimentalParseClassName: i } = n;
    let a = (u) => {
      const s = [];
      let d = 0, h = 0, p = 0, m;
      const g = u.length;
      for (let C = 0; C < g; C++) {
        const k = u[C];
        if (d === 0 && h === 0) {
          if (k === qy) {
            s.push(u.slice(p, C)), p = C + 1;
            continue;
          }
          if (k === "/") {
            m = C;
            continue;
          }
        }
        k === "[" ? d++ : k === "]" ? d-- : k === "(" ? h++ : k === ")" && h--;
      }
      const y = s.length === 0 ? u : u.slice(p);
      let x = y, b = false;
      y.endsWith(Xf) ? (x = y.slice(0, -1), b = true) : y.startsWith(Xf) && (x = y.slice(1), b = true);
      const T = m && m > p ? m - p : void 0;
      return Vy(s, b, x, T);
    };
    if (r) {
      const u = r + qy, s = a;
      a = (d) => d.startsWith(u) ? s(d.slice(u.length)) : Vy(W_, false, d, void 0, true);
    }
    if (i) {
      const u = a;
      a = (s) => i({
        className: s,
        parseClassName: u
      });
    }
    return a;
  }, eT = (n) => {
    const r = /* @__PURE__ */ new Map();
    return n.orderSensitiveModifiers.forEach((i, a) => {
      r.set(i, 1e6 + a);
    }), (i) => {
      const a = [];
      let u = [];
      for (let s = 0; s < i.length; s++) {
        const d = i[s], h = d[0] === "[", p = r.has(d);
        h || p ? (u.length > 0 && (u.sort(), a.push(...u), u = []), a.push(d)) : u.push(d);
      }
      return u.length > 0 && (u.sort(), a.push(...u)), a;
    };
  }, tT = (n) => ({
    cache: J_(n.cacheSize),
    parseClassName: $_(n),
    sortModifiers: eT(n),
    ...G_(n)
  }), nT = /\s+/, lT = (n, r) => {
    const { parseClassName: i, getClassGroupId: a, getConflictingClassGroupIds: u, sortModifiers: s } = r, d = [], h = n.trim().split(nT);
    let p = "";
    for (let m = h.length - 1; m >= 0; m -= 1) {
      const g = h[m], { isExternal: y, modifiers: x, hasImportantModifier: b, baseClassName: T, maybePostfixModifierPosition: C } = i(g);
      if (y) {
        p = g + (p.length > 0 ? " " + p : p);
        continue;
      }
      let k = !!C, O = a(k ? T.substring(0, C) : T);
      if (!O) {
        if (!k) {
          p = g + (p.length > 0 ? " " + p : p);
          continue;
        }
        if (O = a(T), !O) {
          p = g + (p.length > 0 ? " " + p : p);
          continue;
        }
        k = false;
      }
      const V = x.length === 0 ? "" : x.length === 1 ? x[0] : s(x).join(":"), j = b ? V + Xf : V, G = j + O;
      if (d.indexOf(G) > -1) continue;
      d.push(G);
      const J = u(O, k);
      for (let D = 0; D < J.length; ++D) {
        const Z = J[D];
        d.push(j + Z);
      }
      p = g + (p.length > 0 ? " " + p : p);
    }
    return p;
  }, rT = (...n) => {
    let r = 0, i, a, u = "";
    for (; r < n.length; ) (i = n[r++]) && (a = bb(i)) && (u && (u += " "), u += a);
    return u;
  }, bb = (n) => {
    if (typeof n == "string") return n;
    let r, i = "";
    for (let a = 0; a < n.length; a++) n[a] && (r = bb(n[a])) && (i && (i += " "), i += r);
    return i;
  }, iT = (n, ...r) => {
    let i, a, u, s;
    const d = (p) => {
      const m = r.reduce((g, y) => y(g), n());
      return i = tT(m), a = i.cache.get, u = i.cache.set, s = h, h(p);
    }, h = (p) => {
      const m = a(p);
      if (m) return m;
      const g = lT(p, i);
      return u(p, g), g;
    };
    return s = d, (...p) => s(rT(...p));
  }, aT = [], ut = (n) => {
    const r = (i) => i[n] || aT;
    return r.isThemeGetter = true, r;
  }, xb = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Sb = /^\((?:(\w[\w-]*):)?(.+)\)$/i, oT = /^\d+\/\d+$/, uT = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, cT = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, sT = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, fT = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, dT = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, $r = (n) => oT.test(n), we = (n) => !!n && !Number.isNaN(Number(n)), Ml = (n) => !!n && Number.isInteger(Number(n)), wf = (n) => n.endsWith("%") && we(n.slice(0, -1)), Jn = (n) => uT.test(n), wb = () => true, hT = (n) => cT.test(n) && !sT.test(n), Sd = () => false, mT = (n) => fT.test(n), pT = (n) => dT.test(n), gT = (n) => !oe(n) && !ue(n), yT = (n) => jl(n, Ab, Sd), oe = (n) => xb.test(n), er = (n) => jl(n, _b, hT), Gy = (n) => jl(n, AT, we), vT = (n) => jl(n, Mb, wb), bT = (n) => jl(n, Tb, Sd), Yy = (n) => jl(n, Eb, Sd), xT = (n) => jl(n, Cb, pT), $o = (n) => jl(n, Ob, mT), ue = (n) => Sb.test(n), sa = (n) => ir(n, _b), ST = (n) => ir(n, Tb), Xy = (n) => ir(n, Eb), wT = (n) => ir(n, Ab), ET = (n) => ir(n, Cb), eu = (n) => ir(n, Ob, true), CT = (n) => ir(n, Mb, true), jl = (n, r, i) => {
    const a = xb.exec(n);
    return a ? a[1] ? r(a[1]) : i(a[2]) : false;
  }, ir = (n, r, i = false) => {
    const a = Sb.exec(n);
    return a ? a[1] ? r(a[1]) : i : false;
  }, Eb = (n) => n === "position" || n === "percentage", Cb = (n) => n === "image" || n === "url", Ab = (n) => n === "length" || n === "size" || n === "bg-size", _b = (n) => n === "length", AT = (n) => n === "number", Tb = (n) => n === "family-name", Mb = (n) => n === "number" || n === "weight", Ob = (n) => n === "shadow", _T = () => {
    const n = ut("color"), r = ut("font"), i = ut("text"), a = ut("font-weight"), u = ut("tracking"), s = ut("leading"), d = ut("breakpoint"), h = ut("container"), p = ut("spacing"), m = ut("radius"), g = ut("shadow"), y = ut("inset-shadow"), x = ut("text-shadow"), b = ut("drop-shadow"), T = ut("blur"), C = ut("perspective"), k = ut("aspect"), O = ut("ease"), V = ut("animate"), j = () => [
      "auto",
      "avoid",
      "all",
      "avoid-page",
      "page",
      "left",
      "right",
      "column"
    ], G = () => [
      "center",
      "top",
      "bottom",
      "left",
      "right",
      "top-left",
      "left-top",
      "top-right",
      "right-top",
      "bottom-right",
      "right-bottom",
      "bottom-left",
      "left-bottom"
    ], J = () => [
      ...G(),
      ue,
      oe
    ], D = () => [
      "auto",
      "hidden",
      "clip",
      "visible",
      "scroll"
    ], Z = () => [
      "auto",
      "contain",
      "none"
    ], X = () => [
      ue,
      oe,
      p
    ], re = () => [
      $r,
      "full",
      "auto",
      ...X()
    ], ie = () => [
      Ml,
      "none",
      "subgrid",
      ue,
      oe
    ], te = () => [
      "auto",
      {
        span: [
          "full",
          Ml,
          ue,
          oe
        ]
      },
      Ml,
      ue,
      oe
    ], W = () => [
      Ml,
      "auto",
      ue,
      oe
    ], se = () => [
      "auto",
      "min",
      "max",
      "fr",
      ue,
      oe
    ], ne = () => [
      "start",
      "end",
      "center",
      "between",
      "around",
      "evenly",
      "stretch",
      "baseline",
      "center-safe",
      "end-safe"
    ], P = () => [
      "start",
      "end",
      "center",
      "stretch",
      "center-safe",
      "end-safe"
    ], N = () => [
      "auto",
      ...X()
    ], Q = () => [
      $r,
      "auto",
      "full",
      "dvw",
      "dvh",
      "lvw",
      "lvh",
      "svw",
      "svh",
      "min",
      "max",
      "fit",
      ...X()
    ], H = () => [
      n,
      ue,
      oe
    ], $ = () => [
      ...G(),
      Xy,
      Yy,
      {
        position: [
          ue,
          oe
        ]
      }
    ], A = () => [
      "no-repeat",
      {
        repeat: [
          "",
          "x",
          "y",
          "space",
          "round"
        ]
      }
    ], be = () => [
      "auto",
      "cover",
      "contain",
      wT,
      yT,
      {
        size: [
          ue,
          oe
        ]
      }
    ], ye = () => [
      wf,
      sa,
      er
    ], E = () => [
      "",
      "none",
      "full",
      m,
      ue,
      oe
    ], he = () => [
      "",
      we,
      sa,
      er
    ], Be = () => [
      "solid",
      "dashed",
      "dotted",
      "double"
    ], Ee = () => [
      "normal",
      "multiply",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "color-dodge",
      "color-burn",
      "hard-light",
      "soft-light",
      "difference",
      "exclusion",
      "hue",
      "saturation",
      "color",
      "luminosity"
    ], me = () => [
      we,
      wf,
      Xy,
      Yy
    ], Ze = () => [
      "",
      "none",
      T,
      ue,
      oe
    ], et = () => [
      "none",
      we,
      ue,
      oe
    ], ft = () => [
      "none",
      we,
      ue,
      oe
    ], bt = () => [
      we,
      ue,
      oe
    ], Pt = () => [
      $r,
      "full",
      ...X()
    ];
    return {
      cacheSize: 500,
      theme: {
        animate: [
          "spin",
          "ping",
          "pulse",
          "bounce"
        ],
        aspect: [
          "video"
        ],
        blur: [
          Jn
        ],
        breakpoint: [
          Jn
        ],
        color: [
          wb
        ],
        container: [
          Jn
        ],
        "drop-shadow": [
          Jn
        ],
        ease: [
          "in",
          "out",
          "in-out"
        ],
        font: [
          gT
        ],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black"
        ],
        "inset-shadow": [
          Jn
        ],
        leading: [
          "none",
          "tight",
          "snug",
          "normal",
          "relaxed",
          "loose"
        ],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none"
        ],
        radius: [
          Jn
        ],
        shadow: [
          Jn
        ],
        spacing: [
          "px",
          we
        ],
        text: [
          Jn
        ],
        "text-shadow": [
          Jn
        ],
        tracking: [
          "tighter",
          "tight",
          "normal",
          "wide",
          "wider",
          "widest"
        ]
      },
      classGroups: {
        aspect: [
          {
            aspect: [
              "auto",
              "square",
              $r,
              oe,
              ue,
              k
            ]
          }
        ],
        container: [
          "container"
        ],
        columns: [
          {
            columns: [
              we,
              oe,
              ue,
              h
            ]
          }
        ],
        "break-after": [
          {
            "break-after": j()
          }
        ],
        "break-before": [
          {
            "break-before": j()
          }
        ],
        "break-inside": [
          {
            "break-inside": [
              "auto",
              "avoid",
              "avoid-page",
              "avoid-column"
            ]
          }
        ],
        "box-decoration": [
          {
            "box-decoration": [
              "slice",
              "clone"
            ]
          }
        ],
        box: [
          {
            box: [
              "border",
              "content"
            ]
          }
        ],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden"
        ],
        sr: [
          "sr-only",
          "not-sr-only"
        ],
        float: [
          {
            float: [
              "right",
              "left",
              "none",
              "start",
              "end"
            ]
          }
        ],
        clear: [
          {
            clear: [
              "left",
              "right",
              "both",
              "none",
              "start",
              "end"
            ]
          }
        ],
        isolation: [
          "isolate",
          "isolation-auto"
        ],
        "object-fit": [
          {
            object: [
              "contain",
              "cover",
              "fill",
              "none",
              "scale-down"
            ]
          }
        ],
        "object-position": [
          {
            object: J()
          }
        ],
        overflow: [
          {
            overflow: D()
          }
        ],
        "overflow-x": [
          {
            "overflow-x": D()
          }
        ],
        "overflow-y": [
          {
            "overflow-y": D()
          }
        ],
        overscroll: [
          {
            overscroll: Z()
          }
        ],
        "overscroll-x": [
          {
            "overscroll-x": Z()
          }
        ],
        "overscroll-y": [
          {
            "overscroll-y": Z()
          }
        ],
        position: [
          "static",
          "fixed",
          "absolute",
          "relative",
          "sticky"
        ],
        inset: [
          {
            inset: re()
          }
        ],
        "inset-x": [
          {
            "inset-x": re()
          }
        ],
        "inset-y": [
          {
            "inset-y": re()
          }
        ],
        start: [
          {
            start: re()
          }
        ],
        end: [
          {
            end: re()
          }
        ],
        top: [
          {
            top: re()
          }
        ],
        right: [
          {
            right: re()
          }
        ],
        bottom: [
          {
            bottom: re()
          }
        ],
        left: [
          {
            left: re()
          }
        ],
        visibility: [
          "visible",
          "invisible",
          "collapse"
        ],
        z: [
          {
            z: [
              Ml,
              "auto",
              ue,
              oe
            ]
          }
        ],
        basis: [
          {
            basis: [
              $r,
              "full",
              "auto",
              h,
              ...X()
            ]
          }
        ],
        "flex-direction": [
          {
            flex: [
              "row",
              "row-reverse",
              "col",
              "col-reverse"
            ]
          }
        ],
        "flex-wrap": [
          {
            flex: [
              "nowrap",
              "wrap",
              "wrap-reverse"
            ]
          }
        ],
        flex: [
          {
            flex: [
              we,
              $r,
              "auto",
              "initial",
              "none",
              oe
            ]
          }
        ],
        grow: [
          {
            grow: [
              "",
              we,
              ue,
              oe
            ]
          }
        ],
        shrink: [
          {
            shrink: [
              "",
              we,
              ue,
              oe
            ]
          }
        ],
        order: [
          {
            order: [
              Ml,
              "first",
              "last",
              "none",
              ue,
              oe
            ]
          }
        ],
        "grid-cols": [
          {
            "grid-cols": ie()
          }
        ],
        "col-start-end": [
          {
            col: te()
          }
        ],
        "col-start": [
          {
            "col-start": W()
          }
        ],
        "col-end": [
          {
            "col-end": W()
          }
        ],
        "grid-rows": [
          {
            "grid-rows": ie()
          }
        ],
        "row-start-end": [
          {
            row: te()
          }
        ],
        "row-start": [
          {
            "row-start": W()
          }
        ],
        "row-end": [
          {
            "row-end": W()
          }
        ],
        "grid-flow": [
          {
            "grid-flow": [
              "row",
              "col",
              "dense",
              "row-dense",
              "col-dense"
            ]
          }
        ],
        "auto-cols": [
          {
            "auto-cols": se()
          }
        ],
        "auto-rows": [
          {
            "auto-rows": se()
          }
        ],
        gap: [
          {
            gap: X()
          }
        ],
        "gap-x": [
          {
            "gap-x": X()
          }
        ],
        "gap-y": [
          {
            "gap-y": X()
          }
        ],
        "justify-content": [
          {
            justify: [
              ...ne(),
              "normal"
            ]
          }
        ],
        "justify-items": [
          {
            "justify-items": [
              ...P(),
              "normal"
            ]
          }
        ],
        "justify-self": [
          {
            "justify-self": [
              "auto",
              ...P()
            ]
          }
        ],
        "align-content": [
          {
            content: [
              "normal",
              ...ne()
            ]
          }
        ],
        "align-items": [
          {
            items: [
              ...P(),
              {
                baseline: [
                  "",
                  "last"
                ]
              }
            ]
          }
        ],
        "align-self": [
          {
            self: [
              "auto",
              ...P(),
              {
                baseline: [
                  "",
                  "last"
                ]
              }
            ]
          }
        ],
        "place-content": [
          {
            "place-content": ne()
          }
        ],
        "place-items": [
          {
            "place-items": [
              ...P(),
              "baseline"
            ]
          }
        ],
        "place-self": [
          {
            "place-self": [
              "auto",
              ...P()
            ]
          }
        ],
        p: [
          {
            p: X()
          }
        ],
        px: [
          {
            px: X()
          }
        ],
        py: [
          {
            py: X()
          }
        ],
        ps: [
          {
            ps: X()
          }
        ],
        pe: [
          {
            pe: X()
          }
        ],
        pt: [
          {
            pt: X()
          }
        ],
        pr: [
          {
            pr: X()
          }
        ],
        pb: [
          {
            pb: X()
          }
        ],
        pl: [
          {
            pl: X()
          }
        ],
        m: [
          {
            m: N()
          }
        ],
        mx: [
          {
            mx: N()
          }
        ],
        my: [
          {
            my: N()
          }
        ],
        ms: [
          {
            ms: N()
          }
        ],
        me: [
          {
            me: N()
          }
        ],
        mt: [
          {
            mt: N()
          }
        ],
        mr: [
          {
            mr: N()
          }
        ],
        mb: [
          {
            mb: N()
          }
        ],
        ml: [
          {
            ml: N()
          }
        ],
        "space-x": [
          {
            "space-x": X()
          }
        ],
        "space-x-reverse": [
          "space-x-reverse"
        ],
        "space-y": [
          {
            "space-y": X()
          }
        ],
        "space-y-reverse": [
          "space-y-reverse"
        ],
        size: [
          {
            size: Q()
          }
        ],
        w: [
          {
            w: [
              h,
              "screen",
              ...Q()
            ]
          }
        ],
        "min-w": [
          {
            "min-w": [
              h,
              "screen",
              "none",
              ...Q()
            ]
          }
        ],
        "max-w": [
          {
            "max-w": [
              h,
              "screen",
              "none",
              "prose",
              {
                screen: [
                  d
                ]
              },
              ...Q()
            ]
          }
        ],
        h: [
          {
            h: [
              "screen",
              "lh",
              ...Q()
            ]
          }
        ],
        "min-h": [
          {
            "min-h": [
              "screen",
              "lh",
              "none",
              ...Q()
            ]
          }
        ],
        "max-h": [
          {
            "max-h": [
              "screen",
              "lh",
              ...Q()
            ]
          }
        ],
        "font-size": [
          {
            text: [
              "base",
              i,
              sa,
              er
            ]
          }
        ],
        "font-smoothing": [
          "antialiased",
          "subpixel-antialiased"
        ],
        "font-style": [
          "italic",
          "not-italic"
        ],
        "font-weight": [
          {
            font: [
              a,
              CT,
              vT
            ]
          }
        ],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              wf,
              oe
            ]
          }
        ],
        "font-family": [
          {
            font: [
              ST,
              bT,
              r
            ]
          }
        ],
        "fvn-normal": [
          "normal-nums"
        ],
        "fvn-ordinal": [
          "ordinal"
        ],
        "fvn-slashed-zero": [
          "slashed-zero"
        ],
        "fvn-figure": [
          "lining-nums",
          "oldstyle-nums"
        ],
        "fvn-spacing": [
          "proportional-nums",
          "tabular-nums"
        ],
        "fvn-fraction": [
          "diagonal-fractions",
          "stacked-fractions"
        ],
        tracking: [
          {
            tracking: [
              u,
              ue,
              oe
            ]
          }
        ],
        "line-clamp": [
          {
            "line-clamp": [
              we,
              "none",
              ue,
              Gy
            ]
          }
        ],
        leading: [
          {
            leading: [
              s,
              ...X()
            ]
          }
        ],
        "list-image": [
          {
            "list-image": [
              "none",
              ue,
              oe
            ]
          }
        ],
        "list-style-position": [
          {
            list: [
              "inside",
              "outside"
            ]
          }
        ],
        "list-style-type": [
          {
            list: [
              "disc",
              "decimal",
              "none",
              ue,
              oe
            ]
          }
        ],
        "text-alignment": [
          {
            text: [
              "left",
              "center",
              "right",
              "justify",
              "start",
              "end"
            ]
          }
        ],
        "placeholder-color": [
          {
            placeholder: H()
          }
        ],
        "text-color": [
          {
            text: H()
          }
        ],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline"
        ],
        "text-decoration-style": [
          {
            decoration: [
              ...Be(),
              "wavy"
            ]
          }
        ],
        "text-decoration-thickness": [
          {
            decoration: [
              we,
              "from-font",
              "auto",
              ue,
              er
            ]
          }
        ],
        "text-decoration-color": [
          {
            decoration: H()
          }
        ],
        "underline-offset": [
          {
            "underline-offset": [
              we,
              "auto",
              ue,
              oe
            ]
          }
        ],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case"
        ],
        "text-overflow": [
          "truncate",
          "text-ellipsis",
          "text-clip"
        ],
        "text-wrap": [
          {
            text: [
              "wrap",
              "nowrap",
              "balance",
              "pretty"
            ]
          }
        ],
        indent: [
          {
            indent: X()
          }
        ],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              ue,
              oe
            ]
          }
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces"
            ]
          }
        ],
        break: [
          {
            break: [
              "normal",
              "words",
              "all",
              "keep"
            ]
          }
        ],
        wrap: [
          {
            wrap: [
              "break-word",
              "anywhere",
              "normal"
            ]
          }
        ],
        hyphens: [
          {
            hyphens: [
              "none",
              "manual",
              "auto"
            ]
          }
        ],
        content: [
          {
            content: [
              "none",
              ue,
              oe
            ]
          }
        ],
        "bg-attachment": [
          {
            bg: [
              "fixed",
              "local",
              "scroll"
            ]
          }
        ],
        "bg-clip": [
          {
            "bg-clip": [
              "border",
              "padding",
              "content",
              "text"
            ]
          }
        ],
        "bg-origin": [
          {
            "bg-origin": [
              "border",
              "padding",
              "content"
            ]
          }
        ],
        "bg-position": [
          {
            bg: $()
          }
        ],
        "bg-repeat": [
          {
            bg: A()
          }
        ],
        "bg-size": [
          {
            bg: be()
          }
        ],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  {
                    to: [
                      "t",
                      "tr",
                      "r",
                      "br",
                      "b",
                      "bl",
                      "l",
                      "tl"
                    ]
                  },
                  Ml,
                  ue,
                  oe
                ],
                radial: [
                  "",
                  ue,
                  oe
                ],
                conic: [
                  Ml,
                  ue,
                  oe
                ]
              },
              ET,
              xT
            ]
          }
        ],
        "bg-color": [
          {
            bg: H()
          }
        ],
        "gradient-from-pos": [
          {
            from: ye()
          }
        ],
        "gradient-via-pos": [
          {
            via: ye()
          }
        ],
        "gradient-to-pos": [
          {
            to: ye()
          }
        ],
        "gradient-from": [
          {
            from: H()
          }
        ],
        "gradient-via": [
          {
            via: H()
          }
        ],
        "gradient-to": [
          {
            to: H()
          }
        ],
        rounded: [
          {
            rounded: E()
          }
        ],
        "rounded-s": [
          {
            "rounded-s": E()
          }
        ],
        "rounded-e": [
          {
            "rounded-e": E()
          }
        ],
        "rounded-t": [
          {
            "rounded-t": E()
          }
        ],
        "rounded-r": [
          {
            "rounded-r": E()
          }
        ],
        "rounded-b": [
          {
            "rounded-b": E()
          }
        ],
        "rounded-l": [
          {
            "rounded-l": E()
          }
        ],
        "rounded-ss": [
          {
            "rounded-ss": E()
          }
        ],
        "rounded-se": [
          {
            "rounded-se": E()
          }
        ],
        "rounded-ee": [
          {
            "rounded-ee": E()
          }
        ],
        "rounded-es": [
          {
            "rounded-es": E()
          }
        ],
        "rounded-tl": [
          {
            "rounded-tl": E()
          }
        ],
        "rounded-tr": [
          {
            "rounded-tr": E()
          }
        ],
        "rounded-br": [
          {
            "rounded-br": E()
          }
        ],
        "rounded-bl": [
          {
            "rounded-bl": E()
          }
        ],
        "border-w": [
          {
            border: he()
          }
        ],
        "border-w-x": [
          {
            "border-x": he()
          }
        ],
        "border-w-y": [
          {
            "border-y": he()
          }
        ],
        "border-w-s": [
          {
            "border-s": he()
          }
        ],
        "border-w-e": [
          {
            "border-e": he()
          }
        ],
        "border-w-t": [
          {
            "border-t": he()
          }
        ],
        "border-w-r": [
          {
            "border-r": he()
          }
        ],
        "border-w-b": [
          {
            "border-b": he()
          }
        ],
        "border-w-l": [
          {
            "border-l": he()
          }
        ],
        "divide-x": [
          {
            "divide-x": he()
          }
        ],
        "divide-x-reverse": [
          "divide-x-reverse"
        ],
        "divide-y": [
          {
            "divide-y": he()
          }
        ],
        "divide-y-reverse": [
          "divide-y-reverse"
        ],
        "border-style": [
          {
            border: [
              ...Be(),
              "hidden",
              "none"
            ]
          }
        ],
        "divide-style": [
          {
            divide: [
              ...Be(),
              "hidden",
              "none"
            ]
          }
        ],
        "border-color": [
          {
            border: H()
          }
        ],
        "border-color-x": [
          {
            "border-x": H()
          }
        ],
        "border-color-y": [
          {
            "border-y": H()
          }
        ],
        "border-color-s": [
          {
            "border-s": H()
          }
        ],
        "border-color-e": [
          {
            "border-e": H()
          }
        ],
        "border-color-t": [
          {
            "border-t": H()
          }
        ],
        "border-color-r": [
          {
            "border-r": H()
          }
        ],
        "border-color-b": [
          {
            "border-b": H()
          }
        ],
        "border-color-l": [
          {
            "border-l": H()
          }
        ],
        "divide-color": [
          {
            divide: H()
          }
        ],
        "outline-style": [
          {
            outline: [
              ...Be(),
              "none",
              "hidden"
            ]
          }
        ],
        "outline-offset": [
          {
            "outline-offset": [
              we,
              ue,
              oe
            ]
          }
        ],
        "outline-w": [
          {
            outline: [
              "",
              we,
              sa,
              er
            ]
          }
        ],
        "outline-color": [
          {
            outline: H()
          }
        ],
        shadow: [
          {
            shadow: [
              "",
              "none",
              g,
              eu,
              $o
            ]
          }
        ],
        "shadow-color": [
          {
            shadow: H()
          }
        ],
        "inset-shadow": [
          {
            "inset-shadow": [
              "none",
              y,
              eu,
              $o
            ]
          }
        ],
        "inset-shadow-color": [
          {
            "inset-shadow": H()
          }
        ],
        "ring-w": [
          {
            ring: he()
          }
        ],
        "ring-w-inset": [
          "ring-inset"
        ],
        "ring-color": [
          {
            ring: H()
          }
        ],
        "ring-offset-w": [
          {
            "ring-offset": [
              we,
              er
            ]
          }
        ],
        "ring-offset-color": [
          {
            "ring-offset": H()
          }
        ],
        "inset-ring-w": [
          {
            "inset-ring": he()
          }
        ],
        "inset-ring-color": [
          {
            "inset-ring": H()
          }
        ],
        "text-shadow": [
          {
            "text-shadow": [
              "none",
              x,
              eu,
              $o
            ]
          }
        ],
        "text-shadow-color": [
          {
            "text-shadow": H()
          }
        ],
        opacity: [
          {
            opacity: [
              we,
              ue,
              oe
            ]
          }
        ],
        "mix-blend": [
          {
            "mix-blend": [
              ...Ee(),
              "plus-darker",
              "plus-lighter"
            ]
          }
        ],
        "bg-blend": [
          {
            "bg-blend": Ee()
          }
        ],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view"
            ]
          },
          "mask-no-clip"
        ],
        "mask-composite": [
          {
            mask: [
              "add",
              "subtract",
              "intersect",
              "exclude"
            ]
          }
        ],
        "mask-image-linear-pos": [
          {
            "mask-linear": [
              we
            ]
          }
        ],
        "mask-image-linear-from-pos": [
          {
            "mask-linear-from": me()
          }
        ],
        "mask-image-linear-to-pos": [
          {
            "mask-linear-to": me()
          }
        ],
        "mask-image-linear-from-color": [
          {
            "mask-linear-from": H()
          }
        ],
        "mask-image-linear-to-color": [
          {
            "mask-linear-to": H()
          }
        ],
        "mask-image-t-from-pos": [
          {
            "mask-t-from": me()
          }
        ],
        "mask-image-t-to-pos": [
          {
            "mask-t-to": me()
          }
        ],
        "mask-image-t-from-color": [
          {
            "mask-t-from": H()
          }
        ],
        "mask-image-t-to-color": [
          {
            "mask-t-to": H()
          }
        ],
        "mask-image-r-from-pos": [
          {
            "mask-r-from": me()
          }
        ],
        "mask-image-r-to-pos": [
          {
            "mask-r-to": me()
          }
        ],
        "mask-image-r-from-color": [
          {
            "mask-r-from": H()
          }
        ],
        "mask-image-r-to-color": [
          {
            "mask-r-to": H()
          }
        ],
        "mask-image-b-from-pos": [
          {
            "mask-b-from": me()
          }
        ],
        "mask-image-b-to-pos": [
          {
            "mask-b-to": me()
          }
        ],
        "mask-image-b-from-color": [
          {
            "mask-b-from": H()
          }
        ],
        "mask-image-b-to-color": [
          {
            "mask-b-to": H()
          }
        ],
        "mask-image-l-from-pos": [
          {
            "mask-l-from": me()
          }
        ],
        "mask-image-l-to-pos": [
          {
            "mask-l-to": me()
          }
        ],
        "mask-image-l-from-color": [
          {
            "mask-l-from": H()
          }
        ],
        "mask-image-l-to-color": [
          {
            "mask-l-to": H()
          }
        ],
        "mask-image-x-from-pos": [
          {
            "mask-x-from": me()
          }
        ],
        "mask-image-x-to-pos": [
          {
            "mask-x-to": me()
          }
        ],
        "mask-image-x-from-color": [
          {
            "mask-x-from": H()
          }
        ],
        "mask-image-x-to-color": [
          {
            "mask-x-to": H()
          }
        ],
        "mask-image-y-from-pos": [
          {
            "mask-y-from": me()
          }
        ],
        "mask-image-y-to-pos": [
          {
            "mask-y-to": me()
          }
        ],
        "mask-image-y-from-color": [
          {
            "mask-y-from": H()
          }
        ],
        "mask-image-y-to-color": [
          {
            "mask-y-to": H()
          }
        ],
        "mask-image-radial": [
          {
            "mask-radial": [
              ue,
              oe
            ]
          }
        ],
        "mask-image-radial-from-pos": [
          {
            "mask-radial-from": me()
          }
        ],
        "mask-image-radial-to-pos": [
          {
            "mask-radial-to": me()
          }
        ],
        "mask-image-radial-from-color": [
          {
            "mask-radial-from": H()
          }
        ],
        "mask-image-radial-to-color": [
          {
            "mask-radial-to": H()
          }
        ],
        "mask-image-radial-shape": [
          {
            "mask-radial": [
              "circle",
              "ellipse"
            ]
          }
        ],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              {
                closest: [
                  "side",
                  "corner"
                ],
                farthest: [
                  "side",
                  "corner"
                ]
              }
            ]
          }
        ],
        "mask-image-radial-pos": [
          {
            "mask-radial-at": G()
          }
        ],
        "mask-image-conic-pos": [
          {
            "mask-conic": [
              we
            ]
          }
        ],
        "mask-image-conic-from-pos": [
          {
            "mask-conic-from": me()
          }
        ],
        "mask-image-conic-to-pos": [
          {
            "mask-conic-to": me()
          }
        ],
        "mask-image-conic-from-color": [
          {
            "mask-conic-from": H()
          }
        ],
        "mask-image-conic-to-color": [
          {
            "mask-conic-to": H()
          }
        ],
        "mask-mode": [
          {
            mask: [
              "alpha",
              "luminance",
              "match"
            ]
          }
        ],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view"
            ]
          }
        ],
        "mask-position": [
          {
            mask: $()
          }
        ],
        "mask-repeat": [
          {
            mask: A()
          }
        ],
        "mask-size": [
          {
            mask: be()
          }
        ],
        "mask-type": [
          {
            "mask-type": [
              "alpha",
              "luminance"
            ]
          }
        ],
        "mask-image": [
          {
            mask: [
              "none",
              ue,
              oe
            ]
          }
        ],
        filter: [
          {
            filter: [
              "",
              "none",
              ue,
              oe
            ]
          }
        ],
        blur: [
          {
            blur: Ze()
          }
        ],
        brightness: [
          {
            brightness: [
              we,
              ue,
              oe
            ]
          }
        ],
        contrast: [
          {
            contrast: [
              we,
              ue,
              oe
            ]
          }
        ],
        "drop-shadow": [
          {
            "drop-shadow": [
              "",
              "none",
              b,
              eu,
              $o
            ]
          }
        ],
        "drop-shadow-color": [
          {
            "drop-shadow": H()
          }
        ],
        grayscale: [
          {
            grayscale: [
              "",
              we,
              ue,
              oe
            ]
          }
        ],
        "hue-rotate": [
          {
            "hue-rotate": [
              we,
              ue,
              oe
            ]
          }
        ],
        invert: [
          {
            invert: [
              "",
              we,
              ue,
              oe
            ]
          }
        ],
        saturate: [
          {
            saturate: [
              we,
              ue,
              oe
            ]
          }
        ],
        sepia: [
          {
            sepia: [
              "",
              we,
              ue,
              oe
            ]
          }
        ],
        "backdrop-filter": [
          {
            "backdrop-filter": [
              "",
              "none",
              ue,
              oe
            ]
          }
        ],
        "backdrop-blur": [
          {
            "backdrop-blur": Ze()
          }
        ],
        "backdrop-brightness": [
          {
            "backdrop-brightness": [
              we,
              ue,
              oe
            ]
          }
        ],
        "backdrop-contrast": [
          {
            "backdrop-contrast": [
              we,
              ue,
              oe
            ]
          }
        ],
        "backdrop-grayscale": [
          {
            "backdrop-grayscale": [
              "",
              we,
              ue,
              oe
            ]
          }
        ],
        "backdrop-hue-rotate": [
          {
            "backdrop-hue-rotate": [
              we,
              ue,
              oe
            ]
          }
        ],
        "backdrop-invert": [
          {
            "backdrop-invert": [
              "",
              we,
              ue,
              oe
            ]
          }
        ],
        "backdrop-opacity": [
          {
            "backdrop-opacity": [
              we,
              ue,
              oe
            ]
          }
        ],
        "backdrop-saturate": [
          {
            "backdrop-saturate": [
              we,
              ue,
              oe
            ]
          }
        ],
        "backdrop-sepia": [
          {
            "backdrop-sepia": [
              "",
              we,
              ue,
              oe
            ]
          }
        ],
        "border-collapse": [
          {
            border: [
              "collapse",
              "separate"
            ]
          }
        ],
        "border-spacing": [
          {
            "border-spacing": X()
          }
        ],
        "border-spacing-x": [
          {
            "border-spacing-x": X()
          }
        ],
        "border-spacing-y": [
          {
            "border-spacing-y": X()
          }
        ],
        "table-layout": [
          {
            table: [
              "auto",
              "fixed"
            ]
          }
        ],
        caption: [
          {
            caption: [
              "top",
              "bottom"
            ]
          }
        ],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              ue,
              oe
            ]
          }
        ],
        "transition-behavior": [
          {
            transition: [
              "normal",
              "discrete"
            ]
          }
        ],
        duration: [
          {
            duration: [
              we,
              "initial",
              ue,
              oe
            ]
          }
        ],
        ease: [
          {
            ease: [
              "linear",
              "initial",
              O,
              ue,
              oe
            ]
          }
        ],
        delay: [
          {
            delay: [
              we,
              ue,
              oe
            ]
          }
        ],
        animate: [
          {
            animate: [
              "none",
              V,
              ue,
              oe
            ]
          }
        ],
        backface: [
          {
            backface: [
              "hidden",
              "visible"
            ]
          }
        ],
        perspective: [
          {
            perspective: [
              C,
              ue,
              oe
            ]
          }
        ],
        "perspective-origin": [
          {
            "perspective-origin": J()
          }
        ],
        rotate: [
          {
            rotate: et()
          }
        ],
        "rotate-x": [
          {
            "rotate-x": et()
          }
        ],
        "rotate-y": [
          {
            "rotate-y": et()
          }
        ],
        "rotate-z": [
          {
            "rotate-z": et()
          }
        ],
        scale: [
          {
            scale: ft()
          }
        ],
        "scale-x": [
          {
            "scale-x": ft()
          }
        ],
        "scale-y": [
          {
            "scale-y": ft()
          }
        ],
        "scale-z": [
          {
            "scale-z": ft()
          }
        ],
        "scale-3d": [
          "scale-3d"
        ],
        skew: [
          {
            skew: bt()
          }
        ],
        "skew-x": [
          {
            "skew-x": bt()
          }
        ],
        "skew-y": [
          {
            "skew-y": bt()
          }
        ],
        transform: [
          {
            transform: [
              ue,
              oe,
              "",
              "none",
              "gpu",
              "cpu"
            ]
          }
        ],
        "transform-origin": [
          {
            origin: J()
          }
        ],
        "transform-style": [
          {
            transform: [
              "3d",
              "flat"
            ]
          }
        ],
        translate: [
          {
            translate: Pt()
          }
        ],
        "translate-x": [
          {
            "translate-x": Pt()
          }
        ],
        "translate-y": [
          {
            "translate-y": Pt()
          }
        ],
        "translate-z": [
          {
            "translate-z": Pt()
          }
        ],
        "translate-none": [
          "translate-none"
        ],
        accent: [
          {
            accent: H()
          }
        ],
        appearance: [
          {
            appearance: [
              "none",
              "auto"
            ]
          }
        ],
        "caret-color": [
          {
            caret: H()
          }
        ],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light"
            ]
          }
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              ue,
              oe
            ]
          }
        ],
        "field-sizing": [
          {
            "field-sizing": [
              "fixed",
              "content"
            ]
          }
        ],
        "pointer-events": [
          {
            "pointer-events": [
              "auto",
              "none"
            ]
          }
        ],
        resize: [
          {
            resize: [
              "none",
              "",
              "y",
              "x"
            ]
          }
        ],
        "scroll-behavior": [
          {
            scroll: [
              "auto",
              "smooth"
            ]
          }
        ],
        "scroll-m": [
          {
            "scroll-m": X()
          }
        ],
        "scroll-mx": [
          {
            "scroll-mx": X()
          }
        ],
        "scroll-my": [
          {
            "scroll-my": X()
          }
        ],
        "scroll-ms": [
          {
            "scroll-ms": X()
          }
        ],
        "scroll-me": [
          {
            "scroll-me": X()
          }
        ],
        "scroll-mt": [
          {
            "scroll-mt": X()
          }
        ],
        "scroll-mr": [
          {
            "scroll-mr": X()
          }
        ],
        "scroll-mb": [
          {
            "scroll-mb": X()
          }
        ],
        "scroll-ml": [
          {
            "scroll-ml": X()
          }
        ],
        "scroll-p": [
          {
            "scroll-p": X()
          }
        ],
        "scroll-px": [
          {
            "scroll-px": X()
          }
        ],
        "scroll-py": [
          {
            "scroll-py": X()
          }
        ],
        "scroll-ps": [
          {
            "scroll-ps": X()
          }
        ],
        "scroll-pe": [
          {
            "scroll-pe": X()
          }
        ],
        "scroll-pt": [
          {
            "scroll-pt": X()
          }
        ],
        "scroll-pr": [
          {
            "scroll-pr": X()
          }
        ],
        "scroll-pb": [
          {
            "scroll-pb": X()
          }
        ],
        "scroll-pl": [
          {
            "scroll-pl": X()
          }
        ],
        "snap-align": [
          {
            snap: [
              "start",
              "end",
              "center",
              "align-none"
            ]
          }
        ],
        "snap-stop": [
          {
            snap: [
              "normal",
              "always"
            ]
          }
        ],
        "snap-type": [
          {
            snap: [
              "none",
              "x",
              "y",
              "both"
            ]
          }
        ],
        "snap-strictness": [
          {
            snap: [
              "mandatory",
              "proximity"
            ]
          }
        ],
        touch: [
          {
            touch: [
              "auto",
              "none",
              "manipulation"
            ]
          }
        ],
        "touch-x": [
          {
            "touch-pan": [
              "x",
              "left",
              "right"
            ]
          }
        ],
        "touch-y": [
          {
            "touch-pan": [
              "y",
              "up",
              "down"
            ]
          }
        ],
        "touch-pz": [
          "touch-pinch-zoom"
        ],
        select: [
          {
            select: [
              "none",
              "text",
              "all",
              "auto"
            ]
          }
        ],
        "will-change": [
          {
            "will-change": [
              "auto",
              "scroll",
              "contents",
              "transform",
              ue,
              oe
            ]
          }
        ],
        fill: [
          {
            fill: [
              "none",
              ...H()
            ]
          }
        ],
        "stroke-w": [
          {
            stroke: [
              we,
              sa,
              er,
              Gy
            ]
          }
        ],
        stroke: [
          {
            stroke: [
              "none",
              ...H()
            ]
          }
        ],
        "forced-color-adjust": [
          {
            "forced-color-adjust": [
              "auto",
              "none"
            ]
          }
        ]
      },
      conflictingClassGroups: {
        overflow: [
          "overflow-x",
          "overflow-y"
        ],
        overscroll: [
          "overscroll-x",
          "overscroll-y"
        ],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left"
        ],
        "inset-x": [
          "right",
          "left"
        ],
        "inset-y": [
          "top",
          "bottom"
        ],
        flex: [
          "basis",
          "grow",
          "shrink"
        ],
        gap: [
          "gap-x",
          "gap-y"
        ],
        p: [
          "px",
          "py",
          "ps",
          "pe",
          "pt",
          "pr",
          "pb",
          "pl"
        ],
        px: [
          "pr",
          "pl"
        ],
        py: [
          "pt",
          "pb"
        ],
        m: [
          "mx",
          "my",
          "ms",
          "me",
          "mt",
          "mr",
          "mb",
          "ml"
        ],
        mx: [
          "mr",
          "ml"
        ],
        my: [
          "mt",
          "mb"
        ],
        size: [
          "w",
          "h"
        ],
        "font-size": [
          "leading"
        ],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction"
        ],
        "fvn-ordinal": [
          "fvn-normal"
        ],
        "fvn-slashed-zero": [
          "fvn-normal"
        ],
        "fvn-figure": [
          "fvn-normal"
        ],
        "fvn-spacing": [
          "fvn-normal"
        ],
        "fvn-fraction": [
          "fvn-normal"
        ],
        "line-clamp": [
          "display",
          "overflow"
        ],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl"
        ],
        "rounded-s": [
          "rounded-ss",
          "rounded-es"
        ],
        "rounded-e": [
          "rounded-se",
          "rounded-ee"
        ],
        "rounded-t": [
          "rounded-tl",
          "rounded-tr"
        ],
        "rounded-r": [
          "rounded-tr",
          "rounded-br"
        ],
        "rounded-b": [
          "rounded-br",
          "rounded-bl"
        ],
        "rounded-l": [
          "rounded-tl",
          "rounded-bl"
        ],
        "border-spacing": [
          "border-spacing-x",
          "border-spacing-y"
        ],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l"
        ],
        "border-w-x": [
          "border-w-r",
          "border-w-l"
        ],
        "border-w-y": [
          "border-w-t",
          "border-w-b"
        ],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l"
        ],
        "border-color-x": [
          "border-color-r",
          "border-color-l"
        ],
        "border-color-y": [
          "border-color-t",
          "border-color-b"
        ],
        translate: [
          "translate-x",
          "translate-y",
          "translate-none"
        ],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z"
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml"
        ],
        "scroll-mx": [
          "scroll-mr",
          "scroll-ml"
        ],
        "scroll-my": [
          "scroll-mt",
          "scroll-mb"
        ],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl"
        ],
        "scroll-px": [
          "scroll-pr",
          "scroll-pl"
        ],
        "scroll-py": [
          "scroll-pt",
          "scroll-pb"
        ],
        touch: [
          "touch-x",
          "touch-y",
          "touch-pz"
        ],
        "touch-x": [
          "touch"
        ],
        "touch-y": [
          "touch"
        ],
        "touch-pz": [
          "touch"
        ]
      },
      conflictingClassGroupModifiers: {
        "font-size": [
          "leading"
        ]
      },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection"
      ]
    };
  }, kb = iT(_T);
  function Zt(...n) {
    return kb(bd(n));
  }
  const su = pb("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }), Rb = w.forwardRef(({ className: n, variant: r, size: i, asChild: a = false, ...u }, s) => {
    const d = a ? z_ : "button";
    return _.jsx(d, {
      className: Zt(su({
        variant: r,
        size: i,
        className: n
      })),
      ref: s,
      ...u
    });
  });
  Rb.displayName = "Button";
  function ke(n, r, { checkForDefaultPrevented: i = true } = {}) {
    return function(u) {
      if (n == null ? void 0 : n(u), i === false || !u.defaultPrevented) return r == null ? void 0 : r(u);
    };
  }
  function Ca(n, r = []) {
    let i = [];
    function a(s, d) {
      const h = w.createContext(d), p = i.length;
      i = [
        ...i,
        d
      ];
      const m = (y) => {
        var _a2;
        const { scope: x, children: b, ...T } = y, C = ((_a2 = x == null ? void 0 : x[n]) == null ? void 0 : _a2[p]) || h, k = w.useMemo(() => T, Object.values(T));
        return _.jsx(C.Provider, {
          value: k,
          children: b
        });
      };
      m.displayName = s + "Provider";
      function g(y, x) {
        var _a2;
        const b = ((_a2 = x == null ? void 0 : x[n]) == null ? void 0 : _a2[p]) || h, T = w.useContext(b);
        if (T) return T;
        if (d !== void 0) return d;
        throw new Error(`\`${y}\` must be used within \`${s}\``);
      }
      return [
        m,
        g
      ];
    }
    const u = () => {
      const s = i.map((d) => w.createContext(d));
      return function(h) {
        const p = (h == null ? void 0 : h[n]) || s;
        return w.useMemo(() => ({
          [`__scope${n}`]: {
            ...h,
            [n]: p
          }
        }), [
          h,
          p
        ]);
      };
    };
    return u.scopeName = n, [
      a,
      TT(u, ...r)
    ];
  }
  function TT(...n) {
    const r = n[0];
    if (n.length === 1) return r;
    const i = () => {
      const a = n.map((u) => ({
        useScope: u(),
        scopeName: u.scopeName
      }));
      return function(s) {
        const d = a.reduce((h, { useScope: p, scopeName: m }) => {
          const y = p(s)[`__scope${m}`];
          return {
            ...h,
            ...y
          };
        }, {});
        return w.useMemo(() => ({
          [`__scope${r.scopeName}`]: d
        }), [
          d
        ]);
      };
    };
    return i.scopeName = r.scopeName, i;
  }
  var kl = (globalThis == null ? void 0 : globalThis.document) ? w.useLayoutEffect : () => {
  }, MT = _u[" useInsertionEffect ".trim().toString()] || kl;
  function Nb({ prop: n, defaultProp: r, onChange: i = () => {
  }, caller: a }) {
    const [u, s, d] = OT({
      defaultProp: r,
      onChange: i
    }), h = n !== void 0, p = h ? n : u;
    {
      const g = w.useRef(n !== void 0);
      w.useEffect(() => {
        const y = g.current;
        y !== h && console.warn(`${a} is changing from ${y ? "controlled" : "uncontrolled"} to ${h ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), g.current = h;
      }, [
        h,
        a
      ]);
    }
    const m = w.useCallback((g) => {
      var _a2;
      if (h) {
        const y = kT(g) ? g(n) : g;
        y !== n && ((_a2 = d.current) == null ? void 0 : _a2.call(d, y));
      } else s(g);
    }, [
      h,
      n,
      s,
      d
    ]);
    return [
      p,
      m
    ];
  }
  function OT({ defaultProp: n, onChange: r }) {
    const [i, a] = w.useState(n), u = w.useRef(i), s = w.useRef(r);
    return MT(() => {
      s.current = r;
    }, [
      r
    ]), w.useEffect(() => {
      var _a2;
      u.current !== i && ((_a2 = s.current) == null ? void 0 : _a2.call(s, i), u.current = i);
    }, [
      i,
      u
    ]), [
      i,
      a,
      s
    ];
  }
  function kT(n) {
    return typeof n == "function";
  }
  var wd = vv();
  const RT = ed(wd);
  function NT(n) {
    const r = zT(n), i = w.forwardRef((a, u) => {
      const { children: s, ...d } = a, h = w.Children.toArray(s), p = h.find(jT);
      if (p) {
        const m = p.props.children, g = h.map((y) => y === p ? w.Children.count(m) > 1 ? w.Children.only(null) : w.isValidElement(m) ? m.props.children : null : y);
        return _.jsx(r, {
          ...d,
          ref: u,
          children: w.isValidElement(m) ? w.cloneElement(m, void 0, g) : null
        });
      }
      return _.jsx(r, {
        ...d,
        ref: u,
        children: s
      });
    });
    return i.displayName = `${n}.Slot`, i;
  }
  function zT(n) {
    const r = w.forwardRef((i, a) => {
      const { children: u, ...s } = i;
      if (w.isValidElement(u)) {
        const d = UT(u), h = LT(s, u.props);
        return u.type !== w.Fragment && (h.ref = a ? rr(a, d) : d), w.cloneElement(u, h);
      }
      return w.Children.count(u) > 1 ? w.Children.only(null) : null;
    });
    return r.displayName = `${n}.SlotClone`, r;
  }
  var DT = /* @__PURE__ */ Symbol("radix.slottable");
  function jT(n) {
    return w.isValidElement(n) && typeof n.type == "function" && "__radixId" in n.type && n.type.__radixId === DT;
  }
  function LT(n, r) {
    const i = {
      ...r
    };
    for (const a in r) {
      const u = n[a], s = r[a];
      /^on[A-Z]/.test(a) ? u && s ? i[a] = (...h) => {
        const p = s(...h);
        return u(...h), p;
      } : u && (i[a] = u) : a === "style" ? i[a] = {
        ...u,
        ...s
      } : a === "className" && (i[a] = [
        u,
        s
      ].filter(Boolean).join(" "));
    }
    return {
      ...n,
      ...i
    };
  }
  function UT(n) {
    var _a2, _b2;
    let r = (_a2 = Object.getOwnPropertyDescriptor(n.props, "ref")) == null ? void 0 : _a2.get, i = r && "isReactWarning" in r && r.isReactWarning;
    return i ? n.ref : (r = (_b2 = Object.getOwnPropertyDescriptor(n, "ref")) == null ? void 0 : _b2.get, i = r && "isReactWarning" in r && r.isReactWarning, i ? n.props.ref : n.props.ref || n.ref);
  }
  var BT = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul"
  ], Et = BT.reduce((n, r) => {
    const i = NT(`Primitive.${r}`), a = w.forwardRef((u, s) => {
      const { asChild: d, ...h } = u, p = d ? i : r;
      return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = true), _.jsx(p, {
        ...h,
        ref: s
      });
    });
    return a.displayName = `Primitive.${r}`, {
      ...n,
      [r]: a
    };
  }, {});
  function zb(n, r) {
    n && wd.flushSync(() => n.dispatchEvent(r));
  }
  function Iy(n) {
    const r = HT(n), i = w.forwardRef((a, u) => {
      const { children: s, ...d } = a, h = w.Children.toArray(s), p = h.find(VT);
      if (p) {
        const m = p.props.children, g = h.map((y) => y === p ? w.Children.count(m) > 1 ? w.Children.only(null) : w.isValidElement(m) ? m.props.children : null : y);
        return _.jsx(r, {
          ...d,
          ref: u,
          children: w.isValidElement(m) ? w.cloneElement(m, void 0, g) : null
        });
      }
      return _.jsx(r, {
        ...d,
        ref: u,
        children: s
      });
    });
    return i.displayName = `${n}.Slot`, i;
  }
  function HT(n) {
    const r = w.forwardRef((i, a) => {
      const { children: u, ...s } = i;
      if (w.isValidElement(u)) {
        const d = YT(u), h = GT(s, u.props);
        return u.type !== w.Fragment && (h.ref = a ? rr(a, d) : d), w.cloneElement(u, h);
      }
      return w.Children.count(u) > 1 ? w.Children.only(null) : null;
    });
    return r.displayName = `${n}.SlotClone`, r;
  }
  var qT = /* @__PURE__ */ Symbol("radix.slottable");
  function VT(n) {
    return w.isValidElement(n) && typeof n.type == "function" && "__radixId" in n.type && n.type.__radixId === qT;
  }
  function GT(n, r) {
    const i = {
      ...r
    };
    for (const a in r) {
      const u = n[a], s = r[a];
      /^on[A-Z]/.test(a) ? u && s ? i[a] = (...h) => {
        const p = s(...h);
        return u(...h), p;
      } : u && (i[a] = u) : a === "style" ? i[a] = {
        ...u,
        ...s
      } : a === "className" && (i[a] = [
        u,
        s
      ].filter(Boolean).join(" "));
    }
    return {
      ...n,
      ...i
    };
  }
  function YT(n) {
    var _a2, _b2;
    let r = (_a2 = Object.getOwnPropertyDescriptor(n.props, "ref")) == null ? void 0 : _a2.get, i = r && "isReactWarning" in r && r.isReactWarning;
    return i ? n.ref : (r = (_b2 = Object.getOwnPropertyDescriptor(n, "ref")) == null ? void 0 : _b2.get, i = r && "isReactWarning" in r && r.isReactWarning, i ? n.props.ref : n.props.ref || n.ref);
  }
  function Db(n) {
    const r = n + "CollectionProvider", [i, a] = Ca(r), [u, s] = i(r, {
      collectionRef: {
        current: null
      },
      itemMap: /* @__PURE__ */ new Map()
    }), d = (C) => {
      const { scope: k, children: O } = C, V = Wn.useRef(null), j = Wn.useRef(/* @__PURE__ */ new Map()).current;
      return _.jsx(u, {
        scope: k,
        itemMap: j,
        collectionRef: V,
        children: O
      });
    };
    d.displayName = r;
    const h = n + "CollectionSlot", p = Iy(h), m = Wn.forwardRef((C, k) => {
      const { scope: O, children: V } = C, j = s(h, O), G = jt(k, j.collectionRef);
      return _.jsx(p, {
        ref: G,
        children: V
      });
    });
    m.displayName = h;
    const g = n + "CollectionItemSlot", y = "data-radix-collection-item", x = Iy(g), b = Wn.forwardRef((C, k) => {
      const { scope: O, children: V, ...j } = C, G = Wn.useRef(null), J = jt(k, G), D = s(g, O);
      return Wn.useEffect(() => (D.itemMap.set(G, {
        ref: G,
        ...j
      }), () => {
        D.itemMap.delete(G);
      })), _.jsx(x, {
        [y]: "",
        ref: J,
        children: V
      });
    });
    b.displayName = g;
    function T(C) {
      const k = s(n + "CollectionConsumer", C);
      return Wn.useCallback(() => {
        const V = k.collectionRef.current;
        if (!V) return [];
        const j = Array.from(V.querySelectorAll(`[${y}]`));
        return Array.from(k.itemMap.values()).sort((D, Z) => j.indexOf(D.ref.current) - j.indexOf(Z.ref.current));
      }, [
        k.collectionRef,
        k.itemMap
      ]);
    }
    return [
      {
        Provider: d,
        Slot: m,
        ItemSlot: b
      },
      T,
      a
    ];
  }
  var XT = w.createContext(void 0);
  function jb(n) {
    const r = w.useContext(XT);
    return n || r || "ltr";
  }
  function $n(n) {
    const r = w.useRef(n);
    return w.useEffect(() => {
      r.current = n;
    }), w.useMemo(() => (...i) => {
      var _a2;
      return (_a2 = r.current) == null ? void 0 : _a2.call(r, ...i);
    }, []);
  }
  function IT(n, r = globalThis == null ? void 0 : globalThis.document) {
    const i = $n(n);
    w.useEffect(() => {
      const a = (u) => {
        u.key === "Escape" && i(u);
      };
      return r.addEventListener("keydown", a, {
        capture: true
      }), () => r.removeEventListener("keydown", a, {
        capture: true
      });
    }, [
      i,
      r
    ]);
  }
  var QT = "DismissableLayer", If = "dismissableLayer.update", FT = "dismissableLayer.pointerDownOutside", KT = "dismissableLayer.focusOutside", Qy, Lb = w.createContext({
    layers: /* @__PURE__ */ new Set(),
    layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
    branches: /* @__PURE__ */ new Set()
  }), Ub = w.forwardRef((n, r) => {
    const { disableOutsidePointerEvents: i = false, onEscapeKeyDown: a, onPointerDownOutside: u, onFocusOutside: s, onInteractOutside: d, onDismiss: h, ...p } = n, m = w.useContext(Lb), [g, y] = w.useState(null), x = (g == null ? void 0 : g.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, b] = w.useState({}), T = jt(r, (Z) => y(Z)), C = Array.from(m.layers), [k] = [
      ...m.layersWithOutsidePointerEventsDisabled
    ].slice(-1), O = C.indexOf(k), V = g ? C.indexOf(g) : -1, j = m.layersWithOutsidePointerEventsDisabled.size > 0, G = V >= O, J = JT((Z) => {
      const X = Z.target, re = [
        ...m.branches
      ].some((ie) => ie.contains(X));
      !G || re || (u == null ? void 0 : u(Z), d == null ? void 0 : d(Z), Z.defaultPrevented || (h == null ? void 0 : h()));
    }, x), D = WT((Z) => {
      const X = Z.target;
      [
        ...m.branches
      ].some((ie) => ie.contains(X)) || (s == null ? void 0 : s(Z), d == null ? void 0 : d(Z), Z.defaultPrevented || (h == null ? void 0 : h()));
    }, x);
    return IT((Z) => {
      V === m.layers.size - 1 && (a == null ? void 0 : a(Z), !Z.defaultPrevented && h && (Z.preventDefault(), h()));
    }, x), w.useEffect(() => {
      if (g) return i && (m.layersWithOutsidePointerEventsDisabled.size === 0 && (Qy = x.body.style.pointerEvents, x.body.style.pointerEvents = "none"), m.layersWithOutsidePointerEventsDisabled.add(g)), m.layers.add(g), Fy(), () => {
        i && m.layersWithOutsidePointerEventsDisabled.size === 1 && (x.body.style.pointerEvents = Qy);
      };
    }, [
      g,
      x,
      i,
      m
    ]), w.useEffect(() => () => {
      g && (m.layers.delete(g), m.layersWithOutsidePointerEventsDisabled.delete(g), Fy());
    }, [
      g,
      m
    ]), w.useEffect(() => {
      const Z = () => b({});
      return document.addEventListener(If, Z), () => document.removeEventListener(If, Z);
    }, []), _.jsx(Et.div, {
      ...p,
      ref: T,
      style: {
        pointerEvents: j ? G ? "auto" : "none" : void 0,
        ...n.style
      },
      onFocusCapture: ke(n.onFocusCapture, D.onFocusCapture),
      onBlurCapture: ke(n.onBlurCapture, D.onBlurCapture),
      onPointerDownCapture: ke(n.onPointerDownCapture, J.onPointerDownCapture)
    });
  });
  Ub.displayName = QT;
  var ZT = "DismissableLayerBranch", PT = w.forwardRef((n, r) => {
    const i = w.useContext(Lb), a = w.useRef(null), u = jt(r, a);
    return w.useEffect(() => {
      const s = a.current;
      if (s) return i.branches.add(s), () => {
        i.branches.delete(s);
      };
    }, [
      i.branches
    ]), _.jsx(Et.div, {
      ...n,
      ref: u
    });
  });
  PT.displayName = ZT;
  function JT(n, r = globalThis == null ? void 0 : globalThis.document) {
    const i = $n(n), a = w.useRef(false), u = w.useRef(() => {
    });
    return w.useEffect(() => {
      const s = (h) => {
        if (h.target && !a.current) {
          let p = function() {
            Bb(FT, i, m, {
              discrete: true
            });
          };
          const m = {
            originalEvent: h
          };
          h.pointerType === "touch" ? (r.removeEventListener("click", u.current), u.current = p, r.addEventListener("click", u.current, {
            once: true
          })) : p();
        } else r.removeEventListener("click", u.current);
        a.current = false;
      }, d = window.setTimeout(() => {
        r.addEventListener("pointerdown", s);
      }, 0);
      return () => {
        window.clearTimeout(d), r.removeEventListener("pointerdown", s), r.removeEventListener("click", u.current);
      };
    }, [
      r,
      i
    ]), {
      onPointerDownCapture: () => a.current = true
    };
  }
  function WT(n, r = globalThis == null ? void 0 : globalThis.document) {
    const i = $n(n), a = w.useRef(false);
    return w.useEffect(() => {
      const u = (s) => {
        s.target && !a.current && Bb(KT, i, {
          originalEvent: s
        }, {
          discrete: false
        });
      };
      return r.addEventListener("focusin", u), () => r.removeEventListener("focusin", u);
    }, [
      r,
      i
    ]), {
      onFocusCapture: () => a.current = true,
      onBlurCapture: () => a.current = false
    };
  }
  function Fy() {
    const n = new CustomEvent(If);
    document.dispatchEvent(n);
  }
  function Bb(n, r, i, { discrete: a }) {
    const u = i.originalEvent.target, s = new CustomEvent(n, {
      bubbles: false,
      cancelable: true,
      detail: i
    });
    r && u.addEventListener(n, r, {
      once: true
    }), a ? zb(u, s) : u.dispatchEvent(s);
  }
  var Ef = 0;
  function $T() {
    w.useEffect(() => {
      const n = document.querySelectorAll("[data-radix-focus-guard]");
      return document.body.insertAdjacentElement("afterbegin", n[0] ?? Ky()), document.body.insertAdjacentElement("beforeend", n[1] ?? Ky()), Ef++, () => {
        Ef === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((r) => r.remove()), Ef--;
      };
    }, []);
  }
  function Ky() {
    const n = document.createElement("span");
    return n.setAttribute("data-radix-focus-guard", ""), n.tabIndex = 0, n.style.outline = "none", n.style.opacity = "0", n.style.position = "fixed", n.style.pointerEvents = "none", n;
  }
  var Cf = "focusScope.autoFocusOnMount", Af = "focusScope.autoFocusOnUnmount", Zy = {
    bubbles: false,
    cancelable: true
  }, eM = "FocusScope", Hb = w.forwardRef((n, r) => {
    const { loop: i = false, trapped: a = false, onMountAutoFocus: u, onUnmountAutoFocus: s, ...d } = n, [h, p] = w.useState(null), m = $n(u), g = $n(s), y = w.useRef(null), x = jt(r, (C) => p(C)), b = w.useRef({
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    }).current;
    w.useEffect(() => {
      if (a) {
        let C = function(j) {
          if (b.paused || !h) return;
          const G = j.target;
          h.contains(G) ? y.current = G : Ol(y.current, {
            select: true
          });
        }, k = function(j) {
          if (b.paused || !h) return;
          const G = j.relatedTarget;
          G !== null && (h.contains(G) || Ol(y.current, {
            select: true
          }));
        }, O = function(j) {
          if (document.activeElement === document.body) for (const J of j) J.removedNodes.length > 0 && Ol(h);
        };
        document.addEventListener("focusin", C), document.addEventListener("focusout", k);
        const V = new MutationObserver(O);
        return h && V.observe(h, {
          childList: true,
          subtree: true
        }), () => {
          document.removeEventListener("focusin", C), document.removeEventListener("focusout", k), V.disconnect();
        };
      }
    }, [
      a,
      h,
      b.paused
    ]), w.useEffect(() => {
      if (h) {
        Jy.add(b);
        const C = document.activeElement;
        if (!h.contains(C)) {
          const O = new CustomEvent(Cf, Zy);
          h.addEventListener(Cf, m), h.dispatchEvent(O), O.defaultPrevented || (tM(aM(qb(h)), {
            select: true
          }), document.activeElement === C && Ol(h));
        }
        return () => {
          h.removeEventListener(Cf, m), setTimeout(() => {
            const O = new CustomEvent(Af, Zy);
            h.addEventListener(Af, g), h.dispatchEvent(O), O.defaultPrevented || Ol(C ?? document.body, {
              select: true
            }), h.removeEventListener(Af, g), Jy.remove(b);
          }, 0);
        };
      }
    }, [
      h,
      m,
      g,
      b
    ]);
    const T = w.useCallback((C) => {
      if (!i && !a || b.paused) return;
      const k = C.key === "Tab" && !C.altKey && !C.ctrlKey && !C.metaKey, O = document.activeElement;
      if (k && O) {
        const V = C.currentTarget, [j, G] = nM(V);
        j && G ? !C.shiftKey && O === G ? (C.preventDefault(), i && Ol(j, {
          select: true
        })) : C.shiftKey && O === j && (C.preventDefault(), i && Ol(G, {
          select: true
        })) : O === V && C.preventDefault();
      }
    }, [
      i,
      a,
      b.paused
    ]);
    return _.jsx(Et.div, {
      tabIndex: -1,
      ...d,
      ref: x,
      onKeyDown: T
    });
  });
  Hb.displayName = eM;
  function tM(n, { select: r = false } = {}) {
    const i = document.activeElement;
    for (const a of n) if (Ol(a, {
      select: r
    }), document.activeElement !== i) return;
  }
  function nM(n) {
    const r = qb(n), i = Py(r, n), a = Py(r.reverse(), n);
    return [
      i,
      a
    ];
  }
  function qb(n) {
    const r = [], i = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (a) => {
        const u = a.tagName === "INPUT" && a.type === "hidden";
        return a.disabled || a.hidden || u ? NodeFilter.FILTER_SKIP : a.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    });
    for (; i.nextNode(); ) r.push(i.currentNode);
    return r;
  }
  function Py(n, r) {
    for (const i of n) if (!lM(i, {
      upTo: r
    })) return i;
  }
  function lM(n, { upTo: r }) {
    if (getComputedStyle(n).visibility === "hidden") return true;
    for (; n; ) {
      if (r !== void 0 && n === r) return false;
      if (getComputedStyle(n).display === "none") return true;
      n = n.parentElement;
    }
    return false;
  }
  function rM(n) {
    return n instanceof HTMLInputElement && "select" in n;
  }
  function Ol(n, { select: r = false } = {}) {
    if (n && n.focus) {
      const i = document.activeElement;
      n.focus({
        preventScroll: true
      }), n !== i && rM(n) && r && n.select();
    }
  }
  var Jy = iM();
  function iM() {
    let n = [];
    return {
      add(r) {
        const i = n[0];
        r !== i && (i == null ? void 0 : i.pause()), n = Wy(n, r), n.unshift(r);
      },
      remove(r) {
        var _a2;
        n = Wy(n, r), (_a2 = n[0]) == null ? void 0 : _a2.resume();
      }
    };
  }
  function Wy(n, r) {
    const i = [
      ...n
    ], a = i.indexOf(r);
    return a !== -1 && i.splice(a, 1), i;
  }
  function aM(n) {
    return n.filter((r) => r.tagName !== "A");
  }
  var oM = _u[" useId ".trim().toString()] || (() => {
  }), uM = 0;
  function Qf(n) {
    const [r, i] = w.useState(oM());
    return kl(() => {
      i((a) => a ?? String(uM++));
    }, [
      n
    ]), r ? `radix-${r}` : "";
  }
  const cM = [
    "top",
    "right",
    "bottom",
    "left"
  ], Rl = Math.min, Qt = Math.max, xu = Math.round, tu = Math.floor, _n = (n) => ({
    x: n,
    y: n
  }), sM = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  }, fM = {
    start: "end",
    end: "start"
  };
  function Ff(n, r, i) {
    return Qt(n, Rl(r, i));
  }
  function el(n, r) {
    return typeof n == "function" ? n(r) : n;
  }
  function tl(n) {
    return n.split("-")[0];
  }
  function fi(n) {
    return n.split("-")[1];
  }
  function Ed(n) {
    return n === "x" ? "y" : "x";
  }
  function Cd(n) {
    return n === "y" ? "height" : "width";
  }
  const dM = /* @__PURE__ */ new Set([
    "top",
    "bottom"
  ]);
  function An(n) {
    return dM.has(tl(n)) ? "y" : "x";
  }
  function Ad(n) {
    return Ed(An(n));
  }
  function hM(n, r, i) {
    i === void 0 && (i = false);
    const a = fi(n), u = Ad(n), s = Cd(u);
    let d = u === "x" ? a === (i ? "end" : "start") ? "right" : "left" : a === "start" ? "bottom" : "top";
    return r.reference[s] > r.floating[s] && (d = Su(d)), [
      d,
      Su(d)
    ];
  }
  function mM(n) {
    const r = Su(n);
    return [
      Kf(n),
      r,
      Kf(r)
    ];
  }
  function Kf(n) {
    return n.replace(/start|end/g, (r) => fM[r]);
  }
  const $y = [
    "left",
    "right"
  ], ev = [
    "right",
    "left"
  ], pM = [
    "top",
    "bottom"
  ], gM = [
    "bottom",
    "top"
  ];
  function yM(n, r, i) {
    switch (n) {
      case "top":
      case "bottom":
        return i ? r ? ev : $y : r ? $y : ev;
      case "left":
      case "right":
        return r ? pM : gM;
      default:
        return [];
    }
  }
  function vM(n, r, i, a) {
    const u = fi(n);
    let s = yM(tl(n), i === "start", a);
    return u && (s = s.map((d) => d + "-" + u), r && (s = s.concat(s.map(Kf)))), s;
  }
  function Su(n) {
    return n.replace(/left|right|bottom|top/g, (r) => sM[r]);
  }
  function bM(n) {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...n
    };
  }
  function Vb(n) {
    return typeof n != "number" ? bM(n) : {
      top: n,
      right: n,
      bottom: n,
      left: n
    };
  }
  function wu(n) {
    const { x: r, y: i, width: a, height: u } = n;
    return {
      width: a,
      height: u,
      top: i,
      left: r,
      right: r + a,
      bottom: i + u,
      x: r,
      y: i
    };
  }
  function tv(n, r, i) {
    let { reference: a, floating: u } = n;
    const s = An(r), d = Ad(r), h = Cd(d), p = tl(r), m = s === "y", g = a.x + a.width / 2 - u.width / 2, y = a.y + a.height / 2 - u.height / 2, x = a[h] / 2 - u[h] / 2;
    let b;
    switch (p) {
      case "top":
        b = {
          x: g,
          y: a.y - u.height
        };
        break;
      case "bottom":
        b = {
          x: g,
          y: a.y + a.height
        };
        break;
      case "right":
        b = {
          x: a.x + a.width,
          y
        };
        break;
      case "left":
        b = {
          x: a.x - u.width,
          y
        };
        break;
      default:
        b = {
          x: a.x,
          y: a.y
        };
    }
    switch (fi(r)) {
      case "start":
        b[d] -= x * (i && m ? -1 : 1);
        break;
      case "end":
        b[d] += x * (i && m ? -1 : 1);
        break;
    }
    return b;
  }
  async function xM(n, r) {
    var i;
    r === void 0 && (r = {});
    const { x: a, y: u, platform: s, rects: d, elements: h, strategy: p } = n, { boundary: m = "clippingAncestors", rootBoundary: g = "viewport", elementContext: y = "floating", altBoundary: x = false, padding: b = 0 } = el(r, n), T = Vb(b), k = h[x ? y === "floating" ? "reference" : "floating" : y], O = wu(await s.getClippingRect({
      element: (i = await (s.isElement == null ? void 0 : s.isElement(k))) == null || i ? k : k.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(h.floating)),
      boundary: m,
      rootBoundary: g,
      strategy: p
    })), V = y === "floating" ? {
      x: a,
      y: u,
      width: d.floating.width,
      height: d.floating.height
    } : d.reference, j = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(h.floating)), G = await (s.isElement == null ? void 0 : s.isElement(j)) ? await (s.getScale == null ? void 0 : s.getScale(j)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    }, J = wu(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
      elements: h,
      rect: V,
      offsetParent: j,
      strategy: p
    }) : V);
    return {
      top: (O.top - J.top + T.top) / G.y,
      bottom: (J.bottom - O.bottom + T.bottom) / G.y,
      left: (O.left - J.left + T.left) / G.x,
      right: (J.right - O.right + T.right) / G.x
    };
  }
  const SM = async (n, r, i) => {
    const { placement: a = "bottom", strategy: u = "absolute", middleware: s = [], platform: d } = i, h = s.filter(Boolean), p = await (d.isRTL == null ? void 0 : d.isRTL(r));
    let m = await d.getElementRects({
      reference: n,
      floating: r,
      strategy: u
    }), { x: g, y } = tv(m, a, p), x = a, b = {}, T = 0;
    for (let k = 0; k < h.length; k++) {
      var C;
      const { name: O, fn: V } = h[k], { x: j, y: G, data: J, reset: D } = await V({
        x: g,
        y,
        initialPlacement: a,
        placement: x,
        strategy: u,
        middlewareData: b,
        rects: m,
        platform: {
          ...d,
          detectOverflow: (C = d.detectOverflow) != null ? C : xM
        },
        elements: {
          reference: n,
          floating: r
        }
      });
      g = j ?? g, y = G ?? y, b = {
        ...b,
        [O]: {
          ...b[O],
          ...J
        }
      }, D && T <= 50 && (T++, typeof D == "object" && (D.placement && (x = D.placement), D.rects && (m = D.rects === true ? await d.getElementRects({
        reference: n,
        floating: r,
        strategy: u
      }) : D.rects), { x: g, y } = tv(m, x, p)), k = -1);
    }
    return {
      x: g,
      y,
      placement: x,
      strategy: u,
      middlewareData: b
    };
  }, wM = (n) => ({
    name: "arrow",
    options: n,
    async fn(r) {
      const { x: i, y: a, placement: u, rects: s, platform: d, elements: h, middlewareData: p } = r, { element: m, padding: g = 0 } = el(n, r) || {};
      if (m == null) return {};
      const y = Vb(g), x = {
        x: i,
        y: a
      }, b = Ad(u), T = Cd(b), C = await d.getDimensions(m), k = b === "y", O = k ? "top" : "left", V = k ? "bottom" : "right", j = k ? "clientHeight" : "clientWidth", G = s.reference[T] + s.reference[b] - x[b] - s.floating[T], J = x[b] - s.reference[b], D = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(m));
      let Z = D ? D[j] : 0;
      (!Z || !await (d.isElement == null ? void 0 : d.isElement(D))) && (Z = h.floating[j] || s.floating[T]);
      const X = G / 2 - J / 2, re = Z / 2 - C[T] / 2 - 1, ie = Rl(y[O], re), te = Rl(y[V], re), W = ie, se = Z - C[T] - te, ne = Z / 2 - C[T] / 2 + X, P = Ff(W, ne, se), N = !p.arrow && fi(u) != null && ne !== P && s.reference[T] / 2 - (ne < W ? ie : te) - C[T] / 2 < 0, Q = N ? ne < W ? ne - W : ne - se : 0;
      return {
        [b]: x[b] + Q,
        data: {
          [b]: P,
          centerOffset: ne - P - Q,
          ...N && {
            alignmentOffset: Q
          }
        },
        reset: N
      };
    }
  }), EM = function(n) {
    return n === void 0 && (n = {}), {
      name: "flip",
      options: n,
      async fn(r) {
        var i, a;
        const { placement: u, middlewareData: s, rects: d, initialPlacement: h, platform: p, elements: m } = r, { mainAxis: g = true, crossAxis: y = true, fallbackPlacements: x, fallbackStrategy: b = "bestFit", fallbackAxisSideDirection: T = "none", flipAlignment: C = true, ...k } = el(n, r);
        if ((i = s.arrow) != null && i.alignmentOffset) return {};
        const O = tl(u), V = An(h), j = tl(h) === h, G = await (p.isRTL == null ? void 0 : p.isRTL(m.floating)), J = x || (j || !C ? [
          Su(h)
        ] : mM(h)), D = T !== "none";
        !x && D && J.push(...vM(h, C, T, G));
        const Z = [
          h,
          ...J
        ], X = await p.detectOverflow(r, k), re = [];
        let ie = ((a = s.flip) == null ? void 0 : a.overflows) || [];
        if (g && re.push(X[O]), y) {
          const ne = hM(u, d, G);
          re.push(X[ne[0]], X[ne[1]]);
        }
        if (ie = [
          ...ie,
          {
            placement: u,
            overflows: re
          }
        ], !re.every((ne) => ne <= 0)) {
          var te, W;
          const ne = (((te = s.flip) == null ? void 0 : te.index) || 0) + 1, P = Z[ne];
          if (P && (!(y === "alignment" ? V !== An(P) : false) || ie.every((H) => An(H.placement) === V ? H.overflows[0] > 0 : true))) return {
            data: {
              index: ne,
              overflows: ie
            },
            reset: {
              placement: P
            }
          };
          let N = (W = ie.filter((Q) => Q.overflows[0] <= 0).sort((Q, H) => Q.overflows[1] - H.overflows[1])[0]) == null ? void 0 : W.placement;
          if (!N) switch (b) {
            case "bestFit": {
              var se;
              const Q = (se = ie.filter((H) => {
                if (D) {
                  const $ = An(H.placement);
                  return $ === V || $ === "y";
                }
                return true;
              }).map((H) => [
                H.placement,
                H.overflows.filter(($) => $ > 0).reduce(($, A) => $ + A, 0)
              ]).sort((H, $) => H[1] - $[1])[0]) == null ? void 0 : se[0];
              Q && (N = Q);
              break;
            }
            case "initialPlacement":
              N = h;
              break;
          }
          if (u !== N) return {
            reset: {
              placement: N
            }
          };
        }
        return {};
      }
    };
  };
  function nv(n, r) {
    return {
      top: n.top - r.height,
      right: n.right - r.width,
      bottom: n.bottom - r.height,
      left: n.left - r.width
    };
  }
  function lv(n) {
    return cM.some((r) => n[r] >= 0);
  }
  const CM = function(n) {
    return n === void 0 && (n = {}), {
      name: "hide",
      options: n,
      async fn(r) {
        const { rects: i, platform: a } = r, { strategy: u = "referenceHidden", ...s } = el(n, r);
        switch (u) {
          case "referenceHidden": {
            const d = await a.detectOverflow(r, {
              ...s,
              elementContext: "reference"
            }), h = nv(d, i.reference);
            return {
              data: {
                referenceHiddenOffsets: h,
                referenceHidden: lv(h)
              }
            };
          }
          case "escaped": {
            const d = await a.detectOverflow(r, {
              ...s,
              altBoundary: true
            }), h = nv(d, i.floating);
            return {
              data: {
                escapedOffsets: h,
                escaped: lv(h)
              }
            };
          }
          default:
            return {};
        }
      }
    };
  }, Gb = /* @__PURE__ */ new Set([
    "left",
    "top"
  ]);
  async function AM(n, r) {
    const { placement: i, platform: a, elements: u } = n, s = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)), d = tl(i), h = fi(i), p = An(i) === "y", m = Gb.has(d) ? -1 : 1, g = s && p ? -1 : 1, y = el(r, n);
    let { mainAxis: x, crossAxis: b, alignmentAxis: T } = typeof y == "number" ? {
      mainAxis: y,
      crossAxis: 0,
      alignmentAxis: null
    } : {
      mainAxis: y.mainAxis || 0,
      crossAxis: y.crossAxis || 0,
      alignmentAxis: y.alignmentAxis
    };
    return h && typeof T == "number" && (b = h === "end" ? T * -1 : T), p ? {
      x: b * g,
      y: x * m
    } : {
      x: x * m,
      y: b * g
    };
  }
  const _M = function(n) {
    return n === void 0 && (n = 0), {
      name: "offset",
      options: n,
      async fn(r) {
        var i, a;
        const { x: u, y: s, placement: d, middlewareData: h } = r, p = await AM(r, n);
        return d === ((i = h.offset) == null ? void 0 : i.placement) && (a = h.arrow) != null && a.alignmentOffset ? {} : {
          x: u + p.x,
          y: s + p.y,
          data: {
            ...p,
            placement: d
          }
        };
      }
    };
  }, TM = function(n) {
    return n === void 0 && (n = {}), {
      name: "shift",
      options: n,
      async fn(r) {
        const { x: i, y: a, placement: u, platform: s } = r, { mainAxis: d = true, crossAxis: h = false, limiter: p = {
          fn: (O) => {
            let { x: V, y: j } = O;
            return {
              x: V,
              y: j
            };
          }
        }, ...m } = el(n, r), g = {
          x: i,
          y: a
        }, y = await s.detectOverflow(r, m), x = An(tl(u)), b = Ed(x);
        let T = g[b], C = g[x];
        if (d) {
          const O = b === "y" ? "top" : "left", V = b === "y" ? "bottom" : "right", j = T + y[O], G = T - y[V];
          T = Ff(j, T, G);
        }
        if (h) {
          const O = x === "y" ? "top" : "left", V = x === "y" ? "bottom" : "right", j = C + y[O], G = C - y[V];
          C = Ff(j, C, G);
        }
        const k = p.fn({
          ...r,
          [b]: T,
          [x]: C
        });
        return {
          ...k,
          data: {
            x: k.x - i,
            y: k.y - a,
            enabled: {
              [b]: d,
              [x]: h
            }
          }
        };
      }
    };
  }, MM = function(n) {
    return n === void 0 && (n = {}), {
      options: n,
      fn(r) {
        const { x: i, y: a, placement: u, rects: s, middlewareData: d } = r, { offset: h = 0, mainAxis: p = true, crossAxis: m = true } = el(n, r), g = {
          x: i,
          y: a
        }, y = An(u), x = Ed(y);
        let b = g[x], T = g[y];
        const C = el(h, r), k = typeof C == "number" ? {
          mainAxis: C,
          crossAxis: 0
        } : {
          mainAxis: 0,
          crossAxis: 0,
          ...C
        };
        if (p) {
          const j = x === "y" ? "height" : "width", G = s.reference[x] - s.floating[j] + k.mainAxis, J = s.reference[x] + s.reference[j] - k.mainAxis;
          b < G ? b = G : b > J && (b = J);
        }
        if (m) {
          var O, V;
          const j = x === "y" ? "width" : "height", G = Gb.has(tl(u)), J = s.reference[y] - s.floating[j] + (G && ((O = d.offset) == null ? void 0 : O[y]) || 0) + (G ? 0 : k.crossAxis), D = s.reference[y] + s.reference[j] + (G ? 0 : ((V = d.offset) == null ? void 0 : V[y]) || 0) - (G ? k.crossAxis : 0);
          T < J ? T = J : T > D && (T = D);
        }
        return {
          [x]: b,
          [y]: T
        };
      }
    };
  }, OM = function(n) {
    return n === void 0 && (n = {}), {
      name: "size",
      options: n,
      async fn(r) {
        var i, a;
        const { placement: u, rects: s, platform: d, elements: h } = r, { apply: p = () => {
        }, ...m } = el(n, r), g = await d.detectOverflow(r, m), y = tl(u), x = fi(u), b = An(u) === "y", { width: T, height: C } = s.floating;
        let k, O;
        y === "top" || y === "bottom" ? (k = y, O = x === (await (d.isRTL == null ? void 0 : d.isRTL(h.floating)) ? "start" : "end") ? "left" : "right") : (O = y, k = x === "end" ? "top" : "bottom");
        const V = C - g.top - g.bottom, j = T - g.left - g.right, G = Rl(C - g[k], V), J = Rl(T - g[O], j), D = !r.middlewareData.shift;
        let Z = G, X = J;
        if ((i = r.middlewareData.shift) != null && i.enabled.x && (X = j), (a = r.middlewareData.shift) != null && a.enabled.y && (Z = V), D && !x) {
          const ie = Qt(g.left, 0), te = Qt(g.right, 0), W = Qt(g.top, 0), se = Qt(g.bottom, 0);
          b ? X = T - 2 * (ie !== 0 || te !== 0 ? ie + te : Qt(g.left, g.right)) : Z = C - 2 * (W !== 0 || se !== 0 ? W + se : Qt(g.top, g.bottom));
        }
        await p({
          ...r,
          availableWidth: X,
          availableHeight: Z
        });
        const re = await d.getDimensions(h.floating);
        return T !== re.width || C !== re.height ? {
          reset: {
            rects: true
          }
        } : {};
      }
    };
  };
  function ku() {
    return typeof window < "u";
  }
  function di(n) {
    return Yb(n) ? (n.nodeName || "").toLowerCase() : "#document";
  }
  function Kt(n) {
    var r;
    return (n == null || (r = n.ownerDocument) == null ? void 0 : r.defaultView) || window;
  }
  function On(n) {
    var r;
    return (r = (Yb(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : r.documentElement;
  }
  function Yb(n) {
    return ku() ? n instanceof Node || n instanceof Kt(n).Node : false;
  }
  function gn(n) {
    return ku() ? n instanceof Element || n instanceof Kt(n).Element : false;
  }
  function Mn(n) {
    return ku() ? n instanceof HTMLElement || n instanceof Kt(n).HTMLElement : false;
  }
  function rv(n) {
    return !ku() || typeof ShadowRoot > "u" ? false : n instanceof ShadowRoot || n instanceof Kt(n).ShadowRoot;
  }
  const kM = /* @__PURE__ */ new Set([
    "inline",
    "contents"
  ]);
  function Aa(n) {
    const { overflow: r, overflowX: i, overflowY: a, display: u } = yn(n);
    return /auto|scroll|overlay|hidden|clip/.test(r + a + i) && !kM.has(u);
  }
  const RM = /* @__PURE__ */ new Set([
    "table",
    "td",
    "th"
  ]);
  function NM(n) {
    return RM.has(di(n));
  }
  const zM = [
    ":popover-open",
    ":modal"
  ];
  function Ru(n) {
    return zM.some((r) => {
      try {
        return n.matches(r);
      } catch {
        return false;
      }
    });
  }
  const DM = [
    "transform",
    "translate",
    "scale",
    "rotate",
    "perspective"
  ], jM = [
    "transform",
    "translate",
    "scale",
    "rotate",
    "perspective",
    "filter"
  ], LM = [
    "paint",
    "layout",
    "strict",
    "content"
  ];
  function _d(n) {
    const r = Td(), i = gn(n) ? yn(n) : n;
    return DM.some((a) => i[a] ? i[a] !== "none" : false) || (i.containerType ? i.containerType !== "normal" : false) || !r && (i.backdropFilter ? i.backdropFilter !== "none" : false) || !r && (i.filter ? i.filter !== "none" : false) || jM.some((a) => (i.willChange || "").includes(a)) || LM.some((a) => (i.contain || "").includes(a));
  }
  function UM(n) {
    let r = Nl(n);
    for (; Mn(r) && !oi(r); ) {
      if (_d(r)) return r;
      if (Ru(r)) return null;
      r = Nl(r);
    }
    return null;
  }
  function Td() {
    return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
  }
  const BM = /* @__PURE__ */ new Set([
    "html",
    "body",
    "#document"
  ]);
  function oi(n) {
    return BM.has(di(n));
  }
  function yn(n) {
    return Kt(n).getComputedStyle(n);
  }
  function Nu(n) {
    return gn(n) ? {
      scrollLeft: n.scrollLeft,
      scrollTop: n.scrollTop
    } : {
      scrollLeft: n.scrollX,
      scrollTop: n.scrollY
    };
  }
  function Nl(n) {
    if (di(n) === "html") return n;
    const r = n.assignedSlot || n.parentNode || rv(n) && n.host || On(n);
    return rv(r) ? r.host : r;
  }
  function Xb(n) {
    const r = Nl(n);
    return oi(r) ? n.ownerDocument ? n.ownerDocument.body : n.body : Mn(r) && Aa(r) ? r : Xb(r);
  }
  function va(n, r, i) {
    var a;
    r === void 0 && (r = []), i === void 0 && (i = true);
    const u = Xb(n), s = u === ((a = n.ownerDocument) == null ? void 0 : a.body), d = Kt(u);
    if (s) {
      const h = Zf(d);
      return r.concat(d, d.visualViewport || [], Aa(u) ? u : [], h && i ? va(h) : []);
    }
    return r.concat(u, va(u, [], i));
  }
  function Zf(n) {
    return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
  }
  function Ib(n) {
    const r = yn(n);
    let i = parseFloat(r.width) || 0, a = parseFloat(r.height) || 0;
    const u = Mn(n), s = u ? n.offsetWidth : i, d = u ? n.offsetHeight : a, h = xu(i) !== s || xu(a) !== d;
    return h && (i = s, a = d), {
      width: i,
      height: a,
      $: h
    };
  }
  function Md(n) {
    return gn(n) ? n : n.contextElement;
  }
  function ii(n) {
    const r = Md(n);
    if (!Mn(r)) return _n(1);
    const i = r.getBoundingClientRect(), { width: a, height: u, $: s } = Ib(r);
    let d = (s ? xu(i.width) : i.width) / a, h = (s ? xu(i.height) : i.height) / u;
    return (!d || !Number.isFinite(d)) && (d = 1), (!h || !Number.isFinite(h)) && (h = 1), {
      x: d,
      y: h
    };
  }
  const HM = _n(0);
  function Qb(n) {
    const r = Kt(n);
    return !Td() || !r.visualViewport ? HM : {
      x: r.visualViewport.offsetLeft,
      y: r.visualViewport.offsetTop
    };
  }
  function qM(n, r, i) {
    return r === void 0 && (r = false), !i || r && i !== Kt(n) ? false : r;
  }
  function tr(n, r, i, a) {
    r === void 0 && (r = false), i === void 0 && (i = false);
    const u = n.getBoundingClientRect(), s = Md(n);
    let d = _n(1);
    r && (a ? gn(a) && (d = ii(a)) : d = ii(n));
    const h = qM(s, i, a) ? Qb(s) : _n(0);
    let p = (u.left + h.x) / d.x, m = (u.top + h.y) / d.y, g = u.width / d.x, y = u.height / d.y;
    if (s) {
      const x = Kt(s), b = a && gn(a) ? Kt(a) : a;
      let T = x, C = Zf(T);
      for (; C && a && b !== T; ) {
        const k = ii(C), O = C.getBoundingClientRect(), V = yn(C), j = O.left + (C.clientLeft + parseFloat(V.paddingLeft)) * k.x, G = O.top + (C.clientTop + parseFloat(V.paddingTop)) * k.y;
        p *= k.x, m *= k.y, g *= k.x, y *= k.y, p += j, m += G, T = Kt(C), C = Zf(T);
      }
    }
    return wu({
      width: g,
      height: y,
      x: p,
      y: m
    });
  }
  function zu(n, r) {
    const i = Nu(n).scrollLeft;
    return r ? r.left + i : tr(On(n)).left + i;
  }
  function Fb(n, r) {
    const i = n.getBoundingClientRect(), a = i.left + r.scrollLeft - zu(n, i), u = i.top + r.scrollTop;
    return {
      x: a,
      y: u
    };
  }
  function VM(n) {
    let { elements: r, rect: i, offsetParent: a, strategy: u } = n;
    const s = u === "fixed", d = On(a), h = r ? Ru(r.floating) : false;
    if (a === d || h && s) return i;
    let p = {
      scrollLeft: 0,
      scrollTop: 0
    }, m = _n(1);
    const g = _n(0), y = Mn(a);
    if ((y || !y && !s) && ((di(a) !== "body" || Aa(d)) && (p = Nu(a)), Mn(a))) {
      const b = tr(a);
      m = ii(a), g.x = b.x + a.clientLeft, g.y = b.y + a.clientTop;
    }
    const x = d && !y && !s ? Fb(d, p) : _n(0);
    return {
      width: i.width * m.x,
      height: i.height * m.y,
      x: i.x * m.x - p.scrollLeft * m.x + g.x + x.x,
      y: i.y * m.y - p.scrollTop * m.y + g.y + x.y
    };
  }
  function GM(n) {
    return Array.from(n.getClientRects());
  }
  function YM(n) {
    const r = On(n), i = Nu(n), a = n.ownerDocument.body, u = Qt(r.scrollWidth, r.clientWidth, a.scrollWidth, a.clientWidth), s = Qt(r.scrollHeight, r.clientHeight, a.scrollHeight, a.clientHeight);
    let d = -i.scrollLeft + zu(n);
    const h = -i.scrollTop;
    return yn(a).direction === "rtl" && (d += Qt(r.clientWidth, a.clientWidth) - u), {
      width: u,
      height: s,
      x: d,
      y: h
    };
  }
  const iv = 25;
  function XM(n, r) {
    const i = Kt(n), a = On(n), u = i.visualViewport;
    let s = a.clientWidth, d = a.clientHeight, h = 0, p = 0;
    if (u) {
      s = u.width, d = u.height;
      const g = Td();
      (!g || g && r === "fixed") && (h = u.offsetLeft, p = u.offsetTop);
    }
    const m = zu(a);
    if (m <= 0) {
      const g = a.ownerDocument, y = g.body, x = getComputedStyle(y), b = g.compatMode === "CSS1Compat" && parseFloat(x.marginLeft) + parseFloat(x.marginRight) || 0, T = Math.abs(a.clientWidth - y.clientWidth - b);
      T <= iv && (s -= T);
    } else m <= iv && (s += m);
    return {
      width: s,
      height: d,
      x: h,
      y: p
    };
  }
  const IM = /* @__PURE__ */ new Set([
    "absolute",
    "fixed"
  ]);
  function QM(n, r) {
    const i = tr(n, true, r === "fixed"), a = i.top + n.clientTop, u = i.left + n.clientLeft, s = Mn(n) ? ii(n) : _n(1), d = n.clientWidth * s.x, h = n.clientHeight * s.y, p = u * s.x, m = a * s.y;
    return {
      width: d,
      height: h,
      x: p,
      y: m
    };
  }
  function av(n, r, i) {
    let a;
    if (r === "viewport") a = XM(n, i);
    else if (r === "document") a = YM(On(n));
    else if (gn(r)) a = QM(r, i);
    else {
      const u = Qb(n);
      a = {
        x: r.x - u.x,
        y: r.y - u.y,
        width: r.width,
        height: r.height
      };
    }
    return wu(a);
  }
  function Kb(n, r) {
    const i = Nl(n);
    return i === r || !gn(i) || oi(i) ? false : yn(i).position === "fixed" || Kb(i, r);
  }
  function FM(n, r) {
    const i = r.get(n);
    if (i) return i;
    let a = va(n, [], false).filter((h) => gn(h) && di(h) !== "body"), u = null;
    const s = yn(n).position === "fixed";
    let d = s ? Nl(n) : n;
    for (; gn(d) && !oi(d); ) {
      const h = yn(d), p = _d(d);
      !p && h.position === "fixed" && (u = null), (s ? !p && !u : !p && h.position === "static" && !!u && IM.has(u.position) || Aa(d) && !p && Kb(n, d)) ? a = a.filter((g) => g !== d) : u = h, d = Nl(d);
    }
    return r.set(n, a), a;
  }
  function KM(n) {
    let { element: r, boundary: i, rootBoundary: a, strategy: u } = n;
    const d = [
      ...i === "clippingAncestors" ? Ru(r) ? [] : FM(r, this._c) : [].concat(i),
      a
    ], h = d[0], p = d.reduce((m, g) => {
      const y = av(r, g, u);
      return m.top = Qt(y.top, m.top), m.right = Rl(y.right, m.right), m.bottom = Rl(y.bottom, m.bottom), m.left = Qt(y.left, m.left), m;
    }, av(r, h, u));
    return {
      width: p.right - p.left,
      height: p.bottom - p.top,
      x: p.left,
      y: p.top
    };
  }
  function ZM(n) {
    const { width: r, height: i } = Ib(n);
    return {
      width: r,
      height: i
    };
  }
  function PM(n, r, i) {
    const a = Mn(r), u = On(r), s = i === "fixed", d = tr(n, true, s, r);
    let h = {
      scrollLeft: 0,
      scrollTop: 0
    };
    const p = _n(0);
    function m() {
      p.x = zu(u);
    }
    if (a || !a && !s) if ((di(r) !== "body" || Aa(u)) && (h = Nu(r)), a) {
      const b = tr(r, true, s, r);
      p.x = b.x + r.clientLeft, p.y = b.y + r.clientTop;
    } else u && m();
    s && !a && u && m();
    const g = u && !a && !s ? Fb(u, h) : _n(0), y = d.left + h.scrollLeft - p.x - g.x, x = d.top + h.scrollTop - p.y - g.y;
    return {
      x: y,
      y: x,
      width: d.width,
      height: d.height
    };
  }
  function _f(n) {
    return yn(n).position === "static";
  }
  function ov(n, r) {
    if (!Mn(n) || yn(n).position === "fixed") return null;
    if (r) return r(n);
    let i = n.offsetParent;
    return On(n) === i && (i = i.ownerDocument.body), i;
  }
  function Zb(n, r) {
    const i = Kt(n);
    if (Ru(n)) return i;
    if (!Mn(n)) {
      let u = Nl(n);
      for (; u && !oi(u); ) {
        if (gn(u) && !_f(u)) return u;
        u = Nl(u);
      }
      return i;
    }
    let a = ov(n, r);
    for (; a && NM(a) && _f(a); ) a = ov(a, r);
    return a && oi(a) && _f(a) && !_d(a) ? i : a || UM(n) || i;
  }
  const JM = async function(n) {
    const r = this.getOffsetParent || Zb, i = this.getDimensions, a = await i(n.floating);
    return {
      reference: PM(n.reference, await r(n.floating), n.strategy),
      floating: {
        x: 0,
        y: 0,
        width: a.width,
        height: a.height
      }
    };
  };
  function WM(n) {
    return yn(n).direction === "rtl";
  }
  const $M = {
    convertOffsetParentRelativeRectToViewportRelativeRect: VM,
    getDocumentElement: On,
    getClippingRect: KM,
    getOffsetParent: Zb,
    getElementRects: JM,
    getClientRects: GM,
    getDimensions: ZM,
    getScale: ii,
    isElement: gn,
    isRTL: WM
  };
  function Pb(n, r) {
    return n.x === r.x && n.y === r.y && n.width === r.width && n.height === r.height;
  }
  function eO(n, r) {
    let i = null, a;
    const u = On(n);
    function s() {
      var h;
      clearTimeout(a), (h = i) == null || h.disconnect(), i = null;
    }
    function d(h, p) {
      h === void 0 && (h = false), p === void 0 && (p = 1), s();
      const m = n.getBoundingClientRect(), { left: g, top: y, width: x, height: b } = m;
      if (h || r(), !x || !b) return;
      const T = tu(y), C = tu(u.clientWidth - (g + x)), k = tu(u.clientHeight - (y + b)), O = tu(g), j = {
        rootMargin: -T + "px " + -C + "px " + -k + "px " + -O + "px",
        threshold: Qt(0, Rl(1, p)) || 1
      };
      let G = true;
      function J(D) {
        const Z = D[0].intersectionRatio;
        if (Z !== p) {
          if (!G) return d();
          Z ? d(false, Z) : a = setTimeout(() => {
            d(false, 1e-7);
          }, 1e3);
        }
        Z === 1 && !Pb(m, n.getBoundingClientRect()) && d(), G = false;
      }
      try {
        i = new IntersectionObserver(J, {
          ...j,
          root: u.ownerDocument
        });
      } catch {
        i = new IntersectionObserver(J, j);
      }
      i.observe(n);
    }
    return d(true), s;
  }
  function tO(n, r, i, a) {
    a === void 0 && (a = {});
    const { ancestorScroll: u = true, ancestorResize: s = true, elementResize: d = typeof ResizeObserver == "function", layoutShift: h = typeof IntersectionObserver == "function", animationFrame: p = false } = a, m = Md(n), g = u || s ? [
      ...m ? va(m) : [],
      ...va(r)
    ] : [];
    g.forEach((O) => {
      u && O.addEventListener("scroll", i, {
        passive: true
      }), s && O.addEventListener("resize", i);
    });
    const y = m && h ? eO(m, i) : null;
    let x = -1, b = null;
    d && (b = new ResizeObserver((O) => {
      let [V] = O;
      V && V.target === m && b && (b.unobserve(r), cancelAnimationFrame(x), x = requestAnimationFrame(() => {
        var j;
        (j = b) == null || j.observe(r);
      })), i();
    }), m && !p && b.observe(m), b.observe(r));
    let T, C = p ? tr(n) : null;
    p && k();
    function k() {
      const O = tr(n);
      C && !Pb(C, O) && i(), C = O, T = requestAnimationFrame(k);
    }
    return i(), () => {
      var O;
      g.forEach((V) => {
        u && V.removeEventListener("scroll", i), s && V.removeEventListener("resize", i);
      }), y == null ? void 0 : y(), (O = b) == null || O.disconnect(), b = null, p && cancelAnimationFrame(T);
    };
  }
  const nO = _M, lO = TM, rO = EM, iO = OM, aO = CM, uv = wM, oO = MM, uO = (n, r, i) => {
    const a = /* @__PURE__ */ new Map(), u = {
      platform: $M,
      ...i
    }, s = {
      ...u.platform,
      _c: a
    };
    return SM(n, r, {
      ...u,
      platform: s
    });
  };
  var cO = typeof document < "u", sO = function() {
  }, fu = cO ? w.useLayoutEffect : sO;
  function Eu(n, r) {
    if (n === r) return true;
    if (typeof n != typeof r) return false;
    if (typeof n == "function" && n.toString() === r.toString()) return true;
    let i, a, u;
    if (n && r && typeof n == "object") {
      if (Array.isArray(n)) {
        if (i = n.length, i !== r.length) return false;
        for (a = i; a-- !== 0; ) if (!Eu(n[a], r[a])) return false;
        return true;
      }
      if (u = Object.keys(n), i = u.length, i !== Object.keys(r).length) return false;
      for (a = i; a-- !== 0; ) if (!{}.hasOwnProperty.call(r, u[a])) return false;
      for (a = i; a-- !== 0; ) {
        const s = u[a];
        if (!(s === "_owner" && n.$$typeof) && !Eu(n[s], r[s])) return false;
      }
      return true;
    }
    return n !== n && r !== r;
  }
  function Jb(n) {
    return typeof window > "u" ? 1 : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
  }
  function cv(n, r) {
    const i = Jb(n);
    return Math.round(r * i) / i;
  }
  function Tf(n) {
    const r = w.useRef(n);
    return fu(() => {
      r.current = n;
    }), r;
  }
  function fO(n) {
    n === void 0 && (n = {});
    const { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: u, elements: { reference: s, floating: d } = {}, transform: h = true, whileElementsMounted: p, open: m } = n, [g, y] = w.useState({
      x: 0,
      y: 0,
      strategy: i,
      placement: r,
      middlewareData: {},
      isPositioned: false
    }), [x, b] = w.useState(a);
    Eu(x, a) || b(a);
    const [T, C] = w.useState(null), [k, O] = w.useState(null), V = w.useCallback((H) => {
      H !== D.current && (D.current = H, C(H));
    }, []), j = w.useCallback((H) => {
      H !== Z.current && (Z.current = H, O(H));
    }, []), G = s || T, J = d || k, D = w.useRef(null), Z = w.useRef(null), X = w.useRef(g), re = p != null, ie = Tf(p), te = Tf(u), W = Tf(m), se = w.useCallback(() => {
      if (!D.current || !Z.current) return;
      const H = {
        placement: r,
        strategy: i,
        middleware: x
      };
      te.current && (H.platform = te.current), uO(D.current, Z.current, H).then(($) => {
        const A = {
          ...$,
          isPositioned: W.current !== false
        };
        ne.current && !Eu(X.current, A) && (X.current = A, wd.flushSync(() => {
          y(A);
        }));
      });
    }, [
      x,
      r,
      i,
      te,
      W
    ]);
    fu(() => {
      m === false && X.current.isPositioned && (X.current.isPositioned = false, y((H) => ({
        ...H,
        isPositioned: false
      })));
    }, [
      m
    ]);
    const ne = w.useRef(false);
    fu(() => (ne.current = true, () => {
      ne.current = false;
    }), []), fu(() => {
      if (G && (D.current = G), J && (Z.current = J), G && J) {
        if (ie.current) return ie.current(G, J, se);
        se();
      }
    }, [
      G,
      J,
      se,
      ie,
      re
    ]);
    const P = w.useMemo(() => ({
      reference: D,
      floating: Z,
      setReference: V,
      setFloating: j
    }), [
      V,
      j
    ]), N = w.useMemo(() => ({
      reference: G,
      floating: J
    }), [
      G,
      J
    ]), Q = w.useMemo(() => {
      const H = {
        position: i,
        left: 0,
        top: 0
      };
      if (!N.floating) return H;
      const $ = cv(N.floating, g.x), A = cv(N.floating, g.y);
      return h ? {
        ...H,
        transform: "translate(" + $ + "px, " + A + "px)",
        ...Jb(N.floating) >= 1.5 && {
          willChange: "transform"
        }
      } : {
        position: i,
        left: $,
        top: A
      };
    }, [
      i,
      h,
      N.floating,
      g.x,
      g.y
    ]);
    return w.useMemo(() => ({
      ...g,
      update: se,
      refs: P,
      elements: N,
      floatingStyles: Q
    }), [
      g,
      se,
      P,
      N,
      Q
    ]);
  }
  const dO = (n) => {
    function r(i) {
      return {}.hasOwnProperty.call(i, "current");
    }
    return {
      name: "arrow",
      options: n,
      fn(i) {
        const { element: a, padding: u } = typeof n == "function" ? n(i) : n;
        return a && r(a) ? a.current != null ? uv({
          element: a.current,
          padding: u
        }).fn(i) : {} : a ? uv({
          element: a,
          padding: u
        }).fn(i) : {};
      }
    };
  }, hO = (n, r) => ({
    ...nO(n),
    options: [
      n,
      r
    ]
  }), mO = (n, r) => ({
    ...lO(n),
    options: [
      n,
      r
    ]
  }), pO = (n, r) => ({
    ...oO(n),
    options: [
      n,
      r
    ]
  }), gO = (n, r) => ({
    ...rO(n),
    options: [
      n,
      r
    ]
  }), yO = (n, r) => ({
    ...iO(n),
    options: [
      n,
      r
    ]
  }), vO = (n, r) => ({
    ...aO(n),
    options: [
      n,
      r
    ]
  }), bO = (n, r) => ({
    ...dO(n),
    options: [
      n,
      r
    ]
  });
  var xO = "Arrow", Wb = w.forwardRef((n, r) => {
    const { children: i, width: a = 10, height: u = 5, ...s } = n;
    return _.jsx(Et.svg, {
      ...s,
      ref: r,
      width: a,
      height: u,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: n.asChild ? i : _.jsx("polygon", {
        points: "0,0 30,0 15,10"
      })
    });
  });
  Wb.displayName = xO;
  var SO = Wb;
  function wO(n) {
    const [r, i] = w.useState(void 0);
    return kl(() => {
      if (n) {
        i({
          width: n.offsetWidth,
          height: n.offsetHeight
        });
        const a = new ResizeObserver((u) => {
          if (!Array.isArray(u) || !u.length) return;
          const s = u[0];
          let d, h;
          if ("borderBoxSize" in s) {
            const p = s.borderBoxSize, m = Array.isArray(p) ? p[0] : p;
            d = m.inlineSize, h = m.blockSize;
          } else d = n.offsetWidth, h = n.offsetHeight;
          i({
            width: d,
            height: h
          });
        });
        return a.observe(n, {
          box: "border-box"
        }), () => a.unobserve(n);
      } else i(void 0);
    }, [
      n
    ]), r;
  }
  var Od = "Popper", [$b, e0] = Ca(Od), [EO, t0] = $b(Od), n0 = (n) => {
    const { __scopePopper: r, children: i } = n, [a, u] = w.useState(null);
    return _.jsx(EO, {
      scope: r,
      anchor: a,
      onAnchorChange: u,
      children: i
    });
  };
  n0.displayName = Od;
  var l0 = "PopperAnchor", r0 = w.forwardRef((n, r) => {
    const { __scopePopper: i, virtualRef: a, ...u } = n, s = t0(l0, i), d = w.useRef(null), h = jt(r, d), p = w.useRef(null);
    return w.useEffect(() => {
      const m = p.current;
      p.current = (a == null ? void 0 : a.current) || d.current, m !== p.current && s.onAnchorChange(p.current);
    }), a ? null : _.jsx(Et.div, {
      ...u,
      ref: h
    });
  });
  r0.displayName = l0;
  var kd = "PopperContent", [CO, AO] = $b(kd), i0 = w.forwardRef((n, r) => {
    var _a2, _b2, _c, _d2, _e, _f2;
    const { __scopePopper: i, side: a = "bottom", sideOffset: u = 0, align: s = "center", alignOffset: d = 0, arrowPadding: h = 0, avoidCollisions: p = true, collisionBoundary: m = [], collisionPadding: g = 0, sticky: y = "partial", hideWhenDetached: x = false, updatePositionStrategy: b = "optimized", onPlaced: T, ...C } = n, k = t0(kd, i), [O, V] = w.useState(null), j = jt(r, (me) => V(me)), [G, J] = w.useState(null), D = wO(G), Z = (D == null ? void 0 : D.width) ?? 0, X = (D == null ? void 0 : D.height) ?? 0, re = a + (s !== "center" ? "-" + s : ""), ie = typeof g == "number" ? g : {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...g
    }, te = Array.isArray(m) ? m : [
      m
    ], W = te.length > 0, se = {
      padding: ie,
      boundary: te.filter(TO),
      altBoundary: W
    }, { refs: ne, floatingStyles: P, placement: N, isPositioned: Q, middlewareData: H } = fO({
      strategy: "fixed",
      placement: re,
      whileElementsMounted: (...me) => tO(...me, {
        animationFrame: b === "always"
      }),
      elements: {
        reference: k.anchor
      },
      middleware: [
        hO({
          mainAxis: u + X,
          alignmentAxis: d
        }),
        p && mO({
          mainAxis: true,
          crossAxis: false,
          limiter: y === "partial" ? pO() : void 0,
          ...se
        }),
        p && gO({
          ...se
        }),
        yO({
          ...se,
          apply: ({ elements: me, rects: Ze, availableWidth: et, availableHeight: ft }) => {
            const { width: bt, height: Pt } = Ze.reference, kn = me.floating.style;
            kn.setProperty("--radix-popper-available-width", `${et}px`), kn.setProperty("--radix-popper-available-height", `${ft}px`), kn.setProperty("--radix-popper-anchor-width", `${bt}px`), kn.setProperty("--radix-popper-anchor-height", `${Pt}px`);
          }
        }),
        G && bO({
          element: G,
          padding: h
        }),
        MO({
          arrowWidth: Z,
          arrowHeight: X
        }),
        x && vO({
          strategy: "referenceHidden",
          ...se
        })
      ]
    }), [$, A] = u0(N), be = $n(T);
    kl(() => {
      Q && (be == null ? void 0 : be());
    }, [
      Q,
      be
    ]);
    const ye = (_a2 = H.arrow) == null ? void 0 : _a2.x, E = (_b2 = H.arrow) == null ? void 0 : _b2.y, he = ((_c = H.arrow) == null ? void 0 : _c.centerOffset) !== 0, [Be, Ee] = w.useState();
    return kl(() => {
      O && Ee(window.getComputedStyle(O).zIndex);
    }, [
      O
    ]), _.jsx("div", {
      ref: ne.setFloating,
      "data-radix-popper-content-wrapper": "",
      style: {
        ...P,
        transform: Q ? P.transform : "translate(0, -200%)",
        minWidth: "max-content",
        zIndex: Be,
        "--radix-popper-transform-origin": [
          (_d2 = H.transformOrigin) == null ? void 0 : _d2.x,
          (_e = H.transformOrigin) == null ? void 0 : _e.y
        ].join(" "),
        ...((_f2 = H.hide) == null ? void 0 : _f2.referenceHidden) && {
          visibility: "hidden",
          pointerEvents: "none"
        }
      },
      dir: n.dir,
      children: _.jsx(CO, {
        scope: i,
        placedSide: $,
        onArrowChange: J,
        arrowX: ye,
        arrowY: E,
        shouldHideArrow: he,
        children: _.jsx(Et.div, {
          "data-side": $,
          "data-align": A,
          ...C,
          ref: j,
          style: {
            ...C.style,
            animation: Q ? void 0 : "none"
          }
        })
      })
    });
  });
  i0.displayName = kd;
  var a0 = "PopperArrow", _O = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }, o0 = w.forwardRef(function(r, i) {
    const { __scopePopper: a, ...u } = r, s = AO(a0, a), d = _O[s.placedSide];
    return _.jsx("span", {
      ref: s.onArrowChange,
      style: {
        position: "absolute",
        left: s.arrowX,
        top: s.arrowY,
        [d]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0"
        }[s.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)"
        }[s.placedSide],
        visibility: s.shouldHideArrow ? "hidden" : void 0
      },
      children: _.jsx(SO, {
        ...u,
        ref: i,
        style: {
          ...u.style,
          display: "block"
        }
      })
    });
  });
  o0.displayName = a0;
  function TO(n) {
    return n !== null;
  }
  var MO = (n) => ({
    name: "transformOrigin",
    options: n,
    fn(r) {
      var _a2, _b2, _c;
      const { placement: i, rects: a, middlewareData: u } = r, d = ((_a2 = u.arrow) == null ? void 0 : _a2.centerOffset) !== 0, h = d ? 0 : n.arrowWidth, p = d ? 0 : n.arrowHeight, [m, g] = u0(i), y = {
        start: "0%",
        center: "50%",
        end: "100%"
      }[g], x = (((_b2 = u.arrow) == null ? void 0 : _b2.x) ?? 0) + h / 2, b = (((_c = u.arrow) == null ? void 0 : _c.y) ?? 0) + p / 2;
      let T = "", C = "";
      return m === "bottom" ? (T = d ? y : `${x}px`, C = `${-p}px`) : m === "top" ? (T = d ? y : `${x}px`, C = `${a.floating.height + p}px`) : m === "right" ? (T = `${-p}px`, C = d ? y : `${b}px`) : m === "left" && (T = `${a.floating.width + p}px`, C = d ? y : `${b}px`), {
        data: {
          x: T,
          y: C
        }
      };
    }
  });
  function u0(n) {
    const [r, i = "center"] = n.split("-");
    return [
      r,
      i
    ];
  }
  var OO = n0, kO = r0, RO = i0, NO = o0, zO = "Portal", c0 = w.forwardRef((n, r) => {
    var _a2;
    const { container: i, ...a } = n, [u, s] = w.useState(false);
    kl(() => s(true), []);
    const d = i || u && ((_a2 = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a2.body);
    return d ? RT.createPortal(_.jsx(Et.div, {
      ...a,
      ref: r
    }), d) : null;
  });
  c0.displayName = zO;
  function DO(n, r) {
    return w.useReducer((i, a) => r[i][a] ?? i, n);
  }
  var _a = (n) => {
    const { present: r, children: i } = n, a = jO(r), u = typeof i == "function" ? i({
      present: a.isPresent
    }) : w.Children.only(i), s = jt(a.ref, LO(u));
    return typeof i == "function" || a.isPresent ? w.cloneElement(u, {
      ref: s
    }) : null;
  };
  _a.displayName = "Presence";
  function jO(n) {
    const [r, i] = w.useState(), a = w.useRef(null), u = w.useRef(n), s = w.useRef("none"), d = n ? "mounted" : "unmounted", [h, p] = DO(d, {
      mounted: {
        UNMOUNT: "unmounted",
        ANIMATION_OUT: "unmountSuspended"
      },
      unmountSuspended: {
        MOUNT: "mounted",
        ANIMATION_END: "unmounted"
      },
      unmounted: {
        MOUNT: "mounted"
      }
    });
    return w.useEffect(() => {
      const m = nu(a.current);
      s.current = h === "mounted" ? m : "none";
    }, [
      h
    ]), kl(() => {
      const m = a.current, g = u.current;
      if (g !== n) {
        const x = s.current, b = nu(m);
        n ? p("MOUNT") : b === "none" || (m == null ? void 0 : m.display) === "none" ? p("UNMOUNT") : p(g && x !== b ? "ANIMATION_OUT" : "UNMOUNT"), u.current = n;
      }
    }, [
      n,
      p
    ]), kl(() => {
      if (r) {
        let m;
        const g = r.ownerDocument.defaultView ?? window, y = (b) => {
          const C = nu(a.current).includes(CSS.escape(b.animationName));
          if (b.target === r && C && (p("ANIMATION_END"), !u.current)) {
            const k = r.style.animationFillMode;
            r.style.animationFillMode = "forwards", m = g.setTimeout(() => {
              r.style.animationFillMode === "forwards" && (r.style.animationFillMode = k);
            });
          }
        }, x = (b) => {
          b.target === r && (s.current = nu(a.current));
        };
        return r.addEventListener("animationstart", x), r.addEventListener("animationcancel", y), r.addEventListener("animationend", y), () => {
          g.clearTimeout(m), r.removeEventListener("animationstart", x), r.removeEventListener("animationcancel", y), r.removeEventListener("animationend", y);
        };
      } else p("ANIMATION_END");
    }, [
      r,
      p
    ]), {
      isPresent: [
        "mounted",
        "unmountSuspended"
      ].includes(h),
      ref: w.useCallback((m) => {
        a.current = m ? getComputedStyle(m) : null, i(m);
      }, [])
    };
  }
  function nu(n) {
    return (n == null ? void 0 : n.animationName) || "none";
  }
  function LO(n) {
    var _a2, _b2;
    let r = (_a2 = Object.getOwnPropertyDescriptor(n.props, "ref")) == null ? void 0 : _a2.get, i = r && "isReactWarning" in r && r.isReactWarning;
    return i ? n.ref : (r = (_b2 = Object.getOwnPropertyDescriptor(n, "ref")) == null ? void 0 : _b2.get, i = r && "isReactWarning" in r && r.isReactWarning, i ? n.props.ref : n.props.ref || n.ref);
  }
  var Mf = "rovingFocusGroup.onEntryFocus", UO = {
    bubbles: false,
    cancelable: true
  }, Ta = "RovingFocusGroup", [Pf, s0, BO] = Db(Ta), [HO, f0] = Ca(Ta, [
    BO
  ]), [qO, VO] = HO(Ta), d0 = w.forwardRef((n, r) => _.jsx(Pf.Provider, {
    scope: n.__scopeRovingFocusGroup,
    children: _.jsx(Pf.Slot, {
      scope: n.__scopeRovingFocusGroup,
      children: _.jsx(GO, {
        ...n,
        ref: r
      })
    })
  }));
  d0.displayName = Ta;
  var GO = w.forwardRef((n, r) => {
    const { __scopeRovingFocusGroup: i, orientation: a, loop: u = false, dir: s, currentTabStopId: d, defaultCurrentTabStopId: h, onCurrentTabStopIdChange: p, onEntryFocus: m, preventScrollOnEntryFocus: g = false, ...y } = n, x = w.useRef(null), b = jt(r, x), T = jb(s), [C, k] = Nb({
      prop: d,
      defaultProp: h ?? null,
      onChange: p,
      caller: Ta
    }), [O, V] = w.useState(false), j = $n(m), G = s0(i), J = w.useRef(false), [D, Z] = w.useState(0);
    return w.useEffect(() => {
      const X = x.current;
      if (X) return X.addEventListener(Mf, j), () => X.removeEventListener(Mf, j);
    }, [
      j
    ]), _.jsx(qO, {
      scope: i,
      orientation: a,
      dir: T,
      loop: u,
      currentTabStopId: C,
      onItemFocus: w.useCallback((X) => k(X), [
        k
      ]),
      onItemShiftTab: w.useCallback(() => V(true), []),
      onFocusableItemAdd: w.useCallback(() => Z((X) => X + 1), []),
      onFocusableItemRemove: w.useCallback(() => Z((X) => X - 1), []),
      children: _.jsx(Et.div, {
        tabIndex: O || D === 0 ? -1 : 0,
        "data-orientation": a,
        ...y,
        ref: b,
        style: {
          outline: "none",
          ...n.style
        },
        onMouseDown: ke(n.onMouseDown, () => {
          J.current = true;
        }),
        onFocus: ke(n.onFocus, (X) => {
          const re = !J.current;
          if (X.target === X.currentTarget && re && !O) {
            const ie = new CustomEvent(Mf, UO);
            if (X.currentTarget.dispatchEvent(ie), !ie.defaultPrevented) {
              const te = G().filter((N) => N.focusable), W = te.find((N) => N.active), se = te.find((N) => N.id === C), P = [
                W,
                se,
                ...te
              ].filter(Boolean).map((N) => N.ref.current);
              p0(P, g);
            }
          }
          J.current = false;
        }),
        onBlur: ke(n.onBlur, () => V(false))
      })
    });
  }), h0 = "RovingFocusGroupItem", m0 = w.forwardRef((n, r) => {
    const { __scopeRovingFocusGroup: i, focusable: a = true, active: u = false, tabStopId: s, children: d, ...h } = n, p = Qf(), m = s || p, g = VO(h0, i), y = g.currentTabStopId === m, x = s0(i), { onFocusableItemAdd: b, onFocusableItemRemove: T, currentTabStopId: C } = g;
    return w.useEffect(() => {
      if (a) return b(), () => T();
    }, [
      a,
      b,
      T
    ]), _.jsx(Pf.ItemSlot, {
      scope: i,
      id: m,
      focusable: a,
      active: u,
      children: _.jsx(Et.span, {
        tabIndex: y ? 0 : -1,
        "data-orientation": g.orientation,
        ...h,
        ref: r,
        onMouseDown: ke(n.onMouseDown, (k) => {
          a ? g.onItemFocus(m) : k.preventDefault();
        }),
        onFocus: ke(n.onFocus, () => g.onItemFocus(m)),
        onKeyDown: ke(n.onKeyDown, (k) => {
          if (k.key === "Tab" && k.shiftKey) {
            g.onItemShiftTab();
            return;
          }
          if (k.target !== k.currentTarget) return;
          const O = IO(k, g.orientation, g.dir);
          if (O !== void 0) {
            if (k.metaKey || k.ctrlKey || k.altKey || k.shiftKey) return;
            k.preventDefault();
            let j = x().filter((G) => G.focusable).map((G) => G.ref.current);
            if (O === "last") j.reverse();
            else if (O === "prev" || O === "next") {
              O === "prev" && j.reverse();
              const G = j.indexOf(k.currentTarget);
              j = g.loop ? QO(j, G + 1) : j.slice(G + 1);
            }
            setTimeout(() => p0(j));
          }
        }),
        children: typeof d == "function" ? d({
          isCurrentTabStop: y,
          hasTabStop: C != null
        }) : d
      })
    });
  });
  m0.displayName = h0;
  var YO = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
  };
  function XO(n, r) {
    return r !== "rtl" ? n : n === "ArrowLeft" ? "ArrowRight" : n === "ArrowRight" ? "ArrowLeft" : n;
  }
  function IO(n, r, i) {
    const a = XO(n.key, i);
    if (!(r === "vertical" && [
      "ArrowLeft",
      "ArrowRight"
    ].includes(a)) && !(r === "horizontal" && [
      "ArrowUp",
      "ArrowDown"
    ].includes(a))) return YO[a];
  }
  function p0(n, r = false) {
    const i = document.activeElement;
    for (const a of n) if (a === i || (a.focus({
      preventScroll: r
    }), document.activeElement !== i)) return;
  }
  function QO(n, r) {
    return n.map((i, a) => n[(r + a) % n.length]);
  }
  var FO = d0, KO = m0;
  function ZO(n) {
    const r = PO(n), i = w.forwardRef((a, u) => {
      const { children: s, ...d } = a, h = w.Children.toArray(s), p = h.find(WO);
      if (p) {
        const m = p.props.children, g = h.map((y) => y === p ? w.Children.count(m) > 1 ? w.Children.only(null) : w.isValidElement(m) ? m.props.children : null : y);
        return _.jsx(r, {
          ...d,
          ref: u,
          children: w.isValidElement(m) ? w.cloneElement(m, void 0, g) : null
        });
      }
      return _.jsx(r, {
        ...d,
        ref: u,
        children: s
      });
    });
    return i.displayName = `${n}.Slot`, i;
  }
  function PO(n) {
    const r = w.forwardRef((i, a) => {
      const { children: u, ...s } = i;
      if (w.isValidElement(u)) {
        const d = ek(u), h = $O(s, u.props);
        return u.type !== w.Fragment && (h.ref = a ? rr(a, d) : d), w.cloneElement(u, h);
      }
      return w.Children.count(u) > 1 ? w.Children.only(null) : null;
    });
    return r.displayName = `${n}.SlotClone`, r;
  }
  var JO = /* @__PURE__ */ Symbol("radix.slottable");
  function WO(n) {
    return w.isValidElement(n) && typeof n.type == "function" && "__radixId" in n.type && n.type.__radixId === JO;
  }
  function $O(n, r) {
    const i = {
      ...r
    };
    for (const a in r) {
      const u = n[a], s = r[a];
      /^on[A-Z]/.test(a) ? u && s ? i[a] = (...h) => {
        const p = s(...h);
        return u(...h), p;
      } : u && (i[a] = u) : a === "style" ? i[a] = {
        ...u,
        ...s
      } : a === "className" && (i[a] = [
        u,
        s
      ].filter(Boolean).join(" "));
    }
    return {
      ...n,
      ...i
    };
  }
  function ek(n) {
    var _a2, _b2;
    let r = (_a2 = Object.getOwnPropertyDescriptor(n.props, "ref")) == null ? void 0 : _a2.get, i = r && "isReactWarning" in r && r.isReactWarning;
    return i ? n.ref : (r = (_b2 = Object.getOwnPropertyDescriptor(n, "ref")) == null ? void 0 : _b2.get, i = r && "isReactWarning" in r && r.isReactWarning, i ? n.props.ref : n.props.ref || n.ref);
  }
  var tk = function(n) {
    if (typeof document > "u") return null;
    var r = Array.isArray(n) ? n[0] : n;
    return r.ownerDocument.body;
  }, ei = /* @__PURE__ */ new WeakMap(), lu = /* @__PURE__ */ new WeakMap(), ru = {}, Of = 0, g0 = function(n) {
    return n && (n.host || g0(n.parentNode));
  }, nk = function(n, r) {
    return r.map(function(i) {
      if (n.contains(i)) return i;
      var a = g0(i);
      return a && n.contains(a) ? a : (console.error("aria-hidden", i, "in not contained inside", n, ". Doing nothing"), null);
    }).filter(function(i) {
      return !!i;
    });
  }, lk = function(n, r, i, a) {
    var u = nk(r, Array.isArray(n) ? n : [
      n
    ]);
    ru[i] || (ru[i] = /* @__PURE__ */ new WeakMap());
    var s = ru[i], d = [], h = /* @__PURE__ */ new Set(), p = new Set(u), m = function(y) {
      !y || h.has(y) || (h.add(y), m(y.parentNode));
    };
    u.forEach(m);
    var g = function(y) {
      !y || p.has(y) || Array.prototype.forEach.call(y.children, function(x) {
        if (h.has(x)) g(x);
        else try {
          var b = x.getAttribute(a), T = b !== null && b !== "false", C = (ei.get(x) || 0) + 1, k = (s.get(x) || 0) + 1;
          ei.set(x, C), s.set(x, k), d.push(x), C === 1 && T && lu.set(x, true), k === 1 && x.setAttribute(i, "true"), T || x.setAttribute(a, "true");
        } catch (O) {
          console.error("aria-hidden: cannot operate on ", x, O);
        }
      });
    };
    return g(r), h.clear(), Of++, function() {
      d.forEach(function(y) {
        var x = ei.get(y) - 1, b = s.get(y) - 1;
        ei.set(y, x), s.set(y, b), x || (lu.has(y) || y.removeAttribute(a), lu.delete(y)), b || y.removeAttribute(i);
      }), Of--, Of || (ei = /* @__PURE__ */ new WeakMap(), ei = /* @__PURE__ */ new WeakMap(), lu = /* @__PURE__ */ new WeakMap(), ru = {});
    };
  }, rk = function(n, r, i) {
    i === void 0 && (i = "data-aria-hidden");
    var a = Array.from(Array.isArray(n) ? n : [
      n
    ]), u = tk(n);
    return u ? (a.push.apply(a, Array.from(u.querySelectorAll("[aria-live], script"))), lk(a, u, i, "aria-hidden")) : function() {
      return null;
    };
  }, Cn = function() {
    return Cn = Object.assign || function(r) {
      for (var i, a = 1, u = arguments.length; a < u; a++) {
        i = arguments[a];
        for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (r[s] = i[s]);
      }
      return r;
    }, Cn.apply(this, arguments);
  };
  function y0(n, r) {
    var i = {};
    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && r.indexOf(a) < 0 && (i[a] = n[a]);
    if (n != null && typeof Object.getOwnPropertySymbols == "function") for (var u = 0, a = Object.getOwnPropertySymbols(n); u < a.length; u++) r.indexOf(a[u]) < 0 && Object.prototype.propertyIsEnumerable.call(n, a[u]) && (i[a[u]] = n[a[u]]);
    return i;
  }
  function ik(n, r, i) {
    if (i || arguments.length === 2) for (var a = 0, u = r.length, s; a < u; a++) (s || !(a in r)) && (s || (s = Array.prototype.slice.call(r, 0, a)), s[a] = r[a]);
    return n.concat(s || Array.prototype.slice.call(r));
  }
  var du = "right-scroll-bar-position", hu = "width-before-scroll-bar", ak = "with-scroll-bars-hidden", ok = "--removed-body-scroll-bar-size";
  function kf(n, r) {
    return typeof n == "function" ? n(r) : n && (n.current = r), n;
  }
  function uk(n, r) {
    var i = w.useState(function() {
      return {
        value: n,
        callback: r,
        facade: {
          get current() {
            return i.value;
          },
          set current(a) {
            var u = i.value;
            u !== a && (i.value = a, i.callback(a, u));
          }
        }
      };
    })[0];
    return i.callback = r, i.facade;
  }
  var ck = typeof window < "u" ? w.useLayoutEffect : w.useEffect, sv = /* @__PURE__ */ new WeakMap();
  function sk(n, r) {
    var i = uk(null, function(a) {
      return n.forEach(function(u) {
        return kf(u, a);
      });
    });
    return ck(function() {
      var a = sv.get(i);
      if (a) {
        var u = new Set(a), s = new Set(n), d = i.current;
        u.forEach(function(h) {
          s.has(h) || kf(h, null);
        }), s.forEach(function(h) {
          u.has(h) || kf(h, d);
        });
      }
      sv.set(i, n);
    }, [
      n
    ]), i;
  }
  function fk(n) {
    return n;
  }
  function dk(n, r) {
    r === void 0 && (r = fk);
    var i = [], a = false, u = {
      read: function() {
        if (a) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
        return i.length ? i[i.length - 1] : n;
      },
      useMedium: function(s) {
        var d = r(s, a);
        return i.push(d), function() {
          i = i.filter(function(h) {
            return h !== d;
          });
        };
      },
      assignSyncMedium: function(s) {
        for (a = true; i.length; ) {
          var d = i;
          i = [], d.forEach(s);
        }
        i = {
          push: function(h) {
            return s(h);
          },
          filter: function() {
            return i;
          }
        };
      },
      assignMedium: function(s) {
        a = true;
        var d = [];
        if (i.length) {
          var h = i;
          i = [], h.forEach(s), d = i;
        }
        var p = function() {
          var g = d;
          d = [], g.forEach(s);
        }, m = function() {
          return Promise.resolve().then(p);
        };
        m(), i = {
          push: function(g) {
            d.push(g), m();
          },
          filter: function(g) {
            return d = d.filter(g), i;
          }
        };
      }
    };
    return u;
  }
  function hk(n) {
    n === void 0 && (n = {});
    var r = dk(null);
    return r.options = Cn({
      async: true,
      ssr: false
    }, n), r;
  }
  var v0 = function(n) {
    var r = n.sideCar, i = y0(n, [
      "sideCar"
    ]);
    if (!r) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var a = r.read();
    if (!a) throw new Error("Sidecar medium not found");
    return w.createElement(a, Cn({}, i));
  };
  v0.isSideCarExport = true;
  function mk(n, r) {
    return n.useMedium(r), v0;
  }
  var b0 = hk(), Rf = function() {
  }, Du = w.forwardRef(function(n, r) {
    var i = w.useRef(null), a = w.useState({
      onScrollCapture: Rf,
      onWheelCapture: Rf,
      onTouchMoveCapture: Rf
    }), u = a[0], s = a[1], d = n.forwardProps, h = n.children, p = n.className, m = n.removeScrollBar, g = n.enabled, y = n.shards, x = n.sideCar, b = n.noRelative, T = n.noIsolation, C = n.inert, k = n.allowPinchZoom, O = n.as, V = O === void 0 ? "div" : O, j = n.gapMode, G = y0(n, [
      "forwardProps",
      "children",
      "className",
      "removeScrollBar",
      "enabled",
      "shards",
      "sideCar",
      "noRelative",
      "noIsolation",
      "inert",
      "allowPinchZoom",
      "as",
      "gapMode"
    ]), J = x, D = sk([
      i,
      r
    ]), Z = Cn(Cn({}, G), u);
    return w.createElement(w.Fragment, null, g && w.createElement(J, {
      sideCar: b0,
      removeScrollBar: m,
      shards: y,
      noRelative: b,
      noIsolation: T,
      inert: C,
      setCallbacks: s,
      allowPinchZoom: !!k,
      lockRef: i,
      gapMode: j
    }), d ? w.cloneElement(w.Children.only(h), Cn(Cn({}, Z), {
      ref: D
    })) : w.createElement(V, Cn({}, Z, {
      className: p,
      ref: D
    }), h));
  });
  Du.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false
  };
  Du.classNames = {
    fullWidth: hu,
    zeroRight: du
  };
  var pk = function() {
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
  };
  function gk() {
    if (!document) return null;
    var n = document.createElement("style");
    n.type = "text/css";
    var r = pk();
    return r && n.setAttribute("nonce", r), n;
  }
  function yk(n, r) {
    n.styleSheet ? n.styleSheet.cssText = r : n.appendChild(document.createTextNode(r));
  }
  function vk(n) {
    var r = document.head || document.getElementsByTagName("head")[0];
    r.appendChild(n);
  }
  var bk = function() {
    var n = 0, r = null;
    return {
      add: function(i) {
        n == 0 && (r = gk()) && (yk(r, i), vk(r)), n++;
      },
      remove: function() {
        n--, !n && r && (r.parentNode && r.parentNode.removeChild(r), r = null);
      }
    };
  }, xk = function() {
    var n = bk();
    return function(r, i) {
      w.useEffect(function() {
        return n.add(r), function() {
          n.remove();
        };
      }, [
        r && i
      ]);
    };
  }, x0 = function() {
    var n = xk(), r = function(i) {
      var a = i.styles, u = i.dynamic;
      return n(a, u), null;
    };
    return r;
  }, Sk = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
  }, Nf = function(n) {
    return parseInt(n || "", 10) || 0;
  }, wk = function(n) {
    var r = window.getComputedStyle(document.body), i = r[n === "padding" ? "paddingLeft" : "marginLeft"], a = r[n === "padding" ? "paddingTop" : "marginTop"], u = r[n === "padding" ? "paddingRight" : "marginRight"];
    return [
      Nf(i),
      Nf(a),
      Nf(u)
    ];
  }, Ek = function(n) {
    if (n === void 0 && (n = "margin"), typeof window > "u") return Sk;
    var r = wk(n), i = document.documentElement.clientWidth, a = window.innerWidth;
    return {
      left: r[0],
      top: r[1],
      right: r[2],
      gap: Math.max(0, a - i + r[2] - r[0])
    };
  }, Ck = x0(), ai = "data-scroll-locked", Ak = function(n, r, i, a) {
    var u = n.left, s = n.top, d = n.right, h = n.gap;
    return i === void 0 && (i = "margin"), `
  .`.concat(ak, ` {
   overflow: hidden `).concat(a, `;
   padding-right: `).concat(h, "px ").concat(a, `;
  }
  body[`).concat(ai, `] {
    overflow: hidden `).concat(a, `;
    overscroll-behavior: contain;
    `).concat([
      r && "position: relative ".concat(a, ";"),
      i === "margin" && `
    padding-left: `.concat(u, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(d, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(h, "px ").concat(a, `;
    `),
      i === "padding" && "padding-right: ".concat(h, "px ").concat(a, ";")
    ].filter(Boolean).join(""), `
  }
  
  .`).concat(du, ` {
    right: `).concat(h, "px ").concat(a, `;
  }
  
  .`).concat(hu, ` {
    margin-right: `).concat(h, "px ").concat(a, `;
  }
  
  .`).concat(du, " .").concat(du, ` {
    right: 0 `).concat(a, `;
  }
  
  .`).concat(hu, " .").concat(hu, ` {
    margin-right: 0 `).concat(a, `;
  }
  
  body[`).concat(ai, `] {
    `).concat(ok, ": ").concat(h, `px;
  }
`);
  }, fv = function() {
    var n = parseInt(document.body.getAttribute(ai) || "0", 10);
    return isFinite(n) ? n : 0;
  }, _k = function() {
    w.useEffect(function() {
      return document.body.setAttribute(ai, (fv() + 1).toString()), function() {
        var n = fv() - 1;
        n <= 0 ? document.body.removeAttribute(ai) : document.body.setAttribute(ai, n.toString());
      };
    }, []);
  }, Tk = function(n) {
    var r = n.noRelative, i = n.noImportant, a = n.gapMode, u = a === void 0 ? "margin" : a;
    _k();
    var s = w.useMemo(function() {
      return Ek(u);
    }, [
      u
    ]);
    return w.createElement(Ck, {
      styles: Ak(s, !r, u, i ? "" : "!important")
    });
  }, Jf = false;
  if (typeof window < "u") try {
    var iu = Object.defineProperty({}, "passive", {
      get: function() {
        return Jf = true, true;
      }
    });
    window.addEventListener("test", iu, iu), window.removeEventListener("test", iu, iu);
  } catch {
    Jf = false;
  }
  var ti = Jf ? {
    passive: false
  } : false, Mk = function(n) {
    return n.tagName === "TEXTAREA";
  }, S0 = function(n, r) {
    if (!(n instanceof Element)) return false;
    var i = window.getComputedStyle(n);
    return i[r] !== "hidden" && !(i.overflowY === i.overflowX && !Mk(n) && i[r] === "visible");
  }, Ok = function(n) {
    return S0(n, "overflowY");
  }, kk = function(n) {
    return S0(n, "overflowX");
  }, dv = function(n, r) {
    var i = r.ownerDocument, a = r;
    do {
      typeof ShadowRoot < "u" && a instanceof ShadowRoot && (a = a.host);
      var u = w0(n, a);
      if (u) {
        var s = E0(n, a), d = s[1], h = s[2];
        if (d > h) return true;
      }
      a = a.parentNode;
    } while (a && a !== i.body);
    return false;
  }, Rk = function(n) {
    var r = n.scrollTop, i = n.scrollHeight, a = n.clientHeight;
    return [
      r,
      i,
      a
    ];
  }, Nk = function(n) {
    var r = n.scrollLeft, i = n.scrollWidth, a = n.clientWidth;
    return [
      r,
      i,
      a
    ];
  }, w0 = function(n, r) {
    return n === "v" ? Ok(r) : kk(r);
  }, E0 = function(n, r) {
    return n === "v" ? Rk(r) : Nk(r);
  }, zk = function(n, r) {
    return n === "h" && r === "rtl" ? -1 : 1;
  }, Dk = function(n, r, i, a, u) {
    var s = zk(n, window.getComputedStyle(r).direction), d = s * a, h = i.target, p = r.contains(h), m = false, g = d > 0, y = 0, x = 0;
    do {
      if (!h) break;
      var b = E0(n, h), T = b[0], C = b[1], k = b[2], O = C - k - s * T;
      (T || O) && w0(n, h) && (y += O, x += T);
      var V = h.parentNode;
      h = V && V.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? V.host : V;
    } while (!p && h !== document.body || p && (r.contains(h) || r === h));
    return (g && Math.abs(y) < 1 || !g && Math.abs(x) < 1) && (m = true), m;
  }, au = function(n) {
    return "changedTouches" in n ? [
      n.changedTouches[0].clientX,
      n.changedTouches[0].clientY
    ] : [
      0,
      0
    ];
  }, hv = function(n) {
    return [
      n.deltaX,
      n.deltaY
    ];
  }, mv = function(n) {
    return n && "current" in n ? n.current : n;
  }, jk = function(n, r) {
    return n[0] === r[0] && n[1] === r[1];
  }, Lk = function(n) {
    return `
  .block-interactivity-`.concat(n, ` {pointer-events: none;}
  .allow-interactivity-`).concat(n, ` {pointer-events: all;}
`);
  }, Uk = 0, ni = [];
  function Bk(n) {
    var r = w.useRef([]), i = w.useRef([
      0,
      0
    ]), a = w.useRef(), u = w.useState(Uk++)[0], s = w.useState(x0)[0], d = w.useRef(n);
    w.useEffect(function() {
      d.current = n;
    }, [
      n
    ]), w.useEffect(function() {
      if (n.inert) {
        document.body.classList.add("block-interactivity-".concat(u));
        var C = ik([
          n.lockRef.current
        ], (n.shards || []).map(mv), true).filter(Boolean);
        return C.forEach(function(k) {
          return k.classList.add("allow-interactivity-".concat(u));
        }), function() {
          document.body.classList.remove("block-interactivity-".concat(u)), C.forEach(function(k) {
            return k.classList.remove("allow-interactivity-".concat(u));
          });
        };
      }
    }, [
      n.inert,
      n.lockRef.current,
      n.shards
    ]);
    var h = w.useCallback(function(C, k) {
      if ("touches" in C && C.touches.length === 2 || C.type === "wheel" && C.ctrlKey) return !d.current.allowPinchZoom;
      var O = au(C), V = i.current, j = "deltaX" in C ? C.deltaX : V[0] - O[0], G = "deltaY" in C ? C.deltaY : V[1] - O[1], J, D = C.target, Z = Math.abs(j) > Math.abs(G) ? "h" : "v";
      if ("touches" in C && Z === "h" && D.type === "range") return false;
      var X = window.getSelection(), re = X && X.anchorNode, ie = re ? re === D || re.contains(D) : false;
      if (ie) return false;
      var te = dv(Z, D);
      if (!te) return true;
      if (te ? J = Z : (J = Z === "v" ? "h" : "v", te = dv(Z, D)), !te) return false;
      if (!a.current && "changedTouches" in C && (j || G) && (a.current = J), !J) return true;
      var W = a.current || J;
      return Dk(W, k, C, W === "h" ? j : G);
    }, []), p = w.useCallback(function(C) {
      var k = C;
      if (!(!ni.length || ni[ni.length - 1] !== s)) {
        var O = "deltaY" in k ? hv(k) : au(k), V = r.current.filter(function(J) {
          return J.name === k.type && (J.target === k.target || k.target === J.shadowParent) && jk(J.delta, O);
        })[0];
        if (V && V.should) {
          k.cancelable && k.preventDefault();
          return;
        }
        if (!V) {
          var j = (d.current.shards || []).map(mv).filter(Boolean).filter(function(J) {
            return J.contains(k.target);
          }), G = j.length > 0 ? h(k, j[0]) : !d.current.noIsolation;
          G && k.cancelable && k.preventDefault();
        }
      }
    }, []), m = w.useCallback(function(C, k, O, V) {
      var j = {
        name: C,
        delta: k,
        target: O,
        should: V,
        shadowParent: Hk(O)
      };
      r.current.push(j), setTimeout(function() {
        r.current = r.current.filter(function(G) {
          return G !== j;
        });
      }, 1);
    }, []), g = w.useCallback(function(C) {
      i.current = au(C), a.current = void 0;
    }, []), y = w.useCallback(function(C) {
      m(C.type, hv(C), C.target, h(C, n.lockRef.current));
    }, []), x = w.useCallback(function(C) {
      m(C.type, au(C), C.target, h(C, n.lockRef.current));
    }, []);
    w.useEffect(function() {
      return ni.push(s), n.setCallbacks({
        onScrollCapture: y,
        onWheelCapture: y,
        onTouchMoveCapture: x
      }), document.addEventListener("wheel", p, ti), document.addEventListener("touchmove", p, ti), document.addEventListener("touchstart", g, ti), function() {
        ni = ni.filter(function(C) {
          return C !== s;
        }), document.removeEventListener("wheel", p, ti), document.removeEventListener("touchmove", p, ti), document.removeEventListener("touchstart", g, ti);
      };
    }, []);
    var b = n.removeScrollBar, T = n.inert;
    return w.createElement(w.Fragment, null, T ? w.createElement(s, {
      styles: Lk(u)
    }) : null, b ? w.createElement(Tk, {
      noRelative: n.noRelative,
      gapMode: n.gapMode
    }) : null);
  }
  function Hk(n) {
    for (var r = null; n !== null; ) n instanceof ShadowRoot && (r = n.host, n = n.host), n = n.parentNode;
    return r;
  }
  const qk = mk(b0, Bk);
  var C0 = w.forwardRef(function(n, r) {
    return w.createElement(Du, Cn({}, n, {
      ref: r,
      sideCar: qk
    }));
  });
  C0.classNames = Du.classNames;
  var Wf = [
    "Enter",
    " "
  ], Vk = [
    "ArrowDown",
    "PageUp",
    "Home"
  ], A0 = [
    "ArrowUp",
    "PageDown",
    "End"
  ], Gk = [
    ...Vk,
    ...A0
  ], Yk = {
    ltr: [
      ...Wf,
      "ArrowRight"
    ],
    rtl: [
      ...Wf,
      "ArrowLeft"
    ]
  }, Xk = {
    ltr: [
      "ArrowLeft"
    ],
    rtl: [
      "ArrowRight"
    ]
  }, Ma = "Menu", [ba, Ik, Qk] = Db(Ma), [ar, _0] = Ca(Ma, [
    Qk,
    e0,
    f0
  ]), ju = e0(), T0 = f0(), [Fk, or] = ar(Ma), [Kk, Oa] = ar(Ma), M0 = (n) => {
    const { __scopeMenu: r, open: i = false, children: a, dir: u, onOpenChange: s, modal: d = true } = n, h = ju(r), [p, m] = w.useState(null), g = w.useRef(false), y = $n(s), x = jb(u);
    return w.useEffect(() => {
      const b = () => {
        g.current = true, document.addEventListener("pointerdown", T, {
          capture: true,
          once: true
        }), document.addEventListener("pointermove", T, {
          capture: true,
          once: true
        });
      }, T = () => g.current = false;
      return document.addEventListener("keydown", b, {
        capture: true
      }), () => {
        document.removeEventListener("keydown", b, {
          capture: true
        }), document.removeEventListener("pointerdown", T, {
          capture: true
        }), document.removeEventListener("pointermove", T, {
          capture: true
        });
      };
    }, []), _.jsx(OO, {
      ...h,
      children: _.jsx(Fk, {
        scope: r,
        open: i,
        onOpenChange: y,
        content: p,
        onContentChange: m,
        children: _.jsx(Kk, {
          scope: r,
          onClose: w.useCallback(() => y(false), [
            y
          ]),
          isUsingKeyboardRef: g,
          dir: x,
          modal: d,
          children: a
        })
      })
    });
  };
  M0.displayName = Ma;
  var Zk = "MenuAnchor", Rd = w.forwardRef((n, r) => {
    const { __scopeMenu: i, ...a } = n, u = ju(i);
    return _.jsx(kO, {
      ...u,
      ...a,
      ref: r
    });
  });
  Rd.displayName = Zk;
  var Nd = "MenuPortal", [Pk, O0] = ar(Nd, {
    forceMount: void 0
  }), k0 = (n) => {
    const { __scopeMenu: r, forceMount: i, children: a, container: u } = n, s = or(Nd, r);
    return _.jsx(Pk, {
      scope: r,
      forceMount: i,
      children: _.jsx(_a, {
        present: i || s.open,
        children: _.jsx(c0, {
          asChild: true,
          container: u,
          children: a
        })
      })
    });
  };
  k0.displayName = Nd;
  var fn = "MenuContent", [Jk, zd] = ar(fn), R0 = w.forwardRef((n, r) => {
    const i = O0(fn, n.__scopeMenu), { forceMount: a = i.forceMount, ...u } = n, s = or(fn, n.__scopeMenu), d = Oa(fn, n.__scopeMenu);
    return _.jsx(ba.Provider, {
      scope: n.__scopeMenu,
      children: _.jsx(_a, {
        present: a || s.open,
        children: _.jsx(ba.Slot, {
          scope: n.__scopeMenu,
          children: d.modal ? _.jsx(Wk, {
            ...u,
            ref: r
          }) : _.jsx($k, {
            ...u,
            ref: r
          })
        })
      })
    });
  }), Wk = w.forwardRef((n, r) => {
    const i = or(fn, n.__scopeMenu), a = w.useRef(null), u = jt(r, a);
    return w.useEffect(() => {
      const s = a.current;
      if (s) return rk(s);
    }, []), _.jsx(Dd, {
      ...n,
      ref: u,
      trapFocus: i.open,
      disableOutsidePointerEvents: i.open,
      disableOutsideScroll: true,
      onFocusOutside: ke(n.onFocusOutside, (s) => s.preventDefault(), {
        checkForDefaultPrevented: false
      }),
      onDismiss: () => i.onOpenChange(false)
    });
  }), $k = w.forwardRef((n, r) => {
    const i = or(fn, n.__scopeMenu);
    return _.jsx(Dd, {
      ...n,
      ref: r,
      trapFocus: false,
      disableOutsidePointerEvents: false,
      disableOutsideScroll: false,
      onDismiss: () => i.onOpenChange(false)
    });
  }), eR = ZO("MenuContent.ScrollLock"), Dd = w.forwardRef((n, r) => {
    const { __scopeMenu: i, loop: a = false, trapFocus: u, onOpenAutoFocus: s, onCloseAutoFocus: d, disableOutsidePointerEvents: h, onEntryFocus: p, onEscapeKeyDown: m, onPointerDownOutside: g, onFocusOutside: y, onInteractOutside: x, onDismiss: b, disableOutsideScroll: T, ...C } = n, k = or(fn, i), O = Oa(fn, i), V = ju(i), j = T0(i), G = Ik(i), [J, D] = w.useState(null), Z = w.useRef(null), X = jt(r, Z, k.onContentChange), re = w.useRef(0), ie = w.useRef(""), te = w.useRef(0), W = w.useRef(null), se = w.useRef("right"), ne = w.useRef(0), P = T ? C0 : w.Fragment, N = T ? {
      as: eR,
      allowPinchZoom: true
    } : void 0, Q = ($) => {
      var _a2, _b2;
      const A = ie.current + $, be = G().filter((me) => !me.disabled), ye = document.activeElement, E = (_a2 = be.find((me) => me.ref.current === ye)) == null ? void 0 : _a2.textValue, he = be.map((me) => me.textValue), Be = dR(he, A, E), Ee = (_b2 = be.find((me) => me.textValue === Be)) == null ? void 0 : _b2.ref.current;
      (function me(Ze) {
        ie.current = Ze, window.clearTimeout(re.current), Ze !== "" && (re.current = window.setTimeout(() => me(""), 1e3));
      })(A), Ee && setTimeout(() => Ee.focus());
    };
    w.useEffect(() => () => window.clearTimeout(re.current), []), $T();
    const H = w.useCallback(($) => {
      var _a2, _b2;
      return se.current === ((_a2 = W.current) == null ? void 0 : _a2.side) && mR($, (_b2 = W.current) == null ? void 0 : _b2.area);
    }, []);
    return _.jsx(Jk, {
      scope: i,
      searchRef: ie,
      onItemEnter: w.useCallback(($) => {
        H($) && $.preventDefault();
      }, [
        H
      ]),
      onItemLeave: w.useCallback(($) => {
        var _a2;
        H($) || ((_a2 = Z.current) == null ? void 0 : _a2.focus(), D(null));
      }, [
        H
      ]),
      onTriggerLeave: w.useCallback(($) => {
        H($) && $.preventDefault();
      }, [
        H
      ]),
      pointerGraceTimerRef: te,
      onPointerGraceIntentChange: w.useCallback(($) => {
        W.current = $;
      }, []),
      children: _.jsx(P, {
        ...N,
        children: _.jsx(Hb, {
          asChild: true,
          trapped: u,
          onMountAutoFocus: ke(s, ($) => {
            var _a2;
            $.preventDefault(), (_a2 = Z.current) == null ? void 0 : _a2.focus({
              preventScroll: true
            });
          }),
          onUnmountAutoFocus: d,
          children: _.jsx(Ub, {
            asChild: true,
            disableOutsidePointerEvents: h,
            onEscapeKeyDown: m,
            onPointerDownOutside: g,
            onFocusOutside: y,
            onInteractOutside: x,
            onDismiss: b,
            children: _.jsx(FO, {
              asChild: true,
              ...j,
              dir: O.dir,
              orientation: "vertical",
              loop: a,
              currentTabStopId: J,
              onCurrentTabStopIdChange: D,
              onEntryFocus: ke(p, ($) => {
                O.isUsingKeyboardRef.current || $.preventDefault();
              }),
              preventScrollOnEntryFocus: true,
              children: _.jsx(RO, {
                role: "menu",
                "aria-orientation": "vertical",
                "data-state": F0(k.open),
                "data-radix-menu-content": "",
                dir: O.dir,
                ...V,
                ...C,
                ref: X,
                style: {
                  outline: "none",
                  ...C.style
                },
                onKeyDown: ke(C.onKeyDown, ($) => {
                  const be = $.target.closest("[data-radix-menu-content]") === $.currentTarget, ye = $.ctrlKey || $.altKey || $.metaKey, E = $.key.length === 1;
                  be && ($.key === "Tab" && $.preventDefault(), !ye && E && Q($.key));
                  const he = Z.current;
                  if ($.target !== he || !Gk.includes($.key)) return;
                  $.preventDefault();
                  const Ee = G().filter((me) => !me.disabled).map((me) => me.ref.current);
                  A0.includes($.key) && Ee.reverse(), sR(Ee);
                }),
                onBlur: ke(n.onBlur, ($) => {
                  $.currentTarget.contains($.target) || (window.clearTimeout(re.current), ie.current = "");
                }),
                onPointerMove: ke(n.onPointerMove, xa(($) => {
                  const A = $.target, be = ne.current !== $.clientX;
                  if ($.currentTarget.contains(A) && be) {
                    const ye = $.clientX > ne.current ? "right" : "left";
                    se.current = ye, ne.current = $.clientX;
                  }
                }))
              })
            })
          })
        })
      })
    });
  });
  R0.displayName = fn;
  var tR = "MenuGroup", jd = w.forwardRef((n, r) => {
    const { __scopeMenu: i, ...a } = n;
    return _.jsx(Et.div, {
      role: "group",
      ...a,
      ref: r
    });
  });
  jd.displayName = tR;
  var nR = "MenuLabel", N0 = w.forwardRef((n, r) => {
    const { __scopeMenu: i, ...a } = n;
    return _.jsx(Et.div, {
      ...a,
      ref: r
    });
  });
  N0.displayName = nR;
  var Cu = "MenuItem", pv = "menu.itemSelect", Lu = w.forwardRef((n, r) => {
    const { disabled: i = false, onSelect: a, ...u } = n, s = w.useRef(null), d = Oa(Cu, n.__scopeMenu), h = zd(Cu, n.__scopeMenu), p = jt(r, s), m = w.useRef(false), g = () => {
      const y = s.current;
      if (!i && y) {
        const x = new CustomEvent(pv, {
          bubbles: true,
          cancelable: true
        });
        y.addEventListener(pv, (b) => a == null ? void 0 : a(b), {
          once: true
        }), zb(y, x), x.defaultPrevented ? m.current = false : d.onClose();
      }
    };
    return _.jsx(z0, {
      ...u,
      ref: p,
      disabled: i,
      onClick: ke(n.onClick, g),
      onPointerDown: (y) => {
        var _a2;
        (_a2 = n.onPointerDown) == null ? void 0 : _a2.call(n, y), m.current = true;
      },
      onPointerUp: ke(n.onPointerUp, (y) => {
        var _a2;
        m.current || ((_a2 = y.currentTarget) == null ? void 0 : _a2.click());
      }),
      onKeyDown: ke(n.onKeyDown, (y) => {
        const x = h.searchRef.current !== "";
        i || x && y.key === " " || Wf.includes(y.key) && (y.currentTarget.click(), y.preventDefault());
      })
    });
  });
  Lu.displayName = Cu;
  var z0 = w.forwardRef((n, r) => {
    const { __scopeMenu: i, disabled: a = false, textValue: u, ...s } = n, d = zd(Cu, i), h = T0(i), p = w.useRef(null), m = jt(r, p), [g, y] = w.useState(false), [x, b] = w.useState("");
    return w.useEffect(() => {
      const T = p.current;
      T && b((T.textContent ?? "").trim());
    }, [
      s.children
    ]), _.jsx(ba.ItemSlot, {
      scope: i,
      disabled: a,
      textValue: u ?? x,
      children: _.jsx(KO, {
        asChild: true,
        ...h,
        focusable: !a,
        children: _.jsx(Et.div, {
          role: "menuitem",
          "data-highlighted": g ? "" : void 0,
          "aria-disabled": a || void 0,
          "data-disabled": a ? "" : void 0,
          ...s,
          ref: m,
          onPointerMove: ke(n.onPointerMove, xa((T) => {
            a ? d.onItemLeave(T) : (d.onItemEnter(T), T.defaultPrevented || T.currentTarget.focus({
              preventScroll: true
            }));
          })),
          onPointerLeave: ke(n.onPointerLeave, xa((T) => d.onItemLeave(T))),
          onFocus: ke(n.onFocus, () => y(true)),
          onBlur: ke(n.onBlur, () => y(false))
        })
      })
    });
  }), lR = "MenuCheckboxItem", D0 = w.forwardRef((n, r) => {
    const { checked: i = false, onCheckedChange: a, ...u } = n;
    return _.jsx(H0, {
      scope: n.__scopeMenu,
      checked: i,
      children: _.jsx(Lu, {
        role: "menuitemcheckbox",
        "aria-checked": Au(i) ? "mixed" : i,
        ...u,
        ref: r,
        "data-state": Ud(i),
        onSelect: ke(u.onSelect, () => a == null ? void 0 : a(Au(i) ? true : !i), {
          checkForDefaultPrevented: false
        })
      })
    });
  });
  D0.displayName = lR;
  var j0 = "MenuRadioGroup", [rR, iR] = ar(j0, {
    value: void 0,
    onValueChange: () => {
    }
  }), L0 = w.forwardRef((n, r) => {
    const { value: i, onValueChange: a, ...u } = n, s = $n(a);
    return _.jsx(rR, {
      scope: n.__scopeMenu,
      value: i,
      onValueChange: s,
      children: _.jsx(jd, {
        ...u,
        ref: r
      })
    });
  });
  L0.displayName = j0;
  var U0 = "MenuRadioItem", B0 = w.forwardRef((n, r) => {
    const { value: i, ...a } = n, u = iR(U0, n.__scopeMenu), s = i === u.value;
    return _.jsx(H0, {
      scope: n.__scopeMenu,
      checked: s,
      children: _.jsx(Lu, {
        role: "menuitemradio",
        "aria-checked": s,
        ...a,
        ref: r,
        "data-state": Ud(s),
        onSelect: ke(a.onSelect, () => {
          var _a2;
          return (_a2 = u.onValueChange) == null ? void 0 : _a2.call(u, i);
        }, {
          checkForDefaultPrevented: false
        })
      })
    });
  });
  B0.displayName = U0;
  var Ld = "MenuItemIndicator", [H0, aR] = ar(Ld, {
    checked: false
  }), q0 = w.forwardRef((n, r) => {
    const { __scopeMenu: i, forceMount: a, ...u } = n, s = aR(Ld, i);
    return _.jsx(_a, {
      present: a || Au(s.checked) || s.checked === true,
      children: _.jsx(Et.span, {
        ...u,
        ref: r,
        "data-state": Ud(s.checked)
      })
    });
  });
  q0.displayName = Ld;
  var oR = "MenuSeparator", V0 = w.forwardRef((n, r) => {
    const { __scopeMenu: i, ...a } = n;
    return _.jsx(Et.div, {
      role: "separator",
      "aria-orientation": "horizontal",
      ...a,
      ref: r
    });
  });
  V0.displayName = oR;
  var uR = "MenuArrow", G0 = w.forwardRef((n, r) => {
    const { __scopeMenu: i, ...a } = n, u = ju(i);
    return _.jsx(NO, {
      ...u,
      ...a,
      ref: r
    });
  });
  G0.displayName = uR;
  var cR = "MenuSub", [MN, Y0] = ar(cR), fa = "MenuSubTrigger", X0 = w.forwardRef((n, r) => {
    const i = or(fa, n.__scopeMenu), a = Oa(fa, n.__scopeMenu), u = Y0(fa, n.__scopeMenu), s = zd(fa, n.__scopeMenu), d = w.useRef(null), { pointerGraceTimerRef: h, onPointerGraceIntentChange: p } = s, m = {
      __scopeMenu: n.__scopeMenu
    }, g = w.useCallback(() => {
      d.current && window.clearTimeout(d.current), d.current = null;
    }, []);
    return w.useEffect(() => g, [
      g
    ]), w.useEffect(() => {
      const y = h.current;
      return () => {
        window.clearTimeout(y), p(null);
      };
    }, [
      h,
      p
    ]), _.jsx(Rd, {
      asChild: true,
      ...m,
      children: _.jsx(z0, {
        id: u.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": i.open,
        "aria-controls": u.contentId,
        "data-state": F0(i.open),
        ...n,
        ref: rr(r, u.onTriggerChange),
        onClick: (y) => {
          var _a2;
          (_a2 = n.onClick) == null ? void 0 : _a2.call(n, y), !(n.disabled || y.defaultPrevented) && (y.currentTarget.focus(), i.open || i.onOpenChange(true));
        },
        onPointerMove: ke(n.onPointerMove, xa((y) => {
          s.onItemEnter(y), !y.defaultPrevented && !n.disabled && !i.open && !d.current && (s.onPointerGraceIntentChange(null), d.current = window.setTimeout(() => {
            i.onOpenChange(true), g();
          }, 100));
        })),
        onPointerLeave: ke(n.onPointerLeave, xa((y) => {
          var _a2, _b2;
          g();
          const x = (_a2 = i.content) == null ? void 0 : _a2.getBoundingClientRect();
          if (x) {
            const b = (_b2 = i.content) == null ? void 0 : _b2.dataset.side, T = b === "right", C = T ? -5 : 5, k = x[T ? "left" : "right"], O = x[T ? "right" : "left"];
            s.onPointerGraceIntentChange({
              area: [
                {
                  x: y.clientX + C,
                  y: y.clientY
                },
                {
                  x: k,
                  y: x.top
                },
                {
                  x: O,
                  y: x.top
                },
                {
                  x: O,
                  y: x.bottom
                },
                {
                  x: k,
                  y: x.bottom
                }
              ],
              side: b
            }), window.clearTimeout(h.current), h.current = window.setTimeout(() => s.onPointerGraceIntentChange(null), 300);
          } else {
            if (s.onTriggerLeave(y), y.defaultPrevented) return;
            s.onPointerGraceIntentChange(null);
          }
        })),
        onKeyDown: ke(n.onKeyDown, (y) => {
          var _a2;
          const x = s.searchRef.current !== "";
          n.disabled || x && y.key === " " || Yk[a.dir].includes(y.key) && (i.onOpenChange(true), (_a2 = i.content) == null ? void 0 : _a2.focus(), y.preventDefault());
        })
      })
    });
  });
  X0.displayName = fa;
  var I0 = "MenuSubContent", Q0 = w.forwardRef((n, r) => {
    const i = O0(fn, n.__scopeMenu), { forceMount: a = i.forceMount, ...u } = n, s = or(fn, n.__scopeMenu), d = Oa(fn, n.__scopeMenu), h = Y0(I0, n.__scopeMenu), p = w.useRef(null), m = jt(r, p);
    return _.jsx(ba.Provider, {
      scope: n.__scopeMenu,
      children: _.jsx(_a, {
        present: a || s.open,
        children: _.jsx(ba.Slot, {
          scope: n.__scopeMenu,
          children: _.jsx(Dd, {
            id: h.contentId,
            "aria-labelledby": h.triggerId,
            ...u,
            ref: m,
            align: "start",
            side: d.dir === "rtl" ? "left" : "right",
            disableOutsidePointerEvents: false,
            disableOutsideScroll: false,
            trapFocus: false,
            onOpenAutoFocus: (g) => {
              var _a2;
              d.isUsingKeyboardRef.current && ((_a2 = p.current) == null ? void 0 : _a2.focus()), g.preventDefault();
            },
            onCloseAutoFocus: (g) => g.preventDefault(),
            onFocusOutside: ke(n.onFocusOutside, (g) => {
              g.target !== h.trigger && s.onOpenChange(false);
            }),
            onEscapeKeyDown: ke(n.onEscapeKeyDown, (g) => {
              d.onClose(), g.preventDefault();
            }),
            onKeyDown: ke(n.onKeyDown, (g) => {
              var _a2;
              const y = g.currentTarget.contains(g.target), x = Xk[d.dir].includes(g.key);
              y && x && (s.onOpenChange(false), (_a2 = h.trigger) == null ? void 0 : _a2.focus(), g.preventDefault());
            })
          })
        })
      })
    });
  });
  Q0.displayName = I0;
  function F0(n) {
    return n ? "open" : "closed";
  }
  function Au(n) {
    return n === "indeterminate";
  }
  function Ud(n) {
    return Au(n) ? "indeterminate" : n ? "checked" : "unchecked";
  }
  function sR(n) {
    const r = document.activeElement;
    for (const i of n) if (i === r || (i.focus(), document.activeElement !== r)) return;
  }
  function fR(n, r) {
    return n.map((i, a) => n[(r + a) % n.length]);
  }
  function dR(n, r, i) {
    const u = r.length > 1 && Array.from(r).every((m) => m === r[0]) ? r[0] : r, s = i ? n.indexOf(i) : -1;
    let d = fR(n, Math.max(s, 0));
    u.length === 1 && (d = d.filter((m) => m !== i));
    const p = d.find((m) => m.toLowerCase().startsWith(u.toLowerCase()));
    return p !== i ? p : void 0;
  }
  function hR(n, r) {
    const { x: i, y: a } = n;
    let u = false;
    for (let s = 0, d = r.length - 1; s < r.length; d = s++) {
      const h = r[s], p = r[d], m = h.x, g = h.y, y = p.x, x = p.y;
      g > a != x > a && i < (y - m) * (a - g) / (x - g) + m && (u = !u);
    }
    return u;
  }
  function mR(n, r) {
    if (!r) return false;
    const i = {
      x: n.clientX,
      y: n.clientY
    };
    return hR(i, r);
  }
  function xa(n) {
    return (r) => r.pointerType === "mouse" ? n(r) : void 0;
  }
  var pR = M0, gR = Rd, yR = k0, vR = R0, bR = jd, xR = N0, SR = Lu, wR = D0, ER = L0, CR = B0, AR = q0, _R = V0, TR = G0, MR = X0, OR = Q0, Uu = "DropdownMenu", [kR] = Ca(Uu, [
    _0
  ]), Ct = _0(), [RR, K0] = kR(Uu), Z0 = (n) => {
    const { __scopeDropdownMenu: r, children: i, dir: a, open: u, defaultOpen: s, onOpenChange: d, modal: h = true } = n, p = Ct(r), m = w.useRef(null), [g, y] = Nb({
      prop: u,
      defaultProp: s ?? false,
      onChange: d,
      caller: Uu
    });
    return _.jsx(RR, {
      scope: r,
      triggerId: Qf(),
      triggerRef: m,
      contentId: Qf(),
      open: g,
      onOpenChange: y,
      onOpenToggle: w.useCallback(() => y((x) => !x), [
        y
      ]),
      modal: h,
      children: _.jsx(pR, {
        ...p,
        open: g,
        onOpenChange: y,
        dir: a,
        modal: h,
        children: i
      })
    });
  };
  Z0.displayName = Uu;
  var P0 = "DropdownMenuTrigger", J0 = w.forwardRef((n, r) => {
    const { __scopeDropdownMenu: i, disabled: a = false, ...u } = n, s = K0(P0, i), d = Ct(i);
    return _.jsx(gR, {
      asChild: true,
      ...d,
      children: _.jsx(Et.button, {
        type: "button",
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": s.open,
        "aria-controls": s.open ? s.contentId : void 0,
        "data-state": s.open ? "open" : "closed",
        "data-disabled": a ? "" : void 0,
        disabled: a,
        ...u,
        ref: rr(r, s.triggerRef),
        onPointerDown: ke(n.onPointerDown, (h) => {
          !a && h.button === 0 && h.ctrlKey === false && (s.onOpenToggle(), s.open || h.preventDefault());
        }),
        onKeyDown: ke(n.onKeyDown, (h) => {
          a || ([
            "Enter",
            " "
          ].includes(h.key) && s.onOpenToggle(), h.key === "ArrowDown" && s.onOpenChange(true), [
            "Enter",
            " ",
            "ArrowDown"
          ].includes(h.key) && h.preventDefault());
        })
      })
    });
  });
  J0.displayName = P0;
  var NR = "DropdownMenuPortal", W0 = (n) => {
    const { __scopeDropdownMenu: r, ...i } = n, a = Ct(r);
    return _.jsx(yR, {
      ...a,
      ...i
    });
  };
  W0.displayName = NR;
  var $0 = "DropdownMenuContent", ex = w.forwardRef((n, r) => {
    const { __scopeDropdownMenu: i, ...a } = n, u = K0($0, i), s = Ct(i), d = w.useRef(false);
    return _.jsx(vR, {
      id: u.contentId,
      "aria-labelledby": u.triggerId,
      ...s,
      ...a,
      ref: r,
      onCloseAutoFocus: ke(n.onCloseAutoFocus, (h) => {
        var _a2;
        d.current || ((_a2 = u.triggerRef.current) == null ? void 0 : _a2.focus()), d.current = false, h.preventDefault();
      }),
      onInteractOutside: ke(n.onInteractOutside, (h) => {
        const p = h.detail.originalEvent, m = p.button === 0 && p.ctrlKey === true, g = p.button === 2 || m;
        (!u.modal || g) && (d.current = true);
      }),
      style: {
        ...n.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    });
  });
  ex.displayName = $0;
  var zR = "DropdownMenuGroup", DR = w.forwardRef((n, r) => {
    const { __scopeDropdownMenu: i, ...a } = n, u = Ct(i);
    return _.jsx(bR, {
      ...u,
      ...a,
      ref: r
    });
  });
  DR.displayName = zR;
  var jR = "DropdownMenuLabel", tx = w.forwardRef((n, r) => {
    const { __scopeDropdownMenu: i, ...a } = n, u = Ct(i);
    return _.jsx(xR, {
      ...u,
      ...a,
      ref: r
    });
  });
  tx.displayName = jR;
  var LR = "DropdownMenuItem", nx = w.forwardRef((n, r) => {
    const { __scopeDropdownMenu: i, ...a } = n, u = Ct(i);
    return _.jsx(SR, {
      ...u,
      ...a,
      ref: r
    });
  });
  nx.displayName = LR;
  var UR = "DropdownMenuCheckboxItem", lx = w.forwardRef((n, r) => {
    const { __scopeDropdownMenu: i, ...a } = n, u = Ct(i);
    return _.jsx(wR, {
      ...u,
      ...a,
      ref: r
    });
  });
  lx.displayName = UR;
  var BR = "DropdownMenuRadioGroup", HR = w.forwardRef((n, r) => {
    const { __scopeDropdownMenu: i, ...a } = n, u = Ct(i);
    return _.jsx(ER, {
      ...u,
      ...a,
      ref: r
    });
  });
  HR.displayName = BR;
  var qR = "DropdownMenuRadioItem", rx = w.forwardRef((n, r) => {
    const { __scopeDropdownMenu: i, ...a } = n, u = Ct(i);
    return _.jsx(CR, {
      ...u,
      ...a,
      ref: r
    });
  });
  rx.displayName = qR;
  var VR = "DropdownMenuItemIndicator", ix = w.forwardRef((n, r) => {
    const { __scopeDropdownMenu: i, ...a } = n, u = Ct(i);
    return _.jsx(AR, {
      ...u,
      ...a,
      ref: r
    });
  });
  ix.displayName = VR;
  var GR = "DropdownMenuSeparator", ax = w.forwardRef((n, r) => {
    const { __scopeDropdownMenu: i, ...a } = n, u = Ct(i);
    return _.jsx(_R, {
      ...u,
      ...a,
      ref: r
    });
  });
  ax.displayName = GR;
  var YR = "DropdownMenuArrow", XR = w.forwardRef((n, r) => {
    const { __scopeDropdownMenu: i, ...a } = n, u = Ct(i);
    return _.jsx(TR, {
      ...u,
      ...a,
      ref: r
    });
  });
  XR.displayName = YR;
  var IR = "DropdownMenuSubTrigger", ox = w.forwardRef((n, r) => {
    const { __scopeDropdownMenu: i, ...a } = n, u = Ct(i);
    return _.jsx(MR, {
      ...u,
      ...a,
      ref: r
    });
  });
  ox.displayName = IR;
  var QR = "DropdownMenuSubContent", ux = w.forwardRef((n, r) => {
    const { __scopeDropdownMenu: i, ...a } = n, u = Ct(i);
    return _.jsx(OR, {
      ...u,
      ...a,
      ref: r,
      style: {
        ...n.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    });
  });
  ux.displayName = QR;
  var FR = Z0, KR = J0, ZR = W0, cx = ex, sx = tx, fx = nx, dx = lx, hx = rx, mx = ix, px = ax, gx = ox, yx = ux;
  const PR = FR, JR = KR, WR = w.forwardRef(({ className: n, inset: r, children: i, ...a }, u) => _.jsxs(gx, {
    ref: u,
    className: Zt("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent data-[state=open]:bg-accent", r && "pl-8", n),
    ...a,
    children: [
      i,
      _.jsx(y_, {
        className: "ml-auto h-4 w-4"
      })
    ]
  }));
  WR.displayName = gx.displayName;
  const $R = w.forwardRef(({ className: n, ...r }, i) => _.jsx(yx, {
    ref: i,
    className: Zt("z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", n),
    ...r
  }));
  $R.displayName = yx.displayName;
  const vx = w.forwardRef(({ className: n, sideOffset: r = 4, ...i }, a) => _.jsx(ZR, {
    children: _.jsx(cx, {
      ref: a,
      sideOffset: r,
      className: Zt("z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", n),
      ...i
    })
  }));
  vx.displayName = cx.displayName;
  const mu = w.forwardRef(({ className: n, inset: r, ...i }, a) => _.jsx(fx, {
    ref: a,
    className: Zt("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50", r && "pl-8", n),
    ...i
  }));
  mu.displayName = fx.displayName;
  const eN = w.forwardRef(({ className: n, children: r, checked: i, ...a }, u) => _.jsxs(dx, {
    ref: u,
    className: Zt("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50", n),
    checked: i,
    ...a,
    children: [
      _.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: _.jsx(mx, {
          children: _.jsx(p_, {
            className: "h-4 w-4"
          })
        })
      }),
      r
    ]
  }));
  eN.displayName = dx.displayName;
  const tN = w.forwardRef(({ className: n, children: r, ...i }, a) => _.jsxs(hx, {
    ref: a,
    className: Zt("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50", n),
    ...i,
    children: [
      _.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: _.jsx(mx, {
          children: _.jsx(E_, {
            className: "h-2 w-2 fill-current"
          })
        })
      }),
      r
    ]
  }));
  tN.displayName = hx.displayName;
  const nN = w.forwardRef(({ className: n, inset: r, ...i }, a) => _.jsx(sx, {
    ref: a,
    className: Zt("px-2 py-1.5 text-sm font-semibold", r && "pl-8", n),
    ...i
  }));
  nN.displayName = sx.displayName;
  const lN = w.forwardRef(({ className: n, ...r }, i) => _.jsx(px, {
    ref: i,
    className: Zt("-mx-1 my-1 h-px bg-muted", n),
    ...r
  }));
  lN.displayName = px.displayName;
  const rN = {
    theme: "system",
    setTheme: () => null
  }, bx = w.createContext(rN);
  function iN({ children: n, defaultTheme: r = "system", storageKey: i = "vite-ui-theme", ...a }) {
    const [u, s] = w.useState(() => localStorage.getItem(i) || r);
    w.useEffect(() => {
      const h = window.document.documentElement;
      if (h.classList.remove("light", "dark"), u === "system") {
        const p = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        h.classList.add(p);
        return;
      }
      h.classList.add(u);
    }, [
      u
    ]);
    const d = {
      theme: u,
      setTheme: (h) => {
        localStorage.setItem(i, h), s(h);
      }
    };
    return _.jsx(bx.Provider, {
      ...a,
      value: d,
      children: n
    });
  }
  const aN = () => {
    const n = w.useContext(bx);
    if (n === void 0) throw new Error("useTheme must be used within a ThemeProvider");
    return n;
  };
  function oN() {
    const { setTheme: n } = aN();
    return _.jsxs(PR, {
      children: [
        _.jsx(JR, {
          asChild: true,
          children: _.jsxs(Rb, {
            variant: "outline",
            size: "icon",
            children: [
              _.jsx(O_, {
                className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
              }),
              _.jsx(A_, {
                className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
              }),
              _.jsx("span", {
                className: "sr-only",
                children: "Toggle theme"
              })
            ]
          })
        }),
        _.jsxs(vx, {
          align: "end",
          children: [
            _.jsx(mu, {
              onClick: () => n("light"),
              children: "Light"
            }),
            _.jsx(mu, {
              onClick: () => n("dark"),
              children: "Dark"
            }),
            _.jsx(mu, {
              onClick: () => n("system"),
              children: "System"
            })
          ]
        })
      ]
    });
  }
  function xx() {
    return _.jsx("nav", {
      className: "flex w-full p-4 bg-primary-foreground justify-center border-b ",
      children: _.jsxs("div", {
        className: "flex w-full max-w-4xl justify-between items-center",
        children: [
          _.jsxs("div", {
            className: "flex gap-2 items-center ",
            children: [
              _.jsx("h1", {
                className: "text-lg font-semibold self-end ",
                children: "Learn"
              }),
              _.jsxs("h2", {
                className: "text-sm text-muted-foreground ",
                children: [
                  "to write recipes for",
                  " ",
                  _.jsx("a", {
                    href: "https://www.reciperium.com",
                    target: "_blank",
                    className: "text-blue-500 hover:text-blue-600",
                    children: "Reciperium"
                  })
                ]
              })
            ]
          }),
          _.jsx(oN, {})
        ]
      })
    });
  }
  function uN({ className: n, exerciseId: r }) {
    return _.jsxs("nav", {
      className: Zt("flex w-full p-4 justify-between bg-primary-foreground items-center border-b ", n),
      children: [
        _.jsx("span", {
          children: r > 1 && _.jsx(da, {
            href: `/task/${r - 1}`,
            className: su({
              variant: "default"
            }),
            children: "Previous"
          })
        }),
        _.jsx("span", {
          children: pw !== r ? _.jsx(da, {
            href: `/task/${r + 1}`,
            className: su({
              variant: "default"
            }),
            children: "Next"
          }) : _.jsx(da, {
            href: "/end",
            className: su({
              variant: "outline"
            }) + " text-green-600 dark:text-green-400",
            children: "Finish"
          })
        })
      ]
    });
  }
  var cN = (n) => {
    var { theme: r, settings: i = {}, styles: a = [] } = n, u = {
      ".cm-gutters": {}
    }, s = {};
    i.background && (s.backgroundColor = i.background), i.backgroundImage && (s.backgroundImage = i.backgroundImage), i.foreground && (s.color = i.foreground), i.fontSize && (s.fontSize = i.fontSize), (i.background || i.foreground) && (u["&"] = s), i.fontFamily && (u["&.cm-editor .cm-scroller"] = {
      fontFamily: i.fontFamily
    }), i.gutterBackground && (u[".cm-gutters"].backgroundColor = i.gutterBackground), i.gutterForeground && (u[".cm-gutters"].color = i.gutterForeground), i.gutterBorder && (u[".cm-gutters"].borderRightColor = i.gutterBorder), i.caret && (u[".cm-content"] = {
      caretColor: i.caret
    }, u[".cm-cursor, .cm-dropCursor"] = {
      borderLeftColor: i.caret
    });
    var d = {};
    i.gutterActiveForeground && (d.color = i.gutterActiveForeground), i.lineHighlight && (u[".cm-activeLine"] = {
      backgroundColor: i.lineHighlight
    }, d.backgroundColor = i.lineHighlight), u[".cm-activeLineGutter"] = d, i.selection && (u["&.cm-focused .cm-selectionBackground, & .cm-line::selection, & .cm-selectionLayer .cm-selectionBackground, .cm-content ::selection"] = {
      background: i.selection + " !important"
    }), i.selectionMatch && (u["& .cm-selectionMatch"] = {
      backgroundColor: i.selectionMatch
    });
    var h = yv.theme(u, {
      dark: r === "dark"
    }), p = US.define(a), m = [
      h,
      BS(p)
    ];
    return m;
  };
  const sN = cN({
    theme: "light",
    settings: {
      fontSize: "11pt"
    },
    styles: []
  });
  function fN({ error: n, value: r, onChange: i, className: a, ...u }) {
    return _.jsx(HS, {
      value: r,
      onChange: i,
      theme: sN,
      height: "100%",
      autoFocus: true,
      indentWithTab: false,
      basicSetup: {
        allowMultipleSelections: true,
        highlightSelectionMatches: true,
        lineNumbers: false,
        foldGutter: false,
        searchKeymap: true,
        lintKeymap: false
      },
      extensions: [
        yv.lineWrapping,
        qS((s) => {
          let d = [];
          return (n == null ? void 0 : n.offset) && d.push({
            from: (n == null ? void 0 : n.offset) - 2,
            to: (n == null ? void 0 : n.offset) + 0,
            severity: "error",
            message: n == null ? void 0 : n.message
          }), d;
        })
      ],
      className: Zt(a, "dark:bg-slate-950 dark:selection:text-slate-900 caret-pink-500 text text-sm", (n == null ? void 0 : n.message) && "err"),
      ...u
    });
  }
  const dN = ({ recipe: n }) => {
    const r = Wn.useCallback((i) => {
      const u = {
        share: btoa(i)
      }, s = new URLSearchParams(u);
      window.location.search = s.toString();
    }, [
      n
    ]);
    return _.jsx("button", {
      type: "button",
      onClick: (i) => {
        i.preventDefault(), r(n);
      },
      className: "rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-300 p-1",
      children: _.jsx(T_, {
        size: 16
      })
    });
  }, Sx = (n, r) => n && r ? `${n} ${r}` : n || r || "at will";
  function Bu(...n) {
    return kb(bd(n));
  }
  function hN({ quantity: n, unit: r, children: i, className: a }) {
    return _.jsx("span", {
      tabIndex: 0,
      title: Sx(n, r),
      className: Bu("recp--ingredient bg-fuchsia-100 dark:bg-fuchsia-800 mb-1", a),
      children: i
    });
  }
  function mN({ children: n }) {
    return _.jsx("span", {
      className: "mb-1",
      children: n
    });
  }
  function wx({ quantity: n, unit: r, children: i, className: a, baseUrl: u, path: s, tag: d = "a" }) {
    let h = new URL(s, u);
    return _.jsx(d, {
      tabIndex: 0,
      href: h.toString(),
      title: Sx(n, r),
      className: Bu("recp--reciperef text-link hover:text-link/90", a),
      target: "_blank noopener noreferrer",
      children: i
    });
  }
  function pN({ children: n, className: r }) {
    return _.jsx("span", {
      className: Bu("recp--material bg-yellow-100 dark:bg-yellow-800 mb-1", r),
      children: n
    });
  }
  function gN({ children: n, className: r }) {
    return _.jsx("span", {
      className: Bu("recp--timer bg-orange-100 dark:bg-orange-800 mb-1", r),
      children: n
    });
  }
  const yN = ({ children: n }) => _.jsx(_.Fragment, {
    children: n
  });
  function vN({ tokens: n, RecipeRefResolver: r = yN, baseUrl: i }) {
    const a = (n == null ? void 0 : n.findIndex((u) => u.token !== "Metadata" && u.token !== "Space")) || 0;
    return _.jsx("div", {
      className: "recipe-content whitespace-pre text-wrap",
      children: n.slice(a).map((u, s) => {
        switch (u.token) {
          case "Space":
            return u.content;
          case "Word":
            return _.jsx(mN, {
              children: u.content
            }, s);
          case "Ingredient":
            return _.jsx(hN, {
              quantity: u.content.quantity,
              unit: u.content.unit,
              children: u.content.name
            }, s);
          case "RecipeRef":
            return _.jsx(wx, {
              quantity: u.content.quantity,
              unit: u.content.unit,
              path: u.content.name,
              baseUrl: i,
              children: _.jsx(r, {
                children: u.content.name
              })
            }, s);
          case "Material":
            return _.jsx(pN, {
              children: u.content
            }, s);
          case "Timer":
            return _.jsx(gN, {
              children: u.content
            }, s);
        }
      })
    });
  }
  const bN = pb("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  });
  function xN({ className: n, variant: r, ...i }) {
    return _.jsx("div", {
      className: Zt(bN({
        variant: r
      }), n),
      ...i
    });
  }
  const gv = "https://reciperium.com";
  function SN({ parsedRecipe: n, rawRecipe: r }) {
    var _a2, _b2, _c, _d2, _e, _f2, _g;
    const i = ((_b2 = (_a2 = n.metadata) == null ? void 0 : _a2.get("tags")) == null ? void 0 : _b2.split(",").filter((a) => !!a)) || [];
    return _.jsxs("div", {
      className: "relative rounded-md border border-slate-400 dark:border-slate-500 bg-muted p-6 shadow-lg dark:shadow-white/40 antialiased",
      children: [
        _.jsx("div", {
          className: "absolute top-0 right-0 pt-3 pr-3",
          children: _.jsx(dN, {
            recipe: r
          })
        }),
        _.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 md:gap-4",
          children: [
            ((_c = n.ingredients) == null ? void 0 : _c.length) > 0 || ((_d2 = n.recipes_refs) == null ? void 0 : _d2.length) > 0 ? _.jsxs("div", {
              className: "pb-4",
              children: [
                _.jsx("h2", {
                  className: "text-lg font-semibold",
                  children: "Ingredients"
                }),
                _.jsxs("ul", {
                  className: "mt-2 mb-6 list-disc list-inside",
                  children: [
                    n.ingredients.map((a) => _.jsxs("li", {
                      className: "mb-2 text-left antialiased",
                      children: [
                        _.jsxs("span", {
                          children: [
                            a.quantity,
                            " ",
                            a.unit
                          ]
                        }),
                        " ",
                        a.name,
                        " "
                      ]
                    }, a.name)),
                    n.recipes_refs.map((a) => _.jsxs("li", {
                      className: "mb-2 text-left antialiased",
                      children: [
                        _.jsxs("span", {
                          children: [
                            a.quantity,
                            " ",
                            a.unit
                          ]
                        }),
                        " ",
                        _.jsx(wx, {
                          baseUrl: gv,
                          path: a.name,
                          children: a.name
                        })
                      ]
                    }, a.name))
                  ]
                })
              ]
            }) : null,
            ((_e = n.materials) == null ? void 0 : _e.length) > 0 ? _.jsxs("div", {
              children: [
                _.jsx("h2", {
                  className: "text-lg font-semibold",
                  children: "Materials"
                }),
                _.jsx("ul", {
                  className: "mt-2 mb-6 list-disc list-inside",
                  children: (_f2 = n.materials) == null ? void 0 : _f2.map((a) => _.jsx("li", {
                    className: "mb-2 text-left antialiased",
                    children: a.name
                  }, a.name))
                })
              ]
            }) : null
          ]
        }),
        ((_g = n.tokens) == null ? void 0 : _g.length) > 0 && _.jsxs("div", {
          className: "recipe-content whitespace-pre text-wrap",
          children: [
            _.jsx("h2", {
              className: "text-lg font-semibold mb-2 ",
              children: "Instructions"
            }),
            _.jsx(vN, {
              tokens: n.tokens,
              baseUrl: gv
            })
          ]
        }),
        _.jsx("div", {
          className: "flex flex-wrap gap-2 pt-12",
          children: i.map((a) => _.jsx(xN, {
            children: _.jsx("a", {
              href: `https://www.reciperium.com/recipes?search=${a}`,
              target: "_blank",
              className: "after:content-['_\u2197']",
              children: a
            })
          }, a))
        })
      ]
    });
  }
  const wN = ({ children: n, waitBeforeShow: r = 500 }) => {
    const [i, a] = w.useState(false);
    return w.useEffect(() => {
      const u = setTimeout(() => {
        a(true);
      }, r);
      return () => clearTimeout(u);
    }, [
      r
    ]), i ? n : null;
  };
  function EN({ title: n, contentMd: r, validation: i, defaultRecipe: a, exerciseId: u }) {
    const d = new URL(window.location.href).searchParams.get("share"), h = d ? atob(d) : a, [p, m] = w.useState(h), [g, y] = w.useState({}), [x, b] = w.useState({});
    return w.useEffect(() => {
      m(h);
    }, [
      h
    ]), w.useEffect(() => {
      try {
        const T = vw(p);
        y(T), b(null);
      } catch (T) {
        const C = T;
        console.error(C), b(C);
      }
    }, [
      p
    ]), _.jsxs("div", {
      className: "w-screen h-screen antialiased grid grid-cols-1 md:grid-cols-2",
      children: [
        _.jsx("div", {
          className: "border-r",
          children: _.jsxs("div", {
            className: "relative h-full whitespace-pre text-wrap",
            children: [
              _.jsx(xx, {}),
              _.jsxs("div", {
                className: "py-4 px-2 mb-16 overflow-x-auto",
                children: [
                  _.jsx("h1", {
                    className: "text-lg mb-4 font-semibold",
                    children: n
                  }),
                  _.jsx(r_, {
                    children: r
                  })
                ]
              }),
              _.jsx(uN, {
                className: "absolute inset-x-0 bottom-0",
                exerciseId: u
              })
            ]
          })
        }),
        _.jsxs("div", {
          className: "flex flex-col-reverse md:flex-col",
          children: [
            _.jsx("div", {
              className: "h-1/2 md:h-1/3 min-h-64 border-b dark:bg-slate-800",
              children: _.jsxs("div", {
                className: "flex flex-col h-full items-center justify-center p-6 pt-0",
                children: [
                  _.jsx("span", {
                    className: "text-sm py-1 text-secondary-foreground",
                    children: "editor"
                  }),
                  _.jsx(w.Suspense, {
                    children: _.jsx(fN, {
                      error: x,
                      className: "w-full h-full font-sans border rounded-md bg-background border-slate-300 shadow-inner dark:border-slate-600 dark:shadow-slate-600/50",
                      value: p,
                      onChange: (T) => {
                        m(T);
                      }
                    })
                  })
                ]
              })
            }),
            _.jsxs("div", {
              children: [
                _.jsx("div", {
                  className: "relative w-full p-6",
                  children: _.jsx(SN, {
                    parsedRecipe: g,
                    rawRecipe: p
                  })
                }),
                x ? _.jsx(wN, {
                  waitBeforeShow: 4e3,
                  children: _.jsx("div", {
                    className: "sticky md:absolute bottom-0 right-0 bg-gray-900 dark:bg-gray-100 animate-in fade-in duration-300",
                    children: _.jsx("div", {
                      className: "flex items-center justify-center p-4 ",
                      children: _.jsxs("div", {
                        children: [
                          _.jsxs("span", {
                            className: "flex flex-wrap gap-2 text-red-500 dark:text-red-600 items-center",
                            children: [
                              "Something went wrong!",
                              " ",
                              _.jsx(S_, {
                                className: "rotate-45",
                                size: 16
                              })
                            ]
                          }),
                          _.jsx("span", {
                            className: "text-muted whitespace-pre font-mono text-sm",
                            children: (x == null ? void 0 : x.message) || "Unknown error"
                          })
                        ]
                      })
                    })
                  })
                }) : i(g) && _.jsx("div", {
                  className: "sticky md:absolute bottom-0 right-0 bg-gray-700 dark:bg-gray-100 animate-in fade-in duration-300",
                  children: _.jsxs("div", {
                    className: "flex items-center justify-center p-4 ",
                    children: [
                      _.jsxs(da, {
                        href: `/task/${u + 1}`,
                        replace: true,
                        children: [
                          _.jsxs("span", {
                            className: "text-green-400 dark:text-green-600 flex flex-wrap gap-2 items-center",
                            children: [
                              "Correct ",
                              _.jsx(b_, {
                                size: 16
                              })
                            ]
                          }),
                          _.jsx("span", {
                            className: "text-muted text-sm",
                            children: "Next exercise!"
                          })
                        ]
                      }),
                      " "
                    ]
                  })
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function CN({ className: n, children: r }) {
    return _.jsx("div", {
      className: Zt("container max-w-4xl px-4 pt-4", n),
      children: r
    });
  }
  function AN() {
    return _.jsx("div", {
      className: "w-screen h-screen antialiased",
      children: _.jsxs("div", {
        className: "",
        children: [
          _.jsx(xx, {}),
          _.jsx(CN, {
            children: _.jsxs("div", {
              className: "flex flex-col gap-2",
              children: [
                _.jsx("h2", {
                  className: "text-4xl font-semibold text-center pb-8 text-green-600 dark:text-green-400",
                  children: "Congratulations!"
                }),
                _.jsx("p", {
                  className: "pb-4",
                  children: "You've successfully completed the Reciperium tutorial and are now equipped to create your own delicious recipes."
                }),
                _.jsx("h3", {
                  className: "text-2xl font-semibold pb-6",
                  children: "What's next?"
                }),
                _.jsxs("ul", {
                  className: "list-disc list-inside",
                  children: [
                    _.jsxs("li", {
                      children: [
                        _.jsx("span", {
                          className: "font-bold",
                          children: "Experiment"
                        }),
                        ": Try creating your own recipes from scratch."
                      ]
                    }),
                    _.jsxs("li", {
                      children: [
                        _.jsx("span", {
                          className: "font-bold",
                          children: "Share"
                        }),
                        ": Share your recipes with friends and family."
                      ]
                    }),
                    _.jsxs("li", {
                      children: [
                        _.jsx("span", {
                          className: "font-bold",
                          children: "Explore"
                        }),
                        ": Discover new recipes and techniques in",
                        " ",
                        _.jsx("a", {
                          href: "https://www.reciperium.com",
                          target: "_blank",
                          className: "text-blue-500 hover:text-blue-600 cursor-pointer",
                          children: "Reciperium"
                        })
                      ]
                    }),
                    _.jsxs("li", {
                      children: [
                        _.jsx("span", {
                          className: "font-bold",
                          children: "Start again"
                        }),
                        ": Go to",
                        " ",
                        _.jsx(da, {
                          href: "/",
                          className: "text-blue-500 hover:text-blue-600 cursor-pointer",
                          children: "exercise 1"
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          })
        ]
      })
    });
  }
  function _N() {
    const [n] = fw();
    return w.useEffect(() => {
      window.scrollTo(0, 0);
    }, [
      n
    ]), _.jsxs(mw, {
      children: [
        Mv.map((r, i) => {
          var _a2;
          const a = i + 1;
          return _.jsxs(Wn.Fragment, {
            children: [
              _.jsx(of, {
                path: `/task/${a}`,
                children: _.jsx(EN, {
                  ...r,
                  exerciseId: a
                })
              }),
              (_a2 = r.alias) == null ? void 0 : _a2.map((u) => _.jsx(of, {
                path: `/${u}`,
                children: _.jsx(Kg, {
                  to: `/${a}`
                })
              }, u))
            ]
          }, a);
        }),
        _.jsx(of, {
          path: "/end",
          children: _.jsx(AN, {})
        }),
        _.jsx(Kg, {
          to: "/task/1"
        })
      ]
    });
  }
  QS.createRoot(document.getElementById("root")).render(_.jsx(w.StrictMode, {
    children: _.jsx(iN, {
      defaultTheme: "dark",
      storageKey: "vite-ui-theme",
      children: _.jsx(_N, {})
    })
  }));
})();
