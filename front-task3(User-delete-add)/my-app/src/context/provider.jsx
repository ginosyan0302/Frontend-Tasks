// provider.jsx
import { useState } from "react";
import { UserContext } from "./user-context";

export const DataProvider = ({ children }) => {
    const [users, setUsers] = useState([
        { id: 101, name: "Gurgen", age: 21, level: "senior" },
        { id: 102, name: "Meggy", age: 21, level: "junior" },
        { id: 103, name: "ArmenMJS", age: 42, level: "lecturer" },
        { id: 104, name: "Armen", age: 22, level: "middle" },
        { id: 105, name: "Ani", age: 19, level: "senior" },
        { id: 106, name: "Monica", age: 19, level: "intern" },
    ]);

    const handleDelete = id => setUsers(prev => prev.filter(u => u.id !== id));
    const handleAdd = data => setUsers(prev => [...prev, { ...data, id: Date.now() }]);

    return (
        <UserContext.Provider value={{ users,
            onAdd: handleAdd, 
            onDelete: handleDelete
            }
          }>
            {children}
        </UserContext.Provider>
    );
};
