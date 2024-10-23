import Image from 'next/image';

const AppSection = () => {
    return (
        <section className="other-section container">
            <div className="row-container">
                <div className="content">
                    <h2>App Is Soon <br /> On App Store</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, tempore aliquid similique nam mollitia corrupti culpa ipsam. Assumenda sapiente impedit sed praesentium!</p>
                    <div className="app-img">
                        <Image src="/app store.png" alt="App Store" width={100} height={50} />
                        <Image src="/play store.png" alt="Play Store" width={100} height={50} />
                    </div>
                </div>
                <div className="image-container">
                    <Image src="/bakery app.png" alt="Bakery App" width={500} height={500} />
                </div>
            </div>
        </section>
    );
};

export default AppSection;
