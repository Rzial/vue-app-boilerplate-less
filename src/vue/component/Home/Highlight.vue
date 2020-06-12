<template lang="pug">
    section.app-highlight.section.z-depth-1
        div.container
            div.row.hide-on-med-and-down
                div.col.l6.center-align(v-if="align === 'right'")
                    div.app-highlight__image
                        img(v-if="image" :src="image" width=180)

                div.col.l6
                    div.white-text
                        h4.app-highlight__heading(v-if="heading") {{heading}}
                        span(v-if="content") {{content}}

                div.col.l6.center-align(v-if="align === 'left'")
                    div.app-highlight__image
                        img(v-if="image" :src="image" width=180)

            div.row.hide-on-large-only.center-align
                div.col.m12
                    div.app-highlight__image
                        img(v-if="image" :src="image" width=140)

                div.col.m12
                    div.white-text
                        h4.app-highlight__heading(v-if="heading") {{heading}}
                        span(v-if="content") {{content}}
</template>

<style lang="less" src="./Highlight.less" scoped />

<script>
    export default {
        name: 'Highlight',
        props: {
            align: {
                type: String,
                required: true,

                validator: (val) => ['left', 'right'].includes(val),
            },

            image: {
                type: String,
                default: null,
            },
            heading: {
                type: String,
                default: null,
            },
            content: {
                type: String,
                default: null,
            },
        },
    };
</script>
