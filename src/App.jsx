import "./App.css";
import SidebarComponent from "./components/SidebarComponent";
import TopNavbarComponent from "./components/TopNavbarComponent";
import DashboardComponent from "./components/DashboardComponent";

function App() {
  return (
    <>
      <main className="flex w-full">
        <SidebarComponent />
        <section className="grow flex flex-col gap-5 px-10 py-7">
          <TopNavbarComponent />
          <article className="w-full flex gap-10">
            <section className="w-9/12 flex flex-col">
              <DashboardComponent />
            </section>
          </article>
        </section>
      </main>
    </>
  );
}

export default App;
