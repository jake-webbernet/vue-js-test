import { shallowMount } from '@vue/test-utils'
import component from '@/SomeViewComponent.vue'
import moxios from 'moxios'
import expect from 'expect'

describe('component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(component)
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('is a vue instance', async () => {
        expect(wrapper.isVueInstance()).toBeTruthy()
    })

    it('fuck you',async () => {
        moxios.stubRequest('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR', {
            status: 200,
            response: { title: "HELLO" }
        })

        wrapper.find('#loadResults').trigger('click');
        await wrapper.vm.$nextTick();
        expect(wrapper.find('.blah').text()).toBe('blah text')
    })
})
