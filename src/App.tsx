import { register } from "@tauri-apps/api/globalShortcut";
import { WebviewWindow } from "@tauri-apps/api/window";
import "./App.css";

async function handleOpenWindow() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  // await appWindow.hide();
  await register("CommandOrControl+Shift+;", () => {
    console.log("shortuct");
    new WebviewWindow("theUniqueLabel", {
      url: "https://hackertyper.net/",
      focus: true,
      fullscreen: true,
    });
    // openWindow();
  });
}
handleOpenWindow();
function App() {
  return <p>CommandOrControl+Shift+;</p>;
}

export default App;
