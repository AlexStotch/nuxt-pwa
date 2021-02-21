<template>
    <div class="text-center">
        <button class="bg-purple-600 hover:bg-purple-700 text-white p-2" 
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