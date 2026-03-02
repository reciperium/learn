import { j as y } from "./radix-BdaLekQA.js";
let zr, St, wr, vr, pr;
let __tla = (async () => {
  const et = "/assets/recipe-parser_bg-lFpNQ4-Q.wasm", tt = async (e = {}, t) => {
    let o;
    if (t.startsWith("data:")) {
      const r = t.replace(/^data:.*?base64,/, "");
      let n;
      if (typeof Buffer == "function" && typeof Buffer.from == "function") n = Buffer.from(r, "base64");
      else if (typeof atob == "function") {
        const i = atob(r);
        n = new Uint8Array(i.length);
        for (let s = 0; s < i.length; s++) n[s] = i.charCodeAt(s);
      } else throw new Error("Cannot decode base64-encoded data URL");
      o = await WebAssembly.instantiate(n, e);
    } else {
      const r = await fetch(t), n = r.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && n.startsWith("application/wasm")) o = await WebAssembly.instantiateStreaming(r, e);
      else {
        const i = await r.arrayBuffer();
        o = await WebAssembly.instantiate(i, e);
      }
    }
    return o.instance.exports;
  };
  vr = function(e) {
    const t = Pe(e, v.__wbindgen_malloc, v.__wbindgen_realloc), o = se, r = v.parse(t, o);
    if (r[2]) throw Ie(r[1]);
    return Ie(r[0]);
  };
  function rt(e, t) {
    return Error(he(e, t));
  }
  function ot(e, t) {
    const o = pe(t), r = Pe(o, v.__wbindgen_malloc, v.__wbindgen_realloc), n = se;
    Re().setInt32(e + 4, n, true), Re().setInt32(e + 0, r, true);
  }
  function nt(e) {
    return typeof e == "string";
  }
  function st(e, t) {
    throw new Error(he(e, t));
  }
  function it() {
    return new Object();
  }
  function at() {
    return new Array();
  }
  function lt() {
    return /* @__PURE__ */ new Map();
  }
  function ct(e, t, o) {
    return e.set(t, o);
  }
  function dt(e, t, o) {
    e[t] = o;
  }
  function mt(e, t, o) {
    e[t >>> 0] = o;
  }
  function bt(e) {
    return e;
  }
  function ut(e, t) {
    return he(e, t);
  }
  function ft(e) {
    return BigInt.asUintN(64, e);
  }
  function pt() {
    const e = v.__wbindgen_externrefs, t = e.grow(4);
    e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, true), e.set(t + 3, false);
  }
  function pe(e) {
    const t = typeof e;
    if (t == "number" || t == "boolean" || e == null) return `${e}`;
    if (t == "string") return `"${e}"`;
    if (t == "symbol") {
      const n = e.description;
      return n == null ? "Symbol" : `Symbol(${n})`;
    }
    if (t == "function") {
      const n = e.name;
      return typeof n == "string" && n.length > 0 ? `Function(${n})` : "Function";
    }
    if (Array.isArray(e)) {
      const n = e.length;
      let i = "[";
      n > 0 && (i += pe(e[0]));
      for (let s = 1; s < n; s++) i += ", " + pe(e[s]);
      return i += "]", i;
    }
    const o = /\[object ([^\]]+)\]/.exec(toString.call(e));
    let r;
    if (o && o.length > 1) r = o[1];
    else return toString.call(e);
    if (r == "Object") try {
      return "Object(" + JSON.stringify(e) + ")";
    } catch {
      return "Object";
    }
    return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : r;
  }
  let U = null;
  function Re() {
    return (U === null || U.buffer.detached === true || U.buffer.detached === void 0 && U.buffer !== v.memory.buffer) && (U = new DataView(v.memory.buffer)), U;
  }
  function he(e, t) {
    return e = e >>> 0, ht(e, t);
  }
  let ee = null;
  function oe() {
    return (ee === null || ee.byteLength === 0) && (ee = new Uint8Array(v.memory.buffer)), ee;
  }
  function Pe(e, t, o) {
    if (o === void 0) {
      const b = Y.encode(e), c = t(b.length, 1) >>> 0;
      return oe().subarray(c, c + b.length).set(b), se = b.length, c;
    }
    let r = e.length, n = t(r, 1) >>> 0;
    const i = oe();
    let s = 0;
    for (; s < r; s++) {
      const b = e.charCodeAt(s);
      if (b > 127) break;
      i[n + s] = b;
    }
    if (s !== r) {
      s !== 0 && (e = e.slice(s)), n = o(n, r, r = s + e.length * 3, 1) >>> 0;
      const b = oe().subarray(n + s, n + r), c = Y.encodeInto(e, b);
      s += c.written, n = o(n, r, s, 1) >>> 0;
    }
    return se = s, n;
  }
  function Ie(e) {
    const t = v.__wbindgen_externrefs.get(e);
    return v.__externref_table_dealloc(e), t;
  }
  let ne = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  ne.decode();
  const gt = 2146435072;
  let ue = 0;
  function ht(e, t) {
    return ue += t, ue >= gt && (ne = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), ne.decode(), ue = t), ne.decode(oe().subarray(e, e + t));
  }
  const Y = new TextEncoder();
  "encodeInto" in Y || (Y.encodeInto = function(e, t) {
    const o = Y.encode(e);
    return t.set(o), {
      read: e.length,
      written: o.length
    };
  });
  let se = 0, v;
  function wt(e) {
    v = e;
  }
  URL = globalThis.URL;
  const L = await tt({
    "./recipe-parser_bg.js": {
      __wbg_set_3f1d0b984ed272ed: dt,
      __wbg_new_dca287b076112a51: lt,
      __wbg_new_3eb36ae241fe6f44: at,
      __wbg_new_361308b2356cecd0: it,
      __wbg_set_1eb0999cf5d27fc8: ct,
      __wbg_set_f43e577aea94465b: mt,
      __wbg___wbindgen_throw_be289d5034ed271b: st,
      __wbg_Error_8c4e43fe74559d73: rt,
      __wbg___wbindgen_is_string_cd444516edc5b180: nt,
      __wbg___wbindgen_debug_string_0bc8482c6e3508ae: ot,
      __wbindgen_init_externref_table: pt,
      __wbindgen_cast_0000000000000001: bt,
      __wbindgen_cast_0000000000000002: ut,
      __wbindgen_cast_0000000000000003: ft
    }
  }, et), _t = L.memory, yt = L.parse, xt = L.__wbindgen_malloc, kt = L.__wbindgen_realloc, vt = L.__wbindgen_externrefs, zt = L.__externref_table_dealloc, Ge = L.__wbindgen_start, At = Object.freeze(Object.defineProperty({
    __proto__: null,
    __externref_table_dealloc: zt,
    __wbindgen_externrefs: vt,
    __wbindgen_malloc: xt,
    __wbindgen_realloc: kt,
    __wbindgen_start: Ge,
    memory: _t,
    parse: yt
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  wt(At);
  Ge();
  function Le(e) {
    var t, o, r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object") if (Array.isArray(e)) {
      var n = e.length;
      for (t = 0; t < n; t++) e[t] && (o = Le(e[t])) && (r && (r += " "), r += o);
    } else for (o in e) e[o] && (r && (r += " "), r += o);
    return r;
  }
  St = function() {
    for (var e, t, o = 0, r = "", n = arguments.length; o < n; o++) (e = arguments[o]) && (t = Le(e)) && (r && (r += " "), r += t);
    return r;
  };
  let Ct, Rt, We, ie, Me, It, Mt, Fe, jt, Tt, Nt, we, Et, Ot, Pt, Gt, Ve, Lt, Wt, ge, je, Ft, Te, Vt, Bt, Ut, $t, Dt, qt, Be, Yt, Xt, p, Ue, $e, Jt, Qt, Ht, Kt, Zt, er, I, u, M, fe, R, De, tr, _e, rr, or, nr, sr, a, G, Ne, ir, ar, Ee, lr, te, l, q, cr, Oe, dr, mr, re, br, j, W, qe, Ye, Xe, Je, ur, Qe, He, Ke, fr, Ze;
  Ct = (e, t) => {
    const o = new Array(e.length + t.length);
    for (let r = 0; r < e.length; r++) o[r] = e[r];
    for (let r = 0; r < t.length; r++) o[e.length + r] = t[r];
    return o;
  };
  Rt = (e, t) => ({
    classGroupId: e,
    validator: t
  });
  We = (e = /* @__PURE__ */ new Map(), t = null, o) => ({
    nextPart: e,
    validators: t,
    classGroupId: o
  });
  ie = "-";
  Me = [];
  It = "arbitrary..";
  Mt = (e) => {
    const t = Tt(e), { conflictingClassGroups: o, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (s) => {
        if (s.startsWith("[") && s.endsWith("]")) return jt(s);
        const b = s.split(ie), c = b[0] === "" && b.length > 1 ? 1 : 0;
        return Fe(b, c, t);
      },
      getConflictingClassGroupIds: (s, b) => {
        if (b) {
          const c = r[s], f = o[s];
          return c ? f ? Ct(f, c) : c : f || Me;
        }
        return o[s] || Me;
      }
    };
  };
  Fe = (e, t, o) => {
    if (e.length - t === 0) return o.classGroupId;
    const n = e[t], i = o.nextPart.get(n);
    if (i) {
      const f = Fe(e, t + 1, i);
      if (f) return f;
    }
    const s = o.validators;
    if (s === null) return;
    const b = t === 0 ? e.join(ie) : e.slice(t).join(ie), c = s.length;
    for (let f = 0; f < c; f++) {
      const h = s[f];
      if (h.validator(b)) return h.classGroupId;
    }
  };
  jt = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
    const t = e.slice(1, -1), o = t.indexOf(":"), r = t.slice(0, o);
    return r ? It + r : void 0;
  })();
  Tt = (e) => {
    const { theme: t, classGroups: o } = e;
    return Nt(o, t);
  };
  Nt = (e, t) => {
    const o = We();
    for (const r in e) {
      const n = e[r];
      we(n, o, r, t);
    }
    return o;
  };
  we = (e, t, o, r) => {
    const n = e.length;
    for (let i = 0; i < n; i++) {
      const s = e[i];
      Et(s, t, o, r);
    }
  };
  Et = (e, t, o, r) => {
    if (typeof e == "string") {
      Ot(e, t, o);
      return;
    }
    if (typeof e == "function") {
      Pt(e, t, o, r);
      return;
    }
    Gt(e, t, o, r);
  };
  Ot = (e, t, o) => {
    const r = e === "" ? t : Ve(t, e);
    r.classGroupId = o;
  };
  Pt = (e, t, o, r) => {
    if (Lt(e)) {
      we(e(r), t, o, r);
      return;
    }
    t.validators === null && (t.validators = []), t.validators.push(Rt(o, e));
  };
  Gt = (e, t, o, r) => {
    const n = Object.entries(e), i = n.length;
    for (let s = 0; s < i; s++) {
      const [b, c] = n[s];
      we(c, Ve(t, b), o, r);
    }
  };
  Ve = (e, t) => {
    let o = e;
    const r = t.split(ie), n = r.length;
    for (let i = 0; i < n; i++) {
      const s = r[i];
      let b = o.nextPart.get(s);
      b || (b = We(), o.nextPart.set(s, b)), o = b;
    }
    return o;
  };
  Lt = (e) => "isThemeGetter" in e && e.isThemeGetter === true;
  Wt = (e) => {
    if (e < 1) return {
      get: () => {
      },
      set: () => {
      }
    };
    let t = 0, o = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
    const n = (i, s) => {
      o[i] = s, t++, t > e && (t = 0, r = o, o = /* @__PURE__ */ Object.create(null));
    };
    return {
      get(i) {
        let s = o[i];
        if (s !== void 0) return s;
        if ((s = r[i]) !== void 0) return n(i, s), s;
      },
      set(i, s) {
        i in o ? o[i] = s : n(i, s);
      }
    };
  };
  ge = "!";
  je = ":";
  Ft = [];
  Te = (e, t, o, r, n) => ({
    modifiers: e,
    hasImportantModifier: t,
    baseClassName: o,
    maybePostfixModifierPosition: r,
    isExternal: n
  });
  Vt = (e) => {
    const { prefix: t, experimentalParseClassName: o } = e;
    let r = (n) => {
      const i = [];
      let s = 0, b = 0, c = 0, f;
      const h = n.length;
      for (let A = 0; A < h; A++) {
        const x = n[A];
        if (s === 0 && b === 0) {
          if (x === je) {
            i.push(n.slice(c, A)), c = A + 1;
            continue;
          }
          if (x === "/") {
            f = A;
            continue;
          }
        }
        x === "[" ? s++ : x === "]" ? s-- : x === "(" ? b++ : x === ")" && b--;
      }
      const z = i.length === 0 ? n : n.slice(c);
      let C = z, T = false;
      z.endsWith(ge) ? (C = z.slice(0, -1), T = true) : z.startsWith(ge) && (C = z.slice(1), T = true);
      const N = f && f > c ? f - c : void 0;
      return Te(i, T, C, N);
    };
    if (t) {
      const n = t + je, i = r;
      r = (s) => s.startsWith(n) ? i(s.slice(n.length)) : Te(Ft, false, s, void 0, true);
    }
    if (o) {
      const n = r;
      r = (i) => o({
        className: i,
        parseClassName: n
      });
    }
    return r;
  };
  Bt = (e) => {
    const t = /* @__PURE__ */ new Map();
    return e.orderSensitiveModifiers.forEach((o, r) => {
      t.set(o, 1e6 + r);
    }), (o) => {
      const r = [];
      let n = [];
      for (let i = 0; i < o.length; i++) {
        const s = o[i], b = s[0] === "[", c = t.has(s);
        b || c ? (n.length > 0 && (n.sort(), r.push(...n), n = []), r.push(s)) : n.push(s);
      }
      return n.length > 0 && (n.sort(), r.push(...n)), r;
    };
  };
  Ut = (e) => ({
    cache: Wt(e.cacheSize),
    parseClassName: Vt(e),
    sortModifiers: Bt(e),
    ...Mt(e)
  });
  $t = /\s+/;
  Dt = (e, t) => {
    const { parseClassName: o, getClassGroupId: r, getConflictingClassGroupIds: n, sortModifiers: i } = t, s = [], b = e.trim().split($t);
    let c = "";
    for (let f = b.length - 1; f >= 0; f -= 1) {
      const h = b[f], { isExternal: z, modifiers: C, hasImportantModifier: T, baseClassName: N, maybePostfixModifierPosition: A } = o(h);
      if (z) {
        c = h + (c.length > 0 ? " " + c : c);
        continue;
      }
      let x = !!A, E = r(x ? N.substring(0, A) : N);
      if (!E) {
        if (!x) {
          c = h + (c.length > 0 ? " " + c : c);
          continue;
        }
        if (E = r(N), !E) {
          c = h + (c.length > 0 ? " " + c : c);
          continue;
        }
        x = false;
      }
      const X = C.length === 0 ? "" : C.length === 1 ? C[0] : i(C).join(":"), $ = T ? X + ge : X, F = $ + E;
      if (s.indexOf(F) > -1) continue;
      s.push(F);
      const V = n(E, x);
      for (let O = 0; O < V.length; ++O) {
        const D = V[O];
        s.push($ + D);
      }
      c = h + (c.length > 0 ? " " + c : c);
    }
    return c;
  };
  qt = (...e) => {
    let t = 0, o, r, n = "";
    for (; t < e.length; ) (o = e[t++]) && (r = Be(o)) && (n && (n += " "), n += r);
    return n;
  };
  Be = (e) => {
    if (typeof e == "string") return e;
    let t, o = "";
    for (let r = 0; r < e.length; r++) e[r] && (t = Be(e[r])) && (o && (o += " "), o += t);
    return o;
  };
  Yt = (e, ...t) => {
    let o, r, n, i;
    const s = (c) => {
      const f = t.reduce((h, z) => z(h), e());
      return o = Ut(f), r = o.cache.get, n = o.cache.set, i = b, b(c);
    }, b = (c) => {
      const f = r(c);
      if (f) return f;
      const h = Dt(c, o);
      return n(c, h), h;
    };
    return i = s, (...c) => i(qt(...c));
  };
  Xt = [];
  p = (e) => {
    const t = (o) => o[e] || Xt;
    return t.isThemeGetter = true, t;
  };
  Ue = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
  $e = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
  Jt = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/;
  Qt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
  Ht = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
  Kt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
  Zt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
  er = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
  I = (e) => Jt.test(e);
  u = (e) => !!e && !Number.isNaN(Number(e));
  M = (e) => !!e && Number.isInteger(Number(e));
  fe = (e) => e.endsWith("%") && u(e.slice(0, -1));
  R = (e) => Qt.test(e);
  De = () => true;
  tr = (e) => Ht.test(e) && !Kt.test(e);
  _e = () => false;
  rr = (e) => Zt.test(e);
  or = (e) => er.test(e);
  nr = (e) => !a(e) && !l(e);
  sr = (e) => j(e, Xe, _e);
  a = (e) => Ue.test(e);
  G = (e) => j(e, Je, tr);
  Ne = (e) => j(e, ur, u);
  ir = (e) => j(e, He, De);
  ar = (e) => j(e, Qe, _e);
  Ee = (e) => j(e, qe, _e);
  lr = (e) => j(e, Ye, or);
  te = (e) => j(e, Ke, rr);
  l = (e) => $e.test(e);
  q = (e) => W(e, Je);
  cr = (e) => W(e, Qe);
  Oe = (e) => W(e, qe);
  dr = (e) => W(e, Xe);
  mr = (e) => W(e, Ye);
  re = (e) => W(e, Ke, true);
  br = (e) => W(e, He, true);
  j = (e, t, o) => {
    const r = Ue.exec(e);
    return r ? r[1] ? t(r[1]) : o(r[2]) : false;
  };
  W = (e, t, o = false) => {
    const r = $e.exec(e);
    return r ? r[1] ? t(r[1]) : o : false;
  };
  qe = (e) => e === "position" || e === "percentage";
  Ye = (e) => e === "image" || e === "url";
  Xe = (e) => e === "length" || e === "size" || e === "bg-size";
  Je = (e) => e === "length";
  ur = (e) => e === "number";
  Qe = (e) => e === "family-name";
  He = (e) => e === "number" || e === "weight";
  Ke = (e) => e === "shadow";
  fr = () => {
    const e = p("color"), t = p("font"), o = p("text"), r = p("font-weight"), n = p("tracking"), i = p("leading"), s = p("breakpoint"), b = p("container"), c = p("spacing"), f = p("radius"), h = p("shadow"), z = p("inset-shadow"), C = p("text-shadow"), T = p("drop-shadow"), N = p("blur"), A = p("perspective"), x = p("aspect"), E = p("ease"), X = p("animate"), $ = () => [
      "auto",
      "avoid",
      "all",
      "avoid-page",
      "page",
      "left",
      "right",
      "column"
    ], F = () => [
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
    ], V = () => [
      ...F(),
      l,
      a
    ], O = () => [
      "auto",
      "hidden",
      "clip",
      "visible",
      "scroll"
    ], D = () => [
      "auto",
      "contain",
      "none"
    ], d = () => [
      l,
      a,
      c
    ], k = () => [
      I,
      "full",
      "auto",
      ...d()
    ], ye = () => [
      M,
      "none",
      "subgrid",
      l,
      a
    ], xe = () => [
      "auto",
      {
        span: [
          "full",
          M,
          l,
          a
        ]
      },
      M,
      l,
      a
    ], J = () => [
      M,
      "auto",
      l,
      a
    ], ke = () => [
      "auto",
      "min",
      "max",
      "fr",
      l,
      a
    ], le = () => [
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
    ], B = () => [
      "start",
      "end",
      "center",
      "stretch",
      "center-safe",
      "end-safe"
    ], S = () => [
      "auto",
      ...d()
    ], P = () => [
      I,
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
      ...d()
    ], ce = () => [
      I,
      "screen",
      "full",
      "dvw",
      "lvw",
      "svw",
      "min",
      "max",
      "fit",
      ...d()
    ], de = () => [
      I,
      "screen",
      "full",
      "lh",
      "dvh",
      "lvh",
      "svh",
      "min",
      "max",
      "fit",
      ...d()
    ], m = () => [
      e,
      l,
      a
    ], ve = () => [
      ...F(),
      Oe,
      Ee,
      {
        position: [
          l,
          a
        ]
      }
    ], ze = () => [
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
    ], Ae = () => [
      "auto",
      "cover",
      "contain",
      dr,
      sr,
      {
        size: [
          l,
          a
        ]
      }
    ], me = () => [
      fe,
      q,
      G
    ], w = () => [
      "",
      "none",
      "full",
      f,
      l,
      a
    ], _ = () => [
      "",
      u,
      q,
      G
    ], Q = () => [
      "solid",
      "dashed",
      "dotted",
      "double"
    ], Se = () => [
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
    ], g = () => [
      u,
      fe,
      Oe,
      Ee
    ], Ce = () => [
      "",
      "none",
      N,
      l,
      a
    ], H = () => [
      "none",
      u,
      l,
      a
    ], K = () => [
      "none",
      u,
      l,
      a
    ], be = () => [
      u,
      l,
      a
    ], Z = () => [
      I,
      "full",
      ...d()
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
          R
        ],
        breakpoint: [
          R
        ],
        color: [
          De
        ],
        container: [
          R
        ],
        "drop-shadow": [
          R
        ],
        ease: [
          "in",
          "out",
          "in-out"
        ],
        font: [
          nr
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
          R
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
          R
        ],
        shadow: [
          R
        ],
        spacing: [
          "px",
          u
        ],
        text: [
          R
        ],
        "text-shadow": [
          R
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
              I,
              a,
              l,
              x
            ]
          }
        ],
        container: [
          "container"
        ],
        columns: [
          {
            columns: [
              u,
              a,
              l,
              b
            ]
          }
        ],
        "break-after": [
          {
            "break-after": $()
          }
        ],
        "break-before": [
          {
            "break-before": $()
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
            object: V()
          }
        ],
        overflow: [
          {
            overflow: O()
          }
        ],
        "overflow-x": [
          {
            "overflow-x": O()
          }
        ],
        "overflow-y": [
          {
            "overflow-y": O()
          }
        ],
        overscroll: [
          {
            overscroll: D()
          }
        ],
        "overscroll-x": [
          {
            "overscroll-x": D()
          }
        ],
        "overscroll-y": [
          {
            "overscroll-y": D()
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
            inset: k()
          }
        ],
        "inset-x": [
          {
            "inset-x": k()
          }
        ],
        "inset-y": [
          {
            "inset-y": k()
          }
        ],
        start: [
          {
            "inset-s": k(),
            start: k()
          }
        ],
        end: [
          {
            "inset-e": k(),
            end: k()
          }
        ],
        "inset-bs": [
          {
            "inset-bs": k()
          }
        ],
        "inset-be": [
          {
            "inset-be": k()
          }
        ],
        top: [
          {
            top: k()
          }
        ],
        right: [
          {
            right: k()
          }
        ],
        bottom: [
          {
            bottom: k()
          }
        ],
        left: [
          {
            left: k()
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
              M,
              "auto",
              l,
              a
            ]
          }
        ],
        basis: [
          {
            basis: [
              I,
              "full",
              "auto",
              b,
              ...d()
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
              u,
              I,
              "auto",
              "initial",
              "none",
              a
            ]
          }
        ],
        grow: [
          {
            grow: [
              "",
              u,
              l,
              a
            ]
          }
        ],
        shrink: [
          {
            shrink: [
              "",
              u,
              l,
              a
            ]
          }
        ],
        order: [
          {
            order: [
              M,
              "first",
              "last",
              "none",
              l,
              a
            ]
          }
        ],
        "grid-cols": [
          {
            "grid-cols": ye()
          }
        ],
        "col-start-end": [
          {
            col: xe()
          }
        ],
        "col-start": [
          {
            "col-start": J()
          }
        ],
        "col-end": [
          {
            "col-end": J()
          }
        ],
        "grid-rows": [
          {
            "grid-rows": ye()
          }
        ],
        "row-start-end": [
          {
            row: xe()
          }
        ],
        "row-start": [
          {
            "row-start": J()
          }
        ],
        "row-end": [
          {
            "row-end": J()
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
            "auto-cols": ke()
          }
        ],
        "auto-rows": [
          {
            "auto-rows": ke()
          }
        ],
        gap: [
          {
            gap: d()
          }
        ],
        "gap-x": [
          {
            "gap-x": d()
          }
        ],
        "gap-y": [
          {
            "gap-y": d()
          }
        ],
        "justify-content": [
          {
            justify: [
              ...le(),
              "normal"
            ]
          }
        ],
        "justify-items": [
          {
            "justify-items": [
              ...B(),
              "normal"
            ]
          }
        ],
        "justify-self": [
          {
            "justify-self": [
              "auto",
              ...B()
            ]
          }
        ],
        "align-content": [
          {
            content: [
              "normal",
              ...le()
            ]
          }
        ],
        "align-items": [
          {
            items: [
              ...B(),
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
              ...B(),
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
            "place-content": le()
          }
        ],
        "place-items": [
          {
            "place-items": [
              ...B(),
              "baseline"
            ]
          }
        ],
        "place-self": [
          {
            "place-self": [
              "auto",
              ...B()
            ]
          }
        ],
        p: [
          {
            p: d()
          }
        ],
        px: [
          {
            px: d()
          }
        ],
        py: [
          {
            py: d()
          }
        ],
        ps: [
          {
            ps: d()
          }
        ],
        pe: [
          {
            pe: d()
          }
        ],
        pbs: [
          {
            pbs: d()
          }
        ],
        pbe: [
          {
            pbe: d()
          }
        ],
        pt: [
          {
            pt: d()
          }
        ],
        pr: [
          {
            pr: d()
          }
        ],
        pb: [
          {
            pb: d()
          }
        ],
        pl: [
          {
            pl: d()
          }
        ],
        m: [
          {
            m: S()
          }
        ],
        mx: [
          {
            mx: S()
          }
        ],
        my: [
          {
            my: S()
          }
        ],
        ms: [
          {
            ms: S()
          }
        ],
        me: [
          {
            me: S()
          }
        ],
        mbs: [
          {
            mbs: S()
          }
        ],
        mbe: [
          {
            mbe: S()
          }
        ],
        mt: [
          {
            mt: S()
          }
        ],
        mr: [
          {
            mr: S()
          }
        ],
        mb: [
          {
            mb: S()
          }
        ],
        ml: [
          {
            ml: S()
          }
        ],
        "space-x": [
          {
            "space-x": d()
          }
        ],
        "space-x-reverse": [
          "space-x-reverse"
        ],
        "space-y": [
          {
            "space-y": d()
          }
        ],
        "space-y-reverse": [
          "space-y-reverse"
        ],
        size: [
          {
            size: P()
          }
        ],
        "inline-size": [
          {
            inline: [
              "auto",
              ...ce()
            ]
          }
        ],
        "min-inline-size": [
          {
            "min-inline": [
              "auto",
              ...ce()
            ]
          }
        ],
        "max-inline-size": [
          {
            "max-inline": [
              "none",
              ...ce()
            ]
          }
        ],
        "block-size": [
          {
            block: [
              "auto",
              ...de()
            ]
          }
        ],
        "min-block-size": [
          {
            "min-block": [
              "auto",
              ...de()
            ]
          }
        ],
        "max-block-size": [
          {
            "max-block": [
              "none",
              ...de()
            ]
          }
        ],
        w: [
          {
            w: [
              b,
              "screen",
              ...P()
            ]
          }
        ],
        "min-w": [
          {
            "min-w": [
              b,
              "screen",
              "none",
              ...P()
            ]
          }
        ],
        "max-w": [
          {
            "max-w": [
              b,
              "screen",
              "none",
              "prose",
              {
                screen: [
                  s
                ]
              },
              ...P()
            ]
          }
        ],
        h: [
          {
            h: [
              "screen",
              "lh",
              ...P()
            ]
          }
        ],
        "min-h": [
          {
            "min-h": [
              "screen",
              "lh",
              "none",
              ...P()
            ]
          }
        ],
        "max-h": [
          {
            "max-h": [
              "screen",
              "lh",
              ...P()
            ]
          }
        ],
        "font-size": [
          {
            text: [
              "base",
              o,
              q,
              G
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
              r,
              br,
              ir
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
              fe,
              a
            ]
          }
        ],
        "font-family": [
          {
            font: [
              cr,
              ar,
              t
            ]
          }
        ],
        "font-features": [
          {
            "font-features": [
              a
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
              n,
              l,
              a
            ]
          }
        ],
        "line-clamp": [
          {
            "line-clamp": [
              u,
              "none",
              l,
              Ne
            ]
          }
        ],
        leading: [
          {
            leading: [
              i,
              ...d()
            ]
          }
        ],
        "list-image": [
          {
            "list-image": [
              "none",
              l,
              a
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
              l,
              a
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
            placeholder: m()
          }
        ],
        "text-color": [
          {
            text: m()
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
              ...Q(),
              "wavy"
            ]
          }
        ],
        "text-decoration-thickness": [
          {
            decoration: [
              u,
              "from-font",
              "auto",
              l,
              G
            ]
          }
        ],
        "text-decoration-color": [
          {
            decoration: m()
          }
        ],
        "underline-offset": [
          {
            "underline-offset": [
              u,
              "auto",
              l,
              a
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
            indent: d()
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
              l,
              a
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
              l,
              a
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
            bg: ve()
          }
        ],
        "bg-repeat": [
          {
            bg: ze()
          }
        ],
        "bg-size": [
          {
            bg: Ae()
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
                  M,
                  l,
                  a
                ],
                radial: [
                  "",
                  l,
                  a
                ],
                conic: [
                  M,
                  l,
                  a
                ]
              },
              mr,
              lr
            ]
          }
        ],
        "bg-color": [
          {
            bg: m()
          }
        ],
        "gradient-from-pos": [
          {
            from: me()
          }
        ],
        "gradient-via-pos": [
          {
            via: me()
          }
        ],
        "gradient-to-pos": [
          {
            to: me()
          }
        ],
        "gradient-from": [
          {
            from: m()
          }
        ],
        "gradient-via": [
          {
            via: m()
          }
        ],
        "gradient-to": [
          {
            to: m()
          }
        ],
        rounded: [
          {
            rounded: w()
          }
        ],
        "rounded-s": [
          {
            "rounded-s": w()
          }
        ],
        "rounded-e": [
          {
            "rounded-e": w()
          }
        ],
        "rounded-t": [
          {
            "rounded-t": w()
          }
        ],
        "rounded-r": [
          {
            "rounded-r": w()
          }
        ],
        "rounded-b": [
          {
            "rounded-b": w()
          }
        ],
        "rounded-l": [
          {
            "rounded-l": w()
          }
        ],
        "rounded-ss": [
          {
            "rounded-ss": w()
          }
        ],
        "rounded-se": [
          {
            "rounded-se": w()
          }
        ],
        "rounded-ee": [
          {
            "rounded-ee": w()
          }
        ],
        "rounded-es": [
          {
            "rounded-es": w()
          }
        ],
        "rounded-tl": [
          {
            "rounded-tl": w()
          }
        ],
        "rounded-tr": [
          {
            "rounded-tr": w()
          }
        ],
        "rounded-br": [
          {
            "rounded-br": w()
          }
        ],
        "rounded-bl": [
          {
            "rounded-bl": w()
          }
        ],
        "border-w": [
          {
            border: _()
          }
        ],
        "border-w-x": [
          {
            "border-x": _()
          }
        ],
        "border-w-y": [
          {
            "border-y": _()
          }
        ],
        "border-w-s": [
          {
            "border-s": _()
          }
        ],
        "border-w-e": [
          {
            "border-e": _()
          }
        ],
        "border-w-bs": [
          {
            "border-bs": _()
          }
        ],
        "border-w-be": [
          {
            "border-be": _()
          }
        ],
        "border-w-t": [
          {
            "border-t": _()
          }
        ],
        "border-w-r": [
          {
            "border-r": _()
          }
        ],
        "border-w-b": [
          {
            "border-b": _()
          }
        ],
        "border-w-l": [
          {
            "border-l": _()
          }
        ],
        "divide-x": [
          {
            "divide-x": _()
          }
        ],
        "divide-x-reverse": [
          "divide-x-reverse"
        ],
        "divide-y": [
          {
            "divide-y": _()
          }
        ],
        "divide-y-reverse": [
          "divide-y-reverse"
        ],
        "border-style": [
          {
            border: [
              ...Q(),
              "hidden",
              "none"
            ]
          }
        ],
        "divide-style": [
          {
            divide: [
              ...Q(),
              "hidden",
              "none"
            ]
          }
        ],
        "border-color": [
          {
            border: m()
          }
        ],
        "border-color-x": [
          {
            "border-x": m()
          }
        ],
        "border-color-y": [
          {
            "border-y": m()
          }
        ],
        "border-color-s": [
          {
            "border-s": m()
          }
        ],
        "border-color-e": [
          {
            "border-e": m()
          }
        ],
        "border-color-bs": [
          {
            "border-bs": m()
          }
        ],
        "border-color-be": [
          {
            "border-be": m()
          }
        ],
        "border-color-t": [
          {
            "border-t": m()
          }
        ],
        "border-color-r": [
          {
            "border-r": m()
          }
        ],
        "border-color-b": [
          {
            "border-b": m()
          }
        ],
        "border-color-l": [
          {
            "border-l": m()
          }
        ],
        "divide-color": [
          {
            divide: m()
          }
        ],
        "outline-style": [
          {
            outline: [
              ...Q(),
              "none",
              "hidden"
            ]
          }
        ],
        "outline-offset": [
          {
            "outline-offset": [
              u,
              l,
              a
            ]
          }
        ],
        "outline-w": [
          {
            outline: [
              "",
              u,
              q,
              G
            ]
          }
        ],
        "outline-color": [
          {
            outline: m()
          }
        ],
        shadow: [
          {
            shadow: [
              "",
              "none",
              h,
              re,
              te
            ]
          }
        ],
        "shadow-color": [
          {
            shadow: m()
          }
        ],
        "inset-shadow": [
          {
            "inset-shadow": [
              "none",
              z,
              re,
              te
            ]
          }
        ],
        "inset-shadow-color": [
          {
            "inset-shadow": m()
          }
        ],
        "ring-w": [
          {
            ring: _()
          }
        ],
        "ring-w-inset": [
          "ring-inset"
        ],
        "ring-color": [
          {
            ring: m()
          }
        ],
        "ring-offset-w": [
          {
            "ring-offset": [
              u,
              G
            ]
          }
        ],
        "ring-offset-color": [
          {
            "ring-offset": m()
          }
        ],
        "inset-ring-w": [
          {
            "inset-ring": _()
          }
        ],
        "inset-ring-color": [
          {
            "inset-ring": m()
          }
        ],
        "text-shadow": [
          {
            "text-shadow": [
              "none",
              C,
              re,
              te
            ]
          }
        ],
        "text-shadow-color": [
          {
            "text-shadow": m()
          }
        ],
        opacity: [
          {
            opacity: [
              u,
              l,
              a
            ]
          }
        ],
        "mix-blend": [
          {
            "mix-blend": [
              ...Se(),
              "plus-darker",
              "plus-lighter"
            ]
          }
        ],
        "bg-blend": [
          {
            "bg-blend": Se()
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
              u
            ]
          }
        ],
        "mask-image-linear-from-pos": [
          {
            "mask-linear-from": g()
          }
        ],
        "mask-image-linear-to-pos": [
          {
            "mask-linear-to": g()
          }
        ],
        "mask-image-linear-from-color": [
          {
            "mask-linear-from": m()
          }
        ],
        "mask-image-linear-to-color": [
          {
            "mask-linear-to": m()
          }
        ],
        "mask-image-t-from-pos": [
          {
            "mask-t-from": g()
          }
        ],
        "mask-image-t-to-pos": [
          {
            "mask-t-to": g()
          }
        ],
        "mask-image-t-from-color": [
          {
            "mask-t-from": m()
          }
        ],
        "mask-image-t-to-color": [
          {
            "mask-t-to": m()
          }
        ],
        "mask-image-r-from-pos": [
          {
            "mask-r-from": g()
          }
        ],
        "mask-image-r-to-pos": [
          {
            "mask-r-to": g()
          }
        ],
        "mask-image-r-from-color": [
          {
            "mask-r-from": m()
          }
        ],
        "mask-image-r-to-color": [
          {
            "mask-r-to": m()
          }
        ],
        "mask-image-b-from-pos": [
          {
            "mask-b-from": g()
          }
        ],
        "mask-image-b-to-pos": [
          {
            "mask-b-to": g()
          }
        ],
        "mask-image-b-from-color": [
          {
            "mask-b-from": m()
          }
        ],
        "mask-image-b-to-color": [
          {
            "mask-b-to": m()
          }
        ],
        "mask-image-l-from-pos": [
          {
            "mask-l-from": g()
          }
        ],
        "mask-image-l-to-pos": [
          {
            "mask-l-to": g()
          }
        ],
        "mask-image-l-from-color": [
          {
            "mask-l-from": m()
          }
        ],
        "mask-image-l-to-color": [
          {
            "mask-l-to": m()
          }
        ],
        "mask-image-x-from-pos": [
          {
            "mask-x-from": g()
          }
        ],
        "mask-image-x-to-pos": [
          {
            "mask-x-to": g()
          }
        ],
        "mask-image-x-from-color": [
          {
            "mask-x-from": m()
          }
        ],
        "mask-image-x-to-color": [
          {
            "mask-x-to": m()
          }
        ],
        "mask-image-y-from-pos": [
          {
            "mask-y-from": g()
          }
        ],
        "mask-image-y-to-pos": [
          {
            "mask-y-to": g()
          }
        ],
        "mask-image-y-from-color": [
          {
            "mask-y-from": m()
          }
        ],
        "mask-image-y-to-color": [
          {
            "mask-y-to": m()
          }
        ],
        "mask-image-radial": [
          {
            "mask-radial": [
              l,
              a
            ]
          }
        ],
        "mask-image-radial-from-pos": [
          {
            "mask-radial-from": g()
          }
        ],
        "mask-image-radial-to-pos": [
          {
            "mask-radial-to": g()
          }
        ],
        "mask-image-radial-from-color": [
          {
            "mask-radial-from": m()
          }
        ],
        "mask-image-radial-to-color": [
          {
            "mask-radial-to": m()
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
            "mask-radial-at": F()
          }
        ],
        "mask-image-conic-pos": [
          {
            "mask-conic": [
              u
            ]
          }
        ],
        "mask-image-conic-from-pos": [
          {
            "mask-conic-from": g()
          }
        ],
        "mask-image-conic-to-pos": [
          {
            "mask-conic-to": g()
          }
        ],
        "mask-image-conic-from-color": [
          {
            "mask-conic-from": m()
          }
        ],
        "mask-image-conic-to-color": [
          {
            "mask-conic-to": m()
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
            mask: ve()
          }
        ],
        "mask-repeat": [
          {
            mask: ze()
          }
        ],
        "mask-size": [
          {
            mask: Ae()
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
              l,
              a
            ]
          }
        ],
        filter: [
          {
            filter: [
              "",
              "none",
              l,
              a
            ]
          }
        ],
        blur: [
          {
            blur: Ce()
          }
        ],
        brightness: [
          {
            brightness: [
              u,
              l,
              a
            ]
          }
        ],
        contrast: [
          {
            contrast: [
              u,
              l,
              a
            ]
          }
        ],
        "drop-shadow": [
          {
            "drop-shadow": [
              "",
              "none",
              T,
              re,
              te
            ]
          }
        ],
        "drop-shadow-color": [
          {
            "drop-shadow": m()
          }
        ],
        grayscale: [
          {
            grayscale: [
              "",
              u,
              l,
              a
            ]
          }
        ],
        "hue-rotate": [
          {
            "hue-rotate": [
              u,
              l,
              a
            ]
          }
        ],
        invert: [
          {
            invert: [
              "",
              u,
              l,
              a
            ]
          }
        ],
        saturate: [
          {
            saturate: [
              u,
              l,
              a
            ]
          }
        ],
        sepia: [
          {
            sepia: [
              "",
              u,
              l,
              a
            ]
          }
        ],
        "backdrop-filter": [
          {
            "backdrop-filter": [
              "",
              "none",
              l,
              a
            ]
          }
        ],
        "backdrop-blur": [
          {
            "backdrop-blur": Ce()
          }
        ],
        "backdrop-brightness": [
          {
            "backdrop-brightness": [
              u,
              l,
              a
            ]
          }
        ],
        "backdrop-contrast": [
          {
            "backdrop-contrast": [
              u,
              l,
              a
            ]
          }
        ],
        "backdrop-grayscale": [
          {
            "backdrop-grayscale": [
              "",
              u,
              l,
              a
            ]
          }
        ],
        "backdrop-hue-rotate": [
          {
            "backdrop-hue-rotate": [
              u,
              l,
              a
            ]
          }
        ],
        "backdrop-invert": [
          {
            "backdrop-invert": [
              "",
              u,
              l,
              a
            ]
          }
        ],
        "backdrop-opacity": [
          {
            "backdrop-opacity": [
              u,
              l,
              a
            ]
          }
        ],
        "backdrop-saturate": [
          {
            "backdrop-saturate": [
              u,
              l,
              a
            ]
          }
        ],
        "backdrop-sepia": [
          {
            "backdrop-sepia": [
              "",
              u,
              l,
              a
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
            "border-spacing": d()
          }
        ],
        "border-spacing-x": [
          {
            "border-spacing-x": d()
          }
        ],
        "border-spacing-y": [
          {
            "border-spacing-y": d()
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
              l,
              a
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
              u,
              "initial",
              l,
              a
            ]
          }
        ],
        ease: [
          {
            ease: [
              "linear",
              "initial",
              E,
              l,
              a
            ]
          }
        ],
        delay: [
          {
            delay: [
              u,
              l,
              a
            ]
          }
        ],
        animate: [
          {
            animate: [
              "none",
              X,
              l,
              a
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
              A,
              l,
              a
            ]
          }
        ],
        "perspective-origin": [
          {
            "perspective-origin": V()
          }
        ],
        rotate: [
          {
            rotate: H()
          }
        ],
        "rotate-x": [
          {
            "rotate-x": H()
          }
        ],
        "rotate-y": [
          {
            "rotate-y": H()
          }
        ],
        "rotate-z": [
          {
            "rotate-z": H()
          }
        ],
        scale: [
          {
            scale: K()
          }
        ],
        "scale-x": [
          {
            "scale-x": K()
          }
        ],
        "scale-y": [
          {
            "scale-y": K()
          }
        ],
        "scale-z": [
          {
            "scale-z": K()
          }
        ],
        "scale-3d": [
          "scale-3d"
        ],
        skew: [
          {
            skew: be()
          }
        ],
        "skew-x": [
          {
            "skew-x": be()
          }
        ],
        "skew-y": [
          {
            "skew-y": be()
          }
        ],
        transform: [
          {
            transform: [
              l,
              a,
              "",
              "none",
              "gpu",
              "cpu"
            ]
          }
        ],
        "transform-origin": [
          {
            origin: V()
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
            translate: Z()
          }
        ],
        "translate-x": [
          {
            "translate-x": Z()
          }
        ],
        "translate-y": [
          {
            "translate-y": Z()
          }
        ],
        "translate-z": [
          {
            "translate-z": Z()
          }
        ],
        "translate-none": [
          "translate-none"
        ],
        accent: [
          {
            accent: m()
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
            caret: m()
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
              l,
              a
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
            "scroll-m": d()
          }
        ],
        "scroll-mx": [
          {
            "scroll-mx": d()
          }
        ],
        "scroll-my": [
          {
            "scroll-my": d()
          }
        ],
        "scroll-ms": [
          {
            "scroll-ms": d()
          }
        ],
        "scroll-me": [
          {
            "scroll-me": d()
          }
        ],
        "scroll-mbs": [
          {
            "scroll-mbs": d()
          }
        ],
        "scroll-mbe": [
          {
            "scroll-mbe": d()
          }
        ],
        "scroll-mt": [
          {
            "scroll-mt": d()
          }
        ],
        "scroll-mr": [
          {
            "scroll-mr": d()
          }
        ],
        "scroll-mb": [
          {
            "scroll-mb": d()
          }
        ],
        "scroll-ml": [
          {
            "scroll-ml": d()
          }
        ],
        "scroll-p": [
          {
            "scroll-p": d()
          }
        ],
        "scroll-px": [
          {
            "scroll-px": d()
          }
        ],
        "scroll-py": [
          {
            "scroll-py": d()
          }
        ],
        "scroll-ps": [
          {
            "scroll-ps": d()
          }
        ],
        "scroll-pe": [
          {
            "scroll-pe": d()
          }
        ],
        "scroll-pbs": [
          {
            "scroll-pbs": d()
          }
        ],
        "scroll-pbe": [
          {
            "scroll-pbe": d()
          }
        ],
        "scroll-pt": [
          {
            "scroll-pt": d()
          }
        ],
        "scroll-pr": [
          {
            "scroll-pr": d()
          }
        ],
        "scroll-pb": [
          {
            "scroll-pb": d()
          }
        ],
        "scroll-pl": [
          {
            "scroll-pl": d()
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
              l,
              a
            ]
          }
        ],
        fill: [
          {
            fill: [
              "none",
              ...m()
            ]
          }
        ],
        "stroke-w": [
          {
            stroke: [
              u,
              q,
              G,
              Ne
            ]
          }
        ],
        stroke: [
          {
            stroke: [
              "none",
              ...m()
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
          "inset-bs",
          "inset-be",
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
          "pbs",
          "pbe",
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
          "mbs",
          "mbe",
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
          "border-w-bs",
          "border-w-be",
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
          "border-color-bs",
          "border-color-be",
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
          "scroll-mbs",
          "scroll-mbe",
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
          "scroll-pbs",
          "scroll-pbe",
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
  };
  pr = Yt(fr);
  Ze = (e, t) => e && t ? `${e} ${t}` : e || t || "at will";
  function ae(...e) {
    return pr(St(e));
  }
  function gr({ quantity: e, unit: t, children: o, className: r }) {
    return y.jsx("span", {
      tabIndex: 0,
      title: Ze(e, t),
      className: ae("recp--ingredient bg-fuchsia-100 dark:bg-fuchsia-800 mb-1", r),
      children: o
    });
  }
  function hr({ children: e }) {
    return y.jsx("span", {
      className: "mb-1",
      children: e
    });
  }
  wr = function({ quantity: e, unit: t, children: o, className: r, baseUrl: n, path: i, tag: s = "a" }) {
    let b = new URL(i, n);
    return y.jsx(s, {
      tabIndex: 0,
      href: b.toString(),
      title: Ze(e, t),
      className: ae("recp--reciperef text-link hover:text-link/90", r),
      target: "_blank noopener noreferrer",
      children: o
    });
  };
  function _r({ children: e, className: t }) {
    return y.jsx("span", {
      className: ae("recp--material bg-yellow-100 dark:bg-yellow-800 mb-1", t),
      children: e
    });
  }
  function yr({ children: e, className: t }) {
    return y.jsx("span", {
      className: ae("recp--timer bg-orange-100 dark:bg-orange-800 mb-1", t),
      children: e
    });
  }
  const xr = ({ children: e }) => y.jsx(y.Fragment, {
    children: e
  });
  zr = function({ tokens: e, RecipeRefResolver: t = xr, baseUrl: o }) {
    const r = (e == null ? void 0 : e.findIndex((n) => n.token !== "Metadata" && n.token !== "Space")) || 0;
    return y.jsx("div", {
      className: "recipe-content whitespace-pre text-wrap",
      children: e.slice(r).map((n, i) => {
        switch (n.token) {
          case "Space":
            return n.content;
          case "Word":
            return y.jsx(hr, {
              children: n.content
            }, i);
          case "Ingredient":
            return y.jsx(gr, {
              quantity: n.content.quantity,
              unit: n.content.unit,
              children: n.content.name
            }, i);
          case "RecipeRef":
            return y.jsx(wr, {
              quantity: n.content.quantity,
              unit: n.content.unit,
              path: n.content.name,
              baseUrl: o,
              children: y.jsx(t, {
                children: n.content.name
              })
            }, i);
          case "Material":
            return y.jsx(_r, {
              children: n.content
            }, i);
          case "Timer":
            return y.jsx(yr, {
              children: n.content
            }, i);
        }
      })
    });
  };
})();
export {
  zr as I,
  __tla,
  St as c,
  wr as f,
  vr as p,
  pr as t
};
