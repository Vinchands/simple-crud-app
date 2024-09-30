export default function UserTable({ children }) {
    return (
        <div className='col-12 col-md-8 table-responsive mx-auto'>
            <h5 className='h5 bg-success-subtle mb-0 p-2'>
                <span className='badge text-bg-success'>GET</span> Users List
            </h5>
            <table className='table table-bordered table-hover'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Job</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { children }
                </tbody>
            </table>
        </div>
    )
}
