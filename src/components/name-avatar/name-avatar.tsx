import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'name-avatar',
  styleUrl: 'name-avatar.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class NameAvatar {

  @Prop() image: 'avatar-img.png';

  render() {
    return (
      <div>
        <h6>Reinaldo Rocha</h6>
        <img src="/assets/images/avatar-img.png" alt="avatar" />
      </div>
    );
  }

}
