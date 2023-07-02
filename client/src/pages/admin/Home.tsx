import Main from '../../components/admin/Main'
// import Highlight from '../../components/admin/Highlight';

const Home = () => {
  return (
    <section style={{ minHeight: '100vh', width: '100%', backgroundColor: '#f4f7fe' }} id='admin-homepage'>
      <div className="container-fluid">
        <div className="row gap-0" >
          {/* <Highlight /> */}
          <Main />
        </div>
      </div>
    </section>
  )
}

export default Home