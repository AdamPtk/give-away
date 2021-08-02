const HomeInstructionStep = ({icon, step, text}) => {
    return (
        <div className='column'>
            <img src={icon} alt='decoration'/>
            <h3>{step}</h3>
            <p>{text}</p>
        </div>
    );
}

export default HomeInstructionStep;