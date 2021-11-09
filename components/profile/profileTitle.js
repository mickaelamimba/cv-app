import React from 'react';
import {Dialog} from "@headlessui/react";

const ProfileTitle = ({title}) => {
    return (
        <div className="px-4 sm:px-6">
             <span className="inline-block h-14 w-14 rounded-full overflow-hidden bg-gray-100">
        <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </span>
            <Dialog.Title className="text-lg font-medium text-gray-900">{title}</Dialog.Title>
        </div>
    );
};

export default ProfileTitle;