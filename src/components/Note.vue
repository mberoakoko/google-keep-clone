<template>
    <div class="wrapper">
       <default-note v-if="defaultNoteValue" v-on:list-clicked="listButtonClicked"></default-note>
        <ListComponent v-if="listNoteValue" />
       <draw-note v-if="drawStateValue"></draw-note>
    </div>
</template>

<script>

import ListComponent from "@/components/listComponent";
import DefaultNote from "@/components/defaultNote";
import DrawNote from "@/components/drawNote";
export default {
name: "Note",
    components: {ListComponent, DefaultNote, DrawNote},
    data(){
        return{
            selected: true,
            listShow: false,
            drawNoteShow: false
     }
    },
    methods:{
        handleSelected(){
            this.selected = !this.selected
        },
        listButtonClicked(){
            this.selected = false
            this.listShow = true
        }
    },
    computed:{
        defaultNoteValue(){
            return this.$store.getters.getDefaultState
        },
        listNoteValue(){
            return this.$store.getters.getListState
        },
        drawStateValue(){
            return this.$store.getters.getDrawState
        }
    }
}
</script>
<style lang="scss" scoped>
@import "src/scss/main";
.wrapper{
    width: 80vw;
    min-height: 200px;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
}
</style>
