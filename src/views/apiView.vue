<template>
    <div class="api-page">
      <navbar />
      <h1>API Page</h1>
      <p>This is the API page</p>
      <div class="posts-container">
        <div v-for="post in posts" :key="post.id" class="post-item">
          <h3>{{ post.title }}</h3>
          <p>{{ post.body }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import navbar from '@/components/navbar.vue';
  
  export default {
    name: 'apiView',
    components: {
      navbar,
    },
    data() {
      return {
        posts: [],
      };
    },
    mounted() {
      this.fetchPosts();
    },
    methods: {
      async fetchPosts() {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts');
          const data = await response.json();
          this.posts = data;
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .api-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  .api-page h1 {
    text-align: center;
    color: #333;
  }
  
  .api-page p {
    text-align: center;
    color: #666;
  }
  
  .posts-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  
  .post-item {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 15px;
    flex: 1 1 calc(33.333% - 20px);
    box-sizing: border-box;
    transition: box-shadow 0.3s ease;
    max-width: calc(33.333% - 20px);
  }
  
  .post-item:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .post-item h3 {
    margin: 0 0 10px;
    color: #007BFF;
  }
  
  .post-item p {
    margin: 0;
    color: #555;
  }
  </style>
  