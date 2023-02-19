import { lazy } from "react";

const Navbar = lazy(() => import("./header/Navbar"));
const Hero = lazy(() => import("./hero/Hero"));
const Footer = lazy(() => import("./footer/Footer"));
const Layout = lazy(() => import("./layout/Layout"));
const NewsCard = lazy(() => import("./news_card/NewsCard"));
const ImageGalary = lazy(() => import("./image_galary/ImageGalary"));

export { Navbar, Hero, Footer, Layout, NewsCard, ImageGalary };
