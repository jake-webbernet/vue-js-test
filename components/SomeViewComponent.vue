<script src="../main.js"></script>
<script src="../../testCompontent.js"></script>
<script>
    const url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR";
    module.exports = {
        data: function () {
            return {
                loading: false,
                results: null,
            }
        },
        methods: {
            fetchShit() {
                console.log('Loading Results!!');
                this.loading = true
                axios.get(url).then(response => {
                    this.results = response.data
                    this.loading = false
                })
            }
        }
    }
</script>

<template>
    <div>
        <h1>Here are the results</h1>
        <button class="btn-secondary" v-on:click="fetchShit">Load Results man!</button>
        <p v-if="loading">Loading!</p>
        {{results}}
    </div>
</template>

<style scoped>
    button {
        background-color: red;
    }
</style>