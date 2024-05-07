import Header from "./components/header";
import Letterbar from "./components/letterbar";
import SectionFirstContent from "./components/section-firstcontent";
import SectionInitial from "./components/section-initial";

function App() {
  return (
    <>
      <footer>
        <Header />
      </footer>
      <main>
        <SectionInitial />
        <Letterbar />
        <SectionFirstContent />
      </main>
    </>
  );
}

export default App;
