<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { Head, useForm } from '@inertiajs/vue3';

defineProps({
    status: {
        type: String,
    },
});

const form = useForm({
    email: '',
});

const submit = () => {
    form.post(route('password.email'));
};
</script>

<template>
    <GuestLayout>
        <Head title="Forgot Password" />

        <!-- Mensagem explicativa -->
        <v-card class="pa-4 mb-4">
            <v-card-text class="text-sm text-gray-600">
                Esqueceu sua senha? Sem problemas. Apenas nos informe seu endereço de email, e enviaremos um link para redefinir sua senha.
            </v-card-text>
        </v-card>

        <!-- Status de envio do link de redefinição -->
        <v-alert
            v-if="status"
            type="success"
            class="mb-4 text-sm font-medium"
        >
            {{ status }}
        </v-alert>

        <!-- Formulário de envio de link de redefinição -->
        <v-form @submit.prevent="submit">
            <v-card-text>
                <!-- Email -->
                <v-text-field
                    v-model="form.email"
                    label="Email"
                    type="email"
                    :error="form.errors.email"
                    :error-messages="form.errors.email"
                    required
                    autofocus
                    autocomplete="username"
                />

                <!-- Ações -->
                <v-card-actions class="mt-4 d-flex justify-end">
                    <v-btn
                        :loading="form.processing"
                        :disabled="form.processing"
                        type="submit"
                        color="primary"
                    >
                        Enviar link de redefinição de senha
                    </v-btn>
                </v-card-actions>
            </v-card-text>
        </v-form>
    </GuestLayout>
</template>
