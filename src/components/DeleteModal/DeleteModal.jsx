export default function DeleteModal({ id, onDelete }) {
    
    return (
        <div className='modal fade' id={ `delete-modal-${id}` } data-bs-backdrop='static' data-bs-keyboard='false' tabIndex={ -1 }>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title'>
                            <span className='badge text-bg-danger'>DELETE</span> Remove User
                        </h5>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                    </div>
                    <div className='modal-body'>
                        <p className='lead text-center'>Are you sure want to remove user { id }?</p>
                        <div className='d-flex justify-content-center gap-1'>
                            <button type='submit' className='btn btn-outline-danger' data-bs-dismiss='modal' onClick={ () => onDelete(id) }>Yes</button>
                            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>No</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}