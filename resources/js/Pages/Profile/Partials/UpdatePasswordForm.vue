<script setup>
import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';

const passwordInput = ref(null);
const currentPasswordInput = ref(null);

const form = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
});

const updatePassword = () => {
    form.put(route('password.update'), {
        preserveScroll: true,
        onSuccess: () => form.reset(),
        onError: () => {
            if (form.errors.password) {
                form.reset('password', 'password_confirmation');
                passwordInput.value.focus();
            }
            if (form.errors.current_password) {
                form.reset('current_password');
                currentPasswordInput.value.focus();
            }
        },
    });
};
</script>

<template>
        <v-card title="Atualizar senha" subtitle="Mantenha sua conta protegida com uma senha segura">
            <v-form @submit.prevent="updatePassword">
                <v-card-text>
                    <!-- Campo de Senha Atual -->
                    <v-text-field
                        v-model="form.current_password"
                        label="Senha atual"
                        type="password"
                        :error-messages="form.errors.current_password"
                    />

                    <!-- Campo de Nova Senha -->
                    <v-text-field
                        v-model="form.password"
                        label="Nova senha"
                        type="password"
                        :error-messages="form.errors.password"
                    />

                    <!-- Campo de Confirmação de Senha -->
                    <v-text-field
                        v-model="form.password_confirmation"
                        label="Confirme sua senha"
                        type="password"
                        :error-messages="form.errors.password_confirmation"
                    />
                </v-card-text>

                <v-card-actions>
                    <v-spacer />
                    <p v-if="form.recentlySuccessful" class="text-green">
                        Alterado!
                    </p>
                    <v-btn type="submit" :loading="form.processing" :disabled="form.processing">
                        Atualizar senha
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
</template>
