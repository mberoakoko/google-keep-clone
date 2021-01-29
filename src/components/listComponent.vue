<template>
    <div class="container">
        <label>

            <input class="topInput" type="text" placeholder="Title" />
        </label>
        <div class="secondaryContainer">
            <ul v-show="itemAdded" >
                <li  v-for="item in toDoItems" :key="item.content">
                    <label>
                        <input type="checkbox" @click="handledCheckedItems">
                    </label>
                    <label class="payload">{{item.content}}</label>
                    <div class="button delete" @click="deleteItems">

                    </div>
                </li>
            </ul>
        </div>
        <label class="addWrapper">
            <input  type="text" id="add" placeholder="Add To do item" @keypress="addToDoItems"/>
        </label>
        <bottomfeatures ComponentType="ListType"/>
    </div>
</template>

<script>
import Bottomfeatures from "@/auxiliaryComponents/bottomfeatures";
export default {
    name: "listComponent",
    components: {Bottomfeatures},
    created() {
        // This is for debugging purposes
        window.addEventListener("keydown", (e)=>{
            if(e.key === " "){
                console.log(this.toDoItems)
            }
        })
    },
    data(){
        return{
            itemAdded: false,
            toDoItems: [],
            someEvent: null
        }
    },
    methods:{
        addToDoItems(e){
            this.itemAdded = true
            let selectedItem = document.getElementById('add');
            if(e.key === "Enter"){
                this.toDoItems.push({
                    content: selectedItem.value,
                    done: false
                })
                selectedItem.value = ''
            }
        },
        handledCheckedItems(e){
            let parentElem = e.target.parentNode.parentNode
            let childElem = parentElem.childNodes[1]
            if(e.target.checked === true){
                childElem.dataset.alt = "checked"
                this.toDoItems.forEach((item)=>{
                    if(item.content === childElem.innerHTML){
                        item.done = true
                    }
                })

            }else {
                childElem.dataset.alt = ""
            }


        },
        deleteItems(e){
            let parentElem = e.target.parentNode;
            let childElem = parentElem.childNodes[1]
            this.toDoItems.forEach((item)=>{
                if(item.content === childElem.innerHTML){
                    let index = this.toDoItems.indexOf(item)
                    this.toDoItems.splice(index, 1)
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .container{
        width: 400px;
        height: fit-content;
        display: flex;
        flex-direction: column;
        background: #eeeeee;
        padding: 5px 0 5px 10px;
        border-radius: 12px;
        border: 2px solid #d9d9d9;
        position: relative;
        .topInput{
            font-weight: 700;
        }
        .addWrapper{
            &::before{
                content: "";
                width: 380px;
                background: black;
                height: 2px;
                position: relative;
                left: -5px;
                top: 0;
                display: block;
            }
            &::after{
                content: "";
                width: 380px;
                background: black;
                height: 2px;
                position: relative;
                left: -5px;
                bottom: 5px;
                display: block;
            }
        }
        input[type='text']{
            width: 90%;
            border: none;
            padding: 5px 0 5px 5px;
            font-size: 0.9vw;
            height: 30px;
            resize: none;
            background: #eeeeee;
            &:focus{
                outline: none;
            }
        }
        input#add{
            margin-bottom: 15px;
            width: 380px;
            position: relative;

        }

        .secondaryContainer{
            width: 100%;


            ul{
                list-style: none;
                width: 100px;
                padding: 0;
                margin: 0;
                li{
                    display: flex;
                    width: 370px;
                    height: fit-content;
                    align-items: center;
                    overflow-wrap: break-word;
                    input[type='checkbox']{
                        margin-right: 30px;
                    }
                    .payload[data-alt = "checked"]{
                        text-decoration: line-through;
                    }
                    .payload{
                        overflow-wrap: break-word;
                    }
                    .button{
                        height: 35px;
                        width: 35px;
                        border-radius: 50%;
                        margin-left: auto;
                        &:hover{
                            background: #f6f4f4;
                        }
                    }
                    .button.delete{
                        background-image: url("../../src/assets/icons/trash.svg");
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: 20px 20px;
                        filter: invert(17%) sepia(9%) saturate(10%) hue-rotate(343deg) brightness(98%) contrast(85%);
                    }

                }
            }
        }
    }
</style>
