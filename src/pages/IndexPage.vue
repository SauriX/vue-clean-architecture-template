<script setup lang="ts">
import { onMounted } from 'vue'
import { useGetUsers } from 'src/composables/useUsers'

const {
  users,
  loading,
  fetchUsers
} = useGetUsers()

onMounted(() => {
  fetchUsers()
})
</script>

<template>
  <q-page class="row items-center justify-evenly">
    <div>
      <p>Users</p>
      <p v-if="loading">Loading...</p>
      <ul v-else>
        <li v-for="user in users" :key="user.id">
          {{ user.id }} - {{ user.name }}
        </li>
      </ul>
    </div>
  </q-page>
</template>
