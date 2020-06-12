<template lang="pug">
    section.app-view-home.section.white.no-pad
        Highlight.deep-purple.darken-1(
            align="left"
            :image="highlightImage"
            heading="Bar!"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed orci lectus. Duis nec convallis ex. Pellentesque a magna augue. In maximus orci ac mi viverra, et pretium quam dictum. Etiam tempor turpis ac mi posuere sodales. Proin facilisis arcu non tortor commodo viverra. Maecenas et varius lacus. Donec nec tempor enim. Praesent imperdiet bibendum erat id pharetra. Fusce a laoreet nulla, nec venenatis arcu. Duis tincidunt tincidunt ante convallis ullamcorper.")
        Highlight.deep-purple.darken-2(
            align="right"
            :image="highlightImage"
            heading="Bar!"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed orci lectus. Duis nec convallis ex. Pellentesque a magna augue. In maximus orci ac mi viverra, et pretium quam dictum. Etiam tempor turpis ac mi posuere sodales. Proin facilisis arcu non tortor commodo viverra. Maecenas et varius lacus. Donec nec tempor enim. Praesent imperdiet bibendum erat id pharetra. Fusce a laoreet nulla, nec venenatis arcu. Duis tincidunt tincidunt ante convallis ullamcorper.")
</template>

<script>
    import Highlight from '@vue-component/Home/Highlight';

    import ItemImage from '@res/images/item.png';

    export default {
        components: {
            Highlight,
        },
        data: () => ({
            highlightImage: ItemImage,
        }),
    };
</script>
