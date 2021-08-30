import {Link} from 'react-router-dom';

import HeaderDecoration from "../../atoms/HeaderDecoration";

export default function Thanks() {
    return (
        <div className="thanks">
            <HeaderDecoration 
                text1="Thank you for submitting the form."
                text2="We will send you the rest of information by email."
            />
            <Link to="/">Homepage</Link>
        </div>
    )
}
