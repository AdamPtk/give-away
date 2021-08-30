import {useContext} from "react";
import {GiveAwayContext} from "../GiveAwayMain";

import SummaryLine from "./SummaryLine";

export default function SummaryCol1() {
    const {formData} = useContext(GiveAwayContext);

    return (
        <div className="col">
            <h2>Pickup address</h2>
            <div>
                <SummaryLine label="Date" text={formData.date}/>
                <SummaryLine label="Time" text={formData.time}/>
                <SummaryLine label="Comment" text={formData.comment}/>
            </div>
        </div>
    )
}