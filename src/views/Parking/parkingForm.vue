<script setup lang="ts">
import { ref } from 'vue';
import InputGroup from '@/components/Auths/InputGroup.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const parking = ref({
  name: '',
  size: '',
  location: '',
});

const submitForm = async () => {
  const response = await fetch('http://localhost:3000/parking', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(parking.value)
  });

  if (response.ok) {
    const data = await response.json();
    console.log(data);
  } else {
    console.error('Error:', response.status, response.statusText);
  }
};
</script>
<template>
    <DefaultLayout>
    <form @submit.prevent="submitForm">
      <InputGroup label="Parking Name" type="text" placeholder="Enter parking name" v-model="parking.name" />
      <InputGroup label="Parking Size" type="number" placeholder="Enter parking size" v-model="parking.size" />
      <InputGroup label="Parking Location" type="text" placeholder="Enter parking location" v-model="parking.location" />
      <button type="submit">Submit</button>
    </form>
    </DefaultLayout>
  </template>
  
