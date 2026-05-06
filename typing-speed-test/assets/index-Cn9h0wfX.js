(function () {
  const R = document.createElement("link").relList;
  if (R && R.supports && R.supports("modulepreload")) return;
  for (const q of document.querySelectorAll('link[rel="modulepreload"]')) h(q);
  new MutationObserver((q) => {
    for (const Z of q)
      if (Z.type === "childList")
        for (const el of Z.addedNodes) el.tagName === "LINK" && el.rel === "modulepreload" && h(el);
  }).observe(document, { childList: !0, subtree: !0 });
  function N(q) {
    const Z = {};
    return (
      q.integrity && (Z.integrity = q.integrity),
      q.referrerPolicy && (Z.referrerPolicy = q.referrerPolicy),
      q.crossOrigin === "use-credentials"
        ? (Z.credentials = "include")
        : q.crossOrigin === "anonymous"
          ? (Z.credentials = "omit")
          : (Z.credentials = "same-origin"),
      Z
    );
  }
  function h(q) {
    if (q.ep) return;
    q.ep = !0;
    const Z = N(q);
    fetch(q.href, Z);
  }
})();
var uf = { exports: {} },
  Su = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var md;
function Wy() {
  if (md) return Su;
  md = 1;
  var g = Symbol.for("react.transitional.element"),
    R = Symbol.for("react.fragment");
  function N(h, q, Z) {
    var el = null;
    if ((Z !== void 0 && (el = "" + Z), q.key !== void 0 && (el = "" + q.key), "key" in q)) {
      Z = {};
      for (var vl in q) vl !== "key" && (Z[vl] = q[vl]);
    } else Z = q;
    return ((q = Z.ref), { $$typeof: g, type: h, key: el, ref: q !== void 0 ? q : null, props: Z });
  }
  return ((Su.Fragment = R), (Su.jsx = N), (Su.jsxs = N), Su);
}
var rd;
function $y() {
  return (rd || ((rd = 1), (uf.exports = Wy())), uf.exports);
}
var X = $y(),
  nf = { exports: {} },
  Y = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vd;
function ky() {
  if (vd) return Y;
  vd = 1;
  var g = Symbol.for("react.transitional.element"),
    R = Symbol.for("react.portal"),
    N = Symbol.for("react.fragment"),
    h = Symbol.for("react.strict_mode"),
    q = Symbol.for("react.profiler"),
    Z = Symbol.for("react.consumer"),
    el = Symbol.for("react.context"),
    vl = Symbol.for("react.forward_ref"),
    H = Symbol.for("react.suspense"),
    E = Symbol.for("react.memo"),
    P = Symbol.for("react.lazy"),
    B = Symbol.for("react.activity"),
    hl = Symbol.iterator;
  function Wl(o) {
    return o === null || typeof o != "object"
      ? null
      : ((o = (hl && o[hl]) || o["@@iterator"]), typeof o == "function" ? o : null);
  }
  var Yl = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    ql = Object.assign,
    Dt = {};
  function $l(o, T, _) {
    ((this.props = o), (this.context = T), (this.refs = Dt), (this.updater = _ || Yl));
  }
  (($l.prototype.isReactComponent = {}),
    ($l.prototype.setState = function (o, T) {
      if (typeof o != "object" && typeof o != "function" && o != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, o, T, "setState");
    }),
    ($l.prototype.forceUpdate = function (o) {
      this.updater.enqueueForceUpdate(this, o, "forceUpdate");
    }));
  function Wt() {}
  Wt.prototype = $l.prototype;
  function Rl(o, T, _) {
    ((this.props = o), (this.context = T), (this.refs = Dt), (this.updater = _ || Yl));
  }
  var it = (Rl.prototype = new Wt());
  ((it.constructor = Rl), ql(it, $l.prototype), (it.isPureReactComponent = !0));
  var zt = Array.isArray;
  function jl() {}
  var W = { H: null, A: null, T: null, S: null },
    Gl = Object.prototype.hasOwnProperty;
  function Tt(o, T, _) {
    var O = _.ref;
    return { $$typeof: g, type: o, key: T, ref: O !== void 0 ? O : null, props: _ };
  }
  function Qa(o, T) {
    return Tt(o.type, T, o.props);
  }
  function Et(o) {
    return typeof o == "object" && o !== null && o.$$typeof === g;
  }
  function Ql(o) {
    var T = { "=": "=0", ":": "=2" };
    return (
      "$" +
      o.replace(/[=:]/g, function (_) {
        return T[_];
      })
    );
  }
  var pa = /\/+/g;
  function Ut(o, T) {
    return typeof o == "object" && o !== null && o.key != null ? Ql("" + o.key) : T.toString(36);
  }
  function gt(o) {
    switch (o.status) {
      case "fulfilled":
        return o.value;
      case "rejected":
        throw o.reason;
      default:
        switch (
          (typeof o.status == "string"
            ? o.then(jl, jl)
            : ((o.status = "pending"),
              o.then(
                function (T) {
                  o.status === "pending" && ((o.status = "fulfilled"), (o.value = T));
                },
                function (T) {
                  o.status === "pending" && ((o.status = "rejected"), (o.reason = T));
                },
              )),
          o.status)
        ) {
          case "fulfilled":
            return o.value;
          case "rejected":
            throw o.reason;
        }
    }
    throw o;
  }
  function b(o, T, _, O, j) {
    var V = typeof o;
    (V === "undefined" || V === "boolean") && (o = null);
    var ll = !1;
    if (o === null) ll = !0;
    else
      switch (V) {
        case "bigint":
        case "string":
        case "number":
          ll = !0;
          break;
        case "object":
          switch (o.$$typeof) {
            case g:
            case R:
              ll = !0;
              break;
            case P:
              return ((ll = o._init), b(ll(o._payload), T, _, O, j));
          }
      }
    if (ll)
      return (
        (j = j(o)),
        (ll = O === "" ? "." + Ut(o, 0) : O),
        zt(j)
          ? ((_ = ""),
            ll != null && (_ = ll.replace(pa, "$&/") + "/"),
            b(j, T, _, "", function (_e) {
              return _e;
            }))
          : j != null &&
            (Et(j) &&
              (j = Qa(
                j,
                _ +
                  (j.key == null || (o && o.key === j.key)
                    ? ""
                    : ("" + j.key).replace(pa, "$&/") + "/") +
                  ll,
              )),
            T.push(j)),
        1
      );
    ll = 0;
    var Bl = O === "" ? "." : O + ":";
    if (zt(o))
      for (var gl = 0; gl < o.length; gl++)
        ((O = o[gl]), (V = Bl + Ut(O, gl)), (ll += b(O, T, _, V, j)));
    else if (((gl = Wl(o)), typeof gl == "function"))
      for (o = gl.call(o), gl = 0; !(O = o.next()).done; )
        ((O = O.value), (V = Bl + Ut(O, gl++)), (ll += b(O, T, _, V, j)));
    else if (V === "object") {
      if (typeof o.then == "function") return b(gt(o), T, _, O, j);
      throw (
        (T = String(o)),
        Error(
          "Objects are not valid as a React child (found: " +
            (T === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : T) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return ll;
  }
  function A(o, T, _) {
    if (o == null) return o;
    var O = [],
      j = 0;
    return (
      b(o, O, "", "", function (V) {
        return T.call(_, V, j++);
      }),
      O
    );
  }
  function x(o) {
    if (o._status === -1) {
      var T = o._result;
      ((T = T()),
        T.then(
          function (_) {
            (o._status === 0 || o._status === -1) && ((o._status = 1), (o._result = _));
          },
          function (_) {
            (o._status === 0 || o._status === -1) && ((o._status = 2), (o._result = _));
          },
        ),
        o._status === -1 && ((o._status = 0), (o._result = T)));
    }
    if (o._status === 1) return o._result.default;
    throw o._result;
  }
  var ul =
      typeof reportError == "function"
        ? reportError
        : function (o) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
              var T = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof o == "object" && o !== null && typeof o.message == "string"
                    ? String(o.message)
                    : String(o),
                error: o,
              });
              if (!window.dispatchEvent(T)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
              process.emit("uncaughtException", o);
              return;
            }
            console.error(o);
          },
    fl = {
      map: A,
      forEach: function (o, T, _) {
        A(
          o,
          function () {
            T.apply(this, arguments);
          },
          _,
        );
      },
      count: function (o) {
        var T = 0;
        return (
          A(o, function () {
            T++;
          }),
          T
        );
      },
      toArray: function (o) {
        return (
          A(o, function (T) {
            return T;
          }) || []
        );
      },
      only: function (o) {
        if (!Et(o))
          throw Error("React.Children.only expected to receive a single React element child.");
        return o;
      },
    };
  return (
    (Y.Activity = B),
    (Y.Children = fl),
    (Y.Component = $l),
    (Y.Fragment = N),
    (Y.Profiler = q),
    (Y.PureComponent = Rl),
    (Y.StrictMode = h),
    (Y.Suspense = H),
    (Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W),
    (Y.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (o) {
        return W.H.useMemoCache(o);
      },
    }),
    (Y.cache = function (o) {
      return function () {
        return o.apply(null, arguments);
      };
    }),
    (Y.cacheSignal = function () {
      return null;
    }),
    (Y.cloneElement = function (o, T, _) {
      if (o == null) throw Error("The argument must be a React element, but you passed " + o + ".");
      var O = ql({}, o.props),
        j = o.key;
      if (T != null)
        for (V in (T.key !== void 0 && (j = "" + T.key), T))
          !Gl.call(T, V) ||
            V === "key" ||
            V === "__self" ||
            V === "__source" ||
            (V === "ref" && T.ref === void 0) ||
            (O[V] = T[V]);
      var V = arguments.length - 2;
      if (V === 1) O.children = _;
      else if (1 < V) {
        for (var ll = Array(V), Bl = 0; Bl < V; Bl++) ll[Bl] = arguments[Bl + 2];
        O.children = ll;
      }
      return Tt(o.type, j, O);
    }),
    (Y.createContext = function (o) {
      return (
        (o = {
          $$typeof: el,
          _currentValue: o,
          _currentValue2: o,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (o.Provider = o),
        (o.Consumer = { $$typeof: Z, _context: o }),
        o
      );
    }),
    (Y.createElement = function (o, T, _) {
      var O,
        j = {},
        V = null;
      if (T != null)
        for (O in (T.key !== void 0 && (V = "" + T.key), T))
          Gl.call(T, O) && O !== "key" && O !== "__self" && O !== "__source" && (j[O] = T[O]);
      var ll = arguments.length - 2;
      if (ll === 1) j.children = _;
      else if (1 < ll) {
        for (var Bl = Array(ll), gl = 0; gl < ll; gl++) Bl[gl] = arguments[gl + 2];
        j.children = Bl;
      }
      if (o && o.defaultProps)
        for (O in ((ll = o.defaultProps), ll)) j[O] === void 0 && (j[O] = ll[O]);
      return Tt(o, V, j);
    }),
    (Y.createRef = function () {
      return { current: null };
    }),
    (Y.forwardRef = function (o) {
      return { $$typeof: vl, render: o };
    }),
    (Y.isValidElement = Et),
    (Y.lazy = function (o) {
      return { $$typeof: P, _payload: { _status: -1, _result: o }, _init: x };
    }),
    (Y.memo = function (o, T) {
      return { $$typeof: E, type: o, compare: T === void 0 ? null : T };
    }),
    (Y.startTransition = function (o) {
      var T = W.T,
        _ = {};
      W.T = _;
      try {
        var O = o(),
          j = W.S;
        (j !== null && j(_, O),
          typeof O == "object" && O !== null && typeof O.then == "function" && O.then(jl, ul));
      } catch (V) {
        ul(V);
      } finally {
        (T !== null && _.types !== null && (T.types = _.types), (W.T = T));
      }
    }),
    (Y.unstable_useCacheRefresh = function () {
      return W.H.useCacheRefresh();
    }),
    (Y.use = function (o) {
      return W.H.use(o);
    }),
    (Y.useActionState = function (o, T, _) {
      return W.H.useActionState(o, T, _);
    }),
    (Y.useCallback = function (o, T) {
      return W.H.useCallback(o, T);
    }),
    (Y.useContext = function (o) {
      return W.H.useContext(o);
    }),
    (Y.useDebugValue = function () {}),
    (Y.useDeferredValue = function (o, T) {
      return W.H.useDeferredValue(o, T);
    }),
    (Y.useEffect = function (o, T) {
      return W.H.useEffect(o, T);
    }),
    (Y.useEffectEvent = function (o) {
      return W.H.useEffectEvent(o);
    }),
    (Y.useId = function () {
      return W.H.useId();
    }),
    (Y.useImperativeHandle = function (o, T, _) {
      return W.H.useImperativeHandle(o, T, _);
    }),
    (Y.useInsertionEffect = function (o, T) {
      return W.H.useInsertionEffect(o, T);
    }),
    (Y.useLayoutEffect = function (o, T) {
      return W.H.useLayoutEffect(o, T);
    }),
    (Y.useMemo = function (o, T) {
      return W.H.useMemo(o, T);
    }),
    (Y.useOptimistic = function (o, T) {
      return W.H.useOptimistic(o, T);
    }),
    (Y.useReducer = function (o, T, _) {
      return W.H.useReducer(o, T, _);
    }),
    (Y.useRef = function (o) {
      return W.H.useRef(o);
    }),
    (Y.useState = function (o) {
      return W.H.useState(o);
    }),
    (Y.useSyncExternalStore = function (o, T, _) {
      return W.H.useSyncExternalStore(o, T, _);
    }),
    (Y.useTransition = function () {
      return W.H.useTransition();
    }),
    (Y.version = "19.2.5"),
    Y
  );
}
var gd;
function df() {
  return (gd || ((gd = 1), (nf.exports = ky())), nf.exports);
}
var pu = df(),
  cf = { exports: {} },
  bu = {},
  ff = { exports: {} },
  sf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sd;
function Fy() {
  return (
    Sd ||
      ((Sd = 1),
      (function (g) {
        function R(b, A) {
          var x = b.length;
          b.push(A);
          l: for (; 0 < x; ) {
            var ul = (x - 1) >>> 1,
              fl = b[ul];
            if (0 < q(fl, A)) ((b[ul] = A), (b[x] = fl), (x = ul));
            else break l;
          }
        }
        function N(b) {
          return b.length === 0 ? null : b[0];
        }
        function h(b) {
          if (b.length === 0) return null;
          var A = b[0],
            x = b.pop();
          if (x !== A) {
            b[0] = x;
            l: for (var ul = 0, fl = b.length, o = fl >>> 1; ul < o; ) {
              var T = 2 * (ul + 1) - 1,
                _ = b[T],
                O = T + 1,
                j = b[O];
              if (0 > q(_, x))
                O < fl && 0 > q(j, _)
                  ? ((b[ul] = j), (b[O] = x), (ul = O))
                  : ((b[ul] = _), (b[T] = x), (ul = T));
              else if (O < fl && 0 > q(j, x)) ((b[ul] = j), (b[O] = x), (ul = O));
              else break l;
            }
          }
          return A;
        }
        function q(b, A) {
          var x = b.sortIndex - A.sortIndex;
          return x !== 0 ? x : b.id - A.id;
        }
        if (
          ((g.unstable_now = void 0),
          typeof performance == "object" && typeof performance.now == "function")
        ) {
          var Z = performance;
          g.unstable_now = function () {
            return Z.now();
          };
        } else {
          var el = Date,
            vl = el.now();
          g.unstable_now = function () {
            return el.now() - vl;
          };
        }
        var H = [],
          E = [],
          P = 1,
          B = null,
          hl = 3,
          Wl = !1,
          Yl = !1,
          ql = !1,
          Dt = !1,
          $l = typeof setTimeout == "function" ? setTimeout : null,
          Wt = typeof clearTimeout == "function" ? clearTimeout : null,
          Rl = typeof setImmediate < "u" ? setImmediate : null;
        function it(b) {
          for (var A = N(E); A !== null; ) {
            if (A.callback === null) h(E);
            else if (A.startTime <= b) (h(E), (A.sortIndex = A.expirationTime), R(H, A));
            else break;
            A = N(E);
          }
        }
        function zt(b) {
          if (((ql = !1), it(b), !Yl))
            if (N(H) !== null) ((Yl = !0), jl || ((jl = !0), Ql()));
            else {
              var A = N(E);
              A !== null && gt(zt, A.startTime - b);
            }
        }
        var jl = !1,
          W = -1,
          Gl = 5,
          Tt = -1;
        function Qa() {
          return Dt ? !0 : !(g.unstable_now() - Tt < Gl);
        }
        function Et() {
          if (((Dt = !1), jl)) {
            var b = g.unstable_now();
            Tt = b;
            var A = !0;
            try {
              l: {
                ((Yl = !1), ql && ((ql = !1), Wt(W), (W = -1)), (Wl = !0));
                var x = hl;
                try {
                  t: {
                    for (it(b), B = N(H); B !== null && !(B.expirationTime > b && Qa()); ) {
                      var ul = B.callback;
                      if (typeof ul == "function") {
                        ((B.callback = null), (hl = B.priorityLevel));
                        var fl = ul(B.expirationTime <= b);
                        if (((b = g.unstable_now()), typeof fl == "function")) {
                          ((B.callback = fl), it(b), (A = !0));
                          break t;
                        }
                        (B === N(H) && h(H), it(b));
                      } else h(H);
                      B = N(H);
                    }
                    if (B !== null) A = !0;
                    else {
                      var o = N(E);
                      (o !== null && gt(zt, o.startTime - b), (A = !1));
                    }
                  }
                  break l;
                } finally {
                  ((B = null), (hl = x), (Wl = !1));
                }
                A = void 0;
              }
            } finally {
              A ? Ql() : (jl = !1);
            }
          }
        }
        var Ql;
        if (typeof Rl == "function")
          Ql = function () {
            Rl(Et);
          };
        else if (typeof MessageChannel < "u") {
          var pa = new MessageChannel(),
            Ut = pa.port2;
          ((pa.port1.onmessage = Et),
            (Ql = function () {
              Ut.postMessage(null);
            }));
        } else
          Ql = function () {
            $l(Et, 0);
          };
        function gt(b, A) {
          W = $l(function () {
            b(g.unstable_now());
          }, A);
        }
        ((g.unstable_IdlePriority = 5),
          (g.unstable_ImmediatePriority = 1),
          (g.unstable_LowPriority = 4),
          (g.unstable_NormalPriority = 3),
          (g.unstable_Profiling = null),
          (g.unstable_UserBlockingPriority = 2),
          (g.unstable_cancelCallback = function (b) {
            b.callback = null;
          }),
          (g.unstable_forceFrameRate = function (b) {
            0 > b || 125 < b
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Gl = 0 < b ? Math.floor(1e3 / b) : 5);
          }),
          (g.unstable_getCurrentPriorityLevel = function () {
            return hl;
          }),
          (g.unstable_next = function (b) {
            switch (hl) {
              case 1:
              case 2:
              case 3:
                var A = 3;
                break;
              default:
                A = hl;
            }
            var x = hl;
            hl = A;
            try {
              return b();
            } finally {
              hl = x;
            }
          }),
          (g.unstable_requestPaint = function () {
            Dt = !0;
          }),
          (g.unstable_runWithPriority = function (b, A) {
            switch (b) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                b = 3;
            }
            var x = hl;
            hl = b;
            try {
              return A();
            } finally {
              hl = x;
            }
          }),
          (g.unstable_scheduleCallback = function (b, A, x) {
            var ul = g.unstable_now();
            switch (
              (typeof x == "object" && x !== null
                ? ((x = x.delay), (x = typeof x == "number" && 0 < x ? ul + x : ul))
                : (x = ul),
              b)
            ) {
              case 1:
                var fl = -1;
                break;
              case 2:
                fl = 250;
                break;
              case 5:
                fl = 1073741823;
                break;
              case 4:
                fl = 1e4;
                break;
              default:
                fl = 5e3;
            }
            return (
              (fl = x + fl),
              (b = {
                id: P++,
                callback: A,
                priorityLevel: b,
                startTime: x,
                expirationTime: fl,
                sortIndex: -1,
              }),
              x > ul
                ? ((b.sortIndex = x),
                  R(E, b),
                  N(H) === null &&
                    b === N(E) &&
                    (ql ? (Wt(W), (W = -1)) : (ql = !0), gt(zt, x - ul)))
                : ((b.sortIndex = fl), R(H, b), Yl || Wl || ((Yl = !0), jl || ((jl = !0), Ql()))),
              b
            );
          }),
          (g.unstable_shouldYield = Qa),
          (g.unstable_wrapCallback = function (b) {
            var A = hl;
            return function () {
              var x = hl;
              hl = A;
              try {
                return b.apply(this, arguments);
              } finally {
                hl = x;
              }
            };
          }));
      })(sf)),
    sf
  );
}
var bd;
function Iy() {
  return (bd || ((bd = 1), (ff.exports = Fy())), ff.exports);
}
var of = { exports: {} },
  Cl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pd;
