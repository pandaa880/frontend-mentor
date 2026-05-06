(function () {
  const A = document.createElement("link").relList;
  if (A && A.supports && A.supports("modulepreload")) return;
  for (const R of document.querySelectorAll('link[rel="modulepreload"]')) d(R);
  new MutationObserver((R) => {
    for (const j of R)
      if (j.type === "childList")
        for (const Q of j.addedNodes) Q.tagName === "LINK" && Q.rel === "modulepreload" && d(Q);
  }).observe(document, { childList: !0, subtree: !0 });
  function O(R) {
    const j = {};
    return (
      R.integrity && (j.integrity = R.integrity),
      R.referrerPolicy && (j.referrerPolicy = R.referrerPolicy),
      R.crossOrigin === "use-credentials"
        ? (j.credentials = "include")
        : R.crossOrigin === "anonymous"
          ? (j.credentials = "omit")
          : (j.credentials = "same-origin"),
      j
    );
  }
  function d(R) {
    if (R.ep) return;
    R.ep = !0;
    const j = O(R);
    fetch(R.href, j);
  }
})();
var uf = { exports: {} },
  bu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var md;
function kh() {
  if (md) return bu;
  md = 1;
  var h = Symbol.for("react.transitional.element"),
    A = Symbol.for("react.fragment");
  function O(d, R, j) {
    var Q = null;
    if ((j !== void 0 && (Q = "" + j), R.key !== void 0 && (Q = "" + R.key), "key" in R)) {
      j = {};
      for (var hl in R) hl !== "key" && (j[hl] = R[hl]);
    } else j = R;
    return ((R = j.ref), { $$typeof: h, type: d, key: Q, ref: R !== void 0 ? R : null, props: j });
  }
  return ((bu.Fragment = A), (bu.jsx = O), (bu.jsxs = O), bu);
}
var yd;
function $h() {
  return (yd || ((yd = 1), (uf.exports = kh())), uf.exports);
}
var H = $h(),
  nf = { exports: {} },
  G = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vd;
