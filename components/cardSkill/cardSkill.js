import React from 'react';

import frontEnd from '../../public/frontEnd.png';
import backEnd from '../../public/backEnd.png'
import Image from "next/image";
const CardSkill = ({skill}) => {
    console.log(skill)

    return (

            <article className="bg-bg-indigo-100 shadow-md rounded-lg p-3 ">
                <h3 className="text-indigo-600 text-xl">{skill.title}</h3>
                <section className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-content-center items-center py-4">
                    {skill.logo?.map((item,i)=>(
                        <figure className="w-24" key={i} >
                            <Image className="mb-3" src={item.img} alt={item.legend} height={500} width={500} objectFit='contain' layout='responsive'  />
                            <figcaption className="text-gray-600 font-medium">{item.legend}</figcaption>
                        </figure>

                    ))}
                </section>
            </article>

    );
};

export default CardSkill;