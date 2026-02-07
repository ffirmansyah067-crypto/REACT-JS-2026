// src/components/UsersList.tsx
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { fetchUsers, removeUser } from '../features/users/usersSlice'

export default function UsersList() {
  const dispatch = useAppDispatch()
  const { list, loading, error } = useAppSelector((state) => state.users)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  if (loading) return <p>Loading users...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <h2>Users (Async)</h2>
      <ul>
        {list.map((u) => (
          <li key={u.id}>
            {u.name} ({u.email})
            <button onClick={() => dispatch(removeUser(u.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
