import React from 'react'
import Header from "../components/header/header";
import Slider from "../components/slider/slider";
import Card from   "../components/card/cards"
import Accordion from '../components/accordion/accordion';
import Card2 from '../components/card2/card2';
import Footer from '../components/footer/footer';

const cardsList = [
	{
		id: 1,
		title: 'Hello',
	},
	{
		id: 2,
		title: 'Hello',
	},
	{
		id: 3,
		title: 'Hello',
	},
	{
		id: 4,
		title: 'Hello',
	},
	{
		id: 5,
		title: 'Hello',
	},
	{
		id: 6,
		title: 'Hello',
	},

]


export default function Layout() {
    return (
        <div>
            {/* HEADER */}

            <Header />
            {/* SLIDER */}

            <Slider />
            {/* CARDS */}

            <div className="container d-flex flex-wrap justify-content-between mt-3">
                {
                    cardsList.map(item => (
                        <Card key={item.id} />
                    ))
                }
            </div>

			{/* ACCORDION */}

			<Accordion/>
			{/* CARDS2 */}
			<Card2/>
			{/* FOOTER */}
			<Footer/>
        </div>
    )
}