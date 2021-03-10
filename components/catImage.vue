<template>
<div>
  <div>
    <img :src="image.url"/>
  </div>
  <Button @clicked="fetchCatImage"></Button>
  <!-- <Spinner /> -->
</div> 
</template>
<script lang='ts'>
import {defineComponent, ref, computed} from '@vue/composition-api';
import { mapGetters } from 'vuex'
import {fetchCatImageApi} from '../api/api';
import { useStore } from '../store'
import Button from './button.vue';
import Spinner from './spinner.vue';

export default defineComponent({
  components:{Button, Spinner},
   setup () {
    const store = useStore();

    const fetchCatImage = async () => await store.dispatch('loadCatImage');
    fetchCatImage();
    const image = computed(() => store.state.image);

    return {image, fetchCatImage}
    }
  })
</script> 
