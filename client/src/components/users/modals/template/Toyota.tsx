import { ReactElement } from "react";

export interface BusSeatObject{
  className: string,
  seatNo: number,
  element: ReactElement
}

export const ToyotaSeat: BusSeatObject[] = [
  {
    className: 'steering',
    seatNo: 0,
    element: <div className="steering"> 
              <img src={ new URL('../../../../assets/steering-black.svg',  import.meta.url).href } alt="steering" /> 
            </div>
  },
  {
    className: 'hidden',
    seatNo: 0,
    element: <div className="seats">  </div>
  },
  {
    className: 'hidden',
    seatNo: 0,
    element: <div className="seats">  </div>
  },
  {
    className: '',
    seatNo: 1,
    element: <div className="seats"> 1 </div>
  },
  {
    className: '',
    seatNo: 2,
    element: <div className="seats"> 2 </div>
  },
  {
    className: '',
    seatNo: 3,
    element: <div className="seats"> 3 </div>
  },
  {
    className: '',
    seatNo: 4,
    element: <div className="seats"> 4 </div>
  },
  {
    className: 'hidden',
    seatNo: 0,
    element: <div className="seats">  </div>
  },
  {
    className: '',
    seatNo: 5,
    element: <div className="seats"> 5 </div>
  },
  {
    className: '',
    seatNo: 6,
    element: <div className="seats"> 6 </div>
  },
  {
    className: 'hidden',
    seatNo: 0,
    element: <div className="seats"> 0 </div>
  },
  {
    className: '',
    seatNo: 7,
    element: <div className="seats"> 7 </div>
  },
  {
    className: '',
    seatNo: 8,
    element: <div className="seats"> 8 </div>
  },
  {
    className: '',
    seatNo: 9,
    element: <div className="seats"> 9 </div>
  },
  {
    className: 'hidden',
    seatNo: 0,
    element: <div className="seats"> 0 </div>
  },
  {
    className: '',
    seatNo: 10,
    element: <div className="seats"> 10 </div>
  },
  {
    className: '',
    seatNo: 11,
    element: <div className="seats"> 11 </div>
  },
  {
    className: '',
    seatNo: 12,
    element: <div className="seats"> 12 </div>
  },
  {
    className: '',
    seatNo: 13,
    element: <div className="seats"> 13 </div>
  },
  {
    className: '',
    seatNo: 14,
    element: <div className="seats"> 14 </div>
  },
]