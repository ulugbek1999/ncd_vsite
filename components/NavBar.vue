<template>
    <nav class="nav">
        <div class="logo-container">
            <img src="~/static/logo_login.svg" alt="NCD | International" id="logo">
        </div>
        <div class="nav-links">
            <ul>
                <li>Услуги</li>
                <li>О компании</li>
                <li>Вакансии</li>
                <li>Документы</li>
                <li>Вопросы</li>
                <li>Контакты</li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        links: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped src="~/assets/components/navbar.scss"></style>