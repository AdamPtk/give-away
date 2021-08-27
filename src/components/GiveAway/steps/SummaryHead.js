import {useContext} from "react";
import {GiveAwayContext} from "../GiveAwayMain";

import tshirt from '../../../assets/Icon-1.svg';
import location from '../../../assets/Icon-4.svg';

export default function SummaryHead() {
    const {formData} = useContext(GiveAwayContext);

    return (
        <div className="summary-head">
            <h2>You give away:</h2>
            <div className="sum">
                <img src={tshirt} alt="tshirt" />
                <span>bags, {formData.category.replaceAll("-", " ")}, recipent</span>
            </div>
            <div className="location">
                <img src={location} alt="location" />
                <span>location: </span>
            </div>
        </div>
    )
}
