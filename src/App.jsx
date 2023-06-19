
import Header from "./component/header";
import Footer from "./component/footer";
import { Route, Routes } from "react-router-dom";
import { Main } from "./pages/main";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Main />} />
      </Routes>

      <Footer />

    </>
  );
}

export default App;
