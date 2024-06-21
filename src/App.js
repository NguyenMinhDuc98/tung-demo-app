import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { routers } from "./routers";

function App() {
  const router = createBrowserRouter(routers);
  console.log("🚀 ~ App ~ router:", router);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
