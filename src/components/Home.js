import React from 'react';
import './Home.css'
import Product from './Product';

const Home = () => {
    return <div className='home'>
        <img className='home_image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />



        <div className="home_row">
            <Product
                id={1}
                rating={4}
                price={`999.00`}
                aPrice={999.00}
                title={`EDICT by Boat DynaBeats EWH01 Wireless Bluetooth On Ear Headphone with Mic (Black)`}
                image={`https://m.media-amazon.com/images/I/51nCZCTu6XS._SL1500_.jpg`} />
            <Product
                id={2}
                rating={4}
                price={`16,628.68`}
                aPrice={16628.68}
                title={`Amazon Basics Bonded Leather Big & Tall Executive Office Computer Desk Chair, 350-Pound Capacity - Black`}
                image={`https://m.media-amazon.com/images/I/31K1IYrkoQL.jpg`} />
        </div>
        <div className="home_row">
            <Product
                id={3}
                rating={5}
                price={`1,008.15`}
                aPrice={1008.15}
                title={`Amazon Basics New Release Nylon USB-A to Lightning Cable Cord, MFi Certified Charger for Apple iPhone, iPad, Dark Gray, 6-Ft`}
                image={`https://m.media-amazon.com/images/I/61Xgh3kNA3L._AC_SL1500_.jpg`} />
            <Product
                id={4}
                rating={5}
                price={`644.16`}
                aPrice={644.16}
                title={`Amazon Basics Lightweight Super Soft Easy Care Microfiber Pillowcases - 2-Pack, Standard, Gray Crosshatch`}
                image={`https://m.media-amazon.com/images/I/71z-XfqptMS._AC_SL1500_.jpg`} />
            <Product
                id={5}
                rating={4}
                price={`60,490.00`}
                aPrice={60490.00}
                title={`MSI GF75 Thin, Intel i5-10300H, 17.3" FHD IPS-Level 144Hz Panel Laptop (8GB/512GB NVMe SSD/Windows 10 Home/Nvidia GTX1650 4GB GDDR6/Black/2.2Kg), 10SC-095IN`}
                image={`https://m.media-amazon.com/images/I/71+lrnsBN4L._SL1500_.jpg`} />
        </div>

        <div className="home_row">
            <Product
                id={6}
                rating={5}
                price={`38,999.00`}
                aPrice={38999.00}
                title={`LG Ultragear 86.6 cm (34-inch) G-Sync Compatible Curved Ultrawide, 1ms, 144Hz, HDR 10, IPS Gaming Monitor with Height Adjust Stand, HDMI x 2, Display Port - 34GL750-B (Black)`}
                image={`https://m.media-amazon.com/images/I/71S9dis6PRL._SL1500_.jpg`} />

        </div>




    </div>;
};

export default Home;
