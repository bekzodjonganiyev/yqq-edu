import { lazy } from "react";

const Navbar = lazy(() => import("./header/Navbar"));
const Hero = lazy(() => import("./hero/Hero"));
const Footer = lazy(() => import("./footer/Footer"));
const Layout = lazy(() => import("./layout/Layout"));
const AdminLayout = lazy(() => import("./layout/AdminLayout"));
const NewsCard = lazy(() => import("./news_card/NewsCard"));
const ImageGalary = lazy(() => import("./image_galary/ImageGalary"));
const MoreDetails = lazy(() => import("./more_details/MoreDetails"));
const RecommendContent = lazy(() => import("./recommend_content/RecommendContent"));
const Sidebar = lazy(() => import("./admin/sidebar/Sidebar"));
const LoginRegister = lazy(() => import("./admin/login_register/LoginRegister"));
const ProtectedRoute = lazy(() => import("./admin/protected_route/ProtectedRoute"));
const Loader = lazy(() => import("./loader/Loader"));
const SkeletonPost = lazy(() => import("./skeleton_loader/SkeletonPost"));
const ErrorFallback = lazy(() => import("./error_fallback/ErrorFallback"))

export {
  Navbar,
  Hero,
  Footer,
  Layout,
  NewsCard,
  ImageGalary,
  MoreDetails,
  RecommendContent,
  Sidebar,
  AdminLayout,
  LoginRegister,
  ProtectedRoute,
  Loader,
  SkeletonPost,
  ErrorFallback
};
