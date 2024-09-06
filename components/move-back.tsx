"use client";

import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {};

const MoveBack = (props: Props) => {
  const router = useRouter();

  return (
    <MoveLeft
      className="size-5 cursor-pointer stroke-gray-500"
      onClick={() => router.back()}
    />
  );
};

export default MoveBack;
