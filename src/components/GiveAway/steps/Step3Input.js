import {useContext} from "react";
import {GiveAwayContext} from "../GiveAwayMain";

export default function Step3Input() {
    const {formData, handleChange} = useContext(GiveAwayContext);

    return (
        <form className="organization-input">
            <input type="text" name="organization" value={formData.organization} onChange={e => handleChange(e)}/>
        </form>
    )
}
