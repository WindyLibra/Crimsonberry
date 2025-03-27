import '@/globals.css'

interface Footer{
    icon: string;
}

export default function Footer(props:Footer){

    const style = {
        backgroundColor: 'pink',
    }

    let house, glass, table, print, circle;

    switch (props.icon) {
        case 'home': house = style; break;
        case 'glass': glass = style; break;
        case 'table': table = style; break;
        case 'print': print = style; break;
        case 'circle': circle = style; break;
    }

    return(
        <footer className='w-full fixed bottom-0 z-50'>
            <div className='flex mx-auto sizer justify-between items-center'> 
                <img src="/house-solid.svg" width={20} height={20} alt="" style={house}/>
                <img src="/magnifying-glass-solid.svg" width={20} height={20} alt="" style={glass}/>
                <img src="/table-cells-large-solid.svg" width={20} height={20} alt="" style={table}/>
                <img src="/print-solid.svg" width={20} height={20} alt="" style={print}/>
                <img src="/circle-regular.svg" width={20} height={20} alt="" style={circle}/>
            </div>
        </footer>
    )
}