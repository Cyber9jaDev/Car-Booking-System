import { useContext } from 'react';
import Main from '../../components/admin/Main'
import { TripContext, TripContextProvider, TripContextType } from '../../contexts/admin/TripContext'
// import Highlight from '../../components/admin/Highlight';

const Home = () => {
  // const tripContext =  useContext(TripContext);

  // console.log(tripContext);

  return (
    <>
    <TripContextProvider>
      <section style={{ minHeight: '100vh', width: '100%', backgroundColor: '#f4f7fe' }} id='admin-homepage'>
        <div className="container-fluid">
          <div className="row gap-0" >
            {/* <Highlight /> */}
            <Main />
          </div>
        </div>
      </section>
    </TripContextProvider>
    </>
  )
}

export default Home