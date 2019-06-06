import {newSpecPage} from '@stencil/core/testing';

import {MyComponent} from './component';

describe('component', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  })

  describe('instance', () => {
    it ('Should format the name', () => {
      let cmp = new MyComponent();
      cmp.first = 'Donald';
      cmp.last = 'Duck';
      expect(cmp.format()).toEqual('Donald Duck');
    });      
  });
  
  describe('render', () => {
    
    it('Should render with serializing shadow dom', async() => {
      const {root} = await newSpecPage({
        components: [MyComponent],
        html: `<my-component first="Donald" last="Duck">Some Text</my-component>`
      });

      expect(root).toEqualHtml(`
        <my-component first="Donald" last="Duck">
          <mock:shadow-root>
            <div class="nice">
              <span>
                Hello, World! I'm Donald Duck
              </span>
              <button>
                Click Me!
              </button>
              <input>
              <slot></slot>
            </div>
          </mock:shadow-root>
          Some Text
        </my-component>
      `);
      expect(root).toMatchSnapshot();
      expect(root.shadowRoot).toBeTruthy();
      expect(root.shadowRoot.querySelector('button')).toBeTruthy();
      expect(root.querySelector('button')).toBeFalsy();
    });


    it('Should render without serializing shadow dom', async() => {
      const {root} = await newSpecPage({
        components: [MyComponent],
        html: `<my-component first="Donald" last="Duck">Some Text</my-component>`,
        supportsShadowDom: false
      });

      expect(root).toMatchSnapshot();
      expect(root.shadowRoot).toBeFalsy();
      expect(root.querySelector('button')).toBeTruthy();

    });

    it('Should render setting content later', async() => {
      const html = `<my-component first="Donald" last="Duck">Some Text</my-component>`;
      const page = await newSpecPage({components: [MyComponent]});
      await page.setContent(html);
      expect(page.doc.body).toMatchSnapshot();
    });
  });

  fit('Should emit', async() => {
    const {root, win} = await newSpecPage({components: [MyComponent], html: `<my-component first="John" last="Doe"></my-component>`});
    let button = root
      .shadowRoot
      .querySelector('button');
    let buttonClicked = jest.fn();
    win.addEventListener('buttonClicked', buttonClicked);
    button.click();
    expect(buttonClicked).toHaveBeenCalled;
  });

  it('Should run method', async() => {
    const page = await newSpecPage({components: [MyComponent], html: `<my-component first="John" last="Doe"></my-component>`});

    let button = page
      .root
      .shadowRoot
      .querySelector('button');
    expect(button.textContent).toEqual('Click Me!')
    let ret = await page
      .rootInstance
      .updateFace('New Click!');
    await page.waitForChanges();
    expect(ret).toEqual('NEW CLICK!');
    expect(button.textContent).toEqual('New Click!');
  });

});
