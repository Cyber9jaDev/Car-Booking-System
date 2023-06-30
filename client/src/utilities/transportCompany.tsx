interface CompanyType{
  value: string, label: string 
}
const companies: CompanyType[] = [
  {
    value: 'God is God Motors',
    label: 'gig'
  }, 
  {
    value: 'Agofure',
    label: 'agofure'
  }, 
  {
    value: 'ABC Transport Services',
    label: 'abc'
  }, 
  {
    value: 'Chisco Transport Service Ltd',
    label: 'chisco'
  }, 
  {
    value: 'Efex Executive Travel',
    label: 'efex'
  }, 
]

const sortedTransportCompany = () => {
  return companies.sort((a:CompanyType, b:CompanyType) => {
    const valueA = a.value.toUpperCase();
    const valueB = b.value.toUpperCase();

    if(valueA < valueB) return -1;
    if(valueA > valueB) return 1;
    return 0;
  })
}


export default sortedTransportCompany;