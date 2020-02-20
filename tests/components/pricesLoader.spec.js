import { shallowMount } from '@vue/test-utils'
import component from '@/pricesLoader.vue'
import expect from 'expect'

describe('component', () => {
    let wrapper;
    let code = 200

    beforeEach(() => {
        wrapper = shallowMount(component, {
            propsData: {
                api: function(done) { done({status: code, data: {BTC: {USD: '10'}}})}
            }}
        )
    });

    it('lists the result from the API',async() => {
        code = 200;
        wrapper.find('#loadResults').trigger('click');
        await wrapper.vm.$nextTick();
        expect(wrapper.html()).toContain('10')
        expect(wrapper.html()).not.toContain('error')
    });

    it ('emits the BTC price', async() => {
        wrapper.find('#loadResults').trigger('click');
        expect(wrapper.emitted().btcPrice[0]).toEqual(["10"])
    })

    it('shows the error div when it errors',async() => {
        code = 400;
        wrapper.find('#loadResults').trigger('click');
        await wrapper.vm.$nextTick();
        expect(wrapper.html()).toContain('error')
    });
})
