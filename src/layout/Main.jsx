import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Navbar></Navbar>
            <Footer></Footer>
        </div>
    );
};

export default Main;