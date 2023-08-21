import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home/Home";
import { ProductsPage } from "./components/productsPage/ProductsPage";
import { ProductDetailsPage } from "./components/productDetailsPage/ProductDetailsPage";
import { Register } from "./auth/signup/Register";
import { Login } from "./auth/signin/Login";
import {CheckOut} from './components/cart/CheckOut'
import ProtectedRoute from "./ProtectedRoutes";
import { WishList } from "./components/wishlist/WishList";
import { Payment } from "./components/cart/Payment";
import { Address } from "./components/address/Address";
import { OrderPage } from "./components/order/OrderPage";
import { OrderConfirm } from "./components/order/OrderConfirm";
import { SearchPage } from "./components/SearchPage";
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop/women" element={<ProductsPage />} />
      <Route path="/product/:id/:url_title" element={<ProductDetailsPage />} />
      <Route path="/user/register" element={<Register />} />
      <Route path="/user/login" element={<Login />} />
      <Route path="/checkout/confirm" element={<OrderConfirm />} />
      <Route
        path="/checkout/cart"
        element={
          <ProtectedRoute>
            <CheckOut />
          </ProtectedRoute>
        }
      />
       <Route
        path="/wishlist"
        element={
          <ProtectedRoute>
            <WishList />
          </ProtectedRoute>
        }
      />
      <Route
        path="/checkout/payment"
        element={
          <ProtectedRoute>
            <Payment />
          </ProtectedRoute>
        }
      />
       <Route
        path="/checkout/address"
        element={
          <ProtectedRoute>
            <Address />
          </ProtectedRoute>
        }
      />
       <Route
        path="/YourOrder"
        element={
          <ProtectedRoute>
            <OrderPage />
          </ProtectedRoute>
        }
      />
       <Route path="/search=:search_text" element={<SearchPage />} />
    </Routes>
  );
};
