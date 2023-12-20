<!-- /pages/status.vue -->

<template>
  <div class="container">
    <h1 class="text-center mb-4">Cek Status</h1>
    <form @submit.prevent="checkStatus" class="needs-validation" novalidate>
      <div class="mb-3">
        <label for="email" class="form-label">Masukkan Emailmu:</label>
        <input type="email" class="form-control" id="email" v-model="email" required />
        <div class="invalid-feedback">
          Masukan email yang valid.
        </div>
      </div>

      <button type="submit" class="btn btn-primary w-100">Cek Status</button>
    </form>

    <div v-if="status" class="status-message mt-3">
      <h2>Status: {{ status }}</h2>
    </div>
    <button @click="goToRegistPage" class="btn btn-secondary mt-3">Daftar lagi ?</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const status = ref(null);
const router = useRouter();

const checkStatus = async () => {
  const response = await fetch(`http://localhost:3100/api/pendaftaran?email=${email.value}`);
  const result = await response.json();

  const registration = result.docs.find(doc => doc.email === email.value);

  if (registration) {
    status.value = registration.status;
  } else {
    status.value = 'Ga nemu emailnya';
  }
};

const goToRegistPage = () => {
  router.push('/');
};
</script>

<style scoped>
.container {
  font-family: 'Open Sans', sans-serif;
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

.form-control {
  border-radius: 5px;
}

.form-control:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.btn-primary {
  background-color: #0056b3;
  border-color: #0056b3;
}

.btn-primary:hover {
  background-color: #004494;
  border-color: #004494;
}

.status-message {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #e9ecef;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
}

@media (max-width: 600px) {
  .container {
    padding: 1rem;
    margin: 1rem;
  }
}
</style>
  