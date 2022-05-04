import Fillings from "../../components/fillings/Fillings";
import Hamburger from "../../Hamburger";

export default function ToppingsPage() {
    return (
        <>
            <h1 className="mb-3 pb-3 border-bottom">Toppings</h1>
            <Fillings title={"Toppings"} fillings={Hamburger.TOPPINGS} />
        </>
    );
}
