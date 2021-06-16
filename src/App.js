import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

export default function App() {

  const user = {
    image: "https://source.unsplash.com/gKXKBY-C-Dk",
    name: "ゆう",
    email: "aaa@gmail.com",
    phone: "090-1111-2222",
    company: {
      name: "Google"
    },
    website: "https://google.com"
  }

  return (
    <div className="App">
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}