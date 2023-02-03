<script setup>
</script>

<template>
  <div class="wrapper">
    <div class="card">
      <h4 class="card-header">Register</h4>
      <div class="card-body">
        <Form
          @submit="onSubmit"
          :validation-schema="schema"
          v-slot="{ errors, isSubmitting }"
        >
          <div class="form-group">
            <label>First Name</label>
            <Field
              name="firstName"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors.firstName }"
            />
            <div class="invalid-feedback">{{ errors.firstName }}</div>
          </div>
          <div class="form-group">
            <label>Last Name</label>
            <Field
              name="lastName"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors.lastName }"
            />
            <div class="invalid-feedback">{{ errors.lastName }}</div>
          </div>
          <div class="form-group">
            <label>Username</label>
            <Field
              name="username"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors.username }"
            />
            <div class="invalid-feedback">{{ errors.username }}</div>
          </div>
          <div class="form-group">
            <label>Password</label>
            <Field
              name="password"
              type="password"
              class="form-control"
              :class="{ 'is-invalid': errors.password }"
            />
            <div class="invalid-feedback">{{ errors.password }}</div>
          </div>
          <div class="form-group formBtns">
            <button class="btn formBtn" :disabled="isSubmitting">
              <span
                v-show="isSubmitting"
                class="spinner-border spinner-border-sm mr-1"
              ></span>
              Register
            </button>
            <router-link to="login" class="btn formBtn cancelBtn"
              >Cancel</router-link
            >
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<style>
.cancelBtn {
  background-color: rgb(233, 30, 30);
}
</style>
