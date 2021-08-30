import {useContext} from "react";
import {GiveAwayContext} from "../GiveAwayMain";

import SummaryLine from "./SummaryLine";

export default function SummaryCol1() {
    const {formData} = useContext(GiveAwayContext);

    return (
        <div className="col">
            <h2>Pickup address</h2>
            <div>
                <SummaryLine label="Street" text={formData.street}/>
                <SummaryLine label="City" text={formData.city}/>
                <SummaryLine label="ZIP Code" text={formData.zipCode}/>
                <SummaryLine label="Phone" text={formData.phone}/>
            </div>
        </div>
    )
}
