import Price from "../Price/Price";

export default function FillingsSelector({
    selectedFillings,
    onAdd,
    onRemove,
    fillings,
    title,
    addingDisabled = false,
}) {
    const availableFillings = fillings
        .filter((filling) =>
            selectedFillings.every((selectedFilling) => selectedFilling.name !== filling.name)
        )
        .sort((prev, next) => prev.name.localeCompare(next.name));

    return (
        <div className="col-5 rounded-3 mb-3">
            <div className="d-flex justify-content-between bg-primary bg-opacity-10 rounded-top">
                <div className="m-2">
                    <h4>{title}</h4>
                </div>
                <div className="m-2">
                    <div className="dropdown">
                        <button
                            className="btn btn-success dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            disabled={addingDisabled || selectedFillings.length === fillings.length}
                        >
                            Add {title}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            {availableFillings.map((filling) => (
                                <li key={filling.name} onClick={() => onAdd(filling)}>
                                    <a
                                        href="#0"
                                        onClick={(event) => {
                                            event.preventDefault();
                                        }}
                                        className="dropdown-item"
                                    >
                                        {filling.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <table className="table border">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {selectedFillings.map((filling, index) => (
                        <tr key={filling.name}>
                            <td>{index + 1}</td>
                            <td width="50%">{filling.name}</td>
                            <td width="40%">
                                <Price price={filling.price} />
                            </td>
                            <td width="auto">
                                <button
                                    data-name="name"
                                    className="btn btn-sm btn-danger"
                                    onClick={() => onRemove(filling)}
                                >
                                    <i className="bi bi-x-lg"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
