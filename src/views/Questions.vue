<template>

    <div>
        <Navbar/>
       <div class="workshop-feedback">
      <div v-if="hasQuestions" class="question-section">
        <p class="question-text">If you have any questions, please feel free to ask!</p>
        <button @click="hasQuestions = false" class="question-button">No question?</button>
      </div>
      <div v-else class="thanks-section">
        <p class="thanks-text">Thank you for attending the workshop.</p>
        <button class="website-button"><a href="https://anisrasoul.me/" target="_blank">Visit my personal website</a></button>
      </div>
    </div> 
    </div>
    
  </template>
  
  <script>
import Navbar from '@/components/navbar.vue';

  export default {
    components: {
        Navbar
    },
    data() {
      return {
        hasQuestions: true 
      };
    },
  };
  </script>
  
  <style scoped>
  .workshop-feedback {
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    text-align: center;
  }
  
  .question-section {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
  }
  
  .thanks-section {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
  }
  
  .question-text {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .thanks-text {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .question-button {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .question-button:hover {
    background-color: #2980b9;
  }
  
  .website-button {
    background-color: #2ecc71;
    color: white;
    border: none;
    padding: 12px 24px;
    font-size: 16px;
    border-radius: 4px;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .website-button a {
    color: white;
    text-decoration: none;
  }
  
  .website-button:hover {
    background-color: #27ae60;
  }
  </style>
  