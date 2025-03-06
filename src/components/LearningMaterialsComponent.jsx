import { Star } from "lucide-react";
import FilterComponent from "./FilterComponent";
import { learningMaterials } from "./../data/learningMaterials";
import { useState } from "react";
import { formatDate } from "../helper/helper";

export default function LearningMaterialsComponent() {
  const [getMaterial, setMaterial] = useState(learningMaterials);

  const updateFavorite = (id) => {
    const existData = [];
    for (const item of getMaterial) {
      item.id == id && (item.isFavorite = item.isFavorite ? false : true);
      existData.push(item);
    }
    setMaterial(existData);
  };

  const sortData = (value) => {
    let sortedMaterial;
    if (value == "A-Z") {
      sortedMaterial = [...getMaterial].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    } else {
      sortedMaterial = [...getMaterial].sort((a, b) =>
        b.title.localeCompare(a.title)
      );
    }
    setMaterial(sortedMaterial);
  };

  return (
    <div className="bg-white grow drop-shadow-lg rounded-2xl overflow-auto h-[80vh]">
      {/* calling filter component */}
      <FilterComponent values={sortData} />

      {/* title */}
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Learning Materials</h2>
        <img src="/more.svg" alt="three dot" width={30} height={30} />
      </div>

      {/* materials list */}
      <div className="space-y-3">
        {getMaterial.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-light-gray px-4 py-2 flex gap-5 items-center"
            >
              <img
                src={item.image}
                alt={item.title}
                width={50}
                height={50}
                className="rounded-xl"
              />

              <div className="w-full">
                <div className="flex justify-between">
                  <p className="text-base font-medium">{item.title}</p>
                  <Star
                    onClick={() => updateFavorite(item.id)}
                    className={
                      "cursor-pointer " +
                      (item.isFavorite
                        ? "fill-amber-400 stroke-amber-400"
                        : "stroke-slate-400")
                    }
                    size={20}
                  />
                </div>
                <p className="text-gray-400 text-sm">
                  Posted at: {formatDate(item.postedAt)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
