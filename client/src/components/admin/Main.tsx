import { useEffect, useState } from 'react';
import '../../sass/admin/main.scss';

const Main = () => {
  const [time, setTime] = useState({ 
    hour: new Date().getHours(),
    minute: new Date().getMinutes(),
    second: new Date().getSeconds(),
  });

  useEffect(() => {
    const time_ = setInterval(() => {
      setTime({ hour: new Date().getHours(), minute: new Date().getMinutes(), second: new Date().getSeconds()})
    }, 1000)
    return () => { clearInterval(time_) }
  }, [time])
  

  // useEffect(() => {
  //   const date__ = () => {
  //     const _date = new Date();
  //       setInterval(() => {
  //         setDate({ hour: _date.getHours(), minute: _date.getMinutes(), second: _date.getSeconds()})
  //       }, 1000);
  //   }
  //   date__();
  //   return () => { date__() }
  // }, [ date ]);
  
  const { hour, minute, second } = time;
  
  // console.log(date);
  return (
    <section id='main' className='col-sm-12 col-md-10'>
      <header className='d-flex align-items-center h-100 w-100'>
        <i className="me-auto fa-solid fa-bars-staggered"></i>
        <div className="date p-2 ms-auto border border-1 border-black">
          <span>{ hour }</span> : <span> { minute } </span> : <span> { second } </span>
        </div>
      </header>
    </section>
  )
}

export default Main;