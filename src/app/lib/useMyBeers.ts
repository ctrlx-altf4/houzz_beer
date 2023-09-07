import { useEffect, useState } from "react";
import { IBeerData } from "@/app/lib/types";

const useMyBeers = () => {
  const [myBeers, setMyBeers] = useState<IBeerData[] | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined")
      setMyBeers(null);
    const _d = window.localStorage.getItem("beers");
    if (_d) return setMyBeers(JSON.parse(_d));
  }, []);

  const addBeers = (data: IBeerData) => {
    const _myBeers = [...(myBeers ?? []), data];
    setMyBeers(_myBeers);
    window.localStorage.setItem("beers", JSON.stringify(_myBeers));
  };

  return { myBeers, addBeers };
};

export default useMyBeers;
