<template lang="pug">
    section.app-view-home.section.white.no-pad
        Highlight.light-blue.darken-1(
            align="left"
            :image="highlightImage"
            heading="Lorem ipsum dolor sit amet!"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed orci lectus. Duis nec convallis ex. Pellentesque a magna augue. In maximus orci ac mi viverra, et pretium quam dictum. Etiam tempor turpis ac mi posuere sodales. Proin facilisis arcu non tortor commodo viverra. Maecenas et varius lacus. Donec nec tempor enim. Praesent imperdiet bibendum erat id pharetra. Fusce a laoreet nulla, nec venenatis arcu. Duis tincidunt tincidunt ante convallis ullamcorper.")

        Highlight.light-blue.darken-2(
            align="right"
            :image="highlightImage"
            heading="Phasellus semper ex in lacus aliquet viverra!"
            content="Phasellus semper ex in lacus aliquet viverra. Fusce feugiat tristique ultricies. Etiam pellentesque erat in eleifend feugiat. Quisque luctus, felis porttitor tempor iaculis, turpis libero fermentum est, luctus vehicula diam nisl interdum orci. Vestibulum sollicitudin iaculis vulputate. Integer velit augue, dapibus id sagittis ac, volutpat at mauris. Maecenas scelerisque nibh et faucibus ullamcorper. Praesent luctus ante eu scelerisque mollis. Sed consequat pretium dolor, placerat egestas leo consequat eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean dapibus nec nunc sed sodales.")

        Features.light-blue.darken-3(
            :content="featuresContent"
        )
</template>

<script>
    import Features from '@vue-component/Home/Features';
    import Highlight from '@vue-component/Home/Highlight';

    import ItemImage from '@res/images/item.png';

    export default {
        components: {
            Features,
            Highlight,
        },
        data: () => ({
            highlightImage: ItemImage,
            featuresContent: [
                {
                    image: ItemImage,
                    content: 'Nam eu dui libero. In sit amet maximus massa. Curabitur commodo viverra nulla, sit amet' +
                        ' feugiat nisl posuere nec. Suspendisse eu vulputate urna, dapibus ullamcorper sapien. Suspen' +
                        'disse vitae luctus lacus, tempus vehicula dui. Ut pharetra elit consequat mauris rhoncus, se' +
                        'd dapibus purus porttitor. Phasellus faucibus pulvinar ligula, eget sodales tellus ornare no' +
                        'n. In venenatis consectetur varius. Sed sit amet bibendum leo. Aliquam euismod orci tellus. ' +
                        'Donec rhoncus leo et sagittis mollis. Mauris rutrum congue purus in placerat. Nulla tellus m' +
                        'i, rhoncus vitae rutrum in, tempor eu magna. Aliquam porta maximus felis ac facilisis.',
                },
                {
                    image: ItemImage,
                    content: 'In non mi vel erat semper consequat vel sodales lectus. Duis sed lorem in leo sodales i' +
                        'nterdum. Phasellus varius velit cursus enim tincidunt, vel sagittis nulla ultricies. Aliquam' +
                        ' non erat condimentum, mollis est vel, cursus odio. Ut justo massa, vehicula non neque eget,' +
                        ' viverra laoreet ex. Nullam volutpat ornare velit ut mattis. Morbi molestie, nibh quis volut' +
                        'pat sollicitudin, sapien est tempor lectus, sed condimentum metus ante nec tellus. In hac ha' +
                        'bitasse platea dictumst. Duis bibendum molestie mauris a blandit. Proin a rutrum felis, at a' +
                        'uctor ante. Curabitur faucibus neque sagittis ex accumsan, eu accumsan urna rutrum. Pellente' +
                        'sque tempor pulvinar egestas. Nam pretium lobortis consectetur. Suspendisse nec pellentesque' +
                        ' est. In at dapibus augue, eget volutpat erat.',
                },
                {
                    image: ItemImage,
                    content: 'Ut dignissim euismod rutrum. Nullam auctor felis vel enim semper, eu varius neque biben' +
                        'dum. Suspendisse tortor tellus, eleifend vel placerat id, posuere vel felis. Nulla facilisi.' +
                        ' Sed dictum metus at mi vestibulum semper. Vivamus aliquet ligula in tellus efficitur, sed c' +
                        'onvallis sapien gravida. Integer et bibendum ex. Vestibulum ante ipsum primis in faucibus or' +
                        'ci luctus et ultrices posuere cubilia curae;',
                },
            ],
        }),
    };
</script>
