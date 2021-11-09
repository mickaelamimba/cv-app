import React from 'react';

const AboutMe = ({title,body}) => {
    return (
        <div>
            <hr/>
            <div className="grid grid-cols-3 gap-4 py-2">
                <div>
                    <h3 className="text-purple-300 text-xl">{title}</h3>
                </div>
                <div className="col-span-2">
                    <p className="text-indigo-900">{body}</p>

                </div>
            </div>
            <hr/>
        </div>
    );
};

export default AboutMe;