import {MockNode, serializeNodeToHtml } from '@stencil/core/dist/mock-doc';

const print =  (val: HTMLElement, print, indent, opts, colors): string => {
    console.log('HTMLElement', val instanceof HTMLElement)
    console.log('MockNode', val instanceof MockNode)
    console.log('SER',serializeNodeToHtml(val));
    return serializeNodeToHtml(val);
}

const test = (val: HTMLElement): boolean => {
    return val !== undefined &&
    val !== null &&
    val instanceof HTMLElement 
}
export const serializer = {
    print,
    test
}