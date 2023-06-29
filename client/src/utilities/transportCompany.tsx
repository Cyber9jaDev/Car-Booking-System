const companies: { value: string, label: string }[] = [
  {
    label: 'All Companies',
    value: 'all'
  }, 
  {
    label: 'God sis God Motors',
    value: 'gig'
  }, 
  {
    label: 'Agofure',
    value: 'agofure'
  }, 
  {
    label: 'ABC Transport Services',
    value: 'abc'
  }, 
  {
    label: 'Chisco Transport Service Ltd',
    value: 'chisco'
  }, 
  {
    label: 'Efex Executive Travel',
    value: 'efex'
  }, 
]

const sortedTransportCompany = () => {
  return companies.sort((a, b) => {
    const valueA = a.label.toUpperCase();
  })
}


export default sortedTransportCompany