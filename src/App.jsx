import User from "./components/User";
import data from "./data/data";

function App() {
  return (
    <>
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
      <div className="flex w-full flex-col gap-4">
        <ul className="flex flex-col gap-4">
          {data.map((user) => (
            <li key={user.id}>
              <User
                name={user.name}
                avatar={user.avatar}
                connected={user.connected}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
