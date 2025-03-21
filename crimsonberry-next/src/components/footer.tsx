import '@/globals.css'

export default function Footer(){
    return(
        <footer className='w-full'>
            <div className='flex mx-auto sizer justify-between items-center'> 
                <img src="/house-solid.svg" width={20} height={20} alt="" />
                <img src="/magnifying-glass-solid.svg" width={20} height={20} alt="" />
                <img src="/table-cells-large-solid.svg" width={20} height={20} alt="" />
                <img src="/print-solid.svg" width={20} height={20} alt="" />
                <img src="/circle-regular.svg" width={20} height={20} alt="" />
            </div>
        </footer>
    )
}