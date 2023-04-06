import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShart from '../TShart.jsx/TShart';

import './Home.css'
import Cart2 from '../Cart/Cart';

const Home = () => {
    let [api, setApi] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/t-shirt-data/main/tshirt.json')
            .then(res => res.json())
            .then((data) => setApi(data))

    }, [])


    let [Cart, setCart] = useState([])

    let toall = (res) => {

        let newCart = [...Cart, res]
        setCart(newCart)


    }

    let handelCart = id => {
        let remaning = Cart.filter(ts => ts._id !== id);
        setCart(remaning)
    }


    return (
        <div className='allop'>

            <div className='  grid grid-cols-3 gap-5 '>


                {
                    api.map(res => <TShart

                        key={res.index}

                        single={res}
                        btn={toall}

                    ></TShart>)
                }
            </div>
            <div className='bg-green-400 h-20  '>

                <Cart2

                    Cart={Cart}
                    handelCart={handelCart}


                ></Cart2>

            </div>

        </div>
    );
};

export default Home;