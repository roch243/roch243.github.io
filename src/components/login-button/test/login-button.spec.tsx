import { newSpecPage } from '@stencil/core/testing';
import { LoginButton } from '../login-button';

describe('login-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LoginButton],
      html: `<login-button></login-button>`,
    });
    expect(page.root).toEqualHtml(`
      <login-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </login-button>
    `);
  });
});
