import React from 'react';
import Head from "next/head";
import {useOpen} from "../../context/openContext";
import HeaderTop from "../headerTop/headerTop";

const Layout = ({children}) => {
    const {handleOpen}=useOpen()
    return (
        <>
            <Head>
                <title>Cv AMIMBA</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/MagikosWebLogo.png" />
            </Head>
            <handler className="p-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
                <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">AMIMBA Mickael</h3>
                    <p className="mt-2 max-w-4xl text-sm text-gray-500">Developpeur web / web mobile</p>
                </div>
                <button onClick={handleOpen} className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400">
                    À propos
                </button>

            </handler>
            <HeaderTop/>
            <main className="container mx-auto px-4">
                {children}
            </main>
            <footer>

            </footer>
        </>
    );
};

export default Layout;