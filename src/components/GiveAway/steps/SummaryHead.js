import {useContext} from "react";
import {GiveAwayContext} from "../GiveAwayMain";

import tshirt from '../../../assets/Icon-1.svg';
import locationImg from '../../../assets/Icon-4.svg';

export default function SummaryHead() {
    const {formData} = useContext(GiveAwayContext);

    return (
        <div className="summary-head">
            <h2>You give away:</h2>
            <div className="sum">
                <img src={tshirt} alt="tshirt" />
                <span>{formData.bags} {formData.bags > 1 ? "bags" : "bag"}, {formData.category.replaceAll("-", " ")}, recipent</span>
            </div>
            <div className="location">
                <img src={locationImg} alt="location" />
                <span>location: {formData.location} {formData.organization ? `, ${formData.organization}` : null}</span>
            </div>
        </div>
    )
}
