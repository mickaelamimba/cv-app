import React, {Fragment} from 'react';
import ClosePanel from "./closePanel";
import {Transition} from "@headlessui/react";
import ProfileTitle from "./profileTitle";

const ProfileContainer = ({children,setIsOpen,title}) => {
    return (
        <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
        >
            <div className="relative w-screen max-w-md">
                <ClosePanel setIsOpen={setIsOpen}/>

                <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                    <ProfileTitle title={title}/>
                    <div className="mt-6 relative flex-1 px-4 sm:px-6">
                        {children}
                    </div>
                </div>
            </div>
        </Transition.Child>
    );
};

export default ProfileContainer;