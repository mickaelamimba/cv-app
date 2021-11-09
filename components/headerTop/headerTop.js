import React from 'react';
import Image from "next/image"
import logo from "/public/MagikosWebLogo.png"

const HeaderTop = () => {
    return (
        <div className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="block">Ready for new experiences </span>
                    <span className="block text-indigo-600">Learning is the key to the future.</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <Image
                        src={logo}
                        objectFit="contain"
                         width={200}
                        height={200}
                    />

                </div>
            </div>
        </div>
    );
};

export default HeaderTop;