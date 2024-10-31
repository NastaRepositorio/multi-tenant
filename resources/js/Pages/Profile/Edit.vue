<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import UpdatePasswordForm from './Partials/UpdatePasswordForm.vue';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm.vue';
import { Head, usePage } from '@inertiajs/vue3';

defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const user = usePage().props.auth.user;

</script>

<template>
    <Head title="Profile" />

    <AuthenticatedLayout>
        <template #header>
            <h4> Olá, {{ user.name }} </h4>
        </template>

        <v-container>
            <UpdateProfileInformationForm
                :must-verify-email="mustVerifyEmail"
                :status="status"
            />
                        
            <UpdatePasswordForm class="mt-4"/>
        </v-container>
        

    </AuthenticatedLayout>
</template>
