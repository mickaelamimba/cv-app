import React from 'react';

const ContactInfo = ({address,tel,email}) => {
    return (
        <>
            <div className="grid grid-cols-3 text-indigo-900 py-2 ">
                <h3 className="text-purple-300 text-xl">
                    <span>Adresse:</span>
                </h3>
                <div className="col-span-2">
                    <address>{address}</address>
                </div>
                <h3 className="text-purple-300 text-xl">
                    <span>Numero de télephone :</span>
                </h3>
                <p className="col-span-2">
                    {tel}
                </p>
                <h3 className="text-purple-300 text-xl">
                    <span>Email:</span>
                </h3>
                <p className="col-span-2">{email}</p>

            </div>
            <hr/>
        </>

    );
};

export default ContactInfo;