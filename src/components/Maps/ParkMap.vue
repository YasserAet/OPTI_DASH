<script setup lang="ts">
// @ts-ignore
import jsVectorMap from 'jsvectormap'
import '@/assets/js/parkGrid'
import { onMounted } from 'vue'

onMounted(() => {
  new jsVectorMap({
    map: 'parkGrid',
                selector: '#ParkMap',
                zoomButtons: false,

                regionStyle: {
                    initial: {
                        fill: '#C8D0D8'
                    },
                    hover: {
                        fillOpacity: 1,  fill: '#3056D3'    }    },                
            });
        });
</script>

<template>
  <div
    class="justify-content-center col-span-12 rounded-sm border border-stroke mt-10 bg-white pb-0 py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7"
  >
    <h4 class="mb-2 text-xl font-bold text-black dark:text-white">Parking layout</h4>
    <div id="ParkMap" class="ParkMap map-btn mt-8 !h-150"></div>
  </div>
</template>