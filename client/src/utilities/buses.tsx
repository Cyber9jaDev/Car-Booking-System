interface BusType{
  value: string, label: string 
}

const companies: BusType[] = [
  {
    value: 'toyota-hiace',
    label: 'Toyota Hiace (16 Seats)'
  }, 
  {
    value: 'mini-bus',
    label: 'Minibus (12 Seats)'
  }, 
  {
    value: 'sienna',
    label: 'Sienna (7 Seats)'
  },  
]

const sortedBuses = () => {
  return companies.sort((a:BusType, b:BusType) => {
    const valueA = a.value.toUpperCase();
    const valueB = b.value.toUpperCase();

    if(valueA < valueB) return -1;
    if(valueA > valueB) return 1;
    return 0;
  })
}


export default sortedBuses;