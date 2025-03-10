// eslint-disable-next-line react/prop-types
export default function FilterComponent({ values }) {
  // prevent the page from reload
  function handleSubmit(e) {
    e.preventDefault();
    values(e.target.value);
  }

  return (
    <form className="mt-4 mx-4 flex justify-between">
      <div className="relative w-full">
        <select
          onChange={handleSubmit}
          id="filterLearningMaterials"
          name="filterLearningMaterials"
          className="text-sm focus:ring-custom-sky-blue focus:border-custom-sky-blue block w-full p-4 focus:outline-none text-gray-400 border-none rounded-xl bg-light-gray"
        >
          <option hidden value="">
            Sort By
          </option>
          <optgroup label="Sort By">
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </optgroup>
        </select>
      </div>
    </form>
  );
}
