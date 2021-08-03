import { Link } from 'react-router-dom';
import HomeInstructionSteps from './HomeInstructionSteps';

import decoration from '../assets/Decoration.svg';

const HomeInstruction = () => {
    return (
        <section id='home-instruction'>
            <h1>Only 4 simple steps</h1>
            <img src={decoration} alt='decoration'/>
            <HomeInstructionSteps />
            <Link to="/login">Give<br/> away</Link>
        </section>
    );
}

export default HomeInstruction;