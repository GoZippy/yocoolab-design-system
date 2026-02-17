import { b as o, s as n, n as y, a as h, p as b, f as u, c as A, d as H, l as j, e as R, g as L, h as V, i as B, j as E } from "./dark-CxKBg_p6.js";
import { k as q, m as J } from "./dark-CxKBg_p6.js";
import { jsx as i, jsxs as g } from "react/jsx-runtime";
const I = {
  0: "0px",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  8: "32px",
  10: "40px",
  12: "48px",
  16: "64px"
};
function m(e) {
  return Object.entries(e);
}
function p(e, r) {
  return m(r).map(([t, a]) => `  --yc-${e}-${t}: ${a};`).join(`
`);
}
function c(e, r) {
  return m(r).map(([t, a]) => `  --yc-${e}-${t}: ${a};`).join(`
`);
}
function C(e) {
  return m(e).map(([r, t]) => `  --yc-${r.replace(/([A-Z])/g, "-$1").toLowerCase()}: ${t};`).join(`
`);
}
function W() {
  return `:root {
  /* Brand colors (pink) */
${p("color-brand", o)}

  /* Secondary colors (purple) */
${p("color-secondary", n)}

  /* Neutral colors */
${p("color-neutral", y)}

  /* Semantic colors */
${p("color", h)}

  /* Phase colors */
${p("color-phase", b)}

  /* Typography */
${c("font", u)}
${c("font-size", A)}
${c("font-weight", H)}
${c("line-height", j)}

  /* Spacing */
${c("space", I)}

  /* Border radius */
${c("radius", R)}

  /* Shadows */
${c("shadow", L)}

  /* Semantic theme (light) */
${C(V)}
}

[data-theme="dark"] {
  /* Shadows (dark) */
${c("shadow", B)}

  /* Semantic theme (dark) */
${C(E)}
}
`;
}
const Y = {
  colors: {
    brand: {
      DEFAULT: o[700],
      light: o[500],
      lighter: o[400],
      dark: o[800],
      darker: o[900],
      50: o[50],
      100: o[100],
      200: o[200],
      300: o[300],
      400: o[400],
      500: o[500],
      600: o[600],
      700: o[700],
      800: o[800],
      900: o[900]
    },
    secondary: {
      DEFAULT: n[700],
      light: n[500],
      lighter: n[400],
      dark: n[800],
      darker: n[900],
      50: n[50],
      100: n[100],
      200: n[200],
      300: n[300],
      400: n[400],
      500: n[500],
      600: n[600],
      700: n[700],
      800: n[800],
      900: n[900]
    },
    neutral: { ...y },
    success: h.success,
    warning: h.warning,
    error: h.error,
    info: h.info,
    phase: { ...b }
  },
  fontFamily: {
    sans: u.sans,
    mono: u.mono
  }
}, X = ({
  name: e,
  size: r = 20,
  label: t,
  decorative: a = !1,
  className: l,
  style: d
}) => {
  const s = a || !t;
  return /* @__PURE__ */ i(
    "span",
    {
      className: `material-symbols-rounded ${l || ""}`,
      style: { fontSize: r, lineHeight: 1, ...d },
      "aria-hidden": s,
      "aria-label": s ? void 0 : t,
      role: !s && t ? "img" : void 0,
      children: e
    }
  );
}, M = "M244.009 190.732C279.836 179.091 318.428 179.091 354.255 190.732C390.082 202.372 421.305 225.057 443.447 255.533C465.589 286.009 477.514 322.713 477.514 360.384C477.514 398.054 465.589 434.757 443.447 465.233C421.305 495.71 390.082 518.394 354.255 530.035C318.428 541.675 279.836 541.675 244.009 530.035C208.182 518.394 176.96 495.709 154.818 465.233C132.676 434.757 120.75 398.054 120.75 360.384C120.75 322.713 132.676 286.009 154.818 255.533C176.96 225.057 208.182 202.372 244.009 190.732Z", Z = "M505.485 271.745C482.848 219.489 441.25 177.358 389.367 154.03H505.485V271.745Z", G = ({
  initials: e,
  bgColor: r = o[700],
  size: t = 28,
  src: a,
  alt: l = "",
  className: d
}) => {
  const s = t * 1.1, f = Math.round(t * 0.38);
  return /* @__PURE__ */ g(
    "span",
    {
      className: d,
      style: {
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: s,
        height: s,
        flexShrink: 0
      },
      role: "img",
      "aria-label": l || e,
      children: [
        /* @__PURE__ */ g(
          "svg",
          {
            width: s,
            height: s,
            viewBox: "0 0 651 661",
            fill: "none",
            style: { position: "absolute", inset: 0 },
            "aria-hidden": !0,
            children: [
              /* @__PURE__ */ i("path", { d: M, fill: r }),
              /* @__PURE__ */ i("path", { d: Z, fill: n[700] })
            ]
          }
        ),
        a ? /* @__PURE__ */ i(
          "img",
          {
            src: a,
            alt: l,
            style: {
              position: "absolute",
              left: "42%",
              top: "52%",
              transform: "translate(-50%, -50%)",
              width: t * 0.64,
              height: t * 0.64,
              borderRadius: "50%",
              objectFit: "cover"
            }
          }
        ) : /* @__PURE__ */ i(
          "span",
          {
            style: {
              position: "absolute",
              left: "42%",
              top: "52%",
              transform: "translate(-50%, -50%)",
              color: "#fff",
              fontSize: f,
              fontWeight: 600,
              lineHeight: 1,
              pointerEvents: "none"
            },
            children: e
          }
        )
      ]
    }
  );
}, K = ({
  message: e,
  type: r = "polite",
  atomic: t = !0
}) => /* @__PURE__ */ i(
  "div",
  {
    "aria-live": r,
    "aria-atomic": t,
    role: "status",
    style: {
      position: "absolute",
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      border: 0
    },
    children: e
  }
), P = ({
  children: e,
  as: r = "span",
  htmlFor: t
}) => /* @__PURE__ */ i(
  r,
  {
    htmlFor: t,
    style: {
      position: "absolute",
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      border: 0
    },
    children: e
  }
), _ = "M244.009 190.886C279.836 179.245 318.428 179.245 354.255 190.886C390.082 202.527 421.305 225.211 443.447 255.687C465.589 286.163 477.514 322.868 477.514 360.538C477.514 398.208 465.589 434.912 443.447 465.388C421.305 495.864 390.082 518.548 354.255 530.189C318.428 541.83 279.836 541.83 244.009 530.189C208.182 518.548 176.96 495.864 154.818 465.388C132.676 434.912 120.75 398.209 120.75 360.538C120.75 322.867 132.676 286.163 154.818 255.687C176.96 225.211 208.182 202.527 244.009 190.886ZM309.962 190.413C302.923 188.126 295.341 188.126 288.302 190.413C281.263 192.7 275.129 197.157 270.778 203.145C266.428 209.132 264.085 216.344 264.085 223.745C264.085 231.146 266.428 238.358 270.778 244.345C275.129 250.333 281.263 254.789 288.302 257.076C295.341 259.364 302.923 259.364 309.962 257.076C317.001 254.789 323.135 250.333 327.486 244.345C331.836 238.358 334.179 231.146 334.179 223.745C334.179 216.344 331.836 209.132 327.486 203.145C323.135 197.157 317.001 192.7 309.962 190.413Z", F = "M505.485 271.899C482.848 219.643 441.25 177.513 389.367 154.184H505.485V271.899Z", $ = 650, w = 661, U = ({
  pointerPosition: e = "top-right",
  size: r = 40,
  resolved: t = !1,
  className: a
}) => {
  const l = e === "top-left" || e === "bottom-left", d = e === "bottom-right" || e === "bottom-left", s = l ? -1 : 1, f = d ? -1 : 1, x = l ? -$ : 0, v = d ? -w : 0, S = l || d ? `scale(${s},${f}) translate(${x},${v})` : void 0, k = t ? h.success : o[700], T = t ? h.success : n[700];
  return /* @__PURE__ */ i(
    "svg",
    {
      width: r,
      height: r,
      viewBox: `0 0 ${$} ${w}`,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: a,
      role: "presentation",
      "aria-hidden": !0,
      children: /* @__PURE__ */ g("g", { transform: S, children: [
        /* @__PURE__ */ i(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: _,
            fill: k
          }
        ),
        /* @__PURE__ */ i("path", { d: F, fill: T })
      ] })
    }
  );
};
export {
  X as AccessibleIcon,
  G as BrandedAvatar,
  K as LiveRegion,
  P as VisuallyHidden,
  U as YocoolabMarkerIcon,
  R as borderRadius,
  q as borderWidth,
  o as brand,
  E as darkTheme,
  u as fontFamily,
  A as fontSize,
  H as fontWeight,
  W as generateCSS,
  J as letterSpacing,
  V as lightTheme,
  j as lineHeight,
  y as neutral,
  b as phase,
  n as secondary,
  h as semantic,
  L as shadow,
  B as shadowDark,
  I as spacing,
  Y as tailwindTheme
};
