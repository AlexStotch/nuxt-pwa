<template>
<div>
  <div>
    <img :src="image.url"/>
  </div>
  <Button @clicked="fetchCatImage"></Button>
  <fb-connexion></fb-connexion>
  <!-- <Spinner /> -->
</div> 
</template>

<script lang='ts'>
import {defineComponent, computed} from '@vue/composition-api';
import { useStore } from '../store'

import FbConnexion from './fbConnexion.vue';
import Button from './button.vue';
import Spinner from './spinner.vue';

export default defineComponent({
  components:{Button, Spinner, FbConnexion},
   setup () {
    const store = useStore();

    const fetchCatImage = async () => await store.dispatch('loadCatImage');
    fetchCatImage();
    const image = computed(() => store.state.image);
    
    return {image, fetchCatImage}
    }
  })
</script> 

<style lang="scss">
.cat-image {
  padding: 5% 5% 5% 5%;
  text-align: center;

  img {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width: 80%;
    height: 80%;
  }
}
</style>
