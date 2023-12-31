function DisplayCardSkeleton() {
  return (
    <div className="bg-white shadow-lg rounded-sm flex  h-[180px] overflow-hidden">
      <div className="w-[150px] h-full animate-pulse  bg-neutral-200 relative overflow-hidden">
        <div className="flex items-center justify-center h-full">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col flex-1 px-2 py-4 gap-4">
        <div className="flex justify-between items-center">
          <p className="bg-neutral-300 w-3/4 h-3 rounded-md"></p>
        </div>
        <div className="flex flex-col gap-2">
          <div className=" bg-neutral-300 h-2 rounded-md" />
          <div className=" bg-neutral-300 h-2 rounded-md" />
          <div className="w-[90%] bg-neutral-300 h-2 rounded-md" />
          <div className="w-[90%] bg-neutral-300 h-2 rounded-md" />
          <div className="w-3/4 bg-neutral-300 h-2 rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default DisplayCardSkeleton;
