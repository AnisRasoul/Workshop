<template>
    <div class="authors-list">
      <h1>Authors</h1>
      <ul>
        <li v-for="author in authors" :key="author.id" :class="{ 'author-item': true, 'favorite': author.isfav }">
          <div class="author-details">
            <p><strong>Name:</strong> {{ author.name }}</p>
            <p><strong>Age:</strong> {{ author.age }}</p>
            <p><strong>Book:</strong> {{ author.book }}</p>
          </div>
          <button @click="toggleFavorite(author)" :class="{'favorite-button': true, 'unfavorite-button': author.isfav}">
            {{ author.isfav ? 'Unfavorite' : 'Favorite' }}
          </button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        authors: [
          {
            id: 1,
            name: 'Friedrich Nietzsche',
            age: 55,
            book: 'The Antichrist',
            isfav: false
          },
          {
            id: 2,
            name: 'Albert Camus',
            age: 45,
            book: 'The Stranger',
            isfav: false
          },
          {
            id: 3,
            name: 'Franz Kafka',
            age: 23,
            book: 'The Metamorphosis',
            isfav: false
          },
          {
            id: 4,
            name: 'George Orwell',
            age: 60,
            book: '1984',
            isfav: false
          },
          {
            id: 5,
            name: 'Sylvia Plath',
            age: 40,
            book: 'The Bell Jar',
            isfav: false
          }
        ]
      };
    },
    methods: {
      toggleFavorite(author) {
        author.isfav = !author.isfav;
      }
    }
  };
  </script>
  
  <style scoped>
  .authors-list {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }
  
  .author-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 10px;
  }
  
  .author-details {
    flex: 1; /* Take remaining space */
  }
  
  .favorite-button {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .unfavorite-button {
    background-color: #e74c3c;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  
  .favorite {
    background-color: #ffc0cb; /* Light pink */
  }
  </style>
  