import Header from "./components/header";
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
        <SectionFirstContent />
      </main>
    </>
  );
}

export default App;
