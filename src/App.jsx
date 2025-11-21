import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/Products.jsx";
import PaymentSuccess from "./PaymentSuccess.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;