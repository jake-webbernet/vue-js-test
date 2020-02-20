<script>
    export default {
        props: {
            msg: { type: String, required: true },
            reset: { type: Boolean }
        },
        data: function () {
            return {
                message: null
            }
        },
        watch: {
            msg () {
                this.message = this.msg
            },
            reset () {
                if (this.reset) {
                    console.log('Resetting Counter')
                    this.msg = null;
                }
            }
        }
    }
</script>

<template>
    <div>
        <h2>Component 2 - btcCounter</h2>
        <p v-if="this.message">Bitcoin is {{this.message}}</p>
    </div>
</template>
