import { useEffect, useState } from "react";
import { AddUser } from "./components/add-user";
import { UserList } from "./components/user-list";
import axios from "axios";

export default function App() {
  const [users, setUsers] = useState([]);

  //////jnjum e user-y ID-ov
  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));

    axios
    .delete(`http://localhost:4002/users/${id}`)
      .then(() => console.log("Deleted successfully"))
    };


  /////avlecanum kam pakasacnum e gumary
  const handleSalaryChange = (id, amount) => {
  const user = users.find(u => u.id === id);
  const updatedUser = { ...user, salary: Number(user.salary) + amount };

  setUsers(users.map(u => u.id === id ? updatedUser : u));

  axios.put(`http://localhost:4002/users/${id}`, updatedUser)
    .then(() => console.log("Salary updated"));
  };



  const handleAdd = user => setUsers([...users, user]);

  useEffect(() => {
    axios
      .get("http://localhost:4002/users")
      .then(response => setUsers(response.data))
  }, []);

  return (
    <div className="row container">
      <UserList users={users}
       onSalaryChange={handleSalaryChange}
       onDelete={handleDelete}
       />
      <AddUser onAdd={handleAdd} />
    </div>
  );
}
