import { ItemListContainer } from "./components/pages/itemlistcontainer/ItemListContainer";
import Navbar from "./components/layout/navbar/navbar";

const App = () => {
  let greeting = "Bienvenido a Resma";

  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={greeting} />
    </div>
  );
};

export default App;
