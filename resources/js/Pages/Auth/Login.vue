<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { Head, useForm } from '@inertiajs/vue3';

defineProps({
    canResetPassword: {
        type: Boolean,
    }
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <GuestLayout>

        <Head title="Fazer Login" />

        <v-card subtitle="Bem vindo de volta">
            <template v-slot:title>
                <span class="font-weight-black">Fazer Login</span>
            </template>
            <v-form @submit.prevent="submit">
                <v-card-text>
                    <v-text-field
                        v-model="form.email"
                        label="Email"
                        :error="form.errors.email"
                        :error-messages="form.errors.email"
                        required
                    />
                    <v-text-field
                        class="mt-1"
                        v-model="form.password"
                        label="Senha"
                        type="password"
                        :error="form.errors.password"
                        :error-messages="form.errors.password"
                        required
                    />
                    <v-checkbox
                        label="Manter Login"
                        v-model="form.remember"
                    />

                </v-card-text>
                
                <v-card-actions>
                    <v-spacer />
                    <v-btn
                        v-if="canResetPassword"
                        :href="route('password.request')"
                        variant="plain"
                    >
                            Esqueceu sua senha?
                    </v-btn>
                    
                    <v-btn type="submit">Fazer Login</v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </GuestLayout>
</template>
