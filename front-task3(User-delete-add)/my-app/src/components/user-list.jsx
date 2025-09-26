import { useContext } from "react"
import { UserContext } from "../context/user-context"
import { UserItem } from "./user-item";

export const UserList = () => {
    const {users} = useContext(UserContext); ////sa en Consumeri pahn e, consumer en darnum ev karox en ayd tvyalneric ogtvel
    return <div className="col-md-8">
        <h2>User List</h2>
        {
            users.map(user => <UserItem key={user.id} user={user}/>)  ///map ov sharceinq user-nery
        }
    
    </div>
}