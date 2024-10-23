import Image from 'next/image';

const Featured = () => {
    return (
        <section className="other-section container">
            <div className="column-container">
                <h2>OUR FEATURED FOOD</h2>
                <p data-type="centered-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est magnam aperiam delectus tenetur praesentium sunt accusamus voluptate dolor quis laboriosam!</p>
            </div>
            <div className="card-container">
                {['birthday cake', 'muffins', 'waffles', 'pancake', 'piece cake', 'cookies', 'raspberry cake', 'donut'].map((item, index) => (
                    <div className="card" data-type="item" key={index}>
                        <div className="image-part">
                            <Image src={`/${item}.jpg`} alt={item} width={300} height={300} />
                        </div>
                        <div className="detail">
                            <h4>$15.00</h4>
                            <h4>{item.charAt(0).toUpperCase() + item.slice(1)}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Featured;
