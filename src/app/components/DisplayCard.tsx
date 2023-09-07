"use client";
import Image from "next/image";
import { useState } from "react";

interface IDisplayCardProps {
  id: number;
  name: string;
  image_url: string;
  description: string;
  tagline: string;
  ingredients?: string;
}
function DisplayCard(props: IDisplayCardProps) {
  const { name, image_url, description, tagline, ingredients } = props;

  return (
    <div className="flex shadow-lg  border border-neutral-100  cursor-pointer hover:shadow-none  transition hover:bg-blue-50 rounded py-8 px-6">
      <div>
        <div className="w-[100px] h-full relative group ">
          <Image
            alt={name}
            src={image_url}
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: "contain",
              overflow: "hidden",
            }}
          />
          {!!ingredients && (
            <div
              role="tooltip"
              className="absolute  hidden group-hover:flex -right-[150px] max-w-[150px]  bg-neutral-800 rounded p-1 text-white text-xs text-center  flex-col justify-center"
            >
              <div className="relative max-h-[100px]">
                <span className="z-10 relative break-words   line-clamp-6">
                  {ingredients}
                </span>
                <div className="bg-neutral-800 w-3 h-3 rotate-45 absolute  left-[-2px] top-1/2  z-0 -translate-x-1/2" />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-3 overflow-hidden">
        <div className="flex flex-col overflow-hidden">
          <p className="text-2xl font-medium truncate" title={name}>
            {name}
          </p>
          <p
            className="text-yellow-500 text-sm font-medium truncate"
            title={tagline}
          >
            {tagline}
          </p>
        </div>

        <p className=" line-clamp-2 text-neutral-800">{description}</p>
      </div>
    </div>
  );
}
export default DisplayCard;
