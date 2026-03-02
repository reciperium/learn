import { a as ip, b as D1, r as lt, R as O1, g as up, j as k, S as w1, c as rp, d as cp, P as k1, C as op, I as sp, e as fp, f as hp, h as dp, L as mp, i as pp, k as _1, T as j1, l as gp } from "./radix-BdaLekQA.js";
import { c as yp, t as U1, f as R1, I as B1, p as L1, __tla as __tla_0 } from "./reciperium-pZ6pCXGb.js";
import { c as H1, R as q1, E as Y1, l as V1 } from "./codeMirror-CjRmOl8-.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  (function() {
    const i = document.createElement("link").relList;
    if (i && i.supports && i.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) c(s);
    new MutationObserver((s) => {
      for (const f of s) if (f.type === "childList") for (const h of f.addedNodes) h.tagName === "LINK" && h.rel === "modulepreload" && c(h);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function r(s) {
      const f = {};
      return s.integrity && (f.integrity = s.integrity), s.referrerPolicy && (f.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? f.credentials = "include" : s.crossOrigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin", f;
    }
    function c(s) {
      if (s.ep) return;
      s.ep = true;
      const f = r(s);
      fetch(s.href, f);
    }
  })();
  var po = {
    exports: {}
  }, si = {}, go = {
    exports: {}
  }, yo = {};
  var am;
  function X1() {
    return am || (am = 1, (function(l) {
      function i(O, V) {
        var W = O.length;
        O.push(V);
        t: for (; 0 < W; ) {
          var yt = W - 1 >>> 1, z = O[yt];
          if (0 < s(z, V)) O[yt] = V, O[W] = z, W = yt;
          else break t;
        }
      }
      function r(O) {
        return O.length === 0 ? null : O[0];
      }
      function c(O) {
        if (O.length === 0) return null;
        var V = O[0], W = O.pop();
        if (W !== V) {
          O[0] = W;
          t: for (var yt = 0, z = O.length, jt = z >>> 1; yt < jt; ) {
            var St = 2 * (yt + 1) - 1, E = O[St], Mt = St + 1, te = O[Mt];
            if (0 > s(E, W)) Mt < z && 0 > s(te, E) ? (O[yt] = te, O[Mt] = W, yt = Mt) : (O[yt] = E, O[St] = W, yt = St);
            else if (Mt < z && 0 > s(te, W)) O[yt] = te, O[Mt] = W, yt = Mt;
            else break t;
          }
        }
        return V;
      }
      function s(O, V) {
        var W = O.sortIndex - V.sortIndex;
        return W !== 0 ? W : O.id - V.id;
      }
      if (l.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var f = performance;
        l.unstable_now = function() {
          return f.now();
        };
      } else {
        var h = Date, m = h.now();
        l.unstable_now = function() {
          return h.now() - m;
        };
      }
      var b = [], g = [], y = 1, v = null, S = 3, x = false, H = false, q = false, G = false, L = typeof setTimeout == "function" ? setTimeout : null, tt = typeof clearTimeout == "function" ? clearTimeout : null, Z = typeof setImmediate < "u" ? setImmediate : null;
      function mt(O) {
        for (var V = r(g); V !== null; ) {
          if (V.callback === null) c(g);
          else if (V.startTime <= O) c(g), V.sortIndex = V.expirationTime, i(b, V);
          else break;
          V = r(g);
        }
      }
      function bt(O) {
        if (q = false, mt(O), !H) if (r(b) !== null) H = true, B || (B = true, K());
        else {
          var V = r(g);
          V !== null && Q(bt, V.startTime - O);
        }
      }
      var B = false, ut = -1, ot = 5, st = -1;
      function xt() {
        return G ? true : !(l.unstable_now() - st < ot);
      }
      function I() {
        if (G = false, B) {
          var O = l.unstable_now();
          st = O;
          var V = true;
          try {
            t: {
              H = false, q && (q = false, tt(ut), ut = -1), x = true;
              var W = S;
              try {
                e: {
                  for (mt(O), v = r(b); v !== null && !(v.expirationTime > O && xt()); ) {
                    var yt = v.callback;
                    if (typeof yt == "function") {
                      v.callback = null, S = v.priorityLevel;
                      var z = yt(v.expirationTime <= O);
                      if (O = l.unstable_now(), typeof z == "function") {
                        v.callback = z, mt(O), V = true;
                        break e;
                      }
                      v === r(b) && c(b), mt(O);
                    } else c(b);
                    v = r(b);
                  }
                  if (v !== null) V = true;
                  else {
                    var jt = r(g);
                    jt !== null && Q(bt, jt.startTime - O), V = false;
                  }
                }
                break t;
              } finally {
                v = null, S = W, x = false;
              }
              V = void 0;
            }
          } finally {
            V ? K() : B = false;
          }
        }
      }
      var K;
      if (typeof Z == "function") K = function() {
        Z(I);
      };
      else if (typeof MessageChannel < "u") {
        var Tt = new MessageChannel(), P = Tt.port2;
        Tt.port1.onmessage = I, K = function() {
          P.postMessage(null);
        };
      } else K = function() {
        L(I, 0);
      };
      function Q(O, V) {
        ut = L(function() {
          O(l.unstable_now());
        }, V);
      }
      l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(O) {
        O.callback = null;
      }, l.unstable_forceFrameRate = function(O) {
        0 > O || 125 < O ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ot = 0 < O ? Math.floor(1e3 / O) : 5;
      }, l.unstable_getCurrentPriorityLevel = function() {
        return S;
      }, l.unstable_next = function(O) {
        switch (S) {
          case 1:
          case 2:
          case 3:
            var V = 3;
            break;
          default:
            V = S;
        }
        var W = S;
        S = V;
        try {
          return O();
        } finally {
          S = W;
        }
      }, l.unstable_requestPaint = function() {
        G = true;
      }, l.unstable_runWithPriority = function(O, V) {
        switch (O) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            O = 3;
        }
        var W = S;
        S = O;
        try {
          return V();
        } finally {
          S = W;
        }
      }, l.unstable_scheduleCallback = function(O, V, W) {
        var yt = l.unstable_now();
        switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? yt + W : yt) : W = yt, O) {
          case 1:
            var z = -1;
            break;
          case 2:
            z = 250;
            break;
          case 5:
            z = 1073741823;
            break;
          case 4:
            z = 1e4;
            break;
          default:
            z = 5e3;
        }
        return z = W + z, O = {
          id: y++,
          callback: V,
          priorityLevel: O,
          startTime: W,
          expirationTime: z,
          sortIndex: -1
        }, W > yt ? (O.sortIndex = W, i(g, O), r(b) === null && O === r(g) && (q ? (tt(ut), ut = -1) : q = true, Q(bt, W - yt))) : (O.sortIndex = z, i(b, O), H || x || (H = true, B || (B = true, K()))), O;
      }, l.unstable_shouldYield = xt, l.unstable_wrapCallback = function(O) {
        var V = S;
        return function() {
          var W = S;
          S = V;
          try {
            return O.apply(this, arguments);
          } finally {
            S = W;
          }
        };
      };
    })(yo)), yo;
  }
  var im;
  function Q1() {
    return im || (im = 1, go.exports = X1()), go.exports;
  }
  var um;
  function G1() {
    if (um) return si;
    um = 1;
    var l = Q1(), i = ip(), r = D1();
    function c(t) {
      var e = "https://react.dev/errors/" + t;
      if (1 < arguments.length) {
        e += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
      }
      return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function s(t) {
      return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
    }
    function f(t) {
      var e = t, n = t;
      if (t.alternate) for (; e.return; ) e = e.return;
      else {
        t = e;
        do
          e = t, (e.flags & 4098) !== 0 && (n = e.return), t = e.return;
        while (t);
      }
      return e.tag === 3 ? n : null;
    }
    function h(t) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
      }
      return null;
    }
    function m(t) {
      if (t.tag === 31) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
      }
      return null;
    }
    function b(t) {
      if (f(t) !== t) throw Error(c(188));
    }
    function g(t) {
      var e = t.alternate;
      if (!e) {
        if (e = f(t), e === null) throw Error(c(188));
        return e !== t ? null : t;
      }
      for (var n = t, a = e; ; ) {
        var u = n.return;
        if (u === null) break;
        var o = u.alternate;
        if (o === null) {
          if (a = u.return, a !== null) {
            n = a;
            continue;
          }
          break;
        }
        if (u.child === o.child) {
          for (o = u.child; o; ) {
            if (o === n) return b(u), t;
            if (o === a) return b(u), e;
            o = o.sibling;
          }
          throw Error(c(188));
        }
        if (n.return !== a.return) n = u, a = o;
        else {
          for (var d = false, p = u.child; p; ) {
            if (p === n) {
              d = true, n = u, a = o;
              break;
            }
            if (p === a) {
              d = true, a = u, n = o;
              break;
            }
            p = p.sibling;
          }
          if (!d) {
            for (p = o.child; p; ) {
              if (p === n) {
                d = true, n = o, a = u;
                break;
              }
              if (p === a) {
                d = true, a = o, n = u;
                break;
              }
              p = p.sibling;
            }
            if (!d) throw Error(c(189));
          }
        }
        if (n.alternate !== a) throw Error(c(190));
      }
      if (n.tag !== 3) throw Error(c(188));
      return n.stateNode.current === n ? t : e;
    }
    function y(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6) return t;
      for (t = t.child; t !== null; ) {
        if (e = y(t), e !== null) return e;
        t = t.sibling;
      }
      return null;
    }
    var v = Object.assign, S = /* @__PURE__ */ Symbol.for("react.element"), x = /* @__PURE__ */ Symbol.for("react.transitional.element"), H = /* @__PURE__ */ Symbol.for("react.portal"), q = /* @__PURE__ */ Symbol.for("react.fragment"), G = /* @__PURE__ */ Symbol.for("react.strict_mode"), L = /* @__PURE__ */ Symbol.for("react.profiler"), tt = /* @__PURE__ */ Symbol.for("react.consumer"), Z = /* @__PURE__ */ Symbol.for("react.context"), mt = /* @__PURE__ */ Symbol.for("react.forward_ref"), bt = /* @__PURE__ */ Symbol.for("react.suspense"), B = /* @__PURE__ */ Symbol.for("react.suspense_list"), ut = /* @__PURE__ */ Symbol.for("react.memo"), ot = /* @__PURE__ */ Symbol.for("react.lazy"), st = /* @__PURE__ */ Symbol.for("react.activity"), xt = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), I = Symbol.iterator;
    function K(t) {
      return t === null || typeof t != "object" ? null : (t = I && t[I] || t["@@iterator"], typeof t == "function" ? t : null);
    }
    var Tt = /* @__PURE__ */ Symbol.for("react.client.reference");
    function P(t) {
      if (t == null) return null;
      if (typeof t == "function") return t.$$typeof === Tt ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case q:
          return "Fragment";
        case L:
          return "Profiler";
        case G:
          return "StrictMode";
        case bt:
          return "Suspense";
        case B:
          return "SuspenseList";
        case st:
          return "Activity";
      }
      if (typeof t == "object") switch (t.$$typeof) {
        case H:
          return "Portal";
        case Z:
          return t.displayName || "Context";
        case tt:
          return (t._context.displayName || "Context") + ".Consumer";
        case mt:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case ut:
          return e = t.displayName || null, e !== null ? e : P(t.type) || "Memo";
        case ot:
          e = t._payload, t = t._init;
          try {
            return P(t(e));
          } catch {
          }
      }
      return null;
    }
    var Q = Array.isArray, O = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = {
      pending: false,
      data: null,
      method: null,
      action: null
    }, yt = [], z = -1;
    function jt(t) {
      return {
        current: t
      };
    }
    function St(t) {
      0 > z || (t.current = yt[z], yt[z] = null, z--);
    }
    function E(t, e) {
      z++, yt[z] = t.current, t.current = e;
    }
    var Mt = jt(null), te = jt(null), Bt = jt(null), $e = jt(null);
    function ze(t, e) {
      switch (E(Bt, e), E(te, t), E(Mt, null), e.nodeType) {
        case 9:
        case 11:
          t = (t = e.documentElement) && (t = t.namespaceURI) ? Md(t) : 0;
          break;
        default:
          if (t = e.tagName, e = e.namespaceURI) e = Md(e), t = Nd(e, t);
          else switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
      }
      St(Mt), E(Mt, t);
    }
    function Te() {
      St(Mt), St(te), St(Bt);
    }
    function Pe(t) {
      t.memoizedState !== null && E($e, t);
      var e = Mt.current, n = Nd(e, t.type);
      e !== n && (E(te, t), E(Mt, n));
    }
    function cn(t) {
      te.current === t && (St(Mt), St(te)), $e.current === t && (St($e), ui._currentValue = W);
    }
    var ya, zi;
    function on(t) {
      if (ya === void 0) try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        ya = e && e[1] || "", zi = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
      return `
` + ya + t + zi;
    }
    var El = false;
    function zl(t, e) {
      if (!t || El) return "";
      El = true;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var a = {
          DetermineComponentFrameRoot: function() {
            try {
              if (e) {
                var R = function() {
                  throw Error();
                };
                if (Object.defineProperty(R.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(R, []);
                  } catch (w) {
                    var D = w;
                  }
                  Reflect.construct(t, [], R);
                } else {
                  try {
                    R.call();
                  } catch (w) {
                    D = w;
                  }
                  t.call(R.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (w) {
                  D = w;
                }
                (R = t()) && typeof R.catch == "function" && R.catch(function() {
                });
              }
            } catch (w) {
              if (w && D && typeof w.stack == "string") return [
                w.stack,
                D.stack
              ];
            }
            return [
              null,
              null
            ];
          }
        };
        a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var u = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
        u && u.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot"
        });
        var o = a.DetermineComponentFrameRoot(), d = o[0], p = o[1];
        if (d && p) {
          var T = d.split(`
`), N = p.split(`
`);
          for (u = a = 0; a < T.length && !T[a].includes("DetermineComponentFrameRoot"); ) a++;
          for (; u < N.length && !N[u].includes("DetermineComponentFrameRoot"); ) u++;
          if (a === T.length || u === N.length) for (a = T.length - 1, u = N.length - 1; 1 <= a && 0 <= u && T[a] !== N[u]; ) u--;
          for (; 1 <= a && 0 <= u; a--, u--) if (T[a] !== N[u]) {
            if (a !== 1 || u !== 1) do
              if (a--, u--, 0 > u || T[a] !== N[u]) {
                var _ = `
` + T[a].replace(" at new ", " at ");
                return t.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", t.displayName)), _;
              }
            while (1 <= a && 0 <= u);
            break;
          }
        }
      } finally {
        El = false, Error.prepareStackTrace = n;
      }
      return (n = t ? t.displayName || t.name : "") ? on(n) : "";
    }
    function Ti(t, e) {
      switch (t.tag) {
        case 26:
        case 27:
        case 5:
          return on(t.type);
        case 16:
          return on("Lazy");
        case 13:
          return t.child !== e && e !== null ? on("Suspense Fallback") : on("Suspense");
        case 19:
          return on("SuspenseList");
        case 0:
        case 15:
          return zl(t.type, false);
        case 11:
          return zl(t.type.render, false);
        case 1:
          return zl(t.type, true);
        case 31:
          return on("Activity");
        default:
          return "";
      }
    }
    function Ai(t) {
      try {
        var e = "", n = null;
        do
          e += Ti(t, n), n = t, t = t.return;
        while (t);
        return e;
      } catch (a) {
        return `
Error generating stack: ` + a.message + `
` + a.stack;
      }
    }
    var Tl = Object.prototype.hasOwnProperty, Al = l.unstable_scheduleCallback, va = l.unstable_cancelCallback, Pu = l.unstable_shouldYield, tr = l.unstable_requestPaint, oe = l.unstable_now, er = l.unstable_getCurrentPriorityLevel, j = l.unstable_ImmediatePriority, X = l.unstable_UserBlockingPriority, nt = l.unstable_NormalPriority, ft = l.unstable_LowPriority, Nt = l.unstable_IdlePriority, Ae = l.log, sn = l.unstable_setDisableYieldValue, se = null, $t = null;
    function he(t) {
      if (typeof Ae == "function" && sn(t), $t && typeof $t.setStrictMode == "function") try {
        $t.setStrictMode(se, t);
      } catch {
      }
    }
    var Ut = Math.clz32 ? Math.clz32 : pg, Dn = Math.log, Je = Math.LN2;
    function pg(t) {
      return t >>>= 0, t === 0 ? 32 : 31 - (Dn(t) / Je | 0) | 0;
    }
    var Ci = 256, Mi = 262144, Ni = 4194304;
    function ll(t) {
      var e = t & 42;
      if (e !== 0) return e;
      switch (t & -t) {
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
          return t & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return t & 62914560;
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
          return t;
      }
    }
    function Di(t, e, n) {
      var a = t.pendingLanes;
      if (a === 0) return 0;
      var u = 0, o = t.suspendedLanes, d = t.pingedLanes;
      t = t.warmLanes;
      var p = a & 134217727;
      return p !== 0 ? (a = p & ~o, a !== 0 ? u = ll(a) : (d &= p, d !== 0 ? u = ll(d) : n || (n = p & ~t, n !== 0 && (u = ll(n))))) : (p = a & ~o, p !== 0 ? u = ll(p) : d !== 0 ? u = ll(d) : n || (n = a & ~t, n !== 0 && (u = ll(n)))), u === 0 ? 0 : e !== 0 && e !== u && (e & o) === 0 && (o = u & -u, n = e & -e, o >= n || o === 32 && (n & 4194048) !== 0) ? e : u;
    }
    function ba(t, e) {
      return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
    }
    function gg(t, e) {
      switch (t) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return e + 250;
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
          return e + 5e3;
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
    function rs() {
      var t = Ni;
      return Ni <<= 1, (Ni & 62914560) === 0 && (Ni = 4194304), t;
    }
    function nr(t) {
      for (var e = [], n = 0; 31 > n; n++) e.push(t);
      return e;
    }
    function xa(t, e) {
      t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
    }
    function yg(t, e, n, a, u, o) {
      var d = t.pendingLanes;
      t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
      var p = t.entanglements, T = t.expirationTimes, N = t.hiddenUpdates;
      for (n = d & ~n; 0 < n; ) {
        var _ = 31 - Ut(n), R = 1 << _;
        p[_] = 0, T[_] = -1;
        var D = N[_];
        if (D !== null) for (N[_] = null, _ = 0; _ < D.length; _++) {
          var w = D[_];
          w !== null && (w.lane &= -536870913);
        }
        n &= ~R;
      }
      a !== 0 && cs(t, a, 0), o !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= o & ~(d & ~e));
    }
    function cs(t, e, n) {
      t.pendingLanes |= e, t.suspendedLanes &= ~e;
      var a = 31 - Ut(e);
      t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | n & 261930;
    }
    function os(t, e) {
      var n = t.entangledLanes |= e;
      for (t = t.entanglements; n; ) {
        var a = 31 - Ut(n), u = 1 << a;
        u & e | t[a] & e && (t[a] |= e), n &= ~u;
      }
    }
    function ss(t, e) {
      var n = e & -e;
      return n = (n & 42) !== 0 ? 1 : lr(n), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n;
    }
    function lr(t) {
      switch (t) {
        case 2:
          t = 1;
          break;
        case 8:
          t = 4;
          break;
        case 32:
          t = 16;
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
          t = 128;
          break;
        case 268435456:
          t = 134217728;
          break;
        default:
          t = 0;
      }
      return t;
    }
    function ar(t) {
      return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
    }
    function fs() {
      var t = V.p;
      return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Wd(t.type));
    }
    function hs(t, e) {
      var n = V.p;
      try {
        return V.p = t, e();
      } finally {
        V.p = n;
      }
    }
    var On = Math.random().toString(36).slice(2), le = "__reactFiber$" + On, de = "__reactProps$" + On, Cl = "__reactContainer$" + On, ir = "__reactEvents$" + On, vg = "__reactListeners$" + On, bg = "__reactHandles$" + On, ds = "__reactResources$" + On, Sa = "__reactMarker$" + On;
    function ur(t) {
      delete t[le], delete t[de], delete t[ir], delete t[vg], delete t[bg];
    }
    function Ml(t) {
      var e = t[le];
      if (e) return e;
      for (var n = t.parentNode; n; ) {
        if (e = n[Cl] || n[le]) {
          if (n = e.alternate, e.child !== null || n !== null && n.child !== null) for (t = Ud(t); t !== null; ) {
            if (n = t[le]) return n;
            t = Ud(t);
          }
          return e;
        }
        t = n, n = t.parentNode;
      }
      return null;
    }
    function Nl(t) {
      if (t = t[le] || t[Cl]) {
        var e = t.tag;
        if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t;
      }
      return null;
    }
    function Ea(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
      throw Error(c(33));
    }
    function Dl(t) {
      var e = t[ds];
      return e || (e = t[ds] = {
        hoistableStyles: /* @__PURE__ */ new Map(),
        hoistableScripts: /* @__PURE__ */ new Map()
      }), e;
    }
    function ee(t) {
      t[Sa] = true;
    }
    var ms = /* @__PURE__ */ new Set(), ps = {};
    function al(t, e) {
      Ol(t, e), Ol(t + "Capture", e);
    }
    function Ol(t, e) {
      for (ps[t] = e, t = 0; t < e.length; t++) ms.add(e[t]);
    }
    var xg = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), gs = {}, ys = {};
    function Sg(t) {
      return Tl.call(ys, t) ? true : Tl.call(gs, t) ? false : xg.test(t) ? ys[t] = true : (gs[t] = true, false);
    }
    function Oi(t, e, n) {
      if (Sg(e)) if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
    }
    function wi(t, e, n) {
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            t.removeAttribute(e);
            return;
        }
        t.setAttribute(e, "" + n);
      }
    }
    function fn(t, e, n, a) {
      if (a === null) t.removeAttribute(n);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            t.removeAttribute(n);
            return;
        }
        t.setAttributeNS(e, n, "" + a);
      }
    }
    function Re(t) {
      switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return t;
        case "object":
          return t;
        default:
          return "";
      }
    }
    function vs(t) {
      var e = t.type;
      return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
    }
    function Eg(t, e, n) {
      var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
      if (!t.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
        var u = a.get, o = a.set;
        return Object.defineProperty(t, e, {
          configurable: true,
          get: function() {
            return u.call(this);
          },
          set: function(d) {
            n = "" + d, o.call(this, d);
          }
        }), Object.defineProperty(t, e, {
          enumerable: a.enumerable
        }), {
          getValue: function() {
            return n;
          },
          setValue: function(d) {
            n = "" + d;
          },
          stopTracking: function() {
            t._valueTracker = null, delete t[e];
          }
        };
      }
    }
    function rr(t) {
      if (!t._valueTracker) {
        var e = vs(t) ? "checked" : "value";
        t._valueTracker = Eg(t, e, "" + t[e]);
      }
    }
    function bs(t) {
      if (!t) return false;
      var e = t._valueTracker;
      if (!e) return true;
      var n = e.getValue(), a = "";
      return t && (a = vs(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== n ? (e.setValue(t), true) : false;
    }
    function ki(t) {
      if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
      try {
        return t.activeElement || t.body;
      } catch {
        return t.body;
      }
    }
    var zg = /[\n"\\]/g;
    function Be(t) {
      return t.replace(zg, function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      });
    }
    function cr(t, e, n, a, u, o, d, p) {
      t.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? t.type = d : t.removeAttribute("type"), e != null ? d === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Re(e)) : t.value !== "" + Re(e) && (t.value = "" + Re(e)) : d !== "submit" && d !== "reset" || t.removeAttribute("value"), e != null ? or(t, d, Re(e)) : n != null ? or(t, d, Re(n)) : a != null && t.removeAttribute("value"), u == null && o != null && (t.defaultChecked = !!o), u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"), p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? t.name = "" + Re(p) : t.removeAttribute("name");
    }
    function xs(t, e, n, a, u, o, d, p) {
      if (o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (t.type = o), e != null || n != null) {
        if (!(o !== "submit" && o !== "reset" || e != null)) {
          rr(t);
          return;
        }
        n = n != null ? "" + Re(n) : "", e = e != null ? "" + Re(e) : n, p || e === t.value || (t.value = e), t.defaultValue = e;
      }
      a = a ?? u, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = p ? t.checked : !!a, t.defaultChecked = !!a, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (t.name = d), rr(t);
    }
    function or(t, e, n) {
      e === "number" && ki(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n);
    }
    function wl(t, e, n, a) {
      if (t = t.options, e) {
        e = {};
        for (var u = 0; u < n.length; u++) e["$" + n[u]] = true;
        for (n = 0; n < t.length; n++) u = e.hasOwnProperty("$" + t[n].value), t[n].selected !== u && (t[n].selected = u), u && a && (t[n].defaultSelected = true);
      } else {
        for (n = "" + Re(n), e = null, u = 0; u < t.length; u++) {
          if (t[u].value === n) {
            t[u].selected = true, a && (t[u].defaultSelected = true);
            return;
          }
          e !== null || t[u].disabled || (e = t[u]);
        }
        e !== null && (e.selected = true);
      }
    }
    function Ss(t, e, n) {
      if (e != null && (e = "" + Re(e), e !== t.value && (t.value = e), n == null)) {
        t.defaultValue !== e && (t.defaultValue = e);
        return;
      }
      t.defaultValue = n != null ? "" + Re(n) : "";
    }
    function Es(t, e, n, a) {
      if (e == null) {
        if (a != null) {
          if (n != null) throw Error(c(92));
          if (Q(a)) {
            if (1 < a.length) throw Error(c(93));
            a = a[0];
          }
          n = a;
        }
        n == null && (n = ""), e = n;
      }
      n = Re(e), t.defaultValue = n, a = t.textContent, a === n && a !== "" && a !== null && (t.value = a), rr(t);
    }
    function kl(t, e) {
      if (e) {
        var n = t.firstChild;
        if (n && n === t.lastChild && n.nodeType === 3) {
          n.nodeValue = e;
          return;
        }
      }
      t.textContent = e;
    }
    var Tg = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function zs(t, e, n) {
      var a = e.indexOf("--") === 0;
      n == null || typeof n == "boolean" || n === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, n) : typeof n != "number" || n === 0 || Tg.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
    }
    function Ts(t, e, n) {
      if (e != null && typeof e != "object") throw Error(c(62));
      if (t = t.style, n != null) {
        for (var a in n) !n.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
        for (var u in e) a = e[u], e.hasOwnProperty(u) && n[u] !== a && zs(t, u, a);
      } else for (var o in e) e.hasOwnProperty(o) && zs(t, o, e[o]);
    }
    function sr(t) {
      if (t.indexOf("-") === -1) return false;
      switch (t) {
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
    var Ag = /* @__PURE__ */ new Map([
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
    ]), Cg = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function _i(t) {
      return Cg.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
    }
    function hn() {
    }
    var fr = null;
    function hr(t) {
      return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
    }
    var _l = null, jl = null;
    function As(t) {
      var e = Nl(t);
      if (e && (t = e.stateNode)) {
        var n = t[de] || null;
        t: switch (t = e.stateNode, e.type) {
          case "input":
            if (cr(t, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), e = n.name, n.type === "radio" && e != null) {
              for (n = t; n.parentNode; ) n = n.parentNode;
              for (n = n.querySelectorAll('input[name="' + Be("" + e) + '"][type="radio"]'), e = 0; e < n.length; e++) {
                var a = n[e];
                if (a !== t && a.form === t.form) {
                  var u = a[de] || null;
                  if (!u) throw Error(c(90));
                  cr(a, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name);
                }
              }
              for (e = 0; e < n.length; e++) a = n[e], a.form === t.form && bs(a);
            }
            break t;
          case "textarea":
            Ss(t, n.value, n.defaultValue);
            break t;
          case "select":
            e = n.value, e != null && wl(t, !!n.multiple, e, false);
        }
      }
    }
    var dr = false;
    function Cs(t, e, n) {
      if (dr) return t(e, n);
      dr = true;
      try {
        var a = t(e);
        return a;
      } finally {
        if (dr = false, (_l !== null || jl !== null) && (xu(), _l && (e = _l, t = jl, jl = _l = null, As(e), t))) for (e = 0; e < t.length; e++) As(t[e]);
      }
    }
    function za(t, e) {
      var n = t.stateNode;
      if (n === null) return null;
      var a = n[de] || null;
      if (a === null) return null;
      n = a[e];
      t: switch (e) {
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
          (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
          break t;
        default:
          t = false;
      }
      if (t) return null;
      if (n && typeof n != "function") throw Error(c(231, e, typeof n));
      return n;
    }
    var dn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), mr = false;
    if (dn) try {
      var Ta = {};
      Object.defineProperty(Ta, "passive", {
        get: function() {
          mr = true;
        }
      }), window.addEventListener("test", Ta, Ta), window.removeEventListener("test", Ta, Ta);
    } catch {
      mr = false;
    }
    var wn = null, pr = null, ji = null;
    function Ms() {
      if (ji) return ji;
      var t, e = pr, n = e.length, a, u = "value" in wn ? wn.value : wn.textContent, o = u.length;
      for (t = 0; t < n && e[t] === u[t]; t++) ;
      var d = n - t;
      for (a = 1; a <= d && e[n - a] === u[o - a]; a++) ;
      return ji = u.slice(t, 1 < a ? 1 - a : void 0);
    }
    function Ui(t) {
      var e = t.keyCode;
      return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
    }
    function Ri() {
      return true;
    }
    function Ns() {
      return false;
    }
    function me(t) {
      function e(n, a, u, o, d) {
        this._reactName = n, this._targetInst = u, this.type = a, this.nativeEvent = o, this.target = d, this.currentTarget = null;
        for (var p in t) t.hasOwnProperty(p) && (n = t[p], this[p] = n ? n(o) : o[p]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === false) ? Ri : Ns, this.isPropagationStopped = Ns, this;
      }
      return v(e.prototype, {
        preventDefault: function() {
          this.defaultPrevented = true;
          var n = this.nativeEvent;
          n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = Ri);
        },
        stopPropagation: function() {
          var n = this.nativeEvent;
          n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = Ri);
        },
        persist: function() {
        },
        isPersistent: Ri
      }), e;
    }
    var il = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Bi = me(il), Aa = v({}, il, {
      view: 0,
      detail: 0
    }), Mg = me(Aa), gr, yr, Ca, Li = v({}, Aa, {
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
      getModifierState: br,
      button: 0,
      buttons: 0,
      relatedTarget: function(t) {
        return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
      },
      movementX: function(t) {
        return "movementX" in t ? t.movementX : (t !== Ca && (Ca && t.type === "mousemove" ? (gr = t.screenX - Ca.screenX, yr = t.screenY - Ca.screenY) : yr = gr = 0, Ca = t), gr);
      },
      movementY: function(t) {
        return "movementY" in t ? t.movementY : yr;
      }
    }), Ds = me(Li), Ng = v({}, Li, {
      dataTransfer: 0
    }), Dg = me(Ng), Og = v({}, Aa, {
      relatedTarget: 0
    }), vr = me(Og), wg = v({}, il, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), kg = me(wg), _g = v({}, il, {
      clipboardData: function(t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      }
    }), jg = me(_g), Ug = v({}, il, {
      data: 0
    }), Os = me(Ug), Rg = {
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
    }, Bg = {
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
    }, Lg = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Hg(t) {
      var e = this.nativeEvent;
      return e.getModifierState ? e.getModifierState(t) : (t = Lg[t]) ? !!e[t] : false;
    }
    function br() {
      return Hg;
    }
    var qg = v({}, Aa, {
      key: function(t) {
        if (t.key) {
          var e = Rg[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress" ? (t = Ui(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Bg[t.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: br,
      charCode: function(t) {
        return t.type === "keypress" ? Ui(t) : 0;
      },
      keyCode: function(t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function(t) {
        return t.type === "keypress" ? Ui(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      }
    }), Yg = me(qg), Vg = v({}, Li, {
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
    }), ws = me(Vg), Xg = v({}, Aa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: br
    }), Qg = me(Xg), Gg = v({}, il, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Zg = me(Gg), Kg = v({}, Li, {
      deltaX: function(t) {
        return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
      },
      deltaY: function(t) {
        return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), Jg = me(Kg), Fg = v({}, il, {
      newState: 0,
      oldState: 0
    }), Ig = me(Fg), Wg = [
      9,
      13,
      27,
      32
    ], xr = dn && "CompositionEvent" in window, Ma = null;
    dn && "documentMode" in document && (Ma = document.documentMode);
    var $g = dn && "TextEvent" in window && !Ma, ks = dn && (!xr || Ma && 8 < Ma && 11 >= Ma), _s = " ", js = false;
    function Us(t, e) {
      switch (t) {
        case "keyup":
          return Wg.indexOf(e.keyCode) !== -1;
        case "keydown":
          return e.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function Rs(t) {
      return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
    }
    var Ul = false;
    function Pg(t, e) {
      switch (t) {
        case "compositionend":
          return Rs(e);
        case "keypress":
          return e.which !== 32 ? null : (js = true, _s);
        case "textInput":
          return t = e.data, t === _s && js ? null : t;
        default:
          return null;
      }
    }
    function ty(t, e) {
      if (Ul) return t === "compositionend" || !xr && Us(t, e) ? (t = Ms(), ji = pr = wn = null, Ul = false, t) : null;
      switch (t) {
        case "paste":
          return null;
        case "keypress":
          if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
            if (e.char && 1 < e.char.length) return e.char;
            if (e.which) return String.fromCharCode(e.which);
          }
          return null;
        case "compositionend":
          return ks && e.locale !== "ko" ? null : e.data;
        default:
          return null;
      }
    }
    var ey = {
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
    function Bs(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e === "input" ? !!ey[t.type] : e === "textarea";
    }
    function Ls(t, e, n, a) {
      _l ? jl ? jl.push(a) : jl = [
        a
      ] : _l = a, e = Mu(e, "onChange"), 0 < e.length && (n = new Bi("onChange", "change", null, n, a), t.push({
        event: n,
        listeners: e
      }));
    }
    var Na = null, Da = null;
    function ny(t) {
      Sd(t, 0);
    }
    function Hi(t) {
      var e = Ea(t);
      if (bs(e)) return t;
    }
    function Hs(t, e) {
      if (t === "change") return e;
    }
    var qs = false;
    if (dn) {
      var Sr;
      if (dn) {
        var Er = "oninput" in document;
        if (!Er) {
          var Ys = document.createElement("div");
          Ys.setAttribute("oninput", "return;"), Er = typeof Ys.oninput == "function";
        }
        Sr = Er;
      } else Sr = false;
      qs = Sr && (!document.documentMode || 9 < document.documentMode);
    }
    function Vs() {
      Na && (Na.detachEvent("onpropertychange", Xs), Da = Na = null);
    }
    function Xs(t) {
      if (t.propertyName === "value" && Hi(Da)) {
        var e = [];
        Ls(e, Da, t, hr(t)), Cs(ny, e);
      }
    }
    function ly(t, e, n) {
      t === "focusin" ? (Vs(), Na = e, Da = n, Na.attachEvent("onpropertychange", Xs)) : t === "focusout" && Vs();
    }
    function ay(t) {
      if (t === "selectionchange" || t === "keyup" || t === "keydown") return Hi(Da);
    }
    function iy(t, e) {
      if (t === "click") return Hi(e);
    }
    function uy(t, e) {
      if (t === "input" || t === "change") return Hi(e);
    }
    function ry(t, e) {
      return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
    }
    var Ce = typeof Object.is == "function" ? Object.is : ry;
    function Oa(t, e) {
      if (Ce(t, e)) return true;
      if (typeof t != "object" || t === null || typeof e != "object" || e === null) return false;
      var n = Object.keys(t), a = Object.keys(e);
      if (n.length !== a.length) return false;
      for (a = 0; a < n.length; a++) {
        var u = n[a];
        if (!Tl.call(e, u) || !Ce(t[u], e[u])) return false;
      }
      return true;
    }
    function Qs(t) {
      for (; t && t.firstChild; ) t = t.firstChild;
      return t;
    }
    function Gs(t, e) {
      var n = Qs(t);
      t = 0;
      for (var a; n; ) {
        if (n.nodeType === 3) {
          if (a = t + n.textContent.length, t <= e && a >= e) return {
            node: n,
            offset: e - t
          };
          t = a;
        }
        t: {
          for (; n; ) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break t;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = Qs(n);
      }
    }
    function Zs(t, e) {
      return t && e ? t === e ? true : t && t.nodeType === 3 ? false : e && e.nodeType === 3 ? Zs(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : false : false;
    }
    function Ks(t) {
      t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
      for (var e = ki(t.document); e instanceof t.HTMLIFrameElement; ) {
        try {
          var n = typeof e.contentWindow.location.href == "string";
        } catch {
          n = false;
        }
        if (n) t = e.contentWindow;
        else break;
        e = ki(t.document);
      }
      return e;
    }
    function zr(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
    }
    var cy = dn && "documentMode" in document && 11 >= document.documentMode, Rl = null, Tr = null, wa = null, Ar = false;
    function Js(t, e, n) {
      var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      Ar || Rl == null || Rl !== ki(a) || (a = Rl, "selectionStart" in a && zr(a) ? a = {
        start: a.selectionStart,
        end: a.selectionEnd
      } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      }), wa && Oa(wa, a) || (wa = a, a = Mu(Tr, "onSelect"), 0 < a.length && (e = new Bi("onSelect", "select", null, e, n), t.push({
        event: e,
        listeners: a
      }), e.target = Rl)));
    }
    function ul(t, e) {
      var n = {};
      return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
    }
    var Bl = {
      animationend: ul("Animation", "AnimationEnd"),
      animationiteration: ul("Animation", "AnimationIteration"),
      animationstart: ul("Animation", "AnimationStart"),
      transitionrun: ul("Transition", "TransitionRun"),
      transitionstart: ul("Transition", "TransitionStart"),
      transitioncancel: ul("Transition", "TransitionCancel"),
      transitionend: ul("Transition", "TransitionEnd")
    }, Cr = {}, Fs = {};
    dn && (Fs = document.createElement("div").style, "AnimationEvent" in window || (delete Bl.animationend.animation, delete Bl.animationiteration.animation, delete Bl.animationstart.animation), "TransitionEvent" in window || delete Bl.transitionend.transition);
    function rl(t) {
      if (Cr[t]) return Cr[t];
      if (!Bl[t]) return t;
      var e = Bl[t], n;
      for (n in e) if (e.hasOwnProperty(n) && n in Fs) return Cr[t] = e[n];
      return t;
    }
    var Is = rl("animationend"), Ws = rl("animationiteration"), $s = rl("animationstart"), oy = rl("transitionrun"), sy = rl("transitionstart"), fy = rl("transitioncancel"), Ps = rl("transitionend"), tf = /* @__PURE__ */ new Map(), Mr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Mr.push("scrollEnd");
    function Fe(t, e) {
      tf.set(t, e), al(e, [
        t
      ]);
    }
    var qi = typeof reportError == "function" ? reportError : function(t) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var e = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
          error: t
        });
        if (!window.dispatchEvent(e)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", t);
        return;
      }
      console.error(t);
    }, Le = [], Ll = 0, Nr = 0;
    function Yi() {
      for (var t = Ll, e = Nr = Ll = 0; e < t; ) {
        var n = Le[e];
        Le[e++] = null;
        var a = Le[e];
        Le[e++] = null;
        var u = Le[e];
        Le[e++] = null;
        var o = Le[e];
        if (Le[e++] = null, a !== null && u !== null) {
          var d = a.pending;
          d === null ? u.next = u : (u.next = d.next, d.next = u), a.pending = u;
        }
        o !== 0 && ef(n, u, o);
      }
    }
    function Vi(t, e, n, a) {
      Le[Ll++] = t, Le[Ll++] = e, Le[Ll++] = n, Le[Ll++] = a, Nr |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
    }
    function Dr(t, e, n, a) {
      return Vi(t, e, n, a), Xi(t);
    }
    function cl(t, e) {
      return Vi(t, null, null, e), Xi(t);
    }
    function ef(t, e, n) {
      t.lanes |= n;
      var a = t.alternate;
      a !== null && (a.lanes |= n);
      for (var u = false, o = t.return; o !== null; ) o.childLanes |= n, a = o.alternate, a !== null && (a.childLanes |= n), o.tag === 22 && (t = o.stateNode, t === null || t._visibility & 1 || (u = true)), t = o, o = o.return;
      return t.tag === 3 ? (o = t.stateNode, u && e !== null && (u = 31 - Ut(n), t = o.hiddenUpdates, a = t[u], a === null ? t[u] = [
        e
      ] : a.push(e), e.lane = n | 536870912), o) : null;
    }
    function Xi(t) {
      if (50 < Pa) throw Pa = 0, Lc = null, Error(c(185));
      for (var e = t.return; e !== null; ) t = e, e = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    var Hl = {};
    function hy(t, e, n, a) {
      this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function Me(t, e, n, a) {
      return new hy(t, e, n, a);
    }
    function Or(t) {
      return t = t.prototype, !(!t || !t.isReactComponent);
    }
    function mn(t, e) {
      var n = t.alternate;
      return n === null ? (n = Me(t.tag, e, t.key, t.mode), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 65011712, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
      }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
    }
    function nf(t, e) {
      t.flags &= 65011714;
      var n = t.alternate;
      return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
      }), t;
    }
    function Qi(t, e, n, a, u, o) {
      var d = 0;
      if (a = t, typeof t == "function") Or(t) && (d = 1);
      else if (typeof t == "string") d = y1(t, n, Mt.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
      else t: switch (t) {
        case st:
          return t = Me(31, n, e, u), t.elementType = st, t.lanes = o, t;
        case q:
          return ol(n.children, u, o, e);
        case G:
          d = 8, u |= 24;
          break;
        case L:
          return t = Me(12, n, e, u | 2), t.elementType = L, t.lanes = o, t;
        case bt:
          return t = Me(13, n, e, u), t.elementType = bt, t.lanes = o, t;
        case B:
          return t = Me(19, n, e, u), t.elementType = B, t.lanes = o, t;
        default:
          if (typeof t == "object" && t !== null) switch (t.$$typeof) {
            case Z:
              d = 10;
              break t;
            case tt:
              d = 9;
              break t;
            case mt:
              d = 11;
              break t;
            case ut:
              d = 14;
              break t;
            case ot:
              d = 16, a = null;
              break t;
          }
          d = 29, n = Error(c(130, t === null ? "null" : typeof t, "")), a = null;
      }
      return e = Me(d, n, e, u), e.elementType = t, e.type = a, e.lanes = o, e;
    }
    function ol(t, e, n, a) {
      return t = Me(7, t, a, e), t.lanes = n, t;
    }
    function wr(t, e, n) {
      return t = Me(6, t, null, e), t.lanes = n, t;
    }
    function lf(t) {
      var e = Me(18, null, null, 0);
      return e.stateNode = t, e;
    }
    function kr(t, e, n) {
      return e = Me(4, t.children !== null ? t.children : [], t.key, e), e.lanes = n, e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
      }, e;
    }
    var af = /* @__PURE__ */ new WeakMap();
    function He(t, e) {
      if (typeof t == "object" && t !== null) {
        var n = af.get(t);
        return n !== void 0 ? n : (e = {
          value: t,
          source: e,
          stack: Ai(e)
        }, af.set(t, e), e);
      }
      return {
        value: t,
        source: e,
        stack: Ai(e)
      };
    }
    var ql = [], Yl = 0, Gi = null, ka = 0, qe = [], Ye = 0, kn = null, tn = 1, en = "";
    function pn(t, e) {
      ql[Yl++] = ka, ql[Yl++] = Gi, Gi = t, ka = e;
    }
    function uf(t, e, n) {
      qe[Ye++] = tn, qe[Ye++] = en, qe[Ye++] = kn, kn = t;
      var a = tn;
      t = en;
      var u = 32 - Ut(a) - 1;
      a &= ~(1 << u), n += 1;
      var o = 32 - Ut(e) + u;
      if (30 < o) {
        var d = u - u % 5;
        o = (a & (1 << d) - 1).toString(32), a >>= d, u -= d, tn = 1 << 32 - Ut(e) + u | n << u | a, en = o + t;
      } else tn = 1 << o | n << u | a, en = t;
    }
    function _r(t) {
      t.return !== null && (pn(t, 1), uf(t, 1, 0));
    }
    function jr(t) {
      for (; t === Gi; ) Gi = ql[--Yl], ql[Yl] = null, ka = ql[--Yl], ql[Yl] = null;
      for (; t === kn; ) kn = qe[--Ye], qe[Ye] = null, en = qe[--Ye], qe[Ye] = null, tn = qe[--Ye], qe[Ye] = null;
    }
    function rf(t, e) {
      qe[Ye++] = tn, qe[Ye++] = en, qe[Ye++] = kn, tn = e.id, en = e.overflow, kn = t;
    }
    var ae = null, qt = null, vt = false, _n = null, Ve = false, Ur = Error(c(519));
    function jn(t) {
      var e = Error(c(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
      throw _a(He(e, t)), Ur;
    }
    function cf(t) {
      var e = t.stateNode, n = t.type, a = t.memoizedProps;
      switch (e[le] = t, e[de] = a, n) {
        case "dialog":
          dt("cancel", e), dt("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          dt("load", e);
          break;
        case "video":
        case "audio":
          for (n = 0; n < ei.length; n++) dt(ei[n], e);
          break;
        case "source":
          dt("error", e);
          break;
        case "img":
        case "image":
        case "link":
          dt("error", e), dt("load", e);
          break;
        case "details":
          dt("toggle", e);
          break;
        case "input":
          dt("invalid", e), xs(e, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, true);
          break;
        case "select":
          dt("invalid", e);
          break;
        case "textarea":
          dt("invalid", e), Es(e, a.value, a.defaultValue, a.children);
      }
      n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || a.suppressHydrationWarning === true || Ad(e.textContent, n) ? (a.popover != null && (dt("beforetoggle", e), dt("toggle", e)), a.onScroll != null && dt("scroll", e), a.onScrollEnd != null && dt("scrollend", e), a.onClick != null && (e.onclick = hn), e = true) : e = false, e || jn(t, true);
    }
    function of(t) {
      for (ae = t.return; ae; ) switch (ae.tag) {
        case 5:
        case 31:
        case 13:
          Ve = false;
          return;
        case 27:
        case 3:
          Ve = true;
          return;
        default:
          ae = ae.return;
      }
    }
    function Vl(t) {
      if (t !== ae) return false;
      if (!vt) return of(t), vt = true, false;
      var e = t.tag, n;
      if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || Pc(t.type, t.memoizedProps)), n = !n), n && qt && jn(t), of(t), e === 13) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(317));
        qt = jd(t);
      } else if (e === 31) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(317));
        qt = jd(t);
      } else e === 27 ? (e = qt, Jn(t.type) ? (t = ao, ao = null, qt = t) : qt = e) : qt = ae ? Qe(t.stateNode.nextSibling) : null;
      return true;
    }
    function sl() {
      qt = ae = null, vt = false;
    }
    function Rr() {
      var t = _n;
      return t !== null && (ve === null ? ve = t : ve.push.apply(ve, t), _n = null), t;
    }
    function _a(t) {
      _n === null ? _n = [
        t
      ] : _n.push(t);
    }
    var Br = jt(null), fl = null, gn = null;
    function Un(t, e, n) {
      E(Br, e._currentValue), e._currentValue = n;
    }
    function yn(t) {
      t._currentValue = Br.current, St(Br);
    }
    function Lr(t, e, n) {
      for (; t !== null; ) {
        var a = t.alternate;
        if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === n) break;
        t = t.return;
      }
    }
    function Hr(t, e, n, a) {
      var u = t.child;
      for (u !== null && (u.return = t); u !== null; ) {
        var o = u.dependencies;
        if (o !== null) {
          var d = u.child;
          o = o.firstContext;
          t: for (; o !== null; ) {
            var p = o;
            o = u;
            for (var T = 0; T < e.length; T++) if (p.context === e[T]) {
              o.lanes |= n, p = o.alternate, p !== null && (p.lanes |= n), Lr(o.return, n, t), a || (d = null);
              break t;
            }
            o = p.next;
          }
        } else if (u.tag === 18) {
          if (d = u.return, d === null) throw Error(c(341));
          d.lanes |= n, o = d.alternate, o !== null && (o.lanes |= n), Lr(d, n, t), d = null;
        } else d = u.child;
        if (d !== null) d.return = u;
        else for (d = u; d !== null; ) {
          if (d === t) {
            d = null;
            break;
          }
          if (u = d.sibling, u !== null) {
            u.return = d.return, d = u;
            break;
          }
          d = d.return;
        }
        u = d;
      }
    }
    function Xl(t, e, n, a) {
      t = null;
      for (var u = e, o = false; u !== null; ) {
        if (!o) {
          if ((u.flags & 524288) !== 0) o = true;
          else if ((u.flags & 262144) !== 0) break;
        }
        if (u.tag === 10) {
          var d = u.alternate;
          if (d === null) throw Error(c(387));
          if (d = d.memoizedProps, d !== null) {
            var p = u.type;
            Ce(u.pendingProps.value, d.value) || (t !== null ? t.push(p) : t = [
              p
            ]);
          }
        } else if (u === $e.current) {
          if (d = u.alternate, d === null) throw Error(c(387));
          d.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(ui) : t = [
            ui
          ]);
        }
        u = u.return;
      }
      t !== null && Hr(e, t, n, a), e.flags |= 262144;
    }
    function Zi(t) {
      for (t = t.firstContext; t !== null; ) {
        if (!Ce(t.context._currentValue, t.memoizedValue)) return true;
        t = t.next;
      }
      return false;
    }
    function hl(t) {
      fl = t, gn = null, t = t.dependencies, t !== null && (t.firstContext = null);
    }
    function ie(t) {
      return sf(fl, t);
    }
    function Ki(t, e) {
      return fl === null && hl(t), sf(t, e);
    }
    function sf(t, e) {
      var n = e._currentValue;
      if (e = {
        context: e,
        memoizedValue: n,
        next: null
      }, gn === null) {
        if (t === null) throw Error(c(308));
        gn = e, t.dependencies = {
          lanes: 0,
          firstContext: e
        }, t.flags |= 524288;
      } else gn = gn.next = e;
      return n;
    }
    var dy = typeof AbortController < "u" ? AbortController : function() {
      var t = [], e = this.signal = {
        aborted: false,
        addEventListener: function(n, a) {
          t.push(a);
        }
      };
      this.abort = function() {
        e.aborted = true, t.forEach(function(n) {
          return n();
        });
      };
    }, my = l.unstable_scheduleCallback, py = l.unstable_NormalPriority, Kt = {
      $$typeof: Z,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };
    function qr() {
      return {
        controller: new dy(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function ja(t) {
      t.refCount--, t.refCount === 0 && my(py, function() {
        t.controller.abort();
      });
    }
    var Ua = null, Yr = 0, Ql = 0, Gl = null;
    function gy(t, e) {
      if (Ua === null) {
        var n = Ua = [];
        Yr = 0, Ql = Qc(), Gl = {
          status: "pending",
          value: void 0,
          then: function(a) {
            n.push(a);
          }
        };
      }
      return Yr++, e.then(ff, ff), e;
    }
    function ff() {
      if (--Yr === 0 && Ua !== null) {
        Gl !== null && (Gl.status = "fulfilled");
        var t = Ua;
        Ua = null, Ql = 0, Gl = null;
        for (var e = 0; e < t.length; e++) (0, t[e])();
      }
    }
    function yy(t, e) {
      var n = [], a = {
        status: "pending",
        value: null,
        reason: null,
        then: function(u) {
          n.push(u);
        }
      };
      return t.then(function() {
        a.status = "fulfilled", a.value = e;
        for (var u = 0; u < n.length; u++) (0, n[u])(e);
      }, function(u) {
        for (a.status = "rejected", a.reason = u, u = 0; u < n.length; u++) (0, n[u])(void 0);
      }), a;
    }
    var hf = O.S;
    O.S = function(t, e) {
      Fh = oe(), typeof e == "object" && e !== null && typeof e.then == "function" && gy(t, e), hf !== null && hf(t, e);
    };
    var dl = jt(null);
    function Vr() {
      var t = dl.current;
      return t !== null ? t : Rt.pooledCache;
    }
    function Ji(t, e) {
      e === null ? E(dl, dl.current) : E(dl, e.pool);
    }
    function df() {
      var t = Vr();
      return t === null ? null : {
        parent: Kt._currentValue,
        pool: t
      };
    }
    var Zl = Error(c(460)), Xr = Error(c(474)), Fi = Error(c(542)), Ii = {
      then: function() {
      }
    };
    function mf(t) {
      return t = t.status, t === "fulfilled" || t === "rejected";
    }
    function pf(t, e, n) {
      switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(hn, hn), e = n), e.status) {
        case "fulfilled":
          return e.value;
        case "rejected":
          throw t = e.reason, yf(t), t;
        default:
          if (typeof e.status == "string") e.then(hn, hn);
          else {
            if (t = Rt, t !== null && 100 < t.shellSuspendCounter) throw Error(c(482));
            t = e, t.status = "pending", t.then(function(a) {
              if (e.status === "pending") {
                var u = e;
                u.status = "fulfilled", u.value = a;
              }
            }, function(a) {
              if (e.status === "pending") {
                var u = e;
                u.status = "rejected", u.reason = a;
              }
            });
          }
          switch (e.status) {
            case "fulfilled":
              return e.value;
            case "rejected":
              throw t = e.reason, yf(t), t;
          }
          throw pl = e, Zl;
      }
    }
    function ml(t) {
      try {
        var e = t._init;
        return e(t._payload);
      } catch (n) {
        throw n !== null && typeof n == "object" && typeof n.then == "function" ? (pl = n, Zl) : n;
      }
    }
    var pl = null;
    function gf() {
      if (pl === null) throw Error(c(459));
      var t = pl;
      return pl = null, t;
    }
    function yf(t) {
      if (t === Zl || t === Fi) throw Error(c(483));
    }
    var Kl = null, Ra = 0;
    function Wi(t) {
      var e = Ra;
      return Ra += 1, Kl === null && (Kl = []), pf(Kl, t, e);
    }
    function Ba(t, e) {
      e = e.props.ref, t.ref = e !== void 0 ? e : null;
    }
    function $i(t, e) {
      throw e.$$typeof === S ? Error(c(525)) : (t = Object.prototype.toString.call(e), Error(c(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)));
    }
    function vf(t) {
      function e(C, A) {
        if (t) {
          var M = C.deletions;
          M === null ? (C.deletions = [
            A
          ], C.flags |= 16) : M.push(A);
        }
      }
      function n(C, A) {
        if (!t) return null;
        for (; A !== null; ) e(C, A), A = A.sibling;
        return null;
      }
      function a(C) {
        for (var A = /* @__PURE__ */ new Map(); C !== null; ) C.key !== null ? A.set(C.key, C) : A.set(C.index, C), C = C.sibling;
        return A;
      }
      function u(C, A) {
        return C = mn(C, A), C.index = 0, C.sibling = null, C;
      }
      function o(C, A, M) {
        return C.index = M, t ? (M = C.alternate, M !== null ? (M = M.index, M < A ? (C.flags |= 67108866, A) : M) : (C.flags |= 67108866, A)) : (C.flags |= 1048576, A);
      }
      function d(C) {
        return t && C.alternate === null && (C.flags |= 67108866), C;
      }
      function p(C, A, M, U) {
        return A === null || A.tag !== 6 ? (A = wr(M, C.mode, U), A.return = C, A) : (A = u(A, M), A.return = C, A);
      }
      function T(C, A, M, U) {
        var $ = M.type;
        return $ === q ? _(C, A, M.props.children, U, M.key) : A !== null && (A.elementType === $ || typeof $ == "object" && $ !== null && $.$$typeof === ot && ml($) === A.type) ? (A = u(A, M.props), Ba(A, M), A.return = C, A) : (A = Qi(M.type, M.key, M.props, null, C.mode, U), Ba(A, M), A.return = C, A);
      }
      function N(C, A, M, U) {
        return A === null || A.tag !== 4 || A.stateNode.containerInfo !== M.containerInfo || A.stateNode.implementation !== M.implementation ? (A = kr(M, C.mode, U), A.return = C, A) : (A = u(A, M.children || []), A.return = C, A);
      }
      function _(C, A, M, U, $) {
        return A === null || A.tag !== 7 ? (A = ol(M, C.mode, U, $), A.return = C, A) : (A = u(A, M), A.return = C, A);
      }
      function R(C, A, M) {
        if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint") return A = wr("" + A, C.mode, M), A.return = C, A;
        if (typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case x:
              return M = Qi(A.type, A.key, A.props, null, C.mode, M), Ba(M, A), M.return = C, M;
            case H:
              return A = kr(A, C.mode, M), A.return = C, A;
            case ot:
              return A = ml(A), R(C, A, M);
          }
          if (Q(A) || K(A)) return A = ol(A, C.mode, M, null), A.return = C, A;
          if (typeof A.then == "function") return R(C, Wi(A), M);
          if (A.$$typeof === Z) return R(C, Ki(C, A), M);
          $i(C, A);
        }
        return null;
      }
      function D(C, A, M, U) {
        var $ = A !== null ? A.key : null;
        if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint") return $ !== null ? null : p(C, A, "" + M, U);
        if (typeof M == "object" && M !== null) {
          switch (M.$$typeof) {
            case x:
              return M.key === $ ? T(C, A, M, U) : null;
            case H:
              return M.key === $ ? N(C, A, M, U) : null;
            case ot:
              return M = ml(M), D(C, A, M, U);
          }
          if (Q(M) || K(M)) return $ !== null ? null : _(C, A, M, U, null);
          if (typeof M.then == "function") return D(C, A, Wi(M), U);
          if (M.$$typeof === Z) return D(C, A, Ki(C, M), U);
          $i(C, M);
        }
        return null;
      }
      function w(C, A, M, U, $) {
        if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint") return C = C.get(M) || null, p(A, C, "" + U, $);
        if (typeof U == "object" && U !== null) {
          switch (U.$$typeof) {
            case x:
              return C = C.get(U.key === null ? M : U.key) || null, T(A, C, U, $);
            case H:
              return C = C.get(U.key === null ? M : U.key) || null, N(A, C, U, $);
            case ot:
              return U = ml(U), w(C, A, M, U, $);
          }
          if (Q(U) || K(U)) return C = C.get(M) || null, _(A, C, U, $, null);
          if (typeof U.then == "function") return w(C, A, M, Wi(U), $);
          if (U.$$typeof === Z) return w(C, A, M, Ki(A, U), $);
          $i(A, U);
        }
        return null;
      }
      function J(C, A, M, U) {
        for (var $ = null, Et = null, F = A, rt = A = 0, gt = null; F !== null && rt < M.length; rt++) {
          F.index > rt ? (gt = F, F = null) : gt = F.sibling;
          var zt = D(C, F, M[rt], U);
          if (zt === null) {
            F === null && (F = gt);
            break;
          }
          t && F && zt.alternate === null && e(C, F), A = o(zt, A, rt), Et === null ? $ = zt : Et.sibling = zt, Et = zt, F = gt;
        }
        if (rt === M.length) return n(C, F), vt && pn(C, rt), $;
        if (F === null) {
          for (; rt < M.length; rt++) F = R(C, M[rt], U), F !== null && (A = o(F, A, rt), Et === null ? $ = F : Et.sibling = F, Et = F);
          return vt && pn(C, rt), $;
        }
        for (F = a(F); rt < M.length; rt++) gt = w(F, C, rt, M[rt], U), gt !== null && (t && gt.alternate !== null && F.delete(gt.key === null ? rt : gt.key), A = o(gt, A, rt), Et === null ? $ = gt : Et.sibling = gt, Et = gt);
        return t && F.forEach(function(Pn) {
          return e(C, Pn);
        }), vt && pn(C, rt), $;
      }
      function et(C, A, M, U) {
        if (M == null) throw Error(c(151));
        for (var $ = null, Et = null, F = A, rt = A = 0, gt = null, zt = M.next(); F !== null && !zt.done; rt++, zt = M.next()) {
          F.index > rt ? (gt = F, F = null) : gt = F.sibling;
          var Pn = D(C, F, zt.value, U);
          if (Pn === null) {
            F === null && (F = gt);
            break;
          }
          t && F && Pn.alternate === null && e(C, F), A = o(Pn, A, rt), Et === null ? $ = Pn : Et.sibling = Pn, Et = Pn, F = gt;
        }
        if (zt.done) return n(C, F), vt && pn(C, rt), $;
        if (F === null) {
          for (; !zt.done; rt++, zt = M.next()) zt = R(C, zt.value, U), zt !== null && (A = o(zt, A, rt), Et === null ? $ = zt : Et.sibling = zt, Et = zt);
          return vt && pn(C, rt), $;
        }
        for (F = a(F); !zt.done; rt++, zt = M.next()) zt = w(F, C, rt, zt.value, U), zt !== null && (t && zt.alternate !== null && F.delete(zt.key === null ? rt : zt.key), A = o(zt, A, rt), Et === null ? $ = zt : Et.sibling = zt, Et = zt);
        return t && F.forEach(function(N1) {
          return e(C, N1);
        }), vt && pn(C, rt), $;
      }
      function _t(C, A, M, U) {
        if (typeof M == "object" && M !== null && M.type === q && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) {
          switch (M.$$typeof) {
            case x:
              t: {
                for (var $ = M.key; A !== null; ) {
                  if (A.key === $) {
                    if ($ = M.type, $ === q) {
                      if (A.tag === 7) {
                        n(C, A.sibling), U = u(A, M.props.children), U.return = C, C = U;
                        break t;
                      }
                    } else if (A.elementType === $ || typeof $ == "object" && $ !== null && $.$$typeof === ot && ml($) === A.type) {
                      n(C, A.sibling), U = u(A, M.props), Ba(U, M), U.return = C, C = U;
                      break t;
                    }
                    n(C, A);
                    break;
                  } else e(C, A);
                  A = A.sibling;
                }
                M.type === q ? (U = ol(M.props.children, C.mode, U, M.key), U.return = C, C = U) : (U = Qi(M.type, M.key, M.props, null, C.mode, U), Ba(U, M), U.return = C, C = U);
              }
              return d(C);
            case H:
              t: {
                for ($ = M.key; A !== null; ) {
                  if (A.key === $) if (A.tag === 4 && A.stateNode.containerInfo === M.containerInfo && A.stateNode.implementation === M.implementation) {
                    n(C, A.sibling), U = u(A, M.children || []), U.return = C, C = U;
                    break t;
                  } else {
                    n(C, A);
                    break;
                  }
                  else e(C, A);
                  A = A.sibling;
                }
                U = kr(M, C.mode, U), U.return = C, C = U;
              }
              return d(C);
            case ot:
              return M = ml(M), _t(C, A, M, U);
          }
          if (Q(M)) return J(C, A, M, U);
          if (K(M)) {
            if ($ = K(M), typeof $ != "function") throw Error(c(150));
            return M = $.call(M), et(C, A, M, U);
          }
          if (typeof M.then == "function") return _t(C, A, Wi(M), U);
          if (M.$$typeof === Z) return _t(C, A, Ki(C, M), U);
          $i(C, M);
        }
        return typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint" ? (M = "" + M, A !== null && A.tag === 6 ? (n(C, A.sibling), U = u(A, M), U.return = C, C = U) : (n(C, A), U = wr(M, C.mode, U), U.return = C, C = U), d(C)) : n(C, A);
      }
      return function(C, A, M, U) {
        try {
          Ra = 0;
          var $ = _t(C, A, M, U);
          return Kl = null, $;
        } catch (F) {
          if (F === Zl || F === Fi) throw F;
          var Et = Me(29, F, null, C.mode);
          return Et.lanes = U, Et.return = C, Et;
        }
      };
    }
    var gl = vf(true), bf = vf(false), Rn = false;
    function Qr(t) {
      t.updateQueue = {
        baseState: t.memoizedState,
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
    function Gr(t, e) {
      t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        callbacks: null
      });
    }
    function Bn(t) {
      return {
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
      };
    }
    function Ln(t, e, n) {
      var a = t.updateQueue;
      if (a === null) return null;
      if (a = a.shared, (At & 2) !== 0) {
        var u = a.pending;
        return u === null ? e.next = e : (e.next = u.next, u.next = e), a.pending = e, e = Xi(t), ef(t, null, n), e;
      }
      return Vi(t, a, e, n), Xi(t);
    }
    function La(t, e, n) {
      if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
        var a = e.lanes;
        a &= t.pendingLanes, n |= a, e.lanes = n, os(t, n);
      }
    }
    function Zr(t, e) {
      var n = t.updateQueue, a = t.alternate;
      if (a !== null && (a = a.updateQueue, n === a)) {
        var u = null, o = null;
        if (n = n.firstBaseUpdate, n !== null) {
          do {
            var d = {
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: null,
              next: null
            };
            o === null ? u = o = d : o = o.next = d, n = n.next;
          } while (n !== null);
          o === null ? u = o = e : o = o.next = e;
        } else u = o = e;
        n = {
          baseState: a.baseState,
          firstBaseUpdate: u,
          lastBaseUpdate: o,
          shared: a.shared,
          callbacks: a.callbacks
        }, t.updateQueue = n;
        return;
      }
      t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e;
    }
    var Kr = false;
    function Ha() {
      if (Kr) {
        var t = Gl;
        if (t !== null) throw t;
      }
    }
    function qa(t, e, n, a) {
      Kr = false;
      var u = t.updateQueue;
      Rn = false;
      var o = u.firstBaseUpdate, d = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var T = p, N = T.next;
        T.next = null, d === null ? o = N : d.next = N, d = T;
        var _ = t.alternate;
        _ !== null && (_ = _.updateQueue, p = _.lastBaseUpdate, p !== d && (p === null ? _.firstBaseUpdate = N : p.next = N, _.lastBaseUpdate = T));
      }
      if (o !== null) {
        var R = u.baseState;
        d = 0, _ = N = T = null, p = o;
        do {
          var D = p.lane & -536870913, w = D !== p.lane;
          if (w ? (pt & D) === D : (a & D) === D) {
            D !== 0 && D === Ql && (Kr = true), _ !== null && (_ = _.next = {
              lane: 0,
              tag: p.tag,
              payload: p.payload,
              callback: null,
              next: null
            });
            t: {
              var J = t, et = p;
              D = e;
              var _t = n;
              switch (et.tag) {
                case 1:
                  if (J = et.payload, typeof J == "function") {
                    R = J.call(_t, R, D);
                    break t;
                  }
                  R = J;
                  break t;
                case 3:
                  J.flags = J.flags & -65537 | 128;
                case 0:
                  if (J = et.payload, D = typeof J == "function" ? J.call(_t, R, D) : J, D == null) break t;
                  R = v({}, R, D);
                  break t;
                case 2:
                  Rn = true;
              }
            }
            D = p.callback, D !== null && (t.flags |= 64, w && (t.flags |= 8192), w = u.callbacks, w === null ? u.callbacks = [
              D
            ] : w.push(D));
          } else w = {
            lane: D,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null
          }, _ === null ? (N = _ = w, T = R) : _ = _.next = w, d |= D;
          if (p = p.next, p === null) {
            if (p = u.shared.pending, p === null) break;
            w = p, p = w.next, w.next = null, u.lastBaseUpdate = w, u.shared.pending = null;
          }
        } while (true);
        _ === null && (T = R), u.baseState = T, u.firstBaseUpdate = N, u.lastBaseUpdate = _, o === null && (u.shared.lanes = 0), Xn |= d, t.lanes = d, t.memoizedState = R;
      }
    }
    function xf(t, e) {
      if (typeof t != "function") throw Error(c(191, t));
      t.call(e);
    }
    function Sf(t, e) {
      var n = t.callbacks;
      if (n !== null) for (t.callbacks = null, t = 0; t < n.length; t++) xf(n[t], e);
    }
    var Jl = jt(null), Pi = jt(0);
    function Ef(t, e) {
      t = Cn, E(Pi, t), E(Jl, e), Cn = t | e.baseLanes;
    }
    function Jr() {
      E(Pi, Cn), E(Jl, Jl.current);
    }
    function Fr() {
      Cn = Pi.current, St(Jl), St(Pi);
    }
    var Ne = jt(null), Xe = null;
    function Hn(t) {
      var e = t.alternate;
      E(Gt, Gt.current & 1), E(Ne, t), Xe === null && (e === null || Jl.current !== null || e.memoizedState !== null) && (Xe = t);
    }
    function Ir(t) {
      E(Gt, Gt.current), E(Ne, t), Xe === null && (Xe = t);
    }
    function zf(t) {
      t.tag === 22 ? (E(Gt, Gt.current), E(Ne, t), Xe === null && (Xe = t)) : qn();
    }
    function qn() {
      E(Gt, Gt.current), E(Ne, Ne.current);
    }
    function De(t) {
      St(Ne), Xe === t && (Xe = null), St(Gt);
    }
    var Gt = jt(0);
    function tu(t) {
      for (var e = t; e !== null; ) {
        if (e.tag === 13) {
          var n = e.memoizedState;
          if (n !== null && (n = n.dehydrated, n === null || no(n) || lo(n))) return e;
        } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
          if ((e.flags & 128) !== 0) return e;
        } else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return null;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      return null;
    }
    var vn = 0, it = null, wt = null, Jt = null, eu = false, Fl = false, yl = false, nu = 0, Ya = 0, Il = null, vy = 0;
    function Xt() {
      throw Error(c(321));
    }
    function Wr(t, e) {
      if (e === null) return false;
      for (var n = 0; n < e.length && n < t.length; n++) if (!Ce(t[n], e[n])) return false;
      return true;
    }
    function $r(t, e, n, a, u, o) {
      return vn = o, it = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, O.H = t === null || t.memoizedState === null ? uh : dc, yl = false, o = n(a, u), yl = false, Fl && (o = Af(e, n, a, u)), Tf(t), o;
    }
    function Tf(t) {
      O.H = Qa;
      var e = wt !== null && wt.next !== null;
      if (vn = 0, Jt = wt = it = null, eu = false, Ya = 0, Il = null, e) throw Error(c(300));
      t === null || Ft || (t = t.dependencies, t !== null && Zi(t) && (Ft = true));
    }
    function Af(t, e, n, a) {
      it = t;
      var u = 0;
      do {
        if (Fl && (Il = null), Ya = 0, Fl = false, 25 <= u) throw Error(c(301));
        if (u += 1, Jt = wt = null, t.updateQueue != null) {
          var o = t.updateQueue;
          o.lastEffect = null, o.events = null, o.stores = null, o.memoCache != null && (o.memoCache.index = 0);
        }
        O.H = rh, o = e(n, a);
      } while (Fl);
      return o;
    }
    function by() {
      var t = O.H, e = t.useState()[0];
      return e = typeof e.then == "function" ? Va(e) : e, t = t.useState()[0], (wt !== null ? wt.memoizedState : null) !== t && (it.flags |= 1024), e;
    }
    function Pr() {
      var t = nu !== 0;
      return nu = 0, t;
    }
    function tc(t, e, n) {
      e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
    }
    function ec(t) {
      if (eu) {
        for (t = t.memoizedState; t !== null; ) {
          var e = t.queue;
          e !== null && (e.pending = null), t = t.next;
        }
        eu = false;
      }
      vn = 0, Jt = wt = it = null, Fl = false, Ya = nu = 0, Il = null;
    }
    function fe() {
      var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Jt === null ? it.memoizedState = Jt = t : Jt = Jt.next = t, Jt;
    }
    function Zt() {
      if (wt === null) {
        var t = it.alternate;
        t = t !== null ? t.memoizedState : null;
      } else t = wt.next;
      var e = Jt === null ? it.memoizedState : Jt.next;
      if (e !== null) Jt = e, wt = t;
      else {
        if (t === null) throw it.alternate === null ? Error(c(467)) : Error(c(310));
        wt = t, t = {
          memoizedState: wt.memoizedState,
          baseState: wt.baseState,
          baseQueue: wt.baseQueue,
          queue: wt.queue,
          next: null
        }, Jt === null ? it.memoizedState = Jt = t : Jt = Jt.next = t;
      }
      return Jt;
    }
    function lu() {
      return {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null
      };
    }
    function Va(t) {
      var e = Ya;
      return Ya += 1, Il === null && (Il = []), t = pf(Il, t, e), e = it, (Jt === null ? e.memoizedState : Jt.next) === null && (e = e.alternate, O.H = e === null || e.memoizedState === null ? uh : dc), t;
    }
    function au(t) {
      if (t !== null && typeof t == "object") {
        if (typeof t.then == "function") return Va(t);
        if (t.$$typeof === Z) return ie(t);
      }
      throw Error(c(438, String(t)));
    }
    function nc(t) {
      var e = null, n = it.updateQueue;
      if (n !== null && (e = n.memoCache), e == null) {
        var a = it.alternate;
        a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
          data: a.data.map(function(u) {
            return u.slice();
          }),
          index: 0
        })));
      }
      if (e == null && (e = {
        data: [],
        index: 0
      }), n === null && (n = lu(), it.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0) for (n = e.data[e.index] = Array(t), a = 0; a < t; a++) n[a] = xt;
      return e.index++, n;
    }
    function bn(t, e) {
      return typeof e == "function" ? e(t) : e;
    }
    function iu(t) {
      var e = Zt();
      return lc(e, wt, t);
    }
    function lc(t, e, n) {
      var a = t.queue;
      if (a === null) throw Error(c(311));
      a.lastRenderedReducer = n;
      var u = t.baseQueue, o = a.pending;
      if (o !== null) {
        if (u !== null) {
          var d = u.next;
          u.next = o.next, o.next = d;
        }
        e.baseQueue = u = o, a.pending = null;
      }
      if (o = t.baseState, u === null) t.memoizedState = o;
      else {
        e = u.next;
        var p = d = null, T = null, N = e, _ = false;
        do {
          var R = N.lane & -536870913;
          if (R !== N.lane ? (pt & R) === R : (vn & R) === R) {
            var D = N.revertLane;
            if (D === 0) T !== null && (T = T.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null
            }), R === Ql && (_ = true);
            else if ((vn & D) === D) {
              N = N.next, D === Ql && (_ = true);
              continue;
            } else R = {
              lane: 0,
              revertLane: N.revertLane,
              gesture: null,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null
            }, T === null ? (p = T = R, d = o) : T = T.next = R, it.lanes |= D, Xn |= D;
            R = N.action, yl && n(o, R), o = N.hasEagerState ? N.eagerState : n(o, R);
          } else D = {
            lane: R,
            revertLane: N.revertLane,
            gesture: N.gesture,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null
          }, T === null ? (p = T = D, d = o) : T = T.next = D, it.lanes |= R, Xn |= R;
          N = N.next;
        } while (N !== null && N !== e);
        if (T === null ? d = o : T.next = p, !Ce(o, t.memoizedState) && (Ft = true, _ && (n = Gl, n !== null))) throw n;
        t.memoizedState = o, t.baseState = d, t.baseQueue = T, a.lastRenderedState = o;
      }
      return u === null && (a.lanes = 0), [
        t.memoizedState,
        a.dispatch
      ];
    }
    function ac(t) {
      var e = Zt(), n = e.queue;
      if (n === null) throw Error(c(311));
      n.lastRenderedReducer = t;
      var a = n.dispatch, u = n.pending, o = e.memoizedState;
      if (u !== null) {
        n.pending = null;
        var d = u = u.next;
        do
          o = t(o, d.action), d = d.next;
        while (d !== u);
        Ce(o, e.memoizedState) || (Ft = true), e.memoizedState = o, e.baseQueue === null && (e.baseState = o), n.lastRenderedState = o;
      }
      return [
        o,
        a
      ];
    }
    function Cf(t, e, n) {
      var a = it, u = Zt(), o = vt;
      if (o) {
        if (n === void 0) throw Error(c(407));
        n = n();
      } else n = e();
      var d = !Ce((wt || u).memoizedState, n);
      if (d && (u.memoizedState = n, Ft = true), u = u.queue, rc(Df.bind(null, a, u, t), [
        t
      ]), u.getSnapshot !== e || d || Jt !== null && Jt.memoizedState.tag & 1) {
        if (a.flags |= 2048, Wl(9, {
          destroy: void 0
        }, Nf.bind(null, a, u, n, e), null), Rt === null) throw Error(c(349));
        o || (vn & 127) !== 0 || Mf(a, e, n);
      }
      return n;
    }
    function Mf(t, e, n) {
      t.flags |= 16384, t = {
        getSnapshot: e,
        value: n
      }, e = it.updateQueue, e === null ? (e = lu(), it.updateQueue = e, e.stores = [
        t
      ]) : (n = e.stores, n === null ? e.stores = [
        t
      ] : n.push(t));
    }
    function Nf(t, e, n, a) {
      e.value = n, e.getSnapshot = a, Of(e) && wf(t);
    }
    function Df(t, e, n) {
      return n(function() {
        Of(e) && wf(t);
      });
    }
    function Of(t) {
      var e = t.getSnapshot;
      t = t.value;
      try {
        var n = e();
        return !Ce(t, n);
      } catch {
        return true;
      }
    }
    function wf(t) {
      var e = cl(t, 2);
      e !== null && be(e, t, 2);
    }
    function ic(t) {
      var e = fe();
      if (typeof t == "function") {
        var n = t;
        if (t = n(), yl) {
          he(true);
          try {
            n();
          } finally {
            he(false);
          }
        }
      }
      return e.memoizedState = e.baseState = t, e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: bn,
        lastRenderedState: t
      }, e;
    }
    function kf(t, e, n, a) {
      return t.baseState = n, lc(t, wt, typeof a == "function" ? a : bn);
    }
    function xy(t, e, n, a, u) {
      if (cu(t)) throw Error(c(485));
      if (t = e.action, t !== null) {
        var o = {
          payload: u,
          action: t,
          next: null,
          isTransition: true,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(d) {
            o.listeners.push(d);
          }
        };
        O.T !== null ? n(true) : o.isTransition = false, a(o), n = e.pending, n === null ? (o.next = e.pending = o, _f(e, o)) : (o.next = n.next, e.pending = n.next = o);
      }
    }
    function _f(t, e) {
      var n = e.action, a = e.payload, u = t.state;
      if (e.isTransition) {
        var o = O.T, d = {};
        O.T = d;
        try {
          var p = n(u, a), T = O.S;
          T !== null && T(d, p), jf(t, e, p);
        } catch (N) {
          uc(t, e, N);
        } finally {
          o !== null && d.types !== null && (o.types = d.types), O.T = o;
        }
      } else try {
        o = n(u, a), jf(t, e, o);
      } catch (N) {
        uc(t, e, N);
      }
    }
    function jf(t, e, n) {
      n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(a) {
        Uf(t, e, a);
      }, function(a) {
        return uc(t, e, a);
      }) : Uf(t, e, n);
    }
    function Uf(t, e, n) {
      e.status = "fulfilled", e.value = n, Rf(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, _f(t, n)));
    }
    function uc(t, e, n) {
      var a = t.pending;
      if (t.pending = null, a !== null) {
        a = a.next;
        do
          e.status = "rejected", e.reason = n, Rf(e), e = e.next;
        while (e !== a);
      }
      t.action = null;
    }
    function Rf(t) {
      t = t.listeners;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
    function Bf(t, e) {
      return e;
    }
    function Lf(t, e) {
      if (vt) {
        var n = Rt.formState;
        if (n !== null) {
          t: {
            var a = it;
            if (vt) {
              if (qt) {
                e: {
                  for (var u = qt, o = Ve; u.nodeType !== 8; ) {
                    if (!o) {
                      u = null;
                      break e;
                    }
                    if (u = Qe(u.nextSibling), u === null) {
                      u = null;
                      break e;
                    }
                  }
                  o = u.data, u = o === "F!" || o === "F" ? u : null;
                }
                if (u) {
                  qt = Qe(u.nextSibling), a = u.data === "F!";
                  break t;
                }
              }
              jn(a);
            }
            a = false;
          }
          a && (e = n[0]);
        }
      }
      return n = fe(), n.memoizedState = n.baseState = e, a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Bf,
        lastRenderedState: e
      }, n.queue = a, n = lh.bind(null, it, a), a.dispatch = n, a = ic(false), o = hc.bind(null, it, false, a.queue), a = fe(), u = {
        state: e,
        dispatch: null,
        action: t,
        pending: null
      }, a.queue = u, n = xy.bind(null, it, u, o, n), u.dispatch = n, a.memoizedState = t, [
        e,
        n,
        false
      ];
    }
    function Hf(t) {
      var e = Zt();
      return qf(e, wt, t);
    }
    function qf(t, e, n) {
      if (e = lc(t, e, Bf)[0], t = iu(bn)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
        var a = Va(e);
      } catch (d) {
        throw d === Zl ? Fi : d;
      }
      else a = e;
      e = Zt();
      var u = e.queue, o = u.dispatch;
      return n !== e.memoizedState && (it.flags |= 2048, Wl(9, {
        destroy: void 0
      }, Sy.bind(null, u, n), null)), [
        a,
        o,
        t
      ];
    }
    function Sy(t, e) {
      t.action = e;
    }
    function Yf(t) {
      var e = Zt(), n = wt;
      if (n !== null) return qf(e, n, t);
      Zt(), e = e.memoizedState, n = Zt();
      var a = n.queue.dispatch;
      return n.memoizedState = t, [
        e,
        a,
        false
      ];
    }
    function Wl(t, e, n, a) {
      return t = {
        tag: t,
        create: n,
        deps: a,
        inst: e,
        next: null
      }, e = it.updateQueue, e === null && (e = lu(), it.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (a = n.next, n.next = t, t.next = a, e.lastEffect = t), t;
    }
    function Vf() {
      return Zt().memoizedState;
    }
    function uu(t, e, n, a) {
      var u = fe();
      it.flags |= t, u.memoizedState = Wl(1 | e, {
        destroy: void 0
      }, n, a === void 0 ? null : a);
    }
    function ru(t, e, n, a) {
      var u = Zt();
      a = a === void 0 ? null : a;
      var o = u.memoizedState.inst;
      wt !== null && a !== null && Wr(a, wt.memoizedState.deps) ? u.memoizedState = Wl(e, o, n, a) : (it.flags |= t, u.memoizedState = Wl(1 | e, o, n, a));
    }
    function Xf(t, e) {
      uu(8390656, 8, t, e);
    }
    function rc(t, e) {
      ru(2048, 8, t, e);
    }
    function Ey(t) {
      it.flags |= 4;
      var e = it.updateQueue;
      if (e === null) e = lu(), it.updateQueue = e, e.events = [
        t
      ];
      else {
        var n = e.events;
        n === null ? e.events = [
          t
        ] : n.push(t);
      }
    }
    function Qf(t) {
      var e = Zt().memoizedState;
      return Ey({
        ref: e,
        nextImpl: t
      }), function() {
        if ((At & 2) !== 0) throw Error(c(440));
        return e.impl.apply(void 0, arguments);
      };
    }
    function Gf(t, e) {
      return ru(4, 2, t, e);
    }
    function Zf(t, e) {
      return ru(4, 4, t, e);
    }
    function Kf(t, e) {
      if (typeof e == "function") {
        t = t();
        var n = e(t);
        return function() {
          typeof n == "function" ? n() : e(null);
        };
      }
      if (e != null) return t = t(), e.current = t, function() {
        e.current = null;
      };
    }
    function Jf(t, e, n) {
      n = n != null ? n.concat([
        t
      ]) : null, ru(4, 4, Kf.bind(null, e, t), n);
    }
    function cc() {
    }
    function Ff(t, e) {
      var n = Zt();
      e = e === void 0 ? null : e;
      var a = n.memoizedState;
      return e !== null && Wr(e, a[1]) ? a[0] : (n.memoizedState = [
        t,
        e
      ], t);
    }
    function If(t, e) {
      var n = Zt();
      e = e === void 0 ? null : e;
      var a = n.memoizedState;
      if (e !== null && Wr(e, a[1])) return a[0];
      if (a = t(), yl) {
        he(true);
        try {
          t();
        } finally {
          he(false);
        }
      }
      return n.memoizedState = [
        a,
        e
      ], a;
    }
    function oc(t, e, n) {
      return n === void 0 || (vn & 1073741824) !== 0 && (pt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n, t = Wh(), it.lanes |= t, Xn |= t, n);
    }
    function Wf(t, e, n, a) {
      return Ce(n, e) ? n : Jl.current !== null ? (t = oc(t, n, a), Ce(t, e) || (Ft = true), t) : (vn & 42) === 0 || (vn & 1073741824) !== 0 && (pt & 261930) === 0 ? (Ft = true, t.memoizedState = n) : (t = Wh(), it.lanes |= t, Xn |= t, e);
    }
    function $f(t, e, n, a, u) {
      var o = V.p;
      V.p = o !== 0 && 8 > o ? o : 8;
      var d = O.T, p = {};
      O.T = p, hc(t, false, e, n);
      try {
        var T = u(), N = O.S;
        if (N !== null && N(p, T), T !== null && typeof T == "object" && typeof T.then == "function") {
          var _ = yy(T, a);
          Xa(t, e, _, ke(t));
        } else Xa(t, e, a, ke(t));
      } catch (R) {
        Xa(t, e, {
          then: function() {
          },
          status: "rejected",
          reason: R
        }, ke());
      } finally {
        V.p = o, d !== null && p.types !== null && (d.types = p.types), O.T = d;
      }
    }
    function zy() {
    }
    function sc(t, e, n, a) {
      if (t.tag !== 5) throw Error(c(476));
      var u = Pf(t).queue;
      $f(t, u, e, W, n === null ? zy : function() {
        return th(t), n(a);
      });
    }
    function Pf(t) {
      var e = t.memoizedState;
      if (e !== null) return e;
      e = {
        memoizedState: W,
        baseState: W,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: bn,
          lastRenderedState: W
        },
        next: null
      };
      var n = {};
      return e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: bn,
          lastRenderedState: n
        },
        next: null
      }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
    }
    function th(t) {
      var e = Pf(t);
      e.next === null && (e = t.alternate.memoizedState), Xa(t, e.next.queue, {}, ke());
    }
    function fc() {
      return ie(ui);
    }
    function eh() {
      return Zt().memoizedState;
    }
    function nh() {
      return Zt().memoizedState;
    }
    function Ty(t) {
      for (var e = t.return; e !== null; ) {
        switch (e.tag) {
          case 24:
          case 3:
            var n = ke();
            t = Bn(n);
            var a = Ln(e, t, n);
            a !== null && (be(a, e, n), La(a, e, n)), e = {
              cache: qr()
            }, t.payload = e;
            return;
        }
        e = e.return;
      }
    }
    function Ay(t, e, n) {
      var a = ke();
      n = {
        lane: a,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, cu(t) ? ah(e, n) : (n = Dr(t, e, n, a), n !== null && (be(n, t, a), ih(n, e, a)));
    }
    function lh(t, e, n) {
      var a = ke();
      Xa(t, e, n, a);
    }
    function Xa(t, e, n, a) {
      var u = {
        lane: a,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (cu(t)) ah(e, u);
      else {
        var o = t.alternate;
        if (t.lanes === 0 && (o === null || o.lanes === 0) && (o = e.lastRenderedReducer, o !== null)) try {
          var d = e.lastRenderedState, p = o(d, n);
          if (u.hasEagerState = true, u.eagerState = p, Ce(p, d)) return Vi(t, e, u, 0), Rt === null && Yi(), false;
        } catch {
        }
        if (n = Dr(t, e, u, a), n !== null) return be(n, t, a), ih(n, e, a), true;
      }
      return false;
    }
    function hc(t, e, n, a) {
      if (a = {
        lane: 2,
        revertLane: Qc(),
        gesture: null,
        action: a,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, cu(t)) {
        if (e) throw Error(c(479));
      } else e = Dr(t, n, a, 2), e !== null && be(e, t, 2);
    }
    function cu(t) {
      var e = t.alternate;
      return t === it || e !== null && e === it;
    }
    function ah(t, e) {
      Fl = eu = true;
      var n = t.pending;
      n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
    }
    function ih(t, e, n) {
      if ((n & 4194048) !== 0) {
        var a = e.lanes;
        a &= t.pendingLanes, n |= a, e.lanes = n, os(t, n);
      }
    }
    var Qa = {
      readContext: ie,
      use: au,
      useCallback: Xt,
      useContext: Xt,
      useEffect: Xt,
      useImperativeHandle: Xt,
      useLayoutEffect: Xt,
      useInsertionEffect: Xt,
      useMemo: Xt,
      useReducer: Xt,
      useRef: Xt,
      useState: Xt,
      useDebugValue: Xt,
      useDeferredValue: Xt,
      useTransition: Xt,
      useSyncExternalStore: Xt,
      useId: Xt,
      useHostTransitionStatus: Xt,
      useFormState: Xt,
      useActionState: Xt,
      useOptimistic: Xt,
      useMemoCache: Xt,
      useCacheRefresh: Xt
    };
    Qa.useEffectEvent = Xt;
    var uh = {
      readContext: ie,
      use: au,
      useCallback: function(t, e) {
        return fe().memoizedState = [
          t,
          e === void 0 ? null : e
        ], t;
      },
      useContext: ie,
      useEffect: Xf,
      useImperativeHandle: function(t, e, n) {
        n = n != null ? n.concat([
          t
        ]) : null, uu(4194308, 4, Kf.bind(null, e, t), n);
      },
      useLayoutEffect: function(t, e) {
        return uu(4194308, 4, t, e);
      },
      useInsertionEffect: function(t, e) {
        uu(4, 2, t, e);
      },
      useMemo: function(t, e) {
        var n = fe();
        e = e === void 0 ? null : e;
        var a = t();
        if (yl) {
          he(true);
          try {
            t();
          } finally {
            he(false);
          }
        }
        return n.memoizedState = [
          a,
          e
        ], a;
      },
      useReducer: function(t, e, n) {
        var a = fe();
        if (n !== void 0) {
          var u = n(e);
          if (yl) {
            he(true);
            try {
              n(e);
            } finally {
              he(false);
            }
          }
        } else u = e;
        return a.memoizedState = a.baseState = u, t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: u
        }, a.queue = t, t = t.dispatch = Ay.bind(null, it, t), [
          a.memoizedState,
          t
        ];
      },
      useRef: function(t) {
        var e = fe();
        return t = {
          current: t
        }, e.memoizedState = t;
      },
      useState: function(t) {
        t = ic(t);
        var e = t.queue, n = lh.bind(null, it, e);
        return e.dispatch = n, [
          t.memoizedState,
          n
        ];
      },
      useDebugValue: cc,
      useDeferredValue: function(t, e) {
        var n = fe();
        return oc(n, t, e);
      },
      useTransition: function() {
        var t = ic(false);
        return t = $f.bind(null, it, t.queue, true, false), fe().memoizedState = t, [
          false,
          t
        ];
      },
      useSyncExternalStore: function(t, e, n) {
        var a = it, u = fe();
        if (vt) {
          if (n === void 0) throw Error(c(407));
          n = n();
        } else {
          if (n = e(), Rt === null) throw Error(c(349));
          (pt & 127) !== 0 || Mf(a, e, n);
        }
        u.memoizedState = n;
        var o = {
          value: n,
          getSnapshot: e
        };
        return u.queue = o, Xf(Df.bind(null, a, o, t), [
          t
        ]), a.flags |= 2048, Wl(9, {
          destroy: void 0
        }, Nf.bind(null, a, o, n, e), null), n;
      },
      useId: function() {
        var t = fe(), e = Rt.identifierPrefix;
        if (vt) {
          var n = en, a = tn;
          n = (a & ~(1 << 32 - Ut(a) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = nu++, 0 < n && (e += "H" + n.toString(32)), e += "_";
        } else n = vy++, e = "_" + e + "r_" + n.toString(32) + "_";
        return t.memoizedState = e;
      },
      useHostTransitionStatus: fc,
      useFormState: Lf,
      useActionState: Lf,
      useOptimistic: function(t) {
        var e = fe();
        e.memoizedState = e.baseState = t;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return e.queue = n, e = hc.bind(null, it, true, n), n.dispatch = e, [
          t,
          e
        ];
      },
      useMemoCache: nc,
      useCacheRefresh: function() {
        return fe().memoizedState = Ty.bind(null, it);
      },
      useEffectEvent: function(t) {
        var e = fe(), n = {
          impl: t
        };
        return e.memoizedState = n, function() {
          if ((At & 2) !== 0) throw Error(c(440));
          return n.impl.apply(void 0, arguments);
        };
      }
    }, dc = {
      readContext: ie,
      use: au,
      useCallback: Ff,
      useContext: ie,
      useEffect: rc,
      useImperativeHandle: Jf,
      useInsertionEffect: Gf,
      useLayoutEffect: Zf,
      useMemo: If,
      useReducer: iu,
      useRef: Vf,
      useState: function() {
        return iu(bn);
      },
      useDebugValue: cc,
      useDeferredValue: function(t, e) {
        var n = Zt();
        return Wf(n, wt.memoizedState, t, e);
      },
      useTransition: function() {
        var t = iu(bn)[0], e = Zt().memoizedState;
        return [
          typeof t == "boolean" ? t : Va(t),
          e
        ];
      },
      useSyncExternalStore: Cf,
      useId: eh,
      useHostTransitionStatus: fc,
      useFormState: Hf,
      useActionState: Hf,
      useOptimistic: function(t, e) {
        var n = Zt();
        return kf(n, wt, t, e);
      },
      useMemoCache: nc,
      useCacheRefresh: nh
    };
    dc.useEffectEvent = Qf;
    var rh = {
      readContext: ie,
      use: au,
      useCallback: Ff,
      useContext: ie,
      useEffect: rc,
      useImperativeHandle: Jf,
      useInsertionEffect: Gf,
      useLayoutEffect: Zf,
      useMemo: If,
      useReducer: ac,
      useRef: Vf,
      useState: function() {
        return ac(bn);
      },
      useDebugValue: cc,
      useDeferredValue: function(t, e) {
        var n = Zt();
        return wt === null ? oc(n, t, e) : Wf(n, wt.memoizedState, t, e);
      },
      useTransition: function() {
        var t = ac(bn)[0], e = Zt().memoizedState;
        return [
          typeof t == "boolean" ? t : Va(t),
          e
        ];
      },
      useSyncExternalStore: Cf,
      useId: eh,
      useHostTransitionStatus: fc,
      useFormState: Yf,
      useActionState: Yf,
      useOptimistic: function(t, e) {
        var n = Zt();
        return wt !== null ? kf(n, wt, t, e) : (n.baseState = t, [
          t,
          n.queue.dispatch
        ]);
      },
      useMemoCache: nc,
      useCacheRefresh: nh
    };
    rh.useEffectEvent = Qf;
    function mc(t, e, n, a) {
      e = t.memoizedState, n = n(a, e), n = n == null ? e : v({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
    }
    var pc = {
      enqueueSetState: function(t, e, n) {
        t = t._reactInternals;
        var a = ke(), u = Bn(a);
        u.payload = e, n != null && (u.callback = n), e = Ln(t, u, a), e !== null && (be(e, t, a), La(e, t, a));
      },
      enqueueReplaceState: function(t, e, n) {
        t = t._reactInternals;
        var a = ke(), u = Bn(a);
        u.tag = 1, u.payload = e, n != null && (u.callback = n), e = Ln(t, u, a), e !== null && (be(e, t, a), La(e, t, a));
      },
      enqueueForceUpdate: function(t, e) {
        t = t._reactInternals;
        var n = ke(), a = Bn(n);
        a.tag = 2, e != null && (a.callback = e), e = Ln(t, a, n), e !== null && (be(e, t, n), La(e, t, n));
      }
    };
    function ch(t, e, n, a, u, o, d) {
      return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, o, d) : e.prototype && e.prototype.isPureReactComponent ? !Oa(n, a) || !Oa(u, o) : true;
    }
    function oh(t, e, n, a) {
      t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, a), e.state !== t && pc.enqueueReplaceState(e, e.state, null);
    }
    function vl(t, e) {
      var n = e;
      if ("ref" in e) {
        n = {};
        for (var a in e) a !== "ref" && (n[a] = e[a]);
      }
      if (t = t.defaultProps) {
        n === e && (n = v({}, n));
        for (var u in t) n[u] === void 0 && (n[u] = t[u]);
      }
      return n;
    }
    function sh(t) {
      qi(t);
    }
    function fh(t) {
      console.error(t);
    }
    function hh(t) {
      qi(t);
    }
    function ou(t, e) {
      try {
        var n = t.onUncaughtError;
        n(e.value, {
          componentStack: e.stack
        });
      } catch (a) {
        setTimeout(function() {
          throw a;
        });
      }
    }
    function dh(t, e, n) {
      try {
        var a = t.onCaughtError;
        a(n.value, {
          componentStack: n.stack,
          errorBoundary: e.tag === 1 ? e.stateNode : null
        });
      } catch (u) {
        setTimeout(function() {
          throw u;
        });
      }
    }
    function gc(t, e, n) {
      return n = Bn(n), n.tag = 3, n.payload = {
        element: null
      }, n.callback = function() {
        ou(t, e);
      }, n;
    }
    function mh(t) {
      return t = Bn(t), t.tag = 3, t;
    }
    function ph(t, e, n, a) {
      var u = n.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var o = a.value;
        t.payload = function() {
          return u(o);
        }, t.callback = function() {
          dh(e, n, a);
        };
      }
      var d = n.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (t.callback = function() {
        dh(e, n, a), typeof u != "function" && (Qn === null ? Qn = /* @__PURE__ */ new Set([
          this
        ]) : Qn.add(this));
        var p = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: p !== null ? p : ""
        });
      });
    }
    function Cy(t, e, n, a, u) {
      if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
        if (e = n.alternate, e !== null && Xl(e, n, u, true), n = Ne.current, n !== null) {
          switch (n.tag) {
            case 31:
            case 13:
              return Xe === null ? Su() : n.alternate === null && Qt === 0 && (Qt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = u, a === Ii ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([
                a
              ]) : e.add(a), Yc(t, a, u)), false;
            case 22:
              return n.flags |= 65536, a === Ii ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([
                  a
                ])
              }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([
                a
              ]) : n.add(a)), Yc(t, a, u)), false;
          }
          throw Error(c(435, n.tag));
        }
        return Yc(t, a, u), Su(), false;
      }
      if (vt) return e = Ne.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = u, a !== Ur && (t = Error(c(422), {
        cause: a
      }), _a(He(t, n)))) : (a !== Ur && (e = Error(c(423), {
        cause: a
      }), _a(He(e, n))), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, a = He(a, n), u = gc(t.stateNode, a, u), Zr(t, u), Qt !== 4 && (Qt = 2)), false;
      var o = Error(c(520), {
        cause: a
      });
      if (o = He(o, n), $a === null ? $a = [
        o
      ] : $a.push(o), Qt !== 4 && (Qt = 2), e === null) return true;
      a = He(a, n), n = e;
      do {
        switch (n.tag) {
          case 3:
            return n.flags |= 65536, t = u & -u, n.lanes |= t, t = gc(n.stateNode, a, t), Zr(n, t), false;
          case 1:
            if (e = n.type, o = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || o !== null && typeof o.componentDidCatch == "function" && (Qn === null || !Qn.has(o)))) return n.flags |= 65536, u &= -u, n.lanes |= u, u = mh(u), ph(u, t, n, a), Zr(n, u), false;
        }
        n = n.return;
      } while (n !== null);
      return false;
    }
    var yc = Error(c(461)), Ft = false;
    function ue(t, e, n, a) {
      e.child = t === null ? bf(e, null, n, a) : gl(e, t.child, n, a);
    }
    function gh(t, e, n, a, u) {
      n = n.render;
      var o = e.ref;
      if ("ref" in a) {
        var d = {};
        for (var p in a) p !== "ref" && (d[p] = a[p]);
      } else d = a;
      return hl(e), a = $r(t, e, n, d, o, u), p = Pr(), t !== null && !Ft ? (tc(t, e, u), xn(t, e, u)) : (vt && p && _r(e), e.flags |= 1, ue(t, e, a, u), e.child);
    }
    function yh(t, e, n, a, u) {
      if (t === null) {
        var o = n.type;
        return typeof o == "function" && !Or(o) && o.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = o, vh(t, e, o, a, u)) : (t = Qi(n.type, null, a, e, e.mode, u), t.ref = e.ref, t.return = e, e.child = t);
      }
      if (o = t.child, !Ac(t, u)) {
        var d = o.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Oa, n(d, a) && t.ref === e.ref) return xn(t, e, u);
      }
      return e.flags |= 1, t = mn(o, a), t.ref = e.ref, t.return = e, e.child = t;
    }
    function vh(t, e, n, a, u) {
      if (t !== null) {
        var o = t.memoizedProps;
        if (Oa(o, a) && t.ref === e.ref) if (Ft = false, e.pendingProps = a = o, Ac(t, u)) (t.flags & 131072) !== 0 && (Ft = true);
        else return e.lanes = t.lanes, xn(t, e, u);
      }
      return vc(t, e, n, a, u);
    }
    function bh(t, e, n, a) {
      var u = a.children, o = t !== null ? t.memoizedState : null;
      if (t === null && e.stateNode === null && (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), a.mode === "hidden") {
        if ((e.flags & 128) !== 0) {
          if (o = o !== null ? o.baseLanes | n : n, t !== null) {
            for (a = e.child = t.child, u = 0; a !== null; ) u = u | a.lanes | a.childLanes, a = a.sibling;
            a = u & ~o;
          } else a = 0, e.child = null;
          return xh(t, e, o, n, a);
        }
        if ((n & 536870912) !== 0) e.memoizedState = {
          baseLanes: 0,
          cachePool: null
        }, t !== null && Ji(e, o !== null ? o.cachePool : null), o !== null ? Ef(e, o) : Jr(), zf(e);
        else return a = e.lanes = 536870912, xh(t, e, o !== null ? o.baseLanes | n : n, n, a);
      } else o !== null ? (Ji(e, o.cachePool), Ef(e, o), qn(), e.memoizedState = null) : (t !== null && Ji(e, null), Jr(), qn());
      return ue(t, e, u, n), e.child;
    }
    function Ga(t, e) {
      return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), e.sibling;
    }
    function xh(t, e, n, a, u) {
      var o = Vr();
      return o = o === null ? null : {
        parent: Kt._currentValue,
        pool: o
      }, e.memoizedState = {
        baseLanes: n,
        cachePool: o
      }, t !== null && Ji(e, null), Jr(), zf(e), t !== null && Xl(t, e, a, true), e.childLanes = u, null;
    }
    function su(t, e) {
      return e = hu({
        mode: e.mode,
        children: e.children
      }, t.mode), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function Sh(t, e, n) {
      return gl(e, t.child, null, n), t = su(e, e.pendingProps), t.flags |= 2, De(e), e.memoizedState = null, t;
    }
    function My(t, e, n) {
      var a = e.pendingProps, u = (e.flags & 128) !== 0;
      if (e.flags &= -129, t === null) {
        if (vt) {
          if (a.mode === "hidden") return t = su(e, a), e.lanes = 536870912, Ga(null, t);
          if (Ir(e), (t = qt) ? (t = _d(t, Ve), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
            dehydrated: t,
            treeContext: kn !== null ? {
              id: tn,
              overflow: en
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, n = lf(t), n.return = e, e.child = n, ae = e, qt = null)) : t = null, t === null) throw jn(e);
          return e.lanes = 536870912, null;
        }
        return su(e, a);
      }
      var o = t.memoizedState;
      if (o !== null) {
        var d = o.dehydrated;
        if (Ir(e), u) if (e.flags & 256) e.flags &= -257, e = Sh(t, e, n);
        else if (e.memoizedState !== null) e.child = t.child, e.flags |= 128, e = null;
        else throw Error(c(558));
        else if (Ft || Xl(t, e, n, false), u = (n & t.childLanes) !== 0, Ft || u) {
          if (a = Rt, a !== null && (d = ss(a, n), d !== 0 && d !== o.retryLane)) throw o.retryLane = d, cl(t, d), be(a, t, d), yc;
          Su(), e = Sh(t, e, n);
        } else t = o.treeContext, qt = Qe(d.nextSibling), ae = e, vt = true, _n = null, Ve = false, t !== null && rf(e, t), e = su(e, a), e.flags |= 4096;
        return e;
      }
      return t = mn(t.child, {
        mode: a.mode,
        children: a.children
      }), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function fu(t, e) {
      var n = e.ref;
      if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
      else {
        if (typeof n != "function" && typeof n != "object") throw Error(c(284));
        (t === null || t.ref !== n) && (e.flags |= 4194816);
      }
    }
    function vc(t, e, n, a, u) {
      return hl(e), n = $r(t, e, n, a, void 0, u), a = Pr(), t !== null && !Ft ? (tc(t, e, u), xn(t, e, u)) : (vt && a && _r(e), e.flags |= 1, ue(t, e, n, u), e.child);
    }
    function Eh(t, e, n, a, u, o) {
      return hl(e), e.updateQueue = null, n = Af(e, a, n, u), Tf(t), a = Pr(), t !== null && !Ft ? (tc(t, e, o), xn(t, e, o)) : (vt && a && _r(e), e.flags |= 1, ue(t, e, n, o), e.child);
    }
    function zh(t, e, n, a, u) {
      if (hl(e), e.stateNode === null) {
        var o = Hl, d = n.contextType;
        typeof d == "object" && d !== null && (o = ie(d)), o = new n(a, o), e.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, o.updater = pc, e.stateNode = o, o._reactInternals = e, o = e.stateNode, o.props = a, o.state = e.memoizedState, o.refs = {}, Qr(e), d = n.contextType, o.context = typeof d == "object" && d !== null ? ie(d) : Hl, o.state = e.memoizedState, d = n.getDerivedStateFromProps, typeof d == "function" && (mc(e, n, d, a), o.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (d = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), d !== o.state && pc.enqueueReplaceState(o, o.state, null), qa(e, a, o, u), Ha(), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308), a = true;
      } else if (t === null) {
        o = e.stateNode;
        var p = e.memoizedProps, T = vl(n, p);
        o.props = T;
        var N = o.context, _ = n.contextType;
        d = Hl, typeof _ == "object" && _ !== null && (d = ie(_));
        var R = n.getDerivedStateFromProps;
        _ = typeof R == "function" || typeof o.getSnapshotBeforeUpdate == "function", p = e.pendingProps !== p, _ || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (p || N !== d) && oh(e, o, a, d), Rn = false;
        var D = e.memoizedState;
        o.state = D, qa(e, a, o, u), Ha(), N = e.memoizedState, p || D !== N || Rn ? (typeof R == "function" && (mc(e, n, R, a), N = e.memoizedState), (T = Rn || ch(e, n, T, a, D, N, d)) ? (_ || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = N), o.props = a, o.state = N, o.context = d, a = T) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), a = false);
      } else {
        o = e.stateNode, Gr(t, e), d = e.memoizedProps, _ = vl(n, d), o.props = _, R = e.pendingProps, D = o.context, N = n.contextType, T = Hl, typeof N == "object" && N !== null && (T = ie(N)), p = n.getDerivedStateFromProps, (N = typeof p == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (d !== R || D !== T) && oh(e, o, a, T), Rn = false, D = e.memoizedState, o.state = D, qa(e, a, o, u), Ha();
        var w = e.memoizedState;
        d !== R || D !== w || Rn || t !== null && t.dependencies !== null && Zi(t.dependencies) ? (typeof p == "function" && (mc(e, n, p, a), w = e.memoizedState), (_ = Rn || ch(e, n, _, a, D, w, T) || t !== null && t.dependencies !== null && Zi(t.dependencies)) ? (N || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(a, w, T), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(a, w, T)), typeof o.componentDidUpdate == "function" && (e.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || d === t.memoizedProps && D === t.memoizedState || (e.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && D === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = w), o.props = a, o.state = w, o.context = T, a = _) : (typeof o.componentDidUpdate != "function" || d === t.memoizedProps && D === t.memoizedState || (e.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && D === t.memoizedState || (e.flags |= 1024), a = false);
      }
      return o = a, fu(t, e), a = (e.flags & 128) !== 0, o || a ? (o = e.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : o.render(), e.flags |= 1, t !== null && a ? (e.child = gl(e, t.child, null, u), e.child = gl(e, null, n, u)) : ue(t, e, n, u), e.memoizedState = o.state, t = e.child) : t = xn(t, e, u), t;
    }
    function Th(t, e, n, a) {
      return sl(), e.flags |= 256, ue(t, e, n, a), e.child;
    }
    var bc = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    };
    function xc(t) {
      return {
        baseLanes: t,
        cachePool: df()
      };
    }
    function Sc(t, e, n) {
      return t = t !== null ? t.childLanes & ~n : 0, e && (t |= we), t;
    }
    function Ah(t, e, n) {
      var a = e.pendingProps, u = false, o = (e.flags & 128) !== 0, d;
      if ((d = o) || (d = t !== null && t.memoizedState === null ? false : (Gt.current & 2) !== 0), d && (u = true, e.flags &= -129), d = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
        if (vt) {
          if (u ? Hn(e) : qn(), (t = qt) ? (t = _d(t, Ve), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
            dehydrated: t,
            treeContext: kn !== null ? {
              id: tn,
              overflow: en
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, n = lf(t), n.return = e, e.child = n, ae = e, qt = null)) : t = null, t === null) throw jn(e);
          return lo(t) ? e.lanes = 32 : e.lanes = 536870912, null;
        }
        var p = a.children;
        return a = a.fallback, u ? (qn(), u = e.mode, p = hu({
          mode: "hidden",
          children: p
        }, u), a = ol(a, u, n, null), p.return = e, a.return = e, p.sibling = a, e.child = p, a = e.child, a.memoizedState = xc(n), a.childLanes = Sc(t, d, n), e.memoizedState = bc, Ga(null, a)) : (Hn(e), Ec(e, p));
      }
      var T = t.memoizedState;
      if (T !== null && (p = T.dehydrated, p !== null)) {
        if (o) e.flags & 256 ? (Hn(e), e.flags &= -257, e = zc(t, e, n)) : e.memoizedState !== null ? (qn(), e.child = t.child, e.flags |= 128, e = null) : (qn(), p = a.fallback, u = e.mode, a = hu({
          mode: "visible",
          children: a.children
        }, u), p = ol(p, u, n, null), p.flags |= 2, a.return = e, p.return = e, a.sibling = p, e.child = a, gl(e, t.child, null, n), a = e.child, a.memoizedState = xc(n), a.childLanes = Sc(t, d, n), e.memoizedState = bc, e = Ga(null, a));
        else if (Hn(e), lo(p)) {
          if (d = p.nextSibling && p.nextSibling.dataset, d) var N = d.dgst;
          d = N, a = Error(c(419)), a.stack = "", a.digest = d, _a({
            value: a,
            source: null,
            stack: null
          }), e = zc(t, e, n);
        } else if (Ft || Xl(t, e, n, false), d = (n & t.childLanes) !== 0, Ft || d) {
          if (d = Rt, d !== null && (a = ss(d, n), a !== 0 && a !== T.retryLane)) throw T.retryLane = a, cl(t, a), be(d, t, a), yc;
          no(p) || Su(), e = zc(t, e, n);
        } else no(p) ? (e.flags |= 192, e.child = t.child, e = null) : (t = T.treeContext, qt = Qe(p.nextSibling), ae = e, vt = true, _n = null, Ve = false, t !== null && rf(e, t), e = Ec(e, a.children), e.flags |= 4096);
        return e;
      }
      return u ? (qn(), p = a.fallback, u = e.mode, T = t.child, N = T.sibling, a = mn(T, {
        mode: "hidden",
        children: a.children
      }), a.subtreeFlags = T.subtreeFlags & 65011712, N !== null ? p = mn(N, p) : (p = ol(p, u, n, null), p.flags |= 2), p.return = e, a.return = e, a.sibling = p, e.child = a, Ga(null, a), a = e.child, p = t.child.memoizedState, p === null ? p = xc(n) : (u = p.cachePool, u !== null ? (T = Kt._currentValue, u = u.parent !== T ? {
        parent: T,
        pool: T
      } : u) : u = df(), p = {
        baseLanes: p.baseLanes | n,
        cachePool: u
      }), a.memoizedState = p, a.childLanes = Sc(t, d, n), e.memoizedState = bc, Ga(t.child, a)) : (Hn(e), n = t.child, t = n.sibling, n = mn(n, {
        mode: "visible",
        children: a.children
      }), n.return = e, n.sibling = null, t !== null && (d = e.deletions, d === null ? (e.deletions = [
        t
      ], e.flags |= 16) : d.push(t)), e.child = n, e.memoizedState = null, n);
    }
    function Ec(t, e) {
      return e = hu({
        mode: "visible",
        children: e
      }, t.mode), e.return = t, t.child = e;
    }
    function hu(t, e) {
      return t = Me(22, t, null, e), t.lanes = 0, t;
    }
    function zc(t, e, n) {
      return gl(e, t.child, null, n), t = Ec(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
    }
    function Ch(t, e, n) {
      t.lanes |= e;
      var a = t.alternate;
      a !== null && (a.lanes |= e), Lr(t.return, e, n);
    }
    function Tc(t, e, n, a, u, o) {
      var d = t.memoizedState;
      d === null ? t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: a,
        tail: n,
        tailMode: u,
        treeForkCount: o
      } : (d.isBackwards = e, d.rendering = null, d.renderingStartTime = 0, d.last = a, d.tail = n, d.tailMode = u, d.treeForkCount = o);
    }
    function Mh(t, e, n) {
      var a = e.pendingProps, u = a.revealOrder, o = a.tail;
      a = a.children;
      var d = Gt.current, p = (d & 2) !== 0;
      if (p ? (d = d & 1 | 2, e.flags |= 128) : d &= 1, E(Gt, d), ue(t, e, a, n), a = vt ? ka : 0, !p && t !== null && (t.flags & 128) !== 0) t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Ch(t, n, e);
        else if (t.tag === 19) Ch(t, n, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      switch (u) {
        case "forwards":
          for (n = e.child, u = null; n !== null; ) t = n.alternate, t !== null && tu(t) === null && (u = n), n = n.sibling;
          n = u, n === null ? (u = e.child, e.child = null) : (u = n.sibling, n.sibling = null), Tc(e, false, u, n, o, a);
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (n = null, u = e.child, e.child = null; u !== null; ) {
            if (t = u.alternate, t !== null && tu(t) === null) {
              e.child = u;
              break;
            }
            t = u.sibling, u.sibling = n, n = u, u = t;
          }
          Tc(e, true, n, null, o, a);
          break;
        case "together":
          Tc(e, false, null, null, void 0, a);
          break;
        default:
          e.memoizedState = null;
      }
      return e.child;
    }
    function xn(t, e, n) {
      if (t !== null && (e.dependencies = t.dependencies), Xn |= e.lanes, (n & e.childLanes) === 0) if (t !== null) {
        if (Xl(t, e, n, false), (n & e.childLanes) === 0) return null;
      } else return null;
      if (t !== null && e.child !== t.child) throw Error(c(153));
      if (e.child !== null) {
        for (t = e.child, n = mn(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; ) t = t.sibling, n = n.sibling = mn(t, t.pendingProps), n.return = e;
        n.sibling = null;
      }
      return e.child;
    }
    function Ac(t, e) {
      return (t.lanes & e) !== 0 ? true : (t = t.dependencies, !!(t !== null && Zi(t)));
    }
    function Ny(t, e, n) {
      switch (e.tag) {
        case 3:
          ze(e, e.stateNode.containerInfo), Un(e, Kt, t.memoizedState.cache), sl();
          break;
        case 27:
        case 5:
          Pe(e);
          break;
        case 4:
          ze(e, e.stateNode.containerInfo);
          break;
        case 10:
          Un(e, e.type, e.memoizedProps.value);
          break;
        case 31:
          if (e.memoizedState !== null) return e.flags |= 128, Ir(e), null;
          break;
        case 13:
          var a = e.memoizedState;
          if (a !== null) return a.dehydrated !== null ? (Hn(e), e.flags |= 128, null) : (n & e.child.childLanes) !== 0 ? Ah(t, e, n) : (Hn(e), t = xn(t, e, n), t !== null ? t.sibling : null);
          Hn(e);
          break;
        case 19:
          var u = (t.flags & 128) !== 0;
          if (a = (n & e.childLanes) !== 0, a || (Xl(t, e, n, false), a = (n & e.childLanes) !== 0), u) {
            if (a) return Mh(t, e, n);
            e.flags |= 128;
          }
          if (u = e.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), E(Gt, Gt.current), a) break;
          return null;
        case 22:
          return e.lanes = 0, bh(t, e, n, e.pendingProps);
        case 24:
          Un(e, Kt, t.memoizedState.cache);
      }
      return xn(t, e, n);
    }
    function Nh(t, e, n) {
      if (t !== null) if (t.memoizedProps !== e.pendingProps) Ft = true;
      else {
        if (!Ac(t, n) && (e.flags & 128) === 0) return Ft = false, Ny(t, e, n);
        Ft = (t.flags & 131072) !== 0;
      }
      else Ft = false, vt && (e.flags & 1048576) !== 0 && uf(e, ka, e.index);
      switch (e.lanes = 0, e.tag) {
        case 16:
          t: {
            var a = e.pendingProps;
            if (t = ml(e.elementType), e.type = t, typeof t == "function") Or(t) ? (a = vl(t, a), e.tag = 1, e = zh(null, e, t, a, n)) : (e.tag = 0, e = vc(null, e, t, a, n));
            else {
              if (t != null) {
                var u = t.$$typeof;
                if (u === mt) {
                  e.tag = 11, e = gh(null, e, t, a, n);
                  break t;
                } else if (u === ut) {
                  e.tag = 14, e = yh(null, e, t, a, n);
                  break t;
                }
              }
              throw e = P(t) || t, Error(c(306, e, ""));
            }
          }
          return e;
        case 0:
          return vc(t, e, e.type, e.pendingProps, n);
        case 1:
          return a = e.type, u = vl(a, e.pendingProps), zh(t, e, a, u, n);
        case 3:
          t: {
            if (ze(e, e.stateNode.containerInfo), t === null) throw Error(c(387));
            a = e.pendingProps;
            var o = e.memoizedState;
            u = o.element, Gr(t, e), qa(e, a, null, n);
            var d = e.memoizedState;
            if (a = d.cache, Un(e, Kt, a), a !== o.cache && Hr(e, [
              Kt
            ], n, true), Ha(), a = d.element, o.isDehydrated) if (o = {
              element: a,
              isDehydrated: false,
              cache: d.cache
            }, e.updateQueue.baseState = o, e.memoizedState = o, e.flags & 256) {
              e = Th(t, e, a, n);
              break t;
            } else if (a !== u) {
              u = He(Error(c(424)), e), _a(u), e = Th(t, e, a, n);
              break t;
            } else for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, qt = Qe(t.firstChild), ae = e, vt = true, _n = null, Ve = true, n = bf(e, null, a, n), e.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
            else {
              if (sl(), a === u) {
                e = xn(t, e, n);
                break t;
              }
              ue(t, e, a, n);
            }
            e = e.child;
          }
          return e;
        case 26:
          return fu(t, e), t === null ? (n = Hd(e.type, null, e.pendingProps, null)) ? e.memoizedState = n : vt || (n = e.type, t = e.pendingProps, a = Nu(Bt.current).createElement(n), a[le] = e, a[de] = t, re(a, n, t), ee(a), e.stateNode = a) : e.memoizedState = Hd(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
        case 27:
          return Pe(e), t === null && vt && (a = e.stateNode = Rd(e.type, e.pendingProps, Bt.current), ae = e, Ve = true, u = qt, Jn(e.type) ? (ao = u, qt = Qe(a.firstChild)) : qt = u), ue(t, e, e.pendingProps.children, n), fu(t, e), t === null && (e.flags |= 4194304), e.child;
        case 5:
          return t === null && vt && ((u = a = qt) && (a = a1(a, e.type, e.pendingProps, Ve), a !== null ? (e.stateNode = a, ae = e, qt = Qe(a.firstChild), Ve = false, u = true) : u = false), u || jn(e)), Pe(e), u = e.type, o = e.pendingProps, d = t !== null ? t.memoizedProps : null, a = o.children, Pc(u, o) ? a = null : d !== null && Pc(u, d) && (e.flags |= 32), e.memoizedState !== null && (u = $r(t, e, by, null, null, n), ui._currentValue = u), fu(t, e), ue(t, e, a, n), e.child;
        case 6:
          return t === null && vt && ((t = n = qt) && (n = i1(n, e.pendingProps, Ve), n !== null ? (e.stateNode = n, ae = e, qt = null, t = true) : t = false), t || jn(e)), null;
        case 13:
          return Ah(t, e, n);
        case 4:
          return ze(e, e.stateNode.containerInfo), a = e.pendingProps, t === null ? e.child = gl(e, null, a, n) : ue(t, e, a, n), e.child;
        case 11:
          return gh(t, e, e.type, e.pendingProps, n);
        case 7:
          return ue(t, e, e.pendingProps, n), e.child;
        case 8:
          return ue(t, e, e.pendingProps.children, n), e.child;
        case 12:
          return ue(t, e, e.pendingProps.children, n), e.child;
        case 10:
          return a = e.pendingProps, Un(e, e.type, a.value), ue(t, e, a.children, n), e.child;
        case 9:
          return u = e.type._context, a = e.pendingProps.children, hl(e), u = ie(u), a = a(u), e.flags |= 1, ue(t, e, a, n), e.child;
        case 14:
          return yh(t, e, e.type, e.pendingProps, n);
        case 15:
          return vh(t, e, e.type, e.pendingProps, n);
        case 19:
          return Mh(t, e, n);
        case 31:
          return My(t, e, n);
        case 22:
          return bh(t, e, n, e.pendingProps);
        case 24:
          return hl(e), a = ie(Kt), t === null ? (u = Vr(), u === null && (u = Rt, o = qr(), u.pooledCache = o, o.refCount++, o !== null && (u.pooledCacheLanes |= n), u = o), e.memoizedState = {
            parent: a,
            cache: u
          }, Qr(e), Un(e, Kt, u)) : ((t.lanes & n) !== 0 && (Gr(t, e), qa(e, null, null, n), Ha()), u = t.memoizedState, o = e.memoizedState, u.parent !== a ? (u = {
            parent: a,
            cache: a
          }, e.memoizedState = u, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = u), Un(e, Kt, a)) : (a = o.cache, Un(e, Kt, a), a !== u.cache && Hr(e, [
            Kt
          ], n, true))), ue(t, e, e.pendingProps.children, n), e.child;
        case 29:
          throw e.pendingProps;
      }
      throw Error(c(156, e.tag));
    }
    function Sn(t) {
      t.flags |= 4;
    }
    function Cc(t, e, n, a, u) {
      if ((e = (t.mode & 32) !== 0) && (e = false), e) {
        if (t.flags |= 16777216, (u & 335544128) === u) if (t.stateNode.complete) t.flags |= 8192;
        else if (ed()) t.flags |= 8192;
        else throw pl = Ii, Xr;
      } else t.flags &= -16777217;
    }
    function Dh(t, e) {
      if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
      else if (t.flags |= 16777216, !Qd(e)) if (ed()) t.flags |= 8192;
      else throw pl = Ii, Xr;
    }
    function du(t, e) {
      e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? rs() : 536870912, t.lanes |= e, ea |= e);
    }
    function Za(t, e) {
      if (!vt) switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; ) e.alternate !== null && (n = e), e = e.sibling;
          n === null ? t.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = t.tail;
          for (var a = null; n !== null; ) n.alternate !== null && (a = n), n = n.sibling;
          a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
      }
    }
    function Yt(t) {
      var e = t.alternate !== null && t.alternate.child === t.child, n = 0, a = 0;
      if (e) for (var u = t.child; u !== null; ) n |= u.lanes | u.childLanes, a |= u.subtreeFlags & 65011712, a |= u.flags & 65011712, u.return = t, u = u.sibling;
      else for (u = t.child; u !== null; ) n |= u.lanes | u.childLanes, a |= u.subtreeFlags, a |= u.flags, u.return = t, u = u.sibling;
      return t.subtreeFlags |= a, t.childLanes = n, e;
    }
    function Dy(t, e, n) {
      var a = e.pendingProps;
      switch (jr(e), e.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Yt(e), null;
        case 1:
          return Yt(e), null;
        case 3:
          return n = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), yn(Kt), Te(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (Vl(e) ? Sn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Rr())), Yt(e), null;
        case 26:
          var u = e.type, o = e.memoizedState;
          return t === null ? (Sn(e), o !== null ? (Yt(e), Dh(e, o)) : (Yt(e), Cc(e, u, null, a, n))) : o ? o !== t.memoizedState ? (Sn(e), Yt(e), Dh(e, o)) : (Yt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && Sn(e), Yt(e), Cc(e, u, t, a, n)), null;
        case 27:
          if (cn(e), n = Bt.current, u = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && Sn(e);
          else {
            if (!a) {
              if (e.stateNode === null) throw Error(c(166));
              return Yt(e), null;
            }
            t = Mt.current, Vl(e) ? cf(e) : (t = Rd(u, a, n), e.stateNode = t, Sn(e));
          }
          return Yt(e), null;
        case 5:
          if (cn(e), u = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && Sn(e);
          else {
            if (!a) {
              if (e.stateNode === null) throw Error(c(166));
              return Yt(e), null;
            }
            if (o = Mt.current, Vl(e)) cf(e);
            else {
              var d = Nu(Bt.current);
              switch (o) {
                case 1:
                  o = d.createElementNS("http://www.w3.org/2000/svg", u);
                  break;
                case 2:
                  o = d.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                  break;
                default:
                  switch (u) {
                    case "svg":
                      o = d.createElementNS("http://www.w3.org/2000/svg", u);
                      break;
                    case "math":
                      o = d.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                      break;
                    case "script":
                      o = d.createElement("div"), o.innerHTML = "<script><\/script>", o = o.removeChild(o.firstChild);
                      break;
                    case "select":
                      o = typeof a.is == "string" ? d.createElement("select", {
                        is: a.is
                      }) : d.createElement("select"), a.multiple ? o.multiple = true : a.size && (o.size = a.size);
                      break;
                    default:
                      o = typeof a.is == "string" ? d.createElement(u, {
                        is: a.is
                      }) : d.createElement(u);
                  }
              }
              o[le] = e, o[de] = a;
              t: for (d = e.child; d !== null; ) {
                if (d.tag === 5 || d.tag === 6) o.appendChild(d.stateNode);
                else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                  d.child.return = d, d = d.child;
                  continue;
                }
                if (d === e) break t;
                for (; d.sibling === null; ) {
                  if (d.return === null || d.return === e) break t;
                  d = d.return;
                }
                d.sibling.return = d.return, d = d.sibling;
              }
              e.stateNode = o;
              t: switch (re(o, u, a), u) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a = !!a.autoFocus;
                  break t;
                case "img":
                  a = true;
                  break t;
                default:
                  a = false;
              }
              a && Sn(e);
            }
          }
          return Yt(e), Cc(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n), null;
        case 6:
          if (t && e.stateNode != null) t.memoizedProps !== a && Sn(e);
          else {
            if (typeof a != "string" && e.stateNode === null) throw Error(c(166));
            if (t = Bt.current, Vl(e)) {
              if (t = e.stateNode, n = e.memoizedProps, a = null, u = ae, u !== null) switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
              t[le] = e, t = !!(t.nodeValue === n || a !== null && a.suppressHydrationWarning === true || Ad(t.nodeValue, n)), t || jn(e, true);
            } else t = Nu(t).createTextNode(a), t[le] = e, e.stateNode = t;
          }
          return Yt(e), null;
        case 31:
          if (n = e.memoizedState, t === null || t.memoizedState !== null) {
            if (a = Vl(e), n !== null) {
              if (t === null) {
                if (!a) throw Error(c(318));
                if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(557));
                t[le] = e;
              } else sl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
              Yt(e), t = false;
            } else n = Rr(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), t = true;
            if (!t) return e.flags & 256 ? (De(e), e) : (De(e), null);
            if ((e.flags & 128) !== 0) throw Error(c(558));
          }
          return Yt(e), null;
        case 13:
          if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            if (u = Vl(e), a !== null && a.dehydrated !== null) {
              if (t === null) {
                if (!u) throw Error(c(318));
                if (u = e.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(c(317));
                u[le] = e;
              } else sl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
              Yt(e), u = false;
            } else u = Rr(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u), u = true;
            if (!u) return e.flags & 256 ? (De(e), e) : (De(e), null);
          }
          return De(e), (e.flags & 128) !== 0 ? (e.lanes = n, e) : (n = a !== null, t = t !== null && t.memoizedState !== null, n && (a = e.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool), o = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (o = a.memoizedState.cachePool.pool), o !== u && (a.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), du(e, e.updateQueue), Yt(e), null);
        case 4:
          return Te(), t === null && Jc(e.stateNode.containerInfo), Yt(e), null;
        case 10:
          return yn(e.type), Yt(e), null;
        case 19:
          if (St(Gt), a = e.memoizedState, a === null) return Yt(e), null;
          if (u = (e.flags & 128) !== 0, o = a.rendering, o === null) if (u) Za(a, false);
          else {
            if (Qt !== 0 || t !== null && (t.flags & 128) !== 0) for (t = e.child; t !== null; ) {
              if (o = tu(t), o !== null) {
                for (e.flags |= 128, Za(a, false), t = o.updateQueue, e.updateQueue = t, du(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; ) nf(n, t), n = n.sibling;
                return E(Gt, Gt.current & 1 | 2), vt && pn(e, a.treeForkCount), e.child;
              }
              t = t.sibling;
            }
            a.tail !== null && oe() > vu && (e.flags |= 128, u = true, Za(a, false), e.lanes = 4194304);
          }
          else {
            if (!u) if (t = tu(o), t !== null) {
              if (e.flags |= 128, u = true, t = t.updateQueue, e.updateQueue = t, du(e, t), Za(a, true), a.tail === null && a.tailMode === "hidden" && !o.alternate && !vt) return Yt(e), null;
            } else 2 * oe() - a.renderingStartTime > vu && n !== 536870912 && (e.flags |= 128, u = true, Za(a, false), e.lanes = 4194304);
            a.isBackwards ? (o.sibling = e.child, e.child = o) : (t = a.last, t !== null ? t.sibling = o : e.child = o, a.last = o);
          }
          return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = oe(), t.sibling = null, n = Gt.current, E(Gt, u ? n & 1 | 2 : n & 1), vt && pn(e, a.treeForkCount), t) : (Yt(e), null);
        case 22:
        case 23:
          return De(e), Fr(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (Yt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Yt(e), n = e.updateQueue, n !== null && du(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== n && (e.flags |= 2048), t !== null && St(dl), null;
        case 24:
          return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), yn(Kt), Yt(e), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(c(156, e.tag));
    }
    function Oy(t, e) {
      switch (jr(e), e.tag) {
        case 1:
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 3:
          return yn(Kt), Te(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
        case 26:
        case 27:
        case 5:
          return cn(e), null;
        case 31:
          if (e.memoizedState !== null) {
            if (De(e), e.alternate === null) throw Error(c(340));
            sl();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 13:
          if (De(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
            if (e.alternate === null) throw Error(c(340));
            sl();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 19:
          return St(Gt), null;
        case 4:
          return Te(), null;
        case 10:
          return yn(e.type), null;
        case 22:
        case 23:
          return De(e), Fr(), t !== null && St(dl), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 24:
          return yn(Kt), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Oh(t, e) {
      switch (jr(e), e.tag) {
        case 3:
          yn(Kt), Te();
          break;
        case 26:
        case 27:
        case 5:
          cn(e);
          break;
        case 4:
          Te();
          break;
        case 31:
          e.memoizedState !== null && De(e);
          break;
        case 13:
          De(e);
          break;
        case 19:
          St(Gt);
          break;
        case 10:
          yn(e.type);
          break;
        case 22:
        case 23:
          De(e), Fr(), t !== null && St(dl);
          break;
        case 24:
          yn(Kt);
      }
    }
    function Ka(t, e) {
      try {
        var n = e.updateQueue, a = n !== null ? n.lastEffect : null;
        if (a !== null) {
          var u = a.next;
          n = u;
          do {
            if ((n.tag & t) === t) {
              a = void 0;
              var o = n.create, d = n.inst;
              a = o(), d.destroy = a;
            }
            n = n.next;
          } while (n !== u);
        }
      } catch (p) {
        Ot(e, e.return, p);
      }
    }
    function Yn(t, e, n) {
      try {
        var a = e.updateQueue, u = a !== null ? a.lastEffect : null;
        if (u !== null) {
          var o = u.next;
          a = o;
          do {
            if ((a.tag & t) === t) {
              var d = a.inst, p = d.destroy;
              if (p !== void 0) {
                d.destroy = void 0, u = e;
                var T = n, N = p;
                try {
                  N();
                } catch (_) {
                  Ot(u, T, _);
                }
              }
            }
            a = a.next;
          } while (a !== o);
        }
      } catch (_) {
        Ot(e, e.return, _);
      }
    }
    function wh(t) {
      var e = t.updateQueue;
      if (e !== null) {
        var n = t.stateNode;
        try {
          Sf(e, n);
        } catch (a) {
          Ot(t, t.return, a);
        }
      }
    }
    function kh(t, e, n) {
      n.props = vl(t.type, t.memoizedProps), n.state = t.memoizedState;
      try {
        n.componentWillUnmount();
      } catch (a) {
        Ot(t, e, a);
      }
    }
    function Ja(t, e) {
      try {
        var n = t.ref;
        if (n !== null) {
          switch (t.tag) {
            case 26:
            case 27:
            case 5:
              var a = t.stateNode;
              break;
            case 30:
              a = t.stateNode;
              break;
            default:
              a = t.stateNode;
          }
          typeof n == "function" ? t.refCleanup = n(a) : n.current = a;
        }
      } catch (u) {
        Ot(t, e, u);
      }
    }
    function nn(t, e) {
      var n = t.ref, a = t.refCleanup;
      if (n !== null) if (typeof a == "function") try {
        a();
      } catch (u) {
        Ot(t, e, u);
      } finally {
        t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
      }
      else if (typeof n == "function") try {
        n(null);
      } catch (u) {
        Ot(t, e, u);
      }
      else n.current = null;
    }
    function _h(t) {
      var e = t.type, n = t.memoizedProps, a = t.stateNode;
      try {
        t: switch (e) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            n.autoFocus && a.focus();
            break t;
          case "img":
            n.src ? a.src = n.src : n.srcSet && (a.srcset = n.srcSet);
        }
      } catch (u) {
        Ot(t, t.return, u);
      }
    }
    function Mc(t, e, n) {
      try {
        var a = t.stateNode;
        $y(a, t.type, n, e), a[de] = e;
      } catch (u) {
        Ot(t, t.return, u);
      }
    }
    function jh(t) {
      return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Jn(t.type) || t.tag === 4;
    }
    function Nc(t) {
      t: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || jh(t.return)) return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
          if (t.tag === 27 && Jn(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & 2)) return t.stateNode;
      }
    }
    function Dc(t, e, n) {
      var a = t.tag;
      if (a === 5 || a === 6) t = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(t, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(t), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = hn));
      else if (a !== 4 && (a === 27 && Jn(t.type) && (n = t.stateNode, e = null), t = t.child, t !== null)) for (Dc(t, e, n), t = t.sibling; t !== null; ) Dc(t, e, n), t = t.sibling;
    }
    function mu(t, e, n) {
      var a = t.tag;
      if (a === 5 || a === 6) t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
      else if (a !== 4 && (a === 27 && Jn(t.type) && (n = t.stateNode), t = t.child, t !== null)) for (mu(t, e, n), t = t.sibling; t !== null; ) mu(t, e, n), t = t.sibling;
    }
    function Uh(t) {
      var e = t.stateNode, n = t.memoizedProps;
      try {
        for (var a = t.type, u = e.attributes; u.length; ) e.removeAttributeNode(u[0]);
        re(e, a, n), e[le] = t, e[de] = n;
      } catch (o) {
        Ot(t, t.return, o);
      }
    }
    var En = false, It = false, Oc = false, Rh = typeof WeakSet == "function" ? WeakSet : Set, ne = null;
    function wy(t, e) {
      if (t = t.containerInfo, Wc = Uu, t = Ks(t), zr(t)) {
        if ("selectionStart" in t) var n = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
        else t: {
          n = (n = t.ownerDocument) && n.defaultView || window;
          var a = n.getSelection && n.getSelection();
          if (a && a.rangeCount !== 0) {
            n = a.anchorNode;
            var u = a.anchorOffset, o = a.focusNode;
            a = a.focusOffset;
            try {
              n.nodeType, o.nodeType;
            } catch {
              n = null;
              break t;
            }
            var d = 0, p = -1, T = -1, N = 0, _ = 0, R = t, D = null;
            e: for (; ; ) {
              for (var w; R !== n || u !== 0 && R.nodeType !== 3 || (p = d + u), R !== o || a !== 0 && R.nodeType !== 3 || (T = d + a), R.nodeType === 3 && (d += R.nodeValue.length), (w = R.firstChild) !== null; ) D = R, R = w;
              for (; ; ) {
                if (R === t) break e;
                if (D === n && ++N === u && (p = d), D === o && ++_ === a && (T = d), (w = R.nextSibling) !== null) break;
                R = D, D = R.parentNode;
              }
              R = w;
            }
            n = p === -1 || T === -1 ? null : {
              start: p,
              end: T
            };
          } else n = null;
        }
        n = n || {
          start: 0,
          end: 0
        };
      } else n = null;
      for ($c = {
        focusedElem: t,
        selectionRange: n
      }, Uu = false, ne = e; ne !== null; ) if (e = ne, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, ne = t;
      else for (; ne !== null; ) {
        switch (e = ne, o = e.alternate, t = e.flags, e.tag) {
          case 0:
            if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null)) for (n = 0; n < t.length; n++) u = t[n], u.ref.impl = u.nextImpl;
            break;
          case 11:
          case 15:
            break;
          case 1:
            if ((t & 1024) !== 0 && o !== null) {
              t = void 0, n = e, u = o.memoizedProps, o = o.memoizedState, a = n.stateNode;
              try {
                var J = vl(n.type, u);
                t = a.getSnapshotBeforeUpdate(J, o), a.__reactInternalSnapshotBeforeUpdate = t;
              } catch (et) {
                Ot(n, n.return, et);
              }
            }
            break;
          case 3:
            if ((t & 1024) !== 0) {
              if (t = e.stateNode.containerInfo, n = t.nodeType, n === 9) eo(t);
              else if (n === 1) switch (t.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  eo(t);
                  break;
                default:
                  t.textContent = "";
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
            if ((t & 1024) !== 0) throw Error(c(163));
        }
        if (t = e.sibling, t !== null) {
          t.return = e.return, ne = t;
          break;
        }
        ne = e.return;
      }
    }
    function Bh(t, e, n) {
      var a = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Tn(t, n), a & 4 && Ka(5, n);
          break;
        case 1:
          if (Tn(t, n), a & 4) if (t = n.stateNode, e === null) try {
            t.componentDidMount();
          } catch (d) {
            Ot(n, n.return, d);
          }
          else {
            var u = vl(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(u, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (d) {
              Ot(n, n.return, d);
            }
          }
          a & 64 && wh(n), a & 512 && Ja(n, n.return);
          break;
        case 3:
          if (Tn(t, n), a & 64 && (t = n.updateQueue, t !== null)) {
            if (e = null, n.child !== null) switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
            try {
              Sf(t, e);
            } catch (d) {
              Ot(n, n.return, d);
            }
          }
          break;
        case 27:
          e === null && a & 4 && Uh(n);
        case 26:
        case 5:
          Tn(t, n), e === null && a & 4 && _h(n), a & 512 && Ja(n, n.return);
          break;
        case 12:
          Tn(t, n);
          break;
        case 31:
          Tn(t, n), a & 4 && qh(t, n);
          break;
        case 13:
          Tn(t, n), a & 4 && Yh(t, n), a & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = qy.bind(null, n), u1(t, n))));
          break;
        case 22:
          if (a = n.memoizedState !== null || En, !a) {
            e = e !== null && e.memoizedState !== null || It, u = En;
            var o = It;
            En = a, (It = e) && !o ? An(t, n, (n.subtreeFlags & 8772) !== 0) : Tn(t, n), En = u, It = o;
          }
          break;
        case 30:
          break;
        default:
          Tn(t, n);
      }
    }
    function Lh(t) {
      var e = t.alternate;
      e !== null && (t.alternate = null, Lh(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && ur(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
    }
    var Vt = null, pe = false;
    function zn(t, e, n) {
      for (n = n.child; n !== null; ) Hh(t, e, n), n = n.sibling;
    }
    function Hh(t, e, n) {
      if ($t && typeof $t.onCommitFiberUnmount == "function") try {
        $t.onCommitFiberUnmount(se, n);
      } catch {
      }
      switch (n.tag) {
        case 26:
          It || nn(n, e), zn(t, e, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
          break;
        case 27:
          It || nn(n, e);
          var a = Vt, u = pe;
          Jn(n.type) && (Vt = n.stateNode, pe = false), zn(t, e, n), li(n.stateNode), Vt = a, pe = u;
          break;
        case 5:
          It || nn(n, e);
        case 6:
          if (a = Vt, u = pe, Vt = null, zn(t, e, n), Vt = a, pe = u, Vt !== null) if (pe) try {
            (Vt.nodeType === 9 ? Vt.body : Vt.nodeName === "HTML" ? Vt.ownerDocument.body : Vt).removeChild(n.stateNode);
          } catch (o) {
            Ot(n, e, o);
          }
          else try {
            Vt.removeChild(n.stateNode);
          } catch (o) {
            Ot(n, e, o);
          }
          break;
        case 18:
          Vt !== null && (pe ? (t = Vt, wd(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, n.stateNode), oa(t)) : wd(Vt, n.stateNode));
          break;
        case 4:
          a = Vt, u = pe, Vt = n.stateNode.containerInfo, pe = true, zn(t, e, n), Vt = a, pe = u;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Yn(2, n, e), It || Yn(4, n, e), zn(t, e, n);
          break;
        case 1:
          It || (nn(n, e), a = n.stateNode, typeof a.componentWillUnmount == "function" && kh(n, e, a)), zn(t, e, n);
          break;
        case 21:
          zn(t, e, n);
          break;
        case 22:
          It = (a = It) || n.memoizedState !== null, zn(t, e, n), It = a;
          break;
        default:
          zn(t, e, n);
      }
    }
    function qh(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
        t = t.dehydrated;
        try {
          oa(t);
        } catch (n) {
          Ot(e, e.return, n);
        }
      }
    }
    function Yh(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
        oa(t);
      } catch (n) {
        Ot(e, e.return, n);
      }
    }
    function ky(t) {
      switch (t.tag) {
        case 31:
        case 13:
        case 19:
          var e = t.stateNode;
          return e === null && (e = t.stateNode = new Rh()), e;
        case 22:
          return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Rh()), e;
        default:
          throw Error(c(435, t.tag));
      }
    }
    function pu(t, e) {
      var n = ky(t);
      e.forEach(function(a) {
        if (!n.has(a)) {
          n.add(a);
          var u = Yy.bind(null, t, a);
          a.then(u, u);
        }
      });
    }
    function ge(t, e) {
      var n = e.deletions;
      if (n !== null) for (var a = 0; a < n.length; a++) {
        var u = n[a], o = t, d = e, p = d;
        t: for (; p !== null; ) {
          switch (p.tag) {
            case 27:
              if (Jn(p.type)) {
                Vt = p.stateNode, pe = false;
                break t;
              }
              break;
            case 5:
              Vt = p.stateNode, pe = false;
              break t;
            case 3:
            case 4:
              Vt = p.stateNode.containerInfo, pe = true;
              break t;
          }
          p = p.return;
        }
        if (Vt === null) throw Error(c(160));
        Hh(o, d, u), Vt = null, pe = false, o = u.alternate, o !== null && (o.return = null), u.return = null;
      }
      if (e.subtreeFlags & 13886) for (e = e.child; e !== null; ) Vh(e, t), e = e.sibling;
    }
    var Ie = null;
    function Vh(t, e) {
      var n = t.alternate, a = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ge(e, t), ye(t), a & 4 && (Yn(3, t, t.return), Ka(3, t), Yn(5, t, t.return));
          break;
        case 1:
          ge(e, t), ye(t), a & 512 && (It || n === null || nn(n, n.return)), a & 64 && En && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
          break;
        case 26:
          var u = Ie;
          if (ge(e, t), ye(t), a & 512 && (It || n === null || nn(n, n.return)), a & 4) {
            var o = n !== null ? n.memoizedState : null;
            if (a = t.memoizedState, n === null) if (a === null) if (t.stateNode === null) {
              t: {
                a = t.type, n = t.memoizedProps, u = u.ownerDocument || u;
                e: switch (a) {
                  case "title":
                    o = u.getElementsByTagName("title")[0], (!o || o[Sa] || o[le] || o.namespaceURI === "http://www.w3.org/2000/svg" || o.hasAttribute("itemprop")) && (o = u.createElement(a), u.head.insertBefore(o, u.querySelector("head > title"))), re(o, a, n), o[le] = t, ee(o), a = o;
                    break t;
                  case "link":
                    var d = Vd("link", "href", u).get(a + (n.href || ""));
                    if (d) {
                      for (var p = 0; p < d.length; p++) if (o = d[p], o.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && o.getAttribute("rel") === (n.rel == null ? null : n.rel) && o.getAttribute("title") === (n.title == null ? null : n.title) && o.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                        d.splice(p, 1);
                        break e;
                      }
                    }
                    o = u.createElement(a), re(o, a, n), u.head.appendChild(o);
                    break;
                  case "meta":
                    if (d = Vd("meta", "content", u).get(a + (n.content || ""))) {
                      for (p = 0; p < d.length; p++) if (o = d[p], o.getAttribute("content") === (n.content == null ? null : "" + n.content) && o.getAttribute("name") === (n.name == null ? null : n.name) && o.getAttribute("property") === (n.property == null ? null : n.property) && o.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && o.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                        d.splice(p, 1);
                        break e;
                      }
                    }
                    o = u.createElement(a), re(o, a, n), u.head.appendChild(o);
                    break;
                  default:
                    throw Error(c(468, a));
                }
                o[le] = t, ee(o), a = o;
              }
              t.stateNode = a;
            } else Xd(u, t.type, t.stateNode);
            else t.stateNode = Yd(u, a, t.memoizedProps);
            else o !== a ? (o === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : o.count--, a === null ? Xd(u, t.type, t.stateNode) : Yd(u, a, t.memoizedProps)) : a === null && t.stateNode !== null && Mc(t, t.memoizedProps, n.memoizedProps);
          }
          break;
        case 27:
          ge(e, t), ye(t), a & 512 && (It || n === null || nn(n, n.return)), n !== null && a & 4 && Mc(t, t.memoizedProps, n.memoizedProps);
          break;
        case 5:
          if (ge(e, t), ye(t), a & 512 && (It || n === null || nn(n, n.return)), t.flags & 32) {
            u = t.stateNode;
            try {
              kl(u, "");
            } catch (J) {
              Ot(t, t.return, J);
            }
          }
          a & 4 && t.stateNode != null && (u = t.memoizedProps, Mc(t, u, n !== null ? n.memoizedProps : u)), a & 1024 && (Oc = true);
          break;
        case 6:
          if (ge(e, t), ye(t), a & 4) {
            if (t.stateNode === null) throw Error(c(162));
            a = t.memoizedProps, n = t.stateNode;
            try {
              n.nodeValue = a;
            } catch (J) {
              Ot(t, t.return, J);
            }
          }
          break;
        case 3:
          if (wu = null, u = Ie, Ie = Du(e.containerInfo), ge(e, t), Ie = u, ye(t), a & 4 && n !== null && n.memoizedState.isDehydrated) try {
            oa(e.containerInfo);
          } catch (J) {
            Ot(t, t.return, J);
          }
          Oc && (Oc = false, Xh(t));
          break;
        case 4:
          a = Ie, Ie = Du(t.stateNode.containerInfo), ge(e, t), ye(t), Ie = a;
          break;
        case 12:
          ge(e, t), ye(t);
          break;
        case 31:
          ge(e, t), ye(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, pu(t, a)));
          break;
        case 13:
          ge(e, t), ye(t), t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (yu = oe()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, pu(t, a)));
          break;
        case 22:
          u = t.memoizedState !== null;
          var T = n !== null && n.memoizedState !== null, N = En, _ = It;
          if (En = N || u, It = _ || T, ge(e, t), It = _, En = N, ye(t), a & 8192) t: for (e = t.stateNode, e._visibility = u ? e._visibility & -2 : e._visibility | 1, u && (n === null || T || En || It || bl(t)), n = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                T = n = e;
                try {
                  if (o = T.stateNode, u) d = o.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none";
                  else {
                    p = T.stateNode;
                    var R = T.memoizedProps.style, D = R != null && R.hasOwnProperty("display") ? R.display : null;
                    p.style.display = D == null || typeof D == "boolean" ? "" : ("" + D).trim();
                  }
                } catch (J) {
                  Ot(T, T.return, J);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                T = e;
                try {
                  T.stateNode.nodeValue = u ? "" : T.memoizedProps;
                } catch (J) {
                  Ot(T, T.return, J);
                }
              }
            } else if (e.tag === 18) {
              if (n === null) {
                T = e;
                try {
                  var w = T.stateNode;
                  u ? kd(w, true) : kd(T.stateNode, false);
                } catch (J) {
                  Ot(T, T.return, J);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              n === e && (n = null), e = e.return;
            }
            n === e && (n = null), e.sibling.return = e.return, e = e.sibling;
          }
          a & 4 && (a = t.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, pu(t, n))));
          break;
        case 19:
          ge(e, t), ye(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, pu(t, a)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          ge(e, t), ye(t);
      }
    }
    function ye(t) {
      var e = t.flags;
      if (e & 2) {
        try {
          for (var n, a = t.return; a !== null; ) {
            if (jh(a)) {
              n = a;
              break;
            }
            a = a.return;
          }
          if (n == null) throw Error(c(160));
          switch (n.tag) {
            case 27:
              var u = n.stateNode, o = Nc(t);
              mu(t, o, u);
              break;
            case 5:
              var d = n.stateNode;
              n.flags & 32 && (kl(d, ""), n.flags &= -33);
              var p = Nc(t);
              mu(t, p, d);
              break;
            case 3:
            case 4:
              var T = n.stateNode.containerInfo, N = Nc(t);
              Dc(t, N, T);
              break;
            default:
              throw Error(c(161));
          }
        } catch (_) {
          Ot(t, t.return, _);
        }
        t.flags &= -3;
      }
      e & 4096 && (t.flags &= -4097);
    }
    function Xh(t) {
      if (t.subtreeFlags & 1024) for (t = t.child; t !== null; ) {
        var e = t;
        Xh(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
    }
    function Tn(t, e) {
      if (e.subtreeFlags & 8772) for (e = e.child; e !== null; ) Bh(t, e.alternate, e), e = e.sibling;
    }
    function bl(t) {
      for (t = t.child; t !== null; ) {
        var e = t;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            Yn(4, e, e.return), bl(e);
            break;
          case 1:
            nn(e, e.return);
            var n = e.stateNode;
            typeof n.componentWillUnmount == "function" && kh(e, e.return, n), bl(e);
            break;
          case 27:
            li(e.stateNode);
          case 26:
          case 5:
            nn(e, e.return), bl(e);
            break;
          case 22:
            e.memoizedState === null && bl(e);
            break;
          case 30:
            bl(e);
            break;
          default:
            bl(e);
        }
        t = t.sibling;
      }
    }
    function An(t, e, n) {
      for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
        var a = e.alternate, u = t, o = e, d = o.flags;
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            An(u, o, n), Ka(4, o);
            break;
          case 1:
            if (An(u, o, n), a = o, u = a.stateNode, typeof u.componentDidMount == "function") try {
              u.componentDidMount();
            } catch (N) {
              Ot(a, a.return, N);
            }
            if (a = o, u = a.updateQueue, u !== null) {
              var p = a.stateNode;
              try {
                var T = u.shared.hiddenCallbacks;
                if (T !== null) for (u.shared.hiddenCallbacks = null, u = 0; u < T.length; u++) xf(T[u], p);
              } catch (N) {
                Ot(a, a.return, N);
              }
            }
            n && d & 64 && wh(o), Ja(o, o.return);
            break;
          case 27:
            Uh(o);
          case 26:
          case 5:
            An(u, o, n), n && a === null && d & 4 && _h(o), Ja(o, o.return);
            break;
          case 12:
            An(u, o, n);
            break;
          case 31:
            An(u, o, n), n && d & 4 && qh(u, o);
            break;
          case 13:
            An(u, o, n), n && d & 4 && Yh(u, o);
            break;
          case 22:
            o.memoizedState === null && An(u, o, n), Ja(o, o.return);
            break;
          case 30:
            break;
          default:
            An(u, o, n);
        }
        e = e.sibling;
      }
    }
    function wc(t, e) {
      var n = null;
      t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && ja(n));
    }
    function kc(t, e) {
      t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && ja(t));
    }
    function We(t, e, n, a) {
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) Qh(t, e, n, a), e = e.sibling;
    }
    function Qh(t, e, n, a) {
      var u = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          We(t, e, n, a), u & 2048 && Ka(9, e);
          break;
        case 1:
          We(t, e, n, a);
          break;
        case 3:
          We(t, e, n, a), u & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && ja(t)));
          break;
        case 12:
          if (u & 2048) {
            We(t, e, n, a), t = e.stateNode;
            try {
              var o = e.memoizedProps, d = o.id, p = o.onPostCommit;
              typeof p == "function" && p(d, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
            } catch (T) {
              Ot(e, e.return, T);
            }
          } else We(t, e, n, a);
          break;
        case 31:
          We(t, e, n, a);
          break;
        case 13:
          We(t, e, n, a);
          break;
        case 23:
          break;
        case 22:
          o = e.stateNode, d = e.alternate, e.memoizedState !== null ? o._visibility & 2 ? We(t, e, n, a) : Fa(t, e) : o._visibility & 2 ? We(t, e, n, a) : (o._visibility |= 2, $l(t, e, n, a, (e.subtreeFlags & 10256) !== 0 || false)), u & 2048 && wc(d, e);
          break;
        case 24:
          We(t, e, n, a), u & 2048 && kc(e.alternate, e);
          break;
        default:
          We(t, e, n, a);
      }
    }
    function $l(t, e, n, a, u) {
      for (u = u && ((e.subtreeFlags & 10256) !== 0 || false), e = e.child; e !== null; ) {
        var o = t, d = e, p = n, T = a, N = d.flags;
        switch (d.tag) {
          case 0:
          case 11:
          case 15:
            $l(o, d, p, T, u), Ka(8, d);
            break;
          case 23:
            break;
          case 22:
            var _ = d.stateNode;
            d.memoizedState !== null ? _._visibility & 2 ? $l(o, d, p, T, u) : Fa(o, d) : (_._visibility |= 2, $l(o, d, p, T, u)), u && N & 2048 && wc(d.alternate, d);
            break;
          case 24:
            $l(o, d, p, T, u), u && N & 2048 && kc(d.alternate, d);
            break;
          default:
            $l(o, d, p, T, u);
        }
        e = e.sibling;
      }
    }
    function Fa(t, e) {
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) {
        var n = t, a = e, u = a.flags;
        switch (a.tag) {
          case 22:
            Fa(n, a), u & 2048 && wc(a.alternate, a);
            break;
          case 24:
            Fa(n, a), u & 2048 && kc(a.alternate, a);
            break;
          default:
            Fa(n, a);
        }
        e = e.sibling;
      }
    }
    var Ia = 8192;
    function Pl(t, e, n) {
      if (t.subtreeFlags & Ia) for (t = t.child; t !== null; ) Gh(t, e, n), t = t.sibling;
    }
    function Gh(t, e, n) {
      switch (t.tag) {
        case 26:
          Pl(t, e, n), t.flags & Ia && t.memoizedState !== null && v1(n, Ie, t.memoizedState, t.memoizedProps);
          break;
        case 5:
          Pl(t, e, n);
          break;
        case 3:
        case 4:
          var a = Ie;
          Ie = Du(t.stateNode.containerInfo), Pl(t, e, n), Ie = a;
          break;
        case 22:
          t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = Ia, Ia = 16777216, Pl(t, e, n), Ia = a) : Pl(t, e, n));
          break;
        default:
          Pl(t, e, n);
      }
    }
    function Zh(t) {
      var e = t.alternate;
      if (e !== null && (t = e.child, t !== null)) {
        e.child = null;
        do
          e = t.sibling, t.sibling = null, t = e;
        while (t !== null);
      }
    }
    function Wa(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null) for (var n = 0; n < e.length; n++) {
          var a = e[n];
          ne = a, Jh(a, t);
        }
        Zh(t);
      }
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) Kh(t), t = t.sibling;
    }
    function Kh(t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Wa(t), t.flags & 2048 && Yn(9, t, t.return);
          break;
        case 3:
          Wa(t);
          break;
        case 12:
          Wa(t);
          break;
        case 22:
          var e = t.stateNode;
          t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, gu(t)) : Wa(t);
          break;
        default:
          Wa(t);
      }
    }
    function gu(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null) for (var n = 0; n < e.length; n++) {
          var a = e[n];
          ne = a, Jh(a, t);
        }
        Zh(t);
      }
      for (t = t.child; t !== null; ) {
        switch (e = t, e.tag) {
          case 0:
          case 11:
          case 15:
            Yn(8, e, e.return), gu(e);
            break;
          case 22:
            n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, gu(e));
            break;
          default:
            gu(e);
        }
        t = t.sibling;
      }
    }
    function Jh(t, e) {
      for (; ne !== null; ) {
        var n = ne;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Yn(8, n, e);
            break;
          case 23:
          case 22:
            if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
              var a = n.memoizedState.cachePool.pool;
              a != null && a.refCount++;
            }
            break;
          case 24:
            ja(n.memoizedState.cache);
        }
        if (a = n.child, a !== null) a.return = n, ne = a;
        else t: for (n = t; ne !== null; ) {
          a = ne;
          var u = a.sibling, o = a.return;
          if (Lh(a), a === n) {
            ne = null;
            break t;
          }
          if (u !== null) {
            u.return = o, ne = u;
            break t;
          }
          ne = o;
        }
      }
    }
    var _y = {
      getCacheForType: function(t) {
        var e = ie(Kt), n = e.data.get(t);
        return n === void 0 && (n = t(), e.data.set(t, n)), n;
      },
      cacheSignal: function() {
        return ie(Kt).controller.signal;
      }
    }, jy = typeof WeakMap == "function" ? WeakMap : Map, At = 0, Rt = null, ht = null, pt = 0, Dt = 0, Oe = null, Vn = false, ta = false, _c = false, Cn = 0, Qt = 0, Xn = 0, xl = 0, jc = 0, we = 0, ea = 0, $a = null, ve = null, Uc = false, yu = 0, Fh = 0, vu = 1 / 0, bu = null, Qn = null, Pt = 0, Gn = null, na = null, Mn = 0, Rc = 0, Bc = null, Ih = null, Pa = 0, Lc = null;
    function ke() {
      return (At & 2) !== 0 && pt !== 0 ? pt & -pt : O.T !== null ? Qc() : fs();
    }
    function Wh() {
      if (we === 0) if ((pt & 536870912) === 0 || vt) {
        var t = Mi;
        Mi <<= 1, (Mi & 3932160) === 0 && (Mi = 262144), we = t;
      } else we = 536870912;
      return t = Ne.current, t !== null && (t.flags |= 32), we;
    }
    function be(t, e, n) {
      (t === Rt && (Dt === 2 || Dt === 9) || t.cancelPendingCommit !== null) && (la(t, 0), Zn(t, pt, we, false)), xa(t, n), ((At & 2) === 0 || t !== Rt) && (t === Rt && ((At & 2) === 0 && (xl |= n), Qt === 4 && Zn(t, pt, we, false)), ln(t));
    }
    function $h(t, e, n) {
      if ((At & 6) !== 0) throw Error(c(327));
      var a = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || ba(t, e), u = a ? By(t, e) : qc(t, e, true), o = a;
      do {
        if (u === 0) {
          ta && !a && Zn(t, e, 0, false);
          break;
        } else {
          if (n = t.current.alternate, o && !Uy(n)) {
            u = qc(t, e, false), o = false;
            continue;
          }
          if (u === 2) {
            if (o = e, t.errorRecoveryDisabledLanes & o) var d = 0;
            else d = t.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
            if (d !== 0) {
              e = d;
              t: {
                var p = t;
                u = $a;
                var T = p.current.memoizedState.isDehydrated;
                if (T && (la(p, d).flags |= 256), d = qc(p, d, false), d !== 2) {
                  if (_c && !T) {
                    p.errorRecoveryDisabledLanes |= o, xl |= o, u = 4;
                    break t;
                  }
                  o = ve, ve = u, o !== null && (ve === null ? ve = o : ve.push.apply(ve, o));
                }
                u = d;
              }
              if (o = false, u !== 2) continue;
            }
          }
          if (u === 1) {
            la(t, 0), Zn(t, e, 0, true);
            break;
          }
          t: {
            switch (a = t, o = u, o) {
              case 0:
              case 1:
                throw Error(c(345));
              case 4:
                if ((e & 4194048) !== e) break;
              case 6:
                Zn(a, e, we, !Vn);
                break t;
              case 2:
                ve = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(c(329));
            }
            if ((e & 62914560) === e && (u = yu + 300 - oe(), 10 < u)) {
              if (Zn(a, e, we, !Vn), Di(a, 0, true) !== 0) break t;
              Mn = e, a.timeoutHandle = Dd(Ph.bind(null, a, n, ve, bu, Uc, e, we, xl, ea, Vn, o, "Throttled", -0, 0), u);
              break t;
            }
            Ph(a, n, ve, bu, Uc, e, we, xl, ea, Vn, o, null, -0, 0);
          }
        }
        break;
      } while (true);
      ln(t);
    }
    function Ph(t, e, n, a, u, o, d, p, T, N, _, R, D, w) {
      if (t.timeoutHandle = -1, R = e.subtreeFlags, R & 8192 || (R & 16785408) === 16785408) {
        R = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: true,
          waitingForViewTransition: false,
          unsuspend: hn
        }, Gh(e, o, R);
        var J = (o & 62914560) === o ? yu - oe() : (o & 4194048) === o ? Fh - oe() : 0;
        if (J = b1(R, J), J !== null) {
          Mn = o, t.cancelPendingCommit = J(rd.bind(null, t, e, o, n, a, u, d, p, T, _, R, null, D, w)), Zn(t, o, d, !N);
          return;
        }
      }
      rd(t, e, o, n, a, u, d, p, T);
    }
    function Uy(t) {
      for (var e = t; ; ) {
        var n = e.tag;
        if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null))) for (var a = 0; a < n.length; a++) {
          var u = n[a], o = u.getSnapshot;
          u = u.value;
          try {
            if (!Ce(o(), u)) return false;
          } catch {
            return false;
          }
        }
        if (n = e.child, e.subtreeFlags & 16384 && n !== null) n.return = e, e = n;
        else {
          if (e === t) break;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) return true;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      }
      return true;
    }
    function Zn(t, e, n, a) {
      e &= ~jc, e &= ~xl, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
      for (var u = e; 0 < u; ) {
        var o = 31 - Ut(u), d = 1 << o;
        a[o] = -1, u &= ~d;
      }
      n !== 0 && cs(t, n, e);
    }
    function xu() {
      return (At & 6) === 0 ? (ti(0), false) : true;
    }
    function Hc() {
      if (ht !== null) {
        if (Dt === 0) var t = ht.return;
        else t = ht, gn = fl = null, ec(t), Kl = null, Ra = 0, t = ht;
        for (; t !== null; ) Oh(t.alternate, t), t = t.return;
        ht = null;
      }
    }
    function la(t, e) {
      var n = t.timeoutHandle;
      n !== -1 && (t.timeoutHandle = -1, e1(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), Mn = 0, Hc(), Rt = t, ht = n = mn(t.current, null), pt = e, Dt = 0, Oe = null, Vn = false, ta = ba(t, e), _c = false, ea = we = jc = xl = Xn = Qt = 0, ve = $a = null, Uc = false, (e & 8) !== 0 && (e |= e & 32);
      var a = t.entangledLanes;
      if (a !== 0) for (t = t.entanglements, a &= e; 0 < a; ) {
        var u = 31 - Ut(a), o = 1 << u;
        e |= t[u], a &= ~o;
      }
      return Cn = e, Yi(), n;
    }
    function td(t, e) {
      it = null, O.H = Qa, e === Zl || e === Fi ? (e = gf(), Dt = 3) : e === Xr ? (e = gf(), Dt = 4) : Dt = e === yc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Oe = e, ht === null && (Qt = 1, ou(t, He(e, t.current)));
    }
    function ed() {
      var t = Ne.current;
      return t === null ? true : (pt & 4194048) === pt ? Xe === null : (pt & 62914560) === pt || (pt & 536870912) !== 0 ? t === Xe : false;
    }
    function nd() {
      var t = O.H;
      return O.H = Qa, t === null ? Qa : t;
    }
    function ld() {
      var t = O.A;
      return O.A = _y, t;
    }
    function Su() {
      Qt = 4, Vn || (pt & 4194048) !== pt && Ne.current !== null || (ta = true), (Xn & 134217727) === 0 && (xl & 134217727) === 0 || Rt === null || Zn(Rt, pt, we, false);
    }
    function qc(t, e, n) {
      var a = At;
      At |= 2;
      var u = nd(), o = ld();
      (Rt !== t || pt !== e) && (bu = null, la(t, e)), e = false;
      var d = Qt;
      t: do
        try {
          if (Dt !== 0 && ht !== null) {
            var p = ht, T = Oe;
            switch (Dt) {
              case 8:
                Hc(), d = 6;
                break t;
              case 3:
              case 2:
              case 9:
              case 6:
                Ne.current === null && (e = true);
                var N = Dt;
                if (Dt = 0, Oe = null, aa(t, p, T, N), n && ta) {
                  d = 0;
                  break t;
                }
                break;
              default:
                N = Dt, Dt = 0, Oe = null, aa(t, p, T, N);
            }
          }
          Ry(), d = Qt;
          break;
        } catch (_) {
          td(t, _);
        }
      while (true);
      return e && t.shellSuspendCounter++, gn = fl = null, At = a, O.H = u, O.A = o, ht === null && (Rt = null, pt = 0, Yi()), d;
    }
    function Ry() {
      for (; ht !== null; ) ad(ht);
    }
    function By(t, e) {
      var n = At;
      At |= 2;
      var a = nd(), u = ld();
      Rt !== t || pt !== e ? (bu = null, vu = oe() + 500, la(t, e)) : ta = ba(t, e);
      t: do
        try {
          if (Dt !== 0 && ht !== null) {
            e = ht;
            var o = Oe;
            e: switch (Dt) {
              case 1:
                Dt = 0, Oe = null, aa(t, e, o, 1);
                break;
              case 2:
              case 9:
                if (mf(o)) {
                  Dt = 0, Oe = null, id(e);
                  break;
                }
                e = function() {
                  Dt !== 2 && Dt !== 9 || Rt !== t || (Dt = 7), ln(t);
                }, o.then(e, e);
                break t;
              case 3:
                Dt = 7;
                break t;
              case 4:
                Dt = 5;
                break t;
              case 7:
                mf(o) ? (Dt = 0, Oe = null, id(e)) : (Dt = 0, Oe = null, aa(t, e, o, 7));
                break;
              case 5:
                var d = null;
                switch (ht.tag) {
                  case 26:
                    d = ht.memoizedState;
                  case 5:
                  case 27:
                    var p = ht;
                    if (d ? Qd(d) : p.stateNode.complete) {
                      Dt = 0, Oe = null;
                      var T = p.sibling;
                      if (T !== null) ht = T;
                      else {
                        var N = p.return;
                        N !== null ? (ht = N, Eu(N)) : ht = null;
                      }
                      break e;
                    }
                }
                Dt = 0, Oe = null, aa(t, e, o, 5);
                break;
              case 6:
                Dt = 0, Oe = null, aa(t, e, o, 6);
                break;
              case 8:
                Hc(), Qt = 6;
                break t;
              default:
                throw Error(c(462));
            }
          }
          Ly();
          break;
        } catch (_) {
          td(t, _);
        }
      while (true);
      return gn = fl = null, O.H = a, O.A = u, At = n, ht !== null ? 0 : (Rt = null, pt = 0, Yi(), Qt);
    }
    function Ly() {
      for (; ht !== null && !Pu(); ) ad(ht);
    }
    function ad(t) {
      var e = Nh(t.alternate, t, Cn);
      t.memoizedProps = t.pendingProps, e === null ? Eu(t) : ht = e;
    }
    function id(t) {
      var e = t, n = e.alternate;
      switch (e.tag) {
        case 15:
        case 0:
          e = Eh(n, e, e.pendingProps, e.type, void 0, pt);
          break;
        case 11:
          e = Eh(n, e, e.pendingProps, e.type.render, e.ref, pt);
          break;
        case 5:
          ec(e);
        default:
          Oh(n, e), e = ht = nf(e, Cn), e = Nh(n, e, Cn);
      }
      t.memoizedProps = t.pendingProps, e === null ? Eu(t) : ht = e;
    }
    function aa(t, e, n, a) {
      gn = fl = null, ec(e), Kl = null, Ra = 0;
      var u = e.return;
      try {
        if (Cy(t, u, e, n, pt)) {
          Qt = 1, ou(t, He(n, t.current)), ht = null;
          return;
        }
      } catch (o) {
        if (u !== null) throw ht = u, o;
        Qt = 1, ou(t, He(n, t.current)), ht = null;
        return;
      }
      e.flags & 32768 ? (vt || a === 1 ? t = true : ta || (pt & 536870912) !== 0 ? t = false : (Vn = t = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Ne.current, a !== null && a.tag === 13 && (a.flags |= 16384))), ud(e, t)) : Eu(e);
    }
    function Eu(t) {
      var e = t;
      do {
        if ((e.flags & 32768) !== 0) {
          ud(e, Vn);
          return;
        }
        t = e.return;
        var n = Dy(e.alternate, e, Cn);
        if (n !== null) {
          ht = n;
          return;
        }
        if (e = e.sibling, e !== null) {
          ht = e;
          return;
        }
        ht = e = t;
      } while (e !== null);
      Qt === 0 && (Qt = 5);
    }
    function ud(t, e) {
      do {
        var n = Oy(t.alternate, t);
        if (n !== null) {
          n.flags &= 32767, ht = n;
          return;
        }
        if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
          ht = t;
          return;
        }
        ht = t = n;
      } while (t !== null);
      Qt = 6, ht = null;
    }
    function rd(t, e, n, a, u, o, d, p, T) {
      t.cancelPendingCommit = null;
      do
        zu();
      while (Pt !== 0);
      if ((At & 6) !== 0) throw Error(c(327));
      if (e !== null) {
        if (e === t.current) throw Error(c(177));
        if (o = e.lanes | e.childLanes, o |= Nr, yg(t, n, o, d, p, T), t === Rt && (ht = Rt = null, pt = 0), na = e, Gn = t, Mn = n, Rc = o, Bc = u, Ih = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Vy(nt, function() {
          return hd(), null;
        })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
          a = O.T, O.T = null, u = V.p, V.p = 2, d = At, At |= 4;
          try {
            wy(t, e, n);
          } finally {
            At = d, V.p = u, O.T = a;
          }
        }
        Pt = 1, cd(), od(), sd();
      }
    }
    function cd() {
      if (Pt === 1) {
        Pt = 0;
        var t = Gn, e = na, n = (e.flags & 13878) !== 0;
        if ((e.subtreeFlags & 13878) !== 0 || n) {
          n = O.T, O.T = null;
          var a = V.p;
          V.p = 2;
          var u = At;
          At |= 4;
          try {
            Vh(e, t);
            var o = $c, d = Ks(t.containerInfo), p = o.focusedElem, T = o.selectionRange;
            if (d !== p && p && p.ownerDocument && Zs(p.ownerDocument.documentElement, p)) {
              if (T !== null && zr(p)) {
                var N = T.start, _ = T.end;
                if (_ === void 0 && (_ = N), "selectionStart" in p) p.selectionStart = N, p.selectionEnd = Math.min(_, p.value.length);
                else {
                  var R = p.ownerDocument || document, D = R && R.defaultView || window;
                  if (D.getSelection) {
                    var w = D.getSelection(), J = p.textContent.length, et = Math.min(T.start, J), _t = T.end === void 0 ? et : Math.min(T.end, J);
                    !w.extend && et > _t && (d = _t, _t = et, et = d);
                    var C = Gs(p, et), A = Gs(p, _t);
                    if (C && A && (w.rangeCount !== 1 || w.anchorNode !== C.node || w.anchorOffset !== C.offset || w.focusNode !== A.node || w.focusOffset !== A.offset)) {
                      var M = R.createRange();
                      M.setStart(C.node, C.offset), w.removeAllRanges(), et > _t ? (w.addRange(M), w.extend(A.node, A.offset)) : (M.setEnd(A.node, A.offset), w.addRange(M));
                    }
                  }
                }
              }
              for (R = [], w = p; w = w.parentNode; ) w.nodeType === 1 && R.push({
                element: w,
                left: w.scrollLeft,
                top: w.scrollTop
              });
              for (typeof p.focus == "function" && p.focus(), p = 0; p < R.length; p++) {
                var U = R[p];
                U.element.scrollLeft = U.left, U.element.scrollTop = U.top;
              }
            }
            Uu = !!Wc, $c = Wc = null;
          } finally {
            At = u, V.p = a, O.T = n;
          }
        }
        t.current = e, Pt = 2;
      }
    }
    function od() {
      if (Pt === 2) {
        Pt = 0;
        var t = Gn, e = na, n = (e.flags & 8772) !== 0;
        if ((e.subtreeFlags & 8772) !== 0 || n) {
          n = O.T, O.T = null;
          var a = V.p;
          V.p = 2;
          var u = At;
          At |= 4;
          try {
            Bh(t, e.alternate, e);
          } finally {
            At = u, V.p = a, O.T = n;
          }
        }
        Pt = 3;
      }
    }
    function sd() {
      if (Pt === 4 || Pt === 3) {
        Pt = 0, tr();
        var t = Gn, e = na, n = Mn, a = Ih;
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Pt = 5 : (Pt = 0, na = Gn = null, fd(t, t.pendingLanes));
        var u = t.pendingLanes;
        if (u === 0 && (Qn = null), ar(n), e = e.stateNode, $t && typeof $t.onCommitFiberRoot == "function") try {
          $t.onCommitFiberRoot(se, e, void 0, (e.current.flags & 128) === 128);
        } catch {
        }
        if (a !== null) {
          e = O.T, u = V.p, V.p = 2, O.T = null;
          try {
            for (var o = t.onRecoverableError, d = 0; d < a.length; d++) {
              var p = a[d];
              o(p.value, {
                componentStack: p.stack
              });
            }
          } finally {
            O.T = e, V.p = u;
          }
        }
        (Mn & 3) !== 0 && zu(), ln(t), u = t.pendingLanes, (n & 261930) !== 0 && (u & 42) !== 0 ? t === Lc ? Pa++ : (Pa = 0, Lc = t) : Pa = 0, ti(0);
      }
    }
    function fd(t, e) {
      (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, ja(e)));
    }
    function zu() {
      return cd(), od(), sd(), hd();
    }
    function hd() {
      if (Pt !== 5) return false;
      var t = Gn, e = Rc;
      Rc = 0;
      var n = ar(Mn), a = O.T, u = V.p;
      try {
        V.p = 32 > n ? 32 : n, O.T = null, n = Bc, Bc = null;
        var o = Gn, d = Mn;
        if (Pt = 0, na = Gn = null, Mn = 0, (At & 6) !== 0) throw Error(c(331));
        var p = At;
        if (At |= 4, Kh(o.current), Qh(o, o.current, d, n), At = p, ti(0, false), $t && typeof $t.onPostCommitFiberRoot == "function") try {
          $t.onPostCommitFiberRoot(se, o);
        } catch {
        }
        return true;
      } finally {
        V.p = u, O.T = a, fd(t, e);
      }
    }
    function dd(t, e, n) {
      e = He(n, e), e = gc(t.stateNode, e, 2), t = Ln(t, e, 2), t !== null && (xa(t, 2), ln(t));
    }
    function Ot(t, e, n) {
      if (t.tag === 3) dd(t, t, n);
      else for (; e !== null; ) {
        if (e.tag === 3) {
          dd(e, t, n);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Qn === null || !Qn.has(a))) {
            t = He(n, t), n = mh(2), a = Ln(e, n, 2), a !== null && (ph(n, a, e, t), xa(a, 2), ln(a));
            break;
          }
        }
        e = e.return;
      }
    }
    function Yc(t, e, n) {
      var a = t.pingCache;
      if (a === null) {
        a = t.pingCache = new jy();
        var u = /* @__PURE__ */ new Set();
        a.set(e, u);
      } else u = a.get(e), u === void 0 && (u = /* @__PURE__ */ new Set(), a.set(e, u));
      u.has(n) || (_c = true, u.add(n), t = Hy.bind(null, t, e, n), e.then(t, t));
    }
    function Hy(t, e, n) {
      var a = t.pingCache;
      a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, Rt === t && (pt & n) === n && (Qt === 4 || Qt === 3 && (pt & 62914560) === pt && 300 > oe() - yu ? (At & 2) === 0 && la(t, 0) : jc |= n, ea === pt && (ea = 0)), ln(t);
    }
    function md(t, e) {
      e === 0 && (e = rs()), t = cl(t, e), t !== null && (xa(t, e), ln(t));
    }
    function qy(t) {
      var e = t.memoizedState, n = 0;
      e !== null && (n = e.retryLane), md(t, n);
    }
    function Yy(t, e) {
      var n = 0;
      switch (t.tag) {
        case 31:
        case 13:
          var a = t.stateNode, u = t.memoizedState;
          u !== null && (n = u.retryLane);
          break;
        case 19:
          a = t.stateNode;
          break;
        case 22:
          a = t.stateNode._retryCache;
          break;
        default:
          throw Error(c(314));
      }
      a !== null && a.delete(e), md(t, n);
    }
    function Vy(t, e) {
      return Al(t, e);
    }
    var Tu = null, ia = null, Vc = false, Au = false, Xc = false, Kn = 0;
    function ln(t) {
      t !== ia && t.next === null && (ia === null ? Tu = ia = t : ia = ia.next = t), Au = true, Vc || (Vc = true, Qy());
    }
    function ti(t, e) {
      if (!Xc && Au) {
        Xc = true;
        do
          for (var n = false, a = Tu; a !== null; ) {
            if (t !== 0) {
              var u = a.pendingLanes;
              if (u === 0) var o = 0;
              else {
                var d = a.suspendedLanes, p = a.pingedLanes;
                o = (1 << 31 - Ut(42 | t) + 1) - 1, o &= u & ~(d & ~p), o = o & 201326741 ? o & 201326741 | 1 : o ? o | 2 : 0;
              }
              o !== 0 && (n = true, vd(a, o));
            } else o = pt, o = Di(a, a === Rt ? o : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (o & 3) === 0 || ba(a, o) || (n = true, vd(a, o));
            a = a.next;
          }
        while (n);
        Xc = false;
      }
    }
    function Xy() {
      pd();
    }
    function pd() {
      Au = Vc = false;
      var t = 0;
      Kn !== 0 && t1() && (t = Kn);
      for (var e = oe(), n = null, a = Tu; a !== null; ) {
        var u = a.next, o = gd(a, e);
        o === 0 ? (a.next = null, n === null ? Tu = u : n.next = u, u === null && (ia = n)) : (n = a, (t !== 0 || (o & 3) !== 0) && (Au = true)), a = u;
      }
      Pt !== 0 && Pt !== 5 || ti(t), Kn !== 0 && (Kn = 0);
    }
    function gd(t, e) {
      for (var n = t.suspendedLanes, a = t.pingedLanes, u = t.expirationTimes, o = t.pendingLanes & -62914561; 0 < o; ) {
        var d = 31 - Ut(o), p = 1 << d, T = u[d];
        T === -1 ? ((p & n) === 0 || (p & a) !== 0) && (u[d] = gg(p, e)) : T <= e && (t.expiredLanes |= p), o &= ~p;
      }
      if (e = Rt, n = pt, n = Di(t, t === e ? n : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a = t.callbackNode, n === 0 || t === e && (Dt === 2 || Dt === 9) || t.cancelPendingCommit !== null) return a !== null && a !== null && va(a), t.callbackNode = null, t.callbackPriority = 0;
      if ((n & 3) === 0 || ba(t, n)) {
        if (e = n & -n, e === t.callbackPriority) return e;
        switch (a !== null && va(a), ar(n)) {
          case 2:
          case 8:
            n = X;
            break;
          case 32:
            n = nt;
            break;
          case 268435456:
            n = Nt;
            break;
          default:
            n = nt;
        }
        return a = yd.bind(null, t), n = Al(n, a), t.callbackPriority = e, t.callbackNode = n, e;
      }
      return a !== null && a !== null && va(a), t.callbackPriority = 2, t.callbackNode = null, 2;
    }
    function yd(t, e) {
      if (Pt !== 0 && Pt !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
      var n = t.callbackNode;
      if (zu() && t.callbackNode !== n) return null;
      var a = pt;
      return a = Di(t, t === Rt ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a === 0 ? null : ($h(t, a, e), gd(t, oe()), t.callbackNode != null && t.callbackNode === n ? yd.bind(null, t) : null);
    }
    function vd(t, e) {
      if (zu()) return null;
      $h(t, e, true);
    }
    function Qy() {
      n1(function() {
        (At & 6) !== 0 ? Al(j, Xy) : pd();
      });
    }
    function Qc() {
      if (Kn === 0) {
        var t = Ql;
        t === 0 && (t = Ci, Ci <<= 1, (Ci & 261888) === 0 && (Ci = 256)), Kn = t;
      }
      return Kn;
    }
    function bd(t) {
      return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : _i("" + t);
    }
    function xd(t, e) {
      var n = e.ownerDocument.createElement("input");
      return n.name = e.name, n.value = e.value, t.id && n.setAttribute("form", t.id), e.parentNode.insertBefore(n, e), t = new FormData(t), n.parentNode.removeChild(n), t;
    }
    function Gy(t, e, n, a, u) {
      if (e === "submit" && n && n.stateNode === u) {
        var o = bd((u[de] || null).action), d = a.submitter;
        d && (e = (e = d[de] || null) ? bd(e.formAction) : d.getAttribute("formAction"), e !== null && (o = e, d = null));
        var p = new Bi("action", "action", null, a, u);
        t.push({
          event: p,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (a.defaultPrevented) {
                  if (Kn !== 0) {
                    var T = d ? xd(u, d) : new FormData(u);
                    sc(n, {
                      pending: true,
                      data: T,
                      method: u.method,
                      action: o
                    }, null, T);
                  }
                } else typeof o == "function" && (p.preventDefault(), T = d ? xd(u, d) : new FormData(u), sc(n, {
                  pending: true,
                  data: T,
                  method: u.method,
                  action: o
                }, o, T));
              },
              currentTarget: u
            }
          ]
        });
      }
    }
    for (var Gc = 0; Gc < Mr.length; Gc++) {
      var Zc = Mr[Gc], Zy = Zc.toLowerCase(), Ky = Zc[0].toUpperCase() + Zc.slice(1);
      Fe(Zy, "on" + Ky);
    }
    Fe(Is, "onAnimationEnd"), Fe(Ws, "onAnimationIteration"), Fe($s, "onAnimationStart"), Fe("dblclick", "onDoubleClick"), Fe("focusin", "onFocus"), Fe("focusout", "onBlur"), Fe(oy, "onTransitionRun"), Fe(sy, "onTransitionStart"), Fe(fy, "onTransitionCancel"), Fe(Ps, "onTransitionEnd"), Ol("onMouseEnter", [
      "mouseout",
      "mouseover"
    ]), Ol("onMouseLeave", [
      "mouseout",
      "mouseover"
    ]), Ol("onPointerEnter", [
      "pointerout",
      "pointerover"
    ]), Ol("onPointerLeave", [
      "pointerout",
      "pointerover"
    ]), al("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), al("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), al("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), al("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), al("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), al("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var ei = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Jy = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ei));
    function Sd(t, e) {
      e = (e & 4) !== 0;
      for (var n = 0; n < t.length; n++) {
        var a = t[n], u = a.event;
        a = a.listeners;
        t: {
          var o = void 0;
          if (e) for (var d = a.length - 1; 0 <= d; d--) {
            var p = a[d], T = p.instance, N = p.currentTarget;
            if (p = p.listener, T !== o && u.isPropagationStopped()) break t;
            o = p, u.currentTarget = N;
            try {
              o(u);
            } catch (_) {
              qi(_);
            }
            u.currentTarget = null, o = T;
          }
          else for (d = 0; d < a.length; d++) {
            if (p = a[d], T = p.instance, N = p.currentTarget, p = p.listener, T !== o && u.isPropagationStopped()) break t;
            o = p, u.currentTarget = N;
            try {
              o(u);
            } catch (_) {
              qi(_);
            }
            u.currentTarget = null, o = T;
          }
        }
      }
    }
    function dt(t, e) {
      var n = e[ir];
      n === void 0 && (n = e[ir] = /* @__PURE__ */ new Set());
      var a = t + "__bubble";
      n.has(a) || (Ed(e, t, 2, false), n.add(a));
    }
    function Kc(t, e, n) {
      var a = 0;
      e && (a |= 4), Ed(n, t, a, e);
    }
    var Cu = "_reactListening" + Math.random().toString(36).slice(2);
    function Jc(t) {
      if (!t[Cu]) {
        t[Cu] = true, ms.forEach(function(n) {
          n !== "selectionchange" && (Jy.has(n) || Kc(n, false, t), Kc(n, true, t));
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[Cu] || (e[Cu] = true, Kc("selectionchange", false, e));
      }
    }
    function Ed(t, e, n, a) {
      switch (Wd(e)) {
        case 2:
          var u = E1;
          break;
        case 8:
          u = z1;
          break;
        default:
          u = oo;
      }
      n = u.bind(null, e, n, t), u = void 0, !mr || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (u = true), a ? u !== void 0 ? t.addEventListener(e, n, {
        capture: true,
        passive: u
      }) : t.addEventListener(e, n, true) : u !== void 0 ? t.addEventListener(e, n, {
        passive: u
      }) : t.addEventListener(e, n, false);
    }
    function Fc(t, e, n, a, u) {
      var o = a;
      if ((e & 1) === 0 && (e & 2) === 0 && a !== null) t: for (; ; ) {
        if (a === null) return;
        var d = a.tag;
        if (d === 3 || d === 4) {
          var p = a.stateNode.containerInfo;
          if (p === u) break;
          if (d === 4) for (d = a.return; d !== null; ) {
            var T = d.tag;
            if ((T === 3 || T === 4) && d.stateNode.containerInfo === u) return;
            d = d.return;
          }
          for (; p !== null; ) {
            if (d = Ml(p), d === null) return;
            if (T = d.tag, T === 5 || T === 6 || T === 26 || T === 27) {
              a = o = d;
              continue t;
            }
            p = p.parentNode;
          }
        }
        a = a.return;
      }
      Cs(function() {
        var N = o, _ = hr(n), R = [];
        t: {
          var D = tf.get(t);
          if (D !== void 0) {
            var w = Bi, J = t;
            switch (t) {
              case "keypress":
                if (Ui(n) === 0) break t;
              case "keydown":
              case "keyup":
                w = Yg;
                break;
              case "focusin":
                J = "focus", w = vr;
                break;
              case "focusout":
                J = "blur", w = vr;
                break;
              case "beforeblur":
              case "afterblur":
                w = vr;
                break;
              case "click":
                if (n.button === 2) break t;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                w = Ds;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                w = Dg;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                w = Qg;
                break;
              case Is:
              case Ws:
              case $s:
                w = kg;
                break;
              case Ps:
                w = Zg;
                break;
              case "scroll":
              case "scrollend":
                w = Mg;
                break;
              case "wheel":
                w = Jg;
                break;
              case "copy":
              case "cut":
              case "paste":
                w = jg;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                w = ws;
                break;
              case "toggle":
              case "beforetoggle":
                w = Ig;
            }
            var et = (e & 4) !== 0, _t = !et && (t === "scroll" || t === "scrollend"), C = et ? D !== null ? D + "Capture" : null : D;
            et = [];
            for (var A = N, M; A !== null; ) {
              var U = A;
              if (M = U.stateNode, U = U.tag, U !== 5 && U !== 26 && U !== 27 || M === null || C === null || (U = za(A, C), U != null && et.push(ni(A, U, M))), _t) break;
              A = A.return;
            }
            0 < et.length && (D = new w(D, J, null, n, _), R.push({
              event: D,
              listeners: et
            }));
          }
        }
        if ((e & 7) === 0) {
          t: {
            if (D = t === "mouseover" || t === "pointerover", w = t === "mouseout" || t === "pointerout", D && n !== fr && (J = n.relatedTarget || n.fromElement) && (Ml(J) || J[Cl])) break t;
            if ((w || D) && (D = _.window === _ ? _ : (D = _.ownerDocument) ? D.defaultView || D.parentWindow : window, w ? (J = n.relatedTarget || n.toElement, w = N, J = J ? Ml(J) : null, J !== null && (_t = f(J), et = J.tag, J !== _t || et !== 5 && et !== 27 && et !== 6) && (J = null)) : (w = null, J = N), w !== J)) {
              if (et = Ds, U = "onMouseLeave", C = "onMouseEnter", A = "mouse", (t === "pointerout" || t === "pointerover") && (et = ws, U = "onPointerLeave", C = "onPointerEnter", A = "pointer"), _t = w == null ? D : Ea(w), M = J == null ? D : Ea(J), D = new et(U, A + "leave", w, n, _), D.target = _t, D.relatedTarget = M, U = null, Ml(_) === N && (et = new et(C, A + "enter", J, n, _), et.target = M, et.relatedTarget = _t, U = et), _t = U, w && J) e: {
                for (et = Fy, C = w, A = J, M = 0, U = C; U; U = et(U)) M++;
                U = 0;
                for (var $ = A; $; $ = et($)) U++;
                for (; 0 < M - U; ) C = et(C), M--;
                for (; 0 < U - M; ) A = et(A), U--;
                for (; M--; ) {
                  if (C === A || A !== null && C === A.alternate) {
                    et = C;
                    break e;
                  }
                  C = et(C), A = et(A);
                }
                et = null;
              }
              else et = null;
              w !== null && zd(R, D, w, et, false), J !== null && _t !== null && zd(R, _t, J, et, true);
            }
          }
          t: {
            if (D = N ? Ea(N) : window, w = D.nodeName && D.nodeName.toLowerCase(), w === "select" || w === "input" && D.type === "file") var Et = Hs;
            else if (Bs(D)) if (qs) Et = uy;
            else {
              Et = ay;
              var F = ly;
            }
            else w = D.nodeName, !w || w.toLowerCase() !== "input" || D.type !== "checkbox" && D.type !== "radio" ? N && sr(N.elementType) && (Et = Hs) : Et = iy;
            if (Et && (Et = Et(t, N))) {
              Ls(R, Et, n, _);
              break t;
            }
            F && F(t, D, N), t === "focusout" && N && D.type === "number" && N.memoizedProps.value != null && or(D, "number", D.value);
          }
          switch (F = N ? Ea(N) : window, t) {
            case "focusin":
              (Bs(F) || F.contentEditable === "true") && (Rl = F, Tr = N, wa = null);
              break;
            case "focusout":
              wa = Tr = Rl = null;
              break;
            case "mousedown":
              Ar = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Ar = false, Js(R, n, _);
              break;
            case "selectionchange":
              if (cy) break;
            case "keydown":
            case "keyup":
              Js(R, n, _);
          }
          var rt;
          if (xr) t: {
            switch (t) {
              case "compositionstart":
                var gt = "onCompositionStart";
                break t;
              case "compositionend":
                gt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                gt = "onCompositionUpdate";
                break t;
            }
            gt = void 0;
          }
          else Ul ? Us(t, n) && (gt = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (gt = "onCompositionStart");
          gt && (ks && n.locale !== "ko" && (Ul || gt !== "onCompositionStart" ? gt === "onCompositionEnd" && Ul && (rt = Ms()) : (wn = _, pr = "value" in wn ? wn.value : wn.textContent, Ul = true)), F = Mu(N, gt), 0 < F.length && (gt = new Os(gt, t, null, n, _), R.push({
            event: gt,
            listeners: F
          }), rt ? gt.data = rt : (rt = Rs(n), rt !== null && (gt.data = rt)))), (rt = $g ? Pg(t, n) : ty(t, n)) && (gt = Mu(N, "onBeforeInput"), 0 < gt.length && (F = new Os("onBeforeInput", "beforeinput", null, n, _), R.push({
            event: F,
            listeners: gt
          }), F.data = rt)), Gy(R, t, N, n, _);
        }
        Sd(R, e);
      });
    }
    function ni(t, e, n) {
      return {
        instance: t,
        listener: e,
        currentTarget: n
      };
    }
    function Mu(t, e) {
      for (var n = e + "Capture", a = []; t !== null; ) {
        var u = t, o = u.stateNode;
        if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || o === null || (u = za(t, n), u != null && a.unshift(ni(t, u, o)), u = za(t, e), u != null && a.push(ni(t, u, o))), t.tag === 3) return a;
        t = t.return;
      }
      return [];
    }
    function Fy(t) {
      if (t === null) return null;
      do
        t = t.return;
      while (t && t.tag !== 5 && t.tag !== 27);
      return t || null;
    }
    function zd(t, e, n, a, u) {
      for (var o = e._reactName, d = []; n !== null && n !== a; ) {
        var p = n, T = p.alternate, N = p.stateNode;
        if (p = p.tag, T !== null && T === a) break;
        p !== 5 && p !== 26 && p !== 27 || N === null || (T = N, u ? (N = za(n, o), N != null && d.unshift(ni(n, N, T))) : u || (N = za(n, o), N != null && d.push(ni(n, N, T)))), n = n.return;
      }
      d.length !== 0 && t.push({
        event: e,
        listeners: d
      });
    }
    var Iy = /\r\n?/g, Wy = /\u0000|\uFFFD/g;
    function Td(t) {
      return (typeof t == "string" ? t : "" + t).replace(Iy, `
`).replace(Wy, "");
    }
    function Ad(t, e) {
      return e = Td(e), Td(t) === e;
    }
    function kt(t, e, n, a, u, o) {
      switch (n) {
        case "children":
          typeof a == "string" ? e === "body" || e === "textarea" && a === "" || kl(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && kl(t, "" + a);
          break;
        case "className":
          wi(t, "class", a);
          break;
        case "tabIndex":
          wi(t, "tabindex", a);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          wi(t, n, a);
          break;
        case "style":
          Ts(t, a, o);
          break;
        case "data":
          if (e !== "object") {
            wi(t, "data", a);
            break;
          }
        case "src":
        case "href":
          if (a === "" && (e !== "a" || n !== "href")) {
            t.removeAttribute(n);
            break;
          }
          if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
            t.removeAttribute(n);
            break;
          }
          a = _i("" + a), t.setAttribute(n, a);
          break;
        case "action":
        case "formAction":
          if (typeof a == "function") {
            t.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
            break;
          } else typeof o == "function" && (n === "formAction" ? (e !== "input" && kt(t, e, "name", u.name, u, null), kt(t, e, "formEncType", u.formEncType, u, null), kt(t, e, "formMethod", u.formMethod, u, null), kt(t, e, "formTarget", u.formTarget, u, null)) : (kt(t, e, "encType", u.encType, u, null), kt(t, e, "method", u.method, u, null), kt(t, e, "target", u.target, u, null)));
          if (a == null || typeof a == "symbol" || typeof a == "boolean") {
            t.removeAttribute(n);
            break;
          }
          a = _i("" + a), t.setAttribute(n, a);
          break;
        case "onClick":
          a != null && (t.onclick = hn);
          break;
        case "onScroll":
          a != null && dt("scroll", t);
          break;
        case "onScrollEnd":
          a != null && dt("scrollend", t);
          break;
        case "dangerouslySetInnerHTML":
          if (a != null) {
            if (typeof a != "object" || !("__html" in a)) throw Error(c(61));
            if (n = a.__html, n != null) {
              if (u.children != null) throw Error(c(60));
              t.innerHTML = n;
            }
          }
          break;
        case "multiple":
          t.multiple = a && typeof a != "function" && typeof a != "symbol";
          break;
        case "muted":
          t.muted = a && typeof a != "function" && typeof a != "symbol";
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
          if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
            t.removeAttribute("xlink:href");
            break;
          }
          n = _i("" + a), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, "" + a) : t.removeAttribute(n);
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
          a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
          break;
        case "capture":
        case "download":
          a === true ? t.setAttribute(n, "") : a !== false && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, a) : t.removeAttribute(n);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(n, a) : t.removeAttribute(n);
          break;
        case "rowSpan":
        case "start":
          a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(n) : t.setAttribute(n, a);
          break;
        case "popover":
          dt("beforetoggle", t), dt("toggle", t), Oi(t, "popover", a);
          break;
        case "xlinkActuate":
          fn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
          break;
        case "xlinkArcrole":
          fn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
          break;
        case "xlinkRole":
          fn(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
          break;
        case "xlinkShow":
          fn(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
          break;
        case "xlinkTitle":
          fn(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
          break;
        case "xlinkType":
          fn(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
          break;
        case "xmlBase":
          fn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
          break;
        case "xmlLang":
          fn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
          break;
        case "xmlSpace":
          fn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
          break;
        case "is":
          Oi(t, "is", a);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Ag.get(n) || n, Oi(t, n, a));
      }
    }
    function Ic(t, e, n, a, u, o) {
      switch (n) {
        case "style":
          Ts(t, a, o);
          break;
        case "dangerouslySetInnerHTML":
          if (a != null) {
            if (typeof a != "object" || !("__html" in a)) throw Error(c(61));
            if (n = a.__html, n != null) {
              if (u.children != null) throw Error(c(60));
              t.innerHTML = n;
            }
          }
          break;
        case "children":
          typeof a == "string" ? kl(t, a) : (typeof a == "number" || typeof a == "bigint") && kl(t, "" + a);
          break;
        case "onScroll":
          a != null && dt("scroll", t);
          break;
        case "onScrollEnd":
          a != null && dt("scrollend", t);
          break;
        case "onClick":
          a != null && (t.onclick = hn);
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
          if (!ps.hasOwnProperty(n)) t: {
            if (n[0] === "o" && n[1] === "n" && (u = n.endsWith("Capture"), e = n.slice(2, u ? n.length - 7 : void 0), o = t[de] || null, o = o != null ? o[n] : null, typeof o == "function" && t.removeEventListener(e, o, u), typeof a == "function")) {
              typeof o != "function" && o !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(e, a, u);
              break t;
            }
            n in t ? t[n] = a : a === true ? t.setAttribute(n, "") : Oi(t, n, a);
          }
      }
    }
    function re(t, e, n) {
      switch (e) {
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
          dt("error", t), dt("load", t);
          var a = false, u = false, o;
          for (o in n) if (n.hasOwnProperty(o)) {
            var d = n[o];
            if (d != null) switch (o) {
              case "src":
                a = true;
                break;
              case "srcSet":
                u = true;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, e));
              default:
                kt(t, e, o, d, n, null);
            }
          }
          u && kt(t, e, "srcSet", n.srcSet, n, null), a && kt(t, e, "src", n.src, n, null);
          return;
        case "input":
          dt("invalid", t);
          var p = o = d = u = null, T = null, N = null;
          for (a in n) if (n.hasOwnProperty(a)) {
            var _ = n[a];
            if (_ != null) switch (a) {
              case "name":
                u = _;
                break;
              case "type":
                d = _;
                break;
              case "checked":
                T = _;
                break;
              case "defaultChecked":
                N = _;
                break;
              case "value":
                o = _;
                break;
              case "defaultValue":
                p = _;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null) throw Error(c(137, e));
                break;
              default:
                kt(t, e, a, _, n, null);
            }
          }
          xs(t, o, p, T, N, d, u, false);
          return;
        case "select":
          dt("invalid", t), a = d = o = null;
          for (u in n) if (n.hasOwnProperty(u) && (p = n[u], p != null)) switch (u) {
            case "value":
              o = p;
              break;
            case "defaultValue":
              d = p;
              break;
            case "multiple":
              a = p;
            default:
              kt(t, e, u, p, n, null);
          }
          e = o, n = d, t.multiple = !!a, e != null ? wl(t, !!a, e, false) : n != null && wl(t, !!a, n, true);
          return;
        case "textarea":
          dt("invalid", t), o = u = a = null;
          for (d in n) if (n.hasOwnProperty(d) && (p = n[d], p != null)) switch (d) {
            case "value":
              a = p;
              break;
            case "defaultValue":
              u = p;
              break;
            case "children":
              o = p;
              break;
            case "dangerouslySetInnerHTML":
              if (p != null) throw Error(c(91));
              break;
            default:
              kt(t, e, d, p, n, null);
          }
          Es(t, a, u, o);
          return;
        case "option":
          for (T in n) n.hasOwnProperty(T) && (a = n[T], a != null) && (T === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : kt(t, e, T, a, n, null));
          return;
        case "dialog":
          dt("beforetoggle", t), dt("toggle", t), dt("cancel", t), dt("close", t);
          break;
        case "iframe":
        case "object":
          dt("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < ei.length; a++) dt(ei[a], t);
          break;
        case "image":
          dt("error", t), dt("load", t);
          break;
        case "details":
          dt("toggle", t);
          break;
        case "embed":
        case "source":
        case "link":
          dt("error", t), dt("load", t);
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
          for (N in n) if (n.hasOwnProperty(N) && (a = n[N], a != null)) switch (N) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(c(137, e));
            default:
              kt(t, e, N, a, n, null);
          }
          return;
        default:
          if (sr(e)) {
            for (_ in n) n.hasOwnProperty(_) && (a = n[_], a !== void 0 && Ic(t, e, _, a, n, void 0));
            return;
          }
      }
      for (p in n) n.hasOwnProperty(p) && (a = n[p], a != null && kt(t, e, p, a, n, null));
    }
    function $y(t, e, n, a) {
      switch (e) {
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
          var u = null, o = null, d = null, p = null, T = null, N = null, _ = null;
          for (w in n) {
            var R = n[w];
            if (n.hasOwnProperty(w) && R != null) switch (w) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = R;
              default:
                a.hasOwnProperty(w) || kt(t, e, w, null, a, R);
            }
          }
          for (var D in a) {
            var w = a[D];
            if (R = n[D], a.hasOwnProperty(D) && (w != null || R != null)) switch (D) {
              case "type":
                o = w;
                break;
              case "name":
                u = w;
                break;
              case "checked":
                N = w;
                break;
              case "defaultChecked":
                _ = w;
                break;
              case "value":
                d = w;
                break;
              case "defaultValue":
                p = w;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (w != null) throw Error(c(137, e));
                break;
              default:
                w !== R && kt(t, e, D, w, a, R);
            }
          }
          cr(t, d, p, T, N, _, o, u);
          return;
        case "select":
          w = d = p = D = null;
          for (o in n) if (T = n[o], n.hasOwnProperty(o) && T != null) switch (o) {
            case "value":
              break;
            case "multiple":
              w = T;
            default:
              a.hasOwnProperty(o) || kt(t, e, o, null, a, T);
          }
          for (u in a) if (o = a[u], T = n[u], a.hasOwnProperty(u) && (o != null || T != null)) switch (u) {
            case "value":
              D = o;
              break;
            case "defaultValue":
              p = o;
              break;
            case "multiple":
              d = o;
            default:
              o !== T && kt(t, e, u, o, a, T);
          }
          e = p, n = d, a = w, D != null ? wl(t, !!n, D, false) : !!a != !!n && (e != null ? wl(t, !!n, e, true) : wl(t, !!n, n ? [] : "", false));
          return;
        case "textarea":
          w = D = null;
          for (p in n) if (u = n[p], n.hasOwnProperty(p) && u != null && !a.hasOwnProperty(p)) switch (p) {
            case "value":
              break;
            case "children":
              break;
            default:
              kt(t, e, p, null, a, u);
          }
          for (d in a) if (u = a[d], o = n[d], a.hasOwnProperty(d) && (u != null || o != null)) switch (d) {
            case "value":
              D = u;
              break;
            case "defaultValue":
              w = u;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (u != null) throw Error(c(91));
              break;
            default:
              u !== o && kt(t, e, d, u, a, o);
          }
          Ss(t, D, w);
          return;
        case "option":
          for (var J in n) D = n[J], n.hasOwnProperty(J) && D != null && !a.hasOwnProperty(J) && (J === "selected" ? t.selected = false : kt(t, e, J, null, a, D));
          for (T in a) D = a[T], w = n[T], a.hasOwnProperty(T) && D !== w && (D != null || w != null) && (T === "selected" ? t.selected = D && typeof D != "function" && typeof D != "symbol" : kt(t, e, T, D, a, w));
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
          for (var et in n) D = n[et], n.hasOwnProperty(et) && D != null && !a.hasOwnProperty(et) && kt(t, e, et, null, a, D);
          for (N in a) if (D = a[N], w = n[N], a.hasOwnProperty(N) && D !== w && (D != null || w != null)) switch (N) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (D != null) throw Error(c(137, e));
              break;
            default:
              kt(t, e, N, D, a, w);
          }
          return;
        default:
          if (sr(e)) {
            for (var _t in n) D = n[_t], n.hasOwnProperty(_t) && D !== void 0 && !a.hasOwnProperty(_t) && Ic(t, e, _t, void 0, a, D);
            for (_ in a) D = a[_], w = n[_], !a.hasOwnProperty(_) || D === w || D === void 0 && w === void 0 || Ic(t, e, _, D, a, w);
            return;
          }
      }
      for (var C in n) D = n[C], n.hasOwnProperty(C) && D != null && !a.hasOwnProperty(C) && kt(t, e, C, null, a, D);
      for (R in a) D = a[R], w = n[R], !a.hasOwnProperty(R) || D === w || D == null && w == null || kt(t, e, R, D, a, w);
    }
    function Cd(t) {
      switch (t) {
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
    function Py() {
      if (typeof performance.getEntriesByType == "function") {
        for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
          var u = n[a], o = u.transferSize, d = u.initiatorType, p = u.duration;
          if (o && p && Cd(d)) {
            for (d = 0, p = u.responseEnd, a += 1; a < n.length; a++) {
              var T = n[a], N = T.startTime;
              if (N > p) break;
              var _ = T.transferSize, R = T.initiatorType;
              _ && Cd(R) && (T = T.responseEnd, d += _ * (T < p ? 1 : (p - N) / (T - N)));
            }
            if (--a, e += 8 * (o + d) / (u.duration / 1e3), t++, 10 < t) break;
          }
        }
        if (0 < t) return e / t / 1e6;
      }
      return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
    }
    var Wc = null, $c = null;
    function Nu(t) {
      return t.nodeType === 9 ? t : t.ownerDocument;
    }
    function Md(t) {
      switch (t) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function Nd(t, e) {
      if (t === 0) switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
      return t === 1 && e === "foreignObject" ? 0 : t;
    }
    function Pc(t, e) {
      return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
    }
    var to = null;
    function t1() {
      var t = window.event;
      return t && t.type === "popstate" ? t === to ? false : (to = t, true) : (to = null, false);
    }
    var Dd = typeof setTimeout == "function" ? setTimeout : void 0, e1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Od = typeof Promise == "function" ? Promise : void 0, n1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Od < "u" ? function(t) {
      return Od.resolve(null).then(t).catch(l1);
    } : Dd;
    function l1(t) {
      setTimeout(function() {
        throw t;
      });
    }
    function Jn(t) {
      return t === "head";
    }
    function wd(t, e) {
      var n = e, a = 0;
      do {
        var u = n.nextSibling;
        if (t.removeChild(n), u && u.nodeType === 8) if (n = u.data, n === "/$" || n === "/&") {
          if (a === 0) {
            t.removeChild(u), oa(e);
            return;
          }
          a--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") a++;
        else if (n === "html") li(t.ownerDocument.documentElement);
        else if (n === "head") {
          n = t.ownerDocument.head, li(n);
          for (var o = n.firstChild; o; ) {
            var d = o.nextSibling, p = o.nodeName;
            o[Sa] || p === "SCRIPT" || p === "STYLE" || p === "LINK" && o.rel.toLowerCase() === "stylesheet" || n.removeChild(o), o = d;
          }
        } else n === "body" && li(t.ownerDocument.body);
        n = u;
      } while (n);
      oa(e);
    }
    function kd(t, e) {
      var n = t;
      t = 0;
      do {
        var a = n.nextSibling;
        if (n.nodeType === 1 ? e ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (e ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), a && a.nodeType === 8) if (n = a.data, n === "/$") {
          if (t === 0) break;
          t--;
        } else n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || t++;
        n = a;
      } while (n);
    }
    function eo(t) {
      var e = t.firstChild;
      for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
        var n = e;
        switch (e = e.nextSibling, n.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            eo(n), ur(n);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (n.rel.toLowerCase() === "stylesheet") continue;
        }
        t.removeChild(n);
      }
    }
    function a1(t, e, n, a) {
      for (; t.nodeType === 1; ) {
        var u = n;
        if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
          if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
        } else if (a) {
          if (!t[Sa]) switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (o = t.getAttribute("rel"), o === "stylesheet" && t.hasAttribute("data-precedence")) break;
              if (o !== u.rel || t.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || t.getAttribute("title") !== (u.title == null ? null : u.title)) break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (o = t.getAttribute("src"), (o !== (u.src == null ? null : u.src) || t.getAttribute("type") !== (u.type == null ? null : u.type) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && o && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
              return t;
            default:
              return t;
          }
        } else if (e === "input" && t.type === "hidden") {
          var o = u.name == null ? null : "" + u.name;
          if (u.type === "hidden" && t.getAttribute("name") === o) return t;
        } else return t;
        if (t = Qe(t.nextSibling), t === null) break;
      }
      return null;
    }
    function i1(t, e, n) {
      if (e === "") return null;
      for (; t.nodeType !== 3; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = Qe(t.nextSibling), t === null)) return null;
      return t;
    }
    function _d(t, e) {
      for (; t.nodeType !== 8; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Qe(t.nextSibling), t === null)) return null;
      return t;
    }
    function no(t) {
      return t.data === "$?" || t.data === "$~";
    }
    function lo(t) {
      return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
    }
    function u1(t, e) {
      var n = t.ownerDocument;
      if (t.data === "$~") t._reactRetry = e;
      else if (t.data !== "$?" || n.readyState !== "loading") e();
      else {
        var a = function() {
          e(), n.removeEventListener("DOMContentLoaded", a);
        };
        n.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
      }
    }
    function Qe(t) {
      for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3) break;
        if (e === 8) {
          if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F") break;
          if (e === "/$" || e === "/&") return null;
        }
      }
      return t;
    }
    var ao = null;
    function jd(t) {
      t = t.nextSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "/$" || n === "/&") {
            if (e === 0) return Qe(t.nextSibling);
            e--;
          } else n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || e++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function Ud(t) {
      t = t.previousSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
            if (e === 0) return t;
            e--;
          } else n !== "/$" && n !== "/&" || e++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Rd(t, e, n) {
      switch (e = Nu(n), t) {
        case "html":
          if (t = e.documentElement, !t) throw Error(c(452));
          return t;
        case "head":
          if (t = e.head, !t) throw Error(c(453));
          return t;
        case "body":
          if (t = e.body, !t) throw Error(c(454));
          return t;
        default:
          throw Error(c(451));
      }
    }
    function li(t) {
      for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
      ur(t);
    }
    var Ge = /* @__PURE__ */ new Map(), Bd = /* @__PURE__ */ new Set();
    function Du(t) {
      return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
    }
    var Nn = V.d;
    V.d = {
      f: r1,
      r: c1,
      D: o1,
      C: s1,
      L: f1,
      m: h1,
      X: m1,
      S: d1,
      M: p1
    };
    function r1() {
      var t = Nn.f(), e = xu();
      return t || e;
    }
    function c1(t) {
      var e = Nl(t);
      e !== null && e.tag === 5 && e.type === "form" ? th(e) : Nn.r(t);
    }
    var ua = typeof document > "u" ? null : document;
    function Ld(t, e, n) {
      var a = ua;
      if (a && typeof e == "string" && e) {
        var u = Be(e);
        u = 'link[rel="' + t + '"][href="' + u + '"]', typeof n == "string" && (u += '[crossorigin="' + n + '"]'), Bd.has(u) || (Bd.add(u), t = {
          rel: t,
          crossOrigin: n,
          href: e
        }, a.querySelector(u) === null && (e = a.createElement("link"), re(e, "link", t), ee(e), a.head.appendChild(e)));
      }
    }
    function o1(t) {
      Nn.D(t), Ld("dns-prefetch", t, null);
    }
    function s1(t, e) {
      Nn.C(t, e), Ld("preconnect", t, e);
    }
    function f1(t, e, n) {
      Nn.L(t, e, n);
      var a = ua;
      if (a && t && e) {
        var u = 'link[rel="preload"][as="' + Be(e) + '"]';
        e === "image" && n && n.imageSrcSet ? (u += '[imagesrcset="' + Be(n.imageSrcSet) + '"]', typeof n.imageSizes == "string" && (u += '[imagesizes="' + Be(n.imageSizes) + '"]')) : u += '[href="' + Be(t) + '"]';
        var o = u;
        switch (e) {
          case "style":
            o = ra(t);
            break;
          case "script":
            o = ca(t);
        }
        Ge.has(o) || (t = v({
          rel: "preload",
          href: e === "image" && n && n.imageSrcSet ? void 0 : t,
          as: e
        }, n), Ge.set(o, t), a.querySelector(u) !== null || e === "style" && a.querySelector(ai(o)) || e === "script" && a.querySelector(ii(o)) || (e = a.createElement("link"), re(e, "link", t), ee(e), a.head.appendChild(e)));
      }
    }
    function h1(t, e) {
      Nn.m(t, e);
      var n = ua;
      if (n && t) {
        var a = e && typeof e.as == "string" ? e.as : "script", u = 'link[rel="modulepreload"][as="' + Be(a) + '"][href="' + Be(t) + '"]', o = u;
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            o = ca(t);
        }
        if (!Ge.has(o) && (t = v({
          rel: "modulepreload",
          href: t
        }, e), Ge.set(o, t), n.querySelector(u) === null)) {
          switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (n.querySelector(ii(o))) return;
          }
          a = n.createElement("link"), re(a, "link", t), ee(a), n.head.appendChild(a);
        }
      }
    }
    function d1(t, e, n) {
      Nn.S(t, e, n);
      var a = ua;
      if (a && t) {
        var u = Dl(a).hoistableStyles, o = ra(t);
        e = e || "default";
        var d = u.get(o);
        if (!d) {
          var p = {
            loading: 0,
            preload: null
          };
          if (d = a.querySelector(ai(o))) p.loading = 5;
          else {
            t = v({
              rel: "stylesheet",
              href: t,
              "data-precedence": e
            }, n), (n = Ge.get(o)) && io(t, n);
            var T = d = a.createElement("link");
            ee(T), re(T, "link", t), T._p = new Promise(function(N, _) {
              T.onload = N, T.onerror = _;
            }), T.addEventListener("load", function() {
              p.loading |= 1;
            }), T.addEventListener("error", function() {
              p.loading |= 2;
            }), p.loading |= 4, Ou(d, e, a);
          }
          d = {
            type: "stylesheet",
            instance: d,
            count: 1,
            state: p
          }, u.set(o, d);
        }
      }
    }
    function m1(t, e) {
      Nn.X(t, e);
      var n = ua;
      if (n && t) {
        var a = Dl(n).hoistableScripts, u = ca(t), o = a.get(u);
        o || (o = n.querySelector(ii(u)), o || (t = v({
          src: t,
          async: true
        }, e), (e = Ge.get(u)) && uo(t, e), o = n.createElement("script"), ee(o), re(o, "link", t), n.head.appendChild(o)), o = {
          type: "script",
          instance: o,
          count: 1,
          state: null
        }, a.set(u, o));
      }
    }
    function p1(t, e) {
      Nn.M(t, e);
      var n = ua;
      if (n && t) {
        var a = Dl(n).hoistableScripts, u = ca(t), o = a.get(u);
        o || (o = n.querySelector(ii(u)), o || (t = v({
          src: t,
          async: true,
          type: "module"
        }, e), (e = Ge.get(u)) && uo(t, e), o = n.createElement("script"), ee(o), re(o, "link", t), n.head.appendChild(o)), o = {
          type: "script",
          instance: o,
          count: 1,
          state: null
        }, a.set(u, o));
      }
    }
    function Hd(t, e, n, a) {
      var u = (u = Bt.current) ? Du(u) : null;
      if (!u) throw Error(c(446));
      switch (t) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof n.precedence == "string" && typeof n.href == "string" ? (e = ra(n.href), n = Dl(u).hoistableStyles, a = n.get(e), a || (a = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, n.set(e, a)), a) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        case "link":
          if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
            t = ra(n.href);
            var o = Dl(u).hoistableStyles, d = o.get(t);
            if (d || (u = u.ownerDocument || u, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            }, o.set(t, d), (o = u.querySelector(ai(t))) && !o._p && (d.instance = o, d.state.loading = 5), Ge.has(t) || (n = {
              rel: "preload",
              as: "style",
              href: n.href,
              crossOrigin: n.crossOrigin,
              integrity: n.integrity,
              media: n.media,
              hrefLang: n.hrefLang,
              referrerPolicy: n.referrerPolicy
            }, Ge.set(t, n), o || g1(u, t, n, d.state))), e && a === null) throw Error(c(528, ""));
            return d;
          }
          if (e && a !== null) throw Error(c(529, ""));
          return null;
        case "script":
          return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = ca(n), n = Dl(u).hoistableScripts, a = n.get(e), a || (a = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, n.set(e, a)), a) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        default:
          throw Error(c(444, t));
      }
    }
    function ra(t) {
      return 'href="' + Be(t) + '"';
    }
    function ai(t) {
      return 'link[rel="stylesheet"][' + t + "]";
    }
    function qd(t) {
      return v({}, t, {
        "data-precedence": t.precedence,
        precedence: null
      });
    }
    function g1(t, e, n, a) {
      t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
        return a.loading |= 1;
      }), e.addEventListener("error", function() {
        return a.loading |= 2;
      }), re(e, "link", n), ee(e), t.head.appendChild(e));
    }
    function ca(t) {
      return '[src="' + Be(t) + '"]';
    }
    function ii(t) {
      return "script[async]" + t;
    }
    function Yd(t, e, n) {
      if (e.count++, e.instance === null) switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + Be(n.href) + '"]');
          if (a) return e.instance = a, ee(a), a;
          var u = v({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement("style"), ee(a), re(a, "style", u), Ou(a, n.precedence, t), e.instance = a;
        case "stylesheet":
          u = ra(n.href);
          var o = t.querySelector(ai(u));
          if (o) return e.state.loading |= 4, e.instance = o, ee(o), o;
          a = qd(n), (u = Ge.get(u)) && io(a, u), o = (t.ownerDocument || t).createElement("link"), ee(o);
          var d = o;
          return d._p = new Promise(function(p, T) {
            d.onload = p, d.onerror = T;
          }), re(o, "link", a), e.state.loading |= 4, Ou(o, n.precedence, t), e.instance = o;
        case "script":
          return o = ca(n.src), (u = t.querySelector(ii(o))) ? (e.instance = u, ee(u), u) : (a = n, (u = Ge.get(o)) && (a = v({}, n), uo(a, u)), t = t.ownerDocument || t, u = t.createElement("script"), ee(u), re(u, "link", a), t.head.appendChild(u), e.instance = u);
        case "void":
          return null;
        default:
          throw Error(c(443, e.type));
      }
      else e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, Ou(a, n.precedence, t));
      return e.instance;
    }
    function Ou(t, e, n) {
      for (var a = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = a.length ? a[a.length - 1] : null, o = u, d = 0; d < a.length; d++) {
        var p = a[d];
        if (p.dataset.precedence === e) o = p;
        else if (o !== u) break;
      }
      o ? o.parentNode.insertBefore(t, o.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
    }
    function io(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
    }
    function uo(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
    }
    var wu = null;
    function Vd(t, e, n) {
      if (wu === null) {
        var a = /* @__PURE__ */ new Map(), u = wu = /* @__PURE__ */ new Map();
        u.set(n, a);
      } else u = wu, a = u.get(n), a || (a = /* @__PURE__ */ new Map(), u.set(n, a));
      if (a.has(t)) return a;
      for (a.set(t, null), n = n.getElementsByTagName(t), u = 0; u < n.length; u++) {
        var o = n[u];
        if (!(o[Sa] || o[le] || t === "link" && o.getAttribute("rel") === "stylesheet") && o.namespaceURI !== "http://www.w3.org/2000/svg") {
          var d = o.getAttribute(e) || "";
          d = t + d;
          var p = a.get(d);
          p ? p.push(o) : a.set(d, [
            o
          ]);
        }
      }
      return a;
    }
    function Xd(t, e, n) {
      t = t.ownerDocument || t, t.head.insertBefore(n, e === "title" ? t.querySelector("head > title") : null);
    }
    function y1(t, e, n) {
      if (n === 1 || e.itemProp != null) return false;
      switch (t) {
        case "meta":
        case "title":
          return true;
        case "style":
          if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
          return true;
        case "link":
          if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) break;
          return e.rel === "stylesheet" ? (t = e.disabled, typeof e.precedence == "string" && t == null) : true;
        case "script":
          if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string") return true;
      }
      return false;
    }
    function Qd(t) {
      return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
    }
    function v1(t, e, n, a) {
      if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && (n.state.loading & 4) === 0) {
        if (n.instance === null) {
          var u = ra(a.href), o = e.querySelector(ai(u));
          if (o) {
            e = o._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = ku.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = o, ee(o);
            return;
          }
          o = e.ownerDocument || e, a = qd(a), (u = Ge.get(u)) && io(a, u), o = o.createElement("link"), ee(o);
          var d = o;
          d._p = new Promise(function(p, T) {
            d.onload = p, d.onerror = T;
          }), re(o, "link", a), n.instance = o;
        }
        t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++, n = ku.bind(t), e.addEventListener("load", n), e.addEventListener("error", n));
      }
    }
    var ro = 0;
    function b1(t, e) {
      return t.stylesheets && t.count === 0 && ju(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(n) {
        var a = setTimeout(function() {
          if (t.stylesheets && ju(t, t.stylesheets), t.unsuspend) {
            var o = t.unsuspend;
            t.unsuspend = null, o();
          }
        }, 6e4 + e);
        0 < t.imgBytes && ro === 0 && (ro = 62500 * Py());
        var u = setTimeout(function() {
          if (t.waitingForImages = false, t.count === 0 && (t.stylesheets && ju(t, t.stylesheets), t.unsuspend)) {
            var o = t.unsuspend;
            t.unsuspend = null, o();
          }
        }, (t.imgBytes > ro ? 50 : 800) + e);
        return t.unsuspend = n, function() {
          t.unsuspend = null, clearTimeout(a), clearTimeout(u);
        };
      } : null;
    }
    function ku() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets) ju(this, this.stylesheets);
        else if (this.unsuspend) {
          var t = this.unsuspend;
          this.unsuspend = null, t();
        }
      }
    }
    var _u = null;
    function ju(t, e) {
      t.stylesheets = null, t.unsuspend !== null && (t.count++, _u = /* @__PURE__ */ new Map(), e.forEach(x1, t), _u = null, ku.call(t));
    }
    function x1(t, e) {
      if (!(e.state.loading & 4)) {
        var n = _u.get(t);
        if (n) var a = n.get(null);
        else {
          n = /* @__PURE__ */ new Map(), _u.set(t, n);
          for (var u = t.querySelectorAll("link[data-precedence],style[data-precedence]"), o = 0; o < u.length; o++) {
            var d = u[o];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (n.set(d.dataset.precedence, d), a = d);
          }
          a && n.set(null, a);
        }
        u = e.instance, d = u.getAttribute("data-precedence"), o = n.get(d) || a, o === a && n.set(null, u), n.set(d, u), this.count++, a = ku.bind(this), u.addEventListener("load", a), u.addEventListener("error", a), o ? o.parentNode.insertBefore(u, o.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(u, t.firstChild)), e.state.loading |= 4;
      }
    }
    var ui = {
      $$typeof: Z,
      Provider: null,
      Consumer: null,
      _currentValue: W,
      _currentValue2: W,
      _threadCount: 0
    };
    function S1(t, e, n, a, u, o, d, p, T) {
      this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = nr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = nr(0), this.hiddenUpdates = nr(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = o, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = T, this.incompleteTransitions = /* @__PURE__ */ new Map();
    }
    function Gd(t, e, n, a, u, o, d, p, T, N, _, R) {
      return t = new S1(t, e, n, d, T, N, _, R, p), e = 1, o === true && (e |= 24), o = Me(3, null, null, e), t.current = o, o.stateNode = t, e = qr(), e.refCount++, t.pooledCache = e, e.refCount++, o.memoizedState = {
        element: a,
        isDehydrated: n,
        cache: e
      }, Qr(o), t;
    }
    function Zd(t) {
      return t ? (t = Hl, t) : Hl;
    }
    function Kd(t, e, n, a, u, o) {
      u = Zd(u), a.context === null ? a.context = u : a.pendingContext = u, a = Bn(e), a.payload = {
        element: n
      }, o = o === void 0 ? null : o, o !== null && (a.callback = o), n = Ln(t, a, e), n !== null && (be(n, t, e), La(n, t, e));
    }
    function Jd(t, e) {
      if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
        var n = t.retryLane;
        t.retryLane = n !== 0 && n < e ? n : e;
      }
    }
    function co(t, e) {
      Jd(t, e), (t = t.alternate) && Jd(t, e);
    }
    function Fd(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = cl(t, 67108864);
        e !== null && be(e, t, 67108864), co(t, 67108864);
      }
    }
    function Id(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = ke();
        e = lr(e);
        var n = cl(t, e);
        n !== null && be(n, t, e), co(t, e);
      }
    }
    var Uu = true;
    function E1(t, e, n, a) {
      var u = O.T;
      O.T = null;
      var o = V.p;
      try {
        V.p = 2, oo(t, e, n, a);
      } finally {
        V.p = o, O.T = u;
      }
    }
    function z1(t, e, n, a) {
      var u = O.T;
      O.T = null;
      var o = V.p;
      try {
        V.p = 8, oo(t, e, n, a);
      } finally {
        V.p = o, O.T = u;
      }
    }
    function oo(t, e, n, a) {
      if (Uu) {
        var u = so(a);
        if (u === null) Fc(t, e, a, Ru, n), $d(t, a);
        else if (A1(u, t, e, n, a)) a.stopPropagation();
        else if ($d(t, a), e & 4 && -1 < T1.indexOf(t)) {
          for (; u !== null; ) {
            var o = Nl(u);
            if (o !== null) switch (o.tag) {
              case 3:
                if (o = o.stateNode, o.current.memoizedState.isDehydrated) {
                  var d = ll(o.pendingLanes);
                  if (d !== 0) {
                    var p = o;
                    for (p.pendingLanes |= 2, p.entangledLanes |= 2; d; ) {
                      var T = 1 << 31 - Ut(d);
                      p.entanglements[1] |= T, d &= ~T;
                    }
                    ln(o), (At & 6) === 0 && (vu = oe() + 500, ti(0));
                  }
                }
                break;
              case 31:
              case 13:
                p = cl(o, 2), p !== null && be(p, o, 2), xu(), co(o, 2);
            }
            if (o = so(a), o === null && Fc(t, e, a, Ru, n), o === u) break;
            u = o;
          }
          u !== null && a.stopPropagation();
        } else Fc(t, e, a, null, n);
      }
    }
    function so(t) {
      return t = hr(t), fo(t);
    }
    var Ru = null;
    function fo(t) {
      if (Ru = null, t = Ml(t), t !== null) {
        var e = f(t);
        if (e === null) t = null;
        else {
          var n = e.tag;
          if (n === 13) {
            if (t = h(e), t !== null) return t;
            t = null;
          } else if (n === 31) {
            if (t = m(e), t !== null) return t;
            t = null;
          } else if (n === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null;
          } else e !== t && (t = null);
        }
      }
      return Ru = t, null;
    }
    function Wd(t) {
      switch (t) {
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
          switch (er()) {
            case j:
              return 2;
            case X:
              return 8;
            case nt:
            case ft:
              return 32;
            case Nt:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var ho = false, Fn = null, In = null, Wn = null, ri = /* @__PURE__ */ new Map(), ci = /* @__PURE__ */ new Map(), $n = [], T1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function $d(t, e) {
      switch (t) {
        case "focusin":
        case "focusout":
          Fn = null;
          break;
        case "dragenter":
        case "dragleave":
          In = null;
          break;
        case "mouseover":
        case "mouseout":
          Wn = null;
          break;
        case "pointerover":
        case "pointerout":
          ri.delete(e.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          ci.delete(e.pointerId);
      }
    }
    function oi(t, e, n, a, u, o) {
      return t === null || t.nativeEvent !== o ? (t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: a,
        nativeEvent: o,
        targetContainers: [
          u
        ]
      }, e !== null && (e = Nl(e), e !== null && Fd(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, u !== null && e.indexOf(u) === -1 && e.push(u), t);
    }
    function A1(t, e, n, a, u) {
      switch (e) {
        case "focusin":
          return Fn = oi(Fn, t, e, n, a, u), true;
        case "dragenter":
          return In = oi(In, t, e, n, a, u), true;
        case "mouseover":
          return Wn = oi(Wn, t, e, n, a, u), true;
        case "pointerover":
          var o = u.pointerId;
          return ri.set(o, oi(ri.get(o) || null, t, e, n, a, u)), true;
        case "gotpointercapture":
          return o = u.pointerId, ci.set(o, oi(ci.get(o) || null, t, e, n, a, u)), true;
      }
      return false;
    }
    function Pd(t) {
      var e = Ml(t.target);
      if (e !== null) {
        var n = f(e);
        if (n !== null) {
          if (e = n.tag, e === 13) {
            if (e = h(n), e !== null) {
              t.blockedOn = e, hs(t.priority, function() {
                Id(n);
              });
              return;
            }
          } else if (e === 31) {
            if (e = m(n), e !== null) {
              t.blockedOn = e, hs(t.priority, function() {
                Id(n);
              });
              return;
            }
          } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
            t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      t.blockedOn = null;
    }
    function Bu(t) {
      if (t.blockedOn !== null) return false;
      for (var e = t.targetContainers; 0 < e.length; ) {
        var n = so(t.nativeEvent);
        if (n === null) {
          n = t.nativeEvent;
          var a = new n.constructor(n.type, n);
          fr = a, n.target.dispatchEvent(a), fr = null;
        } else return e = Nl(n), e !== null && Fd(e), t.blockedOn = n, false;
        e.shift();
      }
      return true;
    }
    function tm(t, e, n) {
      Bu(t) && n.delete(e);
    }
    function C1() {
      ho = false, Fn !== null && Bu(Fn) && (Fn = null), In !== null && Bu(In) && (In = null), Wn !== null && Bu(Wn) && (Wn = null), ri.forEach(tm), ci.forEach(tm);
    }
    function Lu(t, e) {
      t.blockedOn === e && (t.blockedOn = null, ho || (ho = true, l.unstable_scheduleCallback(l.unstable_NormalPriority, C1)));
    }
    var Hu = null;
    function em(t) {
      Hu !== t && (Hu = t, l.unstable_scheduleCallback(l.unstable_NormalPriority, function() {
        Hu === t && (Hu = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e], a = t[e + 1], u = t[e + 2];
          if (typeof a != "function") {
            if (fo(a || n) === null) continue;
            break;
          }
          var o = Nl(n);
          o !== null && (t.splice(e, 3), e -= 3, sc(o, {
            pending: true,
            data: u,
            method: n.method,
            action: a
          }, a, u));
        }
      }));
    }
    function oa(t) {
      function e(T) {
        return Lu(T, t);
      }
      Fn !== null && Lu(Fn, t), In !== null && Lu(In, t), Wn !== null && Lu(Wn, t), ri.forEach(e), ci.forEach(e);
      for (var n = 0; n < $n.length; n++) {
        var a = $n[n];
        a.blockedOn === t && (a.blockedOn = null);
      }
      for (; 0 < $n.length && (n = $n[0], n.blockedOn === null); ) Pd(n), n.blockedOn === null && $n.shift();
      if (n = (t.ownerDocument || t).$$reactFormReplay, n != null) for (a = 0; a < n.length; a += 3) {
        var u = n[a], o = n[a + 1], d = u[de] || null;
        if (typeof o == "function") d || em(n);
        else if (d) {
          var p = null;
          if (o && o.hasAttribute("formAction")) {
            if (u = o, d = o[de] || null) p = d.formAction;
            else if (fo(u) !== null) continue;
          } else p = d.action;
          typeof p == "function" ? n[a + 1] = p : (n.splice(a, 3), a -= 3), em(n);
        }
      }
    }
    function nm() {
      function t(o) {
        o.canIntercept && o.info === "react-transition" && o.intercept({
          handler: function() {
            return new Promise(function(d) {
              return u = d;
            });
          },
          focusReset: "manual",
          scroll: "manual"
        });
      }
      function e() {
        u !== null && (u(), u = null), a || setTimeout(n, 20);
      }
      function n() {
        if (!a && !navigation.transition) {
          var o = navigation.currentEntry;
          o && o.url != null && navigation.navigate(o.url, {
            state: o.getState(),
            info: "react-transition",
            history: "replace"
          });
        }
      }
      if (typeof navigation == "object") {
        var a = false, u = null;
        return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(n, 100), function() {
          a = true, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), u !== null && (u(), u = null);
        };
      }
    }
    function mo(t) {
      this._internalRoot = t;
    }
    qu.prototype.render = mo.prototype.render = function(t) {
      var e = this._internalRoot;
      if (e === null) throw Error(c(409));
      var n = e.current, a = ke();
      Kd(n, a, t, e, null, null);
    }, qu.prototype.unmount = mo.prototype.unmount = function() {
      var t = this._internalRoot;
      if (t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        Kd(t.current, 2, null, t, null, null), xu(), e[Cl] = null;
      }
    };
    function qu(t) {
      this._internalRoot = t;
    }
    qu.prototype.unstable_scheduleHydration = function(t) {
      if (t) {
        var e = fs();
        t = {
          blockedOn: null,
          target: t,
          priority: e
        };
        for (var n = 0; n < $n.length && e !== 0 && e < $n[n].priority; n++) ;
        $n.splice(n, 0, t), n === 0 && Pd(t);
      }
    };
    var lm = i.version;
    if (lm !== "19.2.4") throw Error(c(527, lm, "19.2.4"));
    V.findDOMNode = function(t) {
      var e = t._reactInternals;
      if (e === void 0) throw typeof t.render == "function" ? Error(c(188)) : (t = Object.keys(t).join(","), Error(c(268, t)));
      return t = g(e), t = t !== null ? y(t) : null, t = t === null ? null : t.stateNode, t;
    };
    var M1 = {
      bundleType: 0,
      version: "19.2.4",
      rendererPackageName: "react-dom",
      currentDispatcherRef: O,
      reconcilerVersion: "19.2.4"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var Yu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Yu.isDisabled && Yu.supportsFiber) try {
        se = Yu.inject(M1), $t = Yu;
      } catch {
      }
    }
    return si.createRoot = function(t, e) {
      if (!s(t)) throw Error(c(299));
      var n = false, a = "", u = sh, o = fh, d = hh;
      return e != null && (e.unstable_strictMode === true && (n = true), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (u = e.onUncaughtError), e.onCaughtError !== void 0 && (o = e.onCaughtError), e.onRecoverableError !== void 0 && (d = e.onRecoverableError)), e = Gd(t, 1, false, null, null, n, a, null, u, o, d, nm), t[Cl] = e.current, Jc(t), new mo(e);
    }, si.hydrateRoot = function(t, e, n) {
      if (!s(t)) throw Error(c(299));
      var a = false, u = "", o = sh, d = fh, p = hh, T = null;
      return n != null && (n.unstable_strictMode === true && (a = true), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onUncaughtError !== void 0 && (o = n.onUncaughtError), n.onCaughtError !== void 0 && (d = n.onCaughtError), n.onRecoverableError !== void 0 && (p = n.onRecoverableError), n.formState !== void 0 && (T = n.formState)), e = Gd(t, 1, true, e, n ?? null, a, u, T, o, d, p, nm), e.context = Zd(null), n = e.current, a = ke(), a = lr(a), u = Bn(a), u.callback = null, Ln(n, u, a), n = a, e.current.lanes = n, xa(e, n), ln(e), t[Cl] = e.current, Jc(t), new qu(e);
    }, si.version = "19.2.4", si;
  }
  var rm;
  function Z1() {
    if (rm) return po.exports;
    rm = 1;
    function l() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (i) {
        console.error(i);
      }
    }
    return l(), po.exports = G1(), po.exports;
  }
  var K1 = Z1();
  function J1(l, i) {
    if (l instanceof RegExp) return {
      keys: false,
      pattern: l
    };
    var r, c, s, f, h = [], m = "", b = l.split("/");
    for (b[0] || b.shift(); s = b.shift(); ) r = s[0], r === "*" ? (h.push(r), m += s[1] === "?" ? "(?:/(.*))?" : "/(.*)") : r === ":" ? (c = s.indexOf("?", 1), f = s.indexOf(".", 1), h.push(s.substring(1, ~c ? c : ~f ? f : s.length)), m += ~c && !~f ? "(?:/([^/]+?))?" : "/([^/]+?)", ~f && (m += (~c ? "?" : "") + "\\" + s.substring(f))) : m += "/" + s;
    return {
      keys: h,
      pattern: new RegExp("^" + m + (i ? "(?=$|/)" : "/?$"), "i")
    };
  }
  var vo = {
    exports: {}
  }, bo = {};
  var cm;
  function F1() {
    if (cm) return bo;
    cm = 1;
    var l = ip();
    function i(v, S) {
      return v === S && (v !== 0 || 1 / v === 1 / S) || v !== v && S !== S;
    }
    var r = typeof Object.is == "function" ? Object.is : i, c = l.useState, s = l.useEffect, f = l.useLayoutEffect, h = l.useDebugValue;
    function m(v, S) {
      var x = S(), H = c({
        inst: {
          value: x,
          getSnapshot: S
        }
      }), q = H[0].inst, G = H[1];
      return f(function() {
        q.value = x, q.getSnapshot = S, b(q) && G({
          inst: q
        });
      }, [
        v,
        x,
        S
      ]), s(function() {
        return b(q) && G({
          inst: q
        }), v(function() {
          b(q) && G({
            inst: q
          });
        });
      }, [
        v
      ]), h(x), x;
    }
    function b(v) {
      var S = v.getSnapshot;
      v = v.value;
      try {
        var x = S();
        return !r(v, x);
      } catch {
        return true;
      }
    }
    function g(v, S) {
      return S();
    }
    var y = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? g : m;
    return bo.useSyncExternalStore = l.useSyncExternalStore !== void 0 ? l.useSyncExternalStore : y, bo;
  }
  var om;
  function I1() {
    return om || (om = 1, vo.exports = F1()), vo.exports;
  }
  var W1 = I1();
  const $1 = O1.useInsertionEffect, P1 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", vp = P1 ? lt.useLayoutEffect : lt.useEffect, t0 = $1 || vp, Qo = (l) => {
    const i = lt.useRef([
      l,
      (...r) => i[0](...r)
    ]).current;
    return t0(() => {
      i[0] = l;
    }), i[1];
  }, e0 = "popstate", Go = "pushState", Zo = "replaceState", n0 = "hashchange", sm = [
    e0,
    Go,
    Zo,
    n0
  ], l0 = (l) => {
    for (const i of sm) addEventListener(i, l);
    return () => {
      for (const i of sm) removeEventListener(i, l);
    };
  }, bp = (l, i) => W1.useSyncExternalStore(l0, l, i), fm = () => location.search, a0 = ({ ssrSearch: l } = {}) => bp(fm, l != null ? () => l : fm), hm = () => location.pathname, i0 = ({ ssrPath: l } = {}) => bp(hm, l != null ? () => l : hm), u0 = (l, { replace: i = false, state: r = null } = {}) => history[i ? Zo : Go](r, "", l), r0 = (l = {}) => [
    i0(l),
    u0
  ], dm = /* @__PURE__ */ Symbol.for("wouter_v3");
  if (typeof history < "u" && typeof window[dm] > "u") {
    for (const l of [
      Go,
      Zo
    ]) {
      const i = history[l];
      history[l] = function() {
        const r = i.apply(this, arguments), c = new Event(l);
        return c.arguments = arguments, dispatchEvent(c), r;
      };
    }
    Object.defineProperty(window, dm, {
      value: true
    });
  }
  const c0 = (l, i) => i.toLowerCase().indexOf(l.toLowerCase()) ? "~" + i : i.slice(l.length) || "/", xp = (l = "") => l === "/" ? "" : l, o0 = (l, i) => l[0] === "~" ? l.slice(1) : xp(i) + l, s0 = (l = "", i) => c0(mm(xp(l)), mm(i)), mm = (l) => {
    try {
      return decodeURI(l);
    } catch {
      return l;
    }
  }, Sp = {
    hook: r0,
    searchHook: a0,
    parser: J1,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    ssrContext: void 0,
    hrefs: (l) => l,
    aroundNav: (l, i, r) => l(i, r)
  }, Ep = lt.createContext(Sp), ma = () => lt.useContext(Ep), zp = {}, Tp = lt.createContext(zp), f0 = () => lt.useContext(Tp), xi = (l) => {
    const [i, r] = l.hook(l);
    return [
      s0(l.base, i),
      Qo((c, s) => l.aroundNav(r, o0(c, l.base), s))
    ];
  }, h0 = () => xi(ma()), Ap = (l, i, r, c) => {
    const { pattern: s, keys: f } = i instanceof RegExp ? {
      keys: false,
      pattern: i
    } : l(i || "*", c), h = s.exec(r) || [], [m, ...b] = h;
    return m !== void 0 ? [
      true,
      (() => {
        const g = f !== false ? Object.fromEntries(f.map((v, S) => [
          v,
          b[S]
        ])) : h.groups;
        let y = {
          ...b
        };
        return g && Object.assign(y, g), y;
      })(),
      ...c ? [
        m
      ] : []
    ] : [
      false,
      null
    ];
  }, d0 = ({ children: l, ...i }) => {
    var _a, _b2, _c;
    const r = ma(), c = i.hook ? Sp : r;
    let s = c;
    const [f, h = i.ssrSearch ?? ""] = ((_a = i.ssrPath) == null ? void 0 : _a.split("?")) ?? [];
    f && (i.ssrSearch = h, i.ssrPath = f), i.hrefs = i.hrefs ?? ((_b2 = i.hook) == null ? void 0 : _b2.hrefs), i.searchHook = i.searchHook ?? ((_c = i.hook) == null ? void 0 : _c.searchHook);
    let m = lt.useRef({}), b = m.current, g = b;
    for (let y in c) {
      const v = y === "base" ? c[y] + (i[y] ?? "") : i[y] ?? c[y];
      b === g && v !== g[y] && (m.current = g = {
        ...g
      }), g[y] = v, (v !== c[y] || v !== s[y]) && (s = g);
    }
    return lt.createElement(Ep.Provider, {
      value: s,
      children: l
    });
  }, pm = ({ children: l, component: i }, r) => i ? lt.createElement(i, {
    params: r
  }) : typeof l == "function" ? l(r) : l, m0 = (l) => {
    let i = lt.useRef(zp);
    const r = i.current;
    return i.current = Object.keys(l).length !== Object.keys(r).length || Object.entries(l).some(([c, s]) => s !== r[c]) ? l : r;
  }, xo = ({ path: l, nest: i, match: r, ...c }) => {
    const s = ma(), [f] = xi(s), [h, m, b] = r ?? Ap(s.parser, l, f, i), g = m0({
      ...f0(),
      ...m
    });
    if (!h) return null;
    const y = b ? lt.createElement(d0, {
      base: b
    }, pm(c, g)) : pm(c, g);
    return lt.createElement(Tp.Provider, {
      value: g,
      children: y
    });
  }, pi = lt.forwardRef((l, i) => {
    const r = ma(), [c, s] = xi(r), { to: f = "", href: h = f, onClick: m, asChild: b, children: g, className: y, replace: v, state: S, transition: x, ...H } = l, q = Qo((L) => {
      L.ctrlKey || L.metaKey || L.altKey || L.shiftKey || L.button !== 0 || (m == null ? void 0 : m(L), L.defaultPrevented || (L.preventDefault(), s(h, l)));
    }), G = r.hrefs(h[0] === "~" ? h.slice(1) : r.base + h, r);
    return b && lt.isValidElement(g) ? lt.cloneElement(g, {
      onClick: q,
      href: G
    }) : lt.createElement("a", {
      ...H,
      onClick: q,
      href: G,
      className: (y == null ? void 0 : y.call) ? y(c === h) : y,
      children: g,
      ref: i
    });
  }), Cp = (l) => Array.isArray(l) ? l.flatMap((i) => Cp(i && i.type === lt.Fragment ? i.props.children : i)) : [
    l
  ], p0 = ({ children: l, location: i }) => {
    const r = ma(), [c] = xi(r);
    for (const s of Cp(l)) {
      let f = 0;
      if (lt.isValidElement(s) && (f = Ap(r.parser, s.props.path, i || c, s.props.nest))[0]) return lt.cloneElement(s, {
        match: f
      });
    }
    return null;
  }, gm = (l) => {
    const { to: i, href: r = i } = l, c = ma(), [, s] = xi(c), f = Qo(() => s(i || r, l)), { ssrContext: h } = c;
    return vp(() => {
      f();
    }, []), h && (h.redirectTo = i), null;
  };
  function Ze(l) {
    return l.map((i) => i.split(`
`).map((r) => r.trim()).join(`
`)).join("");
  }
  const Mp = [
    {
      contentMd: Ze`This interactive tutorial will guide you through creating your own recipes using a simple and intuitive language.

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
      validation: (l) => l.ingredients.find((i) => i.name === "flour") !== void 0,
      defaultRecipe: Ze`Mix flour with water.`,
      title: "Your First Ingredient: A Tutorial"
    },
    {
      contentMd: Ze`Congratulations on creating your first ingredient!

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
      validation: (l) => l.ingredients.find((i) => i.quantity !== void 0 && i.unit !== void 0) !== void 0,
      defaultRecipe: Ze`Mix {flour} with {water}.`,
      title: "Adding Quantity and Units",
      alias: [
        "quantity-and-units"
      ]
    },
    {
      contentMd: Ze`Great job adding quantity and units!

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
      validation: (l) => l.materials.length > 0,
      defaultRecipe: Ze`Mix {flour}(125 gr) with {water}(300 ml).
      Cook in a pan.
    `,
      title: "Adding Materials"
    },
    {
      title: "Adding timers",
      contentMd: Ze`Now let's add timers to your recipe.
    Timers are used to indicate the time needed for a specific step in your recipe.

    **Task**

    Add a timer: Add the letter \`t\` followed by curly braces to define a timer: \`t{}\`.

    **Example**

    \`\`\`
    t{1 minute}
    \`\`\`

    **Remember**: Timers are used to indicate the time needed for a specific step in your recipe.
    `,
      validation: (l) => l.timers.length > 0,
      defaultRecipe: Ze`Mix {flour}(125 gr) with {water}(300 ml).
      Cook in a &{pan} for 1 minute.
    `
    },
    {
      contentMd: Ze`Well done adding materials!

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
      validation: (l) => l.recipes_refs.length > 0,
      defaultRecipe: Ze`Mix {flour}(125 gr) with woile/oat-milk.
      Cook in a &{pan} for t{1 minute}.
    `,
      title: "Adding Recipe References"
    },
    {
      contentMd: Ze`Now let's add tags to your recipe. Tags are keywords that help categorize your recipe.

    **Task**

    Add tags: **At the beginning of the recipe**, add \`>>\` followed by \`tags: \` and a space and a comma-separated list of tags.

    **Example**

    \`\`\`
    >> tags: breakfast, vegan, gluten-free
    \`\`\`

    **Remember**: Tags should be descriptive and relevant to your recipe's content.

    **Hint**: What are some possible tags for a pancake recipe? Consider the ingredients, dietary restrictions, or cooking methods
    `,
      validation: (l) => {
        var _a, _b2;
        return (((_b2 = (_a = l.metadata) == null ? void 0 : _a.get("tags")) == null ? void 0 : _b2.split(",").filter((r) => !!r)) || []).length > 0;
      },
      title: "Adding Tags",
      defaultRecipe: Ze`Mix {flour}(125 gr) with @{woile/oat-milk}.
      Cook in a &{pan} for t{1 minute}.
    `
    }
  ], g0 = Mp.length;
  function y0(l, i) {
    const r = {};
    return (l[l.length - 1] === "" ? [
      ...l,
      ""
    ] : l).join((r.padRight ? " " : "") + "," + (r.padLeft === false ? "" : " ")).trim();
  }
  const v0 = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, b0 = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, x0 = {};
  function ym(l, i) {
    return (x0.jsx ? b0 : v0).test(l);
  }
  const S0 = /[ \t\n\f\r]/g;
  function E0(l) {
    return typeof l == "object" ? l.type === "text" ? vm(l.value) : false : vm(l);
  }
  function vm(l) {
    return l.replace(S0, "") === "";
  }
  class Si {
    constructor(i, r, c) {
      this.normal = r, this.property = i, c && (this.space = c);
    }
  }
  Si.prototype.normal = {};
  Si.prototype.property = {};
  Si.prototype.space = void 0;
  function Np(l, i) {
    const r = {}, c = {};
    for (const s of l) Object.assign(r, s.property), Object.assign(c, s.normal);
    return new Si(r, c, i);
  }
  function jo(l) {
    return l.toLowerCase();
  }
  class Ee {
    constructor(i, r) {
      this.attribute = r, this.property = i;
    }
  }
  Ee.prototype.attribute = "";
  Ee.prototype.booleanish = false;
  Ee.prototype.boolean = false;
  Ee.prototype.commaOrSpaceSeparated = false;
  Ee.prototype.commaSeparated = false;
  Ee.prototype.defined = false;
  Ee.prototype.mustUseProperty = false;
  Ee.prototype.number = false;
  Ee.prototype.overloadedBoolean = false;
  Ee.prototype.property = "";
  Ee.prototype.spaceSeparated = false;
  Ee.prototype.space = void 0;
  let z0 = 0;
  const ct = Sl(), Wt = Sl(), Uo = Sl(), Y = Sl(), Lt = Sl(), ha = Sl(), _e = Sl();
  function Sl() {
    return 2 ** ++z0;
  }
  const Ro = Object.freeze(Object.defineProperty({
    __proto__: null,
    boolean: ct,
    booleanish: Wt,
    commaOrSpaceSeparated: _e,
    commaSeparated: ha,
    number: Y,
    overloadedBoolean: Uo,
    spaceSeparated: Lt
  }, Symbol.toStringTag, {
    value: "Module"
  })), So = Object.keys(Ro);
  class Ko extends Ee {
    constructor(i, r, c, s) {
      let f = -1;
      if (super(i, r), bm(this, "space", s), typeof c == "number") for (; ++f < So.length; ) {
        const h = So[f];
        bm(this, So[f], (c & Ro[h]) === Ro[h]);
      }
    }
  }
  Ko.prototype.defined = true;
  function bm(l, i, r) {
    r && (l[i] = r);
  }
  function pa(l) {
    const i = {}, r = {};
    for (const [c, s] of Object.entries(l.properties)) {
      const f = new Ko(c, l.transform(l.attributes || {}, c), s, l.space);
      l.mustUseProperty && l.mustUseProperty.includes(c) && (f.mustUseProperty = true), i[c] = f, r[jo(c)] = c, r[jo(f.attribute)] = c;
    }
    return new Si(i, r, l.space);
  }
  const Dp = pa({
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: Wt,
      ariaAutoComplete: null,
      ariaBusy: Wt,
      ariaChecked: Wt,
      ariaColCount: Y,
      ariaColIndex: Y,
      ariaColSpan: Y,
      ariaControls: Lt,
      ariaCurrent: null,
      ariaDescribedBy: Lt,
      ariaDetails: null,
      ariaDisabled: Wt,
      ariaDropEffect: Lt,
      ariaErrorMessage: null,
      ariaExpanded: Wt,
      ariaFlowTo: Lt,
      ariaGrabbed: Wt,
      ariaHasPopup: null,
      ariaHidden: Wt,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: Lt,
      ariaLevel: Y,
      ariaLive: null,
      ariaModal: Wt,
      ariaMultiLine: Wt,
      ariaMultiSelectable: Wt,
      ariaOrientation: null,
      ariaOwns: Lt,
      ariaPlaceholder: null,
      ariaPosInSet: Y,
      ariaPressed: Wt,
      ariaReadOnly: Wt,
      ariaRelevant: null,
      ariaRequired: Wt,
      ariaRoleDescription: Lt,
      ariaRowCount: Y,
      ariaRowIndex: Y,
      ariaRowSpan: Y,
      ariaSelected: Wt,
      ariaSetSize: Y,
      ariaSort: null,
      ariaValueMax: Y,
      ariaValueMin: Y,
      ariaValueNow: Y,
      ariaValueText: null,
      role: null
    },
    transform(l, i) {
      return i === "role" ? i : "aria-" + i.slice(4).toLowerCase();
    }
  });
  function Op(l, i) {
    return i in l ? l[i] : i;
  }
  function wp(l, i) {
    return Op(l, i.toLowerCase());
  }
  const T0 = pa({
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
      accept: ha,
      acceptCharset: Lt,
      accessKey: Lt,
      action: null,
      allow: null,
      allowFullScreen: ct,
      allowPaymentRequest: ct,
      allowUserMedia: ct,
      alt: null,
      as: null,
      async: ct,
      autoCapitalize: null,
      autoComplete: Lt,
      autoFocus: ct,
      autoPlay: ct,
      blocking: Lt,
      capture: null,
      charSet: null,
      checked: ct,
      cite: null,
      className: Lt,
      cols: Y,
      colSpan: null,
      content: null,
      contentEditable: Wt,
      controls: ct,
      controlsList: Lt,
      coords: Y | ha,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: ct,
      defer: ct,
      dir: null,
      dirName: null,
      disabled: ct,
      download: Uo,
      draggable: Wt,
      encType: null,
      enterKeyHint: null,
      fetchPriority: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: ct,
      formTarget: null,
      headers: Lt,
      height: Y,
      hidden: Uo,
      high: Y,
      href: null,
      hrefLang: null,
      htmlFor: Lt,
      httpEquiv: Lt,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inert: ct,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: ct,
      itemId: null,
      itemProp: Lt,
      itemRef: Lt,
      itemScope: ct,
      itemType: Lt,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: ct,
      low: Y,
      manifest: null,
      max: null,
      maxLength: Y,
      media: null,
      method: null,
      min: null,
      minLength: Y,
      multiple: ct,
      muted: ct,
      name: null,
      nonce: null,
      noModule: ct,
      noValidate: ct,
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
      open: ct,
      optimum: Y,
      pattern: null,
      ping: Lt,
      placeholder: null,
      playsInline: ct,
      popover: null,
      popoverTarget: null,
      popoverTargetAction: null,
      poster: null,
      preload: null,
      readOnly: ct,
      referrerPolicy: null,
      rel: Lt,
      required: ct,
      reversed: ct,
      rows: Y,
      rowSpan: Y,
      sandbox: Lt,
      scope: null,
      scoped: ct,
      seamless: ct,
      selected: ct,
      shadowRootClonable: ct,
      shadowRootDelegatesFocus: ct,
      shadowRootMode: null,
      shape: null,
      size: Y,
      sizes: null,
      slot: null,
      span: Y,
      spellCheck: Wt,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: Y,
      step: null,
      style: null,
      tabIndex: Y,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: ct,
      useMap: null,
      value: Wt,
      width: Y,
      wrap: null,
      writingSuggestions: null,
      align: null,
      aLink: null,
      archive: Lt,
      axis: null,
      background: null,
      bgColor: null,
      border: Y,
      borderColor: null,
      bottomMargin: Y,
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
      compact: ct,
      declare: ct,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: Y,
      leftMargin: Y,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: Y,
      marginWidth: Y,
      noResize: ct,
      noHref: ct,
      noShade: ct,
      noWrap: ct,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: Y,
      rules: null,
      scheme: null,
      scrolling: Wt,
      standby: null,
      summary: null,
      text: null,
      topMargin: Y,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: Y,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: ct,
      disableRemotePlayback: ct,
      prefix: null,
      property: null,
      results: Y,
      security: null,
      unselectable: null
    },
    space: "html",
    transform: wp
  }), A0 = pa({
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
      about: _e,
      accentHeight: Y,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: Y,
      amplitude: Y,
      arabicForm: null,
      ascent: Y,
      attributeName: null,
      attributeType: null,
      azimuth: Y,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: Y,
      by: null,
      calcMode: null,
      capHeight: Y,
      className: Lt,
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
      descent: Y,
      diffuseConstant: Y,
      direction: null,
      display: null,
      dur: null,
      divisor: Y,
      dominantBaseline: null,
      download: ct,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: Y,
      enableBackground: null,
      end: null,
      event: null,
      exponent: Y,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: Y,
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
      g1: ha,
      g2: ha,
      glyphName: ha,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: Y,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: Y,
      horizOriginX: Y,
      horizOriginY: Y,
      id: null,
      ideographic: Y,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: Y,
      k: Y,
      k1: Y,
      k2: Y,
      k3: Y,
      k4: Y,
      kernelMatrix: _e,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: Y,
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
      mediaSize: Y,
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
      overlinePosition: Y,
      overlineThickness: Y,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: Y,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: Lt,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: Y,
      pointsAtY: Y,
      pointsAtZ: Y,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: _e,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: _e,
      rev: _e,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: _e,
      requiredFeatures: _e,
      requiredFonts: _e,
      requiredFormats: _e,
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
      specularConstant: Y,
      specularExponent: Y,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: Y,
      strikethroughThickness: Y,
      string: null,
      stroke: null,
      strokeDashArray: _e,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: Y,
      strokeOpacity: Y,
      strokeWidth: null,
      style: null,
      surfaceScale: Y,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: _e,
      tabIndex: Y,
      tableValues: null,
      target: null,
      targetX: Y,
      targetY: Y,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: _e,
      to: null,
      transform: null,
      transformOrigin: null,
      u1: null,
      u2: null,
      underlinePosition: Y,
      underlineThickness: Y,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: Y,
      values: null,
      vAlphabetic: Y,
      vMathematical: Y,
      vectorEffect: null,
      vHanging: Y,
      vIdeographic: Y,
      version: null,
      vertAdvY: Y,
      vertOriginX: Y,
      vertOriginY: Y,
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
      xHeight: Y,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null
    },
    space: "svg",
    transform: Op
  }), kp = pa({
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
    transform(l, i) {
      return "xlink:" + i.slice(5).toLowerCase();
    }
  }), _p = pa({
    attributes: {
      xmlnsxlink: "xmlns:xlink"
    },
    properties: {
      xmlnsXLink: null,
      xmlns: null
    },
    space: "xmlns",
    transform: wp
  }), jp = pa({
    properties: {
      xmlBase: null,
      xmlLang: null,
      xmlSpace: null
    },
    space: "xml",
    transform(l, i) {
      return "xml:" + i.slice(3).toLowerCase();
    }
  }), C0 = {
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
  }, M0 = /[A-Z]/g, xm = /-[a-z]/g, N0 = /^data[-\w.:]+$/i;
  function D0(l, i) {
    const r = jo(i);
    let c = i, s = Ee;
    if (r in l.normal) return l.property[l.normal[r]];
    if (r.length > 4 && r.slice(0, 4) === "data" && N0.test(i)) {
      if (i.charAt(4) === "-") {
        const f = i.slice(5).replace(xm, w0);
        c = "data" + f.charAt(0).toUpperCase() + f.slice(1);
      } else {
        const f = i.slice(4);
        if (!xm.test(f)) {
          let h = f.replace(M0, O0);
          h.charAt(0) !== "-" && (h = "-" + h), i = "data" + h;
        }
      }
      s = Ko;
    }
    return new s(c, i);
  }
  function O0(l) {
    return "-" + l.toLowerCase();
  }
  function w0(l) {
    return l.charAt(1).toUpperCase();
  }
  const k0 = Np([
    Dp,
    T0,
    kp,
    _p,
    jp
  ], "html"), Jo = Np([
    Dp,
    A0,
    kp,
    _p,
    jp
  ], "svg");
  function _0(l) {
    return l.join(" ").trim();
  }
  var sa = {}, Eo, Sm;
  function j0() {
    if (Sm) return Eo;
    Sm = 1;
    var l = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, i = /\n/g, r = /^\s*/, c = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, s = /^:\s*/, f = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, h = /^[;\s]*/, m = /^\s+|\s+$/g, b = `
`, g = "/", y = "*", v = "", S = "comment", x = "declaration";
    function H(G, L) {
      if (typeof G != "string") throw new TypeError("First argument must be a string");
      if (!G) return [];
      L = L || {};
      var tt = 1, Z = 1;
      function mt(P) {
        var Q = P.match(i);
        Q && (tt += Q.length);
        var O = P.lastIndexOf(b);
        Z = ~O ? P.length - O : Z + P.length;
      }
      function bt() {
        var P = {
          line: tt,
          column: Z
        };
        return function(Q) {
          return Q.position = new B(P), st(), Q;
        };
      }
      function B(P) {
        this.start = P, this.end = {
          line: tt,
          column: Z
        }, this.source = L.source;
      }
      B.prototype.content = G;
      function ut(P) {
        var Q = new Error(L.source + ":" + tt + ":" + Z + ": " + P);
        if (Q.reason = P, Q.filename = L.source, Q.line = tt, Q.column = Z, Q.source = G, !L.silent) throw Q;
      }
      function ot(P) {
        var Q = P.exec(G);
        if (Q) {
          var O = Q[0];
          return mt(O), G = G.slice(O.length), Q;
        }
      }
      function st() {
        ot(r);
      }
      function xt(P) {
        var Q;
        for (P = P || []; Q = I(); ) Q !== false && P.push(Q);
        return P;
      }
      function I() {
        var P = bt();
        if (!(g != G.charAt(0) || y != G.charAt(1))) {
          for (var Q = 2; v != G.charAt(Q) && (y != G.charAt(Q) || g != G.charAt(Q + 1)); ) ++Q;
          if (Q += 2, v === G.charAt(Q - 1)) return ut("End of comment missing");
          var O = G.slice(2, Q - 2);
          return Z += 2, mt(O), G = G.slice(Q), Z += 2, P({
            type: S,
            comment: O
          });
        }
      }
      function K() {
        var P = bt(), Q = ot(c);
        if (Q) {
          if (I(), !ot(s)) return ut("property missing ':'");
          var O = ot(f), V = P({
            type: x,
            property: q(Q[0].replace(l, v)),
            value: O ? q(O[0].replace(l, v)) : v
          });
          return ot(h), V;
        }
      }
      function Tt() {
        var P = [];
        xt(P);
        for (var Q; Q = K(); ) Q !== false && (P.push(Q), xt(P));
        return P;
      }
      return st(), Tt();
    }
    function q(G) {
      return G ? G.replace(m, v) : v;
    }
    return Eo = H, Eo;
  }
  var Em;
  function U0() {
    if (Em) return sa;
    Em = 1;
    var l = sa && sa.__importDefault || function(c) {
      return c && c.__esModule ? c : {
        default: c
      };
    };
    Object.defineProperty(sa, "__esModule", {
      value: true
    }), sa.default = r;
    const i = l(j0());
    function r(c, s) {
      let f = null;
      if (!c || typeof c != "string") return f;
      const h = (0, i.default)(c), m = typeof s == "function";
      return h.forEach((b) => {
        if (b.type !== "declaration") return;
        const { property: g, value: y } = b;
        m ? s(g, y, b) : y && (f = f || {}, f[g] = y);
      }), f;
    }
    return sa;
  }
  var fi = {}, zm;
  function R0() {
    if (zm) return fi;
    zm = 1, Object.defineProperty(fi, "__esModule", {
      value: true
    }), fi.camelCase = void 0;
    var l = /^--[a-zA-Z0-9_-]+$/, i = /-([a-z])/g, r = /^[^-]+$/, c = /^-(webkit|moz|ms|o|khtml)-/, s = /^-(ms)-/, f = function(g) {
      return !g || r.test(g) || l.test(g);
    }, h = function(g, y) {
      return y.toUpperCase();
    }, m = function(g, y) {
      return "".concat(y, "-");
    }, b = function(g, y) {
      return y === void 0 && (y = {}), f(g) ? g : (g = g.toLowerCase(), y.reactCompat ? g = g.replace(s, m) : g = g.replace(c, m), g.replace(i, h));
    };
    return fi.camelCase = b, fi;
  }
  var hi, Tm;
  function B0() {
    if (Tm) return hi;
    Tm = 1;
    var l = hi && hi.__importDefault || function(s) {
      return s && s.__esModule ? s : {
        default: s
      };
    }, i = l(U0()), r = R0();
    function c(s, f) {
      var h = {};
      return !s || typeof s != "string" || (0, i.default)(s, function(m, b) {
        m && b && (h[(0, r.camelCase)(m, f)] = b);
      }), h;
    }
    return c.default = c, hi = c, hi;
  }
  var L0 = B0();
  const H0 = up(L0), Up = Rp("end"), Fo = Rp("start");
  function Rp(l) {
    return i;
    function i(r) {
      const c = r && r.position && r.position[l] || {};
      if (typeof c.line == "number" && c.line > 0 && typeof c.column == "number" && c.column > 0) return {
        line: c.line,
        column: c.column,
        offset: typeof c.offset == "number" && c.offset > -1 ? c.offset : void 0
      };
    }
  }
  function q0(l) {
    const i = Fo(l), r = Up(l);
    if (i && r) return {
      start: i,
      end: r
    };
  }
  function gi(l) {
    return !l || typeof l != "object" ? "" : "position" in l || "type" in l ? Am(l.position) : "start" in l || "end" in l ? Am(l) : "line" in l || "column" in l ? Bo(l) : "";
  }
  function Bo(l) {
    return Cm(l && l.line) + ":" + Cm(l && l.column);
  }
  function Am(l) {
    return Bo(l && l.start) + "-" + Bo(l && l.end);
  }
  function Cm(l) {
    return l && typeof l == "number" ? l : 1;
  }
  class ce extends Error {
    constructor(i, r, c) {
      super(), typeof r == "string" && (c = r, r = void 0);
      let s = "", f = {}, h = false;
      if (r && ("line" in r && "column" in r ? f = {
        place: r
      } : "start" in r && "end" in r ? f = {
        place: r
      } : "type" in r ? f = {
        ancestors: [
          r
        ],
        place: r.position
      } : f = {
        ...r
      }), typeof i == "string" ? s = i : !f.cause && i && (h = true, s = i.message, f.cause = i), !f.ruleId && !f.source && typeof c == "string") {
        const b = c.indexOf(":");
        b === -1 ? f.ruleId = c : (f.source = c.slice(0, b), f.ruleId = c.slice(b + 1));
      }
      if (!f.place && f.ancestors && f.ancestors) {
        const b = f.ancestors[f.ancestors.length - 1];
        b && (f.place = b.position);
      }
      const m = f.place && "start" in f.place ? f.place.start : f.place;
      this.ancestors = f.ancestors || void 0, this.cause = f.cause || void 0, this.column = m ? m.column : void 0, this.fatal = void 0, this.file = "", this.message = s, this.line = m ? m.line : void 0, this.name = gi(f.place) || "1:1", this.place = f.place || void 0, this.reason = this.message, this.ruleId = f.ruleId || void 0, this.source = f.source || void 0, this.stack = h && f.cause && typeof f.cause.stack == "string" ? f.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
    }
  }
  ce.prototype.file = "";
  ce.prototype.name = "";
  ce.prototype.reason = "";
  ce.prototype.message = "";
  ce.prototype.stack = "";
  ce.prototype.column = void 0;
  ce.prototype.line = void 0;
  ce.prototype.ancestors = void 0;
  ce.prototype.cause = void 0;
  ce.prototype.fatal = void 0;
  ce.prototype.place = void 0;
  ce.prototype.ruleId = void 0;
  ce.prototype.source = void 0;
  const Io = {}.hasOwnProperty, Y0 = /* @__PURE__ */ new Map(), V0 = /[A-Z]/g, X0 = /* @__PURE__ */ new Set([
    "table",
    "tbody",
    "thead",
    "tfoot",
    "tr"
  ]), Q0 = /* @__PURE__ */ new Set([
    "td",
    "th"
  ]), Bp = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
  function G0(l, i) {
    if (!i || i.Fragment === void 0) throw new TypeError("Expected `Fragment` in options");
    const r = i.filePath || void 0;
    let c;
    if (i.development) {
      if (typeof i.jsxDEV != "function") throw new TypeError("Expected `jsxDEV` in options when `development: true`");
      c = P0(r, i.jsxDEV);
    } else {
      if (typeof i.jsx != "function") throw new TypeError("Expected `jsx` in production options");
      if (typeof i.jsxs != "function") throw new TypeError("Expected `jsxs` in production options");
      c = $0(r, i.jsx, i.jsxs);
    }
    const s = {
      Fragment: i.Fragment,
      ancestors: [],
      components: i.components || {},
      create: c,
      elementAttributeNameCase: i.elementAttributeNameCase || "react",
      evaluater: i.createEvaluater ? i.createEvaluater() : void 0,
      filePath: r,
      ignoreInvalidStyle: i.ignoreInvalidStyle || false,
      passKeys: i.passKeys !== false,
      passNode: i.passNode || false,
      schema: i.space === "svg" ? Jo : k0,
      stylePropertyNameCase: i.stylePropertyNameCase || "dom",
      tableCellAlignToStyle: i.tableCellAlignToStyle !== false
    }, f = Lp(s, l, void 0);
    return f && typeof f != "string" ? f : s.create(l, s.Fragment, {
      children: f || void 0
    }, void 0);
  }
  function Lp(l, i, r) {
    if (i.type === "element") return Z0(l, i, r);
    if (i.type === "mdxFlowExpression" || i.type === "mdxTextExpression") return K0(l, i);
    if (i.type === "mdxJsxFlowElement" || i.type === "mdxJsxTextElement") return F0(l, i, r);
    if (i.type === "mdxjsEsm") return J0(l, i);
    if (i.type === "root") return I0(l, i, r);
    if (i.type === "text") return W0(l, i);
  }
  function Z0(l, i, r) {
    const c = l.schema;
    let s = c;
    i.tagName.toLowerCase() === "svg" && c.space === "html" && (s = Jo, l.schema = s), l.ancestors.push(i);
    const f = qp(l, i.tagName, false), h = tv(l, i);
    let m = $o(l, i);
    return X0.has(i.tagName) && (m = m.filter(function(b) {
      return typeof b == "string" ? !E0(b) : true;
    })), Hp(l, h, f, i), Wo(h, m), l.ancestors.pop(), l.schema = c, l.create(i, f, h, r);
  }
  function K0(l, i) {
    if (i.data && i.data.estree && l.evaluater) {
      const c = i.data.estree.body[0];
      return c.type, l.evaluater.evaluateExpression(c.expression);
    }
    bi(l, i.position);
  }
  function J0(l, i) {
    if (i.data && i.data.estree && l.evaluater) return l.evaluater.evaluateProgram(i.data.estree);
    bi(l, i.position);
  }
  function F0(l, i, r) {
    const c = l.schema;
    let s = c;
    i.name === "svg" && c.space === "html" && (s = Jo, l.schema = s), l.ancestors.push(i);
    const f = i.name === null ? l.Fragment : qp(l, i.name, true), h = ev(l, i), m = $o(l, i);
    return Hp(l, h, f, i), Wo(h, m), l.ancestors.pop(), l.schema = c, l.create(i, f, h, r);
  }
  function I0(l, i, r) {
    const c = {};
    return Wo(c, $o(l, i)), l.create(i, l.Fragment, c, r);
  }
  function W0(l, i) {
    return i.value;
  }
  function Hp(l, i, r, c) {
    typeof r != "string" && r !== l.Fragment && l.passNode && (i.node = c);
  }
  function Wo(l, i) {
    if (i.length > 0) {
      const r = i.length > 1 ? i : i[0];
      r && (l.children = r);
    }
  }
  function $0(l, i, r) {
    return c;
    function c(s, f, h, m) {
      const g = Array.isArray(h.children) ? r : i;
      return m ? g(f, h, m) : g(f, h);
    }
  }
  function P0(l, i) {
    return r;
    function r(c, s, f, h) {
      const m = Array.isArray(f.children), b = Fo(c);
      return i(s, f, h, m, {
        columnNumber: b ? b.column - 1 : void 0,
        fileName: l,
        lineNumber: b ? b.line : void 0
      }, void 0);
    }
  }
  function tv(l, i) {
    const r = {};
    let c, s;
    for (s in i.properties) if (s !== "children" && Io.call(i.properties, s)) {
      const f = nv(l, s, i.properties[s]);
      if (f) {
        const [h, m] = f;
        l.tableCellAlignToStyle && h === "align" && typeof m == "string" && Q0.has(i.tagName) ? c = m : r[h] = m;
      }
    }
    if (c) {
      const f = r.style || (r.style = {});
      f[l.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = c;
    }
    return r;
  }
  function ev(l, i) {
    const r = {};
    for (const c of i.attributes) if (c.type === "mdxJsxExpressionAttribute") if (c.data && c.data.estree && l.evaluater) {
      const f = c.data.estree.body[0];
      f.type;
      const h = f.expression;
      h.type;
      const m = h.properties[0];
      m.type, Object.assign(r, l.evaluater.evaluateExpression(m.argument));
    } else bi(l, i.position);
    else {
      const s = c.name;
      let f;
      if (c.value && typeof c.value == "object") if (c.value.data && c.value.data.estree && l.evaluater) {
        const m = c.value.data.estree.body[0];
        m.type, f = l.evaluater.evaluateExpression(m.expression);
      } else bi(l, i.position);
      else f = c.value === null ? true : c.value;
      r[s] = f;
    }
    return r;
  }
  function $o(l, i) {
    const r = [];
    let c = -1;
    const s = l.passKeys ? /* @__PURE__ */ new Map() : Y0;
    for (; ++c < i.children.length; ) {
      const f = i.children[c];
      let h;
      if (l.passKeys) {
        const b = f.type === "element" ? f.tagName : f.type === "mdxJsxFlowElement" || f.type === "mdxJsxTextElement" ? f.name : void 0;
        if (b) {
          const g = s.get(b) || 0;
          h = b + "-" + g, s.set(b, g + 1);
        }
      }
      const m = Lp(l, f, h);
      m !== void 0 && r.push(m);
    }
    return r;
  }
  function nv(l, i, r) {
    const c = D0(l.schema, i);
    if (!(r == null || typeof r == "number" && Number.isNaN(r))) {
      if (Array.isArray(r) && (r = c.commaSeparated ? y0(r) : _0(r)), c.property === "style") {
        let s = typeof r == "object" ? r : lv(l, String(r));
        return l.stylePropertyNameCase === "css" && (s = av(s)), [
          "style",
          s
        ];
      }
      return [
        l.elementAttributeNameCase === "react" && c.space ? C0[c.property] || c.property : c.attribute,
        r
      ];
    }
  }
  function lv(l, i) {
    try {
      return H0(i, {
        reactCompat: true
      });
    } catch (r) {
      if (l.ignoreInvalidStyle) return {};
      const c = r, s = new ce("Cannot parse `style` attribute", {
        ancestors: l.ancestors,
        cause: c,
        ruleId: "style",
        source: "hast-util-to-jsx-runtime"
      });
      throw s.file = l.filePath || void 0, s.url = Bp + "#cannot-parse-style-attribute", s;
    }
  }
  function qp(l, i, r) {
    let c;
    if (!r) c = {
      type: "Literal",
      value: i
    };
    else if (i.includes(".")) {
      const s = i.split(".");
      let f = -1, h;
      for (; ++f < s.length; ) {
        const m = ym(s[f]) ? {
          type: "Identifier",
          name: s[f]
        } : {
          type: "Literal",
          value: s[f]
        };
        h = h ? {
          type: "MemberExpression",
          object: h,
          property: m,
          computed: !!(f && m.type === "Literal"),
          optional: false
        } : m;
      }
      c = h;
    } else c = ym(i) && !/^[a-z]/.test(i) ? {
      type: "Identifier",
      name: i
    } : {
      type: "Literal",
      value: i
    };
    if (c.type === "Literal") {
      const s = c.value;
      return Io.call(l.components, s) ? l.components[s] : s;
    }
    if (l.evaluater) return l.evaluater.evaluateExpression(c);
    bi(l);
  }
  function bi(l, i) {
    const r = new ce("Cannot handle MDX estrees without `createEvaluater`", {
      ancestors: l.ancestors,
      place: i,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    });
    throw r.file = l.filePath || void 0, r.url = Bp + "#cannot-handle-mdx-estrees-without-createevaluater", r;
  }
  function av(l) {
    const i = {};
    let r;
    for (r in l) Io.call(l, r) && (i[iv(r)] = l[r]);
    return i;
  }
  function iv(l) {
    let i = l.replace(V0, uv);
    return i.slice(0, 3) === "ms-" && (i = "-" + i), i;
  }
  function uv(l) {
    return "-" + l.toLowerCase();
  }
  const zo = {
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
  }, rv = {};
  function cv(l, i) {
    const r = rv, c = typeof r.includeImageAlt == "boolean" ? r.includeImageAlt : true, s = typeof r.includeHtml == "boolean" ? r.includeHtml : true;
    return Yp(l, c, s);
  }
  function Yp(l, i, r) {
    if (ov(l)) {
      if ("value" in l) return l.type === "html" && !r ? "" : l.value;
      if (i && "alt" in l && l.alt) return l.alt;
      if ("children" in l) return Mm(l.children, i, r);
    }
    return Array.isArray(l) ? Mm(l, i, r) : "";
  }
  function Mm(l, i, r) {
    const c = [];
    let s = -1;
    for (; ++s < l.length; ) c[s] = Yp(l[s], i, r);
    return c.join("");
  }
  function ov(l) {
    return !!(l && typeof l == "object");
  }
  const Nm = document.createElement("i");
  function Po(l) {
    const i = "&" + l + ";";
    Nm.innerHTML = i;
    const r = Nm.textContent;
    return r.charCodeAt(r.length - 1) === 59 && l !== "semi" || r === i ? false : r;
  }
  function rn(l, i, r, c) {
    const s = l.length;
    let f = 0, h;
    if (i < 0 ? i = -i > s ? 0 : s + i : i = i > s ? s : i, r = r > 0 ? r : 0, c.length < 1e4) h = Array.from(c), h.unshift(i, r), l.splice(...h);
    else for (r && l.splice(i, r); f < c.length; ) h = c.slice(f, f + 1e4), h.unshift(i, 0), l.splice(...h), f += 1e4, i += 1e4;
  }
  function Ke(l, i) {
    return l.length > 0 ? (rn(l, l.length, 0, i), l) : i;
  }
  const Dm = {}.hasOwnProperty;
  function sv(l) {
    const i = {};
    let r = -1;
    for (; ++r < l.length; ) fv(i, l[r]);
    return i;
  }
  function fv(l, i) {
    let r;
    for (r in i) {
      const s = (Dm.call(l, r) ? l[r] : void 0) || (l[r] = {}), f = i[r];
      let h;
      if (f) for (h in f) {
        Dm.call(s, h) || (s[h] = []);
        const m = f[h];
        hv(s[h], Array.isArray(m) ? m : m ? [
          m
        ] : []);
      }
    }
  }
  function hv(l, i) {
    let r = -1;
    const c = [];
    for (; ++r < i.length; ) (i[r].add === "after" ? l : c).push(i[r]);
    rn(l, 0, 0, c);
  }
  function Vp(l, i) {
    const r = Number.parseInt(l, i);
    return r < 9 || r === 11 || r > 13 && r < 32 || r > 126 && r < 160 || r > 55295 && r < 57344 || r > 64975 && r < 65008 || (r & 65535) === 65535 || (r & 65535) === 65534 || r > 1114111 ? "\uFFFD" : String.fromCodePoint(r);
  }
  function da(l) {
    return l.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
  }
  const un = el(/[A-Za-z]/), je = el(/[\dA-Za-z]/), dv = el(/[#-'*+\--9=?A-Z^-~]/);
  function Lo(l) {
    return l !== null && (l < 32 || l === 127);
  }
  const Ho = el(/\d/), mv = el(/[\dA-Fa-f]/), pv = el(/[!-/:-@[-`{-~]/);
  function at(l) {
    return l !== null && l < -2;
  }
  function Se(l) {
    return l !== null && (l < 0 || l === 32);
  }
  function Ct(l) {
    return l === -2 || l === -1 || l === 32;
  }
  const gv = el(new RegExp("\\p{P}|\\p{S}", "u")), yv = el(/\s/);
  function el(l) {
    return i;
    function i(r) {
      return r !== null && r > -1 && l.test(String.fromCharCode(r));
    }
  }
  function ga(l) {
    const i = [];
    let r = -1, c = 0, s = 0;
    for (; ++r < l.length; ) {
      const f = l.charCodeAt(r);
      let h = "";
      if (f === 37 && je(l.charCodeAt(r + 1)) && je(l.charCodeAt(r + 2))) s = 2;
      else if (f < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(f)) || (h = String.fromCharCode(f));
      else if (f > 55295 && f < 57344) {
        const m = l.charCodeAt(r + 1);
        f < 56320 && m > 56319 && m < 57344 ? (h = String.fromCharCode(f, m), s = 1) : h = "\uFFFD";
      } else h = String.fromCharCode(f);
      h && (i.push(l.slice(c, r), encodeURIComponent(h)), c = r + s + 1, h = ""), s && (r += s, s = 0);
    }
    return i.join("") + l.slice(c);
  }
  function Ht(l, i, r, c) {
    const s = c ? c - 1 : Number.POSITIVE_INFINITY;
    let f = 0;
    return h;
    function h(b) {
      return Ct(b) ? (l.enter(r), m(b)) : i(b);
    }
    function m(b) {
      return Ct(b) && f++ < s ? (l.consume(b), m) : (l.exit(r), i(b));
    }
  }
  const vv = {
    tokenize: bv
  };
  function bv(l) {
    const i = l.attempt(this.parser.constructs.contentInitial, c, s);
    let r;
    return i;
    function c(m) {
      if (m === null) {
        l.consume(m);
        return;
      }
      return l.enter("lineEnding"), l.consume(m), l.exit("lineEnding"), Ht(l, i, "linePrefix");
    }
    function s(m) {
      return l.enter("paragraph"), f(m);
    }
    function f(m) {
      const b = l.enter("chunkText", {
        contentType: "text",
        previous: r
      });
      return r && (r.next = b), r = b, h(m);
    }
    function h(m) {
      if (m === null) {
        l.exit("chunkText"), l.exit("paragraph"), l.consume(m);
        return;
      }
      return at(m) ? (l.consume(m), l.exit("chunkText"), f) : (l.consume(m), h);
    }
  }
  const xv = {
    tokenize: Sv
  }, Om = {
    tokenize: Ev
  };
  function Sv(l) {
    const i = this, r = [];
    let c = 0, s, f, h;
    return m;
    function m(Z) {
      if (c < r.length) {
        const mt = r[c];
        return i.containerState = mt[1], l.attempt(mt[0].continuation, b, g)(Z);
      }
      return g(Z);
    }
    function b(Z) {
      if (c++, i.containerState._closeFlow) {
        i.containerState._closeFlow = void 0, s && tt();
        const mt = i.events.length;
        let bt = mt, B;
        for (; bt--; ) if (i.events[bt][0] === "exit" && i.events[bt][1].type === "chunkFlow") {
          B = i.events[bt][1].end;
          break;
        }
        L(c);
        let ut = mt;
        for (; ut < i.events.length; ) i.events[ut][1].end = {
          ...B
        }, ut++;
        return rn(i.events, bt + 1, 0, i.events.slice(mt)), i.events.length = ut, g(Z);
      }
      return m(Z);
    }
    function g(Z) {
      if (c === r.length) {
        if (!s) return S(Z);
        if (s.currentConstruct && s.currentConstruct.concrete) return H(Z);
        i.interrupt = !!(s.currentConstruct && !s._gfmTableDynamicInterruptHack);
      }
      return i.containerState = {}, l.check(Om, y, v)(Z);
    }
    function y(Z) {
      return s && tt(), L(c), S(Z);
    }
    function v(Z) {
      return i.parser.lazy[i.now().line] = c !== r.length, h = i.now().offset, H(Z);
    }
    function S(Z) {
      return i.containerState = {}, l.attempt(Om, x, H)(Z);
    }
    function x(Z) {
      return c++, r.push([
        i.currentConstruct,
        i.containerState
      ]), S(Z);
    }
    function H(Z) {
      if (Z === null) {
        s && tt(), L(0), l.consume(Z);
        return;
      }
      return s = s || i.parser.flow(i.now()), l.enter("chunkFlow", {
        _tokenizer: s,
        contentType: "flow",
        previous: f
      }), q(Z);
    }
    function q(Z) {
      if (Z === null) {
        G(l.exit("chunkFlow"), true), L(0), l.consume(Z);
        return;
      }
      return at(Z) ? (l.consume(Z), G(l.exit("chunkFlow")), c = 0, i.interrupt = void 0, m) : (l.consume(Z), q);
    }
    function G(Z, mt) {
      const bt = i.sliceStream(Z);
      if (mt && bt.push(null), Z.previous = f, f && (f.next = Z), f = Z, s.defineSkip(Z.start), s.write(bt), i.parser.lazy[Z.start.line]) {
        let B = s.events.length;
        for (; B--; ) if (s.events[B][1].start.offset < h && (!s.events[B][1].end || s.events[B][1].end.offset > h)) return;
        const ut = i.events.length;
        let ot = ut, st, xt;
        for (; ot--; ) if (i.events[ot][0] === "exit" && i.events[ot][1].type === "chunkFlow") {
          if (st) {
            xt = i.events[ot][1].end;
            break;
          }
          st = true;
        }
        for (L(c), B = ut; B < i.events.length; ) i.events[B][1].end = {
          ...xt
        }, B++;
        rn(i.events, ot + 1, 0, i.events.slice(ut)), i.events.length = B;
      }
    }
    function L(Z) {
      let mt = r.length;
      for (; mt-- > Z; ) {
        const bt = r[mt];
        i.containerState = bt[1], bt[0].exit.call(i, l);
      }
      r.length = Z;
    }
    function tt() {
      s.write([
        null
      ]), f = void 0, s = void 0, i.containerState._closeFlow = void 0;
    }
  }
  function Ev(l, i, r) {
    return Ht(l, l.attempt(this.parser.constructs.document, i, r), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
  }
  function wm(l) {
    if (l === null || Se(l) || yv(l)) return 1;
    if (gv(l)) return 2;
  }
  function ts(l, i, r) {
    const c = [];
    let s = -1;
    for (; ++s < l.length; ) {
      const f = l[s].resolveAll;
      f && !c.includes(f) && (i = f(i, r), c.push(f));
    }
    return i;
  }
  const qo = {
    name: "attention",
    resolveAll: zv,
    tokenize: Tv
  };
  function zv(l, i) {
    let r = -1, c, s, f, h, m, b, g, y;
    for (; ++r < l.length; ) if (l[r][0] === "enter" && l[r][1].type === "attentionSequence" && l[r][1]._close) {
      for (c = r; c--; ) if (l[c][0] === "exit" && l[c][1].type === "attentionSequence" && l[c][1]._open && i.sliceSerialize(l[c][1]).charCodeAt(0) === i.sliceSerialize(l[r][1]).charCodeAt(0)) {
        if ((l[c][1]._close || l[r][1]._open) && (l[r][1].end.offset - l[r][1].start.offset) % 3 && !((l[c][1].end.offset - l[c][1].start.offset + l[r][1].end.offset - l[r][1].start.offset) % 3)) continue;
        b = l[c][1].end.offset - l[c][1].start.offset > 1 && l[r][1].end.offset - l[r][1].start.offset > 1 ? 2 : 1;
        const v = {
          ...l[c][1].end
        }, S = {
          ...l[r][1].start
        };
        km(v, -b), km(S, b), h = {
          type: b > 1 ? "strongSequence" : "emphasisSequence",
          start: v,
          end: {
            ...l[c][1].end
          }
        }, m = {
          type: b > 1 ? "strongSequence" : "emphasisSequence",
          start: {
            ...l[r][1].start
          },
          end: S
        }, f = {
          type: b > 1 ? "strongText" : "emphasisText",
          start: {
            ...l[c][1].end
          },
          end: {
            ...l[r][1].start
          }
        }, s = {
          type: b > 1 ? "strong" : "emphasis",
          start: {
            ...h.start
          },
          end: {
            ...m.end
          }
        }, l[c][1].end = {
          ...h.start
        }, l[r][1].start = {
          ...m.end
        }, g = [], l[c][1].end.offset - l[c][1].start.offset && (g = Ke(g, [
          [
            "enter",
            l[c][1],
            i
          ],
          [
            "exit",
            l[c][1],
            i
          ]
        ])), g = Ke(g, [
          [
            "enter",
            s,
            i
          ],
          [
            "enter",
            h,
            i
          ],
          [
            "exit",
            h,
            i
          ],
          [
            "enter",
            f,
            i
          ]
        ]), g = Ke(g, ts(i.parser.constructs.insideSpan.null, l.slice(c + 1, r), i)), g = Ke(g, [
          [
            "exit",
            f,
            i
          ],
          [
            "enter",
            m,
            i
          ],
          [
            "exit",
            m,
            i
          ],
          [
            "exit",
            s,
            i
          ]
        ]), l[r][1].end.offset - l[r][1].start.offset ? (y = 2, g = Ke(g, [
          [
            "enter",
            l[r][1],
            i
          ],
          [
            "exit",
            l[r][1],
            i
          ]
        ])) : y = 0, rn(l, c - 1, r - c + 3, g), r = c + g.length - y - 2;
        break;
      }
    }
    for (r = -1; ++r < l.length; ) l[r][1].type === "attentionSequence" && (l[r][1].type = "data");
    return l;
  }
  function Tv(l, i) {
    const r = this.parser.constructs.attentionMarkers.null, c = this.previous, s = wm(c);
    let f;
    return h;
    function h(b) {
      return f = b, l.enter("attentionSequence"), m(b);
    }
    function m(b) {
      if (b === f) return l.consume(b), m;
      const g = l.exit("attentionSequence"), y = wm(b), v = !y || y === 2 && s || r.includes(b), S = !s || s === 2 && y || r.includes(c);
      return g._open = !!(f === 42 ? v : v && (s || !S)), g._close = !!(f === 42 ? S : S && (y || !v)), i(b);
    }
  }
  function km(l, i) {
    l.column += i, l.offset += i, l._bufferIndex += i;
  }
  const Av = {
    name: "autolink",
    tokenize: Cv
  };
  function Cv(l, i, r) {
    let c = 0;
    return s;
    function s(x) {
      return l.enter("autolink"), l.enter("autolinkMarker"), l.consume(x), l.exit("autolinkMarker"), l.enter("autolinkProtocol"), f;
    }
    function f(x) {
      return un(x) ? (l.consume(x), h) : x === 64 ? r(x) : g(x);
    }
    function h(x) {
      return x === 43 || x === 45 || x === 46 || je(x) ? (c = 1, m(x)) : g(x);
    }
    function m(x) {
      return x === 58 ? (l.consume(x), c = 0, b) : (x === 43 || x === 45 || x === 46 || je(x)) && c++ < 32 ? (l.consume(x), m) : (c = 0, g(x));
    }
    function b(x) {
      return x === 62 ? (l.exit("autolinkProtocol"), l.enter("autolinkMarker"), l.consume(x), l.exit("autolinkMarker"), l.exit("autolink"), i) : x === null || x === 32 || x === 60 || Lo(x) ? r(x) : (l.consume(x), b);
    }
    function g(x) {
      return x === 64 ? (l.consume(x), y) : dv(x) ? (l.consume(x), g) : r(x);
    }
    function y(x) {
      return je(x) ? v(x) : r(x);
    }
    function v(x) {
      return x === 46 ? (l.consume(x), c = 0, y) : x === 62 ? (l.exit("autolinkProtocol").type = "autolinkEmail", l.enter("autolinkMarker"), l.consume(x), l.exit("autolinkMarker"), l.exit("autolink"), i) : S(x);
    }
    function S(x) {
      if ((x === 45 || je(x)) && c++ < 63) {
        const H = x === 45 ? S : v;
        return l.consume(x), H;
      }
      return r(x);
    }
  }
  const Iu = {
    partial: true,
    tokenize: Mv
  };
  function Mv(l, i, r) {
    return c;
    function c(f) {
      return Ct(f) ? Ht(l, s, "linePrefix")(f) : s(f);
    }
    function s(f) {
      return f === null || at(f) ? i(f) : r(f);
    }
  }
  const Xp = {
    continuation: {
      tokenize: Dv
    },
    exit: Ov,
    name: "blockQuote",
    tokenize: Nv
  };
  function Nv(l, i, r) {
    const c = this;
    return s;
    function s(h) {
      if (h === 62) {
        const m = c.containerState;
        return m.open || (l.enter("blockQuote", {
          _container: true
        }), m.open = true), l.enter("blockQuotePrefix"), l.enter("blockQuoteMarker"), l.consume(h), l.exit("blockQuoteMarker"), f;
      }
      return r(h);
    }
    function f(h) {
      return Ct(h) ? (l.enter("blockQuotePrefixWhitespace"), l.consume(h), l.exit("blockQuotePrefixWhitespace"), l.exit("blockQuotePrefix"), i) : (l.exit("blockQuotePrefix"), i(h));
    }
  }
  function Dv(l, i, r) {
    const c = this;
    return s;
    function s(h) {
      return Ct(h) ? Ht(l, f, "linePrefix", c.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(h) : f(h);
    }
    function f(h) {
      return l.attempt(Xp, i, r)(h);
    }
  }
  function Ov(l) {
    l.exit("blockQuote");
  }
  const Qp = {
    name: "characterEscape",
    tokenize: wv
  };
  function wv(l, i, r) {
    return c;
    function c(f) {
      return l.enter("characterEscape"), l.enter("escapeMarker"), l.consume(f), l.exit("escapeMarker"), s;
    }
    function s(f) {
      return pv(f) ? (l.enter("characterEscapeValue"), l.consume(f), l.exit("characterEscapeValue"), l.exit("characterEscape"), i) : r(f);
    }
  }
  const Gp = {
    name: "characterReference",
    tokenize: kv
  };
  function kv(l, i, r) {
    const c = this;
    let s = 0, f, h;
    return m;
    function m(v) {
      return l.enter("characterReference"), l.enter("characterReferenceMarker"), l.consume(v), l.exit("characterReferenceMarker"), b;
    }
    function b(v) {
      return v === 35 ? (l.enter("characterReferenceMarkerNumeric"), l.consume(v), l.exit("characterReferenceMarkerNumeric"), g) : (l.enter("characterReferenceValue"), f = 31, h = je, y(v));
    }
    function g(v) {
      return v === 88 || v === 120 ? (l.enter("characterReferenceMarkerHexadecimal"), l.consume(v), l.exit("characterReferenceMarkerHexadecimal"), l.enter("characterReferenceValue"), f = 6, h = mv, y) : (l.enter("characterReferenceValue"), f = 7, h = Ho, y(v));
    }
    function y(v) {
      if (v === 59 && s) {
        const S = l.exit("characterReferenceValue");
        return h === je && !Po(c.sliceSerialize(S)) ? r(v) : (l.enter("characterReferenceMarker"), l.consume(v), l.exit("characterReferenceMarker"), l.exit("characterReference"), i);
      }
      return h(v) && s++ < f ? (l.consume(v), y) : r(v);
    }
  }
  const _m = {
    partial: true,
    tokenize: jv
  }, jm = {
    concrete: true,
    name: "codeFenced",
    tokenize: _v
  };
  function _v(l, i, r) {
    const c = this, s = {
      partial: true,
      tokenize: bt
    };
    let f = 0, h = 0, m;
    return b;
    function b(B) {
      return g(B);
    }
    function g(B) {
      const ut = c.events[c.events.length - 1];
      return f = ut && ut[1].type === "linePrefix" ? ut[2].sliceSerialize(ut[1], true).length : 0, m = B, l.enter("codeFenced"), l.enter("codeFencedFence"), l.enter("codeFencedFenceSequence"), y(B);
    }
    function y(B) {
      return B === m ? (h++, l.consume(B), y) : h < 3 ? r(B) : (l.exit("codeFencedFenceSequence"), Ct(B) ? Ht(l, v, "whitespace")(B) : v(B));
    }
    function v(B) {
      return B === null || at(B) ? (l.exit("codeFencedFence"), c.interrupt ? i(B) : l.check(_m, q, mt)(B)) : (l.enter("codeFencedFenceInfo"), l.enter("chunkString", {
        contentType: "string"
      }), S(B));
    }
    function S(B) {
      return B === null || at(B) ? (l.exit("chunkString"), l.exit("codeFencedFenceInfo"), v(B)) : Ct(B) ? (l.exit("chunkString"), l.exit("codeFencedFenceInfo"), Ht(l, x, "whitespace")(B)) : B === 96 && B === m ? r(B) : (l.consume(B), S);
    }
    function x(B) {
      return B === null || at(B) ? v(B) : (l.enter("codeFencedFenceMeta"), l.enter("chunkString", {
        contentType: "string"
      }), H(B));
    }
    function H(B) {
      return B === null || at(B) ? (l.exit("chunkString"), l.exit("codeFencedFenceMeta"), v(B)) : B === 96 && B === m ? r(B) : (l.consume(B), H);
    }
    function q(B) {
      return l.attempt(s, mt, G)(B);
    }
    function G(B) {
      return l.enter("lineEnding"), l.consume(B), l.exit("lineEnding"), L;
    }
    function L(B) {
      return f > 0 && Ct(B) ? Ht(l, tt, "linePrefix", f + 1)(B) : tt(B);
    }
    function tt(B) {
      return B === null || at(B) ? l.check(_m, q, mt)(B) : (l.enter("codeFlowValue"), Z(B));
    }
    function Z(B) {
      return B === null || at(B) ? (l.exit("codeFlowValue"), tt(B)) : (l.consume(B), Z);
    }
    function mt(B) {
      return l.exit("codeFenced"), i(B);
    }
    function bt(B, ut, ot) {
      let st = 0;
      return xt;
      function xt(Q) {
        return B.enter("lineEnding"), B.consume(Q), B.exit("lineEnding"), I;
      }
      function I(Q) {
        return B.enter("codeFencedFence"), Ct(Q) ? Ht(B, K, "linePrefix", c.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(Q) : K(Q);
      }
      function K(Q) {
        return Q === m ? (B.enter("codeFencedFenceSequence"), Tt(Q)) : ot(Q);
      }
      function Tt(Q) {
        return Q === m ? (st++, B.consume(Q), Tt) : st >= h ? (B.exit("codeFencedFenceSequence"), Ct(Q) ? Ht(B, P, "whitespace")(Q) : P(Q)) : ot(Q);
      }
      function P(Q) {
        return Q === null || at(Q) ? (B.exit("codeFencedFence"), ut(Q)) : ot(Q);
      }
    }
  }
  function jv(l, i, r) {
    const c = this;
    return s;
    function s(h) {
      return h === null ? r(h) : (l.enter("lineEnding"), l.consume(h), l.exit("lineEnding"), f);
    }
    function f(h) {
      return c.parser.lazy[c.now().line] ? r(h) : i(h);
    }
  }
  const To = {
    name: "codeIndented",
    tokenize: Rv
  }, Uv = {
    partial: true,
    tokenize: Bv
  };
  function Rv(l, i, r) {
    const c = this;
    return s;
    function s(g) {
      return l.enter("codeIndented"), Ht(l, f, "linePrefix", 5)(g);
    }
    function f(g) {
      const y = c.events[c.events.length - 1];
      return y && y[1].type === "linePrefix" && y[2].sliceSerialize(y[1], true).length >= 4 ? h(g) : r(g);
    }
    function h(g) {
      return g === null ? b(g) : at(g) ? l.attempt(Uv, h, b)(g) : (l.enter("codeFlowValue"), m(g));
    }
    function m(g) {
      return g === null || at(g) ? (l.exit("codeFlowValue"), h(g)) : (l.consume(g), m);
    }
    function b(g) {
      return l.exit("codeIndented"), i(g);
    }
  }
  function Bv(l, i, r) {
    const c = this;
    return s;
    function s(h) {
      return c.parser.lazy[c.now().line] ? r(h) : at(h) ? (l.enter("lineEnding"), l.consume(h), l.exit("lineEnding"), s) : Ht(l, f, "linePrefix", 5)(h);
    }
    function f(h) {
      const m = c.events[c.events.length - 1];
      return m && m[1].type === "linePrefix" && m[2].sliceSerialize(m[1], true).length >= 4 ? i(h) : at(h) ? s(h) : r(h);
    }
  }
  const Lv = {
    name: "codeText",
    previous: qv,
    resolve: Hv,
    tokenize: Yv
  };
  function Hv(l) {
    let i = l.length - 4, r = 3, c, s;
    if ((l[r][1].type === "lineEnding" || l[r][1].type === "space") && (l[i][1].type === "lineEnding" || l[i][1].type === "space")) {
      for (c = r; ++c < i; ) if (l[c][1].type === "codeTextData") {
        l[r][1].type = "codeTextPadding", l[i][1].type = "codeTextPadding", r += 2, i -= 2;
        break;
      }
    }
    for (c = r - 1, i++; ++c <= i; ) s === void 0 ? c !== i && l[c][1].type !== "lineEnding" && (s = c) : (c === i || l[c][1].type === "lineEnding") && (l[s][1].type = "codeTextData", c !== s + 2 && (l[s][1].end = l[c - 1][1].end, l.splice(s + 2, c - s - 2), i -= c - s - 2, c = s + 2), s = void 0);
    return l;
  }
  function qv(l) {
    return l !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
  }
  function Yv(l, i, r) {
    let c = 0, s, f;
    return h;
    function h(v) {
      return l.enter("codeText"), l.enter("codeTextSequence"), m(v);
    }
    function m(v) {
      return v === 96 ? (l.consume(v), c++, m) : (l.exit("codeTextSequence"), b(v));
    }
    function b(v) {
      return v === null ? r(v) : v === 32 ? (l.enter("space"), l.consume(v), l.exit("space"), b) : v === 96 ? (f = l.enter("codeTextSequence"), s = 0, y(v)) : at(v) ? (l.enter("lineEnding"), l.consume(v), l.exit("lineEnding"), b) : (l.enter("codeTextData"), g(v));
    }
    function g(v) {
      return v === null || v === 32 || v === 96 || at(v) ? (l.exit("codeTextData"), b(v)) : (l.consume(v), g);
    }
    function y(v) {
      return v === 96 ? (l.consume(v), s++, y) : s === c ? (l.exit("codeTextSequence"), l.exit("codeText"), i(v)) : (f.type = "codeTextData", g(v));
    }
  }
  class Vv {
    constructor(i) {
      this.left = i ? [
        ...i
      ] : [], this.right = [];
    }
    get(i) {
      if (i < 0 || i >= this.left.length + this.right.length) throw new RangeError("Cannot access index `" + i + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
      return i < this.left.length ? this.left[i] : this.right[this.right.length - i + this.left.length - 1];
    }
    get length() {
      return this.left.length + this.right.length;
    }
    shift() {
      return this.setCursor(0), this.right.pop();
    }
    slice(i, r) {
      const c = r ?? Number.POSITIVE_INFINITY;
      return c < this.left.length ? this.left.slice(i, c) : i > this.left.length ? this.right.slice(this.right.length - c + this.left.length, this.right.length - i + this.left.length).reverse() : this.left.slice(i).concat(this.right.slice(this.right.length - c + this.left.length).reverse());
    }
    splice(i, r, c) {
      const s = r || 0;
      this.setCursor(Math.trunc(i));
      const f = this.right.splice(this.right.length - s, Number.POSITIVE_INFINITY);
      return c && di(this.left, c), f.reverse();
    }
    pop() {
      return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
    }
    push(i) {
      this.setCursor(Number.POSITIVE_INFINITY), this.left.push(i);
    }
    pushMany(i) {
      this.setCursor(Number.POSITIVE_INFINITY), di(this.left, i);
    }
    unshift(i) {
      this.setCursor(0), this.right.push(i);
    }
    unshiftMany(i) {
      this.setCursor(0), di(this.right, i.reverse());
    }
    setCursor(i) {
      if (!(i === this.left.length || i > this.left.length && this.right.length === 0 || i < 0 && this.left.length === 0)) if (i < this.left.length) {
        const r = this.left.splice(i, Number.POSITIVE_INFINITY);
        di(this.right, r.reverse());
      } else {
        const r = this.right.splice(this.left.length + this.right.length - i, Number.POSITIVE_INFINITY);
        di(this.left, r.reverse());
      }
    }
  }
  function di(l, i) {
    let r = 0;
    if (i.length < 1e4) l.push(...i);
    else for (; r < i.length; ) l.push(...i.slice(r, r + 1e4)), r += 1e4;
  }
  function Zp(l) {
    const i = {};
    let r = -1, c, s, f, h, m, b, g;
    const y = new Vv(l);
    for (; ++r < y.length; ) {
      for (; r in i; ) r = i[r];
      if (c = y.get(r), r && c[1].type === "chunkFlow" && y.get(r - 1)[1].type === "listItemPrefix" && (b = c[1]._tokenizer.events, f = 0, f < b.length && b[f][1].type === "lineEndingBlank" && (f += 2), f < b.length && b[f][1].type === "content")) for (; ++f < b.length && b[f][1].type !== "content"; ) b[f][1].type === "chunkText" && (b[f][1]._isInFirstContentOfListItem = true, f++);
      if (c[0] === "enter") c[1].contentType && (Object.assign(i, Xv(y, r)), r = i[r], g = true);
      else if (c[1]._container) {
        for (f = r, s = void 0; f--; ) if (h = y.get(f), h[1].type === "lineEnding" || h[1].type === "lineEndingBlank") h[0] === "enter" && (s && (y.get(s)[1].type = "lineEndingBlank"), h[1].type = "lineEnding", s = f);
        else if (!(h[1].type === "linePrefix" || h[1].type === "listItemIndent")) break;
        s && (c[1].end = {
          ...y.get(s)[1].start
        }, m = y.slice(s, r), m.unshift(c), y.splice(s, r - s + 1, m));
      }
    }
    return rn(l, 0, Number.POSITIVE_INFINITY, y.slice(0)), !g;
  }
  function Xv(l, i) {
    const r = l.get(i)[1], c = l.get(i)[2];
    let s = i - 1;
    const f = [];
    let h = r._tokenizer;
    h || (h = c.parser[r.contentType](r.start), r._contentTypeTextTrailing && (h._contentTypeTextTrailing = true));
    const m = h.events, b = [], g = {};
    let y, v, S = -1, x = r, H = 0, q = 0;
    const G = [
      q
    ];
    for (; x; ) {
      for (; l.get(++s)[1] !== x; ) ;
      f.push(s), x._tokenizer || (y = c.sliceStream(x), x.next || y.push(null), v && h.defineSkip(x.start), x._isInFirstContentOfListItem && (h._gfmTasklistFirstContentOfListItem = true), h.write(y), x._isInFirstContentOfListItem && (h._gfmTasklistFirstContentOfListItem = void 0)), v = x, x = x.next;
    }
    for (x = r; ++S < m.length; ) m[S][0] === "exit" && m[S - 1][0] === "enter" && m[S][1].type === m[S - 1][1].type && m[S][1].start.line !== m[S][1].end.line && (q = S + 1, G.push(q), x._tokenizer = void 0, x.previous = void 0, x = x.next);
    for (h.events = [], x ? (x._tokenizer = void 0, x.previous = void 0) : G.pop(), S = G.length; S--; ) {
      const L = m.slice(G[S], G[S + 1]), tt = f.pop();
      b.push([
        tt,
        tt + L.length - 1
      ]), l.splice(tt, 2, L);
    }
    for (b.reverse(), S = -1; ++S < b.length; ) g[H + b[S][0]] = H + b[S][1], H += b[S][1] - b[S][0] - 1;
    return g;
  }
  const Qv = {
    resolve: Zv,
    tokenize: Kv
  }, Gv = {
    partial: true,
    tokenize: Jv
  };
  function Zv(l) {
    return Zp(l), l;
  }
  function Kv(l, i) {
    let r;
    return c;
    function c(m) {
      return l.enter("content"), r = l.enter("chunkContent", {
        contentType: "content"
      }), s(m);
    }
    function s(m) {
      return m === null ? f(m) : at(m) ? l.check(Gv, h, f)(m) : (l.consume(m), s);
    }
    function f(m) {
      return l.exit("chunkContent"), l.exit("content"), i(m);
    }
    function h(m) {
      return l.consume(m), l.exit("chunkContent"), r.next = l.enter("chunkContent", {
        contentType: "content",
        previous: r
      }), r = r.next, s;
    }
  }
  function Jv(l, i, r) {
    const c = this;
    return s;
    function s(h) {
      return l.exit("chunkContent"), l.enter("lineEnding"), l.consume(h), l.exit("lineEnding"), Ht(l, f, "linePrefix");
    }
    function f(h) {
      if (h === null || at(h)) return r(h);
      const m = c.events[c.events.length - 1];
      return !c.parser.constructs.disable.null.includes("codeIndented") && m && m[1].type === "linePrefix" && m[2].sliceSerialize(m[1], true).length >= 4 ? i(h) : l.interrupt(c.parser.constructs.flow, r, i)(h);
    }
  }
  function Kp(l, i, r, c, s, f, h, m, b) {
    const g = b || Number.POSITIVE_INFINITY;
    let y = 0;
    return v;
    function v(L) {
      return L === 60 ? (l.enter(c), l.enter(s), l.enter(f), l.consume(L), l.exit(f), S) : L === null || L === 32 || L === 41 || Lo(L) ? r(L) : (l.enter(c), l.enter(h), l.enter(m), l.enter("chunkString", {
        contentType: "string"
      }), q(L));
    }
    function S(L) {
      return L === 62 ? (l.enter(f), l.consume(L), l.exit(f), l.exit(s), l.exit(c), i) : (l.enter(m), l.enter("chunkString", {
        contentType: "string"
      }), x(L));
    }
    function x(L) {
      return L === 62 ? (l.exit("chunkString"), l.exit(m), S(L)) : L === null || L === 60 || at(L) ? r(L) : (l.consume(L), L === 92 ? H : x);
    }
    function H(L) {
      return L === 60 || L === 62 || L === 92 ? (l.consume(L), x) : x(L);
    }
    function q(L) {
      return !y && (L === null || L === 41 || Se(L)) ? (l.exit("chunkString"), l.exit(m), l.exit(h), l.exit(c), i(L)) : y < g && L === 40 ? (l.consume(L), y++, q) : L === 41 ? (l.consume(L), y--, q) : L === null || L === 32 || L === 40 || Lo(L) ? r(L) : (l.consume(L), L === 92 ? G : q);
    }
    function G(L) {
      return L === 40 || L === 41 || L === 92 ? (l.consume(L), q) : q(L);
    }
  }
  function Jp(l, i, r, c, s, f) {
    const h = this;
    let m = 0, b;
    return g;
    function g(x) {
      return l.enter(c), l.enter(s), l.consume(x), l.exit(s), l.enter(f), y;
    }
    function y(x) {
      return m > 999 || x === null || x === 91 || x === 93 && !b || x === 94 && !m && "_hiddenFootnoteSupport" in h.parser.constructs ? r(x) : x === 93 ? (l.exit(f), l.enter(s), l.consume(x), l.exit(s), l.exit(c), i) : at(x) ? (l.enter("lineEnding"), l.consume(x), l.exit("lineEnding"), y) : (l.enter("chunkString", {
        contentType: "string"
      }), v(x));
    }
    function v(x) {
      return x === null || x === 91 || x === 93 || at(x) || m++ > 999 ? (l.exit("chunkString"), y(x)) : (l.consume(x), b || (b = !Ct(x)), x === 92 ? S : v);
    }
    function S(x) {
      return x === 91 || x === 92 || x === 93 ? (l.consume(x), m++, v) : v(x);
    }
  }
  function Fp(l, i, r, c, s, f) {
    let h;
    return m;
    function m(S) {
      return S === 34 || S === 39 || S === 40 ? (l.enter(c), l.enter(s), l.consume(S), l.exit(s), h = S === 40 ? 41 : S, b) : r(S);
    }
    function b(S) {
      return S === h ? (l.enter(s), l.consume(S), l.exit(s), l.exit(c), i) : (l.enter(f), g(S));
    }
    function g(S) {
      return S === h ? (l.exit(f), b(h)) : S === null ? r(S) : at(S) ? (l.enter("lineEnding"), l.consume(S), l.exit("lineEnding"), Ht(l, g, "linePrefix")) : (l.enter("chunkString", {
        contentType: "string"
      }), y(S));
    }
    function y(S) {
      return S === h || S === null || at(S) ? (l.exit("chunkString"), g(S)) : (l.consume(S), S === 92 ? v : y);
    }
    function v(S) {
      return S === h || S === 92 ? (l.consume(S), y) : y(S);
    }
  }
  function yi(l, i) {
    let r;
    return c;
    function c(s) {
      return at(s) ? (l.enter("lineEnding"), l.consume(s), l.exit("lineEnding"), r = true, c) : Ct(s) ? Ht(l, c, r ? "linePrefix" : "lineSuffix")(s) : i(s);
    }
  }
  const Fv = {
    name: "definition",
    tokenize: Wv
  }, Iv = {
    partial: true,
    tokenize: $v
  };
  function Wv(l, i, r) {
    const c = this;
    let s;
    return f;
    function f(x) {
      return l.enter("definition"), h(x);
    }
    function h(x) {
      return Jp.call(c, l, m, r, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(x);
    }
    function m(x) {
      return s = da(c.sliceSerialize(c.events[c.events.length - 1][1]).slice(1, -1)), x === 58 ? (l.enter("definitionMarker"), l.consume(x), l.exit("definitionMarker"), b) : r(x);
    }
    function b(x) {
      return Se(x) ? yi(l, g)(x) : g(x);
    }
    function g(x) {
      return Kp(l, y, r, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(x);
    }
    function y(x) {
      return l.attempt(Iv, v, v)(x);
    }
    function v(x) {
      return Ct(x) ? Ht(l, S, "whitespace")(x) : S(x);
    }
    function S(x) {
      return x === null || at(x) ? (l.exit("definition"), c.parser.defined.push(s), i(x)) : r(x);
    }
  }
  function $v(l, i, r) {
    return c;
    function c(m) {
      return Se(m) ? yi(l, s)(m) : r(m);
    }
    function s(m) {
      return Fp(l, f, r, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(m);
    }
    function f(m) {
      return Ct(m) ? Ht(l, h, "whitespace")(m) : h(m);
    }
    function h(m) {
      return m === null || at(m) ? i(m) : r(m);
    }
  }
  const Pv = {
    name: "hardBreakEscape",
    tokenize: tb
  };
  function tb(l, i, r) {
    return c;
    function c(f) {
      return l.enter("hardBreakEscape"), l.consume(f), s;
    }
    function s(f) {
      return at(f) ? (l.exit("hardBreakEscape"), i(f)) : r(f);
    }
  }
  const eb = {
    name: "headingAtx",
    resolve: nb,
    tokenize: lb
  };
  function nb(l, i) {
    let r = l.length - 2, c = 3, s, f;
    return l[c][1].type === "whitespace" && (c += 2), r - 2 > c && l[r][1].type === "whitespace" && (r -= 2), l[r][1].type === "atxHeadingSequence" && (c === r - 1 || r - 4 > c && l[r - 2][1].type === "whitespace") && (r -= c + 1 === r ? 2 : 4), r > c && (s = {
      type: "atxHeadingText",
      start: l[c][1].start,
      end: l[r][1].end
    }, f = {
      type: "chunkText",
      start: l[c][1].start,
      end: l[r][1].end,
      contentType: "text"
    }, rn(l, c, r - c + 1, [
      [
        "enter",
        s,
        i
      ],
      [
        "enter",
        f,
        i
      ],
      [
        "exit",
        f,
        i
      ],
      [
        "exit",
        s,
        i
      ]
    ])), l;
  }
  function lb(l, i, r) {
    let c = 0;
    return s;
    function s(y) {
      return l.enter("atxHeading"), f(y);
    }
    function f(y) {
      return l.enter("atxHeadingSequence"), h(y);
    }
    function h(y) {
      return y === 35 && c++ < 6 ? (l.consume(y), h) : y === null || Se(y) ? (l.exit("atxHeadingSequence"), m(y)) : r(y);
    }
    function m(y) {
      return y === 35 ? (l.enter("atxHeadingSequence"), b(y)) : y === null || at(y) ? (l.exit("atxHeading"), i(y)) : Ct(y) ? Ht(l, m, "whitespace")(y) : (l.enter("atxHeadingText"), g(y));
    }
    function b(y) {
      return y === 35 ? (l.consume(y), b) : (l.exit("atxHeadingSequence"), m(y));
    }
    function g(y) {
      return y === null || y === 35 || Se(y) ? (l.exit("atxHeadingText"), m(y)) : (l.consume(y), g);
    }
  }
  const ab = [
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
  ], Um = [
    "pre",
    "script",
    "style",
    "textarea"
  ], ib = {
    concrete: true,
    name: "htmlFlow",
    resolveTo: cb,
    tokenize: ob
  }, ub = {
    partial: true,
    tokenize: fb
  }, rb = {
    partial: true,
    tokenize: sb
  };
  function cb(l) {
    let i = l.length;
    for (; i-- && !(l[i][0] === "enter" && l[i][1].type === "htmlFlow"); ) ;
    return i > 1 && l[i - 2][1].type === "linePrefix" && (l[i][1].start = l[i - 2][1].start, l[i + 1][1].start = l[i - 2][1].start, l.splice(i - 2, 2)), l;
  }
  function ob(l, i, r) {
    const c = this;
    let s, f, h, m, b;
    return g;
    function g(E) {
      return y(E);
    }
    function y(E) {
      return l.enter("htmlFlow"), l.enter("htmlFlowData"), l.consume(E), v;
    }
    function v(E) {
      return E === 33 ? (l.consume(E), S) : E === 47 ? (l.consume(E), f = true, q) : E === 63 ? (l.consume(E), s = 3, c.interrupt ? i : z) : un(E) ? (l.consume(E), h = String.fromCharCode(E), G) : r(E);
    }
    function S(E) {
      return E === 45 ? (l.consume(E), s = 2, x) : E === 91 ? (l.consume(E), s = 5, m = 0, H) : un(E) ? (l.consume(E), s = 4, c.interrupt ? i : z) : r(E);
    }
    function x(E) {
      return E === 45 ? (l.consume(E), c.interrupt ? i : z) : r(E);
    }
    function H(E) {
      const Mt = "CDATA[";
      return E === Mt.charCodeAt(m++) ? (l.consume(E), m === Mt.length ? c.interrupt ? i : K : H) : r(E);
    }
    function q(E) {
      return un(E) ? (l.consume(E), h = String.fromCharCode(E), G) : r(E);
    }
    function G(E) {
      if (E === null || E === 47 || E === 62 || Se(E)) {
        const Mt = E === 47, te = h.toLowerCase();
        return !Mt && !f && Um.includes(te) ? (s = 1, c.interrupt ? i(E) : K(E)) : ab.includes(h.toLowerCase()) ? (s = 6, Mt ? (l.consume(E), L) : c.interrupt ? i(E) : K(E)) : (s = 7, c.interrupt && !c.parser.lazy[c.now().line] ? r(E) : f ? tt(E) : Z(E));
      }
      return E === 45 || je(E) ? (l.consume(E), h += String.fromCharCode(E), G) : r(E);
    }
    function L(E) {
      return E === 62 ? (l.consume(E), c.interrupt ? i : K) : r(E);
    }
    function tt(E) {
      return Ct(E) ? (l.consume(E), tt) : xt(E);
    }
    function Z(E) {
      return E === 47 ? (l.consume(E), xt) : E === 58 || E === 95 || un(E) ? (l.consume(E), mt) : Ct(E) ? (l.consume(E), Z) : xt(E);
    }
    function mt(E) {
      return E === 45 || E === 46 || E === 58 || E === 95 || je(E) ? (l.consume(E), mt) : bt(E);
    }
    function bt(E) {
      return E === 61 ? (l.consume(E), B) : Ct(E) ? (l.consume(E), bt) : Z(E);
    }
    function B(E) {
      return E === null || E === 60 || E === 61 || E === 62 || E === 96 ? r(E) : E === 34 || E === 39 ? (l.consume(E), b = E, ut) : Ct(E) ? (l.consume(E), B) : ot(E);
    }
    function ut(E) {
      return E === b ? (l.consume(E), b = null, st) : E === null || at(E) ? r(E) : (l.consume(E), ut);
    }
    function ot(E) {
      return E === null || E === 34 || E === 39 || E === 47 || E === 60 || E === 61 || E === 62 || E === 96 || Se(E) ? bt(E) : (l.consume(E), ot);
    }
    function st(E) {
      return E === 47 || E === 62 || Ct(E) ? Z(E) : r(E);
    }
    function xt(E) {
      return E === 62 ? (l.consume(E), I) : r(E);
    }
    function I(E) {
      return E === null || at(E) ? K(E) : Ct(E) ? (l.consume(E), I) : r(E);
    }
    function K(E) {
      return E === 45 && s === 2 ? (l.consume(E), O) : E === 60 && s === 1 ? (l.consume(E), V) : E === 62 && s === 4 ? (l.consume(E), jt) : E === 63 && s === 3 ? (l.consume(E), z) : E === 93 && s === 5 ? (l.consume(E), yt) : at(E) && (s === 6 || s === 7) ? (l.exit("htmlFlowData"), l.check(ub, St, Tt)(E)) : E === null || at(E) ? (l.exit("htmlFlowData"), Tt(E)) : (l.consume(E), K);
    }
    function Tt(E) {
      return l.check(rb, P, St)(E);
    }
    function P(E) {
      return l.enter("lineEnding"), l.consume(E), l.exit("lineEnding"), Q;
    }
    function Q(E) {
      return E === null || at(E) ? Tt(E) : (l.enter("htmlFlowData"), K(E));
    }
    function O(E) {
      return E === 45 ? (l.consume(E), z) : K(E);
    }
    function V(E) {
      return E === 47 ? (l.consume(E), h = "", W) : K(E);
    }
    function W(E) {
      if (E === 62) {
        const Mt = h.toLowerCase();
        return Um.includes(Mt) ? (l.consume(E), jt) : K(E);
      }
      return un(E) && h.length < 8 ? (l.consume(E), h += String.fromCharCode(E), W) : K(E);
    }
    function yt(E) {
      return E === 93 ? (l.consume(E), z) : K(E);
    }
    function z(E) {
      return E === 62 ? (l.consume(E), jt) : E === 45 && s === 2 ? (l.consume(E), z) : K(E);
    }
    function jt(E) {
      return E === null || at(E) ? (l.exit("htmlFlowData"), St(E)) : (l.consume(E), jt);
    }
    function St(E) {
      return l.exit("htmlFlow"), i(E);
    }
  }
  function sb(l, i, r) {
    const c = this;
    return s;
    function s(h) {
      return at(h) ? (l.enter("lineEnding"), l.consume(h), l.exit("lineEnding"), f) : r(h);
    }
    function f(h) {
      return c.parser.lazy[c.now().line] ? r(h) : i(h);
    }
  }
  function fb(l, i, r) {
    return c;
    function c(s) {
      return l.enter("lineEnding"), l.consume(s), l.exit("lineEnding"), l.attempt(Iu, i, r);
    }
  }
  const hb = {
    name: "htmlText",
    tokenize: db
  };
  function db(l, i, r) {
    const c = this;
    let s, f, h;
    return m;
    function m(z) {
      return l.enter("htmlText"), l.enter("htmlTextData"), l.consume(z), b;
    }
    function b(z) {
      return z === 33 ? (l.consume(z), g) : z === 47 ? (l.consume(z), bt) : z === 63 ? (l.consume(z), Z) : un(z) ? (l.consume(z), ot) : r(z);
    }
    function g(z) {
      return z === 45 ? (l.consume(z), y) : z === 91 ? (l.consume(z), f = 0, H) : un(z) ? (l.consume(z), tt) : r(z);
    }
    function y(z) {
      return z === 45 ? (l.consume(z), x) : r(z);
    }
    function v(z) {
      return z === null ? r(z) : z === 45 ? (l.consume(z), S) : at(z) ? (h = v, V(z)) : (l.consume(z), v);
    }
    function S(z) {
      return z === 45 ? (l.consume(z), x) : v(z);
    }
    function x(z) {
      return z === 62 ? O(z) : z === 45 ? S(z) : v(z);
    }
    function H(z) {
      const jt = "CDATA[";
      return z === jt.charCodeAt(f++) ? (l.consume(z), f === jt.length ? q : H) : r(z);
    }
    function q(z) {
      return z === null ? r(z) : z === 93 ? (l.consume(z), G) : at(z) ? (h = q, V(z)) : (l.consume(z), q);
    }
    function G(z) {
      return z === 93 ? (l.consume(z), L) : q(z);
    }
    function L(z) {
      return z === 62 ? O(z) : z === 93 ? (l.consume(z), L) : q(z);
    }
    function tt(z) {
      return z === null || z === 62 ? O(z) : at(z) ? (h = tt, V(z)) : (l.consume(z), tt);
    }
    function Z(z) {
      return z === null ? r(z) : z === 63 ? (l.consume(z), mt) : at(z) ? (h = Z, V(z)) : (l.consume(z), Z);
    }
    function mt(z) {
      return z === 62 ? O(z) : Z(z);
    }
    function bt(z) {
      return un(z) ? (l.consume(z), B) : r(z);
    }
    function B(z) {
      return z === 45 || je(z) ? (l.consume(z), B) : ut(z);
    }
    function ut(z) {
      return at(z) ? (h = ut, V(z)) : Ct(z) ? (l.consume(z), ut) : O(z);
    }
    function ot(z) {
      return z === 45 || je(z) ? (l.consume(z), ot) : z === 47 || z === 62 || Se(z) ? st(z) : r(z);
    }
    function st(z) {
      return z === 47 ? (l.consume(z), O) : z === 58 || z === 95 || un(z) ? (l.consume(z), xt) : at(z) ? (h = st, V(z)) : Ct(z) ? (l.consume(z), st) : O(z);
    }
    function xt(z) {
      return z === 45 || z === 46 || z === 58 || z === 95 || je(z) ? (l.consume(z), xt) : I(z);
    }
    function I(z) {
      return z === 61 ? (l.consume(z), K) : at(z) ? (h = I, V(z)) : Ct(z) ? (l.consume(z), I) : st(z);
    }
    function K(z) {
      return z === null || z === 60 || z === 61 || z === 62 || z === 96 ? r(z) : z === 34 || z === 39 ? (l.consume(z), s = z, Tt) : at(z) ? (h = K, V(z)) : Ct(z) ? (l.consume(z), K) : (l.consume(z), P);
    }
    function Tt(z) {
      return z === s ? (l.consume(z), s = void 0, Q) : z === null ? r(z) : at(z) ? (h = Tt, V(z)) : (l.consume(z), Tt);
    }
    function P(z) {
      return z === null || z === 34 || z === 39 || z === 60 || z === 61 || z === 96 ? r(z) : z === 47 || z === 62 || Se(z) ? st(z) : (l.consume(z), P);
    }
    function Q(z) {
      return z === 47 || z === 62 || Se(z) ? st(z) : r(z);
    }
    function O(z) {
      return z === 62 ? (l.consume(z), l.exit("htmlTextData"), l.exit("htmlText"), i) : r(z);
    }
    function V(z) {
      return l.exit("htmlTextData"), l.enter("lineEnding"), l.consume(z), l.exit("lineEnding"), W;
    }
    function W(z) {
      return Ct(z) ? Ht(l, yt, "linePrefix", c.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(z) : yt(z);
    }
    function yt(z) {
      return l.enter("htmlTextData"), h(z);
    }
  }
  const es = {
    name: "labelEnd",
    resolveAll: yb,
    resolveTo: vb,
    tokenize: bb
  }, mb = {
    tokenize: xb
  }, pb = {
    tokenize: Sb
  }, gb = {
    tokenize: Eb
  };
  function yb(l) {
    let i = -1;
    const r = [];
    for (; ++i < l.length; ) {
      const c = l[i][1];
      if (r.push(l[i]), c.type === "labelImage" || c.type === "labelLink" || c.type === "labelEnd") {
        const s = c.type === "labelImage" ? 4 : 2;
        c.type = "data", i += s;
      }
    }
    return l.length !== r.length && rn(l, 0, l.length, r), l;
  }
  function vb(l, i) {
    let r = l.length, c = 0, s, f, h, m;
    for (; r--; ) if (s = l[r][1], f) {
      if (s.type === "link" || s.type === "labelLink" && s._inactive) break;
      l[r][0] === "enter" && s.type === "labelLink" && (s._inactive = true);
    } else if (h) {
      if (l[r][0] === "enter" && (s.type === "labelImage" || s.type === "labelLink") && !s._balanced && (f = r, s.type !== "labelLink")) {
        c = 2;
        break;
      }
    } else s.type === "labelEnd" && (h = r);
    const b = {
      type: l[f][1].type === "labelLink" ? "link" : "image",
      start: {
        ...l[f][1].start
      },
      end: {
        ...l[l.length - 1][1].end
      }
    }, g = {
      type: "label",
      start: {
        ...l[f][1].start
      },
      end: {
        ...l[h][1].end
      }
    }, y = {
      type: "labelText",
      start: {
        ...l[f + c + 2][1].end
      },
      end: {
        ...l[h - 2][1].start
      }
    };
    return m = [
      [
        "enter",
        b,
        i
      ],
      [
        "enter",
        g,
        i
      ]
    ], m = Ke(m, l.slice(f + 1, f + c + 3)), m = Ke(m, [
      [
        "enter",
        y,
        i
      ]
    ]), m = Ke(m, ts(i.parser.constructs.insideSpan.null, l.slice(f + c + 4, h - 3), i)), m = Ke(m, [
      [
        "exit",
        y,
        i
      ],
      l[h - 2],
      l[h - 1],
      [
        "exit",
        g,
        i
      ]
    ]), m = Ke(m, l.slice(h + 1)), m = Ke(m, [
      [
        "exit",
        b,
        i
      ]
    ]), rn(l, f, l.length, m), l;
  }
  function bb(l, i, r) {
    const c = this;
    let s = c.events.length, f, h;
    for (; s--; ) if ((c.events[s][1].type === "labelImage" || c.events[s][1].type === "labelLink") && !c.events[s][1]._balanced) {
      f = c.events[s][1];
      break;
    }
    return m;
    function m(S) {
      return f ? f._inactive ? v(S) : (h = c.parser.defined.includes(da(c.sliceSerialize({
        start: f.end,
        end: c.now()
      }))), l.enter("labelEnd"), l.enter("labelMarker"), l.consume(S), l.exit("labelMarker"), l.exit("labelEnd"), b) : r(S);
    }
    function b(S) {
      return S === 40 ? l.attempt(mb, y, h ? y : v)(S) : S === 91 ? l.attempt(pb, y, h ? g : v)(S) : h ? y(S) : v(S);
    }
    function g(S) {
      return l.attempt(gb, y, v)(S);
    }
    function y(S) {
      return i(S);
    }
    function v(S) {
      return f._balanced = true, r(S);
    }
  }
  function xb(l, i, r) {
    return c;
    function c(v) {
      return l.enter("resource"), l.enter("resourceMarker"), l.consume(v), l.exit("resourceMarker"), s;
    }
    function s(v) {
      return Se(v) ? yi(l, f)(v) : f(v);
    }
    function f(v) {
      return v === 41 ? y(v) : Kp(l, h, m, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(v);
    }
    function h(v) {
      return Se(v) ? yi(l, b)(v) : y(v);
    }
    function m(v) {
      return r(v);
    }
    function b(v) {
      return v === 34 || v === 39 || v === 40 ? Fp(l, g, r, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(v) : y(v);
    }
    function g(v) {
      return Se(v) ? yi(l, y)(v) : y(v);
    }
    function y(v) {
      return v === 41 ? (l.enter("resourceMarker"), l.consume(v), l.exit("resourceMarker"), l.exit("resource"), i) : r(v);
    }
  }
  function Sb(l, i, r) {
    const c = this;
    return s;
    function s(m) {
      return Jp.call(c, l, f, h, "reference", "referenceMarker", "referenceString")(m);
    }
    function f(m) {
      return c.parser.defined.includes(da(c.sliceSerialize(c.events[c.events.length - 1][1]).slice(1, -1))) ? i(m) : r(m);
    }
    function h(m) {
      return r(m);
    }
  }
  function Eb(l, i, r) {
    return c;
    function c(f) {
      return l.enter("reference"), l.enter("referenceMarker"), l.consume(f), l.exit("referenceMarker"), s;
    }
    function s(f) {
      return f === 93 ? (l.enter("referenceMarker"), l.consume(f), l.exit("referenceMarker"), l.exit("reference"), i) : r(f);
    }
  }
  const zb = {
    name: "labelStartImage",
    resolveAll: es.resolveAll,
    tokenize: Tb
  };
  function Tb(l, i, r) {
    const c = this;
    return s;
    function s(m) {
      return l.enter("labelImage"), l.enter("labelImageMarker"), l.consume(m), l.exit("labelImageMarker"), f;
    }
    function f(m) {
      return m === 91 ? (l.enter("labelMarker"), l.consume(m), l.exit("labelMarker"), l.exit("labelImage"), h) : r(m);
    }
    function h(m) {
      return m === 94 && "_hiddenFootnoteSupport" in c.parser.constructs ? r(m) : i(m);
    }
  }
  const Ab = {
    name: "labelStartLink",
    resolveAll: es.resolveAll,
    tokenize: Cb
  };
  function Cb(l, i, r) {
    const c = this;
    return s;
    function s(h) {
      return l.enter("labelLink"), l.enter("labelMarker"), l.consume(h), l.exit("labelMarker"), l.exit("labelLink"), f;
    }
    function f(h) {
      return h === 94 && "_hiddenFootnoteSupport" in c.parser.constructs ? r(h) : i(h);
    }
  }
  const Ao = {
    name: "lineEnding",
    tokenize: Mb
  };
  function Mb(l, i) {
    return r;
    function r(c) {
      return l.enter("lineEnding"), l.consume(c), l.exit("lineEnding"), Ht(l, i, "linePrefix");
    }
  }
  const Gu = {
    name: "thematicBreak",
    tokenize: Nb
  };
  function Nb(l, i, r) {
    let c = 0, s;
    return f;
    function f(g) {
      return l.enter("thematicBreak"), h(g);
    }
    function h(g) {
      return s = g, m(g);
    }
    function m(g) {
      return g === s ? (l.enter("thematicBreakSequence"), b(g)) : c >= 3 && (g === null || at(g)) ? (l.exit("thematicBreak"), i(g)) : r(g);
    }
    function b(g) {
      return g === s ? (l.consume(g), c++, b) : (l.exit("thematicBreakSequence"), Ct(g) ? Ht(l, m, "whitespace")(g) : m(g));
    }
  }
  const xe = {
    continuation: {
      tokenize: kb
    },
    exit: jb,
    name: "list",
    tokenize: wb
  }, Db = {
    partial: true,
    tokenize: Ub
  }, Ob = {
    partial: true,
    tokenize: _b
  };
  function wb(l, i, r) {
    const c = this, s = c.events[c.events.length - 1];
    let f = s && s[1].type === "linePrefix" ? s[2].sliceSerialize(s[1], true).length : 0, h = 0;
    return m;
    function m(x) {
      const H = c.containerState.type || (x === 42 || x === 43 || x === 45 ? "listUnordered" : "listOrdered");
      if (H === "listUnordered" ? !c.containerState.marker || x === c.containerState.marker : Ho(x)) {
        if (c.containerState.type || (c.containerState.type = H, l.enter(H, {
          _container: true
        })), H === "listUnordered") return l.enter("listItemPrefix"), x === 42 || x === 45 ? l.check(Gu, r, g)(x) : g(x);
        if (!c.interrupt || x === 49) return l.enter("listItemPrefix"), l.enter("listItemValue"), b(x);
      }
      return r(x);
    }
    function b(x) {
      return Ho(x) && ++h < 10 ? (l.consume(x), b) : (!c.interrupt || h < 2) && (c.containerState.marker ? x === c.containerState.marker : x === 41 || x === 46) ? (l.exit("listItemValue"), g(x)) : r(x);
    }
    function g(x) {
      return l.enter("listItemMarker"), l.consume(x), l.exit("listItemMarker"), c.containerState.marker = c.containerState.marker || x, l.check(Iu, c.interrupt ? r : y, l.attempt(Db, S, v));
    }
    function y(x) {
      return c.containerState.initialBlankLine = true, f++, S(x);
    }
    function v(x) {
      return Ct(x) ? (l.enter("listItemPrefixWhitespace"), l.consume(x), l.exit("listItemPrefixWhitespace"), S) : r(x);
    }
    function S(x) {
      return c.containerState.size = f + c.sliceSerialize(l.exit("listItemPrefix"), true).length, i(x);
    }
  }
  function kb(l, i, r) {
    const c = this;
    return c.containerState._closeFlow = void 0, l.check(Iu, s, f);
    function s(m) {
      return c.containerState.furtherBlankLines = c.containerState.furtherBlankLines || c.containerState.initialBlankLine, Ht(l, i, "listItemIndent", c.containerState.size + 1)(m);
    }
    function f(m) {
      return c.containerState.furtherBlankLines || !Ct(m) ? (c.containerState.furtherBlankLines = void 0, c.containerState.initialBlankLine = void 0, h(m)) : (c.containerState.furtherBlankLines = void 0, c.containerState.initialBlankLine = void 0, l.attempt(Ob, i, h)(m));
    }
    function h(m) {
      return c.containerState._closeFlow = true, c.interrupt = void 0, Ht(l, l.attempt(xe, i, r), "linePrefix", c.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(m);
    }
  }
  function _b(l, i, r) {
    const c = this;
    return Ht(l, s, "listItemIndent", c.containerState.size + 1);
    function s(f) {
      const h = c.events[c.events.length - 1];
      return h && h[1].type === "listItemIndent" && h[2].sliceSerialize(h[1], true).length === c.containerState.size ? i(f) : r(f);
    }
  }
  function jb(l) {
    l.exit(this.containerState.type);
  }
  function Ub(l, i, r) {
    const c = this;
    return Ht(l, s, "listItemPrefixWhitespace", c.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
    function s(f) {
      const h = c.events[c.events.length - 1];
      return !Ct(f) && h && h[1].type === "listItemPrefixWhitespace" ? i(f) : r(f);
    }
  }
  const Rm = {
    name: "setextUnderline",
    resolveTo: Rb,
    tokenize: Bb
  };
  function Rb(l, i) {
    let r = l.length, c, s, f;
    for (; r--; ) if (l[r][0] === "enter") {
      if (l[r][1].type === "content") {
        c = r;
        break;
      }
      l[r][1].type === "paragraph" && (s = r);
    } else l[r][1].type === "content" && l.splice(r, 1), !f && l[r][1].type === "definition" && (f = r);
    const h = {
      type: "setextHeading",
      start: {
        ...l[c][1].start
      },
      end: {
        ...l[l.length - 1][1].end
      }
    };
    return l[s][1].type = "setextHeadingText", f ? (l.splice(s, 0, [
      "enter",
      h,
      i
    ]), l.splice(f + 1, 0, [
      "exit",
      l[c][1],
      i
    ]), l[c][1].end = {
      ...l[f][1].end
    }) : l[c][1] = h, l.push([
      "exit",
      h,
      i
    ]), l;
  }
  function Bb(l, i, r) {
    const c = this;
    let s;
    return f;
    function f(g) {
      let y = c.events.length, v;
      for (; y--; ) if (c.events[y][1].type !== "lineEnding" && c.events[y][1].type !== "linePrefix" && c.events[y][1].type !== "content") {
        v = c.events[y][1].type === "paragraph";
        break;
      }
      return !c.parser.lazy[c.now().line] && (c.interrupt || v) ? (l.enter("setextHeadingLine"), s = g, h(g)) : r(g);
    }
    function h(g) {
      return l.enter("setextHeadingLineSequence"), m(g);
    }
    function m(g) {
      return g === s ? (l.consume(g), m) : (l.exit("setextHeadingLineSequence"), Ct(g) ? Ht(l, b, "lineSuffix")(g) : b(g));
    }
    function b(g) {
      return g === null || at(g) ? (l.exit("setextHeadingLine"), i(g)) : r(g);
    }
  }
  const Lb = {
    tokenize: Hb
  };
  function Hb(l) {
    const i = this, r = l.attempt(Iu, c, l.attempt(this.parser.constructs.flowInitial, s, Ht(l, l.attempt(this.parser.constructs.flow, s, l.attempt(Qv, s)), "linePrefix")));
    return r;
    function c(f) {
      if (f === null) {
        l.consume(f);
        return;
      }
      return l.enter("lineEndingBlank"), l.consume(f), l.exit("lineEndingBlank"), i.currentConstruct = void 0, r;
    }
    function s(f) {
      if (f === null) {
        l.consume(f);
        return;
      }
      return l.enter("lineEnding"), l.consume(f), l.exit("lineEnding"), i.currentConstruct = void 0, r;
    }
  }
  const qb = {
    resolveAll: Wp()
  }, Yb = Ip("string"), Vb = Ip("text");
  function Ip(l) {
    return {
      resolveAll: Wp(l === "text" ? Xb : void 0),
      tokenize: i
    };
    function i(r) {
      const c = this, s = this.parser.constructs[l], f = r.attempt(s, h, m);
      return h;
      function h(y) {
        return g(y) ? f(y) : m(y);
      }
      function m(y) {
        if (y === null) {
          r.consume(y);
          return;
        }
        return r.enter("data"), r.consume(y), b;
      }
      function b(y) {
        return g(y) ? (r.exit("data"), f(y)) : (r.consume(y), b);
      }
      function g(y) {
        if (y === null) return true;
        const v = s[y];
        let S = -1;
        if (v) for (; ++S < v.length; ) {
          const x = v[S];
          if (!x.previous || x.previous.call(c, c.previous)) return true;
        }
        return false;
      }
    }
  }
  function Wp(l) {
    return i;
    function i(r, c) {
      let s = -1, f;
      for (; ++s <= r.length; ) f === void 0 ? r[s] && r[s][1].type === "data" && (f = s, s++) : (!r[s] || r[s][1].type !== "data") && (s !== f + 2 && (r[f][1].end = r[s - 1][1].end, r.splice(f + 2, s - f - 2), s = f + 2), f = void 0);
      return l ? l(r, c) : r;
    }
  }
  function Xb(l, i) {
    let r = 0;
    for (; ++r <= l.length; ) if ((r === l.length || l[r][1].type === "lineEnding") && l[r - 1][1].type === "data") {
      const c = l[r - 1][1], s = i.sliceStream(c);
      let f = s.length, h = -1, m = 0, b;
      for (; f--; ) {
        const g = s[f];
        if (typeof g == "string") {
          for (h = g.length; g.charCodeAt(h - 1) === 32; ) m++, h--;
          if (h) break;
          h = -1;
        } else if (g === -2) b = true, m++;
        else if (g !== -1) {
          f++;
          break;
        }
      }
      if (i._contentTypeTextTrailing && r === l.length && (m = 0), m) {
        const g = {
          type: r === l.length || b || m < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: f ? h : c.start._bufferIndex + h,
            _index: c.start._index + f,
            line: c.end.line,
            column: c.end.column - m,
            offset: c.end.offset - m
          },
          end: {
            ...c.end
          }
        };
        c.end = {
          ...g.start
        }, c.start.offset === c.end.offset ? Object.assign(c, g) : (l.splice(r, 0, [
          "enter",
          g,
          i
        ], [
          "exit",
          g,
          i
        ]), r += 2);
      }
      r++;
    }
    return l;
  }
  const Qb = {
    42: xe,
    43: xe,
    45: xe,
    48: xe,
    49: xe,
    50: xe,
    51: xe,
    52: xe,
    53: xe,
    54: xe,
    55: xe,
    56: xe,
    57: xe,
    62: Xp
  }, Gb = {
    91: Fv
  }, Zb = {
    [-2]: To,
    [-1]: To,
    32: To
  }, Kb = {
    35: eb,
    42: Gu,
    45: [
      Rm,
      Gu
    ],
    60: ib,
    61: Rm,
    95: Gu,
    96: jm,
    126: jm
  }, Jb = {
    38: Gp,
    92: Qp
  }, Fb = {
    [-5]: Ao,
    [-4]: Ao,
    [-3]: Ao,
    33: zb,
    38: Gp,
    42: qo,
    60: [
      Av,
      hb
    ],
    91: Ab,
    92: [
      Pv,
      Qp
    ],
    93: es,
    95: qo,
    96: Lv
  }, Ib = {
    null: [
      qo,
      qb
    ]
  }, Wb = {
    null: [
      42,
      95
    ]
  }, $b = {
    null: []
  }, Pb = Object.freeze(Object.defineProperty({
    __proto__: null,
    attentionMarkers: Wb,
    contentInitial: Gb,
    disable: $b,
    document: Qb,
    flow: Kb,
    flowInitial: Zb,
    insideSpan: Ib,
    string: Jb,
    text: Fb
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  function tx(l, i, r) {
    let c = {
      _bufferIndex: -1,
      _index: 0,
      line: r && r.line || 1,
      column: r && r.column || 1,
      offset: r && r.offset || 0
    };
    const s = {}, f = [];
    let h = [], m = [];
    const b = {
      attempt: ut(bt),
      check: ut(B),
      consume: tt,
      enter: Z,
      exit: mt,
      interrupt: ut(B, {
        interrupt: true
      })
    }, g = {
      code: null,
      containerState: {},
      defineSkip: q,
      events: [],
      now: H,
      parser: l,
      previous: null,
      sliceSerialize: S,
      sliceStream: x,
      write: v
    };
    let y = i.tokenize.call(g, b);
    return i.resolveAll && f.push(i), g;
    function v(I) {
      return h = Ke(h, I), G(), h[h.length - 1] !== null ? [] : (ot(i, 0), g.events = ts(f, g.events, g), g.events);
    }
    function S(I, K) {
      return nx(x(I), K);
    }
    function x(I) {
      return ex(h, I);
    }
    function H() {
      const { _bufferIndex: I, _index: K, line: Tt, column: P, offset: Q } = c;
      return {
        _bufferIndex: I,
        _index: K,
        line: Tt,
        column: P,
        offset: Q
      };
    }
    function q(I) {
      s[I.line] = I.column, xt();
    }
    function G() {
      let I;
      for (; c._index < h.length; ) {
        const K = h[c._index];
        if (typeof K == "string") for (I = c._index, c._bufferIndex < 0 && (c._bufferIndex = 0); c._index === I && c._bufferIndex < K.length; ) L(K.charCodeAt(c._bufferIndex));
        else L(K);
      }
    }
    function L(I) {
      y = y(I);
    }
    function tt(I) {
      at(I) ? (c.line++, c.column = 1, c.offset += I === -3 ? 2 : 1, xt()) : I !== -1 && (c.column++, c.offset++), c._bufferIndex < 0 ? c._index++ : (c._bufferIndex++, c._bufferIndex === h[c._index].length && (c._bufferIndex = -1, c._index++)), g.previous = I;
    }
    function Z(I, K) {
      const Tt = K || {};
      return Tt.type = I, Tt.start = H(), g.events.push([
        "enter",
        Tt,
        g
      ]), m.push(Tt), Tt;
    }
    function mt(I) {
      const K = m.pop();
      return K.end = H(), g.events.push([
        "exit",
        K,
        g
      ]), K;
    }
    function bt(I, K) {
      ot(I, K.from);
    }
    function B(I, K) {
      K.restore();
    }
    function ut(I, K) {
      return Tt;
      function Tt(P, Q, O) {
        let V, W, yt, z;
        return Array.isArray(P) ? St(P) : "tokenize" in P ? St([
          P
        ]) : jt(P);
        function jt(Bt) {
          return $e;
          function $e(ze) {
            const Te = ze !== null && Bt[ze], Pe = ze !== null && Bt.null, cn = [
              ...Array.isArray(Te) ? Te : Te ? [
                Te
              ] : [],
              ...Array.isArray(Pe) ? Pe : Pe ? [
                Pe
              ] : []
            ];
            return St(cn)(ze);
          }
        }
        function St(Bt) {
          return V = Bt, W = 0, Bt.length === 0 ? O : E(Bt[W]);
        }
        function E(Bt) {
          return $e;
          function $e(ze) {
            return z = st(), yt = Bt, Bt.partial || (g.currentConstruct = Bt), Bt.name && g.parser.constructs.disable.null.includes(Bt.name) ? te() : Bt.tokenize.call(K ? Object.assign(Object.create(g), K) : g, b, Mt, te)(ze);
          }
        }
        function Mt(Bt) {
          return I(yt, z), Q;
        }
        function te(Bt) {
          return z.restore(), ++W < V.length ? E(V[W]) : O;
        }
      }
    }
    function ot(I, K) {
      I.resolveAll && !f.includes(I) && f.push(I), I.resolve && rn(g.events, K, g.events.length - K, I.resolve(g.events.slice(K), g)), I.resolveTo && (g.events = I.resolveTo(g.events, g));
    }
    function st() {
      const I = H(), K = g.previous, Tt = g.currentConstruct, P = g.events.length, Q = Array.from(m);
      return {
        from: P,
        restore: O
      };
      function O() {
        c = I, g.previous = K, g.currentConstruct = Tt, g.events.length = P, m = Q, xt();
      }
    }
    function xt() {
      c.line in s && c.column < 2 && (c.column = s[c.line], c.offset += s[c.line] - 1);
    }
  }
  function ex(l, i) {
    const r = i.start._index, c = i.start._bufferIndex, s = i.end._index, f = i.end._bufferIndex;
    let h;
    if (r === s) h = [
      l[r].slice(c, f)
    ];
    else {
      if (h = l.slice(r, s), c > -1) {
        const m = h[0];
        typeof m == "string" ? h[0] = m.slice(c) : h.shift();
      }
      f > 0 && h.push(l[s].slice(0, f));
    }
    return h;
  }
  function nx(l, i) {
    let r = -1;
    const c = [];
    let s;
    for (; ++r < l.length; ) {
      const f = l[r];
      let h;
      if (typeof f == "string") h = f;
      else switch (f) {
        case -5: {
          h = "\r";
          break;
        }
        case -4: {
          h = `
`;
          break;
        }
        case -3: {
          h = `\r
`;
          break;
        }
        case -2: {
          h = i ? " " : "	";
          break;
        }
        case -1: {
          if (!i && s) continue;
          h = " ";
          break;
        }
        default:
          h = String.fromCharCode(f);
      }
      s = f === -2, c.push(h);
    }
    return c.join("");
  }
  function lx(l) {
    const c = {
      constructs: sv([
        Pb,
        ...(l || {}).extensions || []
      ]),
      content: s(vv),
      defined: [],
      document: s(xv),
      flow: s(Lb),
      lazy: {},
      string: s(Yb),
      text: s(Vb)
    };
    return c;
    function s(f) {
      return h;
      function h(m) {
        return tx(c, f, m);
      }
    }
  }
  function ax(l) {
    for (; !Zp(l); ) ;
    return l;
  }
  const Bm = /[\0\t\n\r]/g;
  function ix() {
    let l = 1, i = "", r = true, c;
    return s;
    function s(f, h, m) {
      const b = [];
      let g, y, v, S, x;
      for (f = i + (typeof f == "string" ? f.toString() : new TextDecoder(h || void 0).decode(f)), v = 0, i = "", r && (f.charCodeAt(0) === 65279 && v++, r = void 0); v < f.length; ) {
        if (Bm.lastIndex = v, g = Bm.exec(f), S = g && g.index !== void 0 ? g.index : f.length, x = f.charCodeAt(S), !g) {
          i = f.slice(v);
          break;
        }
        if (x === 10 && v === S && c) b.push(-3), c = void 0;
        else switch (c && (b.push(-5), c = void 0), v < S && (b.push(f.slice(v, S)), l += S - v), x) {
          case 0: {
            b.push(65533), l++;
            break;
          }
          case 9: {
            for (y = Math.ceil(l / 4) * 4, b.push(-2); l++ < y; ) b.push(-1);
            break;
          }
          case 10: {
            b.push(-4), l = 1;
            break;
          }
          default:
            c = true, l = 1;
        }
        v = S + 1;
      }
      return m && (c && b.push(-5), i && b.push(i), b.push(null)), b;
    }
  }
  const ux = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
  function rx(l) {
    return l.replace(ux, cx);
  }
  function cx(l, i, r) {
    if (i) return i;
    if (r.charCodeAt(0) === 35) {
      const s = r.charCodeAt(1), f = s === 120 || s === 88;
      return Vp(r.slice(f ? 2 : 1), f ? 16 : 10);
    }
    return Po(r) || l;
  }
  const $p = {}.hasOwnProperty;
  function ox(l, i, r) {
    return i && typeof i == "object" && (r = i, i = void 0), sx(r)(ax(lx(r).document().write(ix()(l, i, true))));
  }
  function sx(l) {
    const i = {
      transforms: [],
      canContainEols: [
        "emphasis",
        "fragment",
        "heading",
        "paragraph",
        "strong"
      ],
      enter: {
        autolink: f(Tl),
        autolinkProtocol: st,
        autolinkEmail: st,
        atxHeading: f(El),
        blockQuote: f(Pe),
        characterEscape: st,
        characterReference: st,
        codeFenced: f(cn),
        codeFencedFenceInfo: h,
        codeFencedFenceMeta: h,
        codeIndented: f(cn, h),
        codeText: f(ya, h),
        codeTextData: st,
        data: st,
        codeFlowValue: st,
        definition: f(zi),
        definitionDestinationString: h,
        definitionLabelString: h,
        definitionTitleString: h,
        emphasis: f(on),
        hardBreakEscape: f(zl),
        hardBreakTrailing: f(zl),
        htmlFlow: f(Ti, h),
        htmlFlowData: st,
        htmlText: f(Ti, h),
        htmlTextData: st,
        image: f(Ai),
        label: h,
        link: f(Tl),
        listItem: f(va),
        listItemValue: S,
        listOrdered: f(Al, v),
        listUnordered: f(Al),
        paragraph: f(Pu),
        reference: E,
        referenceString: h,
        resourceDestinationString: h,
        resourceTitleString: h,
        setextHeading: f(El),
        strong: f(tr),
        thematicBreak: f(er)
      },
      exit: {
        atxHeading: b(),
        atxHeadingSequence: bt,
        autolink: b(),
        autolinkEmail: Te,
        autolinkProtocol: ze,
        blockQuote: b(),
        characterEscapeValue: xt,
        characterReferenceMarkerHexadecimal: te,
        characterReferenceMarkerNumeric: te,
        characterReferenceValue: Bt,
        characterReference: $e,
        codeFenced: b(G),
        codeFencedFence: q,
        codeFencedFenceInfo: x,
        codeFencedFenceMeta: H,
        codeFlowValue: xt,
        codeIndented: b(L),
        codeText: b(Q),
        codeTextData: xt,
        data: xt,
        definition: b(),
        definitionDestinationString: mt,
        definitionLabelString: tt,
        definitionTitleString: Z,
        emphasis: b(),
        hardBreakEscape: b(K),
        hardBreakTrailing: b(K),
        htmlFlow: b(Tt),
        htmlFlowData: xt,
        htmlText: b(P),
        htmlTextData: xt,
        image: b(V),
        label: yt,
        labelText: W,
        lineEnding: I,
        link: b(O),
        listItem: b(),
        listOrdered: b(),
        listUnordered: b(),
        paragraph: b(),
        referenceString: Mt,
        resourceDestinationString: z,
        resourceTitleString: jt,
        resource: St,
        setextHeading: b(ot),
        setextHeadingLineSequence: ut,
        setextHeadingText: B,
        strong: b(),
        thematicBreak: b()
      }
    };
    Pp(i, (l || {}).mdastExtensions || []);
    const r = {};
    return c;
    function c(j) {
      let X = {
        type: "root",
        children: []
      };
      const nt = {
        stack: [
          X
        ],
        tokenStack: [],
        config: i,
        enter: m,
        exit: g,
        buffer: h,
        resume: y,
        data: r
      }, ft = [];
      let Nt = -1;
      for (; ++Nt < j.length; ) if (j[Nt][1].type === "listOrdered" || j[Nt][1].type === "listUnordered") if (j[Nt][0] === "enter") ft.push(Nt);
      else {
        const Ae = ft.pop();
        Nt = s(j, Ae, Nt);
      }
      for (Nt = -1; ++Nt < j.length; ) {
        const Ae = i[j[Nt][0]];
        $p.call(Ae, j[Nt][1].type) && Ae[j[Nt][1].type].call(Object.assign({
          sliceSerialize: j[Nt][2].sliceSerialize
        }, nt), j[Nt][1]);
      }
      if (nt.tokenStack.length > 0) {
        const Ae = nt.tokenStack[nt.tokenStack.length - 1];
        (Ae[1] || Lm).call(nt, void 0, Ae[0]);
      }
      for (X.position = {
        start: tl(j.length > 0 ? j[0][1].start : {
          line: 1,
          column: 1,
          offset: 0
        }),
        end: tl(j.length > 0 ? j[j.length - 2][1].end : {
          line: 1,
          column: 1,
          offset: 0
        })
      }, Nt = -1; ++Nt < i.transforms.length; ) X = i.transforms[Nt](X) || X;
      return X;
    }
    function s(j, X, nt) {
      let ft = X - 1, Nt = -1, Ae = false, sn, se, $t, he;
      for (; ++ft <= nt; ) {
        const Ut = j[ft];
        switch (Ut[1].type) {
          case "listUnordered":
          case "listOrdered":
          case "blockQuote": {
            Ut[0] === "enter" ? Nt++ : Nt--, he = void 0;
            break;
          }
          case "lineEndingBlank": {
            Ut[0] === "enter" && (sn && !he && !Nt && !$t && ($t = ft), he = void 0);
            break;
          }
          case "linePrefix":
          case "listItemValue":
          case "listItemMarker":
          case "listItemPrefix":
          case "listItemPrefixWhitespace":
            break;
          default:
            he = void 0;
        }
        if (!Nt && Ut[0] === "enter" && Ut[1].type === "listItemPrefix" || Nt === -1 && Ut[0] === "exit" && (Ut[1].type === "listUnordered" || Ut[1].type === "listOrdered")) {
          if (sn) {
            let Dn = ft;
            for (se = void 0; Dn--; ) {
              const Je = j[Dn];
              if (Je[1].type === "lineEnding" || Je[1].type === "lineEndingBlank") {
                if (Je[0] === "exit") continue;
                se && (j[se][1].type = "lineEndingBlank", Ae = true), Je[1].type = "lineEnding", se = Dn;
              } else if (!(Je[1].type === "linePrefix" || Je[1].type === "blockQuotePrefix" || Je[1].type === "blockQuotePrefixWhitespace" || Je[1].type === "blockQuoteMarker" || Je[1].type === "listItemIndent")) break;
            }
            $t && (!se || $t < se) && (sn._spread = true), sn.end = Object.assign({}, se ? j[se][1].start : Ut[1].end), j.splice(se || ft, 0, [
              "exit",
              sn,
              Ut[2]
            ]), ft++, nt++;
          }
          if (Ut[1].type === "listItemPrefix") {
            const Dn = {
              type: "listItem",
              _spread: false,
              start: Object.assign({}, Ut[1].start),
              end: void 0
            };
            sn = Dn, j.splice(ft, 0, [
              "enter",
              Dn,
              Ut[2]
            ]), ft++, nt++, $t = void 0, he = true;
          }
        }
      }
      return j[X][1]._spread = Ae, nt;
    }
    function f(j, X) {
      return nt;
      function nt(ft) {
        m.call(this, j(ft), ft), X && X.call(this, ft);
      }
    }
    function h() {
      this.stack.push({
        type: "fragment",
        children: []
      });
    }
    function m(j, X, nt) {
      this.stack[this.stack.length - 1].children.push(j), this.stack.push(j), this.tokenStack.push([
        X,
        nt || void 0
      ]), j.position = {
        start: tl(X.start),
        end: void 0
      };
    }
    function b(j) {
      return X;
      function X(nt) {
        j && j.call(this, nt), g.call(this, nt);
      }
    }
    function g(j, X) {
      const nt = this.stack.pop(), ft = this.tokenStack.pop();
      if (ft) ft[0].type !== j.type && (X ? X.call(this, j, ft[0]) : (ft[1] || Lm).call(this, j, ft[0]));
      else throw new Error("Cannot close `" + j.type + "` (" + gi({
        start: j.start,
        end: j.end
      }) + "): it\u2019s not open");
      nt.position.end = tl(j.end);
    }
    function y() {
      return cv(this.stack.pop());
    }
    function v() {
      this.data.expectingFirstListItemValue = true;
    }
    function S(j) {
      if (this.data.expectingFirstListItemValue) {
        const X = this.stack[this.stack.length - 2];
        X.start = Number.parseInt(this.sliceSerialize(j), 10), this.data.expectingFirstListItemValue = void 0;
      }
    }
    function x() {
      const j = this.resume(), X = this.stack[this.stack.length - 1];
      X.lang = j;
    }
    function H() {
      const j = this.resume(), X = this.stack[this.stack.length - 1];
      X.meta = j;
    }
    function q() {
      this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = true);
    }
    function G() {
      const j = this.resume(), X = this.stack[this.stack.length - 1];
      X.value = j.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
    }
    function L() {
      const j = this.resume(), X = this.stack[this.stack.length - 1];
      X.value = j.replace(/(\r?\n|\r)$/g, "");
    }
    function tt(j) {
      const X = this.resume(), nt = this.stack[this.stack.length - 1];
      nt.label = X, nt.identifier = da(this.sliceSerialize(j)).toLowerCase();
    }
    function Z() {
      const j = this.resume(), X = this.stack[this.stack.length - 1];
      X.title = j;
    }
    function mt() {
      const j = this.resume(), X = this.stack[this.stack.length - 1];
      X.url = j;
    }
    function bt(j) {
      const X = this.stack[this.stack.length - 1];
      if (!X.depth) {
        const nt = this.sliceSerialize(j).length;
        X.depth = nt;
      }
    }
    function B() {
      this.data.setextHeadingSlurpLineEnding = true;
    }
    function ut(j) {
      const X = this.stack[this.stack.length - 1];
      X.depth = this.sliceSerialize(j).codePointAt(0) === 61 ? 1 : 2;
    }
    function ot() {
      this.data.setextHeadingSlurpLineEnding = void 0;
    }
    function st(j) {
      const nt = this.stack[this.stack.length - 1].children;
      let ft = nt[nt.length - 1];
      (!ft || ft.type !== "text") && (ft = oe(), ft.position = {
        start: tl(j.start),
        end: void 0
      }, nt.push(ft)), this.stack.push(ft);
    }
    function xt(j) {
      const X = this.stack.pop();
      X.value += this.sliceSerialize(j), X.position.end = tl(j.end);
    }
    function I(j) {
      const X = this.stack[this.stack.length - 1];
      if (this.data.atHardBreak) {
        const nt = X.children[X.children.length - 1];
        nt.position.end = tl(j.end), this.data.atHardBreak = void 0;
        return;
      }
      !this.data.setextHeadingSlurpLineEnding && i.canContainEols.includes(X.type) && (st.call(this, j), xt.call(this, j));
    }
    function K() {
      this.data.atHardBreak = true;
    }
    function Tt() {
      const j = this.resume(), X = this.stack[this.stack.length - 1];
      X.value = j;
    }
    function P() {
      const j = this.resume(), X = this.stack[this.stack.length - 1];
      X.value = j;
    }
    function Q() {
      const j = this.resume(), X = this.stack[this.stack.length - 1];
      X.value = j;
    }
    function O() {
      const j = this.stack[this.stack.length - 1];
      if (this.data.inReference) {
        const X = this.data.referenceType || "shortcut";
        j.type += "Reference", j.referenceType = X, delete j.url, delete j.title;
      } else delete j.identifier, delete j.label;
      this.data.referenceType = void 0;
    }
    function V() {
      const j = this.stack[this.stack.length - 1];
      if (this.data.inReference) {
        const X = this.data.referenceType || "shortcut";
        j.type += "Reference", j.referenceType = X, delete j.url, delete j.title;
      } else delete j.identifier, delete j.label;
      this.data.referenceType = void 0;
    }
    function W(j) {
      const X = this.sliceSerialize(j), nt = this.stack[this.stack.length - 2];
      nt.label = rx(X), nt.identifier = da(X).toLowerCase();
    }
    function yt() {
      const j = this.stack[this.stack.length - 1], X = this.resume(), nt = this.stack[this.stack.length - 1];
      if (this.data.inReference = true, nt.type === "link") {
        const ft = j.children;
        nt.children = ft;
      } else nt.alt = X;
    }
    function z() {
      const j = this.resume(), X = this.stack[this.stack.length - 1];
      X.url = j;
    }
    function jt() {
      const j = this.resume(), X = this.stack[this.stack.length - 1];
      X.title = j;
    }
    function St() {
      this.data.inReference = void 0;
    }
    function E() {
      this.data.referenceType = "collapsed";
    }
    function Mt(j) {
      const X = this.resume(), nt = this.stack[this.stack.length - 1];
      nt.label = X, nt.identifier = da(this.sliceSerialize(j)).toLowerCase(), this.data.referenceType = "full";
    }
    function te(j) {
      this.data.characterReferenceType = j.type;
    }
    function Bt(j) {
      const X = this.sliceSerialize(j), nt = this.data.characterReferenceType;
      let ft;
      nt ? (ft = Vp(X, nt === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : ft = Po(X);
      const Nt = this.stack[this.stack.length - 1];
      Nt.value += ft;
    }
    function $e(j) {
      const X = this.stack.pop();
      X.position.end = tl(j.end);
    }
    function ze(j) {
      xt.call(this, j);
      const X = this.stack[this.stack.length - 1];
      X.url = this.sliceSerialize(j);
    }
    function Te(j) {
      xt.call(this, j);
      const X = this.stack[this.stack.length - 1];
      X.url = "mailto:" + this.sliceSerialize(j);
    }
    function Pe() {
      return {
        type: "blockquote",
        children: []
      };
    }
    function cn() {
      return {
        type: "code",
        lang: null,
        meta: null,
        value: ""
      };
    }
    function ya() {
      return {
        type: "inlineCode",
        value: ""
      };
    }
    function zi() {
      return {
        type: "definition",
        identifier: "",
        label: null,
        title: null,
        url: ""
      };
    }
    function on() {
      return {
        type: "emphasis",
        children: []
      };
    }
    function El() {
      return {
        type: "heading",
        depth: 0,
        children: []
      };
    }
    function zl() {
      return {
        type: "break"
      };
    }
    function Ti() {
      return {
        type: "html",
        value: ""
      };
    }
    function Ai() {
      return {
        type: "image",
        title: null,
        url: "",
        alt: null
      };
    }
    function Tl() {
      return {
        type: "link",
        title: null,
        url: "",
        children: []
      };
    }
    function Al(j) {
      return {
        type: "list",
        ordered: j.type === "listOrdered",
        start: null,
        spread: j._spread,
        children: []
      };
    }
    function va(j) {
      return {
        type: "listItem",
        spread: j._spread,
        checked: null,
        children: []
      };
    }
    function Pu() {
      return {
        type: "paragraph",
        children: []
      };
    }
    function tr() {
      return {
        type: "strong",
        children: []
      };
    }
    function oe() {
      return {
        type: "text",
        value: ""
      };
    }
    function er() {
      return {
        type: "thematicBreak"
      };
    }
  }
  function tl(l) {
    return {
      line: l.line,
      column: l.column,
      offset: l.offset
    };
  }
  function Pp(l, i) {
    let r = -1;
    for (; ++r < i.length; ) {
      const c = i[r];
      Array.isArray(c) ? Pp(l, c) : fx(l, c);
    }
  }
  function fx(l, i) {
    let r;
    for (r in i) if ($p.call(i, r)) switch (r) {
      case "canContainEols": {
        const c = i[r];
        c && l[r].push(...c);
        break;
      }
      case "transforms": {
        const c = i[r];
        c && l[r].push(...c);
        break;
      }
      case "enter":
      case "exit": {
        const c = i[r];
        c && Object.assign(l[r], c);
        break;
      }
    }
  }
  function Lm(l, i) {
    throw l ? new Error("Cannot close `" + l.type + "` (" + gi({
      start: l.start,
      end: l.end
    }) + "): a different token (`" + i.type + "`, " + gi({
      start: i.start,
      end: i.end
    }) + ") is open") : new Error("Cannot close document, a token (`" + i.type + "`, " + gi({
      start: i.start,
      end: i.end
    }) + ") is still open");
  }
  function hx(l) {
    const i = this;
    i.parser = r;
    function r(c) {
      return ox(c, {
        ...i.data("settings"),
        ...l,
        extensions: i.data("micromarkExtensions") || [],
        mdastExtensions: i.data("fromMarkdownExtensions") || []
      });
    }
  }
  function dx(l, i) {
    const r = {
      type: "element",
      tagName: "blockquote",
      properties: {},
      children: l.wrap(l.all(i), true)
    };
    return l.patch(i, r), l.applyData(i, r);
  }
  function mx(l, i) {
    const r = {
      type: "element",
      tagName: "br",
      properties: {},
      children: []
    };
    return l.patch(i, r), [
      l.applyData(i, r),
      {
        type: "text",
        value: `
`
      }
    ];
  }
  function px(l, i) {
    const r = i.value ? i.value + `
` : "", c = {}, s = i.lang ? i.lang.split(/\s+/) : [];
    s.length > 0 && (c.className = [
      "language-" + s[0]
    ]);
    let f = {
      type: "element",
      tagName: "code",
      properties: c,
      children: [
        {
          type: "text",
          value: r
        }
      ]
    };
    return i.meta && (f.data = {
      meta: i.meta
    }), l.patch(i, f), f = l.applyData(i, f), f = {
      type: "element",
      tagName: "pre",
      properties: {},
      children: [
        f
      ]
    }, l.patch(i, f), f;
  }
  function gx(l, i) {
    const r = {
      type: "element",
      tagName: "del",
      properties: {},
      children: l.all(i)
    };
    return l.patch(i, r), l.applyData(i, r);
  }
  function yx(l, i) {
    const r = {
      type: "element",
      tagName: "em",
      properties: {},
      children: l.all(i)
    };
    return l.patch(i, r), l.applyData(i, r);
  }
  function vx(l, i) {
    const r = typeof l.options.clobberPrefix == "string" ? l.options.clobberPrefix : "user-content-", c = String(i.identifier).toUpperCase(), s = ga(c.toLowerCase()), f = l.footnoteOrder.indexOf(c);
    let h, m = l.footnoteCounts.get(c);
    m === void 0 ? (m = 0, l.footnoteOrder.push(c), h = l.footnoteOrder.length) : h = f + 1, m += 1, l.footnoteCounts.set(c, m);
    const b = {
      type: "element",
      tagName: "a",
      properties: {
        href: "#" + r + "fn-" + s,
        id: r + "fnref-" + s + (m > 1 ? "-" + m : ""),
        dataFootnoteRef: true,
        ariaDescribedBy: [
          "footnote-label"
        ]
      },
      children: [
        {
          type: "text",
          value: String(h)
        }
      ]
    };
    l.patch(i, b);
    const g = {
      type: "element",
      tagName: "sup",
      properties: {},
      children: [
        b
      ]
    };
    return l.patch(i, g), l.applyData(i, g);
  }
  function bx(l, i) {
    const r = {
      type: "element",
      tagName: "h" + i.depth,
      properties: {},
      children: l.all(i)
    };
    return l.patch(i, r), l.applyData(i, r);
  }
  function xx(l, i) {
    if (l.options.allowDangerousHtml) {
      const r = {
        type: "raw",
        value: i.value
      };
      return l.patch(i, r), l.applyData(i, r);
    }
  }
  function tg(l, i) {
    const r = i.referenceType;
    let c = "]";
    if (r === "collapsed" ? c += "[]" : r === "full" && (c += "[" + (i.label || i.identifier) + "]"), i.type === "imageReference") return [
      {
        type: "text",
        value: "![" + i.alt + c
      }
    ];
    const s = l.all(i), f = s[0];
    f && f.type === "text" ? f.value = "[" + f.value : s.unshift({
      type: "text",
      value: "["
    });
    const h = s[s.length - 1];
    return h && h.type === "text" ? h.value += c : s.push({
      type: "text",
      value: c
    }), s;
  }
  function Sx(l, i) {
    const r = String(i.identifier).toUpperCase(), c = l.definitionById.get(r);
    if (!c) return tg(l, i);
    const s = {
      src: ga(c.url || ""),
      alt: i.alt
    };
    c.title !== null && c.title !== void 0 && (s.title = c.title);
    const f = {
      type: "element",
      tagName: "img",
      properties: s,
      children: []
    };
    return l.patch(i, f), l.applyData(i, f);
  }
  function Ex(l, i) {
    const r = {
      src: ga(i.url)
    };
    i.alt !== null && i.alt !== void 0 && (r.alt = i.alt), i.title !== null && i.title !== void 0 && (r.title = i.title);
    const c = {
      type: "element",
      tagName: "img",
      properties: r,
      children: []
    };
    return l.patch(i, c), l.applyData(i, c);
  }
  function zx(l, i) {
    const r = {
      type: "text",
      value: i.value.replace(/\r?\n|\r/g, " ")
    };
    l.patch(i, r);
    const c = {
      type: "element",
      tagName: "code",
      properties: {},
      children: [
        r
      ]
    };
    return l.patch(i, c), l.applyData(i, c);
  }
  function Tx(l, i) {
    const r = String(i.identifier).toUpperCase(), c = l.definitionById.get(r);
    if (!c) return tg(l, i);
    const s = {
      href: ga(c.url || "")
    };
    c.title !== null && c.title !== void 0 && (s.title = c.title);
    const f = {
      type: "element",
      tagName: "a",
      properties: s,
      children: l.all(i)
    };
    return l.patch(i, f), l.applyData(i, f);
  }
  function Ax(l, i) {
    const r = {
      href: ga(i.url)
    };
    i.title !== null && i.title !== void 0 && (r.title = i.title);
    const c = {
      type: "element",
      tagName: "a",
      properties: r,
      children: l.all(i)
    };
    return l.patch(i, c), l.applyData(i, c);
  }
  function Cx(l, i, r) {
    const c = l.all(i), s = r ? Mx(r) : eg(i), f = {}, h = [];
    if (typeof i.checked == "boolean") {
      const y = c[0];
      let v;
      y && y.type === "element" && y.tagName === "p" ? v = y : (v = {
        type: "element",
        tagName: "p",
        properties: {},
        children: []
      }, c.unshift(v)), v.children.length > 0 && v.children.unshift({
        type: "text",
        value: " "
      }), v.children.unshift({
        type: "element",
        tagName: "input",
        properties: {
          type: "checkbox",
          checked: i.checked,
          disabled: true
        },
        children: []
      }), f.className = [
        "task-list-item"
      ];
    }
    let m = -1;
    for (; ++m < c.length; ) {
      const y = c[m];
      (s || m !== 0 || y.type !== "element" || y.tagName !== "p") && h.push({
        type: "text",
        value: `
`
      }), y.type === "element" && y.tagName === "p" && !s ? h.push(...y.children) : h.push(y);
    }
    const b = c[c.length - 1];
    b && (s || b.type !== "element" || b.tagName !== "p") && h.push({
      type: "text",
      value: `
`
    });
    const g = {
      type: "element",
      tagName: "li",
      properties: f,
      children: h
    };
    return l.patch(i, g), l.applyData(i, g);
  }
  function Mx(l) {
    let i = false;
    if (l.type === "list") {
      i = l.spread || false;
      const r = l.children;
      let c = -1;
      for (; !i && ++c < r.length; ) i = eg(r[c]);
    }
    return i;
  }
  function eg(l) {
    const i = l.spread;
    return i ?? l.children.length > 1;
  }
  function Nx(l, i) {
    const r = {}, c = l.all(i);
    let s = -1;
    for (typeof i.start == "number" && i.start !== 1 && (r.start = i.start); ++s < c.length; ) {
      const h = c[s];
      if (h.type === "element" && h.tagName === "li" && h.properties && Array.isArray(h.properties.className) && h.properties.className.includes("task-list-item")) {
        r.className = [
          "contains-task-list"
        ];
        break;
      }
    }
    const f = {
      type: "element",
      tagName: i.ordered ? "ol" : "ul",
      properties: r,
      children: l.wrap(c, true)
    };
    return l.patch(i, f), l.applyData(i, f);
  }
  function Dx(l, i) {
    const r = {
      type: "element",
      tagName: "p",
      properties: {},
      children: l.all(i)
    };
    return l.patch(i, r), l.applyData(i, r);
  }
  function Ox(l, i) {
    const r = {
      type: "root",
      children: l.wrap(l.all(i))
    };
    return l.patch(i, r), l.applyData(i, r);
  }
  function wx(l, i) {
    const r = {
      type: "element",
      tagName: "strong",
      properties: {},
      children: l.all(i)
    };
    return l.patch(i, r), l.applyData(i, r);
  }
  function kx(l, i) {
    const r = l.all(i), c = r.shift(), s = [];
    if (c) {
      const h = {
        type: "element",
        tagName: "thead",
        properties: {},
        children: l.wrap([
          c
        ], true)
      };
      l.patch(i.children[0], h), s.push(h);
    }
    if (r.length > 0) {
      const h = {
        type: "element",
        tagName: "tbody",
        properties: {},
        children: l.wrap(r, true)
      }, m = Fo(i.children[1]), b = Up(i.children[i.children.length - 1]);
      m && b && (h.position = {
        start: m,
        end: b
      }), s.push(h);
    }
    const f = {
      type: "element",
      tagName: "table",
      properties: {},
      children: l.wrap(s, true)
    };
    return l.patch(i, f), l.applyData(i, f);
  }
  function _x(l, i, r) {
    const c = r ? r.children : void 0, f = (c ? c.indexOf(i) : 1) === 0 ? "th" : "td", h = r && r.type === "table" ? r.align : void 0, m = h ? h.length : i.children.length;
    let b = -1;
    const g = [];
    for (; ++b < m; ) {
      const v = i.children[b], S = {}, x = h ? h[b] : void 0;
      x && (S.align = x);
      let H = {
        type: "element",
        tagName: f,
        properties: S,
        children: []
      };
      v && (H.children = l.all(v), l.patch(v, H), H = l.applyData(v, H)), g.push(H);
    }
    const y = {
      type: "element",
      tagName: "tr",
      properties: {},
      children: l.wrap(g, true)
    };
    return l.patch(i, y), l.applyData(i, y);
  }
  function jx(l, i) {
    const r = {
      type: "element",
      tagName: "td",
      properties: {},
      children: l.all(i)
    };
    return l.patch(i, r), l.applyData(i, r);
  }
  const Hm = 9, qm = 32;
  function Ux(l) {
    const i = String(l), r = /\r?\n|\r/g;
    let c = r.exec(i), s = 0;
    const f = [];
    for (; c; ) f.push(Ym(i.slice(s, c.index), s > 0, true), c[0]), s = c.index + c[0].length, c = r.exec(i);
    return f.push(Ym(i.slice(s), s > 0, false)), f.join("");
  }
  function Ym(l, i, r) {
    let c = 0, s = l.length;
    if (i) {
      let f = l.codePointAt(c);
      for (; f === Hm || f === qm; ) c++, f = l.codePointAt(c);
    }
    if (r) {
      let f = l.codePointAt(s - 1);
      for (; f === Hm || f === qm; ) s--, f = l.codePointAt(s - 1);
    }
    return s > c ? l.slice(c, s) : "";
  }
  function Rx(l, i) {
    const r = {
      type: "text",
      value: Ux(String(i.value))
    };
    return l.patch(i, r), l.applyData(i, r);
  }
  function Bx(l, i) {
    const r = {
      type: "element",
      tagName: "hr",
      properties: {},
      children: []
    };
    return l.patch(i, r), l.applyData(i, r);
  }
  const Lx = {
    blockquote: dx,
    break: mx,
    code: px,
    delete: gx,
    emphasis: yx,
    footnoteReference: vx,
    heading: bx,
    html: xx,
    imageReference: Sx,
    image: Ex,
    inlineCode: zx,
    linkReference: Tx,
    link: Ax,
    listItem: Cx,
    list: Nx,
    paragraph: Dx,
    root: Ox,
    strong: wx,
    table: kx,
    tableCell: jx,
    tableRow: _x,
    text: Rx,
    thematicBreak: Bx,
    toml: Vu,
    yaml: Vu,
    definition: Vu,
    footnoteDefinition: Vu
  };
  function Vu() {
  }
  const ng = -1, Wu = 0, vi = 1, Ju = 2, ns = 3, ls = 4, as = 5, is = 6, lg = 7, ag = 8, Vm = typeof self == "object" ? self : globalThis, Hx = (l, i) => {
    const r = (s, f) => (l.set(f, s), s), c = (s) => {
      if (l.has(s)) return l.get(s);
      const [f, h] = i[s];
      switch (f) {
        case Wu:
        case ng:
          return r(h, s);
        case vi: {
          const m = r([], s);
          for (const b of h) m.push(c(b));
          return m;
        }
        case Ju: {
          const m = r({}, s);
          for (const [b, g] of h) m[c(b)] = c(g);
          return m;
        }
        case ns:
          return r(new Date(h), s);
        case ls: {
          const { source: m, flags: b } = h;
          return r(new RegExp(m, b), s);
        }
        case as: {
          const m = r(/* @__PURE__ */ new Map(), s);
          for (const [b, g] of h) m.set(c(b), c(g));
          return m;
        }
        case is: {
          const m = r(/* @__PURE__ */ new Set(), s);
          for (const b of h) m.add(c(b));
          return m;
        }
        case lg: {
          const { name: m, message: b } = h;
          return r(new Vm[m](b), s);
        }
        case ag:
          return r(BigInt(h), s);
        case "BigInt":
          return r(Object(BigInt(h)), s);
        case "ArrayBuffer":
          return r(new Uint8Array(h).buffer, h);
        case "DataView": {
          const { buffer: m } = new Uint8Array(h);
          return r(new DataView(m), h);
        }
      }
      return r(new Vm[f](h), s);
    };
    return c;
  }, Xm = (l) => Hx(/* @__PURE__ */ new Map(), l)(0), fa = "", { toString: qx } = {}, { keys: Yx } = Object, mi = (l) => {
    const i = typeof l;
    if (i !== "object" || !l) return [
      Wu,
      i
    ];
    const r = qx.call(l).slice(8, -1);
    switch (r) {
      case "Array":
        return [
          vi,
          fa
        ];
      case "Object":
        return [
          Ju,
          fa
        ];
      case "Date":
        return [
          ns,
          fa
        ];
      case "RegExp":
        return [
          ls,
          fa
        ];
      case "Map":
        return [
          as,
          fa
        ];
      case "Set":
        return [
          is,
          fa
        ];
      case "DataView":
        return [
          vi,
          r
        ];
    }
    return r.includes("Array") ? [
      vi,
      r
    ] : r.includes("Error") ? [
      lg,
      r
    ] : [
      Ju,
      r
    ];
  }, Xu = ([l, i]) => l === Wu && (i === "function" || i === "symbol"), Vx = (l, i, r, c) => {
    const s = (h, m) => {
      const b = c.push(h) - 1;
      return r.set(m, b), b;
    }, f = (h) => {
      if (r.has(h)) return r.get(h);
      let [m, b] = mi(h);
      switch (m) {
        case Wu: {
          let y = h;
          switch (b) {
            case "bigint":
              m = ag, y = h.toString();
              break;
            case "function":
            case "symbol":
              if (l) throw new TypeError("unable to serialize " + b);
              y = null;
              break;
            case "undefined":
              return s([
                ng
              ], h);
          }
          return s([
            m,
            y
          ], h);
        }
        case vi: {
          if (b) {
            let S = h;
            return b === "DataView" ? S = new Uint8Array(h.buffer) : b === "ArrayBuffer" && (S = new Uint8Array(h)), s([
              b,
              [
                ...S
              ]
            ], h);
          }
          const y = [], v = s([
            m,
            y
          ], h);
          for (const S of h) y.push(f(S));
          return v;
        }
        case Ju: {
          if (b) switch (b) {
            case "BigInt":
              return s([
                b,
                h.toString()
              ], h);
            case "Boolean":
            case "Number":
            case "String":
              return s([
                b,
                h.valueOf()
              ], h);
          }
          if (i && "toJSON" in h) return f(h.toJSON());
          const y = [], v = s([
            m,
            y
          ], h);
          for (const S of Yx(h)) (l || !Xu(mi(h[S]))) && y.push([
            f(S),
            f(h[S])
          ]);
          return v;
        }
        case ns:
          return s([
            m,
            h.toISOString()
          ], h);
        case ls: {
          const { source: y, flags: v } = h;
          return s([
            m,
            {
              source: y,
              flags: v
            }
          ], h);
        }
        case as: {
          const y = [], v = s([
            m,
            y
          ], h);
          for (const [S, x] of h) (l || !(Xu(mi(S)) || Xu(mi(x)))) && y.push([
            f(S),
            f(x)
          ]);
          return v;
        }
        case is: {
          const y = [], v = s([
            m,
            y
          ], h);
          for (const S of h) (l || !Xu(mi(S))) && y.push(f(S));
          return v;
        }
      }
      const { message: g } = h;
      return s([
        m,
        {
          name: b,
          message: g
        }
      ], h);
    };
    return f;
  }, Qm = (l, { json: i, lossy: r } = {}) => {
    const c = [];
    return Vx(!(i || r), !!i, /* @__PURE__ */ new Map(), c)(l), c;
  }, Fu = typeof structuredClone == "function" ? (l, i) => i && ("json" in i || "lossy" in i) ? Xm(Qm(l, i)) : structuredClone(l) : (l, i) => Xm(Qm(l, i));
  function Xx(l, i) {
    const r = [
      {
        type: "text",
        value: "\u21A9"
      }
    ];
    return i > 1 && r.push({
      type: "element",
      tagName: "sup",
      properties: {},
      children: [
        {
          type: "text",
          value: String(i)
        }
      ]
    }), r;
  }
  function Qx(l, i) {
    return "Back to reference " + (l + 1) + (i > 1 ? "-" + i : "");
  }
  function Gx(l) {
    const i = typeof l.options.clobberPrefix == "string" ? l.options.clobberPrefix : "user-content-", r = l.options.footnoteBackContent || Xx, c = l.options.footnoteBackLabel || Qx, s = l.options.footnoteLabel || "Footnotes", f = l.options.footnoteLabelTagName || "h2", h = l.options.footnoteLabelProperties || {
      className: [
        "sr-only"
      ]
    }, m = [];
    let b = -1;
    for (; ++b < l.footnoteOrder.length; ) {
      const g = l.footnoteById.get(l.footnoteOrder[b]);
      if (!g) continue;
      const y = l.all(g), v = String(g.identifier).toUpperCase(), S = ga(v.toLowerCase());
      let x = 0;
      const H = [], q = l.footnoteCounts.get(v);
      for (; q !== void 0 && ++x <= q; ) {
        H.length > 0 && H.push({
          type: "text",
          value: " "
        });
        let tt = typeof r == "string" ? r : r(b, x);
        typeof tt == "string" && (tt = {
          type: "text",
          value: tt
        }), H.push({
          type: "element",
          tagName: "a",
          properties: {
            href: "#" + i + "fnref-" + S + (x > 1 ? "-" + x : ""),
            dataFootnoteBackref: "",
            ariaLabel: typeof c == "string" ? c : c(b, x),
            className: [
              "data-footnote-backref"
            ]
          },
          children: Array.isArray(tt) ? tt : [
            tt
          ]
        });
      }
      const G = y[y.length - 1];
      if (G && G.type === "element" && G.tagName === "p") {
        const tt = G.children[G.children.length - 1];
        tt && tt.type === "text" ? tt.value += " " : G.children.push({
          type: "text",
          value: " "
        }), G.children.push(...H);
      } else y.push(...H);
      const L = {
        type: "element",
        tagName: "li",
        properties: {
          id: i + "fn-" + S
        },
        children: l.wrap(y, true)
      };
      l.patch(g, L), m.push(L);
    }
    if (m.length !== 0) return {
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
          tagName: f,
          properties: {
            ...Fu(h),
            id: "footnote-label"
          },
          children: [
            {
              type: "text",
              value: s
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
          children: l.wrap(m, true)
        },
        {
          type: "text",
          value: `
`
        }
      ]
    };
  }
  const ig = (function(l) {
    if (l == null) return Fx;
    if (typeof l == "function") return $u(l);
    if (typeof l == "object") return Array.isArray(l) ? Zx(l) : Kx(l);
    if (typeof l == "string") return Jx(l);
    throw new Error("Expected function, string, or object as test");
  });
  function Zx(l) {
    const i = [];
    let r = -1;
    for (; ++r < l.length; ) i[r] = ig(l[r]);
    return $u(c);
    function c(...s) {
      let f = -1;
      for (; ++f < i.length; ) if (i[f].apply(this, s)) return true;
      return false;
    }
  }
  function Kx(l) {
    const i = l;
    return $u(r);
    function r(c) {
      const s = c;
      let f;
      for (f in l) if (s[f] !== i[f]) return false;
      return true;
    }
  }
  function Jx(l) {
    return $u(i);
    function i(r) {
      return r && r.type === l;
    }
  }
  function $u(l) {
    return i;
    function i(r, c, s) {
      return !!(Ix(r) && l.call(this, r, typeof c == "number" ? c : void 0, s || void 0));
    }
  }
  function Fx() {
    return true;
  }
  function Ix(l) {
    return l !== null && typeof l == "object" && "type" in l;
  }
  const ug = [], Wx = true, Gm = false, $x = "skip";
  function Px(l, i, r, c) {
    let s;
    typeof i == "function" && typeof r != "function" ? (c = r, r = i) : s = i;
    const f = ig(s), h = c ? -1 : 1;
    m(l, void 0, [])();
    function m(b, g, y) {
      const v = b && typeof b == "object" ? b : {};
      if (typeof v.type == "string") {
        const x = typeof v.tagName == "string" ? v.tagName : typeof v.name == "string" ? v.name : void 0;
        Object.defineProperty(S, "name", {
          value: "node (" + (b.type + (x ? "<" + x + ">" : "")) + ")"
        });
      }
      return S;
      function S() {
        let x = ug, H, q, G;
        if ((!i || f(b, g, y[y.length - 1] || void 0)) && (x = tS(r(b, y)), x[0] === Gm)) return x;
        if ("children" in b && b.children) {
          const L = b;
          if (L.children && x[0] !== $x) for (q = (c ? L.children.length : -1) + h, G = y.concat(L); q > -1 && q < L.children.length; ) {
            const tt = L.children[q];
            if (H = m(tt, q, G)(), H[0] === Gm) return H;
            q = typeof H[1] == "number" ? H[1] : q + h;
          }
        }
        return x;
      }
    }
  }
  function tS(l) {
    return Array.isArray(l) ? l : typeof l == "number" ? [
      Wx,
      l
    ] : l == null ? ug : [
      l
    ];
  }
  function rg(l, i, r, c) {
    let s, f, h;
    typeof i == "function" && typeof r != "function" ? (f = void 0, h = i, s = r) : (f = i, h = r, s = c), Px(l, f, m, s);
    function m(b, g) {
      const y = g[g.length - 1], v = y ? y.children.indexOf(b) : void 0;
      return h(b, v, y);
    }
  }
  const Yo = {}.hasOwnProperty, eS = {};
  function nS(l, i) {
    const r = i || eS, c = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), h = {
      ...Lx,
      ...r.handlers
    }, m = {
      all: g,
      applyData: aS,
      definitionById: c,
      footnoteById: s,
      footnoteCounts: f,
      footnoteOrder: [],
      handlers: h,
      one: b,
      options: r,
      patch: lS,
      wrap: uS
    };
    return rg(l, function(y) {
      if (y.type === "definition" || y.type === "footnoteDefinition") {
        const v = y.type === "definition" ? c : s, S = String(y.identifier).toUpperCase();
        v.has(S) || v.set(S, y);
      }
    }), m;
    function b(y, v) {
      const S = y.type, x = m.handlers[S];
      if (Yo.call(m.handlers, S) && x) return x(m, y, v);
      if (m.options.passThrough && m.options.passThrough.includes(S)) {
        if ("children" in y) {
          const { children: q, ...G } = y, L = Fu(G);
          return L.children = m.all(y), L;
        }
        return Fu(y);
      }
      return (m.options.unknownHandler || iS)(m, y, v);
    }
    function g(y) {
      const v = [];
      if ("children" in y) {
        const S = y.children;
        let x = -1;
        for (; ++x < S.length; ) {
          const H = m.one(S[x], y);
          if (H) {
            if (x && S[x - 1].type === "break" && (!Array.isArray(H) && H.type === "text" && (H.value = Zm(H.value)), !Array.isArray(H) && H.type === "element")) {
              const q = H.children[0];
              q && q.type === "text" && (q.value = Zm(q.value));
            }
            Array.isArray(H) ? v.push(...H) : v.push(H);
          }
        }
      }
      return v;
    }
  }
  function lS(l, i) {
    l.position && (i.position = q0(l));
  }
  function aS(l, i) {
    let r = i;
    if (l && l.data) {
      const c = l.data.hName, s = l.data.hChildren, f = l.data.hProperties;
      if (typeof c == "string") if (r.type === "element") r.tagName = c;
      else {
        const h = "children" in r ? r.children : [
          r
        ];
        r = {
          type: "element",
          tagName: c,
          properties: {},
          children: h
        };
      }
      r.type === "element" && f && Object.assign(r.properties, Fu(f)), "children" in r && r.children && s !== null && s !== void 0 && (r.children = s);
    }
    return r;
  }
  function iS(l, i) {
    const r = i.data || {}, c = "value" in i && !(Yo.call(r, "hProperties") || Yo.call(r, "hChildren")) ? {
      type: "text",
      value: i.value
    } : {
      type: "element",
      tagName: "div",
      properties: {},
      children: l.all(i)
    };
    return l.patch(i, c), l.applyData(i, c);
  }
  function uS(l, i) {
    const r = [];
    let c = -1;
    for (i && r.push({
      type: "text",
      value: `
`
    }); ++c < l.length; ) c && r.push({
      type: "text",
      value: `
`
    }), r.push(l[c]);
    return i && l.length > 0 && r.push({
      type: "text",
      value: `
`
    }), r;
  }
  function Zm(l) {
    let i = 0, r = l.charCodeAt(i);
    for (; r === 9 || r === 32; ) i++, r = l.charCodeAt(i);
    return l.slice(i);
  }
  function Km(l, i) {
    const r = nS(l, i), c = r.one(l, void 0), s = Gx(r), f = Array.isArray(c) ? {
      type: "root",
      children: c
    } : c || {
      type: "root",
      children: []
    };
    return s && f.children.push({
      type: "text",
      value: `
`
    }, s), f;
  }
  function rS(l, i) {
    return l && "run" in l ? async function(r, c) {
      const s = Km(r, {
        file: c,
        ...i
      });
      await l.run(s, c);
    } : function(r, c) {
      return Km(r, {
        file: c,
        ...l || i
      });
    };
  }
  function Jm(l) {
    if (l) throw l;
  }
  var Co, Fm;
  function cS() {
    if (Fm) return Co;
    Fm = 1;
    var l = Object.prototype.hasOwnProperty, i = Object.prototype.toString, r = Object.defineProperty, c = Object.getOwnPropertyDescriptor, s = function(g) {
      return typeof Array.isArray == "function" ? Array.isArray(g) : i.call(g) === "[object Array]";
    }, f = function(g) {
      if (!g || i.call(g) !== "[object Object]") return false;
      var y = l.call(g, "constructor"), v = g.constructor && g.constructor.prototype && l.call(g.constructor.prototype, "isPrototypeOf");
      if (g.constructor && !y && !v) return false;
      var S;
      for (S in g) ;
      return typeof S > "u" || l.call(g, S);
    }, h = function(g, y) {
      r && y.name === "__proto__" ? r(g, y.name, {
        enumerable: true,
        configurable: true,
        value: y.newValue,
        writable: true
      }) : g[y.name] = y.newValue;
    }, m = function(g, y) {
      if (y === "__proto__") if (l.call(g, y)) {
        if (c) return c(g, y).value;
      } else return;
      return g[y];
    };
    return Co = function b() {
      var g, y, v, S, x, H, q = arguments[0], G = 1, L = arguments.length, tt = false;
      for (typeof q == "boolean" && (tt = q, q = arguments[1] || {}, G = 2), (q == null || typeof q != "object" && typeof q != "function") && (q = {}); G < L; ++G) if (g = arguments[G], g != null) for (y in g) v = m(q, y), S = m(g, y), q !== S && (tt && S && (f(S) || (x = s(S))) ? (x ? (x = false, H = v && s(v) ? v : []) : H = v && f(v) ? v : {}, h(q, {
        name: y,
        newValue: b(tt, H, S)
      })) : typeof S < "u" && h(q, {
        name: y,
        newValue: S
      }));
      return q;
    }, Co;
  }
  var oS = cS();
  const Mo = up(oS);
  function Vo(l) {
    if (typeof l != "object" || l === null) return false;
    const i = Object.getPrototypeOf(l);
    return (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) && !(Symbol.toStringTag in l) && !(Symbol.iterator in l);
  }
  function sS() {
    const l = [], i = {
      run: r,
      use: c
    };
    return i;
    function r(...s) {
      let f = -1;
      const h = s.pop();
      if (typeof h != "function") throw new TypeError("Expected function as last argument, not " + h);
      m(null, ...s);
      function m(b, ...g) {
        const y = l[++f];
        let v = -1;
        if (b) {
          h(b);
          return;
        }
        for (; ++v < s.length; ) (g[v] === null || g[v] === void 0) && (g[v] = s[v]);
        s = g, y ? fS(y, m)(...g) : h(null, ...g);
      }
    }
    function c(s) {
      if (typeof s != "function") throw new TypeError("Expected `middelware` to be a function, not " + s);
      return l.push(s), i;
    }
  }
  function fS(l, i) {
    let r;
    return c;
    function c(...h) {
      const m = l.length > h.length;
      let b;
      m && h.push(s);
      try {
        b = l.apply(this, h);
      } catch (g) {
        const y = g;
        if (m && r) throw y;
        return s(y);
      }
      m || (b && b.then && typeof b.then == "function" ? b.then(f, s) : b instanceof Error ? s(b) : f(b));
    }
    function s(h, ...m) {
      r || (r = true, i(h, ...m));
    }
    function f(h) {
      s(null, h);
    }
  }
  const an = {
    basename: hS,
    dirname: dS,
    extname: mS,
    join: pS,
    sep: "/"
  };
  function hS(l, i) {
    if (i !== void 0 && typeof i != "string") throw new TypeError('"ext" argument must be a string');
    Ei(l);
    let r = 0, c = -1, s = l.length, f;
    if (i === void 0 || i.length === 0 || i.length > l.length) {
      for (; s--; ) if (l.codePointAt(s) === 47) {
        if (f) {
          r = s + 1;
          break;
        }
      } else c < 0 && (f = true, c = s + 1);
      return c < 0 ? "" : l.slice(r, c);
    }
    if (i === l) return "";
    let h = -1, m = i.length - 1;
    for (; s--; ) if (l.codePointAt(s) === 47) {
      if (f) {
        r = s + 1;
        break;
      }
    } else h < 0 && (f = true, h = s + 1), m > -1 && (l.codePointAt(s) === i.codePointAt(m--) ? m < 0 && (c = s) : (m = -1, c = h));
    return r === c ? c = h : c < 0 && (c = l.length), l.slice(r, c);
  }
  function dS(l) {
    if (Ei(l), l.length === 0) return ".";
    let i = -1, r = l.length, c;
    for (; --r; ) if (l.codePointAt(r) === 47) {
      if (c) {
        i = r;
        break;
      }
    } else c || (c = true);
    return i < 0 ? l.codePointAt(0) === 47 ? "/" : "." : i === 1 && l.codePointAt(0) === 47 ? "//" : l.slice(0, i);
  }
  function mS(l) {
    Ei(l);
    let i = l.length, r = -1, c = 0, s = -1, f = 0, h;
    for (; i--; ) {
      const m = l.codePointAt(i);
      if (m === 47) {
        if (h) {
          c = i + 1;
          break;
        }
        continue;
      }
      r < 0 && (h = true, r = i + 1), m === 46 ? s < 0 ? s = i : f !== 1 && (f = 1) : s > -1 && (f = -1);
    }
    return s < 0 || r < 0 || f === 0 || f === 1 && s === r - 1 && s === c + 1 ? "" : l.slice(s, r);
  }
  function pS(...l) {
    let i = -1, r;
    for (; ++i < l.length; ) Ei(l[i]), l[i] && (r = r === void 0 ? l[i] : r + "/" + l[i]);
    return r === void 0 ? "." : gS(r);
  }
  function gS(l) {
    Ei(l);
    const i = l.codePointAt(0) === 47;
    let r = yS(l, !i);
    return r.length === 0 && !i && (r = "."), r.length > 0 && l.codePointAt(l.length - 1) === 47 && (r += "/"), i ? "/" + r : r;
  }
  function yS(l, i) {
    let r = "", c = 0, s = -1, f = 0, h = -1, m, b;
    for (; ++h <= l.length; ) {
      if (h < l.length) m = l.codePointAt(h);
      else {
        if (m === 47) break;
        m = 47;
      }
      if (m === 47) {
        if (!(s === h - 1 || f === 1)) if (s !== h - 1 && f === 2) {
          if (r.length < 2 || c !== 2 || r.codePointAt(r.length - 1) !== 46 || r.codePointAt(r.length - 2) !== 46) {
            if (r.length > 2) {
              if (b = r.lastIndexOf("/"), b !== r.length - 1) {
                b < 0 ? (r = "", c = 0) : (r = r.slice(0, b), c = r.length - 1 - r.lastIndexOf("/")), s = h, f = 0;
                continue;
              }
            } else if (r.length > 0) {
              r = "", c = 0, s = h, f = 0;
              continue;
            }
          }
          i && (r = r.length > 0 ? r + "/.." : "..", c = 2);
        } else r.length > 0 ? r += "/" + l.slice(s + 1, h) : r = l.slice(s + 1, h), c = h - s - 1;
        s = h, f = 0;
      } else m === 46 && f > -1 ? f++ : f = -1;
    }
    return r;
  }
  function Ei(l) {
    if (typeof l != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(l));
  }
  const vS = {
    cwd: bS
  };
  function bS() {
    return "/";
  }
  function Xo(l) {
    return !!(l !== null && typeof l == "object" && "href" in l && l.href && "protocol" in l && l.protocol && l.auth === void 0);
  }
  function xS(l) {
    if (typeof l == "string") l = new URL(l);
    else if (!Xo(l)) {
      const i = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + l + "`");
      throw i.code = "ERR_INVALID_ARG_TYPE", i;
    }
    if (l.protocol !== "file:") {
      const i = new TypeError("The URL must be of scheme file");
      throw i.code = "ERR_INVALID_URL_SCHEME", i;
    }
    return SS(l);
  }
  function SS(l) {
    if (l.hostname !== "") {
      const c = new TypeError('File URL host must be "localhost" or empty on darwin');
      throw c.code = "ERR_INVALID_FILE_URL_HOST", c;
    }
    const i = l.pathname;
    let r = -1;
    for (; ++r < i.length; ) if (i.codePointAt(r) === 37 && i.codePointAt(r + 1) === 50) {
      const c = i.codePointAt(r + 2);
      if (c === 70 || c === 102) {
        const s = new TypeError("File URL path must not include encoded / characters");
        throw s.code = "ERR_INVALID_FILE_URL_PATH", s;
      }
    }
    return decodeURIComponent(i);
  }
  const No = [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ];
  class cg {
    constructor(i) {
      let r;
      i ? Xo(i) ? r = {
        path: i
      } : typeof i == "string" || ES(i) ? r = {
        value: i
      } : r = i : r = {}, this.cwd = "cwd" in r ? "" : vS.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
      let c = -1;
      for (; ++c < No.length; ) {
        const f = No[c];
        f in r && r[f] !== void 0 && r[f] !== null && (this[f] = f === "history" ? [
          ...r[f]
        ] : r[f]);
      }
      let s;
      for (s in r) No.includes(s) || (this[s] = r[s]);
    }
    get basename() {
      return typeof this.path == "string" ? an.basename(this.path) : void 0;
    }
    set basename(i) {
      Oo(i, "basename"), Do(i, "basename"), this.path = an.join(this.dirname || "", i);
    }
    get dirname() {
      return typeof this.path == "string" ? an.dirname(this.path) : void 0;
    }
    set dirname(i) {
      Im(this.basename, "dirname"), this.path = an.join(i || "", this.basename);
    }
    get extname() {
      return typeof this.path == "string" ? an.extname(this.path) : void 0;
    }
    set extname(i) {
      if (Do(i, "extname"), Im(this.dirname, "extname"), i) {
        if (i.codePointAt(0) !== 46) throw new Error("`extname` must start with `.`");
        if (i.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots");
      }
      this.path = an.join(this.dirname, this.stem + (i || ""));
    }
    get path() {
      return this.history[this.history.length - 1];
    }
    set path(i) {
      Xo(i) && (i = xS(i)), Oo(i, "path"), this.path !== i && this.history.push(i);
    }
    get stem() {
      return typeof this.path == "string" ? an.basename(this.path, this.extname) : void 0;
    }
    set stem(i) {
      Oo(i, "stem"), Do(i, "stem"), this.path = an.join(this.dirname || "", i + (this.extname || ""));
    }
    fail(i, r, c) {
      const s = this.message(i, r, c);
      throw s.fatal = true, s;
    }
    info(i, r, c) {
      const s = this.message(i, r, c);
      return s.fatal = void 0, s;
    }
    message(i, r, c) {
      const s = new ce(i, r, c);
      return this.path && (s.name = this.path + ":" + s.name, s.file = this.path), s.fatal = false, this.messages.push(s), s;
    }
    toString(i) {
      return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(i || void 0).decode(this.value);
    }
  }
  function Do(l, i) {
    if (l && l.includes(an.sep)) throw new Error("`" + i + "` cannot be a path: did not expect `" + an.sep + "`");
  }
  function Oo(l, i) {
    if (!l) throw new Error("`" + i + "` cannot be empty");
  }
  function Im(l, i) {
    if (!l) throw new Error("Setting `" + i + "` requires `path` to be set too");
  }
  function ES(l) {
    return !!(l && typeof l == "object" && "byteLength" in l && "byteOffset" in l);
  }
  const zS = (function(l) {
    const c = this.constructor.prototype, s = c[l], f = function() {
      return s.apply(f, arguments);
    };
    return Object.setPrototypeOf(f, c), f;
  }), TS = {}.hasOwnProperty;
  class us extends zS {
    constructor() {
      super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = sS();
    }
    copy() {
      const i = new us();
      let r = -1;
      for (; ++r < this.attachers.length; ) {
        const c = this.attachers[r];
        i.use(...c);
      }
      return i.data(Mo(true, {}, this.namespace)), i;
    }
    data(i, r) {
      return typeof i == "string" ? arguments.length === 2 ? (_o("data", this.frozen), this.namespace[i] = r, this) : TS.call(this.namespace, i) && this.namespace[i] || void 0 : i ? (_o("data", this.frozen), this.namespace = i, this) : this.namespace;
    }
    freeze() {
      if (this.frozen) return this;
      const i = this;
      for (; ++this.freezeIndex < this.attachers.length; ) {
        const [r, ...c] = this.attachers[this.freezeIndex];
        if (c[0] === false) continue;
        c[0] === true && (c[0] = void 0);
        const s = r.call(i, ...c);
        typeof s == "function" && this.transformers.use(s);
      }
      return this.frozen = true, this.freezeIndex = Number.POSITIVE_INFINITY, this;
    }
    parse(i) {
      this.freeze();
      const r = Qu(i), c = this.parser || this.Parser;
      return wo("parse", c), c(String(r), r);
    }
    process(i, r) {
      const c = this;
      return this.freeze(), wo("process", this.parser || this.Parser), ko("process", this.compiler || this.Compiler), r ? s(void 0, r) : new Promise(s);
      function s(f, h) {
        const m = Qu(i), b = c.parse(m);
        c.run(b, m, function(y, v, S) {
          if (y || !v || !S) return g(y);
          const x = v, H = c.stringify(x, S);
          MS(H) ? S.value = H : S.result = H, g(y, S);
        });
        function g(y, v) {
          y || !v ? h(y) : f ? f(v) : r(void 0, v);
        }
      }
    }
    processSync(i) {
      let r = false, c;
      return this.freeze(), wo("processSync", this.parser || this.Parser), ko("processSync", this.compiler || this.Compiler), this.process(i, s), $m("processSync", "process", r), c;
      function s(f, h) {
        r = true, Jm(f), c = h;
      }
    }
    run(i, r, c) {
      Wm(i), this.freeze();
      const s = this.transformers;
      return !c && typeof r == "function" && (c = r, r = void 0), c ? f(void 0, c) : new Promise(f);
      function f(h, m) {
        const b = Qu(r);
        s.run(i, b, g);
        function g(y, v, S) {
          const x = v || i;
          y ? m(y) : h ? h(x) : c(void 0, x, S);
        }
      }
    }
    runSync(i, r) {
      let c = false, s;
      return this.run(i, r, f), $m("runSync", "run", c), s;
      function f(h, m) {
        Jm(h), s = m, c = true;
      }
    }
    stringify(i, r) {
      this.freeze();
      const c = Qu(r), s = this.compiler || this.Compiler;
      return ko("stringify", s), Wm(i), s(i, c);
    }
    use(i, ...r) {
      const c = this.attachers, s = this.namespace;
      if (_o("use", this.frozen), i != null) if (typeof i == "function") b(i, r);
      else if (typeof i == "object") Array.isArray(i) ? m(i) : h(i);
      else throw new TypeError("Expected usable value, not `" + i + "`");
      return this;
      function f(g) {
        if (typeof g == "function") b(g, []);
        else if (typeof g == "object") if (Array.isArray(g)) {
          const [y, ...v] = g;
          b(y, v);
        } else h(g);
        else throw new TypeError("Expected usable value, not `" + g + "`");
      }
      function h(g) {
        if (!("plugins" in g) && !("settings" in g)) throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
        m(g.plugins), g.settings && (s.settings = Mo(true, s.settings, g.settings));
      }
      function m(g) {
        let y = -1;
        if (g != null) if (Array.isArray(g)) for (; ++y < g.length; ) {
          const v = g[y];
          f(v);
        }
        else throw new TypeError("Expected a list of plugins, not `" + g + "`");
      }
      function b(g, y) {
        let v = -1, S = -1;
        for (; ++v < c.length; ) if (c[v][0] === g) {
          S = v;
          break;
        }
        if (S === -1) c.push([
          g,
          ...y
        ]);
        else if (y.length > 0) {
          let [x, ...H] = y;
          const q = c[S][1];
          Vo(q) && Vo(x) && (x = Mo(true, q, x)), c[S] = [
            g,
            x,
            ...H
          ];
        }
      }
    }
  }
  const AS = new us().freeze();
  function wo(l, i) {
    if (typeof i != "function") throw new TypeError("Cannot `" + l + "` without `parser`");
  }
  function ko(l, i) {
    if (typeof i != "function") throw new TypeError("Cannot `" + l + "` without `compiler`");
  }
  function _o(l, i) {
    if (i) throw new Error("Cannot call `" + l + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
  }
  function Wm(l) {
    if (!Vo(l) || typeof l.type != "string") throw new TypeError("Expected node, got `" + l + "`");
  }
  function $m(l, i, r) {
    if (!r) throw new Error("`" + l + "` finished async. Use `" + i + "` instead");
  }
  function Qu(l) {
    return CS(l) ? l : new cg(l);
  }
  function CS(l) {
    return !!(l && typeof l == "object" && "message" in l && "messages" in l);
  }
  function MS(l) {
    return typeof l == "string" || NS(l);
  }
  function NS(l) {
    return !!(l && typeof l == "object" && "byteLength" in l && "byteOffset" in l);
  }
  const DS = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Pm = [], tp = {
    allowDangerousHtml: true
  }, OS = /^(https?|ircs?|mailto|xmpp)$/i, wS = [
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
      from: "className",
      id: "remove-classname"
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
  function kS(l) {
    const i = _S(l), r = jS(l);
    return US(i.runSync(i.parse(r), r), l);
  }
  function _S(l) {
    const i = l.rehypePlugins || Pm, r = l.remarkPlugins || Pm, c = l.remarkRehypeOptions ? {
      ...l.remarkRehypeOptions,
      ...tp
    } : tp;
    return AS().use(hx).use(r).use(rS, c).use(i);
  }
  function jS(l) {
    const i = l.children || "", r = new cg();
    return typeof i == "string" && (r.value = i), r;
  }
  function US(l, i) {
    const r = i.allowedElements, c = i.allowElement, s = i.components, f = i.disallowedElements, h = i.skipHtml, m = i.unwrapDisallowed, b = i.urlTransform || RS;
    for (const y of wS) Object.hasOwn(i, y.from) && ("" + y.from + (y.to ? "use `" + y.to + "` instead" : "remove it") + DS + y.id, void 0);
    return rg(l, g), G0(l, {
      Fragment: k.Fragment,
      components: s,
      ignoreInvalidStyle: true,
      jsx: k.jsx,
      jsxs: k.jsxs,
      passKeys: true,
      passNode: true
    });
    function g(y, v, S) {
      if (y.type === "raw" && S && typeof v == "number") return h ? S.children.splice(v, 1) : S.children[v] = {
        type: "text",
        value: y.value
      }, v;
      if (y.type === "element") {
        let x;
        for (x in zo) if (Object.hasOwn(zo, x) && Object.hasOwn(y.properties, x)) {
          const H = y.properties[x], q = zo[x];
          (q === null || q.includes(y.tagName)) && (y.properties[x] = b(String(H || ""), x, y));
        }
      }
      if (y.type === "element") {
        let x = r ? !r.includes(y.tagName) : f ? f.includes(y.tagName) : false;
        if (!x && c && typeof v == "number" && (x = !c(y, v, S)), x && S && typeof v == "number") return m && y.children ? S.children.splice(v, 1, ...y.children) : S.children.splice(v, 1), v;
      }
    }
  }
  function RS(l) {
    const i = l.indexOf(":"), r = l.indexOf("?"), c = l.indexOf("#"), s = l.indexOf("/");
    return i === -1 || s !== -1 && i > s || r !== -1 && i > r || c !== -1 && i > c || OS.test(l.slice(0, i)) ? l : "";
  }
  const og = (...l) => l.filter((i, r, c) => !!i && i.trim() !== "" && c.indexOf(i) === r).join(" ").trim();
  const BS = (l) => l.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  const LS = (l) => l.replace(/^([A-Z])|[\s-_]+(\w)/g, (i, r, c) => c ? c.toUpperCase() : r.toLowerCase());
  const ep = (l) => {
    const i = LS(l);
    return i.charAt(0).toUpperCase() + i.slice(1);
  };
  var HS = {
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
  const qS = (l) => {
    for (const i in l) if (i.startsWith("aria-") || i === "role" || i === "title") return true;
    return false;
  };
  const YS = lt.forwardRef(({ color: l = "currentColor", size: i = 24, strokeWidth: r = 2, absoluteStrokeWidth: c, className: s = "", children: f, iconNode: h, ...m }, b) => lt.createElement("svg", {
    ref: b,
    ...HS,
    width: i,
    height: i,
    stroke: l,
    strokeWidth: c ? Number(r) * 24 / Number(i) : r,
    className: og("lucide", s),
    ...!f && !qS(m) && {
      "aria-hidden": "true"
    },
    ...m
  }, [
    ...h.map(([g, y]) => lt.createElement(g, y)),
    ...Array.isArray(f) ? f : [
      f
    ]
  ]));
  const nl = (l, i) => {
    const r = lt.forwardRef(({ className: c, ...s }, f) => lt.createElement(YS, {
      ref: f,
      iconNode: i,
      className: og(`lucide-${BS(ep(l))}`, `lucide-${l}`, c),
      ...s
    }));
    return r.displayName = ep(l), r;
  };
  const VS = [
    [
      "path",
      {
        d: "M20 6 9 17l-5-5",
        key: "1gmf2c"
      }
    ]
  ], XS = nl("check", VS);
  const QS = [
    [
      "path",
      {
        d: "m9 18 6-6-6-6",
        key: "mthhwq"
      }
    ]
  ], GS = nl("chevron-right", QS);
  const ZS = [
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
  ], KS = nl("circle-check-big", ZS);
  const JS = [
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
  ], FS = nl("circle-plus", JS);
  const IS = [
    [
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
      }
    ]
  ], WS = nl("circle", IS);
  const $S = [
    [
      "path",
      {
        d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
        key: "kfwtm"
      }
    ]
  ], PS = nl("moon", $S);
  const t2 = [
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
  ], e2 = nl("share-2", t2);
  const n2 = [
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
  ], l2 = nl("sun", n2), np = (l) => typeof l == "boolean" ? `${l}` : l === 0 ? "0" : l, lp = yp, sg = (l, i) => (r) => {
    var c;
    if ((i == null ? void 0 : i.variants) == null) return lp(l, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
    const { variants: s, defaultVariants: f } = i, h = Object.keys(s).map((g) => {
      const y = r == null ? void 0 : r[g], v = f == null ? void 0 : f[g];
      if (y === null) return null;
      const S = np(y) || np(v);
      return s[g][S];
    }), m = r && Object.entries(r).reduce((g, y) => {
      let [v, S] = y;
      return S === void 0 || (g[v] = S), g;
    }, {}), b = i == null || (c = i.compoundVariants) === null || c === void 0 ? void 0 : c.reduce((g, y) => {
      let { class: v, className: S, ...x } = y;
      return Object.entries(x).every((H) => {
        let [q, G] = H;
        return Array.isArray(G) ? G.includes({
          ...f,
          ...m
        }[q]) : {
          ...f,
          ...m
        }[q] === G;
      }) ? [
        ...g,
        v,
        S
      ] : g;
    }, []);
    return lp(l, h, b, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  };
  function Ue(...l) {
    return U1(yp(l));
  }
  const Zu = sg("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
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
  }), fg = lt.forwardRef(({ className: l, variant: i, size: r, asChild: c = false, ...s }, f) => {
    const h = c ? w1 : "button";
    return k.jsx(h, {
      className: Ue(Zu({
        variant: i,
        size: r,
        className: l
      })),
      ref: f,
      ...s
    });
  });
  fg.displayName = "Button";
  const a2 = _1, i2 = j1, u2 = lt.forwardRef(({ className: l, inset: i, children: r, ...c }, s) => k.jsxs(rp, {
    ref: s,
    className: Ue("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden focus:bg-accent data-[state=open]:bg-accent", i && "pl-8", l),
    ...c,
    children: [
      r,
      k.jsx(GS, {
        className: "ml-auto h-4 w-4"
      })
    ]
  }));
  u2.displayName = rp.displayName;
  const r2 = lt.forwardRef(({ className: l, ...i }, r) => k.jsx(cp, {
    ref: r,
    className: Ue("z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", l),
    ...i
  }));
  r2.displayName = cp.displayName;
  const hg = lt.forwardRef(({ className: l, sideOffset: i = 4, ...r }, c) => k.jsx(k1, {
    children: k.jsx(op, {
      ref: c,
      sideOffset: i,
      className: Ue("z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", l),
      ...r
    })
  }));
  hg.displayName = op.displayName;
  const Ku = lt.forwardRef(({ className: l, inset: i, ...r }, c) => k.jsx(sp, {
    ref: c,
    className: Ue("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50", i && "pl-8", l),
    ...r
  }));
  Ku.displayName = sp.displayName;
  const c2 = lt.forwardRef(({ className: l, children: i, checked: r, ...c }, s) => k.jsxs(fp, {
    ref: s,
    className: Ue("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50", l),
    checked: r,
    ...c,
    children: [
      k.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: k.jsx(hp, {
          children: k.jsx(XS, {
            className: "h-4 w-4"
          })
        })
      }),
      i
    ]
  }));
  c2.displayName = fp.displayName;
  const o2 = lt.forwardRef(({ className: l, children: i, ...r }, c) => k.jsxs(dp, {
    ref: c,
    className: Ue("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden transition-colors focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50", l),
    ...r,
    children: [
      k.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: k.jsx(hp, {
          children: k.jsx(WS, {
            className: "h-2 w-2 fill-current"
          })
        })
      }),
      i
    ]
  }));
  o2.displayName = dp.displayName;
  const s2 = lt.forwardRef(({ className: l, inset: i, ...r }, c) => k.jsx(mp, {
    ref: c,
    className: Ue("px-2 py-1.5 text-sm font-semibold", i && "pl-8", l),
    ...r
  }));
  s2.displayName = mp.displayName;
  const f2 = lt.forwardRef(({ className: l, ...i }, r) => k.jsx(pp, {
    ref: r,
    className: Ue("-mx-1 my-1 h-px bg-muted", l),
    ...i
  }));
  f2.displayName = pp.displayName;
  const h2 = {
    theme: "system",
    setTheme: () => null
  }, dg = lt.createContext(h2);
  function d2({ children: l, defaultTheme: i = "system", storageKey: r = "vite-ui-theme", ...c }) {
    const [s, f] = lt.useState(() => localStorage.getItem(r) || i);
    lt.useEffect(() => {
      const m = window.document.documentElement;
      if (m.classList.remove("light", "dark"), s === "system") {
        const b = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        m.classList.add(b);
        return;
      }
      m.classList.add(s);
    }, [
      s
    ]);
    const h = {
      theme: s,
      setTheme: (m) => {
        localStorage.setItem(r, m), f(m);
      }
    };
    return k.jsx(dg.Provider, {
      ...c,
      value: h,
      children: l
    });
  }
  const m2 = () => {
    const l = lt.useContext(dg);
    if (l === void 0) throw new Error("useTheme must be used within a ThemeProvider");
    return l;
  };
  function p2() {
    const { setTheme: l } = m2();
    return k.jsxs(a2, {
      children: [
        k.jsx(i2, {
          asChild: true,
          children: k.jsxs(fg, {
            variant: "outline",
            size: "icon",
            children: [
              k.jsx(l2, {
                className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
              }),
              k.jsx(PS, {
                className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
              }),
              k.jsx("span", {
                className: "sr-only",
                children: "Toggle theme"
              })
            ]
          })
        }),
        k.jsxs(hg, {
          align: "end",
          children: [
            k.jsx(Ku, {
              onClick: () => l("light"),
              children: "Light"
            }),
            k.jsx(Ku, {
              onClick: () => l("dark"),
              children: "Dark"
            }),
            k.jsx(Ku, {
              onClick: () => l("system"),
              children: "System"
            })
          ]
        })
      ]
    });
  }
  function mg() {
    return k.jsx("nav", {
      className: "flex w-full p-4 bg-primary-foreground justify-center border-b ",
      children: k.jsxs("div", {
        className: "flex w-full max-w-4xl justify-between items-center",
        children: [
          k.jsxs("div", {
            className: "flex gap-2 items-center ",
            children: [
              k.jsx("h1", {
                className: "text-lg font-semibold self-end ",
                children: "Learn"
              }),
              k.jsxs("h2", {
                className: "text-sm text-muted-foreground ",
                children: [
                  "to write recipes for",
                  " ",
                  k.jsx("a", {
                    href: "https://www.reciperium.com",
                    target: "_blank",
                    className: "text-blue-500 hover:text-blue-600",
                    children: "Reciperium"
                  })
                ]
              })
            ]
          }),
          k.jsx(p2, {})
        ]
      })
    });
  }
  function g2({ className: l, exerciseId: i }) {
    return k.jsxs("nav", {
      className: Ue("flex w-full p-4 justify-between bg-primary-foreground items-center border-b ", l),
      children: [
        k.jsx("span", {
          children: i > 1 && k.jsx(pi, {
            href: `/task/${i - 1}`,
            className: Zu({
              variant: "default"
            }),
            children: "Previous"
          })
        }),
        k.jsx("span", {
          children: g0 !== i ? k.jsx(pi, {
            href: `/task/${i + 1}`,
            className: Zu({
              variant: "default"
            }),
            children: "Next"
          }) : k.jsx(pi, {
            href: "/end",
            className: Zu({
              variant: "outline"
            }) + " text-green-600 dark:text-green-400",
            children: "Finish"
          })
        })
      ]
    });
  }
  const y2 = H1({
    theme: "light",
    settings: {
      fontSize: "11pt"
    },
    styles: []
  });
  function v2({ error: l, value: i, onChange: r, className: c, ...s }) {
    return k.jsx(q1, {
      value: i,
      onChange: r,
      theme: y2,
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
        Y1.lineWrapping,
        V1((f) => {
          let h = [];
          return (l == null ? void 0 : l.offset) && h.push({
            from: (l == null ? void 0 : l.offset) - 2,
            to: (l == null ? void 0 : l.offset) + 0,
            severity: "error",
            message: l == null ? void 0 : l.message
          }), h;
        })
      ],
      className: Ue(c, "dark:bg-slate-950 dark:selection:text-slate-900 caret-pink-500 text text-sm", (l == null ? void 0 : l.message) && "err"),
      ...s
    });
  }
  const b2 = ({ recipe: l }) => {
    const i = gp.useCallback((r) => {
      const s = {
        share: btoa(r)
      }, f = new URLSearchParams(s);
      window.location.search = f.toString();
    }, [
      l
    ]);
    return k.jsx("button", {
      type: "button",
      onClick: (r) => {
        r.preventDefault(), i(l);
      },
      className: "rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-300 p-1",
      children: k.jsx(e2, {
        size: 16
      })
    });
  }, x2 = sg("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2", {
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
  function S2({ className: l, variant: i, ...r }) {
    return k.jsx("div", {
      className: Ue(x2({
        variant: i
      }), l),
      ...r
    });
  }
  const ap = "https://reciperium.com";
  function E2({ parsedRecipe: l, rawRecipe: i }) {
    var _a, _b2, _c, _d, _e2, _f, _g;
    const r = ((_b2 = (_a = l.metadata) == null ? void 0 : _a.get("tags")) == null ? void 0 : _b2.split(",").filter((c) => !!c)) || [];
    return k.jsxs("div", {
      className: "relative rounded-md border border-slate-400 dark:border-slate-500 bg-muted p-6 shadow-lg dark:shadow-white/40 antialiased",
      children: [
        k.jsx("div", {
          className: "absolute top-0 right-0 pt-3 pr-3",
          children: k.jsx(b2, {
            recipe: i
          })
        }),
        k.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 md:gap-4",
          children: [
            ((_c = l.ingredients) == null ? void 0 : _c.length) > 0 || ((_d = l.recipes_refs) == null ? void 0 : _d.length) > 0 ? k.jsxs("div", {
              className: "pb-4",
              children: [
                k.jsx("h2", {
                  className: "text-lg font-semibold",
                  children: "Ingredients"
                }),
                k.jsxs("ul", {
                  className: "mt-2 mb-6 list-disc list-inside",
                  children: [
                    l.ingredients.map((c) => k.jsxs("li", {
                      className: "mb-2 text-left antialiased",
                      children: [
                        k.jsxs("span", {
                          children: [
                            c.quantity,
                            " ",
                            c.unit
                          ]
                        }),
                        " ",
                        c.name,
                        " "
                      ]
                    }, c.name)),
                    l.recipes_refs.map((c) => k.jsxs("li", {
                      className: "mb-2 text-left antialiased",
                      children: [
                        k.jsxs("span", {
                          children: [
                            c.quantity,
                            " ",
                            c.unit
                          ]
                        }),
                        " ",
                        k.jsx(R1, {
                          baseUrl: ap,
                          path: c.name,
                          children: c.name
                        })
                      ]
                    }, c.name))
                  ]
                })
              ]
            }) : null,
            ((_e2 = l.materials) == null ? void 0 : _e2.length) > 0 ? k.jsxs("div", {
              children: [
                k.jsx("h2", {
                  className: "text-lg font-semibold",
                  children: "Materials"
                }),
                k.jsx("ul", {
                  className: "mt-2 mb-6 list-disc list-inside",
                  children: (_f = l.materials) == null ? void 0 : _f.map((c) => k.jsx("li", {
                    className: "mb-2 text-left antialiased",
                    children: c.name
                  }, c.name))
                })
              ]
            }) : null
          ]
        }),
        ((_g = l.tokens) == null ? void 0 : _g.length) > 0 && k.jsxs("div", {
          className: "recipe-content whitespace-pre text-wrap",
          children: [
            k.jsx("h2", {
              className: "text-lg font-semibold mb-2 ",
              children: "Instructions"
            }),
            k.jsx(B1, {
              tokens: l.tokens,
              baseUrl: ap
            })
          ]
        }),
        k.jsx("div", {
          className: "flex flex-wrap gap-2 pt-12",
          children: r.map((c) => k.jsx(S2, {
            children: k.jsx("a", {
              href: `https://www.reciperium.com/recipes?search=${c}`,
              target: "_blank",
              className: "after:content-['_\u2197']",
              children: c
            })
          }, c))
        })
      ]
    });
  }
  const z2 = ({ children: l, waitBeforeShow: i = 500 }) => {
    const [r, c] = lt.useState(false);
    return lt.useEffect(() => {
      const s = setTimeout(() => {
        c(true);
      }, i);
      return () => clearTimeout(s);
    }, [
      i
    ]), r ? l : null;
  };
  function T2({ title: l, contentMd: i, validation: r, defaultRecipe: c, exerciseId: s }) {
    const h = new URL(window.location.href).searchParams.get("share"), m = h ? atob(h) : c, [b, g] = lt.useState(m), [y, v] = lt.useState({}), [S, x] = lt.useState({});
    return lt.useEffect(() => {
      g(m);
    }, [
      m
    ]), lt.useEffect(() => {
      try {
        const H = L1(b);
        v(H), x(null);
      } catch (H) {
        const q = H;
        console.error(q), x(q);
      }
    }, [
      b
    ]), k.jsxs("div", {
      className: "w-screen h-screen antialiased grid grid-cols-1 md:grid-cols-2",
      children: [
        k.jsx("div", {
          className: "border-r",
          children: k.jsxs("div", {
            className: "relative h-full whitespace-pre text-wrap",
            children: [
              k.jsx(mg, {}),
              k.jsxs("div", {
                className: "py-4 px-2 mb-16 overflow-x-auto",
                children: [
                  k.jsx("h1", {
                    className: "text-lg mb-4 font-semibold",
                    children: l
                  }),
                  k.jsx(kS, {
                    children: i
                  })
                ]
              }),
              k.jsx(g2, {
                className: "absolute inset-x-0 bottom-0",
                exerciseId: s
              })
            ]
          })
        }),
        k.jsxs("div", {
          className: "flex flex-col-reverse md:flex-col",
          children: [
            k.jsx("div", {
              className: "h-1/2 md:h-1/3 min-h-64 border-b dark:bg-slate-800",
              children: k.jsxs("div", {
                className: "flex flex-col h-full items-center justify-center p-6 pt-0",
                children: [
                  k.jsx("span", {
                    className: "text-sm py-1 text-secondary-foreground",
                    children: "editor"
                  }),
                  k.jsx(lt.Suspense, {
                    children: k.jsx(v2, {
                      error: S,
                      className: "w-full h-full font-sans border rounded-md bg-background border-slate-300 shadow-inner dark:border-slate-600 dark:shadow-slate-600/50",
                      value: b,
                      onChange: (H) => {
                        g(H);
                      }
                    })
                  })
                ]
              })
            }),
            k.jsxs("div", {
              children: [
                k.jsx("div", {
                  className: "relative w-full p-6",
                  children: k.jsx(E2, {
                    parsedRecipe: y,
                    rawRecipe: b
                  })
                }),
                S ? k.jsx(z2, {
                  waitBeforeShow: 4e3,
                  children: k.jsx("div", {
                    className: "sticky md:absolute bottom-0 right-0 bg-gray-900 dark:bg-gray-100 animate-in fade-in duration-300",
                    children: k.jsx("div", {
                      className: "flex items-center justify-center p-4 ",
                      children: k.jsxs("div", {
                        children: [
                          k.jsxs("span", {
                            className: "flex flex-wrap gap-2 text-red-500 dark:text-red-600 items-center",
                            children: [
                              "Something went wrong!",
                              " ",
                              k.jsx(FS, {
                                className: "rotate-45",
                                size: 16
                              })
                            ]
                          }),
                          k.jsx("span", {
                            className: "text-muted whitespace-pre font-mono text-sm",
                            children: (S == null ? void 0 : S.message) || "Unknown error"
                          })
                        ]
                      })
                    })
                  })
                }) : r(y) && k.jsx("div", {
                  className: "sticky md:absolute bottom-0 right-0 bg-gray-700 dark:bg-gray-100 animate-in fade-in duration-300",
                  children: k.jsxs("div", {
                    className: "flex items-center justify-center p-4 ",
                    children: [
                      k.jsxs(pi, {
                        href: `/task/${s + 1}`,
                        replace: true,
                        children: [
                          k.jsxs("span", {
                            className: "text-green-400 dark:text-green-600 flex flex-wrap gap-2 items-center",
                            children: [
                              "Correct ",
                              k.jsx(KS, {
                                size: 16
                              })
                            ]
                          }),
                          k.jsx("span", {
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
  function A2({ className: l, children: i }) {
    return k.jsx("div", {
      className: Ue("container max-w-4xl px-4 pt-4", l),
      children: i
    });
  }
  function C2() {
    return k.jsx("div", {
      className: "w-screen h-screen antialiased",
      children: k.jsxs("div", {
        className: "",
        children: [
          k.jsx(mg, {}),
          k.jsx(A2, {
            children: k.jsxs("div", {
              className: "flex flex-col gap-2",
              children: [
                k.jsx("h2", {
                  className: "text-4xl font-semibold text-center pb-8 text-green-600 dark:text-green-400",
                  children: "Congratulations!"
                }),
                k.jsx("p", {
                  className: "pb-4",
                  children: "You've successfully completed the Reciperium tutorial and are now equipped to create your own delicious recipes."
                }),
                k.jsx("h3", {
                  className: "text-2xl font-semibold pb-6",
                  children: "What's next?"
                }),
                k.jsxs("ul", {
                  className: "list-disc list-inside",
                  children: [
                    k.jsxs("li", {
                      children: [
                        k.jsx("span", {
                          className: "font-bold",
                          children: "Experiment"
                        }),
                        ": Try creating your own recipes from scratch."
                      ]
                    }),
                    k.jsxs("li", {
                      children: [
                        k.jsx("span", {
                          className: "font-bold",
                          children: "Share"
                        }),
                        ": Share your recipes with friends and family."
                      ]
                    }),
                    k.jsxs("li", {
                      children: [
                        k.jsx("span", {
                          className: "font-bold",
                          children: "Explore"
                        }),
                        ": Discover new recipes and techniques in",
                        " ",
                        k.jsx("a", {
                          href: "https://www.reciperium.com",
                          target: "_blank",
                          className: "text-blue-500 hover:text-blue-600 cursor-pointer",
                          children: "Reciperium"
                        })
                      ]
                    }),
                    k.jsxs("li", {
                      children: [
                        k.jsx("span", {
                          className: "font-bold",
                          children: "Start again"
                        }),
                        ": Go to",
                        " ",
                        k.jsx(pi, {
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
  function M2() {
    const [l] = h0();
    return lt.useEffect(() => {
      window.scrollTo(0, 0);
    }, [
      l
    ]), k.jsxs(p0, {
      children: [
        Mp.map((i, r) => {
          var _a;
          const c = r + 1;
          return k.jsxs(gp.Fragment, {
            children: [
              k.jsx(xo, {
                path: `/task/${c}`,
                children: k.jsx(T2, {
                  ...i,
                  exerciseId: c
                })
              }),
              (_a = i.alias) == null ? void 0 : _a.map((s) => k.jsx(xo, {
                path: `/${s}`,
                children: k.jsx(gm, {
                  to: `/${c}`
                })
              }, s))
            ]
          }, c);
        }),
        k.jsx(xo, {
          path: "/end",
          children: k.jsx(C2, {})
        }),
        k.jsx(gm, {
          to: "/task/1"
        })
      ]
    });
  }
  K1.createRoot(document.getElementById("root")).render(k.jsx(lt.StrictMode, {
    children: k.jsx(d2, {
      defaultTheme: "dark",
      storageKey: "vite-ui-theme",
      children: k.jsx(M2, {})
    })
  }));
});
