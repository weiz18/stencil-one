/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface MyComplexProp {
    'values': Array<string>;
  }
  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
    'updateFace': (value: string) => Promise<string>;
  }
  interface MyFetch {
    'language': string;
  }
  interface MyInput {
    'header': string;
  }
  interface MySlot {
    'values': Array<string>;
  }
}

declare namespace LocalJSX {
  interface MyComplexProp extends JSXBase.HTMLAttributes {
    'values'?: Array<string>;
  }
  interface MyComponent extends JSXBase.HTMLAttributes {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
    'onButtonClicked'?: (event: CustomEvent<string>) => void;
  }
  interface MyFetch extends JSXBase.HTMLAttributes {
    'language'?: string;
  }
  interface MyInput extends JSXBase.HTMLAttributes {
    'header'?: string;
    'onThisHappened'?: (event: CustomEvent<any>) => void;
  }
  interface MySlot extends JSXBase.HTMLAttributes {
    'values'?: Array<string>;
  }

  interface IntrinsicElements {
    'my-complex-prop': MyComplexProp;
    'my-component': MyComponent;
    'my-fetch': MyFetch;
    'my-input': MyInput;
    'my-slot': MySlot;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


declare global {



  interface HTMLMyComplexPropElement extends Components.MyComplexProp, HTMLStencilElement {}
  var HTMLMyComplexPropElement: {
    prototype: HTMLMyComplexPropElement;
    new (): HTMLMyComplexPropElement;
  };

  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLMyFetchElement extends Components.MyFetch, HTMLStencilElement {}
  var HTMLMyFetchElement: {
    prototype: HTMLMyFetchElement;
    new (): HTMLMyFetchElement;
  };

  interface HTMLMyInputElement extends Components.MyInput, HTMLStencilElement {}
  var HTMLMyInputElement: {
    prototype: HTMLMyInputElement;
    new (): HTMLMyInputElement;
  };

  interface HTMLMySlotElement extends Components.MySlot, HTMLStencilElement {}
  var HTMLMySlotElement: {
    prototype: HTMLMySlotElement;
    new (): HTMLMySlotElement;
  };

  interface HTMLElementTagNameMap {
    'my-complex-prop': HTMLMyComplexPropElement;
    'my-component': HTMLMyComponentElement;
    'my-fetch': HTMLMyFetchElement;
    'my-input': HTMLMyInputElement;
    'my-slot': HTMLMySlotElement;
  }

  interface ElementTagNameMap extends HTMLElementTagNameMap {}
}

