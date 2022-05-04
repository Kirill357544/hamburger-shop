import Fillings from "../../components/fillings/Fillings";
import Hamburger from "../../Hamburger";

export default function StuffingsPage() {
    return (
        <>
            <h1 className="mb-3 pb-3 border-bottom">Stuffings</h1>
            <Fillings title="Stuffings" fillings={Hamburger.STUFFINGS} />
        </>
    );
}
