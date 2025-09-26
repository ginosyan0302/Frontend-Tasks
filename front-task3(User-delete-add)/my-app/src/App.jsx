import { AddUser } from "./components/add-user";
import { UserList } from "./components/user-list";
import { DataProvider } from "./context/provider.jsx";

export default function App() {
    return (
        <div className="row container">
            <DataProvider>
                <UserList />
                <AddUser />
            </DataProvider>
        </div>
    );
}
