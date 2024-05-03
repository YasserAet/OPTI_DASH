<script setup lang="ts">
import { ref } from 'vue'

// Import components
import DefaultAuthCard from '@/components/Auths/DefaultAuthCard.vue'
import InputGroup from '@/components/Auths/InputGroup.vue'
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

// Define page title
const pageTitle = ref('Sign Up')

// Define form data
const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const profileImage = ref('')

// Handle file selection
const onFileSelected = (event: any) => {
  profileImage.value = event.target.files[0]
}

const registerAdmin = async (event: Event) => {
    event.preventDefault();

    if (password.value !== confirmPassword.value) {
        alert('Passwords do not match');
        return;
    }

    // First, upload the file
    const fileData = new FormData();
    fileData.append('profileImage', profileImage.value);

    const uploadResponse = await fetch('http://127.0.0.1:3000/upload', {
        method: 'POST',
        body: fileData
    });

    if (!uploadResponse.ok) {
        alert('File upload failed');
        return;
    }

    const uploadResult = await uploadResponse.json();

    // Then, register the admin
    const formData = new FormData();
    formData.append('name', name.value);
    formData.append('username', email.value);
    formData.append('password', password.value);
    formData.append('profileImage', uploadResult.filePath);

    const response = await fetch('http://127.0.0.1:3000/register', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: name.value,
        username: email.value,
        password: password.value,
        profileImage: uploadResult.filePath
    })
});

    if (response.ok) {
    const data = await response.json();
    const admin = data.admin;
    // Now you can use the admin data
} else {
    alert('Admin registration failed');
}
};
</script>

<template>
  <DefaultLayout>
    <!-- Breadcrumb Start -->
    <BreadcrumbDefault :pageTitle="pageTitle" />
    <!-- Breadcrumb End -->

    <DefaultAuthCard subtitle="Start for free" title="Sign Up to Optipark">
      <form @submit="registerAdmin">
        <InputGroup v-model="name" label="Name" type="text" placeholder="Enter your full name" />
        <InputGroup v-model="email" label="Email" type="email" placeholder="Enter your email" />
        <InputGroup v-model="password" label="Password" type="password" placeholder="Enter your password" />
        <InputGroup v-model="confirmPassword" label="Re-type Password" type="password" placeholder="Re-enter your password" />
        <InputGroup label="Profile Image" type="file" placeholder="Upload your profile image" @change="onFileSelected" />

        <div class="mb-5 mt-6">
          <input
            type="submit"
            value="Create account"
            class="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 font-medium text-white transition hover:bg-opacity-90"
          />
        </div>

        <button
          class="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-4 font-medium hover:bg-opacity-80 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-80"
        >
          <span>
           
          </span>
          Sign up with Google
        </button>

        <div class="mt-6 text-center">
          <p class="font-medium">
            Already have an account?
            <router-link to="/auth/signin" class="text-primary">Sign in</router-link>
          </p>
        </div>
      </form>
    </DefaultAuthCard>
  </DefaultLayout>
</template>