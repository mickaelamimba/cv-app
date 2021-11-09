import React, { Fragment} from 'react';
import { XIcon } from '@heroicons/react/outline'
import {Transition} from "@headlessui/react";

 const ClosePanel = ({setIsOpen})=>{
    return(
        <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                <button
                    type="button"
                    className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                    onClick={() =>setIsOpen(false)}
                >
                    <span className="sr-only">Close panel</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
        </Transition.Child>
    )
}

export default ClosePanel
