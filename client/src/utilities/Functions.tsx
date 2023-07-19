import { toast } from "react-hot-toast";
import { buses, cities } from "./Constants";

export const Toast = ( type: string, text : string) => {
  if(type === 'success') return toast.success(text);
  return toast.error(text);
}

export const Cities = (): { label: string; value: string }[] => {
  return cities.sort((a: { label: string; value: string }, b: { label: string; value: string }) => {
    const valueA = a.value.toUpperCase();
    const valueB = b.value.toUpperCase();
    if(valueA < valueB) return -1;
    if(valueA > valueB) return 1
    return 0
  })
}

export const Buses = (): { label: string; value: string }[] => {
  return buses.sort((a: { label: string; value: string }, b:{ label: string; value: string }) => {
    const valueA = a.value.toUpperCase();
    const valueB = b.value.toUpperCase();

    if(valueA < valueB) return -1;
    if(valueA > valueB) return 1;
    return 0;
  })
}

export const BusName = (value: string): string => {
  const bus = buses.find(bus => bus.value === value);
  return bus ? bus.label : '' 
}

export const CityName = (value: string): string => {
  const city = cities.find(city => city.value === value);
  return city ? city.label : '' 
}

export const BusImage: { [index: string]: string } = {
  sienna: new URL('../assets/sienna.jpg', import.meta.url).href,
  toyota: new URL('../assets/toyota.jpg', import.meta.url).href,
  minibus: new URL('../assets/minibus.jpg', import.meta.url).href,
}

export const GetDepartureTime = (departureDate: string): string => {
  return new Date(departureDate).toLocaleTimeString();
}

export const GetDepartureDay = (departureDate: string): string => {
  return new Date(departureDate).toDateString();
}