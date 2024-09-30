export default function UserRow({ children, user }) {
    return (
        <tr key={ user.id }>
            <td>{ user.id }</td>
            <td>{ user.name }</td>
            <td>{ user.email }</td>
            <td>{ user.job }</td>
            <td>
                <div className='d-flex gap-1'>
                    { children }
                </div>
            </td>
        </tr>
    )
}