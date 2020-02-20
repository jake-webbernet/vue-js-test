<script>
    export default {
        props: {
            api: { type: Function, required: true },
            reset: { type: Boolean }
        },
        data: function () {
            return {
                results: null,
                loading: false,
                theComponent: null
            }
        },
        methods: {
            fetchShit() {
                this.loading = true;
                var self = this;
                this.api(function(resp) {
                    console.log(resp.data);
                    self.results = resp.data;
                    self.loading = false;
                    if (resp.status != 200) {
                        self.error = true;
                    }
                    self.$emit("btcPrice", self.results.BTC.USD);
                });
            }
        },
        watch: {
            reset () {
                if (this.reset) {
                    console.log('Resetting Prices Loader')
                    this.results = null
                }
            }
        }
    }
</script>

<template>
    <div>
        <h2>Component 1 - pricesLoader</h2>
        <button id="loadResults" class="btn-secondary" v-on:click="fetchShit">Load Results man!</button>
        <p v-if="error">Sorry, there was an error!</p>
        <div class="results">
            <span v-if="loading">Loading!</span>
            {{ results }}
        </div>
    </div>
</template>
