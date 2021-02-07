<template>
<div>
  <img :src="image.url"/>
</div> 
</template>
<script lang='ts'>
import { defineComponent, ref, onMounted } from '@vue/composition-api';
import {fetchCatImageApi} from '../api/api';

export default defineComponent({
   setup () {
    let image = ref({});
    
    const fetchCatImage = async ()  => {
      const res = await fetchCatImageApi();
      image.value = res.data[0];
    } 

    fetchCatImage();

    return {image}
    }
  })
</script>
<style scoped>
.img {
  width: 100px;
  height: 100px;
}
</style>
