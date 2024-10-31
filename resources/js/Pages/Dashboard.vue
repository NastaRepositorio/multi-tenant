<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';

</script>

<template>

    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h4>Dashboard</h4>
        </template>

        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>Dashboard</v-card-title>
                        <v-card-text>
                            <p>Welcome to your dashboard</p>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

    </AuthenticatedLayout>
</template>
