import { newE2EPage } from '@stencil/core/testing';

describe('name-avatar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<name-avatar></name-avatar>');

    const element = await page.find('name-avatar');
    expect(element).toHaveClass('hydrated');
  });
});
