import { r as registerInstance, h } from './index-ae1a9d72.js';

const nameAvatarCss = ":host{display:block}div{display:flex;align-items:center}img{size:30px;background:white;height:2rem;width:2rem}div h6{padding:10px;color:white}";

const NameAvatar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, h("h6", null, "Reinaldo Rocha"), h("img", { src: "/assets/images/avatar-img.png", alt: "avatar" })));
  }
  static get assetsDirs() { return ["assets"]; }
};
NameAvatar.style = nameAvatarCss;

export { NameAvatar as name_avatar };
