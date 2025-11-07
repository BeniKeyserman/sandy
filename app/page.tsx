import Header from "./components/Header";
import MainView from "./components/MainView";
import ExtensionWorkspace from "./components/ExtensionWorkspace";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <MainView>
        <ExtensionWorkspace />
      </MainView>
    </div>
  );
}
