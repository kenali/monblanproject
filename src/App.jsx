import { useState } from "react";
import { RootLayout } from "./layout";
import { Header } from "./components/Header";
import { Gallery } from "./components/Gallery";

export function App() {
  const [view, setView] = useState("list");

  return (
    <RootLayout>
      <Header view={view} setView={setView} />
      <Gallery view={view} />
    </RootLayout>
  );
}

export default App;
