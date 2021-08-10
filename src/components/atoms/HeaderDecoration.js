import decoration from '../../assets/Decoration.svg';

const HeaderDecoration = ({text1, text2}) => {
    return (
        <>
            <h1 className="decoration">{text1}<br />{text2}</h1>
            <img src={decoration} alt='decoration'/>
        </>
    );
}

export default HeaderDecoration;