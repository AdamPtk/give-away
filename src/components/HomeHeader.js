import HomeHeaderNavLog from './HomeHeaderNavLog';
import HomeHeaderNav from './HomeHeaderNav';

const HomeHeader = () => {
    return (
        <header id='home-header'>
            <HomeHeaderNavLog />
            <HomeHeaderNav />
        </header>
    );
}

export default HomeHeader;