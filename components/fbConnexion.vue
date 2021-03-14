<template>
<div>
  <div class="fb-login-button" data-width="" data-size="large" 
        data-button-type="login_with" 
        data-layout="default" data-auto-logout-link="false" 
        data-use-continue-as="false">
  </div>
  <button class="btn" @click="logout">Logout</button>
</div>    
</template>
<script>
import {logout} from '../plugins/facebook';

export default {
    methods: {
        logout() {
            logout();
        }
    }
}
</script>