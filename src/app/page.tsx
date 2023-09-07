"use client";
import { useState } from "react";

import Button from "@/components/Button";

import AddMoreBeerModal from "@/app/components/AddMoreBeerModal";
import RemoteBeerTab from "@/app/components/RemoteBeerTab";
import MyBeersTab from "@/app/components/MyBeersTab";

import useMyBeers from "@/app/lib/useMyBeers";
import useBeersApi from "@/app/lib/useBeersApi";

type TabNames = "ALL_BEERS" | "MY_BEERS";

export default function Home() {
  const [openModal, setOpenmodal] = useState(false);
  const { myBeers, addBeers } = useMyBeers();

  const [tab, setTab] = useState<TabNames>("ALL_BEERS");
  const { data, isLoading, loadMore, status, refetch } = useBeersApi();

  const isApiLoading = isLoading && tab === "ALL_BEERS";
  const isMyBeersEmpty = tab == "MY_BEERS" && myBeers == null;

  return (
    <div>
      <nav className=" z-30 fixed top-0 w-full shadow border-b-neutral-400">
        <div className="max-w-xl relative lg:max-w-4xl xl:max-w-7xl mx-auto px-3 py-4 z-30 flex justify-between items-center h-[60px] bg-white w-full">
          <div className="flex gap-5">
            <div
              role="tab"
              aria-labelledby="All beers"
              onClick={() => setTab("ALL_BEERS")}
              className={`pr-2 text-neutral-500 cursor-pointer ${
                tab === "ALL_BEERS"
                  ? "underline decoration-sky-600 decoration-2 text-neutral-800 font-medium"
                  : ""
              }`}
            >
              <h3>All Beers</h3>
            </div>
            <div
              role="tab"
              aria-labelledby="My Beers"
              onClick={() => setTab("MY_BEERS")}
              className={`px-2 text-neutral-500 cursor-pointer ${
                tab === "MY_BEERS"
                  ? "underline  decoration-sky-600 decoration-2  text-neutral-800 font-medium"
                  : ""
              }`}
            >
              <h3>My Beers</h3>
            </div>
          </div>
          {tab === "MY_BEERS" && (
            <Button onClick={() => setOpenmodal(true)}>Add a new beer</Button>
          )}
        </div>
      </nav>
      <main className="max-w-xl lg:max-w-4xl xl:max-w-7xl mx-auto px-3 mb-4 mt-[70px]">
        {tab === "ALL_BEERS" && (
          <RemoteBeerTab
            data={data}
            isLoading={isApiLoading}
            status={status}
            loadMore={() => loadMore()}
            refetch={refetch}
          />
        )}

        {tab == "MY_BEERS" && (
          <MyBeersTab
            data={myBeers}
            isEmpty={isMyBeersEmpty}
            openAddFormModal={() => setOpenmodal(true)}
          />
        )}
        {openModal && (
          <AddMoreBeerModal
            onClose={() => setOpenmodal(false)}
            open={openModal}
            onAdd={(data) => {
              addBeers(data);
            }}
          />
        )}
      </main>
    </div>
  );
}
