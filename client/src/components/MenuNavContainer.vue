<template>
  <Menu>
    <li><router-link class="k-link k-menu-link" :to="{ name: 'Home' }">Home</router-link></li>
    <li><router-link class="k-link k-menu-link" :to="{ name: 'Form' }">Form</router-link></li>
    <li><router-link class="k-link k-menu-link" :to="{ name: 'Grid' }">Grid</router-link></li>
    <li><router-link class="k-link k-menu-link" :to="{ name: 'Chart' }">Chart</router-link></li>
    <li><router-link class="k-link k-menu-link" :to="{ name: 'Dialog' }">Dialog</router-link></li>
    <li><router-link class="k-link k-menu-link" :to="{ name: 'Upload' }">Upload</router-link></li>
    <li><router-link class="k-link k-menu-link" :to="{ name: 'Dropdown' }">Dropdown</router-link></li>
    <li><router-link class="k-link k-menu-link" :to="{ name: 'Chat' }">Chat</router-link></li>
  </Menu>
</template>

<script>
import '@progress/kendo-ui/js/kendo.menu';
import { Menu } from '@progress/kendo-layout-vue-wrapper';

export default {
  components: {
    Menu
  }
}
</script>
