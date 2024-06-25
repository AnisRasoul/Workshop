<script>
import Author from '@/components/author.vue';
import authors from '@/components/authors.vue';
import register from '@/components/register.vue';
import navbar from '@/components/navbar.vue';
export default {
  components: {
    Author,
    authors,
    register,
    navbar,
  }
}
</script>

<template>
  <div>
      <navbar />
    <Author />
  </div>

</template>

<style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: black;
  }
</style>
