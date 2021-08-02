import HomeHeaderNavLog from './HomeHeaderNavLog';
import HomeHeaderNav from './HomeHeaderNav';
import HomeHeaderMain from './HomeHeaderMain';

const HomeHeader = () => {
    return (
        <header id='home-header'>
            <HomeHeaderNavLog />
            <HomeHeaderNav />
            <HomeHeaderMain />
        </header>
    );
}

export default HomeHeader;