export type SliderObjType = {
  h4: string,
  h5?: string,
  img: string
}

export type SliderType = SliderObjType[]

const BannerSliderData: SliderType = [
  {
    h4: "24/7 Taxi Service",
    img: new URL('../../assets/banner5.jpg', import.meta.url).href
  },
  {
    h4: "Online Cab Booking",
    h5: 'No Extra Charges',
    img: new URL('../../assets/banner2.jpg', import.meta.url).href
  },
  {
    h4: "Reach Your Destination",
    h5: 'Within Exact Time',
    img: new URL('../../assets/banner3.jpg', import.meta.url).href
  },
  {
    h4: "Travel Safe & Secure",
    h5: 'Assured Cab Service',
    img: new URL('../../assets/banner4.jpg', import.meta.url).href
  }
]

export default BannerSliderData;