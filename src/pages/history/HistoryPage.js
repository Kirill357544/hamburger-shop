import History from "../../components/history/History";
import OrderStorage from "../../OrderStorage";

export default function HistoryPage() {
    return (
        <>
            <h1 className="mb-3 pb-3 border-bottom">Order History</h1>
            <History OrderStorage={OrderStorage} />
        </>
    );
}
