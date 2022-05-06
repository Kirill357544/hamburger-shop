import { useState } from "react";
import CheckModal from "./CheckModal";

export default function Check({ hamburger, countAndPrice }) {
    const [check, setCheck] = useState(null);

    return (
        <>
            <div className="col-8 text-end">
                <button className="btn btn-lg btn-success" data-toggle="modal" onClick={() => setCheck(true)}>
                    <i className="bi bi-cart4 me-2"></i>
                    Buy It!
                </button>
            </div>
            {check !== null && (
                <CheckModal
                    hamburger={hamburger}
                    countAndPrice={countAndPrice}
                    onClose={() => setCheck(null)}
                />
            )}
        </>
    );
}
