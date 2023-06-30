import Main from '../../components/admin/Main'
import Highlight from '../../components/admin/Highlight'

const Home = () => {
  return (
    <section style={{ minHeight: '100vh', width: '100%' }} id='admin-homepage'>
      <div className="container-fluid">
        <div className="row">
          <Highlight />
          <Main />
        </div>
      </div>
    </section>
  )
}

export default Home