import React from "react";
import MainLayout from "./components/layouts/MainLayout";
import NavigationTabs from "./components/NavigationTabs";
import AccessKeys from "./components/AccessKeys";
import Emails from "./components/Emails";
import Promotions from "./components/Promotions";

export default function App() {
  const [selected, setSelected] = React.useState("Promociones");
  return (
    <>
      <MainLayout>
        <div className="flex flex-row w-full h-screen relative ">
          <NavigationTabs selected={selected} setSelected={setSelected} />
          <AccessKeys selected={selected} />
          <Emails selected={selected} />
          <Promotions selected={selected} />
        </div>
      </MainLayout>
    </>
  );
}
