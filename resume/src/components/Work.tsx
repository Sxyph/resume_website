import React from 'react';

const items = [
    {
        name: "Mirexus Biotechnolgies Inc.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEcSOCtE-FgChySY61wXoTm8umWa7bjosD75kEOhPpfg&s"
    },
    {
        name: "Bunzl Safety",
        image: "https://media.licdn.com/dms/image/C4D0BAQGxCPb9WxmSag/company-logo_200_200/0/1534324484220?e=2147483647&v=beta&t=FSAhcRNQgrMEm_EOjyLDTmC5SfN2ElMisZFCqYBabxg"
    },
    {
        name: "Beertown Public House",
        image: "https://assets.untappd.com/venuelogos/venue_472431_39376d68_bg_176.png?v=1"
    }
];

const Work = () => (
    <div className="mx-auto p-6 w-2/3 bg-zinc-900 rounded-lg border-zinc-800 border-x-2 border-y-2">
        <h2 className="text-zinc-200 text-2xl font-bold mb-4">Work Experience</h2>
        <ul className="flex flex-col">
            {items.map(item => (
                <li className="flex mb-4 border-zinc-800 border-y-2 p-2" key={item.name}>
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-full mr-4 bg-white"
                    />
                    <span className="font-medium text-zinc-400 py-2">{item.name}</span>
                </li>
            ))}
        </ul>
    </div>
);

export default Work;