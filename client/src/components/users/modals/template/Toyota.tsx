import { ReactElement } from "react";

export interface BusSeatObject{
  className: string,
  seatNo: number,
  element: ReactElement
}

export const ToyotaSeat: BusSeatObject[] = [
  {
    className: 'seats__wrapper steering',
    seatNo: 0,
    element: <div className="steering"> 
              <img src={ new URL('../../../../assets/steering-black.svg',  import.meta.url).href } alt="steering" /> 
            </div>
  },
  {
    className: 'seats__wrapper hidden',
    seatNo: 0,
    element: <div className="seats">  </div>
  },
  {
    className: 'seats__wrapper hidden',
    seatNo: 0,
    element: <div className="seats">  </div>
  },
  {
    className: 'seats__wrapper',
    seatNo: 1,
    element: <div className="seats"> 1 </div>
  },
  {
    className: 'seats__wrapper',
    seatNo: 2,
    element: <div className="seats"> 2 </div>
  },
  {
    className: 'seats__wrapper',
    seatNo: 3,
    element: <div className="seats"> 3 </div>
  },
  {
    className: 'seats__wrapper',
    seatNo: 4,
    element: <div className="seats"> 4 </div>
  },
  {
    className: 'seats__wrapper hidden',
    seatNo: 0,
    element: <div className="seats">  </div>
  },
  {
    className: 'seats__wrapper',
    seatNo: 5,
    element: <div className="seats"> 5 </div>
  },
  {
    className: 'seats__wrapper',
    seatNo: 6,
    element: <div className="seats"> 6 </div>
  },
  {
    className: 'seats__wrapper hidden',
    seatNo: 0,
    element: <div className="seats"> 0 </div>
  },
  {
    className: 'seats__wrapper',
    seatNo: 7,
    element: <div className="seats"> 7 </div>
  },
  {
    className: 'seats__wrapper',
    seatNo: 8,
    element: <div className="seats"> 8 </div>
  },
  {
    className: 'seats__wrapper',
    seatNo: 9,
    element: <div className="seats"> 9 </div>
  },
  {
    className: 'seats__wrapper hidden',
    seatNo: 0,
    element: <div className="seats"> 0 </div>
  },
  {
    className: 'seats__wrapper',
    seatNo: 10,
    element: <div className="seats"> 10 </div>
  },
  {
    className: 'seats__wrapper',
    seatNo: 11,
    element: <div className="seats"> 11 </div>
  },
  {
    className: 'seats__wrapper',
    seatNo: 12,
    element: <div className="seats"> 12 </div>
  },
  {
    className: 'seats__wrapper',
    seatNo: 13,
    element: <div className="seats"> 13 </div>
  },
  {
    className: 'seats__wrapper',
    seatNo: 14,
    element: <div className="seats"> 14 </div>
  },
]