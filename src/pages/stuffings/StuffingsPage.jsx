import STUFFINGS from "../../data/Stuffings";
import Fillings from "../../components/fillings/Fillings";

export default function StuffingsPage() {
    return (
        <>
            <h1 className="mb-3 pb-3 border-bottom">Stuffings</h1>
            <Fillings title="Stuffings" fillings={STUFFINGS} />
        </>
    );
}
