import DisplayCard from "@/app/components/DisplayCard";
import { IBeerData } from "@/app/lib/types";

interface IMyBeerTabProps {
  data: IBeerData[] | null;
  isEmpty: boolean;
  openAddFormModal: () => void;
}
function MyBeersTab(props: IMyBeerTabProps) {
  const { data, isEmpty, openAddFormModal } = props;
  return (
    <>
      <div className="grid  grid-cols-1 lg:grid-cols-2   gap-4 ">
        {data?.map((d) => {
          const title = d.ingredients
            ? `ingredients : ${Object.keys(d.ingredients).join(",")}`
            : "";
          return (
            <DisplayCard
              key={d.id}
              id={d.id}
              name={d.name}
              image_url={d.image_url}
              description={d.description}
              tagline={d.tagline}
              ingredients={title}
            />
          );
        })}
      </div>
      {isEmpty && (
        <div className="text-neutral-400 bg-slate-50 text-sm h-[400px] w-full flex justify-center items-center flex-col">
          <p>Nothing to see yet.</p>
          <p>
            <span
              onClick={() => openAddFormModal()}
              className="text-sky-600 font-medium cursor-pointer"
            >
              Click here
            </span>{" "}
            to add your first beer!
          </p>
        </div>
      )}
    </>
  );
}

export default MyBeersTab;
