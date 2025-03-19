import '@/globals.css'

interface Header{
    text: string;
}

export default function Header(props:Header){
    return(
        <header className='bg-red-500 size'>

            <div className='flex items-center w-full'>
              <img src="/bars-solid.svg" alt="" width='20' height='20'/>
              <h1 className='text-amber-50 m-auto'>{props.text}</h1>
            </div>

            <div className='flex mt-5 w-full'>
              <img src="/globe.svg" alt="" width='20' height='20' className='bg-fuchsia-50 rounded-es-md rounded-ss-md p-0.5'/>
              <input type="search" placeholder="Search..." height='35' className='bg-fuchsia-50 rounded-ee-md rounded-se-md w-4/5 border-0 h-8' />
              <img src="/grid_icon.svg" alt="" width='28' height='28' className='m-auto'/>
            </div>

        </header>
    )
}