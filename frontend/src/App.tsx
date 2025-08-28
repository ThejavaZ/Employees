import Header from "./partials/header";
import Main from "./layout/main";
import Footer from "./partials/footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
