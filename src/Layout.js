import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";

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
