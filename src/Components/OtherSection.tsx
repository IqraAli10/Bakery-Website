import Image from 'next/image';

const OtherSection = () => {
    return (
        <section className="other-section container">
            <div className="column-container">
                <h2>Welcome To Our Store</h2>
                <p data-type="centered-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi neque saepe mollitia nisi doloribus tempore. Totam, voluptates temporibus!</p>
                <div className="card-container">
                    {['pastery', 'cookie', 'sandwich', 'bread'].map((item, index) => (
                        <div className="card" data-type="category" key={index}>
                            <Image src={`/${item}.png`} alt={item} width={300} height={300} />
                            <h3>{item.charAt(0).toUpperCase() + item.slice(1)}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OtherSection;
