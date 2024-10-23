import Image from 'next/image';

const About = () => {
    return (
        <section className="other-section container">
            <div className="row-container">
                <div className="image-container">
                    <Image src="/cupcake.jpg" alt="Cupcake" width={500} height={500} />
                </div>
                <div className="content">
                    <h2>About Bakevy Bakery</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum dicta in saepe quasi esse voluptatibus architecto, vel enim perferendis molestiae velit?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore dolores consequatur inventore vero ex!</p>
                    <button>More About</button>
                </div>
            </div>
        </section>
    );
};

export default About;
