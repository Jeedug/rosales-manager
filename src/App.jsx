import logo from "./assets/logo.png";
import MainLayout from "./components/layouts/MainLayout";
import RightArrow from "./components/icons/RightArrow";
import Settings from "./components/settings/Settings";

export default function App() {

  return (
    <MainLayout>
      <h1 className="font-bold text-3xl">Welcomee</h1>
      <img src={logo} className="h-[120px]" />
      <p className="font-normal text-sm">Click on the Tauri, Vite, and React logos to learn more.</p>
      <a href="#" className="text-blue-400 text-sm font-light flex flex-row items-center gap-1">Click to learn more <RightArrow className="text-blue-400" /></a>
    </MainLayout>
  );
}
