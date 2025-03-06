import { EllipsisVertical } from "lucide-react";

// eslint-disable-next-line react/prop-types
export default function CardComponent({
  name,
  dueDate,
  progress,
  description,
  remain,
}) {
  return (
    <div className="max-w-full p-6 h-full flex flex-col justify-between bg-white rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col">
        <div className="flex justify-between mb-5">
          {/* date */}
          {progress == 100 && (
            <p className={`text-custom-sky-blue font-medium`}>{dueDate}</p>
          )}
          {progress == 75 && (
            <p className={`text-custom-carrot font-medium`}>{dueDate}</p>
          )}
          {progress == 50 && (
            <p className={`text-custom-yellow-500 font-medium`}>{dueDate}</p>
          )}
          {progress == 25 && (
            <p className={`text-custom-pink font-medium`}>{dueDate}</p>
          )}
          <EllipsisVertical size={20} color="#374957" />
        </div>

        <h5 className="capitalize mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="line-clamp-2 mb-3 font-normal text-justify text-gray-400 dark:text-gray-400">
          {description}
        </p>
      </div>

      {/* progress bar */}
      <div className="place-self-end w-full">
        <div className="w-full flex justify-between font-medium mb-1">
          <p>Progress</p>
          <p>{progress}%</p>
        </div>
        <div className="relative mb-5 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          {progress == 100 && (
            <div className="bg-custom-sky-blue h-2.5 rounded-full"></div>
          )}
          {progress == 75 && (
            <div className="bg-custom-carrot h-2.5 rounded-full w-3/4"></div>
          )}
          {progress == 50 && (
            <div className="bg-custom-yellow-500 h-2.5 rounded-full w-2/4"></div>
          )}
          {progress == 25 && (
            <div className="bg-custom-pink h-2.5 rounded-full w-1/4"></div>
          )}
        </div>

        {/* deadline */}
        <div className="flex justify-end">
          <p className="font-medium bg-light-gray py-1.5 px-4 rounded-lg max-w-fit text-center">
            {remain}
          </p>
        </div>
      </div>
    </div>
  );
}
