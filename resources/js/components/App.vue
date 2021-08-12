<template>
    <div>
        <div id="header">
           <router-view name="header"></router-view>
        </div>
        <main class="py-4">
            <router-view></router-view>
        </main>
    </div>
</template>
<script>
  import Header from "./Layout/Header.vue"
  export default {
      components: {
          Header
      }
  }
</script>
