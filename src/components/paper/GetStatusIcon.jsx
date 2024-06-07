import React from "react";

export default function GetStatusIcon({ status}) {
  switch (status) {
    case "pending":
      return <div className="w-[18px] h-[18px] rounded-full border-2 " />;
    case "completed":
      return (
        <div className="w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center ">
          ✓
        </div>
      );
    case "failed":
      return (
        <div className="w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center">
          ✗
        </div>
      );
    default:
      return null;
  }
}
