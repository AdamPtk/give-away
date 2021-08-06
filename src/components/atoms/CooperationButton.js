const CooperationButton = ({text, setData, className}) => {
    const handleClick = () => {
        if (typeof setData === "function") {
            setData();
        }
    }

    return (
        <button className={className} onClick={handleClick}>{text}</button>
    );
}

export default CooperationButton;