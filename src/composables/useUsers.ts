import { container } from 'src/config/container'
import { TYPES } from 'src/config/types'
import { ref } from 'vue'
import { GetUsers, User } from 'src/app/core'

export const useGetUsers = () => {
  const getUsers = container.get<GetUsers>(TYPES.GetUsers)
  const users = ref<User[]>([])
  const loading = ref(false)

  const fetchUsers = async () => {
    loading.value = true
    users.value = await getUsers.execute()
    loading.value = false
  }

  return {
    users,
    loading,
    fetchUsers
  }
}
