import React from 'react';

const TShart = ({ single, btn }) => {



    let { name, picture, price } = single


    return (
        <div>
            <div className='w-[400px] h-[500px] rounded-lg border-2 relative' >
                <div>
                    <div className=''>
                        <img className=' p-2 w-full h-60' src={picture} alt="" />

                    </div>
                    <div className='text-center'>

                        <p className='pt-5 font-bold text-2xl'>name:{name}</p>
                        <p className='pt-5 font-bold text-2xl'>price:$ {price}</p>
                    </div>
                    <div>
                        <button onClick={()=>btn(single)} className='w-full absolute bottom-0 py-3 text-white bg-orange-300'>buy now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TShart;