import { newSpecPage } from '@stencil/core/testing';
import { NameAvatar } from '../name-avatar';

describe('name-avatar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NameAvatar],
      html: `<name-avatar></name-avatar>`,
    });
    expect(page.root).toEqualHtml(`
      <name-avatar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </name-avatar>
    `);
  });
});
