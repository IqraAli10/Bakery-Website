import Image from 'next/image';

const Hero = () => {
    return (
        <section className="hero-section container">
            <div className="content">
                <h1>The Perfect Baked Cake Everyday!</h1>
                <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, deleniti autem quisquam eaque explicabo ex.</p>
                <div className="btn-container">
                    <button>Read More</button>
                    <button data-type="bordered-btn">Order Now</button>
                </div>
            </div>
            <div className="image-container">
                <Image src="/cake.png" alt="Cake" width={500} height={500} />
            </div>
        </section>
    );
};

export default Hero;
