import Highlight from '../../components/admin/Highlight'
import Main from '../../components/admin/Main'
import { AdminContextProvider } from '../../contexts/admin/AdminContext';
// import { AdminContextProvider } from '../../contexts/admin/TripContext';

const Home = () => {
  return (
    <AdminContextProvider>
      <section style={{ minHeight: '100vh', width: '100%', backgroundColor: '#f4f7fe' }} id='admin-homepage'>
        <div className="container-fluid">
          <div className="row gap-0" >
            <Highlight />
            <Main />
          </div>
        </div>
      </section>
    </AdminContextProvider>
  )
}

export default Home