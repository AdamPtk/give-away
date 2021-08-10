const ValidationMessage = ({el, validationFunc, style, text}) => {
    if (el.length === 0 || validationFunc(el)) {
        return null;
    }
    else {
        return <span style={style}>{text}</span>;
    }
}

export default ValidationMessage;