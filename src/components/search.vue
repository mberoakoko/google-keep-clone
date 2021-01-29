<template>
    <div class="search">
        <label>
            <input placeholder="Search..."/>
        </label>

    </div>
</template>

<script>
export default {
    name: "search",
    data(){
        return{
            my_data: 'lol'
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "src/scss/main";
    .search{
        width: 500px;
        input{
            width: 200px;
            border: none;
            border-radius: 8px;
            font-size: 1.6vh;
            background-color: #e8e8ea;
            background-image: url("../../src/assets/icons/search.svg");
            background-size: 20px 20px;
            background-position: 10px 10px;
            background-repeat: no-repeat;
            padding: 12px 20px 12px 40px;
            transition: width 0.4s ease-in-out;
            &:focus{
                width: 300px;
                outline: none;
                box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
            }
        }

    }
</style>
