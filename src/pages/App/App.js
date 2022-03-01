import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import AuthPage from "../AuthPage/AuthPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NavBar from "../../Components/NavBar/NavBar";

function App() {
  const [user, setUser] = useState(null);
  return (
    <main className="App">
      {user ? (
        <>
          <NavBar />
          <Routes>
            {/*Route Components In here wrapped by Routes component */}
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage />
      )}
    </main>
  );
}

export default App;
