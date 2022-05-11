import Header from "../header/Header";
import { Outlet } from "react-router-dom";

export default function Layout(props) {
    return (
        <>
            <Header order={props.order} />
            <main className="container">
                <Outlet />
            </main>
        </>
    );
}
