import React from "react";
import MainLayout from "./components/layouts/MainLayout";
import NavigationTabs from "./components/NavigationTabs";
import AccessKeys from "./components/AccessKeys";
import Emails from "./components/Emails";
import Webs from "./components/Webs";
import Clients from "./components/Clients";
import Images from "./components/Images";
import Packages from "./components/Packages";

export default function App() {
  const [selected, setSelected] = React.useState("Paquetes");
  return (
    <>
      <MainLayout>
        <div className="flex flex-row w-full h-screen relative ">
          <NavigationTabs selected={selected} setSelected={setSelected} />
          <AccessKeys selected={selected} />
          <Emails selected={selected} />
          <Packages selected={selected} />
          <Webs selected={selected} />
          <Clients selected={selected} />
          <Images selected={selected} />
        </div>
      </MainLayout>
    </>
  );
}
