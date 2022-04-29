import Hamburger from "./Hamburger";
import Header from "./components/Header";
import History from "./components/History";
import Fillings from "./components/Fillings";
import formatPrice from "./formatter/formatPrice";
import OrderButton from "./components/OrderButton";

export default function App() {
    return (
        <div className="App">
            <Header order={OrderButton}></Header>
            <main className="container">
                <Fillings
                    title={"Toppings"}
                    fillings={Hamburger.TOPPINGS}
                    formatPrice={formatPrice}
                ></Fillings>
                <Fillings
                    title={"Stuffings"}
                    fillings={Hamburger.STUFFINGS}
                    formatPrice={formatPrice}
                ></Fillings>
                <History></History>
            </main>
        </div>
    );
}
