<template>
        <template v-if="icons[props.iconName]">
            <Svg :fileName="icons[props.iconName]" folder="icons/duotune/" :svgClass="iconClass" />
        </template>
</template>

<script setup lang="ts">
import icons from "/public/media/icons/duotune/duotune.json";
import Svg from "@/Components/Elements/Images/Svg.vue";

const props = defineProps({
    iconName: {
        type: String,
        default: "",
        required: true }
    ,
    iconClass: {
        type: String,
        default: "",
        required: false
    },
});
</script>
