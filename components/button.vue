<template>
    <div>
        <button class="btn btn-primary" @click="emitClick">Nouveau chat</button>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
    methods: {
        emitClick() {
            this.$emit('clicked');
        }
    }
});
</script>
<style lang='scss'>
button {
    background-color:#fff;
    color: #555;
    cursor: pointer;
    padding: 3%;
    margin: 3%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;}
</style>