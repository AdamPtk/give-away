import HomeInstructionStep from './HomeInstructionStep';
import icon1 from '../../assets/Icon-1.svg';
import icon2 from '../../assets/Icon-2.svg';
import icon3 from '../../assets/Icon-3.svg';
import icon4 from '../../assets/Icon-4.svg';

const HomeInstructionSteps = () => {
    return (
        <section className="steps">
            <HomeInstructionStep icon={icon1} step={"Choose things"} text={"clothes, toys, tools, etc."}/>
            <HomeInstructionStep icon={icon2} step={"Pack them"} text={"use trash bags"}/>
            <HomeInstructionStep icon={icon3} step={`Decide who you want to help`} text={"choose trusted place"}/>
            <HomeInstructionStep icon={icon4} step={"Order the delivery"} text={"courier will arrive in convinient time"}/>
        </section>
    );
}

export default HomeInstructionSteps;