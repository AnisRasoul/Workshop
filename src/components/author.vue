<template>
    <div class="author-container">
      <h1>Author</h1>
      <button @click="toggleAuthor" class="toggle-button">
        {{ showAuthor ? 'Hide author' : 'Show author' }}
      </button>
      <div v-if="showAuthor" class="author-details">
        <p>{{ author.name }}</p>
        <p>Age: {{ author.age }}</p>
        <div class="age-buttons">
          <button @click="increment">+</button>
          <button @click="decrement">-</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        author: {
          name: 'John Doe',
          age: 30
        },
        showAuthor: false
      }
    },
    methods: {
      increment() {
        this.author.age++;
      },
      decrement() {
        this.author.age--;
      },
      toggleAuthor() {
        this.showAuthor = !this.showAuthor;
      }
    }
  }
  </script>
  
  <style scoped>
  .author-container {
    max-width: 400px;
    margin: 0 auto; /* Center horizontally */
    text-align: center;
    padding: 20px;
  }
  
  .toggle-button {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 20px;
    transition: background-color 0.3s ease;
  }
  
  .toggle-button:hover {
    background-color: #2980b9;
  }
  
  .author-details {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 8px;
    text-align: left;
  }
  
  .age-buttons {
    margin-top: 10px;
  }
  
  .age-buttons button {
    background-color: #2ecc71;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 14px;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 10px;
    transition: background-color 0.3s ease;
  }
  
  .age-buttons button:hover {
    background-color: #27ae60;
  }
  </style>
  