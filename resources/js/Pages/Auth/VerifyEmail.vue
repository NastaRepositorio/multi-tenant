<script setup>
import { computed } from 'vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

const props = defineProps({
    status: {
        type: String,
    },
});

const form = useForm({});

const submit = () => {
    form.post(route('verification.send'));
};

const verificationLinkSent = computed(() => props.status === 'verification-link-sent');
</script>

<template>
    <GuestLayout>
        <Head title="Email Verification" />

        <!-- Mensagem inicial de agradecimento -->
        <v-card class="pa-4 mb-4">
            <v-card-text class="text-sm text-gray-600">
                Obrigado por se inscrever! Antes de começar, você poderia verificar seu endereço de email clicando no link que enviamos? Se você não recebeu o email, teremos o prazer de enviar outro.
            </v-card-text>
        </v-card>

        <!-- Mensagem de link de verificação enviado -->
        <v-alert
            v-if="verificationLinkSent"
            type="success"
            class="mb-4 text-sm font-medium"
        >
            Um novo link de verificação foi enviado para o endereço de email que você forneceu durante o registro.
        </v-alert>

        <v-form @submit.prevent="submit">
            <v-card-actions class="d-flex justify-between align-center">
                <!-- Botão de reenviar verificação -->
                <v-btn
                    :loading="form.processing"
                    :disabled="form.processing"
                    type="submit"
                    color="primary"
                >
                    Reenviar email de verificação
                </v-btn>

                <!-- Link para logout -->
                <v-btn
                    text
                    :href="route('logout')"
                    method="post"
                    as="button"
                    class="text-sm text-gray-600"
                >
                    Sair
                </v-btn>
            </v-card-actions>
        </v-form>
    </GuestLayout>
</template>
