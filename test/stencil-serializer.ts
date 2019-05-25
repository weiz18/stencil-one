import {MockNode, serializeNodeToHtml } from '@stencil/core/dist/mock-doc';

const print =  (val: HTMLElement): string => {
    console.log('HTMLElement', val instanceof HTMLElement)
    console.log('MockNode', val instanceof MockNode)
    //console.log('NODE', val)
    let res = serializeNodeToHtml(val, {
        serializeShadowRoot: true,
        prettyHtml: true,
        outerHtml: true,
    });
    return res;
}

const test = (val: any): boolean => {
    return val !== undefined &&
    val !== null &&
    (val instanceof HTMLElement || val instanceof MockNode)
}
export const serializer = {
    print,
    test
}
//expect.addSnapshotSerializer(serializer)