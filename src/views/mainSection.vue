<template>
    <main>
        <hamburger-menu></hamburger-menu>
        <div class="businessDisplay">
            <div class="secondaryNav">
                <search/>
                <div class="controlArea">
                    <div class="svg">
                        <SVGComponent  elem-name="refresh" :width="svgWidth" :height="svgWidth"/>
                    </div>
                    <div class="svg">
                        <SVGComponent class="svg" elem-name="column" :width="svgWidth" :height="svgWidth"/>
                    </div>
                    <div class="svg">
                        <SVGComponent elem-name="settings" :width="svgWidth" :height="svgWidth"/>
                    </div>
                </div>
            </div>
            <note/>
            <router-view/>
        </div>
    </main>
</template>

<script>
import HamburgerMenu from "@/components/hamburgerMenu";
import Search from "@/components/search";
import SVGComponent from "@/components/SVGComponent";
import Note from "@/components/Note";
export default {
name: "mainSection",
    components: {Note, Search, HamburgerMenu, SVGComponent},
    methods:{

    },
    data(){
        return{
            svgWidth: 25,
            variable: this.updateValue
        }
    },
    computed : {
        updateValue(){
            return this.$store.getters.getListOpenedState
        }
    }


}
</script>

<style lang="scss" scoped>
@import "src/scss/main";
    main{
        width: 100vw;
        display: flex;
        .businessDisplay{
            height: 100vh;
            width: 100%;
            .secondaryNav{
                height: 80px;
                width: inherit;
                border-bottom: 1px solid #c3c1c1;
                display: flex;
                align-items: center;
                justify-content: space-evenly;
                .controlArea{
                    display: flex;
                    width: 400px;
                    height: inherit;
                    align-items: center;
                    .svg{
                        width: fit-content;
                        height: fit-content;
                        margin-right: 30px;
                        margin-left: 20px;
                    }
                    &:before{
                        content: "";
                        width: 1px;
                        height: 40px;
                        position: relative;
                        background: black;
                    }
                }
            }
        }
    }
</style>
