export default function SizeSelector({ sizes, onSelect }) {
    return (
        <>
            <div className="p-5 bg-light rounded-3 d-flex justify-content-around">
                {sizes.map((size, index) => {
                    return (
                        <div className="bg-light" key={index}>
                            <button
                                className="btn btn-lg btn-primary"
                                data-name={size.name}
                                onClick={() => onSelect(size)}
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
