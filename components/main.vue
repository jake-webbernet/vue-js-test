<template>
    <div class="container">
        <prices-loader :reset="this.reset" :api="this.api" @btcPrice="updateBtcPrice" @resetComplete="completeReset"></prices-loader>
        <btcCounter :reset="this.reset" :msg="this.msg" @counterResetComplete="completeReset"></btcCounter>
        <resetComponent  @reset="resetAll"></resetComponent>
    </div>
</template>

<script>

    import pricesLoader from './pricesLoader.vue'
    import btcCounter from './btcCounter.vue'
    import resetComponent from "./resetComponent.vue";

    export default {
        data: function() {
            return {
                msg: "",
                reset: ""
            };
        },
        props: {
            api: { type: Function, required: true }
        },
        components: {
            'resetComponent': resetComponent,
            'pricesLoader': pricesLoader,
            'btcCounter': btcCounter,
        },
        methods: {
            updateBtcPrice(price) {
                console.log('UPDATE');
                this.msg = price;
                console.log(this.msg);
                this.reset = false
            },
            resetAll() {
                this.reset = true;
            }
        }
    }
</script>
