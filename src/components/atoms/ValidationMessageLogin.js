const ValidationMessageLogin = ({validationEl, text}) => {
    if (validationEl) {
        return <span style={{
                    color: "red", 
                    alignSelf: "flex-start", 
                    lineHeight: "2rem"}}>{text}</span>;
    } else {
        return null;
    }
}

export default ValidationMessageLogin;