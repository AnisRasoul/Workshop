<template>
    <div>
        <nav class="navbar">
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/authors">Authors</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
                <li><router-link to="/api">API</router-link></li>
                <li><router-link to="/questions" >Feedback</router-link></li>
            </ul>
        </nav>
        <RouterView />
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* Navbar styles */
.navbar {
    background-color: #333;
    padding: 10px 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
}

.navbar li {
    margin: 0 15px;
}

.navbar a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    transition: color 0.3s;
}

.navbar a:hover {
    color: #007BFF;
}

.router-link-active {
    color: #007BFF;
}

/* Additional global styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f9f9f9;
    color: #333;
}

h1, h2, h3, h4, h5, h6 {
    margin: 0 0 10px;
    padding: 0;
}

p {
    margin: 0 0 10px;
    padding: 0;
}
</style>
