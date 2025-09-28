import axios from "axios";
import { useState } from "react"

export const AddUser = ({onAdd}) => {
  const [user, setUser] = useState({ name: "", age: "", salary: "" });
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    axios.post("http://localhost:4002/users", user)
      .then(response => {
        onAdd(response.data);
        setUser({ name: "", age: "", salary: "" });
      })
  }

  return (
    <div className="col-md-4">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>name</label>
          <input
            className="form-control"
            value={user.name}
            onChange={e => setUser({ ...user, name: e.target.value })}
          />
        </div>
        <div>
          <label>age</label>
          <input
            type="number"
            className="form-control"
            value={user.age}
            onChange={e => setUser({ ...user, age: e.target.value })}
          />
        </div>
        <div>
          <label>salary</label>
          <input
            type="number"
            className="form-control"
            value={user.salary}
            onChange={e => setUser({ ...user, salary: e.target.value })}
          />
        </div>
        <button className="btn btn-outline-success my-2">save</button>
      </form>
    </div>
  );
};