function Py() {
  if (pd) return Cl;
  pd = 1;
  var g = df();
  function R(H) {
    var E = "https://react.dev/errors/" + H;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var P = 2; P < arguments.length; P++) E += "&args[]=" + encodeURIComponent(arguments[P]);
    }
    return (
      "Minified React error #" +
      H +
      "; visit " +
      E +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function N() {}
  var h = {
      d: {
        f: N,
        r: function () {
          throw Error(R(522));
        },
        D: N,
        C: N,
        L: N,
        m: N,
        X: N,
        S: N,
        M: N,
      },
      p: 0,
      findDOMNode: null,
    },
    q = Symbol.for("react.portal");
  function Z(H, E, P) {
    var B = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: q,
      key: B == null ? null : "" + B,
      children: H,
      containerInfo: E,
      implementation: P,
    };
  }
  var el = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function vl(H, E) {
    if (H === "font") return "";
    if (typeof E == "string") return E === "use-credentials" ? E : "";
  }
  return (
    (Cl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = h),
    (Cl.createPortal = function (H, E) {
      var P = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!E || (E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11)) throw Error(R(299));
      return Z(H, E, null, P);
    }),
    (Cl.flushSync = function (H) {
      var E = el.T,
        P = h.p;
      try {
        if (((el.T = null), (h.p = 2), H)) return H();
      } finally {
        ((el.T = E), (h.p = P), h.d.f());
      }
    }),
    (Cl.preconnect = function (H, E) {
      typeof H == "string" &&
        (E
          ? ((E = E.crossOrigin),
            (E = typeof E == "string" ? (E === "use-credentials" ? E : "") : void 0))
          : (E = null),
        h.d.C(H, E));
    }),
    (Cl.prefetchDNS = function (H) {
      typeof H == "string" && h.d.D(H);
    }),
    (Cl.preinit = function (H, E) {
      if (typeof H == "string" && E && typeof E.as == "string") {
        var P = E.as,
          B = vl(P, E.crossOrigin),
          hl = typeof E.integrity == "string" ? E.integrity : void 0,
          Wl = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
        P === "style"
          ? h.d.S(H, typeof E.precedence == "string" ? E.precedence : void 0, {
              crossOrigin: B,
              integrity: hl,
              fetchPriority: Wl,
            })
          : P === "script" &&
            h.d.X(H, {
              crossOrigin: B,
              integrity: hl,
              fetchPriority: Wl,
              nonce: typeof E.nonce == "string" ? E.nonce : void 0,
            });
      }
    }),
    (Cl.preinitModule = function (H, E) {
      if (typeof H == "string")
        if (typeof E == "object" && E !== null) {
          if (E.as == null || E.as === "script") {
            var P = vl(E.as, E.crossOrigin);
            h.d.M(H, {
              crossOrigin: P,
              integrity: typeof E.integrity == "string" ? E.integrity : void 0,
              nonce: typeof E.nonce == "string" ? E.nonce : void 0,
            });
          }
        } else E == null && h.d.M(H);
    }),
    (Cl.preload = function (H, E) {
      if (typeof H == "string" && typeof E == "object" && E !== null && typeof E.as == "string") {
        var P = E.as,
          B = vl(P, E.crossOrigin);
        h.d.L(H, P, {
          crossOrigin: B,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0,
          nonce: typeof E.nonce == "string" ? E.nonce : void 0,
          type: typeof E.type == "string" ? E.type : void 0,
          fetchPriority: typeof E.fetchPriority == "string" ? E.fetchPriority : void 0,
          referrerPolicy: typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0,
          imageSrcSet: typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0,
          imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0,
          media: typeof E.media == "string" ? E.media : void 0,
        });
      }
    }),
    (Cl.preloadModule = function (H, E) {
      if (typeof H == "string")
        if (E) {
          var P = vl(E.as, E.crossOrigin);
          h.d.m(H, {
            as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
            crossOrigin: P,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
          });
        } else h.d.m(H);
    }),
    (Cl.requestFormReset = function (H) {
      h.d.r(H);
    }),
    (Cl.unstable_batchedUpdates = function (H, E) {
      return H(E);
    }),
    (Cl.useFormState = function (H, E, P) {
      return el.H.useFormState(H, E, P);
    }),
    (Cl.useFormStatus = function () {
      return el.H.useHostTransitionStatus();
    }),
    (Cl.version = "19.2.5"),
    Cl
  );
}
var zd;
function lm() {
  if (zd) return of.exports;
  zd = 1;
  function g() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g);
      } catch (R) {
        console.error(R);
      }
  }
  return (g(), (of.exports = Py()), of.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Td;
function tm() {
  if (Td) return bu;
  Td = 1;
  var g = Iy(),
    R = df(),
    N = lm();
  function h(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++) t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function q(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function Z(l) {
    var t = l,
      a = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do ((t = l), (t.flags & 4098) !== 0 && (a = t.return), (l = t.return));
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function el(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if ((t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function vl(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if ((t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function H(l) {
    if (Z(l) !== l) throw Error(h(188));
  }
  function E(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = Z(l)), t === null)) throw Error(h(188));
      return t !== l ? null : l;
    }
    for (var a = l, e = t; ; ) {
      var u = a.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (((e = u.return), e !== null)) {
          a = e;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === a) return (H(u), l);
          if (n === e) return (H(u), t);
          n = n.sibling;
        }
        throw Error(h(188));
      }
      if (a.return !== e.return) ((a = u), (e = n));
      else {
        for (var i = !1, c = u.child; c; ) {
          if (c === a) {
            ((i = !0), (a = u), (e = n));
            break;
          }
          if (c === e) {
            ((i = !0), (e = u), (a = n));
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = n.child; c; ) {
            if (c === a) {
              ((i = !0), (a = n), (e = u));
              break;
            }
            if (c === e) {
              ((i = !0), (e = n), (a = u));
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(h(189));
        }
      }
      if (a.alternate !== e) throw Error(h(190));
    }
    if (a.tag !== 3) throw Error(h(188));
    return a.stateNode.current === a ? l : t;
  }
  function P(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = P(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var B = Object.assign,
    hl = Symbol.for("react.element"),
    Wl = Symbol.for("react.transitional.element"),
    Yl = Symbol.for("react.portal"),
    ql = Symbol.for("react.fragment"),
    Dt = Symbol.for("react.strict_mode"),
    $l = Symbol.for("react.profiler"),
    Wt = Symbol.for("react.consumer"),
    Rl = Symbol.for("react.context"),
    it = Symbol.for("react.forward_ref"),
    zt = Symbol.for("react.suspense"),
    jl = Symbol.for("react.suspense_list"),
    W = Symbol.for("react.memo"),
    Gl = Symbol.for("react.lazy"),
    Tt = Symbol.for("react.activity"),
    Qa = Symbol.for("react.memo_cache_sentinel"),
    Et = Symbol.iterator;
  function Ql(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (Et && l[Et]) || l["@@iterator"]), typeof l == "function" ? l : null);
  }
  var pa = Symbol.for("react.client.reference");
  function Ut(l) {
    if (l == null) return null;
    if (typeof l == "function") return l.$$typeof === pa ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case ql:
        return "Fragment";
      case $l:
        return "Profiler";
      case Dt:
        return "StrictMode";
      case zt:
        return "Suspense";
      case jl:
        return "SuspenseList";
      case Tt:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Yl:
          return "Portal";
        case Rl:
          return l.displayName || "Context";
        case Wt:
          return (l._context.displayName || "Context") + ".Consumer";
        case it:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case W:
          return ((t = l.displayName || null), t !== null ? t : Ut(l.type) || "Memo");
        case Gl:
          ((t = l._payload), (l = l._init));
          try {
            return Ut(l(t));
          } catch {}
      }
    return null;
  }
  var gt = Array.isArray,
    b = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    A = N.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    x = { pending: !1, data: null, method: null, action: null },
    ul = [],
    fl = -1;
  function o(l) {
    return { current: l };
  }
  function T(l) {
    0 > fl || ((l.current = ul[fl]), (ul[fl] = null), fl--);
  }
  function _(l, t) {
    (fl++, (ul[fl] = l.current), (l.current = t));
  }
  var O = o(null),
    j = o(null),
    V = o(null),
    ll = o(null);
  function Bl(l, t) {
    switch ((_(V, t), _(j, l), _(O, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Yo(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI))) ((t = Yo(t)), (l = jo(t, l)));
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    (T(O), _(O, l));
  }
  function gl() {
    (T(O), T(j), T(V));
  }
  function _e(l) {
    l.memoizedState !== null && _(ll, l);
    var t = O.current,
      a = jo(t, l.type);
    t !== a && (_(j, l), _(O, a));
  }
  function zu(l) {
    (j.current === l && (T(O), T(j)), ll.current === l && (T(ll), (mu._currentValue = x)));
  }
  var Qn, hf;
  function za(l) {
    if (Qn === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        ((Qn = (t && t[1]) || ""),
          (hf =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Qn +
      l +
      hf
    );
  }
  var Xn = !1;
  function Zn(l, t) {
    if (!l || Xn) return "";
    Xn = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var e = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var z = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(z.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(z, []);
                } catch (v) {
                  var r = v;
                }
                Reflect.construct(l, [], z);
              } else {
                try {
                  z.call();
                } catch (v) {
                  r = v;
                }
                l.call(z.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (v) {
                r = v;
              }
              (z = l()) && typeof z.catch == "function" && z.catch(function () {});
            }
          } catch (v) {
            if (v && r && typeof v.stack == "string") return [v.stack, r.stack];
          }
          return [null, null];
        },
      };
      e.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(e.DetermineComponentFrameRoot, "name");
      u &&
        u.configurable &&
        Object.defineProperty(e.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = e.DetermineComponentFrameRoot(),
        i = n[0],
        c = n[1];
      if (i && c) {
        var f = i.split(`
`),
          m = c.split(`
`);
        for (u = e = 0; e < f.length && !f[e].includes("DetermineComponentFrameRoot"); ) e++;
        for (; u < m.length && !m[u].includes("DetermineComponentFrameRoot"); ) u++;
        if (e === f.length || u === m.length)
          for (e = f.length - 1, u = m.length - 1; 1 <= e && 0 <= u && f[e] !== m[u]; ) u--;
        for (; 1 <= e && 0 <= u; e--, u--)
          if (f[e] !== m[u]) {
            if (e !== 1 || u !== 1)
              do
                if ((e--, u--, 0 > u || f[e] !== m[u])) {
                  var S =
                    `
` + f[e].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      S.includes("<anonymous>") &&
                      (S = S.replace("<anonymous>", l.displayName)),
                    S
                  );
                }
              while (1 <= e && 0 <= u);
            break;
          }
      }
    } finally {
      ((Xn = !1), (Error.prepareStackTrace = a));
    }
    return (a = l ? l.displayName || l.name : "") ? za(a) : "";
  }
  function _d(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return za(l.type);
      case 16:
        return za("Lazy");
      case 13:
        return l.child !== t && t !== null ? za("Suspense Fallback") : za("Suspense");
      case 19:
        return za("SuspenseList");
      case 0:
      case 15:
        return Zn(l.type, !1);
      case 11:
        return Zn(l.type.render, !1);
      case 1:
        return Zn(l.type, !0);
      case 31:
        return za("Activity");
      default:
        return "";
    }
  }
  function yf(l) {
    try {
      var t = "",
        a = null;
      do ((t += _d(l, a)), (a = l), (l = l.return));
      while (l);
      return t;
    } catch (e) {
      return (
        `
Error generating stack: ` +
        e.message +
        `
` +
        e.stack
      );
    }
  }
  var Vn = Object.prototype.hasOwnProperty,
    Ln = g.unstable_scheduleCallback,
    Kn = g.unstable_cancelCallback,
    Md = g.unstable_shouldYield,
    Od = g.unstable_requestPaint,
    kl = g.unstable_now,
    Dd = g.unstable_getCurrentPriorityLevel,
    mf = g.unstable_ImmediatePriority,
    rf = g.unstable_UserBlockingPriority,
    Tu = g.unstable_NormalPriority,
    Ud = g.unstable_LowPriority,
    vf = g.unstable_IdlePriority,
    Nd = g.log,
    Hd = g.unstable_setDisableYieldValue,
    Me = null,
    Fl = null;
  function $t(l) {
    if ((typeof Nd == "function" && Hd(l), Fl && typeof Fl.setStrictMode == "function"))
      try {
        Fl.setStrictMode(Me, l);
      } catch {}
  }
  var Il = Math.clz32 ? Math.clz32 : qd,
    Rd = Math.log,
    Cd = Math.LN2;
  function qd(l) {
    return ((l >>>= 0), l === 0 ? 32 : (31 - ((Rd(l) / Cd) | 0)) | 0);
  }
  var Eu = 256,
    Au = 262144,
    _u = 4194304;
  function Ta(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
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
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
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
        return l;
    }
  }
  function Mu(l, t, a) {
    var e = l.pendingLanes;
    if (e === 0) return 0;
    var u = 0,
      n = l.suspendedLanes,
      i = l.pingedLanes;
    l = l.warmLanes;
    var c = e & 134217727;
    return (
      c !== 0
        ? ((e = c & ~n),
          e !== 0
            ? (u = Ta(e))
            : ((i &= c), i !== 0 ? (u = Ta(i)) : a || ((a = c & ~l), a !== 0 && (u = Ta(a)))))
        : ((c = e & ~n),
          c !== 0
            ? (u = Ta(c))
            : i !== 0
              ? (u = Ta(i))
              : a || ((a = e & ~l), a !== 0 && (u = Ta(a)))),
      u === 0
        ? 0
        : t !== 0 &&
            t !== u &&
            (t & n) === 0 &&
            ((n = u & -u), (a = t & -t), n >= a || (n === 32 && (a & 4194048) !== 0))
          ? t
          : u
    );
  }
  function Oe(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Bd(l, t) {
    switch (l) {
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
  function gf() {
    var l = _u;
    return ((_u <<= 1), (_u & 62914560) === 0 && (_u = 4194304), l);
  }
  function Jn(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function De(l, t) {
    ((l.pendingLanes |= t),
      t !== 268435456 && ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0)));
  }
  function xd(l, t, a, e, u, n) {
    var i = l.pendingLanes;
    ((l.pendingLanes = a),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= a),
      (l.entangledLanes &= a),
      (l.errorRecoveryDisabledLanes &= a),
      (l.shellSuspendCounter = 0));
    var c = l.entanglements,
      f = l.expirationTimes,
      m = l.hiddenUpdates;
    for (a = i & ~a; 0 < a; ) {
      var S = 31 - Il(a),
        z = 1 << S;
      ((c[S] = 0), (f[S] = -1));
      var r = m[S];
      if (r !== null)
        for (m[S] = null, S = 0; S < r.length; S++) {
          var v = r[S];
          v !== null && (v.lane &= -536870913);
        }
      a &= ~z;
    }
    (e !== 0 && Sf(l, e, 0),
      n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t)));
  }
  function Sf(l, t, a) {
    ((l.pendingLanes |= t), (l.suspendedLanes &= ~t));
    var e = 31 - Il(t);
    ((l.entangledLanes |= t),
      (l.entanglements[e] = l.entanglements[e] | 1073741824 | (a & 261930)));
  }
  function bf(l, t) {
    var a = (l.entangledLanes |= t);
    for (l = l.entanglements; a; ) {
      var e = 31 - Il(a),
        u = 1 << e;
      ((u & t) | (l[e] & t) && (l[e] |= t), (a &= ~u));
    }
  }
  function pf(l, t) {
    var a = t & -t;
    return ((a = (a & 42) !== 0 ? 1 : wn(a)), (a & (l.suspendedLanes | t)) !== 0 ? 0 : a);
  }
  function wn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
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
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Wn(l) {
    return ((l &= -l), 2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
  }
  function zf() {
    var l = A.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : cd(l.type));
  }
  function Tf(l, t) {
    var a = A.p;
    try {
      return ((A.p = l), t());
    } finally {
      A.p = a;
    }
  }
  var kt = Math.random().toString(36).slice(2),
    Ol = "__reactFiber$" + kt,
    Xl = "__reactProps$" + kt,
    Xa = "__reactContainer$" + kt,
    $n = "__reactEvents$" + kt,
    Yd = "__reactListeners$" + kt,
    jd = "__reactHandles$" + kt,
    Ef = "__reactResources$" + kt,
    Ue = "__reactMarker$" + kt;
  function kn(l) {
    (delete l[Ol], delete l[Xl], delete l[$n], delete l[Yd], delete l[jd]);
  }
  function Za(l) {
    var t = l[Ol];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if ((t = a[Xa] || a[Ol])) {
        if (((a = t.alternate), t.child !== null || (a !== null && a.child !== null)))
          for (l = Ko(l); l !== null; ) {
            if ((a = l[Ol])) return a;
            l = Ko(l);
          }
        return t;
      }
      ((l = a), (a = l.parentNode));
    }
    return null;
  }
  function Va(l) {
    if ((l = l[Ol] || l[Xa])) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return l;
    }
    return null;
  }
  function Ne(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(h(33));
  }
  function La(l) {
    var t = l[Ef];
    return (t || (t = l[Ef] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
  }
  function _l(l) {
    l[Ue] = !0;
  }
  var Af = new Set(),
    _f = {};
  function Ea(l, t) {
    (Ka(l, t), Ka(l + "Capture", t));
  }
  function Ka(l, t) {
    for (_f[l] = t, l = 0; l < t.length; l++) Af.add(t[l]);
  }
  var Gd = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Mf = {},
    Of = {};
  function Qd(l) {
    return Vn.call(Of, l)
      ? !0
      : Vn.call(Mf, l)
        ? !1
        : Gd.test(l)
          ? (Of[l] = !0)
          : ((Mf[l] = !0), !1);
  }
  function Ou(l, t, a) {
    if (Qd(t))
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var e = t.toLowerCase().slice(0, 5);
            if (e !== "data-" && e !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
  }
  function Du(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function Nt(l, t, a, e) {
    if (e === null) l.removeAttribute(a);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + e);
    }
  }
  function ct(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Df(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Xd(l, t, a) {
    var e = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
    if (
      !l.hasOwnProperty(t) &&
      typeof e < "u" &&
      typeof e.get == "function" &&
      typeof e.set == "function"
    ) {
      var u = e.get,
        n = e.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (i) {
            ((a = "" + i), n.call(this, i));
          },
        }),
        Object.defineProperty(l, t, { enumerable: e.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (i) {
            a = "" + i;
          },
          stopTracking: function () {
            ((l._valueTracker = null), delete l[t]);
          },
        }
      );
    }
  }
  function Fn(l) {
    if (!l._valueTracker) {
      var t = Df(l) ? "checked" : "value";
      l._valueTracker = Xd(l, t, "" + l[t]);
    }
  }
  function Uf(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      e = "";
    return (
      l && (e = Df(l) ? (l.checked ? "true" : "false") : l.value),
      (l = e),
      l !== a ? (t.setValue(l), !0) : !1
    );
  }
  function Uu(l) {
    if (((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")) return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Zd = /[\n"\\]/g;
  function ft(l) {
    return l.replace(Zd, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function In(l, t, a, e, u, n, i, c) {
    ((l.name = ""),
      i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean"
        ? (l.type = i)
        : l.removeAttribute("type"),
      t != null
        ? i === "number"
          ? ((t === 0 && l.value === "") || l.value != t) && (l.value = "" + ct(t))
          : l.value !== "" + ct(t) && (l.value = "" + ct(t))
        : (i !== "submit" && i !== "reset") || l.removeAttribute("value"),
      t != null
        ? Pn(l, i, ct(t))
        : a != null
          ? Pn(l, i, ct(a))
          : e != null && l.removeAttribute("value"),
      u == null && n != null && (l.defaultChecked = !!n),
      u != null && (l.checked = u && typeof u != "function" && typeof u != "symbol"),
      c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean"
        ? (l.name = "" + ct(c))
        : l.removeAttribute("name"));
  }
  function Nf(l, t, a, e, u, n, i, c) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (l.type = n),
      t != null || a != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || t != null)) {
        Fn(l);
        return;
      }
      ((a = a != null ? "" + ct(a) : ""),
        (t = t != null ? "" + ct(t) : a),
        c || t === l.value || (l.value = t),
        (l.defaultValue = t));
    }
    ((e = e ?? u),
      (e = typeof e != "function" && typeof e != "symbol" && !!e),
      (l.checked = c ? l.checked : !!e),
      (l.defaultChecked = !!e),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (l.name = i),
      Fn(l));
  }
  function Pn(l, t, a) {
    (t === "number" && Uu(l.ownerDocument) === l) ||
      l.defaultValue === "" + a ||
      (l.defaultValue = "" + a);
  }
  function Ja(l, t, a, e) {
    if (((l = l.options), t)) {
      t = {};
      for (var u = 0; u < a.length; u++) t["$" + a[u]] = !0;
      for (a = 0; a < l.length; a++)
        ((u = t.hasOwnProperty("$" + l[a].value)),
          l[a].selected !== u && (l[a].selected = u),
          u && e && (l[a].defaultSelected = !0));
    } else {
      for (a = "" + ct(a), t = null, u = 0; u < l.length; u++) {
        if (l[u].value === a) {
          ((l[u].selected = !0), e && (l[u].defaultSelected = !0));
          return;
        }
        t !== null || l[u].disabled || (t = l[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Hf(l, t, a) {
    if (t != null && ((t = "" + ct(t)), t !== l.value && (l.value = t), a == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + ct(a) : "";
  }
  function Rf(l, t, a, e) {
    if (t == null) {
      if (e != null) {
        if (a != null) throw Error(h(92));
        if (gt(e)) {
          if (1 < e.length) throw Error(h(93));
          e = e[0];
        }
        a = e;
      }
      (a == null && (a = ""), (t = a));
    }
    ((a = ct(t)),
      (l.defaultValue = a),
      (e = l.textContent),
      e === a && e !== "" && e !== null && (l.value = e),
      Fn(l));
  }
  function wa(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Vd = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Cf(l, t, a) {
    var e = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? e
        ? l.setProperty(t, "")
        : t === "float"
          ? (l.cssFloat = "")
          : (l[t] = "")
      : e
        ? l.setProperty(t, a)
        : typeof a != "number" || a === 0 || Vd.has(t)
          ? t === "float"
            ? (l.cssFloat = a)
            : (l[t] = ("" + a).trim())
          : (l[t] = a + "px");
  }
  function qf(l, t, a) {
    if (t != null && typeof t != "object") throw Error(h(62));
    if (((l = l.style), a != null)) {
      for (var e in a)
        !a.hasOwnProperty(e) ||
          (t != null && t.hasOwnProperty(e)) ||
          (e.indexOf("--") === 0
            ? l.setProperty(e, "")
            : e === "float"
              ? (l.cssFloat = "")
              : (l[e] = ""));
      for (var u in t) ((e = t[u]), t.hasOwnProperty(u) && a[u] !== e && Cf(l, u, e));
    } else for (var n in t) t.hasOwnProperty(n) && Cf(l, n, t[n]);
  }
  function li(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ld = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Kd =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Nu(l) {
    return Kd.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  function Ht() {}
  var ti = null;
  function ai(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var Wa = null,
    $a = null;
  function Bf(l) {
    var t = Va(l);
    if (t && (l = t.stateNode)) {
      var a = l[Xl] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (In(
              l,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll('input[name="' + ft("" + t) + '"][type="radio"]'), t = 0;
              t < a.length;
              t++
            ) {
              var e = a[t];
              if (e !== l && e.form === l.form) {
                var u = e[Xl] || null;
                if (!u) throw Error(h(90));
                In(
                  e,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name,
                );
              }
            }
            for (t = 0; t < a.length; t++) ((e = a[t]), e.form === l.form && Uf(e));
          }
          break l;
        case "textarea":
          Hf(l, a.value, a.defaultValue);
          break l;
        case "select":
          ((t = a.value), t != null && Ja(l, !!a.multiple, t, !1));
      }
    }
  }
  var ei = !1;
  function xf(l, t, a) {
    if (ei) return l(t, a);
    ei = !0;
    try {
      var e = l(t);
      return e;
    } finally {
      if (
        ((ei = !1),
        (Wa !== null || $a !== null) &&
          (Sn(), Wa && ((t = Wa), (l = $a), ($a = Wa = null), Bf(t), l)))
      )
        for (t = 0; t < l.length; t++) Bf(l[t]);
    }
  }
  function He(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var e = a[Xl] || null;
    if (e === null) return null;
    a = e[t];
    l: switch (t) {
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
        ((e = !e.disabled) ||
          ((l = l.type),
          (e = !(l === "button" || l === "input" || l === "select" || l === "textarea"))),
          (l = !e));
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function") throw Error(h(231, t, typeof a));
    return a;
  }
  var Rt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    ui = !1;
  if (Rt)
    try {
      var Re = {};
      (Object.defineProperty(Re, "passive", {
        get: function () {
          ui = !0;
        },
      }),
        window.addEventListener("test", Re, Re),
        window.removeEventListener("test", Re, Re));
    } catch {
      ui = !1;
    }
  var Ft = null,
    ni = null,
    Hu = null;
  function Yf() {
    if (Hu) return Hu;
    var l,
      t = ni,
      a = t.length,
      e,
      u = "value" in Ft ? Ft.value : Ft.textContent,
      n = u.length;
    for (l = 0; l < a && t[l] === u[l]; l++);
    var i = a - l;
    for (e = 1; e <= i && t[a - e] === u[n - e]; e++);
    return (Hu = u.slice(l, 1 < e ? 1 - e : void 0));
  }
  function Ru(l) {
    var t = l.keyCode;
    return (
      "charCode" in l ? ((l = l.charCode), l === 0 && t === 13 && (l = 13)) : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function Cu() {
    return !0;
  }
  function jf() {
    return !1;
  }
  function Zl(l) {
    function t(a, e, u, n, i) {
      ((this._reactName = a),
        (this._targetInst = u),
        (this.type = e),
        (this.nativeEvent = n),
        (this.target = i),
        (this.currentTarget = null));
      for (var c in l) l.hasOwnProperty(c) && ((a = l[c]), (this[c] = a ? a(n) : n[c]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? Cu
          : jf),
        (this.isPropagationStopped = jf),
        this
      );
    }
    return (
      B(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Cu));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Cu));
        },
        persist: function () {},
        isPersistent: Cu,
      }),
      t
    );
  }
  var Aa = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    qu = Zl(Aa),
    Ce = B({}, Aa, { view: 0, detail: 0 }),
    Jd = Zl(Ce),
    ii,
    ci,
    qe,
    Bu = B({}, Ce, {
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
      getModifierState: si,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== qe &&
              (qe && l.type === "mousemove"
                ? ((ii = l.screenX - qe.screenX), (ci = l.screenY - qe.screenY))
                : (ci = ii = 0),
              (qe = l)),
            ii);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : ci;
      },
    }),
    Gf = Zl(Bu),
    wd = B({}, Bu, { dataTransfer: 0 }),
    Wd = Zl(wd),
    $d = B({}, Ce, { relatedTarget: 0 }),
    fi = Zl($d),
    kd = B({}, Aa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Fd = Zl(kd),
    Id = B({}, Aa, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    Pd = Zl(Id),
    lh = B({}, Aa, { data: 0 }),
    Qf = Zl(lh),
    th = {
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
      MozPrintableKey: "Unidentified",
    },
    ah = {
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
      224: "Meta",
    },
    eh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function uh(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = eh[l]) ? !!t[l] : !1;
  }
  function si() {
    return uh;
  }
  var nh = B({}, Ce, {
      key: function (l) {
        if (l.key) {
          var t = th[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = Ru(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
            ? ah[l.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: si,
      charCode: function (l) {
        return l.type === "keypress" ? Ru(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? Ru(l)
          : l.type === "keydown" || l.type === "keyup"
            ? l.keyCode
            : 0;
      },
    }),
    ih = Zl(nh),
    ch = B({}, Bu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Xf = Zl(ch),
    fh = B({}, Ce, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: si,
    }),
    sh = Zl(fh),
    oh = B({}, Aa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    dh = Zl(oh),
    hh = B({}, Bu, {
      deltaX: function (l) {
        return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
            ? -l.wheelDeltaY
            : "wheelDelta" in l
              ? -l.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    yh = Zl(hh),
    mh = B({}, Aa, { newState: 0, oldState: 0 }),
    rh = Zl(mh),
    vh = [9, 13, 27, 32],
    oi = Rt && "CompositionEvent" in window,
    Be = null;
  Rt && "documentMode" in document && (Be = document.documentMode);
  var gh = Rt && "TextEvent" in window && !Be,
    Zf = Rt && (!oi || (Be && 8 < Be && 11 >= Be)),
    Vf = " ",
    Lf = !1;
  function Kf(l, t) {
    switch (l) {
      case "keyup":
        return vh.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Jf(l) {
    return ((l = l.detail), typeof l == "object" && "data" in l ? l.data : null);
  }
  var ka = !1;
  function Sh(l, t) {
    switch (l) {
      case "compositionend":
        return Jf(t);
      case "keypress":
        return t.which !== 32 ? null : ((Lf = !0), Vf);
      case "textInput":
        return ((l = t.data), l === Vf && Lf ? null : l);
      default:
        return null;
    }
  }
  function bh(l, t) {
    if (ka)
      return l === "compositionend" || (!oi && Kf(l, t))
        ? ((l = Yf()), (Hu = ni = Ft = null), (ka = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Zf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var ph = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function wf(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!ph[l.type] : t === "textarea";
  }
  function Wf(l, t, a, e) {
    (Wa ? ($a ? $a.push(e) : ($a = [e])) : (Wa = e),
      (t = _n(t, "onChange")),
      0 < t.length &&
        ((a = new qu("onChange", "change", null, a, e)), l.push({ event: a, listeners: t })));
  }
  var xe = null,
    Ye = null;
  function zh(l) {
    Ho(l, 0);
  }
  function xu(l) {
    var t = Ne(l);
    if (Uf(t)) return l;
  }
  function $f(l, t) {
    if (l === "change") return t;
  }
  var kf = !1;
  if (Rt) {
    var di;
    if (Rt) {
      var hi = "oninput" in document;
      if (!hi) {
        var Ff = document.createElement("div");
        (Ff.setAttribute("oninput", "return;"), (hi = typeof Ff.oninput == "function"));
      }
      di = hi;
    } else di = !1;
    kf = di && (!document.documentMode || 9 < document.documentMode);
  }
  function If() {
    xe && (xe.detachEvent("onpropertychange", Pf), (Ye = xe = null));
  }
  function Pf(l) {
    if (l.propertyName === "value" && xu(Ye)) {
      var t = [];
      (Wf(t, Ye, l, ai(l)), xf(zh, t));
    }
  }
  function Th(l, t, a) {
    l === "focusin"
      ? (If(), (xe = t), (Ye = a), xe.attachEvent("onpropertychange", Pf))
      : l === "focusout" && If();
  }
  function Eh(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown") return xu(Ye);
  }
  function Ah(l, t) {
    if (l === "click") return xu(t);
  }
  function _h(l, t) {
    if (l === "input" || l === "change") return xu(t);
  }
  function Mh(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var Pl = typeof Object.is == "function" ? Object.is : Mh;
  function je(l, t) {
    if (Pl(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null) return !1;
    var a = Object.keys(l),
      e = Object.keys(t);
    if (a.length !== e.length) return !1;
    for (e = 0; e < a.length; e++) {
      var u = a[e];
      if (!Vn.call(t, u) || !Pl(l[u], t[u])) return !1;
    }
    return !0;
  }
  function ls(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function ts(l, t) {
    var a = ls(l);
    l = 0;
    for (var e; a; ) {
      if (a.nodeType === 3) {
        if (((e = l + a.textContent.length), l <= t && e >= t)) return { node: a, offset: t - l };
        l = e;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = ls(a);
    }
  }
  function as(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? as(l, t.parentNode)
            : "contains" in l
              ? l.contains(t)
              : l.compareDocumentPosition
                ? !!(l.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function es(l) {
    l =
      l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = Uu(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = Uu(l.document);
    }
    return t;
  }
  function yi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var Oh = Rt && "documentMode" in document && 11 >= document.documentMode,
    Fa = null,
    mi = null,
    Ge = null,
    ri = !1;
  function us(l, t, a) {
    var e = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    ri ||
      Fa == null ||
      Fa !== Uu(e) ||
      ((e = Fa),
      "selectionStart" in e && yi(e)
        ? (e = { start: e.selectionStart, end: e.selectionEnd })
        : ((e = ((e.ownerDocument && e.ownerDocument.defaultView) || window).getSelection()),
          (e = {
            anchorNode: e.anchorNode,
            anchorOffset: e.anchorOffset,
            focusNode: e.focusNode,
            focusOffset: e.focusOffset,
          })),
      (Ge && je(Ge, e)) ||
        ((Ge = e),
        (e = _n(mi, "onSelect")),
        0 < e.length &&
          ((t = new qu("onSelect", "select", null, t, a)),
          l.push({ event: t, listeners: e }),
          (t.target = Fa))));
  }
  function _a(l, t) {
    var a = {};
    return (
      (a[l.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + l] = "webkit" + t),
      (a["Moz" + l] = "moz" + t),
      a
    );
  }
  var Ia = {
      animationend: _a("Animation", "AnimationEnd"),
      animationiteration: _a("Animation", "AnimationIteration"),
      animationstart: _a("Animation", "AnimationStart"),
      transitionrun: _a("Transition", "TransitionRun"),
      transitionstart: _a("Transition", "TransitionStart"),
      transitioncancel: _a("Transition", "TransitionCancel"),
      transitionend: _a("Transition", "TransitionEnd"),
    },
    vi = {},
    ns = {};
  Rt &&
    ((ns = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ia.animationend.animation,
      delete Ia.animationiteration.animation,
      delete Ia.animationstart.animation),
    "TransitionEvent" in window || delete Ia.transitionend.transition);
  function Ma(l) {
    if (vi[l]) return vi[l];
    if (!Ia[l]) return l;
    var t = Ia[l],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in ns) return (vi[l] = t[a]);
    return l;
  }
  var is = Ma("animationend"),
    cs = Ma("animationiteration"),
    fs = Ma("animationstart"),
    Dh = Ma("transitionrun"),
    Uh = Ma("transitionstart"),
    Nh = Ma("transitioncancel"),
    ss = Ma("transitionend"),
    os = new Map(),
    gi =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  gi.push("scrollEnd");
  function St(l, t) {
    (os.set(l, t), Ea(t, [l]));
  }
  var Yu =
      typeof reportError == "function"
        ? reportError
        : function (l) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof l == "object" && l !== null && typeof l.message == "string"
                    ? String(l.message)
                    : String(l),
                error: l,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
              process.emit("uncaughtException", l);
              return;
            }
            console.error(l);
          },
    st = [],
    Pa = 0,
    Si = 0;
  function ju() {
    for (var l = Pa, t = (Si = Pa = 0); t < l; ) {
      var a = st[t];
      st[t++] = null;
      var e = st[t];
      st[t++] = null;
      var u = st[t];
      st[t++] = null;
      var n = st[t];
      if (((st[t++] = null), e !== null && u !== null)) {
        var i = e.pending;
        (i === null ? (u.next = u) : ((u.next = i.next), (i.next = u)), (e.pending = u));
      }
      n !== 0 && ds(a, u, n);
    }
  }
  function Gu(l, t, a, e) {
    ((st[Pa++] = l),
      (st[Pa++] = t),
      (st[Pa++] = a),
      (st[Pa++] = e),
      (Si |= e),
      (l.lanes |= e),
      (l = l.alternate),
      l !== null && (l.lanes |= e));
  }
  function bi(l, t, a, e) {
    return (Gu(l, t, a, e), Qu(l));
  }
  function Oa(l, t) {
    return (Gu(l, null, null, t), Qu(l));
  }
  function ds(l, t, a) {
    l.lanes |= a;
    var e = l.alternate;
    e !== null && (e.lanes |= a);
    for (var u = !1, n = l.return; n !== null; )
      ((n.childLanes |= a),
        (e = n.alternate),
        e !== null && (e.childLanes |= a),
        n.tag === 22 && ((l = n.stateNode), l === null || l._visibility & 1 || (u = !0)),
        (l = n),
        (n = n.return));
    return l.tag === 3
      ? ((n = l.stateNode),
        u &&
          t !== null &&
          ((u = 31 - Il(a)),
          (l = n.hiddenUpdates),
          (e = l[u]),
          e === null ? (l[u] = [t]) : e.push(t),
          (t.lane = a | 536870912)),
        n)
      : null;
  }
  function Qu(l) {
    if (50 < cu) throw ((cu = 0), (Dc = null), Error(h(185)));
    for (var t = l.return; t !== null; ) ((l = t), (t = l.return));
    return l.tag === 3 ? l.stateNode : null;
  }
  var le = {};
  function Hh(l, t, a, e) {
    ((this.tag = l),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = e),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function lt(l, t, a, e) {
    return new Hh(l, t, a, e);
  }
  function pi(l) {
    return ((l = l.prototype), !(!l || !l.isReactComponent));
  }
  function Ct(l, t) {
    var a = l.alternate;
    return (
      a === null
        ? ((a = lt(l.tag, t, l.key, l.mode)),
          (a.elementType = l.elementType),
          (a.type = l.type),
          (a.stateNode = l.stateNode),
          (a.alternate = l),
          (l.alternate = a))
        : ((a.pendingProps = t),
          (a.type = l.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = l.flags & 65011712),
      (a.childLanes = l.childLanes),
      (a.lanes = l.lanes),
      (a.child = l.child),
      (a.memoizedProps = l.memoizedProps),
      (a.memoizedState = l.memoizedState),
      (a.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = l.sibling),
      (a.index = l.index),
      (a.ref = l.ref),
      (a.refCleanup = l.refCleanup),
      a
    );
  }
  function hs(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return (
      a === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = a.childLanes),
          (l.lanes = a.lanes),
          (l.child = a.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = a.memoizedProps),
          (l.memoizedState = a.memoizedState),
          (l.updateQueue = a.updateQueue),
          (l.type = a.type),
          (t = a.dependencies),
          (l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function Xu(l, t, a, e, u, n) {
    var i = 0;
    if (((e = l), typeof l == "function")) pi(l) && (i = 1);
    else if (typeof l == "string")
      i = xy(l, a, O.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case Tt:
          return ((l = lt(31, a, t, u)), (l.elementType = Tt), (l.lanes = n), l);
        case ql:
          return Da(a.children, u, n, t);
        case Dt:
          ((i = 8), (u |= 24));
          break;
        case $l:
          return ((l = lt(12, a, t, u | 2)), (l.elementType = $l), (l.lanes = n), l);
        case zt:
          return ((l = lt(13, a, t, u)), (l.elementType = zt), (l.lanes = n), l);
        case jl:
          return ((l = lt(19, a, t, u)), (l.elementType = jl), (l.lanes = n), l);
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Rl:
                i = 10;
                break l;
              case Wt:
                i = 9;
                break l;
              case it:
                i = 11;
                break l;
              case W:
                i = 14;
                break l;
              case Gl:
                ((i = 16), (e = null));
                break l;
            }
          ((i = 29), (a = Error(h(130, l === null ? "null" : typeof l, ""))), (e = null));
      }
    return ((t = lt(i, a, t, u)), (t.elementType = l), (t.type = e), (t.lanes = n), t);
  }
  function Da(l, t, a, e) {
    return ((l = lt(7, l, e, t)), (l.lanes = a), l);
  }
  function zi(l, t, a) {
    return ((l = lt(6, l, null, t)), (l.lanes = a), l);
  }
  function ys(l) {
    var t = lt(18, null, null, 0);
    return ((t.stateNode = l), t);
  }
  function Ti(l, t, a) {
    return (
      (t = lt(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  var ms = new WeakMap();
  function ot(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = ms.get(l);
      return a !== void 0 ? a : ((t = { value: l, source: t, stack: yf(t) }), ms.set(l, t), t);
    }
    return { value: l, source: t, stack: yf(t) };
  }
  var te = [],
    ae = 0,
    Zu = null,
    Qe = 0,
    dt = [],
    ht = 0,
    It = null,
    At = 1,
    _t = "";
  function qt(l, t) {
    ((te[ae++] = Qe), (te[ae++] = Zu), (Zu = l), (Qe = t));
  }
  function rs(l, t, a) {
    ((dt[ht++] = At), (dt[ht++] = _t), (dt[ht++] = It), (It = l));
    var e = At;
    l = _t;
    var u = 32 - Il(e) - 1;
    ((e &= ~(1 << u)), (a += 1));
    var n = 32 - Il(t) + u;
    if (30 < n) {
      var i = u - (u % 5);
      ((n = (e & ((1 << i) - 1)).toString(32)),
        (e >>= i),
        (u -= i),
        (At = (1 << (32 - Il(t) + u)) | (a << u) | e),
        (_t = n + l));
    } else ((At = (1 << n) | (a << u) | e), (_t = l));
  }
  function Ei(l) {
    l.return !== null && (qt(l, 1), rs(l, 1, 0));
  }
  function Ai(l) {
    for (; l === Zu; ) ((Zu = te[--ae]), (te[ae] = null), (Qe = te[--ae]), (te[ae] = null));
    for (; l === It; )
      ((It = dt[--ht]),
        (dt[ht] = null),
        (_t = dt[--ht]),
        (dt[ht] = null),
        (At = dt[--ht]),
        (dt[ht] = null));
  }
  function vs(l, t) {
    ((dt[ht++] = At), (dt[ht++] = _t), (dt[ht++] = It), (At = t.id), (_t = t.overflow), (It = l));
  }
  var Dl = null,
    ol = null,
    $ = !1,
    Pt = null,
    yt = !1,
    _i = Error(h(519));
  function la(l) {
    var t = Error(
      h(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""),
    );
    throw (Xe(ot(t, l)), _i);
  }
  function gs(l) {
    var t = l.stateNode,
      a = l.type,
      e = l.memoizedProps;
    switch (((t[Ol] = l), (t[Xl] = e), a)) {
      case "dialog":
        (K("cancel", t), K("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        K("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < su.length; a++) K(su[a], t);
        break;
      case "source":
        K("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (K("error", t), K("load", t));
        break;
      case "details":
        K("toggle", t);
        break;
      case "input":
        (K("invalid", t),
          Nf(t, e.value, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name, !0));
        break;
      case "select":
        K("invalid", t);
        break;
      case "textarea":
        (K("invalid", t), Rf(t, e.value, e.defaultValue, e.children));
    }
    ((a = e.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      e.suppressHydrationWarning === !0 ||
      Bo(t.textContent, a)
        ? (e.popover != null && (K("beforetoggle", t), K("toggle", t)),
          e.onScroll != null && K("scroll", t),
          e.onScrollEnd != null && K("scrollend", t),
          e.onClick != null && (t.onclick = Ht),
          (t = !0))
        : (t = !1),
      t || la(l, !0));
  }
  function Ss(l) {
    for (Dl = l.return; Dl; )
      switch (Dl.tag) {
        case 5:
        case 31:
        case 13:
          yt = !1;
          return;
        case 27:
        case 3:
          yt = !0;
          return;
        default:
          Dl = Dl.return;
      }
  }
  function ee(l) {
    if (l !== Dl) return !1;
    if (!$) return (Ss(l), ($ = !0), !1);
    var t = l.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = l.type), (a = !(a !== "form" && a !== "button") || Vc(l.type, l.memoizedProps))),
        (a = !a)),
      a && ol && la(l),
      Ss(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l)) throw Error(h(317));
      ol = Lo(l);
    } else if (t === 31) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l)) throw Error(h(317));
      ol = Lo(l);
    } else
      t === 27
        ? ((t = ol), ma(l.type) ? ((l = Wc), (Wc = null), (ol = l)) : (ol = t))
        : (ol = Dl ? rt(l.stateNode.nextSibling) : null);
    return !0;
  }
  function Ua() {
    ((ol = Dl = null), ($ = !1));
  }
  function Mi() {
    var l = Pt;
    return (l !== null && (Jl === null ? (Jl = l) : Jl.push.apply(Jl, l), (Pt = null)), l);
  }
  function Xe(l) {
    Pt === null ? (Pt = [l]) : Pt.push(l);
  }
  var Oi = o(null),
    Na = null,
    Bt = null;
  function ta(l, t, a) {
    (_(Oi, t._currentValue), (t._currentValue = a));
  }
  function xt(l) {
    ((l._currentValue = Oi.current), T(Oi));
  }
  function Di(l, t, a) {
    for (; l !== null; ) {
      var e = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), e !== null && (e.childLanes |= t))
          : e !== null && (e.childLanes & t) !== t && (e.childLanes |= t),
        l === a)
      )
        break;
      l = l.return;
    }
  }
  function Ui(l, t, a, e) {
    var u = l.child;
    for (u !== null && (u.return = l); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var i = u.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = u;
          for (var f = 0; f < t.length; f++)
            if (c.context === t[f]) {
              ((n.lanes |= a),
                (c = n.alternate),
                c !== null && (c.lanes |= a),
                Di(n.return, a, l),
                e || (i = null));
              break l;
            }
          n = c.next;
        }
      } else if (u.tag === 18) {
        if (((i = u.return), i === null)) throw Error(h(341));
        ((i.lanes |= a), (n = i.alternate), n !== null && (n.lanes |= a), Di(i, a, l), (i = null));
      } else i = u.child;
      if (i !== null) i.return = u;
      else
        for (i = u; i !== null; ) {
          if (i === l) {
            i = null;
            break;
          }
          if (((u = i.sibling), u !== null)) {
            ((u.return = i.return), (i = u));
            break;
          }
          i = i.return;
        }
      u = i;
    }
  }
  function ue(l, t, a, e) {
    l = null;
    for (var u = t, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var i = u.alternate;
        if (i === null) throw Error(h(387));
        if (((i = i.memoizedProps), i !== null)) {
          var c = u.type;
          Pl(u.pendingProps.value, i.value) || (l !== null ? l.push(c) : (l = [c]));
        }
      } else if (u === ll.current) {
        if (((i = u.alternate), i === null)) throw Error(h(387));
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (l !== null ? l.push(mu) : (l = [mu]));
      }
      u = u.return;
    }
    (l !== null && Ui(t, l, a, e), (t.flags |= 262144));
  }
  function Vu(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Pl(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function Ha(l) {
    ((Na = l), (Bt = null), (l = l.dependencies), l !== null && (l.firstContext = null));
  }
  function Ul(l) {
    return bs(Na, l);
  }
  function Lu(l, t) {
    return (Na === null && Ha(l), bs(l, t));
  }
  function bs(l, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), Bt === null)) {
      if (l === null) throw Error(h(308));
      ((Bt = t), (l.dependencies = { lanes: 0, firstContext: t }), (l.flags |= 524288));
    } else Bt = Bt.next = t;
    return a;
  }
  var Rh =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, e) {
                  l.push(e);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                l.forEach(function (a) {
                  return a();
                }));
            };
          },
    Ch = g.unstable_scheduleCallback,
    qh = g.unstable_NormalPriority,
    pl = {
      $$typeof: Rl,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Ni() {
    return { controller: new Rh(), data: new Map(), refCount: 0 };
  }
  function Ze(l) {
    (l.refCount--,
      l.refCount === 0 &&
        Ch(qh, function () {
          l.controller.abort();
        }));
  }
  var Ve = null,
    Hi = 0,
    ne = 0,
    ie = null;
  function Bh(l, t) {
    if (Ve === null) {
      var a = (Ve = []);
      ((Hi = 0),
        (ne = qc()),
        (ie = {
          status: "pending",
          value: void 0,
          then: function (e) {
            a.push(e);
          },
        }));
    }
    return (Hi++, t.then(ps, ps), t);
  }
  function ps() {
    if (--Hi === 0 && Ve !== null) {
      ie !== null && (ie.status = "fulfilled");
      var l = Ve;
      ((Ve = null), (ne = 0), (ie = null));
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function xh(l, t) {
    var a = [],
      e = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          a.push(u);
        },
      };
    return (
      l.then(
        function () {
          ((e.status = "fulfilled"), (e.value = t));
          for (var u = 0; u < a.length; u++) (0, a[u])(t);
        },
        function (u) {
          for (e.status = "rejected", e.reason = u, u = 0; u < a.length; u++) (0, a[u])(void 0);
        },
      ),
      e
    );
  }
  var zs = b.S;
  b.S = function (l, t) {
    ((uo = kl()),
      typeof t == "object" && t !== null && typeof t.then == "function" && Bh(l, t),
      zs !== null && zs(l, t));
  };
  var Ra = o(null);
  function Ri() {
    var l = Ra.current;
    return l !== null ? l : sl.pooledCache;
  }
  function Ku(l, t) {
    t === null ? _(Ra, Ra.current) : _(Ra, t.pool);
  }
  function Ts() {
    var l = Ri();
    return l === null ? null : { parent: pl._currentValue, pool: l };
  }
  var ce = Error(h(460)),
    Ci = Error(h(474)),
    Ju = Error(h(542)),
    wu = { then: function () {} };
  function Es(l) {
    return ((l = l.status), l === "fulfilled" || l === "rejected");
  }
  function As(l, t, a) {
    switch (
      ((a = l[a]), a === void 0 ? l.push(t) : a !== t && (t.then(Ht, Ht), (t = a)), t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), Ms(l), l);
      default:
        if (typeof t.status == "string") t.then(Ht, Ht);
        else {
          if (((l = sl), l !== null && 100 < l.shellSuspendCounter)) throw Error(h(482));
          ((l = t),
            (l.status = "pending"),
            l.then(
              function (e) {
                if (t.status === "pending") {
                  var u = t;
                  ((u.status = "fulfilled"), (u.value = e));
                }
              },
              function (e) {
                if (t.status === "pending") {
                  var u = t;
                  ((u.status = "rejected"), (u.reason = e));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), Ms(l), l);
        }
        throw ((qa = t), ce);
    }
  }
  function Ca(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? ((qa = a), ce) : a;
    }
  }
  var qa = null;
  function _s() {
    if (qa === null) throw Error(h(459));
    var l = qa;
    return ((qa = null), l);
  }
  function Ms(l) {
    if (l === ce || l === Ju) throw Error(h(483));
  }
  var fe = null,
    Le = 0;
  function Wu(l) {
    var t = Le;
    return ((Le += 1), fe === null && (fe = []), As(fe, l, t));
  }
  function Ke(l, t) {
    ((t = t.props.ref), (l.ref = t !== void 0 ? t : null));
  }
  function $u(l, t) {
    throw t.$$typeof === hl
      ? Error(h(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          h(
            31,
            l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l,
          ),
        ));
  }
  function Os(l) {
    function t(d, s) {
      if (l) {
        var y = d.deletions;
        y === null ? ((d.deletions = [s]), (d.flags |= 16)) : y.push(s);
      }
    }
    function a(d, s) {
      if (!l) return null;
      for (; s !== null; ) (t(d, s), (s = s.sibling));
      return null;
    }
    function e(d) {
      for (var s = new Map(); d !== null; )
        (d.key !== null ? s.set(d.key, d) : s.set(d.index, d), (d = d.sibling));
      return s;
    }
    function u(d, s) {
      return ((d = Ct(d, s)), (d.index = 0), (d.sibling = null), d);
    }
    function n(d, s, y) {
      return (
        (d.index = y),
        l
          ? ((y = d.alternate),
            y !== null
              ? ((y = y.index), y < s ? ((d.flags |= 67108866), s) : y)
              : ((d.flags |= 67108866), s))
          : ((d.flags |= 1048576), s)
      );
    }
    function i(d) {
      return (l && d.alternate === null && (d.flags |= 67108866), d);
    }
    function c(d, s, y, p) {
      return s === null || s.tag !== 6
        ? ((s = zi(y, d.mode, p)), (s.return = d), s)
        : ((s = u(s, y)), (s.return = d), s);
    }
    function f(d, s, y, p) {
      var U = y.type;
      return U === ql
        ? S(d, s, y.props.children, p, y.key)
        : s !== null &&
            (s.elementType === U ||
              (typeof U == "object" && U !== null && U.$$typeof === Gl && Ca(U) === s.type))
          ? ((s = u(s, y.props)), Ke(s, y), (s.return = d), s)
          : ((s = Xu(y.type, y.key, y.props, null, d.mode, p)), Ke(s, y), (s.return = d), s);
    }
    function m(d, s, y, p) {
      return s === null ||
        s.tag !== 4 ||
        s.stateNode.containerInfo !== y.containerInfo ||
        s.stateNode.implementation !== y.implementation
        ? ((s = Ti(y, d.mode, p)), (s.return = d), s)
        : ((s = u(s, y.children || [])), (s.return = d), s);
    }
    function S(d, s, y, p, U) {
      return s === null || s.tag !== 7
        ? ((s = Da(y, d.mode, p, U)), (s.return = d), s)
        : ((s = u(s, y)), (s.return = d), s);
    }
    function z(d, s, y) {
      if ((typeof s == "string" && s !== "") || typeof s == "number" || typeof s == "bigint")
        return ((s = zi("" + s, d.mode, y)), (s.return = d), s);
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case Wl:
            return ((y = Xu(s.type, s.key, s.props, null, d.mode, y)), Ke(y, s), (y.return = d), y);
          case Yl:
            return ((s = Ti(s, d.mode, y)), (s.return = d), s);
          case Gl:
            return ((s = Ca(s)), z(d, s, y));
        }
        if (gt(s) || Ql(s)) return ((s = Da(s, d.mode, y, null)), (s.return = d), s);
        if (typeof s.then == "function") return z(d, Wu(s), y);
        if (s.$$typeof === Rl) return z(d, Lu(d, s), y);
        $u(d, s);
      }
      return null;
    }
    function r(d, s, y, p) {
      var U = s !== null ? s.key : null;
      if ((typeof y == "string" && y !== "") || typeof y == "number" || typeof y == "bigint")
        return U !== null ? null : c(d, s, "" + y, p);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Wl:
            return y.key === U ? f(d, s, y, p) : null;
          case Yl:
            return y.key === U ? m(d, s, y, p) : null;
          case Gl:
            return ((y = Ca(y)), r(d, s, y, p));
        }
        if (gt(y) || Ql(y)) return U !== null ? null : S(d, s, y, p, null);
        if (typeof y.then == "function") return r(d, s, Wu(y), p);
        if (y.$$typeof === Rl) return r(d, s, Lu(d, y), p);
        $u(d, y);
      }
      return null;
    }
    function v(d, s, y, p, U) {
      if ((typeof p == "string" && p !== "") || typeof p == "number" || typeof p == "bigint")
        return ((d = d.get(y) || null), c(s, d, "" + p, U));
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case Wl:
            return ((d = d.get(p.key === null ? y : p.key) || null), f(s, d, p, U));
          case Yl:
            return ((d = d.get(p.key === null ? y : p.key) || null), m(s, d, p, U));
          case Gl:
            return ((p = Ca(p)), v(d, s, y, p, U));
        }
        if (gt(p) || Ql(p)) return ((d = d.get(y) || null), S(s, d, p, U, null));
        if (typeof p.then == "function") return v(d, s, y, Wu(p), U);
        if (p.$$typeof === Rl) return v(d, s, y, Lu(s, p), U);
        $u(s, p);
      }
      return null;
    }
    function M(d, s, y, p) {
      for (var U = null, k = null, D = s, Q = (s = 0), w = null; D !== null && Q < y.length; Q++) {
        D.index > Q ? ((w = D), (D = null)) : (w = D.sibling);
        var F = r(d, D, y[Q], p);
        if (F === null) {
          D === null && (D = w);
          break;
        }
        (l && D && F.alternate === null && t(d, D),
          (s = n(F, s, Q)),
          k === null ? (U = F) : (k.sibling = F),
          (k = F),
          (D = w));
      }
      if (Q === y.length) return (a(d, D), $ && qt(d, Q), U);
      if (D === null) {
        for (; Q < y.length; Q++)
          ((D = z(d, y[Q], p)),
            D !== null && ((s = n(D, s, Q)), k === null ? (U = D) : (k.sibling = D), (k = D)));
        return ($ && qt(d, Q), U);
      }
      for (D = e(D); Q < y.length; Q++)
        ((w = v(D, d, Q, y[Q], p)),
          w !== null &&
            (l && w.alternate !== null && D.delete(w.key === null ? Q : w.key),
            (s = n(w, s, Q)),
            k === null ? (U = w) : (k.sibling = w),
            (k = w)));
      return (
        l &&
          D.forEach(function (ba) {
            return t(d, ba);
          }),
        $ && qt(d, Q),
        U
      );
    }
    function C(d, s, y, p) {
      if (y == null) throw Error(h(151));
      for (
        var U = null, k = null, D = s, Q = (s = 0), w = null, F = y.next();
        D !== null && !F.done;
        Q++, F = y.next()
      ) {
        D.index > Q ? ((w = D), (D = null)) : (w = D.sibling);
        var ba = r(d, D, F.value, p);
        if (ba === null) {
          D === null && (D = w);
          break;
        }
        (l && D && ba.alternate === null && t(d, D),
          (s = n(ba, s, Q)),
          k === null ? (U = ba) : (k.sibling = ba),
          (k = ba),
          (D = w));
      }
      if (F.done) return (a(d, D), $ && qt(d, Q), U);
      if (D === null) {
        for (; !F.done; Q++, F = y.next())
          ((F = z(d, F.value, p)),
            F !== null && ((s = n(F, s, Q)), k === null ? (U = F) : (k.sibling = F), (k = F)));
        return ($ && qt(d, Q), U);
      }
      for (D = e(D); !F.done; Q++, F = y.next())
        ((F = v(D, d, Q, F.value, p)),
          F !== null &&
            (l && F.alternate !== null && D.delete(F.key === null ? Q : F.key),
            (s = n(F, s, Q)),
            k === null ? (U = F) : (k.sibling = F),
            (k = F)));
      return (
        l &&
          D.forEach(function (wy) {
            return t(d, wy);
          }),
        $ && qt(d, Q),
        U
      );
    }
    function cl(d, s, y, p) {
      if (
        (typeof y == "object" &&
          y !== null &&
          y.type === ql &&
          y.key === null &&
          (y = y.props.children),
        typeof y == "object" && y !== null)
      ) {
        switch (y.$$typeof) {
          case Wl:
            l: {
              for (var U = y.key; s !== null; ) {
                if (s.key === U) {
                  if (((U = y.type), U === ql)) {
                    if (s.tag === 7) {
                      (a(d, s.sibling), (p = u(s, y.props.children)), (p.return = d), (d = p));
                      break l;
                    }
                  } else if (
                    s.elementType === U ||
                    (typeof U == "object" && U !== null && U.$$typeof === Gl && Ca(U) === s.type)
                  ) {
                    (a(d, s.sibling), (p = u(s, y.props)), Ke(p, y), (p.return = d), (d = p));
                    break l;
                  }
                  a(d, s);
                  break;
                } else t(d, s);
                s = s.sibling;
              }
              y.type === ql
                ? ((p = Da(y.props.children, d.mode, p, y.key)), (p.return = d), (d = p))
                : ((p = Xu(y.type, y.key, y.props, null, d.mode, p)),
                  Ke(p, y),
                  (p.return = d),
                  (d = p));
            }
            return i(d);
          case Yl:
            l: {
              for (U = y.key; s !== null; ) {
                if (s.key === U)
                  if (
                    s.tag === 4 &&
                    s.stateNode.containerInfo === y.containerInfo &&
                    s.stateNode.implementation === y.implementation
                  ) {
                    (a(d, s.sibling), (p = u(s, y.children || [])), (p.return = d), (d = p));
                    break l;
                  } else {
                    a(d, s);
                    break;
                  }
                else t(d, s);
                s = s.sibling;
              }
              ((p = Ti(y, d.mode, p)), (p.return = d), (d = p));
            }
            return i(d);
          case Gl:
            return ((y = Ca(y)), cl(d, s, y, p));
        }
        if (gt(y)) return M(d, s, y, p);
        if (Ql(y)) {
          if (((U = Ql(y)), typeof U != "function")) throw Error(h(150));
          return ((y = U.call(y)), C(d, s, y, p));
        }
        if (typeof y.then == "function") return cl(d, s, Wu(y), p);
        if (y.$$typeof === Rl) return cl(d, s, Lu(d, y), p);
        $u(d, y);
      }
      return (typeof y == "string" && y !== "") || typeof y == "number" || typeof y == "bigint"
        ? ((y = "" + y),
          s !== null && s.tag === 6
            ? (a(d, s.sibling), (p = u(s, y)), (p.return = d), (d = p))
            : (a(d, s), (p = zi(y, d.mode, p)), (p.return = d), (d = p)),
          i(d))
        : a(d, s);
    }
    return function (d, s, y, p) {
      try {
        Le = 0;
        var U = cl(d, s, y, p);
        return ((fe = null), U);
      } catch (D) {
        if (D === ce || D === Ju) throw D;
        var k = lt(29, D, null, d.mode);
        return ((k.lanes = p), (k.return = d), k);
      } finally {
      }
    };
  }
  var Ba = Os(!0),
    Ds = Os(!1),
    aa = !1;
  function qi(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Bi(l, t) {
    ((l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        }));
  }
  function ea(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ua(l, t, a) {
    var e = l.updateQueue;
    if (e === null) return null;
    if (((e = e.shared), (I & 2) !== 0)) {
      var u = e.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (e.pending = t),
        (t = Qu(l)),
        ds(l, null, a),
        t
      );
    }
    return (Gu(l, e, t, a), Qu(l));
  }
  function Je(l, t, a) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))) {
      var e = t.lanes;
      ((e &= l.pendingLanes), (a |= e), (t.lanes = a), bf(l, a));
    }
  }
  function xi(l, t) {
    var a = l.updateQueue,
      e = l.alternate;
    if (e !== null && ((e = e.updateQueue), a === e)) {
      var u = null,
        n = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var i = { lane: a.lane, tag: a.tag, payload: a.payload, callback: null, next: null };
          (n === null ? (u = n = i) : (n = n.next = i), (a = a.next));
        } while (a !== null);
        n === null ? (u = n = t) : (n = n.next = t);
      } else u = n = t;
      ((a = {
        baseState: e.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: e.shared,
        callbacks: e.callbacks,
      }),
        (l.updateQueue = a));
      return;
    }
    ((l = a.lastBaseUpdate),
      l === null ? (a.firstBaseUpdate = t) : (l.next = t),
      (a.lastBaseUpdate = t));
  }
  var Yi = !1;
  function we() {
    if (Yi) {
      var l = ie;
      if (l !== null) throw l;
    }
  }
  function We(l, t, a, e) {
    Yi = !1;
    var u = l.updateQueue;
    aa = !1;
    var n = u.firstBaseUpdate,
      i = u.lastBaseUpdate,
      c = u.shared.pending;
    if (c !== null) {
      u.shared.pending = null;
      var f = c,
        m = f.next;
      ((f.next = null), i === null ? (n = m) : (i.next = m), (i = f));
      var S = l.alternate;
      S !== null &&
        ((S = S.updateQueue),
        (c = S.lastBaseUpdate),
        c !== i && (c === null ? (S.firstBaseUpdate = m) : (c.next = m), (S.lastBaseUpdate = f)));
    }
    if (n !== null) {
      var z = u.baseState;
      ((i = 0), (S = m = f = null), (c = n));
      do {
        var r = c.lane & -536870913,
          v = r !== c.lane;
        if (v ? (J & r) === r : (e & r) === r) {
          (r !== 0 && r === ne && (Yi = !0),
            S !== null &&
              (S = S.next =
                { lane: 0, tag: c.tag, payload: c.payload, callback: null, next: null }));
          l: {
            var M = l,
              C = c;
            r = t;
            var cl = a;
            switch (C.tag) {
              case 1:
                if (((M = C.payload), typeof M == "function")) {
                  z = M.call(cl, z, r);
                  break l;
                }
                z = M;
                break l;
              case 3:
                M.flags = (M.flags & -65537) | 128;
              case 0:
                if (
                  ((M = C.payload), (r = typeof M == "function" ? M.call(cl, z, r) : M), r == null)
                )
                  break l;
                z = B({}, z, r);
                break l;
              case 2:
                aa = !0;
            }
          }
          ((r = c.callback),
            r !== null &&
              ((l.flags |= 64),
              v && (l.flags |= 8192),
              (v = u.callbacks),
              v === null ? (u.callbacks = [r]) : v.push(r)));
        } else
          ((v = { lane: r, tag: c.tag, payload: c.payload, callback: c.callback, next: null }),
            S === null ? ((m = S = v), (f = z)) : (S = S.next = v),
            (i |= r));
        if (((c = c.next), c === null)) {
          if (((c = u.shared.pending), c === null)) break;
          ((v = c),
            (c = v.next),
            (v.next = null),
            (u.lastBaseUpdate = v),
            (u.shared.pending = null));
        }
      } while (!0);
      (S === null && (f = z),
        (u.baseState = f),
        (u.firstBaseUpdate = m),
        (u.lastBaseUpdate = S),
        n === null && (u.shared.lanes = 0),
        (sa |= i),
        (l.lanes = i),
        (l.memoizedState = z));
    }
  }
  function Us(l, t) {
    if (typeof l != "function") throw Error(h(191, l));
    l.call(t);
  }
  function Ns(l, t) {
    var a = l.callbacks;
    if (a !== null) for (l.callbacks = null, l = 0; l < a.length; l++) Us(a[l], t);
  }
  var se = o(null),
    ku = o(0);
  function Hs(l, t) {
    ((l = Kt), _(ku, l), _(se, t), (Kt = l | t.baseLanes));
  }
  function ji() {
    (_(ku, Kt), _(se, se.current));
  }
  function Gi() {
    ((Kt = ku.current), T(se), T(ku));
  }
  var tt = o(null),
    mt = null;
  function na(l) {
    var t = l.alternate;
    (_(Sl, Sl.current & 1),
      _(tt, l),
      mt === null && (t === null || se.current !== null || t.memoizedState !== null) && (mt = l));
  }
  function Qi(l) {
    (_(Sl, Sl.current), _(tt, l), mt === null && (mt = l));
  }
  function Rs(l) {
    l.tag === 22 ? (_(Sl, Sl.current), _(tt, l), mt === null && (mt = l)) : ia();
  }
  function ia() {
    (_(Sl, Sl.current), _(tt, tt.current));
  }
  function at(l) {
    (T(tt), mt === l && (mt = null), T(Sl));
  }
  var Sl = o(0);
  function Fu(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && ((a = a.dehydrated), a === null || Jc(a) || wc(a))) return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Yt = 0,
    G = null,
    nl = null,
    zl = null,
    Iu = !1,
    oe = !1,
    xa = !1,
    Pu = 0,
    $e = 0,
    de = null,
    Yh = 0;
  function ml() {
    throw Error(h(321));
  }
  function Xi(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++) if (!Pl(l[a], t[a])) return !1;
    return !0;
  }
  function Zi(l, t, a, e, u, n) {
    return (
      (Yt = n),
      (G = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (b.H = l === null || l.memoizedState === null ? r0 : ec),
      (xa = !1),
      (n = a(e, u)),
      (xa = !1),
      oe && (n = qs(t, a, e, u)),
      Cs(l),
      n
    );
  }
  function Cs(l) {
    b.H = Ie;
    var t = nl !== null && nl.next !== null;
    if (((Yt = 0), (zl = nl = G = null), (Iu = !1), ($e = 0), (de = null), t)) throw Error(h(300));
    l === null || Tl || ((l = l.dependencies), l !== null && Vu(l) && (Tl = !0));
  }
  function qs(l, t, a, e) {
    G = l;
    var u = 0;
    do {
      if ((oe && (de = null), ($e = 0), (oe = !1), 25 <= u)) throw Error(h(301));
      if (((u += 1), (zl = nl = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        ((n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0));
      }
      ((b.H = v0), (n = t(a, e)));
    } while (oe);
    return n;
  }
  function jh() {
    var l = b.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? ke(t) : t),
      (l = l.useState()[0]),
      (nl !== null ? nl.memoizedState : null) !== l && (G.flags |= 1024),
      t
    );
  }
  function Vi() {
    var l = Pu !== 0;
    return ((Pu = 0), l);
  }
  function Li(l, t, a) {
    ((t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~a));
  }
  function Ki(l) {
    if (Iu) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        (t !== null && (t.pending = null), (l = l.next));
      }
      Iu = !1;
    }
    ((Yt = 0), (zl = nl = G = null), (oe = !1), ($e = Pu = 0), (de = null));
  }
  function xl() {
    var l = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (zl === null ? (G.memoizedState = zl = l) : (zl = zl.next = l), zl);
  }
  function bl() {
    if (nl === null) {
      var l = G.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = nl.next;
    var t = zl === null ? G.memoizedState : zl.next;
    if (t !== null) ((zl = t), (nl = l));
    else {
      if (l === null) throw G.alternate === null ? Error(h(467)) : Error(h(310));
      ((nl = l),
        (l = {
          memoizedState: nl.memoizedState,
          baseState: nl.baseState,
          baseQueue: nl.baseQueue,
          queue: nl.queue,
          next: null,
        }),
        zl === null ? (G.memoizedState = zl = l) : (zl = zl.next = l));
    }
    return zl;
  }
  function ln() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ke(l) {
    var t = $e;
    return (
      ($e += 1),
      de === null && (de = []),
      (l = As(de, l, t)),
      (t = G),
      (zl === null ? t.memoizedState : zl.next) === null &&
        ((t = t.alternate), (b.H = t === null || t.memoizedState === null ? r0 : ec)),
      l
    );
  }
  function tn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return ke(l);
      if (l.$$typeof === Rl) return Ul(l);
    }
    throw Error(h(438, String(l)));
  }
  function Ji(l) {
    var t = null,
      a = G.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var e = G.alternate;
      e !== null &&
        ((e = e.updateQueue),
        e !== null &&
          ((e = e.memoCache),
          e != null &&
            (t = {
              data: e.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = ln()), (G.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(l), e = 0; e < l; e++) a[e] = Qa;
    return (t.index++, a);
  }
  function jt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function an(l) {
    var t = bl();
    return wi(t, nl, l);
  }
  function wi(l, t, a) {
    var e = l.queue;
    if (e === null) throw Error(h(311));
    e.lastRenderedReducer = a;
    var u = l.baseQueue,
      n = e.pending;
    if (n !== null) {
      if (u !== null) {
        var i = u.next;
        ((u.next = n.next), (n.next = i));
      }
      ((t.baseQueue = u = n), (e.pending = null));
    }
    if (((n = l.baseState), u === null)) l.memoizedState = n;
    else {
      t = u.next;
      var c = (i = null),
        f = null,
        m = t,
        S = !1;
      do {
        var z = m.lane & -536870913;
        if (z !== m.lane ? (J & z) === z : (Yt & z) === z) {
          var r = m.revertLane;
          if (r === 0)
            (f !== null &&
              (f = f.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: m.action,
                  hasEagerState: m.hasEagerState,
                  eagerState: m.eagerState,
                  next: null,
                }),
              z === ne && (S = !0));
          else if ((Yt & r) === r) {
            ((m = m.next), r === ne && (S = !0));
            continue;
          } else
            ((z = {
              lane: 0,
              revertLane: m.revertLane,
              gesture: null,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null,
            }),
              f === null ? ((c = f = z), (i = n)) : (f = f.next = z),
              (G.lanes |= r),
              (sa |= r));
          ((z = m.action), xa && a(n, z), (n = m.hasEagerState ? m.eagerState : a(n, z)));
        } else
          ((r = {
            lane: z,
            revertLane: m.revertLane,
            gesture: m.gesture,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null,
          }),
            f === null ? ((c = f = r), (i = n)) : (f = f.next = r),
            (G.lanes |= z),
            (sa |= z));
        m = m.next;
      } while (m !== null && m !== t);
      if (
        (f === null ? (i = n) : (f.next = c),
        !Pl(n, l.memoizedState) && ((Tl = !0), S && ((a = ie), a !== null)))
      )
        throw a;
      ((l.memoizedState = n), (l.baseState = i), (l.baseQueue = f), (e.lastRenderedState = n));
    }
    return (u === null && (e.lanes = 0), [l.memoizedState, e.dispatch]);
  }
  function Wi(l) {
    var t = bl(),
      a = t.queue;
    if (a === null) throw Error(h(311));
    a.lastRenderedReducer = l;
    var e = a.dispatch,
      u = a.pending,
      n = t.memoizedState;
    if (u !== null) {
      a.pending = null;
      var i = (u = u.next);
      do ((n = l(n, i.action)), (i = i.next));
      while (i !== u);
      (Pl(n, t.memoizedState) || (Tl = !0),
        (t.memoizedState = n),
        t.baseQueue === null && (t.baseState = n),
        (a.lastRenderedState = n));
    }
    return [n, e];
  }
  function Bs(l, t, a) {
    var e = G,
      u = bl(),
      n = $;
    if (n) {
      if (a === void 0) throw Error(h(407));
      a = a();
    } else a = t();
    var i = !Pl((nl || u).memoizedState, a);
    if (
      (i && ((u.memoizedState = a), (Tl = !0)),
      (u = u.queue),
      Fi(js.bind(null, e, u, l), [l]),
      u.getSnapshot !== t || i || (zl !== null && zl.memoizedState.tag & 1))
    ) {
      if (
        ((e.flags |= 2048),
        he(9, { destroy: void 0 }, Ys.bind(null, e, u, a, t), null),
        sl === null)
      )
        throw Error(h(349));
      n || (Yt & 127) !== 0 || xs(e, t, a);
    }
    return a;
  }
  function xs(l, t, a) {
    ((l.flags |= 16384),
      (l = { getSnapshot: t, value: a }),
      (t = G.updateQueue),
      t === null
        ? ((t = ln()), (G.updateQueue = t), (t.stores = [l]))
        : ((a = t.stores), a === null ? (t.stores = [l]) : a.push(l)));
  }
  function Ys(l, t, a, e) {
    ((t.value = a), (t.getSnapshot = e), Gs(t) && Qs(l));
  }
  function js(l, t, a) {
    return a(function () {
      Gs(t) && Qs(l);
    });
  }
  function Gs(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !Pl(l, a);
    } catch {
      return !0;
    }
  }
  function Qs(l) {
    var t = Oa(l, 2);
    t !== null && wl(t, l, 2);
  }
  function $i(l) {
    var t = xl();
    if (typeof l == "function") {
      var a = l;
      if (((l = a()), xa)) {
        $t(!0);
        try {
          a();
        } finally {
          $t(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: jt,
        lastRenderedState: l,
      }),
      t
    );
  }
  function Xs(l, t, a, e) {
    return ((l.baseState = a), wi(l, nl, typeof e == "function" ? e : jt));
  }
  function Gh(l, t, a, e, u) {
    if (nn(l)) throw Error(h(485));
    if (((l = t.action), l !== null)) {
      var n = {
        payload: u,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          n.listeners.push(i);
        },
      };
      (b.T !== null ? a(!0) : (n.isTransition = !1),
        e(n),
        (a = t.pending),
        a === null
          ? ((n.next = t.pending = n), Zs(t, n))
          : ((n.next = a.next), (t.pending = a.next = n)));
    }
  }
  function Zs(l, t) {
    var a = t.action,
      e = t.payload,
      u = l.state;
    if (t.isTransition) {
      var n = b.T,
        i = {};
      b.T = i;
      try {
        var c = a(u, e),
          f = b.S;
        (f !== null && f(i, c), Vs(l, t, c));
      } catch (m) {
        ki(l, t, m);
      } finally {
        (n !== null && i.types !== null && (n.types = i.types), (b.T = n));
      }
    } else
      try {
        ((n = a(u, e)), Vs(l, t, n));
      } catch (m) {
        ki(l, t, m);
      }
  }
  function Vs(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (e) {
            Ls(l, t, e);
          },
          function (e) {
            return ki(l, t, e);
          },
        )
      : Ls(l, t, a);
  }
  function Ls(l, t, a) {
    ((t.status = "fulfilled"),
      (t.value = a),
      Ks(t),
      (l.state = a),
      (t = l.pending),
      t !== null &&
        ((a = t.next), a === t ? (l.pending = null) : ((a = a.next), (t.next = a), Zs(l, a))));
  }
  function ki(l, t, a) {
    var e = l.pending;
    if (((l.pending = null), e !== null)) {
      e = e.next;
      do ((t.status = "rejected"), (t.reason = a), Ks(t), (t = t.next));
      while (t !== e);
    }
    l.action = null;
  }
  function Ks(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Js(l, t) {
    return t;
  }
  function ws(l, t) {
    if ($) {
      var a = sl.formState;
      if (a !== null) {
        l: {
          var e = G;
          if ($) {
            if (ol) {
              t: {
                for (var u = ol, n = yt; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break t;
                  }
                  if (((u = rt(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                ((n = u.data), (u = n === "F!" || n === "F" ? u : null));
              }
              if (u) {
                ((ol = rt(u.nextSibling)), (e = u.data === "F!"));
                break l;
              }
            }
            la(e);
          }
          e = !1;
        }
        e && (t = a[0]);
      }
    }
    return (
      (a = xl()),
      (a.memoizedState = a.baseState = t),
      (e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Js,
        lastRenderedState: t,
      }),
      (a.queue = e),
      (a = h0.bind(null, G, e)),
      (e.dispatch = a),
      (e = $i(!1)),
      (n = ac.bind(null, G, !1, e.queue)),
      (e = xl()),
      (u = { state: t, dispatch: null, action: l, pending: null }),
      (e.queue = u),
      (a = Gh.bind(null, G, u, n, a)),
      (u.dispatch = a),
      (e.memoizedState = l),
      [t, a, !1]
    );
  }
  function Ws(l) {
    var t = bl();
    return $s(t, nl, l);
  }
  function $s(l, t, a) {
    if (
      ((t = wi(l, t, Js)[0]),
      (l = an(jt)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var e = ke(t);
      } catch (i) {
        throw i === ce ? Ju : i;
      }
    else e = t;
    t = bl();
    var u = t.queue,
      n = u.dispatch;
    return (
      a !== t.memoizedState &&
        ((G.flags |= 2048), he(9, { destroy: void 0 }, Qh.bind(null, u, a), null)),
      [e, n, l]
    );
  }
  function Qh(l, t) {
    l.action = t;
  }
  function ks(l) {
    var t = bl(),
      a = nl;
    if (a !== null) return $s(t, a, l);
    (bl(), (t = t.memoizedState), (a = bl()));
    var e = a.queue.dispatch;
    return ((a.memoizedState = l), [t, e, !1]);
  }
  function he(l, t, a, e) {
    return (
      (l = { tag: l, create: a, deps: e, inst: t, next: null }),
      (t = G.updateQueue),
      t === null && ((t = ln()), (G.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = l.next = l)
        : ((e = a.next), (a.next = l), (l.next = e), (t.lastEffect = l)),
      l
    );
  }
  function Fs() {
    return bl().memoizedState;
  }
  function en(l, t, a, e) {
    var u = xl();
    ((G.flags |= l),
      (u.memoizedState = he(1 | t, { destroy: void 0 }, a, e === void 0 ? null : e)));
  }
  function un(l, t, a, e) {
    var u = bl();
    e = e === void 0 ? null : e;
    var n = u.memoizedState.inst;
    nl !== null && e !== null && Xi(e, nl.memoizedState.deps)
      ? (u.memoizedState = he(t, n, a, e))
      : ((G.flags |= l), (u.memoizedState = he(1 | t, n, a, e)));
  }
  function Is(l, t) {
    en(8390656, 8, l, t);
  }
  function Fi(l, t) {
    un(2048, 8, l, t);
  }
  function Xh(l) {
    G.flags |= 4;
    var t = G.updateQueue;
    if (t === null) ((t = ln()), (G.updateQueue = t), (t.events = [l]));
    else {
      var a = t.events;
      a === null ? (t.events = [l]) : a.push(l);
    }
  }
  function Ps(l) {
    var t = bl().memoizedState;
    return (
      Xh({ ref: t, nextImpl: l }),
      function () {
        if ((I & 2) !== 0) throw Error(h(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function l0(l, t) {
    return un(4, 2, l, t);
  }
  function t0(l, t) {
    return un(4, 4, l, t);
  }
  function a0(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function e0(l, t, a) {
    ((a = a != null ? a.concat([l]) : null), un(4, 4, a0.bind(null, t, l), a));
  }
  function Ii() {}
  function u0(l, t) {
    var a = bl();
    t = t === void 0 ? null : t;
    var e = a.memoizedState;
    return t !== null && Xi(t, e[1]) ? e[0] : ((a.memoizedState = [l, t]), l);
  }
  function n0(l, t) {
    var a = bl();
    t = t === void 0 ? null : t;
    var e = a.memoizedState;
    if (t !== null && Xi(t, e[1])) return e[0];
    if (((e = l()), xa)) {
      $t(!0);
      try {
        l();
      } finally {
        $t(!1);
      }
    }
    return ((a.memoizedState = [e, t]), e);
  }
  function Pi(l, t, a) {
    return a === void 0 || ((Yt & 1073741824) !== 0 && (J & 261930) === 0)
      ? (l.memoizedState = t)
      : ((l.memoizedState = a), (l = io()), (G.lanes |= l), (sa |= l), a);
  }
  function i0(l, t, a, e) {
    return Pl(a, t)
      ? a
      : se.current !== null
        ? ((l = Pi(l, a, e)), Pl(l, t) || (Tl = !0), l)
        : (Yt & 42) === 0 || ((Yt & 1073741824) !== 0 && (J & 261930) === 0)
          ? ((Tl = !0), (l.memoizedState = a))
          : ((l = io()), (G.lanes |= l), (sa |= l), t);
  }
  function c0(l, t, a, e, u) {
    var n = A.p;
    A.p = n !== 0 && 8 > n ? n : 8;
    var i = b.T,
      c = {};
    ((b.T = c), ac(l, !1, t, a));
    try {
      var f = u(),
        m = b.S;
      if (
        (m !== null && m(c, f), f !== null && typeof f == "object" && typeof f.then == "function")
      ) {
        var S = xh(f, e);
        Fe(l, t, S, nt(l));
      } else Fe(l, t, e, nt(l));
    } catch (z) {
      Fe(l, t, { then: function () {}, status: "rejected", reason: z }, nt());
    } finally {
      ((A.p = n), i !== null && c.types !== null && (i.types = c.types), (b.T = i));
    }
  }
  function Zh() {}
  function lc(l, t, a, e) {
    if (l.tag !== 5) throw Error(h(476));
    var u = f0(l).queue;
    c0(
      l,
      u,
      t,
      x,
      a === null
        ? Zh
        : function () {
            return (s0(l), a(e));
          },
    );
  }
  function f0(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: x,
      baseState: x,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: jt,
        lastRenderedState: x,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: jt,
          lastRenderedState: a,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function s0(l) {
    var t = f0(l);
    (t.next === null && (t = l.alternate.memoizedState), Fe(l, t.next.queue, {}, nt()));
  }
  function tc() {
    return Ul(mu);
  }
  function o0() {
    return bl().memoizedState;
  }
  function d0() {
    return bl().memoizedState;
  }
  function Vh(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = nt();
          l = ea(a);
          var e = ua(t, l, a);
          (e !== null && (wl(e, t, a), Je(e, t, a)), (t = { cache: Ni() }), (l.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function Lh(l, t, a) {
    var e = nt();
    ((a = {
      lane: e,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      nn(l) ? y0(t, a) : ((a = bi(l, t, a, e)), a !== null && (wl(a, l, e), m0(a, t, e))));
  }
  function h0(l, t, a) {
    var e = nt();
    Fe(l, t, a, e);
  }
  function Fe(l, t, a, e) {
    var u = {
      lane: e,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (nn(l)) y0(t, u);
    else {
      var n = l.alternate;
      if (
        l.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = t.lastRenderedReducer), n !== null)
      )
        try {
          var i = t.lastRenderedState,
            c = n(i, a);
          if (((u.hasEagerState = !0), (u.eagerState = c), Pl(c, i)))
            return (Gu(l, t, u, 0), sl === null && ju(), !1);
        } catch {
        } finally {
        }
      if (((a = bi(l, t, u, e)), a !== null)) return (wl(a, l, e), m0(a, t, e), !0);
    }
    return !1;
  }
  function ac(l, t, a, e) {
    if (
      ((e = {
        lane: 2,
        revertLane: qc(),
        gesture: null,
        action: e,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      nn(l))
    ) {
      if (t) throw Error(h(479));
    } else ((t = bi(l, a, e, 2)), t !== null && wl(t, l, 2));
  }
  function nn(l) {
    var t = l.alternate;
    return l === G || (t !== null && t === G);
  }
  function y0(l, t) {
    oe = Iu = !0;
    var a = l.pending;
    (a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)), (l.pending = t));
  }
  function m0(l, t, a) {
    if ((a & 4194048) !== 0) {
      var e = t.lanes;
      ((e &= l.pendingLanes), (a |= e), (t.lanes = a), bf(l, a));
    }
  }
  var Ie = {
    readContext: Ul,
    use: tn,
    useCallback: ml,
    useContext: ml,
    useEffect: ml,
    useImperativeHandle: ml,
    useLayoutEffect: ml,
    useInsertionEffect: ml,
    useMemo: ml,
    useReducer: ml,
    useRef: ml,
    useState: ml,
    useDebugValue: ml,
    useDeferredValue: ml,
    useTransition: ml,
    useSyncExternalStore: ml,
    useId: ml,
    useHostTransitionStatus: ml,
    useFormState: ml,
    useActionState: ml,
    useOptimistic: ml,
    useMemoCache: ml,
    useCacheRefresh: ml,
  };
  Ie.useEffectEvent = ml;
  var r0 = {
      readContext: Ul,
      use: tn,
      useCallback: function (l, t) {
        return ((xl().memoizedState = [l, t === void 0 ? null : t]), l);
      },
      useContext: Ul,
      useEffect: Is,
      useImperativeHandle: function (l, t, a) {
        ((a = a != null ? a.concat([l]) : null), en(4194308, 4, a0.bind(null, t, l), a));
      },
      useLayoutEffect: function (l, t) {
        return en(4194308, 4, l, t);
      },
      useInsertionEffect: function (l, t) {
        en(4, 2, l, t);
      },
      useMemo: function (l, t) {
        var a = xl();
        t = t === void 0 ? null : t;
        var e = l();
        if (xa) {
          $t(!0);
          try {
            l();
          } finally {
            $t(!1);
          }
        }
        return ((a.memoizedState = [e, t]), e);
      },
      useReducer: function (l, t, a) {
        var e = xl();
        if (a !== void 0) {
          var u = a(t);
          if (xa) {
            $t(!0);
            try {
              a(t);
            } finally {
              $t(!1);
            }
          }
        } else u = t;
        return (
          (e.memoizedState = e.baseState = u),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: u,
          }),
          (e.queue = l),
          (l = l.dispatch = Lh.bind(null, G, l)),
          [e.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = xl();
        return ((l = { current: l }), (t.memoizedState = l));
      },
      useState: function (l) {
        l = $i(l);
        var t = l.queue,
          a = h0.bind(null, G, t);
        return ((t.dispatch = a), [l.memoizedState, a]);
      },
      useDebugValue: Ii,
      useDeferredValue: function (l, t) {
        var a = xl();
        return Pi(a, l, t);
      },
      useTransition: function () {
        var l = $i(!1);
        return ((l = c0.bind(null, G, l.queue, !0, !1)), (xl().memoizedState = l), [!1, l]);
      },
      useSyncExternalStore: function (l, t, a) {
        var e = G,
          u = xl();
        if ($) {
          if (a === void 0) throw Error(h(407));
          a = a();
        } else {
          if (((a = t()), sl === null)) throw Error(h(349));
          (J & 127) !== 0 || xs(e, t, a);
        }
        u.memoizedState = a;
        var n = { value: a, getSnapshot: t };
        return (
          (u.queue = n),
          Is(js.bind(null, e, n, l), [l]),
          (e.flags |= 2048),
          he(9, { destroy: void 0 }, Ys.bind(null, e, n, a, t), null),
          a
        );
      },
      useId: function () {
        var l = xl(),
          t = sl.identifierPrefix;
        if ($) {
          var a = _t,
            e = At;
          ((a = (e & ~(1 << (32 - Il(e) - 1))).toString(32) + a),
            (t = "_" + t + "R_" + a),
            (a = Pu++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "_"));
        } else ((a = Yh++), (t = "_" + t + "r_" + a.toString(32) + "_"));
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: tc,
      useFormState: ws,
      useActionState: ws,
      useOptimistic: function (l) {
        var t = xl();
        t.memoizedState = t.baseState = l;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return ((t.queue = a), (t = ac.bind(null, G, !0, a)), (a.dispatch = t), [l, t]);
      },
      useMemoCache: Ji,
      useCacheRefresh: function () {
        return (xl().memoizedState = Vh.bind(null, G));
      },
      useEffectEvent: function (l) {
        var t = xl(),
          a = { impl: l };
        return (
          (t.memoizedState = a),
          function () {
            if ((I & 2) !== 0) throw Error(h(440));
            return a.impl.apply(void 0, arguments);
          }
        );
      },
    },
    ec = {
      readContext: Ul,
      use: tn,
      useCallback: u0,
      useContext: Ul,
      useEffect: Fi,
      useImperativeHandle: e0,
      useInsertionEffect: l0,
      useLayoutEffect: t0,
      useMemo: n0,
      useReducer: an,
      useRef: Fs,
      useState: function () {
        return an(jt);
      },
      useDebugValue: Ii,
      useDeferredValue: function (l, t) {
        var a = bl();
        return i0(a, nl.memoizedState, l, t);
      },
      useTransition: function () {
        var l = an(jt)[0],
          t = bl().memoizedState;
        return [typeof l == "boolean" ? l : ke(l), t];
      },
      useSyncExternalStore: Bs,
      useId: o0,
      useHostTransitionStatus: tc,
      useFormState: Ws,
      useActionState: Ws,
      useOptimistic: function (l, t) {
        var a = bl();
        return Xs(a, nl, l, t);
      },
      useMemoCache: Ji,
      useCacheRefresh: d0,
    };
  ec.useEffectEvent = Ps;
  var v0 = {
    readContext: Ul,
    use: tn,
    useCallback: u0,
    useContext: Ul,
    useEffect: Fi,
    useImperativeHandle: e0,
    useInsertionEffect: l0,
    useLayoutEffect: t0,
    useMemo: n0,
    useReducer: Wi,
    useRef: Fs,
    useState: function () {
      return Wi(jt);
    },
    useDebugValue: Ii,
    useDeferredValue: function (l, t) {
      var a = bl();
      return nl === null ? Pi(a, l, t) : i0(a, nl.memoizedState, l, t);
    },
    useTransition: function () {
      var l = Wi(jt)[0],
        t = bl().memoizedState;
      return [typeof l == "boolean" ? l : ke(l), t];
    },
    useSyncExternalStore: Bs,
    useId: o0,
    useHostTransitionStatus: tc,
    useFormState: ks,
    useActionState: ks,
    useOptimistic: function (l, t) {
      var a = bl();
      return nl !== null ? Xs(a, nl, l, t) : ((a.baseState = l), [l, a.queue.dispatch]);
    },
    useMemoCache: Ji,
    useCacheRefresh: d0,
  };
  v0.useEffectEvent = Ps;
  function uc(l, t, a, e) {
    ((t = l.memoizedState),
      (a = a(e, t)),
      (a = a == null ? t : B({}, t, a)),
      (l.memoizedState = a),
      l.lanes === 0 && (l.updateQueue.baseState = a));
  }
  var nc = {
    enqueueSetState: function (l, t, a) {
      l = l._reactInternals;
      var e = nt(),
        u = ea(e);
      ((u.payload = t),
        a != null && (u.callback = a),
        (t = ua(l, u, e)),
        t !== null && (wl(t, l, e), Je(t, l, e)));
    },
    enqueueReplaceState: function (l, t, a) {
      l = l._reactInternals;
      var e = nt(),
        u = ea(e);
      ((u.tag = 1),
        (u.payload = t),
        a != null && (u.callback = a),
        (t = ua(l, u, e)),
        t !== null && (wl(t, l, e), Je(t, l, e)));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var a = nt(),
        e = ea(a);
      ((e.tag = 2),
        t != null && (e.callback = t),
        (t = ua(l, e, a)),
        t !== null && (wl(t, l, a), Je(t, l, a)));
    },
  };
  function g0(l, t, a, e, u, n, i) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(e, n, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !je(a, e) || !je(u, n)
          : !0
    );
  }
  function S0(l, t, a, e) {
    ((l = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, e),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, e),
      t.state !== l && nc.enqueueReplaceState(t, t.state, null));
  }
  function Ya(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var e in t) e !== "ref" && (a[e] = t[e]);
    }
    if ((l = l.defaultProps)) {
      a === t && (a = B({}, a));
      for (var u in l) a[u] === void 0 && (a[u] = l[u]);
    }
    return a;
  }
  function b0(l) {
    Yu(l);
  }
  function p0(l) {
    console.error(l);
  }
  function z0(l) {
    Yu(l);
  }
  function cn(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  function T0(l, t, a) {
    try {
      var e = l.onCaughtError;
      e(a.value, { componentStack: a.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function ic(l, t, a) {
    return (
      (a = ea(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        cn(l, t);
      }),
      a
    );
  }
  function E0(l) {
    return ((l = ea(l)), (l.tag = 3), l);
  }
  function A0(l, t, a, e) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = e.value;
      ((l.payload = function () {
        return u(n);
      }),
        (l.callback = function () {
          T0(t, a, e);
        }));
    }
    var i = a.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (l.callback = function () {
        (T0(t, a, e),
          typeof u != "function" && (oa === null ? (oa = new Set([this])) : oa.add(this)));
        var c = e.stack;
        this.componentDidCatch(e.value, { componentStack: c !== null ? c : "" });
      });
  }
  function Kh(l, t, a, e, u) {
    if (((a.flags |= 32768), e !== null && typeof e == "object" && typeof e.then == "function")) {
      if (((t = a.alternate), t !== null && ue(t, a, u, !0), (a = tt.current), a !== null)) {
        switch (a.tag) {
          case 31:
          case 13:
            return (
              mt === null ? bn() : a.alternate === null && rl === 0 && (rl = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = u),
              e === wu
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([e])) : t.add(e),
                  Hc(l, e, u)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              e === wu
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([e]) }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue), a === null ? (t.retryQueue = new Set([e])) : a.add(e)),
                  Hc(l, e, u)),
              !1
            );
        }
        throw Error(h(435, a.tag));
      }
      return (Hc(l, e, u), bn(), !1);
    }
    if ($)
      return (
        (t = tt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = u),
            e !== _i && ((l = Error(h(422), { cause: e })), Xe(ot(l, a))))
          : (e !== _i && ((t = Error(h(423), { cause: e })), Xe(ot(t, a))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (u &= -u),
            (l.lanes |= u),
            (e = ot(e, a)),
            (u = ic(l.stateNode, e, u)),
            xi(l, u),
            rl !== 4 && (rl = 2)),
        !1
      );
    var n = Error(h(520), { cause: e });
    if (((n = ot(n, a)), iu === null ? (iu = [n]) : iu.push(n), rl !== 4 && (rl = 2), t === null))
      return !0;
    ((e = ot(e, a)), (a = t));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (l = u & -u),
            (a.lanes |= l),
            (l = ic(a.stateNode, e, l)),
            xi(a, l),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (n = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (oa === null || !oa.has(n)))))
          )
            return (
              (a.flags |= 65536),
              (u &= -u),
              (a.lanes |= u),
              (u = E0(u)),
              A0(u, l, a, e),
              xi(a, u),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var cc = Error(h(461)),
    Tl = !1;
  function Nl(l, t, a, e) {
    t.child = l === null ? Ds(t, null, a, e) : Ba(t, l.child, a, e);
  }
  function _0(l, t, a, e, u) {
    a = a.render;
    var n = t.ref;
    if ("ref" in e) {
      var i = {};
      for (var c in e) c !== "ref" && (i[c] = e[c]);
    } else i = e;
    return (
      Ha(t),
      (e = Zi(l, t, a, i, n, u)),
      (c = Vi()),
      l !== null && !Tl
        ? (Li(l, t, u), Gt(l, t, u))
        : ($ && c && Ei(t), (t.flags |= 1), Nl(l, t, e, u), t.child)
    );
  }
  function M0(l, t, a, e, u) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" && !pi(n) && n.defaultProps === void 0 && a.compare === null
        ? ((t.tag = 15), (t.type = n), O0(l, t, n, e, u))
        : ((l = Xu(a.type, null, e, t, t.mode, u)), (l.ref = t.ref), (l.return = t), (t.child = l));
    }
    if (((n = l.child), !rc(l, u))) {
      var i = n.memoizedProps;
      if (((a = a.compare), (a = a !== null ? a : je), a(i, e) && l.ref === t.ref))
        return Gt(l, t, u);
    }
    return ((t.flags |= 1), (l = Ct(n, e)), (l.ref = t.ref), (l.return = t), (t.child = l));
  }
  function O0(l, t, a, e, u) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (je(n, e) && l.ref === t.ref)
        if (((Tl = !1), (t.pendingProps = e = n), rc(l, u))) (l.flags & 131072) !== 0 && (Tl = !0);
        else return ((t.lanes = l.lanes), Gt(l, t, u));
    }
    return fc(l, t, a, e, u);
  }
  function D0(l, t, a, e) {
    var u = e.children,
      n = l !== null ? l.memoizedState : null;
    if (
      (l === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((n = n !== null ? n.baseLanes | a : a), l !== null)) {
          for (e = t.child = l.child, u = 0; e !== null; )
            ((u = u | e.lanes | e.childLanes), (e = e.sibling));
          e = u & ~n;
        } else ((e = 0), (t.child = null));
        return U0(l, t, n, a, e);
      }
      if ((a & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && Ku(t, n !== null ? n.cachePool : null),
          n !== null ? Hs(t, n) : ji(),
          Rs(t));
      else return ((e = t.lanes = 536870912), U0(l, t, n !== null ? n.baseLanes | a : a, a, e));
    } else
      n !== null
        ? (Ku(t, n.cachePool), Hs(t, n), ia(), (t.memoizedState = null))
        : (l !== null && Ku(t, null), ji(), ia());
    return (Nl(l, t, u, a), t.child);
  }
  function Pe(l, t) {
    return (
      (l !== null && l.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function U0(l, t, a, e, u) {
    var n = Ri();
    return (
      (n = n === null ? null : { parent: pl._currentValue, pool: n }),
      (t.memoizedState = { baseLanes: a, cachePool: n }),
      l !== null && Ku(t, null),
      ji(),
      Rs(t),
      l !== null && ue(l, t, e, !0),
      (t.childLanes = u),
      null
    );
  }
  function fn(l, t) {
    return (
      (t = on({ mode: t.mode, children: t.children }, l.mode)),
      (t.ref = l.ref),
      (l.child = t),
      (t.return = l),
      t
    );
  }
  function N0(l, t, a) {
    return (
      Ba(t, l.child, null, a),
      (l = fn(t, t.pendingProps)),
      (l.flags |= 2),
      at(t),
      (t.memoizedState = null),
      l
    );
  }
  function Jh(l, t, a) {
    var e = t.pendingProps,
      u = (t.flags & 128) !== 0;
    if (((t.flags &= -129), l === null)) {
      if ($) {
        if (e.mode === "hidden") return ((l = fn(t, e)), (t.lanes = 536870912), Pe(null, l));
        if (
          (Qi(t),
          (l = ol)
            ? ((l = Vo(l, yt)),
              (l = l !== null && l.data === "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: It !== null ? { id: At, overflow: _t } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = ys(l)),
                (a.return = t),
                (t.child = a),
                (Dl = t),
                (ol = null)))
            : (l = null),
          l === null)
        )
          throw la(t);
        return ((t.lanes = 536870912), null);
      }
      return fn(t, e);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var i = n.dehydrated;
      if ((Qi(t), u))
        if (t.flags & 256) ((t.flags &= -257), (t = N0(l, t, a)));
        else if (t.memoizedState !== null) ((t.child = l.child), (t.flags |= 128), (t = null));
        else throw Error(h(558));
      else if ((Tl || ue(l, t, a, !1), (u = (a & l.childLanes) !== 0), Tl || u)) {
        if (((e = sl), e !== null && ((i = pf(e, a)), i !== 0 && i !== n.retryLane)))
          throw ((n.retryLane = i), Oa(l, i), wl(e, l, i), cc);
        (bn(), (t = N0(l, t, a)));
      } else
        ((l = n.treeContext),
          (ol = rt(i.nextSibling)),
          (Dl = t),
          ($ = !0),
          (Pt = null),
          (yt = !1),
          l !== null && vs(t, l),
          (t = fn(t, e)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (l = Ct(l.child, { mode: e.mode, children: e.children })),
      (l.ref = t.ref),
      (t.child = l),
      (l.return = t),
      l
    );
  }
  function sn(l, t) {
    var a = t.ref;
    if (a === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(h(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function fc(l, t, a, e, u) {
    return (
      Ha(t),
      (a = Zi(l, t, a, e, void 0, u)),
      (e = Vi()),
      l !== null && !Tl
        ? (Li(l, t, u), Gt(l, t, u))
        : ($ && e && Ei(t), (t.flags |= 1), Nl(l, t, a, u), t.child)
    );
  }
  function H0(l, t, a, e, u, n) {
    return (
      Ha(t),
      (t.updateQueue = null),
      (a = qs(t, e, a, u)),
      Cs(l),
      (e = Vi()),
      l !== null && !Tl
        ? (Li(l, t, n), Gt(l, t, n))
        : ($ && e && Ei(t), (t.flags |= 1), Nl(l, t, a, n), t.child)
    );
  }
  function R0(l, t, a, e, u) {
    if ((Ha(t), t.stateNode === null)) {
      var n = le,
        i = a.contextType;
      (typeof i == "object" && i !== null && (n = Ul(i)),
        (n = new a(e, n)),
        (t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = nc),
        (t.stateNode = n),
        (n._reactInternals = t),
        (n = t.stateNode),
        (n.props = e),
        (n.state = t.memoizedState),
        (n.refs = {}),
        qi(t),
        (i = a.contextType),
        (n.context = typeof i == "object" && i !== null ? Ul(i) : le),
        (n.state = t.memoizedState),
        (i = a.getDerivedStateFromProps),
        typeof i == "function" && (uc(t, a, i, e), (n.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((i = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(),
          i !== n.state && nc.enqueueReplaceState(n, n.state, null),
          We(t, e, n, u),
          we(),
          (n.state = t.memoizedState)),
        typeof n.componentDidMount == "function" && (t.flags |= 4194308),
        (e = !0));
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps,
        f = Ya(a, c);
      n.props = f;
      var m = n.context,
        S = a.contextType;
      ((i = le), typeof S == "object" && S !== null && (i = Ul(S)));
      var z = a.getDerivedStateFromProps;
      ((S = typeof z == "function" || typeof n.getSnapshotBeforeUpdate == "function"),
        (c = t.pendingProps !== c),
        S ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c || m !== i) && S0(t, n, e, i)),
        (aa = !1));
      var r = t.memoizedState;
      ((n.state = r),
        We(t, e, n, u),
        we(),
        (m = t.memoizedState),
        c || r !== m || aa
          ? (typeof z == "function" && (uc(t, a, z, e), (m = t.memoizedState)),
            (f = aa || g0(t, a, f, e, r, m, i))
              ? (S ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" && n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" && (t.flags |= 4194308))
              : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
                (t.memoizedProps = e),
                (t.memoizedState = m)),
            (n.props = e),
            (n.state = m),
            (n.context = i),
            (e = f))
          : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), (e = !1)));
    } else {
      ((n = t.stateNode),
        Bi(l, t),
        (i = t.memoizedProps),
        (S = Ya(a, i)),
        (n.props = S),
        (z = t.pendingProps),
        (r = n.context),
        (m = a.contextType),
        (f = le),
        typeof m == "object" && m !== null && (f = Ul(m)),
        (c = a.getDerivedStateFromProps),
        (m = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((i !== z || r !== f) && S0(t, n, e, f)),
        (aa = !1),
        (r = t.memoizedState),
        (n.state = r),
        We(t, e, n, u),
        we());
      var v = t.memoizedState;
      i !== z || r !== v || aa || (l !== null && l.dependencies !== null && Vu(l.dependencies))
        ? (typeof c == "function" && (uc(t, a, c, e), (v = t.memoizedState)),
          (S =
            aa ||
            g0(t, a, S, e, r, v, f) ||
            (l !== null && l.dependencies !== null && Vu(l.dependencies)))
            ? (m ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(e, v, f),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(e, v, f)),
              typeof n.componentDidUpdate == "function" && (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (i === l.memoizedProps && r === l.memoizedState) ||
                (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (i === l.memoizedProps && r === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = e),
              (t.memoizedState = v)),
          (n.props = e),
          (n.state = v),
          (n.context = f),
          (e = S))
        : (typeof n.componentDidUpdate != "function" ||
            (i === l.memoizedProps && r === l.memoizedState) ||
            (t.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (i === l.memoizedProps && r === l.memoizedState) ||
            (t.flags |= 1024),
          (e = !1));
    }
    return (
      (n = e),
      sn(l, t),
      (e = (t.flags & 128) !== 0),
      n || e
        ? ((n = t.stateNode),
          (a = e && typeof a.getDerivedStateFromError != "function" ? null : n.render()),
          (t.flags |= 1),
          l !== null && e
            ? ((t.child = Ba(t, l.child, null, u)), (t.child = Ba(t, null, a, u)))
            : Nl(l, t, a, u),
          (t.memoizedState = n.state),
          (l = t.child))
        : (l = Gt(l, t, u)),
      l
    );
  }
  function C0(l, t, a, e) {
    return (Ua(), (t.flags |= 256), Nl(l, t, a, e), t.child);
  }
  var sc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function oc(l) {
    return { baseLanes: l, cachePool: Ts() };
  }
  function dc(l, t, a) {
    return ((l = l !== null ? l.childLanes & ~a : 0), t && (l |= ut), l);
  }
  function q0(l, t, a) {
    var e = t.pendingProps,
      u = !1,
      n = (t.flags & 128) !== 0,
      i;
    if (
      ((i = n) || (i = l !== null && l.memoizedState === null ? !1 : (Sl.current & 2) !== 0),
      i && ((u = !0), (t.flags &= -129)),
      (i = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if ($) {
        if (
          (u ? na(t) : ia(),
          (l = ol)
            ? ((l = Vo(l, yt)),
              (l = l !== null && l.data !== "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: It !== null ? { id: At, overflow: _t } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = ys(l)),
                (a.return = t),
                (t.child = a),
                (Dl = t),
                (ol = null)))
            : (l = null),
          l === null)
        )
          throw la(t);
        return (wc(l) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var c = e.children;
      return (
        (e = e.fallback),
        u
          ? (ia(),
            (u = t.mode),
            (c = on({ mode: "hidden", children: c }, u)),
            (e = Da(e, u, a, null)),
            (c.return = t),
            (e.return = t),
            (c.sibling = e),
            (t.child = c),
            (e = t.child),
            (e.memoizedState = oc(a)),
            (e.childLanes = dc(l, i, a)),
            (t.memoizedState = sc),
            Pe(null, e))
          : (na(t), hc(t, c))
      );
    }
    var f = l.memoizedState;
    if (f !== null && ((c = f.dehydrated), c !== null)) {
      if (n)
        t.flags & 256
          ? (na(t), (t.flags &= -257), (t = yc(l, t, a)))
          : t.memoizedState !== null
            ? (ia(), (t.child = l.child), (t.flags |= 128), (t = null))
            : (ia(),
              (c = e.fallback),
              (u = t.mode),
              (e = on({ mode: "visible", children: e.children }, u)),
              (c = Da(c, u, a, null)),
              (c.flags |= 2),
              (e.return = t),
              (c.return = t),
              (e.sibling = c),
              (t.child = e),
              Ba(t, l.child, null, a),
              (e = t.child),
              (e.memoizedState = oc(a)),
              (e.childLanes = dc(l, i, a)),
              (t.memoizedState = sc),
              (t = Pe(null, e)));
      else if ((na(t), wc(c))) {
        if (((i = c.nextSibling && c.nextSibling.dataset), i)) var m = i.dgst;
        ((i = m),
          (e = Error(h(419))),
          (e.stack = ""),
          (e.digest = i),
          Xe({ value: e, source: null, stack: null }),
          (t = yc(l, t, a)));
      } else if ((Tl || ue(l, t, a, !1), (i = (a & l.childLanes) !== 0), Tl || i)) {
        if (((i = sl), i !== null && ((e = pf(i, a)), e !== 0 && e !== f.retryLane)))
          throw ((f.retryLane = e), Oa(l, e), wl(i, l, e), cc);
        (Jc(c) || bn(), (t = yc(l, t, a)));
      } else
        Jc(c)
          ? ((t.flags |= 192), (t.child = l.child), (t = null))
          : ((l = f.treeContext),
            (ol = rt(c.nextSibling)),
            (Dl = t),
            ($ = !0),
            (Pt = null),
            (yt = !1),
            l !== null && vs(t, l),
            (t = hc(t, e.children)),
            (t.flags |= 4096));
      return t;
    }
    return u
      ? (ia(),
        (c = e.fallback),
        (u = t.mode),
        (f = l.child),
        (m = f.sibling),
        (e = Ct(f, { mode: "hidden", children: e.children })),
        (e.subtreeFlags = f.subtreeFlags & 65011712),
        m !== null ? (c = Ct(m, c)) : ((c = Da(c, u, a, null)), (c.flags |= 2)),
        (c.return = t),
        (e.return = t),
        (e.sibling = c),
        (t.child = e),
        Pe(null, e),
        (e = t.child),
        (c = l.child.memoizedState),
        c === null
          ? (c = oc(a))
          : ((u = c.cachePool),
            u !== null
              ? ((f = pl._currentValue), (u = u.parent !== f ? { parent: f, pool: f } : u))
              : (u = Ts()),
            (c = { baseLanes: c.baseLanes | a, cachePool: u })),
        (e.memoizedState = c),
        (e.childLanes = dc(l, i, a)),
        (t.memoizedState = sc),
        Pe(l.child, e))
      : (na(t),
        (a = l.child),
        (l = a.sibling),
        (a = Ct(a, { mode: "visible", children: e.children })),
        (a.return = t),
        (a.sibling = null),
        l !== null &&
          ((i = t.deletions), i === null ? ((t.deletions = [l]), (t.flags |= 16)) : i.push(l)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function hc(l, t) {
    return ((t = on({ mode: "visible", children: t }, l.mode)), (t.return = l), (l.child = t));
  }
  function on(l, t) {
    return ((l = lt(22, l, null, t)), (l.lanes = 0), l);
  }
  function yc(l, t, a) {
    return (
      Ba(t, l.child, null, a),
      (l = hc(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function B0(l, t, a) {
    l.lanes |= t;
    var e = l.alternate;
    (e !== null && (e.lanes |= t), Di(l.return, t, a));
  }
  function mc(l, t, a, e, u, n) {
    var i = l.memoizedState;
    i === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: e,
          tail: a,
          tailMode: u,
          treeForkCount: n,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = e),
        (i.tail = a),
        (i.tailMode = u),
        (i.treeForkCount = n));
  }
  function x0(l, t, a) {
    var e = t.pendingProps,
      u = e.revealOrder,
      n = e.tail;
    e = e.children;
    var i = Sl.current,
      c = (i & 2) !== 0;
    if (
      (c ? ((i = (i & 1) | 2), (t.flags |= 128)) : (i &= 1),
      _(Sl, i),
      Nl(l, t, e, a),
      (e = $ ? Qe : 0),
      !c && l !== null && (l.flags & 128) !== 0)
    )
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13) l.memoizedState !== null && B0(l, a, t);
        else if (l.tag === 19) B0(l, a, t);
        else if (l.child !== null) {
          ((l.child.return = l), (l = l.child));
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) break l;
          l = l.return;
        }
        ((l.sibling.return = l.return), (l = l.sibling));
      }
    switch (u) {
      case "forwards":
        for (a = t.child, u = null; a !== null; )
          ((l = a.alternate), l !== null && Fu(l) === null && (u = a), (a = a.sibling));
        ((a = u),
          a === null ? ((u = t.child), (t.child = null)) : ((u = a.sibling), (a.sibling = null)),
          mc(t, !1, u, a, n, e));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, u = t.child, t.child = null; u !== null; ) {
          if (((l = u.alternate), l !== null && Fu(l) === null)) {
            t.child = u;
            break;
          }
          ((l = u.sibling), (u.sibling = a), (a = u), (u = l));
        }
        mc(t, !0, a, null, n, e);
        break;
      case "together":
        mc(t, !1, null, null, void 0, e);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Gt(l, t, a) {
    if (
      (l !== null && (t.dependencies = l.dependencies), (sa |= t.lanes), (a & t.childLanes) === 0)
    )
      if (l !== null) {
        if ((ue(l, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(h(153));
    if (t.child !== null) {
      for (l = t.child, a = Ct(l, l.pendingProps), t.child = a, a.return = t; l.sibling !== null; )
        ((l = l.sibling), (a = a.sibling = Ct(l, l.pendingProps)), (a.return = t));
      a.sibling = null;
    }
    return t.child;
  }
  function rc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : ((l = l.dependencies), !!(l !== null && Vu(l)));
  }
  function wh(l, t, a) {
    switch (t.tag) {
      case 3:
        (Bl(t, t.stateNode.containerInfo), ta(t, pl, l.memoizedState.cache), Ua());
        break;
      case 27:
      case 5:
        _e(t);
        break;
      case 4:
        Bl(t, t.stateNode.containerInfo);
        break;
      case 10:
        ta(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), Qi(t), null);
        break;
      case 13:
        var e = t.memoizedState;
        if (e !== null)
          return e.dehydrated !== null
            ? (na(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
              ? q0(l, t, a)
              : (na(t), (l = Gt(l, t, a)), l !== null ? l.sibling : null);
        na(t);
        break;
      case 19:
        var u = (l.flags & 128) !== 0;
        if (
          ((e = (a & t.childLanes) !== 0),
          e || (ue(l, t, a, !1), (e = (a & t.childLanes) !== 0)),
          u)
        ) {
          if (e) return x0(l, t, a);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null && ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          _(Sl, Sl.current),
          e)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), D0(l, t, a, t.pendingProps));
      case 24:
        ta(t, pl, l.memoizedState.cache);
    }
    return Gt(l, t, a);
  }
  function Y0(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) Tl = !0;
      else {
        if (!rc(l, a) && (t.flags & 128) === 0) return ((Tl = !1), wh(l, t, a));
        Tl = (l.flags & 131072) !== 0;
      }
    else ((Tl = !1), $ && (t.flags & 1048576) !== 0 && rs(t, Qe, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          var e = t.pendingProps;
          if (((l = Ca(t.elementType)), (t.type = l), typeof l == "function"))
            pi(l)
              ? ((e = Ya(l, e)), (t.tag = 1), (t = R0(null, t, l, e, a)))
              : ((t.tag = 0), (t = fc(null, t, l, e, a)));
          else {
            if (l != null) {
              var u = l.$$typeof;
              if (u === it) {
                ((t.tag = 11), (t = _0(null, t, l, e, a)));
                break l;
              } else if (u === W) {
                ((t.tag = 14), (t = M0(null, t, l, e, a)));
                break l;
              }
            }
            throw ((t = Ut(l) || l), Error(h(306, t, "")));
          }
        }
        return t;
      case 0:
        return fc(l, t, t.type, t.pendingProps, a);
      case 1:
        return ((e = t.type), (u = Ya(e, t.pendingProps)), R0(l, t, e, u, a));
      case 3:
        l: {
          if ((Bl(t, t.stateNode.containerInfo), l === null)) throw Error(h(387));
          e = t.pendingProps;
          var n = t.memoizedState;
          ((u = n.element), Bi(l, t), We(t, e, null, a));
          var i = t.memoizedState;
          if (
            ((e = i.cache),
            ta(t, pl, e),
            e !== n.cache && Ui(t, [pl], a, !0),
            we(),
            (e = i.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: e, isDehydrated: !1, cache: i.cache }),
              (t.updateQueue.baseState = n),
              (t.memoizedState = n),
              t.flags & 256)
            ) {
              t = C0(l, t, e, a);
              break l;
            } else if (e !== u) {
              ((u = ot(Error(h(424)), t)), Xe(u), (t = C0(l, t, e, a)));
              break l;
            } else {
              switch (((l = t.stateNode.containerInfo), l.nodeType)) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (
                ol = rt(l.firstChild),
                  Dl = t,
                  $ = !0,
                  Pt = null,
                  yt = !0,
                  a = Ds(t, null, e, a),
                  t.child = a;
                a;
              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
            }
          else {
            if ((Ua(), e === u)) {
              t = Gt(l, t, a);
              break l;
            }
            Nl(l, t, e, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          sn(l, t),
          l === null
            ? (a = $o(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : $ ||
                ((a = t.type),
                (l = t.pendingProps),
                (e = Mn(V.current).createElement(a)),
                (e[Ol] = t),
                (e[Xl] = l),
                Hl(e, a, l),
                _l(e),
                (t.stateNode = e))
            : (t.memoizedState = $o(t.type, l.memoizedProps, t.pendingProps, l.memoizedState)),
          null
        );
      case 27:
        return (
          _e(t),
          l === null &&
            $ &&
            ((e = t.stateNode = Jo(t.type, t.pendingProps, V.current)),
            (Dl = t),
            (yt = !0),
            (u = ol),
            ma(t.type) ? ((Wc = u), (ol = rt(e.firstChild))) : (ol = u)),
          Nl(l, t, t.pendingProps.children, a),
          sn(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            $ &&
            ((u = e = ol) &&
              ((e = Ey(e, t.type, t.pendingProps, yt)),
              e !== null
                ? ((t.stateNode = e), (Dl = t), (ol = rt(e.firstChild)), (yt = !1), (u = !0))
                : (u = !1)),
            u || la(t)),
          _e(t),
          (u = t.type),
          (n = t.pendingProps),
          (i = l !== null ? l.memoizedProps : null),
          (e = n.children),
          Vc(u, n) ? (e = null) : i !== null && Vc(u, i) && (t.flags |= 32),
          t.memoizedState !== null && ((u = Zi(l, t, jh, null, null, a)), (mu._currentValue = u)),
          sn(l, t),
          Nl(l, t, e, a),
          t.child
        );
      case 6:
        return (
          l === null &&
            $ &&
            ((l = a = ol) &&
              ((a = Ay(a, t.pendingProps, yt)),
              a !== null ? ((t.stateNode = a), (Dl = t), (ol = null), (l = !0)) : (l = !1)),
            l || la(t)),
          null
        );
      case 13:
        return q0(l, t, a);
      case 4:
        return (
          Bl(t, t.stateNode.containerInfo),
          (e = t.pendingProps),
          l === null ? (t.child = Ba(t, null, e, a)) : Nl(l, t, e, a),
          t.child
        );
      case 11:
        return _0(l, t, t.type, t.pendingProps, a);
      case 7:
        return (Nl(l, t, t.pendingProps, a), t.child);
      case 8:
        return (Nl(l, t, t.pendingProps.children, a), t.child);
      case 12:
        return (Nl(l, t, t.pendingProps.children, a), t.child);
      case 10:
        return ((e = t.pendingProps), ta(t, t.type, e.value), Nl(l, t, e.children, a), t.child);
      case 9:
        return (
          (u = t.type._context),
          (e = t.pendingProps.children),
          Ha(t),
          (u = Ul(u)),
          (e = e(u)),
          (t.flags |= 1),
          Nl(l, t, e, a),
          t.child
        );
      case 14:
        return M0(l, t, t.type, t.pendingProps, a);
      case 15:
        return O0(l, t, t.type, t.pendingProps, a);
      case 19:
        return x0(l, t, a);
      case 31:
        return Jh(l, t, a);
      case 22:
        return D0(l, t, a, t.pendingProps);
      case 24:
        return (
          Ha(t),
          (e = Ul(pl)),
          l === null
            ? ((u = Ri()),
              u === null &&
                ((u = sl),
                (n = Ni()),
                (u.pooledCache = n),
                n.refCount++,
                n !== null && (u.pooledCacheLanes |= a),
                (u = n)),
              (t.memoizedState = { parent: e, cache: u }),
              qi(t),
              ta(t, pl, u))
            : ((l.lanes & a) !== 0 && (Bi(l, t), We(t, null, null, a), we()),
              (u = l.memoizedState),
              (n = t.memoizedState),
              u.parent !== e
                ? ((u = { parent: e, cache: e }),
                  (t.memoizedState = u),
                  t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u),
                  ta(t, pl, e))
                : ((e = n.cache), ta(t, pl, e), e !== u.cache && Ui(t, [pl], a, !0))),
          Nl(l, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(h(156, t.tag));
  }
  function Qt(l) {
    l.flags |= 4;
  }
  function vc(l, t, a, e, u) {
    if (((t = (l.mode & 32) !== 0) && (t = !1), t)) {
      if (((l.flags |= 16777216), (u & 335544128) === u))
        if (l.stateNode.complete) l.flags |= 8192;
        else if (oo()) l.flags |= 8192;
        else throw ((qa = wu), Ci);
    } else l.flags &= -16777217;
  }
  function j0(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) l.flags &= -16777217;
    else if (((l.flags |= 16777216), !ld(t)))
      if (oo()) l.flags |= 8192;
      else throw ((qa = wu), Ci);
  }
  function dn(l, t) {
    (t !== null && (l.flags |= 4),
      l.flags & 16384 && ((t = l.tag !== 22 ? gf() : 536870912), (l.lanes |= t), (ve |= t)));
  }
  function lu(l, t) {
    if (!$)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null; ) (t.alternate !== null && (a = t), (t = t.sibling));
          a === null ? (l.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = l.tail;
          for (var e = null; a !== null; ) (a.alternate !== null && (e = a), (a = a.sibling));
          e === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (e.sibling = null);
      }
  }
  function dl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      a = 0,
      e = 0;
    if (t)
      for (var u = l.child; u !== null; )
        ((a |= u.lanes | u.childLanes),
          (e |= u.subtreeFlags & 65011712),
          (e |= u.flags & 65011712),
          (u.return = l),
          (u = u.sibling));
    else
      for (u = l.child; u !== null; )
        ((a |= u.lanes | u.childLanes),
          (e |= u.subtreeFlags),
          (e |= u.flags),
          (u.return = l),
          (u = u.sibling));
    return ((l.subtreeFlags |= e), (l.childLanes = a), t);
  }
  function Wh(l, t, a) {
    var e = t.pendingProps;
    switch ((Ai(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (dl(t), null);
      case 1:
        return (dl(t), null);
      case 3:
        return (
          (a = t.stateNode),
          (e = null),
          l !== null && (e = l.memoizedState.cache),
          t.memoizedState.cache !== e && (t.flags |= 2048),
          xt(pl),
          gl(),
          a.pendingContext && ((a.context = a.pendingContext), (a.pendingContext = null)),
          (l === null || l.child === null) &&
            (ee(t)
              ? Qt(t)
              : l === null ||
                (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Mi())),
          dl(t),
          null
        );
      case 26:
        var u = t.type,
          n = t.memoizedState;
        return (
          l === null
            ? (Qt(t), n !== null ? (dl(t), j0(t, n)) : (dl(t), vc(t, u, null, e, a)))
            : n
              ? n !== l.memoizedState
                ? (Qt(t), dl(t), j0(t, n))
                : (dl(t), (t.flags &= -16777217))
              : ((l = l.memoizedProps), l !== e && Qt(t), dl(t), vc(t, u, l, e, a)),
          null
        );
      case 27:
        if ((zu(t), (a = V.current), (u = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== e && Qt(t);
        else {
          if (!e) {
            if (t.stateNode === null) throw Error(h(166));
            return (dl(t), null);
          }
          ((l = O.current), ee(t) ? gs(t) : ((l = Jo(u, e, a)), (t.stateNode = l), Qt(t)));
        }
        return (dl(t), null);
      case 5:
        if ((zu(t), (u = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== e && Qt(t);
        else {
          if (!e) {
            if (t.stateNode === null) throw Error(h(166));
            return (dl(t), null);
          }
          if (((n = O.current), ee(t))) gs(t);
          else {
            var i = Mn(V.current);
            switch (n) {
              case 1:
                n = i.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                n = i.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    n = i.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    n = i.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                    break;
                  case "script":
                    ((n = i.createElement("div")),
                      (n.innerHTML = "<script><\/script>"),
                      (n = n.removeChild(n.firstChild)));
                    break;
                  case "select":
                    ((n =
                      typeof e.is == "string"
                        ? i.createElement("select", { is: e.is })
                        : i.createElement("select")),
                      e.multiple ? (n.multiple = !0) : e.size && (n.size = e.size));
                    break;
                  default:
                    n =
                      typeof e.is == "string"
                        ? i.createElement(u, { is: e.is })
                        : i.createElement(u);
                }
            }
            ((n[Ol] = t), (n[Xl] = e));
            l: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) n.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                ((i.child.return = i), (i = i.child));
                continue;
              }
              if (i === t) break l;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t) break l;
                i = i.return;
              }
              ((i.sibling.return = i.return), (i = i.sibling));
            }
            t.stateNode = n;
            l: switch ((Hl(n, u, e), u)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!e.autoFocus;
                break l;
              case "img":
                e = !0;
                break l;
              default:
                e = !1;
            }
            e && Qt(t);
          }
        }
        return (dl(t), vc(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, a), null);
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== e && Qt(t);
        else {
          if (typeof e != "string" && t.stateNode === null) throw Error(h(166));
          if (((l = V.current), ee(t))) {
            if (((l = t.stateNode), (a = t.memoizedProps), (e = null), (u = Dl), u !== null))
              switch (u.tag) {
                case 27:
                case 5:
                  e = u.memoizedProps;
              }
            ((l[Ol] = t),
              (l = !!(
                l.nodeValue === a ||
                (e !== null && e.suppressHydrationWarning === !0) ||
                Bo(l.nodeValue, a)
              )),
              l || la(t, !0));
          } else ((l = Mn(l).createTextNode(e)), (l[Ol] = t), (t.stateNode = l));
        }
        return (dl(t), null);
      case 31:
        if (((a = t.memoizedState), l === null || l.memoizedState !== null)) {
          if (((e = ee(t)), a !== null)) {
            if (l === null) {
              if (!e) throw Error(h(318));
              if (((l = t.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
                throw Error(h(557));
              l[Ol] = t;
            } else (Ua(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (dl(t), (l = !1));
          } else
            ((a = Mi()),
              l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = a),
              (l = !0));
          if (!l) return t.flags & 256 ? (at(t), t) : (at(t), null);
          if ((t.flags & 128) !== 0) throw Error(h(558));
        }
        return (dl(t), null);
      case 13:
        if (
          ((e = t.memoizedState),
          l === null || (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((u = ee(t)), e !== null && e.dehydrated !== null)) {
            if (l === null) {
              if (!u) throw Error(h(318));
              if (((u = t.memoizedState), (u = u !== null ? u.dehydrated : null), !u))
                throw Error(h(317));
              u[Ol] = t;
            } else (Ua(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (dl(t), (u = !1));
          } else
            ((u = Mi()),
              l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u),
              (u = !0));
          if (!u) return t.flags & 256 ? (at(t), t) : (at(t), null);
        }
        return (
          at(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = a), t)
            : ((a = e !== null),
              (l = l !== null && l.memoizedState !== null),
              a &&
                ((e = t.child),
                (u = null),
                e.alternate !== null &&
                  e.alternate.memoizedState !== null &&
                  e.alternate.memoizedState.cachePool !== null &&
                  (u = e.alternate.memoizedState.cachePool.pool),
                (n = null),
                e.memoizedState !== null &&
                  e.memoizedState.cachePool !== null &&
                  (n = e.memoizedState.cachePool.pool),
                n !== u && (e.flags |= 2048)),
              a !== l && a && (t.child.flags |= 8192),
              dn(t, t.updateQueue),
              dl(t),
              null)
        );
      case 4:
        return (gl(), l === null && jc(t.stateNode.containerInfo), dl(t), null);
      case 10:
        return (xt(t.type), dl(t), null);
      case 19:
        if ((T(Sl), (e = t.memoizedState), e === null)) return (dl(t), null);
        if (((u = (t.flags & 128) !== 0), (n = e.rendering), n === null))
          if (u) lu(e, !1);
          else {
            if (rl !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null; ) {
                if (((n = Fu(l)), n !== null)) {
                  for (
                    t.flags |= 128,
                      lu(e, !1),
                      l = n.updateQueue,
                      t.updateQueue = l,
                      dn(t, l),
                      t.subtreeFlags = 0,
                      l = a,
                      a = t.child;
                    a !== null;
                  )
                    (hs(a, l), (a = a.sibling));
                  return (_(Sl, (Sl.current & 1) | 2), $ && qt(t, e.treeForkCount), t.child);
                }
                l = l.sibling;
              }
            e.tail !== null &&
              kl() > vn &&
              ((t.flags |= 128), (u = !0), lu(e, !1), (t.lanes = 4194304));
          }
        else {
          if (!u)
            if (((l = Fu(n)), l !== null)) {
              if (
                ((t.flags |= 128),
                (u = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                dn(t, l),
                lu(e, !0),
                e.tail === null && e.tailMode === "hidden" && !n.alternate && !$)
              )
                return (dl(t), null);
            } else
              2 * kl() - e.renderingStartTime > vn &&
                a !== 536870912 &&
                ((t.flags |= 128), (u = !0), lu(e, !1), (t.lanes = 4194304));
          e.isBackwards
            ? ((n.sibling = t.child), (t.child = n))
            : ((l = e.last), l !== null ? (l.sibling = n) : (t.child = n), (e.last = n));
        }
        return e.tail !== null
          ? ((l = e.tail),
            (e.rendering = l),
            (e.tail = l.sibling),
            (e.renderingStartTime = kl()),
            (l.sibling = null),
            (a = Sl.current),
            _(Sl, u ? (a & 1) | 2 : a & 1),
            $ && qt(t, e.treeForkCount),
            l)
          : (dl(t), null);
      case 22:
      case 23:
        return (
          at(t),
          Gi(),
          (e = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== e && (t.flags |= 8192)
            : e && (t.flags |= 8192),
          e
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (dl(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : dl(t),
          (a = t.updateQueue),
          a !== null && dn(t, a.retryQueue),
          (a = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (a = l.memoizedState.cachePool.pool),
          (e = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (e = t.memoizedState.cachePool.pool),
          e !== a && (t.flags |= 2048),
          l !== null && T(Ra),
          null
        );
      case 24:
        return (
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          xt(pl),
          dl(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(h(156, t.tag));
  }
  function $h(l, t) {
    switch ((Ai(t), t.tag)) {
      case 1:
        return ((l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null);
      case 3:
        return (
          xt(pl),
          gl(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return (zu(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((at(t), t.alternate === null)) throw Error(h(340));
          Ua();
        }
        return ((l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null);
      case 13:
        if ((at(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)) {
          if (t.alternate === null) throw Error(h(340));
          Ua();
        }
        return ((l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null);
      case 19:
        return (T(Sl), null);
      case 4:
        return (gl(), null);
      case 10:
        return (xt(t.type), null);
      case 22:
      case 23:
        return (
          at(t),
          Gi(),
          l !== null && T(Ra),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return (xt(pl), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function G0(l, t) {
    switch ((Ai(t), t.tag)) {
      case 3:
        (xt(pl), gl());
        break;
      case 26:
      case 27:
      case 5:
        zu(t);
        break;
      case 4:
        gl();
        break;
      case 31:
        t.memoizedState !== null && at(t);
        break;
      case 13:
        at(t);
        break;
      case 19:
        T(Sl);
        break;
      case 10:
        xt(t.type);
        break;
      case 22:
      case 23:
        (at(t), Gi(), l !== null && T(Ra));
        break;
      case 24:
        xt(pl);
    }
  }
  function tu(l, t) {
    try {
      var a = t.updateQueue,
        e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var u = e.next;
        a = u;
        do {
          if ((a.tag & l) === l) {
            e = void 0;
            var n = a.create,
              i = a.inst;
            ((e = n()), (i.destroy = e));
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (c) {
      al(t, t.return, c);
    }
  }
  function ca(l, t, a) {
    try {
      var e = t.updateQueue,
        u = e !== null ? e.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        e = n;
        do {
          if ((e.tag & l) === l) {
            var i = e.inst,
              c = i.destroy;
            if (c !== void 0) {
              ((i.destroy = void 0), (u = t));
              var f = a,
                m = c;
              try {
                m();
              } catch (S) {
                al(u, f, S);
              }
            }
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (S) {
      al(t, t.return, S);
    }
  }
  function Q0(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        Ns(t, a);
      } catch (e) {
        al(l, l.return, e);
      }
    }
  }
  function X0(l, t, a) {
    ((a.props = Ya(l.type, l.memoizedProps)), (a.state = l.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (e) {
      al(l, t, e);
    }
  }
  function au(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var e = l.stateNode;
            break;
          case 30:
            e = l.stateNode;
            break;
          default:
            e = l.stateNode;
        }
        typeof a == "function" ? (l.refCleanup = a(e)) : (a.current = e);
      }
    } catch (u) {
      al(l, t, u);
    }
  }
  function Mt(l, t) {
    var a = l.ref,
      e = l.refCleanup;
    if (a !== null)
      if (typeof e == "function")
        try {
          e();
        } catch (u) {
          al(l, t, u);
        } finally {
          ((l.refCleanup = null), (l = l.alternate), l != null && (l.refCleanup = null));
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (u) {
          al(l, t, u);
        }
      else a.current = null;
  }
  function Z0(l) {
    var t = l.type,
      a = l.memoizedProps,
      e = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break l;
        case "img":
          a.src ? (e.src = a.src) : a.srcSet && (e.srcset = a.srcSet);
      }
    } catch (u) {
      al(l, l.return, u);
    }
  }
  function gc(l, t, a) {
    try {
      var e = l.stateNode;
      (gy(e, l.type, a, t), (e[Xl] = t));
    } catch (u) {
      al(l, l.return, u);
    }
  }
  function V0(l) {
    return (
      l.tag === 5 || l.tag === 3 || l.tag === 26 || (l.tag === 27 && ma(l.type)) || l.tag === 4
    );
  }
  function Sc(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || V0(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;
      ) {
        if ((l.tag === 27 && ma(l.type)) || l.flags & 2 || l.child === null || l.tag === 4)
          continue l;
        ((l.child.return = l), (l = l.child));
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function bc(l, t, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      ((l = l.stateNode),
        t
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a
            ).insertBefore(l, t)
          : ((t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a),
            t.appendChild(l),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = Ht)));
    else if (
      e !== 4 &&
      (e === 27 && ma(l.type) && ((a = l.stateNode), (t = null)), (l = l.child), l !== null)
    )
      for (bc(l, t, a), l = l.sibling; l !== null; ) (bc(l, t, a), (l = l.sibling));
  }
  function hn(l, t, a) {
    var e = l.tag;
    if (e === 5 || e === 6) ((l = l.stateNode), t ? a.insertBefore(l, t) : a.appendChild(l));
    else if (e !== 4 && (e === 27 && ma(l.type) && (a = l.stateNode), (l = l.child), l !== null))
      for (hn(l, t, a), l = l.sibling; l !== null; ) (hn(l, t, a), (l = l.sibling));
  }
  function L0(l) {
    var t = l.stateNode,
      a = l.memoizedProps;
    try {
      for (var e = l.type, u = t.attributes; u.length; ) t.removeAttributeNode(u[0]);
      (Hl(t, e, a), (t[Ol] = l), (t[Xl] = a));
    } catch (n) {
      al(l, l.return, n);
    }
  }
  var Xt = !1,
    El = !1,
    pc = !1,
    K0 = typeof WeakSet == "function" ? WeakSet : Set,
    Ml = null;
  function kh(l, t) {
    if (((l = l.containerInfo), (Xc = Cn), (l = es(l)), yi(l))) {
      if ("selectionStart" in l) var a = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          a = ((a = l.ownerDocument) && a.defaultView) || window;
          var e = a.getSelection && a.getSelection();
          if (e && e.rangeCount !== 0) {
            a = e.anchorNode;
            var u = e.anchorOffset,
              n = e.focusNode;
            e = e.focusOffset;
            try {
              (a.nodeType, n.nodeType);
            } catch {
              a = null;
              break l;
            }
            var i = 0,
              c = -1,
              f = -1,
              m = 0,
              S = 0,
              z = l,
              r = null;
            t: for (;;) {
              for (
                var v;
                z !== a || (u !== 0 && z.nodeType !== 3) || (c = i + u),
                  z !== n || (e !== 0 && z.nodeType !== 3) || (f = i + e),
                  z.nodeType === 3 && (i += z.nodeValue.length),
                  (v = z.firstChild) !== null;
              )
                ((r = z), (z = v));
              for (;;) {
                if (z === l) break t;
                if (
                  (r === a && ++m === u && (c = i),
                  r === n && ++S === e && (f = i),
                  (v = z.nextSibling) !== null)
                )
                  break;
                ((z = r), (r = z.parentNode));
              }
              z = v;
            }
            a = c === -1 || f === -1 ? null : { start: c, end: f };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Zc = { focusedElem: l, selectionRange: a }, Cn = !1, Ml = t; Ml !== null; )
      if (((t = Ml), (l = t.child), (t.subtreeFlags & 1028) !== 0 && l !== null))
        ((l.return = t), (Ml = l));
      else
        for (; Ml !== null; ) {
          switch (((t = Ml), (n = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              if (
                (l & 4) !== 0 &&
                ((l = t.updateQueue), (l = l !== null ? l.events : null), l !== null)
              )
                for (a = 0; a < l.length; a++) ((u = l[a]), (u.ref.impl = u.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                ((l = void 0),
                  (a = t),
                  (u = n.memoizedProps),
                  (n = n.memoizedState),
                  (e = a.stateNode));
                try {
                  var M = Ya(a.type, u);
                  ((l = e.getSnapshotBeforeUpdate(M, n)),
                    (e.__reactInternalSnapshotBeforeUpdate = l));
                } catch (C) {
                  al(a, a.return, C);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (((l = t.stateNode.containerInfo), (a = l.nodeType), a === 9)) Kc(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Kc(l);
                      break;
                    default:
                      l.textContent = "";
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
              if ((l & 1024) !== 0) throw Error(h(163));
          }
          if (((l = t.sibling), l !== null)) {
            ((l.return = t.return), (Ml = l));
            break;
          }
          Ml = t.return;
        }
  }
  function J0(l, t, a) {
    var e = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (Vt(l, a), e & 4 && tu(5, a));
        break;
      case 1:
        if ((Vt(l, a), e & 4))
          if (((l = a.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (i) {
              al(a, a.return, i);
            }
          else {
            var u = Ya(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(u, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              al(a, a.return, i);
            }
          }
        (e & 64 && Q0(a), e & 512 && au(a, a.return));
        break;
      case 3:
        if ((Vt(l, a), e & 64 && ((l = a.updateQueue), l !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            Ns(l, t);
          } catch (i) {
            al(a, a.return, i);
          }
        }
        break;
      case 27:
        t === null && e & 4 && L0(a);
      case 26:
      case 5:
        (Vt(l, a), t === null && e & 4 && Z0(a), e & 512 && au(a, a.return));
        break;
      case 12:
        Vt(l, a);
        break;
      case 31:
        (Vt(l, a), e & 4 && $0(l, a));
        break;
      case 13:
        (Vt(l, a),
          e & 4 && k0(l, a),
          e & 64 &&
            ((l = a.memoizedState),
            l !== null && ((l = l.dehydrated), l !== null && ((a = ny.bind(null, a)), _y(l, a)))));
        break;
      case 22:
        if (((e = a.memoizedState !== null || Xt), !e)) {
          ((t = (t !== null && t.memoizedState !== null) || El), (u = Xt));
          var n = El;
          ((Xt = e),
            (El = t) && !n ? Lt(l, a, (a.subtreeFlags & 8772) !== 0) : Vt(l, a),
            (Xt = u),
            (El = n));
        }
        break;
      case 30:
        break;
      default:
        Vt(l, a);
    }
  }
  function w0(l) {
    var t = l.alternate;
    (t !== null && ((l.alternate = null), w0(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && kn(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null));
  }
  var yl = null,
    Vl = !1;
  function Zt(l, t, a) {
    for (a = a.child; a !== null; ) (W0(l, t, a), (a = a.sibling));
  }
  function W0(l, t, a) {
    if (Fl && typeof Fl.onCommitFiberUnmount == "function")
      try {
        Fl.onCommitFiberUnmount(Me, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (El || Mt(a, t),
          Zt(l, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        El || Mt(a, t);
        var e = yl,
          u = Vl;
        (ma(a.type) && ((yl = a.stateNode), (Vl = !1)),
          Zt(l, t, a),
          du(a.stateNode),
          (yl = e),
          (Vl = u));
        break;
      case 5:
        El || Mt(a, t);
      case 6:
        if (((e = yl), (u = Vl), (yl = null), Zt(l, t, a), (yl = e), (Vl = u), yl !== null))
          if (Vl)
            try {
              (yl.nodeType === 9
                ? yl.body
                : yl.nodeName === "HTML"
                  ? yl.ownerDocument.body
                  : yl
              ).removeChild(a.stateNode);
            } catch (n) {
              al(a, t, n);
            }
          else
            try {
              yl.removeChild(a.stateNode);
            } catch (n) {
              al(a, t, n);
            }
        break;
      case 18:
        yl !== null &&
          (Vl
            ? ((l = yl),
              Xo(
                l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
                a.stateNode,
              ),
              Ae(l))
            : Xo(yl, a.stateNode));
        break;
      case 4:
        ((e = yl),
          (u = Vl),
          (yl = a.stateNode.containerInfo),
          (Vl = !0),
          Zt(l, t, a),
          (yl = e),
          (Vl = u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (ca(2, a, t), El || ca(4, a, t), Zt(l, t, a));
        break;
      case 1:
        (El ||
          (Mt(a, t), (e = a.stateNode), typeof e.componentWillUnmount == "function" && X0(a, t, e)),
          Zt(l, t, a));
        break;
      case 21:
        Zt(l, t, a);
        break;
      case 22:
        ((El = (e = El) || a.memoizedState !== null), Zt(l, t, a), (El = e));
        break;
      default:
        Zt(l, t, a);
    }
  }
  function $0(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate), l !== null && ((l = l.memoizedState), l !== null))
    ) {
      l = l.dehydrated;
      try {
        Ae(l);
      } catch (a) {
        al(t, t.return, a);
      }
    }
  }
  function k0(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null && ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        Ae(l);
      } catch (a) {
        al(t, t.return, a);
      }
  }
  function Fh(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return (t === null && (t = l.stateNode = new K0()), t);
      case 22:
        return (
          (l = l.stateNode), (t = l._retryCache), t === null && (t = l._retryCache = new K0()), t
        );
      default:
        throw Error(h(435, l.tag));
    }
  }
  function yn(l, t) {
    var a = Fh(l);
    t.forEach(function (e) {
      if (!a.has(e)) {
        a.add(e);
        var u = iy.bind(null, l, e);
        e.then(u, u);
      }
    });
  }
  function Ll(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var e = 0; e < a.length; e++) {
        var u = a[e],
          n = l,
          i = t,
          c = i;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (ma(c.type)) {
                ((yl = c.stateNode), (Vl = !1));
                break l;
              }
              break;
            case 5:
              ((yl = c.stateNode), (Vl = !1));
              break l;
            case 3:
            case 4:
              ((yl = c.stateNode.containerInfo), (Vl = !0));
              break l;
          }
          c = c.return;
        }
        if (yl === null) throw Error(h(160));
        (W0(n, i, u),
          (yl = null),
          (Vl = !1),
          (n = u.alternate),
          n !== null && (n.return = null),
          (u.return = null));
      }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) (F0(t, l), (t = t.sibling));
  }
  var bt = null;
  function F0(l, t) {
    var a = l.alternate,
      e = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Ll(t, l), Kl(l), e & 4 && (ca(3, l, l.return), tu(3, l), ca(5, l, l.return)));
        break;
      case 1:
        (Ll(t, l),
          Kl(l),
          e & 512 && (El || a === null || Mt(a, a.return)),
          e & 64 &&
            Xt &&
            ((l = l.updateQueue),
            l !== null &&
              ((e = l.callbacks),
              e !== null &&
                ((a = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = a === null ? e : a.concat(e))))));
        break;
      case 26:
        var u = bt;
        if ((Ll(t, l), Kl(l), e & 512 && (El || a === null || Mt(a, a.return)), e & 4)) {
          var n = a !== null ? a.memoizedState : null;
          if (((e = l.memoizedState), a === null))
            if (e === null)
              if (l.stateNode === null) {
                l: {
                  ((e = l.type), (a = l.memoizedProps), (u = u.ownerDocument || u));
                  t: switch (e) {
                    case "title":
                      ((n = u.getElementsByTagName("title")[0]),
                        (!n ||
                          n[Ue] ||
                          n[Ol] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = u.createElement(e)),
                          u.head.insertBefore(n, u.querySelector("head > title"))),
                        Hl(n, e, a),
                        (n[Ol] = l),
                        _l(n),
                        (e = n));
                      break l;
                    case "link":
                      var i = Io("link", "href", u).get(e + (a.href || ""));
                      if (i) {
                        for (var c = 0; c < i.length; c++)
                          if (
                            ((n = i[c]),
                            n.getAttribute("href") ===
                              (a.href == null || a.href === "" ? null : a.href) &&
                              n.getAttribute("rel") === (a.rel == null ? null : a.rel) &&
                              n.getAttribute("title") === (a.title == null ? null : a.title) &&
                              n.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      ((n = u.createElement(e)), Hl(n, e, a), u.head.appendChild(n));
                      break;
                    case "meta":
                      if ((i = Io("meta", "content", u).get(e + (a.content || "")))) {
                        for (c = 0; c < i.length; c++)
                          if (
                            ((n = i[c]),
                            n.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              n.getAttribute("name") === (a.name == null ? null : a.name) &&
                              n.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              n.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              n.getAttribute("charset") === (a.charSet == null ? null : a.charSet))
                          ) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      ((n = u.createElement(e)), Hl(n, e, a), u.head.appendChild(n));
                      break;
                    default:
                      throw Error(h(468, e));
                  }
                  ((n[Ol] = l), _l(n), (e = n));
                }
                l.stateNode = e;
              } else Po(u, l.type, l.stateNode);
            else l.stateNode = Fo(u, e, l.memoizedProps);
          else
            n !== e
              ? (n === null
                  ? a.stateNode !== null && ((a = a.stateNode), a.parentNode.removeChild(a))
                  : n.count--,
                e === null ? Po(u, l.type, l.stateNode) : Fo(u, e, l.memoizedProps))
              : e === null && l.stateNode !== null && gc(l, l.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        (Ll(t, l),
          Kl(l),
          e & 512 && (El || a === null || Mt(a, a.return)),
          a !== null && e & 4 && gc(l, l.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if ((Ll(t, l), Kl(l), e & 512 && (El || a === null || Mt(a, a.return)), l.flags & 32)) {
          u = l.stateNode;
          try {
            wa(u, "");
          } catch (M) {
            al(l, l.return, M);
          }
        }
        (e & 4 &&
          l.stateNode != null &&
          ((u = l.memoizedProps), gc(l, u, a !== null ? a.memoizedProps : u)),
          e & 1024 && (pc = !0));
        break;
      case 6:
        if ((Ll(t, l), Kl(l), e & 4)) {
          if (l.stateNode === null) throw Error(h(162));
          ((e = l.memoizedProps), (a = l.stateNode));
          try {
            a.nodeValue = e;
          } catch (M) {
            al(l, l.return, M);
          }
        }
        break;
      case 3:
        if (
          ((Un = null),
          (u = bt),
          (bt = On(t.containerInfo)),
          Ll(t, l),
          (bt = u),
          Kl(l),
          e & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            Ae(t.containerInfo);
          } catch (M) {
            al(l, l.return, M);
          }
        pc && ((pc = !1), I0(l));
        break;
      case 4:
        ((e = bt), (bt = On(l.stateNode.containerInfo)), Ll(t, l), Kl(l), (bt = e));
        break;
      case 12:
        (Ll(t, l), Kl(l));
        break;
      case 31:
        (Ll(t, l),
          Kl(l),
          e & 4 && ((e = l.updateQueue), e !== null && ((l.updateQueue = null), yn(l, e))));
        break;
      case 13:
        (Ll(t, l),
          Kl(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) != (a !== null && a.memoizedState !== null) &&
            (rn = kl()),
          e & 4 && ((e = l.updateQueue), e !== null && ((l.updateQueue = null), yn(l, e))));
        break;
      case 22:
        u = l.memoizedState !== null;
        var f = a !== null && a.memoizedState !== null,
          m = Xt,
          S = El;
        if (((Xt = m || u), (El = S || f), Ll(t, l), (El = S), (Xt = m), Kl(l), e & 8192))
          l: for (
            t = l.stateNode,
              t._visibility = u ? t._visibility & -2 : t._visibility | 1,
              u && (a === null || f || Xt || El || ja(l)),
              a = null,
              t = l;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                f = a = t;
                try {
                  if (((n = f.stateNode), u))
                    ((i = n.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"));
                  else {
                    c = f.stateNode;
                    var z = f.memoizedProps.style,
                      r = z != null && z.hasOwnProperty("display") ? z.display : null;
                    c.style.display = r == null || typeof r == "boolean" ? "" : ("" + r).trim();
                  }
                } catch (M) {
                  al(f, f.return, M);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                f = t;
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (M) {
                  al(f, f.return, M);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                f = t;
                try {
                  var v = f.stateNode;
                  u ? Zo(v, !0) : Zo(f.stateNode, !1);
                } catch (M) {
                  al(f, f.return, M);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) || t.memoizedState === null || t === l) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              (a === t && (a = null), (t = t.return));
            }
            (a === t && (a = null), (t.sibling.return = t.return), (t = t.sibling));
          }
        e & 4 &&
          ((e = l.updateQueue),
          e !== null && ((a = e.retryQueue), a !== null && ((e.retryQueue = null), yn(l, a))));
        break;
      case 19:
        (Ll(t, l),
          Kl(l),
          e & 4 && ((e = l.updateQueue), e !== null && ((l.updateQueue = null), yn(l, e))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Ll(t, l), Kl(l));
    }
  }
  function Kl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, e = l.return; e !== null; ) {
          if (V0(e)) {
            a = e;
            break;
          }
          e = e.return;
        }
        if (a == null) throw Error(h(160));
        switch (a.tag) {
          case 27:
            var u = a.stateNode,
              n = Sc(l);
            hn(l, n, u);
            break;
          case 5:
            var i = a.stateNode;
            a.flags & 32 && (wa(i, ""), (a.flags &= -33));
            var c = Sc(l);
            hn(l, c, i);
            break;
          case 3:
          case 4:
            var f = a.stateNode.containerInfo,
              m = Sc(l);
            bc(l, m, f);
            break;
          default:
            throw Error(h(161));
        }
      } catch (S) {
        al(l, l.return, S);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function I0(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        (I0(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (l = l.sibling));
      }
  }
  function Vt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (J0(l, t.alternate, t), (t = t.sibling));
  }
  function ja(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (ca(4, t, t.return), ja(t));
          break;
        case 1:
          Mt(t, t.return);
          var a = t.stateNode;
          (typeof a.componentWillUnmount == "function" && X0(t, t.return, a), ja(t));
          break;
        case 27:
          du(t.stateNode);
        case 26:
        case 5:
          (Mt(t, t.return), ja(t));
          break;
        case 22:
          t.memoizedState === null && ja(t);
          break;
        case 30:
          ja(t);
          break;
        default:
          ja(t);
      }
      l = l.sibling;
    }
  }
  function Lt(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var e = t.alternate,
        u = l,
        n = t,
        i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (Lt(u, n, a), tu(4, n));
          break;
        case 1:
          if ((Lt(u, n, a), (e = n), (u = e.stateNode), typeof u.componentDidMount == "function"))
            try {
              u.componentDidMount();
            } catch (m) {
              al(e, e.return, m);
            }
          if (((e = n), (u = e.updateQueue), u !== null)) {
            var c = e.stateNode;
            try {
              var f = u.shared.hiddenCallbacks;
              if (f !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < f.length; u++) Us(f[u], c);
            } catch (m) {
              al(e, e.return, m);
            }
          }
          (a && i & 64 && Q0(n), au(n, n.return));
          break;
        case 27:
          L0(n);
        case 26:
        case 5:
          (Lt(u, n, a), a && e === null && i & 4 && Z0(n), au(n, n.return));
          break;
        case 12:
          Lt(u, n, a);
          break;
        case 31:
          (Lt(u, n, a), a && i & 4 && $0(u, n));
          break;
        case 13:
          (Lt(u, n, a), a && i & 4 && k0(u, n));
          break;
        case 22:
          (n.memoizedState === null && Lt(u, n, a), au(n, n.return));
          break;
        case 30:
          break;
        default:
          Lt(u, n, a);
      }
      t = t.sibling;
    }
  }
  function zc(l, t) {
    var a = null;
    (l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (a = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== a && (l != null && l.refCount++, a != null && Ze(a)));
  }
  function Tc(l, t) {
    ((l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && Ze(l)));
  }
  function pt(l, t, a, e) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (P0(l, t, a, e), (t = t.sibling));
  }
  function P0(l, t, a, e) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (pt(l, t, a, e), u & 2048 && tu(9, t));
        break;
      case 1:
        pt(l, t, a, e);
        break;
      case 3:
        (pt(l, t, a, e),
          u & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && Ze(l))));
        break;
      case 12:
        if (u & 2048) {
          (pt(l, t, a, e), (l = t.stateNode));
          try {
            var n = t.memoizedProps,
              i = n.id,
              c = n.onPostCommit;
            typeof c == "function" &&
              c(i, t.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0);
          } catch (f) {
            al(t, t.return, f);
          }
        } else pt(l, t, a, e);
        break;
      case 31:
        pt(l, t, a, e);
        break;
      case 13:
        pt(l, t, a, e);
        break;
      case 23:
        break;
      case 22:
        ((n = t.stateNode),
          (i = t.alternate),
          t.memoizedState !== null
            ? n._visibility & 2
              ? pt(l, t, a, e)
              : eu(l, t)
            : n._visibility & 2
              ? pt(l, t, a, e)
              : ((n._visibility |= 2), ye(l, t, a, e, (t.subtreeFlags & 10256) !== 0 || !1)),
          u & 2048 && zc(i, t));
        break;
      case 24:
        (pt(l, t, a, e), u & 2048 && Tc(t.alternate, t));
        break;
      default:
        pt(l, t, a, e);
    }
  }
  function ye(l, t, a, e, u) {
    for (u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var n = l,
        i = t,
        c = a,
        f = e,
        m = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (ye(n, i, c, f, u), tu(8, i));
          break;
        case 23:
          break;
        case 22:
          var S = i.stateNode;
          (i.memoizedState !== null
            ? S._visibility & 2
              ? ye(n, i, c, f, u)
              : eu(n, i)
            : ((S._visibility |= 2), ye(n, i, c, f, u)),
            u && m & 2048 && zc(i.alternate, i));
          break;
        case 24:
          (ye(n, i, c, f, u), u && m & 2048 && Tc(i.alternate, i));
          break;
        default:
          ye(n, i, c, f, u);
      }
      t = t.sibling;
    }
  }
  function eu(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = l,
          e = t,
          u = e.flags;
        switch (e.tag) {
          case 22:
            (eu(a, e), u & 2048 && zc(e.alternate, e));
            break;
          case 24:
            (eu(a, e), u & 2048 && Tc(e.alternate, e));
            break;
          default:
            eu(a, e);
        }
        t = t.sibling;
      }
  }
  var uu = 8192;
  function me(l, t, a) {
    if (l.subtreeFlags & uu) for (l = l.child; l !== null; ) (lo(l, t, a), (l = l.sibling));
  }
  function lo(l, t, a) {
    switch (l.tag) {
      case 26:
        (me(l, t, a),
          l.flags & uu && l.memoizedState !== null && Yy(a, bt, l.memoizedState, l.memoizedProps));
        break;
      case 5:
        me(l, t, a);
        break;
      case 3:
      case 4:
        var e = bt;
        ((bt = On(l.stateNode.containerInfo)), me(l, t, a), (bt = e));
        break;
      case 22:
        l.memoizedState === null &&
          ((e = l.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = uu), (uu = 16777216), me(l, t, a), (uu = e))
            : me(l, t, a));
        break;
      default:
        me(l, t, a);
    }
  }
  function to(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do ((t = l.sibling), (l.sibling = null), (l = t));
      while (l !== null);
    }
  }
  function nu(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var e = t[a];
          ((Ml = e), eo(e, l));
        }
      to(l);
    }
    if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) (ao(l), (l = l.sibling));
  }
  function ao(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (nu(l), l.flags & 2048 && ca(9, l, l.return));
        break;
      case 3:
        nu(l);
        break;
      case 12:
        nu(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -3), mn(l))
          : nu(l);
        break;
      default:
        nu(l);
    }
  }
  function mn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var e = t[a];
          ((Ml = e), eo(e, l));
        }
      to(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          (ca(8, t, t.return), mn(t));
          break;
        case 22:
          ((a = t.stateNode), a._visibility & 2 && ((a._visibility &= -3), mn(t)));
          break;
        default:
          mn(t);
      }
      l = l.sibling;
    }
  }
  function eo(l, t) {
    for (; Ml !== null; ) {
      var a = Ml;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ca(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var e = a.memoizedState.cachePool.pool;
            e != null && e.refCount++;
          }
          break;
        case 24:
          Ze(a.memoizedState.cache);
      }
      if (((e = a.child), e !== null)) ((e.return = a), (Ml = e));
      else
        l: for (a = l; Ml !== null; ) {
          e = Ml;
          var u = e.sibling,
            n = e.return;
          if ((w0(e), e === a)) {
            Ml = null;
            break l;
          }
          if (u !== null) {
            ((u.return = n), (Ml = u));
            break l;
          }
          Ml = n;
        }
    }
  }
  var Ih = {
      getCacheForType: function (l) {
        var t = Ul(pl),
          a = t.data.get(l);
        return (a === void 0 && ((a = l()), t.data.set(l, a)), a);
      },
      cacheSignal: function () {
        return Ul(pl).controller.signal;
      },
    },
    Ph = typeof WeakMap == "function" ? WeakMap : Map,
    I = 0,
    sl = null,
    L = null,
    J = 0,
    tl = 0,
    et = null,
    fa = !1,
    re = !1,
    Ec = !1,
    Kt = 0,
    rl = 0,
    sa = 0,
    Ga = 0,
    Ac = 0,
    ut = 0,
    ve = 0,
    iu = null,
    Jl = null,
    _c = !1,
    rn = 0,
    uo = 0,
    vn = 1 / 0,
    gn = null,
    oa = null,
    Al = 0,
    da = null,
    ge = null,
    Jt = 0,
    Mc = 0,
    Oc = null,
    no = null,
    cu = 0,
    Dc = null;
  function nt() {
    return (I & 2) !== 0 && J !== 0 ? J & -J : b.T !== null ? qc() : zf();
  }
  function io() {
    if (ut === 0)
      if ((J & 536870912) === 0 || $) {
        var l = Au;
        ((Au <<= 1), (Au & 3932160) === 0 && (Au = 262144), (ut = l));
      } else ut = 536870912;
    return ((l = tt.current), l !== null && (l.flags |= 32), ut);
  }
  function wl(l, t, a) {
    (((l === sl && (tl === 2 || tl === 9)) || l.cancelPendingCommit !== null) &&
      (Se(l, 0), ha(l, J, ut, !1)),
      De(l, a),
      ((I & 2) === 0 || l !== sl) &&
        (l === sl && ((I & 2) === 0 && (Ga |= a), rl === 4 && ha(l, J, ut, !1)), Ot(l)));
  }
  function co(l, t, a) {
    if ((I & 6) !== 0) throw Error(h(327));
    var e = (!a && (t & 127) === 0 && (t & l.expiredLanes) === 0) || Oe(l, t),
      u = e ? ay(l, t) : Nc(l, t, !0),
      n = e;
    do {
      if (u === 0) {
        re && !e && ha(l, t, 0, !1);
        break;
      } else {
        if (((a = l.current.alternate), n && !ly(a))) {
          ((u = Nc(l, t, !1)), (n = !1));
          continue;
        }
        if (u === 2) {
          if (((n = t), l.errorRecoveryDisabledLanes & n)) var i = 0;
          else
            ((i = l.pendingLanes & -536870913), (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
          if (i !== 0) {
            t = i;
            l: {
              var c = l;
              u = iu;
              var f = c.current.memoizedState.isDehydrated;
              if ((f && (Se(c, i).flags |= 256), (i = Nc(c, i, !1)), i !== 2)) {
                if (Ec && !f) {
                  ((c.errorRecoveryDisabledLanes |= n), (Ga |= n), (u = 4));
                  break l;
                }
                ((n = Jl), (Jl = u), n !== null && (Jl === null ? (Jl = n) : Jl.push.apply(Jl, n)));
              }
              u = i;
            }
            if (((n = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          (Se(l, 0), ha(l, t, 0, !0));
          break;
        }
        l: {
          switch (((e = l), (n = u), n)) {
            case 0:
            case 1:
              throw Error(h(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ha(e, t, ut, !fa);
              break l;
            case 2:
              Jl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(h(329));
          }
          if ((t & 62914560) === t && ((u = rn + 300 - kl()), 10 < u)) {
            if ((ha(e, t, ut, !fa), Mu(e, 0, !0) !== 0)) break l;
            ((Jt = t),
              (e.timeoutHandle = Go(
                fo.bind(null, e, a, Jl, gn, _c, t, ut, Ga, ve, fa, n, "Throttled", -0, 0),
                u,
              )));
            break l;
          }
          fo(e, a, Jl, gn, _c, t, ut, Ga, ve, fa, n, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Ot(l);
  }
  function fo(l, t, a, e, u, n, i, c, f, m, S, z, r, v) {
    if (((l.timeoutHandle = -1), (z = t.subtreeFlags), z & 8192 || (z & 16785408) === 16785408)) {
      ((z = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ht,
      }),
        lo(t, n, z));
      var M = (n & 62914560) === n ? rn - kl() : (n & 4194048) === n ? uo - kl() : 0;
      if (((M = jy(z, M)), M !== null)) {
        ((Jt = n),
          (l.cancelPendingCommit = M(go.bind(null, l, t, n, a, e, u, i, c, f, S, z, null, r, v))),
          ha(l, n, i, !m));
        return;
      }
    }
    go(l, t, n, a, e, u, i, c, f);
  }
  function ly(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var e = 0; e < a.length; e++) {
          var u = a[e],
            n = u.getSnapshot;
          u = u.value;
          try {
            if (!Pl(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null)) ((a.return = t), (t = a));
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function ha(l, t, a, e) {
    ((t &= ~Ac),
      (t &= ~Ga),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      e && (l.warmLanes |= t),
      (e = l.expirationTimes));
    for (var u = t; 0 < u; ) {
      var n = 31 - Il(u),
        i = 1 << n;
      ((e[n] = -1), (u &= ~i));
    }
    a !== 0 && Sf(l, a, t);
  }
  function Sn() {
    return (I & 6) === 0 ? (fu(0), !1) : !0;
  }
  function Uc() {
    if (L !== null) {
      if (tl === 0) var l = L.return;
      else ((l = L), (Bt = Na = null), Ki(l), (fe = null), (Le = 0), (l = L));
      for (; l !== null; ) (G0(l.alternate, l), (l = l.return));
      L = null;
    }
  }
  function Se(l, t) {
    var a = l.timeoutHandle;
    (a !== -1 && ((l.timeoutHandle = -1), py(a)),
      (a = l.cancelPendingCommit),
      a !== null && ((l.cancelPendingCommit = null), a()),
      (Jt = 0),
      Uc(),
      (sl = l),
      (L = a = Ct(l.current, null)),
      (J = t),
      (tl = 0),
      (et = null),
      (fa = !1),
      (re = Oe(l, t)),
      (Ec = !1),
      (ve = ut = Ac = Ga = sa = rl = 0),
      (Jl = iu = null),
      (_c = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var e = l.entangledLanes;
    if (e !== 0)
      for (l = l.entanglements, e &= t; 0 < e; ) {
        var u = 31 - Il(e),
          n = 1 << u;
        ((t |= l[u]), (e &= ~n));
      }
    return ((Kt = t), ju(), a);
  }
  function so(l, t) {
    ((G = null),
      (b.H = Ie),
      t === ce || t === Ju
        ? ((t = _s()), (tl = 3))
        : t === Ci
          ? ((t = _s()), (tl = 4))
          : (tl =
              t === cc
                ? 8
                : t !== null && typeof t == "object" && typeof t.then == "function"
                  ? 6
                  : 1),
      (et = t),
      L === null && ((rl = 1), cn(l, ot(t, l.current))));
  }
  function oo() {
    var l = tt.current;
    return l === null
      ? !0
      : (J & 4194048) === J
        ? mt === null
        : (J & 62914560) === J || (J & 536870912) !== 0
          ? l === mt
          : !1;
  }
  function ho() {
    var l = b.H;
    return ((b.H = Ie), l === null ? Ie : l);
  }
  function yo() {
    var l = b.A;
    return ((b.A = Ih), l);
  }
  function bn() {
    ((rl = 4),
      fa || ((J & 4194048) !== J && tt.current !== null) || (re = !0),
      ((sa & 134217727) === 0 && (Ga & 134217727) === 0) || sl === null || ha(sl, J, ut, !1));
  }
  function Nc(l, t, a) {
    var e = I;
    I |= 2;
    var u = ho(),
      n = yo();
    ((sl !== l || J !== t) && ((gn = null), Se(l, t)), (t = !1));
    var i = rl;
    l: do
      try {
        if (tl !== 0 && L !== null) {
          var c = L,
            f = et;
          switch (tl) {
            case 8:
              (Uc(), (i = 6));
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              tt.current === null && (t = !0);
              var m = tl;
              if (((tl = 0), (et = null), be(l, c, f, m), a && re)) {
                i = 0;
                break l;
              }
              break;
            default:
              ((m = tl), (tl = 0), (et = null), be(l, c, f, m));
          }
        }
        (ty(), (i = rl));
        break;
      } catch (S) {
        so(l, S);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (Bt = Na = null),
      (I = e),
      (b.H = u),
      (b.A = n),
      L === null && ((sl = null), (J = 0), ju()),
      i
    );
  }
  function ty() {
    for (; L !== null; ) mo(L);
  }
  function ay(l, t) {
    var a = I;
    I |= 2;
    var e = ho(),
      u = yo();
    sl !== l || J !== t ? ((gn = null), (vn = kl() + 500), Se(l, t)) : (re = Oe(l, t));
    l: do
      try {
        if (tl !== 0 && L !== null) {
          t = L;
          var n = et;
          t: switch (tl) {
            case 1:
              ((tl = 0), (et = null), be(l, t, n, 1));
              break;
            case 2:
            case 9:
              if (Es(n)) {
                ((tl = 0), (et = null), ro(t));
                break;
              }
              ((t = function () {
                ((tl !== 2 && tl !== 9) || sl !== l || (tl = 7), Ot(l));
              }),
                n.then(t, t));
              break l;
            case 3:
              tl = 7;
              break l;
            case 4:
              tl = 5;
              break l;
            case 7:
              Es(n) ? ((tl = 0), (et = null), ro(t)) : ((tl = 0), (et = null), be(l, t, n, 7));
              break;
            case 5:
              var i = null;
              switch (L.tag) {
                case 26:
                  i = L.memoizedState;
                case 5:
                case 27:
                  var c = L;
                  if (i ? ld(i) : c.stateNode.complete) {
                    ((tl = 0), (et = null));
                    var f = c.sibling;
                    if (f !== null) L = f;
                    else {
                      var m = c.return;
                      m !== null ? ((L = m), pn(m)) : (L = null);
                    }
                    break t;
                  }
              }
              ((tl = 0), (et = null), be(l, t, n, 5));
              break;
            case 6:
              ((tl = 0), (et = null), be(l, t, n, 6));
              break;
            case 8:
              (Uc(), (rl = 6));
              break l;
            default:
              throw Error(h(462));
          }
        }
        ey();
        break;
      } catch (S) {
        so(l, S);
      }
    while (!0);
    return (
      (Bt = Na = null),
      (b.H = e),
      (b.A = u),
      (I = a),
      L !== null ? 0 : ((sl = null), (J = 0), ju(), rl)
    );
  }
  function ey() {
    for (; L !== null && !Md(); ) mo(L);
  }
  function mo(l) {
    var t = Y0(l.alternate, l, Kt);
    ((l.memoizedProps = l.pendingProps), t === null ? pn(l) : (L = t));
  }
  function ro(l) {
    var t = l,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = H0(a, t, t.pendingProps, t.type, void 0, J);
        break;
      case 11:
        t = H0(a, t, t.pendingProps, t.type.render, t.ref, J);
        break;
      case 5:
        Ki(t);
      default:
        (G0(a, t), (t = L = hs(t, Kt)), (t = Y0(a, t, Kt)));
    }
    ((l.memoizedProps = l.pendingProps), t === null ? pn(l) : (L = t));
  }
  function be(l, t, a, e) {
    ((Bt = Na = null), Ki(t), (fe = null), (Le = 0));
    var u = t.return;
    try {
      if (Kh(l, u, t, a, J)) {
        ((rl = 1), cn(l, ot(a, l.current)), (L = null));
        return;
      }
    } catch (n) {
      if (u !== null) throw ((L = u), n);
      ((rl = 1), cn(l, ot(a, l.current)), (L = null));
      return;
    }
    t.flags & 32768
      ? ($ || e === 1
          ? (l = !0)
          : re || (J & 536870912) !== 0
            ? (l = !1)
            : ((fa = l = !0),
              (e === 2 || e === 9 || e === 3 || e === 6) &&
                ((e = tt.current), e !== null && e.tag === 13 && (e.flags |= 16384))),
        vo(t, l))
      : pn(t);
  }
  function pn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        vo(t, fa);
        return;
      }
      l = t.return;
      var a = Wh(t.alternate, t, Kt);
      if (a !== null) {
        L = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        L = t;
        return;
      }
      L = t = l;
    } while (t !== null);
    rl === 0 && (rl = 5);
  }
  function vo(l, t) {
    do {
      var a = $h(l.alternate, l);
      if (a !== null) {
        ((a.flags &= 32767), (L = a));
        return;
      }
      if (
        ((a = l.return),
        a !== null && ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        L = l;
        return;
      }
      L = l = a;
    } while (l !== null);
    ((rl = 6), (L = null));
  }
  function go(l, t, a, e, u, n, i, c, f) {
    l.cancelPendingCommit = null;
    do zn();
    while (Al !== 0);
    if ((I & 6) !== 0) throw Error(h(327));
    if (t !== null) {
      if (t === l.current) throw Error(h(177));
      if (
        ((n = t.lanes | t.childLanes),
        (n |= Si),
        xd(l, a, n, i, c, f),
        l === sl && ((L = sl = null), (J = 0)),
        (ge = t),
        (da = l),
        (Jt = a),
        (Mc = n),
        (Oc = u),
        (no = e),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            cy(Tu, function () {
              return (To(), null);
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (e = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || e)
      ) {
        ((e = b.T), (b.T = null), (u = A.p), (A.p = 2), (i = I), (I |= 4));
        try {
          kh(l, t, a);
        } finally {
          ((I = i), (A.p = u), (b.T = e));
        }
      }
      ((Al = 1), So(), bo(), po());
    }
  }
  function So() {
    if (Al === 1) {
      Al = 0;
      var l = da,
        t = ge,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        ((a = b.T), (b.T = null));
        var e = A.p;
        A.p = 2;
        var u = I;
        I |= 4;
        try {
          F0(t, l);
          var n = Zc,
            i = es(l.containerInfo),
            c = n.focusedElem,
            f = n.selectionRange;
          if (i !== c && c && c.ownerDocument && as(c.ownerDocument.documentElement, c)) {
            if (f !== null && yi(c)) {
              var m = f.start,
                S = f.end;
              if ((S === void 0 && (S = m), "selectionStart" in c))
                ((c.selectionStart = m), (c.selectionEnd = Math.min(S, c.value.length)));
              else {
                var z = c.ownerDocument || document,
                  r = (z && z.defaultView) || window;
                if (r.getSelection) {
                  var v = r.getSelection(),
                    M = c.textContent.length,
                    C = Math.min(f.start, M),
                    cl = f.end === void 0 ? C : Math.min(f.end, M);
                  !v.extend && C > cl && ((i = cl), (cl = C), (C = i));
                  var d = ts(c, C),
                    s = ts(c, cl);
                  if (
                    d &&
                    s &&
                    (v.rangeCount !== 1 ||
                      v.anchorNode !== d.node ||
                      v.anchorOffset !== d.offset ||
                      v.focusNode !== s.node ||
                      v.focusOffset !== s.offset)
                  ) {
                    var y = z.createRange();
                    (y.setStart(d.node, d.offset),
                      v.removeAllRanges(),
                      C > cl
                        ? (v.addRange(y), v.extend(s.node, s.offset))
                        : (y.setEnd(s.node, s.offset), v.addRange(y)));
                  }
                }
              }
            }
            for (z = [], v = c; (v = v.parentNode); )
              v.nodeType === 1 && z.push({ element: v, left: v.scrollLeft, top: v.scrollTop });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < z.length; c++) {
              var p = z[c];
              ((p.element.scrollLeft = p.left), (p.element.scrollTop = p.top));
            }
          }
          ((Cn = !!Xc), (Zc = Xc = null));
        } finally {
          ((I = u), (A.p = e), (b.T = a));
        }
      }
      ((l.current = t), (Al = 2));
    }
  }
  function bo() {
    if (Al === 2) {
      Al = 0;
      var l = da,
        t = ge,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        ((a = b.T), (b.T = null));
        var e = A.p;
        A.p = 2;
        var u = I;
        I |= 4;
        try {
          J0(l, t.alternate, t);
        } finally {
          ((I = u), (A.p = e), (b.T = a));
        }
      }
      Al = 3;
    }
  }
  function po() {
    if (Al === 4 || Al === 3) {
      ((Al = 0), Od());
      var l = da,
        t = ge,
        a = Jt,
        e = no;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Al = 5)
        : ((Al = 0), (ge = da = null), zo(l, l.pendingLanes));
      var u = l.pendingLanes;
      if (
        (u === 0 && (oa = null),
        Wn(a),
        (t = t.stateNode),
        Fl && typeof Fl.onCommitFiberRoot == "function")
      )
        try {
          Fl.onCommitFiberRoot(Me, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (e !== null) {
        ((t = b.T), (u = A.p), (A.p = 2), (b.T = null));
        try {
          for (var n = l.onRecoverableError, i = 0; i < e.length; i++) {
            var c = e[i];
            n(c.value, { componentStack: c.stack });
          }
        } finally {
          ((b.T = t), (A.p = u));
        }
      }
      ((Jt & 3) !== 0 && zn(),
        Ot(l),
        (u = l.pendingLanes),
        (a & 261930) !== 0 && (u & 42) !== 0 ? (l === Dc ? cu++ : ((cu = 0), (Dc = l))) : (cu = 0),
        fu(0));
    }
  }
  function zo(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), Ze(t)));
  }
  function zn() {
    return (So(), bo(), po(), To());
  }
  function To() {
    if (Al !== 5) return !1;
    var l = da,
      t = Mc;
    Mc = 0;
    var a = Wn(Jt),
      e = b.T,
      u = A.p;
    try {
      ((A.p = 32 > a ? 32 : a), (b.T = null), (a = Oc), (Oc = null));
      var n = da,
        i = Jt;
      if (((Al = 0), (ge = da = null), (Jt = 0), (I & 6) !== 0)) throw Error(h(331));
      var c = I;
      if (
        ((I |= 4),
        ao(n.current),
        P0(n, n.current, i, a),
        (I = c),
        fu(0, !1),
        Fl && typeof Fl.onPostCommitFiberRoot == "function")
      )
        try {
          Fl.onPostCommitFiberRoot(Me, n);
        } catch {}
      return !0;
    } finally {
      ((A.p = u), (b.T = e), zo(l, t));
    }
  }
  function Eo(l, t, a) {
    ((t = ot(a, t)),
      (t = ic(l.stateNode, t, 2)),
      (l = ua(l, t, 2)),
      l !== null && (De(l, 2), Ot(l)));
  }
  function al(l, t, a) {
    if (l.tag === 3) Eo(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Eo(t, l, a);
          break;
        } else if (t.tag === 1) {
          var e = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof e.componentDidCatch == "function" && (oa === null || !oa.has(e)))
          ) {
            ((l = ot(a, l)),
              (a = E0(2)),
              (e = ua(t, a, 2)),
              e !== null && (A0(a, e, t, l), De(e, 2), Ot(e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Hc(l, t, a) {
    var e = l.pingCache;
    if (e === null) {
      e = l.pingCache = new Ph();
      var u = new Set();
      e.set(t, u);
    } else ((u = e.get(t)), u === void 0 && ((u = new Set()), e.set(t, u)));
    u.has(a) || ((Ec = !0), u.add(a), (l = uy.bind(null, l, t, a)), t.then(l, l));
  }
  function uy(l, t, a) {
    var e = l.pingCache;
    (e !== null && e.delete(t),
      (l.pingedLanes |= l.suspendedLanes & a),
      (l.warmLanes &= ~a),
      sl === l &&
        (J & a) === a &&
        (rl === 4 || (rl === 3 && (J & 62914560) === J && 300 > kl() - rn)
          ? (I & 2) === 0 && Se(l, 0)
          : (Ac |= a),
        ve === J && (ve = 0)),
      Ot(l));
  }
  function Ao(l, t) {
    (t === 0 && (t = gf()), (l = Oa(l, t)), l !== null && (De(l, t), Ot(l)));
  }
  function ny(l) {
    var t = l.memoizedState,
      a = 0;
    (t !== null && (a = t.retryLane), Ao(l, a));
  }
  function iy(l, t) {
    var a = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var e = l.stateNode,
          u = l.memoizedState;
        u !== null && (a = u.retryLane);
        break;
      case 19:
        e = l.stateNode;
        break;
      case 22:
        e = l.stateNode._retryCache;
        break;
      default:
        throw Error(h(314));
    }
    (e !== null && e.delete(t), Ao(l, a));
  }
  function cy(l, t) {
    return Ln(l, t);
  }
  var Tn = null,
    pe = null,
    Rc = !1,
    En = !1,
    Cc = !1,
    ya = 0;
  function Ot(l) {
    (l !== pe && l.next === null && (pe === null ? (Tn = pe = l) : (pe = pe.next = l)),
      (En = !0),
      Rc || ((Rc = !0), sy()));
  }
  function fu(l, t) {
    if (!Cc && En) {
      Cc = !0;
      do
        for (var a = !1, e = Tn; e !== null; ) {
          if (l !== 0) {
            var u = e.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var i = e.suspendedLanes,
                c = e.pingedLanes;
              ((n = (1 << (31 - Il(42 | l) + 1)) - 1),
                (n &= u & ~(i & ~c)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0));
            }
            n !== 0 && ((a = !0), Do(e, n));
          } else
            ((n = J),
              (n = Mu(
                e,
                e === sl ? n : 0,
                e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
              )),
              (n & 3) === 0 || Oe(e, n) || ((a = !0), Do(e, n)));
          e = e.next;
        }
      while (a);
      Cc = !1;
    }
  }
  function fy() {
    _o();
  }
  function _o() {
    En = Rc = !1;
    var l = 0;
    ya !== 0 && by() && (l = ya);
    for (var t = kl(), a = null, e = Tn; e !== null; ) {
      var u = e.next,
        n = Mo(e, t);
      (n === 0
        ? ((e.next = null), a === null ? (Tn = u) : (a.next = u), u === null && (pe = a))
        : ((a = e), (l !== 0 || (n & 3) !== 0) && (En = !0)),
        (e = u));
    }
    ((Al !== 0 && Al !== 5) || fu(l), ya !== 0 && (ya = 0));
  }
  function Mo(l, t) {
    for (
      var a = l.suspendedLanes,
        e = l.pingedLanes,
        u = l.expirationTimes,
        n = l.pendingLanes & -62914561;
      0 < n;
    ) {
      var i = 31 - Il(n),
        c = 1 << i,
        f = u[i];
      (f === -1
        ? ((c & a) === 0 || (c & e) !== 0) && (u[i] = Bd(c, t))
        : f <= t && (l.expiredLanes |= c),
        (n &= ~c));
    }
    if (
      ((t = sl),
      (a = J),
      (a = Mu(l, l === t ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1)),
      (e = l.callbackNode),
      a === 0 || (l === t && (tl === 2 || tl === 9)) || l.cancelPendingCommit !== null)
    )
      return (e !== null && e !== null && Kn(e), (l.callbackNode = null), (l.callbackPriority = 0));
    if ((a & 3) === 0 || Oe(l, a)) {
      if (((t = a & -a), t === l.callbackPriority)) return t;
      switch ((e !== null && Kn(e), Wn(a))) {
        case 2:
        case 8:
          a = rf;
          break;
        case 32:
          a = Tu;
          break;
        case 268435456:
          a = vf;
          break;
        default:
          a = Tu;
      }
      return (
        (e = Oo.bind(null, l)), (a = Ln(a, e)), (l.callbackPriority = t), (l.callbackNode = a), t
      );
    }
    return (
      e !== null && e !== null && Kn(e), (l.callbackPriority = 2), (l.callbackNode = null), 2
    );
  }
  function Oo(l, t) {
    if (Al !== 0 && Al !== 5) return ((l.callbackNode = null), (l.callbackPriority = 0), null);
    var a = l.callbackNode;
    if (zn() && l.callbackNode !== a) return null;
    var e = J;
    return (
      (e = Mu(l, l === sl ? e : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1)),
      e === 0
        ? null
        : (co(l, e, t),
          Mo(l, kl()),
          l.callbackNode != null && l.callbackNode === a ? Oo.bind(null, l) : null)
    );
  }
  function Do(l, t) {
    if (zn()) return null;
    co(l, t, !0);
  }
  function sy() {
    zy(function () {
      (I & 6) !== 0 ? Ln(mf, fy) : _o();
    });
  }
  function qc() {
    if (ya === 0) {
      var l = ne;
      (l === 0 && ((l = Eu), (Eu <<= 1), (Eu & 261888) === 0 && (Eu = 256)), (ya = l));
    }
    return ya;
  }
  function Uo(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
        ? l
        : Nu("" + l);
  }
  function No(l, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      l.id && a.setAttribute("form", l.id),
      t.parentNode.insertBefore(a, t),
      (l = new FormData(l)),
      a.parentNode.removeChild(a),
      l
    );
  }
  function oy(l, t, a, e, u) {
    if (t === "submit" && a && a.stateNode === u) {
      var n = Uo((u[Xl] || null).action),
        i = e.submitter;
      i &&
        ((t = (t = i[Xl] || null) ? Uo(t.formAction) : i.getAttribute("formAction")),
        t !== null && ((n = t), (i = null)));
      var c = new qu("action", "action", null, e, u);
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (e.defaultPrevented) {
                if (ya !== 0) {
                  var f = i ? No(u, i) : new FormData(u);
                  lc(a, { pending: !0, data: f, method: u.method, action: n }, null, f);
                }
              } else
                typeof n == "function" &&
                  (c.preventDefault(),
                  (f = i ? No(u, i) : new FormData(u)),
                  lc(a, { pending: !0, data: f, method: u.method, action: n }, n, f));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var Bc = 0; Bc < gi.length; Bc++) {
    var xc = gi[Bc],
      dy = xc.toLowerCase(),
      hy = xc[0].toUpperCase() + xc.slice(1);
    St(dy, "on" + hy);
  }
  (St(is, "onAnimationEnd"),
    St(cs, "onAnimationIteration"),
    St(fs, "onAnimationStart"),
    St("dblclick", "onDoubleClick"),
    St("focusin", "onFocus"),
    St("focusout", "onBlur"),
    St(Dh, "onTransitionRun"),
    St(Uh, "onTransitionStart"),
    St(Nh, "onTransitionCancel"),
    St(ss, "onTransitionEnd"),
    Ka("onMouseEnter", ["mouseout", "mouseover"]),
    Ka("onMouseLeave", ["mouseout", "mouseover"]),
    Ka("onPointerEnter", ["pointerout", "pointerover"]),
    Ka("onPointerLeave", ["pointerout", "pointerover"]),
    Ea("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    Ea(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Ea("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ea("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    Ea(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ea(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var su =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    yy = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(su),
    );
  function Ho(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var e = l[a],
        u = e.event;
      e = e.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var i = e.length - 1; 0 <= i; i--) {
            var c = e[i],
              f = c.instance,
              m = c.currentTarget;
            if (((c = c.listener), f !== n && u.isPropagationStopped())) break l;
            ((n = c), (u.currentTarget = m));
            try {
              n(u);
            } catch (S) {
              Yu(S);
            }
            ((u.currentTarget = null), (n = f));
          }
        else
          for (i = 0; i < e.length; i++) {
            if (
              ((c = e[i]),
              (f = c.instance),
              (m = c.currentTarget),
              (c = c.listener),
              f !== n && u.isPropagationStopped())
            )
              break l;
            ((n = c), (u.currentTarget = m));
            try {
              n(u);
            } catch (S) {
              Yu(S);
            }
            ((u.currentTarget = null), (n = f));
          }
      }
    }
  }
  function K(l, t) {
    var a = t[$n];
    a === void 0 && (a = t[$n] = new Set());
    var e = l + "__bubble";
    a.has(e) || (Ro(t, l, 2, !1), a.add(e));
  }
  function Yc(l, t, a) {
    var e = 0;
    (t && (e |= 4), Ro(a, l, e, t));
  }
  var An = "_reactListening" + Math.random().toString(36).slice(2);
  function jc(l) {
    if (!l[An]) {
      ((l[An] = !0),
        Af.forEach(function (a) {
          a !== "selectionchange" && (yy.has(a) || Yc(a, !1, l), Yc(a, !0, l));
        }));
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[An] || ((t[An] = !0), Yc("selectionchange", !1, t));
    }
  }
  function Ro(l, t, a, e) {
    switch (cd(t)) {
      case 2:
        var u = Xy;
        break;
      case 8:
        u = Zy;
        break;
      default:
        u = Pc;
    }
    ((a = u.bind(null, t, a, l)),
      (u = void 0),
      !ui || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (u = !0),
      e
        ? u !== void 0
          ? l.addEventListener(t, a, { capture: !0, passive: u })
          : l.addEventListener(t, a, !0)
        : u !== void 0
          ? l.addEventListener(t, a, { passive: u })
          : l.addEventListener(t, a, !1));
  }
  function Gc(l, t, a, e, u) {
    var n = e;
    if ((t & 1) === 0 && (t & 2) === 0 && e !== null)
      l: for (;;) {
        if (e === null) return;
        var i = e.tag;
        if (i === 3 || i === 4) {
          var c = e.stateNode.containerInfo;
          if (c === u) break;
          if (i === 4)
            for (i = e.return; i !== null; ) {
              var f = i.tag;
              if ((f === 3 || f === 4) && i.stateNode.containerInfo === u) return;
              i = i.return;
            }
          for (; c !== null; ) {
            if (((i = Za(c)), i === null)) return;
            if (((f = i.tag), f === 5 || f === 6 || f === 26 || f === 27)) {
              e = n = i;
              continue l;
            }
            c = c.parentNode;
          }
        }
        e = e.return;
      }
    xf(function () {
      var m = n,
        S = ai(a),
        z = [];
      l: {
        var r = os.get(l);
        if (r !== void 0) {
          var v = qu,
            M = l;
          switch (l) {
            case "keypress":
              if (Ru(a) === 0) break l;
            case "keydown":
            case "keyup":
              v = ih;
              break;
            case "focusin":
              ((M = "focus"), (v = fi));
              break;
            case "focusout":
              ((M = "blur"), (v = fi));
              break;
            case "beforeblur":
            case "afterblur":
              v = fi;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              v = Gf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              v = Wd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              v = sh;
              break;
            case is:
            case cs:
            case fs:
              v = Fd;
              break;
            case ss:
              v = dh;
              break;
            case "scroll":
            case "scrollend":
              v = Jd;
              break;
            case "wheel":
              v = yh;
              break;
            case "copy":
            case "cut":
            case "paste":
              v = Pd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              v = Xf;
              break;
            case "toggle":
            case "beforetoggle":
              v = rh;
          }
          var C = (t & 4) !== 0,
            cl = !C && (l === "scroll" || l === "scrollend"),
            d = C ? (r !== null ? r + "Capture" : null) : r;
          C = [];
          for (var s = m, y; s !== null; ) {
            var p = s;
            if (
              ((y = p.stateNode),
              (p = p.tag),
              (p !== 5 && p !== 26 && p !== 27) ||
                y === null ||
                d === null ||
                ((p = He(s, d)), p != null && C.push(ou(s, p, y))),
              cl)
            )
              break;
            s = s.return;
          }
          0 < C.length && ((r = new v(r, M, null, a, S)), z.push({ event: r, listeners: C }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((r = l === "mouseover" || l === "pointerover"),
            (v = l === "mouseout" || l === "pointerout"),
            r && a !== ti && (M = a.relatedTarget || a.fromElement) && (Za(M) || M[Xa]))
          )
            break l;
          if (
            (v || r) &&
            ((r =
              S.window === S
                ? S
                : (r = S.ownerDocument)
                  ? r.defaultView || r.parentWindow
                  : window),
            v
              ? ((M = a.relatedTarget || a.toElement),
                (v = m),
                (M = M ? Za(M) : null),
                M !== null &&
                  ((cl = Z(M)), (C = M.tag), M !== cl || (C !== 5 && C !== 27 && C !== 6)) &&
                  (M = null))
              : ((v = null), (M = m)),
            v !== M)
          ) {
            if (
              ((C = Gf),
              (p = "onMouseLeave"),
              (d = "onMouseEnter"),
              (s = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((C = Xf), (p = "onPointerLeave"), (d = "onPointerEnter"), (s = "pointer")),
              (cl = v == null ? r : Ne(v)),
              (y = M == null ? r : Ne(M)),
              (r = new C(p, s + "leave", v, a, S)),
              (r.target = cl),
              (r.relatedTarget = y),
              (p = null),
              Za(S) === m &&
                ((C = new C(d, s + "enter", M, a, S)),
                (C.target = y),
                (C.relatedTarget = cl),
                (p = C)),
              (cl = p),
              v && M)
            )
              t: {
                for (C = my, d = v, s = M, y = 0, p = d; p; p = C(p)) y++;
                p = 0;
                for (var U = s; U; U = C(U)) p++;
                for (; 0 < y - p; ) ((d = C(d)), y--);
                for (; 0 < p - y; ) ((s = C(s)), p--);
                for (; y--; ) {
                  if (d === s || (s !== null && d === s.alternate)) {
                    C = d;
                    break t;
                  }
                  ((d = C(d)), (s = C(s)));
                }
                C = null;
              }
            else C = null;
            (v !== null && Co(z, r, v, C, !1), M !== null && cl !== null && Co(z, cl, M, C, !0));
          }
        }
        l: {
          if (
            ((r = m ? Ne(m) : window),
            (v = r.nodeName && r.nodeName.toLowerCase()),
            v === "select" || (v === "input" && r.type === "file"))
          )
            var k = $f;
          else if (wf(r))
            if (kf) k = _h;
            else {
              k = Eh;
              var D = Th;
            }
          else
            ((v = r.nodeName),
              !v || v.toLowerCase() !== "input" || (r.type !== "checkbox" && r.type !== "radio")
                ? m && li(m.elementType) && (k = $f)
                : (k = Ah));
          if (k && (k = k(l, m))) {
            Wf(z, k, a, S);
            break l;
          }
          (D && D(l, r, m),
            l === "focusout" &&
              m &&
              r.type === "number" &&
              m.memoizedProps.value != null &&
              Pn(r, "number", r.value));
        }
        switch (((D = m ? Ne(m) : window), l)) {
          case "focusin":
            (wf(D) || D.contentEditable === "true") && ((Fa = D), (mi = m), (Ge = null));
            break;
          case "focusout":
            Ge = mi = Fa = null;
            break;
          case "mousedown":
            ri = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((ri = !1), us(z, a, S));
            break;
          case "selectionchange":
            if (Oh) break;
          case "keydown":
          case "keyup":
            us(z, a, S);
        }
        var Q;
        if (oi)
          l: {
            switch (l) {
              case "compositionstart":
                var w = "onCompositionStart";
                break l;
              case "compositionend":
                w = "onCompositionEnd";
                break l;
              case "compositionupdate":
                w = "onCompositionUpdate";
                break l;
            }
            w = void 0;
          }
        else
          ka
            ? Kf(l, a) && (w = "onCompositionEnd")
            : l === "keydown" && a.keyCode === 229 && (w = "onCompositionStart");
        (w &&
          (Zf &&
            a.locale !== "ko" &&
            (ka || w !== "onCompositionStart"
              ? w === "onCompositionEnd" && ka && (Q = Yf())
              : ((Ft = S), (ni = "value" in Ft ? Ft.value : Ft.textContent), (ka = !0))),
          (D = _n(m, w)),
          0 < D.length &&
            ((w = new Qf(w, l, null, a, S)),
            z.push({ event: w, listeners: D }),
            Q ? (w.data = Q) : ((Q = Jf(a)), Q !== null && (w.data = Q)))),
          (Q = gh ? Sh(l, a) : bh(l, a)) &&
            ((w = _n(m, "onBeforeInput")),
            0 < w.length &&
              ((D = new Qf("onBeforeInput", "beforeinput", null, a, S)),
              z.push({ event: D, listeners: w }),
              (D.data = Q))),
          oy(z, l, m, a, S));
      }
      Ho(z, t);
    });
  }
  function ou(l, t, a) {
    return { instance: l, listener: t, currentTarget: a };
  }
  function _n(l, t) {
    for (var a = t + "Capture", e = []; l !== null; ) {
      var u = l,
        n = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          n === null ||
          ((u = He(l, a)),
          u != null && e.unshift(ou(l, u, n)),
          (u = He(l, t)),
          u != null && e.push(ou(l, u, n))),
        l.tag === 3)
      )
        return e;
      l = l.return;
    }
    return [];
  }
  function my(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Co(l, t, a, e, u) {
    for (var n = t._reactName, i = []; a !== null && a !== e; ) {
      var c = a,
        f = c.alternate,
        m = c.stateNode;
      if (((c = c.tag), f !== null && f === e)) break;
      ((c !== 5 && c !== 26 && c !== 27) ||
        m === null ||
        ((f = m),
        u
          ? ((m = He(a, n)), m != null && i.unshift(ou(a, m, f)))
          : u || ((m = He(a, n)), m != null && i.push(ou(a, m, f)))),
        (a = a.return));
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var ry = /\r\n?/g,
    vy = /\u0000|\uFFFD/g;
  function qo(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        ry,
        `
`,
      )
      .replace(vy, "");
  }
  function Bo(l, t) {
    return ((t = qo(t)), qo(l) === t);
  }
  function il(l, t, a, e, u, n) {
    switch (a) {
      case "children":
        typeof e == "string"
          ? t === "body" || (t === "textarea" && e === "") || wa(l, e)
          : (typeof e == "number" || typeof e == "bigint") && t !== "body" && wa(l, "" + e);
        break;
      case "className":
        Du(l, "class", e);
        break;
      case "tabIndex":
        Du(l, "tabindex", e);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Du(l, a, e);
        break;
      case "style":
        qf(l, e, n);
        break;
      case "data":
        if (t !== "object") {
          Du(l, "data", e);
          break;
        }
      case "src":
      case "href":
        if (e === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (e == null || typeof e == "function" || typeof e == "symbol" || typeof e == "boolean") {
          l.removeAttribute(a);
          break;
        }
        ((e = Nu("" + e)), l.setAttribute(a, e));
        break;
      case "action":
      case "formAction":
        if (typeof e == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof n == "function" &&
            (a === "formAction"
              ? (t !== "input" && il(l, t, "name", u.name, u, null),
                il(l, t, "formEncType", u.formEncType, u, null),
                il(l, t, "formMethod", u.formMethod, u, null),
                il(l, t, "formTarget", u.formTarget, u, null))
              : (il(l, t, "encType", u.encType, u, null),
                il(l, t, "method", u.method, u, null),
                il(l, t, "target", u.target, u, null)));
        if (e == null || typeof e == "symbol" || typeof e == "boolean") {
          l.removeAttribute(a);
          break;
        }
        ((e = Nu("" + e)), l.setAttribute(a, e));
        break;
      case "onClick":
        e != null && (l.onclick = Ht);
        break;
      case "onScroll":
        e != null && K("scroll", l);
        break;
      case "onScrollEnd":
        e != null && K("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e)) throw Error(h(61));
          if (((a = e.__html), a != null)) {
            if (u.children != null) throw Error(h(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "muted":
        l.muted = e && typeof e != "function" && typeof e != "symbol";
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
        if (e == null || typeof e == "function" || typeof e == "boolean" || typeof e == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        ((a = Nu("" + e)), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        e != null && typeof e != "function" && typeof e != "symbol"
          ? l.setAttribute(a, "" + e)
          : l.removeAttribute(a);
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
        e && typeof e != "function" && typeof e != "symbol"
          ? l.setAttribute(a, "")
          : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        e === !0
          ? l.setAttribute(a, "")
          : e !== !1 && e != null && typeof e != "function" && typeof e != "symbol"
            ? l.setAttribute(a, e)
            : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        e != null && typeof e != "function" && typeof e != "symbol" && !isNaN(e) && 1 <= e
          ? l.setAttribute(a, e)
          : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        e == null || typeof e == "function" || typeof e == "symbol" || isNaN(e)
          ? l.removeAttribute(a)
          : l.setAttribute(a, e);
        break;
      case "popover":
        (K("beforetoggle", l), K("toggle", l), Ou(l, "popover", e));
        break;
      case "xlinkActuate":
        Nt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", e);
        break;
      case "xlinkArcrole":
        Nt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", e);
        break;
      case "xlinkRole":
        Nt(l, "http://www.w3.org/1999/xlink", "xlink:role", e);
        break;
      case "xlinkShow":
        Nt(l, "http://www.w3.org/1999/xlink", "xlink:show", e);
        break;
      case "xlinkTitle":
        Nt(l, "http://www.w3.org/1999/xlink", "xlink:title", e);
        break;
      case "xlinkType":
        Nt(l, "http://www.w3.org/1999/xlink", "xlink:type", e);
        break;
      case "xmlBase":
        Nt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", e);
        break;
      case "xmlLang":
        Nt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", e);
        break;
      case "xmlSpace":
        Nt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", e);
        break;
      case "is":
        Ou(l, "is", e);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || (a[0] !== "o" && a[0] !== "O") || (a[1] !== "n" && a[1] !== "N")) &&
          ((a = Ld.get(a) || a), Ou(l, a, e));
    }
  }
  function Qc(l, t, a, e, u, n) {
    switch (a) {
      case "style":
        qf(l, e, n);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e)) throw Error(h(61));
          if (((a = e.__html), a != null)) {
            if (u.children != null) throw Error(h(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof e == "string"
          ? wa(l, e)
          : (typeof e == "number" || typeof e == "bigint") && wa(l, "" + e);
        break;
      case "onScroll":
        e != null && K("scroll", l);
        break;
      case "onScrollEnd":
        e != null && K("scrollend", l);
        break;
      case "onClick":
        e != null && (l.onclick = Ht);
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
        if (!_f.hasOwnProperty(a))
          l: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((u = a.endsWith("Capture")),
              (t = a.slice(2, u ? a.length - 7 : void 0)),
              (n = l[Xl] || null),
              (n = n != null ? n[a] : null),
              typeof n == "function" && l.removeEventListener(t, n, u),
              typeof e == "function")
            ) {
              (typeof n != "function" &&
                n !== null &&
                (a in l ? (l[a] = null) : l.hasAttribute(a) && l.removeAttribute(a)),
                l.addEventListener(t, e, u));
              break l;
            }
            a in l ? (l[a] = e) : e === !0 ? l.setAttribute(a, "") : Ou(l, a, e);
          }
    }
  }
  function Hl(l, t, a) {
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
        (K("error", l), K("load", l));
        var e = !1,
          u = !1,
          n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var i = a[n];
            if (i != null)
              switch (n) {
                case "src":
                  e = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(h(137, t));
                default:
                  il(l, t, n, i, a, null);
              }
          }
        (u && il(l, t, "srcSet", a.srcSet, a, null), e && il(l, t, "src", a.src, a, null));
        return;
      case "input":
        K("invalid", l);
        var c = (n = i = u = null),
          f = null,
          m = null;
        for (e in a)
          if (a.hasOwnProperty(e)) {
            var S = a[e];
            if (S != null)
              switch (e) {
                case "name":
                  u = S;
                  break;
                case "type":
                  i = S;
                  break;
                case "checked":
                  f = S;
                  break;
                case "defaultChecked":
                  m = S;
                  break;
                case "value":
                  n = S;
                  break;
                case "defaultValue":
                  c = S;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (S != null) throw Error(h(137, t));
                  break;
                default:
                  il(l, t, e, S, a, null);
              }
          }
        Nf(l, n, c, f, m, i, u, !1);
        return;
      case "select":
        (K("invalid", l), (e = i = n = null));
        for (u in a)
          if (a.hasOwnProperty(u) && ((c = a[u]), c != null))
            switch (u) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                e = c;
              default:
                il(l, t, u, c, a, null);
            }
        ((t = n),
          (a = i),
          (l.multiple = !!e),
          t != null ? Ja(l, !!e, t, !1) : a != null && Ja(l, !!e, a, !0));
        return;
      case "textarea":
        (K("invalid", l), (n = u = e = null));
        for (i in a)
          if (a.hasOwnProperty(i) && ((c = a[i]), c != null))
            switch (i) {
              case "value":
                e = c;
                break;
              case "defaultValue":
                u = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(h(91));
                break;
              default:
                il(l, t, i, c, a, null);
            }
        Rf(l, e, u, n);
        return;
      case "option":
        for (f in a)
          if (a.hasOwnProperty(f) && ((e = a[f]), e != null))
            switch (f) {
              case "selected":
                l.selected = e && typeof e != "function" && typeof e != "symbol";
                break;
              default:
                il(l, t, f, e, a, null);
            }
        return;
      case "dialog":
        (K("beforetoggle", l), K("toggle", l), K("cancel", l), K("close", l));
        break;
      case "iframe":
      case "object":
        K("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < su.length; e++) K(su[e], l);
        break;
      case "image":
        (K("error", l), K("load", l));
        break;
      case "details":
        K("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        (K("error", l), K("load", l));
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
        for (m in a)
          if (a.hasOwnProperty(m) && ((e = a[m]), e != null))
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(h(137, t));
              default:
                il(l, t, m, e, a, null);
            }
        return;
      default:
        if (li(t)) {
          for (S in a)
            a.hasOwnProperty(S) && ((e = a[S]), e !== void 0 && Qc(l, t, S, e, a, void 0));
          return;
        }
    }
    for (c in a) a.hasOwnProperty(c) && ((e = a[c]), e != null && il(l, t, c, e, a, null));
  }
  function gy(l, t, a, e) {
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
        var u = null,
          n = null,
          i = null,
          c = null,
          f = null,
          m = null,
          S = null;
        for (v in a) {
          var z = a[v];
          if (a.hasOwnProperty(v) && z != null)
            switch (v) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                f = z;
              default:
                e.hasOwnProperty(v) || il(l, t, v, null, e, z);
            }
        }
        for (var r in e) {
          var v = e[r];
          if (((z = a[r]), e.hasOwnProperty(r) && (v != null || z != null)))
            switch (r) {
              case "type":
                n = v;
                break;
              case "name":
                u = v;
                break;
              case "checked":
                m = v;
                break;
              case "defaultChecked":
                S = v;
                break;
              case "value":
                i = v;
                break;
              case "defaultValue":
                c = v;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(h(137, t));
                break;
              default:
                v !== z && il(l, t, r, v, e, z);
            }
        }
        In(l, i, c, f, m, S, n, u);
        return;
      case "select":
        v = i = c = r = null;
        for (n in a)
          if (((f = a[n]), a.hasOwnProperty(n) && f != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                v = f;
              default:
                e.hasOwnProperty(n) || il(l, t, n, null, e, f);
            }
        for (u in e)
          if (((n = e[u]), (f = a[u]), e.hasOwnProperty(u) && (n != null || f != null)))
            switch (u) {
              case "value":
                r = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                i = n;
              default:
                n !== f && il(l, t, u, n, e, f);
            }
        ((t = c),
          (a = i),
          (e = v),
          r != null
            ? Ja(l, !!a, r, !1)
            : !!e != !!a && (t != null ? Ja(l, !!a, t, !0) : Ja(l, !!a, a ? [] : "", !1)));
        return;
      case "textarea":
        v = r = null;
        for (c in a)
          if (((u = a[c]), a.hasOwnProperty(c) && u != null && !e.hasOwnProperty(c)))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                il(l, t, c, null, e, u);
            }
        for (i in e)
          if (((u = e[i]), (n = a[i]), e.hasOwnProperty(i) && (u != null || n != null)))
            switch (i) {
              case "value":
                r = u;
                break;
              case "defaultValue":
                v = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(h(91));
                break;
              default:
                u !== n && il(l, t, i, u, e, n);
            }
        Hf(l, r, v);
        return;
      case "option":
        for (var M in a)
          if (((r = a[M]), a.hasOwnProperty(M) && r != null && !e.hasOwnProperty(M)))
            switch (M) {
              case "selected":
                l.selected = !1;
                break;
              default:
                il(l, t, M, null, e, r);
            }
        for (f in e)
          if (((r = e[f]), (v = a[f]), e.hasOwnProperty(f) && r !== v && (r != null || v != null)))
            switch (f) {
              case "selected":
                l.selected = r && typeof r != "function" && typeof r != "symbol";
                break;
              default:
                il(l, t, f, r, e, v);
            }
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
        for (var C in a)
          ((r = a[C]),
            a.hasOwnProperty(C) && r != null && !e.hasOwnProperty(C) && il(l, t, C, null, e, r));
        for (m in e)
          if (((r = e[m]), (v = a[m]), e.hasOwnProperty(m) && r !== v && (r != null || v != null)))
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(h(137, t));
                break;
              default:
                il(l, t, m, r, e, v);
            }
        return;
      default:
        if (li(t)) {
          for (var cl in a)
            ((r = a[cl]),
              a.hasOwnProperty(cl) &&
                r !== void 0 &&
                !e.hasOwnProperty(cl) &&
                Qc(l, t, cl, void 0, e, r));
          for (S in e)
            ((r = e[S]),
              (v = a[S]),
              !e.hasOwnProperty(S) ||
                r === v ||
                (r === void 0 && v === void 0) ||
                Qc(l, t, S, r, e, v));
          return;
        }
    }
    for (var d in a)
      ((r = a[d]),
        a.hasOwnProperty(d) && r != null && !e.hasOwnProperty(d) && il(l, t, d, null, e, r));
    for (z in e)
      ((r = e[z]),
        (v = a[z]),
        !e.hasOwnProperty(z) || r === v || (r == null && v == null) || il(l, t, z, r, e, v));
  }
  function xo(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Sy() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var l = 0, t = 0, a = performance.getEntriesByType("resource"), e = 0;
        e < a.length;
        e++
      ) {
        var u = a[e],
          n = u.transferSize,
          i = u.initiatorType,
          c = u.duration;
        if (n && c && xo(i)) {
          for (i = 0, c = u.responseEnd, e += 1; e < a.length; e++) {
            var f = a[e],
              m = f.startTime;
            if (m > c) break;
            var S = f.transferSize,
              z = f.initiatorType;
            S && xo(z) && ((f = f.responseEnd), (i += S * (f < c ? 1 : (c - m) / (f - m))));
          }
          if ((--e, (t += (8 * (n + i)) / (u.duration / 1e3)), l++, 10 < l)) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && ((l = navigator.connection.downlink), typeof l == "number")
      ? l
      : 5;
  }
  var Xc = null,
    Zc = null;
  function Mn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Yo(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function jo(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Vc(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Lc = null;
  function by() {
    var l = window.event;
    return l && l.type === "popstate" ? (l === Lc ? !1 : ((Lc = l), !0)) : ((Lc = null), !1);
  }
  var Go = typeof setTimeout == "function" ? setTimeout : void 0,
    py = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Qo = typeof Promise == "function" ? Promise : void 0,
    zy =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Qo < "u"
          ? function (l) {
              return Qo.resolve(null).then(l).catch(Ty);
            }
          : Go;
  function Ty(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function ma(l) {
    return l === "head";
  }
  function Xo(l, t) {
    var a = t,
      e = 0;
    do {
      var u = a.nextSibling;
      if ((l.removeChild(a), u && u.nodeType === 8))
        if (((a = u.data), a === "/$" || a === "/&")) {
          if (e === 0) {
            (l.removeChild(u), Ae(t));
            return;
          }
          e--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&") e++;
        else if (a === "html") du(l.ownerDocument.documentElement);
        else if (a === "head") {
          ((a = l.ownerDocument.head), du(a));
          for (var n = a.firstChild; n; ) {
            var i = n.nextSibling,
              c = n.nodeName;
            (n[Ue] ||
              c === "SCRIPT" ||
              c === "STYLE" ||
              (c === "LINK" && n.rel.toLowerCase() === "stylesheet") ||
              a.removeChild(n),
              (n = i));
          }
        } else a === "body" && du(l.ownerDocument.body);
      a = u;
    } while (a);
    Ae(t);
  }
  function Zo(l, t) {
    var a = l;
    l = 0;
    do {
      var e = a.nextSibling;
      if (
        (a.nodeType === 1
          ? t
            ? ((a._stashedDisplay = a.style.display), (a.style.display = "none"))
            : ((a.style.display = a._stashedDisplay || ""),
              a.getAttribute("style") === "" && a.removeAttribute("style"))
          : a.nodeType === 3 &&
            (t
              ? ((a._stashedText = a.nodeValue), (a.nodeValue = ""))
              : (a.nodeValue = a._stashedText || "")),
        e && e.nodeType === 8)
      )
        if (((a = e.data), a === "/$")) {
          if (l === 0) break;
          l--;
        } else (a !== "$" && a !== "$?" && a !== "$~" && a !== "$!") || l++;
      a = e;
    } while (a);
  }
  function Kc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Kc(a), kn(a));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function Ey(l, t, a, e) {
    for (; l.nodeType === 1; ) {
      var u = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!e && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (e) {
        if (!l[Ue])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((n = l.getAttribute("rel")),
                n === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== u.rel ||
                l.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) ||
                l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) ||
                l.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((n = l.getAttribute("src")),
                (n !== (u.src == null ? null : u.src) ||
                  l.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  l.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  n &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (((l = rt(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function Ay(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !a) ||
        ((l = rt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Vo(l, t) {
    for (; l.nodeType !== 8; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t) ||
        ((l = rt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Jc(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function wc(l) {
    return l.data === "$!" || (l.data === "$?" && l.ownerDocument.readyState !== "loading");
  }
  function _y(l, t) {
    var a = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || a.readyState !== "loading") t();
    else {
      var e = function () {
        (t(), a.removeEventListener("DOMContentLoaded", e));
      };
      (a.addEventListener("DOMContentLoaded", e), (l._reactRetry = e));
    }
  }
  function rt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var Wc = null;
  function Lo(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "/$" || a === "/&") {
          if (t === 0) return rt(l.nextSibling);
          t--;
        } else (a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&") || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Ko(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return l;
          t--;
        } else (a !== "/$" && a !== "/&") || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Jo(l, t, a) {
    switch (((t = Mn(a)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(h(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(h(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(h(454));
        return l;
      default:
        throw Error(h(451));
    }
  }
  function du(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    kn(l);
  }
  var vt = new Map(),
    wo = new Set();
  function On(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
        ? l
        : l.ownerDocument;
  }
  var wt = A.d;
  A.d = { f: My, r: Oy, D: Dy, C: Uy, L: Ny, m: Hy, X: Cy, S: Ry, M: qy };
  function My() {
    var l = wt.f(),
      t = Sn();
    return l || t;
  }
  function Oy(l) {
    var t = Va(l);
    t !== null && t.tag === 5 && t.type === "form" ? s0(t) : wt.r(l);
  }
  var ze = typeof document > "u" ? null : document;
  function Wo(l, t, a) {
    var e = ze;
    if (e && typeof t == "string" && t) {
      var u = ft(t);
      ((u = 'link[rel="' + l + '"][href="' + u + '"]'),
        typeof a == "string" && (u += '[crossorigin="' + a + '"]'),
        wo.has(u) ||
          (wo.add(u),
          (l = { rel: l, crossOrigin: a, href: t }),
          e.querySelector(u) === null &&
            ((t = e.createElement("link")), Hl(t, "link", l), _l(t), e.head.appendChild(t))));
    }
  }
  function Dy(l) {
    (wt.D(l), Wo("dns-prefetch", l, null));
  }
  function Uy(l, t) {
    (wt.C(l, t), Wo("preconnect", l, t));
  }
  function Ny(l, t, a) {
    wt.L(l, t, a);
    var e = ze;
    if (e && l && t) {
      var u = 'link[rel="preload"][as="' + ft(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((u += '[imagesrcset="' + ft(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" && (u += '[imagesizes="' + ft(a.imageSizes) + '"]'))
        : (u += '[href="' + ft(l) + '"]');
      var n = u;
      switch (t) {
        case "style":
          n = Te(l);
          break;
        case "script":
          n = Ee(l);
      }
      vt.has(n) ||
        ((l = B(
          { rel: "preload", href: t === "image" && a && a.imageSrcSet ? void 0 : l, as: t },
          a,
        )),
        vt.set(n, l),
        e.querySelector(u) !== null ||
          (t === "style" && e.querySelector(hu(n))) ||
          (t === "script" && e.querySelector(yu(n))) ||
          ((t = e.createElement("link")), Hl(t, "link", l), _l(t), e.head.appendChild(t)));
    }
  }
  function Hy(l, t) {
    wt.m(l, t);
    var a = ze;
    if (a && l) {
      var e = t && typeof t.as == "string" ? t.as : "script",
        u = 'link[rel="modulepreload"][as="' + ft(e) + '"][href="' + ft(l) + '"]',
        n = u;
      switch (e) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Ee(l);
      }
      if (
        !vt.has(n) &&
        ((l = B({ rel: "modulepreload", href: l }, t)), vt.set(n, l), a.querySelector(u) === null)
      ) {
        switch (e) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(yu(n))) return;
        }
        ((e = a.createElement("link")), Hl(e, "link", l), _l(e), a.head.appendChild(e));
      }
    }
  }
  function Ry(l, t, a) {
    wt.S(l, t, a);
    var e = ze;
    if (e && l) {
      var u = La(e).hoistableStyles,
        n = Te(l);
      t = t || "default";
      var i = u.get(n);
      if (!i) {
        var c = { loading: 0, preload: null };
        if ((i = e.querySelector(hu(n)))) c.loading = 5;
        else {
          ((l = B({ rel: "stylesheet", href: l, "data-precedence": t }, a)),
            (a = vt.get(n)) && $c(l, a));
          var f = (i = e.createElement("link"));
          (_l(f),
            Hl(f, "link", l),
            (f._p = new Promise(function (m, S) {
              ((f.onload = m), (f.onerror = S));
            })),
            f.addEventListener("load", function () {
              c.loading |= 1;
            }),
            f.addEventListener("error", function () {
              c.loading |= 2;
            }),
            (c.loading |= 4),
            Dn(i, t, e));
        }
        ((i = { type: "stylesheet", instance: i, count: 1, state: c }), u.set(n, i));
      }
    }
  }
  function Cy(l, t) {
    wt.X(l, t);
    var a = ze;
    if (a && l) {
      var e = La(a).hoistableScripts,
        u = Ee(l),
        n = e.get(u);
      n ||
        ((n = a.querySelector(yu(u))),
        n ||
          ((l = B({ src: l, async: !0 }, t)),
          (t = vt.get(u)) && kc(l, t),
          (n = a.createElement("script")),
          _l(n),
          Hl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        e.set(u, n));
    }
  }
  function qy(l, t) {
    wt.M(l, t);
    var a = ze;
    if (a && l) {
      var e = La(a).hoistableScripts,
        u = Ee(l),
        n = e.get(u);
      n ||
        ((n = a.querySelector(yu(u))),
        n ||
          ((l = B({ src: l, async: !0, type: "module" }, t)),
          (t = vt.get(u)) && kc(l, t),
          (n = a.createElement("script")),
          _l(n),
          Hl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        e.set(u, n));
    }
  }
  function $o(l, t, a, e) {
    var u = (u = V.current) ? On(u) : null;
    if (!u) throw Error(h(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = Te(a.href)),
            (a = La(u).hoistableStyles),
            (e = a.get(t)),
            e || ((e = { type: "style", instance: null, count: 0, state: null }), a.set(t, e)),
            e)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          l = Te(a.href);
          var n = La(u).hoistableStyles,
            i = n.get(l);
          if (
            (i ||
              ((u = u.ownerDocument || u),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(l, i),
              (n = u.querySelector(hu(l))) && !n._p && ((i.instance = n), (i.state.loading = 5)),
              vt.has(l) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                vt.set(l, a),
                n || By(u, l, a, i.state))),
            t && e === null)
          )
            throw Error(h(528, ""));
          return i;
        }
        if (t && e !== null) throw Error(h(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" && t && typeof t != "function" && typeof t != "symbol"
            ? ((t = Ee(a)),
              (a = La(u).hoistableScripts),
              (e = a.get(t)),
              e || ((e = { type: "script", instance: null, count: 0, state: null }), a.set(t, e)),
              e)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(h(444, l));
    }
  }
  function Te(l) {
    return 'href="' + ft(l) + '"';
  }
  function hu(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function ko(l) {
    return B({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function By(l, t, a, e) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (e.loading = 1)
      : ((t = l.createElement("link")),
        (e.preload = t),
        t.addEventListener("load", function () {
          return (e.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (e.loading |= 2);
        }),
        Hl(t, "link", a),
        _l(t),
        l.head.appendChild(t));
  }
  function Ee(l) {
    return '[src="' + ft(l) + '"]';
  }
  function yu(l) {
    return "script[async]" + l;
  }
  function Fo(l, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var e = l.querySelector('style[data-href~="' + ft(a.href) + '"]');
          if (e) return ((t.instance = e), _l(e), e);
          var u = B({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (e = (l.ownerDocument || l).createElement("style")),
            _l(e),
            Hl(e, "style", u),
            Dn(e, a.precedence, l),
            (t.instance = e)
          );
        case "stylesheet":
          u = Te(a.href);
          var n = l.querySelector(hu(u));
          if (n) return ((t.state.loading |= 4), (t.instance = n), _l(n), n);
          ((e = ko(a)),
            (u = vt.get(u)) && $c(e, u),
            (n = (l.ownerDocument || l).createElement("link")),
            _l(n));
          var i = n;
          return (
            (i._p = new Promise(function (c, f) {
              ((i.onload = c), (i.onerror = f));
            })),
            Hl(n, "link", e),
            (t.state.loading |= 4),
            Dn(n, a.precedence, l),
            (t.instance = n)
          );
        case "script":
          return (
            (n = Ee(a.src)),
            (u = l.querySelector(yu(n)))
              ? ((t.instance = u), _l(u), u)
              : ((e = a),
                (u = vt.get(n)) && ((e = B({}, a)), kc(e, u)),
                (l = l.ownerDocument || l),
                (u = l.createElement("script")),
                _l(u),
                Hl(u, "link", e),
                l.head.appendChild(u),
                (t.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(h(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((e = t.instance), (t.state.loading |= 4), Dn(e, a.precedence, l));
    return t.instance;
  }
  function Dn(l, t, a) {
    for (
      var e = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        u = e.length ? e[e.length - 1] : null,
        n = u,
        i = 0;
      i < e.length;
      i++
    ) {
      var c = e[i];
      if (c.dataset.precedence === t) n = c;
      else if (n !== u) break;
    }
    n
      ? n.parentNode.insertBefore(l, n.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(l, t.firstChild));
  }
  function $c(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title));
  }
  function kc(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity));
  }
  var Un = null;
  function Io(l, t, a) {
    if (Un === null) {
      var e = new Map(),
        u = (Un = new Map());
      u.set(a, e);
    } else ((u = Un), (e = u.get(a)), e || ((e = new Map()), u.set(a, e)));
    if (e.has(l)) return e;
    for (e.set(l, null), a = a.getElementsByTagName(l), u = 0; u < a.length; u++) {
      var n = a[u];
      if (
        !(n[Ue] || n[Ol] || (l === "link" && n.getAttribute("rel") === "stylesheet")) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = n.getAttribute(t) || "";
        i = l + i;
        var c = e.get(i);
        c ? c.push(n) : e.set(i, [n]);
      }
    }
    return e;
  }
  function Po(l, t, a) {
    ((l = l.ownerDocument || l),
      l.head.insertBefore(a, t === "title" ? l.querySelector("head > title") : null));
  }
  function xy(l, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return ((l = t.disabled), typeof t.precedence == "string" && l == null);
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function ld(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Yy(l, t, a, e) {
    if (
      a.type === "stylesheet" &&
      (typeof e.media != "string" || matchMedia(e.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var u = Te(e.href),
          n = t.querySelector(hu(u));
        if (n) {
          ((t = n._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (l.count++, (l = Nn.bind(l)), t.then(l, l)),
            (a.state.loading |= 4),
            (a.instance = n),
            _l(n));
          return;
        }
        ((n = t.ownerDocument || t),
          (e = ko(e)),
          (u = vt.get(u)) && $c(e, u),
          (n = n.createElement("link")),
          _l(n));
        var i = n;
        ((i._p = new Promise(function (c, f) {
          ((i.onload = c), (i.onerror = f));
        })),
          Hl(n, "link", e),
          (a.instance = n));
      }
      (l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(a, t),
        (t = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (l.count++,
          (a = Nn.bind(l)),
          t.addEventListener("load", a),
          t.addEventListener("error", a)));
    }
  }
  var Fc = 0;
  function jy(l, t) {
    return (
      l.stylesheets && l.count === 0 && Rn(l, l.stylesheets),
      0 < l.count || 0 < l.imgCount
        ? function (a) {
            var e = setTimeout(function () {
              if ((l.stylesheets && Rn(l, l.stylesheets), l.unsuspend)) {
                var n = l.unsuspend;
                ((l.unsuspend = null), n());
              }
            }, 6e4 + t);
            0 < l.imgBytes && Fc === 0 && (Fc = 62500 * Sy());
            var u = setTimeout(
              function () {
                if (
                  ((l.waitingForImages = !1),
                  l.count === 0 && (l.stylesheets && Rn(l, l.stylesheets), l.unsuspend))
                ) {
                  var n = l.unsuspend;
                  ((l.unsuspend = null), n());
                }
              },
              (l.imgBytes > Fc ? 50 : 800) + t,
            );
            return (
              (l.unsuspend = a),
              function () {
                ((l.unsuspend = null), clearTimeout(e), clearTimeout(u));
              }
            );
          }
        : null
    );
  }
  function Nn() {
    if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
      if (this.stylesheets) Rn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        ((this.unsuspend = null), l());
      }
    }
  }
  var Hn = null;
  function Rn(l, t) {
    ((l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++, (Hn = new Map()), t.forEach(Gy, l), (Hn = null), Nn.call(l)));
  }
  function Gy(l, t) {
    if (!(t.state.loading & 4)) {
      var a = Hn.get(l);
      if (a) var e = a.get(null);
      else {
        ((a = new Map()), Hn.set(l, a));
        for (
          var u = l.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0;
          n < u.length;
          n++
        ) {
          var i = u[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (a.set(i.dataset.precedence, i), (e = i));
        }
        e && a.set(null, e);
      }
      ((u = t.instance),
        (i = u.getAttribute("data-precedence")),
        (n = a.get(i) || e),
        n === e && a.set(null, u),
        a.set(i, u),
        this.count++,
        (e = Nn.bind(this)),
        u.addEventListener("load", e),
        u.addEventListener("error", e),
        n
          ? n.parentNode.insertBefore(u, n.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l), l.insertBefore(u, l.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var mu = {
    $$typeof: Rl,
    Provider: null,
    Consumer: null,
    _currentValue: x,
    _currentValue2: x,
    _threadCount: 0,
  };
  function Qy(l, t, a, e, u, n, i, c, f) {
    ((this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Jn(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Jn(0)),
      (this.hiddenUpdates = Jn(null)),
      (this.identifierPrefix = e),
      (this.onUncaughtError = u),
      (this.onCaughtError = n),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = f),
      (this.incompleteTransitions = new Map()));
  }
  function td(l, t, a, e, u, n, i, c, f, m, S, z) {
    return (
      (l = new Qy(l, t, a, i, f, m, S, z, c)),
      (t = 1),
      n === !0 && (t |= 24),
      (n = lt(3, null, null, t)),
      (l.current = n),
      (n.stateNode = l),
      (t = Ni()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (n.memoizedState = { element: e, isDehydrated: a, cache: t }),
      qi(n),
      l
    );
  }
  function ad(l) {
    return l ? ((l = le), l) : le;
  }
  function ed(l, t, a, e, u, n) {
    ((u = ad(u)),
      e.context === null ? (e.context = u) : (e.pendingContext = u),
      (e = ea(t)),
      (e.payload = { element: a }),
      (n = n === void 0 ? null : n),
      n !== null && (e.callback = n),
      (a = ua(l, e, t)),
      a !== null && (wl(a, l, t), Je(a, l, t)));
  }
  function ud(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Ic(l, t) {
    (ud(l, t), (l = l.alternate) && ud(l, t));
  }
  function nd(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Oa(l, 67108864);
      (t !== null && wl(t, l, 67108864), Ic(l, 67108864));
    }
  }
  function id(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = nt();
      t = wn(t);
      var a = Oa(l, t);
      (a !== null && wl(a, l, t), Ic(l, t));
    }
  }
  var Cn = !0;
  function Xy(l, t, a, e) {
    var u = b.T;
    b.T = null;
    var n = A.p;
    try {
      ((A.p = 2), Pc(l, t, a, e));
    } finally {
      ((A.p = n), (b.T = u));
    }
  }
  function Zy(l, t, a, e) {
    var u = b.T;
    b.T = null;
    var n = A.p;
    try {
      ((A.p = 8), Pc(l, t, a, e));
    } finally {
      ((A.p = n), (b.T = u));
    }
  }
  function Pc(l, t, a, e) {
    if (Cn) {
      var u = lf(e);
      if (u === null) (Gc(l, t, e, qn, a), fd(l, e));
      else if (Ly(u, l, t, a, e)) e.stopPropagation();
      else if ((fd(l, e), t & 4 && -1 < Vy.indexOf(l))) {
        for (; u !== null; ) {
          var n = Va(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var i = Ta(n.pendingLanes);
                  if (i !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var f = 1 << (31 - Il(i));
                      ((c.entanglements[1] |= f), (i &= ~f));
                    }
                    (Ot(n), (I & 6) === 0 && ((vn = kl() + 500), fu(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((c = Oa(n, 2)), c !== null && wl(c, n, 2), Sn(), Ic(n, 2));
            }
          if (((n = lf(e)), n === null && Gc(l, t, e, qn, a), n === u)) break;
          u = n;
        }
        u !== null && e.stopPropagation();
      } else Gc(l, t, e, null, a);
    }
  }
  function lf(l) {
    return ((l = ai(l)), tf(l));
  }
  var qn = null;
  function tf(l) {
    if (((qn = null), (l = Za(l)), l !== null)) {
      var t = Z(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((l = el(t)), l !== null)) return l;
          l = null;
        } else if (a === 31) {
          if (((l = vl(t)), l !== null)) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return ((qn = l), null);
  }
  function cd(l) {
    switch (l) {
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
        switch (Dd()) {
          case mf:
            return 2;
          case rf:
            return 8;
          case Tu:
          case Ud:
            return 32;
          case vf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var af = !1,
    ra = null,
    va = null,
    ga = null,
    ru = new Map(),
    vu = new Map(),
    Sa = [],
    Vy =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function fd(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        ra = null;
        break;
      case "dragenter":
      case "dragleave":
        va = null;
        break;
      case "mouseover":
      case "mouseout":
        ga = null;
        break;
      case "pointerover":
      case "pointerout":
        ru.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        vu.delete(t.pointerId);
    }
  }
  function gu(l, t, a, e, u, n) {
    return l === null || l.nativeEvent !== n
      ? ((l = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: e,
          nativeEvent: n,
          targetContainers: [u],
        }),
        t !== null && ((t = Va(t)), t !== null && nd(t)),
        l)
      : ((l.eventSystemFlags |= e),
        (t = l.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        l);
  }
  function Ly(l, t, a, e, u) {
    switch (t) {
      case "focusin":
        return ((ra = gu(ra, l, t, a, e, u)), !0);
      case "dragenter":
        return ((va = gu(va, l, t, a, e, u)), !0);
      case "mouseover":
        return ((ga = gu(ga, l, t, a, e, u)), !0);
      case "pointerover":
        var n = u.pointerId;
        return (ru.set(n, gu(ru.get(n) || null, l, t, a, e, u)), !0);
      case "gotpointercapture":
        return ((n = u.pointerId), vu.set(n, gu(vu.get(n) || null, l, t, a, e, u)), !0);
    }
    return !1;
  }
  function sd(l) {
    var t = Za(l.target);
    if (t !== null) {
      var a = Z(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = el(a)), t !== null)) {
            ((l.blockedOn = t),
              Tf(l.priority, function () {
                id(a);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = vl(a)), t !== null)) {
            ((l.blockedOn = t),
              Tf(l.priority, function () {
                id(a);
              }));
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Bn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = lf(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var e = new a.constructor(a.type, a);
        ((ti = e), a.target.dispatchEvent(e), (ti = null));
      } else return ((t = Va(a)), t !== null && nd(t), (l.blockedOn = a), !1);
      t.shift();
    }
    return !0;
  }
  function od(l, t, a) {
    Bn(l) && a.delete(t);
  }
  function Ky() {
    ((af = !1),
      ra !== null && Bn(ra) && (ra = null),
      va !== null && Bn(va) && (va = null),
      ga !== null && Bn(ga) && (ga = null),
      ru.forEach(od),
      vu.forEach(od));
  }
  function xn(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      af || ((af = !0), g.unstable_scheduleCallback(g.unstable_NormalPriority, Ky)));
  }
  var Yn = null;
  function dd(l) {
    Yn !== l &&
      ((Yn = l),
      g.unstable_scheduleCallback(g.unstable_NormalPriority, function () {
        Yn === l && (Yn = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t],
            e = l[t + 1],
            u = l[t + 2];
          if (typeof e != "function") {
            if (tf(e || a) === null) continue;
            break;
          }
          var n = Va(a);
          n !== null &&
            (l.splice(t, 3),
            (t -= 3),
            lc(n, { pending: !0, data: u, method: a.method, action: e }, e, u));
        }
      }));
  }
  function Ae(l) {
    function t(f) {
      return xn(f, l);
    }
    (ra !== null && xn(ra, l),
      va !== null && xn(va, l),
      ga !== null && xn(ga, l),
      ru.forEach(t),
      vu.forEach(t));
    for (var a = 0; a < Sa.length; a++) {
      var e = Sa[a];
      e.blockedOn === l && (e.blockedOn = null);
    }
    for (; 0 < Sa.length && ((a = Sa[0]), a.blockedOn === null); )
      (sd(a), a.blockedOn === null && Sa.shift());
    if (((a = (l.ownerDocument || l).$$reactFormReplay), a != null))
      for (e = 0; e < a.length; e += 3) {
        var u = a[e],
          n = a[e + 1],
          i = u[Xl] || null;
        if (typeof n == "function") i || dd(a);
        else if (i) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (((u = n), (i = n[Xl] || null))) c = i.formAction;
            else if (tf(u) !== null) continue;
          } else c = i.action;
          (typeof c == "function" ? (a[e + 1] = c) : (a.splice(e, 3), (e -= 3)), dd(a));
        }
      }
  }
  function hd() {
    function l(n) {
      n.canIntercept &&
        n.info === "react-transition" &&
        n.intercept({
          handler: function () {
            return new Promise(function (i) {
              return (u = i);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (u !== null && (u(), (u = null)), e || setTimeout(a, 20));
    }
    function a() {
      if (!e && !navigation.transition) {
        var n = navigation.currentEntry;
        n &&
          n.url != null &&
          navigation.navigate(n.url, {
            state: n.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var e = !1,
        u = null;
      return (
        navigation.addEventListener("navigate", l),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(a, 100),
        function () {
          ((e = !0),
            navigation.removeEventListener("navigate", l),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            u !== null && (u(), (u = null)));
        }
      );
    }
  }
  function ef(l) {
    this._internalRoot = l;
  }
  ((jn.prototype.render = ef.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(h(409));
      var a = t.current,
        e = nt();
      ed(a, e, l, t, null, null);
    }),
    (jn.prototype.unmount = ef.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          (ed(l.current, 2, null, l, null, null), Sn(), (t[Xa] = null));
        }
      }));
  function jn(l) {
    this._internalRoot = l;
  }
  jn.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = zf();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < Sa.length && t !== 0 && t < Sa[a].priority; a++);
      (Sa.splice(a, 0, l), a === 0 && sd(l));
    }
  };
  var yd = R.version;
  if (yd !== "19.2.5") throw Error(h(527, yd, "19.2.5"));
  A.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(h(188))
        : ((l = Object.keys(l).join(",")), Error(h(268, l)));
    return ((l = E(t)), (l = l !== null ? P(l) : null), (l = l === null ? null : l.stateNode), l);
  };
  var Jy = {
    bundleType: 0,
    version: "19.2.5",
    rendererPackageName: "react-dom",
    currentDispatcherRef: b,
    reconcilerVersion: "19.2.5",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Gn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Gn.isDisabled && Gn.supportsFiber)
      try {
        ((Me = Gn.inject(Jy)), (Fl = Gn));
      } catch {}
  }
  return (
    (bu.createRoot = function (l, t) {
      if (!q(l)) throw Error(h(299));
      var a = !1,
        e = "",
        u = b0,
        n = p0,
        i = z0;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (e = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
          t.onCaughtError !== void 0 && (n = t.onCaughtError),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = td(l, 1, !1, null, null, a, e, null, u, n, i, hd)),
        (l[Xa] = t.current),
        jc(l),
        new ef(t)
      );
    }),
    (bu.hydrateRoot = function (l, t, a) {
      if (!q(l)) throw Error(h(299));
      var e = !1,
        u = "",
        n = b0,
        i = p0,
        c = z0,
        f = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (e = !0),
          a.identifierPrefix !== void 0 && (u = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (n = a.onUncaughtError),
          a.onCaughtError !== void 0 && (i = a.onCaughtError),
          a.onRecoverableError !== void 0 && (c = a.onRecoverableError),
          a.formState !== void 0 && (f = a.formState)),
        (t = td(l, 1, !0, t, a ?? null, e, u, f, n, i, c, hd)),
        (t.context = ad(null)),
        (a = t.current),
        (e = nt()),
        (e = wn(e)),
        (u = ea(e)),
        (u.callback = null),
        ua(a, u, e),
        (a = e),
        (t.current.lanes = a),
        De(t, a),
        Ot(t),
        (l[Xa] = t.current),
        jc(l),
        new jn(t)
      );
    }),
    (bu.version = "19.2.5"),
    bu
  );
}
var Ed;
function am() {
  if (Ed) return cf.exports;
  Ed = 1;
  function g() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g);
      } catch (R) {
        console.error(R);
      }
  }
  return (g(), (cf.exports = tm()), cf.exports);
}
var em = am();
const um = [
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];
function nm({ difficulty: g, onChange: R, disabled: N }) {
  return X.jsx("div", {
    className: "difficulty-select",
    role: "radiogroup",
    "aria-label": "Difficulty",
    children: um.map((h) =>
      X.jsx(
        "button",
        {
          className: `difficulty-btn ${h.value === g ? "difficulty-btn--active" : ""}`,
          role: "radio",
          "aria-checked": h.value === g,
          disabled: N,
          onClick: () => R(h.value),
          children: h.label,
        },
        h.value,
      ),
    ),
  });
}
const im = [
  { value: "timed", label: "Timed (60s)" },
  { value: "passage", label: "Passage" },
];
function cm({ mode: g, onChange: R, disabled: N }) {
  return X.jsx("div", {
    className: "mode-select",
    role: "radiogroup",
    "aria-label": "Mode",
    children: im.map((h) =>
      X.jsx(
        "button",
        {
          className: `mode-btn ${h.value === g ? "mode-btn--active" : ""}`,
          role: "radio",
          "aria-checked": h.value === g,
          disabled: N,
          onClick: () => R(h.value),
          children: h.label,
        },
        h.value,
      ),
    ),
  });
}
function fm() {
  return X.jsxs("div", {
    className: "stat-panel",
    children: [
      X.jsxs("div", {
        className: "stat-badge",
        children: [
          X.jsx("span", { className: "stat-badge__value", children: "0" }),
          X.jsx("span", { className: "stat-badge__label", children: "WPM" }),
        ],
      }),
      X.jsxs("div", {
        className: "stat-badge",
        children: [
          X.jsx("span", { className: "stat-badge__value", children: "0%" }),
          X.jsx("span", { className: "stat-badge__label", children: "Accuracy" }),
        ],
      }),
      X.jsxs("div", {
        className: "stat-badge",
        children: [
          X.jsx("span", { className: "stat-badge__value", children: "0s" }),
          X.jsx("span", { className: "stat-badge__label", children: "Time" }),
        ],
      }),
    ],
  });
}
function sm({ difficulty: g, mode: R, onDifficultyChange: N, onModeChange: h, disabled: q }) {
  return X.jsxs("div", {
    className: "controls",
    children: [
      X.jsx(fm, {}),
      X.jsx(nm, { difficulty: g, onChange: N, disabled: q }),
      X.jsx(cm, { mode: R, onChange: h, disabled: q }),
    ],
  });
}
const om = "" + new URL("logo-large-DQpruBTa.svg", import.meta.url).href,
  dm =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20fill='none'%20viewBox='0%200%2032%2032'%3e%3cpath%20fill='url(%23a)'%20fill-rule='evenodd'%20d='M22.827%2015.626a1.155%201.155%200%201%201%20.001-2.308%201.155%201.155%200%200%201-.001%202.308m-2.279%203.84a1.156%201.156%200%200%201%200-2.31%201.156%201.156%200%200%201%200%202.31m-.784%204.746h-7.526a1%201%200%200%201%200-2h7.526a1%201%200%200%201%200%202m-9.48-5.902a1.156%201.156%200%201%201%201.155%201.156%201.156%201.156%200%200%201-1.155-1.156M9.16%2015.626a1.155%201.155%200%201%201%200-2.308%201.155%201.155%200%200%201%200%202.308m4.557-2.31a1.155%201.155%200%201%201%200%202.311%201.155%201.155%200%200%201%200-2.31m2.276%203.84a1.156%201.156%200%200%201%200%202.31%201.156%201.156%200%200%201%200-2.31m2.277-3.84a1.155%201.155%200%201%201-.001%202.311%201.155%201.155%200%200%201%200-2.31m3.369-4.77h-4.447v-.185a3.596%203.596%200%200%200-3.578-3.538H12.27a.67.67%200%200%201-.668-.66%201%201%200%200%200-2%20.019%202.67%202.67%200%200%200%202.657%202.641h1.335c.809-.02%201.586.696%201.598%201.552v.171h-4.83c-4.4%200-7.028%202.579-7.028%206.898v6.497c-.007%202.084.618%203.817%201.808%205.01%201.224%201.229%203.024%201.877%205.208%201.877h11.289c4.4%200%207.028-2.574%207.028-6.884v-6.4c0-4.382-2.628-6.998-7.028-6.998'%20clip-rule='evenodd'/%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='5.5'%20x2='32.5'%20y1='7'%20y2='38.5'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%234ca6ff'/%3e%3cstop%20offset='1'%20stop-color='%23f4dc73'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",
  hm =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='21'%20height='18'%20fill='none'%20viewBox='0%200%2021%2018'%3e%3cpath%20fill='%23f4dc73'%20d='M19.406%202.25c.457%200%20.844.387.844.844v1.969c0%201.265-.809%202.566-2.18%203.55-1.125.809-2.46%201.301-3.867%201.477-1.125%201.828-2.39%202.566-2.39%202.566v2.531H13.5c1.23%200%202.25.739%202.25%201.97v.421c0%20.246-.21.422-.422.422H4.922a.406.406%200%200%201-.422-.422v-.422c0-1.23.984-1.968%202.25-1.968h1.688v-2.532s-1.301-.738-2.426-2.566c-1.407-.176-2.742-.668-3.867-1.477C.773%207.63%200%206.328%200%205.063v-1.97c0-.456.352-.843.844-.843H4.5V.844C4.5.387%204.852%200%205.344%200h9.562c.457%200%20.844.387.844.844V2.25zM3.48%206.785c.422.317.915.563%201.477.774A12.7%2012.7%200%200%201%204.5%204.5H2.25v.563c0%20.421.352%201.125%201.23%201.722M18%205.062V4.5h-2.285a12.7%2012.7%200%200%201-.457%203.059c.562-.211%201.055-.457%201.476-.774C17.367%206.363%2018%205.66%2018%205.062'/%3e%3c/svg%3e";
function ym({ bestScore: g }) {
  return g
    ? X.jsxs("div", {
        className: "personal-best-badge",
        children: [
          X.jsx("img", { src: hm, alt: "", width: "20", height: "18" }),
          X.jsxs("span", {
            className: "personal-best-badge__label",
            children: ["Personal Best: ", g.wpm, " WPM"],
          }),
        ],
      })
    : null;
}
function mm({ bestScore: g }) {
  return X.jsxs("header", {
    className: "app-header",
    children: [
      X.jsxs("picture", {
        children: [
          X.jsx("source", { srcSet: om, media: "(min-width: 600px)" }),
          X.jsx("img", { className: "header-logo", src: dm, alt: "Typed", height: "32" }),
        ],
      }),
      X.jsx(ym, { bestScore: g }),
    ],
  });
}
function rm({ passage: g, charStatuses: R, currentIndex: N }) {
  if (!g) return null;
  const h = R && R.length > 0;
  return X.jsx("p", {
    className: "passage",
    children: [...g.text].map((q, Z) => {
      let el = "passage-char";
      return (
        h &&
          (Z === N
            ? (el += " passage-char--cursor")
            : R[Z] === "correct"
              ? (el += " passage-char--correct")
              : R[Z] === "incorrect" && (el += " passage-char--incorrect")),
        X.jsx("span", { className: el, children: q }, Z)
      );
    }),
  });
}
function vm({ onStart: g }) {
  return X.jsx("div", {
    className: "start-overlay",
    children: X.jsx("button", {
      className: "start-overlay__btn",
      onClick: g,
      children: "Start Test",
    }),
  });
}
function gm({ phase: g, passage: R, charStatuses: N, currentIndex: h, onStart: q }) {
  return g === "finished"
    ? null
    : X.jsxs("div", {
        className: "typing-area",
        children: [
          X.jsx(rm, {
            passage: R,
            charStatuses: g === "running" ? N : void 0,
            currentIndex: g === "running" ? h : void 0,
          }),
          g === "idle" && X.jsx(vm, { onStart: q }),
        ],
      });
}
const Sm = "typing-speed-best";
function bm() {
  const [g, R] = pu.useState(null);
  return (
    pu.useEffect(() => {
      try {
        const N = localStorage.getItem(Sm);
        N && R(JSON.parse(N));
      } catch {}
    }, []),
    g
  );
}
const Ad = {
  phase: "idle",
  difficulty: "easy",
  mode: "timed",
  passage: null,
  charStatuses: [],
  currentIndex: 0,
  correctKeystrokes: 0,
  incorrectKeystrokes: 0,
  startedAt: null,
  elapsedMs: 0,
};
function pm(g, R) {
  switch (R.type) {
    case "SET_DIFFICULTY":
      return g.phase !== "idle" ? g : { ...g, difficulty: R.payload };
    case "SET_MODE":
      return g.phase !== "idle" ? g : { ...g, mode: R.payload };
    case "SELECT_PASSAGE":
      return {
        ...g,
        passage: R.payload,
        charStatuses: new Array(R.payload.text.length).fill("untouched"),
        currentIndex: 0,
        correctKeystrokes: 0,
        incorrectKeystrokes: 0,
        elapsedMs: 0,
        startedAt: null,
      };
    case "START":
      return { ...g, phase: "running", startedAt: Date.now() };
    case "TYPE_CHAR": {
      if (g.phase !== "running" || !g.passage || g.currentIndex >= g.passage.text.length) return g;
      const N = g.passage.text[g.currentIndex],
        h = R.payload === N,
        q = [...g.charStatuses];
      return (
        (q[g.currentIndex] = h ? "correct" : "incorrect"),
        {
          ...g,
          charStatuses: q,
          currentIndex: g.currentIndex + 1,
          correctKeystrokes: g.correctKeystrokes + (h ? 1 : 0),
          incorrectKeystrokes: g.incorrectKeystrokes + (h ? 0 : 1),
        }
      );
    }
    case "BACKSPACE": {
      if (g.phase !== "running" || g.currentIndex <= 0) return g;
      const N = g.currentIndex - 1,
        h = [...g.charStatuses];
      return ((h[N] = "untouched"), { ...g, charStatuses: h, currentIndex: N });
    }
    case "TICK":
      return g.phase !== "running" ? g : { ...g, elapsedMs: R.payload };
    case "FINISH":
      return { ...g, phase: "finished" };
    case "RESET":
      return { ...Ad, difficulty: g.difficulty, mode: g.mode };
    default:
      return g;
  }
}
function zm() {
  return pu.useReducer(pm, Ad);
}
const Tm = [
    {
      id: "easy-1",
      text: "The sun rose over the quiet town. Birds sang in the trees as people woke up and started their day. It was going to be a warm and sunny morning.",
    },
    {
      id: "easy-2",
      text: "She walked to the store to buy some bread and milk. The shop was busy but she found what she needed quickly. On her way home, she saw a friend and waved.",
    },
    {
      id: "easy-3",
      text: "The dog ran across the park chasing a ball. He was fast and loved to play. After a while, he got tired and lay down in the cool shade of a big oak tree.",
    },
    {
      id: "easy-4",
      text: "I like to read books before I go to sleep. It helps me relax after a long day. My favorite stories are about adventure and travel to far away places.",
    },
    {
      id: "easy-5",
      text: "The kitchen smelled of fresh coffee and toast. Mom was making breakfast while dad read the news. It was a normal morning in their small but cozy home.",
    },
    {
      id: "easy-6",
      text: "We went to the beach last summer. The water was blue and the sand was warm. We built a big sand castle and looked for shells along the shore.",
    },
    {
      id: "easy-7",
      text: "The cat sat on the window sill watching the rain. Drops fell down the glass one by one. She seemed happy to be inside where it was dry and warm.",
    },
    {
      id: "easy-8",
      text: "My best friend lives next door to me. We play games together after school. Sometimes we ride our bikes around the block or sit and talk for hours.",
    },
    {
      id: "easy-9",
      text: "Spring is my favorite time of year. Flowers start to bloom and the days get longer. I love to see the trees turn green again after the cold winter months.",
    },
    {
      id: "easy-10",
      text: "The music played softly in the room. She closed her eyes and let the sounds wash over her. It was a simple song but it made her feel at peace.",
    },
  ],
  Em = [
    {
      id: "medium-1",
      text: "Learning a new skill takes patience and consistent practice. Whether you're studying a language, picking up an instrument, or mastering a sport, the key is to show up every day. Small improvements compound over time, and before you know it, you'll have made remarkable progress.",
    },
    {
      id: "medium-2",
      text: "The old lighthouse had stood on the cliff for over a century, guiding sailors safely through treacherous waters. Its beam cut through the fog each night, a reassuring presence for those navigating the rocky coastline. Many storms had tested its structure, but it remained steadfast.",
    },
    {
      id: "medium-3",
      text: "Coffee culture has evolved dramatically in recent decades. What was once a simple morning ritual has become an art form, with baristas crafting intricate latte designs and roasters sourcing beans from remote mountain villages. The humble cup of coffee now tells a global story.",
    },
    {
      id: "medium-4",
      text: "Urban gardens are transforming city landscapes around the world. Residents are converting rooftops, balconies, and abandoned lots into thriving green spaces. These initiatives not only provide fresh produce but also create communities, reduce stress, and help combat the urban heat island effect.",
    },
    {
      id: "medium-5",
      text: "The documentary explored how technology shapes our daily habits. From the moment we wake to an alarm on our phones to the podcasts we fall asleep to, digital tools have woven themselves into the fabric of modern life. The question is: are we in control?",
    },
    {
      id: "medium-6",
      text: "Traveling by train offers a unique perspective on the countryside. Unlike flying, which reduces landscapes to abstract patterns, rail journeys let you witness the gradual transitions between regions. You see farms give way to forests, and small towns emerge from rolling hills.",
    },
    {
      id: "medium-7",
      text: "The chef believed that great cooking starts with quality ingredients. She visited local farmers each week, selecting vegetables at their peak ripeness. Her menu changed with the seasons, reflecting what the land offered. Diners appreciated the freshness they could taste in every bite.",
    },
    {
      id: "medium-8",
      text: "Libraries have reinvented themselves for the digital age. Beyond lending books, they now offer coworking spaces, 3D printers, recording studios, and coding workshops. These community hubs have become places where people of all ages come to learn, create, and connect with others.",
    },
    {
      id: "medium-9",
      text: "The architect designed buildings that worked with nature rather than against it. Large windows captured natural light, reducing the need for electricity. Green roofs absorbed rainwater and provided insulation. Her philosophy was simple: sustainable design should be beautiful, functional, and accessible to everyone.",
    },
    {
      id: "medium-10",
      text: "Night markets come alive after sunset in cities across Asia. Vendors set up stalls selling everything from grilled skewers to handmade crafts. The air fills with enticing aromas and the buzz of conversation. Locals and tourists alike wander through, sampling street food and hunting for bargains.",
    },
  ],
  Am = [
    {
      id: "hard-1",
      text: `The philosopher's argument hinged on a seemingly paradoxical assertion: that absolute freedom, pursued without constraint, inevitably undermines itself. "Consider," she wrote, "how the libertarian ideal—when taken to its logical extreme—produces conditions in which the powerful dominate the weak, thereby eliminating freedom for the majority." Her critics dismissed this as sophistry; her supporters hailed it as profound.`,
    },
    {
      id: "hard-2",
      text: `Quantum entanglement—Einstein's "spooky action at a distance"—continues to perplex physicists and philosophers alike. When two particles become entangled, measuring one instantaneously affects the other, regardless of the distance separating them. This phenomenon doesn't violate relativity (no information travels faster than light), yet it challenges our intuitions about locality, causality, and the nature of reality itself.`,
    },
    {
      id: "hard-3",
      text: `The Renaissance polymath's correspondence reveals a mind of extraordinary breadth: in a single week's letters, he discussed astronomical observations, critiqued a colleague's architectural drawings, proposed improvements to the city's sewage system, and composed a sonnet for a patron's daughter. "Specialization," he remarked wryly, "is for insects." His contemporaries found him exhausting; posterity finds him inspirational.`,
    },
    {
      id: "hard-4",
      text: 'Algorithmic trading has fundamentally restructured financial markets. High-frequency systems execute thousands of transactions per second, exploiting minute price discrepancies across exchanges. Critics argue this creates systemic fragility—the 2010 "Flash Crash" saw the Dow Jones plummet 1,000 points in minutes before recovering. Proponents counter that algorithms provide liquidity and reduce spreads, ultimately benefiting retail investors.',
    },
    {
      id: "hard-5",
      text: `The biographer faced an ethical dilemma: her subject's private journals—recently discovered in an attic—contained revelations that would overturn his carefully cultivated public image. Should she publish them? "Biography," she mused, "exists in tension between truth-telling and respect for the dead." After months of deliberation, she chose disclosure, reasoning that sanitized history serves no one.`,
    },
    {
      id: "hard-6",
      text: "Microplastics have infiltrated virtually every ecosystem on Earth, from the Mariana Trench to Arctic ice cores. These polymer fragments—smaller than 5mm in diameter—originate from degrading consumer products, synthetic textiles, and industrial processes. Researchers have detected them in human blood, placental tissue, and breast milk; their long-term health implications remain disturbingly unclear. The ubiquity of plastic pollution represents an unprecedented experiment on planetary biology.",
    },
    {
      id: "hard-7",
      text: `The conductor's interpretation of Mahler's Ninth Symphony emphasized its prophetic qualities—the premonition of catastrophe, the aching nostalgia for a world about to vanish. "Mahler composed this knowing he was dying," she explained in the program notes, "but he also intuited, somehow, that European civilization itself stood at the precipice." The orchestra's performance—hushed, trembling, transcendent—left the audience in stunned silence.`,
    },
    {
      id: "hard-8",
      text: 'Constitutional scholars continue debating the "counter-majoritarian difficulty": how can judicial review—whereby unelected judges overturn legislation passed by democratic representatives—be reconciled with popular sovereignty? Some argue courts protect minority rights against tyrannical majorities; others contend this reasoning masks ideological preferences in neutral-sounding jurisprudence. The tension, perhaps, is irresolvable; democratic systems must balance competing values rather than optimize for any single principle.',
    },
    {
      id: "hard-9",
      text: `The novelist's prose style—elliptical, fragmented, punctuated by abrupt temporal shifts—reflected her thematic preoccupations: memory's unreliability, identity's fluidity, the impossibility of objective narration. "Every story," she declared in an interview, "is simultaneously true and false; it reveals by concealing, illuminates by casting shadows." Critics accused her of obscurantism; she responded that clarity itself can be a form of deception.`,
    },
    {
      id: "hard-10",
      text: `The archaeological expedition unearthed artifacts that complicated prevailing theories about Bronze Age trade networks. Obsidian from Anatolia, lapis lazuli from Afghanistan, and amber from the Baltic—all discovered in a single Mycenaean tomb—suggested commercial connections far more extensive than previously hypothesized. "We've underestimated ancient peoples' navigational capabilities and their appetite for luxury goods," the lead researcher observed. "Globalization isn't as modern as we assume."`,
    },
  ],
  _m = { easy: Tm, medium: Em, hard: Am };
function Mm(g) {
  const N = _m[g];
  if (!N || N.length === 0) throw new Error(`No passages found for difficulty: ${g}`);
  return N[Math.floor(Math.random() * N.length)];
}
function Om() {
  const [g, R] = zm(),
    N = bm();
  pu.useEffect(() => {
    const vl = Mm(g.difficulty);
    R({ type: "SELECT_PASSAGE", payload: vl });
  }, [g.difficulty, R]);
  const h = (vl) => {
      R({ type: "SET_DIFFICULTY", payload: vl });
    },
    q = (vl) => {
      R({ type: "SET_MODE", payload: vl });
    },
    Z = () => {
      R({ type: "START" });
    },
    el = g.phase === "idle" || g.phase === "running";
  return X.jsxs("div", {
    className: "app",
    children: [
      X.jsx(mm, { bestScore: N }),
      el &&
        X.jsx(sm, {
          difficulty: g.difficulty,
          mode: g.mode,
          onDifficultyChange: h,
          onModeChange: q,
          disabled: g.phase === "running",
        }),
      g.phase !== "finished" &&
        X.jsx(gm, {
          phase: g.phase,
          passage: g.passage,
          charStatuses: g.charStatuses,
          currentIndex: g.currentIndex,
          onStart: Z,
        }),
      g.phase === "finished" &&
        X.jsx("div", { className: "results-placeholder", children: "Results" }),
    ],
  });
}
em.createRoot(document.getElementById("root")).render(
  X.jsx(pu.StrictMode, { children: X.jsx(Om, {}) }),
);
