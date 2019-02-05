<template>
<div class="componentContainer">
<h1>LOGIN</h1>
<login_LoginQuery @loginClicked="runLogin()"/>
</div>
</template>

<script>
import login_LoginQuery from '@/components/login/login_LoginQuery.vue'
export default {
  name: 'login',
  components: {
    login_LoginQuery,
  },
  methods: {
    runLogin(){
      this.$emit('loginRunFunc')
    }
  }
}
</script>
