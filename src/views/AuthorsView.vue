<template>
  <div>
    <navbar />
    <Authors />
  </div>
</template>

<script>
import Authors from '@/components/authors.vue';
import navbar from '@/components/navbar.vue';
export default {
components: {
    navbar,
    Authors

}
}
</script>

<style>

</style>