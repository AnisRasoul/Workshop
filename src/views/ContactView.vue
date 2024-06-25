<template>
    <div class="contact-page">
        <navbar />
        <h1>Contact Page</h1>
        <register />
    </div>
</template>

<script>
import navbar from '@/components/navbar.vue';
import register from '@/components/register.vue';

export default {
    components: {
        navbar,
        register
    }
}
</script>

<style scoped>


.contact-page h1 {
    font-size: 2em;
    margin-bottom: 10px;
    color: #007BFF;
}

.contact-page p {
    font-size: 1.2em;
    margin-bottom: 20px;
    color: #666;
}
</style>
