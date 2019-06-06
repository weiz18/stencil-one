import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './component';

describe('component', () => {

  it('render', async () => {

    const page = await newSpecPage({
      components: [MyComponent],
      html: `<div></div>`
    });
    let cmp: any = page.doc.createElement('my-component');
    page.doc.body.appendChild(cmp);
    await page.waitForChanges();
  });
});
