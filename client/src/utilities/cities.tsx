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
      value: "Ikare",
      label: "Ikare",
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
      value: "Somolu",
      label: "Somolu",
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
      value: "Apapa",
      label: "Apapa",
    }, 
    {
      value: "Bida",
      label: "Bida",
    }, 
    {
      value: "Ilobu",
      label: "Ilobu",
    }, 
    {
      value: "Ajegunle",
      label: "Ajegunle",
    }, 
    {
      value: "Oshodi",
      label: "Oshodi",
    }, 
    {
      value: "Ifako",
      label: "Ifako",
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
      value: "Ebute-Metta",
      label: "Ebute-Metta",
    }, 
    {
      value: "Ojota",
      label: "Ojota",
    }, 
    {
      value: "Ikotun",
      label: "Ikotun",
    }, 
    {
      value: "Makera",
      label: "Makera",
    }, 
    {
      value: "Umundugba",
      label: "Umundugba",
    }, 
    {
      value: "Ojo",
      label: "Ojo",
    }, 
    {
      value: "Okrika",
      label: "Okrika",
    }, 
    {
      value: "Uselu",
      label: "Uselu",
    }, 
    {
      value: "Kpor",
      label: "Kpor",
    }, 
    {
      value: "Neni",
      label: "Neni",
    }, 
    {
      value: "Ozubulu",
      label: "Ozubulu",
    }, 
    {
      value: "Festac Town",
      label: "Festac Town",
    }, 
    {
      value: "Buguma",
      label: "Buguma",
    }, 
    {
      value: "Hadejia",
      label: "Hadejia",
    }, 
    {
      value: "Amaigbo",
      label: "Amaigbo",
    }, 
    {
      value: "Ungogo",
      label: "Ungogo",
    }, 
    {
      value: "Ikoyi",
      label: "Ikoyi",
    }, 
    {
      value: "Effurun",
      label: "Effurun",
    }, 
    {
      value: "Dikenafai",
      label: "Dikenafai",
    }, 
    {
      value: "Kumbotso",
      label: "Kumbotso",
    }, 
    {
      value: "Nnenasa",
      label: "Nnenasa",
    }, 
    {
      value: "Ojoto",
      label: "Ojoto",
    }, 
    {
      value: "Rumuodomaya",
      label: "Rumuodomaya",
    }, 
    {
      value: "Itu",
      label: "Itu",
    }, 
    {
      value: "Afor-Oru",
      label: "Afor-Oru",
    }, 
    {
      value: "Isinweke",
      label: "Isinweke",
    }, 
    {
      value: "Ogu",
      label: "Ogu",
    }, 
    {
      value: "Nchia",
      label: "Nchia",
    }, 
    {
      value: "Egbeda",
      label: "Egbeda",
    }, 
    {
      value: "Ukpo",
      label: "Ukpo",
    }, 
    {
      value: "Abagana",
      label: "Abagana",
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