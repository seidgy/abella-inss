<template>
    <div class="socials">
        <a :href="i.url" target="_blank" class="socials__link" v-for="i in socials" v-bind:key="i.name">
            <img format="webp" :src="i.icon" :alt="i.name" class="socials__icon" :class="{'socials__icon--small': props.size=='small'}" />
        </a>
    </div>
</template>

<script setup>
    const props = defineProps({
        size: {
            type: String,
            default: 'normal',
        },
        negativo: {
            type: Boolean,
            default: false,
        }
    });

    const socials = [
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/abellaadv',
            icon: props.negativo?'/images/facebook-negativo.svg':'/images/facebook.svg',
        },
        {
            name: 'Youtube',
            url: 'https://www.youtube.com/@abellaadv',
            icon: props.negativo?'/images/youtube-negativo.svg':'/images/youtube.svg',
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/abellaadv/',
            icon: props.negativo?'/images/instagram-negativo.svg':'/images/instagram.svg',
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/company/abellaadv/',
            icon: props.negativo?'/images/linkedin-negativo.svg':'/images/linkedin.svg',
        },
    ]
</script>

<style lang="scss" scoped>
    .socials {
        display: flex;
        flex-flow: row nowrap;
        gap: 16px;
    }

        .socials__icon {
            width: 32px;
            height: 32px;
            &.socials__icon--small {
                width: 24px;
                height: 24px;
            }
        }
</style>