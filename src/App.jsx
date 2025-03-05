import "./App.css";
import SidebarComponent from "./components/SidebarComponent";
import TopNavbarComponent from "./components/TopNavbarComponent";
import DashboardComponent from "./components/DashboardComponent";
import AssignmentsComponent from "./components/AssignmentsComponent";
import AddNewProjectComponent from "./components/AddNewProjectComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
import FilterComponent from "./components/FilterComponent";

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
              <div className="w-full flex justify-between gap-5 mt-10">
                <AssignmentsComponent />
                <AddNewProjectComponent />
              </div>
            </section>
            <LearningMaterialsComponent />
          </article>
        </section>
      </main>
    </>
  );
}

export default App;
