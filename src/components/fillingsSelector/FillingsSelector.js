export default function FillingsSelector({ onAdd, fillings, title }) {
    return (
        <div className="col-6 rounded-3 border">
            <div className="d-flex justify-content-between">
                <div className="mx-3 mt-2">
                    <h4>{title}</h4>
                </div>
                <div className="mx-3 mt-2">
                    <div className="dropdown">
                        <button
                            className="btn btn-success dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Add {title}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            {fillings.map((filling) => {
                                return (
                                    <li key={filling.name} onClick={(event) => onAdd(filling, event)}>
                                        <span className="dropdown-item">{filling.name}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <table className="table m-0">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Index</td>
                        <td width="50%">Name</td>
                        <td width="50%">Price</td>
                        <td width="auto">
                            <button data-name="name" className="btn btn-sm btn-danger">
                                <i className="bi bi-x-lg"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
