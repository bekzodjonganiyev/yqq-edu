import { lazy } from "react";

const Navbar = lazy(() => import("./header/Navbar"));
const Hero = lazy(() => import("./hero/Hero"));
const Footer = lazy(() => import("./footer/Footer"));
const Layout = lazy(() => import("./layout/Layout"));
const ShortInfoCard = lazy(() => import("./short_info_card/ShortInfoCard"));

export { Navbar, Hero, Footer, Layout, ShortInfoCard };
