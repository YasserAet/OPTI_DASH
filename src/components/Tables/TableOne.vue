<script setup lang="ts">
import { ref } from 'vue'

import lotOne from '@/assets/images/brand/profile.jpg'
import lotTwo from '@/assets/images/brand/profile.jpg'
import lotThree from '@/assets/images/brand/profile.jpg'
import lotFour from '@/assets/images/brand/profile.jpg'
import lotFive from '@/assets/images/brand/profile.jpg'
import { fa } from 'vuetify/locale'

const lotData = ref([
  {
    logo: lotOne,
    name: 'MEDINA',
    cliendid: '45_500',
    otime: '1h20m',
    renewed: false,
  },
  {
    logo: lotTwo,
    name: 'CARREFOUR',
    cliendid: 'E47_120',
    otime: '0h20m',
    renewed: false,
  },
  {
    logo: lotThree,
    name: 'MENARAMALL',
    cliendid: 'J72_440',
    otime: '1h10m',
    renewed: true,
  },
  {
    logo: lotFour,
    name: 'GUELIZ',
    cliendid: 'F15_501',
    otime: '2h30m',
    renewed: false,
  },
  {
    logo: lotFive,
    name: 'MARJANE',
    cliendid: 'E50_101',
    otime: '1h30m',
    renewed: true,
  }
])
</script>

<template>
  <div
    class="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1"
  >
    <h4 class="mb-6 text-xl font-semibold text-black dark:text-white">Recent Parklots</h4>

    <div class="flex flex-col">
      <div class="grid grid-cols-4 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
        <div class="p-2.5 xl:p-5">
          <h5 class="text-sm font-medium uppercase xsm:text-base">Lot ID</h5>
        </div>
        <div class="p-2.5 text-center xl:p-5">
          <h5 class="text-sm font-medium uppercase xsm:text-base">Client ID</h5>
        </div>
        <div class="p-2.5 text-center xl:p-5">
          <h5 class="text-sm font-medium uppercase xsm:text-base">Occupation time</h5>
        </div>
        <div class="hidden p-2.5 text-center sm:block xl:p-5">
          <h5 class="text-sm font-medium uppercase xsm:text-base">Renewed</h5>
        </div>
        
      </div>

      <div
        v-for="(lot, key) in lotData"
        :key="key"
        :class="`grid grid-cols-4 sm:grid-cols- ${
          key === lotData.length - 1 ? '' : 'border-b border-stroke dark:border-strokedark'
        }`"
      >
        <div class="flex items-center gap-3 p-2.5 xl:p-5">
          <div class="flex-shrink-0">
            <img :src="lot.logo" alt="lot" style="width:50px;height: 50px;"/>
          </div>
          <p class="hidden text-black dark:text-white sm:block">{{ lot.name }}</p>
        </div>

        <div class="flex items-center justify-center p-2.5 xl:p-5">
          <p class="text-black dark:text-white">{{ lot.cliendid }}</p>
        </div>

        <div class="flex items-center justify-center p-2.5 xl:p-5">
          <p class="text-meta-3">{{ lot.otime }}</p>
        </div>
        
        <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
          <p class="text-black dark:text-white">{{ lot.renewed }}</p>
        </div>       
      </div>
    </div>
  </div>
</template>