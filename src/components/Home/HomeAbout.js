import HeaderDecoration from '../atoms/HeaderDecoration';
import About from '../atoms/About';
import ImageDiv from '../atoms/ImageDiv';

const HomeAbout = () => {
    return (
        <section id='home-about'>
            <div className="about">
                <HeaderDecoration text1="About us" />
                <About />
            </div>
            <ImageDiv />
        </section>
    );
}

export default HomeAbout;