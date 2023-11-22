import styles from "./App.module.scss";
import classNames from "classnames/bind";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Service from "./pages/Service/Service";
import Project from "./pages/Project/Project";
import Member from "./pages/Member/Member";
import { MdArrowUpward } from "react-icons/md";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);
const Layout = () => {
    return (
        <div className="app-container">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/service",
                element: <Service />,
            },
            {
                path: "/project",
                element: <Project />,
            },
            {
                path: "/members",
                element: <Member />,
            },
        ],
    },
]);
function App() {
    const [isScroll, setIsScroll] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsScroll(true);
        } else {
            setIsScroll(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className={cx("app")}>
            <RouterProvider router={router} />
            {isScroll && (
                <div className={cx("scroll-btn")} onClick={scrollToTop}>
                    <MdArrowUpward className={cx("scroll-icon")} />
                </div>
            )}
        </div>
    );
}

export default App;
