import Modal from "@/components/Modal";
import Image from "next/image";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import Button from "@/components/Button";
import { FormEvent, useState } from "react";
import { IBeerData } from "@/app/lib/types";

type FieldNames = "name" | "genre" | "description";

interface IAddMoreBeerModalProps {
  onClose: () => void;
  open: boolean;
  onAdd: (data: IBeerData) => void;
}
function AddMoreBeerModal(props: IAddMoreBeerModalProps) {
  const { onClose, open, onAdd } = props;
  const checkValidity = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    e.preventDefault();
    const _err = error;
    const name = e.currentTarget.name as FieldNames;

    const validity = e.currentTarget.validity;
    if (validity.valid) {
      _err.delete(name);
    }
    if (validity.tooShort) {
      _err.set(name, "Min. 100 characters are required");
    }
    if (validity.valueMissing) {
      _err.set(name, "Required");
    }
    setError(new Map(_err));
  };

  const [error, setError] = useState<Map<FieldNames, string>>(new Map());

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (typeof window === "undefined" || typeof document === "undefined")
      return null;
    const _formData = new FormData(e.currentTarget);

    const id = new Date().getTime();
    const name = _formData.get("name") as string;
    const description = _formData.get("description") as string;
    const genre = _formData.get("genre") as string;

    const data: IBeerData = {
      id,
      name,
      description,
      image_url: "/houzz_beer.png",
      tagline: genre,
    };

    onAdd(data);

    onClose();
  }

  return (
    <Modal onClose={() => onClose()} open={open}>
      <form className="py-4 px-6" onSubmit={onSubmit}>
        <p className="font-medium text-neutral-800 text-xl">Add a new beer</p>
        <div className="w-[90px] h-[100px] relative overflow-hidden border-neutral-300 border my-4">
          <Image
            alt="Mountains"
            src={"/houzz_beer.png"}
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: "contain",
              overflow: "hidden",
            }}
          />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <Input
              aria-labelledby="Beer name"
              placeholder="Beer name*"
              name="name"
              className="h-12"
              required
              onInvalid={(err) => {
                checkValidity(err);
              }}
              onChange={(e) => {
                if (error.has("name")) {
                  checkValidity(e);
                }
              }}
            />
            <span className="text-xs text-red-400">{error.get("name")}</span>
          </div>
          <div>
            <Input
              aria-labelledby="Genre"
              placeholder="Genre*"
              className="h-12"
              required
              onInvalid={(err) => {
                checkValidity(err);
              }}
              onChange={(e) => {
                if (error.has("genre")) {
                  checkValidity(e);
                }
              }}
              name="genre"
            />
            <span className="text-xs text-red-400">{error.get("genre")}</span>
          </div>

          <div>
            <Textarea
              placeholder="Description*"
              aria-labelledby="description"
              name="description"
              required
              onInvalid={(err) => {
                checkValidity(err);
              }}
              onChange={(e) => {
                if (error.has("description")) {
                  checkValidity(e);
                }
              }}
              rows={4}
            />
            <span className="text-xs text-red-400">
              {error.get("description")}
            </span>
          </div>
        </div>
        <div className="flex justify-end my-4">
          <Button variant="text" type="reset" onClick={() => onClose()}>
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </Modal>
  );
}

export default AddMoreBeerModal;
