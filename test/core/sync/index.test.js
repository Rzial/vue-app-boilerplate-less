import { sync } from '@src/core/sync';

describe('<Features>', () => {
    it('Sync don\'t throws error', function() {
        expect(sync).not.toThrow();
    });
});
