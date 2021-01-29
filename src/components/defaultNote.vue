
<template>
    <div class="wrapper">
        <div class="container">
            <div class="action" v-if="clicked">
                <label>
                    <input id="titlePayload" v-model="titleData"
                           type="text" placeholder="Title"
                           style="
                                font-weight: 700;
                                font-size: 20px; padding-bottom:
                                 10px;margin-bottom: 10px">
                </label>
                <label class="textarea" id="textPayload">
                    <textarea v-model="textAreaData" placeholder="Content" style="width: 100%; height: 100%" ></textarea>
                </label>
                <div class="bottom_features">
                    <div class="collection">
                        <div class="button remindMe"></div>
                        <div class="button collaborate"></div>
                        <div class="button color"></div>
                        <div class="button image"></div>
                        <div class="button archive"></div>
                    </div>
                    <button @click.self="onClicked('childElem')">Close</button>
                </div>
            </div>
            <div class="interactive" v-if="!clicked" @click.self="onClicked('parentElem')">
                <label>
                    <textarea placeholder="Take a Note..." @click.self="onClicked('parentElem')"></textarea>
                </label>
                <div class="options">
                    <div class="button list" @click="listButtonClicked"></div>
                    <div class="button draw" @click="drawButtonClicked"></div>
                    <div class="button image" ></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {DefaultNoteInterface} from "@/auxiliaryComponents/NoteObject"
export default {
name: "defaultNote",
    data(){
        return{
            clicked: false,
            textAreaData: "Take a note",
            titleData: "Content"
        }
    },
    computed:{

    },
    methods:{
        onClicked(element){
            if(element === "parentElem"){
                this.clicked = !this.clicked
            }else if (element === "childElem"){
                this.clicked = !this.clicked
                //console.log(this.textAreaData)
                this.pushNewDefaultNote()
            }



        },
        text_1(event){
            event.stopPropagation()
            console.log("The parent has been clicked")
        },
        listButtonClicked(){
            this.$store.commit('morphTest')
        },
        drawButtonClicked(){
            this.$store.commit('morphNoteAndDraw')
        },
        closeComponent(){
            this.$store.commit('undoMorphTest')
        },
        /* eslint-disable */
        pushNewDefaultNote(){
            let payload = new DefaultNoteInterface({
                pinned: false,
                title: this.titleData,
                content: this.textAreaData
            })
            //this.$store.commit("pushNewDefaultNote", payload)
            console.log(payload.convertToData())
        }
        /* eslint-enable */
    }
}
</script>


<style lang="scss" scoped>
@import "src/scss/main";
.wrapper{
    textarea, input{
        border: none;
        padding: 5px 0 5px 5px;
        font-size: 0.8vw;
        height: 30px;
        resize: none;
        &:focus{
            outline: none;
        }
    }
    .container{
        display: flex;
        flex-direction: column;
        width: 500px;
        min-height: 50px;
        height: fit-content;
        border: 1px solid #070822;
        border-radius: 15px;
        padding: 10px 0 5px 10px;
        -webkit-box-shadow: 0 0 13px -1px rgba(0,0,0,0.75);
        -moz-box-shadow: 0 0 13px -1px rgba(0,0,0,0.75);
        box-shadow: 0 0 13px -1px rgba(0,0,0,0.75);
        textarea, input{
            border: none;
            padding: 5px 0 5px 5px;
            font-size: 0.8vw;
            height: 30px;
            resize: none;
            &:focus{
                outline: none;
            }
        }
        .interactive{
            .options{
                float: right;
                width: 200px;
                height: 50px;
                position: relative;
                top: -10px;
                display: flex;
                align-items: center;
                justify-content: space-evenly;
                .button{
                    height: 50px;
                    width: 50px;
                    border-radius: 50%;
                    &:hover{
                        background: #e9e1e1;
                    }
                }
                .button.list{
                    background-image: url("../../src/assets/icons/list.svg");
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: 25px 25px;
                    filter: invert(17%) sepia(9%) saturate(10%) hue-rotate(343deg) brightness(98%) contrast(85%);
                }
                .button.draw{
                    background-image: url("../../src/assets/icons/drawing.svg");
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: 25px 25px;
                    filter: invert(17%) sepia(9%) saturate(10%) hue-rotate(343deg) brightness(98%) contrast(85%);
                }
                .button.image{
                    background-image: url("../../src/assets/icons/photo.svg");
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: 25px 25px;
                    filter: invert(17%) sepia(9%) saturate(10%) hue-rotate(343deg) brightness(98%) contrast(85%);
                }
            }
        }
        .action{
            min-height: 200px;
            height: fit-content;
            display: flex;
            flex-direction: column;
            label.textarea{
                height: 200px;
            }
            .bottom_features{
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                height: 50px;
                padding-right: 30px;
                .collection{
                    display: flex;
                    align-items: center;
                    height: 100%;
                    width: 70%;
                    justify-content: space-evenly;

                    .button{
                        height: 35px;
                        width: 35px;
                        border-radius: 50%;
                        &:hover{
                            background: #e9e1e1;
                        }
                    }
                    .button.remindMe{
                        background-image: url("../../src/assets/icons/reminder.svg");
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: 20px 20px;
                        filter: invert(17%) sepia(9%) saturate(10%) hue-rotate(343deg) brightness(98%) contrast(85%);

                    }
                    .button.collaborate{
                        background-image: url("../../src/assets/icons/photo.svg");
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: 20px 20px;
                        filter: invert(17%) sepia(9%) saturate(10%) hue-rotate(343deg) brightness(98%) contrast(85%);

                    }
                    .button.color{
                        background-image: url("../../src/assets/icons/palette.svg");
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: 20px 20px;
                        filter: invert(17%) sepia(9%) saturate(10%) hue-rotate(343deg) brightness(98%) contrast(85%);

                    }
                    .button.image{
                        background-image: url("../../src/assets/icons/photo.svg");
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: 20px 20px;
                        filter: invert(17%) sepia(9%) saturate(10%) hue-rotate(343deg) brightness(98%) contrast(85%);

                    }
                    .button.archive{
                        background-image: url("../../src/assets/icons/archive.svg");
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: 20px 20px;
                        filter: invert(17%) sepia(9%) saturate(10%) hue-rotate(343deg) brightness(98%) contrast(85%);

                    }

                }
                button{
                    border: none;
                    height: 40px;
                    width: 75px;
                    font-size: 0.8vw;
                    font-family: $main-Font;
                    letter-spacing: 1px;
                }

            }

        }
    }
}

</style>
