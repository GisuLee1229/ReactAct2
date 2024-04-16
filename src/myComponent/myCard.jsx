function Card(props) {
    
    return (
     <div className='mx-5 md:mx-10 lg:mx-20 mt-10 md:mt-20 lg:mt-30'>
        <div>
            <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold mb-5 text-white">Demon Slayer 9 Hashira Name And Title</h2>
            <div className="grid grid-cols-2 place-items-center gap-y-10 md:gap-y-20 lg:gap-y-30 gap-x-10 md:gap-x-20 lg:gap-x-30 md:grid-cols-3 lg:grid-cols-4">
                {
                    props.datav.map((items, index) => {
                        return (
                            <div className='relative' key={index}>
                                <img className="object-cover rounded-full h-24 md:h-32 lg:h-40 w-24 md:w-32 lg:w-40" src={items.image} alt={items.id}/>
                                <h1 className='text-xs md:text-sm lg:text-base text-white'>{items.text}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </div>

        <div>
            <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold mb-5 text-white">Main And Side Characters</h2>
            <div className="grid lg:grid-cols-2 place-items-center mt-10 md:mt-20 lg:mt-30 gap-y-10 md:gap-y-20 lg:gap-y-30 gap-x-10 md:gap-x-20 lg:gap-x-30 md:grid-cols-1">
                {
                    props.datav2.map((items, index) => {
                        return (
                            <div key={index}>
                                <img className="object-cover h-64 md:h-80 lg:h-96 w-full" src={items.image} alt={items.id}/>
                                <p className="text-center text-white">{items.text}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
     </div>
    )
}

export default Card
