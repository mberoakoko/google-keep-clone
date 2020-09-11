<template>
    <div>
        <div class="slider">
            <input type="radio" name="slider" title="slide1" checked="checked" class="slider__nav"/>
            <input type="radio" name="slider" title="slide2" class="slider__nav"/>
            <input type="radio" name="slider" title="slide3" class="slider__nav"/>
            <input type="radio" name="slider" title="slide4" class="slider__nav"/>
            <div class="slider__inner">
                <div v-for="item in slider_inner" :key="item.caption" class="slider__contents">
                    <i class="slider__image fa fa-codepen"></i>
                    <SVGComponent :elem-name="item.company"></SVGComponent>
                    <h1 class="slider__caption">{{ item.company }}</h1>
                    <p class="slider__txt">{{item.caption}}</p>
                </div>
                <!--<div class="slider__contents"><i class="slider__image fa fa-newspaper-o"></i>
                    <h2 class="slider__caption">newspaper-o</h2>
                    <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        At cupiditate omnis possimus illo quos, corporis minima!</p>
                </div>
                <div class="slider__contents"><i class="slider__image fa fa-television"></i>
                    <h2 class="slider__caption">television</h2>
                    <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        At cupiditate omnis possimus illo quos, corporis minima!</p>
                </div>
                <div class="slider__contents"><i class="slider__image fa fa-diamond"></i>
                    <h2 class="slider__caption">diamond</h2>
                    <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        At cupiditate omnis possimus illo quos, corporis minima!</p>
                </div>-->
            </div>
        </div>
    </div>
</template>

<script>

import SVGComponent from "@/components/SVGComponent";
export default {
name: "MyCarousel",
    components: {SVGComponent},
    data(){
        return{
            slider_inner:[
                {
                    company: "puma",
                    caption:             "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis dolorem expedita, impedit laborum nemo nesciunt nisi obcaecati recusandae repudiandae, rerum veniam. Aliquid dolores facere fugiat id iure? Placeat, sed?",
                    slider_text: "Some More Praises",

                },{
                    company: "bmw",
                    caption: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                        "                        At cupiditate omnis possimus illo quos, corporis minima!",
                    slider_text: "Some More Praises",

                },{
                    company: "google",
                    caption: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                        "                        At cupiditate omnis possimus illo quos, corporis minima!",
                    slider_text: "Some More Praises",

                },{
                    company: "tiktok",
                    caption: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                        "                        At cupiditate omnis possimus illo quos, corporis minima!",
                    slider_text: "Some More Praises",

                },
            ]
        }
    }


}
</script>

<style lang="scss" scoped>
@import "src/scss/main";
.slider {
    font-family: $main-Font;
    height: 400px;
    width: 800px;
    position: relative;
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    background: white;
    border: 1px solid gray;
    border-radius: 3px;
    -webkit-flex-flow: row nowrap;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-box-align: end;
    -webkit-align-items: flex-end;
    -ms-flex-align: end;
    align-items: flex-end;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
}
.slider__nav {
    width: 12px;
    height: 12px;
    margin: 2rem 12px;
    border-radius: 50%;
    z-index: 10;
    outline: 6px solid #ccc;
    outline-offset: -6px;
    box-shadow: 0 0 0 0 #333, 0 0 0 0 rgba(51, 51, 51, 0);
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}
.slider__nav:checked {
    -webkit-animation: check 0.4s linear forwards;
    animation: check 0.4s linear forwards;
}
.slider__nav:checked:nth-of-type(1) ~ .slider__inner {
    left: 0%;
}
.slider__nav:checked:nth-of-type(2) ~ .slider__inner {
    left: -100%;
}
.slider__nav:checked:nth-of-type(3) ~ .slider__inner {
    left: -200%;
}
.slider__nav:checked:nth-of-type(4) ~ .slider__inner {
    left: -300%;
}
.slider__inner {
    position: absolute;
    top: 0;
    left: 0;
    width: 400%;
    height: 100%;
    -webkit-transition: left 0.4s;
    transition: left 0.4s;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-flow: row nowrap;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
}
.slider__contents {
    height: 100%;
    padding: 2rem;
    text-align: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-flex-flow: column nowrap;
    -ms-flex-flow: column nowrap;
    flex-flow: column nowrap;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
}
.slider__image {
    font-size: 2.7rem;
    color: #2196F3;
}
.slider__caption {
    font-weight: 500;
    margin: 2rem 0 1rem;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    text-transform: uppercase;
}
.slider__txt {
    color: #999;
    margin-bottom: 3rem;
    max-width: 500px;
}

@-webkit-keyframes check {
    50% {
        outline-color: #333;
        box-shadow: 0 0 0 12px #333, 0 0 0 36px rgba(51, 51, 51, 0.2);
    }
    100% {
        outline-color: #333;
        box-shadow: 0 0 0 0 #333, 0 0 0 0 rgba(51, 51, 51, 0);
    }
}

@keyframes check {
    50% {
        outline-color: #333;
        box-shadow: 0 0 0 12px #333, 0 0 0 36px rgba(51, 51, 51, 0.2);
    }
    100% {
        outline-color: #333;
        box-shadow: 0 0 0 0 #333, 0 0 0 0 rgba(51, 51, 51, 0);
    }
}
</style>
