<template lang="pug">
    section.app-features.section.z-depth-1
        div.container
            div.row.hide-on-med-and-down
                div.col.l4.center-align(v-for="item in content")
                    div.app-features__image
                        img(v-if="item.image" :src="item.image" width=180)

            div.row.center-align
                div.col.m12.l4(v-for="item in content")
                    div
                        div.app-features__image
                            img.hide-on-large-only(v-if="item.image" :src="item.image" width=140)

                        div.white-text
                            span(v-if="item.content") {{item.content}}
</template>

<style lang="less" src="./Features.less" scoped />

<script>
    export default {
        name: 'Features',
        props: {
            content: {
                type: Array,
                required: true,
            },
        },
    };
</script>
