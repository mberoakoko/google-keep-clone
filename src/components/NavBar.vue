<template>
    <div>
        <header>
            <ul>
                <li v-for="item in navItems" :key="item.content">
                    <label id="label">{{item.content}}<i class="arrow"></i></label>
                </li>
            </ul>
        </header>
    </div>
</template>

<script>
export default {
name: "NavBar",
    data(){
        return{
            navItems: [
                {link: '#', content: "Why KeepClone?"},
                {link: '#', content: "Solutions"},
                {link: '#', content: "Resources"},
                {link: '#', content: "Prices"},
                ]
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll)
    },unmounted(){
        window.addEventListener('scroll', this.handleScroll)
    },
    methods:{
        handleScroll(event){
            let header = document.querySelector('header')
            let label = document.querySelectorAll('#label')
            console.log(event.type)
            try {
                header.classList.toggle('sticky', window.scrollY > window.innerHeight - 28)
                label.forEach(elem => {
                    elem.classList.toggle('sticky', window.scrollY > window.innerHeight - 28)
                })
            }catch (e) {
                console.log(e)
            }
        },
        syncAnim(){


        }
    }
}
</script>

<style lang="scss" scoped>
@import "src/scss/main";
    header{
        font-family: $main-Font;
        font-weight: 600;
        background: #ff7700;
        font-size: 1.25rem;
        height: 56px;
        width: 100vw;
        position: fixed;
        left: 0;
        top: 0;
        display: flex;
        align-items: center;
        transition: 0.6s;
        padding-left: 10%;
        padding-right: 10%;
        z-index: 100000;
        ul{
            text-decoration: none;
            display: flex;
            margin: 0;
            position: relative;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            li{
                list-style: none;
                position: relative;
                margin-right: 90px;
                label{
                    position: relative;
                    transition: 0.5ms;
                    display: flex;
                    align-items: center;
                    &:hover{
                        color: white;
                        &::before{
                            visibility: visible;
                            transform: scaleX(1);
                        }
                    }
                    &::before{
                        content: "";
                        position: absolute;
                        width: 100%;
                        height: 2px;
                        bottom: -16px;
                        left: 0;
                        background-color: white;
                        visibility: hidden;
                        transform: scaleX(0);
                        transition: all 0.3s ease-in-out;
                    }
                    &::after{
                        content: "";
                        position: absolute;
                        border: solid black;
                        border-width: 0 3px 3px 0;
                        display: inline-block;
                        padding: 3px;
                        margin-left: 5px;
                        transform: rotate(-45deg);
                        -webkit-transform: rotate(-45deg);
                        left: 100%;

                    }
                }
            }
        }
    }
header.sticky{
    padding: 5px 100px;
    background: #fff;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    ul li a {
        color: black;
    }
}
label.sticky{
    &:hover{
        color: blue;
    }
    &::before{
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: -16px;
        left: 0;
        background-color: blue;
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.3s ease-in-out;
    }
}
.arrow {


}
</style>
