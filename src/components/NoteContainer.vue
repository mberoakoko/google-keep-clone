<template>
    <div class="masonryWrapper" @click="debugApp">
        <div class="masonryHolder">
            <display-notes
                v-for="(item, key) in getAppData"
                :key="key" :individual-data="item"></display-notes>
        </div>
    </div>
</template>

<script>
import DisplayNotes from "@/components/displayNotes";
export default {
    name: "NoteContainer",
   components: {DisplayNotes},
    data : ()=>({
        //placeHolderData : JSON.parse(window.sessionStorage.getItem("TemporaryStorage"))
    }),

    methods: {
        debugApp(){
            /*console.log( typeof this.placeHolderData)
            this.placeHolderData.forEach(elem => {console.log(elem)})*/

        }
    },
    computed: {
        getAppData(){
            return this.$store.getters.getAppData
        }
    }
}
</script>

<style lang="scss" scoped>
    .masonryWrapper{
        width: 100%;
        height: 1000px;
        padding: 50px 20px 20px 20px;

        .masonryHolder{
            column-count: 4;
            column-gap: 20px;
        }
    }
</style>
