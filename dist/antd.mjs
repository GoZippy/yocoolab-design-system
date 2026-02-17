import { p as d, s as O, h as I, j as L, n as S, f as E, b as R, e as g, a as u } from "./dark-CxKBg_p6.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
import { Tag as T, Typography as m, theme as w, Card as k, Statistic as F, Space as D, Progress as z } from "antd";
import { CloseCircleOutlined as M, CheckCircleOutlined as P, ExclamationCircleOutlined as A, RocketOutlined as W, CodeOutlined as $, EditOutlined as j, SearchOutlined as H, MinusOutlined as U, ArrowDownOutlined as _, ArrowUpOutlined as G } from "@ant-design/icons";
function N(e, o) {
  const l = parseInt(e.slice(1, 3), 16), t = parseInt(e.slice(3, 5), 16), n = parseInt(e.slice(5, 7), 16);
  return `rgba(${l}, ${t}, ${n}, ${o})`;
}
function Q(e) {
  const o = e === "light" ? I : L;
  return {
    token: {
      colorPrimary: o.colorPrimary,
      colorBgContainer: o.colorBgContainer,
      colorBgLayout: o.colorBgLayout,
      colorBgElevated: o.colorBgElevated,
      colorBorder: o.colorBorder,
      colorBorderSecondary: o.colorBorderSecondary,
      colorText: o.colorText,
      colorTextSecondary: o.colorTextSecondary,
      colorTextTertiary: o.colorTextTertiary,
      colorTextDisabled: o.colorTextDisabled,
      colorFill: o.colorFill,
      colorFillSecondary: o.colorFillSecondary,
      colorFillTertiary: o.colorFillTertiary,
      colorSuccess: o.colorSuccess,
      colorWarning: o.colorWarning,
      colorError: o.colorError,
      colorInfo: o.colorInfo,
      borderRadius: parseInt(g.lg),
      fontFamily: E.sans
    },
    components: {
      Card: {
        borderRadiusLG: parseInt(g["2xl"]),
        colorBgContainer: o.colorBgContainer
      },
      Button: {
        borderRadius: parseInt(g.md)
      },
      Menu: {
        itemBorderRadius: parseInt(g.lg),
        colorBgContainer: "transparent",
        itemColor: o.colorTextSecondary,
        itemSelectedColor: e === "light" ? S[900] : "#ffffff",
        itemSelectedBg: N(R[700], e === "light" ? 0.1 : 0.25),
        itemHoverBg: o.colorFill
      },
      Layout: {
        siderBg: e === "light" ? o.colorBgContainer : o.colorBgLayout,
        headerBg: e === "light" ? "rgba(255, 255, 255, 0.95)" : "rgba(31, 31, 31, 0.95)",
        ...e === "dark" ? { bodyBg: o.colorBgLayout } : {}
      },
      Table: {
        headerBg: e === "light" ? S[100] : o.colorBgElevated,
        ...e === "dark" ? {
          colorBgContainer: o.colorBgContainer,
          rowHoverBg: "rgba(255, 255, 255, 0.04)"
        } : {}
      },
      ...e === "dark" ? {
        Modal: {
          contentBg: o.colorBgContainer,
          headerBg: o.colorBgContainer
        },
        Select: {
          colorBgContainer: o.colorBgLayout,
          colorBgElevated: o.colorBgContainer
        },
        Input: {
          colorBgContainer: o.colorBgLayout
        }
      } : {}
    }
  };
}
const X = d, Z = O, V = {
  discover: 0,
  define: 5,
  develop: 8,
  deliver: 3
}, v = {
  open: {
    color: "orange",
    label: "Open",
    icon: /* @__PURE__ */ r(A, { "aria-hidden": "true" })
  },
  resolved: {
    color: "green",
    label: "Resolved",
    icon: /* @__PURE__ */ r(P, { "aria-hidden": "true" })
  },
  closed: {
    color: "default",
    label: "Closed",
    icon: /* @__PURE__ */ r(M, { "aria-hidden": "true" })
  }
}, oo = ({
  status: e,
  size: o = "default",
  showIcon: l = !0
}) => {
  const t = v[e] || v.open;
  return /* @__PURE__ */ r(
    T,
    {
      color: t.color,
      icon: l ? t.icon : void 0,
      style: o === "small" ? { fontSize: 11, padding: "0 4px" } : void 0,
      role: "status",
      children: t.label
    }
  );
}, C = {
  discover: {
    color: d.discover,
    label: "Discover",
    icon: /* @__PURE__ */ r(H, { "aria-hidden": "true" })
  },
  define: {
    color: d.define,
    label: "Define",
    icon: /* @__PURE__ */ r(j, { "aria-hidden": "true" })
  },
  develop: {
    color: d.develop,
    label: "Develop",
    icon: /* @__PURE__ */ r($, { "aria-hidden": "true" })
  },
  deliver: {
    color: d.deliver,
    label: "Deliver",
    icon: /* @__PURE__ */ r(W, { "aria-hidden": "true" })
  }
}, eo = ({
  phase: e,
  size: o = "default",
  showIcon: l = !0
}) => {
  const t = C[e] || C.discover;
  return /* @__PURE__ */ r(
    T,
    {
      color: t.color,
      icon: l ? t.icon : void 0,
      style: o === "small" ? { fontSize: 11, padding: "0 4px" } : void 0,
      children: t.label
    }
  );
}, { Text: f } = m, ro = ({
  title: e,
  value: o,
  prefix: l,
  suffix: t,
  color: n,
  loading: y = !1,
  trend: c,
  trendValue: B,
  size: h = "default"
}) => {
  const { token: a } = w.useToken(), b = () => {
    if (!c) return null;
    const p = { fontSize: 12, marginRight: 4 };
    switch (c) {
      case "up":
        return /* @__PURE__ */ r(G, { style: { ...p, color: a.colorSuccess }, "aria-hidden": "true" });
      case "down":
        return /* @__PURE__ */ r(_, { style: { ...p, color: a.colorError }, "aria-hidden": "true" });
      default:
        return /* @__PURE__ */ r(U, { style: { ...p, color: a.colorTextSecondary }, "aria-hidden": "true" });
    }
  }, x = () => {
    if (c)
      switch (c) {
        case "up":
          return a.colorSuccess;
        case "down":
          return a.colorError;
        default:
          return a.colorTextSecondary;
      }
  };
  return /* @__PURE__ */ i(
    k,
    {
      loading: y,
      styles: {
        body: { padding: h === "large" ? 24 : 16 }
      },
      children: [
        /* @__PURE__ */ r(
          F,
          {
            title: /* @__PURE__ */ r(
              f,
              {
                type: "secondary",
                style: {
                  fontSize: h === "large" ? 14 : 12,
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: 0.5
                },
                children: e
              }
            ),
            value: o,
            prefix: l,
            suffix: t,
            valueStyle: {
              color: n,
              fontSize: h === "large" ? 32 : 24,
              fontWeight: 600
            }
          }
        ),
        c && B && /* @__PURE__ */ i("div", { style: { marginTop: 8 }, children: [
          b(),
          /* @__PURE__ */ r(f, { style: { fontSize: 12, color: x() }, children: B }),
          /* @__PURE__ */ r(f, { type: "secondary", style: { fontSize: 12, marginLeft: 4 }, children: "vs last period" })
        ] })
      ]
    }
  );
}, { Text: s } = m, to = ({ current: e, max: o, label: l, showBar: t = !0 }) => {
  if (o === null)
    return /* @__PURE__ */ i(D, { children: [
      /* @__PURE__ */ i(s, { type: "secondary", children: [
        l,
        ":"
      ] }),
      /* @__PURE__ */ r(s, { strong: !0, children: e }),
      /* @__PURE__ */ r(s, { type: "secondary", children: "/ Unlimited" })
    ] });
  const n = Math.round(e / o * 100), y = n >= 100 ? "exception" : n >= 80 ? "active" : "normal", c = n >= 100 ? u.error : n >= 80 ? u.warning : u.info;
  return /* @__PURE__ */ i("div", { children: [
    /* @__PURE__ */ i("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 4 }, children: [
      /* @__PURE__ */ r(s, { type: "secondary", children: l }),
      /* @__PURE__ */ i(s, { strong: !0, style: { color: n >= 100 ? u.error : void 0 }, children: [
        e,
        " / ",
        o
      ] })
    ] }),
    t && /* @__PURE__ */ r(
      z,
      {
        percent: Math.min(n, 100),
        status: y,
        strokeColor: c,
        showInfo: !1,
        size: "small"
      }
    )
  ] });
};
export {
  X as PHASE_COLORS,
  eo as PhaseBadge,
  Z as SECONDARY_COLORS,
  ro as StatsCard,
  oo as StatusBadge,
  to as UsageLimits,
  V as WIP_LIMITS,
  Q as generateAntdTheme
};
