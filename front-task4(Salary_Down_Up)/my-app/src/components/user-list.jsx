export const UserList = ({ users, onSalaryChange, onDelete}) => {
  return (
    <div className="col-md-8">
      <h2>User List</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
            <th>salary</th>
            <th>actions</th>
            <th>salary up</th>
            <th>salary down</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.salary}</td>
              <td>
                <button onClick={() => onDelete(user.id)} className="btn btn-danger btn-sm mx-2">Delete</button>
                <button className="btn btn-success btn-sm mx-2">Edit</button>
              </td>
              <td>
                <button
                  onClick={() => onSalaryChange(user.id, 25000)}
                  className="btn btn-primary btn-sm"
                >
                  +
                </button>
              </td>
              <td>
                <button
                  onClick={() => onSalaryChange(user.id, -25000)}
                  className="btn btn-warning btn-sm"
                >
                  -
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
