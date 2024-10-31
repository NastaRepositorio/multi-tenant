<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { Head, useForm } from '@inertiajs/vue3';

const props = defineProps({
    email: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
});

const form = useForm({
    token: props.token,
    email: props.email,
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('password.store'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Reset Password" />

        <!-- Formulário de redefinição de senha -->
        <v-form @submit.prevent="submit">
            <v-card-text>
                <!-- Campo de Email -->
                <v-text-field
                    id="email"
                    v-model="form.email"
                    label="Email"
                    type="email"
                    :error="form.errors.email"
                    :error-messages="form.errors.email"
                    required
                    autofocus
                    autocomplete="username"
                />

                <!-- Campo de Senha -->
                <v-text-field
                    id="password"
                    v-model="form.password"
                    label="Password"
                    type="password"
                    :error="form.errors.password"
                    :error-messages="form.errors.password"
                    required
                    autocomplete="new-password"
                    class="mt-4"
                />

                <!-- Campo de Confirmação de Senha -->
                <v-text-field
                    id="password_confirmation"
                    v-model="form.password_confirmation"
                    label="Confirm Password"
                    type="password"
                    :error="form.errors.password_confirmation"
                    :error-messages="form.errors.password_confirmation"
                    required
                    autocomplete="new-password"
                    class="mt-4"
                />
            </v-card-text>

            <!-- Botão de redefinir senha -->
            <v-card-actions class="d-flex justify-end mt-4">
                <v-btn
                    :loading="form.processing"
                    :disabled="form.processing"
                    type="submit"
                    color="primary"
                >
                    Reset Password
                </v-btn>
            </v-card-actions>
        </v-form>
    </GuestLayout>
</template>
