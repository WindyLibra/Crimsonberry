import '@/globals.css'
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Page() {
  return (
      <div className='flex-col flex'>

        <Header text="Home" />

          <main className="flex-grow">
              
          </main>

        <Footer icon='home'/>

      </div>
  )
} 