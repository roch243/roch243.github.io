import { r as registerInstance, h } from './index-ae1a9d72.js';

const loginButtonCss = ":host{display:block}.button{color:black}.btn-container{display:flex;align-items:center;justify-content:center}";

const LoginButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.showMe = false;
  }
  handleClick() {
    this.open = !this.open;
  }
  showAvatar() {
    this.showMe = !this.showMe;
  }
  render() {
    return (h("div", { class: "btn-container" }, h("div", null, h("button", { onClick: () => this.showAvatar }, this.open ? "Logout" : "Login")), this.showMe ?
      h("name-avatar", null)
      : null));
  }
};
LoginButton.style = loginButtonCss;

export { LoginButton as login_button };
