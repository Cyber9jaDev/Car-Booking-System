import { useEffect, useState } from 'react';
import '../../sass/admin/main.scss';
import Dashboard from './Dashboard';

const Main = () => {
  const [time, setTime] = useState({ 
    hour: new Date().getHours(),
    minute: new Date().getMinutes(),
    second: new Date().getSeconds(),
  });

  useEffect(() => {
    const time_ = setInterval(() => {
      setTime({ hour: new Date().getHours(), minute: new Date().getMinutes(), second: new Date().getSeconds()})
    }, 1000);
    return () => clearInterval(time_); 
  }, [time]);
  
  const { hour, minute, second } = time;
  
  return (
    <section id='main' className='p-0 col-sm-12 col-md-10'>
      <header className='d-flex align-items-center h-100 w-100'>
        <i className="ms-sm-2 ms-lg-3 me-auto fa-solid fa-bars-staggered"></i>
        <div className="date py-2 px-3 me-sm-2 me-lg-3 ms-auto border border-1 border-black">
          <span>{ hour }</span> <span>:</span> <span> { minute } </span> <span className=''>:</span> <span> { second } </span>
        </div>
      </header>

      <Dashboard />
    </section>
  )
}

export default Main;