<template>
    <div>
        <svg :class=svgClass   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <template v-for="(pathData, index) in svgPaths" :key="index">
                <path :opacity="pathData.opacity" :d="pathData.path" fill="currentColor"/>
            </template>
        </svg>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted} from 'vue';

//const props = defineProps(['fileName', 'folder', 'class']);
const props = defineProps({
    fileName : String,
    folder : String,
    svgClass :  {
        type: String,
        default: "w-[24px] h-[24px]" , // Default value for 'w' prop if not provided
    }
});
interface SvgPathData {
    path: string;
    opacity: string;
}

const svgPaths = ref<SvgPathData[]>([]);

const fetchSVG = async () => {
    try {
        const response = await fetch(`/media/${props.folder}/${props.fileName}.svg`);
        if (!response.ok) {
            throw new Error('SVG not found.');
        }
        const svgContent = await response.text();

        // Parse the SVG content to extract the paths and opacities
        const parser = new DOMParser();
        const doc = parser.parseFromString(svgContent, 'image/svg+xml');
        const paths = doc.querySelectorAll('path');

        // Extract the path data and opacity from each path element
        const extractedPaths = Array.from(paths).map((path) => {
            const pathData: SvgPathData = {
                path: path.getAttribute('d') || '',
                opacity: path.getAttribute('opacity') || '1', // Default opacity is 1 if not specified
            };
            return pathData;
        });

        svgPaths.value = extractedPaths;
    } catch (error) {
        console.error('Error loading SVG:', error);
    }
};

onMounted(() => {
    fetchSVG();
});
</script>
