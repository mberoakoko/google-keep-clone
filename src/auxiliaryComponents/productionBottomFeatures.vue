<template>
    <div class="bottom_features">
        <div class="collection">
            <div class="button remindMe"></div>
            <div class="button collaborate"></div>
            <div class="button color"></div>
            <div class="button image"></div>
            <div class="button archive"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "productionBottomFeatures"
}
</script>

<style lang="scss" scoped>
.bottom_features {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 40px;
    padding-right: 30px;

    .collection {
        display: flex;
        align-items: center;
        height: 100%;
        width: 70%;
        justify-content: space-evenly;

        .button {
            height: 35px;
            width: 35px;
            border-radius: 50%;

            &:hover {
                background: #e9e1e1;
            }
        }

        .button.remindMe {
            background-image: url("../../src/assets/icons/reminder.svg");
            background-repeat: no-repeat;
            background-position: center;
            background-size: 15px 15px;
            filter: invert(17%) sepia(9%) saturate(10%) hue-rotate(343deg) brightness(98%) contrast(85%);

        }

        .button.collaborate {
            background-image: url("../../src/assets/icons/photo.svg");
            background-repeat: no-repeat;
            background-position: center;
            background-size: 15px 15px;
            filter: invert(17%) sepia(9%) saturate(10%) hue-rotate(343deg) brightness(98%) contrast(85%);

        }

        .button.color {
            background-image: url("../../src/assets/icons/palette.svg");
            background-repeat: no-repeat;
            background-position: center;
            background-size: 15px 15px;
            filter: invert(17%) sepia(9%) saturate(10%) hue-rotate(343deg) brightness(98%) contrast(85%);

        }

        .button.image {
            background-image: url("../../src/assets/icons/photo.svg");
            background-repeat: no-repeat;
            background-position: center;
            background-size: 15px 15px;
            filter: invert(17%) sepia(9%) saturate(10%) hue-rotate(343deg) brightness(98%) contrast(85%);

        }

        .button.archive {
            background-image: url("../../src/assets/icons/archive.svg");
            background-repeat: no-repeat;
            background-position: center;
            background-size: 15px 15px;
            filter: invert(17%) sepia(9%) saturate(10%) hue-rotate(343deg) brightness(98%) contrast(85%);

        }

    }
}
</style>
