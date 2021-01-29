<template>
 <div class="wrapperIcon" v-if="iconType === 'eraser'" @click="eraserClicked">
     <div class="tool">

         <svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              :width="width" :height="width" viewBox="0 0 360 360" style="enable-background:new 0 0 360 360;" xml:space="preserve">
<g>
	<g>
		<path d="M348.994,102.946L250.04,3.993c-5.323-5.323-13.954-5.324-19.277,0l-153.7,153.701l118.23,118.23l153.701-153.7
			C354.317,116.902,354.317,108.271,348.994,102.946z"/>
        <path d="M52.646,182.11l-41.64,41.64c-5.324,5.322-5.324,13.953,0,19.275l98.954,98.957c5.323,5.322,13.954,5.32,19.277,0
			l41.639-41.641L52.646,182.11z"/>
        <polygon points="150.133,360 341.767,360 341.767,331.949 182.806,331.949 		"/>
	</g>
</g>
             <g>
</g>
             <g>
</g>
             <g>
</g>
             <g>
</g>
             <g>
</g>
             <g>
</g>
             <g>
</g>
             <g>
</g>
             <g>
</g>
             <g>
</g>
             <g>
</g>
             <g>
</g>
             <g>
</g>
             <g>
</g>
             <g>
</g>
</svg>

     </div>
     <div class="dropdown">
         <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              :width="width/2" :height="width/2" viewBox="0 0 292.362 292.362" style="enable-background:new 0 0 292.362 292.362;"
              xml:space="preserve">
<g>
	<path d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424
		C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428
		s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"/>
</g>

</svg>

     </div>
 </div>


    <div class="wrapperIcon" v-if="iconType === 'pencil'">
        <div class="tool">

            <svg  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  :width="width"
                 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                <g>
                    <g>
                        <polygon points="51.2,353.28 0,512 158.72,460.8"/>
                    </g>
                </g>

                <g>
                    <g>

                        <rect x="89.73" y="169.097" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -95.8575 260.3719)" width="353.277" height="153.599"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M504.32,79.36L432.64,7.68c-10.24-10.24-25.6-10.24-35.84,0l-23.04,23.04l107.52,107.52l23.04-23.04                                       			C514.56,104.96,514.56,89.6,504.32,79.36z"/>
                    </g>
                </g>

</svg>

        </div>
        <div class="dropdown" @click="pencilToolkitShow = !pencilToolkitShow">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 :width="width/2" :height="width/2" viewBox="0 0 292.362 292.362" style="enable-background:new 0 0 292.362 292.362;"
                 xml:space="preserve">
<g>
	<path d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424
		C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428
		s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"/>
</g>

</svg>
        </div>
        <!----=============================================
          =================PENCIL ELEMENT====================
          ===================================================---->
        <div class="toolkitOptions" v-show="pencilToolkitShow">
            <div class="color">
                <div class="individualColor"
                     v-for="color in colors" :key="color"
                     :style="{background: color}" @click="colorClicked(color)">
                </div>
            </div>
            <div class="pencilSize" >
                <div class="individualPencilSize"
                     v-for="number in pencilSize" :key="number" @click="pencilClicked(number)">
                    <div class="nestedGlyph"
                         :style="{width: `${number}px`, height:`${number}px`}">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!----=============================================
    =================MARKER ELEMENT====================
    ===================================================---->
    <div class="wrapperIcon" v-if="iconType === 'marker'">
        <div class="tool">
            <svg :height="width *1.3"
                 viewBox="0 0 64 64"
                 :width="width *1.3"
                 xmlns="http://www.w3.org/2000/svg">
                <g id="Marker">
                    <path d="m22.293 53.92h2.213l-10.426-10.426v2.213a12.9 12.9 0 0 1 -3.146 8.481l2.879 2.88a12.9 12.9 0 0 1 8.48-3.148z"/><path d="m5.354 60h5.258l1.728-1.577-2.783-2.782z"/><path d="m58.611 18.184a3 3 0 0 0 -.118-4.118l-4.559-4.559a3 3 0 0 0 -4.118-.119l-35.439 31.574 12.661 12.662z"/></g></svg>
        </div>
        <div class="dropdown" @click="markerToolkitShow = !markerToolkitShow">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 :width="width/2" :height="width/2" viewBox="0 0 292.362 292.362" style="enable-background:new 0 0 292.362 292.362;"
                 xml:space="preserve">
<g>
	<path d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424
		C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428
		s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"/>
</g>

