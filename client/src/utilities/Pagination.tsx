import { useState } from 'react';
import '../sass/pagination.scss';

const Pagination = () => {
  const [page, setPage] = useState(1);
  const totalPages = 28;
  return (
    <section id="pagination" className="w-100 d-flex h-25 align-items-center justify-content-center mt-5">
      <ul className='p-0 d-flex align-items-center'>
        <li onClick={() => setPage(page => page - 1)}  className="d-inline-block me-2 border border-primary rounded px-3 py-2 text-white"><i className="fa-solid fa-angles-left"></i></li>
        <li onClick={() => setPage(page => page - 1)}  className="d-inline-block me-5 border border-primary rounded px-3 py-2 text-white"><i className="fa-solid fa-angle-left"></i></li>
        <li className='d-inline-block'>Page<span className='mx-1'>{page}</span> of <span className='mx-1'>{totalPages}</span></li>
        <li onClick={() => setPage(page => page + 1)} className="d-inline-block ms-5 border border-primary rounded px-3 py-2 text-white"><i className="fa-solid fa-angle-right"></i></li>
        <li onClick={() => setPage(page => page + 1)}  className="d-inline-block ms-2 border border-primary rounded px-3 py-2 text-white"><i className="fa-solid fa-angles-right"></i></li>
      </ul>
    </section>
  )
}

export default Pagination