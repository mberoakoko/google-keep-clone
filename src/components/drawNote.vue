<template>
    <div class="canvasWrapper">
        <div class="toolbox">
            <div class="button Back" @click="closeDrawComponent"></div>
            <div class="secondaryToolkit">
                <toolkit-module icon-type="eraser" v-on:erase-clicked="clearCanvas"></toolkit-module>
                <toolkit-module icon-type="pencil"
                                v-on:color-clicked="changeStrokeColor"
                                v-on:pencil-clicked="changeLineWidth"></toolkit-module>
                <toolkit-module icon-type="marker"
                                v-on:color-clicked="changeStrokeColor"
                                v-on:pencil-clicked="changeLineWidth"></toolkit-module>
                <toolkit-module icon-type="grid"></toolkit-module>
            </div>
            <div class="helperActions">
                <div class="helperButton undo"></div>
                <div class="helperButton redo"></div>
                <div class="helperButton fullscreen "></div>
                <div class="helperButton more" @click="showOptions = !showOptions">
                    <div class="options" v-show="showOptions">
                        <label>New drawing</label>
                        <label>Export Drawing</label>
                        <label>Delete CurrentDrawing</label>
                    </div>
                </div>
            </div>
        </div>
        <canvas id="myCanvas"
                width="800"
                height="500"
                @click="click"
                @mousedown="mouseDown"
                @mousemove="mouseMove"
                @mouseleave="mouseLeave"
                @mouseup="mouseUo"></canvas>

    </div>
</template>

<script>
import ToolkitModule from "@/auxiliaryComponents/toolkitModule";

export default {
name: "drawNote",
    components: {ToolkitModule},
    data(){
        return{
            mousePressed: false,
            lastX : null,
            lastY : null,
            strokeColor: "black",
            lineWidth: 2,
            lineJoin: "round",
            showOptions: false
        }
    },
    mounted() {
        this.canvas = document.getElementById("myCanvas")
        this.vueCanvas = this.canvas.getContext("2d")

    },
    methods: {
        mouseDown(e){
            this.mousePressed = true
            this.drawLine(e.pageX - this.canvas.offsetLeft, e.pageY- this.canvas.offsetTop, false)
        },
        mouseMove(e){
            if(this.mousePressed){
               // console.log((this.canvas.offsetLeft ), (this.canvas.offsetTop) )
                this.drawLine(e.pageX - this.canvas.offsetLeft , e.pageY- this.canvas.offsetTop, true)
            }
        },
        mouseUo(){
            this.mousePressed = false
        },
        mouseLeave(){
            this.mousePressed = false
        },
        click(){
            this.$store.commit('increment')
            console.log(this.$store.state.count)
            this.$store.commit('closeToolkitDropdown')
        },
        drawLine(x, y, isDown){
            if(isDown){
                //console.log(`We have X=>${x} and y=>${y}`)
                let ctx = this.vueCanvas
                ctx.beginPath()
                ctx.strokeStyle = this.strokeColor
                ctx.lineWidth = this.lineWidth;
                ctx.lineJoin = this.lineJoin
                ctx.moveTo(this.lastX, this.lastY)
                ctx.lineTo(x, y)
                ctx.closePath()
                ctx.stroke();
                //console.log(`We have Last X=>${this.lastX} and Last y=>${this.lastY}`)

            }
            this.lastY = y;
            this.lastX = x;
        },
        clearCanvas(){
            console.log("Click is working")
            this.vueCanvas.setTransform(1, 0, 0, 1, 0, 0);
            this.vueCanvas.clearRect(0, 0, this.vueCanvas.canvas.width, this.vueCanvas.canvas.height);
        },
        changeStrokeColor(color){
            this.strokeColor = color
        },
        changeLineWidth(number){
            this.lineWidth = number
        },
        closeDrawComponent(){
            this.$store.commit("undoMorphNoteAndDraw")
        }
    },
    computed(){

    }
}
</script>

<style lang="scss" scoped>
    @import "src/scss/main";
    .canvasWrapper{
        width: 800px;
        height: fit-content;
        border: 1px solid black;
        border-radius: 20px;
        .toolbox{
            width: 100%;
            height: 56px;
            border-top-right-radius: 20px;
            border-top-left-radius:  20px;
            border-bottom: 1px solid black;
            display: flex;
            align-items: center;
            -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
            -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
            -o-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

            .button{
                width: 38px;
                height: 40px;
                border-radius: 50%;
                margin-left: 15px;
                &:hover{
                    background: #e9e1e1;
                }
            }
            .button.Back{
                background-image: url("../../src/assets/icons/backarrow.svg");
                background-position: center;
                background-repeat: no-repeat;
                background-size: 25px 25px;
            }
            .secondaryToolkit{
                width: 280px;
                height: fit-content;
                display: flex;
                flex-direction: row;
                padding: 0;
                margin-left: 20px;
                justify-content: space-evenly;
            }
            .helperActions{
                height: 56px;
                width: calc(300px);
                margin-left: auto;
                margin-right: 10px;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                .helperButton{
                    height: 40px;
                    width: 40px;
                    position: relative;
                    &:hover{
                        border: 1px solid lightslategray;
                        background: #d6dcde;
                    }

                }
                .helperButton.undo{
                    background-image: url("../../src/assets/icons/undo.svg");
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: 25px 25px;
                    cursor: no-drop;
                }
                .helperButton.redo{
                    background-image: url("../../src/assets/icons/redo.svg");
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: 25px 25px;
                    cursor: no-drop;
                }
                .helperButton.fullscreen{
                    background-image: url("../../src/assets/icons/switch-to-full-screen-button.svg");
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: 25px 25px;
                    cursor: no-drop;
                }
                .helperButton.more{
                    background-image: url("../../src/assets/icons/more.svg");
                    background-position: center;
                    background-repeat: no-repeat;
                    position: relative;
                    background-size: 25px 25px;
                    .options{
                        width: 200px;
                        height: fit-content;
                        background-color: white;
                        position: absolute;
                        left: -50px;
                        bottom: -85px;

                        border: 1px solid lightslategray;
                        label{
                            width: 100%;
                            display: flex;
                            padding-top: 5px;
                            justify-content: center;
                            height: 25px;
                            &:nth-child(3){
                                margin-bottom: 5px;
                            }
                            &:hover{
                                background: #d6dcde;
                            }
                        }
                    }
                }

            }

        }
        #myCanvas{
            cursor: pointer;
            height: 500px;
            width: 800px;
        }
    }

</style>
