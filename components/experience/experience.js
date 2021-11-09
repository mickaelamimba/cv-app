import React from 'react';
import { Tab} from '@headlessui/react'
const Experience = ({data}) => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return (

        <div >
            <h2 className="text-gray-600 text-2xl text-center" >Experience </h2>
        <Tab.Group  >
            <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
                {data?.map((head)=>(
                    <Tab
                        key={head.id}
                        className={({selected})=>classNames(
                            'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
                            'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                            selected
                                ? 'bg-indigo-200 shadow'
                                : 'text-blue-100 hover:bg-indigo/[0.12] hover:text-indigo-600'
                        )}
                    >
                        {head.year}
                    </Tab>
                ))}
            </Tab.List>

            <Tab.Panels className="mt-2">

                {data?.map((items)=>(
                    <Tab.Panel key={items.id}>
                        <div className="p-3">
                            <h3 className="text-blue-600 text-xl">{items.title}</h3>
                            <p className="text-blue-900">
                                <span>{items.business}</span>
                            </p>
                            <div>
                                <ul className="list-disc list-inside">
                                    {items.items.map((list,i)=>(
                                        <li className="text-gray-600" key={i}>{list}</li>
                                    ))

                                    }
                                </ul>
                            </div>
                        </div>

                    </Tab.Panel>
                ))

                }

            </Tab.Panels>

        </Tab.Group>
        </div>

    );
};

export default Experience;