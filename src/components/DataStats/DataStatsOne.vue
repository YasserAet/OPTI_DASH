<script setup lang="ts">
import { ref } from 'vue'

const cardItems = ref([
  {
    icon: `<svg class="svg-snoweb svg-theme-light fill-primary dark:fill-white" height="100" preserveaspectratio="xMidYMid meet" viewbox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
 <rect class="svg-fill-primary" height="50.08" rx="4" width="14" x="20" y="26">
 </rect>
 <rect class="svg-fill-primary" height="50.08" rx="4" width="14" x="43" y="26">
 </rect>
 <rect class="svg-fill-primary" height="50.08" rx="4" width="14" x="66" y="26">
 </rect>
</svg>`,
    title: 'Available Spots',
    total: '62',
  },
  {
    icon: `<svg class="svg-snoweb svg-theme-light fill-primary dark:fill-white" height="100" preserveaspectratio="xMidYMid meet" viewbox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
 <path class="svg-fill-primary" d="M50,70c-15.5,0-28-5.4-28-12V70c0,6.6,12.5,12,28,12s28-5.4,28-12V58C78,64.6,65.5,70,50,70Z">
 </path>
 <path class="svg-fill-primary" d="M50,50c-15.5,0-28-5.4-28-12V50c0,6.6,12.5,12,28,12s28-5.4,28-12V38C78,44.6,65.5,50,50,50Z">
 </path>
 <ellipse class="svg-fill-primary" cx="50" cy="30" rx="28" ry="12">
 </ellipse>
</svg>`,
    title: 'Total Spots',
    total: '103',
  },
  {
    icon: `<svg class="svg-snoweb svg-theme-light fill-primary dark:fill-white" height="100" preserveaspectratio="xMidYMid meet" viewbox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
 <path class="svg-fill-primary" d="M50,82A32,32,0,1,0,18,50,32,32,0,0,0,50,82Zm4-48a4,4,0,0,0-8,0V50a3.6,3.6,0,0,0,1.2,2.8L58.5,64.2a4,4,0,0,0,5.7-5.7L54,48.3Z" fill-rule="evenodd">
 </path>
</svg>`,
    title: 'Awaiting',
    total: '4',
  },
  {
    icon: `<svg class="fill-primary dark:fill-white" height="100" preserveaspectratio="xMidYMid meet" viewbox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
 <path class="svg-fill-primary" d="M63.9,69.5A24,24,0,0,1,30.5,36.1Zm5.6-5.6L36.1,30.5A24,24,0,0,1,69.5,63.9ZM81.9,50A31.9,31.9,0,1,1,50,18.1,31.9,31.9,0,0,1,81.9,50Z" fill-rule="evenodd">
 </path>
</svg>`,
    title: 'Spots Taken',
    total: '41',
  }
])
</script>

<template>
  <!-- Card Item Start -->
  <div
    v-for="(item, index) in cardItems"
    :key="index"
    class="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark"
  >
    <div
      class="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4"
      v-html="item.icon"
    ></div>

    <div class="mt-4 flex items-end justify-between">
      <div>
        <h4 class="text-title-md font-bold text-black dark:text-white">{{ item.total }}</h4>
        <span class="text-sm font-medium">{{ item.title }}</span>
      </div>

      
    </div>
  </div>
  <!-- Card Item End -->
</template>
