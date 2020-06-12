import { shallowMount } from '@vue/test-utils';

import Features from '@vue-component/Home/Features.vue';

describe('<Features>', () => {
    it('Get <Features>', function() {
        const wrapper = shallowMount(Features, {
            props: {
                content: [],
            },
        });

        expect(wrapper.find('*').vm).toBeTruthy();
    });
});
