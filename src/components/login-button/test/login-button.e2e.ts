import { newE2EPage } from '@stencil/core/testing';

describe('login-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<login-button></login-button>');

    const element = await page.find('login-button');
    expect(element).toHaveClass('hydrated');
  });
});
