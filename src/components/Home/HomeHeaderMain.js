import HeaderDecoration from '../atoms/HeaderDecoration';
import MainButton from '../atoms/MainButton';

const HomeHeaderMain = () => {
    return (
        <main>
            <HeaderDecoration text1="Start helping!" text2="Give your unwanted things for charity" />
            <div className="header-links">
                <MainButton text="Give away" />
                <MainButton text="Organize donation" />
            </div>
        </main>
    );
}

export default HomeHeaderMain;