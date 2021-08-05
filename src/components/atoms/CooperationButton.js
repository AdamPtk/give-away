const CooperationButton = ({text, value, onClick}) => {
    return (
        <button onClick={onClick} value={value}>{text}</button>
    );
}

export default CooperationButton;