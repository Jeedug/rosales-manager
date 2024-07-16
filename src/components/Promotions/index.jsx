import React, { useEffect, useState } from "react";

import Table from "./Table";
import Editor from "./Editor";
import useSettings from "../../hooks/settings";
import { http } from "@tauri-apps/api";
import { fetch } from "@tauri-apps/api/http";
import Creator from "./Creator";

export default function Promotions({ selected }) {
  const [subMenu, setSubMenu] = useState("Table");
  const [editablePromotion, setEditablePromotion ] = useState({});

  const [allPromotions, setAllPromotions] = useState([]);
  const [status, setStatus] = useState(false);

  const { settings } = useSettings();

  useEffect(() => {
    const getAllPromotions = async () => {
      const data = await fetch(
        "https://viajesrosales.netlify.app/api/promotions/read",
        {
          method: "POST",
          body: http.Body.json({
            key: settings.access.key,
          }),
          headers: {
            "Content-Type": "application/json",
            Origin: "https://viajesrosales.netlify.app",
          },
        }
      );

      let fetchedPromotions = [];

      if (data.status) {
        setStatus(404);
      } else {
        setStatus(data.status);
      }

      if (data.status == 200) {
        data.data.promotions.forEach((promotion) => {
          fetchedPromotions.push(promotion);
        });

        console.log(fetchedPromotions);

        setAllPromotions(fetchedPromotions);
      } else {
        setAllPromotions([]);
      }
    };
    getAllPromotions();

    console.log(allPromotions);
  }, [settings, subMenu]);

  if (selected == "Promociones") {
    return (
      <>
        <Table allPromotions={allPromotions} setAllPromotions={setAllPromotions} status={status} subMenu={subMenu} setSubMenu={setSubMenu} setEditablePromotion={setEditablePromotion} />
        <Editor setAllPromotions={setAllPromotions} subMenu={subMenu} setSubMenu={setSubMenu} editablePromotion={editablePromotion} />
        <Creator setAllPromotions={setAllPromotions} subMenu={subMenu} setSubMenu={setSubMenu} />
      </>
    );
  }
}
