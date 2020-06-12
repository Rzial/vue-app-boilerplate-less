<template lang="pug">
    section
        Nav
        main.no-padding
            router-view
</template>

<style lang="less" src="./App.less"/>

<script>
    import Nav from '@vue-component/Nav.vue';

    export default {
        components: {
            Nav,
        },
    };
</script>
