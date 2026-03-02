function po(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r) if (o !== "default" && !(o in e)) {
        const i = Object.getOwnPropertyDescriptor(r, o);
        i && Object.defineProperty(e, o, i.get ? i : { enumerable: true, get: () => r[o] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function Mn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var pt = { exports: {} }, Me = {};
var Zt;
function mo() {
  if (Zt) return Me;
  Zt = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), t = /* @__PURE__ */ Symbol.for("react.fragment");
  function n(r, o, i) {
    var a = null;
    if (i !== void 0 && (a = "" + i), o.key !== void 0 && (a = "" + o.key), "key" in o) {
      i = {};
      for (var c in o) c !== "key" && (i[c] = o[c]);
    } else i = o;
    return o = i.ref, { $$typeof: e, type: r, key: a, ref: o !== void 0 ? o : null, props: i };
  }
  return Me.Fragment = t, Me.jsx = n, Me.jsxs = n, Me;
}
var Jt;
function vo() {
  return Jt || (Jt = 1, pt.exports = mo()), pt.exports;
}
var x = vo(), mt = { exports: {} }, D = {};
var Qt;
function ho() {
  if (Qt) return D;
  Qt = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), t = /* @__PURE__ */ Symbol.for("react.portal"), n = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), o = /* @__PURE__ */ Symbol.for("react.profiler"), i = /* @__PURE__ */ Symbol.for("react.consumer"), a = /* @__PURE__ */ Symbol.for("react.context"), c = /* @__PURE__ */ Symbol.for("react.forward_ref"), l = /* @__PURE__ */ Symbol.for("react.suspense"), s = /* @__PURE__ */ Symbol.for("react.memo"), f = /* @__PURE__ */ Symbol.for("react.lazy"), d = /* @__PURE__ */ Symbol.for("react.activity"), m = Symbol.iterator;
  function h(p) {
    return p === null || typeof p != "object" ? null : (p = m && p[m] || p["@@iterator"], typeof p == "function" ? p : null);
  }
  var y = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, v = Object.assign, g = {};
  function w(p, E, M) {
    this.props = p, this.context = E, this.refs = g, this.updater = M || y;
  }
  w.prototype.isReactComponent = {}, w.prototype.setState = function(p, E) {
    if (typeof p != "object" && typeof p != "function" && p != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, p, E, "setState");
  }, w.prototype.forceUpdate = function(p) {
    this.updater.enqueueForceUpdate(this, p, "forceUpdate");
  };
  function R() {
  }
  R.prototype = w.prototype;
  function S(p, E, M) {
    this.props = p, this.context = E, this.refs = g, this.updater = M || y;
  }
  var C = S.prototype = new R();
  C.constructor = S, v(C, w.prototype), C.isPureReactComponent = true;
  var _ = Array.isArray;
  function P() {
  }
  var b = { H: null, A: null, T: null, S: null }, I = Object.prototype.hasOwnProperty;
  function W(p, E, M) {
    var O = M.ref;
    return { $$typeof: e, type: p, key: E, ref: O !== void 0 ? O : null, props: M };
  }
  function j(p, E) {
    return W(p.type, E, p.props);
  }
  function B(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }
  function V(p) {
    var E = { "=": "=0", ":": "=2" };
    return "$" + p.replace(/[=:]/g, function(M) {
      return E[M];
    });
  }
  var U = /\/+/g;
  function H(p, E) {
    return typeof p == "object" && p !== null && p.key != null ? V("" + p.key) : E.toString(36);
  }
  function K(p) {
    switch (p.status) {
      case "fulfilled":
        return p.value;
      case "rejected":
        throw p.reason;
      default:
        switch (typeof p.status == "string" ? p.then(P, P) : (p.status = "pending", p.then(function(E) {
          p.status === "pending" && (p.status = "fulfilled", p.value = E);
        }, function(E) {
          p.status === "pending" && (p.status = "rejected", p.reason = E);
        })), p.status) {
          case "fulfilled":
            return p.value;
          case "rejected":
            throw p.reason;
        }
    }
    throw p;
  }
  function L(p, E, M, O, k) {
    var F = typeof p;
    (F === "undefined" || F === "boolean") && (p = null);
    var T = false;
    if (p === null) T = true;
    else switch (F) {
      case "bigint":
      case "string":
      case "number":
        T = true;
        break;
      case "object":
        switch (p.$$typeof) {
          case e:
          case t:
            T = true;
            break;
          case f:
            return T = p._init, L(T(p._payload), E, M, O, k);
        }
    }
    if (T) return k = k(p), T = O === "" ? "." + H(p, 0) : O, _(k) ? (M = "", T != null && (M = T.replace(U, "$&/") + "/"), L(k, E, M, "", function(dt) {
      return dt;
    })) : k != null && (B(k) && (k = j(k, M + (k.key == null || p && p.key === k.key ? "" : ("" + k.key).replace(U, "$&/") + "/") + T)), E.push(k)), 1;
    T = 0;
    var z = O === "" ? "." : O + ":";
    if (_(p)) for (var X = 0; X < p.length; X++) O = p[X], F = z + H(O, X), T += L(O, E, M, F, k);
    else if (X = h(p), typeof X == "function") for (p = X.call(p), X = 0; !(O = p.next()).done; ) O = O.value, F = z + H(O, X++), T += L(O, E, M, F, k);
    else if (F === "object") {
      if (typeof p.then == "function") return L(K(p), E, M, O, k);
      throw E = String(p), Error("Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead.");
    }
    return T;
  }
  function G(p, E, M) {
    if (p == null) return p;
    var O = [], k = 0;
    return L(p, O, "", "", function(F) {
      return E.call(M, F, k++);
    }), O;
  }
  function N(p) {
    if (p._status === -1) {
      var E = p._result;
      E = E(), E.then(function(M) {
        (p._status === 0 || p._status === -1) && (p._status = 1, p._result = M);
      }, function(M) {
        (p._status === 0 || p._status === -1) && (p._status = 2, p._result = M);
      }), p._status === -1 && (p._status = 0, p._result = E);
    }
    if (p._status === 1) return p._result.default;
    throw p._result;
  }
  var A = typeof reportError == "function" ? reportError : function(p) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var E = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof p == "object" && p !== null && typeof p.message == "string" ? String(p.message) : String(p), error: p });
      if (!window.dispatchEvent(E)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", p);
      return;
    }
    console.error(p);
  }, Y = { map: G, forEach: function(p, E, M) {
    G(p, function() {
      E.apply(this, arguments);
    }, M);
  }, count: function(p) {
    var E = 0;
    return G(p, function() {
      E++;
    }), E;
  }, toArray: function(p) {
    return G(p, function(E) {
      return E;
    }) || [];
  }, only: function(p) {
    if (!B(p)) throw Error("React.Children.only expected to receive a single React element child.");
    return p;
  } };
  return D.Activity = d, D.Children = Y, D.Component = w, D.Fragment = n, D.Profiler = o, D.PureComponent = S, D.StrictMode = r, D.Suspense = l, D.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = b, D.__COMPILER_RUNTIME = { __proto__: null, c: function(p) {
    return b.H.useMemoCache(p);
  } }, D.cache = function(p) {
    return function() {
      return p.apply(null, arguments);
    };
  }, D.cacheSignal = function() {
    return null;
  }, D.cloneElement = function(p, E, M) {
    if (p == null) throw Error("The argument must be a React element, but you passed " + p + ".");
    var O = v({}, p.props), k = p.key;
    if (E != null) for (F in E.key !== void 0 && (k = "" + E.key), E) !I.call(E, F) || F === "key" || F === "__self" || F === "__source" || F === "ref" && E.ref === void 0 || (O[F] = E[F]);
    var F = arguments.length - 2;
    if (F === 1) O.children = M;
    else if (1 < F) {
      for (var T = Array(F), z = 0; z < F; z++) T[z] = arguments[z + 2];
      O.children = T;
    }
    return W(p.type, k, O);
  }, D.createContext = function(p) {
    return p = { $$typeof: a, _currentValue: p, _currentValue2: p, _threadCount: 0, Provider: null, Consumer: null }, p.Provider = p, p.Consumer = { $$typeof: i, _context: p }, p;
  }, D.createElement = function(p, E, M) {
    var O, k = {}, F = null;
    if (E != null) for (O in E.key !== void 0 && (F = "" + E.key), E) I.call(E, O) && O !== "key" && O !== "__self" && O !== "__source" && (k[O] = E[O]);
    var T = arguments.length - 2;
    if (T === 1) k.children = M;
    else if (1 < T) {
      for (var z = Array(T), X = 0; X < T; X++) z[X] = arguments[X + 2];
      k.children = z;
    }
    if (p && p.defaultProps) for (O in T = p.defaultProps, T) k[O] === void 0 && (k[O] = T[O]);
    return W(p, F, k);
  }, D.createRef = function() {
    return { current: null };
  }, D.forwardRef = function(p) {
    return { $$typeof: c, render: p };
  }, D.isValidElement = B, D.lazy = function(p) {
    return { $$typeof: f, _payload: { _status: -1, _result: p }, _init: N };
  }, D.memo = function(p, E) {
    return { $$typeof: s, type: p, compare: E === void 0 ? null : E };
  }, D.startTransition = function(p) {
    var E = b.T, M = {};
    b.T = M;
    try {
      var O = p(), k = b.S;
      k !== null && k(M, O), typeof O == "object" && O !== null && typeof O.then == "function" && O.then(P, A);
    } catch (F) {
      A(F);
    } finally {
      E !== null && M.types !== null && (E.types = M.types), b.T = E;
    }
  }, D.unstable_useCacheRefresh = function() {
    return b.H.useCacheRefresh();
  }, D.use = function(p) {
    return b.H.use(p);
  }, D.useActionState = function(p, E, M) {
    return b.H.useActionState(p, E, M);
  }, D.useCallback = function(p, E) {
    return b.H.useCallback(p, E);
  }, D.useContext = function(p) {
    return b.H.useContext(p);
  }, D.useDebugValue = function() {
  }, D.useDeferredValue = function(p, E) {
    return b.H.useDeferredValue(p, E);
  }, D.useEffect = function(p, E) {
    return b.H.useEffect(p, E);
  }, D.useEffectEvent = function(p) {
    return b.H.useEffectEvent(p);
  }, D.useId = function() {
    return b.H.useId();
  }, D.useImperativeHandle = function(p, E, M) {
    return b.H.useImperativeHandle(p, E, M);
  }, D.useInsertionEffect = function(p, E) {
    return b.H.useInsertionEffect(p, E);
  }, D.useLayoutEffect = function(p, E) {
    return b.H.useLayoutEffect(p, E);
  }, D.useMemo = function(p, E) {
    return b.H.useMemo(p, E);
  }, D.useOptimistic = function(p, E) {
    return b.H.useOptimistic(p, E);
  }, D.useReducer = function(p, E, M) {
    return b.H.useReducer(p, E, M);
  }, D.useRef = function(p) {
    return b.H.useRef(p);
  }, D.useState = function(p) {
    return b.H.useState(p);
  }, D.useSyncExternalStore = function(p, E, M) {
    return b.H.useSyncExternalStore(p, E, M);
  }, D.useTransition = function() {
    return b.H.useTransition();
  }, D.version = "19.2.4", D;
}
var en;
function Tn() {
  return en || (en = 1, mt.exports = ho()), mt.exports;
}
var u = Tn();
const pe = Mn(u), Nt = po({ __proto__: null, default: pe }, [u]);
var vt = { exports: {} }, q = {};
var tn;
function go() {
  if (tn) return q;
  tn = 1;
  var e = Tn();
  function t(l) {
    var s = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      s += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var f = 2; f < arguments.length; f++) s += "&args[]=" + encodeURIComponent(arguments[f]);
    }
    return "Minified React error #" + l + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function n() {
  }
  var r = { d: { f: n, r: function() {
    throw Error(t(522));
  }, D: n, C: n, L: n, m: n, X: n, S: n, M: n }, p: 0, findDOMNode: null }, o = /* @__PURE__ */ Symbol.for("react.portal");
  function i(l, s, f) {
    var d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: o, key: d == null ? null : "" + d, children: l, containerInfo: s, implementation: f };
  }
  var a = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function c(l, s) {
    if (l === "font") return "";
    if (typeof s == "string") return s === "use-credentials" ? s : "";
  }
  return q.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, q.createPortal = function(l, s) {
    var f = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!s || s.nodeType !== 1 && s.nodeType !== 9 && s.nodeType !== 11) throw Error(t(299));
    return i(l, s, null, f);
  }, q.flushSync = function(l) {
    var s = a.T, f = r.p;
    try {
      if (a.T = null, r.p = 2, l) return l();
    } finally {
      a.T = s, r.p = f, r.d.f();
    }
  }, q.preconnect = function(l, s) {
    typeof l == "string" && (s ? (s = s.crossOrigin, s = typeof s == "string" ? s === "use-credentials" ? s : "" : void 0) : s = null, r.d.C(l, s));
  }, q.prefetchDNS = function(l) {
    typeof l == "string" && r.d.D(l);
  }, q.preinit = function(l, s) {
    if (typeof l == "string" && s && typeof s.as == "string") {
      var f = s.as, d = c(f, s.crossOrigin), m = typeof s.integrity == "string" ? s.integrity : void 0, h = typeof s.fetchPriority == "string" ? s.fetchPriority : void 0;
      f === "style" ? r.d.S(l, typeof s.precedence == "string" ? s.precedence : void 0, { crossOrigin: d, integrity: m, fetchPriority: h }) : f === "script" && r.d.X(l, { crossOrigin: d, integrity: m, fetchPriority: h, nonce: typeof s.nonce == "string" ? s.nonce : void 0 });
    }
  }, q.preinitModule = function(l, s) {
    if (typeof l == "string") if (typeof s == "object" && s !== null) {
      if (s.as == null || s.as === "script") {
        var f = c(s.as, s.crossOrigin);
        r.d.M(l, { crossOrigin: f, integrity: typeof s.integrity == "string" ? s.integrity : void 0, nonce: typeof s.nonce == "string" ? s.nonce : void 0 });
      }
    } else s == null && r.d.M(l);
  }, q.preload = function(l, s) {
    if (typeof l == "string" && typeof s == "object" && s !== null && typeof s.as == "string") {
      var f = s.as, d = c(f, s.crossOrigin);
      r.d.L(l, f, { crossOrigin: d, integrity: typeof s.integrity == "string" ? s.integrity : void 0, nonce: typeof s.nonce == "string" ? s.nonce : void 0, type: typeof s.type == "string" ? s.type : void 0, fetchPriority: typeof s.fetchPriority == "string" ? s.fetchPriority : void 0, referrerPolicy: typeof s.referrerPolicy == "string" ? s.referrerPolicy : void 0, imageSrcSet: typeof s.imageSrcSet == "string" ? s.imageSrcSet : void 0, imageSizes: typeof s.imageSizes == "string" ? s.imageSizes : void 0, media: typeof s.media == "string" ? s.media : void 0 });
    }
  }, q.preloadModule = function(l, s) {
    if (typeof l == "string") if (s) {
      var f = c(s.as, s.crossOrigin);
      r.d.m(l, { as: typeof s.as == "string" && s.as !== "script" ? s.as : void 0, crossOrigin: f, integrity: typeof s.integrity == "string" ? s.integrity : void 0 });
    } else r.d.m(l);
  }, q.requestFormReset = function(l) {
    r.d.r(l);
  }, q.unstable_batchedUpdates = function(l, s) {
    return l(s);
  }, q.useFormState = function(l, s, f) {
    return a.H.useFormState(l, s, f);
  }, q.useFormStatus = function() {
    return a.H.useHostTransitionStatus();
  }, q.version = "19.2.4", q;
}
var nn;
function yo() {
  if (nn) return vt.exports;
  nn = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
    } catch (t) {
      console.error(t);
    }
  }
  return e(), vt.exports = go(), vt.exports;
}
function rn(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function we(...e) {
  return (t) => {
    let n = false;
    const r = e.map((o) => {
      const i = rn(o, t);
      return !n && typeof i == "function" && (n = true), i;
    });
    if (n) return () => {
      for (let o = 0; o < r.length; o++) {
        const i = r[o];
        typeof i == "function" ? i() : rn(e[o], null);
      }
    };
  };
}
function Q(...e) {
  return u.useCallback(we(...e), e);
}
var wo = /* @__PURE__ */ Symbol.for("react.lazy"), Ze = Nt[" use ".trim().toString()];
function Eo(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function In(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === wo && "_payload" in e && Eo(e._payload);
}
function xo(e) {
  const t = Co(e), n = u.forwardRef((r, o) => {
    let { children: i, ...a } = r;
    In(i) && typeof Ze == "function" && (i = Ze(i._payload));
    const c = u.Children.toArray(i), l = c.find(bo);
    if (l) {
      const s = l.props.children, f = c.map((d) => d === l ? u.Children.count(s) > 1 ? u.Children.only(null) : u.isValidElement(s) ? s.props.children : null : d);
      return x.jsx(t, { ...a, ref: o, children: u.isValidElement(s) ? u.cloneElement(s, void 0, f) : null });
    }
    return x.jsx(t, { ...a, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
var Ya = xo("Slot");
function Co(e) {
  const t = u.forwardRef((n, r) => {
    let { children: o, ...i } = n;
    if (In(o) && typeof Ze == "function" && (o = Ze(o._payload)), u.isValidElement(o)) {
      const a = _o(o), c = Ro(i, o.props);
      return o.type !== u.Fragment && (c.ref = r ? we(r, a) : a), u.cloneElement(o, c);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var So = /* @__PURE__ */ Symbol("radix.slottable");
function bo(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === So;
}
function Ro(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...c) => {
      const l = i(...c);
      return o(...c), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function _o(e) {
  var _a2, _b;
  let t = (_a2 = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : _a2.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (_b = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : _b.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function $(e, t, { checkForDefaultPrevented: n = true } = {}) {
  return function(o) {
    if (e == null ? void 0 : e(o), n === false || !o.defaultPrevented) return t == null ? void 0 : t(o);
  };
}
function Le(e, t = []) {
  let n = [];
  function r(i, a) {
    const c = u.createContext(a), l = n.length;
    n = [...n, a];
    const s = (d) => {
      var _a2;
      const { scope: m, children: h, ...y } = d, v = ((_a2 = m == null ? void 0 : m[e]) == null ? void 0 : _a2[l]) || c, g = u.useMemo(() => y, Object.values(y));
      return x.jsx(v.Provider, { value: g, children: h });
    };
    s.displayName = i + "Provider";
    function f(d, m) {
      var _a2;
      const h = ((_a2 = m == null ? void 0 : m[e]) == null ? void 0 : _a2[l]) || c, y = u.useContext(h);
      if (y) return y;
      if (a !== void 0) return a;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return [s, f];
  }
  const o = () => {
    const i = n.map((a) => u.createContext(a));
    return function(c) {
      const l = (c == null ? void 0 : c[e]) || i;
      return u.useMemo(() => ({ [`__scope${e}`]: { ...c, [e]: l } }), [c, l]);
    };
  };
  return o.scopeName = e, [r, Ao(o, ...t)];
}
function Ao(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function(i) {
      const a = r.reduce((c, { useScope: l, scopeName: s }) => {
        const d = l(i)[`__scope${s}`];
        return { ...c, ...d };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var ve = (globalThis == null ? void 0 : globalThis.document) ? u.useLayoutEffect : () => {
}, Po = Nt[" useInsertionEffect ".trim().toString()] || ve;
function Dn({ prop: e, defaultProp: t, onChange: n = () => {
}, caller: r }) {
  const [o, i, a] = Oo({ defaultProp: t, onChange: n }), c = e !== void 0, l = c ? e : o;
  {
    const f = u.useRef(e !== void 0);
    u.useEffect(() => {
      const d = f.current;
      d !== c && console.warn(`${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${c ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), f.current = c;
    }, [c, r]);
  }
  const s = u.useCallback((f) => {
    var _a2;
    if (c) {
      const d = Mo(f) ? f(e) : f;
      d !== e && ((_a2 = a.current) == null ? void 0 : _a2.call(a, d));
    } else i(f);
  }, [c, e, i, a]);
  return [l, s];
}
function Oo({ defaultProp: e, onChange: t }) {
  const [n, r] = u.useState(e), o = u.useRef(n), i = u.useRef(t);
  return Po(() => {
    i.current = t;
  }, [t]), u.useEffect(() => {
    var _a2;
    o.current !== n && ((_a2 = i.current) == null ? void 0 : _a2.call(i, n), o.current = n);
  }, [n, o]), [n, r, i];
}
function Mo(e) {
  return typeof e == "function";
}
var Lt = yo();
const To = Mn(Lt);
function Io(e) {
  const t = Do(e), n = u.forwardRef((r, o) => {
    const { children: i, ...a } = r, c = u.Children.toArray(i), l = c.find(Lo);
    if (l) {
      const s = l.props.children, f = c.map((d) => d === l ? u.Children.count(s) > 1 ? u.Children.only(null) : u.isValidElement(s) ? s.props.children : null : d);
      return x.jsx(t, { ...a, ref: o, children: u.isValidElement(s) ? u.cloneElement(s, void 0, f) : null });
    }
    return x.jsx(t, { ...a, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
function Do(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (u.isValidElement(o)) {
      const a = Fo(o), c = ko(i, o.props);
      return o.type !== u.Fragment && (c.ref = r ? we(r, a) : a), u.cloneElement(o, c);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var No = /* @__PURE__ */ Symbol("radix.slottable");
function Lo(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === No;
}
function ko(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...c) => {
      const l = i(...c);
      return o(...c), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Fo(e) {
  var _a2, _b;
  let t = (_a2 = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : _a2.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (_b = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : _b.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var jo = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"], Z = jo.reduce((e, t) => {
  const n = Io(`Primitive.${t}`), r = u.forwardRef((o, i) => {
    const { asChild: a, ...c } = o, l = a ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = true), x.jsx(l, { ...c, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Nn(e, t) {
  e && Lt.flushSync(() => e.dispatchEvent(t));
}
function on(e) {
  const t = $o(e), n = u.forwardRef((r, o) => {
    const { children: i, ...a } = r, c = u.Children.toArray(i), l = c.find(Bo);
    if (l) {
      const s = l.props.children, f = c.map((d) => d === l ? u.Children.count(s) > 1 ? u.Children.only(null) : u.isValidElement(s) ? s.props.children : null : d);
      return x.jsx(t, { ...a, ref: o, children: u.isValidElement(s) ? u.cloneElement(s, void 0, f) : null });
    }
    return x.jsx(t, { ...a, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
function $o(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (u.isValidElement(o)) {
      const a = Uo(o), c = Ho(i, o.props);
      return o.type !== u.Fragment && (c.ref = r ? we(r, a) : a), u.cloneElement(o, c);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Wo = /* @__PURE__ */ Symbol("radix.slottable");
function Bo(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Wo;
}
function Ho(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...c) => {
      const l = i(...c);
      return o(...c), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Uo(e) {
  var _a2, _b;
  let t = (_a2 = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : _a2.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (_b = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : _b.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Ln(e) {
  const t = e + "CollectionProvider", [n, r] = Le(t), [o, i] = n(t, { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }), a = (v) => {
    const { scope: g, children: w } = v, R = pe.useRef(null), S = pe.useRef(/* @__PURE__ */ new Map()).current;
    return x.jsx(o, { scope: g, itemMap: S, collectionRef: R, children: w });
  };
  a.displayName = t;
  const c = e + "CollectionSlot", l = on(c), s = pe.forwardRef((v, g) => {
    const { scope: w, children: R } = v, S = i(c, w), C = Q(g, S.collectionRef);
    return x.jsx(l, { ref: C, children: R });
  });
  s.displayName = c;
  const f = e + "CollectionItemSlot", d = "data-radix-collection-item", m = on(f), h = pe.forwardRef((v, g) => {
    const { scope: w, children: R, ...S } = v, C = pe.useRef(null), _ = Q(g, C), P = i(f, w);
    return pe.useEffect(() => (P.itemMap.set(C, { ref: C, ...S }), () => {
      P.itemMap.delete(C);
    })), x.jsx(m, { [d]: "", ref: _, children: R });
  });
  h.displayName = f;
  function y(v) {
    const g = i(e + "CollectionConsumer", v);
    return pe.useCallback(() => {
      const R = g.collectionRef.current;
      if (!R) return [];
      const S = Array.from(R.querySelectorAll(`[${d}]`));
      return Array.from(g.itemMap.values()).sort((P, b) => S.indexOf(P.ref.current) - S.indexOf(b.ref.current));
    }, [g.collectionRef, g.itemMap]);
  }
  return [{ Provider: a, Slot: s, ItemSlot: h }, y, r];
}
var Vo = u.createContext(void 0);
function kn(e) {
  const t = u.useContext(Vo);
  return e || t || "ltr";
}
function le(e) {
  const t = u.useRef(e);
  return u.useEffect(() => {
    t.current = e;
  }), u.useMemo(() => (...n) => {
    var _a2;
    return (_a2 = t.current) == null ? void 0 : _a2.call(t, ...n);
  }, []);
}
function Go(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = le(e);
  u.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: true }), () => t.removeEventListener("keydown", r, { capture: true });
  }, [n, t]);
}
var Ko = "DismissableLayer", _t = "dismissableLayer.update", Yo = "dismissableLayer.pointerDownOutside", zo = "dismissableLayer.focusOutside", sn, Fn = u.createContext({ layers: /* @__PURE__ */ new Set(), layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(), branches: /* @__PURE__ */ new Set() }), jn = u.forwardRef((e, t) => {
  const { disableOutsidePointerEvents: n = false, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: a, onDismiss: c, ...l } = e, s = u.useContext(Fn), [f, d] = u.useState(null), m = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = u.useState({}), y = Q(t, (b) => d(b)), v = Array.from(s.layers), [g] = [...s.layersWithOutsidePointerEventsDisabled].slice(-1), w = v.indexOf(g), R = f ? v.indexOf(f) : -1, S = s.layersWithOutsidePointerEventsDisabled.size > 0, C = R >= w, _ = Zo((b) => {
    const I = b.target, W = [...s.branches].some((j) => j.contains(I));
    !C || W || (o == null ? void 0 : o(b), a == null ? void 0 : a(b), b.defaultPrevented || (c == null ? void 0 : c()));
  }, m), P = Jo((b) => {
    const I = b.target;
    [...s.branches].some((j) => j.contains(I)) || (i == null ? void 0 : i(b), a == null ? void 0 : a(b), b.defaultPrevented || (c == null ? void 0 : c()));
  }, m);
  return Go((b) => {
    R === s.layers.size - 1 && (r == null ? void 0 : r(b), !b.defaultPrevented && c && (b.preventDefault(), c()));
  }, m), u.useEffect(() => {
    if (f) return n && (s.layersWithOutsidePointerEventsDisabled.size === 0 && (sn = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), s.layersWithOutsidePointerEventsDisabled.add(f)), s.layers.add(f), cn(), () => {
      n && s.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = sn);
    };
  }, [f, m, n, s]), u.useEffect(() => () => {
    f && (s.layers.delete(f), s.layersWithOutsidePointerEventsDisabled.delete(f), cn());
  }, [f, s]), u.useEffect(() => {
    const b = () => h({});
    return document.addEventListener(_t, b), () => document.removeEventListener(_t, b);
  }, []), x.jsx(Z.div, { ...l, ref: y, style: { pointerEvents: S ? C ? "auto" : "none" : void 0, ...e.style }, onFocusCapture: $(e.onFocusCapture, P.onFocusCapture), onBlurCapture: $(e.onBlurCapture, P.onBlurCapture), onPointerDownCapture: $(e.onPointerDownCapture, _.onPointerDownCapture) });
});
jn.displayName = Ko;
var Xo = "DismissableLayerBranch", qo = u.forwardRef((e, t) => {
  const n = u.useContext(Fn), r = u.useRef(null), o = Q(t, r);
  return u.useEffect(() => {
    const i = r.current;
    if (i) return n.branches.add(i), () => {
      n.branches.delete(i);
    };
  }, [n.branches]), x.jsx(Z.div, { ...e, ref: o });
});
qo.displayName = Xo;
function Zo(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = le(e), r = u.useRef(false), o = u.useRef(() => {
  });
  return u.useEffect(() => {
    const i = (c) => {
      if (c.target && !r.current) {
        let l = function() {
          $n(Yo, n, s, { discrete: true });
        };
        const s = { originalEvent: c };
        c.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: true })) : l();
      } else t.removeEventListener("click", o.current);
      r.current = false;
    }, a = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(a), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
    };
  }, [t, n]), { onPointerDownCapture: () => r.current = true };
}
function Jo(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = le(e), r = u.useRef(false);
  return u.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && $n(zo, n, { originalEvent: i }, { discrete: false });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), { onFocusCapture: () => r.current = true, onBlurCapture: () => r.current = false };
}
function cn() {
  const e = new CustomEvent(_t);
  document.dispatchEvent(e);
}
function $n(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: false, cancelable: true, detail: n });
  t && o.addEventListener(e, t, { once: true }), r ? Nn(o, i) : o.dispatchEvent(i);
}
var ht = 0;
function Qo() {
  u.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? an()), document.body.insertAdjacentElement("beforeend", e[1] ?? an()), ht++, () => {
      ht === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), ht--;
    };
  }, []);
}
function an() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var gt = "focusScope.autoFocusOnMount", yt = "focusScope.autoFocusOnUnmount", un = { bubbles: false, cancelable: true }, ei = "FocusScope", Wn = u.forwardRef((e, t) => {
  const { loop: n = false, trapped: r = false, onMountAutoFocus: o, onUnmountAutoFocus: i, ...a } = e, [c, l] = u.useState(null), s = le(o), f = le(i), d = u.useRef(null), m = Q(t, (v) => l(v)), h = u.useRef({ paused: false, pause() {
    this.paused = true;
  }, resume() {
    this.paused = false;
  } }).current;
  u.useEffect(() => {
    if (r) {
      let v = function(S) {
        if (h.paused || !c) return;
        const C = S.target;
        c.contains(C) ? d.current = C : me(d.current, { select: true });
      }, g = function(S) {
        if (h.paused || !c) return;
        const C = S.relatedTarget;
        C !== null && (c.contains(C) || me(d.current, { select: true }));
      }, w = function(S) {
        if (document.activeElement === document.body) for (const _ of S) _.removedNodes.length > 0 && me(c);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", g);
      const R = new MutationObserver(w);
      return c && R.observe(c, { childList: true, subtree: true }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", g), R.disconnect();
      };
    }
  }, [r, c, h.paused]), u.useEffect(() => {
    if (c) {
      fn.add(h);
      const v = document.activeElement;
      if (!c.contains(v)) {
        const w = new CustomEvent(gt, un);
        c.addEventListener(gt, s), c.dispatchEvent(w), w.defaultPrevented || (ti(si(Bn(c)), { select: true }), document.activeElement === v && me(c));
      }
      return () => {
        c.removeEventListener(gt, s), setTimeout(() => {
          const w = new CustomEvent(yt, un);
          c.addEventListener(yt, f), c.dispatchEvent(w), w.defaultPrevented || me(v ?? document.body, { select: true }), c.removeEventListener(yt, f), fn.remove(h);
        }, 0);
      };
    }
  }, [c, s, f, h]);
  const y = u.useCallback((v) => {
    if (!n && !r || h.paused) return;
    const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, w = document.activeElement;
    if (g && w) {
      const R = v.currentTarget, [S, C] = ni(R);
      S && C ? !v.shiftKey && w === C ? (v.preventDefault(), n && me(S, { select: true })) : v.shiftKey && w === S && (v.preventDefault(), n && me(C, { select: true })) : w === R && v.preventDefault();
    }
  }, [n, r, h.paused]);
  return x.jsx(Z.div, { tabIndex: -1, ...a, ref: m, onKeyDown: y });
});
Wn.displayName = ei;
function ti(e, { select: t = false } = {}) {
  const n = document.activeElement;
  for (const r of e) if (me(r, { select: t }), document.activeElement !== n) return;
}
function ni(e) {
  const t = Bn(e), n = ln(t, e), r = ln(t.reverse(), e);
  return [n, r];
}
function Bn(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (r) => {
    const o = r.tagName === "INPUT" && r.type === "hidden";
    return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function ln(e, t) {
  for (const n of e) if (!ri(n, { upTo: t })) return n;
}
function ri(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return true;
  for (; e; ) {
    if (t !== void 0 && e === t) return false;
    if (getComputedStyle(e).display === "none") return true;
    e = e.parentElement;
  }
  return false;
}
function oi(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function me(e, { select: t = false } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: true }), e !== n && oi(e) && t && e.select();
  }
}
var fn = ii();
function ii() {
  let e = [];
  return { add(t) {
    const n = e[0];
    t !== n && (n == null ? void 0 : n.pause()), e = dn(e, t), e.unshift(t);
  }, remove(t) {
    var _a2;
    e = dn(e, t), (_a2 = e[0]) == null ? void 0 : _a2.resume();
  } };
}
function dn(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function si(e) {
  return e.filter((t) => t.tagName !== "A");
}
var ci = Nt[" useId ".trim().toString()] || (() => {
}), ai = 0;
function At(e) {
  const [t, n] = u.useState(ci());
  return ve(() => {
    n((r) => r ?? String(ai++));
  }, [e]), t ? `radix-${t}` : "";
}
const ui = ["top", "right", "bottom", "left"], he = Math.min, ee = Math.max, Je = Math.round, He = Math.floor, ce = (e) => ({ x: e, y: e }), li = { left: "right", right: "left", bottom: "top", top: "bottom" }, fi = { start: "end", end: "start" };
function Pt(e, t, n) {
  return ee(e, he(t, n));
}
function fe(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function de(e) {
  return e.split("-")[0];
}
function Pe(e) {
  return e.split("-")[1];
}
function kt(e) {
  return e === "x" ? "y" : "x";
}
function Ft(e) {
  return e === "y" ? "height" : "width";
}
const di = /* @__PURE__ */ new Set(["top", "bottom"]);
function se(e) {
  return di.has(de(e)) ? "y" : "x";
}
function jt(e) {
  return kt(se(e));
}
function pi(e, t, n) {
  n === void 0 && (n = false);
  const r = Pe(e), o = jt(e), i = Ft(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = Qe(a)), [a, Qe(a)];
}
function mi(e) {
  const t = Qe(e);
  return [Ot(e), t, Ot(t)];
}
function Ot(e) {
  return e.replace(/start|end/g, (t) => fi[t]);
}
const pn = ["left", "right"], mn = ["right", "left"], vi = ["top", "bottom"], hi = ["bottom", "top"];
function gi(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? mn : pn : t ? pn : mn;
    case "left":
    case "right":
      return t ? vi : hi;
    default:
      return [];
  }
}
function yi(e, t, n, r) {
  const o = Pe(e);
  let i = gi(de(e), n === "start", r);
  return o && (i = i.map((a) => a + "-" + o), t && (i = i.concat(i.map(Ot)))), i;
}
function Qe(e) {
  return e.replace(/left|right|bottom|top/g, (t) => li[t]);
}
function wi(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Hn(e) {
  return typeof e != "number" ? wi(e) : { top: e, right: e, bottom: e, left: e };
}
function et(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return { width: r, height: o, top: n, left: t, right: t + r, bottom: n + o, x: t, y: n };
}
function vn(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = se(t), a = jt(t), c = Ft(a), l = de(t), s = i === "y", f = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, m = r[c] / 2 - o[c] / 2;
  let h;
  switch (l) {
    case "top":
      h = { x: f, y: r.y - o.height };
      break;
    case "bottom":
      h = { x: f, y: r.y + r.height };
      break;
    case "right":
      h = { x: r.x + r.width, y: d };
      break;
    case "left":
      h = { x: r.x - o.width, y: d };
      break;
    default:
      h = { x: r.x, y: r.y };
  }
  switch (Pe(t)) {
    case "start":
      h[a] -= m * (n && s ? -1 : 1);
      break;
    case "end":
      h[a] += m * (n && s ? -1 : 1);
      break;
  }
  return h;
}
async function Ei(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: i, rects: a, elements: c, strategy: l } = e, { boundary: s = "clippingAncestors", rootBoundary: f = "viewport", elementContext: d = "floating", altBoundary: m = false, padding: h = 0 } = fe(t, e), y = Hn(h), g = c[m ? d === "floating" ? "reference" : "floating" : d], w = et(await i.getClippingRect({ element: (n = await (i.isElement == null ? void 0 : i.isElement(g))) == null || n ? g : g.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(c.floating)), boundary: s, rootBoundary: f, strategy: l })), R = d === "floating" ? { x: r, y: o, width: a.floating.width, height: a.floating.height } : a.reference, S = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c.floating)), C = await (i.isElement == null ? void 0 : i.isElement(S)) ? await (i.getScale == null ? void 0 : i.getScale(S)) || { x: 1, y: 1 } : { x: 1, y: 1 }, _ = et(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: c, rect: R, offsetParent: S, strategy: l }) : R);
  return { top: (w.top - _.top + y.top) / C.y, bottom: (_.bottom - w.bottom + y.bottom) / C.y, left: (w.left - _.left + y.left) / C.x, right: (_.right - w.right + y.right) / C.x };
}
const xi = async (e, t, n) => {
  const { placement: r = "bottom", strategy: o = "absolute", middleware: i = [], platform: a } = n, c = i.filter(Boolean), l = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let s = await a.getElementRects({ reference: e, floating: t, strategy: o }), { x: f, y: d } = vn(s, r, l), m = r, h = {}, y = 0;
  for (let g = 0; g < c.length; g++) {
    var v;
    const { name: w, fn: R } = c[g], { x: S, y: C, data: _, reset: P } = await R({ x: f, y: d, initialPlacement: r, placement: m, strategy: o, middlewareData: h, rects: s, platform: { ...a, detectOverflow: (v = a.detectOverflow) != null ? v : Ei }, elements: { reference: e, floating: t } });
    f = S ?? f, d = C ?? d, h = { ...h, [w]: { ...h[w], ..._ } }, P && y <= 50 && (y++, typeof P == "object" && (P.placement && (m = P.placement), P.rects && (s = P.rects === true ? await a.getElementRects({ reference: e, floating: t, strategy: o }) : P.rects), { x: f, y: d } = vn(s, m, l)), g = -1);
  }
  return { x: f, y: d, placement: m, strategy: o, middlewareData: h };
}, Ci = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { x: n, y: r, placement: o, rects: i, platform: a, elements: c, middlewareData: l } = t, { element: s, padding: f = 0 } = fe(e, t) || {};
  if (s == null) return {};
  const d = Hn(f), m = { x: n, y: r }, h = jt(o), y = Ft(h), v = await a.getDimensions(s), g = h === "y", w = g ? "top" : "left", R = g ? "bottom" : "right", S = g ? "clientHeight" : "clientWidth", C = i.reference[y] + i.reference[h] - m[h] - i.floating[y], _ = m[h] - i.reference[h], P = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s));
  let b = P ? P[S] : 0;
  (!b || !await (a.isElement == null ? void 0 : a.isElement(P))) && (b = c.floating[S] || i.floating[y]);
  const I = C / 2 - _ / 2, W = b / 2 - v[y] / 2 - 1, j = he(d[w], W), B = he(d[R], W), V = j, U = b - v[y] - B, H = b / 2 - v[y] / 2 + I, K = Pt(V, H, U), L = !l.arrow && Pe(o) != null && H !== K && i.reference[y] / 2 - (H < V ? j : B) - v[y] / 2 < 0, G = L ? H < V ? H - V : H - U : 0;
  return { [h]: m[h] + G, data: { [h]: K, centerOffset: H - K - G, ...L && { alignmentOffset: G } }, reset: L };
} }), Si = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n, r;
    const { placement: o, middlewareData: i, rects: a, initialPlacement: c, platform: l, elements: s } = t, { mainAxis: f = true, crossAxis: d = true, fallbackPlacements: m, fallbackStrategy: h = "bestFit", fallbackAxisSideDirection: y = "none", flipAlignment: v = true, ...g } = fe(e, t);
    if ((n = i.arrow) != null && n.alignmentOffset) return {};
    const w = de(o), R = se(c), S = de(c) === c, C = await (l.isRTL == null ? void 0 : l.isRTL(s.floating)), _ = m || (S || !v ? [Qe(c)] : mi(c)), P = y !== "none";
    !m && P && _.push(...yi(c, v, y, C));
    const b = [c, ..._], I = await l.detectOverflow(t, g), W = [];
    let j = ((r = i.flip) == null ? void 0 : r.overflows) || [];
    if (f && W.push(I[w]), d) {
      const H = pi(o, a, C);
      W.push(I[H[0]], I[H[1]]);
    }
    if (j = [...j, { placement: o, overflows: W }], !W.every((H) => H <= 0)) {
      var B, V;
      const H = (((B = i.flip) == null ? void 0 : B.index) || 0) + 1, K = b[H];
      if (K && (!(d === "alignment" ? R !== se(K) : false) || j.every((N) => se(N.placement) === R ? N.overflows[0] > 0 : true))) return { data: { index: H, overflows: j }, reset: { placement: K } };
      let L = (V = j.filter((G) => G.overflows[0] <= 0).sort((G, N) => G.overflows[1] - N.overflows[1])[0]) == null ? void 0 : V.placement;
      if (!L) switch (h) {
        case "bestFit": {
          var U;
          const G = (U = j.filter((N) => {
            if (P) {
              const A = se(N.placement);
              return A === R || A === "y";
            }
            return true;
          }).map((N) => [N.placement, N.overflows.filter((A) => A > 0).reduce((A, Y) => A + Y, 0)]).sort((N, A) => N[1] - A[1])[0]) == null ? void 0 : U[0];
          G && (L = G);
          break;
        }
        case "initialPlacement":
          L = c;
          break;
      }
      if (o !== L) return { reset: { placement: L } };
    }
    return {};
  } };
};
function hn(e, t) {
  return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width };
}
function gn(e) {
  return ui.some((t) => e[t] >= 0);
}
const bi = function(e) {
  return e === void 0 && (e = {}), { name: "hide", options: e, async fn(t) {
    const { rects: n, platform: r } = t, { strategy: o = "referenceHidden", ...i } = fe(e, t);
    switch (o) {
      case "referenceHidden": {
        const a = await r.detectOverflow(t, { ...i, elementContext: "reference" }), c = hn(a, n.reference);
        return { data: { referenceHiddenOffsets: c, referenceHidden: gn(c) } };
      }
      case "escaped": {
        const a = await r.detectOverflow(t, { ...i, altBoundary: true }), c = hn(a, n.floating);
        return { data: { escapedOffsets: c, escaped: gn(c) } };
      }
      default:
        return {};
    }
  } };
}, Un = /* @__PURE__ */ new Set(["left", "top"]);
async function Ri(e, t) {
  const { placement: n, platform: r, elements: o } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = de(n), c = Pe(n), l = se(n) === "y", s = Un.has(a) ? -1 : 1, f = i && l ? -1 : 1, d = fe(t, e);
  let { mainAxis: m, crossAxis: h, alignmentAxis: y } = typeof d == "number" ? { mainAxis: d, crossAxis: 0, alignmentAxis: null } : { mainAxis: d.mainAxis || 0, crossAxis: d.crossAxis || 0, alignmentAxis: d.alignmentAxis };
  return c && typeof y == "number" && (h = c === "end" ? y * -1 : y), l ? { x: h * f, y: m * s } : { x: m * s, y: h * f };
}
const _i = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    var n, r;
    const { x: o, y: i, placement: a, middlewareData: c } = t, l = await Ri(t, e);
    return a === ((n = c.offset) == null ? void 0 : n.placement) && (r = c.arrow) != null && r.alignmentOffset ? {} : { x: o + l.x, y: i + l.y, data: { ...l, placement: a } };
  } };
}, Ai = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: r, placement: o, platform: i } = t, { mainAxis: a = true, crossAxis: c = false, limiter: l = { fn: (w) => {
      let { x: R, y: S } = w;
      return { x: R, y: S };
    } }, ...s } = fe(e, t), f = { x: n, y: r }, d = await i.detectOverflow(t, s), m = se(de(o)), h = kt(m);
    let y = f[h], v = f[m];
    if (a) {
      const w = h === "y" ? "top" : "left", R = h === "y" ? "bottom" : "right", S = y + d[w], C = y - d[R];
      y = Pt(S, y, C);
    }
    if (c) {
      const w = m === "y" ? "top" : "left", R = m === "y" ? "bottom" : "right", S = v + d[w], C = v - d[R];
      v = Pt(S, v, C);
    }
    const g = l.fn({ ...t, [h]: y, [m]: v });
    return { ...g, data: { x: g.x - n, y: g.y - r, enabled: { [h]: a, [m]: c } } };
  } };
}, Pi = function(e) {
  return e === void 0 && (e = {}), { options: e, fn(t) {
    const { x: n, y: r, placement: o, rects: i, middlewareData: a } = t, { offset: c = 0, mainAxis: l = true, crossAxis: s = true } = fe(e, t), f = { x: n, y: r }, d = se(o), m = kt(d);
    let h = f[m], y = f[d];
    const v = fe(c, t), g = typeof v == "number" ? { mainAxis: v, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...v };
    if (l) {
      const S = m === "y" ? "height" : "width", C = i.reference[m] - i.floating[S] + g.mainAxis, _ = i.reference[m] + i.reference[S] - g.mainAxis;
      h < C ? h = C : h > _ && (h = _);
    }
    if (s) {
      var w, R;
      const S = m === "y" ? "width" : "height", C = Un.has(de(o)), _ = i.reference[d] - i.floating[S] + (C && ((w = a.offset) == null ? void 0 : w[d]) || 0) + (C ? 0 : g.crossAxis), P = i.reference[d] + i.reference[S] + (C ? 0 : ((R = a.offset) == null ? void 0 : R[d]) || 0) - (C ? g.crossAxis : 0);
      y < _ ? y = _ : y > P && (y = P);
    }
    return { [m]: h, [d]: y };
  } };
}, Oi = function(e) {
  return e === void 0 && (e = {}), { name: "size", options: e, async fn(t) {
    var n, r;
    const { placement: o, rects: i, platform: a, elements: c } = t, { apply: l = () => {
    }, ...s } = fe(e, t), f = await a.detectOverflow(t, s), d = de(o), m = Pe(o), h = se(o) === "y", { width: y, height: v } = i.floating;
    let g, w;
    d === "top" || d === "bottom" ? (g = d, w = m === (await (a.isRTL == null ? void 0 : a.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (w = d, g = m === "end" ? "top" : "bottom");
    const R = v - f.top - f.bottom, S = y - f.left - f.right, C = he(v - f[g], R), _ = he(y - f[w], S), P = !t.middlewareData.shift;
    let b = C, I = _;
    if ((n = t.middlewareData.shift) != null && n.enabled.x && (I = S), (r = t.middlewareData.shift) != null && r.enabled.y && (b = R), P && !m) {
      const j = ee(f.left, 0), B = ee(f.right, 0), V = ee(f.top, 0), U = ee(f.bottom, 0);
      h ? I = y - 2 * (j !== 0 || B !== 0 ? j + B : ee(f.left, f.right)) : b = v - 2 * (V !== 0 || U !== 0 ? V + U : ee(f.top, f.bottom));
    }
    await l({ ...t, availableWidth: I, availableHeight: b });
    const W = await a.getDimensions(c.floating);
    return y !== W.width || v !== W.height ? { reset: { rects: true } } : {};
  } };
};
function ot() {
  return typeof window < "u";
}
function Oe(e) {
  return Vn(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function te(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ue(e) {
  var t;
  return (t = (Vn(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Vn(e) {
  return ot() ? e instanceof Node || e instanceof te(e).Node : false;
}
function re(e) {
  return ot() ? e instanceof Element || e instanceof te(e).Element : false;
}
function ae(e) {
  return ot() ? e instanceof HTMLElement || e instanceof te(e).HTMLElement : false;
}
function yn(e) {
  return !ot() || typeof ShadowRoot > "u" ? false : e instanceof ShadowRoot || e instanceof te(e).ShadowRoot;
}
const Mi = /* @__PURE__ */ new Set(["inline", "contents"]);
function ke(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = oe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Mi.has(o);
}
const Ti = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Ii(e) {
  return Ti.has(Oe(e));
}
const Di = [":popover-open", ":modal"];
function it(e) {
  return Di.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return false;
    }
  });
}
const Ni = ["transform", "translate", "scale", "rotate", "perspective"], Li = ["transform", "translate", "scale", "rotate", "perspective", "filter"], ki = ["paint", "layout", "strict", "content"];
function $t(e) {
  const t = Wt(), n = re(e) ? oe(e) : e;
  return Ni.some((r) => n[r] ? n[r] !== "none" : false) || (n.containerType ? n.containerType !== "normal" : false) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : false) || !t && (n.filter ? n.filter !== "none" : false) || Li.some((r) => (n.willChange || "").includes(r)) || ki.some((r) => (n.contain || "").includes(r));
}
function Fi(e) {
  let t = ge(e);
  for (; ae(t) && !Ae(t); ) {
    if ($t(t)) return t;
    if (it(t)) return null;
    t = ge(t);
  }
  return null;
}
function Wt() {
  return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
}
const ji = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Ae(e) {
  return ji.has(Oe(e));
}
function oe(e) {
  return te(e).getComputedStyle(e);
}
function st(e) {
  return re(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function ge(e) {
  if (Oe(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || yn(e) && e.host || ue(e);
  return yn(t) ? t.host : t;
}
function Gn(e) {
  const t = ge(e);
  return Ae(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ae(t) && ke(t) ? t : Gn(t);
}
function Ie(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = true);
  const o = Gn(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = te(o);
  if (i) {
    const c = Mt(a);
    return t.concat(a, a.visualViewport || [], ke(o) ? o : [], c && n ? Ie(c) : []);
  }
  return t.concat(o, Ie(o, [], n));
}
function Mt(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Kn(e) {
  const t = oe(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ae(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, c = Je(n) !== i || Je(r) !== a;
  return c && (n = i, r = a), { width: n, height: r, $: c };
}
function Bt(e) {
  return re(e) ? e : e.contextElement;
}
function Re(e) {
  const t = Bt(e);
  if (!ae(t)) return ce(1);
  const n = t.getBoundingClientRect(), { width: r, height: o, $: i } = Kn(t);
  let a = (i ? Je(n.width) : n.width) / r, c = (i ? Je(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!c || !Number.isFinite(c)) && (c = 1), { x: a, y: c };
}
const $i = ce(0);
function Yn(e) {
  const t = te(e);
  return !Wt() || !t.visualViewport ? $i : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Wi(e, t, n) {
  return t === void 0 && (t = false), !n || t && n !== te(e) ? false : t;
}
function ye(e, t, n, r) {
  t === void 0 && (t = false), n === void 0 && (n = false);
  const o = e.getBoundingClientRect(), i = Bt(e);
  let a = ce(1);
  t && (r ? re(r) && (a = Re(r)) : a = Re(e));
  const c = Wi(i, n, r) ? Yn(i) : ce(0);
  let l = (o.left + c.x) / a.x, s = (o.top + c.y) / a.y, f = o.width / a.x, d = o.height / a.y;
  if (i) {
    const m = te(i), h = r && re(r) ? te(r) : r;
    let y = m, v = Mt(y);
    for (; v && r && h !== y; ) {
      const g = Re(v), w = v.getBoundingClientRect(), R = oe(v), S = w.left + (v.clientLeft + parseFloat(R.paddingLeft)) * g.x, C = w.top + (v.clientTop + parseFloat(R.paddingTop)) * g.y;
      l *= g.x, s *= g.y, f *= g.x, d *= g.y, l += S, s += C, y = te(v), v = Mt(y);
    }
  }
  return et({ width: f, height: d, x: l, y: s });
}
function ct(e, t) {
  const n = st(e).scrollLeft;
  return t ? t.left + n : ye(ue(e)).left + n;
}
function zn(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - ct(e, n), o = n.top + t.scrollTop;
  return { x: r, y: o };
}
function Bi(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const i = o === "fixed", a = ue(r), c = t ? it(t.floating) : false;
  if (r === a || c && i) return n;
  let l = { scrollLeft: 0, scrollTop: 0 }, s = ce(1);
  const f = ce(0), d = ae(r);
  if ((d || !d && !i) && ((Oe(r) !== "body" || ke(a)) && (l = st(r)), ae(r))) {
    const h = ye(r);
    s = Re(r), f.x = h.x + r.clientLeft, f.y = h.y + r.clientTop;
  }
  const m = a && !d && !i ? zn(a, l) : ce(0);
  return { width: n.width * s.x, height: n.height * s.y, x: n.x * s.x - l.scrollLeft * s.x + f.x + m.x, y: n.y * s.y - l.scrollTop * s.y + f.y + m.y };
}
function Hi(e) {
  return Array.from(e.getClientRects());
}
function Ui(e) {
  const t = ue(e), n = st(e), r = e.ownerDocument.body, o = ee(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = ee(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + ct(e);
  const c = -n.scrollTop;
  return oe(r).direction === "rtl" && (a += ee(t.clientWidth, r.clientWidth) - o), { width: o, height: i, x: a, y: c };
}
const wn = 25;
function Vi(e, t) {
  const n = te(e), r = ue(e), o = n.visualViewport;
  let i = r.clientWidth, a = r.clientHeight, c = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    const f = Wt();
    (!f || f && t === "fixed") && (c = o.offsetLeft, l = o.offsetTop);
  }
  const s = ct(r);
  if (s <= 0) {
    const f = r.ownerDocument, d = f.body, m = getComputedStyle(d), h = f.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, y = Math.abs(r.clientWidth - d.clientWidth - h);
    y <= wn && (i -= y);
  } else s <= wn && (i += s);
  return { width: i, height: a, x: c, y: l };
}
const Gi = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Ki(e, t) {
  const n = ye(e, true, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = ae(e) ? Re(e) : ce(1), a = e.clientWidth * i.x, c = e.clientHeight * i.y, l = o * i.x, s = r * i.y;
  return { width: a, height: c, x: l, y: s };
}
function En(e, t, n) {
  let r;
  if (t === "viewport") r = Vi(e, n);
  else if (t === "document") r = Ui(ue(e));
  else if (re(t)) r = Ki(t, n);
  else {
    const o = Yn(e);
    r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return et(r);
}
function Xn(e, t) {
  const n = ge(e);
  return n === t || !re(n) || Ae(n) ? false : oe(n).position === "fixed" || Xn(n, t);
}
function Yi(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Ie(e, [], false).filter((c) => re(c) && Oe(c) !== "body"), o = null;
  const i = oe(e).position === "fixed";
  let a = i ? ge(e) : e;
  for (; re(a) && !Ae(a); ) {
    const c = oe(a), l = $t(a);
    !l && c.position === "fixed" && (o = null), (i ? !l && !o : !l && c.position === "static" && !!o && Gi.has(o.position) || ke(a) && !l && Xn(e, a)) ? r = r.filter((f) => f !== a) : o = c, a = ge(a);
  }
  return t.set(e, r), r;
}
function zi(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const a = [...n === "clippingAncestors" ? it(t) ? [] : Yi(t, this._c) : [].concat(n), r], c = a[0], l = a.reduce((s, f) => {
    const d = En(t, f, o);
    return s.top = ee(d.top, s.top), s.right = he(d.right, s.right), s.bottom = he(d.bottom, s.bottom), s.left = ee(d.left, s.left), s;
  }, En(t, c, o));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}
function Xi(e) {
  const { width: t, height: n } = Kn(e);
  return { width: t, height: n };
}
function qi(e, t, n) {
  const r = ae(t), o = ue(t), i = n === "fixed", a = ye(e, true, i, t);
  let c = { scrollLeft: 0, scrollTop: 0 };
  const l = ce(0);
  function s() {
    l.x = ct(o);
  }
  if (r || !r && !i) if ((Oe(t) !== "body" || ke(o)) && (c = st(t)), r) {
    const h = ye(t, true, i, t);
    l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
  } else o && s();
  i && !r && o && s();
  const f = o && !r && !i ? zn(o, c) : ce(0), d = a.left + c.scrollLeft - l.x - f.x, m = a.top + c.scrollTop - l.y - f.y;
  return { x: d, y: m, width: a.width, height: a.height };
}
function wt(e) {
  return oe(e).position === "static";
}
function xn(e, t) {
  if (!ae(e) || oe(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return ue(e) === n && (n = n.ownerDocument.body), n;
}
function qn(e, t) {
  const n = te(e);
  if (it(e)) return n;
  if (!ae(e)) {
    let o = ge(e);
    for (; o && !Ae(o); ) {
      if (re(o) && !wt(o)) return o;
      o = ge(o);
    }
    return n;
  }
  let r = xn(e, t);
  for (; r && Ii(r) && wt(r); ) r = xn(r, t);
  return r && Ae(r) && wt(r) && !$t(r) ? n : r || Fi(e) || n;
}
const Zi = async function(e) {
  const t = this.getOffsetParent || qn, n = this.getDimensions, r = await n(e.floating);
  return { reference: qi(e.reference, await t(e.floating), e.strategy), floating: { x: 0, y: 0, width: r.width, height: r.height } };
};
function Ji(e) {
  return oe(e).direction === "rtl";
}
const Qi = { convertOffsetParentRelativeRectToViewportRelativeRect: Bi, getDocumentElement: ue, getClippingRect: zi, getOffsetParent: qn, getElementRects: Zi, getClientRects: Hi, getDimensions: Xi, getScale: Re, isElement: re, isRTL: Ji };
function Zn(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function es(e, t) {
  let n = null, r;
  const o = ue(e);
  function i() {
    var c;
    clearTimeout(r), (c = n) == null || c.disconnect(), n = null;
  }
  function a(c, l) {
    c === void 0 && (c = false), l === void 0 && (l = 1), i();
    const s = e.getBoundingClientRect(), { left: f, top: d, width: m, height: h } = s;
    if (c || t(), !m || !h) return;
    const y = He(d), v = He(o.clientWidth - (f + m)), g = He(o.clientHeight - (d + h)), w = He(f), S = { rootMargin: -y + "px " + -v + "px " + -g + "px " + -w + "px", threshold: ee(0, he(1, l)) || 1 };
    let C = true;
    function _(P) {
      const b = P[0].intersectionRatio;
      if (b !== l) {
        if (!C) return a();
        b ? a(false, b) : r = setTimeout(() => {
          a(false, 1e-7);
        }, 1e3);
      }
      b === 1 && !Zn(s, e.getBoundingClientRect()) && a(), C = false;
    }
    try {
      n = new IntersectionObserver(_, { ...S, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(_, S);
    }
    n.observe(e);
  }
  return a(true), i;
}
function ts(e, t, n, r) {
  r === void 0 && (r = {});
  const { ancestorScroll: o = true, ancestorResize: i = true, elementResize: a = typeof ResizeObserver == "function", layoutShift: c = typeof IntersectionObserver == "function", animationFrame: l = false } = r, s = Bt(e), f = o || i ? [...s ? Ie(s) : [], ...Ie(t)] : [];
  f.forEach((w) => {
    o && w.addEventListener("scroll", n, { passive: true }), i && w.addEventListener("resize", n);
  });
  const d = s && c ? es(s, n) : null;
  let m = -1, h = null;
  a && (h = new ResizeObserver((w) => {
    let [R] = w;
    R && R.target === s && h && (h.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var S;
      (S = h) == null || S.observe(t);
    })), n();
  }), s && !l && h.observe(s), h.observe(t));
  let y, v = l ? ye(e) : null;
  l && g();
  function g() {
    const w = ye(e);
    v && !Zn(v, w) && n(), v = w, y = requestAnimationFrame(g);
  }
  return n(), () => {
    var w;
    f.forEach((R) => {
      o && R.removeEventListener("scroll", n), i && R.removeEventListener("resize", n);
    }), d == null ? void 0 : d(), (w = h) == null || w.disconnect(), h = null, l && cancelAnimationFrame(y);
  };
}
const ns = _i, rs = Ai, os = Si, is = Oi, ss = bi, Cn = Ci, cs = Pi, as = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = { platform: Qi, ...n }, i = { ...o.platform, _c: r };
  return xi(e, t, { ...o, platform: i });
};
var us = typeof document < "u", ls = function() {
}, ze = us ? u.useLayoutEffect : ls;
function tt(e, t) {
  if (e === t) return true;
  if (typeof e != typeof t) return false;
  if (typeof e == "function" && e.toString() === t.toString()) return true;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return false;
      for (r = n; r-- !== 0; ) if (!tt(e[r], t[r])) return false;
      return true;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return false;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return false;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !tt(e[i], t[i])) return false;
    }
    return true;
  }
  return e !== e && t !== t;
}
function Jn(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Sn(e, t) {
  const n = Jn(e);
  return Math.round(t * n) / n;
}
function Et(e) {
  const t = u.useRef(e);
  return ze(() => {
    t.current = e;
  }), t;
}
function fs(e) {
  e === void 0 && (e = {});
  const { placement: t = "bottom", strategy: n = "absolute", middleware: r = [], platform: o, elements: { reference: i, floating: a } = {}, transform: c = true, whileElementsMounted: l, open: s } = e, [f, d] = u.useState({ x: 0, y: 0, strategy: n, placement: t, middlewareData: {}, isPositioned: false }), [m, h] = u.useState(r);
  tt(m, r) || h(r);
  const [y, v] = u.useState(null), [g, w] = u.useState(null), R = u.useCallback((N) => {
    N !== P.current && (P.current = N, v(N));
  }, []), S = u.useCallback((N) => {
    N !== b.current && (b.current = N, w(N));
  }, []), C = i || y, _ = a || g, P = u.useRef(null), b = u.useRef(null), I = u.useRef(f), W = l != null, j = Et(l), B = Et(o), V = Et(s), U = u.useCallback(() => {
    if (!P.current || !b.current) return;
    const N = { placement: t, strategy: n, middleware: m };
    B.current && (N.platform = B.current), as(P.current, b.current, N).then((A) => {
      const Y = { ...A, isPositioned: V.current !== false };
      H.current && !tt(I.current, Y) && (I.current = Y, Lt.flushSync(() => {
        d(Y);
      }));
    });
  }, [m, t, n, B, V]);
  ze(() => {
    s === false && I.current.isPositioned && (I.current.isPositioned = false, d((N) => ({ ...N, isPositioned: false })));
  }, [s]);
  const H = u.useRef(false);
  ze(() => (H.current = true, () => {
    H.current = false;
  }), []), ze(() => {
    if (C && (P.current = C), _ && (b.current = _), C && _) {
      if (j.current) return j.current(C, _, U);
      U();
    }
  }, [C, _, U, j, W]);
  const K = u.useMemo(() => ({ reference: P, floating: b, setReference: R, setFloating: S }), [R, S]), L = u.useMemo(() => ({ reference: C, floating: _ }), [C, _]), G = u.useMemo(() => {
    const N = { position: n, left: 0, top: 0 };
    if (!L.floating) return N;
    const A = Sn(L.floating, f.x), Y = Sn(L.floating, f.y);
    return c ? { ...N, transform: "translate(" + A + "px, " + Y + "px)", ...Jn(L.floating) >= 1.5 && { willChange: "transform" } } : { position: n, left: A, top: Y };
  }, [n, c, L.floating, f.x, f.y]);
  return u.useMemo(() => ({ ...f, update: U, refs: K, elements: L, floatingStyles: G }), [f, U, K, L, G]);
}
const ds = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return { name: "arrow", options: e, fn(n) {
    const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
    return r && t(r) ? r.current != null ? Cn({ element: r.current, padding: o }).fn(n) : {} : r ? Cn({ element: r, padding: o }).fn(n) : {};
  } };
}, ps = (e, t) => ({ ...ns(e), options: [e, t] }), ms = (e, t) => ({ ...rs(e), options: [e, t] }), vs = (e, t) => ({ ...cs(e), options: [e, t] }), hs = (e, t) => ({ ...os(e), options: [e, t] }), gs = (e, t) => ({ ...is(e), options: [e, t] }), ys = (e, t) => ({ ...ss(e), options: [e, t] }), ws = (e, t) => ({ ...ds(e), options: [e, t] });
var Es = "Arrow", Qn = u.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...i } = e;
  return x.jsx(Z.svg, { ...i, ref: t, width: r, height: o, viewBox: "0 0 30 10", preserveAspectRatio: "none", children: e.asChild ? n : x.jsx("polygon", { points: "0,0 30,0 15,10" }) });
});
Qn.displayName = Es;
var xs = Qn;
function Cs(e) {
  const [t, n] = u.useState(void 0);
  return ve(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length) return;
        const i = o[0];
        let a, c;
        if ("borderBoxSize" in i) {
          const l = i.borderBoxSize, s = Array.isArray(l) ? l[0] : l;
          a = s.inlineSize, c = s.blockSize;
        } else a = e.offsetWidth, c = e.offsetHeight;
        n({ width: a, height: c });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else n(void 0);
  }, [e]), t;
}
var Ht = "Popper", [er, tr] = Le(Ht), [Ss, nr] = er(Ht), rr = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = u.useState(null);
  return x.jsx(Ss, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
rr.displayName = Ht;
var or = "PopperAnchor", ir = u.forwardRef((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, i = nr(or, n), a = u.useRef(null), c = Q(t, a), l = u.useRef(null);
  return u.useEffect(() => {
    const s = l.current;
    l.current = (r == null ? void 0 : r.current) || a.current, s !== l.current && i.onAnchorChange(l.current);
  }), r ? null : x.jsx(Z.div, { ...o, ref: c });
});
ir.displayName = or;
var Ut = "PopperContent", [bs, Rs] = er(Ut), sr = u.forwardRef((e, t) => {
  var _a2, _b, _c2, _d, _e2, _f;
  const { __scopePopper: n, side: r = "bottom", sideOffset: o = 0, align: i = "center", alignOffset: a = 0, arrowPadding: c = 0, avoidCollisions: l = true, collisionBoundary: s = [], collisionPadding: f = 0, sticky: d = "partial", hideWhenDetached: m = false, updatePositionStrategy: h = "optimized", onPlaced: y, ...v } = e, g = nr(Ut, n), [w, R] = u.useState(null), S = Q(t, (T) => R(T)), [C, _] = u.useState(null), P = Cs(C), b = (P == null ? void 0 : P.width) ?? 0, I = (P == null ? void 0 : P.height) ?? 0, W = r + (i !== "center" ? "-" + i : ""), j = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, B = Array.isArray(s) ? s : [s], V = B.length > 0, U = { padding: j, boundary: B.filter(As), altBoundary: V }, { refs: H, floatingStyles: K, placement: L, isPositioned: G, middlewareData: N } = fs({ strategy: "fixed", placement: W, whileElementsMounted: (...T) => ts(...T, { animationFrame: h === "always" }), elements: { reference: g.anchor }, middleware: [ps({ mainAxis: o + I, alignmentAxis: a }), l && ms({ mainAxis: true, crossAxis: false, limiter: d === "partial" ? vs() : void 0, ...U }), l && hs({ ...U }), gs({ ...U, apply: ({ elements: T, rects: z, availableWidth: X, availableHeight: dt }) => {
    const { width: lo, height: fo } = z.reference, Be = T.floating.style;
    Be.setProperty("--radix-popper-available-width", `${X}px`), Be.setProperty("--radix-popper-available-height", `${dt}px`), Be.setProperty("--radix-popper-anchor-width", `${lo}px`), Be.setProperty("--radix-popper-anchor-height", `${fo}px`);
  } }), C && ws({ element: C, padding: c }), Ps({ arrowWidth: b, arrowHeight: I }), m && ys({ strategy: "referenceHidden", ...U })] }), [A, Y] = ur(L), p = le(y);
  ve(() => {
    G && (p == null ? void 0 : p());
  }, [G, p]);
  const E = (_a2 = N.arrow) == null ? void 0 : _a2.x, M = (_b = N.arrow) == null ? void 0 : _b.y, O = ((_c2 = N.arrow) == null ? void 0 : _c2.centerOffset) !== 0, [k, F] = u.useState();
  return ve(() => {
    w && F(window.getComputedStyle(w).zIndex);
  }, [w]), x.jsx("div", { ref: H.setFloating, "data-radix-popper-content-wrapper": "", style: { ...K, transform: G ? K.transform : "translate(0, -200%)", minWidth: "max-content", zIndex: k, "--radix-popper-transform-origin": [(_d = N.transformOrigin) == null ? void 0 : _d.x, (_e2 = N.transformOrigin) == null ? void 0 : _e2.y].join(" "), ...((_f = N.hide) == null ? void 0 : _f.referenceHidden) && { visibility: "hidden", pointerEvents: "none" } }, dir: e.dir, children: x.jsx(bs, { scope: n, placedSide: A, onArrowChange: _, arrowX: E, arrowY: M, shouldHideArrow: O, children: x.jsx(Z.div, { "data-side": A, "data-align": Y, ...v, ref: S, style: { ...v.style, animation: G ? void 0 : "none" } }) }) });
});
sr.displayName = Ut;
var cr = "PopperArrow", _s = { top: "bottom", right: "left", bottom: "top", left: "right" }, ar = u.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, i = Rs(cr, r), a = _s[i.placedSide];
  return x.jsx("span", { ref: i.onArrowChange, style: { position: "absolute", left: i.arrowX, top: i.arrowY, [a]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[i.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[i.placedSide], visibility: i.shouldHideArrow ? "hidden" : void 0 }, children: x.jsx(xs, { ...o, ref: n, style: { ...o.style, display: "block" } }) });
});
ar.displayName = cr;
function As(e) {
  return e !== null;
}
var Ps = (e) => ({ name: "transformOrigin", options: e, fn(t) {
  var _a2, _b, _c2;
  const { placement: n, rects: r, middlewareData: o } = t, a = ((_a2 = o.arrow) == null ? void 0 : _a2.centerOffset) !== 0, c = a ? 0 : e.arrowWidth, l = a ? 0 : e.arrowHeight, [s, f] = ur(n), d = { start: "0%", center: "50%", end: "100%" }[f], m = (((_b = o.arrow) == null ? void 0 : _b.x) ?? 0) + c / 2, h = (((_c2 = o.arrow) == null ? void 0 : _c2.y) ?? 0) + l / 2;
  let y = "", v = "";
  return s === "bottom" ? (y = a ? d : `${m}px`, v = `${-l}px`) : s === "top" ? (y = a ? d : `${m}px`, v = `${r.floating.height + l}px`) : s === "right" ? (y = `${-l}px`, v = a ? d : `${h}px`) : s === "left" && (y = `${r.floating.width + l}px`, v = a ? d : `${h}px`), { data: { x: y, y: v } };
} });
function ur(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Os = rr, Ms = ir, Ts = sr, Is = ar, Ds = "Portal", lr = u.forwardRef((e, t) => {
  var _a2;
  const { container: n, ...r } = e, [o, i] = u.useState(false);
  ve(() => i(true), []);
  const a = n || o && ((_a2 = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a2.body);
  return a ? To.createPortal(x.jsx(Z.div, { ...r, ref: t }), a) : null;
});
lr.displayName = Ds;
function Ns(e, t) {
  return u.useReducer((n, r) => t[n][r] ?? n, e);
}
var Fe = (e) => {
  const { present: t, children: n } = e, r = Ls(t), o = typeof n == "function" ? n({ present: r.isPresent }) : u.Children.only(n), i = Q(r.ref, ks(o));
  return typeof n == "function" || r.isPresent ? u.cloneElement(o, { ref: i }) : null;
};
Fe.displayName = "Presence";
function Ls(e) {
  const [t, n] = u.useState(), r = u.useRef(null), o = u.useRef(e), i = u.useRef("none"), a = e ? "mounted" : "unmounted", [c, l] = Ns(a, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
  return u.useEffect(() => {
    const s = Ue(r.current);
    i.current = c === "mounted" ? s : "none";
  }, [c]), ve(() => {
    const s = r.current, f = o.current;
    if (f !== e) {
      const m = i.current, h = Ue(s);
      e ? l("MOUNT") : h === "none" || (s == null ? void 0 : s.display) === "none" ? l("UNMOUNT") : l(f && m !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), ve(() => {
    if (t) {
      let s;
      const f = t.ownerDocument.defaultView ?? window, d = (h) => {
        const v = Ue(r.current).includes(CSS.escape(h.animationName));
        if (h.target === t && v && (l("ANIMATION_END"), !o.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", s = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, m = (h) => {
        h.target === t && (i.current = Ue(r.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        f.clearTimeout(s), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else l("ANIMATION_END");
  }, [t, l]), { isPresent: ["mounted", "unmountSuspended"].includes(c), ref: u.useCallback((s) => {
    r.current = s ? getComputedStyle(s) : null, n(s);
  }, []) };
}
function Ue(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function ks(e) {
  var _a2, _b;
  let t = (_a2 = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : _a2.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (_b = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : _b.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var xt = "rovingFocusGroup.onEntryFocus", Fs = { bubbles: false, cancelable: true }, je = "RovingFocusGroup", [Tt, fr, js] = Ln(je), [$s, dr] = Le(je, [js]), [Ws, Bs] = $s(je), pr = u.forwardRef((e, t) => x.jsx(Tt.Provider, { scope: e.__scopeRovingFocusGroup, children: x.jsx(Tt.Slot, { scope: e.__scopeRovingFocusGroup, children: x.jsx(Hs, { ...e, ref: t }) }) }));
pr.displayName = je;
var Hs = u.forwardRef((e, t) => {
  const { __scopeRovingFocusGroup: n, orientation: r, loop: o = false, dir: i, currentTabStopId: a, defaultCurrentTabStopId: c, onCurrentTabStopIdChange: l, onEntryFocus: s, preventScrollOnEntryFocus: f = false, ...d } = e, m = u.useRef(null), h = Q(t, m), y = kn(i), [v, g] = Dn({ prop: a, defaultProp: c ?? null, onChange: l, caller: je }), [w, R] = u.useState(false), S = le(s), C = fr(n), _ = u.useRef(false), [P, b] = u.useState(0);
  return u.useEffect(() => {
    const I = m.current;
    if (I) return I.addEventListener(xt, S), () => I.removeEventListener(xt, S);
  }, [S]), x.jsx(Ws, { scope: n, orientation: r, dir: y, loop: o, currentTabStopId: v, onItemFocus: u.useCallback((I) => g(I), [g]), onItemShiftTab: u.useCallback(() => R(true), []), onFocusableItemAdd: u.useCallback(() => b((I) => I + 1), []), onFocusableItemRemove: u.useCallback(() => b((I) => I - 1), []), children: x.jsx(Z.div, { tabIndex: w || P === 0 ? -1 : 0, "data-orientation": r, ...d, ref: h, style: { outline: "none", ...e.style }, onMouseDown: $(e.onMouseDown, () => {
    _.current = true;
  }), onFocus: $(e.onFocus, (I) => {
    const W = !_.current;
    if (I.target === I.currentTarget && W && !w) {
      const j = new CustomEvent(xt, Fs);
      if (I.currentTarget.dispatchEvent(j), !j.defaultPrevented) {
        const B = C().filter((L) => L.focusable), V = B.find((L) => L.active), U = B.find((L) => L.id === v), K = [V, U, ...B].filter(Boolean).map((L) => L.ref.current);
        hr(K, f);
      }
    }
    _.current = false;
  }), onBlur: $(e.onBlur, () => R(false)) }) });
}), mr = "RovingFocusGroupItem", vr = u.forwardRef((e, t) => {
  const { __scopeRovingFocusGroup: n, focusable: r = true, active: o = false, tabStopId: i, children: a, ...c } = e, l = At(), s = i || l, f = Bs(mr, n), d = f.currentTabStopId === s, m = fr(n), { onFocusableItemAdd: h, onFocusableItemRemove: y, currentTabStopId: v } = f;
  return u.useEffect(() => {
    if (r) return h(), () => y();
  }, [r, h, y]), x.jsx(Tt.ItemSlot, { scope: n, id: s, focusable: r, active: o, children: x.jsx(Z.span, { tabIndex: d ? 0 : -1, "data-orientation": f.orientation, ...c, ref: t, onMouseDown: $(e.onMouseDown, (g) => {
    r ? f.onItemFocus(s) : g.preventDefault();
  }), onFocus: $(e.onFocus, () => f.onItemFocus(s)), onKeyDown: $(e.onKeyDown, (g) => {
    if (g.key === "Tab" && g.shiftKey) {
      f.onItemShiftTab();
      return;
    }
    if (g.target !== g.currentTarget) return;
    const w = Gs(g, f.orientation, f.dir);
    if (w !== void 0) {
      if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
      g.preventDefault();
      let S = m().filter((C) => C.focusable).map((C) => C.ref.current);
      if (w === "last") S.reverse();
      else if (w === "prev" || w === "next") {
        w === "prev" && S.reverse();
        const C = S.indexOf(g.currentTarget);
        S = f.loop ? Ks(S, C + 1) : S.slice(C + 1);
      }
      setTimeout(() => hr(S));
    }
  }), children: typeof a == "function" ? a({ isCurrentTabStop: d, hasTabStop: v != null }) : a }) });
});
vr.displayName = mr;
var Us = { ArrowLeft: "prev", ArrowUp: "prev", ArrowRight: "next", ArrowDown: "next", PageUp: "first", Home: "first", PageDown: "last", End: "last" };
function Vs(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Gs(e, t, n) {
  const r = Vs(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))) return Us[r];
}
function hr(e, t = false) {
  const n = document.activeElement;
  for (const r of e) if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function Ks(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Ys = pr, zs = vr;
function Xs(e) {
  const t = qs(e), n = u.forwardRef((r, o) => {
    const { children: i, ...a } = r, c = u.Children.toArray(i), l = c.find(Js);
    if (l) {
      const s = l.props.children, f = c.map((d) => d === l ? u.Children.count(s) > 1 ? u.Children.only(null) : u.isValidElement(s) ? s.props.children : null : d);
      return x.jsx(t, { ...a, ref: o, children: u.isValidElement(s) ? u.cloneElement(s, void 0, f) : null });
    }
    return x.jsx(t, { ...a, ref: o, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
function qs(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (u.isValidElement(o)) {
      const a = ec(o), c = Qs(i, o.props);
      return o.type !== u.Fragment && (c.ref = r ? we(r, a) : a), u.cloneElement(o, c);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Zs = /* @__PURE__ */ Symbol("radix.slottable");
function Js(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Zs;
}
function Qs(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...c) => {
      const l = i(...c);
      return o(...c), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function ec(e) {
  var _a2, _b;
  let t = (_a2 = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : _a2.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (_b = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : _b.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var tc = function(e) {
  if (typeof document > "u") return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Ce = /* @__PURE__ */ new WeakMap(), Ve = /* @__PURE__ */ new WeakMap(), Ge = {}, Ct = 0, gr = function(e) {
  return e && (e.host || gr(e.parentNode));
}, nc = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n)) return n;
    var r = gr(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, rc = function(e, t, n, r) {
  var o = nc(t, Array.isArray(e) ? e : [e]);
  Ge[n] || (Ge[n] = /* @__PURE__ */ new WeakMap());
  var i = Ge[n], a = [], c = /* @__PURE__ */ new Set(), l = new Set(o), s = function(d) {
    !d || c.has(d) || (c.add(d), s(d.parentNode));
  };
  o.forEach(s);
  var f = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(m) {
      if (c.has(m)) f(m);
      else try {
        var h = m.getAttribute(r), y = h !== null && h !== "false", v = (Ce.get(m) || 0) + 1, g = (i.get(m) || 0) + 1;
        Ce.set(m, v), i.set(m, g), a.push(m), v === 1 && y && Ve.set(m, true), g === 1 && m.setAttribute(n, "true"), y || m.setAttribute(r, "true");
      } catch (w) {
        console.error("aria-hidden: cannot operate on ", m, w);
      }
    });
  };
  return f(t), c.clear(), Ct++, function() {
    a.forEach(function(d) {
      var m = Ce.get(d) - 1, h = i.get(d) - 1;
      Ce.set(d, m), i.set(d, h), m || (Ve.has(d) || d.removeAttribute(r), Ve.delete(d)), h || d.removeAttribute(n);
    }), Ct--, Ct || (Ce = /* @__PURE__ */ new WeakMap(), Ce = /* @__PURE__ */ new WeakMap(), Ve = /* @__PURE__ */ new WeakMap(), Ge = {});
  };
}, oc = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = tc(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), rc(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, ie = function() {
  return ie = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, ie.apply(this, arguments);
};
function yr(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function ic(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++) (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Xe = "right-scroll-bar-position", qe = "width-before-scroll-bar", sc = "with-scroll-bars-hidden", cc = "--removed-body-scroll-bar-size";
function St(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function ac(e, t) {
  var n = u.useState(function() {
    return { value: e, callback: t, facade: { get current() {
      return n.value;
    }, set current(r) {
      var o = n.value;
      o !== r && (n.value = r, n.callback(r, o));
    } } };
  })[0];
  return n.callback = t, n.facade;
}
var uc = typeof window < "u" ? u.useLayoutEffect : u.useEffect, bn = /* @__PURE__ */ new WeakMap();
function lc(e, t) {
  var n = ac(null, function(r) {
    return e.forEach(function(o) {
      return St(o, r);
    });
  });
  return uc(function() {
    var r = bn.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), a = n.current;
      o.forEach(function(c) {
        i.has(c) || St(c, null);
      }), i.forEach(function(c) {
        o.has(c) || St(c, a);
      });
    }
    bn.set(n, e);
  }, [e]), n;
}
function fc(e) {
  return e;
}
function dc(e, t) {
  t === void 0 && (t = fc);
  var n = [], r = false, o = { read: function() {
    if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
    return n.length ? n[n.length - 1] : e;
  }, useMedium: function(i) {
    var a = t(i, r);
    return n.push(a), function() {
      n = n.filter(function(c) {
        return c !== a;
      });
    };
  }, assignSyncMedium: function(i) {
    for (r = true; n.length; ) {
      var a = n;
      n = [], a.forEach(i);
    }
    n = { push: function(c) {
      return i(c);
    }, filter: function() {
      return n;
    } };
  }, assignMedium: function(i) {
    r = true;
    var a = [];
    if (n.length) {
      var c = n;
      n = [], c.forEach(i), a = n;
    }
    var l = function() {
      var f = a;
      a = [], f.forEach(i);
    }, s = function() {
      return Promise.resolve().then(l);
    };
    s(), n = { push: function(f) {
      a.push(f), s();
    }, filter: function(f) {
      return a = a.filter(f), n;
    } };
  } };
  return o;
}
function pc(e) {
  e === void 0 && (e = {});
  var t = dc(null);
  return t.options = ie({ async: true, ssr: false }, e), t;
}
var wr = function(e) {
  var t = e.sideCar, n = yr(e, ["sideCar"]);
  if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return u.createElement(r, ie({}, n));
};
wr.isSideCarExport = true;
function mc(e, t) {
  return e.useMedium(t), wr;
}
var Er = pc(), bt = function() {
}, at = u.forwardRef(function(e, t) {
  var n = u.useRef(null), r = u.useState({ onScrollCapture: bt, onWheelCapture: bt, onTouchMoveCapture: bt }), o = r[0], i = r[1], a = e.forwardProps, c = e.children, l = e.className, s = e.removeScrollBar, f = e.enabled, d = e.shards, m = e.sideCar, h = e.noRelative, y = e.noIsolation, v = e.inert, g = e.allowPinchZoom, w = e.as, R = w === void 0 ? "div" : w, S = e.gapMode, C = yr(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), _ = m, P = lc([n, t]), b = ie(ie({}, C), o);
  return u.createElement(u.Fragment, null, f && u.createElement(_, { sideCar: Er, removeScrollBar: s, shards: d, noRelative: h, noIsolation: y, inert: v, setCallbacks: i, allowPinchZoom: !!g, lockRef: n, gapMode: S }), a ? u.cloneElement(u.Children.only(c), ie(ie({}, b), { ref: P })) : u.createElement(R, ie({}, b, { className: l, ref: P }), c));
});
at.defaultProps = { enabled: true, removeScrollBar: true, inert: false };
at.classNames = { fullWidth: qe, zeroRight: Xe };
var vc = function() {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function hc() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = vc();
  return t && e.setAttribute("nonce", t), e;
}
function gc(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function yc(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var wc = function() {
  var e = 0, t = null;
  return { add: function(n) {
    e == 0 && (t = hc()) && (gc(t, n), yc(t)), e++;
  }, remove: function() {
    e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
  } };
}, Ec = function() {
  var e = wc();
  return function(t, n) {
    u.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, xr = function() {
  var e = Ec(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, xc = { left: 0, top: 0, right: 0, gap: 0 }, Rt = function(e) {
  return parseInt(e || "", 10) || 0;
}, Cc = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Rt(n), Rt(r), Rt(o)];
}, Sc = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u") return xc;
  var t = Cc(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, r - n + t[2] - t[0]) };
}, bc = xr(), _e = "data-scroll-locked", Rc = function(e, t, n, r) {
  var o = e.left, i = e.top, a = e.right, c = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(sc, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(c, "px ").concat(r, `;
  }
  body[`).concat(_e, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(c, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(Xe, ` {
    right: `).concat(c, "px ").concat(r, `;
  }
  
  .`).concat(qe, ` {
    margin-right: `).concat(c, "px ").concat(r, `;
  }
  
  .`).concat(Xe, " .").concat(Xe, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(qe, " .").concat(qe, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(_e, `] {
    `).concat(cc, ": ").concat(c, `px;
  }
`);
}, Rn = function() {
  var e = parseInt(document.body.getAttribute(_e) || "0", 10);
  return isFinite(e) ? e : 0;
}, _c = function() {
  u.useEffect(function() {
    return document.body.setAttribute(_e, (Rn() + 1).toString()), function() {
      var e = Rn() - 1;
      e <= 0 ? document.body.removeAttribute(_e) : document.body.setAttribute(_e, e.toString());
    };
  }, []);
}, Ac = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  _c();
  var i = u.useMemo(function() {
    return Sc(o);
  }, [o]);
  return u.createElement(bc, { styles: Rc(i, !t, o, n ? "" : "!important") });
}, It = false;
if (typeof window < "u") try {
  var Ke = Object.defineProperty({}, "passive", { get: function() {
    return It = true, true;
  } });
  window.addEventListener("test", Ke, Ke), window.removeEventListener("test", Ke, Ke);
} catch {
  It = false;
}
var Se = It ? { passive: false } : false, Pc = function(e) {
  return e.tagName === "TEXTAREA";
}, Cr = function(e, t) {
  if (!(e instanceof Element)) return false;
  var n = window.getComputedStyle(e);
  return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Pc(e) && n[t] === "visible");
}, Oc = function(e) {
  return Cr(e, "overflowY");
}, Mc = function(e) {
  return Cr(e, "overflowX");
}, _n = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Sr(e, r);
    if (o) {
      var i = br(e, r), a = i[1], c = i[2];
      if (a > c) return true;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return false;
}, Tc = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [t, n, r];
}, Ic = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [t, n, r];
}, Sr = function(e, t) {
  return e === "v" ? Oc(t) : Mc(t);
}, br = function(e, t) {
  return e === "v" ? Tc(t) : Ic(t);
}, Dc = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Nc = function(e, t, n, r, o) {
  var i = Dc(e, window.getComputedStyle(t).direction), a = i * r, c = n.target, l = t.contains(c), s = false, f = a > 0, d = 0, m = 0;
  do {
    if (!c) break;
    var h = br(e, c), y = h[0], v = h[1], g = h[2], w = v - g - i * y;
    (y || w) && Sr(e, c) && (d += w, m += y);
    var R = c.parentNode;
    c = R && R.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? R.host : R;
  } while (!l && c !== document.body || l && (t.contains(c) || t === c));
  return (f && Math.abs(d) < 1 || !f && Math.abs(m) < 1) && (s = true), s;
}, Ye = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, An = function(e) {
  return [e.deltaX, e.deltaY];
}, Pn = function(e) {
  return e && "current" in e ? e.current : e;
}, Lc = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, kc = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Fc = 0, be = [];
function jc(e) {
  var t = u.useRef([]), n = u.useRef([0, 0]), r = u.useRef(), o = u.useState(Fc++)[0], i = u.useState(xr)[0], a = u.useRef(e);
  u.useEffect(function() {
    a.current = e;
  }, [e]), u.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = ic([e.lockRef.current], (e.shards || []).map(Pn), true).filter(Boolean);
      return v.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var c = u.useCallback(function(v, g) {
    if ("touches" in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey) return !a.current.allowPinchZoom;
    var w = Ye(v), R = n.current, S = "deltaX" in v ? v.deltaX : R[0] - w[0], C = "deltaY" in v ? v.deltaY : R[1] - w[1], _, P = v.target, b = Math.abs(S) > Math.abs(C) ? "h" : "v";
    if ("touches" in v && b === "h" && P.type === "range") return false;
    var I = window.getSelection(), W = I && I.anchorNode, j = W ? W === P || W.contains(P) : false;
    if (j) return false;
    var B = _n(b, P);
    if (!B) return true;
    if (B ? _ = b : (_ = b === "v" ? "h" : "v", B = _n(b, P)), !B) return false;
    if (!r.current && "changedTouches" in v && (S || C) && (r.current = _), !_) return true;
    var V = r.current || _;
    return Nc(V, g, v, V === "h" ? S : C);
  }, []), l = u.useCallback(function(v) {
    var g = v;
    if (!(!be.length || be[be.length - 1] !== i)) {
      var w = "deltaY" in g ? An(g) : Ye(g), R = t.current.filter(function(_) {
        return _.name === g.type && (_.target === g.target || g.target === _.shadowParent) && Lc(_.delta, w);
      })[0];
      if (R && R.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!R) {
        var S = (a.current.shards || []).map(Pn).filter(Boolean).filter(function(_) {
          return _.contains(g.target);
        }), C = S.length > 0 ? c(g, S[0]) : !a.current.noIsolation;
        C && g.cancelable && g.preventDefault();
      }
    }
  }, []), s = u.useCallback(function(v, g, w, R) {
    var S = { name: v, delta: g, target: w, should: R, shadowParent: $c(w) };
    t.current.push(S), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== S;
      });
    }, 1);
  }, []), f = u.useCallback(function(v) {
    n.current = Ye(v), r.current = void 0;
  }, []), d = u.useCallback(function(v) {
    s(v.type, An(v), v.target, c(v, e.lockRef.current));
  }, []), m = u.useCallback(function(v) {
    s(v.type, Ye(v), v.target, c(v, e.lockRef.current));
  }, []);
  u.useEffect(function() {
    return be.push(i), e.setCallbacks({ onScrollCapture: d, onWheelCapture: d, onTouchMoveCapture: m }), document.addEventListener("wheel", l, Se), document.addEventListener("touchmove", l, Se), document.addEventListener("touchstart", f, Se), function() {
      be = be.filter(function(v) {
        return v !== i;
      }), document.removeEventListener("wheel", l, Se), document.removeEventListener("touchmove", l, Se), document.removeEventListener("touchstart", f, Se);
    };
  }, []);
  var h = e.removeScrollBar, y = e.inert;
  return u.createElement(u.Fragment, null, y ? u.createElement(i, { styles: kc(o) }) : null, h ? u.createElement(Ac, { noRelative: e.noRelative, gapMode: e.gapMode }) : null);
}
function $c(e) {
  for (var t = null; e !== null; ) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Wc = mc(Er, jc);
var Rr = u.forwardRef(function(e, t) {
  return u.createElement(at, ie({}, e, { ref: t, sideCar: Wc }));
});
Rr.classNames = at.classNames;
var Dt = ["Enter", " "], Bc = ["ArrowDown", "PageUp", "Home"], _r = ["ArrowUp", "PageDown", "End"], Hc = [...Bc, ..._r], Uc = { ltr: [...Dt, "ArrowRight"], rtl: [...Dt, "ArrowLeft"] }, Vc = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] }, $e = "Menu", [De, Gc, Kc] = Ln($e), [Ee, Ar] = Le($e, [Kc, tr, dr]), ut = tr(), Pr = dr(), [Yc, xe] = Ee($e), [zc, We] = Ee($e), Or = (e) => {
  const { __scopeMenu: t, open: n = false, children: r, dir: o, onOpenChange: i, modal: a = true } = e, c = ut(t), [l, s] = u.useState(null), f = u.useRef(false), d = le(i), m = kn(o);
  return u.useEffect(() => {
    const h = () => {
      f.current = true, document.addEventListener("pointerdown", y, { capture: true, once: true }), document.addEventListener("pointermove", y, { capture: true, once: true });
    }, y = () => f.current = false;
    return document.addEventListener("keydown", h, { capture: true }), () => {
      document.removeEventListener("keydown", h, { capture: true }), document.removeEventListener("pointerdown", y, { capture: true }), document.removeEventListener("pointermove", y, { capture: true });
    };
  }, []), x.jsx(Os, { ...c, children: x.jsx(Yc, { scope: t, open: n, onOpenChange: d, content: l, onContentChange: s, children: x.jsx(zc, { scope: t, onClose: u.useCallback(() => d(false), [d]), isUsingKeyboardRef: f, dir: m, modal: a, children: r }) }) });
};
Or.displayName = $e;
var Xc = "MenuAnchor", Vt = u.forwardRef((e, t) => {
  const { __scopeMenu: n, ...r } = e, o = ut(n);
  return x.jsx(Ms, { ...o, ...r, ref: t });
});
Vt.displayName = Xc;
var Gt = "MenuPortal", [qc, Mr] = Ee(Gt, { forceMount: void 0 }), Tr = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, i = xe(Gt, t);
  return x.jsx(qc, { scope: t, forceMount: n, children: x.jsx(Fe, { present: n || i.open, children: x.jsx(lr, { asChild: true, container: o, children: r }) }) });
};
Tr.displayName = Gt;
var ne = "MenuContent", [Zc, Kt] = Ee(ne), Ir = u.forwardRef((e, t) => {
  const n = Mr(ne, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, i = xe(ne, e.__scopeMenu), a = We(ne, e.__scopeMenu);
  return x.jsx(De.Provider, { scope: e.__scopeMenu, children: x.jsx(Fe, { present: r || i.open, children: x.jsx(De.Slot, { scope: e.__scopeMenu, children: a.modal ? x.jsx(Jc, { ...o, ref: t }) : x.jsx(Qc, { ...o, ref: t }) }) }) });
}), Jc = u.forwardRef((e, t) => {
  const n = xe(ne, e.__scopeMenu), r = u.useRef(null), o = Q(t, r);
  return u.useEffect(() => {
    const i = r.current;
    if (i) return oc(i);
  }, []), x.jsx(Yt, { ...e, ref: o, trapFocus: n.open, disableOutsidePointerEvents: n.open, disableOutsideScroll: true, onFocusOutside: $(e.onFocusOutside, (i) => i.preventDefault(), { checkForDefaultPrevented: false }), onDismiss: () => n.onOpenChange(false) });
}), Qc = u.forwardRef((e, t) => {
  const n = xe(ne, e.__scopeMenu);
  return x.jsx(Yt, { ...e, ref: t, trapFocus: false, disableOutsidePointerEvents: false, disableOutsideScroll: false, onDismiss: () => n.onOpenChange(false) });
}), ea = Xs("MenuContent.ScrollLock"), Yt = u.forwardRef((e, t) => {
  const { __scopeMenu: n, loop: r = false, trapFocus: o, onOpenAutoFocus: i, onCloseAutoFocus: a, disableOutsidePointerEvents: c, onEntryFocus: l, onEscapeKeyDown: s, onPointerDownOutside: f, onFocusOutside: d, onInteractOutside: m, onDismiss: h, disableOutsideScroll: y, ...v } = e, g = xe(ne, n), w = We(ne, n), R = ut(n), S = Pr(n), C = Gc(n), [_, P] = u.useState(null), b = u.useRef(null), I = Q(t, b, g.onContentChange), W = u.useRef(0), j = u.useRef(""), B = u.useRef(0), V = u.useRef(null), U = u.useRef("right"), H = u.useRef(0), K = y ? Rr : u.Fragment, L = y ? { as: ea, allowPinchZoom: true } : void 0, G = (A) => {
    var _a2, _b;
    const Y = j.current + A, p = C().filter((T) => !T.disabled), E = document.activeElement, M = (_a2 = p.find((T) => T.ref.current === E)) == null ? void 0 : _a2.textValue, O = p.map((T) => T.textValue), k = da(O, Y, M), F = (_b = p.find((T) => T.textValue === k)) == null ? void 0 : _b.ref.current;
    (function T(z) {
      j.current = z, window.clearTimeout(W.current), z !== "" && (W.current = window.setTimeout(() => T(""), 1e3));
    })(Y), F && setTimeout(() => F.focus());
  };
  u.useEffect(() => () => window.clearTimeout(W.current), []), Qo();
  const N = u.useCallback((A) => {
    var _a2, _b;
    return U.current === ((_a2 = V.current) == null ? void 0 : _a2.side) && ma(A, (_b = V.current) == null ? void 0 : _b.area);
  }, []);
  return x.jsx(Zc, { scope: n, searchRef: j, onItemEnter: u.useCallback((A) => {
    N(A) && A.preventDefault();
  }, [N]), onItemLeave: u.useCallback((A) => {
    var _a2;
    N(A) || ((_a2 = b.current) == null ? void 0 : _a2.focus(), P(null));
  }, [N]), onTriggerLeave: u.useCallback((A) => {
    N(A) && A.preventDefault();
  }, [N]), pointerGraceTimerRef: B, onPointerGraceIntentChange: u.useCallback((A) => {
    V.current = A;
  }, []), children: x.jsx(K, { ...L, children: x.jsx(Wn, { asChild: true, trapped: o, onMountAutoFocus: $(i, (A) => {
    var _a2;
    A.preventDefault(), (_a2 = b.current) == null ? void 0 : _a2.focus({ preventScroll: true });
  }), onUnmountAutoFocus: a, children: x.jsx(jn, { asChild: true, disableOutsidePointerEvents: c, onEscapeKeyDown: s, onPointerDownOutside: f, onFocusOutside: d, onInteractOutside: m, onDismiss: h, children: x.jsx(Ys, { asChild: true, ...S, dir: w.dir, orientation: "vertical", loop: r, currentTabStopId: _, onCurrentTabStopIdChange: P, onEntryFocus: $(l, (A) => {
    w.isUsingKeyboardRef.current || A.preventDefault();
  }), preventScrollOnEntryFocus: true, children: x.jsx(Ts, { role: "menu", "aria-orientation": "vertical", "data-state": zr(g.open), "data-radix-menu-content": "", dir: w.dir, ...R, ...v, ref: I, style: { outline: "none", ...v.style }, onKeyDown: $(v.onKeyDown, (A) => {
    const p = A.target.closest("[data-radix-menu-content]") === A.currentTarget, E = A.ctrlKey || A.altKey || A.metaKey, M = A.key.length === 1;
    p && (A.key === "Tab" && A.preventDefault(), !E && M && G(A.key));
    const O = b.current;
    if (A.target !== O || !Hc.includes(A.key)) return;
    A.preventDefault();
    const F = C().filter((T) => !T.disabled).map((T) => T.ref.current);
    _r.includes(A.key) && F.reverse(), la(F);
  }), onBlur: $(e.onBlur, (A) => {
    A.currentTarget.contains(A.target) || (window.clearTimeout(W.current), j.current = "");
  }), onPointerMove: $(e.onPointerMove, Ne((A) => {
    const Y = A.target, p = H.current !== A.clientX;
    if (A.currentTarget.contains(Y) && p) {
      const E = A.clientX > H.current ? "right" : "left";
      U.current = E, H.current = A.clientX;
    }
  })) }) }) }) }) }) });
});
Ir.displayName = ne;
var ta = "MenuGroup", zt = u.forwardRef((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return x.jsx(Z.div, { role: "group", ...r, ref: t });
});
zt.displayName = ta;
var na = "MenuLabel", Dr = u.forwardRef((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return x.jsx(Z.div, { ...r, ref: t });
});
Dr.displayName = na;
var nt = "MenuItem", On = "menu.itemSelect", lt = u.forwardRef((e, t) => {
  const { disabled: n = false, onSelect: r, ...o } = e, i = u.useRef(null), a = We(nt, e.__scopeMenu), c = Kt(nt, e.__scopeMenu), l = Q(t, i), s = u.useRef(false), f = () => {
    const d = i.current;
    if (!n && d) {
      const m = new CustomEvent(On, { bubbles: true, cancelable: true });
      d.addEventListener(On, (h) => r == null ? void 0 : r(h), { once: true }), Nn(d, m), m.defaultPrevented ? s.current = false : a.onClose();
    }
  };
  return x.jsx(Nr, { ...o, ref: l, disabled: n, onClick: $(e.onClick, f), onPointerDown: (d) => {
    var _a2;
    (_a2 = e.onPointerDown) == null ? void 0 : _a2.call(e, d), s.current = true;
  }, onPointerUp: $(e.onPointerUp, (d) => {
    var _a2;
    s.current || ((_a2 = d.currentTarget) == null ? void 0 : _a2.click());
  }), onKeyDown: $(e.onKeyDown, (d) => {
    const m = c.searchRef.current !== "";
    n || m && d.key === " " || Dt.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
  }) });
});
lt.displayName = nt;
var Nr = u.forwardRef((e, t) => {
  const { __scopeMenu: n, disabled: r = false, textValue: o, ...i } = e, a = Kt(nt, n), c = Pr(n), l = u.useRef(null), s = Q(t, l), [f, d] = u.useState(false), [m, h] = u.useState("");
  return u.useEffect(() => {
    const y = l.current;
    y && h((y.textContent ?? "").trim());
  }, [i.children]), x.jsx(De.ItemSlot, { scope: n, disabled: r, textValue: o ?? m, children: x.jsx(zs, { asChild: true, ...c, focusable: !r, children: x.jsx(Z.div, { role: "menuitem", "data-highlighted": f ? "" : void 0, "aria-disabled": r || void 0, "data-disabled": r ? "" : void 0, ...i, ref: s, onPointerMove: $(e.onPointerMove, Ne((y) => {
    r ? a.onItemLeave(y) : (a.onItemEnter(y), y.defaultPrevented || y.currentTarget.focus({ preventScroll: true }));
  })), onPointerLeave: $(e.onPointerLeave, Ne((y) => a.onItemLeave(y))), onFocus: $(e.onFocus, () => d(true)), onBlur: $(e.onBlur, () => d(false)) }) }) });
}), ra = "MenuCheckboxItem", Lr = u.forwardRef((e, t) => {
  const { checked: n = false, onCheckedChange: r, ...o } = e;
  return x.jsx(Wr, { scope: e.__scopeMenu, checked: n, children: x.jsx(lt, { role: "menuitemcheckbox", "aria-checked": rt(n) ? "mixed" : n, ...o, ref: t, "data-state": qt(n), onSelect: $(o.onSelect, () => r == null ? void 0 : r(rt(n) ? true : !n), { checkForDefaultPrevented: false }) }) });
});
Lr.displayName = ra;
var kr = "MenuRadioGroup", [oa, ia] = Ee(kr, { value: void 0, onValueChange: () => {
} }), Fr = u.forwardRef((e, t) => {
  const { value: n, onValueChange: r, ...o } = e, i = le(r);
  return x.jsx(oa, { scope: e.__scopeMenu, value: n, onValueChange: i, children: x.jsx(zt, { ...o, ref: t }) });
});
Fr.displayName = kr;
var jr = "MenuRadioItem", $r = u.forwardRef((e, t) => {
  const { value: n, ...r } = e, o = ia(jr, e.__scopeMenu), i = n === o.value;
  return x.jsx(Wr, { scope: e.__scopeMenu, checked: i, children: x.jsx(lt, { role: "menuitemradio", "aria-checked": i, ...r, ref: t, "data-state": qt(i), onSelect: $(r.onSelect, () => {
    var _a2;
    return (_a2 = o.onValueChange) == null ? void 0 : _a2.call(o, n);
  }, { checkForDefaultPrevented: false }) }) });
});
$r.displayName = jr;
var Xt = "MenuItemIndicator", [Wr, sa] = Ee(Xt, { checked: false }), Br = u.forwardRef((e, t) => {
  const { __scopeMenu: n, forceMount: r, ...o } = e, i = sa(Xt, n);
  return x.jsx(Fe, { present: r || rt(i.checked) || i.checked === true, children: x.jsx(Z.span, { ...o, ref: t, "data-state": qt(i.checked) }) });
});
Br.displayName = Xt;
var ca = "MenuSeparator", Hr = u.forwardRef((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return x.jsx(Z.div, { role: "separator", "aria-orientation": "horizontal", ...r, ref: t });
});
Hr.displayName = ca;
var aa = "MenuArrow", Ur = u.forwardRef((e, t) => {
  const { __scopeMenu: n, ...r } = e, o = ut(n);
  return x.jsx(Is, { ...o, ...r, ref: t });
});
Ur.displayName = aa;
var ua = "MenuSub", [za, Vr] = Ee(ua), Te = "MenuSubTrigger", Gr = u.forwardRef((e, t) => {
  const n = xe(Te, e.__scopeMenu), r = We(Te, e.__scopeMenu), o = Vr(Te, e.__scopeMenu), i = Kt(Te, e.__scopeMenu), a = u.useRef(null), { pointerGraceTimerRef: c, onPointerGraceIntentChange: l } = i, s = { __scopeMenu: e.__scopeMenu }, f = u.useCallback(() => {
    a.current && window.clearTimeout(a.current), a.current = null;
  }, []);
  return u.useEffect(() => f, [f]), u.useEffect(() => {
    const d = c.current;
    return () => {
      window.clearTimeout(d), l(null);
    };
  }, [c, l]), x.jsx(Vt, { asChild: true, ...s, children: x.jsx(Nr, { id: o.triggerId, "aria-haspopup": "menu", "aria-expanded": n.open, "aria-controls": o.contentId, "data-state": zr(n.open), ...e, ref: we(t, o.onTriggerChange), onClick: (d) => {
    var _a2;
    (_a2 = e.onClick) == null ? void 0 : _a2.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(true));
  }, onPointerMove: $(e.onPointerMove, Ne((d) => {
    i.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !a.current && (i.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => {
      n.onOpenChange(true), f();
    }, 100));
  })), onPointerLeave: $(e.onPointerLeave, Ne((d) => {
    var _a2, _b;
    f();
    const m = (_a2 = n.content) == null ? void 0 : _a2.getBoundingClientRect();
    if (m) {
      const h = (_b = n.content) == null ? void 0 : _b.dataset.side, y = h === "right", v = y ? -5 : 5, g = m[y ? "left" : "right"], w = m[y ? "right" : "left"];
      i.onPointerGraceIntentChange({ area: [{ x: d.clientX + v, y: d.clientY }, { x: g, y: m.top }, { x: w, y: m.top }, { x: w, y: m.bottom }, { x: g, y: m.bottom }], side: h }), window.clearTimeout(c.current), c.current = window.setTimeout(() => i.onPointerGraceIntentChange(null), 300);
    } else {
      if (i.onTriggerLeave(d), d.defaultPrevented) return;
      i.onPointerGraceIntentChange(null);
    }
  })), onKeyDown: $(e.onKeyDown, (d) => {
    var _a2;
    const m = i.searchRef.current !== "";
    e.disabled || m && d.key === " " || Uc[r.dir].includes(d.key) && (n.onOpenChange(true), (_a2 = n.content) == null ? void 0 : _a2.focus(), d.preventDefault());
  }) }) });
});
Gr.displayName = Te;
var Kr = "MenuSubContent", Yr = u.forwardRef((e, t) => {
  const n = Mr(ne, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, i = xe(ne, e.__scopeMenu), a = We(ne, e.__scopeMenu), c = Vr(Kr, e.__scopeMenu), l = u.useRef(null), s = Q(t, l);
  return x.jsx(De.Provider, { scope: e.__scopeMenu, children: x.jsx(Fe, { present: r || i.open, children: x.jsx(De.Slot, { scope: e.__scopeMenu, children: x.jsx(Yt, { id: c.contentId, "aria-labelledby": c.triggerId, ...o, ref: s, align: "start", side: a.dir === "rtl" ? "left" : "right", disableOutsidePointerEvents: false, disableOutsideScroll: false, trapFocus: false, onOpenAutoFocus: (f) => {
    var _a2;
    a.isUsingKeyboardRef.current && ((_a2 = l.current) == null ? void 0 : _a2.focus()), f.preventDefault();
  }, onCloseAutoFocus: (f) => f.preventDefault(), onFocusOutside: $(e.onFocusOutside, (f) => {
    f.target !== c.trigger && i.onOpenChange(false);
  }), onEscapeKeyDown: $(e.onEscapeKeyDown, (f) => {
    a.onClose(), f.preventDefault();
  }), onKeyDown: $(e.onKeyDown, (f) => {
    var _a2;
    const d = f.currentTarget.contains(f.target), m = Vc[a.dir].includes(f.key);
    d && m && (i.onOpenChange(false), (_a2 = c.trigger) == null ? void 0 : _a2.focus(), f.preventDefault());
  }) }) }) }) });
});
Yr.displayName = Kr;
function zr(e) {
  return e ? "open" : "closed";
}
function rt(e) {
  return e === "indeterminate";
}
function qt(e) {
  return rt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function la(e) {
  const t = document.activeElement;
  for (const n of e) if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function fa(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function da(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((s) => s === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let a = fa(e, Math.max(i, 0));
  o.length === 1 && (a = a.filter((s) => s !== n));
  const l = a.find((s) => s.toLowerCase().startsWith(o.toLowerCase()));
  return l !== n ? l : void 0;
}
function pa(e, t) {
  const { x: n, y: r } = e;
  let o = false;
  for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
    const c = t[i], l = t[a], s = c.x, f = c.y, d = l.x, m = l.y;
    f > r != m > r && n < (d - s) * (r - f) / (m - f) + s && (o = !o);
  }
  return o;
}
function ma(e, t) {
  if (!t) return false;
  const n = { x: e.clientX, y: e.clientY };
  return pa(n, t);
}
function Ne(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var va = Or, ha = Vt, ga = Tr, ya = Ir, wa = zt, Ea = Dr, xa = lt, Ca = Lr, Sa = Fr, ba = $r, Ra = Br, _a = Hr, Aa = Ur, Pa = Gr, Oa = Yr, ft = "DropdownMenu", [Ma] = Le(ft, [Ar]), J = Ar(), [Ta, Xr] = Ma(ft), qr = (e) => {
  const { __scopeDropdownMenu: t, children: n, dir: r, open: o, defaultOpen: i, onOpenChange: a, modal: c = true } = e, l = J(t), s = u.useRef(null), [f, d] = Dn({ prop: o, defaultProp: i ?? false, onChange: a, caller: ft });
  return x.jsx(Ta, { scope: t, triggerId: At(), triggerRef: s, contentId: At(), open: f, onOpenChange: d, onOpenToggle: u.useCallback(() => d((m) => !m), [d]), modal: c, children: x.jsx(va, { ...l, open: f, onOpenChange: d, dir: r, modal: c, children: n }) });
};
qr.displayName = ft;
var Zr = "DropdownMenuTrigger", Jr = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, disabled: r = false, ...o } = e, i = Xr(Zr, n), a = J(n);
  return x.jsx(ha, { asChild: true, ...a, children: x.jsx(Z.button, { type: "button", id: i.triggerId, "aria-haspopup": "menu", "aria-expanded": i.open, "aria-controls": i.open ? i.contentId : void 0, "data-state": i.open ? "open" : "closed", "data-disabled": r ? "" : void 0, disabled: r, ...o, ref: we(t, i.triggerRef), onPointerDown: $(e.onPointerDown, (c) => {
    !r && c.button === 0 && c.ctrlKey === false && (i.onOpenToggle(), i.open || c.preventDefault());
  }), onKeyDown: $(e.onKeyDown, (c) => {
    r || (["Enter", " "].includes(c.key) && i.onOpenToggle(), c.key === "ArrowDown" && i.onOpenChange(true), ["Enter", " ", "ArrowDown"].includes(c.key) && c.preventDefault());
  }) }) });
});
Jr.displayName = Zr;
var Ia = "DropdownMenuPortal", Qr = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = J(t);
  return x.jsx(ga, { ...r, ...n });
};
Qr.displayName = Ia;
var eo = "DropdownMenuContent", to = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Xr(eo, n), i = J(n), a = u.useRef(false);
  return x.jsx(ya, { id: o.contentId, "aria-labelledby": o.triggerId, ...i, ...r, ref: t, onCloseAutoFocus: $(e.onCloseAutoFocus, (c) => {
    var _a2;
    a.current || ((_a2 = o.triggerRef.current) == null ? void 0 : _a2.focus()), a.current = false, c.preventDefault();
  }), onInteractOutside: $(e.onInteractOutside, (c) => {
    const l = c.detail.originalEvent, s = l.button === 0 && l.ctrlKey === true, f = l.button === 2 || s;
    (!o.modal || f) && (a.current = true);
  }), style: { ...e.style, "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)", "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)", "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)", "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)" } });
});
to.displayName = eo;
var Da = "DropdownMenuGroup", Na = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = J(n);
  return x.jsx(wa, { ...o, ...r, ref: t });
});
Na.displayName = Da;
var La = "DropdownMenuLabel", no = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = J(n);
  return x.jsx(Ea, { ...o, ...r, ref: t });
});
no.displayName = La;
var ka = "DropdownMenuItem", ro = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = J(n);
  return x.jsx(xa, { ...o, ...r, ref: t });
});
ro.displayName = ka;
var Fa = "DropdownMenuCheckboxItem", oo = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = J(n);
  return x.jsx(Ca, { ...o, ...r, ref: t });
});
oo.displayName = Fa;
var ja = "DropdownMenuRadioGroup", $a = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = J(n);
  return x.jsx(Sa, { ...o, ...r, ref: t });
});
$a.displayName = ja;
var Wa = "DropdownMenuRadioItem", io = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = J(n);
  return x.jsx(ba, { ...o, ...r, ref: t });
});
io.displayName = Wa;
var Ba = "DropdownMenuItemIndicator", so = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = J(n);
  return x.jsx(Ra, { ...o, ...r, ref: t });
});
so.displayName = Ba;
var Ha = "DropdownMenuSeparator", co = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = J(n);
  return x.jsx(_a, { ...o, ...r, ref: t });
});
co.displayName = Ha;
var Ua = "DropdownMenuArrow", Va = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = J(n);
  return x.jsx(Aa, { ...o, ...r, ref: t });
});
Va.displayName = Ua;
var Ga = "DropdownMenuSubTrigger", ao = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = J(n);
  return x.jsx(Pa, { ...o, ...r, ref: t });
});
ao.displayName = Ga;
var Ka = "DropdownMenuSubContent", uo = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = J(n);
  return x.jsx(Oa, { ...o, ...r, ref: t, style: { ...e.style, "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)", "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)", "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)", "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)" } });
});
uo.displayName = Ka;
var Xa = qr, qa = Jr, Za = Qr, Ja = to, Qa = no, eu = ro, tu = oo, nu = io, ru = so, ou = co, iu = ao, su = uo;
export {
  Ja as C,
  eu as I,
  Qa as L,
  Za as P,
  Nt as R,
  Ya as S,
  qa as T,
  Tn as a,
  yo as b,
  iu as c,
  su as d,
  tu as e,
  ru as f,
  Mn as g,
  nu as h,
  ou as i,
  x as j,
  Xa as k,
  pe as l,
  u as r
};
