// import Portofolio from "./components/portofolio/Portofolio";

import { Link } from "react-router-dom";

function App() {
  return (
    <div className="flex justify-center items-center h-screen gap-4">
      <Link to="/Portofolio">
        <button className="btn btn-neutral">Portofolio web</button>
      </Link>
      <Link to="/Todo">
        <button className="btn btn-neutral">UI Todo list</button>
      </Link>
    </div>
  );
}

export default App;
