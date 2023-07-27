

<template>
    <div>
        <div
            class="m-4"
        >
            <div ref="imagePreview" class="relative block w-40 h-40 border border-gray-300 bg-cover bg-center rounded-md ">
                <label
                    class="absolute w-6 h-6 -top-3 -right-3 p-1 bg-slate-800 text-white rounded-full shadow"

                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                    </svg>
                    <input
                        type="file"
                        ref="imageInput"
                        style="display:none"
                        accept=".png, .jpg, .jpeg"
                        @change="onImageChange"
                    />
                    <input type="hidden" name="avatar_remove" />

                </label>
                <button class="absolute w-6 h-6 -bottom-3 -right-3 p-1 bg-slate-800 text-white rounded-full shadow"
                        @click="onImageDelete"
                        v-if="showDeleteButton"
                        title="Remove Image">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                </button>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const imageInput = ref<HTMLInputElement | null>(null);
const imagePreview = ref<HTMLDivElement | null>(null);
const showDeleteButton = ref(false);

const onImageChange = (event: Event) => {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result as string;
            if( imagePreview.value && imagePreview.value) {
                (<HTMLDivElement>imagePreview.value).style.backgroundImage = `url(${result})`;
                showDeleteButton.value = true;
            }
        };
        reader.readAsDataURL(file);
    } else {
        if( imageInput.value && imagePreview.value) {
            (<HTMLDivElement>imagePreview.value).style.backgroundImage = 'none';
            showDeleteButton.value = false;
        }
    }
}

function onImageDelete() {

    if( imageInput.value && imagePreview.value) {
        (<HTMLDivElement>imagePreview.value).style.backgroundImage = 'none';
        imageInput.value = null; // Reset the file input
        showDeleteButton.value = false;
    }
}

/*
async function onSubmit(event: Event) {
    event.preventDefault();
    // Perform form submission logic
    try {

        const formData = new FormData(event.target as HTMLFormElement);

        if( imageInput.value?.files?.length) {
            const file = imageInput.value.files[0];
            formData.append('avatar', file);
        }



        const response = await axios.post('/api/submit', formData);
        // Handle the response
        if(response){
            // Handle the response from the backend
            console.log('Image uploaded successfully!');
            // You may want to update the UI or show a success message
            alert('Form submitted! Implement the file upload logic here.');
        }
    } catch (error) {
        console.error('Error uploading image:', error);
        // Handle errors
    }
}
*/
</script>
