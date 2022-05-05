import Fillings from "../../components/fillings/Fillings";
import TOPPINGS from "../../Toppings";

export default function ToppingsPage() {
    return (
        <>
            <h1 className="mb-3 pb-3 border-bottom">Toppings</h1>
            <Fillings title={"Toppings"} fillings={TOPPINGS} />
        </>
    );
}
