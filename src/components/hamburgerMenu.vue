<template>
    <nav class="nav">
        <section>
            <div class="wrapperTop">
                <div class="logo">
                    <svg width="100%"
                        height="50%"
                        viewBox="0 0 232 100"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="-1" y="-1" width="232" height="102" id="canvas_background" fill="none"/>
                        <path d="m40,33.5c0,9.665 -7.835,17.5 -17.5,17.5l-17.5,0l0,-17.5c0,-9.665 7.835,-17.5 17.5,-17.5c9.665,0 17.5,7.835 17.5,17.5z" fill="#17CF97" id="svg_1"/>
                        <path d="m40,68.5c0,-9.665 7.835,-17.5 17.5,-17.5l17.5,0l0,17.5c0,9.665 -7.835,17.5 -17.5,17.5c-9.665,0 -17.5,-7.835 -17.5,-17.5z" fill="#17CF97" id="svg_2"/>
                        <path d="m5,68.5c0,9.665 7.835,17.5 17.5,17.5l17.5,0l0,-17.5c0,-9.665 -7.835,-17.5 -17.5,-17.5c-9.665,0 -17.5,7.835 -17.5,17.5z" fill="#17CF97" id="svg_3"/>
                        <path d="m75,33.5c0,-9.665 -7.835,-17.5 -17.5,-17.5l-17.5,0l0,17.5c0,9.665 7.835,17.5 17.5,17.5c9.665,0 17.5,-7.835 17.5,-17.5z" fill="#17CF97" id="svg_4"/>
                        <text fill="#f9f7f7" stroke-width="0" stroke-opacity="null" x="122.07859" y="47.63747" id="svg_5" font-size="24" font-family="'Trebuchet MS', Gadget, sans-serif" text-anchor="start" xml:space="preserve" transform="matrix(2.419699644948213,0,0,2.086483061799743,-204.96523941712687,-34.22968084092785) " stroke="null" font-weight="bold" font-style="normal">KEEP</text>
                    </svg>
                </div>
                <div>
                    <hamburger-icon
                        class="hamburgerIcon"
                        width = "20"
                        height = "15"
                        @click="toggleHamburger"
                    ></hamburger-icon>
                </div>
            </div>
            <ul>
                <li v-for="item in menuItems" :key="item.name">
                    <img :src="item.icon" :alt="item.name"><label>
                    <router-link to="/main/reminders">
                        {{item.name}}
                    </router-link>
                </label>
                </li>
            </ul>
        </section>
    </nav>
</template>

<script>
import HamburgerIcon from "@/components/hamburgerIcon";
//import {EventBus} from "@/EventBus"

export default {
    name: "hamburgerMenu",
    components: {HamburgerIcon},
    data(){
        return{
            menuItems: [{icon: require("../assets/icons/bulb.svg"), name: "Notes"},
                {icon: require("../assets/icons/edit.svg"), name: "Edit"},
                {icon: require("../assets/icons/arrow.svg"), name: "Labels"},
            ],
            stretched: true
        }
    },
    methods:{
        toggleHamburger(){
            /*if(this.stretched){
                this.closeNav()
            }else {
                this.openNav()
            }*/
            let navSection = document.querySelector(".nav")
            navSection.classList.toggle('closed')
            console.log(this.stretched)
            this.stretched = !this.stretched;
        },
        openNav(){
            document.documentElement.style.setProperty("--businessDisplayMargin", "240px")
            console.log("Open Nav engaged")
            this.stretched = true
        },
        closeNav(){
            document.documentElement.style.setProperty("--businessDisplayMargin", "50px")
            this.stretched = false
        }
    }
}
</script>

<style lang="scss" scoped>
@import "src/scss/main";
    $backgroundColor : #01082d;
    $textColor : #bfbfbf;


    nav{
        width: 240px;
        max-width: 240px;
        height: 100vh;
        background: $backgroundColor;
        color: $textColor;
        border-right: $textColor solid 1px;
        position: relative;
        /*left: 0;
        top: 0;*/
        overflow: hidden;
        -webkit-transition: .5s ease-in-out;
        -moz-transition: .5s ease-in-out;
        -o-transition: .5s ease-in-out;
        transition:  .5s ease-in-out;
        section{
            border-bottom: $textColor solid 1px;
            padding-bottom: 2vw;
            height: fit-content;
            .wrapperTop{
                display: flex;
                width: var(--businessDisplayMargin);
                padding-left: 1vw;
                margin-top: 1vw;
                align-items: center;
                .logo{
                    width: 100px;
                    background: $backgroundColor;
                    height: fit-content;
                }
                .hamburgerIcon{
                    margin-left: 50px;
                }
            }
            ul{
                list-style: none;
                margin: 0;
                padding: 0;
                transition: 0.3s;
                li{
                    margin-top: 1vw;
                    padding-left: 1vw;
                    padding-right: 1vw;
                    display: flex;
                    height: 30px;
                    align-content: center;
                    img{
                        margin-right: 25px;
                        align-self: center;
                        width: 20px;
                        height: 20px;
                        margin-left: 6px;
                        filter: invert(88%) sepia(1%) saturate(0%) hue-rotate(83deg) brightness(91%) contrast(86%);
                    }
                    a{
                        text-decoration: none;
                        color: $textColor;
                    }
                }
            }
        }
    }

    nav.closed{
        position: relative;
        width: 50px;
        margin: 0;
        height: 100vh;
        //left: 500px;
        background: $backgroundColor;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-top: 2vh;
        transition: all .5s ease-in-out;
        .wrapperTop{
            width: 50px;
            display: flex;
            align-self: stretch;
            justify-content: center;
            margin-bottom: 1vh;
            padding: 0;
            .logo{
                display: none;
            }
            .hamburgerIcon{
                margin: 0;
                padding: 0;
            }
        }
        ul{
            width: 50px;
            list-style: none;
            display: flex;
            flex-direction: column;
            align-self: stretch;
            padding: 0;

            li{
                padding: 0;
                display: flex;
                justify-content: center;
                height: 30px;
                label{
                    display: none;
                }
                img{
                    width: 20px;
                    height: 20px;
                    margin: auto;
                    filter: invert(88%) sepia(1%) saturate(0%) hue-rotate(83deg) brightness(91%) contrast(86%);
                }
            }
        }
    }
</style>
