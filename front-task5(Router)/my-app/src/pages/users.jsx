import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import './users.css';

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/users")
      .then(res => {
        const data = res.data.users || res.data;
        setUsers(data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="users-container">
      {/* Add User Button always on top */}
      <div className="user-card add-user-card">
        <Link to="/add" className="add-user-link">
          ➕ Add User
        </Link>
      </div>

      {/* Users list */}
      {users.map(user => (
        <div className="user-card" key={user.id}>
          <h3 className="user-name">{user.name} {user.surname}</h3>
          <p className="user-info"><strong>City:</strong> {user.city}</p>
          <p className="user-info"><strong>Age:</strong> {user.age} years old</p>
          <Link className="details-link" to={"/users/" + user.id}>View Details</Link>
        </div>
      ))}
    </div>
  );
}
