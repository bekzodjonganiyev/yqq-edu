import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Navbar as Header, Footer } from "../../components";
const Layout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="">
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
