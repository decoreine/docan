<template>
        <template v-if="iconsData[props.iconName]">
            <Svg :fileName="iconsData[props.iconName]" folder="icons/duotune/" :svgClass="iconClass" />
        </template>
</template>

<script setup lang="ts">
import {iconsData} from "@/core/data/duotune";
import Svg from "@/Components/Elements/Images/Svg.vue";

const props = defineProps({
    iconName: {
        type: String,
        default: "",
        required: true
    },
    iconClass: {
        type: String,
        default: "",
        required: false
    },
});
</script>
