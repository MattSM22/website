import AboutMe from "./components/AboutMe/AboutMe";
import Home from "./components/Home/Home";
import Midias from "./components/Midias/Midias";
import Sidebar from "./components/Sidebar/Sidebar";
import Technologie from "./components/Technologie/Technologie";

const Initial = () => {
  return (
    <div className="container">
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <main className="container__content">
        <Home />
        <AboutMe />
        <Technologie />
        <Midias />
      </main>
    </div>
  )
}

export default Initial;
