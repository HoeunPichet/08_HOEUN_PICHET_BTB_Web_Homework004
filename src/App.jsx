import "./App.css";
import SidebarComponent from "./components/SidebarComponent";
import TopNavbarComponent from "./components/TopNavbarComponent";
import DashboardComponent from "./components/DashboardComponent";
import AssignmentsComponent from "./components/AssignmentsComponent";
import AddNewProjectComponent from "./components/AddNewProjectComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
import CardComponent from "./components/CardComponent";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState("");

  const getData = (item) => {
    const newSet = [...data, item];

    setData(newSet);
  };

  const searchData = (value) => {
    setFilters(value.toLowerCase());
  };

  return (
    <>
      <main className="flex w-full">
        <SidebarComponent />
        <section className="grow flex flex-col gap-5 px-8 py-7">
          <TopNavbarComponent values={searchData} />
          <article className="w-full flex gap-8">
            <section className="w-9/12 flex flex-col">
              <DashboardComponent />
              <div className="w-full flex justify-between gap-5 mt-10">
                <AssignmentsComponent />
                <AddNewProjectComponent item={getData} />
              </div>
              <div className="w-full grid grid-cols-3 gap-5 mt-5 max-h-[calc(100vh_-_24rem)] overflow-auto">
                {data &&
                  data.map((item, key) => {
                    return (
                      <div
                        key={key}
                        className={
                          item.name.toLowerCase().includes(filters)
                            ? ""
                            : "hidden"
                        }
                      >
                        <CardComponent
                          name={item.name}
                          dueDate={item.dueDate}
                          progress={item.progress}
                          description={item.description}
                          remain={item.remain}
                        />
                      </div>
                    );
                  })}
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
