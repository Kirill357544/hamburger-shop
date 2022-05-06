import OrderStorage from "../../OrderStorage";
import History from "../../components/history/History";

export default function HistoryPage() {
    return (
        <>
            <h1 className="mb-3 pb-3 border-bottom">Order History</h1>
            <History OrderStorage={OrderStorage} />
        </>
    );
}
