import HeaderDecoration from '../atoms/HeaderDecoration';
import MainButton from '../atoms/MainButton';
import HomeInstructionSteps from './HomeInstructionSteps';

const HomeInstruction = () => {
    return (
        <section id='home-instruction'>
            <HeaderDecoration text1="Only 4 steps" />
            <HomeInstructionSteps />
            <MainButton text="Give away" />
        </section>
    );
}

export default HomeInstruction;