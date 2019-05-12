import {newSpecPage} from '@stencil/core/testing';

import {MyComponent} from './my-component';

import { serializer } from '../../../test/stencil-serializer';

expect.addSnapshotSerializer(serializer);
it('Should render', async() => {
  const page = await newSpecPage({
    components: [MyComponent],
    html: `<my-component first="Hello" last="World"></my-component>`,
    serializedShadowDom: true
  });

  // expect(root).toEqualHtml(`
  //   <my-component class=\"hydrated\" first=\"Hello\" last=\"World\">
  //   <shadow-root>
  //     <div class=\"nice\">
  //       <span>
  //         Hello, World! I'm Hello World
  //       </span>
  //       <button>
  //         Click Me!
  //       </button>
  //     </div>
  //   </shadow-root>
  // </my-component>
  // `);

  expect(page.doc).toMatchSnapshot();
  let text = page.root.shadowRoot.querySelector('span');
  expect(text.textContent).toBe(`Hello, World! I'm Hello World`);
  expect(page.root.first).toEqual('Hello');
});

it('Should emit', async() => {
  const {root, win} = await newSpecPage({
    components: [MyComponent],
    html: `<my-component first="John" last="Doe"></my-component>`
  });
  let button = root.shadowRoot.querySelector('button');
  let buttonClicked = jest.fn();
  win.addEventListener('buttonClicked', buttonClicked);
  button.click();
  expect(buttonClicked).toHaveBeenCalled;
});

it('Should emit', async() => {
  const {root, win} = await newSpecPage({
    components: [MyComponent],
    html: `<my-component first="John" last="Doe"></my-component>`
  });
  let button = root.shadowRoot.querySelector('button');
  let buttonClicked = jest.fn();
  win.addEventListener('buttonClicked', buttonClicked);
  button.click();
  expect(buttonClicked).toHaveBeenCalled;
});
