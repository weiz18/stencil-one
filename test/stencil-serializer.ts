import {MockNode, serializeNodeToHtml } from '@stencil/core/dist/mock-doc';

const print =  (val: HTMLElement | MockNode): string => {
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