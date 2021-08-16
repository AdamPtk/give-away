import HeaderDecoration from '../atoms/HeaderDecoration';
import Step from '../atoms/Step';

const GiveAwayHeaderMain = () => {
    return (
        <main>
            <HeaderDecoration text1="Give the things you don't want" text2="the ones who need them!" />
            <h2>Only 4 steps:</h2>
            <div className="header-steps">
                <Step nr={1} text="Choose things" />
                <Step nr={2} text="Pack them" />
                <Step nr={3} text="Choose foundation" />
                <Step nr={4} text="Order delivery" />
            </div>
        </main>
    );
}

export default GiveAwayHeaderMain;