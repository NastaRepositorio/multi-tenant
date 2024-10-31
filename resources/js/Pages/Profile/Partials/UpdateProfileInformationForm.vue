<script setup>
import { Link, useForm, usePage } from '@inertiajs/vue3';

defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const user = usePage().props.auth.user;

const form = useForm({
    name: user.name,
    email: user.email,
});
</script>

<template>
    <v-card title="Informações do perfil" subtitle="Atualize as informações da sua conta e seu email">
        <v-form @submit.prevent="form.patch(route('profile.update'))">
            <v-card-text>
                <v-text-field v-model="form.name" label="Nome" :error="form.errors.name"
                    :error-messages="form.errors.name" required />
                <v-text-field class="mt-1" v-model="form.email" label="Email" :error="form.errors.email"
                    :error-messages="form.errors.email" required />
            </v-card-text>

            <v-card-actions>
                <v-spacer />
                <p v-if="form.recentlySuccessful" class="text-green">
                    Alterado!
                </p>
                <v-btn type="submit" :loading="form.processing" :disabled="form.processing">Atualizar Perfil</v-btn>
            </v-card-actions>
        </v-form>
    </v-card>

    <!-- <div v-if="mustVerifyEmail && user.email_verified_at === null">
                <p class="mt-2 text-sm text-gray-800">
                    Your email address is unverified.
                    <Link
                        :href="route('verification.send')"
                        method="post"
                        as="button"
                        class="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Click here to re-send the verification email.
                    </Link>
                </p>

                <div
                    v-show="status === 'verification-link-sent'"
                    class="mt-2 text-sm font-medium text-green-600"
                >
                    A new verification link has been sent to your email address.
                </div>
            </div> -->
</template>
