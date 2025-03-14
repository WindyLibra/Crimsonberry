import '@/globals.css'

export default function Header(){
    return(
        <header className='bg-red-500 flex flex-col p-2 justify-center items-center'>
            <h1 className='pb-2 text-amber-50'>Home</h1>
            <br />
            <form className='flex'>
                <img src="/globe.svg" alt="" width='20' height='20' className='bg-fuchsia-50 rounded-es-sm rounded-ss-sm p-0.5'/>
                <input type="search" placeholder="Search..." className='bg-fuchsia-50 rounded-ee-sm rounded-se-sm pb-0.5'/>
            </form>
        </header>
    )
}