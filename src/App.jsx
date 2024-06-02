// import Portofolio from "./components/portofolio/Portofolio";

import { Link } from "react-router-dom";

function App() {
  return (
    <div className="flex justify-center items-center h-screen gap-4">
      <button className="border rounded-lg p-4 bg-slate-500">
        <Link to="/Portofolio">Portofolio web</Link>
      </button>
      <button className="border rounded-lg p-4 bg-slate-500">
        <Link to="/Todo">UI Todo list</Link>
      </button>
    </div>
  );
}

export default App;
