<template>
    <div>
        <button
            @click="emitClick">Nouveau chat
        </button>
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
    background-color: red;
}
</style>