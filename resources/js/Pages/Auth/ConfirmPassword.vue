<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { Head, useForm } from '@inertiajs/vue3';

const form = useForm({
    password: '',
});

const submit = () => {
    form.post(route('password.confirm'), {
        onFinish: () => form.reset(),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Confirm Password" />

        <!-- Mensagem informativa -->
        <v-card class="pa-4 mb-4">
            <v-card-text class="text-sm text-gray-600">
                Esta é uma área segura do aplicativo. Por favor, confirme sua senha antes de continuar.
            </v-card-text>
        </v-card>

        <!-- Formulário de confirmação de senha -->
        <v-form @submit.prevent="submit">
            <v-card-text>
                <!-- Campo de Senha -->
                <v-text-field
                    id="password"
                    v-model="form.password"
                    label="Password"
                    type="password"
                    :error="form.errors.password"
                    :error-messages="form.errors.password"
                    required
                    autocomplete="current-password"
                    autofocus
                />
            </v-card-text>

            <!-- Botão de confirmação -->
            <v-card-actions class="d-flex justify-end mt-4">
                <v-btn
                    :loading="form.processing"
                    :disabled="form.processing"
                    type="submit"
                    color="primary"
                >
                    Confirmar
                </v-btn>
            </v-card-actions>
        </v-form>
    </GuestLayout>
</template>
