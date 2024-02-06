! function(t, e) {
	"object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self)
		.Kookit = {})
}(this, function(t) {
	function c(t, s, a, l) {
		return new(a = a || Promise)(function(i, e) {
			function r(t) {
				try {
					o(l.next(t))
				} catch (t) {
					e(t)
				}
			}

			function n(t) {
				try {
					o(l.throw(t))
				} catch (t) {
					e(t)
				}
			}

			function o(t) {
				var e;
				t.done ? i(t.value) : ((e = t.value) instanceof a ? e : new a(function(t) {
						t(e)
					}))
					.then(r, n)
			}
			o((l = l.apply(t, s || []))
				.next())
		})
	}
	class a {
		static getKookitConfig(t) {
			return (JSON.parse(localStorage.getItem("kookitConfig")) || {})[t]
		}
		static setKookitConfig(t, e) {
			let i = JSON.parse(localStorage.getItem("kookitConfig")) || {};
			i[t] = e, localStorage.setItem("kookitConfig", JSON.stringify(i))
		}
		static removeKookitConfig() {
			localStorage.removeItem("kookitConfig")
		}
	}
	let r = ["章", "节", "回", "節", "卷", "部", "輯", "辑", "話", "集", "话", "篇"];
	String.prototype.contains = function(t) {
		return -1 < this.indexOf(t)
	};
	const l = (t, e = !1) => t && !t.contains("[") && !t.contains("(") && !t.contains("。") && !t.contains("“") && !t.contains("‘") && !t.contains("；") && !t.contains(";") && (t.startsWith("CHAPTER") || t.startsWith("Chapter") || t.startsWith("序章") || t.startsWith("前言") || t.startsWith("声明") || t.startsWith("聲明") || t.startsWith("写在前面的话") || t.startsWith("后记") || t.startsWith("楔子") || t.startsWith("后序") || t.startsWith("寫在前面的話") || t.startsWith("後記") || t.startsWith("後序") || t.startsWith("第") && i(t) || t.startsWith("卷") && n(t) || !e && t.contains("第") && (" " === t[t.indexOf("第") - 1] || "　" === t[t.indexOf("第") - 1] || "、" === t[t.indexOf("第") - 1] || "：" === t[t.indexOf("第") - 1] || ":" === t[t.indexOf("第") - 1]) && i(t.substr(t.indexOf("第"))) || !e && t.indexOf(" ") && o(t) || !e && t.indexOf("　") && o(t) || !e && t.indexOf("、") && h(t) || !e && t.indexOf("：") && s(t) || !e && t.indexOf(":") && s(t)),
		i = e => {
			let i = !1;
			for (let t = 0; t < r.length && (!(-1 < e.indexOf(r[t]) && (" " === e[e.indexOf(r[t]) + 1] || "　" === e[e.indexOf(r[t]) + 1] || "、" === e[e.indexOf(r[t]) + 1] || "：" === e[e.indexOf(r[t]) + 1] || -1 < e.indexOf("章") || ":" === e[e.indexOf(r[t]) + 1])) && e[e.indexOf(r[t]) + 1] || ((/^[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u767e\u5343\u4e07\u842c\u96f6]+$/.test(e.substring(1, e.indexOf(r[t]))
				.trim()) || /^\d+$/.test(e.substring(1, e.indexOf(r[t]))
				.trim())) && (i = !0), !i)); t++);
			return i
		},
		n = t => !(!/^[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u767e\u5343\u4e07\u842c\u96f6]+$/.test(t.substring(1, t.indexOf(" "))) && !/^\d+$/.test(t.substring(1, t.indexOf(" ")))) || (!(!/^[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u767e\u5343\u4e07\u842c\u96f6]+$/.test(t.substring(1, t.indexOf("　"))) && !/^\d+$/.test(t.substring(1, t.indexOf("　")))) || !(!/^[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u767e\u5343\u4e07\u842c\u96f6]+$/.test(t.substring(1)) && !/^\d+$/.test(t.substring(1)))),
		o = t => !!/^[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u767e\u5343\u4e07\u842c\u96f6]+$/.test(t.substring(0, t.indexOf(" "))) || (!!/^[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u767e\u5343\u4e07\u842c\u96f6]+$/.test(t.substring(0, t.indexOf("　"))) || (!!/^\d+$/.test(t.substring(0, t.indexOf(" "))) || !!/^\d+$/.test(t.substring(0, t.indexOf("　"))))),
		s = t => !!/^[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u767e\u5343\u4e07\u842c\u96f6]+$/.test(t.substring(0, t.indexOf(":"))) || (!!/^[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u767e\u5343\u4e07\u842c\u96f6]+$/.test(t.substring(0, t.indexOf("："))) || (!!/^\d+$/.test(t.substring(0, t.indexOf(":"))) || !!/^\d+$/.test(t.substring(0, t.indexOf("："))))),
		h = t => !!/^[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d\u5341\u767e\u5343\u4e07\u842c\u96f6]+$/.test(t.substring(0, t.indexOf("、"))) || !!/^\d+$/.test(t.substring(0, t.indexOf("、"))),
		u = t => "♦" === t.trim() || "●" === t.trim() || "◾" === t.trim() || "◀" === t.trim() || "◼" === t.trim() || "■" === t.trim(),
		f = t => "|" === t.trim() || "Next" === t.trim() || "Main menu" === t.trim() || "Section menu" === t.trim() || "Previous" === t.trim();
	var d = window;
	window.a = window.atob;
	String.prototype.c = function(t) {
		return -1 < this.indexOf(t)
	}, String.prototype.slim = function() {
		return this.split("")
			.filter(t => "=" !== t && "-" !== t && "_" !== t && "+" !== t)
			.join("")
	};
	const g = () => c(void 0, void 0, void 0, function*() {
		a.removeKookitConfig();
		let t = yield new Promise((t, e) => {
			t(d.e(d.a("ZG9jdW1lbnQudGl0bGU" + String.fromCharCode(61))))
		});
		return !!t.c(d.a("ZG8gUmU" + String.fromCharCode(61)))
	});
	var e = "1.13.1",
		m = "object" == typeof self && self.self === self && self || "object" == typeof global && global.global === global && global || Function("return this")() || {},
		p = Array.prototype,
		v = Object.prototype,
		y = "undefined" != typeof Symbol ? Symbol.prototype : null,
		b = p.push,
		x = p.slice,
		L = v.toString,
		T = v.hasOwnProperty,
		w = "undefined" != typeof ArrayBuffer,
		C = "undefined" != typeof DataView,
		k = Array.isArray,
		D = Object.keys,
		_ = Object.create,
		S = w && ArrayBuffer.isView,
		E = isNaN,
		B = isFinite,
		I = !{
			toString: null
		}.propertyIsEnumerable("toString"),
		O = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
		A = Math.pow(2, 53) - 1;

	function N(n, o) {
		return o = null == o ? n.length - 1 : +o,
			function() {
				for (var t = Math.max(arguments.length - o, 0), e = Array(t), i = 0; i < t; i++) e[i] = arguments[i + o];
				switch (o) {
					case 0:
						return n.call(this, e);
					case 1:
						return n.call(this, arguments[0], e);
					case 2:
						return n.call(this, arguments[0], arguments[1], e)
				}
				for (var r = Array(o + 1), i = 0; i < o; i++) r[i] = arguments[i];
				return r[o] = e, n.apply(this, r)
			}
	}

	function M(t) {
		var e = typeof t;
		return "function" == e || "object" == e && !!t
	}

	function j(t) {
		return void 0 === t
	}

	function W(t) {
		return !0 === t || !1 === t || "[object Boolean]" === L.call(t)
	}

	function U(t) {
		var e = "[object " + t + "]";
		return function(t) {
			return L.call(t) === e
		}
	}
	var P = U("String"),
		H = U("Number"),
		K = U("Date"),
		z = U("RegExp"),
		R = U("Error"),
		$ = U("Symbol"),
		F = U("ArrayBuffer"),
		q = U("Function"),
		J = m.document && m.document.childNodes,
		V = q = "function" != typeof /./ && "object" != typeof Int8Array && "function" != typeof J ? function(t) {
			return "function" == typeof t || !1
		} : q,
		G = U("Object"),
		Z = C && G(new DataView(new ArrayBuffer(8))),
		Q = "undefined" != typeof Map && G(new Map()),
		X = U("DataView");
	var Y = Z ? function(t) {
			return null != t && V(t.getInt8) && F(t.buffer)
		} : X,
		tt = k || U("Array");

	function et(t, e) {
		return null != t && T.call(t, e)
	}
	var it = U("Arguments");
	! function() {
		it(arguments) || (it = function(t) {
			return et(t, "callee")
		})
	}();
	var rt = it;

	function nt(t) {
		return H(t) && E(t)
	}

	function ot(t) {
		return function() {
			return t
		}
	}

	function st(e) {
		return function(t) {
			t = e(t);
			return "number" == typeof t && 0 <= t && t <= A
		}
	}

	function at(e) {
		return function(t) {
			return null == t ? void 0 : t[e]
		}
	}
	var lt = at("byteLength"),
		ht = st(lt),
		ct = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
	var ut = w ? function(t) {
			return S ? S(t) && !Y(t) : ht(t) && ct.test(L.call(t))
		} : ot(!1),
		ft = at("length");

	function dt(t, e) {
		e = function(e) {
			for (var i = {}, t = e.length, r = 0; r < t; ++r) i[e[r]] = !0;
			return {
				contains: function(t) {
					return i[t]
				},
				push: function(t) {
					return i[t] = !0, e.push(t)
				}
			}
		}(e);
		var i = O.length,
			r = t.constructor,
			n = V(r) && r.prototype || v,
			o = "constructor";
		for (et(t, o) && !e.contains(o) && e.push(o); i--;)(o = O[i]) in t && t[o] !== n[o] && !e.contains(o) && e.push(o)
	}

	function gt(t) {
		if (!M(t)) return [];
		if (D) return D(t);
		var e, i = [];
		for (e in t) et(t, e) && i.push(e);
		return I && dt(t, i), i
	}

	function mt(t, e) {
		var i = gt(e),
			r = i.length;
		if (null == t) return !r;
		for (var n = Object(t), o = 0; o < r; o++) {
			var s = i[o];
			if (e[s] !== n[s] || !(s in n)) return !1
		}
		return !0
	}

	function pt(t) {
		return t instanceof pt ? t : this instanceof pt ? void(this._wrapped = t) : new pt(t)
	}

	function vt(t) {
		return new Uint8Array(t.buffer || t, t.byteOffset || 0, lt(t))
	}
	pt.VERSION = e, pt.prototype.valueOf = pt.prototype.toJSON = pt.prototype.value = function() {
		return this._wrapped
	}, pt.prototype.toString = function() {
		return String(this._wrapped)
	};
	var yt = "[object DataView]";

	function bt(t, e, i, r) {
		if (t === e) return 0 !== t || 1 / t == 1 / e;
		if (null == t || null == e) return !1;
		if (t != t) return e != e;
		var n = typeof t;
		return ("function" == n || "object" == n || "object" == typeof e) && function t(e, i, r, n) {
			e instanceof pt && (e = e._wrapped);
			i instanceof pt && (i = i._wrapped);
			var o = L.call(e);
			if (o !== L.call(i)) return !1;
			if (Z && "[object Object]" == o && Y(e)) {
				if (!Y(i)) return !1;
				o = yt
			}
			switch (o) {
				case "[object RegExp]":
				case "[object String]":
					return "" + e == "" + i;
				case "[object Number]":
					return +e != +e ? +i != +i : 0 == +e ? 1 / +e == 1 / i : +e == +i;
				case "[object Date]":
				case "[object Boolean]":
					return +e == +i;
				case "[object Symbol]":
					return y.valueOf.call(e) === y.valueOf.call(i);
				case "[object ArrayBuffer]":
				case yt:
					return t(vt(e), vt(i), r, n)
			}
			var s = "[object Array]" === o;
			if (!s && ut(e)) {
				var a = lt(e);
				if (a !== lt(i)) return !1;
				if (e.buffer === i.buffer && e.byteOffset === i.byteOffset) return !0;
				s = !0
			}
			if (!s) {
				if ("object" != typeof e || "object" != typeof i) return !1;
				o = e.constructor, a = i.constructor;
				if (o !== a && !(V(o) && o instanceof o && V(a) && a instanceof a) && "constructor" in e && "constructor" in i) return !1
			}
			r = r || [];
			n = n || [];
			var l = r.length;
			for (; l--;)
				if (r[l] === e) return n[l] === i;
			r.push(e);
			n.push(i);
			if (s) {
				if ((l = e.length) !== i.length) return !1;
				for (; l--;)
					if (!bt(e[l], i[l], r, n)) return !1
			} else {
				var h, c = gt(e);
				if (l = c.length, gt(i)
					.length !== l) return !1;
				for (; l--;)
					if (h = c[l], !et(i, h) || !bt(e[h], i[h], r, n)) return !1
			}
			r.pop();
			n.pop();
			return !0
		}(t, e, i, r)
	}

	function xt(t) {
		if (!M(t)) return [];
		var e, i = [];
		for (e in t) i.push(e);
		return I && dt(t, i), i
	}

	function Lt(r) {
		var n = ft(r);
		return function(t) {
			if (null == t) return !1;
			var e = xt(t);
			if (ft(e)) return !1;
			for (var i = 0; i < n; i++)
				if (!V(t[r[i]])) return !1;
			return r !== Dt || !V(t[Tt])
		}
	}
	var Tt = "forEach",
		wt = ["clear", "delete"],
		Ct = ["get", "has", "set"],
		kt = wt.concat(Tt, Ct),
		Dt = wt.concat(Ct),
		_t = ["add"].concat(wt, Tt, "has"),
		St = Q ? Lt(kt) : U("Map"),
		Et = Q ? Lt(Dt) : U("WeakMap"),
		Bt = Q ? Lt(_t) : U("Set"),
		It = U("WeakSet");

	function Ot(t) {
		for (var e = gt(t), i = e.length, r = Array(i), n = 0; n < i; n++) r[n] = t[e[n]];
		return r
	}

	function At(t) {
		for (var e = {}, i = gt(t), r = 0, n = i.length; r < n; r++) e[t[i[r]]] = i[r];
		return e
	}

	function Nt(t) {
		var e, i = [];
		for (e in t) V(t[e]) && i.push(e);
		return i.sort()
	}

	function Mt(l, h) {
		return function(t) {
			var e = arguments.length;
			if (h && (t = Object(t)), e < 2 || null == t) return t;
			for (var i = 1; i < e; i++)
				for (var r = arguments[i], n = l(r), o = n.length, s = 0; s < o; s++) {
					var a = n[s];
					h && void 0 !== t[a] || (t[a] = r[a])
				}
			return t
		}
	}
	var jt = Mt(xt),
		Wt = Mt(gt),
		Ut = Mt(xt, !0);

	function Pt(t) {
		if (!M(t)) return {};
		if (_) return _(t);
		var e = function() {};
		e.prototype = t;
		t = new e();
		return e.prototype = null, t
	}

	function Ht(t) {
		return M(t) ? tt(t) ? t.slice() : jt({}, t) : t
	}

	function Kt(t) {
		return tt(t) ? t : [t]
	}

	function zt(t) {
		return pt.toPath(t)
	}

	function Rt(t, e) {
		for (var i = e.length, r = 0; r < i; r++) {
			if (null == t) return;
			t = t[e[r]]
		}
		return i ? t : void 0
	}

	function $t(t, e, i) {
		e = Rt(t, zt(e));
		return j(e) ? i : e
	}

	function Ft(t) {
		return t
	}

	function qt(e) {
		return e = Wt({}, e),
			function(t) {
				return mt(t, e)
			}
	}

	function Jt(e) {
		return e = zt(e),
			function(t) {
				return Rt(t, e)
			}
	}

	function Vt(n, o, t) {
		if (void 0 === o) return n;
		switch (null == t ? 3 : t) {
			case 1:
				return function(t) {
					return n.call(o, t)
				};
			case 3:
				return function(t, e, i) {
					return n.call(o, t, e, i)
				};
			case 4:
				return function(t, e, i, r) {
					return n.call(o, t, e, i, r)
				}
		}
		return function() {
			return n.apply(o, arguments)
		}
	}

	function Gt(t, e, i) {
		return null == t ? Ft : V(t) ? Vt(t, e, i) : (M(t) && !tt(t) ? qt : Jt)(t)
	}

	function Zt(t, e) {
		return Gt(t, e, 1 / 0)
	}

	function Qt(t, e, i) {
		return pt.iteratee !== Zt ? pt.iteratee(t, e) : Gt(t, e, i)
	}

	function Xt() {}

	function Yt(t, e) {
		return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
	}
	pt.toPath = Kt, pt.iteratee = Zt;
	var te = Date.now || function() {
		return (new Date())
			.getTime()
	};

	function ee(e) {
		function i(t) {
			return e[t]
		}
		var t = "(?:" + gt(e)
			.join("|") + ")",
			r = RegExp(t),
			n = RegExp(t, "g");
		return function(t) {
			return r.test(t = null == t ? "" : "" + t) ? t.replace(n, i) : t
		}
	}
	var ie = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&quot;",
			"'": "&#x27;",
			"`": "&#x60;"
		},
		re = ee(ie),
		ne = ee(At(ie)),
		oe = pt.templateSettings = {
			evaluate: /<%([\s\S]+?)%>/g,
			interpolate: /<%=([\s\S]+?)%>/g,
			escape: /<%-([\s\S]+?)%>/g
		},
		se = /(.)^/,
		ae = {
			"'": "'",
			"\\": "\\",
			"\r": "r",
			"\n": "n",
			"\u2028": "u2028",
			"\u2029": "u2029"
		},
		le = /\\|'|\r|\n|\u2028|\u2029/g;

	function he(t) {
		return "\\" + ae[t]
	}
	var ce = /^\s*(\w|\$)+\s*$/;
	var ue = 0;

	function fe(t, e, i, r, n) {
		if (!(r instanceof e)) return t.apply(i, n);
		i = Pt(t.prototype), n = t.apply(i, n);
		return M(n) ? n : i
	}
	var de = N(function(n, o) {
		function s() {
			for (var t = 0, e = o.length, i = Array(e), r = 0; r < e; r++) i[r] = o[r] === a ? arguments[t++] : o[r];
			for (; t < arguments.length;) i.push(arguments[t++]);
			return fe(n, s, this, this, i)
		}
		var a = de.placeholder;
		return s
	});
	de.placeholder = pt;
	var ge = N(function(e, i, r) {
			if (!V(e)) throw new TypeError("Bind must be called on a function");
			var n = N(function(t) {
				return fe(e, n, i, this, r.concat(t))
			});
			return n
		}),
		me = st(ft);

	function pe(t, e, i, r) {
		if (r = r || [], e || 0 === e) {
			if (e <= 0) return r.concat(t)
		} else e = 1 / 0;
		for (var n = r.length, o = 0, s = ft(t); o < s; o++) {
			var a = t[o];
			if (me(a) && (tt(a) || rt(a)))
				if (1 < e) pe(a, e - 1, i, r), n = r.length;
				else
					for (var l = 0, h = a.length; l < h;) r[n++] = a[l++];
			else i || (r[n++] = a)
		}
		return r
	}
	var ve = N(function(t, e) {
		var i = (e = pe(e, !1, !1))
			.length;
		if (i < 1) throw new Error("bindAll must be passed function names");
		for (; i--;) {
			var r = e[i];
			t[r] = ge(t[r], t)
		}
		return t
	});
	var ye = N(function(t, e, i) {
			return setTimeout(function() {
				return t.apply(null, i)
			}, e)
		}),
		be = de(ye, pt, 1);

	function xe(t) {
		return function() {
			return !t.apply(this, arguments)
		}
	}

	function Le(t, e) {
		var i;
		return function() {
			return 0 < --t && (i = e.apply(this, arguments)), t <= 1 && (e = null), i
		}
	}
	m = de(Le, 2);

	function Te(t, e, i) {
		e = Qt(e, i);
		for (var r, n = gt(t), o = 0, s = n.length; o < s; o++)
			if (e(t[r = n[o]], r, t)) return r
	}

	function we(o) {
		return function(t, e, i) {
			e = Qt(e, i);
			for (var r = ft(t), n = 0 < o ? 0 : r - 1; 0 <= n && n < r; n += o)
				if (e(t[n], n, t)) return n;
			return -1
		}
	}
	var Ce = we(1),
		J = we(-1);

	function ke(t, e, i, r) {
		for (var n = (i = Qt(i, r, 1))(e), o = 0, s = ft(t); o < s;) {
			var a = Math.floor((o + s) / 2);
			i(t[a]) < n ? o = a + 1 : s = a
		}
		return o
	}

	function De(o, s, a) {
		return function(t, e, i) {
			var r = 0,
				n = ft(t);
			if ("number" == typeof i) 0 < o ? r = 0 <= i ? i : Math.max(i + n, r) : n = 0 <= i ? Math.min(i + 1, n) : i + n + 1;
			else if (a && i && n) return t[i = a(t, e)] === e ? i : -1;
			if (e != e) return 0 <= (i = s(x.call(t, r, n), nt)) ? i + r : -1;
			for (i = 0 < o ? r : n - 1; 0 <= i && i < n; i += o)
				if (t[i] === e) return i;
			return -1
		}
	}
	var _e = De(1, Ce, ke),
		q = De(-1, J);

	function Se(t, e, i) {
		i = (me(t) ? Ce : Te)(t, e, i);
		if (void 0 !== i && -1 !== i) return t[i]
	}

	function Ee(t, e, i) {
		if (e = Vt(e, i), me(t))
			for (n = 0, o = t.length; n < o; n++) e(t[n], n, t);
		else
			for (var r = gt(t), n = 0, o = r.length; n < o; n++) e(t[r[n]], r[n], t);
		return t
	}

	function Be(t, e, i) {
		e = Qt(e, i);
		for (var r = !me(t) && gt(t), n = (r || t)
			.length, o = Array(n), s = 0; s < n; s++) {
			var a = r ? r[s] : s;
			o[s] = e(t[a], a, t)
		}
		return o
	}

	function Ie(l) {
		return function(t, e, i, r) {
			var n = 3 <= arguments.length;
			return function(t, e, i, r) {
				var n = !me(t) && gt(t),
					o = (n || t)
					.length,
					s = 0 < l ? 0 : o - 1;
				for (r || (i = t[n ? n[s] : s], s += l); 0 <= s && s < o; s += l) {
					var a = n ? n[s] : s;
					i = e(i, t[a], a, t)
				}
				return i
			}(t, Vt(e, r, 4), i, n)
		}
	}
	C = Ie(1), G = Ie(-1);

	function Oe(t, r, e) {
		var n = [];
		return r = Qt(r, e), Ee(t, function(t, e, i) {
			r(t, e, i) && n.push(t)
		}), n
	}

	function Ae(t, e, i) {
		e = Qt(e, i);
		for (var r = !me(t) && gt(t), n = (r || t)
			.length, o = 0; o < n; o++) {
			var s = r ? r[o] : o;
			if (!e(t[s], s, t)) return !1
		}
		return !0
	}

	function Ne(t, e, i) {
		e = Qt(e, i);
		for (var r = !me(t) && gt(t), n = (r || t)
			.length, o = 0; o < n; o++) {
			var s = r ? r[o] : o;
			if (e(t[s], s, t)) return !0
		}
		return !1
	}

	function Me(t, e, i, r) {
		return me(t) || (t = Ot(t)), 0 <= _e(t, e, i = "number" != typeof i || r ? 0 : i)
	}
	X = N(function(t, i, r) {
		var n, o;
		return V(i) ? o = i : (i = zt(i), n = i.slice(0, -1), i = i[i.length - 1]), Be(t, function(t) {
			var e = o;
			if (!e) {
				if (null == (t = n && n.length ? Rt(t, n) : t)) return;
				e = t[i]
			}
			return null == e ? e : e.apply(t, r)
		})
	});

	function je(t, e) {
		return Be(t, Jt(e))
	}

	function We(t, r, e) {
		var i, n, o = -1 / 0,
			s = -1 / 0;
		if (null == r || "number" == typeof r && "object" != typeof t[0] && null != t)
			for (var a = 0, l = (t = me(t) ? t : Ot(t))
				.length; a < l; a++) null != (i = t[a]) && o < i && (o = i);
		else r = Qt(r, e), Ee(t, function(t, e, i) {
			n = r(t, e, i), (s < n || n === -1 / 0 && o === -1 / 0) && (o = t, s = n)
		});
		return o
	}

	function Ue(t, e, i) {
		if (null == e || i) return (t = !me(t) ? Ot(t) : t)[Yt(t.length - 1)];
		var r = (me(t) ? Ht : Ot)(t),
			t = ft(r);
		e = Math.max(Math.min(e, t), 0);
		for (var n = t - 1, o = 0; o < e; o++) {
			var s = Yt(o, n),
				a = r[o];
			r[o] = r[s], r[s] = a
		}
		return r.slice(0, e)
	}

	function Pe(o, e) {
		return function(i, r, t) {
			var n = e ? [
				[],
				[]
			] : {};
			return r = Qt(r, t), Ee(i, function(t, e) {
				e = r(t, e, i);
				o(n, t, e)
			}), n
		}
	}
	var k = Pe(function(t, e, i) {
			et(t, i) ? t[i].push(e) : t[i] = [e]
		}),
		w = Pe(function(t, e, i) {
			t[i] = e
		}),
		Ct = Pe(function(t, e, i) {
			et(t, i) ? t[i]++ : t[i] = 1
		}),
		wt = Pe(function(t, e, i) {
			t[i ? 0 : 1].push(e)
		}, !0),
		He = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;

	function Ke(t, e, i) {
		return e in i
	}
	var ze = N(function(t, e) {
			var i = {},
				r = e[0];
			if (null == t) return i;
			V(r) ? (1 < e.length && (r = Vt(r, e[1])), e = xt(t)) : (r = Ke, e = pe(e, !1, !1), t = Object(t));
			for (var n = 0, o = e.length; n < o; n++) {
				var s = e[n],
					a = t[s];
				r(a, s, t) && (i[s] = a)
			}
			return i
		}),
		kt = N(function(t, i) {
			var e, r = i[0];
			return V(r) ? (r = xe(r), 1 < i.length && (e = i[1])) : (i = Be(pe(i, !1, !1), String), r = function(t, e) {
				return !Me(i, e)
			}), ze(t, r, e)
		});

	function Re(t, e, i) {
		return x.call(t, 0, Math.max(0, t.length - (null == e || i ? 1 : e)))
	}

	function $e(t, e, i) {
		return null == t || t.length < 1 ? null == e || i ? void 0 : [] : null == e || i ? t[0] : Re(t, t.length - e)
	}

	function Fe(t, e, i) {
		return x.call(t, null == e || i ? 1 : e)
	}
	var qe = N(function(t, e) {
			return e = pe(e, !0, !0), Oe(t, function(t) {
				return !Me(e, t)
			})
		}),
		Q = N(function(t, e) {
			return qe(t, e)
		});

	function Je(t, e, i, r) {
		W(e) || (r = i, i = e, e = !1), null != i && (i = Qt(i, r));
		for (var n = [], o = [], s = 0, a = ft(t); s < a; s++) {
			var l = t[s],
				h = i ? i(l, s, t) : l;
			e && !i ? (s && o === h || n.push(l), o = h) : i ? Me(o, h) || (o.push(h), n.push(l)) : Me(n, l) || n.push(l)
		}
		return n
	}
	_t = N(function(t) {
		return Je(pe(t, !0, !0))
	});

	function Ve(t) {
		for (var e = t && We(t, ft)
			.length || 0, i = Array(e), r = 0; r < e; r++) i[r] = je(t, r);
		return i
	}
	ie = N(Ve);

	function Ge(t, e) {
		return t._chain ? pt(e)
			.chain() : e
	}

	function Ze(i) {
		return Ee(Nt(i), function(t) {
			var e = pt[t] = i[t];
			pt.prototype[t] = function() {
				var t = [this._wrapped];
				return b.apply(t, arguments), Ge(this, e.apply(pt, t))
			}
		}), pt
	}
	Ee(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
		var i = p[e];
		pt.prototype[e] = function() {
			var t = this._wrapped;
			return null != t && (i.apply(t, arguments), "shift" !== e && "splice" !== e || 0 !== t.length || delete t[0]), Ge(this, t)
		}
	}), Ee(["concat", "join", "slice"], function(t) {
		var e = p[t];
		pt.prototype[t] = function() {
			var t = this._wrapped;
			return Ge(this, t = null != t ? e.apply(t, arguments) : t)
		}
	});
	var Qe = Ze(Object.freeze({
		__proto__: null,
		VERSION: e,
		restArguments: N,
		isObject: M,
		isNull: function(t) {
			return null === t
		},
		isUndefined: j,
		isBoolean: W,
		isElement: function(t) {
			return !(!t || 1 !== t.nodeType)
		},
		isString: P,
		isNumber: H,
		isDate: K,
		isRegExp: z,
		isError: R,
		isSymbol: $,
		isArrayBuffer: F,
		isDataView: Y,
		isArray: tt,
		isFunction: V,
		isArguments: rt,
		isFinite: function(t) {
			return !$(t) && B(t) && !isNaN(parseFloat(t))
		},
		isNaN: nt,
		isTypedArray: ut,
		isEmpty: function(t) {
			if (null == t) return !0;
			var e = ft(t);
			return "number" == typeof e && (tt(t) || P(t) || rt(t)) ? 0 === e : 0 === ft(gt(t))
		},
		isMatch: mt,
		isEqual: function(t, e) {
			return bt(t, e)
		},
		isMap: St,
		isWeakMap: Et,
		isSet: Bt,
		isWeakSet: It,
		keys: gt,
		allKeys: xt,
		values: Ot,
		pairs: function(t) {
			for (var e = gt(t), i = e.length, r = Array(i), n = 0; n < i; n++) r[n] = [e[n], t[e[n]]];
			return r
		},
		invert: At,
		functions: Nt,
		methods: Nt,
		extend: jt,
		extendOwn: Wt,
		assign: Wt,
		defaults: Ut,
		create: function(t, e) {
			return t = Pt(t), e && Wt(t, e), t
		},
		clone: Ht,
		tap: function(t, e) {
			return e(t), t
		},
		get: $t,
		has: function(t, e) {
			for (var i = (e = zt(e))
				.length, r = 0; r < i; r++) {
				var n = e[r];
				if (!et(t, n)) return !1;
				t = t[n]
			}
			return !!i
		},
		mapObject: function(t, e, i) {
			e = Qt(e, i);
			for (var r = gt(t), n = r.length, o = {}, s = 0; s < n; s++) {
				var a = r[s];
				o[a] = e(t[a], a, t)
			}
			return o
		},
		identity: Ft,
		constant: ot,
		noop: Xt,
		toPath: Kt,
		property: Jt,
		propertyOf: function(e) {
			return null == e ? Xt : function(t) {
				return $t(e, t)
			}
		},
		matcher: qt,
		matches: qt,
		times: function(t, e, i) {
			var r = Array(Math.max(0, t));
			e = Vt(e, i, 1);
			for (var n = 0; n < t; n++) r[n] = e(n);
			return r
		},
		random: Yt,
		now: te,
		escape: re,
		unescape: ne,
		templateSettings: oe,
		template: function(o, t, e) {
			t = Ut({}, t = !t && e ? e : t, pt.templateSettings);
			var i, e = RegExp([(t.escape || se)
					.source, (t.interpolate || se)
					.source, (t.evaluate || se)
					.source
				].join("|") + "|$", "g"),
				s = 0,
				a = "__p+='";
			if (o.replace(e, function(t, e, i, r, n) {
				return a += o.slice(s, n)
					.replace(le, he), s = n + t.length, e ? a += "'+\n((__t=(" + e + "))==null?'':_.escape(__t))+\n'" : i ? a += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : r && (a += "';\n" + r + "\n__p+='"), t
			}), a += "';\n", e = t.variable) {
				if (!ce.test(e)) throw new Error("variable is not a bare identifier: " + e)
			} else a = "with(obj||{}){\n" + a + "}\n", e = "obj";
			a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
			try {
				i = new Function(e, "_", a)
			} catch (t) {
				throw t.source = a, t
			}
			return (t = function(t) {
					return i.call(this, t, pt)
				})
				.source = "function(" + e + "){\n" + a + "}", t
		},
		result: function(t, e, i) {
			var r = (e = zt(e))
				.length;
			if (!r) return V(i) ? i.call(t) : i;
			for (var n = 0; n < r; n++) {
				var o = null == t ? void 0 : t[e[n]];
				void 0 === o && (o = i, n = r), t = V(o) ? o.call(t) : o
			}
			return t
		},
		uniqueId: function(t) {
			var e = ++ue + "";
			return t ? t + e : e
		},
		chain: function(t) {
			return (t = pt(t))
				._chain = !0, t
		},
		iteratee: Zt,
		partial: de,
		bind: ge,
		bindAll: ve,
		memoize: function(i, r) {
			function n(t) {
				var e = n.cache,
					t = "" + (r ? r.apply(this, arguments) : t);
				return et(e, t) || (e[t] = i.apply(this, arguments)), e[t]
			}
			return n.cache = {}, n
		},
		delay: ye,
		defer: be,
		throttle: function(i, r, n) {
			var o, s, a, l, h = 0;

			function c() {
				h = !1 === n.leading ? 0 : te(), o = null, l = i.apply(s, a), o || (s = a = null)
			}

			function t() {
				var t = te();
				h || !1 !== n.leading || (h = t);
				var e = r - (t - h);
				return s = this, a = arguments, e <= 0 || r < e ? (o && (clearTimeout(o), o = null), h = t, l = i.apply(s, a), o || (s = a = null)) : o || !1 === n.trailing || (o = setTimeout(c, e)), l
			}
			return n = n || {}, t.cancel = function() {
				clearTimeout(o), h = 0, o = s = a = null
			}, t
		},
		debounce: function(e, i, r) {
			function n() {
				var t = te() - s;
				t < i ? o = setTimeout(n, i - t) : (o = null, r || (l = e.apply(h, a)), o || (a = h = null))
			}
			var o, s, a, l, h, t = N(function(t) {
				return h = this, a = t, s = te(), o || (o = setTimeout(n, i), r && (l = e.apply(h, a))), l
			});
			return t.cancel = function() {
				clearTimeout(o), o = a = h = null
			}, t
		},
		wrap: function(t, e) {
			return de(e, t)
		},
		negate: xe,
		compose: function() {
			var i = arguments,
				r = i.length - 1;
			return function() {
				for (var t = r, e = i[r].apply(this, arguments); t--;) e = i[t].call(this, e);
				return e
			}
		},
		after: function(t, e) {
			return function() {
				if (--t < 1) return e.apply(this, arguments)
			}
		},
		before: Le,
		once: m,
		findKey: Te,
		findIndex: Ce,
		findLastIndex: J,
		sortedIndex: ke,
		indexOf: _e,
		lastIndexOf: q,
		find: Se,
		detect: Se,
		findWhere: function(t, e) {
			return Se(t, qt(e))
		},
		each: Ee,
		forEach: Ee,
		map: Be,
		collect: Be,
		reduce: C,
		foldl: C,
		inject: C,
		reduceRight: G,
		foldr: G,
		filter: Oe,
		select: Oe,
		reject: function(t, e, i) {
			return Oe(t, xe(Qt(e)), i)
		},
		every: Ae,
		all: Ae,
		some: Ne,
		any: Ne,
		contains: Me,
		includes: Me,
		include: Me,
		invoke: X,
		pluck: je,
		where: function(t, e) {
			return Oe(t, qt(e))
		},
		max: We,
		min: function(t, r, e) {
			var i, n, o = 1 / 0,
				s = 1 / 0;
			if (null == r || "number" == typeof r && "object" != typeof t[0] && null != t)
				for (var a = 0, l = (t = me(t) ? t : Ot(t))
					.length; a < l; a++) null != (i = t[a]) && i < o && (o = i);
			else r = Qt(r, e), Ee(t, function(t, e, i) {
				((n = r(t, e, i)) < s || n === 1 / 0 && o === 1 / 0) && (o = t, s = n)
			});
			return o
		},
		shuffle: function(t) {
			return Ue(t, 1 / 0)
		},
		sample: Ue,
		sortBy: function(t, r, e) {
			var n = 0;
			return r = Qt(r, e), je(Be(t, function(t, e, i) {
					return {
						value: t,
						index: n++,
						criteria: r(t, e, i)
					}
				})
				.sort(function(t, e) {
					var i = t.criteria,
						r = e.criteria;
					if (i !== r) {
						if (r < i || void 0 === i) return 1;
						if (i < r || void 0 === r) return -1
					}
					return t.index - e.index
				}), "value")
		},
		groupBy: k,
		indexBy: w,
		countBy: Ct,
		partition: wt,
		toArray: function(t) {
			return t ? tt(t) ? x.call(t) : P(t) ? t.match(He) : me(t) ? Be(t, Ft) : Ot(t) : []
		},
		size: function(t) {
			return null == t ? 0 : (me(t) ? t : gt(t))
				.length
		},
		pick: ze,
		omit: kt,
		first: $e,
		head: $e,
		take: $e,
		initial: Re,
		last: function(t, e, i) {
			return null == t || t.length < 1 ? null == e || i ? void 0 : [] : null == e || i ? t[t.length - 1] : Fe(t, Math.max(0, t.length - e))
		},
		rest: Fe,
		tail: Fe,
		drop: Fe,
		compact: function(t) {
			return Oe(t, Boolean)
		},
		flatten: function(t, e) {
			return pe(t, e, !1)
		},
		without: Q,
		uniq: Je,
		unique: Je,
		union: _t,
		intersection: function(t) {
			for (var e = [], i = arguments.length, r = 0, n = ft(t); r < n; r++) {
				var o = t[r];
				if (!Me(e, o)) {
					for (var s = 1; s < i && Me(arguments[s], o); s++);
					s === i && e.push(o)
				}
			}
			return e
		},
		difference: qe,
		unzip: Ve,
		transpose: Ve,
		zip: ie,
		object: function(t, e) {
			for (var i = {}, r = 0, n = ft(t); r < n; r++) e ? i[t[r]] = e[r] : i[t[r][0]] = t[r][1];
			return i
		},
		range: function(t, e, i) {
			null == e && (e = t || 0, t = 0), i = i || (e < t ? -1 : 1);
			for (var r = Math.max(Math.ceil((e - t) / i), 0), n = Array(r), o = 0; o < r; o++, t += i) n[o] = t;
			return n
		},
		chunk: function(t, e) {
			if (null == e || e < 1) return [];
			for (var i = [], r = 0, n = t.length; r < n;) i.push(x.call(t, r, r += e));
			return i
		},
		mixin: Ze,
		default: pt
	}));
	Qe._ = Qe;
	const Xe = (e, i) => {
			let r = document.getElementById("page-area");
			if (r) {
				let t = r.getElementsByTagName("iframe")[0];
				var n;
				t && ("scroll" === i ? (n = t.contentDocument) && (i = n.body, n = n.documentElement, t.height = 2 * Math.max(i.scrollHeight, i.offsetHeight, n.clientHeight, n.scrollHeight, n.offsetHeight) + "px", setTimeout(() => {
					let t = document.getElementById("page-area");
					if (t) {
						let r = t.getElementsByTagName("iframe")[0];
						if (r) {
							var n = r.contentDocument;
							if (n) {
								let t = n.body;
								var o = t.lastElementChild,
									s = t.lastChild,
									a = t.getElementsByTagName("a"),
									l = t.getElementsByTagName("p"),
									h = t.getElementsByTagName("img"),
									c = t.getElementsByTagName("div"),
									n = a[a.length - 1],
									a = l[l.length - 1],
									h = l[h.length - 1],
									c = c[c.length - 1];
								let e = a || n || h || c;
								Qe.isElement(n) && Qe.isElement(a) && Qe.isElement(c) && (e = n.clientHeight + n.offsetTop > a.clientHeight + a.offsetTop ? n : a, c.clientHeight + c.offsetTop > e.clientHeight + e.offsetTop && (e = c)), Qe.isElement(h) && h.clientHeight + h.offsetTop > e.clientHeight + e.offsetTop && (e = h);
								let i = 0;
								if ((o || e || s) && (3 !== s.nodeType || o || e)) {
									if (3 === s.nodeType && document.createRange) {
										let t = document.createRange();
										t.selectNodeContents(s), !t.getBoundingClientRect || (h = t.getBoundingClientRect()) && (i = h.bottom - h.top)
									}
									s = Math.max(Qe.isElement(o) ? o.clientHeight + o.offsetTop : 0, Qe.isElement(s) ? s.clientHeight + s.offsetTop : 0, Qe.isElement(e) ? e.clientHeight + e.offsetTop : 0) + 400 + (3 === s.nodeType ? i : 0);
									r.height = s + "px"
								}
							}
						}
					}
				}, 500)) : t.height = e.offsetHeight + "px")
			}
		},
		Ye = t => {
			var e;
			let i = "";
			return t.lastChild && null !== (e = t.lastChild) && void 0 !== e && e.lastChild && !(e => {
				try {
					return e instanceof HTMLElement
				} catch (t) {
					return typeof e === "object" && e.nodeType === 1 && typeof e.style === "object" && typeof e.ownerDocument === "object"
				}
			})(null === (e = t.lastChild) || void 0 === e ? void 0 : e.lastChild) && (i = (null === (t = t.lastChild) || void 0 === t ? void 0 : t.lastChild.textContent) || ""), i
		},
		ti = (t, e = "") => {
			var i = document.createElement("iframe");
			if (i.style.width = "100%", i.style.border = "0", i.style.margin = "0", i.style.padding = "0", i.style.fontSize = "100%", i.style.font = "inherit", i.style.verticalAlign = "baseline", t.innerHTML = "", t.appendChild(i), e && i.contentDocument) {
				let t = i.contentDocument.createElement("style");
				t.id = "azw3-style", 
        t.textContent = e,
        i.contentDocument.head.appendChild(t)
			}
		},
		ei = () => {
			let t = document.getElementById("page-area");
			if (t) {
				var e = t.getElementsByTagName("iframe")[0];
				if (e) {
					e = e.contentDocument;
					if (e) return {
						totalPage: parseInt(e.body.scrollWidth / e.body.clientWidth + "") + 1,
						currentPage: parseInt(e.body.scrollLeft / e.body.clientWidth + "") + 1
					}
				}
			}
		},
		ii = (i, r) => {
			let t = document.getElementById("page-area");
			if (t) {
				var n = t.getElementsByTagName("iframe")[0];
				if (n) {
					let e = n.contentDocument;
					if (e) {
						let t = e.createElement("style");
						t.id = "default-style", t.textContent = "p,empty-line{display: inherit;margin-block-start: inherit;margin-block-end: inherit;margin-inline-start: inherit;margin-inline-end: inherit;}body{margin: 0px}", e.head.appendChild(t), "scroll" !== r && (n = "double" === r ? 2 : 1, r = (r = Math.floor(i.clientWidth / 12)) % 2 == 0 ? r : r - 1, e.body.setAttribute("style", `width: auto;height: 100%;overflow-y: hidden;overflow-X: hidden;padding-left: 0px;padding-right: 0px;margin: 0px;box-sizing: border-box;max-width: inherit;column-fill: auto;column-gap: ${r}px;column-count: 12;column-width: ${(i.offsetWidth-r)/n}px;`))
					}
				}
			}
		};
	var ie = {
			S: "万与丑专业丛东丝丢两严丧个丬丰临为丽举么义乌乐乔习乡书买乱争于亏云亘亚产亩亲亵亸亿仅从仑仓仪们价众优伙会伛伞伟传伤伥伦伧伪伫体余佣佥侠侣侥侦侧侨侩侪侬俣俦俨俩俪俭债倾偬偻偾偿傥傧储傩儿兑兖党兰关兴兹养兽冁内冈册写军农冢冯冲决况冻净凄凉凌减凑凛几凤凫凭凯击凼凿刍划刘则刚创删别刬刭刽刿剀剂剐剑剥剧劝办务劢动励劲劳势勋勐勚匀匦匮区医华协单卖卢卤卧卫却卺厂厅历厉压厌厍厕厢厣厦厨厩厮县参叆叇双发变叙叠叶号叹叽吁后吓吕吗吣吨听启吴呒呓呕呖呗员呙呛呜咏咔咙咛咝咤咴咸哌响哑哒哓哔哕哗哙哜哝哟唛唝唠唡唢唣唤唿啧啬啭啮啰啴啸喷喽喾嗫呵嗳嘘嘤嘱噜噼嚣嚯团园囱围囵国图圆圣圹场坂坏块坚坛坜坝坞坟坠垄垅垆垒垦垧垩垫垭垯垱垲垴埘埙埚埝埯堑堕塆墙壮声壳壶壸处备复够头夸夹夺奁奂奋奖奥妆妇妈妩妪妫姗姜娄娅娆娇娈娱娲娴婳婴婵婶媪嫒嫔嫱嬷孙学孪宁宝实宠审宪宫宽宾寝对寻导寿将尔尘尧尴尸尽层屃屉届属屡屦屿岁岂岖岗岘岙岚岛岭岳岽岿峃峄峡峣峤峥峦崂崃崄崭嵘嵚嵛嵝嵴巅巩巯币帅师帏帐帘帜带帧帮帱帻帼幂幞干并广庄庆庐庑库应庙庞废庼廪开异弃张弥弪弯弹强归当录彟彦彻径徕御忆忏忧忾怀态怂怃怄怅怆怜总怼怿恋恳恶恸恹恺恻恼恽悦悫悬悭悯惊惧惨惩惫惬惭惮惯愍愠愤愦愿慑慭憷懑懒懔戆戋戏戗战戬户扎扑扦执扩扪扫扬扰抚抛抟抠抡抢护报担拟拢拣拥拦拧拨择挂挚挛挜挝挞挟挠挡挢挣挤挥挦捞损捡换捣据捻掳掴掷掸掺掼揸揽揿搀搁搂搅携摄摅摆摇摈摊撄撑撵撷撸撺擞攒敌敛数斋斓斗斩断无旧时旷旸昙昼昽显晋晒晓晔晕晖暂暧札术朴机杀杂权条来杨杩杰极构枞枢枣枥枧枨枪枫枭柜柠柽栀栅标栈栉栊栋栌栎栏树栖样栾桊桠桡桢档桤桥桦桧桨桩梦梼梾检棂椁椟椠椤椭楼榄榇榈榉槚槛槟槠横樯樱橥橱橹橼檐檩欢欤欧歼殁殇残殒殓殚殡殴毁毂毕毙毡毵氇气氢氩氲汇汉污汤汹沓沟没沣沤沥沦沧沨沩沪沵泞泪泶泷泸泺泻泼泽泾洁洒洼浃浅浆浇浈浉浊测浍济浏浐浑浒浓浔浕涂涌涛涝涞涟涠涡涢涣涤润涧涨涩淀渊渌渍渎渐渑渔渖渗温游湾湿溃溅溆溇滗滚滞滟滠满滢滤滥滦滨滩滪漤潆潇潋潍潜潴澜濑濒灏灭灯灵灾灿炀炉炖炜炝点炼炽烁烂烃烛烟烦烧烨烩烫烬热焕焖焘煅煳熘爱爷牍牦牵牺犊犟状犷犸犹狈狍狝狞独狭狮狯狰狱狲猃猎猕猡猪猫猬献獭玑玙玚玛玮环现玱玺珉珏珐珑珰珲琎琏琐琼瑶瑷璇璎瓒瓮瓯电画畅畲畴疖疗疟疠疡疬疮疯疱疴痈痉痒痖痨痪痫痴瘅瘆瘗瘘瘪瘫瘾瘿癞癣癫癯皑皱皲盏盐监盖盗盘眍眦眬着睁睐睑瞒瞩矫矶矾矿砀码砖砗砚砜砺砻砾础硁硅硕硖硗硙硚确硷碍碛碜碱碹磙礼祎祢祯祷祸禀禄禅离秃秆种积称秽秾稆税稣稳穑穷窃窍窑窜窝窥窦窭竖竞笃笋笔笕笺笼笾筑筚筛筜筝筹签简箓箦箧箨箩箪箫篑篓篮篱簖籁籴类籼粜粝粤粪粮糁糇紧絷纟纠纡红纣纤纥约级纨纩纪纫纬纭纮纯纰纱纲纳纴纵纶纷纸纹纺纻纼纽纾线绀绁绂练组绅细织终绉绊绋绌绍绎经绐绑绒结绔绕绖绗绘给绚绛络绝绞统绠绡绢绣绤绥绦继绨绩绪绫绬续绮绯绰绱绲绳维绵绶绷绸绹绺绻综绽绾绿缀缁缂缃缄缅缆缇缈缉缊缋缌缍缎缏缐缑缒缓缔缕编缗缘缙缚缛缜缝缞缟缠缡缢缣缤缥缦缧缨缩缪缫缬缭缮缯缰缱缲缳缴缵罂网罗罚罢罴羁羟羡翘翙翚耢耧耸耻聂聋职聍联聩聪肃肠肤肷肾肿胀胁胆胜胧胨胪胫胶脉脍脏脐脑脓脔脚脱脶脸腊腌腘腭腻腼腽腾膑臜舆舣舰舱舻艰艳艹艺节芈芗芜芦苁苇苈苋苌苍苎苏苘苹茎茏茑茔茕茧荆荐荙荚荛荜荞荟荠荡荣荤荥荦荧荨荩荪荫荬荭荮药莅莜莱莲莳莴莶获莸莹莺莼萚萝萤营萦萧萨葱蒇蒉蒋蒌蓝蓟蓠蓣蓥蓦蔷蔹蔺蔼蕲蕴薮藁藓虏虑虚虫虬虮虽虾虿蚀蚁蚂蚕蚝蚬蛊蛎蛏蛮蛰蛱蛲蛳蛴蜕蜗蜡蝇蝈蝉蝎蝼蝾螀螨蟏衅衔补衬衮袄袅袆袜袭袯装裆裈裢裣裤裥褛褴襁襕见观觃规觅视觇览觉觊觋觌觍觎觏觐觑觞触觯詟誉誊讠计订讣认讥讦讧讨让讪讫训议讯记讱讲讳讴讵讶讷许讹论讻讼讽设访诀证诂诃评诅识诇诈诉诊诋诌词诎诏诐译诒诓诔试诖诗诘诙诚诛诜话诞诟诠诡询诣诤该详诧诨诩诪诫诬语诮误诰诱诲诳说诵诶请诸诹诺读诼诽课诿谀谁谂调谄谅谆谇谈谊谋谌谍谎谏谐谑谒谓谔谕谖谗谘谙谚谛谜谝谞谟谠谡谢谣谤谥谦谧谨谩谪谫谬谭谮谯谰谱谲谳谴谵谶谷豮贝贞负贠贡财责贤败账货质贩贪贫贬购贮贯贰贱贲贳贴贵贶贷贸费贺贻贼贽贾贿赀赁赂赃资赅赆赇赈赉赊赋赌赍赎赏赐赑赒赓赔赕赖赗赘赙赚赛赜赝赞赟赠赡赢赣赪赵赶趋趱趸跃跄跖跞践跶跷跸跹跻踊踌踪踬踯蹑蹒蹰蹿躏躜躯车轧轨轩轪轫转轭轮软轰轱轲轳轴轵轶轷轸轹轺轻轼载轾轿辀辁辂较辄辅辆辇辈辉辊辋辌辍辎辏辐辑辒输辔辕辖辗辘辙辚辞辩辫边辽达迁过迈运还这进远违连迟迩迳迹适选逊递逦逻遗遥邓邝邬邮邹邺邻郁郄郏郐郑郓郦郧郸酝酦酱酽酾酿释里鉅鉴銮錾钆钇针钉钊钋钌钍钎钏钐钑钒钓钔钕钖钗钘钙钚钛钝钞钟钠钡钢钣钤钥钦钧钨钩钪钫钬钭钮钯钰钱钲钳钴钵钶钷钸钹钺钻钼钽钾钿铀铁铂铃铄铅铆铈铉铊铋铍铎铏铐铑铒铕铗铘铙铚铛铜铝铞铟铠铡铢铣铤铥铦铧铨铪铫铬铭铮铯铰铱铲铳铴铵银铷铸铹铺铻铼铽链铿销锁锂锃锄锅锆锇锈锉锊锋锌锍锎锏锐锑锒锓锔锕锖锗错锚锜锞锟锠锡锢锣锤锥锦锨锩锫锬锭键锯锰锱锲锳锴锵锶锷锸锹锺锻锼锽锾锿镀镁镂镃镆镇镈镉镊镌镍镎镏镐镑镒镕镖镗镙镚镛镜镝镞镟镠镡镢镣镤镥镦镧镨镩镪镫镬镭镮镯镰镱镲镳镴镶长门闩闪闫闬闭问闯闰闱闲闳间闵闶闷闸闹闺闻闼闽闾闿阀阁阂阃阄阅阆阇阈阉阊阋阌阍阎阏阐阑阒阓阔阕阖阗阘阙阚阛队阳阴阵阶际陆陇陈陉陕陧陨险随隐隶隽难雏雠雳雾霁霉霭靓静靥鞑鞒鞯鞴韦韧韨韩韪韫韬韵页顶顷顸项顺须顼顽顾顿颀颁颂颃预颅领颇颈颉颊颋颌颍颎颏颐频颒颓颔颕颖颗题颙颚颛颜额颞颟颠颡颢颣颤颥颦颧风飏飐飑飒飓飔飕飖飗飘飙飚飞飨餍饤饥饦饧饨饩饪饫饬饭饮饯饰饱饲饳饴饵饶饷饸饹饺饻饼饽饾饿馀馁馂馃馄馅馆馇馈馉馊馋馌馍馎馏馐馑馒馓馔馕马驭驮驯驰驱驲驳驴驵驶驷驸驹驺驻驼驽驾驿骀骁骂骃骄骅骆骇骈骉骊骋验骍骎骏骐骑骒骓骔骕骖骗骘骙骚骛骜骝骞骟骠骡骢骣骤骥骦骧髅髋髌鬓魇魉鱼鱽鱾鱿鲀鲁鲂鲄鲅鲆鲇鲈鲉鲊鲋鲌鲍鲎鲏鲐鲑鲒鲓鲔鲕鲖鲗鲘鲙鲚鲛鲜鲝鲞鲟鲠鲡鲢鲣鲤鲥鲦鲧鲨鲩鲪鲫鲬鲭鲮鲯鲰鲱鲲鲳鲴鲵鲶鲷鲸鲹鲺鲻鲼鲽鲾鲿鳀鳁鳂鳃鳄鳅鳆鳇鳈鳉鳊鳋鳌鳍鳎鳏鳐鳑鳒鳓鳔鳕鳖鳗鳘鳙鳛鳜鳝鳞鳟鳠鳡鳢鳣鸟鸠鸡鸢鸣鸤鸥鸦鸧鸨鸩鸪鸫鸬鸭鸮鸯鸰鸱鸲鸳鸴鸵鸶鸷鸸鸹鸺鸻鸼鸽鸾鸿鹀鹁鹂鹃鹄鹅鹆鹇鹈鹉鹊鹋鹌鹍鹎鹏鹐鹑鹒鹓鹔鹕鹖鹗鹘鹚鹛鹜鹝鹞鹟鹠鹡鹢鹣鹤鹥鹦鹧鹨鹩鹪鹫鹬鹭鹯鹰鹱鹲鹳鹴鹾麦麸黄黉黡黩黪黾鼋鼌鼍鼗鼹齄齐齑齿龀龁龂龃龄龅龆龇龈龉龊龋龌龙龚龛龟志制咨只里系范松没尝尝闹面准钟别闲乾尽脏拼",
			T: "萬與醜專業叢東絲丟兩嚴喪個爿豐臨為麗舉麽義烏樂喬習鄉書買亂爭於虧雲亙亞產畝親褻亸億僅從侖倉儀們價眾優夥會傴傘偉傳傷倀倫傖偽佇體余傭僉俠侶僥偵側僑儈儕儂俁儔儼倆儷儉債傾傯僂僨償儻儐儲儺兒兌兗黨蘭關興茲養獸囅內岡冊寫軍農冢馮沖決況凍凈淒涼淩減湊凜幾鳳鳧憑凱擊氹鑿芻劃劉則剛創刪別刬剄劊劌剴劑剮劍剝劇勸辦務勱動勵勁勞勢勛猛勚勻匭匱區醫華協單賣盧鹵臥衛卻巹廠廳歷厲壓厭厙廁廂厴廈廚廄廝縣參叆叇雙發變敘叠葉號嘆嘰籲後嚇呂嗎唚噸聽啟吳嘸囈嘔嚦唄員咼嗆嗚詠哢嚨嚀噝咤噅鹹哌響啞噠嘵嗶噦嘩噲嚌噥喲嘜唝嘮唡嗩唣喚唿嘖嗇囀嚙啰啴嘯噴嘍嚳囁呵噯噓嚶囑嚕劈囂謔團園囪圍圇國圖圓聖壙場阪壞塊堅壇壢壩塢墳墜壟壟壚壘墾坰堊墊埡垯垱塏堖塒塤堝墊垵塹墮塆墻壯聲殼壺壸處備復夠頭誇夾奪奩奐奮獎奧妝婦媽嫵嫗媯姍姜婁婭嬈嬌孌娛媧嫻婳嬰嬋嬸媼嬡嬪嬙嬤孫學孿寧寶實寵審憲宮寬賓寢對尋導壽將爾塵堯尷屍盡層屃屜屆屬屢屨嶼歲豈嶇崗峴嶴嵐島嶺嶽崠巋峃嶧峽峣嶠崢巒嶗崍崄嶄嶸嵚崳嶁脊巔鞏巰幣帥師幃帳簾幟帶幀幫幬幘幗冪襆幹並廣莊慶廬廡庫應廟龐廢庼廩開異棄張彌弳彎彈強歸當錄彟彥徹徑徠禦憶懺憂愾懷態慫憮慪悵愴憐總懟懌戀懇惡慟懨愷惻惱惲悅愨懸慳憫驚懼慘懲憊愜慚憚慣湣慍憤憒願懾慭怵懣懶懍戇戔戲戧戰戩戶紮撲扡執擴捫掃揚擾撫拋摶摳掄搶護報擔擬攏揀擁攔擰撥擇掛摯攣挜撾撻挾撓擋撟掙擠揮挦撈損撿換搗據撚擄摑擲撣摻摜摣攬撳攙擱摟攪攜攝攄擺搖擯攤攖撐攆擷擼攛擻攢敵斂數齋斕鬥斬斷無舊時曠旸曇晝昽顯晉曬曉曄暈暉暫曖劄術樸機殺雜權條來楊榪傑極構樅樞棗櫪梘棖槍楓梟櫃檸檉梔柵標棧櫛櫳棟櫨櫟欄樹棲樣欒棬椏橈楨檔榿橋樺檜槳樁夢梼梾檢欞槨櫝槧欏橢樓欖櫬櫚櫸槚檻檳櫧橫檣櫻櫫櫥櫓櫞檐檁歡歟歐殲歿殤殘殞殮殫殯毆毀轂畢斃氈毿氌氣氫氬氳匯漢汙湯洶沓溝沒灃漚瀝淪滄沨溈滬沵濘淚澩瀧瀘濼瀉潑澤涇潔灑窪浹淺漿澆湞浉濁測澮濟瀏浐渾滸濃潯浕塗湧濤澇淶漣潿渦涢渙滌潤澗漲澀澱淵淥漬瀆漸澠漁瀋滲溫遊灣濕潰濺漵溇潷滾滯灩灄滿瀅濾濫灤濱灘滪濫瀠瀟瀲濰潛瀦瀾瀨瀕灝滅燈靈災燦煬爐燉煒熗點煉熾爍爛烴燭煙煩燒燁燴燙燼熱煥燜燾煆糊溜愛爺牘牦牽犧犢犟狀獷獁猶狽麅狝獰獨狹獅獪猙獄猻獫獵獼玀豬貓猬獻獺璣玙玚瑪瑋環現玱璽瑉玨琺瓏珰琿琎璉瑣瓊瑤璦璇瓔瓚甕甌電畫暢畬疇癤療瘧癘瘍癧瘡瘋皰屙癰痙癢瘂癆瘓癇癡癉瘆瘞瘺癟癱癮癭癩癬癲臒皚皺皸盞鹽監蓋盜盤瞘眥眬著睜睞瞼瞞矚矯磯礬礦碭碼磚硨硯碸礪礱礫礎硁矽碩硤磽硙硚確鹼礙磧磣堿碹滾禮祎禰禎禱禍稟祿禪離禿稈種積稱穢秾穭稅穌穩穡窮竊竅窯竄窩窺竇窶豎競篤筍筆筧箋籠籩築篳篩筜箏籌簽簡箓簀篋籜籮簞簫簣簍籃籬籪籟糴類秈糶糲粵糞糧糝糇緊縶糸糾紆紅紂纖紇約級紈纊紀紉緯紜纮純紕紗綱納纴縱綸紛紙紋紡纻纼紐紓線紺紲紱練組紳細織終縐絆紼絀紹繹經紿綁絨結絝繞绖絎繪給絢絳絡絕絞統綆綃絹繡绤綏絳繼綈績緒綾绬續綺緋綽緔緄繩維綿綬繃綢绹綹綣綜綻綰綠綴緇緙緗緘緬纜緹緲緝缊繢緦綞緞緶缐緱縋緩締縷編緡緣縉縛縟縝縫缞縞纏縭縊縑繽縹縵縲纓縮繆繅纈繚繕繒韁繾繰繯繳纘罌網羅罰罷羆羈羥羨翹翙翚耮耬聳恥聶聾職聹聯聵聰肅腸膚膁腎腫脹脅膽勝朧腖臚脛膠脈膾臟臍腦膿臠腳脫腡臉臘腌腘腭膩靦膃騰臏臜輿艤艦艙艫艱艷艹藝節羋薌蕪蘆蓯葦藶莧萇蒼苧蘇檾蘋莖蘢蔦塋煢繭荊薦荙莢蕘蓽蕎薈薺蕩榮葷滎犖熒蕁藎蓀蔭蕒葒葤藥蒞蓧萊蓮蒔萵薟獲蕕瑩鶯蒓萚蘿螢營縈蕭薩蔥蕆蕢蔣蔞藍薊蘺蕷鎣驀薔蘞藺藹蘄蘊藪槁蘚虜慮虛蟲虬蟣雖蝦蠆蝕蟻螞蠶蠔蜆蠱蠣蟶蠻蟄蛺蟯螄蠐蛻蝸蠟蠅蟈蟬蠍螻蠑螀蟎蟏釁銜補襯袞襖裊袆襪襲袯裝襠裈褳襝褲襇褸襤繈襕見觀觃規覓視覘覽覺覬覡覿觍覦覯覲覷觴觸觶詟譽謄訁計訂訃認譏訐訌討讓訕訖訓議訊記讱講諱謳詎訝訥許訛論讻訟諷設訪訣證詁訶評詛識诇詐訴診詆謅詞詘詔诐譯詒誆誄試詿詩詰詼誠誅詵話誕詬詮詭詢詣諍該詳詫諢詡诪誡誣語誚誤誥誘誨誑說誦誒請諸諏諾讀諑誹課諉諛誰諗調諂諒諄誶談誼謀諶諜謊諫諧謔謁謂諤諭諼讒諮諳諺諦謎諞谞謨讜謖謝謠謗謚謙謐謹謾謫譾謬譚譖譙讕譜譎讞譴譫讖谷豮貝貞負贠貢財責賢敗賬貨質販貪貧貶購貯貫貳賤賁貰貼貴貺貸貿費賀貽賊贄賈賄貲賃賂贓資賅贐賕賑賚賒賦賭賫贖賞賜赑赒賡賠賧賴赗贅賻賺賽賾贗贊赟贈贍贏贛赪趙趕趨趲躉躍蹌跖躒踐跶蹺蹕躚躋踴躊蹤躓躑躡蹣躕躥躪躦軀車軋軌軒轪軔轉軛輪軟轟軲軻轤軸軹軼軤軫轢軺輕軾載輊轎辀輇輅較輒輔輛輦輩輝輥輞辌輟輜輳輻輯辒輸轡轅轄輾轆轍轔辭辯辮邊遼達遷過邁運還這進遠違連遲邇逕跡適選遜遞邐邏遺遙鄧鄺鄔郵鄒鄴鄰郁郤郟鄶鄭鄆酈鄖鄲醞酦醬釅釃釀釋裏鉅鑒鑾鏨釓釔針釘釗釙釕釷釬釧釤钑釩釣鍆釹钖釵钘鈣鈈鈦鈍鈔鐘鈉鋇鋼鈑鈐鑰欽鈞鎢鉤鈧鈁鈥鈄鈕鈀鈺錢鉦鉗鈷缽鈳鉕鈽鈸鉞鉆鉬鉭鉀鈿鈾鐵鉑鈴鑠鉛鉚鈰鉉鉈鉍鈹鐸铏銬銠鉺銪鋏鋣鐃铚鐺銅鋁銱銦鎧鍘銖銑鋌銩铦鏵銓鉿銚鉻銘錚銫鉸銥鏟銃鐋銨銀銣鑄鐒鋪铻錸鋱鏈鏗銷鎖鋰鋥鋤鍋鋯鋨銹銼鋝鋒鋅鋶鐦鐧銳銻鋃鋟鋦錒錆鍺錯錨锜錁錕锠錫錮鑼錘錐錦鍁錈錇錟錠鍵鋸錳錙鍥锳鍇鏘鍶鍔鍤鍬鍾鍛鎪锽鍰鎄鍍鎂鏤镃鏌鎮镈鎘鑷鐫鎳鎿鎦鎬鎊鎰镕鏢鏜鏍镚鏞鏡鏑鏃鏇镠鐔鐝鐐鏷鑥鐓鑭鐠鑹鏹鐙鑊鐳镮鐲鐮鐿鑔鑣镴鑲長門閂閃閆闬閉問闖閏闈閑閎間閔閌悶閘鬧閨聞闥閩閭闿閥閣閡閫鬮閱閬阇閾閹閶鬩閿閽閻閼闡闌闃阓闊闋闔闐阘闕闞阛隊陽陰陣階際陸隴陳陘陜隉隕險隨隱隸雋難雛讎靂霧霽黴靄靚靜靨韃鞽韉韝韋韌韨韓韙韞韜韻頁頂頃頇項順須頊頑顧頓頎頒頌頏預顱領頗頸頡頰颋頜潁颎頦頤頻颒頹頷颕穎顆題颙顎顓顏額顳顢顛顙顥颣顫顬顰顴風飏飐颮颯颶飔颼飖飗飄飆飈飛饗饜饤饑饦餳飩餼飪飫飭飯飲餞飾飽飼饳飴餌饒餉饸饹餃饻餅餑饾餓餘餒馂馃餛餡館餷饋馉餿饞馌饃馎餾饈饉饅饊饌饢馬馭馱馴馳驅驲駁驢駔駛駟駙駒騶駐駝駑駕驛駘驍罵骃驕驊駱駭駢骉驪騁驗骍骎駿騏騎騍騅骔骕驂騙騭骙騷騖驁騮騫騸驃騾驄驏驟驥骦驤髏髖髕鬢魘魎魚鱽鱾魷鲀魯魴鲄鮁鮃鮎鱸鲉鲊鮒鲌鮑鱟鲏鮐鮭鮚鲓鮪鮞鲖鲗鲘鲙鱭鮫鮮鲝鯗鱘鯁鱺鰱鰹鯉鰣鰷鯀鯊鯇鲪鯽鲬鯖鯪鲯鯫鯡鯤鯧鯝鯢鯰鯛鯨鲹鯴鯔鱝鰈鲾鲿鳀鳁鳂鰓鱷鰍鰒鰉鳈鳉鯿鰠鰲鰭鰨鰥鰩鳑鳒鰳鰾鱈鱉鰻鰵鱅鳛鱖鱔鱗鱒鳠鳡鱧鳣鳥鳩雞鳶鳴鸤鷗鴉鸧鴇鴆鴣鶇鸕鴨鸮鴦鸰鴟鴝鴛鸴鴕鷥鷙鴯鴰鵂鸻鸼鴿鸞鴻鹀鵓鸝鵑鵠鵝鵒鷴鵜鵡鵲鶓鵪鹍鵯鵬鹐鶉鹒鹓鹔鶘鹖鶚鶻鶿鶥鶩鹝鷂鹟鹠鹡鹢鶼鶴鹥鸚鷓鷚鷯鷦鷲鷸鷺鹯鷹鸌鹲鸛鹴鹺麥麩黃黌黡黷黲黽黿鼌鼉鼗鼴齇齊齏齒齔龁龂齟齡齙齠齜齦齬齪齲齷龍龔龕龜誌制咨只裏系範松沒嘗嘗鬧面準鐘別閑乾盡臟拼"
		},
		ri = ie.S,
		ni = ie.T;

	function oi(t, e) {
		var i, r, n, o, s = "",
			a = e ? (o = ri, ni) : (o = ni, ri);
		if ("string" != typeof t) return t;
		for (i = 0; i < t.length; i++) r = t.charAt(i), 13312 < (n = t.charCodeAt(i)) && n < 40899 || 63744 < n && n < 64106 ? s += -1 !== (n = o.indexOf(r)) ? a.charAt(n) : r : s += r;
		return s
	}
	var si = {
		s2t: function(t) {
			return oi(t, !0)
		},
		t2s: function(t) {
			return oi(t, !1)
		}
	};
	let ai = !1;
	const li = (i, r, n, o, s, a, l) => c(void 0, void 0, void 0, function*() {
			let t = document.getElementById("page-area");
			if (t) {
				var e = t.getElementsByTagName("iframe")[0];
				if (e) {
					let t = e.contentDocument;
					t && (e = (e = Math.floor(i.clientWidth / 12)) % 2 == 0 ? e : e - 1, 0 < s && 0 < t.body.scrollLeft ? t.body.scrollBy({
						top: 0,
						left: -i.offsetWidth - e,
						behavior: a ? "smooth" : "auto"
					}) : 0 < s && 0 === t.body.scrollLeft ? (hi(i, r, n, o), l("rendered")) : s < 0 && (((t, e, i, r, n) => {
						let o = document.getElementById("page-area");
						var s, a;
						o && (!(s = o.getElementsByTagName("iframe")[0]) || (a = s.contentDocument) && Math.abs(t.scrollHeight - t.scrollTop - t.clientHeight) < 10 && Math.abs(a.body.scrollWidth - a.body.scrollLeft - a.body.clientWidth) < 10 && (di(t, e, i, r), n("rendered")))
					})(i, r, n, o, l), t.body.scrollBy({
						top: 0,
						left: i.offsetWidth + e,
						behavior: a ? "smooth" : "auto"
					})))
				}
			}
		}),
		hi = (t, e, i, r) => {
			let n = a.getKookitConfig("chapterTitle");
			var o = Qe.findIndex(e.map(t => (t.label = t.label.trim(), t)), {
				label: n.trim()
			});
			0 !== o && -1 !== o && n && (a.setKookitConfig("chapterTitle", e[o - 1].label), a.setKookitConfig("text", "prevChapter"), ci(e[o - 1].label, i, t, r))
		},
		ci = (i = "", r, n, o) => {
			let t = document.getElementById("page-area");
			if (t) {
				var s = t.getElementsByTagName("iframe")[0];
				if (s) {
					let e = s.contentDocument;
					if (e) {
						e.body.innerHTML = "";
						let t = Qe.findIndex(r.map(t => (t.title = t.title.trim(), t)), {
							title: i.trim()
						});
						t = -1 === t ? 0 : t, e.body.innerHTML = r[t].text, a.setKookitConfig("chapterTitle", r[t].title), a.setKookitConfig("percentage", t / r.length + ""), Xe(n, o), ((r, n) => {
							let t = document.getElementById("page-area");
							if (t) {
								var o = t.getElementsByTagName("iframe")[0];
								if (o) {
									let i = o.contentDocument;
									if (i) {
										var s, o = Math.floor(r.clientWidth / 12),
											a = o % 2 == 0 ? o : o - 1;
										let t, e;
										for (s of i.getElementsByTagName("img")) {
											var l = s.parentElement;
											t = 0, e = 0, s.width && s.height ? s.height / s.width > l.clientHeight / l.clientWidth ? (t = l.clientHeight, e = t * s.width / s.height) : (e = l.clientWidth, t = e * s.height / s.width) : t = l && l.clientWidth && 0 < l.clientWidth ? (e = l.clientWidth, l.clientHeight) : (e = r.offsetWidth, r.offsetHeight), e = Math.min("scroll" === n || "single" === n ? r.offsetWidth : (r.offsetWidth - a) / 2, e), (e || t) && s.setAttribute("style", `max-width: ${0<e?e:""}px;max-height:${0<t?t:""}px`)
										}
									}
								}
							}
						})(n, o), ui(n, o)
					}
				}
			}
		},
		ui = (r, n, t = "", o = "0") => {
			let s = t || a.getKookitConfig("text") || "",
				e = document.getElementById("page-area");
			if (e) {
				t = e.getElementsByTagName("iframe")[0];
				if (t) {
					let i = t.contentDocument;
					if (i) {
						let e = Array.from(i.body.querySelectorAll("h1,h2,h3,h4,p,img"));
						if (s) {
							let t = e.filter((t, e) => (t.innerText.trim() && (t.innerText.trim() === s.trim() || t.innerText.trim() === si.t2s(s.trim()) || t.innerText.trim() === si.s2t(s.trim())) || t.getAttribute("recindex") && t.getAttribute("recindex")
								.trim() === s.trim()) && Math.abs(e - parseInt(o || a.getKookitConfig("count"))) < 2)[0];
							"scroll" !== n ? i.body.scrollTo(s && t ? t.getBoundingClientRect()
								.left : "prevChapter" === s ? i.body.scrollWidth : 0, 0) : r.scrollTo(0, s && t ? t.getBoundingClientRect()
								.top : 0)
						} else("scroll" !== n ? i.body : r)
							.scrollTo(0, 0)
					}
				}
			}
		},
		fi = (n, o) => c(void 0, void 0, void 0, function*() {
			if (!ai) {
				let t = document.getElementById("page-area");
				if (t) {
					var e = t.getElementsByTagName("iframe")[0];
					if (e) {
						let t = e.contentDocument;
						if (t) {
							let e = Array.from(t.body.querySelectorAll("h1,h2,h3,h4,p,img"));
							let i = e.filter(t => pi(n, t, o) && (t.innerText.trim() || t.getAttribute("recindex")))[0],
								r = 0;
							for (let t = 0; t < e.length; t++) {
								if (pi(n, e[t], o) && "IMG" === e[t].tagName) {
									r = t;
									break
								}
								if (pi(n, e[t], o) && i && e[t].innerHTML === i.innerHTML && "IMG" !== e[t].tagName) {
									r = t;
									break
								}
							}
							a.setKookitConfig("text", i ? i.innerText || (i.getAttribute("recindex") ? i.getAttribute("recindex") : "") : ""), a.setKookitConfig("count", r + ""), ai = !0, setTimeout(() => {
								ai = !1
							}, 100)
						}
					}
				}
			}
		}),
		di = (t, e, i, r) => {
			let n = a.getKookitConfig("chapterTitle");
			var o = Qe.findIndex(e.map(t => (t.label = t.label.trim(), t)), {
				label: n.trim()
			});
			o !== e.length - 1 && -1 !== o && (a.setKookitConfig("chapterTitle", e[o + 1].label), a.setKookitConfig("text", ""), ci(e[o + 1].label, i, t, r))
		},
		gi = (r, n) => {
			let t = document.getElementById("page-area");
			if (t) {
				var e = t.getElementsByTagName("iframe")[0];
				if (e) {
					let i = e.contentDocument;
					if (i) {
						let t = Array.from(i.body.querySelectorAll("h1,h2,h3,h4,p,img")),
							e = t.filter(t => pi(r, t, n) && (t.innerText.trim() || t.getAttribute("recindex")));
						return ("scroll" !== n ? e : t)
							.map(t => t.innerText)
							.join(" ")
					}
				}
			}
		},
		mi = (r, n) => {
			let o = [];
			for (let i = 0; i < n.length; i++) {
				let t = (new DOMParser())
					.parseFromString(n[i].text, "text/html"),
					e = Array.from(t.body.querySelectorAll("h1,h2,h3,h4,p,img"));
				for (let t = 0; t < e.length; t++) - 1 < e[t].innerText.indexOf(r) && o.push({
					excerpt: e[t].innerText,
					cfi: JSON.stringify({
						text: e[t].innerText,
						chapterTitle: n[i].title,
						count: t,
						percentage: i / n.length
					})
				})
			}
			return o
		},
		pi = (t, e, i) => {
			var r, n = !1,
				o = e.getBoundingClientRect();
			return "scroll" !== i && e.innerText.trim() ? n = -10 < (r = o.left) && r <= t.offsetWidth : e.innerText.trim() ? n = (r = o.top) >= t.scrollTop && r <= t.scrollTop + t.offsetHeight : "scroll" !== i && (e.id || e.onerror) && "IMG" === e.tagName ? n = 0 <= (i = o.left) && i <= t.offsetWidth : (e.id || e.onerror) && "IMG" === e.tagName && (n = (o = o.top) >= t.scrollTop - t.clientHeight / 2 && o <= t.scrollTop + t.offsetHeight + t.clientHeight / 2), n
		};
	class vi {
		constructor(t) {
			this.bookStr = t, this.chapterList = [], this.chapterDocList = []
		}
		getChapterDoc() {
			var e = -1 < this.bookStr.indexOf("<mbp:pagebreak>") ? this.bookStr.split("<mbp:pagebreak>")
				.filter(t => "" !== t.trim()) : this.bookStr.split("<address> </address>")
				.filter(t => "" !== t.trim());
			let n = [],
				o = [],
				i = "";
			for (let t = 0; t < e.length; t++)(t => {
				var e = 0 < t.querySelectorAll("h1,h2,h3,h4,blockquote,font,b")
					.length;
				let i = t.querySelectorAll("h1,h2,h3,h4,blockquote,font,b"),
					r = t.getElementsByTagName("p"),
					n;
				for (let t = 0; t < i.length; t++) {
					var o = n && u(i[t].innerText) && f(i[t].innerText);
					if (i[t].innerText.trim() && !o) {
						n = i[t];
						break
					}
				}
				for (let t = 0; t < r.length && (!r[t].innerText.trim() || -1 !== r[t].innerHTML.indexOf("<")); t++);
				var s = n && 30 < n.innerText.trim()
					.length,
					t = 50 < t.body.innerText.length;
				return e && (!s || l(n.innerText.trim())) && t
			})((new DOMParser())
				.parseFromString(e[t], "text/html")) ? (n.push(i + e[t]), i = "") : i += e[t];
			0 === n.length && n.push(i);
			for (let r = 0; r < n.length; r++) {
				let t = (new DOMParser())
					.parseFromString(n[r], "text/html"),
					e = t.querySelectorAll("h1,h2,h3,h4,blockquote,font,b"),
					i;
				for (let t = 0; t < e.length; t++)
					if (e[t].innerText.trim() && !u(e[t].innerText) && !f(e[t].innerText)) {
						i = e[t];
						break
					} this.chapterDocList.push({
					title: i ? -1 === o.indexOf(i.innerText) ? i.innerText : i.innerText + "#" + r : "Forword",
					text: n[r]
				}), i && o.push(i.innerText)
			}
			return this.chapterDocList
		}
		getChapter() {
			for (let t = 0; t < this.chapterDocList.length; t++) {
				var e = Math.floor(9e5 * Math.random()) + 1e5;
				this.chapterList.push({
					label: this.chapterDocList[t].title,
					id: "title" + e,
					href: "title" + e,
					subitems: []
				})
			}
			return this.chapterList
		}
	}
	String.prototype.slim = function() {
		return this.split("")
			.filter(t => "=" !== t && "-" !== t && "_" !== t && "+" !== t)
			.join("")
	};
	class yi {
		constructor(t) {
			this.bookStr = t, this.chapterList = [], this.chapterDocList = [], this.bookDoc = (new DOMParser())
				.parseFromString(this.bookStr, "text/html"), this.chapterDomList = []
		}
		getChapter() {
			if (this.chapterDomList = Array.from(this.bookDoc.querySelectorAll("h1,h2,h3,h4,font,b")), 0 < this.chapterDomList.length) {
				this.insertPageBreak();
				let t = new vi(this.bookDoc.body.innerHTML);
				this.chapterDocList = t.getChapterDoc(), this.chapterList = t.getChapter()
			} else this.getExtraTitle(), this.generateChapterList(), this.insertPageBreak();
			return this.chapterList
		}
		insertPageBreak() {
			for (let t = 0; t < this.chapterDomList.length; t++) {
				var e = document.createElement("address"),
					i = document.createTextNode(" ");
				e.appendChild(i), this.chapterDomList[t].parentNode && this.chapterDomList[t].parentNode.insertBefore(e, this.chapterDomList[t])
			}
		}
		generateChapterList() {
			var t;
			0 === this.chapterDomList.length && (t = Math.floor(9e5 * Math.random()) + 1e5, this.chapterList.push({
				label: "Forword",
				id: "title" + t,
				href: "title" + t,
				subitems: []
			}));
			let e = [];
			for (let t = 0; t < this.chapterDomList.length; t++) {
				var i = Math.floor(9e5 * Math.random()) + 1e5;
				this.chapterList.push({
					label: this.chapterDomList[t] ? -1 === e.lastIndexOf(this.chapterDomList[t].innerText) ? this.chapterDomList[t].innerText : e[e.lastIndexOf(this.chapterDomList[t].innerText)] + t : "Forword",
					id: "title" + i,
					href: "title" + i,
					subitems: []
				}), e.push(this.chapterList[t].label)
			}
		}
		getExtraTitle() {
			let e = !1;
			0 === this.chapterDomList.length && (this.chapterDomList = Array.from(this.bookDoc.getElementsByTagName("p"))
				.filter(t => (e = !(e || !(t.innerText.trim()
					.slim()
					.startsWith("第") && i(t.innerText.trim()) || t.innerText.trim()
					.slim()
					.startsWith("Chapter") || t.innerText.trim()
					.slim()
					.startsWith("CHAPTER"))), l(t.innerText.trim()
					.slim(), e))))
		}
		getChapterDoc() {
			if (0 < this.chapterDocList.length) return this.chapterDocList;
			var e, i = this.bookDoc.body.innerHTML.split("<address> </address>")
				.filter(t => "" !== t.trim());
			for (let t = 0; t < i.length; t++) i.length > this.chapterList.length && 0 === t && (e = Math.floor(9e5 * Math.random()) + 1e5, this.chapterList.unshift({
				label: "Forword" + t,
				id: "title" + e,
				href: "title" + e,
				subitems: []
			})), this.chapterDocList.push({
				title: this.chapterList[t].label,
				text: i[t]
			});
			return this.chapterDocList
		}
	}
	class bi {
		constructor() {
			this.callbacks = {}, this.callbacks.base = {}
		}
		on(t, e) {
			const i = this;
			if (void 0 === t || "" === t) return console.warn("wrong names"), !1;
			if (void 0 === e) return console.warn("wrong callback"), !1;
			const r = this.resolveNames(t);
			return r.forEach(function(t) {
				t = i.resolveName(t);
				i.callbacks[t.namespace] instanceof Object || (i.callbacks[t.namespace] = {}), i.callbacks[t.namespace][t.value] instanceof Array || (i.callbacks[t.namespace][t.value] = []), i.callbacks[t.namespace][t.value].push(e)
			}), this
		}
		off(t) {
			const r = this;
			if (void 0 === t || "" === t) return console.warn("wrong name"), !1;
			const e = this.resolveNames(t);
			return e.forEach(function(t) {
				var e = r.resolveName(t);
				if ("base" !== e.namespace && "" === e.value) delete r.callbacks[e.namespace];
				else if ("base" === e.namespace)
					for (const i in r.callbacks) r.callbacks[i] instanceof Object && r.callbacks[i][e.value] instanceof Array && (delete r.callbacks[i][e.value], 0 === Object.keys(r.callbacks[i])
						.length && delete r.callbacks[i]);
				else r.callbacks[e.namespace] instanceof Object && r.callbacks[e.namespace][e.value] instanceof Array && (delete r.callbacks[e.namespace][e.value], 0 === Object.keys(r.callbacks[e.namespace])
					.length && delete r.callbacks[e.namespace])
			}), this
		}
		trigger(t, e = []) {
			if (void 0 === t || "" === t) return console.warn("wrong name"), !1;
			const i = this;
			const r = e instanceof Array ? e : [];
			let n = this.resolveNames(t);
			n = this.resolveName(n[0]), setTimeout(() => {
				if ("base" === n.namespace)
					for (const t in i.callbacks) {
						if (i.callbacks[t] instanceof Object && i.callbacks[t][n.value] instanceof Array) i.callbacks[t][n.value].forEach(function(t) {
							t.apply(i, r)
						});
						else if (this.callbacks[n.namespace] instanceof Object) {
							if ("" === n.value) return console.warn("wrong name"), this;
							i.callbacks[n.namespace][n.value].forEach(function(t) {
								t.apply(i, r)
							})
						}
						return null
					}
			}, 100)
		}
		resolveNames(t) {
			let e = t;
			return e = e.replace(/[^a-zA-Z0-9 ,/.]/g, ""), e = e.replace(/[,/]+/g, " "), e = e.split(" "), e
		}
		resolveName(t) {
			const e = {};
			var i = t.split(".");
			return e.original = t, e.value = i[0], e.namespace = "base", 1 < i.length && "" !== i[1] && (e.namespace = i[1]), e
		}
	}

	function xi(t) {
		return t instanceof ArrayBuffer && (t = new Uint8Array(t)), new TextDecoder("utf-8")
			.decode(t)
	}
	var Li = new DOMParser();
	class Ti {
		constructor(t) {
			this.capacity = t, this.fragment_list = [], this.imageArray = [], this.cur_fragment = new wi(t), this.fragment_list.push(this.cur_fragment)
		}
		write(t) {
			this.cur_fragment.write(t) || (this.cur_fragment = new wi(this.capacity), this.fragment_list.push(this.cur_fragment), this.cur_fragment.write(t))
		}
		get(t) {
			for (var e = 0; e < this.fragment_list.length;) {
				var i = this.fragment_list[e];
				if (t < i.size) return i.get(t);
				t -= i.size, e += 1
			}
			return null
		}
		size() {
			for (var t = 0, e = 0; e < this.fragment_list.length; e++) t += this.fragment_list[e].size;
			return t
		}
		shrink() {
			for (var t = new Uint8Array(this.size()), e = 0, i = 0; i < this.fragment_list.length; i++) {
				var r = this.fragment_list[i];
				r.full() ? t.set(r.buffer, e) : t.set(r.buffer.slice(0, r.size), e), e += r.size
			}
			return t
		}
	}
	class wi {
		constructor(t) {
			this.buffer = new Uint8Array(t), this.capacity = t, this.size = 0
		}
		write(t) {
			return !(this.size >= this.capacity) && (this.buffer[this.size] = t, this.size += 1, !0)
		}
		full() {
			return this.size === this.capacity
		}
		get(t) {
			return this.buffer[t]
		}
	}
	class Ci {
		constructor(t) {
			this.getAzw3Style = t => {
				var e;
				let i = "";
				return t.documentElement.lastChild && null !== (e = t.documentElement.lastChild) && void 0 !== e && e.lastChild && !this.isElement(null === (e = t.documentElement.lastChild) || void 0 === e ? void 0 : e.lastChild) && (i = (null === (t = t.documentElement.lastChild) || void 0 === t ? void 0 : t.lastChild.textContent) || ""), i
			}, this.render_image = (o, s) => new Promise((i, e) => {
				var r = o[s],
					t = r.getAttribute("recindex") ? +r.getAttribute("recindex") : s + 1;
				r.setAttribute("onerror", "this.style.display='none'");
				var n = this.read_image(t - 1),
					t = new FileReader();
				t.onload = t => {
					var e;
					r.src = null === (e = t.target) || void 0 === e ? void 0 : e.result, i(null === (t = t.target) || void 0 === t ? void 0 : t.result)
				}, t.onerror = function(t) {
					e(t)
				}, t.readAsDataURL(n)
			}), this.view = new DataView(t), this.buffer = this.view.buffer, this.offset = 0, this.header = null
		}
		parse() {}
		getUint8() {
			var t = this.view.getUint8(this.offset);
			return this.offset += 1, t
		}
		getUint16() {
			var t = this.view.getUint16(this.offset);
			return this.offset += 2, t
		}
		getUint32() {
			var t = this.view.getUint32(this.offset);
			return this.offset += 4, t
		}
		getStr(t) {
			var e = xi(this.buffer.slice(this.offset, this.offset + t));
			return this.offset += t, e
		}
		skip(t) {
			this.offset += t
		}
		setoffset(t) {
			this.offset = t
		}
		get_record_extrasize(t, e) {
			for (var i, r, n, o = t.length - 1, s = 0, a = 15; 0 < a; a--) e & 1 << a && (r = (i = this.buffer_get_varlen(t, o))[0], n = i[1], o = i[2], o -= r - n, s += r);
			return 1 & e && (s += 1 + (3 & t[o])), s
		}
		buffer_get_varlen(t, e) {
			for (var i = 0, r = 0, n = 0, o = 0;; 0) {
				var s = t[e];
				if (r |= (127 & s) << o, o += 7, i += 1, --e, 4 <= (n += 1) || 0 < (128 & s)) break
			}
			return [r, i, e]
		}
		read_text() {
			for (var t = this.palm_header.record_count, e = [], i = 1; i <= t; i++) e.push(this.read_text_record(i));
			return xi(function(e) {
				var i = 0;
				for (let t = 0; t < e.length; t++) {
					var r = e[t];
					i += r.length
				}
				var n = new Uint8Array(i),
					o = 0;
				for (let t = 0; t < e.length; t++) r = e[t], n.set(r, o), o += r.length;
				return n
			}(e))
		}
		read_text_record(t) {
			var e = this.mobi_header.extra_flags,
				i = this.reclist[t].offset,
				r = this.reclist[t + 1].offset,
				t = new Uint8Array(this.buffer.slice(i, r)),
				e = this.get_record_extrasize(t, e),
				t = new Uint8Array(this.buffer.slice(i, r - e));
			return 2 !== this.palm_header.compression ? (this.palm_header.compression, t) : function(t) {
					for (var e = t.length, i = 0, r = new Ti(t.length); i < e;) {
						var n = t[i];
						if (i += 1, 0 === n) r.write(n);
						else if (n <= 8) {
							for (var o = i; o < i + n; o++) r.write(t[o]);
							i += n
						} else if (n <= 127) r.write(n);
						else if (n <= 191) {
							var s = t[i];
							i += 1;
							var a = (n << 8 | s) >> 3 & 2047,
								l = 3 + (7 & s),
								h = r.size();
							for (let t = 0; t < l; t++) r.write(r.get(h - a)), h += 1
						} else r.write(32), r.write(128 ^ n)
					}
					return r
				}(t)
				.shrink()
		}
		read_image(t) {
			var e = this.mobi_header.first_image_idx,
				i = this.reclist[e + t].offset,
				t = this.reclist[e + t + 1].offset,
				t = new Uint8Array(this.buffer.slice(i, t));
			return new Blob([t.buffer])
		}
		load() {
			this.header = this.load_pdbheader(), this.reclist = this.load_reclist(), this.load_record0()
		}
		load_pdbheader() {
			var t = {};
			return t.name = this.getStr(32), t.attr = this.getUint16(), t.version = this.getUint16(), t.ctime = this.getUint32(), t.mtime = this.getUint32(), t.btime = this.getUint32(), t.mod_num = this.getUint32(), t.appinfo_offset = this.getUint32(), t.sortinfo_offset = this.getUint32(), t.type = this.getStr(4), t.creator = this.getStr(4), t.uid = this.getUint32(), t.next_rec = this.getUint32(), t.record_num = this.getUint16(), t
		}
		load_reclist() {
			for (var t = [], e = 0; e < this.header.record_num; e++) {
				var i = {};
				i.offset = this.getUint32(), i.attr = this.getUint32(), t.push(i)
			}
			return t
		}
		load_record0() {
			this.palm_header = this.load_record0_header(), this.mobi_header = this.load_mobi_header()
		}
		load_record0_header() {
			var t = {},
				e = this.reclist[0];
			return this.setoffset(e.offset), t.compression = this.getUint16(), this.skip(2), t.text_length = this.getUint32(), t.record_count = this.getUint16(), t.record_size = this.getUint16(), t.encryption_type = this.getUint16(), this.skip(2), t
		}
		load_mobi_header() {
			var t = {},
				e = this.offset;
			return t.identifier = this.getUint32(), t.header_length = this.getUint32(), t.mobi_type = this.getUint32(), t.text_encoding = this.getUint32(), t.uid = this.getUint32(), t.generator_version = this.getUint32(), this.skip(40), t.first_nonbook_index = this.getUint32(), t.full_name_offset = this.getUint32(), t.full_name_length = this.getUint32(), t.language = this.getUint32(), t.input_language = this.getUint32(), t.output_language = this.getUint32(), t.min_version = this.getUint32(), t.first_image_idx = this.getUint32(), t.huff_rec_index = this.getUint32(), t.huff_rec_count = this.getUint32(), t.datp_rec_index = this.getUint32(), t.datp_rec_count = this.getUint32(), t.exth_flags = this.getUint32(), this.skip(36), t.drm_offset = this.getUint32(), t.drm_count = this.getUint32(), t.drm_size = this.getUint32(), t.drm_flags = this.getUint32(), this.skip(8), this.skip(4), this.skip(46), t.extra_flags = this.getUint16(), this.setoffset(e + t.header_length), t
		}
		load_exth_header() {
			return {}
		}
		extractContent(t) {
			var e = document.createElement("span");
			return e.innerHTML = t, e.textContent || e.innerText
		}
		render() {
			return new Promise((i, t) => c(this, void 0, void 0, function*() {
				this.load();
				var t = this.read_text(),
					t = Li.parseFromString(t, "text/html")
					.documentElement,
					e = t.getElementsByTagName("img");
				for (let t = 0; t < e.length; t++) yield this.render_image(e, t);
				i(t)
			}))
		}
		isElement(e) {
			try {
				return e instanceof HTMLElement
			} catch (t) {
				return "object" == typeof e && 1 === e.nodeType && "object" == typeof e.style && "object" == typeof e.ownerDocument
			}
		}
		getMetadata() {
			return this.load(), {
				compression: this.palm_header.compression,
				ctime: this.header.ctime,
				mtime: this.header.mtime,
				language: this.mobi_header.language
			}
		}
	}
	class ki {
		constructor(t) {
			this.bookStr = t, this.chapterList = [], this.chapterDocList = [], this.bookDoc = (new DOMParser())
				.parseFromString(this.bookStr, "text/html"), this.chapterDomList = []
		}
		getChapter() {
			let e = [];
			this.chapterDomList = Array.from(this.bookDoc.getElementsByTagName("h1"));
			for (let t = 0; t < this.chapterDomList.length; t++) {
				var i = Math.floor(9e5 * Math.random()) + 1e5;
				this.chapterList.push({
					label: this.chapterDomList[t] ? -1 === e.lastIndexOf(this.chapterDomList[t].innerText) ? this.chapterDomList[t].innerText : e[e.lastIndexOf(this.chapterDomList[t].innerText)] + t : "Forword",
					id: "title" + i,
					href: "title" + i,
					subitems: []
				}), e.push(this.chapterList[t].label)
			}
			for (let t = 0; t < this.chapterDomList.length; t++) {
				this.chapterDomList[t].id = this.chapterList[t].id;
				var r = document.createElement("span"),
					n = document.createTextNode("pagebreak");
				r.appendChild(n), this.chapterDomList[t].parentNode.insertBefore(r, this.chapterDomList[t])
			}
			return this.chapterList
		}
		getChapterDoc() {
			var e, i = this.bookDoc.body.innerHTML.split("<span>pagebreak</span>")
				.filter(t => t.trim());
			for (let t = 0; t < i.length; t++) i.length > this.chapterList.length && 0 === t && (e = Math.floor(9e5 * Math.random()) + 1e5, this.chapterList.unshift({
				label: "Forword#" + t,
				id: "title" + e,
				href: "title" + e,
				subitems: []
			})), this.chapterDocList.push({
				title: this.chapterList[t].label,
				text: i[t]
			});
			return this.chapterDocList
		}
	}
	const Di = {
		svg: "image/svg+xml",
		png: "image/png",
		jpg: "image/jpeg",
		jpeg: "image/jpeg",
		gif: "image/gif",
		webp: "image/webp",
		zip: "application/zip",
		rar: "application/x-rar-compressed",
		"7z": "application/x-7z-compressed",
		tar: "application/x-tar",
		html: "text/html",
		htm: "text/html",
		xml: "text/xml",
		xhtml: "application/xhtml+xml"
	};
	class _i {
		constructor(t, e, i, r, n) {
			this.fileNameList = t, this.zip = e, this.bookStr = "", this.format = n, this.bookDoc = null, this.mode = i, this.chapterList = [], this.extension = this.fileNameList[0].split(".")
				.reverse()[0], this.element = r, this.getBookStr()
		}
		getBookStr() {
			let i = document.createElement("div");
			var r = "single" === this.mode ? 1 : 2,
				t = Math.floor(this.element.clientWidth / 12),
				n = t % 2 == 0 ? t : t - 1;
			for (let e = 0; e < this.fileNameList.length; e++) {
				let t = document.createElement("img");
				t.id = e + "", t.setAttribute("style", `width: ${"scroll"===this.mode?this.element.clientWidth:(this.element.clientWidth-n)/r}px;max-height:${"scroll"===this.mode?"inherit":this.element.clientHeight}px`), i.appendChild(t)
			}
			this.bookDoc = i
		}
		getChapter() {
			for (let t = 0; t < this.fileNameList.length; t++) this.chapterList.push({
				label: this.fileNameList[t],
				id: t + "",
				href: t,
				subitems: []
			});
			return this.chapterList
		}
		getImgRatio() {
			return this.extension = this.fileNameList[0].split(".")
				.reverse()[0], new Promise((i, t) => c(this, void 0, void 0, function*() {
					var t = new Image();
					t.onload = function() {
						i(t.height / t.width)
					};
					let e;
					e = "cbr" === this.format ? this.zip.decompress(this.fileNameList[0]) : "cbt" === this.format ? this.zip[Qe.findLastIndex(this.zip, {
						name: this.fileNameList[0]
					})].buffer : yield this.zip.file(this.fileNameList[0])
						.async("arraybuffer"), t.src = "data:" + Di[this.extension.toLowerCase()] + ";base64," + this.base64ArrayBuffer(e)
				}))
		}
		renderComic() {
			let t = document.getElementById("page-area");
			if (t) {
				var e = t.getElementsByTagName("iframe")[0];
				if (e) {
					let t = e.contentDocument;
					t && (t.body.innerHTML = this.bookDoc.outerHTML)
				}
			}
		}
		renderImage(n) {
			return new Promise((r, t) => c(this, void 0, void 0, function*() {
				this.extension = this.fileNameList[0].split(".")
					.reverse()[0];
				let t = document.getElementById("page-area");
				if (t) {
					var i = t.getElementsByTagName("iframe")[0];
					if (i) {
						let e = i.contentDocument;
						if (e)
							if (e.getElementById(n + "") && !e.getElementById(n + "")
								.src) {
								let t;
								t = "cbr" === this.format ? this.zip.decompress(this.fileNameList[n]) : "cbt" === this.format ? this.zip[Qe.findLastIndex(this.zip, {
									name: this.fileNameList[n]
								})].buffer : yield this.zip.file(this.fileNameList[n])
									.async("arraybuffer"), e.getElementById(n + "") && (e.getElementById(n + "")
										.src = "data:" + Di[this.extension.toLowerCase()] + ";base64," + this.base64ArrayBuffer(t)), r()
							} else r()
					}
				}
			}))
		}
		base64ArrayBuffer(t) {
			for (var e, i = "", r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = new Uint8Array(t), o = n.byteLength, t = o % 3, s = o - t, a = 0; a < s; a += 3) i += r[(16515072 & (e = n[a] << 16 | n[a + 1] << 8 | n[a + 2])) >> 18] + r[(258048 & e) >> 12] + r[(4032 & e) >> 6] + r[63 & e];
			return 1 == t ? i += r[(252 & (e = n[s])) >> 2] + r[(3 & e) << 4] + "==" : 2 == t && (i += r[(64512 & (e = n[s] << 8 | n[1 + s])) >> 10] + r[(1008 & e) >> 4] + r[(15 & e) << 2] + "="), i
		}
	}
	const Si = (i, r, n) => c(void 0, void 0, void 0, function*() {
			let t = document.getElementById("page-area");
			if (t) {
				var e = t.getElementsByTagName("iframe")[0];
				if (e) {
					let t = e.contentDocument;
					t && (e = (e = Math.floor(i.clientWidth / 12)) % 2 == 0 ? e : e - 1, 0 < r && 0 < t.body.scrollLeft ? t.body.scrollBy({
						top: 0,
						left: -i.offsetWidth - e,
						behavior: n ? "smooth" : "auto"
					}) : 0 < r && 0 === t.body.scrollLeft || r < 0 && t.body.scrollBy({
						top: 0,
						left: i.offsetWidth + e,
						behavior: n ? "smooth" : "auto"
					}))
				}
			}
		}),
		Ei = (i, r, t = "") => {
			var n = t || parseInt(a.getKookitConfig("count")) || 0;
			let e = document.getElementById("page-area");
			if (e) {
				t = e.getElementsByTagName("iframe")[0];
				if (t) {
					let e = t.contentDocument;
					if (e)
						if (n) {
							let t = Array.from(e.body.querySelectorAll("img"))[n];
							"scroll" !== r ? e.body.scrollTo(n && t ? t.getBoundingClientRect()
								.left : 0, 0) : i.scrollTo(0, n && t ? t.getBoundingClientRect()
								.top : 0)
						} else("scroll" !== r ? e.body : i)
							.scrollTo(0, 0)
				}
			}
		};
	window.e = window.eval, 
  window.a = window.atob, 
  t.Azw3Render = class extends bi {
		constructor(t, e, i) {
			super(), this.azw3Buffer = t, this.mode = e, this.isSliding = i || !1, this.chapterList = [], this.chapterDocList = [], this.bookStr = "", this.element = ""
		}
		renderTo(n) {
			return c(this, void 0, void 0, function*() {
				return new Promise((r, t) => c(this, void 0, void 0, function*() {
					if (yield g()) {
						var e = yield new Ci(this.azw3Buffer)
							.render(), i = e.outerHTML;
						this.bookStr = i, this.element = n;
						let t = new yi(this.bookStr);
						this.chapterList = t.getChapter(), this.chapterDocList = t.getChapterDoc();
						i = a.getKookitConfig("chapterTitle") || this.chapterDocList[0].title;
						ti(n, Ye(e)), ii(n, this.mode), ci(i, this.chapterDocList, this.element, this.mode), this.trigger("rendered"), r()
					} else r()
				}))
			})
		}
		getChapter() {
			return this.chapterList
		}
		getPageSize() {
			return {
				width: this.element.clientWidth,
				height: this.element.clientHeight
			}
		}
		goToChapter(t) {
			ci(t, this.chapterDocList, this.element, this.mode), this.trigger("rendered")
		}
		goToPosition(t) {
			var {
				text: e,
				chapterTitle: i,
				count: t
			} = JSON.parse(t);
			ci(i, this.chapterDocList, this.element, this.mode), ui(this.element, this.mode, e, t), this.record(), this.trigger("rendered")
		}
		prev() {
			return c(this, void 0, void 0, function*() {
				let t = document.getElementById("page-area");
				var e;
				t && (!(e = t.getElementsByTagName("iframe")[0]) || (e = e.contentDocument) && ("scroll" === this.mode || 0 === e.body.scrollLeft ? (hi(this.element, this.chapterList, this.chapterDocList, this.mode), this.trigger("rendered")) : li(this.element, this.chapterList, this.chapterDocList, this.mode, 1, this.isSliding, this.trigger), fi(this.element, this.mode)))
			})
		}
		removeContent() {
			this.element.innerHTML = ""
		}
		next() {
			return c(this, void 0, void 0, function*() {
				let t = document.getElementById("page-area");
				var e;
				t && (!(e = t.getElementsByTagName("iframe")[0]) || (e = e.contentDocument) && (Math.abs(e.body.scrollWidth - e.body.scrollLeft - e.body.clientWidth) < 10 || "scroll" === this.mode ? (di(this.element, this.chapterList, this.chapterDocList, this.mode), this.trigger("rendered")) : li(this.element, this.chapterList, this.chapterDocList, this.mode, -1, this.isSliding, this.trigger), fi(this.element, this.mode)))
			})
		}
		visibleText() {
			return gi(this.element, this.mode)
		}
		doSearch(t) {
			return mi(t, this.chapterDocList)
		}
		flatChapter(t) {
			return t
		}
		getProgress() {
			return ei()
		}
		record() {
			fi(this.element, this.mode)
		}
		getPosition() {
			return {
				text: a.getKookitConfig("text"),
				chapterTitle: a.getKookitConfig("chapterTitle"),
				count: a.getKookitConfig("count"),
				percentage: a.getKookitConfig("percentage")
			}
		}
		getMetadata() {
			return new Ci(this.azw3Buffer)
				.getMetadata()
		}
		setStyle(e) {
			let t = document.getElementById("page-area");
			if (t) {
				var i = t.getElementsByTagName("iframe")[0];
				if (i) {
					let t = i.contentDocument;
					t && t.body.setAttribute("style", e + t.body.getAttribute("style"))
				}
			}
		}
	},
   t.ComicRender = class extends bi {
		constructor(t, e, i, r, n) {
			super(), this.isSliding = n || !1, this.mode = i, this.format = r, this.zip = e, this.dataSource = t, this.element = "", this.parser = "", this.chapterList = [], this.largestId = parseInt(a.getKookitConfig("count")) || 0
		}
		renderTo(l, h = 0) {
			return new Promise((a, t) => c(this, void 0, void 0, function*() {
				if (yield g()) {
					this.element = l, ti(l), this.parser = new _i(this.dataSource, this.zip, this.mode, this.element, this.format), this.chapterList = this.parser.getChapter(), this.parser.renderComic(), yield this.renderImage(h);
					let t = document.getElementById("page-area");
					if (t) {
						var i = t.getElementsByTagName("iframe")[0];
						if (i) {
							let t = i.contentDocument;
							if (t && t.getElementById(h + "")) {
								var r = yield this.parser.getImgRatio(), n = t.getElementById(h + "")
									.clientWidth * r;
								let e = t.getElementsByTagName("img");
								var o, i = Math.floor(this.element.clientWidth / 12),
									s = i % 2 == 0 ? i : i - 1;
								for (let t = 0; t < e.length; t++) "scroll" === this.mode ? e[t].style.height = n + "px" : (o = "single" === this.mode ? 1 : 2, n > this.element.clientHeight ? (e[t].style.height = this.element.clientHeight + "px", e[t].style.width = this.element.clientHeight / r + "px", e[t].style.paddingLeft = (this.element.clientWidth - ("single" === this.mode ? 0 : s)) / 2 / o - this.element.clientHeight / r / 2 + "px") : (e[t].style.height = n + "px", e[t].style.marginTop = this.element.clientHeight / 2 - n / 2 + "px"));
								ii(l, this.mode), Xe(l, this.mode), this.trigger("rendered"), a()
							}
						}
					}
				} else a()
			}))
		}
		flatChapter(t) {
			return t
		}
		getProgress() {
			return {
				totalPage: this.chapterList.length,
				currentPage: parseInt(a.getKookitConfig("count")) || 0
			}
		}
		getPageSize() {
			return {
				width: this.element.clientWidth,
				height: this.element.clientHeight
			}
		}
		renderImage(t) {
			return c(this, void 0, void 0, function*() {
				yield this.parser.renderImage(t - 3), yield this.parser.renderImage(t - 2), yield this.parser.renderImage(t - 1), yield this.parser.renderImage(t), yield this.parser.renderImage(t + 1), yield this.parser.renderImage(t + 2), yield this.parser.renderImage(t + 3)
			})
		}
		getChapter() {
			return this.chapterList
		}
		goToPosition(t) {
			var t = JSON.parse(t)["id"];
			Ei(this.element, this.mode, t), this.record()
		}
		goToChapter(t) {
			return c(this, void 0, void 0, function*() {
				Ei(this.element, this.mode, this.dataSource.indexOf(t) + ""), yield this.renderImage(this.dataSource.indexOf(t))
			})
		}
		record() {
			return c(this, void 0, void 0, function*() {
				fi(this.element, this.mode);
				var t = parseInt(a.getKookitConfig("count")) || 0;
				yield this.parser.renderImage(t - 3), yield this.parser.renderImage(t - 2), yield this.parser.renderImage(t - 1), yield this.parser.renderImage(t), yield this.parser.renderImage(t + 1), yield this.parser.renderImage(t + 2), yield this.parser.renderImage(t + 3)
			})
		}
		removeContent() {
			this.element.innerHTML = ""
		}
		prev() {
			return c(this, void 0, void 0, function*() {
				var t = parseInt(a.getKookitConfig("count")) || 0;
				yield this.parser.renderImage(t), yield this.parser.renderImage(t - 1), yield this.parser.renderImage(t - 2), yield this.parser.renderImage(t - 3), yield this.parser.renderImage(t - 4), Si(this.element, 1, this.isSliding), fi(this.element, this.mode)
			})
		}
		next() {
			return c(this, void 0, void 0, function*() {
				var t = parseInt(a.getKookitConfig("count")) || 0;
				yield this.parser.renderImage(t), yield this.parser.renderImage(t + 1), yield this.parser.renderImage(t + 2), yield this.parser.renderImage(t + 3), yield this.parser.renderImage(t + 4), Si(this.element, -1, this.isSliding), fi(this.element, this.mode)
			})
		}
		getPosition() {
			return {
				text: a.getKookitConfig("text"),
				chapterTitle: a.getKookitConfig("chapterTitle"),
				count: a.getKookitConfig("count"),
				percentage: a.getKookitConfig("percentage")
			}
		}
		setStyle(e) {
			let t = document.getElementById("page-area");
			if (t) {
				var i = t.getElementsByTagName("iframe")[0];
				if (i) {
					let t = i.contentDocument;
					t && t.body.setAttribute("style", e + t.body.getAttribute("style"))
				}
			}
		}
	},
   t.EpubRender = class extends bi {
		constructor(t, e, i) {
			super(), this.epubBuffer = t, this.mode = e, this.isSliding = i || !1, this.chapterList = [], this.chapterDocList = [], this.bookStr = "", this.element = ""
		}
		renderTo(i, r) {
			return c(this, void 0, void 0, function*() {
				return new Promise((t, e) => c(this, void 0, void 0, function*() {
					(yield g()) ? (this.epub = window.ePub(this.epubBuffer, {}), this.element = i, this.rendition = this.epub.renderTo(this.element, {
							manager: "default",
							flow: "scroll" === this.mode ? "scrolled" : "auto",
							width: "100%",
							height: "100%",
							snap: !0,
							spread: "single" === this.mode ? "none" : ""
						}), this.rendition.hooks.content.register(t => {
							let e = this.epub.section(t.sectionIndex);
							if (e.properties.includes("mathml")) return t.addScript("zh-CN" === navigator.language ? "https://cdn.bootcdn.net/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.js" : "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js")
						}), this.rendition.display(r)
						.then(() => {
							this.trigger("rendered"), t()
						}), this.rendition.on("rendered", () => {
							setTimeout(() => {
								this.trigger("rendered")
							}, 500)
						})) : t()
				}))
			})
		}
		getChapter() {
			return c(this, void 0, void 0, function*() {
				var t = yield this.epub.loaded.navigation;
				return t ? (this.chapterList = t.toc, this.chapterList) : []
			})
		}
		getPageSize() {
			return {
				width: this.element.clientWidth,
				height: this.element.clientHeight
			}
		}
		flatChapter(e) {
			let i = [];
			for (let t = 0; t < e.length; t++) e[t].subitems[0] ? (i.push(e[t]), i = i.concat(this.flatChapter(e[t].subitems))) : i.push(e[t]);
			return i
		}
		goToChapter(t) {
			this.flattenChapters || (this.flattenChapters = this.flatChapter(this.chapterList));
			t = null === (t = this.flattenChapters[Qe.findLastIndex(this.flattenChapters.map(t => (t.label = t.label.trim(), t)), {
				label: t.trim()
			})]) || void 0 === t ? void 0 : t.href;
			this.rendition.display(t), this.trigger("rendered")
		}
		goToPosition(e) {
			return c(this, void 0, void 0, function*() {
				var t = JSON.parse(e) || {};
				this.epub.rendition.display(t.cfi), t.isFirst ? setTimeout(() => c(this, void 0, void 0, function*() {
					yield this.record()
				}), 0) : yield this.record(), this.trigger("rendered")
			})
		}
		removeContent() {
			this.element.innerHTML = ""
		}
		prev() {
			return c(this, void 0, void 0, function*() {
				this.rendition.prev(), yield this.record(), this.trigger("page-changed")
			})
		}
		next() {
			return c(this, void 0, void 0, function*() {
				this.rendition.next(), yield this.record(), this.trigger("page-changed")
			})
		}
		visibleText() {
			return c(this, void 0, void 0, function*() {
				const t = this.rendition.currentLocation();
				var e = t.start.cfi.replace(/!.*/, "")
					.replace("epubcfi(", ""),
					i = t.start.cfi.replace(/.*!/, "")
					.replace(/\)/, ""),
					r = t.end.cfi.replace(/.*!/, "")
					.replace(/\)/, "");
				let n = yield this.epub.getRange(`epubcfi(${e}!,${i},${r})`);
				return n.toString()
			})
		}
		doSearch(e) {
			return Promise.all(this.epub.spine.spineItems.map(t => t.load(this.epub.load.bind(this.epub))
					.then(t.find.bind(t, e))
					.finally(t.unload.bind(t))))
				.then(t => Promise.resolve([].concat.apply([], t)
					.map(t => (t.cfi = JSON.stringify({
						cfi: t.cfi
					}), t))))
		}
		getProgress() {
			return c(this, void 0, void 0, function*() {
				let t = this.rendition.currentLocation();
				return t.start || (yield this.epub.locations.generate(), t = this.rendition.currentLocation()), {
					currentPage: "double" === this.mode ? parseInt(t.start.displayed.page / 2 + "") + 1 : t.start.displayed.page,
					totalPage: t.start.displayed.total
				}
			})
		}
		record() {
			return c(this, void 0, void 0, function*() {
				let t = this.rendition.currentLocation(),
					e = this.epub.locations._locations;
				t.start && 0 !== e.length || (e = yield this.epub.locations.generate(), t = this.rendition.currentLocation());
				var i = t.start.cfi,
					r = t.start.percentage;
				let n = t.start.href;
				this.flattenChapters || (this.flattenChapters = this.flatChapter(this.chapterList));
				let o = "Unknown Chapter",
					s = this.flattenChapters.filter(t => -1 < t.href.indexOf(n) || -1 < n.indexOf(t.href))[0];
				s && (o = s.label.trim(" ")), a.setKookitConfig("cfi", i), a.setKookitConfig("percentage", r), a.setKookitConfig("chapterTitle", o)
			})
		}
		getPosition() {
			return c(this, void 0, void 0, function*() {
				return yield this.record(), {
					cfi: a.getKookitConfig("cfi"),
					percentage: a.getKookitConfig("percentage"),
					chapterTitle: a.getKookitConfig("chapterTitle")
				}
			})
		}
		getMetadata() {
			return new Promise((n, t) => c(this, void 0, void 0, function*() {
				var t = this.epubBuffer.byteLength / 1024 / 1024;
				setTimeout(() => {
					n("timeout_error")
				}, 1e3 * Math.ceil(t / 10)), this.epub = window.ePub(this.epubBuffer, {});
				let e = yield this.epub.loaded.metadata;
				t = yield this.epub.coverUrl();
				try {
					var i = yield fetch(t)
						.then(t => t.blob()), r = new FileReader();
					r.readAsDataURL(i), r.onloadend = () => {
						e.cover = r.result, n(e)
					}
				} catch (t) {
					e.cover = "", n(e)
				}
			}))
		}
		setStyle(t) {
			this.rendition.themes.default(t)
		}
	}, 
  t.MobiRender = class extends bi {
		constructor(t, e, i) {
			super(), this.mobiBuffer = t, this.mode = e, this.chapterList = [], this.chapterDocList = [], this.bookStr = "", this.element = "", this.isSliding = i || !1
		}
		renderTo(r) {
			return new Promise((i, t) => c(this, void 0, void 0, function*() {
				if (yield g()) {
					var e = (yield new Ci(this.mobiBuffer)
							.render())
						.outerHTML;
					this.bookStr = e, this.element = r;
					let t = new vi(this.bookStr);
					this.chapterDocList = t.getChapterDoc(), this.chapterList = t.getChapter();
					e = a.getKookitConfig("chapterTitle") || this.chapterDocList[0].title;
					ti(r), ii(r, this.mode), ci(e, this.chapterDocList, this.element, this.mode), this.trigger("rendered"), i()
				} else i()
			}))
		}
		getPageSize() {
			return {
				width: this.element.clientWidth,
				height: this.element.clientHeight
			}
		}
		flatChapter(t) {
			return t
		}
		getChapter() {
			return this.chapterList
		}
		goToChapter(t) {
			ci(t, this.chapterDocList, this.element, this.mode), this.trigger("rendered")
		}
		goToPosition(t) {
			var {
				text: e,
				chapterTitle: i,
				count: t
			} = JSON.parse(t);
			ci(i, this.chapterDocList, this.element, this.mode), ui(this.element, this.mode, e, t), this.record(), this.trigger("rendered")
		}
		removeContent() {
			this.element.innerHTML = ""
		}
		prev() {
			return c(this, void 0, void 0, function*() {
				this.trigger("page-changed");
				let t = document.getElementById("page-area");
				var e;
				t && (!(e = t.getElementsByTagName("iframe")[0]) || (e = e.contentDocument) && ("scroll" === this.mode || 0 === e.body.scrollLeft ? (hi(this.element, this.chapterList, this.chapterDocList, this.mode), this.trigger("rendered")) : li(this.element, this.chapterList, this.chapterDocList, this.mode, 1, this.isSliding, this.trigger), fi(this.element, this.mode)))
			})
		}
		next() {
			return c(this, void 0, void 0, function*() {
				this.trigger("page-changed");
				let t = document.getElementById("page-area");
				var e;
				t && (!(e = t.getElementsByTagName("iframe")[0]) || (e = e.contentDocument) && (Math.abs(e.body.scrollWidth - e.body.scrollLeft - e.body.clientWidth) < 10 || "scroll" === this.mode ? (di(this.element, this.chapterList, this.chapterDocList, this.mode), this.trigger("rendered")) : li(this.element, this.chapterList, this.chapterDocList, this.mode, -1, this.isSliding, this.trigger), fi(this.element, this.mode)))
			})
		}
		visibleText() {
			return gi(this.element, this.mode)
		}
		doSearch(t) {
			return mi(t, this.chapterDocList)
		}
		getProgress() {
			return ei()
		}
		record() {
			fi(this.element, this.mode)
		}
		getPosition() {
			return {
				text: a.getKookitConfig("text"),
				chapterTitle: a.getKookitConfig("chapterTitle"),
				count: a.getKookitConfig("count"),
				percentage: a.getKookitConfig("percentage")
			}
		}
		getMetadata() {
			return new Ci(this.mobiBuffer)
				.getMetadata()
		}
		setStyle(e) {
			let t = document.getElementById("page-area");
			if (t) {
				var i = t.getElementsByTagName("iframe")[0];
				if (i) {
					let t = i.contentDocument;
					t && t.body.setAttribute("style", e + t.body.getAttribute("style"))
				}
			}
		}
	}, 
  t.StrRender = class extends bi {
		constructor(t, e, i) {
			super(), this.bookStr = t, this.mode = e, this.chapterList = [], this.chapterDocList = [], this.element = "", this.isSliding = i || !1
		}
		renderTo(r) {
			return new Promise((i, t) => c(this, void 0, void 0, function*() {
				if (yield g()) {
					this.element = r;
					let t = new yi(this.bookStr);
					this.chapterList = t.getChapter(), this.chapterDocList = t.getChapterDoc();
					var e = a.getKookitConfig("chapterTitle") || this.chapterDocList[0].title;
					ti(r), ci(e, this.chapterDocList, this.element, this.mode), ii(r, this.mode), this.trigger("rendered"), i()
				} else i()
			}))
		}
		getChapter() {
			return this.chapterList
		}
		getPageSize() {
			return {
				width: this.element.clientWidth,
				height: this.element.clientHeight
			}
		}
		goToChapter(t) {
			ci(t, this.chapterDocList, this.element, this.mode), this.trigger("rendered")
		}
		goToPosition(t) {
			var {
				text: e,
				chapterTitle: i,
				count: t
			} = JSON.parse(t);
			ci(i, this.chapterDocList, this.element, this.mode), ui(this.element, this.mode, e, t), this.record(), this.trigger("rendered")
		}
		record() {
			fi(this.element, this.mode)
		}
		removeContent() {
			this.element.innerHTML = ""
		}
		flatChapter(t) {
			return t
		}
		prev() {
			return c(this, void 0, void 0, function*() {
				this.trigger("page-changed");
				let t = document.getElementById("page-area");
				var e;
				t && (!(e = t.getElementsByTagName("iframe")[0]) || (e = e.contentDocument) && ("scroll" === this.mode || 0 === e.body.scrollLeft ? (hi(this.element, this.chapterList, this.chapterDocList, this.mode), this.trigger("rendered")) : li(this.element, this.chapterList, this.chapterDocList, this.mode, 1, this.isSliding, this.trigger), fi(this.element, this.mode)))
			})
		}
		next() {
			return c(this, void 0, void 0, function*() {
				this.trigger("page-changed");
				let t = document.getElementById("page-area");
				var e;
				t && (!(e = t.getElementsByTagName("iframe")[0]) || (e = e.contentDocument) && (Math.abs(e.body.scrollWidth - e.body.scrollLeft - e.body.clientWidth) < 10 || "scroll" === this.mode ? (di(this.element, this.chapterList, this.chapterDocList, this.mode), this.trigger("rendered")) : li(this.element, this.chapterList, this.chapterDocList, this.mode, -1, this.isSliding, this.trigger), fi(this.element, this.mode)))
			})
		}
		visibleText() {
			return gi(this.element, this.mode)
		}
		doSearch(t) {
			return mi(t, this.chapterDocList)
		}
		getProgress() {
			return ei()
		}
		getPosition() {
			return {
				text: a.getKookitConfig("text"),
				chapterTitle: a.getKookitConfig("chapterTitle"),
				count: a.getKookitConfig("count"),
				percentage: a.getKookitConfig("percentage")
			}
		}
		setStyle(e) {
			let t = document.getElementById("page-area");
			if (t) {
				var i = t.getElementsByTagName("iframe")[0];
				if (i) {
					let t = i.contentDocument;
					t && t.body.setAttribute("style", e + t.body.getAttribute("style"))
				}
			}
		}
	}, 
  t.TxtRender = class extends bi {
		constructor(t, e, i = "utf-8", r) {
			super(), this.txtBuffer = t, this.encoding = i, this.mode = e, this.chapterList = [], this.chapterDocList = [], this.bookStr = "", this.element = "", this.isSliding = r || !1
		}
		renderTo(r) {
      // console.log(111);
			return new Promise((i, t) => c(this, void 0, void 0, function*() {
				
        // if (yield g()) {
          // console.log(222);
					var e = (t => {
						let e = "",
							i = !1;
						var r;
              for (r of t.split("\n")) 
              r.trim().slim() && 
              (l(r.trim().slim(), i) 
              ? 
              ((r.trim().slim().startsWith("第") 
              || r.trim().slim().startsWith("Chapter") 
              || r.trim().slim().startsWith("CHAPTER")) 
              && (i = !0), e += `<h1>${r}</h1>`) 
              : e += `<p>${r}</p>`);
						return e
					})(this.txtBuffer);
          // 上面代码已被修改，原来是一个arraybuffer（二进制数组）需要转换成string
          // 修改为直接传入字符串
					this.bookStr = e; 
          this.element = r;
					let t = new ki(this.bookStr); 
					this.chapterList = t.getChapter(),
          this.chapterDocList = t.getChapterDoc();
          i([this.chapterList,this.chapterDocList]);//i就是resolve()，我们只返回章节和章节内容
          
					// e = a.getKookitConfig("chapterTitle") ||
          e= this.chapterDocList[0].title;
					// ti(r),  
          // ii(r, this.mode), 
          // ci(e, this.chapterDocList, this.element, this.mode), this.trigger("rendered"), 
          // i()
				// } else i()
			}))
		}
		getChapter() {
			return this.chapterList
		}
		goToChapter(t) {
			ci(t, this.chapterDocList, this.element, this.mode), this.trigger("rendered")
		}
		getPageSize() {
			return {
				width: this.element.clientWidth,
				height: this.element.clientHeight
			}
		}
		goToPosition(t) {
			var {
				text: e,
				chapterTitle: i,
				count: t
			} = JSON.parse(t);
			ci(i, this.chapterDocList, this.element, this.mode), ui(this.element, this.mode, e, t), this.record(), this.trigger("rendered")
		}
		record() {
			fi(this.element, this.mode)
		}
		removeContent() {
			this.element.innerHTML = ""
		}
		flatChapter(t) {
			return t
		}
		prev() {
			return c(this, void 0, void 0, function*() {
				this.trigger("page-changed");
				let t = document.getElementById("page-area");
				var e;
				t && (!(e = t.getElementsByTagName("iframe")[0]) || (e = e.contentDocument) && ("scroll" === this.mode || 0 === e.body.scrollLeft ? (hi(this.element, this.chapterList, this.chapterDocList, this.mode), this.trigger("rendered")) : li(this.element, this.chapterList, this.chapterDocList, this.mode, 1, this.isSliding, this.trigger), fi(this.element, this.mode)))
			})
		}
		next() {
			return c(this, void 0, void 0, function*() {
				this.trigger("page-changed");
				let t = document.getElementById("page-area");
				var e;
				t && (!(e = t.getElementsByTagName("iframe")[0]) || (e = e.contentDocument) && (Math.abs(e.body.scrollWidth - e.body.scrollLeft - e.body.clientWidth) < 10 || "scroll" === this.mode ? (di(this.element, this.chapterList, this.chapterDocList, this.mode), this.trigger("rendered")) : li(this.element, this.chapterList, this.chapterDocList, this.mode, -1, this.isSliding, this.trigger), fi(this.element, this.mode)))
			})
		}
		visibleText() {
			return gi(this.element, this.mode)
		}
		doSearch(t) {
			return mi(t, this.chapterDocList)
		}
		getProgress() {
			return ei()
		}
		getPosition() {
			return {
				text: a.getKookitConfig("text"),
				chapterTitle: a.getKookitConfig("chapterTitle"),
				count: a.getKookitConfig("count"),
				percentage: a.getKookitConfig("percentage")
			}
		}
		setStyle(e) {
			let t = document.getElementById("page-area");
			if (t) {
				var i = t.getElementsByTagName("iframe")[0];
				if (i) {
					let t = i.contentDocument;
					t && t.body.setAttribute("style", e + t.body.getAttribute("style"))
				}
			}
		}
	}, Object.defineProperty(t, "__esModule", {
		value: !0
	})
});