import Highlight from '../../components/admin/Highlight'
import Main from '../../components/admin/Main'
import { TripContextProvider } from '../../contexts/admin/TripContext'

const Home = () => {
  return (
    <>
    <TripContextProvider>
      <section style={{ minHeight: '100vh', width: '100%', backgroundColor: '#f4f7fe' }} id='admin-homepage'>
        <div className="container-fluid">
          <div className="row gap-0" >
            <Highlight />
            <Main />
          </div>
        </div>
      </section>
    </TripContextProvider>
    </>
  )
}

export default Home