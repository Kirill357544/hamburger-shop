import toppings from "../../data/Toppings";
import Fillings from "../../components/fillings/Fillings";

export default function ToppingsPage() {
    return (
        <>
            <h1 className="mb-3 pb-3 border-bottom">Toppings</h1>
            <Fillings title={"Toppings"} fillings={toppings} />
        </>
    );
}
