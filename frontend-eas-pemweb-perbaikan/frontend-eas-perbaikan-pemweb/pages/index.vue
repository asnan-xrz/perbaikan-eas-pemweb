<!-- FormPendaftaran.vue -->

<template>
  <div class="container mt-5">
    <h1 class="mb-4">Form Pendaftaran</h1>
    <form @submit.prevent="submitForm" class="needs-validation" novalidate>
      <div class="mb-3">
        <label for="name" class="form-label">Nama:</label>
        <input type="text" class="form-control" id="name" v-model="formData.name" required />
        <div class="invalid-feedback">
          Masukkan Namamu.
        </div>
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">Email:</label>
        <input type="email" class="form-control" id="email" v-model="formData.email" required />
        <div class="invalid-feedback">
          Masukkan Email.
        </div>
      </div>

      <div class="mb-4">
        <label for="asalSekolah" class="form-label">Asal Sekolah:</label>
        <input type="text" class="form-control" id="asalSekolah" v-model="formData.asalSekolah" required />
        <div class="invalid-feedback">
          Masukkan nama sekolahmu.
        </div>
      </div>
      
      <div class="mb-4">
        <label for="tanggalPendaftaran" class="form-label">Tanggal Pendaftaran:</label>
        <input type="datetime-local" class="form-control" id="tanggalPendaftaran" v-model="formData.tanggalPendaftaran" required />
        <!-- <div class="invalid-feedback">
          Masukkan nama sekolahmu.
        </div> -->
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <button @click="goToStatusPage" class="btn btn-secondary mt-3">Cek Status</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const formData = ref({
  name: '',
  email: '',
  asalSekolah: '',
  tanggalPendaftaran: '',
  
});
const router = useRouter();

const submitForm = async () => {
  const response = await fetch('http://localhost:3100/api/pendaftaran', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData.value),
  });

  const result = await response.json();
  console.log(result);

  if (response.ok) {
    alert('pendaftaran berhasil!');
    formData.value = {
      name: '',
      email: '',
      asalSekolah: '',
      tanggalPendaftaran: '',
    };
  } else {
    alert('Pendaftaran Gagal. Coba lagi.');
  }
};

const goToStatusPage = () => {
  router.push('/status');
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

@media (max-width: 600px) {
  .container {
    padding: 1rem;
    margin: 1rem;
  }
}
</style>
