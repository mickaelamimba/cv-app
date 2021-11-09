import React, {Fragment} from 'react';
import { Dialog, Transition } from '@headlessui/react'



import ProfileContainer from "./profileContainer";
import {useOpen} from "../../context/openContext";


const Profile = ({children}) => {
    const {open,handleOpen}=useOpen()


    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={handleOpen}>
                <div className="absolute inset-0 overflow-hidden">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>
                    <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
                        <ProfileContainer title="Développer web" setIsOpen={handleOpen}>
                            {children}
                         </ProfileContainer>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default Profile;