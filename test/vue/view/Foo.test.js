import { shallowMount } from '@vue/test-utils';

import Foo from '@vue-view/Foo.vue';

describe('<Foo>', () => {
    it('Get <Foo>', function() {
        const wrapper = shallowMount(Foo);

        expect(wrapper.find('*').vm).toBeTruthy();
    });
});
