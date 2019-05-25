import { newSpecPage } from '@stencil/core/testing';
import {serializer} from '../../../test/stencil-serializer';

import { MySerialComponent } from './serial';

describe('serial', () => {

    it('should render', async () => {
        expect.addSnapshotSerializer(serializer)
        const page = await newSpecPage({
            components: [MySerialComponent],
            html: `
                <my-serial value="I am updated value">
                </my-serial>
            `
        });
        debugger;
        console.log('TESTER', serializer.test(page.root))
        // let res = serializer.print(page.root);
        // console.log(res);
        expect(page.root).toMatchSnapshot();
    });
    
});