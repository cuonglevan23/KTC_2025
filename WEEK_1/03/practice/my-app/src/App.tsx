import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewListPage from "./page/new_paper/NewListPage";
import NewItemPage from "./page/NewItems/NewItemPage";
import DealPage from "./page/dealPage";
import HomePage from "./page/homework";


const App = () => {
  return (
    <Router>
      <main className="p-4">
        <Routes>
          
          <Route path="/news" element={<NewListPage />} />
          <Route path="item" element={<NewItemPage />} />
          <Route path="/deal" element={<DealPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
