import { memo, useContext } from "react";

import { PriceContext } from "./PriceConfiguration";

export function Price({ price }) {
    const configuration = useContext(PriceContext);

    return (
        <>
            {configuration.currency}
            {price.toFixed(configuration.precision)}
        </>
    );
}

export default memo(Price);
