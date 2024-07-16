import { http } from "@tauri-apps/api";
import { fetch } from "@tauri-apps/api/http";
import { Copy } from "lucide-react";
import React from "react";

export default function TableElement({ keyItem, subscription, setAllSubscriptions }) {
  const handleBlock = async () => {
    const data = await fetch(
      "https://viajesrosales.netlify.app/api/subscriptions/block",
      {
        method: "POST",
        body: http.Body.json({
          key: keyItem,
          id: subscription.id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const res = data;

    console.log(res.data)

    if (res.status == 200) {
      // modificae elemento y haz que el blocked sea true
      setAllSubscriptions((allSubs) => allSubs.map((sub) => {
        if (sub.id == subscription.id) {
          return { ...sub, blocked: !subscription.blocked };
        }
        return sub;
      }));
    } 

  };

  return (
    <tr
      key={subscription.id}
      style={{
        backgroundColor: subscription.blocked ? "lightgray" : "white",
      }}
      class=" dark:border-gray-700"
    >
      <th
        scope="row"
        class="px-6 py-2 font-medium text-black whitespace-nowrap "
      >
        {subscription.email}
      </th>
      {
        subscription.blocked ? (
          <td class="px-6 py-2 text-green-700 hover:cursor-pointer hover:text-green-500 hover:bg-red-100/30" onClick={handleBlock}>
            Desbloquear
          </td>
        ) : (
          <td class="px-6 py-2 text-red-700 hover:cursor-pointer hover:text-red-500 hover:bg-green-100/30" onClick={handleBlock}>
            Bloquear
          </td>
        )
      }
    </tr>
  );
}
