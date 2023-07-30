import { ref, computed } from "vue";

import type ThemesConfigTypes from "@/types/themes_config";
import themsConfig from "@/core/config/ThemesConfig";
import objectPath from "object-path";


const themes_config = ref<ThemesConfigTypes>(themsConfig);

/**
 * Illustrations set
 * @returns {string}
 */

export const illustrationsSet = computed(() => {
    return objectPath.get(themes_config.value, 'illustrations.set','default');
});
export const iconsStyle = computed(() => {
    return objectPath.get(themes_config.value, 'icons.style','default');
});



