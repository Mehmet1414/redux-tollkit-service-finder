import Header from "./component/header";
import Footer from "./component/footer";
import { Route, Routes } from "react-router-dom";
import { Main } from "./pages/main";
import { useDispatch } from "react-redux";
import { useApi } from "./hooks/useApi";
import { useEffect } from "react";
import { setCategories } from "./redux/CategorySlice";
import { CategoryDetail } from "./pages/categoryDetailPage"; 
import { ServisDetail } from "./pages/servisDetailPage";
import { BlogDetail } from "./pages/blogDetailPage";

function App() {
  const api = useApi();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const categoryResp = await api.get(
        "public/categories/listMainCategories"
      );

      dispatch(setCategories(categoryResp.data.data));
    })();
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path="category/:slug" element={<CategoryDetail />} />
        <Route path="service/:slug" element={<ServisDetail />} />
        <Route path="blog/:slug" element={<BlogDetail />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
