import React from "react";
import Image from "next/image";

export default function Notfound() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image
        src="/images-20250823T142224Z-1-001/images/Screenshot 2025-09-03 165116.png"
        alt="error Image"
        width={1000}
        height={1000}
        priority
      />
    </div>
  );
}
