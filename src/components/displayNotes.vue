<template>
 <div class="wrapper">
     <div class="defaultNote" v-if="individualData.Type === 'DefaultNote'">
         <h3>{{individualData.Title}}</h3>
         <p>{{individualData.Content}}</p>
         <production-bottom-features></production-bottom-features>
     </div>

     <!--=========================================================
     ===================List Note Type =============================
     ===============================================================
     -->
     <div class="listNote" v-if="individualData.Type ==='ListNote'">
         <h3>{{individualData.Title}}</h3>
         <div class="completed" >
             <div class="block" v-for="item in completedData" :key="item.Content">
                 <label><input type="checkbox" @click="handleCheckedItems(individualData, item)"></label>
                 <label >{{item.content}}</label>
             </div>
         </div>
         <div class="notCompleted">
             <div class="block" v-for="item in notCompletedData" :key="item.content">
                 <label><input type="checkbox" @click="handleCheckedItems(individualData, item)"></label>
                 <label class="payload">{{item.content}}</label>
             </div>
         </div>
     </div>
     <div class="drawNote" v-if="false"></div>
 </div>
</template>

<script>
import ProductionBottomFeatures from "@/auxiliaryComponents/productionBottomFeatures";
export default {
name: "displayNotes",
    components: {ProductionBottomFeatures},
    props : {
        individualData : {
            type: Object,
            required: false,
        }
    },
    data: ()=>({
        completed: null,
        notCompleted: null,
    }),
    computed:  {
        completedData(){
            return this.individualData.Content.filter(elem => elem.done === true)
        },
        notCompletedData(){
            return this.individualData.Content.filter(elem => elem.done === false)
        }
    },
    methods: {
      handleCheckedItems(parentItem, childItem){
          /*let indexOfData = this.individualData.Content.indexOf(data)
          this.localCopy.Content[indexOfData].done = !this.localCopy.Content[indexOfData].done*/
          this.$store.commit("mutateStatusOfTaskList", {parentItem, childItem})

      }
    }
}
</script>

<style lang="scss" scoped>
.wrapper{
    display: inline-block;
    padding: 10px;
    border: 1px solid #535353;
    border-radius: 4%;
    margin-bottom: 20px;
    &:hover{
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        transform: scale(1.005);
    }
    .listNote{
        .completed{
            border-bottom: 1px solid #8f8f8f;
            padding: 5px;
            .block{
                height: 25px;
            }
        }
        .notCompleted{
            .block{
                .payload{
                    text-decoration: line-through;
                }
            }
        }
    }
}
</style>