function Fh() {
  if (vd) return G;
  vd = 1;
  var h = Symbol.for("react.transitional.element"),
    A = Symbol.for("react.portal"),
    O = Symbol.for("react.fragment"),
    d = Symbol.for("react.strict_mode"),
    R = Symbol.for("react.profiler"),
    j = Symbol.for("react.consumer"),
    Q = Symbol.for("react.context"),
    hl = Symbol.for("react.forward_ref"),
    x = Symbol.for("react.suspense"),
    E = Symbol.for("react.memo"),
    V = Symbol.for("react.lazy"),
    B = Symbol.for("react.activity"),
    rl = Symbol.iterator;
  function Wl(o) {
    return o === null || typeof o != "object"
      ? null
      : ((o = (rl && o[rl]) || o["@@iterator"]), typeof o == "function" ? o : null);
  }
  var jl = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Cl = Object.assign,
    Ut = {};
  function kl(o, z, M) {
    ((this.props = o), (this.context = z), (this.refs = Ut), (this.updater = M || jl));
  }
  ((kl.prototype.isReactComponent = {}),
    (kl.prototype.setState = function (o, z) {
      if (typeof o != "object" && typeof o != "function" && o != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, o, z, "setState");
    }),
    (kl.prototype.forceUpdate = function (o) {
      this.updater.enqueueForceUpdate(this, o, "forceUpdate");
    }));
  function kt() {}
  kt.prototype = kl.prototype;
  function Rl(o, z, M) {
    ((this.props = o), (this.context = z), (this.refs = Ut), (this.updater = M || jl));
  }
  var it = (Rl.prototype = new kt());
  ((it.constructor = Rl), Cl(it, kl.prototype), (it.isPureReactComponent = !0));
  var Tt = Array.isArray;
  function Yl() {}
  var $ = { H: null, A: null, T: null, S: null },
    Gl = Object.prototype.hasOwnProperty;
  function zt(o, z, M) {
    var U = M.ref;
    return { $$typeof: h, type: o, key: z, ref: U !== void 0 ? U : null, props: M };
  }
  function Xa(o, z) {
    return zt(o.type, z, o.props);
  }
  function Et(o) {
    return typeof o == "object" && o !== null && o.$$typeof === h;
  }
  function Ql(o) {
    var z = { "=": "=0", ":": "=2" };
    return (
      "$" +
      o.replace(/[=:]/g, function (M) {
        return z[M];
      })
    );
  }
  var Ta = /\/+/g;
  function Nt(o, z) {
    return typeof o == "object" && o !== null && o.key != null ? Ql("" + o.key) : z.toString(36);
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
            ? o.then(Yl, Yl)
            : ((o.status = "pending"),
              o.then(
                function (z) {
                  o.status === "pending" && ((o.status = "fulfilled"), (o.value = z));
                },
                function (z) {
                  o.status === "pending" && ((o.status = "rejected"), (o.reason = z));
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
  function b(o, z, M, U, X) {
    var K = typeof o;
    (K === "undefined" || K === "boolean") && (o = null);
    var tl = !1;
    if (o === null) tl = !0;
    else
      switch (K) {
        case "bigint":
        case "string":
        case "number":
          tl = !0;
          break;
        case "object":
          switch (o.$$typeof) {
            case h:
            case A:
              tl = !0;
              break;
            case V:
              return ((tl = o._init), b(tl(o._payload), z, M, U, X));
          }
      }
    if (tl)
      return (
        (X = X(o)),
        (tl = U === "" ? "." + Nt(o, 0) : U),
        Tt(X)
          ? ((M = ""),
            tl != null && (M = tl.replace(Ta, "$&/") + "/"),
            b(X, z, M, "", function (Me) {
              return Me;
            }))
          : X != null &&
            (Et(X) &&
              (X = Xa(
                X,
                M +
                  (X.key == null || (o && o.key === X.key)
                    ? ""
                    : ("" + X.key).replace(Ta, "$&/") + "/") +
                  tl,
              )),
            z.push(X)),
        1
      );
    tl = 0;
    var ql = U === "" ? "." : U + ":";
    if (Tt(o))
      for (var gl = 0; gl < o.length; gl++)
        ((U = o[gl]), (K = ql + Nt(U, gl)), (tl += b(U, z, M, K, X)));
    else if (((gl = Wl(o)), typeof gl == "function"))
      for (o = gl.call(o), gl = 0; !(U = o.next()).done; )
        ((U = U.value), (K = ql + Nt(U, gl++)), (tl += b(U, z, M, K, X)));
    else if (K === "object") {
      if (typeof o.then == "function") return b(gt(o), z, M, U, X);
      throw (
        (z = String(o)),
        Error(
          "Objects are not valid as a React child (found: " +
            (z === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : z) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return tl;
  }
  function _(o, z, M) {
    if (o == null) return o;
    var U = [],
      X = 0;
    return (
      b(o, U, "", "", function (K) {
        return z.call(M, K, X++);
      }),
      U
    );
  }
  function Y(o) {
    if (o._status === -1) {
      var z = o._result;
      ((z = z()),
        z.then(
          function (M) {
            (o._status === 0 || o._status === -1) && ((o._status = 1), (o._result = M));
          },
          function (M) {
            (o._status === 0 || o._status === -1) && ((o._status = 2), (o._result = M));
          },
        ),
        o._status === -1 && ((o._status = 0), (o._result = z)));
    }
    if (o._status === 1) return o._result.default;
    throw o._result;
  }
  var ul =
      typeof reportError == "function"
        ? reportError
        : function (o) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
              var z = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof o == "object" && o !== null && typeof o.message == "string"
                    ? String(o.message)
                    : String(o),
                error: o,
              });
              if (!window.dispatchEvent(z)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
              process.emit("uncaughtException", o);
              return;
            }
            console.error(o);
          },
    fl = {
      map: _,
      forEach: function (o, z, M) {
        _(
          o,
          function () {
            z.apply(this, arguments);
          },
          M,
        );
      },
      count: function (o) {
        var z = 0;
        return (
          _(o, function () {
            z++;
          }),
          z
        );
      },
      toArray: function (o) {
        return (
          _(o, function (z) {
            return z;
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
    (G.Activity = B),
    (G.Children = fl),
    (G.Component = kl),
    (G.Fragment = O),
    (G.Profiler = R),
    (G.PureComponent = Rl),
    (G.StrictMode = d),
    (G.Suspense = x),
    (G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = $),
    (G.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (o) {
        return $.H.useMemoCache(o);
      },
    }),
    (G.cache = function (o) {
      return function () {
        return o.apply(null, arguments);
      };
    }),
    (G.cacheSignal = function () {
      return null;
    }),
    (G.cloneElement = function (o, z, M) {
      if (o == null) throw Error("The argument must be a React element, but you passed " + o + ".");
      var U = Cl({}, o.props),
        X = o.key;
      if (z != null)
        for (K in (z.key !== void 0 && (X = "" + z.key), z))
          !Gl.call(z, K) ||
            K === "key" ||
            K === "__self" ||
            K === "__source" ||
            (K === "ref" && z.ref === void 0) ||
            (U[K] = z[K]);
      var K = arguments.length - 2;
      if (K === 1) U.children = M;
      else if (1 < K) {
        for (var tl = Array(K), ql = 0; ql < K; ql++) tl[ql] = arguments[ql + 2];
        U.children = tl;
      }
      return zt(o.type, X, U);
    }),
    (G.createContext = function (o) {
      return (
        (o = {
          $$typeof: Q,
          _currentValue: o,
          _currentValue2: o,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (o.Provider = o),
        (o.Consumer = { $$typeof: j, _context: o }),
        o
      );
    }),
    (G.createElement = function (o, z, M) {
      var U,
        X = {},
        K = null;
      if (z != null)
        for (U in (z.key !== void 0 && (K = "" + z.key), z))
          Gl.call(z, U) && U !== "key" && U !== "__self" && U !== "__source" && (X[U] = z[U]);
      var tl = arguments.length - 2;
      if (tl === 1) X.children = M;
      else if (1 < tl) {
        for (var ql = Array(tl), gl = 0; gl < tl; gl++) ql[gl] = arguments[gl + 2];
        X.children = ql;
      }
      if (o && o.defaultProps)
        for (U in ((tl = o.defaultProps), tl)) X[U] === void 0 && (X[U] = tl[U]);
      return zt(o, K, X);
    }),
    (G.createRef = function () {
      return { current: null };
    }),
    (G.forwardRef = function (o) {
      return { $$typeof: hl, render: o };
    }),
    (G.isValidElement = Et),
    (G.lazy = function (o) {
      return { $$typeof: V, _payload: { _status: -1, _result: o }, _init: Y };
    }),
    (G.memo = function (o, z) {
      return { $$typeof: E, type: o, compare: z === void 0 ? null : z };
    }),
    (G.startTransition = function (o) {
      var z = $.T,
        M = {};
      $.T = M;
      try {
        var U = o(),
          X = $.S;
        (X !== null && X(M, U),
          typeof U == "object" && U !== null && typeof U.then == "function" && U.then(Yl, ul));
      } catch (K) {
        ul(K);
      } finally {
        (z !== null && M.types !== null && (z.types = M.types), ($.T = z));
      }
    }),
    (G.unstable_useCacheRefresh = function () {
      return $.H.useCacheRefresh();
    }),
    (G.use = function (o) {
      return $.H.use(o);
    }),
    (G.useActionState = function (o, z, M) {
      return $.H.useActionState(o, z, M);
    }),
    (G.useCallback = function (o, z) {
      return $.H.useCallback(o, z);
    }),
    (G.useContext = function (o) {
      return $.H.useContext(o);
    }),
    (G.useDebugValue = function () {}),
    (G.useDeferredValue = function (o, z) {
      return $.H.useDeferredValue(o, z);
    }),
    (G.useEffect = function (o, z) {
      return $.H.useEffect(o, z);
    }),
    (G.useEffectEvent = function (o) {
      return $.H.useEffectEvent(o);
    }),
    (G.useId = function () {
      return $.H.useId();
    }),
    (G.useImperativeHandle = function (o, z, M) {
      return $.H.useImperativeHandle(o, z, M);
    }),
    (G.useInsertionEffect = function (o, z) {
      return $.H.useInsertionEffect(o, z);
    }),
    (G.useLayoutEffect = function (o, z) {
      return $.H.useLayoutEffect(o, z);
    }),
    (G.useMemo = function (o, z) {
      return $.H.useMemo(o, z);
    }),
    (G.useOptimistic = function (o, z) {
      return $.H.useOptimistic(o, z);
    }),
    (G.useReducer = function (o, z, M) {
      return $.H.useReducer(o, z, M);
    }),
    (G.useRef = function (o) {
      return $.H.useRef(o);
    }),
    (G.useState = function (o) {
      return $.H.useState(o);
    }),
    (G.useSyncExternalStore = function (o, z, M) {
      return $.H.useSyncExternalStore(o, z, M);
    }),
    (G.useTransition = function () {
      return $.H.useTransition();
    }),
    (G.version = "19.2.5"),
    G
  );
}
var gd;
function df() {
  return (gd || ((gd = 1), (nf.exports = Fh())), nf.exports);
}
var Dt = df(),
  cf = { exports: {} },
  pu = {},
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
function Ih() {
  return (
    Sd ||
      ((Sd = 1),
      (function (h) {
        function A(b, _) {
          var Y = b.length;
          b.push(_);
          l: for (; 0 < Y; ) {
            var ul = (Y - 1) >>> 1,
              fl = b[ul];
            if (0 < R(fl, _)) ((b[ul] = _), (b[Y] = fl), (Y = ul));
            else break l;
          }
        }
        function O(b) {
          return b.length === 0 ? null : b[0];
        }
        function d(b) {
          if (b.length === 0) return null;
          var _ = b[0],
            Y = b.pop();
          if (Y !== _) {
            b[0] = Y;
            l: for (var ul = 0, fl = b.length, o = fl >>> 1; ul < o; ) {
              var z = 2 * (ul + 1) - 1,
                M = b[z],
                U = z + 1,
                X = b[U];
              if (0 > R(M, Y))
                U < fl && 0 > R(X, M)
                  ? ((b[ul] = X), (b[U] = Y), (ul = U))
                  : ((b[ul] = M), (b[z] = Y), (ul = z));
              else if (U < fl && 0 > R(X, Y)) ((b[ul] = X), (b[U] = Y), (ul = U));
              else break l;
            }
          }
          return _;
        }
        function R(b, _) {
          var Y = b.sortIndex - _.sortIndex;
          return Y !== 0 ? Y : b.id - _.id;
        }
        if (
          ((h.unstable_now = void 0),
          typeof performance == "object" && typeof performance.now == "function")
        ) {
          var j = performance;
          h.unstable_now = function () {
            return j.now();
          };
        } else {
          var Q = Date,
            hl = Q.now();
          h.unstable_now = function () {
            return Q.now() - hl;
          };
        }
        var x = [],
          E = [],
          V = 1,
          B = null,
          rl = 3,
          Wl = !1,
          jl = !1,
          Cl = !1,
          Ut = !1,
          kl = typeof setTimeout == "function" ? setTimeout : null,
          kt = typeof clearTimeout == "function" ? clearTimeout : null,
          Rl = typeof setImmediate < "u" ? setImmediate : null;
        function it(b) {
          for (var _ = O(E); _ !== null; ) {
            if (_.callback === null) d(E);
            else if (_.startTime <= b) (d(E), (_.sortIndex = _.expirationTime), A(x, _));
            else break;
            _ = O(E);
          }
        }
        function Tt(b) {
          if (((Cl = !1), it(b), !jl))
            if (O(x) !== null) ((jl = !0), Yl || ((Yl = !0), Ql()));
            else {
              var _ = O(E);
              _ !== null && gt(Tt, _.startTime - b);
            }
        }
        var Yl = !1,
          $ = -1,
          Gl = 5,
          zt = -1;
        function Xa() {
          return Ut ? !0 : !(h.unstable_now() - zt < Gl);
        }
        function Et() {
          if (((Ut = !1), Yl)) {
            var b = h.unstable_now();
            zt = b;
            var _ = !0;
            try {
              l: {
                ((jl = !1), Cl && ((Cl = !1), kt($), ($ = -1)), (Wl = !0));
                var Y = rl;
                try {
                  t: {
                    for (it(b), B = O(x); B !== null && !(B.expirationTime > b && Xa()); ) {
                      var ul = B.callback;
                      if (typeof ul == "function") {
                        ((B.callback = null), (rl = B.priorityLevel));
                        var fl = ul(B.expirationTime <= b);
                        if (((b = h.unstable_now()), typeof fl == "function")) {
                          ((B.callback = fl), it(b), (_ = !0));
                          break t;
                        }
                        (B === O(x) && d(x), it(b));
                      } else d(x);
                      B = O(x);
                    }
                    if (B !== null) _ = !0;
                    else {
                      var o = O(E);
                      (o !== null && gt(Tt, o.startTime - b), (_ = !1));
                    }
                  }
                  break l;
                } finally {
                  ((B = null), (rl = Y), (Wl = !1));
                }
                _ = void 0;
              }
            } finally {
              _ ? Ql() : (Yl = !1);
            }
          }
        }
        var Ql;
        if (typeof Rl == "function")
          Ql = function () {
            Rl(Et);
          };
        else if (typeof MessageChannel < "u") {
          var Ta = new MessageChannel(),
            Nt = Ta.port2;
          ((Ta.port1.onmessage = Et),
            (Ql = function () {
              Nt.postMessage(null);
            }));
        } else
          Ql = function () {
            kl(Et, 0);
          };
        function gt(b, _) {
          $ = kl(function () {
            b(h.unstable_now());
          }, _);
        }
        ((h.unstable_IdlePriority = 5),
          (h.unstable_ImmediatePriority = 1),
          (h.unstable_LowPriority = 4),
          (h.unstable_NormalPriority = 3),
          (h.unstable_Profiling = null),
          (h.unstable_UserBlockingPriority = 2),
          (h.unstable_cancelCallback = function (b) {
            b.callback = null;
          }),
          (h.unstable_forceFrameRate = function (b) {
            0 > b || 125 < b
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Gl = 0 < b ? Math.floor(1e3 / b) : 5);
          }),
          (h.unstable_getCurrentPriorityLevel = function () {
            return rl;
          }),
          (h.unstable_next = function (b) {
            switch (rl) {
              case 1:
              case 2:
              case 3:
                var _ = 3;
                break;
              default:
                _ = rl;
            }
            var Y = rl;
            rl = _;
            try {
              return b();
            } finally {
              rl = Y;
            }
          }),
          (h.unstable_requestPaint = function () {
            Ut = !0;
          }),
          (h.unstable_runWithPriority = function (b, _) {
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
            var Y = rl;
            rl = b;
            try {
              return _();
            } finally {
              rl = Y;
            }
          }),
          (h.unstable_scheduleCallback = function (b, _, Y) {
            var ul = h.unstable_now();
            switch (
              (typeof Y == "object" && Y !== null
                ? ((Y = Y.delay), (Y = typeof Y == "number" && 0 < Y ? ul + Y : ul))
                : (Y = ul),
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
              (fl = Y + fl),
              (b = {
                id: V++,
                callback: _,
                priorityLevel: b,
                startTime: Y,
                expirationTime: fl,
                sortIndex: -1,
              }),
              Y > ul
                ? ((b.sortIndex = Y),
                  A(E, b),
                  O(x) === null &&
                    b === O(E) &&
                    (Cl ? (kt($), ($ = -1)) : (Cl = !0), gt(Tt, Y - ul)))
                : ((b.sortIndex = fl), A(x, b), jl || Wl || ((jl = !0), Yl || ((Yl = !0), Ql()))),
              b
            );
          }),
          (h.unstable_shouldYield = Xa),
          (h.unstable_wrapCallback = function (b) {
            var _ = rl;
            return function () {
              var Y = rl;
              rl = _;
              try {
                return b.apply(this, arguments);
              } finally {
                rl = Y;
              }
            };
          }));
      })(sf)),
    sf
  );
}
var bd;
function Ph() {
  return (bd || ((bd = 1), (ff.exports = Ih())), ff.exports);
}
var of = { exports: {} },
  xl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pd;
function lr() {
  if (pd) return xl;
  pd = 1;
  var h = df();
  function A(x) {
    var E = "https://react.dev/errors/" + x;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var V = 2; V < arguments.length; V++) E += "&args[]=" + encodeURIComponent(arguments[V]);
    }
    return (
      "Minified React error #" +
      x +
      "; visit " +
      E +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function O() {}
  var d = {
      d: {
        f: O,
        r: function () {
          throw Error(A(522));
        },
        D: O,
        C: O,
        L: O,
        m: O,
        X: O,
        S: O,
        M: O,
      },
      p: 0,
      findDOMNode: null,
    },
    R = Symbol.for("react.portal");
  function j(x, E, V) {
    var B = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: R,
      key: B == null ? null : "" + B,
      children: x,
      containerInfo: E,
      implementation: V,
    };
  }
  var Q = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function hl(x, E) {
    if (x === "font") return "";
    if (typeof E == "string") return E === "use-credentials" ? E : "";
  }
  return (
    (xl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = d),
    (xl.createPortal = function (x, E) {
      var V = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!E || (E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11)) throw Error(A(299));
      return j(x, E, null, V);
    }),
    (xl.flushSync = function (x) {
      var E = Q.T,
        V = d.p;
      try {
        if (((Q.T = null), (d.p = 2), x)) return x();
      } finally {
        ((Q.T = E), (d.p = V), d.d.f());
      }
    }),
    (xl.preconnect = function (x, E) {
      typeof x == "string" &&
        (E
          ? ((E = E.crossOrigin),
            (E = typeof E == "string" ? (E === "use-credentials" ? E : "") : void 0))
          : (E = null),
        d.d.C(x, E));
    }),
    (xl.prefetchDNS = function (x) {
      typeof x == "string" && d.d.D(x);
    }),
    (xl.preinit = function (x, E) {
      if (typeof x == "string" && E && typeof E.as == "string") {
        var V = E.as,
          B = hl(V, E.crossOrigin),
          rl = typeof E.integrity == "string" ? E.integrity : void 0,
          Wl = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
        V === "style"
          ? d.d.S(x, typeof E.precedence == "string" ? E.precedence : void 0, {
              crossOrigin: B,
              integrity: rl,
              fetchPriority: Wl,
            })
          : V === "script" &&
            d.d.X(x, {
              crossOrigin: B,
              integrity: rl,
              fetchPriority: Wl,
              nonce: typeof E.nonce == "string" ? E.nonce : void 0,
            });
      }
    }),
    (xl.preinitModule = function (x, E) {
      if (typeof x == "string")
        if (typeof E == "object" && E !== null) {
          if (E.as == null || E.as === "script") {
            var V = hl(E.as, E.crossOrigin);
            d.d.M(x, {
              crossOrigin: V,
              integrity: typeof E.integrity == "string" ? E.integrity : void 0,
              nonce: typeof E.nonce == "string" ? E.nonce : void 0,
            });
          }
        } else E == null && d.d.M(x);
    }),
    (xl.preload = function (x, E) {
      if (typeof x == "string" && typeof E == "object" && E !== null && typeof E.as == "string") {
        var V = E.as,
          B = hl(V, E.crossOrigin);
        d.d.L(x, V, {
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
    (xl.preloadModule = function (x, E) {
      if (typeof x == "string")
        if (E) {
          var V = hl(E.as, E.crossOrigin);
          d.d.m(x, {
            as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
            crossOrigin: V,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
          });
        } else d.d.m(x);
    }),
    (xl.requestFormReset = function (x) {
      d.d.r(x);
    }),
    (xl.unstable_batchedUpdates = function (x, E) {
      return x(E);
    }),
    (xl.useFormState = function (x, E, V) {
      return Q.H.useFormState(x, E, V);
    }),
    (xl.useFormStatus = function () {
      return Q.H.useHostTransitionStatus();
    }),
    (xl.version = "19.2.5"),
    xl
  );
}
var Td;
function tr() {
  if (Td) return of.exports;
  Td = 1;
  function h() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h);
      } catch (A) {
        console.error(A);
      }
  }
  return (h(), (of.exports = lr()), of.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zd;
function ar() {
  if (zd) return pu;
  zd = 1;
  var h = Ph(),
    A = df(),
    O = tr();
  function d(l) {
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
  function R(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function j(l) {
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
  function Q(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if ((t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function hl(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if ((t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function x(l) {
    if (j(l) !== l) throw Error(d(188));
  }
  function E(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = j(l)), t === null)) throw Error(d(188));
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
          if (n === a) return (x(u), l);
          if (n === e) return (x(u), t);
          n = n.sibling;
        }
        throw Error(d(188));
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
          if (!i) throw Error(d(189));
        }
      }
      if (a.alternate !== e) throw Error(d(190));
    }
    if (a.tag !== 3) throw Error(d(188));
    return a.stateNode.current === a ? l : t;
  }
  function V(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = V(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var B = Object.assign,
    rl = Symbol.for("react.element"),
    Wl = Symbol.for("react.transitional.element"),
    jl = Symbol.for("react.portal"),
    Cl = Symbol.for("react.fragment"),
    Ut = Symbol.for("react.strict_mode"),
    kl = Symbol.for("react.profiler"),
    kt = Symbol.for("react.consumer"),
    Rl = Symbol.for("react.context"),
    it = Symbol.for("react.forward_ref"),
    Tt = Symbol.for("react.suspense"),
    Yl = Symbol.for("react.suspense_list"),
    $ = Symbol.for("react.memo"),
    Gl = Symbol.for("react.lazy"),
    zt = Symbol.for("react.activity"),
    Xa = Symbol.for("react.memo_cache_sentinel"),
    Et = Symbol.iterator;
  function Ql(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (Et && l[Et]) || l["@@iterator"]), typeof l == "function" ? l : null);
  }
  var Ta = Symbol.for("react.client.reference");
  function Nt(l) {
    if (l == null) return null;
    if (typeof l == "function") return l.$$typeof === Ta ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Cl:
        return "Fragment";
      case kl:
        return "Profiler";
      case Ut:
        return "StrictMode";
      case Tt:
        return "Suspense";
      case Yl:
        return "SuspenseList";
      case zt:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case jl:
          return "Portal";
        case Rl:
          return l.displayName || "Context";
        case kt:
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
        case $:
          return ((t = l.displayName || null), t !== null ? t : Nt(l.type) || "Memo");
        case Gl:
          ((t = l._payload), (l = l._init));
          try {
            return Nt(l(t));
          } catch {}
      }
    return null;
  }
  var gt = Array.isArray,
    b = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    _ = O.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Y = { pending: !1, data: null, method: null, action: null },
    ul = [],
    fl = -1;
  function o(l) {
    return { current: l };
  }
  function z(l) {
    0 > fl || ((l.current = ul[fl]), (ul[fl] = null), fl--);
  }
  function M(l, t) {
    (fl++, (ul[fl] = l.current), (l.current = t));
  }
  var U = o(null),
    X = o(null),
    K = o(null),
    tl = o(null);
  function ql(l, t) {
    switch ((M(K, t), M(X, l), M(U, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? jo(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI))) ((t = jo(t)), (l = Yo(t, l)));
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
    (z(U), M(U, l));
  }
  function gl() {
    (z(U), z(X), z(K));
  }
  function Me(l) {
    l.memoizedState !== null && M(tl, l);
    var t = U.current,
      a = Yo(t, l.type);
    t !== a && (M(X, l), M(U, a));
  }
  function Tu(l) {
    (X.current === l && (z(U), z(X)), tl.current === l && (z(tl), (yu._currentValue = Y)));
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
              var T = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(T.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(T, []);
                } catch (g) {
                  var v = g;
                }
                Reflect.construct(l, [], T);
              } else {
                try {
                  T.call();
                } catch (g) {
                  v = g;
                }
                l.call(T.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (g) {
                v = g;
              }
              (T = l()) && typeof T.catch == "function" && T.catch(function () {});
            }
          } catch (g) {
            if (g && v && typeof g.stack == "string") return [g.stack, v.stack];
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
          y = c.split(`
`);
        for (u = e = 0; e < f.length && !f[e].includes("DetermineComponentFrameRoot"); ) e++;
        for (; u < y.length && !y[u].includes("DetermineComponentFrameRoot"); ) u++;
        if (e === f.length || u === y.length)
          for (e = f.length - 1, u = y.length - 1; 1 <= e && 0 <= u && f[e] !== y[u]; ) u--;
        for (; 1 <= e && 0 <= u; e--, u--)
          if (f[e] !== y[u]) {
            if (e !== 1 || u !== 1)
              do
                if ((e--, u--, 0 > u || f[e] !== y[u])) {
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
  function Md(l, t) {
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
  function rf(l) {
    try {
      var t = "",
        a = null;
      do ((t += Md(l, a)), (a = l), (l = l.return));
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
  var Ln = Object.prototype.hasOwnProperty,
    Vn = h.unstable_scheduleCallback,
    Kn = h.unstable_cancelCallback,
    Od = h.unstable_shouldYield,
    Dd = h.unstable_requestPaint,
    $l = h.unstable_now,
    Ud = h.unstable_getCurrentPriorityLevel,
    mf = h.unstable_ImmediatePriority,
    yf = h.unstable_UserBlockingPriority,
    zu = h.unstable_NormalPriority,
    Nd = h.unstable_LowPriority,
    vf = h.unstable_IdlePriority,
    Hd = h.log,
    Rd = h.unstable_setDisableYieldValue,
    Oe = null,
    Fl = null;
  function $t(l) {
    if ((typeof Hd == "function" && Rd(l), Fl && typeof Fl.setStrictMode == "function"))
      try {
        Fl.setStrictMode(Oe, l);
      } catch {}
  }
  var Il = Math.clz32 ? Math.clz32 : qd,
    xd = Math.log,
    Cd = Math.LN2;
  function qd(l) {
    return ((l >>>= 0), l === 0 ? 32 : (31 - ((xd(l) / Cd) | 0)) | 0);
  }
  var Eu = 256,
    Au = 262144,
    _u = 4194304;
  function Ea(l) {
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
            ? (u = Ea(e))
            : ((i &= c), i !== 0 ? (u = Ea(i)) : a || ((a = c & ~l), a !== 0 && (u = Ea(a)))))
        : ((c = e & ~n),
          c !== 0
            ? (u = Ea(c))
            : i !== 0
              ? (u = Ea(i))
              : a || ((a = e & ~l), a !== 0 && (u = Ea(a)))),
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
  function De(l, t) {
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
  function Ue(l, t) {
    ((l.pendingLanes |= t),
      t !== 268435456 && ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0)));
  }
  function jd(l, t, a, e, u, n) {
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
      y = l.hiddenUpdates;
    for (a = i & ~a; 0 < a; ) {
      var S = 31 - Il(a),
        T = 1 << S;
      ((c[S] = 0), (f[S] = -1));
      var v = y[S];
      if (v !== null)
        for (y[S] = null, S = 0; S < v.length; S++) {
          var g = v[S];
          g !== null && (g.lane &= -536870913);
        }
      a &= ~T;
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
  function Tf() {
    var l = _.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : cd(l.type));
  }
  function zf(l, t) {
    var a = _.p;
    try {
      return ((_.p = l), t());
    } finally {
      _.p = a;
    }
  }
  var Ft = Math.random().toString(36).slice(2),
    Ol = "__reactFiber$" + Ft,
    Xl = "__reactProps$" + Ft,
    Za = "__reactContainer$" + Ft,
    kn = "__reactEvents$" + Ft,
    Yd = "__reactListeners$" + Ft,
    Gd = "__reactHandles$" + Ft,
    Ef = "__reactResources$" + Ft,
    Ne = "__reactMarker$" + Ft;
  function $n(l) {
    (delete l[Ol], delete l[Xl], delete l[kn], delete l[Yd], delete l[Gd]);
  }
  function La(l) {
    var t = l[Ol];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if ((t = a[Za] || a[Ol])) {
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
    if ((l = l[Ol] || l[Za])) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return l;
    }
    return null;
  }
  function He(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(d(33));
  }
  function Ka(l) {
    var t = l[Ef];
    return (t || (t = l[Ef] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
  }
  function _l(l) {
    l[Ne] = !0;
  }
  var Af = new Set(),
    _f = {};
  function Aa(l, t) {
    (Ja(l, t), Ja(l + "Capture", t));
  }
  function Ja(l, t) {
    for (_f[l] = t, l = 0; l < t.length; l++) Af.add(t[l]);
  }
  var Qd = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Mf = {},
    Of = {};
  function Xd(l) {
    return Ln.call(Of, l)
      ? !0
      : Ln.call(Mf, l)
        ? !1
        : Qd.test(l)
          ? (Of[l] = !0)
          : ((Mf[l] = !0), !1);
  }
  function Ou(l, t, a) {
    if (Xd(t))
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
  function Ht(l, t, a, e) {
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
  function Zd(l, t, a) {
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
      l._valueTracker = Zd(l, t, "" + l[t]);
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
  var Ld = /[\n"\\]/g;
  function ft(l) {
    return l.replace(Ld, function (t) {
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
  function wa(l, t, a, e) {
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
        if (a != null) throw Error(d(92));
        if (gt(e)) {
          if (1 < e.length) throw Error(d(93));
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
  function Wa(l, t) {
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
  function xf(l, t, a) {
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
  function Cf(l, t, a) {
    if (t != null && typeof t != "object") throw Error(d(62));
    if (((l = l.style), a != null)) {
      for (var e in a)
        !a.hasOwnProperty(e) ||
          (t != null && t.hasOwnProperty(e)) ||
          (e.indexOf("--") === 0
            ? l.setProperty(e, "")
            : e === "float"
              ? (l.cssFloat = "")
              : (l[e] = ""));
      for (var u in t) ((e = t[u]), t.hasOwnProperty(u) && a[u] !== e && xf(l, u, e));
    } else for (var n in t) t.hasOwnProperty(n) && xf(l, n, t[n]);
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
  var Kd = new Map([
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
    Jd =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Nu(l) {
    return Jd.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  function Rt() {}
  var ti = null;
  function ai(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var ka = null,
    $a = null;
  function qf(l) {
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
                if (!u) throw Error(d(90));
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
          ((t = a.value), t != null && wa(l, !!a.multiple, t, !1));
      }
    }
  }
  var ei = !1;
  function Bf(l, t, a) {
    if (ei) return l(t, a);
    ei = !0;
    try {
      var e = l(t);
      return e;
    } finally {
      if (
        ((ei = !1),
        (ka !== null || $a !== null) &&
          (Sn(), ka && ((t = ka), (l = $a), ($a = ka = null), qf(t), l)))
      )
        for (t = 0; t < l.length; t++) qf(l[t]);
    }
  }
  function Re(l, t) {
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
    if (a && typeof a != "function") throw Error(d(231, t, typeof a));
    return a;
  }
  var xt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    ui = !1;
  if (xt)
    try {
      var xe = {};
      (Object.defineProperty(xe, "passive", {
        get: function () {
          ui = !0;
        },
      }),
        window.addEventListener("test", xe, xe),
        window.removeEventListener("test", xe, xe));
    } catch {
      ui = !1;
    }
  var It = null,
    ni = null,
    Hu = null;
  function jf() {
    if (Hu) return Hu;
    var l,
      t = ni,
      a = t.length,
      e,
      u = "value" in It ? It.value : It.textContent,
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
  function xu() {
    return !0;
  }
  function Yf() {
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
          ? xu
          : Yf),
        (this.isPropagationStopped = Yf),
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
            (this.isDefaultPrevented = xu));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = xu));
        },
        persist: function () {},
        isPersistent: xu,
      }),
      t
    );
  }
  var _a = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Cu = Zl(_a),
    Ce = B({}, _a, { view: 0, detail: 0 }),
    wd = Zl(Ce),
    ii,
    ci,
    qe,
    qu = B({}, Ce, {
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
    Gf = Zl(qu),
    Wd = B({}, qu, { dataTransfer: 0 }),
    kd = Zl(Wd),
    $d = B({}, Ce, { relatedTarget: 0 }),
    fi = Zl($d),
    Fd = B({}, _a, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Id = Zl(Fd),
    Pd = B({}, _a, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    l2 = Zl(Pd),
    t2 = B({}, _a, { data: 0 }),
    Qf = Zl(t2),
    a2 = {
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
    e2 = {
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
    u2 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function n2(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = u2[l]) ? !!t[l] : !1;
  }
  function si() {
    return n2;
  }
  var i2 = B({}, Ce, {
      key: function (l) {
        if (l.key) {
          var t = a2[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = Ru(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
            ? e2[l.keyCode] || "Unidentified"
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
    c2 = Zl(i2),
    f2 = B({}, qu, {
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
    Xf = Zl(f2),
    s2 = B({}, Ce, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: si,
    }),
    o2 = Zl(s2),
    d2 = B({}, _a, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    h2 = Zl(d2),
    r2 = B({}, qu, {
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
    m2 = Zl(r2),
    y2 = B({}, _a, { newState: 0, oldState: 0 }),
    v2 = Zl(y2),
    g2 = [9, 13, 27, 32],
    oi = xt && "CompositionEvent" in window,
    Be = null;
  xt && "documentMode" in document && (Be = document.documentMode);
  var S2 = xt && "TextEvent" in window && !Be,
    Zf = xt && (!oi || (Be && 8 < Be && 11 >= Be)),
    Lf = " ",
    Vf = !1;
  function Kf(l, t) {
    switch (l) {
      case "keyup":
        return g2.indexOf(t.keyCode) !== -1;
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
  var Fa = !1;
  function b2(l, t) {
    switch (l) {
      case "compositionend":
        return Jf(t);
      case "keypress":
        return t.which !== 32 ? null : ((Vf = !0), Lf);
      case "textInput":
        return ((l = t.data), l === Lf && Vf ? null : l);
      default:
        return null;
    }
  }
  function p2(l, t) {
    if (Fa)
      return l === "compositionend" || (!oi && Kf(l, t))
        ? ((l = jf()), (Hu = ni = It = null), (Fa = !1), l)
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
  var T2 = {
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
    return t === "input" ? !!T2[l.type] : t === "textarea";
  }
  function Wf(l, t, a, e) {
    (ka ? ($a ? $a.push(e) : ($a = [e])) : (ka = e),
      (t = _n(t, "onChange")),
      0 < t.length &&
        ((a = new Cu("onChange", "change", null, a, e)), l.push({ event: a, listeners: t })));
  }
  var je = null,
    Ye = null;
  function z2(l) {
    Ho(l, 0);
  }
  function Bu(l) {
    var t = He(l);
    if (Uf(t)) return l;
  }
  function kf(l, t) {
    if (l === "change") return t;
  }
  var $f = !1;
  if (xt) {
    var di;
    if (xt) {
      var hi = "oninput" in document;
      if (!hi) {
        var Ff = document.createElement("div");
        (Ff.setAttribute("oninput", "return;"), (hi = typeof Ff.oninput == "function"));
      }
      di = hi;
    } else di = !1;
    $f = di && (!document.documentMode || 9 < document.documentMode);
  }
  function If() {
    je && (je.detachEvent("onpropertychange", Pf), (Ye = je = null));
  }
  function Pf(l) {
    if (l.propertyName === "value" && Bu(Ye)) {
      var t = [];
      (Wf(t, Ye, l, ai(l)), Bf(z2, t));
    }
  }
  function E2(l, t, a) {
    l === "focusin"
      ? (If(), (je = t), (Ye = a), je.attachEvent("onpropertychange", Pf))
      : l === "focusout" && If();
  }
  function A2(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown") return Bu(Ye);
  }
  function _2(l, t) {
    if (l === "click") return Bu(t);
  }
  function M2(l, t) {
    if (l === "input" || l === "change") return Bu(t);
  }
  function O2(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var Pl = typeof Object.is == "function" ? Object.is : O2;
  function Ge(l, t) {
    if (Pl(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null) return !1;
    var a = Object.keys(l),
      e = Object.keys(t);
    if (a.length !== e.length) return !1;
    for (e = 0; e < a.length; e++) {
      var u = a[e];
      if (!Ln.call(t, u) || !Pl(l[u], t[u])) return !1;
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
  function ri(l) {
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
  var D2 = xt && "documentMode" in document && 11 >= document.documentMode,
    Ia = null,
    mi = null,
    Qe = null,
    yi = !1;
  function us(l, t, a) {
    var e = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    yi ||
      Ia == null ||
      Ia !== Uu(e) ||
      ((e = Ia),
      "selectionStart" in e && ri(e)
        ? (e = { start: e.selectionStart, end: e.selectionEnd })
        : ((e = ((e.ownerDocument && e.ownerDocument.defaultView) || window).getSelection()),
          (e = {
            anchorNode: e.anchorNode,
            anchorOffset: e.anchorOffset,
            focusNode: e.focusNode,
            focusOffset: e.focusOffset,
          })),
      (Qe && Ge(Qe, e)) ||
        ((Qe = e),
        (e = _n(mi, "onSelect")),
        0 < e.length &&
          ((t = new Cu("onSelect", "select", null, t, a)),
          l.push({ event: t, listeners: e }),
          (t.target = Ia))));
  }
  function Ma(l, t) {
    var a = {};
    return (
      (a[l.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + l] = "webkit" + t),
      (a["Moz" + l] = "moz" + t),
      a
    );
  }
  var Pa = {
      animationend: Ma("Animation", "AnimationEnd"),
      animationiteration: Ma("Animation", "AnimationIteration"),
      animationstart: Ma("Animation", "AnimationStart"),
      transitionrun: Ma("Transition", "TransitionRun"),
      transitionstart: Ma("Transition", "TransitionStart"),
      transitioncancel: Ma("Transition", "TransitionCancel"),
      transitionend: Ma("Transition", "TransitionEnd"),
    },
    vi = {},
    ns = {};
  xt &&
    ((ns = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Pa.animationend.animation,
      delete Pa.animationiteration.animation,
      delete Pa.animationstart.animation),
    "TransitionEvent" in window || delete Pa.transitionend.transition);
  function Oa(l) {
    if (vi[l]) return vi[l];
    if (!Pa[l]) return l;
    var t = Pa[l],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in ns) return (vi[l] = t[a]);
    return l;
  }
  var is = Oa("animationend"),
    cs = Oa("animationiteration"),
    fs = Oa("animationstart"),
    U2 = Oa("transitionrun"),
    N2 = Oa("transitionstart"),
    H2 = Oa("transitioncancel"),
    ss = Oa("transitionend"),
    os = new Map(),
    gi =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  gi.push("scrollEnd");
  function St(l, t) {
    (os.set(l, t), Aa(t, [l]));
  }
  var ju =
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
    le = 0,
    Si = 0;
  function Yu() {
    for (var l = le, t = (Si = le = 0); t < l; ) {
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
    ((st[le++] = l),
      (st[le++] = t),
      (st[le++] = a),
      (st[le++] = e),
      (Si |= e),
      (l.lanes |= e),
      (l = l.alternate),
      l !== null && (l.lanes |= e));
  }
  function bi(l, t, a, e) {
    return (Gu(l, t, a, e), Qu(l));
  }
  function Da(l, t) {
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
    if (50 < fu) throw ((fu = 0), (Dc = null), Error(d(185)));
    for (var t = l.return; t !== null; ) ((l = t), (t = l.return));
    return l.tag === 3 ? l.stateNode : null;
  }
  var te = {};
  function R2(l, t, a, e) {
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
    return new R2(l, t, a, e);
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
      i = jh(l, a, U.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case zt:
          return ((l = lt(31, a, t, u)), (l.elementType = zt), (l.lanes = n), l);
        case Cl:
          return Ua(a.children, u, n, t);
        case Ut:
          ((i = 8), (u |= 24));
          break;
        case kl:
          return ((l = lt(12, a, t, u | 2)), (l.elementType = kl), (l.lanes = n), l);
        case Tt:
          return ((l = lt(13, a, t, u)), (l.elementType = Tt), (l.lanes = n), l);
        case Yl:
          return ((l = lt(19, a, t, u)), (l.elementType = Yl), (l.lanes = n), l);
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Rl:
                i = 10;
                break l;
              case kt:
                i = 9;
                break l;
              case it:
                i = 11;
                break l;
              case $:
                i = 14;
                break l;
              case Gl:
                ((i = 16), (e = null));
                break l;
            }
          ((i = 29), (a = Error(d(130, l === null ? "null" : typeof l, ""))), (e = null));
      }
    return ((t = lt(i, a, t, u)), (t.elementType = l), (t.type = e), (t.lanes = n), t);
  }
  function Ua(l, t, a, e) {
    return ((l = lt(7, l, e, t)), (l.lanes = a), l);
  }
  function Ti(l, t, a) {
    return ((l = lt(6, l, null, t)), (l.lanes = a), l);
  }
  function rs(l) {
    var t = lt(18, null, null, 0);
    return ((t.stateNode = l), t);
  }
  function zi(l, t, a) {
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
      return a !== void 0 ? a : ((t = { value: l, source: t, stack: rf(t) }), ms.set(l, t), t);
    }
    return { value: l, source: t, stack: rf(t) };
  }
  var ae = [],
    ee = 0,
    Zu = null,
    Xe = 0,
    dt = [],
    ht = 0,
    Pt = null,
    At = 1,
    _t = "";
  function qt(l, t) {
    ((ae[ee++] = Xe), (ae[ee++] = Zu), (Zu = l), (Xe = t));
  }
  function ys(l, t, a) {
    ((dt[ht++] = At), (dt[ht++] = _t), (dt[ht++] = Pt), (Pt = l));
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
    l.return !== null && (qt(l, 1), ys(l, 1, 0));
  }
  function Ai(l) {
    for (; l === Zu; ) ((Zu = ae[--ee]), (ae[ee] = null), (Xe = ae[--ee]), (ae[ee] = null));
    for (; l === Pt; )
      ((Pt = dt[--ht]),
        (dt[ht] = null),
        (_t = dt[--ht]),
        (dt[ht] = null),
        (At = dt[--ht]),
        (dt[ht] = null));
  }
  function vs(l, t) {
    ((dt[ht++] = At), (dt[ht++] = _t), (dt[ht++] = Pt), (At = t.id), (_t = t.overflow), (Pt = l));
  }
  var Dl = null,
    ol = null,
    F = !1,
    la = null,
    rt = !1,
    _i = Error(d(519));
  function ta(l) {
    var t = Error(
      d(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""),
    );
    throw (Ze(ot(t, l)), _i);
  }
  function gs(l) {
    var t = l.stateNode,
      a = l.type,
      e = l.memoizedProps;
    switch (((t[Ol] = l), (t[Xl] = e), a)) {
      case "dialog":
        (w("cancel", t), w("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        w("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ou.length; a++) w(ou[a], t);
        break;
      case "source":
        w("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (w("error", t), w("load", t));
        break;
      case "details":
        w("toggle", t);
        break;
      case "input":
        (w("invalid", t),
          Nf(t, e.value, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name, !0));
        break;
      case "select":
        w("invalid", t);
        break;
      case "textarea":
        (w("invalid", t), Rf(t, e.value, e.defaultValue, e.children));
    }
    ((a = e.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      e.suppressHydrationWarning === !0 ||
      qo(t.textContent, a)
        ? (e.popover != null && (w("beforetoggle", t), w("toggle", t)),
          e.onScroll != null && w("scroll", t),
          e.onScrollEnd != null && w("scrollend", t),
          e.onClick != null && (t.onclick = Rt),
          (t = !0))
        : (t = !1),
      t || ta(l, !0));
  }
  function Ss(l) {
    for (Dl = l.return; Dl; )
      switch (Dl.tag) {
        case 5:
        case 31:
        case 13:
          rt = !1;
          return;
        case 27:
        case 3:
          rt = !0;
          return;
        default:
          Dl = Dl.return;
      }
  }
  function ue(l) {
    if (l !== Dl) return !1;
    if (!F) return (Ss(l), (F = !0), !1);
    var t = l.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = l.type), (a = !(a !== "form" && a !== "button") || Lc(l.type, l.memoizedProps))),
        (a = !a)),
      a && ol && ta(l),
      Ss(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l)) throw Error(d(317));
      ol = Vo(l);
    } else if (t === 31) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l)) throw Error(d(317));
      ol = Vo(l);
    } else
      t === 27
        ? ((t = ol), ya(l.type) ? ((l = Wc), (Wc = null), (ol = l)) : (ol = t))
        : (ol = Dl ? yt(l.stateNode.nextSibling) : null);
    return !0;
  }
  function Na() {
    ((ol = Dl = null), (F = !1));
  }
  function Mi() {
    var l = la;
    return (l !== null && (Jl === null ? (Jl = l) : Jl.push.apply(Jl, l), (la = null)), l);
  }
  function Ze(l) {
    la === null ? (la = [l]) : la.push(l);
  }
  var Oi = o(null),
    Ha = null,
    Bt = null;
  function aa(l, t, a) {
    (M(Oi, t._currentValue), (t._currentValue = a));
  }
  function jt(l) {
    ((l._currentValue = Oi.current), z(Oi));
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
        if (((i = u.return), i === null)) throw Error(d(341));
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
  function ne(l, t, a, e) {
    l = null;
    for (var u = t, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var i = u.alternate;
        if (i === null) throw Error(d(387));
        if (((i = i.memoizedProps), i !== null)) {
          var c = u.type;
          Pl(u.pendingProps.value, i.value) || (l !== null ? l.push(c) : (l = [c]));
        }
      } else if (u === tl.current) {
        if (((i = u.alternate), i === null)) throw Error(d(387));
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (l !== null ? l.push(yu) : (l = [yu]));
      }
      u = u.return;
    }
    (l !== null && Ui(t, l, a, e), (t.flags |= 262144));
  }
  function Lu(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Pl(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function Ra(l) {
    ((Ha = l), (Bt = null), (l = l.dependencies), l !== null && (l.firstContext = null));
  }
  function Ul(l) {
    return bs(Ha, l);
  }
  function Vu(l, t) {
    return (Ha === null && Ra(l), bs(l, t));
  }
  function bs(l, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), Bt === null)) {
      if (l === null) throw Error(d(308));
      ((Bt = t), (l.dependencies = { lanes: 0, firstContext: t }), (l.flags |= 524288));
    } else Bt = Bt.next = t;
    return a;
  }
  var x2 =
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
    C2 = h.unstable_scheduleCallback,
    q2 = h.unstable_NormalPriority,
    pl = {
      $$typeof: Rl,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Ni() {
    return { controller: new x2(), data: new Map(), refCount: 0 };
  }
  function Le(l) {
    (l.refCount--,
      l.refCount === 0 &&
        C2(q2, function () {
          l.controller.abort();
        }));
  }
  var Ve = null,
    Hi = 0,
    ie = 0,
    ce = null;
  function B2(l, t) {
    if (Ve === null) {
      var a = (Ve = []);
      ((Hi = 0),
        (ie = Cc()),
        (ce = {
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
      ce !== null && (ce.status = "fulfilled");
      var l = Ve;
      ((Ve = null), (ie = 0), (ce = null));
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function j2(l, t) {
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
  var Ts = b.S;
  b.S = function (l, t) {
    ((uo = $l()),
      typeof t == "object" && t !== null && typeof t.then == "function" && B2(l, t),
      Ts !== null && Ts(l, t));
  };
  var xa = o(null);
  function Ri() {
    var l = xa.current;
    return l !== null ? l : sl.pooledCache;
  }
  function Ku(l, t) {
    t === null ? M(xa, xa.current) : M(xa, t.pool);
  }
  function zs() {
    var l = Ri();
    return l === null ? null : { parent: pl._currentValue, pool: l };
  }
  var fe = Error(d(460)),
    xi = Error(d(474)),
    Ju = Error(d(542)),
    wu = { then: function () {} };
  function Es(l) {
    return ((l = l.status), l === "fulfilled" || l === "rejected");
  }
  function As(l, t, a) {
    switch (
      ((a = l[a]), a === void 0 ? l.push(t) : a !== t && (t.then(Rt, Rt), (t = a)), t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), Ms(l), l);
      default:
        if (typeof t.status == "string") t.then(Rt, Rt);
        else {
          if (((l = sl), l !== null && 100 < l.shellSuspendCounter)) throw Error(d(482));
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
        throw ((qa = t), fe);
    }
  }
  function Ca(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? ((qa = a), fe) : a;
    }
  }
  var qa = null;
  function _s() {
    if (qa === null) throw Error(d(459));
    var l = qa;
    return ((qa = null), l);
  }
  function Ms(l) {
    if (l === fe || l === Ju) throw Error(d(483));
  }
  var se = null,
    Ke = 0;
  function Wu(l) {
    var t = Ke;
    return ((Ke += 1), se === null && (se = []), As(se, l, t));
  }
  function Je(l, t) {
    ((t = t.props.ref), (l.ref = t !== void 0 ? t : null));
  }
  function ku(l, t) {
    throw t.$$typeof === rl
      ? Error(d(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          d(
            31,
            l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l,
          ),
        ));
  }
  function Os(l) {
    function t(r, s) {
      if (l) {
        var m = r.deletions;
        m === null ? ((r.deletions = [s]), (r.flags |= 16)) : m.push(s);
      }
    }
    function a(r, s) {
      if (!l) return null;
      for (; s !== null; ) (t(r, s), (s = s.sibling));
      return null;
    }
    function e(r) {
      for (var s = new Map(); r !== null; )
        (r.key !== null ? s.set(r.key, r) : s.set(r.index, r), (r = r.sibling));
      return s;
    }
    function u(r, s) {
      return ((r = Ct(r, s)), (r.index = 0), (r.sibling = null), r);
    }
    function n(r, s, m) {
      return (
        (r.index = m),
        l
          ? ((m = r.alternate),
            m !== null
              ? ((m = m.index), m < s ? ((r.flags |= 67108866), s) : m)
              : ((r.flags |= 67108866), s))
          : ((r.flags |= 1048576), s)
      );
    }
    function i(r) {
      return (l && r.alternate === null && (r.flags |= 67108866), r);
    }
    function c(r, s, m, p) {
      return s === null || s.tag !== 6
        ? ((s = Ti(m, r.mode, p)), (s.return = r), s)
        : ((s = u(s, m)), (s.return = r), s);
    }
    function f(r, s, m, p) {
      var C = m.type;
      return C === Cl
        ? S(r, s, m.props.children, p, m.key)
        : s !== null &&
            (s.elementType === C ||
              (typeof C == "object" && C !== null && C.$$typeof === Gl && Ca(C) === s.type))
          ? ((s = u(s, m.props)), Je(s, m), (s.return = r), s)
          : ((s = Xu(m.type, m.key, m.props, null, r.mode, p)), Je(s, m), (s.return = r), s);
    }
    function y(r, s, m, p) {
      return s === null ||
        s.tag !== 4 ||
        s.stateNode.containerInfo !== m.containerInfo ||
        s.stateNode.implementation !== m.implementation
        ? ((s = zi(m, r.mode, p)), (s.return = r), s)
        : ((s = u(s, m.children || [])), (s.return = r), s);
    }
    function S(r, s, m, p, C) {
      return s === null || s.tag !== 7
        ? ((s = Ua(m, r.mode, p, C)), (s.return = r), s)
        : ((s = u(s, m)), (s.return = r), s);
    }
    function T(r, s, m) {
      if ((typeof s == "string" && s !== "") || typeof s == "number" || typeof s == "bigint")
        return ((s = Ti("" + s, r.mode, m)), (s.return = r), s);
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case Wl:
            return ((m = Xu(s.type, s.key, s.props, null, r.mode, m)), Je(m, s), (m.return = r), m);
          case jl:
            return ((s = zi(s, r.mode, m)), (s.return = r), s);
          case Gl:
            return ((s = Ca(s)), T(r, s, m));
        }
        if (gt(s) || Ql(s)) return ((s = Ua(s, r.mode, m, null)), (s.return = r), s);
        if (typeof s.then == "function") return T(r, Wu(s), m);
        if (s.$$typeof === Rl) return T(r, Vu(r, s), m);
        ku(r, s);
      }
      return null;
    }
    function v(r, s, m, p) {
      var C = s !== null ? s.key : null;
      if ((typeof m == "string" && m !== "") || typeof m == "number" || typeof m == "bigint")
        return C !== null ? null : c(r, s, "" + m, p);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Wl:
            return m.key === C ? f(r, s, m, p) : null;
          case jl:
            return m.key === C ? y(r, s, m, p) : null;
          case Gl:
            return ((m = Ca(m)), v(r, s, m, p));
        }
        if (gt(m) || Ql(m)) return C !== null ? null : S(r, s, m, p, null);
        if (typeof m.then == "function") return v(r, s, Wu(m), p);
        if (m.$$typeof === Rl) return v(r, s, Vu(r, m), p);
        ku(r, m);
      }
      return null;
    }
    function g(r, s, m, p, C) {
      if ((typeof p == "string" && p !== "") || typeof p == "number" || typeof p == "bigint")
        return ((r = r.get(m) || null), c(s, r, "" + p, C));
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case Wl:
            return ((r = r.get(p.key === null ? m : p.key) || null), f(s, r, p, C));
          case jl:
            return ((r = r.get(p.key === null ? m : p.key) || null), y(s, r, p, C));
          case Gl:
            return ((p = Ca(p)), g(r, s, m, p, C));
        }
        if (gt(p) || Ql(p)) return ((r = r.get(m) || null), S(s, r, p, C, null));
        if (typeof p.then == "function") return g(r, s, m, Wu(p), C);
        if (p.$$typeof === Rl) return g(r, s, m, Vu(s, p), C);
        ku(s, p);
      }
      return null;
    }
    function D(r, s, m, p) {
      for (var C = null, I = null, N = s, L = (s = 0), k = null; N !== null && L < m.length; L++) {
        N.index > L ? ((k = N), (N = null)) : (k = N.sibling);
        var P = v(r, N, m[L], p);
        if (P === null) {
          N === null && (N = k);
          break;
        }
        (l && N && P.alternate === null && t(r, N),
          (s = n(P, s, L)),
          I === null ? (C = P) : (I.sibling = P),
          (I = P),
          (N = k));
      }
      if (L === m.length) return (a(r, N), F && qt(r, L), C);
      if (N === null) {
        for (; L < m.length; L++)
          ((N = T(r, m[L], p)),
            N !== null && ((s = n(N, s, L)), I === null ? (C = N) : (I.sibling = N), (I = N)));
        return (F && qt(r, L), C);
      }
      for (N = e(N); L < m.length; L++)
        ((k = g(N, r, L, m[L], p)),
          k !== null &&
            (l && k.alternate !== null && N.delete(k.key === null ? L : k.key),
            (s = n(k, s, L)),
            I === null ? (C = k) : (I.sibling = k),
            (I = k)));
      return (
        l &&
          N.forEach(function (pa) {
            return t(r, pa);
          }),
        F && qt(r, L),
        C
      );
    }
    function q(r, s, m, p) {
      if (m == null) throw Error(d(151));
      for (
        var C = null, I = null, N = s, L = (s = 0), k = null, P = m.next();
        N !== null && !P.done;
        L++, P = m.next()
      ) {
        N.index > L ? ((k = N), (N = null)) : (k = N.sibling);
        var pa = v(r, N, P.value, p);
        if (pa === null) {
          N === null && (N = k);
          break;
        }
        (l && N && pa.alternate === null && t(r, N),
          (s = n(pa, s, L)),
          I === null ? (C = pa) : (I.sibling = pa),
          (I = pa),
          (N = k));
      }
      if (P.done) return (a(r, N), F && qt(r, L), C);
      if (N === null) {
        for (; !P.done; L++, P = m.next())
          ((P = T(r, P.value, p)),
            P !== null && ((s = n(P, s, L)), I === null ? (C = P) : (I.sibling = P), (I = P)));
        return (F && qt(r, L), C);
      }
      for (N = e(N); !P.done; L++, P = m.next())
        ((P = g(N, r, L, P.value, p)),
          P !== null &&
            (l && P.alternate !== null && N.delete(P.key === null ? L : P.key),
            (s = n(P, s, L)),
            I === null ? (C = P) : (I.sibling = P),
            (I = P)));
      return (
        l &&
          N.forEach(function (Wh) {
            return t(r, Wh);
          }),
        F && qt(r, L),
        C
      );
    }
    function cl(r, s, m, p) {
      if (
        (typeof m == "object" &&
          m !== null &&
          m.type === Cl &&
          m.key === null &&
          (m = m.props.children),
        typeof m == "object" && m !== null)
      ) {
        switch (m.$$typeof) {
          case Wl:
            l: {
              for (var C = m.key; s !== null; ) {
                if (s.key === C) {
                  if (((C = m.type), C === Cl)) {
                    if (s.tag === 7) {
                      (a(r, s.sibling), (p = u(s, m.props.children)), (p.return = r), (r = p));
                      break l;
                    }
                  } else if (
                    s.elementType === C ||
                    (typeof C == "object" && C !== null && C.$$typeof === Gl && Ca(C) === s.type)
                  ) {
                    (a(r, s.sibling), (p = u(s, m.props)), Je(p, m), (p.return = r), (r = p));
                    break l;
                  }
                  a(r, s);
                  break;
                } else t(r, s);
                s = s.sibling;
              }
              m.type === Cl
                ? ((p = Ua(m.props.children, r.mode, p, m.key)), (p.return = r), (r = p))
                : ((p = Xu(m.type, m.key, m.props, null, r.mode, p)),
                  Je(p, m),
                  (p.return = r),
                  (r = p));
            }
            return i(r);
          case jl:
            l: {
              for (C = m.key; s !== null; ) {
                if (s.key === C)
                  if (
                    s.tag === 4 &&
                    s.stateNode.containerInfo === m.containerInfo &&
                    s.stateNode.implementation === m.implementation
                  ) {
                    (a(r, s.sibling), (p = u(s, m.children || [])), (p.return = r), (r = p));
                    break l;
                  } else {
                    a(r, s);
                    break;
                  }
                else t(r, s);
                s = s.sibling;
              }
              ((p = zi(m, r.mode, p)), (p.return = r), (r = p));
            }
            return i(r);
          case Gl:
            return ((m = Ca(m)), cl(r, s, m, p));
        }
        if (gt(m)) return D(r, s, m, p);
        if (Ql(m)) {
          if (((C = Ql(m)), typeof C != "function")) throw Error(d(150));
          return ((m = C.call(m)), q(r, s, m, p));
        }
        if (typeof m.then == "function") return cl(r, s, Wu(m), p);
        if (m.$$typeof === Rl) return cl(r, s, Vu(r, m), p);
        ku(r, m);
      }
      return (typeof m == "string" && m !== "") || typeof m == "number" || typeof m == "bigint"
        ? ((m = "" + m),
          s !== null && s.tag === 6
            ? (a(r, s.sibling), (p = u(s, m)), (p.return = r), (r = p))
            : (a(r, s), (p = Ti(m, r.mode, p)), (p.return = r), (r = p)),
          i(r))
        : a(r, s);
    }
    return function (r, s, m, p) {
      try {
        Ke = 0;
        var C = cl(r, s, m, p);
        return ((se = null), C);
      } catch (N) {
        if (N === fe || N === Ju) throw N;
        var I = lt(29, N, null, r.mode);
        return ((I.lanes = p), (I.return = r), I);
      } finally {
      }
    };
  }
  var Ba = Os(!0),
    Ds = Os(!1),
    ea = !1;
  function Ci(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function qi(l, t) {
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
  function ua(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function na(l, t, a) {
    var e = l.updateQueue;
    if (e === null) return null;
    if (((e = e.shared), (ll & 2) !== 0)) {
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
  function we(l, t, a) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))) {
      var e = t.lanes;
      ((e &= l.pendingLanes), (a |= e), (t.lanes = a), bf(l, a));
    }
  }
  function Bi(l, t) {
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
  var ji = !1;
  function We() {
    if (ji) {
      var l = ce;
      if (l !== null) throw l;
    }
  }
  function ke(l, t, a, e) {
    ji = !1;
    var u = l.updateQueue;
    ea = !1;
    var n = u.firstBaseUpdate,
      i = u.lastBaseUpdate,
      c = u.shared.pending;
    if (c !== null) {
      u.shared.pending = null;
      var f = c,
        y = f.next;
      ((f.next = null), i === null ? (n = y) : (i.next = y), (i = f));
      var S = l.alternate;
      S !== null &&
        ((S = S.updateQueue),
        (c = S.lastBaseUpdate),
        c !== i && (c === null ? (S.firstBaseUpdate = y) : (c.next = y), (S.lastBaseUpdate = f)));
    }
    if (n !== null) {
      var T = u.baseState;
      ((i = 0), (S = y = f = null), (c = n));
      do {
        var v = c.lane & -536870913,
          g = v !== c.lane;
        if (g ? (W & v) === v : (e & v) === v) {
          (v !== 0 && v === ie && (ji = !0),
            S !== null &&
              (S = S.next =
                { lane: 0, tag: c.tag, payload: c.payload, callback: null, next: null }));
          l: {
            var D = l,
              q = c;
            v = t;
            var cl = a;
            switch (q.tag) {
              case 1:
                if (((D = q.payload), typeof D == "function")) {
                  T = D.call(cl, T, v);
                  break l;
                }
                T = D;
                break l;
              case 3:
                D.flags = (D.flags & -65537) | 128;
              case 0:
                if (
                  ((D = q.payload), (v = typeof D == "function" ? D.call(cl, T, v) : D), v == null)
                )
                  break l;
                T = B({}, T, v);
                break l;
              case 2:
                ea = !0;
            }
          }
          ((v = c.callback),
            v !== null &&
              ((l.flags |= 64),
              g && (l.flags |= 8192),
              (g = u.callbacks),
              g === null ? (u.callbacks = [v]) : g.push(v)));
        } else
          ((g = { lane: v, tag: c.tag, payload: c.payload, callback: c.callback, next: null }),
            S === null ? ((y = S = g), (f = T)) : (S = S.next = g),
            (i |= v));
        if (((c = c.next), c === null)) {
          if (((c = u.shared.pending), c === null)) break;
          ((g = c),
            (c = g.next),
            (g.next = null),
            (u.lastBaseUpdate = g),
            (u.shared.pending = null));
        }
      } while (!0);
      (S === null && (f = T),
        (u.baseState = f),
        (u.firstBaseUpdate = y),
        (u.lastBaseUpdate = S),
        n === null && (u.shared.lanes = 0),
        (oa |= i),
        (l.lanes = i),
        (l.memoizedState = T));
    }
  }
  function Us(l, t) {
    if (typeof l != "function") throw Error(d(191, l));
    l.call(t);
  }
  function Ns(l, t) {
    var a = l.callbacks;
    if (a !== null) for (l.callbacks = null, l = 0; l < a.length; l++) Us(a[l], t);
  }
  var oe = o(null),
    $u = o(0);
  function Hs(l, t) {
    ((l = Jt), M($u, l), M(oe, t), (Jt = l | t.baseLanes));
  }
  function Yi() {
    (M($u, Jt), M(oe, oe.current));
  }
  function Gi() {
    ((Jt = $u.current), z(oe), z($u));
  }
  var tt = o(null),
    mt = null;
  function ia(l) {
    var t = l.alternate;
    (M(Sl, Sl.current & 1),
      M(tt, l),
      mt === null && (t === null || oe.current !== null || t.memoizedState !== null) && (mt = l));
  }
  function Qi(l) {
    (M(Sl, Sl.current), M(tt, l), mt === null && (mt = l));
  }
  function Rs(l) {
    l.tag === 22 ? (M(Sl, Sl.current), M(tt, l), mt === null && (mt = l)) : ca();
  }
  function ca() {
    (M(Sl, Sl.current), M(tt, tt.current));
  }
  function at(l) {
    (z(tt), mt === l && (mt = null), z(Sl));
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
    Z = null,
    nl = null,
    Tl = null,
    Iu = !1,
    de = !1,
    ja = !1,
    Pu = 0,
    $e = 0,
    he = null,
    Y2 = 0;
  function yl() {
    throw Error(d(321));
  }
  function Xi(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++) if (!Pl(l[a], t[a])) return !1;
    return !0;
  }
  function Zi(l, t, a, e, u, n) {
    return (
      (Yt = n),
      (Z = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (b.H = l === null || l.memoizedState === null ? y0 : ec),
      (ja = !1),
      (n = a(e, u)),
      (ja = !1),
      de && (n = Cs(t, a, e, u)),
      xs(l),
      n
    );
  }
  function xs(l) {
    b.H = Pe;
    var t = nl !== null && nl.next !== null;
    if (((Yt = 0), (Tl = nl = Z = null), (Iu = !1), ($e = 0), (he = null), t)) throw Error(d(300));
    l === null || zl || ((l = l.dependencies), l !== null && Lu(l) && (zl = !0));
  }
  function Cs(l, t, a, e) {
    Z = l;
    var u = 0;
    do {
      if ((de && (he = null), ($e = 0), (de = !1), 25 <= u)) throw Error(d(301));
      if (((u += 1), (Tl = nl = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        ((n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0));
      }
      ((b.H = v0), (n = t(a, e)));
    } while (de);
    return n;
  }
  function G2() {
    var l = b.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? Fe(t) : t),
      (l = l.useState()[0]),
      (nl !== null ? nl.memoizedState : null) !== l && (Z.flags |= 1024),
      t
    );
  }
  function Li() {
    var l = Pu !== 0;
    return ((Pu = 0), l);
  }
  function Vi(l, t, a) {
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
    ((Yt = 0), (Tl = nl = Z = null), (de = !1), ($e = Pu = 0), (he = null));
  }
  function Bl() {
    var l = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (Tl === null ? (Z.memoizedState = Tl = l) : (Tl = Tl.next = l), Tl);
  }
  function bl() {
    if (nl === null) {
      var l = Z.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = nl.next;
    var t = Tl === null ? Z.memoizedState : Tl.next;
    if (t !== null) ((Tl = t), (nl = l));
    else {
      if (l === null) throw Z.alternate === null ? Error(d(467)) : Error(d(310));
      ((nl = l),
        (l = {
          memoizedState: nl.memoizedState,
          baseState: nl.baseState,
          baseQueue: nl.baseQueue,
          queue: nl.queue,
          next: null,
        }),
        Tl === null ? (Z.memoizedState = Tl = l) : (Tl = Tl.next = l));
    }
    return Tl;
  }
  function ln() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Fe(l) {
    var t = $e;
    return (
      ($e += 1),
      he === null && (he = []),
      (l = As(he, l, t)),
      (t = Z),
      (Tl === null ? t.memoizedState : Tl.next) === null &&
        ((t = t.alternate), (b.H = t === null || t.memoizedState === null ? y0 : ec)),
      l
    );
  }
  function tn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Fe(l);
      if (l.$$typeof === Rl) return Ul(l);
    }
    throw Error(d(438, String(l)));
  }
  function Ji(l) {
    var t = null,
      a = Z.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var e = Z.alternate;
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
      a === null && ((a = ln()), (Z.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(l), e = 0; e < l; e++) a[e] = Xa;
    return (t.index++, a);
  }
  function Gt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function an(l) {
    var t = bl();
    return wi(t, nl, l);
  }
  function wi(l, t, a) {
    var e = l.queue;
    if (e === null) throw Error(d(311));
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
        y = t,
        S = !1;
      do {
        var T = y.lane & -536870913;
        if (T !== y.lane ? (W & T) === T : (Yt & T) === T) {
          var v = y.revertLane;
          if (v === 0)
            (f !== null &&
              (f = f.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: y.action,
                  hasEagerState: y.hasEagerState,
                  eagerState: y.eagerState,
                  next: null,
                }),
              T === ie && (S = !0));
          else if ((Yt & v) === v) {
            ((y = y.next), v === ie && (S = !0));
            continue;
          } else
            ((T = {
              lane: 0,
              revertLane: y.revertLane,
              gesture: null,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null,
            }),
              f === null ? ((c = f = T), (i = n)) : (f = f.next = T),
              (Z.lanes |= v),
              (oa |= v));
          ((T = y.action), ja && a(n, T), (n = y.hasEagerState ? y.eagerState : a(n, T)));
        } else
          ((v = {
            lane: T,
            revertLane: y.revertLane,
            gesture: y.gesture,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null,
          }),
            f === null ? ((c = f = v), (i = n)) : (f = f.next = v),
            (Z.lanes |= T),
            (oa |= T));
        y = y.next;
      } while (y !== null && y !== t);
      if (
        (f === null ? (i = n) : (f.next = c),
        !Pl(n, l.memoizedState) && ((zl = !0), S && ((a = ce), a !== null)))
      )
        throw a;
      ((l.memoizedState = n), (l.baseState = i), (l.baseQueue = f), (e.lastRenderedState = n));
    }
    return (u === null && (e.lanes = 0), [l.memoizedState, e.dispatch]);
  }
  function Wi(l) {
    var t = bl(),
      a = t.queue;
    if (a === null) throw Error(d(311));
    a.lastRenderedReducer = l;
    var e = a.dispatch,
      u = a.pending,
      n = t.memoizedState;
    if (u !== null) {
      a.pending = null;
      var i = (u = u.next);
      do ((n = l(n, i.action)), (i = i.next));
      while (i !== u);
      (Pl(n, t.memoizedState) || (zl = !0),
        (t.memoizedState = n),
        t.baseQueue === null && (t.baseState = n),
        (a.lastRenderedState = n));
    }
    return [n, e];
  }
  function qs(l, t, a) {
    var e = Z,
      u = bl(),
      n = F;
    if (n) {
      if (a === void 0) throw Error(d(407));
      a = a();
    } else a = t();
    var i = !Pl((nl || u).memoizedState, a);
    if (
      (i && ((u.memoizedState = a), (zl = !0)),
      (u = u.queue),
      Fi(Ys.bind(null, e, u, l), [l]),
      u.getSnapshot !== t || i || (Tl !== null && Tl.memoizedState.tag & 1))
    ) {
      if (
        ((e.flags |= 2048),
        re(9, { destroy: void 0 }, js.bind(null, e, u, a, t), null),
        sl === null)
      )
        throw Error(d(349));
      n || (Yt & 127) !== 0 || Bs(e, t, a);
    }
    return a;
  }
  function Bs(l, t, a) {
    ((l.flags |= 16384),
      (l = { getSnapshot: t, value: a }),
      (t = Z.updateQueue),
      t === null
        ? ((t = ln()), (Z.updateQueue = t), (t.stores = [l]))
        : ((a = t.stores), a === null ? (t.stores = [l]) : a.push(l)));
  }
  function js(l, t, a, e) {
    ((t.value = a), (t.getSnapshot = e), Gs(t) && Qs(l));
  }
  function Ys(l, t, a) {
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
    var t = Da(l, 2);
    t !== null && wl(t, l, 2);
  }
  function ki(l) {
    var t = Bl();
    if (typeof l == "function") {
      var a = l;
      if (((l = a()), ja)) {
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
        lastRenderedReducer: Gt,
        lastRenderedState: l,
      }),
      t
    );
  }
  function Xs(l, t, a, e) {
    return ((l.baseState = a), wi(l, nl, typeof e == "function" ? e : Gt));
  }
  function Q2(l, t, a, e, u) {
    if (nn(l)) throw Error(d(485));
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
        (f !== null && f(i, c), Ls(l, t, c));
      } catch (y) {
        $i(l, t, y);
      } finally {
        (n !== null && i.types !== null && (n.types = i.types), (b.T = n));
      }
    } else
      try {
        ((n = a(u, e)), Ls(l, t, n));
      } catch (y) {
        $i(l, t, y);
      }
  }
  function Ls(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (e) {
            Vs(l, t, e);
          },
          function (e) {
            return $i(l, t, e);
          },
        )
      : Vs(l, t, a);
  }
  function Vs(l, t, a) {
    ((t.status = "fulfilled"),
      (t.value = a),
      Ks(t),
      (l.state = a),
      (t = l.pending),
      t !== null &&
        ((a = t.next), a === t ? (l.pending = null) : ((a = a.next), (t.next = a), Zs(l, a))));
  }
  function $i(l, t, a) {
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
    if (F) {
      var a = sl.formState;
      if (a !== null) {
        l: {
          var e = Z;
          if (F) {
            if (ol) {
              t: {
                for (var u = ol, n = rt; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break t;
                  }
                  if (((u = yt(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                ((n = u.data), (u = n === "F!" || n === "F" ? u : null));
              }
              if (u) {
                ((ol = yt(u.nextSibling)), (e = u.data === "F!"));
                break l;
              }
            }
            ta(e);
          }
          e = !1;
        }
        e && (t = a[0]);
      }
    }
    return (
      (a = Bl()),
      (a.memoizedState = a.baseState = t),
      (e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Js,
        lastRenderedState: t,
      }),
      (a.queue = e),
      (a = h0.bind(null, Z, e)),
      (e.dispatch = a),
      (e = ki(!1)),
      (n = ac.bind(null, Z, !1, e.queue)),
      (e = Bl()),
      (u = { state: t, dispatch: null, action: l, pending: null }),
      (e.queue = u),
      (a = Q2.bind(null, Z, u, n, a)),
      (u.dispatch = a),
      (e.memoizedState = l),
      [t, a, !1]
    );
  }
  function Ws(l) {
    var t = bl();
    return ks(t, nl, l);
  }
  function ks(l, t, a) {
    if (
      ((t = wi(l, t, Js)[0]),
      (l = an(Gt)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var e = Fe(t);
      } catch (i) {
        throw i === fe ? Ju : i;
      }
    else e = t;
    t = bl();
    var u = t.queue,
      n = u.dispatch;
    return (
      a !== t.memoizedState &&
        ((Z.flags |= 2048), re(9, { destroy: void 0 }, X2.bind(null, u, a), null)),
      [e, n, l]
    );
  }
  function X2(l, t) {
    l.action = t;
  }
  function $s(l) {
    var t = bl(),
      a = nl;
    if (a !== null) return ks(t, a, l);
    (bl(), (t = t.memoizedState), (a = bl()));
    var e = a.queue.dispatch;
    return ((a.memoizedState = l), [t, e, !1]);
  }
  function re(l, t, a, e) {
    return (
      (l = { tag: l, create: a, deps: e, inst: t, next: null }),
      (t = Z.updateQueue),
      t === null && ((t = ln()), (Z.updateQueue = t)),
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
    var u = Bl();
    ((Z.flags |= l),
      (u.memoizedState = re(1 | t, { destroy: void 0 }, a, e === void 0 ? null : e)));
  }
  function un(l, t, a, e) {
    var u = bl();
    e = e === void 0 ? null : e;
    var n = u.memoizedState.inst;
    nl !== null && e !== null && Xi(e, nl.memoizedState.deps)
      ? (u.memoizedState = re(t, n, a, e))
      : ((Z.flags |= l), (u.memoizedState = re(1 | t, n, a, e)));
  }
  function Is(l, t) {
    en(8390656, 8, l, t);
  }
  function Fi(l, t) {
    un(2048, 8, l, t);
  }
  function Z2(l) {
    Z.flags |= 4;
    var t = Z.updateQueue;
    if (t === null) ((t = ln()), (Z.updateQueue = t), (t.events = [l]));
    else {
      var a = t.events;
      a === null ? (t.events = [l]) : a.push(l);
    }
  }
  function Ps(l) {
    var t = bl().memoizedState;
    return (
      Z2({ ref: t, nextImpl: l }),
      function () {
        if ((ll & 2) !== 0) throw Error(d(440));
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
    if (((e = l()), ja)) {
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
    return a === void 0 || ((Yt & 1073741824) !== 0 && (W & 261930) === 0)
      ? (l.memoizedState = t)
      : ((l.memoizedState = a), (l = io()), (Z.lanes |= l), (oa |= l), a);
  }
  function i0(l, t, a, e) {
    return Pl(a, t)
      ? a
      : oe.current !== null
        ? ((l = Pi(l, a, e)), Pl(l, t) || (zl = !0), l)
        : (Yt & 42) === 0 || ((Yt & 1073741824) !== 0 && (W & 261930) === 0)
          ? ((zl = !0), (l.memoizedState = a))
          : ((l = io()), (Z.lanes |= l), (oa |= l), t);
  }
  function c0(l, t, a, e, u) {
    var n = _.p;
    _.p = n !== 0 && 8 > n ? n : 8;
    var i = b.T,
      c = {};
    ((b.T = c), ac(l, !1, t, a));
    try {
      var f = u(),
        y = b.S;
      if (
        (y !== null && y(c, f), f !== null && typeof f == "object" && typeof f.then == "function")
      ) {
        var S = j2(f, e);
        Ie(l, t, S, nt(l));
      } else Ie(l, t, e, nt(l));
    } catch (T) {
      Ie(l, t, { then: function () {}, status: "rejected", reason: T }, nt());
    } finally {
      ((_.p = n), i !== null && c.types !== null && (i.types = c.types), (b.T = i));
    }
  }
  function L2() {}
  function lc(l, t, a, e) {
    if (l.tag !== 5) throw Error(d(476));
    var u = f0(l).queue;
    c0(
      l,
      u,
      t,
      Y,
      a === null
        ? L2
        : function () {
            return (s0(l), a(e));
          },
    );
  }
  function f0(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Y,
      baseState: Y,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gt,
        lastRenderedState: Y,
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
          lastRenderedReducer: Gt,
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
    (t.next === null && (t = l.alternate.memoizedState), Ie(l, t.next.queue, {}, nt()));
  }
  function tc() {
    return Ul(yu);
  }
  function o0() {
    return bl().memoizedState;
  }
  function d0() {
    return bl().memoizedState;
  }
  function V2(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = nt();
          l = ua(a);
          var e = na(t, l, a);
          (e !== null && (wl(e, t, a), we(e, t, a)), (t = { cache: Ni() }), (l.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function K2(l, t, a) {
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
      nn(l) ? r0(t, a) : ((a = bi(l, t, a, e)), a !== null && (wl(a, l, e), m0(a, t, e))));
  }
  function h0(l, t, a) {
    var e = nt();
    Ie(l, t, a, e);
  }
  function Ie(l, t, a, e) {
    var u = {
      lane: e,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (nn(l)) r0(t, u);
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
            return (Gu(l, t, u, 0), sl === null && Yu(), !1);
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
        revertLane: Cc(),
        gesture: null,
        action: e,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      nn(l))
    ) {
      if (t) throw Error(d(479));
    } else ((t = bi(l, a, e, 2)), t !== null && wl(t, l, 2));
  }
  function nn(l) {
    var t = l.alternate;
    return l === Z || (t !== null && t === Z);
  }
  function r0(l, t) {
    de = Iu = !0;
    var a = l.pending;
    (a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)), (l.pending = t));
  }
  function m0(l, t, a) {
    if ((a & 4194048) !== 0) {
      var e = t.lanes;
      ((e &= l.pendingLanes), (a |= e), (t.lanes = a), bf(l, a));
    }
  }
  var Pe = {
    readContext: Ul,
    use: tn,
    useCallback: yl,
    useContext: yl,
    useEffect: yl,
    useImperativeHandle: yl,
    useLayoutEffect: yl,
    useInsertionEffect: yl,
    useMemo: yl,
    useReducer: yl,
    useRef: yl,
    useState: yl,
    useDebugValue: yl,
    useDeferredValue: yl,
    useTransition: yl,
    useSyncExternalStore: yl,
    useId: yl,
    useHostTransitionStatus: yl,
    useFormState: yl,
    useActionState: yl,
    useOptimistic: yl,
    useMemoCache: yl,
    useCacheRefresh: yl,
  };
  Pe.useEffectEvent = yl;
  var y0 = {
      readContext: Ul,
      use: tn,
      useCallback: function (l, t) {
        return ((Bl().memoizedState = [l, t === void 0 ? null : t]), l);
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
        var a = Bl();
        t = t === void 0 ? null : t;
        var e = l();
        if (ja) {
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
        var e = Bl();
        if (a !== void 0) {
          var u = a(t);
          if (ja) {
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
          (l = l.dispatch = K2.bind(null, Z, l)),
          [e.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = Bl();
        return ((l = { current: l }), (t.memoizedState = l));
      },
      useState: function (l) {
        l = ki(l);
        var t = l.queue,
          a = h0.bind(null, Z, t);
        return ((t.dispatch = a), [l.memoizedState, a]);
      },
      useDebugValue: Ii,
      useDeferredValue: function (l, t) {
        var a = Bl();
        return Pi(a, l, t);
      },
      useTransition: function () {
        var l = ki(!1);
        return ((l = c0.bind(null, Z, l.queue, !0, !1)), (Bl().memoizedState = l), [!1, l]);
      },
      useSyncExternalStore: function (l, t, a) {
        var e = Z,
          u = Bl();
        if (F) {
          if (a === void 0) throw Error(d(407));
          a = a();
        } else {
          if (((a = t()), sl === null)) throw Error(d(349));
          (W & 127) !== 0 || Bs(e, t, a);
        }
        u.memoizedState = a;
        var n = { value: a, getSnapshot: t };
        return (
          (u.queue = n),
          Is(Ys.bind(null, e, n, l), [l]),
          (e.flags |= 2048),
          re(9, { destroy: void 0 }, js.bind(null, e, n, a, t), null),
          a
        );
      },
      useId: function () {
        var l = Bl(),
          t = sl.identifierPrefix;
        if (F) {
          var a = _t,
            e = At;
          ((a = (e & ~(1 << (32 - Il(e) - 1))).toString(32) + a),
            (t = "_" + t + "R_" + a),
            (a = Pu++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "_"));
        } else ((a = Y2++), (t = "_" + t + "r_" + a.toString(32) + "_"));
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: tc,
      useFormState: ws,
      useActionState: ws,
      useOptimistic: function (l) {
        var t = Bl();
        t.memoizedState = t.baseState = l;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return ((t.queue = a), (t = ac.bind(null, Z, !0, a)), (a.dispatch = t), [l, t]);
      },
      useMemoCache: Ji,
      useCacheRefresh: function () {
        return (Bl().memoizedState = V2.bind(null, Z));
      },
      useEffectEvent: function (l) {
        var t = Bl(),
          a = { impl: l };
        return (
          (t.memoizedState = a),
          function () {
            if ((ll & 2) !== 0) throw Error(d(440));
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
        return an(Gt);
      },
      useDebugValue: Ii,
      useDeferredValue: function (l, t) {
        var a = bl();
        return i0(a, nl.memoizedState, l, t);
      },
      useTransition: function () {
        var l = an(Gt)[0],
          t = bl().memoizedState;
        return [typeof l == "boolean" ? l : Fe(l), t];
      },
      useSyncExternalStore: qs,
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
      return Wi(Gt);
    },
    useDebugValue: Ii,
    useDeferredValue: function (l, t) {
      var a = bl();
      return nl === null ? Pi(a, l, t) : i0(a, nl.memoizedState, l, t);
    },
    useTransition: function () {
      var l = Wi(Gt)[0],
        t = bl().memoizedState;
      return [typeof l == "boolean" ? l : Fe(l), t];
    },
    useSyncExternalStore: qs,
    useId: o0,
    useHostTransitionStatus: tc,
    useFormState: $s,
    useActionState: $s,
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
        u = ua(e);
      ((u.payload = t),
        a != null && (u.callback = a),
        (t = na(l, u, e)),
        t !== null && (wl(t, l, e), we(t, l, e)));
    },
    enqueueReplaceState: function (l, t, a) {
      l = l._reactInternals;
      var e = nt(),
        u = ua(e);
      ((u.tag = 1),
        (u.payload = t),
        a != null && (u.callback = a),
        (t = na(l, u, e)),
        t !== null && (wl(t, l, e), we(t, l, e)));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var a = nt(),
        e = ua(a);
      ((e.tag = 2),
        t != null && (e.callback = t),
        (t = na(l, e, a)),
        t !== null && (wl(t, l, a), we(t, l, a)));
    },
  };
  function g0(l, t, a, e, u, n, i) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(e, n, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Ge(a, e) || !Ge(u, n)
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
    ju(l);
  }
  function p0(l) {
    console.error(l);
  }
  function T0(l) {
    ju(l);
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
  function z0(l, t, a) {
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
      (a = ua(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        cn(l, t);
      }),
      a
    );
  }
  function E0(l) {
    return ((l = ua(l)), (l.tag = 3), l);
  }
  function A0(l, t, a, e) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = e.value;
      ((l.payload = function () {
        return u(n);
      }),
        (l.callback = function () {
          z0(t, a, e);
        }));
    }
    var i = a.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (l.callback = function () {
        (z0(t, a, e),
          typeof u != "function" && (da === null ? (da = new Set([this])) : da.add(this)));
        var c = e.stack;
        this.componentDidCatch(e.value, { componentStack: c !== null ? c : "" });
      });
  }
  function J2(l, t, a, e, u) {
    if (((a.flags |= 32768), e !== null && typeof e == "object" && typeof e.then == "function")) {
      if (((t = a.alternate), t !== null && ne(t, a, u, !0), (a = tt.current), a !== null)) {
        switch (a.tag) {
          case 31:
          case 13:
            return (
              mt === null ? bn() : a.alternate === null && vl === 0 && (vl = 3),
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
        throw Error(d(435, a.tag));
      }
      return (Hc(l, e, u), bn(), !1);
    }
    if (F)
      return (
        (t = tt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = u),
            e !== _i && ((l = Error(d(422), { cause: e })), Ze(ot(l, a))))
          : (e !== _i && ((t = Error(d(423), { cause: e })), Ze(ot(t, a))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (u &= -u),
            (l.lanes |= u),
            (e = ot(e, a)),
            (u = ic(l.stateNode, e, u)),
            Bi(l, u),
            vl !== 4 && (vl = 2)),
        !1
      );
    var n = Error(d(520), { cause: e });
    if (((n = ot(n, a)), cu === null ? (cu = [n]) : cu.push(n), vl !== 4 && (vl = 2), t === null))
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
            Bi(a, l),
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
                  (da === null || !da.has(n)))))
          )
            return (
              (a.flags |= 65536),
              (u &= -u),
              (a.lanes |= u),
              (u = E0(u)),
              A0(u, l, a, e),
              Bi(a, u),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var cc = Error(d(461)),
    zl = !1;
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
      Ra(t),
      (e = Zi(l, t, a, i, n, u)),
      (c = Li()),
      l !== null && !zl
        ? (Vi(l, t, u), Qt(l, t, u))
        : (F && c && Ei(t), (t.flags |= 1), Nl(l, t, e, u), t.child)
    );
  }
  function M0(l, t, a, e, u) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" && !pi(n) && n.defaultProps === void 0 && a.compare === null
        ? ((t.tag = 15), (t.type = n), O0(l, t, n, e, u))
        : ((l = Xu(a.type, null, e, t, t.mode, u)), (l.ref = t.ref), (l.return = t), (t.child = l));
    }
    if (((n = l.child), !yc(l, u))) {
      var i = n.memoizedProps;
      if (((a = a.compare), (a = a !== null ? a : Ge), a(i, e) && l.ref === t.ref))
        return Qt(l, t, u);
    }
    return ((t.flags |= 1), (l = Ct(n, e)), (l.ref = t.ref), (l.return = t), (t.child = l));
  }
  function O0(l, t, a, e, u) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Ge(n, e) && l.ref === t.ref)
        if (((zl = !1), (t.pendingProps = e = n), yc(l, u))) (l.flags & 131072) !== 0 && (zl = !0);
        else return ((t.lanes = l.lanes), Qt(l, t, u));
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
          n !== null ? Hs(t, n) : Yi(),
          Rs(t));
      else return ((e = t.lanes = 536870912), U0(l, t, n !== null ? n.baseLanes | a : a, a, e));
    } else
      n !== null
        ? (Ku(t, n.cachePool), Hs(t, n), ca(), (t.memoizedState = null))
        : (l !== null && Ku(t, null), Yi(), ca());
    return (Nl(l, t, u, a), t.child);
  }
  function lu(l, t) {
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
      Yi(),
      Rs(t),
      l !== null && ne(l, t, e, !0),
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
  function w2(l, t, a) {
    var e = t.pendingProps,
      u = (t.flags & 128) !== 0;
    if (((t.flags &= -129), l === null)) {
      if (F) {
        if (e.mode === "hidden") return ((l = fn(t, e)), (t.lanes = 536870912), lu(null, l));
        if (
          (Qi(t),
          (l = ol)
            ? ((l = Lo(l, rt)),
              (l = l !== null && l.data === "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: Pt !== null ? { id: At, overflow: _t } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = rs(l)),
                (a.return = t),
                (t.child = a),
                (Dl = t),
                (ol = null)))
            : (l = null),
          l === null)
        )
          throw ta(t);
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
        else throw Error(d(558));
      else if ((zl || ne(l, t, a, !1), (u = (a & l.childLanes) !== 0), zl || u)) {
        if (((e = sl), e !== null && ((i = pf(e, a)), i !== 0 && i !== n.retryLane)))
          throw ((n.retryLane = i), Da(l, i), wl(e, l, i), cc);
        (bn(), (t = N0(l, t, a)));
      } else
        ((l = n.treeContext),
          (ol = yt(i.nextSibling)),
          (Dl = t),
          (F = !0),
          (la = null),
          (rt = !1),
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
      if (typeof a != "function" && typeof a != "object") throw Error(d(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function fc(l, t, a, e, u) {
    return (
      Ra(t),
      (a = Zi(l, t, a, e, void 0, u)),
      (e = Li()),
      l !== null && !zl
        ? (Vi(l, t, u), Qt(l, t, u))
        : (F && e && Ei(t), (t.flags |= 1), Nl(l, t, a, u), t.child)
    );
  }
  function H0(l, t, a, e, u, n) {
    return (
      Ra(t),
      (t.updateQueue = null),
      (a = Cs(t, e, a, u)),
      xs(l),
      (e = Li()),
      l !== null && !zl
        ? (Vi(l, t, n), Qt(l, t, n))
        : (F && e && Ei(t), (t.flags |= 1), Nl(l, t, a, n), t.child)
    );
  }
  function R0(l, t, a, e, u) {
    if ((Ra(t), t.stateNode === null)) {
      var n = te,
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
        Ci(t),
        (i = a.contextType),
        (n.context = typeof i == "object" && i !== null ? Ul(i) : te),
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
          ke(t, e, n, u),
          We(),
          (n.state = t.memoizedState)),
        typeof n.componentDidMount == "function" && (t.flags |= 4194308),
        (e = !0));
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps,
        f = Ya(a, c);
      n.props = f;
      var y = n.context,
        S = a.contextType;
      ((i = te), typeof S == "object" && S !== null && (i = Ul(S)));
      var T = a.getDerivedStateFromProps;
      ((S = typeof T == "function" || typeof n.getSnapshotBeforeUpdate == "function"),
        (c = t.pendingProps !== c),
        S ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c || y !== i) && S0(t, n, e, i)),
        (ea = !1));
      var v = t.memoizedState;
      ((n.state = v),
        ke(t, e, n, u),
        We(),
        (y = t.memoizedState),
        c || v !== y || ea
          ? (typeof T == "function" && (uc(t, a, T, e), (y = t.memoizedState)),
            (f = ea || g0(t, a, f, e, v, y, i))
              ? (S ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" && n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" && (t.flags |= 4194308))
              : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
                (t.memoizedProps = e),
                (t.memoizedState = y)),
            (n.props = e),
            (n.state = y),
            (n.context = i),
            (e = f))
          : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), (e = !1)));
    } else {
      ((n = t.stateNode),
        qi(l, t),
        (i = t.memoizedProps),
        (S = Ya(a, i)),
        (n.props = S),
        (T = t.pendingProps),
        (v = n.context),
        (y = a.contextType),
        (f = te),
        typeof y == "object" && y !== null && (f = Ul(y)),
        (c = a.getDerivedStateFromProps),
        (y = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((i !== T || v !== f) && S0(t, n, e, f)),
        (ea = !1),
        (v = t.memoizedState),
        (n.state = v),
        ke(t, e, n, u),
        We());
      var g = t.memoizedState;
      i !== T || v !== g || ea || (l !== null && l.dependencies !== null && Lu(l.dependencies))
        ? (typeof c == "function" && (uc(t, a, c, e), (g = t.memoizedState)),
          (S =
            ea ||
            g0(t, a, S, e, v, g, f) ||
            (l !== null && l.dependencies !== null && Lu(l.dependencies)))
            ? (y ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(e, g, f),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(e, g, f)),
              typeof n.componentDidUpdate == "function" && (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (i === l.memoizedProps && v === l.memoizedState) ||
                (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (i === l.memoizedProps && v === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = e),
              (t.memoizedState = g)),
          (n.props = e),
          (n.state = g),
          (n.context = f),
          (e = S))
        : (typeof n.componentDidUpdate != "function" ||
            (i === l.memoizedProps && v === l.memoizedState) ||
            (t.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (i === l.memoizedProps && v === l.memoizedState) ||
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
        : (l = Qt(l, t, u)),
      l
    );
  }
  function x0(l, t, a, e) {
    return (Na(), (t.flags |= 256), Nl(l, t, a, e), t.child);
  }
  var sc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function oc(l) {
    return { baseLanes: l, cachePool: zs() };
  }
  function dc(l, t, a) {
    return ((l = l !== null ? l.childLanes & ~a : 0), t && (l |= ut), l);
  }
  function C0(l, t, a) {
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
      if (F) {
        if (
          (u ? ia(t) : ca(),
          (l = ol)
            ? ((l = Lo(l, rt)),
              (l = l !== null && l.data !== "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: Pt !== null ? { id: At, overflow: _t } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = rs(l)),
                (a.return = t),
                (t.child = a),
                (Dl = t),
                (ol = null)))
            : (l = null),
          l === null)
        )
          throw ta(t);
        return (wc(l) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var c = e.children;
      return (
        (e = e.fallback),
        u
          ? (ca(),
            (u = t.mode),
            (c = on({ mode: "hidden", children: c }, u)),
            (e = Ua(e, u, a, null)),
            (c.return = t),
            (e.return = t),
            (c.sibling = e),
            (t.child = c),
            (e = t.child),
            (e.memoizedState = oc(a)),
            (e.childLanes = dc(l, i, a)),
            (t.memoizedState = sc),
            lu(null, e))
          : (ia(t), hc(t, c))
      );
    }
    var f = l.memoizedState;
    if (f !== null && ((c = f.dehydrated), c !== null)) {
      if (n)
        t.flags & 256
          ? (ia(t), (t.flags &= -257), (t = rc(l, t, a)))
          : t.memoizedState !== null
            ? (ca(), (t.child = l.child), (t.flags |= 128), (t = null))
            : (ca(),
              (c = e.fallback),
              (u = t.mode),
              (e = on({ mode: "visible", children: e.children }, u)),
              (c = Ua(c, u, a, null)),
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
              (t = lu(null, e)));
      else if ((ia(t), wc(c))) {
        if (((i = c.nextSibling && c.nextSibling.dataset), i)) var y = i.dgst;
        ((i = y),
          (e = Error(d(419))),
          (e.stack = ""),
          (e.digest = i),
          Ze({ value: e, source: null, stack: null }),
          (t = rc(l, t, a)));
      } else if ((zl || ne(l, t, a, !1), (i = (a & l.childLanes) !== 0), zl || i)) {
        if (((i = sl), i !== null && ((e = pf(i, a)), e !== 0 && e !== f.retryLane)))
          throw ((f.retryLane = e), Da(l, e), wl(i, l, e), cc);
        (Jc(c) || bn(), (t = rc(l, t, a)));
      } else
        Jc(c)
          ? ((t.flags |= 192), (t.child = l.child), (t = null))
          : ((l = f.treeContext),
            (ol = yt(c.nextSibling)),
            (Dl = t),
            (F = !0),
            (la = null),
            (rt = !1),
            l !== null && vs(t, l),
            (t = hc(t, e.children)),
            (t.flags |= 4096));
      return t;
    }
    return u
      ? (ca(),
        (c = e.fallback),
        (u = t.mode),
        (f = l.child),
        (y = f.sibling),
        (e = Ct(f, { mode: "hidden", children: e.children })),
        (e.subtreeFlags = f.subtreeFlags & 65011712),
        y !== null ? (c = Ct(y, c)) : ((c = Ua(c, u, a, null)), (c.flags |= 2)),
        (c.return = t),
        (e.return = t),
        (e.sibling = c),
        (t.child = e),
        lu(null, e),
        (e = t.child),
        (c = l.child.memoizedState),
        c === null
          ? (c = oc(a))
          : ((u = c.cachePool),
            u !== null
              ? ((f = pl._currentValue), (u = u.parent !== f ? { parent: f, pool: f } : u))
              : (u = zs()),
            (c = { baseLanes: c.baseLanes | a, cachePool: u })),
        (e.memoizedState = c),
        (e.childLanes = dc(l, i, a)),
        (t.memoizedState = sc),
        lu(l.child, e))
      : (ia(t),
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
  function rc(l, t, a) {
    return (
      Ba(t, l.child, null, a),
      (l = hc(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function q0(l, t, a) {
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
  function B0(l, t, a) {
    var e = t.pendingProps,
      u = e.revealOrder,
      n = e.tail;
    e = e.children;
    var i = Sl.current,
      c = (i & 2) !== 0;
    if (
      (c ? ((i = (i & 1) | 2), (t.flags |= 128)) : (i &= 1),
      M(Sl, i),
      Nl(l, t, e, a),
      (e = F ? Xe : 0),
      !c && l !== null && (l.flags & 128) !== 0)
    )
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13) l.memoizedState !== null && q0(l, a, t);
        else if (l.tag === 19) q0(l, a, t);
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
  function Qt(l, t, a) {
    if (
      (l !== null && (t.dependencies = l.dependencies), (oa |= t.lanes), (a & t.childLanes) === 0)
    )
      if (l !== null) {
        if ((ne(l, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(d(153));
    if (t.child !== null) {
      for (l = t.child, a = Ct(l, l.pendingProps), t.child = a, a.return = t; l.sibling !== null; )
        ((l = l.sibling), (a = a.sibling = Ct(l, l.pendingProps)), (a.return = t));
      a.sibling = null;
    }
    return t.child;
  }
  function yc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : ((l = l.dependencies), !!(l !== null && Lu(l)));
  }
  function W2(l, t, a) {
    switch (t.tag) {
      case 3:
        (ql(t, t.stateNode.containerInfo), aa(t, pl, l.memoizedState.cache), Na());
        break;
      case 27:
      case 5:
        Me(t);
        break;
      case 4:
        ql(t, t.stateNode.containerInfo);
        break;
      case 10:
        aa(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), Qi(t), null);
        break;
      case 13:
        var e = t.memoizedState;
        if (e !== null)
          return e.dehydrated !== null
            ? (ia(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
              ? C0(l, t, a)
              : (ia(t), (l = Qt(l, t, a)), l !== null ? l.sibling : null);
        ia(t);
        break;
      case 19:
        var u = (l.flags & 128) !== 0;
        if (
          ((e = (a & t.childLanes) !== 0),
          e || (ne(l, t, a, !1), (e = (a & t.childLanes) !== 0)),
          u)
        ) {
          if (e) return B0(l, t, a);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null && ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          M(Sl, Sl.current),
          e)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), D0(l, t, a, t.pendingProps));
      case 24:
        aa(t, pl, l.memoizedState.cache);
    }
    return Qt(l, t, a);
  }
  function j0(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) zl = !0;
      else {
        if (!yc(l, a) && (t.flags & 128) === 0) return ((zl = !1), W2(l, t, a));
        zl = (l.flags & 131072) !== 0;
      }
    else ((zl = !1), F && (t.flags & 1048576) !== 0 && ys(t, Xe, t.index));
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
              } else if (u === $) {
                ((t.tag = 14), (t = M0(null, t, l, e, a)));
                break l;
              }
            }
            throw ((t = Nt(l) || l), Error(d(306, t, "")));
          }
        }
        return t;
      case 0:
        return fc(l, t, t.type, t.pendingProps, a);
      case 1:
        return ((e = t.type), (u = Ya(e, t.pendingProps)), R0(l, t, e, u, a));
      case 3:
        l: {
          if ((ql(t, t.stateNode.containerInfo), l === null)) throw Error(d(387));
          e = t.pendingProps;
          var n = t.memoizedState;
          ((u = n.element), qi(l, t), ke(t, e, null, a));
          var i = t.memoizedState;
          if (
            ((e = i.cache),
            aa(t, pl, e),
            e !== n.cache && Ui(t, [pl], a, !0),
            We(),
            (e = i.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: e, isDehydrated: !1, cache: i.cache }),
              (t.updateQueue.baseState = n),
              (t.memoizedState = n),
              t.flags & 256)
            ) {
              t = x0(l, t, e, a);
              break l;
            } else if (e !== u) {
              ((u = ot(Error(d(424)), t)), Ze(u), (t = x0(l, t, e, a)));
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
                ol = yt(l.firstChild),
                  Dl = t,
                  F = !0,
                  la = null,
                  rt = !0,
                  a = Ds(t, null, e, a),
                  t.child = a;
                a;
              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
            }
          else {
            if ((Na(), e === u)) {
              t = Qt(l, t, a);
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
            ? (a = ko(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : F ||
                ((a = t.type),
                (l = t.pendingProps),
                (e = Mn(K.current).createElement(a)),
                (e[Ol] = t),
                (e[Xl] = l),
                Hl(e, a, l),
                _l(e),
                (t.stateNode = e))
            : (t.memoizedState = ko(t.type, l.memoizedProps, t.pendingProps, l.memoizedState)),
          null
        );
      case 27:
        return (
          Me(t),
          l === null &&
            F &&
            ((e = t.stateNode = Jo(t.type, t.pendingProps, K.current)),
            (Dl = t),
            (rt = !0),
            (u = ol),
            ya(t.type) ? ((Wc = u), (ol = yt(e.firstChild))) : (ol = u)),
          Nl(l, t, t.pendingProps.children, a),
          sn(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            F &&
            ((u = e = ol) &&
              ((e = Ah(e, t.type, t.pendingProps, rt)),
              e !== null
                ? ((t.stateNode = e), (Dl = t), (ol = yt(e.firstChild)), (rt = !1), (u = !0))
                : (u = !1)),
            u || ta(t)),
          Me(t),
          (u = t.type),
          (n = t.pendingProps),
          (i = l !== null ? l.memoizedProps : null),
          (e = n.children),
          Lc(u, n) ? (e = null) : i !== null && Lc(u, i) && (t.flags |= 32),
          t.memoizedState !== null && ((u = Zi(l, t, G2, null, null, a)), (yu._currentValue = u)),
          sn(l, t),
          Nl(l, t, e, a),
          t.child
        );
      case 6:
        return (
          l === null &&
            F &&
            ((l = a = ol) &&
              ((a = _h(a, t.pendingProps, rt)),
              a !== null ? ((t.stateNode = a), (Dl = t), (ol = null), (l = !0)) : (l = !1)),
            l || ta(t)),
          null
        );
      case 13:
        return C0(l, t, a);
      case 4:
        return (
          ql(t, t.stateNode.containerInfo),
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
        return ((e = t.pendingProps), aa(t, t.type, e.value), Nl(l, t, e.children, a), t.child);
      case 9:
        return (
          (u = t.type._context),
          (e = t.pendingProps.children),
          Ra(t),
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
        return B0(l, t, a);
      case 31:
        return w2(l, t, a);
      case 22:
        return D0(l, t, a, t.pendingProps);
      case 24:
        return (
          Ra(t),
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
              Ci(t),
              aa(t, pl, u))
            : ((l.lanes & a) !== 0 && (qi(l, t), ke(t, null, null, a), We()),
              (u = l.memoizedState),
              (n = t.memoizedState),
              u.parent !== e
                ? ((u = { parent: e, cache: e }),
                  (t.memoizedState = u),
                  t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u),
                  aa(t, pl, e))
                : ((e = n.cache), aa(t, pl, e), e !== u.cache && Ui(t, [pl], a, !0))),
          Nl(l, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(d(156, t.tag));
  }
  function Xt(l) {
    l.flags |= 4;
  }
  function vc(l, t, a, e, u) {
    if (((t = (l.mode & 32) !== 0) && (t = !1), t)) {
      if (((l.flags |= 16777216), (u & 335544128) === u))
        if (l.stateNode.complete) l.flags |= 8192;
        else if (oo()) l.flags |= 8192;
        else throw ((qa = wu), xi);
    } else l.flags &= -16777217;
  }
  function Y0(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) l.flags &= -16777217;
    else if (((l.flags |= 16777216), !ld(t)))
      if (oo()) l.flags |= 8192;
      else throw ((qa = wu), xi);
  }
  function dn(l, t) {
    (t !== null && (l.flags |= 4),
      l.flags & 16384 && ((t = l.tag !== 22 ? gf() : 536870912), (l.lanes |= t), (ge |= t)));
  }
  function tu(l, t) {
    if (!F)
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
  function k2(l, t, a) {
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
          jt(pl),
          gl(),
          a.pendingContext && ((a.context = a.pendingContext), (a.pendingContext = null)),
          (l === null || l.child === null) &&
            (ue(t)
              ? Xt(t)
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
            ? (Xt(t), n !== null ? (dl(t), Y0(t, n)) : (dl(t), vc(t, u, null, e, a)))
            : n
              ? n !== l.memoizedState
                ? (Xt(t), dl(t), Y0(t, n))
                : (dl(t), (t.flags &= -16777217))
              : ((l = l.memoizedProps), l !== e && Xt(t), dl(t), vc(t, u, l, e, a)),
          null
        );
      case 27:
        if ((Tu(t), (a = K.current), (u = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== e && Xt(t);
        else {
          if (!e) {
            if (t.stateNode === null) throw Error(d(166));
            return (dl(t), null);
          }
          ((l = U.current), ue(t) ? gs(t) : ((l = Jo(u, e, a)), (t.stateNode = l), Xt(t)));
        }
        return (dl(t), null);
      case 5:
        if ((Tu(t), (u = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== e && Xt(t);
        else {
          if (!e) {
            if (t.stateNode === null) throw Error(d(166));
            return (dl(t), null);
          }
          if (((n = U.current), ue(t))) gs(t);
          else {
            var i = Mn(K.current);
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
            e && Xt(t);
          }
        }
        return (dl(t), vc(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, a), null);
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== e && Xt(t);
        else {
          if (typeof e != "string" && t.stateNode === null) throw Error(d(166));
          if (((l = K.current), ue(t))) {
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
                qo(l.nodeValue, a)
              )),
              l || ta(t, !0));
          } else ((l = Mn(l).createTextNode(e)), (l[Ol] = t), (t.stateNode = l));
        }
        return (dl(t), null);
      case 31:
        if (((a = t.memoizedState), l === null || l.memoizedState !== null)) {
          if (((e = ue(t)), a !== null)) {
            if (l === null) {
              if (!e) throw Error(d(318));
              if (((l = t.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
                throw Error(d(557));
              l[Ol] = t;
            } else (Na(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (dl(t), (l = !1));
          } else
            ((a = Mi()),
              l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = a),
              (l = !0));
          if (!l) return t.flags & 256 ? (at(t), t) : (at(t), null);
          if ((t.flags & 128) !== 0) throw Error(d(558));
        }
        return (dl(t), null);
      case 13:
        if (
          ((e = t.memoizedState),
          l === null || (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((u = ue(t)), e !== null && e.dehydrated !== null)) {
            if (l === null) {
              if (!u) throw Error(d(318));
              if (((u = t.memoizedState), (u = u !== null ? u.dehydrated : null), !u))
                throw Error(d(317));
              u[Ol] = t;
            } else (Na(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
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
        return (gl(), l === null && Yc(t.stateNode.containerInfo), dl(t), null);
      case 10:
        return (jt(t.type), dl(t), null);
      case 19:
        if ((z(Sl), (e = t.memoizedState), e === null)) return (dl(t), null);
        if (((u = (t.flags & 128) !== 0), (n = e.rendering), n === null))
          if (u) tu(e, !1);
          else {
            if (vl !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null; ) {
                if (((n = Fu(l)), n !== null)) {
                  for (
                    t.flags |= 128,
                      tu(e, !1),
                      l = n.updateQueue,
                      t.updateQueue = l,
                      dn(t, l),
                      t.subtreeFlags = 0,
                      l = a,
                      a = t.child;
                    a !== null;
                  )
                    (hs(a, l), (a = a.sibling));
                  return (M(Sl, (Sl.current & 1) | 2), F && qt(t, e.treeForkCount), t.child);
                }
                l = l.sibling;
              }
            e.tail !== null &&
              $l() > vn &&
              ((t.flags |= 128), (u = !0), tu(e, !1), (t.lanes = 4194304));
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
                tu(e, !0),
                e.tail === null && e.tailMode === "hidden" && !n.alternate && !F)
              )
                return (dl(t), null);
            } else
              2 * $l() - e.renderingStartTime > vn &&
                a !== 536870912 &&
                ((t.flags |= 128), (u = !0), tu(e, !1), (t.lanes = 4194304));
          e.isBackwards
            ? ((n.sibling = t.child), (t.child = n))
            : ((l = e.last), l !== null ? (l.sibling = n) : (t.child = n), (e.last = n));
        }
        return e.tail !== null
          ? ((l = e.tail),
            (e.rendering = l),
            (e.tail = l.sibling),
            (e.renderingStartTime = $l()),
            (l.sibling = null),
            (a = Sl.current),
            M(Sl, u ? (a & 1) | 2 : a & 1),
            F && qt(t, e.treeForkCount),
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
          l !== null && z(xa),
          null
        );
      case 24:
        return (
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          jt(pl),
          dl(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(d(156, t.tag));
  }
  function $2(l, t) {
    switch ((Ai(t), t.tag)) {
      case 1:
        return ((l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null);
      case 3:
        return (
          jt(pl),
          gl(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return (Tu(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((at(t), t.alternate === null)) throw Error(d(340));
          Na();
        }
        return ((l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null);
      case 13:
        if ((at(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)) {
          if (t.alternate === null) throw Error(d(340));
          Na();
        }
        return ((l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null);
      case 19:
        return (z(Sl), null);
      case 4:
        return (gl(), null);
      case 10:
        return (jt(t.type), null);
      case 22:
      case 23:
        return (
          at(t),
          Gi(),
          l !== null && z(xa),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return (jt(pl), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function G0(l, t) {
    switch ((Ai(t), t.tag)) {
      case 3:
        (jt(pl), gl());
        break;
      case 26:
      case 27:
      case 5:
        Tu(t);
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
        z(Sl);
        break;
      case 10:
        jt(t.type);
        break;
      case 22:
      case 23:
        (at(t), Gi(), l !== null && z(xa));
        break;
      case 24:
        jt(pl);
    }
  }
  function au(l, t) {
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
      el(t, t.return, c);
    }
  }
  function fa(l, t, a) {
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
                y = c;
              try {
                y();
              } catch (S) {
                el(u, f, S);
              }
            }
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (S) {
      el(t, t.return, S);
    }
  }
  function Q0(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        Ns(t, a);
      } catch (e) {
        el(l, l.return, e);
      }
    }
  }
  function X0(l, t, a) {
    ((a.props = Ya(l.type, l.memoizedProps)), (a.state = l.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (e) {
      el(l, t, e);
    }
  }
  function eu(l, t) {
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
      el(l, t, u);
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
          el(l, t, u);
        } finally {
          ((l.refCleanup = null), (l = l.alternate), l != null && (l.refCleanup = null));
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (u) {
          el(l, t, u);
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
      el(l, l.return, u);
    }
  }
  function gc(l, t, a) {
    try {
      var e = l.stateNode;
      (Sh(e, l.type, a, t), (e[Xl] = t));
    } catch (u) {
      el(l, l.return, u);
    }
  }
  function L0(l) {
    return (
      l.tag === 5 || l.tag === 3 || l.tag === 26 || (l.tag === 27 && ya(l.type)) || l.tag === 4
    );
  }
  function Sc(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || L0(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;
      ) {
        if ((l.tag === 27 && ya(l.type)) || l.flags & 2 || l.child === null || l.tag === 4)
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
            a != null || t.onclick !== null || (t.onclick = Rt)));
    else if (
      e !== 4 &&
      (e === 27 && ya(l.type) && ((a = l.stateNode), (t = null)), (l = l.child), l !== null)
    )
      for (bc(l, t, a), l = l.sibling; l !== null; ) (bc(l, t, a), (l = l.sibling));
  }
  function hn(l, t, a) {
    var e = l.tag;
    if (e === 5 || e === 6) ((l = l.stateNode), t ? a.insertBefore(l, t) : a.appendChild(l));
    else if (e !== 4 && (e === 27 && ya(l.type) && (a = l.stateNode), (l = l.child), l !== null))
      for (hn(l, t, a), l = l.sibling; l !== null; ) (hn(l, t, a), (l = l.sibling));
  }
  function V0(l) {
    var t = l.stateNode,
      a = l.memoizedProps;
    try {
      for (var e = l.type, u = t.attributes; u.length; ) t.removeAttributeNode(u[0]);
      (Hl(t, e, a), (t[Ol] = l), (t[Xl] = a));
    } catch (n) {
      el(l, l.return, n);
    }
  }
  var Zt = !1,
    El = !1,
    pc = !1,
    K0 = typeof WeakSet == "function" ? WeakSet : Set,
    Ml = null;
  function F2(l, t) {
    if (((l = l.containerInfo), (Xc = xn), (l = es(l)), ri(l))) {
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
              y = 0,
              S = 0,
              T = l,
              v = null;
            t: for (;;) {
              for (
                var g;
                T !== a || (u !== 0 && T.nodeType !== 3) || (c = i + u),
                  T !== n || (e !== 0 && T.nodeType !== 3) || (f = i + e),
                  T.nodeType === 3 && (i += T.nodeValue.length),
                  (g = T.firstChild) !== null;
              )
                ((v = T), (T = g));
              for (;;) {
                if (T === l) break t;
                if (
                  (v === a && ++y === u && (c = i),
                  v === n && ++S === e && (f = i),
                  (g = T.nextSibling) !== null)
                )
                  break;
                ((T = v), (v = T.parentNode));
              }
              T = g;
            }
            a = c === -1 || f === -1 ? null : { start: c, end: f };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Zc = { focusedElem: l, selectionRange: a }, xn = !1, Ml = t; Ml !== null; )
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
                  var D = Ya(a.type, u);
                  ((l = e.getSnapshotBeforeUpdate(D, n)),
                    (e.__reactInternalSnapshotBeforeUpdate = l));
                } catch (q) {
                  el(a, a.return, q);
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
              if ((l & 1024) !== 0) throw Error(d(163));
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
        (Vt(l, a), e & 4 && au(5, a));
        break;
      case 1:
        if ((Vt(l, a), e & 4))
          if (((l = a.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (i) {
              el(a, a.return, i);
            }
          else {
            var u = Ya(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(u, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              el(a, a.return, i);
            }
          }
        (e & 64 && Q0(a), e & 512 && eu(a, a.return));
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
            el(a, a.return, i);
          }
        }
        break;
      case 27:
        t === null && e & 4 && V0(a);
      case 26:
      case 5:
        (Vt(l, a), t === null && e & 4 && Z0(a), e & 512 && eu(a, a.return));
        break;
      case 12:
        Vt(l, a);
        break;
      case 31:
        (Vt(l, a), e & 4 && k0(l, a));
        break;
      case 13:
        (Vt(l, a),
          e & 4 && $0(l, a),
          e & 64 &&
            ((l = a.memoizedState),
            l !== null && ((l = l.dehydrated), l !== null && ((a = ih.bind(null, a)), Mh(l, a)))));
        break;
      case 22:
        if (((e = a.memoizedState !== null || Zt), !e)) {
          ((t = (t !== null && t.memoizedState !== null) || El), (u = Zt));
          var n = El;
          ((Zt = e),
            (El = t) && !n ? Kt(l, a, (a.subtreeFlags & 8772) !== 0) : Vt(l, a),
            (Zt = u),
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
      l.tag === 5 && ((t = l.stateNode), t !== null && $n(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null));
  }
  var ml = null,
    Ll = !1;
  function Lt(l, t, a) {
    for (a = a.child; a !== null; ) (W0(l, t, a), (a = a.sibling));
  }
  function W0(l, t, a) {
    if (Fl && typeof Fl.onCommitFiberUnmount == "function")
      try {
        Fl.onCommitFiberUnmount(Oe, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (El || Mt(a, t),
          Lt(l, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        El || Mt(a, t);
        var e = ml,
          u = Ll;
        (ya(a.type) && ((ml = a.stateNode), (Ll = !1)),
          Lt(l, t, a),
          hu(a.stateNode),
          (ml = e),
          (Ll = u));
        break;
      case 5:
        El || Mt(a, t);
      case 6:
        if (((e = ml), (u = Ll), (ml = null), Lt(l, t, a), (ml = e), (Ll = u), ml !== null))
          if (Ll)
            try {
              (ml.nodeType === 9
                ? ml.body
                : ml.nodeName === "HTML"
                  ? ml.ownerDocument.body
                  : ml
              ).removeChild(a.stateNode);
            } catch (n) {
              el(a, t, n);
            }
          else
            try {
              ml.removeChild(a.stateNode);
            } catch (n) {
              el(a, t, n);
            }
        break;
      case 18:
        ml !== null &&
          (Ll
            ? ((l = ml),
              Xo(
                l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
                a.stateNode,
              ),
              _e(l))
            : Xo(ml, a.stateNode));
        break;
      case 4:
        ((e = ml),
          (u = Ll),
          (ml = a.stateNode.containerInfo),
          (Ll = !0),
          Lt(l, t, a),
          (ml = e),
          (Ll = u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (fa(2, a, t), El || fa(4, a, t), Lt(l, t, a));
        break;
      case 1:
        (El ||
          (Mt(a, t), (e = a.stateNode), typeof e.componentWillUnmount == "function" && X0(a, t, e)),
          Lt(l, t, a));
        break;
      case 21:
        Lt(l, t, a);
        break;
      case 22:
        ((El = (e = El) || a.memoizedState !== null), Lt(l, t, a), (El = e));
        break;
      default:
        Lt(l, t, a);
    }
  }
  function k0(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate), l !== null && ((l = l.memoizedState), l !== null))
    ) {
      l = l.dehydrated;
      try {
        _e(l);
      } catch (a) {
        el(t, t.return, a);
      }
    }
  }
  function $0(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null && ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        _e(l);
      } catch (a) {
        el(t, t.return, a);
      }
  }
  function I2(l) {
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
        throw Error(d(435, l.tag));
    }
  }
  function rn(l, t) {
    var a = I2(l);
    t.forEach(function (e) {
      if (!a.has(e)) {
        a.add(e);
        var u = ch.bind(null, l, e);
        e.then(u, u);
      }
    });
  }
  function Vl(l, t) {
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
              if (ya(c.type)) {
                ((ml = c.stateNode), (Ll = !1));
                break l;
              }
              break;
            case 5:
              ((ml = c.stateNode), (Ll = !1));
              break l;
            case 3:
            case 4:
              ((ml = c.stateNode.containerInfo), (Ll = !0));
              break l;
          }
          c = c.return;
        }
        if (ml === null) throw Error(d(160));
        (W0(n, i, u),
          (ml = null),
          (Ll = !1),
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
        (Vl(t, l), Kl(l), e & 4 && (fa(3, l, l.return), au(3, l), fa(5, l, l.return)));
        break;
      case 1:
        (Vl(t, l),
          Kl(l),
          e & 512 && (El || a === null || Mt(a, a.return)),
          e & 64 &&
            Zt &&
            ((l = l.updateQueue),
            l !== null &&
              ((e = l.callbacks),
              e !== null &&
                ((a = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = a === null ? e : a.concat(e))))));
        break;
      case 26:
        var u = bt;
        if ((Vl(t, l), Kl(l), e & 512 && (El || a === null || Mt(a, a.return)), e & 4)) {
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
                          n[Ne] ||
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
                      throw Error(d(468, e));
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
        (Vl(t, l),
          Kl(l),
          e & 512 && (El || a === null || Mt(a, a.return)),
          a !== null && e & 4 && gc(l, l.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if ((Vl(t, l), Kl(l), e & 512 && (El || a === null || Mt(a, a.return)), l.flags & 32)) {
          u = l.stateNode;
          try {
            Wa(u, "");
          } catch (D) {
            el(l, l.return, D);
          }
        }
        (e & 4 &&
          l.stateNode != null &&
          ((u = l.memoizedProps), gc(l, u, a !== null ? a.memoizedProps : u)),
          e & 1024 && (pc = !0));
        break;
      case 6:
        if ((Vl(t, l), Kl(l), e & 4)) {
          if (l.stateNode === null) throw Error(d(162));
          ((e = l.memoizedProps), (a = l.stateNode));
          try {
            a.nodeValue = e;
          } catch (D) {
            el(l, l.return, D);
          }
        }
        break;
      case 3:
        if (
          ((Un = null),
          (u = bt),
          (bt = On(t.containerInfo)),
          Vl(t, l),
          (bt = u),
          Kl(l),
          e & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            _e(t.containerInfo);
          } catch (D) {
            el(l, l.return, D);
          }
        pc && ((pc = !1), I0(l));
        break;
      case 4:
        ((e = bt), (bt = On(l.stateNode.containerInfo)), Vl(t, l), Kl(l), (bt = e));
        break;
      case 12:
        (Vl(t, l), Kl(l));
        break;
      case 31:
        (Vl(t, l),
          Kl(l),
          e & 4 && ((e = l.updateQueue), e !== null && ((l.updateQueue = null), rn(l, e))));
        break;
      case 13:
        (Vl(t, l),
          Kl(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) != (a !== null && a.memoizedState !== null) &&
            (yn = $l()),
          e & 4 && ((e = l.updateQueue), e !== null && ((l.updateQueue = null), rn(l, e))));
        break;
      case 22:
        u = l.memoizedState !== null;
        var f = a !== null && a.memoizedState !== null,
          y = Zt,
          S = El;
        if (((Zt = y || u), (El = S || f), Vl(t, l), (El = S), (Zt = y), Kl(l), e & 8192))
          l: for (
            t = l.stateNode,
              t._visibility = u ? t._visibility & -2 : t._visibility | 1,
              u && (a === null || f || Zt || El || Ga(l)),
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
                    var T = f.memoizedProps.style,
                      v = T != null && T.hasOwnProperty("display") ? T.display : null;
                    c.style.display = v == null || typeof v == "boolean" ? "" : ("" + v).trim();
                  }
                } catch (D) {
                  el(f, f.return, D);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                f = t;
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (D) {
                  el(f, f.return, D);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                f = t;
                try {
                  var g = f.stateNode;
                  u ? Zo(g, !0) : Zo(f.stateNode, !1);
                } catch (D) {
                  el(f, f.return, D);
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
          e !== null && ((a = e.retryQueue), a !== null && ((e.retryQueue = null), rn(l, a))));
        break;
      case 19:
        (Vl(t, l),
          Kl(l),
          e & 4 && ((e = l.updateQueue), e !== null && ((l.updateQueue = null), rn(l, e))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Vl(t, l), Kl(l));
    }
  }
  function Kl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, e = l.return; e !== null; ) {
          if (L0(e)) {
            a = e;
            break;
          }
          e = e.return;
        }
        if (a == null) throw Error(d(160));
        switch (a.tag) {
          case 27:
            var u = a.stateNode,
              n = Sc(l);
            hn(l, n, u);
            break;
          case 5:
            var i = a.stateNode;
            a.flags & 32 && (Wa(i, ""), (a.flags &= -33));
            var c = Sc(l);
            hn(l, c, i);
            break;
          case 3:
          case 4:
            var f = a.stateNode.containerInfo,
              y = Sc(l);
            bc(l, y, f);
            break;
          default:
            throw Error(d(161));
        }
      } catch (S) {
        el(l, l.return, S);
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
  function Ga(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (fa(4, t, t.return), Ga(t));
          break;
        case 1:
          Mt(t, t.return);
          var a = t.stateNode;
          (typeof a.componentWillUnmount == "function" && X0(t, t.return, a), Ga(t));
          break;
        case 27:
          hu(t.stateNode);
        case 26:
        case 5:
          (Mt(t, t.return), Ga(t));
          break;
        case 22:
          t.memoizedState === null && Ga(t);
          break;
        case 30:
          Ga(t);
          break;
        default:
          Ga(t);
      }
      l = l.sibling;
    }
  }
  function Kt(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var e = t.alternate,
        u = l,
        n = t,
        i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (Kt(u, n, a), au(4, n));
          break;
        case 1:
          if ((Kt(u, n, a), (e = n), (u = e.stateNode), typeof u.componentDidMount == "function"))
            try {
              u.componentDidMount();
            } catch (y) {
              el(e, e.return, y);
            }
          if (((e = n), (u = e.updateQueue), u !== null)) {
            var c = e.stateNode;
            try {
              var f = u.shared.hiddenCallbacks;
              if (f !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < f.length; u++) Us(f[u], c);
            } catch (y) {
              el(e, e.return, y);
            }
          }
          (a && i & 64 && Q0(n), eu(n, n.return));
          break;
        case 27:
          V0(n);
        case 26:
        case 5:
          (Kt(u, n, a), a && e === null && i & 4 && Z0(n), eu(n, n.return));
          break;
        case 12:
          Kt(u, n, a);
          break;
        case 31:
          (Kt(u, n, a), a && i & 4 && k0(u, n));
          break;
        case 13:
          (Kt(u, n, a), a && i & 4 && $0(u, n));
          break;
        case 22:
          (n.memoizedState === null && Kt(u, n, a), eu(n, n.return));
          break;
        case 30:
          break;
        default:
          Kt(u, n, a);
      }
      t = t.sibling;
    }
  }
  function Tc(l, t) {
    var a = null;
    (l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (a = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== a && (l != null && l.refCount++, a != null && Le(a)));
  }
  function zc(l, t) {
    ((l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && Le(l)));
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
        (pt(l, t, a, e), u & 2048 && au(9, t));
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
            t !== l && (t.refCount++, l != null && Le(l))));
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
            el(t, t.return, f);
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
              : uu(l, t)
            : n._visibility & 2
              ? pt(l, t, a, e)
              : ((n._visibility |= 2), me(l, t, a, e, (t.subtreeFlags & 10256) !== 0 || !1)),
          u & 2048 && Tc(i, t));
        break;
      case 24:
        (pt(l, t, a, e), u & 2048 && zc(t.alternate, t));
        break;
      default:
        pt(l, t, a, e);
    }
  }
  function me(l, t, a, e, u) {
    for (u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var n = l,
        i = t,
        c = a,
        f = e,
        y = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (me(n, i, c, f, u), au(8, i));
          break;
        case 23:
          break;
        case 22:
          var S = i.stateNode;
          (i.memoizedState !== null
            ? S._visibility & 2
              ? me(n, i, c, f, u)
              : uu(n, i)
            : ((S._visibility |= 2), me(n, i, c, f, u)),
            u && y & 2048 && Tc(i.alternate, i));
          break;
        case 24:
          (me(n, i, c, f, u), u && y & 2048 && zc(i.alternate, i));
          break;
        default:
          me(n, i, c, f, u);
      }
      t = t.sibling;
    }
  }
  function uu(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = l,
          e = t,
          u = e.flags;
        switch (e.tag) {
          case 22:
            (uu(a, e), u & 2048 && Tc(e.alternate, e));
            break;
          case 24:
            (uu(a, e), u & 2048 && zc(e.alternate, e));
            break;
          default:
            uu(a, e);
        }
        t = t.sibling;
      }
  }
  var nu = 8192;
  function ye(l, t, a) {
    if (l.subtreeFlags & nu) for (l = l.child; l !== null; ) (lo(l, t, a), (l = l.sibling));
  }
  function lo(l, t, a) {
    switch (l.tag) {
      case 26:
        (ye(l, t, a),
          l.flags & nu && l.memoizedState !== null && Yh(a, bt, l.memoizedState, l.memoizedProps));
        break;
      case 5:
        ye(l, t, a);
        break;
      case 3:
      case 4:
        var e = bt;
        ((bt = On(l.stateNode.containerInfo)), ye(l, t, a), (bt = e));
        break;
      case 22:
        l.memoizedState === null &&
          ((e = l.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = nu), (nu = 16777216), ye(l, t, a), (nu = e))
            : ye(l, t, a));
        break;
      default:
        ye(l, t, a);
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
  function iu(l) {
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
        (iu(l), l.flags & 2048 && fa(9, l, l.return));
        break;
      case 3:
        iu(l);
        break;
      case 12:
        iu(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -3), mn(l))
          : iu(l);
        break;
      default:
        iu(l);
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
          (fa(8, t, t.return), mn(t));
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
          fa(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var e = a.memoizedState.cachePool.pool;
            e != null && e.refCount++;
          }
          break;
        case 24:
          Le(a.memoizedState.cache);
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
  var P2 = {
      getCacheForType: function (l) {
        var t = Ul(pl),
          a = t.data.get(l);
        return (a === void 0 && ((a = l()), t.data.set(l, a)), a);
      },
      cacheSignal: function () {
        return Ul(pl).controller.signal;
      },
    },
    lh = typeof WeakMap == "function" ? WeakMap : Map,
    ll = 0,
    sl = null,
    J = null,
    W = 0,
    al = 0,
    et = null,
    sa = !1,
    ve = !1,
    Ec = !1,
    Jt = 0,
    vl = 0,
    oa = 0,
    Qa = 0,
    Ac = 0,
    ut = 0,
    ge = 0,
    cu = null,
    Jl = null,
    _c = !1,
    yn = 0,
    uo = 0,
    vn = 1 / 0,
    gn = null,
    da = null,
    Al = 0,
    ha = null,
    Se = null,
    wt = 0,
    Mc = 0,
    Oc = null,
    no = null,
    fu = 0,
    Dc = null;
  function nt() {
    return (ll & 2) !== 0 && W !== 0 ? W & -W : b.T !== null ? Cc() : Tf();
  }
  function io() {
    if (ut === 0)
      if ((W & 536870912) === 0 || F) {
        var l = Au;
        ((Au <<= 1), (Au & 3932160) === 0 && (Au = 262144), (ut = l));
      } else ut = 536870912;
    return ((l = tt.current), l !== null && (l.flags |= 32), ut);
  }
  function wl(l, t, a) {
    (((l === sl && (al === 2 || al === 9)) || l.cancelPendingCommit !== null) &&
      (be(l, 0), ra(l, W, ut, !1)),
      Ue(l, a),
      ((ll & 2) === 0 || l !== sl) &&
        (l === sl && ((ll & 2) === 0 && (Qa |= a), vl === 4 && ra(l, W, ut, !1)), Ot(l)));
  }
  function co(l, t, a) {
    if ((ll & 6) !== 0) throw Error(d(327));
    var e = (!a && (t & 127) === 0 && (t & l.expiredLanes) === 0) || De(l, t),
      u = e ? eh(l, t) : Nc(l, t, !0),
      n = e;
    do {
      if (u === 0) {
        ve && !e && ra(l, t, 0, !1);
        break;
      } else {
        if (((a = l.current.alternate), n && !th(a))) {
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
              u = cu;
              var f = c.current.memoizedState.isDehydrated;
              if ((f && (be(c, i).flags |= 256), (i = Nc(c, i, !1)), i !== 2)) {
                if (Ec && !f) {
                  ((c.errorRecoveryDisabledLanes |= n), (Qa |= n), (u = 4));
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
          (be(l, 0), ra(l, t, 0, !0));
          break;
        }
        l: {
          switch (((e = l), (n = u), n)) {
            case 0:
            case 1:
              throw Error(d(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ra(e, t, ut, !sa);
              break l;
            case 2:
              Jl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(d(329));
          }
          if ((t & 62914560) === t && ((u = yn + 300 - $l()), 10 < u)) {
            if ((ra(e, t, ut, !sa), Mu(e, 0, !0) !== 0)) break l;
            ((wt = t),
              (e.timeoutHandle = Go(
                fo.bind(null, e, a, Jl, gn, _c, t, ut, Qa, ge, sa, n, "Throttled", -0, 0),
                u,
              )));
            break l;
          }
          fo(e, a, Jl, gn, _c, t, ut, Qa, ge, sa, n, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Ot(l);
  }
  function fo(l, t, a, e, u, n, i, c, f, y, S, T, v, g) {
    if (((l.timeoutHandle = -1), (T = t.subtreeFlags), T & 8192 || (T & 16785408) === 16785408)) {
      ((T = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Rt,
      }),
        lo(t, n, T));
      var D = (n & 62914560) === n ? yn - $l() : (n & 4194048) === n ? uo - $l() : 0;
      if (((D = Gh(T, D)), D !== null)) {
        ((wt = n),
          (l.cancelPendingCommit = D(go.bind(null, l, t, n, a, e, u, i, c, f, S, T, null, v, g))),
          ra(l, n, i, !y));
        return;
      }
    }
    go(l, t, n, a, e, u, i, c, f);
  }
  function th(l) {
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
  function ra(l, t, a, e) {
    ((t &= ~Ac),
      (t &= ~Qa),
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
    return (ll & 6) === 0 ? (su(0), !1) : !0;
  }
  function Uc() {
    if (J !== null) {
      if (al === 0) var l = J.return;
      else ((l = J), (Bt = Ha = null), Ki(l), (se = null), (Ke = 0), (l = J));
      for (; l !== null; ) (G0(l.alternate, l), (l = l.return));
      J = null;
    }
  }
  function be(l, t) {
    var a = l.timeoutHandle;
    (a !== -1 && ((l.timeoutHandle = -1), Th(a)),
      (a = l.cancelPendingCommit),
      a !== null && ((l.cancelPendingCommit = null), a()),
      (wt = 0),
      Uc(),
      (sl = l),
      (J = a = Ct(l.current, null)),
      (W = t),
      (al = 0),
      (et = null),
      (sa = !1),
      (ve = De(l, t)),
      (Ec = !1),
      (ge = ut = Ac = Qa = oa = vl = 0),
      (Jl = cu = null),
      (_c = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var e = l.entangledLanes;
    if (e !== 0)
      for (l = l.entanglements, e &= t; 0 < e; ) {
        var u = 31 - Il(e),
          n = 1 << u;
        ((t |= l[u]), (e &= ~n));
      }
    return ((Jt = t), Yu(), a);
  }
  function so(l, t) {
    ((Z = null),
      (b.H = Pe),
      t === fe || t === Ju
        ? ((t = _s()), (al = 3))
        : t === xi
          ? ((t = _s()), (al = 4))
          : (al =
              t === cc
                ? 8
                : t !== null && typeof t == "object" && typeof t.then == "function"
                  ? 6
                  : 1),
      (et = t),
      J === null && ((vl = 1), cn(l, ot(t, l.current))));
  }
  function oo() {
    var l = tt.current;
    return l === null
      ? !0
      : (W & 4194048) === W
        ? mt === null
        : (W & 62914560) === W || (W & 536870912) !== 0
          ? l === mt
          : !1;
  }
  function ho() {
    var l = b.H;
    return ((b.H = Pe), l === null ? Pe : l);
  }
  function ro() {
    var l = b.A;
    return ((b.A = P2), l);
  }
  function bn() {
    ((vl = 4),
      sa || ((W & 4194048) !== W && tt.current !== null) || (ve = !0),
      ((oa & 134217727) === 0 && (Qa & 134217727) === 0) || sl === null || ra(sl, W, ut, !1));
  }
  function Nc(l, t, a) {
    var e = ll;
    ll |= 2;
    var u = ho(),
      n = ro();
    ((sl !== l || W !== t) && ((gn = null), be(l, t)), (t = !1));
    var i = vl;
    l: do
      try {
        if (al !== 0 && J !== null) {
          var c = J,
            f = et;
          switch (al) {
            case 8:
              (Uc(), (i = 6));
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              tt.current === null && (t = !0);
              var y = al;
              if (((al = 0), (et = null), pe(l, c, f, y), a && ve)) {
                i = 0;
                break l;
              }
              break;
            default:
              ((y = al), (al = 0), (et = null), pe(l, c, f, y));
          }
        }
        (ah(), (i = vl));
        break;
      } catch (S) {
        so(l, S);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (Bt = Ha = null),
      (ll = e),
      (b.H = u),
      (b.A = n),
      J === null && ((sl = null), (W = 0), Yu()),
      i
    );
  }
  function ah() {
    for (; J !== null; ) mo(J);
  }
  function eh(l, t) {
    var a = ll;
    ll |= 2;
    var e = ho(),
      u = ro();
    sl !== l || W !== t ? ((gn = null), (vn = $l() + 500), be(l, t)) : (ve = De(l, t));
    l: do
      try {
        if (al !== 0 && J !== null) {
          t = J;
          var n = et;
          t: switch (al) {
            case 1:
              ((al = 0), (et = null), pe(l, t, n, 1));
              break;
            case 2:
            case 9:
              if (Es(n)) {
                ((al = 0), (et = null), yo(t));
                break;
              }
              ((t = function () {
                ((al !== 2 && al !== 9) || sl !== l || (al = 7), Ot(l));
              }),
                n.then(t, t));
              break l;
            case 3:
              al = 7;
              break l;
            case 4:
              al = 5;
              break l;
            case 7:
              Es(n) ? ((al = 0), (et = null), yo(t)) : ((al = 0), (et = null), pe(l, t, n, 7));
              break;
            case 5:
              var i = null;
              switch (J.tag) {
                case 26:
                  i = J.memoizedState;
                case 5:
                case 27:
                  var c = J;
                  if (i ? ld(i) : c.stateNode.complete) {
                    ((al = 0), (et = null));
                    var f = c.sibling;
                    if (f !== null) J = f;
                    else {
                      var y = c.return;
                      y !== null ? ((J = y), pn(y)) : (J = null);
                    }
                    break t;
                  }
              }
              ((al = 0), (et = null), pe(l, t, n, 5));
              break;
            case 6:
              ((al = 0), (et = null), pe(l, t, n, 6));
              break;
            case 8:
              (Uc(), (vl = 6));
              break l;
            default:
              throw Error(d(462));
          }
        }
        uh();
        break;
      } catch (S) {
        so(l, S);
      }
    while (!0);
    return (
      (Bt = Ha = null),
      (b.H = e),
      (b.A = u),
      (ll = a),
      J !== null ? 0 : ((sl = null), (W = 0), Yu(), vl)
    );
  }
  function uh() {
    for (; J !== null && !Od(); ) mo(J);
  }
  function mo(l) {
    var t = j0(l.alternate, l, Jt);
    ((l.memoizedProps = l.pendingProps), t === null ? pn(l) : (J = t));
  }
  function yo(l) {
    var t = l,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = H0(a, t, t.pendingProps, t.type, void 0, W);
        break;
      case 11:
        t = H0(a, t, t.pendingProps, t.type.render, t.ref, W);
        break;
      case 5:
        Ki(t);
      default:
        (G0(a, t), (t = J = hs(t, Jt)), (t = j0(a, t, Jt)));
    }
    ((l.memoizedProps = l.pendingProps), t === null ? pn(l) : (J = t));
  }
  function pe(l, t, a, e) {
    ((Bt = Ha = null), Ki(t), (se = null), (Ke = 0));
    var u = t.return;
    try {
      if (J2(l, u, t, a, W)) {
        ((vl = 1), cn(l, ot(a, l.current)), (J = null));
        return;
      }
    } catch (n) {
      if (u !== null) throw ((J = u), n);
      ((vl = 1), cn(l, ot(a, l.current)), (J = null));
      return;
    }
    t.flags & 32768
      ? (F || e === 1
          ? (l = !0)
          : ve || (W & 536870912) !== 0
            ? (l = !1)
            : ((sa = l = !0),
              (e === 2 || e === 9 || e === 3 || e === 6) &&
                ((e = tt.current), e !== null && e.tag === 13 && (e.flags |= 16384))),
        vo(t, l))
      : pn(t);
  }
  function pn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        vo(t, sa);
        return;
      }
      l = t.return;
      var a = k2(t.alternate, t, Jt);
      if (a !== null) {
        J = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        J = t;
        return;
      }
      J = t = l;
    } while (t !== null);
    vl === 0 && (vl = 5);
  }
  function vo(l, t) {
    do {
      var a = $2(l.alternate, l);
      if (a !== null) {
        ((a.flags &= 32767), (J = a));
        return;
      }
      if (
        ((a = l.return),
        a !== null && ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        J = l;
        return;
      }
      J = l = a;
    } while (l !== null);
    ((vl = 6), (J = null));
  }
  function go(l, t, a, e, u, n, i, c, f) {
    l.cancelPendingCommit = null;
    do Tn();
    while (Al !== 0);
    if ((ll & 6) !== 0) throw Error(d(327));
    if (t !== null) {
      if (t === l.current) throw Error(d(177));
      if (
        ((n = t.lanes | t.childLanes),
        (n |= Si),
        jd(l, a, n, i, c, f),
        l === sl && ((J = sl = null), (W = 0)),
        (Se = t),
        (ha = l),
        (wt = a),
        (Mc = n),
        (Oc = u),
        (no = e),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            fh(zu, function () {
              return (zo(), null);
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (e = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || e)
      ) {
        ((e = b.T), (b.T = null), (u = _.p), (_.p = 2), (i = ll), (ll |= 4));
        try {
          F2(l, t, a);
        } finally {
          ((ll = i), (_.p = u), (b.T = e));
        }
      }
      ((Al = 1), So(), bo(), po());
    }
  }
  function So() {
    if (Al === 1) {
      Al = 0;
      var l = ha,
        t = Se,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        ((a = b.T), (b.T = null));
        var e = _.p;
        _.p = 2;
        var u = ll;
        ll |= 4;
        try {
          F0(t, l);
          var n = Zc,
            i = es(l.containerInfo),
            c = n.focusedElem,
            f = n.selectionRange;
          if (i !== c && c && c.ownerDocument && as(c.ownerDocument.documentElement, c)) {
            if (f !== null && ri(c)) {
              var y = f.start,
                S = f.end;
              if ((S === void 0 && (S = y), "selectionStart" in c))
                ((c.selectionStart = y), (c.selectionEnd = Math.min(S, c.value.length)));
              else {
                var T = c.ownerDocument || document,
                  v = (T && T.defaultView) || window;
                if (v.getSelection) {
                  var g = v.getSelection(),
                    D = c.textContent.length,
                    q = Math.min(f.start, D),
                    cl = f.end === void 0 ? q : Math.min(f.end, D);
                  !g.extend && q > cl && ((i = cl), (cl = q), (q = i));
                  var r = ts(c, q),
                    s = ts(c, cl);
                  if (
                    r &&
                    s &&
                    (g.rangeCount !== 1 ||
                      g.anchorNode !== r.node ||
                      g.anchorOffset !== r.offset ||
                      g.focusNode !== s.node ||
                      g.focusOffset !== s.offset)
                  ) {
                    var m = T.createRange();
                    (m.setStart(r.node, r.offset),
                      g.removeAllRanges(),
                      q > cl
                        ? (g.addRange(m), g.extend(s.node, s.offset))
                        : (m.setEnd(s.node, s.offset), g.addRange(m)));
                  }
                }
              }
            }
            for (T = [], g = c; (g = g.parentNode); )
              g.nodeType === 1 && T.push({ element: g, left: g.scrollLeft, top: g.scrollTop });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < T.length; c++) {
              var p = T[c];
              ((p.element.scrollLeft = p.left), (p.element.scrollTop = p.top));
            }
          }
          ((xn = !!Xc), (Zc = Xc = null));
        } finally {
          ((ll = u), (_.p = e), (b.T = a));
        }
      }
      ((l.current = t), (Al = 2));
    }
  }
  function bo() {
    if (Al === 2) {
      Al = 0;
      var l = ha,
        t = Se,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        ((a = b.T), (b.T = null));
        var e = _.p;
        _.p = 2;
        var u = ll;
        ll |= 4;
        try {
          J0(l, t.alternate, t);
        } finally {
          ((ll = u), (_.p = e), (b.T = a));
        }
      }
      Al = 3;
    }
  }
  function po() {
    if (Al === 4 || Al === 3) {
      ((Al = 0), Dd());
      var l = ha,
        t = Se,
        a = wt,
        e = no;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Al = 5)
        : ((Al = 0), (Se = ha = null), To(l, l.pendingLanes));
      var u = l.pendingLanes;
      if (
        (u === 0 && (da = null),
        Wn(a),
        (t = t.stateNode),
        Fl && typeof Fl.onCommitFiberRoot == "function")
      )
        try {
          Fl.onCommitFiberRoot(Oe, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (e !== null) {
        ((t = b.T), (u = _.p), (_.p = 2), (b.T = null));
        try {
          for (var n = l.onRecoverableError, i = 0; i < e.length; i++) {
            var c = e[i];
            n(c.value, { componentStack: c.stack });
          }
        } finally {
          ((b.T = t), (_.p = u));
        }
      }
      ((wt & 3) !== 0 && Tn(),
        Ot(l),
        (u = l.pendingLanes),
        (a & 261930) !== 0 && (u & 42) !== 0 ? (l === Dc ? fu++ : ((fu = 0), (Dc = l))) : (fu = 0),
        su(0));
    }
  }
  function To(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), Le(t)));
  }
  function Tn() {
    return (So(), bo(), po(), zo());
  }
  function zo() {
    if (Al !== 5) return !1;
    var l = ha,
      t = Mc;
    Mc = 0;
    var a = Wn(wt),
      e = b.T,
      u = _.p;
    try {
      ((_.p = 32 > a ? 32 : a), (b.T = null), (a = Oc), (Oc = null));
      var n = ha,
        i = wt;
      if (((Al = 0), (Se = ha = null), (wt = 0), (ll & 6) !== 0)) throw Error(d(331));
      var c = ll;
      if (
        ((ll |= 4),
        ao(n.current),
        P0(n, n.current, i, a),
        (ll = c),
        su(0, !1),
        Fl && typeof Fl.onPostCommitFiberRoot == "function")
      )
        try {
          Fl.onPostCommitFiberRoot(Oe, n);
        } catch {}
      return !0;
    } finally {
      ((_.p = u), (b.T = e), To(l, t));
    }
  }
  function Eo(l, t, a) {
    ((t = ot(a, t)),
      (t = ic(l.stateNode, t, 2)),
      (l = na(l, t, 2)),
      l !== null && (Ue(l, 2), Ot(l)));
  }
  function el(l, t, a) {
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
            (typeof e.componentDidCatch == "function" && (da === null || !da.has(e)))
          ) {
            ((l = ot(a, l)),
              (a = E0(2)),
              (e = na(t, a, 2)),
              e !== null && (A0(a, e, t, l), Ue(e, 2), Ot(e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Hc(l, t, a) {
    var e = l.pingCache;
    if (e === null) {
      e = l.pingCache = new lh();
      var u = new Set();
      e.set(t, u);
    } else ((u = e.get(t)), u === void 0 && ((u = new Set()), e.set(t, u)));
    u.has(a) || ((Ec = !0), u.add(a), (l = nh.bind(null, l, t, a)), t.then(l, l));
  }
  function nh(l, t, a) {
    var e = l.pingCache;
    (e !== null && e.delete(t),
      (l.pingedLanes |= l.suspendedLanes & a),
      (l.warmLanes &= ~a),
      sl === l &&
        (W & a) === a &&
        (vl === 4 || (vl === 3 && (W & 62914560) === W && 300 > $l() - yn)
          ? (ll & 2) === 0 && be(l, 0)
          : (Ac |= a),
        ge === W && (ge = 0)),
      Ot(l));
  }
  function Ao(l, t) {
    (t === 0 && (t = gf()), (l = Da(l, t)), l !== null && (Ue(l, t), Ot(l)));
  }
  function ih(l) {
    var t = l.memoizedState,
      a = 0;
    (t !== null && (a = t.retryLane), Ao(l, a));
  }
  function ch(l, t) {
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
        throw Error(d(314));
    }
    (e !== null && e.delete(t), Ao(l, a));
  }
  function fh(l, t) {
    return Vn(l, t);
  }
  var zn = null,
    Te = null,
    Rc = !1,
    En = !1,
    xc = !1,
    ma = 0;
  function Ot(l) {
    (l !== Te && l.next === null && (Te === null ? (zn = Te = l) : (Te = Te.next = l)),
      (En = !0),
      Rc || ((Rc = !0), oh()));
  }
  function su(l, t) {
    if (!xc && En) {
      xc = !0;
      do
        for (var a = !1, e = zn; e !== null; ) {
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
            ((n = W),
              (n = Mu(
                e,
                e === sl ? n : 0,
                e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
              )),
              (n & 3) === 0 || De(e, n) || ((a = !0), Do(e, n)));
          e = e.next;
        }
      while (a);
      xc = !1;
    }
  }
  function sh() {
    _o();
  }
  function _o() {
    En = Rc = !1;
    var l = 0;
    ma !== 0 && ph() && (l = ma);
    for (var t = $l(), a = null, e = zn; e !== null; ) {
      var u = e.next,
        n = Mo(e, t);
      (n === 0
        ? ((e.next = null), a === null ? (zn = u) : (a.next = u), u === null && (Te = a))
        : ((a = e), (l !== 0 || (n & 3) !== 0) && (En = !0)),
        (e = u));
    }
    ((Al !== 0 && Al !== 5) || su(l), ma !== 0 && (ma = 0));
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
      (a = W),
      (a = Mu(l, l === t ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1)),
      (e = l.callbackNode),
      a === 0 || (l === t && (al === 2 || al === 9)) || l.cancelPendingCommit !== null)
    )
      return (e !== null && e !== null && Kn(e), (l.callbackNode = null), (l.callbackPriority = 0));
    if ((a & 3) === 0 || De(l, a)) {
      if (((t = a & -a), t === l.callbackPriority)) return t;
      switch ((e !== null && Kn(e), Wn(a))) {
        case 2:
        case 8:
          a = yf;
          break;
        case 32:
          a = zu;
          break;
        case 268435456:
          a = vf;
          break;
        default:
          a = zu;
      }
      return (
        (e = Oo.bind(null, l)), (a = Vn(a, e)), (l.callbackPriority = t), (l.callbackNode = a), t
      );
    }
    return (
      e !== null && e !== null && Kn(e), (l.callbackPriority = 2), (l.callbackNode = null), 2
    );
  }
  function Oo(l, t) {
    if (Al !== 0 && Al !== 5) return ((l.callbackNode = null), (l.callbackPriority = 0), null);
    var a = l.callbackNode;
    if (Tn() && l.callbackNode !== a) return null;
    var e = W;
    return (
      (e = Mu(l, l === sl ? e : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1)),
      e === 0
        ? null
        : (co(l, e, t),
          Mo(l, $l()),
          l.callbackNode != null && l.callbackNode === a ? Oo.bind(null, l) : null)
    );
  }
  function Do(l, t) {
    if (Tn()) return null;
    co(l, t, !0);
  }
  function oh() {
    zh(function () {
      (ll & 6) !== 0 ? Vn(mf, sh) : _o();
    });
  }
  function Cc() {
    if (ma === 0) {
      var l = ie;
      (l === 0 && ((l = Eu), (Eu <<= 1), (Eu & 261888) === 0 && (Eu = 256)), (ma = l));
    }
    return ma;
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
  function dh(l, t, a, e, u) {
    if (t === "submit" && a && a.stateNode === u) {
      var n = Uo((u[Xl] || null).action),
        i = e.submitter;
      i &&
        ((t = (t = i[Xl] || null) ? Uo(t.formAction) : i.getAttribute("formAction")),
        t !== null && ((n = t), (i = null)));
      var c = new Cu("action", "action", null, e, u);
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (e.defaultPrevented) {
                if (ma !== 0) {
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
  for (var qc = 0; qc < gi.length; qc++) {
    var Bc = gi[qc],
      hh = Bc.toLowerCase(),
      rh = Bc[0].toUpperCase() + Bc.slice(1);
    St(hh, "on" + rh);
  }
  (St(is, "onAnimationEnd"),
    St(cs, "onAnimationIteration"),
    St(fs, "onAnimationStart"),
    St("dblclick", "onDoubleClick"),
    St("focusin", "onFocus"),
    St("focusout", "onBlur"),
    St(U2, "onTransitionRun"),
    St(N2, "onTransitionStart"),
    St(H2, "onTransitionCancel"),
    St(ss, "onTransitionEnd"),
    Ja("onMouseEnter", ["mouseout", "mouseover"]),
    Ja("onMouseLeave", ["mouseout", "mouseover"]),
    Ja("onPointerEnter", ["pointerout", "pointerover"]),
    Ja("onPointerLeave", ["pointerout", "pointerover"]),
    Aa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    Aa(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Aa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Aa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    Aa(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Aa(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var ou =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    mh = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ou),
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
              y = c.currentTarget;
            if (((c = c.listener), f !== n && u.isPropagationStopped())) break l;
            ((n = c), (u.currentTarget = y));
            try {
              n(u);
            } catch (S) {
              ju(S);
            }
            ((u.currentTarget = null), (n = f));
          }
        else
          for (i = 0; i < e.length; i++) {
            if (
              ((c = e[i]),
              (f = c.instance),
              (y = c.currentTarget),
              (c = c.listener),
              f !== n && u.isPropagationStopped())
            )
              break l;
            ((n = c), (u.currentTarget = y));
            try {
              n(u);
            } catch (S) {
              ju(S);
            }
            ((u.currentTarget = null), (n = f));
          }
      }
    }
  }
  function w(l, t) {
    var a = t[kn];
    a === void 0 && (a = t[kn] = new Set());
    var e = l + "__bubble";
    a.has(e) || (Ro(t, l, 2, !1), a.add(e));
  }
  function jc(l, t, a) {
    var e = 0;
    (t && (e |= 4), Ro(a, l, e, t));
  }
  var An = "_reactListening" + Math.random().toString(36).slice(2);
  function Yc(l) {
    if (!l[An]) {
      ((l[An] = !0),
        Af.forEach(function (a) {
          a !== "selectionchange" && (mh.has(a) || jc(a, !1, l), jc(a, !0, l));
        }));
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[An] || ((t[An] = !0), jc("selectionchange", !1, t));
    }
  }
  function Ro(l, t, a, e) {
    switch (cd(t)) {
      case 2:
        var u = Zh;
        break;
      case 8:
        u = Lh;
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
            if (((i = La(c)), i === null)) return;
            if (((f = i.tag), f === 5 || f === 6 || f === 26 || f === 27)) {
              e = n = i;
              continue l;
            }
            c = c.parentNode;
          }
        }
        e = e.return;
      }
    Bf(function () {
      var y = n,
        S = ai(a),
        T = [];
      l: {
        var v = os.get(l);
        if (v !== void 0) {
          var g = Cu,
            D = l;
          switch (l) {
            case "keypress":
              if (Ru(a) === 0) break l;
            case "keydown":
            case "keyup":
              g = c2;
              break;
            case "focusin":
              ((D = "focus"), (g = fi));
              break;
            case "focusout":
              ((D = "blur"), (g = fi));
              break;
            case "beforeblur":
            case "afterblur":
              g = fi;
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
              g = Gf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = kd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = o2;
              break;
            case is:
            case cs:
            case fs:
              g = Id;
              break;
            case ss:
              g = h2;
              break;
            case "scroll":
            case "scrollend":
              g = wd;
              break;
            case "wheel":
              g = m2;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = l2;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = Xf;
              break;
            case "toggle":
            case "beforetoggle":
              g = v2;
          }
          var q = (t & 4) !== 0,
            cl = !q && (l === "scroll" || l === "scrollend"),
            r = q ? (v !== null ? v + "Capture" : null) : v;
          q = [];
          for (var s = y, m; s !== null; ) {
            var p = s;
            if (
              ((m = p.stateNode),
              (p = p.tag),
              (p !== 5 && p !== 26 && p !== 27) ||
                m === null ||
                r === null ||
                ((p = Re(s, r)), p != null && q.push(du(s, p, m))),
              cl)
            )
              break;
            s = s.return;
          }
          0 < q.length && ((v = new g(v, D, null, a, S)), T.push({ event: v, listeners: q }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((v = l === "mouseover" || l === "pointerover"),
            (g = l === "mouseout" || l === "pointerout"),
            v && a !== ti && (D = a.relatedTarget || a.fromElement) && (La(D) || D[Za]))
          )
            break l;
          if (
            (g || v) &&
            ((v =
              S.window === S
                ? S
                : (v = S.ownerDocument)
                  ? v.defaultView || v.parentWindow
                  : window),
            g
              ? ((D = a.relatedTarget || a.toElement),
                (g = y),
                (D = D ? La(D) : null),
                D !== null &&
                  ((cl = j(D)), (q = D.tag), D !== cl || (q !== 5 && q !== 27 && q !== 6)) &&
                  (D = null))
              : ((g = null), (D = y)),
            g !== D)
          ) {
            if (
              ((q = Gf),
              (p = "onMouseLeave"),
              (r = "onMouseEnter"),
              (s = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((q = Xf), (p = "onPointerLeave"), (r = "onPointerEnter"), (s = "pointer")),
              (cl = g == null ? v : He(g)),
              (m = D == null ? v : He(D)),
              (v = new q(p, s + "leave", g, a, S)),
              (v.target = cl),
              (v.relatedTarget = m),
              (p = null),
              La(S) === y &&
                ((q = new q(r, s + "enter", D, a, S)),
                (q.target = m),
                (q.relatedTarget = cl),
                (p = q)),
              (cl = p),
              g && D)
            )
              t: {
                for (q = yh, r = g, s = D, m = 0, p = r; p; p = q(p)) m++;
                p = 0;
                for (var C = s; C; C = q(C)) p++;
                for (; 0 < m - p; ) ((r = q(r)), m--);
                for (; 0 < p - m; ) ((s = q(s)), p--);
                for (; m--; ) {
                  if (r === s || (s !== null && r === s.alternate)) {
                    q = r;
                    break t;
                  }
                  ((r = q(r)), (s = q(s)));
                }
                q = null;
              }
            else q = null;
            (g !== null && xo(T, v, g, q, !1), D !== null && cl !== null && xo(T, cl, D, q, !0));
          }
        }
        l: {
          if (
            ((v = y ? He(y) : window),
            (g = v.nodeName && v.nodeName.toLowerCase()),
            g === "select" || (g === "input" && v.type === "file"))
          )
            var I = kf;
          else if (wf(v))
            if ($f) I = M2;
            else {
              I = A2;
              var N = E2;
            }
          else
            ((g = v.nodeName),
              !g || g.toLowerCase() !== "input" || (v.type !== "checkbox" && v.type !== "radio")
                ? y && li(y.elementType) && (I = kf)
                : (I = _2));
          if (I && (I = I(l, y))) {
            Wf(T, I, a, S);
            break l;
          }
          (N && N(l, v, y),
            l === "focusout" &&
              y &&
              v.type === "number" &&
              y.memoizedProps.value != null &&
              Pn(v, "number", v.value));
        }
        switch (((N = y ? He(y) : window), l)) {
          case "focusin":
            (wf(N) || N.contentEditable === "true") && ((Ia = N), (mi = y), (Qe = null));
            break;
          case "focusout":
            Qe = mi = Ia = null;
            break;
          case "mousedown":
            yi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((yi = !1), us(T, a, S));
            break;
          case "selectionchange":
            if (D2) break;
          case "keydown":
          case "keyup":
            us(T, a, S);
        }
        var L;
        if (oi)
          l: {
            switch (l) {
              case "compositionstart":
                var k = "onCompositionStart";
                break l;
              case "compositionend":
                k = "onCompositionEnd";
                break l;
              case "compositionupdate":
                k = "onCompositionUpdate";
                break l;
            }
            k = void 0;
          }
        else
          Fa
            ? Kf(l, a) && (k = "onCompositionEnd")
            : l === "keydown" && a.keyCode === 229 && (k = "onCompositionStart");
        (k &&
          (Zf &&
            a.locale !== "ko" &&
            (Fa || k !== "onCompositionStart"
              ? k === "onCompositionEnd" && Fa && (L = jf())
              : ((It = S), (ni = "value" in It ? It.value : It.textContent), (Fa = !0))),
          (N = _n(y, k)),
          0 < N.length &&
            ((k = new Qf(k, l, null, a, S)),
            T.push({ event: k, listeners: N }),
            L ? (k.data = L) : ((L = Jf(a)), L !== null && (k.data = L)))),
          (L = S2 ? b2(l, a) : p2(l, a)) &&
            ((k = _n(y, "onBeforeInput")),
            0 < k.length &&
              ((N = new Qf("onBeforeInput", "beforeinput", null, a, S)),
              T.push({ event: N, listeners: k }),
              (N.data = L))),
          dh(T, l, y, a, S));
      }
      Ho(T, t);
    });
  }
  function du(l, t, a) {
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
          ((u = Re(l, a)),
          u != null && e.unshift(du(l, u, n)),
          (u = Re(l, t)),
          u != null && e.push(du(l, u, n))),
        l.tag === 3)
      )
        return e;
      l = l.return;
    }
    return [];
  }
  function yh(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function xo(l, t, a, e, u) {
    for (var n = t._reactName, i = []; a !== null && a !== e; ) {
      var c = a,
        f = c.alternate,
        y = c.stateNode;
      if (((c = c.tag), f !== null && f === e)) break;
      ((c !== 5 && c !== 26 && c !== 27) ||
        y === null ||
        ((f = y),
        u
          ? ((y = Re(a, n)), y != null && i.unshift(du(a, y, f)))
          : u || ((y = Re(a, n)), y != null && i.push(du(a, y, f)))),
        (a = a.return));
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var vh = /\r\n?/g,
    gh = /\u0000|\uFFFD/g;
  function Co(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        vh,
        `
`,
      )
      .replace(gh, "");
  }
  function qo(l, t) {
    return ((t = Co(t)), Co(l) === t);
  }
  function il(l, t, a, e, u, n) {
    switch (a) {
      case "children":
        typeof e == "string"
          ? t === "body" || (t === "textarea" && e === "") || Wa(l, e)
          : (typeof e == "number" || typeof e == "bigint") && t !== "body" && Wa(l, "" + e);
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
        Cf(l, e, n);
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
        e != null && (l.onclick = Rt);
        break;
      case "onScroll":
        e != null && w("scroll", l);
        break;
      case "onScrollEnd":
        e != null && w("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e)) throw Error(d(61));
          if (((a = e.__html), a != null)) {
            if (u.children != null) throw Error(d(60));
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
        (w("beforetoggle", l), w("toggle", l), Ou(l, "popover", e));
        break;
      case "xlinkActuate":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:actuate", e);
        break;
      case "xlinkArcrole":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", e);
        break;
      case "xlinkRole":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:role", e);
        break;
      case "xlinkShow":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:show", e);
        break;
      case "xlinkTitle":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:title", e);
        break;
      case "xlinkType":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:type", e);
        break;
      case "xmlBase":
        Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:base", e);
        break;
      case "xmlLang":
        Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", e);
        break;
      case "xmlSpace":
        Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:space", e);
        break;
      case "is":
        Ou(l, "is", e);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || (a[0] !== "o" && a[0] !== "O") || (a[1] !== "n" && a[1] !== "N")) &&
          ((a = Kd.get(a) || a), Ou(l, a, e));
    }
  }
  function Qc(l, t, a, e, u, n) {
    switch (a) {
      case "style":
        Cf(l, e, n);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e)) throw Error(d(61));
          if (((a = e.__html), a != null)) {
            if (u.children != null) throw Error(d(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof e == "string"
          ? Wa(l, e)
          : (typeof e == "number" || typeof e == "bigint") && Wa(l, "" + e);
        break;
      case "onScroll":
        e != null && w("scroll", l);
        break;
      case "onScrollEnd":
        e != null && w("scrollend", l);
        break;
      case "onClick":
        e != null && (l.onclick = Rt);
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
        (w("error", l), w("load", l));
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
                  throw Error(d(137, t));
                default:
                  il(l, t, n, i, a, null);
              }
          }
        (u && il(l, t, "srcSet", a.srcSet, a, null), e && il(l, t, "src", a.src, a, null));
        return;
      case "input":
        w("invalid", l);
        var c = (n = i = u = null),
          f = null,
          y = null;
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
                  y = S;
                  break;
                case "value":
                  n = S;
                  break;
                case "defaultValue":
                  c = S;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (S != null) throw Error(d(137, t));
                  break;
                default:
                  il(l, t, e, S, a, null);
              }
          }
        Nf(l, n, c, f, y, i, u, !1);
        return;
      case "select":
        (w("invalid", l), (e = i = n = null));
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
          t != null ? wa(l, !!e, t, !1) : a != null && wa(l, !!e, a, !0));
        return;
      case "textarea":
        (w("invalid", l), (n = u = e = null));
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
                if (c != null) throw Error(d(91));
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
        (w("beforetoggle", l), w("toggle", l), w("cancel", l), w("close", l));
        break;
      case "iframe":
      case "object":
        w("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < ou.length; e++) w(ou[e], l);
        break;
      case "image":
        (w("error", l), w("load", l));
        break;
      case "details":
        w("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        (w("error", l), w("load", l));
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
        for (y in a)
          if (a.hasOwnProperty(y) && ((e = a[y]), e != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(d(137, t));
              default:
                il(l, t, y, e, a, null);
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
  function Sh(l, t, a, e) {
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
          y = null,
          S = null;
        for (g in a) {
          var T = a[g];
          if (a.hasOwnProperty(g) && T != null)
            switch (g) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                f = T;
              default:
                e.hasOwnProperty(g) || il(l, t, g, null, e, T);
            }
        }
        for (var v in e) {
          var g = e[v];
          if (((T = a[v]), e.hasOwnProperty(v) && (g != null || T != null)))
            switch (v) {
              case "type":
                n = g;
                break;
              case "name":
                u = g;
                break;
              case "checked":
                y = g;
                break;
              case "defaultChecked":
                S = g;
                break;
              case "value":
                i = g;
                break;
              case "defaultValue":
                c = g;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(d(137, t));
                break;
              default:
                g !== T && il(l, t, v, g, e, T);
            }
        }
        In(l, i, c, f, y, S, n, u);
        return;
      case "select":
        g = i = c = v = null;
        for (n in a)
          if (((f = a[n]), a.hasOwnProperty(n) && f != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                g = f;
              default:
                e.hasOwnProperty(n) || il(l, t, n, null, e, f);
            }
        for (u in e)
          if (((n = e[u]), (f = a[u]), e.hasOwnProperty(u) && (n != null || f != null)))
            switch (u) {
              case "value":
                v = n;
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
          (e = g),
          v != null
            ? wa(l, !!a, v, !1)
            : !!e != !!a && (t != null ? wa(l, !!a, t, !0) : wa(l, !!a, a ? [] : "", !1)));
        return;
      case "textarea":
        g = v = null;
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
                v = u;
                break;
              case "defaultValue":
                g = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(d(91));
                break;
              default:
                u !== n && il(l, t, i, u, e, n);
            }
        Hf(l, v, g);
        return;
      case "option":
        for (var D in a)
          if (((v = a[D]), a.hasOwnProperty(D) && v != null && !e.hasOwnProperty(D)))
            switch (D) {
              case "selected":
                l.selected = !1;
                break;
              default:
                il(l, t, D, null, e, v);
            }
        for (f in e)
          if (((v = e[f]), (g = a[f]), e.hasOwnProperty(f) && v !== g && (v != null || g != null)))
            switch (f) {
              case "selected":
                l.selected = v && typeof v != "function" && typeof v != "symbol";
                break;
              default:
                il(l, t, f, v, e, g);
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
        for (var q in a)
          ((v = a[q]),
            a.hasOwnProperty(q) && v != null && !e.hasOwnProperty(q) && il(l, t, q, null, e, v));
        for (y in e)
          if (((v = e[y]), (g = a[y]), e.hasOwnProperty(y) && v !== g && (v != null || g != null)))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(d(137, t));
                break;
              default:
                il(l, t, y, v, e, g);
            }
        return;
      default:
        if (li(t)) {
          for (var cl in a)
            ((v = a[cl]),
              a.hasOwnProperty(cl) &&
                v !== void 0 &&
                !e.hasOwnProperty(cl) &&
                Qc(l, t, cl, void 0, e, v));
          for (S in e)
            ((v = e[S]),
              (g = a[S]),
              !e.hasOwnProperty(S) ||
                v === g ||
                (v === void 0 && g === void 0) ||
                Qc(l, t, S, v, e, g));
          return;
        }
    }
    for (var r in a)
      ((v = a[r]),
        a.hasOwnProperty(r) && v != null && !e.hasOwnProperty(r) && il(l, t, r, null, e, v));
    for (T in e)
      ((v = e[T]),
        (g = a[T]),
        !e.hasOwnProperty(T) || v === g || (v == null && g == null) || il(l, t, T, v, e, g));
  }
  function Bo(l) {
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
  function bh() {
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
        if (n && c && Bo(i)) {
          for (i = 0, c = u.responseEnd, e += 1; e < a.length; e++) {
            var f = a[e],
              y = f.startTime;
            if (y > c) break;
            var S = f.transferSize,
              T = f.initiatorType;
            S && Bo(T) && ((f = f.responseEnd), (i += S * (f < c ? 1 : (c - y) / (f - y))));
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
  function jo(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Yo(l, t) {
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
  function Lc(l, t) {
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
  var Vc = null;
  function ph() {
    var l = window.event;
    return l && l.type === "popstate" ? (l === Vc ? !1 : ((Vc = l), !0)) : ((Vc = null), !1);
  }
  var Go = typeof setTimeout == "function" ? setTimeout : void 0,
    Th = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Qo = typeof Promise == "function" ? Promise : void 0,
    zh =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Qo < "u"
          ? function (l) {
              return Qo.resolve(null).then(l).catch(Eh);
            }
          : Go;
  function Eh(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function ya(l) {
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
            (l.removeChild(u), _e(t));
            return;
          }
          e--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&") e++;
        else if (a === "html") hu(l.ownerDocument.documentElement);
        else if (a === "head") {
          ((a = l.ownerDocument.head), hu(a));
          for (var n = a.firstChild; n; ) {
            var i = n.nextSibling,
              c = n.nodeName;
            (n[Ne] ||
              c === "SCRIPT" ||
              c === "STYLE" ||
              (c === "LINK" && n.rel.toLowerCase() === "stylesheet") ||
              a.removeChild(n),
              (n = i));
          }
        } else a === "body" && hu(l.ownerDocument.body);
      a = u;
    } while (a);
    _e(t);
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
          (Kc(a), $n(a));
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
  function Ah(l, t, a, e) {
    for (; l.nodeType === 1; ) {
      var u = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!e && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (e) {
        if (!l[Ne])
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
      if (((l = yt(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function _h(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !a) ||
        ((l = yt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Lo(l, t) {
    for (; l.nodeType !== 8; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t) ||
        ((l = yt(l.nextSibling)), l === null)
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
  function Mh(l, t) {
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
  function yt(l) {
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
  function Vo(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "/$" || a === "/&") {
          if (t === 0) return yt(l.nextSibling);
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
        if (((l = t.documentElement), !l)) throw Error(d(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(d(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(d(454));
        return l;
      default:
        throw Error(d(451));
    }
  }
  function hu(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    $n(l);
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
  var Wt = _.d;
  _.d = { f: Oh, r: Dh, D: Uh, C: Nh, L: Hh, m: Rh, X: Ch, S: xh, M: qh };
  function Oh() {
    var l = Wt.f(),
      t = Sn();
    return l || t;
  }
  function Dh(l) {
    var t = Va(l);
    t !== null && t.tag === 5 && t.type === "form" ? s0(t) : Wt.r(l);
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
  function Uh(l) {
    (Wt.D(l), Wo("dns-prefetch", l, null));
  }
  function Nh(l, t) {
    (Wt.C(l, t), Wo("preconnect", l, t));
  }
  function Hh(l, t, a) {
    Wt.L(l, t, a);
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
          n = Ee(l);
          break;
        case "script":
          n = Ae(l);
      }
      vt.has(n) ||
        ((l = B(
          { rel: "preload", href: t === "image" && a && a.imageSrcSet ? void 0 : l, as: t },
          a,
        )),
        vt.set(n, l),
        e.querySelector(u) !== null ||
          (t === "style" && e.querySelector(ru(n))) ||
          (t === "script" && e.querySelector(mu(n))) ||
          ((t = e.createElement("link")), Hl(t, "link", l), _l(t), e.head.appendChild(t)));
    }
  }
  function Rh(l, t) {
    Wt.m(l, t);
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
          n = Ae(l);
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
            if (a.querySelector(mu(n))) return;
        }
        ((e = a.createElement("link")), Hl(e, "link", l), _l(e), a.head.appendChild(e));
      }
    }
  }
  function xh(l, t, a) {
    Wt.S(l, t, a);
    var e = ze;
    if (e && l) {
      var u = Ka(e).hoistableStyles,
        n = Ee(l);
      t = t || "default";
      var i = u.get(n);
      if (!i) {
        var c = { loading: 0, preload: null };
        if ((i = e.querySelector(ru(n)))) c.loading = 5;
        else {
          ((l = B({ rel: "stylesheet", href: l, "data-precedence": t }, a)),
            (a = vt.get(n)) && kc(l, a));
          var f = (i = e.createElement("link"));
          (_l(f),
            Hl(f, "link", l),
            (f._p = new Promise(function (y, S) {
              ((f.onload = y), (f.onerror = S));
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
  function Ch(l, t) {
    Wt.X(l, t);
    var a = ze;
    if (a && l) {
      var e = Ka(a).hoistableScripts,
        u = Ae(l),
        n = e.get(u);
      n ||
        ((n = a.querySelector(mu(u))),
        n ||
          ((l = B({ src: l, async: !0 }, t)),
          (t = vt.get(u)) && $c(l, t),
          (n = a.createElement("script")),
          _l(n),
          Hl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        e.set(u, n));
    }
  }
  function qh(l, t) {
    Wt.M(l, t);
    var a = ze;
    if (a && l) {
      var e = Ka(a).hoistableScripts,
        u = Ae(l),
        n = e.get(u);
      n ||
        ((n = a.querySelector(mu(u))),
        n ||
          ((l = B({ src: l, async: !0, type: "module" }, t)),
          (t = vt.get(u)) && $c(l, t),
          (n = a.createElement("script")),
          _l(n),
          Hl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        e.set(u, n));
    }
  }
  function ko(l, t, a, e) {
    var u = (u = K.current) ? On(u) : null;
    if (!u) throw Error(d(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = Ee(a.href)),
            (a = Ka(u).hoistableStyles),
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
          l = Ee(a.href);
          var n = Ka(u).hoistableStyles,
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
              (n = u.querySelector(ru(l))) && !n._p && ((i.instance = n), (i.state.loading = 5)),
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
                n || Bh(u, l, a, i.state))),
            t && e === null)
          )
            throw Error(d(528, ""));
          return i;
        }
        if (t && e !== null) throw Error(d(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" && t && typeof t != "function" && typeof t != "symbol"
            ? ((t = Ae(a)),
              (a = Ka(u).hoistableScripts),
              (e = a.get(t)),
              e || ((e = { type: "script", instance: null, count: 0, state: null }), a.set(t, e)),
              e)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(d(444, l));
    }
  }
  function Ee(l) {
    return 'href="' + ft(l) + '"';
  }
  function ru(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function $o(l) {
    return B({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function Bh(l, t, a, e) {
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
  function Ae(l) {
    return '[src="' + ft(l) + '"]';
  }
  function mu(l) {
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
          u = Ee(a.href);
          var n = l.querySelector(ru(u));
          if (n) return ((t.state.loading |= 4), (t.instance = n), _l(n), n);
          ((e = $o(a)),
            (u = vt.get(u)) && kc(e, u),
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
            (n = Ae(a.src)),
            (u = l.querySelector(mu(n)))
              ? ((t.instance = u), _l(u), u)
              : ((e = a),
                (u = vt.get(n)) && ((e = B({}, a)), $c(e, u)),
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
          throw Error(d(443, t.type));
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
  function kc(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title));
  }
  function $c(l, t) {
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
        !(n[Ne] || n[Ol] || (l === "link" && n.getAttribute("rel") === "stylesheet")) &&
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
  function jh(l, t, a) {
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
  function Yh(l, t, a, e) {
    if (
      a.type === "stylesheet" &&
      (typeof e.media != "string" || matchMedia(e.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var u = Ee(e.href),
          n = t.querySelector(ru(u));
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
          (e = $o(e)),
          (u = vt.get(u)) && kc(e, u),
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
  function Gh(l, t) {
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
            0 < l.imgBytes && Fc === 0 && (Fc = 62500 * bh());
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
        (l.count++, (Hn = new Map()), t.forEach(Qh, l), (Hn = null), Nn.call(l)));
  }
  function Qh(l, t) {
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
  var yu = {
    $$typeof: Rl,
    Provider: null,
    Consumer: null,
    _currentValue: Y,
    _currentValue2: Y,
    _threadCount: 0,
  };
  function Xh(l, t, a, e, u, n, i, c, f) {
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
  function td(l, t, a, e, u, n, i, c, f, y, S, T) {
    return (
      (l = new Xh(l, t, a, i, f, y, S, T, c)),
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
      Ci(n),
      l
    );
  }
  function ad(l) {
    return l ? ((l = te), l) : te;
  }
  function ed(l, t, a, e, u, n) {
    ((u = ad(u)),
      e.context === null ? (e.context = u) : (e.pendingContext = u),
      (e = ua(t)),
      (e.payload = { element: a }),
      (n = n === void 0 ? null : n),
      n !== null && (e.callback = n),
      (a = na(l, e, t)),
      a !== null && (wl(a, l, t), we(a, l, t)));
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
      var t = Da(l, 67108864);
      (t !== null && wl(t, l, 67108864), Ic(l, 67108864));
    }
  }
  function id(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = nt();
      t = wn(t);
      var a = Da(l, t);
      (a !== null && wl(a, l, t), Ic(l, t));
    }
  }
  var xn = !0;
  function Zh(l, t, a, e) {
    var u = b.T;
    b.T = null;
    var n = _.p;
    try {
      ((_.p = 2), Pc(l, t, a, e));
    } finally {
      ((_.p = n), (b.T = u));
    }
  }
  function Lh(l, t, a, e) {
    var u = b.T;
    b.T = null;
    var n = _.p;
    try {
      ((_.p = 8), Pc(l, t, a, e));
    } finally {
      ((_.p = n), (b.T = u));
    }
  }
  function Pc(l, t, a, e) {
    if (xn) {
      var u = lf(e);
      if (u === null) (Gc(l, t, e, Cn, a), fd(l, e));
      else if (Kh(u, l, t, a, e)) e.stopPropagation();
      else if ((fd(l, e), t & 4 && -1 < Vh.indexOf(l))) {
        for (; u !== null; ) {
          var n = Va(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var i = Ea(n.pendingLanes);
                  if (i !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var f = 1 << (31 - Il(i));
                      ((c.entanglements[1] |= f), (i &= ~f));
                    }
                    (Ot(n), (ll & 6) === 0 && ((vn = $l() + 500), su(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((c = Da(n, 2)), c !== null && wl(c, n, 2), Sn(), Ic(n, 2));
            }
          if (((n = lf(e)), n === null && Gc(l, t, e, Cn, a), n === u)) break;
          u = n;
        }
        u !== null && e.stopPropagation();
      } else Gc(l, t, e, null, a);
    }
  }
  function lf(l) {
    return ((l = ai(l)), tf(l));
  }
  var Cn = null;
  function tf(l) {
    if (((Cn = null), (l = La(l)), l !== null)) {
      var t = j(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((l = Q(t)), l !== null)) return l;
          l = null;
        } else if (a === 31) {
          if (((l = hl(t)), l !== null)) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return ((Cn = l), null);
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
        switch (Ud()) {
          case mf:
            return 2;
          case yf:
            return 8;
          case zu:
          case Nd:
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
    va = null,
    ga = null,
    Sa = null,
    vu = new Map(),
    gu = new Map(),
    ba = [],
    Vh =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function fd(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        va = null;
        break;
      case "dragenter":
      case "dragleave":
        ga = null;
        break;
      case "mouseover":
      case "mouseout":
        Sa = null;
        break;
      case "pointerover":
      case "pointerout":
        vu.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        gu.delete(t.pointerId);
    }
  }
  function Su(l, t, a, e, u, n) {
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
  function Kh(l, t, a, e, u) {
    switch (t) {
      case "focusin":
        return ((va = Su(va, l, t, a, e, u)), !0);
      case "dragenter":
        return ((ga = Su(ga, l, t, a, e, u)), !0);
      case "mouseover":
        return ((Sa = Su(Sa, l, t, a, e, u)), !0);
      case "pointerover":
        var n = u.pointerId;
        return (vu.set(n, Su(vu.get(n) || null, l, t, a, e, u)), !0);
      case "gotpointercapture":
        return ((n = u.pointerId), gu.set(n, Su(gu.get(n) || null, l, t, a, e, u)), !0);
    }
    return !1;
  }
  function sd(l) {
    var t = La(l.target);
    if (t !== null) {
      var a = j(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = Q(a)), t !== null)) {
            ((l.blockedOn = t),
              zf(l.priority, function () {
                id(a);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = hl(a)), t !== null)) {
            ((l.blockedOn = t),
              zf(l.priority, function () {
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
  function qn(l) {
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
    qn(l) && a.delete(t);
  }
  function Jh() {
    ((af = !1),
      va !== null && qn(va) && (va = null),
      ga !== null && qn(ga) && (ga = null),
      Sa !== null && qn(Sa) && (Sa = null),
      vu.forEach(od),
      gu.forEach(od));
  }
  function Bn(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      af || ((af = !0), h.unstable_scheduleCallback(h.unstable_NormalPriority, Jh)));
  }
  var jn = null;
  function dd(l) {
    jn !== l &&
      ((jn = l),
      h.unstable_scheduleCallback(h.unstable_NormalPriority, function () {
        jn === l && (jn = null);
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
  function _e(l) {
    function t(f) {
      return Bn(f, l);
    }
    (va !== null && Bn(va, l),
      ga !== null && Bn(ga, l),
      Sa !== null && Bn(Sa, l),
      vu.forEach(t),
      gu.forEach(t));
    for (var a = 0; a < ba.length; a++) {
      var e = ba[a];
      e.blockedOn === l && (e.blockedOn = null);
    }
    for (; 0 < ba.length && ((a = ba[0]), a.blockedOn === null); )
      (sd(a), a.blockedOn === null && ba.shift());
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
  ((Yn.prototype.render = ef.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(d(409));
      var a = t.current,
        e = nt();
      ed(a, e, l, t, null, null);
    }),
    (Yn.prototype.unmount = ef.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          (ed(l.current, 2, null, l, null, null), Sn(), (t[Za] = null));
        }
      }));
  function Yn(l) {
    this._internalRoot = l;
  }
  Yn.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = Tf();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < ba.length && t !== 0 && t < ba[a].priority; a++);
      (ba.splice(a, 0, l), a === 0 && sd(l));
    }
  };
  var rd = A.version;
  if (rd !== "19.2.5") throw Error(d(527, rd, "19.2.5"));
  _.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(d(188))
        : ((l = Object.keys(l).join(",")), Error(d(268, l)));
    return ((l = E(t)), (l = l !== null ? V(l) : null), (l = l === null ? null : l.stateNode), l);
  };
  var wh = {
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
        ((Oe = Gn.inject(wh)), (Fl = Gn));
      } catch {}
  }
  return (
    (pu.createRoot = function (l, t) {
      if (!R(l)) throw Error(d(299));
      var a = !1,
        e = "",
        u = b0,
        n = p0,
        i = T0;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (e = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
          t.onCaughtError !== void 0 && (n = t.onCaughtError),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = td(l, 1, !1, null, null, a, e, null, u, n, i, hd)),
        (l[Za] = t.current),
        Yc(l),
        new ef(t)
      );
    }),
    (pu.hydrateRoot = function (l, t, a) {
      if (!R(l)) throw Error(d(299));
      var e = !1,
        u = "",
        n = b0,
        i = p0,
        c = T0,
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
        (u = ua(e)),
        (u.callback = null),
        na(a, u, e),
        (a = e),
        (t.current.lanes = a),
        Ue(t, a),
        Ot(t),
        (l[Za] = t.current),
        Yc(l),
        new Yn(t)
      );
    }),
    (pu.version = "19.2.5"),
    pu
  );
}
var Ed;
function er() {
  if (Ed) return cf.exports;
  Ed = 1;
  function h() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h);
      } catch (A) {
        console.error(A);
      }
  }
  return (h(), (cf.exports = ar()), cf.exports);
}
var ur = er();
const nr = [
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];
function ir({ difficulty: h, onChange: A, disabled: O }) {
  return H.jsx("div", {
    className: "difficulty-select",
    role: "radiogroup",
    "aria-label": "Difficulty",
    children: nr.map((d) =>
      H.jsx(
        "button",
        {
          className: `difficulty-btn ${d.value === h ? "difficulty-btn--active" : ""}`,
          role: "radio",
          "aria-checked": d.value === h,
          disabled: O,
          onClick: () => A(d.value),
          children: d.label,
        },
        d.value,
      ),
    ),
  });
}
const cr = [
  { value: "timed", label: "Timed (60s)" },
  { value: "passage", label: "Passage" },
];
function fr({ mode: h, onChange: A, disabled: O }) {
  return H.jsx("div", {
    className: "mode-select",
    role: "radiogroup",
    "aria-label": "Mode",
    children: cr.map((d) =>
      H.jsx(
        "button",
        {
          className: `mode-btn ${d.value === h ? "mode-btn--active" : ""}`,
          role: "radio",
          "aria-checked": d.value === h,
          disabled: O,
          onClick: () => A(d.value),
          children: d.label,
        },
        d.value,
      ),
    ),
  });
}
const sr = 6e4;
function or(h, A) {
  return A === "timed" ? `${Math.max(0, (sr - h) / 1e3).toFixed(1)}s` : `${(h / 1e3).toFixed(1)}s`;
}
function dr({ wpm: h, accuracy: A, elapsedMs: O, mode: d }) {
  return H.jsxs("div", {
    className: "stat-panel",
    children: [
      H.jsxs("div", {
        className: "stat-badge",
        children: [
          H.jsx("span", { className: "stat-badge__value", children: h }),
          H.jsx("span", { className: "stat-badge__label", children: "WPM" }),
        ],
      }),
      H.jsxs("div", {
        className: "stat-badge",
        children: [
          H.jsxs("span", { className: "stat-badge__value", children: [A, "%"] }),
          H.jsx("span", { className: "stat-badge__label", children: "Accuracy" }),
        ],
      }),
      H.jsxs("div", {
        className: "stat-badge",
        children: [
          H.jsx("span", { className: "stat-badge__value", children: or(O, d) }),
          H.jsx("span", { className: "stat-badge__label", children: "Time" }),
        ],
      }),
    ],
  });
}
function hr({
  difficulty: h,
  mode: A,
  wpm: O,
  accuracy: d,
  elapsedMs: R,
  onDifficultyChange: j,
  onModeChange: Q,
  disabled: hl,
}) {
  return H.jsxs("div", {
    className: "controls",
    children: [
      H.jsx(dr, { wpm: O, accuracy: d, elapsedMs: R, mode: A }),
      H.jsx(ir, { difficulty: h, onChange: j, disabled: hl }),
      H.jsx(fr, { mode: A, onChange: Q, disabled: hl }),
    ],
  });
}
const rr = "" + new URL("logo-large-DQpruBTa.svg", import.meta.url).href,
  mr =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20fill='none'%20viewBox='0%200%2032%2032'%3e%3cpath%20fill='url(%23a)'%20fill-rule='evenodd'%20d='M22.827%2015.626a1.155%201.155%200%201%201%20.001-2.308%201.155%201.155%200%200%201-.001%202.308m-2.279%203.84a1.156%201.156%200%200%201%200-2.31%201.156%201.156%200%200%201%200%202.31m-.784%204.746h-7.526a1%201%200%200%201%200-2h7.526a1%201%200%200%201%200%202m-9.48-5.902a1.156%201.156%200%201%201%201.155%201.156%201.156%201.156%200%200%201-1.155-1.156M9.16%2015.626a1.155%201.155%200%201%201%200-2.308%201.155%201.155%200%200%201%200%202.308m4.557-2.31a1.155%201.155%200%201%201%200%202.311%201.155%201.155%200%200%201%200-2.31m2.276%203.84a1.156%201.156%200%200%201%200%202.31%201.156%201.156%200%200%201%200-2.31m2.277-3.84a1.155%201.155%200%201%201-.001%202.311%201.155%201.155%200%200%201%200-2.31m3.369-4.77h-4.447v-.185a3.596%203.596%200%200%200-3.578-3.538H12.27a.67.67%200%200%201-.668-.66%201%201%200%200%200-2%20.019%202.67%202.67%200%200%200%202.657%202.641h1.335c.809-.02%201.586.696%201.598%201.552v.171h-4.83c-4.4%200-7.028%202.579-7.028%206.898v6.497c-.007%202.084.618%203.817%201.808%205.01%201.224%201.229%203.024%201.877%205.208%201.877h11.289c4.4%200%207.028-2.574%207.028-6.884v-6.4c0-4.382-2.628-6.998-7.028-6.998'%20clip-rule='evenodd'/%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='5.5'%20x2='32.5'%20y1='7'%20y2='38.5'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%234ca6ff'/%3e%3cstop%20offset='1'%20stop-color='%23f4dc73'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",
  yr =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='21'%20height='18'%20fill='none'%20viewBox='0%200%2021%2018'%3e%3cpath%20fill='%23f4dc73'%20d='M19.406%202.25c.457%200%20.844.387.844.844v1.969c0%201.265-.809%202.566-2.18%203.55-1.125.809-2.46%201.301-3.867%201.477-1.125%201.828-2.39%202.566-2.39%202.566v2.531H13.5c1.23%200%202.25.739%202.25%201.97v.421c0%20.246-.21.422-.422.422H4.922a.406.406%200%200%201-.422-.422v-.422c0-1.23.984-1.968%202.25-1.968h1.688v-2.532s-1.301-.738-2.426-2.566c-1.407-.176-2.742-.668-3.867-1.477C.773%207.63%200%206.328%200%205.063v-1.97c0-.456.352-.843.844-.843H4.5V.844C4.5.387%204.852%200%205.344%200h9.562c.457%200%20.844.387.844.844V2.25zM3.48%206.785c.422.317.915.563%201.477.774A12.7%2012.7%200%200%201%204.5%204.5H2.25v.563c0%20.421.352%201.125%201.23%201.722M18%205.062V4.5h-2.285a12.7%2012.7%200%200%201-.457%203.059c.562-.211%201.055-.457%201.476-.774C17.367%206.363%2018%205.66%2018%205.062'/%3e%3c/svg%3e";
function vr({ bestScore: h }) {
  return h
    ? H.jsxs("div", {
        className: "personal-best-badge",
        children: [
          H.jsx("img", { src: yr, alt: "", width: "20", height: "18" }),
          H.jsxs("span", {
            className: "personal-best-badge__label",
            children: ["Personal Best: ", h.wpm, " WPM"],
          }),
        ],
      })
    : null;
}
function gr({ bestScore: h }) {
  return H.jsxs("header", {
    className: "app-header",
    children: [
      H.jsxs("picture", {
        children: [
          H.jsx("source", { srcSet: rr, media: "(min-width: 600px)" }),
          H.jsx("img", { className: "header-logo", src: mr, alt: "Typed", height: "32" }),
        ],
      }),
      H.jsx(vr, { bestScore: h }),
    ],
  });
}
const Sr =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='20'%20fill='none'%20viewBox='0%200%2020%2020'%3e%3cpath%20fill='%23fff'%20d='M1.563%201.281h.949c.246%200%20.422.211.422.457l-.07%203.446a8.6%208.6%200%200%201%207.277-3.868c4.816%200%208.718%203.938%208.718%208.72-.035%204.816-3.937%208.683-8.718%208.683a8.86%208.86%200%200%201-5.871-2.215.446.446%200%200%201%200-.633l.703-.703c.14-.14.386-.14.562%200%201.23%201.09%202.813%201.723%204.606%201.723A6.88%206.88%200%200%200%2017.03%2010c0-3.797-3.093-6.89-6.89-6.89-2.813%200-5.203%201.687-6.293%204.078l4.43-.106c.245%200%20.456.176.456.422v.95c0%20.245-.21.421-.421.421h-6.75a.406.406%200%200%201-.422-.422v-6.75c0-.21.175-.422.422-.422'/%3e%3c/svg%3e",
  br =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='64'%20height='64'%20fill='none'%20viewBox='0%200%2064%2064'%3e%3cg%20clip-path='url(%23a)'%3e%3cpath%20fill='%23121212'%20d='M0%2032C0%2014.327%2014.327%200%2032%200s32%2014.327%2032%2032-14.327%2032-32%2032S0%2049.673%200%2032'/%3e%3cpath%20fill='%234dd67b'%20fill-rule='evenodd'%20d='M45.45%2026.01%2029.895%2041.567a2.51%202.51%200%200%201-1.785.741c-.65%200-1.294-.245-1.79-.74l-7.777-7.778a2.527%202.527%200%200%201%203.57-3.574l5.997%205.992%2013.766-13.77a2.527%202.527%200%201%201%203.574%203.574M32%200C14.356%200%200%2014.356%200%2032c0%2017.647%2014.356%2032%2032%2032s32-14.353%2032-32C64%2014.356%2049.644%200%2032%200'%20clip-rule='evenodd'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20fill='%23fff'%20d='M0%2032C0%2014.327%2014.327%200%2032%200s32%2014.327%2032%2032-14.327%2032-32%2032S0%2049.673%200%2032'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
function pr({ isNewBest: h, isFirstTest: A }) {
  let O = "Test Complete";
  return (
    A ? (O = "Baseline Established!") : h && (O = "High Score Smashed!"),
    H.jsxs("div", {
      className: "result-header",
      children: [
        H.jsx("img", { src: br, alt: "", className: "result-header__icon" }),
        H.jsx("h2", { className: "result-header__title", children: O }),
      ],
    })
  );
}
function Tr({ wpm: h, accuracy: A, correctChars: O, incorrectChars: d }) {
  return H.jsxs("div", {
    className: "stats-grid",
    children: [
      H.jsxs("div", {
        className: "stats-grid__item",
        children: [
          H.jsx("span", { className: "stats-grid__value", children: h }),
          H.jsx("span", { className: "stats-grid__label", children: "WPM" }),
        ],
      }),
      H.jsxs("div", {
        className: "stats-grid__item",
        children: [
          H.jsxs("span", { className: "stats-grid__value", children: [A, "%"] }),
          H.jsx("span", { className: "stats-grid__label", children: "Accuracy" }),
        ],
      }),
      H.jsxs("div", {
        className: "stats-grid__item",
        children: [
          H.jsx("span", { className: "stats-grid__value", children: O }),
          H.jsx("span", { className: "stats-grid__label", children: "Correct" }),
        ],
      }),
      H.jsxs("div", {
        className: "stats-grid__item",
        children: [
          H.jsx("span", { className: "stats-grid__value", children: d }),
          H.jsx("span", { className: "stats-grid__label", children: "Incorrect" }),
        ],
      }),
    ],
  });
}
function zr({
  wpm: h,
  accuracy: A,
  correctChars: O,
  incorrectChars: d,
  isNewBest: R,
  isFirstTest: j,
  onRestart: Q,
}) {
  return H.jsxs("div", {
    className: "results-panel",
    children: [
      H.jsx(pr, { isNewBest: R, isFirstTest: j }),
      H.jsx(Tr, { wpm: h, accuracy: A, correctChars: O, incorrectChars: d }),
      H.jsxs("button", {
        className: "results-panel__restart",
        onClick: Q,
        children: [
          H.jsx("img", { src: Sr, alt: "", className: "results-panel__restart-icon" }),
          "Restart",
        ],
      }),
    ],
  });
}
function Er({ passage: h, charStatuses: A, currentIndex: O }) {
  if (!h) return null;
  const d = A && A.length > 0;
  return H.jsx("p", {
    className: "passage",
    children: [...h.text].map((R, j) => {
      let Q = "passage-char";
      return (
        d &&
          (j === O
            ? (Q += " passage-char--cursor")
            : A[j] === "correct"
              ? (Q += " passage-char--correct")
              : A[j] === "incorrect" && (Q += " passage-char--incorrect")),
        H.jsx("span", { className: Q, children: R }, j)
      );
    }),
  });
}
function Ar({ onStart: h }) {
  return H.jsx("div", {
    className: "start-overlay",
    children: H.jsx("button", {
      className: "start-overlay__btn",
      onClick: h,
      children: "Start Test",
    }),
  });
}
function _r({ phase: h, passage: A, charStatuses: O, currentIndex: d, onStart: R }) {
  return h === "finished"
    ? null
    : H.jsxs("div", {
        className: "typing-area",
        children: [
          H.jsx(Er, {
            passage: A,
            charStatuses: h === "running" ? O : void 0,
            currentIndex: h === "running" ? d : void 0,
          }),
          h === "idle" && H.jsx(Ar, { onStart: R }),
        ],
      });
}
const Mr = "typing-speed-best";
function Or() {
  const [h] = Dt.useState(() => {
    try {
      const A = localStorage.getItem(Mr);
      return A ? JSON.parse(A) : null;
    } catch {
      return null;
    }
  });
  return h;
}
function Dr(h, A, O, d) {
  const R = Dt.useRef({ phase: h, currentIndex: A, passageLength: O });
  ((R.current = { phase: h, currentIndex: A, passageLength: O }),
    Dt.useEffect(() => {
      function j(Q) {
        const { phase: hl, currentIndex: x, passageLength: E } = R.current;
        if (hl !== "finished" && !(x >= E && E > 0)) {
          if (Q.key === "Backspace") {
            (Q.preventDefault(), hl === "running" && d({ type: "BACKSPACE" }));
            return;
          }
          Q.key.length === 1 &&
            !Q.ctrlKey &&
            !Q.altKey &&
            !Q.metaKey &&
            (Q.preventDefault(),
            hl === "idle" && d({ type: "START" }),
            d({ type: "TYPE_CHAR", payload: Q.key }));
        }
      }
      return (
        document.addEventListener("keydown", j), () => document.removeEventListener("keydown", j)
      );
    }, [d]));
}
function Ur(h, A, O) {
  return Dt.useMemo(() => {
    const d = h + A,
      R = O / 6e4,
      j = R > 0 ? Math.round(h / 5 / R) : 0,
      Q = d > 0 ? Math.round((h / d) * 100) : 100;
    return { wpm: j, accuracy: Q };
  }, [h, A, O]);
}
function Nr(h, A, O) {
  const d = Dt.useRef(A);
  ((d.current = A),
    Dt.useEffect(() => {
      if (h !== "running" || !A) return;
      const R = setInterval(() => {
        const j = Date.now() - d.current;
        O({ type: "TICK", payload: j });
      }, 100);
      return () => clearInterval(R);
    }, [h, A, O]));
}
const _d = {
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
function Hr(h, A) {
  switch (A.type) {
    case "SET_DIFFICULTY":
      return h.phase !== "idle" ? h : { ...h, difficulty: A.payload };
    case "SET_MODE":
      return h.phase !== "idle" ? h : { ...h, mode: A.payload };
    case "SELECT_PASSAGE":
      return h.phase !== "idle"
        ? h
        : {
            ...h,
            passage: A.payload,
            charStatuses: new Array(A.payload.text.length).fill("untouched"),
            currentIndex: 0,
            correctKeystrokes: 0,
            incorrectKeystrokes: 0,
            elapsedMs: 0,
            startedAt: null,
          };
    case "START":
      return { ...h, phase: "running", startedAt: Date.now() };
    case "TYPE_CHAR": {
      if (h.phase !== "running" || !h.passage || h.currentIndex >= h.passage.text.length) return h;
      const O = h.passage.text[h.currentIndex],
        d = A.payload === O,
        R = [...h.charStatuses];
      return (
        (R[h.currentIndex] = d ? "correct" : "incorrect"),
        {
          ...h,
          charStatuses: R,
          currentIndex: h.currentIndex + 1,
          correctKeystrokes: h.correctKeystrokes + (d ? 1 : 0),
          incorrectKeystrokes: h.incorrectKeystrokes + (d ? 0 : 1),
        }
      );
    }
    case "BACKSPACE": {
      if (h.phase !== "running" || h.currentIndex <= 0) return h;
      const O = h.currentIndex - 1,
        d = [...h.charStatuses];
      return ((d[O] = "untouched"), { ...h, charStatuses: d, currentIndex: O });
    }
    case "TICK":
      return h.phase !== "running" ? h : { ...h, elapsedMs: A.payload };
    case "FINISH":
      return { ...h, phase: "finished" };
    case "RESET":
      return { ..._d, difficulty: h.difficulty, mode: h.mode };
    default:
      return h;
  }
}
function Rr() {
  return Dt.useReducer(Hr, _d);
}
const xr = [
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
  Cr = [
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
  qr = [
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
  Br = { easy: xr, medium: Cr, hard: qr };
function Ad(h) {
  const O = Br[h];
  if (!O || O.length === 0) throw new Error(`No passages found for difficulty: ${h}`);
  return O[Math.floor(Math.random() * O.length)];
}
const jr = 6e4;
function Yr() {
  var E;
  const [h, A] = Rr(),
    O = Or(),
    d = Ur(h.correctKeystrokes, h.incorrectKeystrokes, h.elapsedMs);
  (Dt.useEffect(() => {
    const V = Ad(h.difficulty);
    A({ type: "SELECT_PASSAGE", payload: V });
  }, [h.difficulty, A]),
    Dr(h.phase, h.currentIndex, ((E = h.passage) == null ? void 0 : E.text.length) ?? 0, A),
    Nr(h.phase, h.startedAt, A),
    Dt.useEffect(() => {
      if (h.phase !== "running" || !h.passage) return;
      const V = h.currentIndex >= h.passage.text.length,
        B = h.mode === "timed" && h.elapsedMs >= jr;
      (V || B) && A({ type: "FINISH" });
    }, [h.phase, h.currentIndex, h.passage, h.mode, h.elapsedMs, A]));
  const R = (V) => {
      A({ type: "SET_DIFFICULTY", payload: V });
    },
    j = (V) => {
      A({ type: "SET_MODE", payload: V });
    },
    Q = () => {
      A({ type: "START" });
    },
    hl = () => {
      A({ type: "RESET" });
      const V = Ad(h.difficulty);
      A({ type: "SELECT_PASSAGE", payload: V });
    },
    x = h.phase === "idle" || h.phase === "running";
  return H.jsxs("div", {
    className: "app",
    children: [
      H.jsx(gr, { bestScore: O }),
      x &&
        H.jsx(hr, {
          difficulty: h.difficulty,
          mode: h.mode,
          wpm: d.wpm,
          accuracy: d.accuracy,
          elapsedMs: h.elapsedMs,
          onDifficultyChange: R,
          onModeChange: j,
          disabled: h.phase === "running",
        }),
      h.phase !== "finished" &&
        H.jsx(_r, {
          phase: h.phase,
          passage: h.passage,
          charStatuses: h.charStatuses,
          currentIndex: h.currentIndex,
          onStart: Q,
        }),
      h.phase === "finished" &&
        H.jsx(zr, {
          wpm: d.wpm,
          accuracy: d.accuracy,
          correctChars: h.correctKeystrokes,
          incorrectChars: h.incorrectKeystrokes,
          isNewBest: !1,
          isFirstTest: !O,
          onRestart: hl,
        }),
    ],
  });
}
ur.createRoot(document.getElementById("root")).render(
  H.jsx(Dt.StrictMode, { children: H.jsx(Yr, {}) }),
);
