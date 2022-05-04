import Hamburger from "../../Hamburger";

export default function SizeSelector({ sizes, setHamburger }) {
    function selectSize(size) {
        setHamburger(new Hamburger(size));
    }

    return (
        <>
            <div className="p-5 bg-light rounded-3 d-flex justify-content-around">
                {sizes.map((size, index) => {
                    return (
                        <div className="bg-light" key={index}>
                            <button
                                className="btn btn-lg btn-primary"
                                data-name={size.name}
                                onClick={(event) => selectSize(size, event)}
                            >
                                {size.name}
                            </button>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
