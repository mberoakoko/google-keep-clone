<template>
    <div class="wrapper" @click="toggle" :style="cssVars">
        <div id="nav-icon3">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<script>
export default {
name: "hamburgerIcon",
    props: {
        height: {
            type: String,
            required: false,
            default: "20"
        },
        width: {
            type: String,
            required: false,
            default: "20"
        }

    },
    computed:{
        cssVars(){
            return{
                '--backgroundColor': '#bfbfbf',
                '--width': this.width +"px",
                '--height': this.height + "px",
                '--space': (parseInt(this.height) / 3 ) + "px"
            }
        }
    },
    methods: {
        toggle(){
            let navElem = document.querySelector("#nav-icon3")
            navElem.classList.toggle('open')
        }
    }
}
</script>

<style lang="scss" scoped>
    :root {
        --backgroundColor: black;
        --width: 40px;
        --height: 20px;
        --space : calc(var(--height)/3);
    }
    /*.wrapper{
        width: var(--width);
        height: var(--height);
        background: black;
        position: relative;
    }*/
    #nav-icon3{
        width: var(--width);
        height: var(--height);
        position: relative;
        left: 0;
        top: 0;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .5s ease-in-out;
        -moz-transition: .5s ease-in-out;
        -o-transition: .5s ease-in-out;
        transition: .5s ease-in-out;
        cursor: pointer;

        span{
            display: block;
            position: relative;
            height: 2px;
            width: 100%;
            background: var(--backgroundColor);
            border-radius: 9px;
            opacity: 1;
            left: 0;
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
            -webkit-transition: .25s ease-in-out;
            -moz-transition: .25s ease-in-out;
            -o-transition: .25s ease-in-out;
            transition: .25s ease-in-out;

            &:nth-child(1){
                top: 0;
            }
            &:nth-child(2), &:nth-child(3){
                top: var(--space);
            }
            &:nth-child(2){
                opacity: 0;
            }
            &:nth-child(4){
                top: calc(var(--space) * 2);
            }
        }
    }
    #nav-icon3.open span:nth-child(1) {
        top: 18px;
        width: 0;
        left: 50%;
    }

    #nav-icon3.open span:nth-child(2) {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
        opacity: 100;
    }

    #nav-icon3.open span:nth-child(3) {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }

    #nav-icon3.open span:nth-child(4) {
        top: 18px;
        width: 0;
        left: 50%;
    }

</style>