</svg>

        </div>
        <div class="toolkitOptions" v-show="markerToolkitShow">
            <div class="color">
                <div class="individualColor"
                     v-for="color in colors" :key="color" :style="{background: color}" @click="colorClicked(color)">
                </div>
            </div>
            <div class="pencilSize" >
                <div class="individualPencilSize"
                     v-for="number in pencilSize"
                     :key="number"
                     @click="pencilClicked(number)">
                    <div class="nestedGlyph" :style="{width: `${number}px`, height:`${number}px`}">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!----=============================================
    =================Grid ELEMENT====================
    ===================================================---->
    <div class="wrapperIcon" v-if="iconType === 'grid'">
        <div class="tool">
            <svg version="1.1"
                 id="Capa_1"
                 xmlns="http://www.w3.org/2000/svg"
                 x="0px" y="0px"
                 :width="width"
                 :height="width"
                 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<g>
	<g>
		<path d="M0,0v512h512V0H0z M160.661,482H30V351.328h130.661V482z M160.661,321.328H30V190.661h130.661V321.328z M160.661,160.661
			H30V30h130.661V160.661z M321.328,482H190.661V351.328h130.667V482z M321.328,321.328H190.661V190.661h130.667V321.328z
			M321.328,160.661H190.661V30h130.667V160.661z M482,482H351.328V351.328H482V482z M482,321.328H351.328V190.661H482V321.328z
			M482,160.661H351.328V30H482V160.661z"/>
	</g>
</g>

</svg>

        </div>
            <div class="dropdown" @click="dropdownClickHandler">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     :width="width/2" :height="width/2" viewBox="0 0 292.362 292.362" style="enable-background:new 0 0 292.362 292.362;"
                     xml:space="preserve">
                    <g>
                        <path d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424 C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428 s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"/>
            </g>

                </svg>
            </div>
            <div class="gridToolkit" v-show="updateDropDown">

            </div>
    </div>





</template>

<script>


export default {
name: "toolkitModule",
    props : {
        iconType : {
            type: String,
            required: false,
            default: "eraser",
        }
    },
    created() {

    }
    ,
    data(){
        return{
            width: 20,
            pencilToolkitShow: false,
            markerToolkitShow: false,
            gridToolkitShow: this.$store.state.otherThanClicked,
            colors : ["red", "orange", "yellow", "green", "blue", "indigo", "violet"],
            pencilSize: [2, 4, 6, 8, 10, 12, 14]
        }
    },
    methods:{
        eraserClicked(){
            this.$emit('erase-clicked', true)
        },
        colorClicked(color){
            console.log(color)
            this.$emit('color-clicked', color)
        },
        pencilClicked(pencilSize){
            this.$emit('pencil-clicked', pencilSize)
        },
        dropdownClickHandler(){
            this.$store.commit('closeToolkitDropdown')
        }
    },
    computed: {
        updateDropDown(){
            return this.$store.getters.getOtherThanClicked
        }
    }

}
</script>

<style lang="scss" scoped>
$borderColor : #626262;
    .wrapperIcon{
        width: fit-content;
        height: 40px;
        display: flex;
        position: relative;
        &:hover{
            border: 1px solid $borderColor;

        }
        &:hover .dropdown{
            border-left: 1px solid $borderColor;
        }

        .tool{
            width: 38px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .dropdown{

            width: 18px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .toolkitOptions{
            height: 80px;
            width: 200px;
            position: absolute;
            border: 1px solid lightslategray;
            background: white;
            transform: translateX(-35%) translateY(50%);
            -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
            -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
            -o-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
            .color{
                height: 40px;
                width: 100%;
                overflow: hidden;
                border-bottom: 1px solid lightslategray;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-evenly;
                .individualColor{
                    height: 20px;
                    width: 20px;
                    border-radius: 50%;
                    border: 1px solid lightslategray;
                    transition: 0.5s ease-in-out;
                    &:hover{
                        transform: scale(1.1);
                        -webkit-transform: scale(1.1);
                    }
                }
            }
            .pencilSize{
                height: 40px;
                width: 100%;
                overflow: hidden;
                border-bottom: 1px solid lightslategray;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-evenly;
                .individualPencilSize{
                    height: 20px;
                    width: 20px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid lightslategray;
                    transition: 0.5s ease-in-out;
                    &:hover{
                        transform: scale(1.1);
                        -webkit-transform: scale(1.1);
                    }
                    .nestedGlyph{
                        border-radius: 50%;
                        background: black;
                    }
                }

            }

        }
        .gridToolkit{
            position: absolute;
            height: 60px;
            width: 250px;
            border: 1px solid lightslategray;
            background: white;
            transform: translateX(-35%) translateY(60%);
            -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
            -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
            -o-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        }
    }

</style>
