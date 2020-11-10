
import  Welcome from "./Welcome";
import MainR from "./shared"

const settings = {
  activeLayout: "layout1",
  layout1Settings: {
    topbar: {
      show: false
    },
    leftSidebar: {
      show: false,
      mode: "close"
    }
  },
  layout2Settings: {
    mode: "full",
    topbar: {
      show: false
    },
    navbar: { show: false }
  },
  secondarySidebar: { show: false },
  footer: { show: false }
};

const sessionRoutes = [
  {
    path: "/hey",
    component: Welcome,
    settings
  },
  {
    path: "/welcome",
    component: MainR,
    settings
  },
];

export default sessionRoutes;