<script>
    export default {
        props: {
            msg: { type: String, required: true }
        },
        methods :{
            resetAll () {
                this.$emit("reset", 'foo');
            }
        }
    }

</script>

<template>
    <div>
        <h2>Component 3 - resetComponent</h2>
        <button v-on:click="resetAll">Reset All</button>
    </div>
</template>
