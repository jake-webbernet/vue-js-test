import { mount } from '@vue/test-utils'
import component from '@/SomeViewComponent.vue'

describe('component', () => {
    test('is a vue instance', () => {
        const wrapper = mount(component)
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
