import React from 'react';

const Quality = ({quality}) => {

    return (
        <div className="grid grid-cols-2 gap-3 text-indigo-900 py-2">
            <h3 className="text-blue-300 text-xl">
                <span>{quality.title}</span>
            </h3>
            <p className="col-span-2">
                {quality.items}
            </p>

        </div>
    );
};

export default Quality;