import {useState} from "react";

import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

const HomeThreeColumnsCol = ({count, item}) => {
    const [state, setState] = useState({visible: false});

    const onChangeVisibility = isActive => {
        setState({ ...state, visible: isActive });
    }

    return (
        <div className='column'>
            <VisibilitySensor onChange={e => onChangeVisibility(e)} active={!state.visible} partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                    <div>
                        {isVisible ? <CountUp start={0} end={count} duration={2}/> : <span>0</span>}
                    </div>
                )}
            </VisibilitySensor>
            <h3>{item}</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Numquam dolor nulla nisi ipsa ipsam qui beatae accusantium iusto quisquam id.
            </p>
        </div>
    );
}

export default HomeThreeColumnsCol;