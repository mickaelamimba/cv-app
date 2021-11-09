import React from 'react';

import frontEnd from '../../public/frontEnd.png';
import backEnd from '../../public/backEnd.png'
import Image from "next/image";
const CardSkill = ({skill}) => {


    return (

            <article className="bg-bg-indigo-100 shadow-md rounded-lg p-4 ">
                <h3 className="text-blue-600 text-xl">{skill.title}</h3>
                <section className="grid grid-cols-3 sm:grid-cols-2  gap-5 justify-content-center items-center py-4">
                    {skill.logo?.map((item,i)=>(
                        <figure className="w-24" key={i} >
                            <Image className="mb-3" src={item.img} alt={item.legend} height={400} width={400} objectFit='scale-down' layout='responsive'  />
                            <figcaption className="text-gray-600 font-medium">{item.legend}</figcaption>
                        </figure>

                    ))}
                </section>
            </article>

    );
};

export default CardSkill;