import { shallowMount } from '@vue/test-utils';

import App from '@src/core/App.vue';

describe('<App>', () => {
    it('Get <App>', function() {
        const wrapper = shallowMount(App, {
            stubs: ['router-view'],
        });

        expect(wrapper.find('*').vm).toBeTruthy();
    });
});
