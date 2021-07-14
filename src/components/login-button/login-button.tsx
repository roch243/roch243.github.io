import { Component, h, State, Listen } from '@stencil/core';

@Component({
  tag: 'login-button', // login-menu*
  styleUrl: 'login-button.css',
  shadow: true,
})
export class LoginButton {
  
  @State() open: boolean;
  @Listen('click', { capture: true })
  handleClick() {
    this.open = !this.open;
  }
  @State() showMe: boolean = false;
  @Listen('click', { capture: true })
  showAvatar() {
    this.showMe = !this.showMe;
  }



  render() {
    return (
      <div class="btn-container">
        <div>
          <button onClick={() => this.showAvatar}>
            {this.open ? "Logout" : "Login"}
          </button>
        </div>
        {
          this.showMe ?
            <name-avatar>
            </name-avatar>
            : null
        }

      </div>
    );
  }

}
