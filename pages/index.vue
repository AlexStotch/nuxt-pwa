<template>
  <div>
    <div>
      <cat-image />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api';
import catImage from '~/components/catImage.vue';

Vue.use(VueCompositionApi)

export default Vue.extend({
  components: { catImage },})
</script>