import MainLayout from "./components/layouts/MainLayout";
import PaperNav from "./components/paper/PaperNav";
import PaperMain from "./components/paper/PaperMain";

export default function App() {
  return (
    <>
      <MainLayout>
        <div className="flex flex-row w-full h-screen relative ">
          <PaperNav />
          <PaperMain />
        </div>
      </MainLayout>
    </>
  );
}
