import { useState } from 'react'

export default function EditModal({ user, onSave }) {

    const [newName, setNewName] = useState(user.name)
    const [newEmail, setNewEmail] = useState(user.email)
    const [newJob, setNewJob] = useState(user.job)
    
    function handleClick() {
        onSave(user.id, newName, newEmail, newJob)
        handleReset()
    }
    
    function handleReset() {
        setNewName(user.name)
        setNewEmail(user.email)
        setNewJob(user.job)
    }

    return (
        <div className='modal fade' id={`edit-modal-${user.id}`} data-bs-backdrop='static' data-bs-keyboard='false' tabIndex={-1}>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title'>
                            <span className='badge text-bg-warning'>PUT</span> Edit User
                        </h5>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                    </div>
                    <div className='modal-body'>
                        <div className='form-group mb-3'>
                            <label htmlFor='name' className='form-label'>
                                <i className='bi bi-person-fill'></i>
                                &nbsp;Name
                            </label>
                            <input type='text' className='form-control' name='name' value={newName} onChange={e => setNewName(e.target.value)} required />
                        </div>
                        <div className='form-group mb-3'>
                            <label htmlFor='email' className='form-label'>
                                <i className='bi bi-envelope-fill'></i>
                                &nbsp;Email
                            </label>
                            <input type='email' className='form-control' name='email' value={newEmail} onChange={e => setNewEmail(e.target.value)} required />
                        </div>
                        <div className='form-group mb-3'>
                            <label htmlFor='phone' className='form-label'>
                                <i className='bi bi-duffle-fill'></i>
                                &nbsp;Job
                            </label>
                            <input type='text' name='job' className='form-control' value={newJob} onChange={e => setNewJob(e.target.value)} required />
                        </div>
                        <div className='d-flex justify-content-end gap-1'>
                            <button className='btn btn-success' type='button' onClick={ handleClick } >Save</button>
                            <button className='btn btn-outline-secondary' type='reset' onClick={ handleReset }>Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
