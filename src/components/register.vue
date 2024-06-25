<template>
    <div class="form-container">
        <form class="user-form">
            <input type="text" id="name" name="name" v-model="name" required placeholder="Enter your name">
            <input type="email" id="email" name="email" v-model="email" required placeholder="Enter your email">
            <input type="password" id="password" name="password" v-model="password" required placeholder="Enter your password">
        </form>
          
        <div class="user-data">
            <h1>This is the data I got from the user</h1>
            <p><strong>Name:</strong> {{ name }}</p>
            <p><strong>Email:</strong> {{ email }}</p>
            <p><strong>Password:</strong> {{ password }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            password: ''
        };
    }
}
</script>

<style scoped>
.form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    font-family: Arial, sans-serif;
    color: #333;
}

.user-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    background-color: #f9f9f9;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}

.user-form input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box;
}

.user-form input:focus {
    border-color: #007BFF;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.user-data {
    text-align: center;
    width: 300px;
    background-color: #f9f9f9;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.user-data h1 {
    font-size: 1.5em;
    margin-bottom: 20px;
}

.user-data p {
    font-size: 1.1em;
    margin: 5px 0;
}
</style>
