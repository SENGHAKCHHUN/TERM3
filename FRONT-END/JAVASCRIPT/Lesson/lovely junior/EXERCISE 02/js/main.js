let users = [
    {
      "name": "Madden Medina",
      "gender": "male",
      "company": "BOINK",
      "email": "maddenmedina@boink.com",
      "phone": "+1 (808) 442-3969",
      "address": "486 Jerome Avenue, Staples, American Samoa, 2014"
    },
    {
      "name": "Graves Talley",
      "gender": "male",
      "company": "CEDWARD",
      "email": "gravestalley@cedward.com",
      "phone": "+1 (974) 449-3500",
      "address": "807 Bristol Street, Bascom, Oklahoma, 4102"
    },
    {
      "name": "Parks Greene",
      "gender": "male",
      "company": "ASSISTIA",
      "email": "parksgreene@assistia.com",
      "phone": "+1 (898) 550-2421",
      "address": "392 Schenck Place, Taft, Virginia, 2053"
    },
    {
      "name": "Georgina Bray",
      "gender": "female",
      "company": "GOKO",
      "email": "georginabray@goko.com",
      "phone": "+1 (870) 516-2040",
      "address": "470 Taylor Street, Forbestown, District Of Columbia, 9290"
    },
    {
      "name": "Hoover Lindsey",
      "gender": "male",
      "company": "WAZZU",
      "email": "hooverlindsey@wazzu.com",
      "phone": "+1 (942) 432-2941",
      "address": "389 Herkimer Court, Beaulieu, Colorado, 2949"
    }
];


// loop create card names-----------------------------------------------------------------------
for (let i in users){
  let result = document.querySelector("#result")
  let card = document.createElement("div");
  card.dataset.index = i
  card.className = "card";
  card.textContent = users[i].name;
  card.style.fontWeight = "bold";
  card.style.fontSize = "20px";
  card.addEventListener("click",show_detail)
  result.appendChild(card);
}

// variables for display detail----------------------------------------------------------------
let person_name = document.createElement("span");
let company = document.createElement("p");
let email = document.createElement("p");
let phone = document.createElement("p");
let address = document.createElement("p");

// change font style in body------------------------------------------------------------------
document.body.style.fontFamily = "Helvetica";

// function to display detail news------------------------------------------------------------
function show_detail(e){
  let index = e.target.dataset.index

  let detail = document.querySelector("#detail");

  // user name
  person_name.textContent =  users[index].name;
  detail.appendChild(person_name);
  person_name.style.fontWeight = "bold";
  person_name.style.fontSize = "20px";

  // company
  company.textContent = "Company:"+" "+users[index].company;
  detail.appendChild(company);

  // Email
  email.textContent = "Email:" + "  " + users[index].email;
  detail.appendChild(email);

  // Phone number
  phone.textContent = "Phone:"+" "+ users[index].phone;
  detail.appendChild(phone);
  
  // address
  address.textContent = "Address:"+" "+ users[index].address;
  detail.appendChild(address);

}
