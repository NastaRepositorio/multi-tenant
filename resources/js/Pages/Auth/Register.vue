<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { Head, useForm } from '@inertiajs/vue3';

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Register" />

        <v-card subtitle="Criar Conta">
            <template v-slot:title>
                <span class="font-weight-black">Registrar-se</span>
            </template>

            <v-form @submit.prevent="submit">
                <v-card-text>
                    <!-- Nome -->
                    <v-text-field
                        v-model="form.name"
                        label="Nome"
                        :error="form.errors.name"
                        :error-messages="form.errors.name"
                        required
                        autofocus
                    />

                    <!-- Email -->
                    <v-text-field
                        class="mt-4"
                        v-model="form.email"
                        label="Email"
                        type="email"
                        :error="form.errors.email"
                        :error-messages="form.errors.email"
                        required
                        autocomplete="username"
                    />

                    <!-- Senha -->
                    <v-text-field
                        class="mt-4"
                        v-model="form.password"
                        label="Senha"
                        type="password"
                        :error="form.errors.password"
                        :error-messages="form.errors.password"
                        required
                        autocomplete="new-password"
                    />

                    <!-- Confirmação de Senha -->
                    <v-text-field
                        class="mt-4"
                        v-model="form.password_confirmation"
                        label="Confirmar Senha"
                        type="password"
                        :error="form.errors.password_confirmation"
                        :error-messages="form.errors.password_confirmation"
                        required
                        autocomplete="new-password"
                    />
                </v-card-text>

                <!-- Ações -->
                <v-card-actions class="mt-4 d-flex justify-end align-center">
                    <v-btn
                        :href="route('login')"
                        variant="plain"
                        class="text-gray-600"
                    >
                        Já registrado?
                    </v-btn>
                    <v-btn
                        class="ms-4"
                        :disabled="form.processing"
                        type="submit"
                    >
                        Registrar
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </GuestLayout>
</template>
