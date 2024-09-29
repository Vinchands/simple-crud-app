import CreateForm from './components/CreateForm/CreateForm'
import UserTable from './components/UserTable/UserTable'
import EditModal from './components/EditModal/EditModal'
import DeleteModal from './components/DeleteModal/DeleteModal'
import { useState, useEffect } from 'react'

// const mock = [
//     {
//         id: 0,
//         name: 'John Doe',
//         email: 'johndoe@example.com',
//         job: 'Developer'
//     },
//     {
//         id: 1,
//         name: 'Jane Smith',
//         email: 'janesmith@example.com',
//         job: 'Designer'
//     },
//     {
//         id: 2,
//         name: 'Alice Johnson',
//         email: 'alicejohnson@example.com',
//         job: 'Tester'
//     }
// ]

export default function App() {

    const [users, setUsers] = useState([])

    async function getUsers() {
        fetch('http://localhost:8080/api/users')
            .then(response => {
                if (!response.ok) throw new Error('Something went wrong while fetching users')
                return response.json()
            })
            .then(data => setUsers(data.users))
            .catch(error => console.error('Error fetching users:', error))
    }

    
    async function handleCreate(name, email, job) {
        const option = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, job })
        }
        
        fetch('http://localhost:8080/api/users', option)
            .then(response => {
                if (!response.ok) throw new Error('Something went wrong while creating user')
                getUsers()
            })
            .catch(error => console.error('Error creating user:', error))
    }

    function handleUpdate(id, name, email, job) {
        const option = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, name, email, job })
        }
        
        fetch(`http://localhost:8080/api/users/${id}`, option)
           .then(response => {
                if (!response.ok) throw new Error('Something went wrong while updating user')
                getUsers()
            })
           .catch(error => console.error('Error updating user:', error))
    }

    function handleDelete(id) {
        const option = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        }
        
        fetch(`http://localhost:8080/api/users/${id}`, option)
           .then(response => {
                if (!response.ok) throw new Error('Something went wrong while deleting user')
                getUsers()
            })
           .catch(error => console.error('Error deleting user:', error))
    }
    
    useEffect(() => { getUsers() }, [users])

    return (
        <div className='p-3'>
            <div className='text-center'>
                <h1>Users List App</h1>
                <h3 className='fw-light'>Simple CRUD App Using React, Express, MySQL</h3>
            </div>
            <hr />
            <CreateForm onCreate={ handleCreate } />
            <UserTable>
                {
                    users.length === 0
                    ? (
                        <tr>
                            <td colSpan='5' className='text-center'>No users found</td>
                        </tr>
                    )
                    : users.map(user => (
                        <tr key={ user.id }>
                            <td>{ user.id }</td>
                            <td>{ user.name }</td>
                            <td>{ user.email }</td>
                            <td>{ user.job }</td>
                            <td>
                                <div className='d-flex gap-1'>
                                    <button className='btn btn-warning btn-sm' data-bs-toggle='modal' data-bs-target={ `#edit-modal-${user.id}` }>
                                        <i className='bi bi-pencil-fill'></i>
                                    </button>
                                    <button className='btn btn-danger btn-sm' data-bs-toggle='modal' data-bs-target={ `#delete-modal-${user.id}` }>
                                        <i className='bi bi-trash-fill'></i>
                                    </button>
                                    <EditModal user={ user } onSave={ handleUpdate } />
                                    <DeleteModal id={ `${user.id}` } onDelete={ handleDelete } />
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </UserTable>
        </div>
    )
}
