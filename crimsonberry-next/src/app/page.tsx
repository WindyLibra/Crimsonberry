import '@/globals.css'
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Page() {
  return (
      <div className='flex-col flex min-h-screen'>

        <Header text="Home" />

          <main className="flex-grow">

          </main>

        <Footer />

      </div>
  )
} 