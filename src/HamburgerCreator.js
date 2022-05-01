import SizeSelector from "./components/SizeSelector";
import Info from "./components/Info";
import Hamburger from "./Hamburger";

export default function HamburgerCreator() {
    function selectSize() {
        
    }

    return (
        <>
            <SizeSelector sizes={Hamburger.SIZES} />
            {/* <h1 className="mb-3 pb-3 border-bottom">Build up your favorite hamburger</h1>
            <div className="row">
                <Info />
            </div> */}
        </>
    );
}
