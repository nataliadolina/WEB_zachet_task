let msk_hotels = {
    value: "Msk1",
    next: {
      value: "Msk2",
      next: {
        value: "Msk3",
        next: {
          value: "Msk4",
          next: null
        }
      }
    }
};

let sp_hotels = {
    value: "Sp1",
    next: {
      value: "Sp2",
      next: {
        value: "Sp3",
        next: {
          value: "Sp4",
          next: null
        }
      }
    }
};

let sp_hotels = {
    value: "Nsk1",
    next: {
      value: "Nsk2",
      next: {
        value: "Nsk3",
        next: {
          value: "Nsk4",
          next: null
        }
      }
    }
};

let hotels = { 
    "Moscow": msk_hotels,
    "Saint-Petersburg": sp_hotels,
    "Novosibirsk": nsk_hotels
}

let cities = ["Moscow", "Saint-Petersburg", "Novosibirsk"]  

function get_hotels(city){
    let hotels = hotels[city]
    var select = document.getElementById('hotel');
    let tmp = hotels;
    while (tmp) {
        tmp = tmp.next;
        var option = document.createElement("option");
        option.value = tmp;
        option.innerHTML = tmp;
        select.appendChild(option);
    }
}

function get_cities(){
    var select = document.getElementById('city');
    cities.forEach(element => {
        var option = document.createElement("option");
        option.value = element;
        option.innerHTML = element;
        select.appendChild(option);
    });

}