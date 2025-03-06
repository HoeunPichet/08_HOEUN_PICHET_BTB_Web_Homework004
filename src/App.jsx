import "./App.css";
import SidebarComponent from "./components/SidebarComponent";
import TopNavbarComponent from "./components/TopNavbarComponent";
import DashboardComponent from "./components/DashboardComponent";
import AssignmentsComponent from "./components/AssignmentsComponent";
import AddNewProjectComponent from "./components/AddNewProjectComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
import CardComponent from "./components/CardComponent";

function App() {
  return (
    <>
      <main className="flex w-full">
        <SidebarComponent />
        <section className="grow flex flex-col gap-5 px-8 py-7">
          <TopNavbarComponent />
          <article className="w-full flex gap-8">
            <section className="w-9/12 flex flex-col">
              <DashboardComponent />
              <div className="w-full flex justify-between gap-5 mt-10">
                <AssignmentsComponent />
                <AddNewProjectComponent />
              </div>
              <div className="">
                <CardComponent />
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
