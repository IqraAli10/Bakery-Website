import Image from 'next/image';

const BestFood = () => {
    return (
        <section className="other-section container">
            <div className="row-container">
                <div className="image-container">
                    <Image src="/creamy pancake.png" alt="Creamy Pancake" width={500} height={500} />
                </div>
                <div className="content">
                    <h2>Best Sell <br /> Food In This Week!</h2>
                    <div className="rating">
                        <h4>$18:00</h4>
                        <Image src="/five star.png" alt="Five Star Rating" width={100} height={20} />
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos et veritatis dolor obcaecati, inventore excepturi in dolorem cumque, quidem voluptatum qui sit.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente praesentium sint delectus in? Facilis.</p>
                    <button>Buy Now</button>
                </div>
            </div>
        </section>
    );
};

export default BestFood;
