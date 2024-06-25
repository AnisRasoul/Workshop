<template>
    <RouterView />
</template>

<script>
export default {
    name: 'App',
}
</script>
<style>
body{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    font-family: Arial, sans-serif;
    color: #333;
    background-color: #f0f0f0;
    min-height: 100vh;
}
</style>