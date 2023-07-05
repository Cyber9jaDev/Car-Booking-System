export interface CitiesInterface{
  label: string; value: string 
}

const cities: CitiesInterface[] = [
    {
      label: "Lagos",
      value: "lagos",
    }, 
    {
      label: "Kano",
      value: "kano",
    }, 
    {
      label: "Abuja",
      value: "abuja",
    }, 
    {
      label: "Ibadan",
      value: "ibadan",
    }, 
    {
      label: "Port Harcourt",
      value: "ph",
    }, 
    {
      label: "Aba",
      value: "aba",
    }, 
    {
      label: "Onitsha",
      value: "onitsha",
    }, 
    {
      label: "Maiduguri",
      value: "maiduguri",
    }, 
    {
      label: "Benin",
      value: "benin",
    }, 
    {
      label: "Shagamu",
      value: "shagamu",
    }, 
    {
      label: "Ogbomoso",
      value: "ogbomoso",
    }, 
    {
      label: "Owerri",
      value: "owerri",
    }, 
    {
      label: "Ikeja",
      value: "ikeja",
    }, 
    {
      label: "Osogbo",
      value: "osogbo",
    }, 
    {
      label: "Agege",
      value: "gege",
    }, 
    {
      label: "Sokoto",
      value: "sokoto",
    },  
    {
      label: "Nnewi",
      value: "nnewi",
    }, 
    {
      label: "Ilesa",
      value: "ilesa",
    }, 
    {
      label: "Minna",
      value: "minna",
    },  
    {
      label: "Oshodi",
      value: "oshodi",
    }, 
    {
      label: "Surulere",
      value: "surulere",
    }, 
    {
      label: "Mushin",
      value: "mushin",
    },  
    {
      label: "Ojota",
      value: "ojota",
    },  
    {
      label: "Ikoyi",
      value: "ikoyi",
    }, 
    {
      label: "Warri",
      value: "warri",
    },  
    {
      label: "Suleja",
      value: "suleja"
    },
    {
      label: "Akure",
      value: "akure"
    },
    {
      label: "Ekiti",
      value: "ekiti"
    },
    {
      label: "Osun",
      value: "osun"
    },
    {
      label: 'Muritala Muhammed Intl Airport',
      value: "mma"
    }  
]

const Cities = (): CitiesInterface[] => {
  return cities.sort((a: CitiesInterface, b: CitiesInterface) => {
    const valueA = a.value.toUpperCase();
    const valueB = b.value.toUpperCase();
    if(valueA < valueB) return -1;
    if(valueA > valueB) return 1
    return 0
  })
}
export default Cities;