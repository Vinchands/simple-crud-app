import { useState } from 'react'

export default function CreateForm({ onCreate }) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [job, setJob] = useState('')
    
    function handleClick() {
        onCreate(name, email, job)
        handleReset()
    }
    
    function handleReset() {
        setName('')
        setEmail('')
        setJob('')
    }

    return (
        <div className='container col-12 col-md-6 bg-body-tertiary shadow rounded mx-auto mb-5 p-3'>
            <h3 className='fw-light'>
                <span className='badge text-bg-success'>GET</span> Add New User
            </h3>
            <hr />
            <div className='form-group mb-3'>
                <label htmlFor='name' className='form-label'>
                    <i className='bi bi-person-fill'></i>
                    &nbsp;Name
                </label>
                <input type='text' className='form-control' name='name' id='name' value={ name } onChange={e => setName(e.target.value)} required />
            </div>
            <div className='form-group mb-3'>
                <label htmlFor='email' className='form-label'>
                    <i className='bi bi-envelope-fill'></i>
                    &nbsp;Email
                </label>
                <input type='email' className='form-control' name='email' id='email' value={ email } onChange={e => setEmail(e.target.value)} required />
            </div>
            <div className='form-group mb-3'>
                <label htmlFor='phone' className='form-label'>
                    <i className='bi bi-duffle-fill'></i>
                    &nbsp;Job
                </label>
                <input type='text' name='job' id='job' className='form-control' value={ job } onChange={e => setJob(e.target.value)} required />
            </div>
            <div className='d-flex justify-content-end gap-1'>
                <button className='btn btn-primary' type='button' onClick={ handleClick } >Add</button>
                <button className='btn btn-outline-secondary' type='reset' onClick={ handleReset }>Reset</button>
            </div>
        </div>
    )
}