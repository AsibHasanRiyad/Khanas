"use client";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const not_found = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <Image
        src="https://i.ibb.co/Hx5qRdx/404.png"
        height={700}
        width={700}
        alt="Error"
        className="animate-moveContinuously"
      ></Image>
      <Link href={"/"}>
        <Button size="lg" className="mt-8 bg-primary">
          Go Home
        </Button>
      </Link>
    </div>
  );
};

export default not_found;
