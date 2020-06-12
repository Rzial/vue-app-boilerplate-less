import { shallowMount } from '@vue/test-utils';

import Bar from '@vue-view/Bar.vue';

describe('<Bar>', () => {
    it('Get <Bar>', function() {
        const wrapper = shallowMount(Bar);

        expect(wrapper.find('*').vm).toBeTruthy();
    });
});
