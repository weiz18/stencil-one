import { newSpecPage } from '@stencil/core/testing';

import { MySerialComponent } from './serial';

// import {serializer} from '../../../test/stencil-serializer';
// expect.addSnapshotSerializer(serializer);

describe('serial', () => {

    it('should render', async () => {

        const page = await newSpecPage({
            components: [MySerialComponent],
            html: `
                <my-serial value="I am updated value">
                </my-serial>
            `
        });
        //expect(page.root).toMatchSnapshot();
    });
    
});