import DisplayCard from "@/app/components/DisplayCard";
import DisplayCardSkeleton from "@/app/components/DisplayCardSkeleton";
import Image from "next/image";
import { APIStatus } from "@/app/lib/useBeersApi";
import { IBeerData } from "@/app/lib/types";

interface IRemoteBeerTabProps {
  data: IBeerData[] | null;
  isLoading: boolean;
  status: APIStatus;
  loadMore: () => void;
  refetch: () => void;
}
function RemoteBeerTab({
  data,
  isLoading,
  status,
  loadMore,
  refetch,
}: IRemoteBeerTabProps) {
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

        {isLoading && (
          <>
            <DisplayCardSkeleton />
            <DisplayCardSkeleton />
            <DisplayCardSkeleton />
          </>
        )}
      </div>
      {status === "FAILED" && (
        <div className="text-red-400 bg-red-50 text-sm h-[400px] w-full flex justify-center items-center flex-col">
          <p>Something went wrong.</p>
          <p>
            <span
              onClick={() => refetch()}
              className="text-sky-600 font-medium cursor-pointer"
            >
              Click here
            </span>{" "}
            to reload again!
          </p>
        </div>
      )}
      {data && (
        <div className="flex justify-center items-center text-sky-600 font-medium my-5">
          <p
            onClick={() => {
              loadMore();
            }}
            className="cursor-pointer flex items-center hover:underline"
          >
            Load more{" "}
            <Image
              width={30}
              height={30}
              src="/caret_down.svg"
              alt="caret down icon"
            />
          </p>
        </div>
      )}
    </>
  );
}

export default RemoteBeerTab;
