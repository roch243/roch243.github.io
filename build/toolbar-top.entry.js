import { r as registerInstance, h } from './index-ae1a9d72.js';

const toolbarTopCss = ".toolbar{background:purple;height:4rem;width:auto;padding:10px;justify-content:space-between;display:flex;align-items:center}.toolbar h1{color:white;text-align:left}.toolbar .img-container{display:flex;align-items:center;justify-content:space-between}.toolbar .img-container img{padding:5px;background:white;height:2rem;width:2rem}.toolbar .right{display:flex}";

const ToolbarTop = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "toolbar" }, h("div", { class: "img-container" }, h("img", { src: "/assets/images/planet-img.png", alt: "" }), h("h1", null, "Planeta")), h("div", { class: "right" }, h("login-button", { class: "button" }))));
  }
  static get assetsDirs() { return ["assets"]; }
};
ToolbarTop.style = toolbarTopCss;

export { ToolbarTop as toolbar_top };
