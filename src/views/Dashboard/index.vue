<script setup lang="ts">
/*Call Components*/
import YearlyBreakup from '@/components/dashboard/Number Of Spots.vue';
import ProductPerformance from '@/components/dashboard/ProductPerformance.vue';
</script>
<template>
    <v-row>
        <!-- <v-col cols="12"> -->
            <v-row>
                <!-- Sales overview -->
                <v-col cols="12" lg="8">
                    <SalesOverview />
                </v-col>
                <!-- Number Of Spots / Monthly Earnings -->
                <v-col cols="12" lg="4">
                    <div class="mb-6">
                        <YearlyBreakup />
                    </div>
                    <div>
                        <MonthlyEarning />
                    </div>
                </v-col>
                <!-- Recent transaction -->
                <v-col cols="12" lg="4">
                    <RecentTransaction />
                </v-col>
                <!-- Product performence -->
                <v-col cols="12" lg="8">
                    <ProductPerformance />
                </v-col>
                <!-- Product Cards -->
                <v-col cols="12">
                    <ProductCards />
                </v-col>
            </v-row>
        <!-- </v-col> -->
        <!-- <v-col class="text-center mt-2">
            <p class="text-muted">Design and Developed by <a flat variant="text" href="#" target="_blank" class="pl-1 text-primary">Aitali Yasser & Amine Elharchi</a></p>
        </v-col> -->
    </v-row>
</template>