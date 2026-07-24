import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import HotelDetails from "./pages/HotelDetails";
import BookingPage from "./pages/BookingPage";
import PaymentPage from "./pages/PaymentPage";
import BookingSuccess from "./pages/BookingSuccess";
import MyBookings from "./pages/MyBookings";
import Receipt from "./pages/Receipt";
import Wishlist from "./pages/Wishlist";
import Compare from "./pages/Compare";
import AIPlanner from "./pages/AIPlanner";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/hotel/:id" element={<HotelDetails />} />

      <Route path="/booking/:id" element={<BookingPage />} />

      <Route path="/payment/:id" element={<PaymentPage />} />
      <Route path="/ai-planner" element={<AIPlanner />} />
      <Route path="/compare" element={<Compare />} />
      <Route
        path="/booking-success"
        element={<BookingSuccess />}
      />

      <Route
        path="/my-bookings"
        element={<MyBookings />}
      />

      <Route
        path="/receipt/:bookingId"
        element={<Receipt />}
      />

      {/* Wishlist */}
      <Route
        path="/wishlist"
        element={<Wishlist />}
      />
    </Routes>
  );
}

export default App;