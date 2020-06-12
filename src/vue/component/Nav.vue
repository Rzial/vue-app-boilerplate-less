<template lang="pug">
    header.app-nav.no-padding.navbar-fixed
        nav.white
            div.container.nav-wrapper
                router-link.brand-logo.waves-effect.black-text(:to="{name: 'Home'}")
                    span.app-nav__home_logo.hide-on-small-only
                        img(src="@res/images/logo.png" width=30)
                    span Sample
                ul.right.hide-on-med-and-down(id="nav-mobile")
                    li
                        router-link.waves-effect.black-text(:to="{name: 'Foo'}") Foo
                    li
                        router-link.waves-effect.black-text(:to="{name: 'Bar'}") Bar
</template>

<style lang="less" src="./Nav.less" scoped />
