import { AgeCalculator } from "./components/AgeCalculator";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
      }}
    >
      <Header />
      <div className="ageCont">
        <AgeCalculator />
      </div>
      <Footer />
    </div>
  );
}

export default App;
