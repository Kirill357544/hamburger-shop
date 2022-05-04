export default function SizeSelector({ sizes, onSelectSize }) {
    return (
        <>
            <h1 className="mb-3 pb-3 border-bottom">Select Size</h1>
            <div className="p-5 bg-light rounded-3 d-flex justify-content-around">
                {sizes.map((size, index) => {
                    return (
                        <div className="bg-light" key={index}>
                            <button
                                className="btn btn-lg btn-primary"
                                data-name={size.name}
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
