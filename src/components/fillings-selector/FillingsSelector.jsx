import formatPrice from "../../formatter/formatPrice";

export default function FillingsSelector({ selectedFillings, onAdd, onRemove, fillings, title }) {
    const freeFillings = fillings
        .filter(
            (filling) => !selectedFillings.find((selectedFilling) => selectedFilling.name === filling.name)
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
                            disabled={selectedFillings.length === fillings.length ? true : false}
                        >
                            Add {title}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            {freeFillings.map((filling) => {
                                return (
                                    <li key={filling.name} onClick={() => onAdd(filling)}>
                                        <span className="dropdown-item">{filling.name}</span>
                                    </li>
                                );
                            })}
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
                    {selectedFillings.map((filling, index) => {
                        return (
                            <tr key={filling.name}>
                                <td>{index + 1}</td>
                                <td width="50%">{filling.name}</td>
                                <td width="40%">{formatPrice(filling.price)}</td>
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
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
