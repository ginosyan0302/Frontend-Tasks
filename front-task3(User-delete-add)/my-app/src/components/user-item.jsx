import { useContext } from "react"
import { UserContext } from "../context/user-context"

export const UserItem = ({ user }) => {
    const { onDelete } = useContext(UserContext);

    const handleDelete = () => {
        fetch(`/users/${user.id}`, { method: "DELETE" })
            .then(() => onDelete(user.id)); 
    }

    return (
        <div className="col-md-4 alert bg-warning m-2">
            <p>{user.name} {user.age} years old - {user.level}</p>
            <button onClick={handleDelete} className="btn btn-dark btn-sm">Delete</button>
        </div>
    )
}
