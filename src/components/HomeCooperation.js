import HeaderDecoration from './atoms/HeaderDecoration';
import CooperationButton from './atoms/CooperationButton';

const HomeCooperation = () => {
    return (
        <section id='home-cooperation'>
            <HeaderDecoration text1="Who we're helping?" />
            <div className="buttons">
                <CooperationButton text="Foundations" />
                <CooperationButton text="Non-profit organizations" />
                <CooperationButton text="Local donations" />
            </div>
            <div className="content">
                <p></p>
            </div>
        </section>
    );
}

export default HomeCooperation;