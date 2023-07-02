interface CitiesInterface{
  value: string; label: string 
}

const cities: CitiesInterface[] = [
    {
      value: "Lagos",
      label: "Lagos",
    }, 
    {
      value: "Kano",
      label: "Kano",
    }, 
    {
      value: "Abuja",
      label: "Abuja",
    }, 
    {
      value: "Ibadan",
      label: "Ibadan",
    }, 
    {
      value: "Port Harcourt",
      label: "Port Harcourt",
    }, 
    {
      value: "Aba",
      label: "Aba",
    }, 
    {
      value: "Onitsha",
      label: "Onitsha",
    }, 
    {
      value: "Maiduguri",
      label: "Maiduguri",
    }, 
    {
      value: "Benin",
      label: "Benin",
    }, 
    {
      value: "Shagamu",
      label: "Shagamu",
    }, 
    {
      value: "Ogbomoso",
      label: "Ogbomoso",
    }, 
    {
      value: "Owerri",
      label: "Owerri",
    }, 
    {
      value: "Ikeja",
      label: "Ikeja",
    }, 
    {
      value: "Osogbo",
      label: "Osogbo",
    }, 
    {
      value: "Agege",
      label: "Agege",
    }, 
    {
      value: "Sokoto",
      label: "Sokoto",
    },  
    {
      value: "Nnewi",
      label: "Nnewi",
    }, 
    {
      value: "Ilesa",
      label: "Ilesa",
    }, 
    {
      value: "Minna",
      label: "Minna",
    },  
    {
      value: "Oshodi",
      label: "Oshodi",
    }, 
    {
      value: "Surulere",
      label: "Surulere",
    }, 
    {
      value: "Mushin",
      label: "Mushin",
    },  
    {
      value: "Ojota",
      label: "Ojota",
    },  
    {
      value: "Ikoyi",
      label: "Ikoyi",
    }, 
    {
      value: "Warri",
      label: "Warri",
    },  
    {
      value: "Suleja",
      label: "suleja"
    },
    {
      value: "Akure",
      label: "Akure"
    },
    {
      value: "Ekiti",
      label: "Ekiti"
    },
    {
      value: "Osun",
      label: "Osun"
    },
    {
      value: 'Muritala Muhammed Intl Airport',
      label: "mma"
    }  
]

const sortedCities = () => {
  return cities.sort((a: CitiesInterface, b: CitiesInterface) => {
    const labelA = a.label.toUpperCase();
    const labelB = b.label.toUpperCase();
    if(labelA < labelB) return -1;
    if(labelA > labelB) return 1
    return 0
  })
}
export default sortedCities;