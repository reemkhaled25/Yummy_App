let mydata = document.getElementById("mydata");
let searchcontent = document.getElementById("search");
let sidnavWidth = $(".wrapper").innerWidth()
closesidenav()
$(document).ready(() => {
    closesidenav()
    $(".loading").fadeOut(500)
    $("body").css("overflow", "auto")
    getmeals()
})
$(".navicon").on("click", () => {
    if ($(".sidenav").css("left") == "0px") {
        closesidenav()
    } else {
        opensidenav()
    }
})
function opensidenav() {
    $(".sidenav").css("left", '0px')
    $(".navicon").removeClass("fa-bars")
    $(".navicon").addClass("fa-xmark")
    console.log("open");
}
function closesidenav() {
    let closedwidth = -sidnavWidth
    $(".sidenav").css("left", closedwidth)
    $(".navicon").removeClass("fa-xmark")
    $(".navicon").addClass("fa-bars")
    console.log("close");
}
function contactform() {
    $(document).ready(() => {
        $(".loading").fadeOut(500)
        $("body").css("overflow", "auto")
        closesidenav()
    })
    searchcontent.innerHTML = ``
    mydata.innerHTML = `<div class="contact-form w-75 m-auto d-flex justify-content-center align-items-center  vh-100" id="contactform">
                    <div class="container  p-2 d-flex justify-content-center align-items-center flex-column">
                        <div class="row">
                            <div class="col-md-6">
                                <input type="text" class="form-control mb-4" id="nameInput" placeholder="Enter Your Name">
                                <div class="alert alert-danger text-center d-none" role="alert" id="nameAlert"  >
                                    Special characters and numbers not allowed
                                  </div> 
                            </div>
                            <div class="col-md-6">
                                <input type="email" class="form-control mb-4" id="emailInput" placeholder="Enter Your Email">
                                <div class="alert alert-danger text-center d-none" role="alert" id="emailAlert"  >
                                    Email not valid *exemple@yyy.zzz
                                  </div> 
                            </div>
                            <div class="col-md-6">
                                <input type="text" class="form-control mb-4" id="phoneInput" placeholder="Enter Your Phone">
                                <div class="alert alert-danger text-center d-none" role="alert" id="phoneAlert"  >
                                    Enter valid Phone Number
                                  </div> 
                            </div>
                            <div class="col-md-6">
                                <input type="number" class="form-control mb-4" id="ageInput" placeholder="Enter Your Age">
                                <div class="alert alert-danger text-center d-none" role="alert" id="ageAlert" >
                                    Enter valid age
                                  </div> 
                            </div>
                            <div class="col-md-6">
                                <input type="password" id="passwordInput" class="form-control mb-4" aria-describedby="passwordHelpBlock"  placeholder="Enter Your Password">
                                <div class="alert alert-danger text-center d-none" role="alert" id="passwordAlert">
                                    Enter valid password *Minimum eight characters, at least one letter and one number:*
                                  </div> 
                            </div>
                            <div class="col-md-6">
                                <input type="password" id="repasswordInput" class="form-control mb-4" aria-describedby="passwordHelpBlock" placeholder="Repassword">
                                <div class="alert alert-danger text-center d-none" role="alert" id="repasswordAlert" >
                                    Enter valid repassword
                                  </div> 
                            </div>
                        </div>
                        <button class="btn btn-outline-danger mt-3" disabled id="submitbutton">Submit</button>
                    </div>
                </div>`;
    let nameInput = document.getElementById("nameInput");
    let emailInput = document.getElementById("emailInput");
    let phoneInput = document.getElementById("phoneInput");
    let ageInput = document.getElementById("ageInput");
    let passwordInput = document.getElementById("passwordInput");
    let repasswordInput = document.getElementById("repasswordInput");
    let submitbutton = document.getElementById("submitbutton");
    let contact_form = document.getElementById("contactform");
    nameInput.addEventListener("keyup", () => {
        if (nameInput.value) {
            if (validname(nameInput.value)) {
                document.getElementById("nameAlert").classList.add("d-none")
                document.getElementById("nameAlert").classList.remove("d-block")

            } else {
                document.getElementById("nameAlert").classList.add("d-block")
                document.getElementById("nameAlert").classList.remove("d-none")
            }
        } else {
            document.getElementById("nameAlert").classList.add("d-block")
            document.getElementById("nameAlert").classList.remove("d-none")
        }
    })
    emailInput.addEventListener("keyup", () => {
        if (emailInput.value) {
            if (validemail(emailInput.value)) {
                document.getElementById("emailAlert").classList.add("d-none")
                document.getElementById("emailAlert").classList.remove("d-block")
            } else {
                document.getElementById("emailAlert").classList.add("d-block")
                document.getElementById("emailAlert").classList.remove("d-none")
            }
        } else {
            document.getElementById("emailAlert").classList.add("d-block")
            document.getElementById("emailAlert").classList.remove("d-none")
        }
    })
    phoneInput.addEventListener("keyup", () => {
        if (phoneInput.value) {
            if (validphone(phoneInput.value)) {
                document.getElementById("phoneAlert").classList.add("d-none")
                document.getElementById("phoneAlert").classList.remove("d-block")
            } else {
                document.getElementById("phoneAlert").classList.add("d-block")
                document.getElementById("phoneAlert").classList.remove("d-none")
            }
        } else {
            document.getElementById("phoneAlert").classList.add("d-block")
            document.getElementById("phoneAlert").classList.remove("d-none")
        }
    })
    ageInput.addEventListener("keyup", () => {
        if (ageInput.value) {
            if (validage(ageInput.value)) {
                document.getElementById("ageAlert").classList.add("d-none")
                document.getElementById("ageAlert").classList.remove("d-block")
                ageval = true;
            } else {
                document.getElementById("ageAlert").classList.add("d-block")
                document.getElementById("ageAlert").classList.remove("d-none")
            }
        } else {
            document.getElementById("ageAlert").classList.add("d-block")
            document.getElementById("ageAlert").classList.remove("d-none")
        }
    })
    passwordInput.addEventListener("keyup", () => {
        if (passwordInput.value) {
            if (validpassword(passwordInput.value)) {
                document.getElementById("passwordAlert").classList.add("d-none")
                document.getElementById("passwordAlert").classList.remove("d-block")
                passwordval = true;

            } else {
                document.getElementById("passwordAlert").classList.add("d-block")
                document.getElementById("passwordAlert").classList.remove("d-none")
            }
        } else {
            document.getElementById("passwordAlert").classList.add("d-block")
            document.getElementById("passwordAlert").classList.remove("d-none")
        }
    })
    repasswordInput.addEventListener("keyup", () => {
        if (repasswordInput.value) {
            if (validrepassword(repasswordInput.value, passwordInput.value)) {
                document.getElementById("repasswordAlert").classList.add("d-none")
                document.getElementById("repasswordAlert").classList.remove("d-block")
                repasswordval = true
            } else {
                document.getElementById("repasswordAlert").classList.add("d-block")
                document.getElementById("repasswordAlert").classList.remove("d-none")
            }
        } else {
            document.getElementById("repasswordAlert").classList.add("d-block")
            document.getElementById("repasswordAlert").classList.remove("d-none")
        }
    })
    contact_form.addEventListener("keyup", () => {
        if (contactActivation(nameInput.value, emailInput.value, phoneInput.value, ageInput.value, passwordInput.value, repasswordInput.value)) {
            submitbutton.removeAttribute('disabled')
        } else {
            submitbutton.setAttribute('disabled', 'disabled')
        }
    })
}
function contactActivation(name, email, phone, age, password, repassword) {
    if (name != " " && email != " " && phone != " " && age != " " && password != " " && repassword != " ") {
        if (validname(name) && validemail(email) &&
            validphone(phone) && validage(age) &&
            validpassword(password) && validrepassword(repassword, password)) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}
function validname(name) {
    let nameregx = /^[a-zA-Z]+$/;
    return nameregx.test(name);
}
function validemail(email) {
    let emailregx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailregx.test(email);
}
function validphone(phone) {
    let phoneregx = /^\S[0-9]{0,11}$/;
    return phoneregx.test(phone);
}
function validage(age) {
    let ageregx = /^\S[0-9]{0,3}$/;
    if (age >= 15 && age <= 90) {
        return ageregx.test(age);
    } else {
        return false
    }
}
function validpassword(password) {
    let passwordregx = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return passwordregx.test(password);
}
function validrepassword(repassword, password) {
    if (validpassword(repassword)) {
        if (repassword == password) {
            return true
        }
        else {
            return false
        }
    }
}
async function getmeals() {
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
    let mealsList = await data.json()
    displaymeals(mealsList.meals)
}
function displaymeals(mealsList) {
    let temp = "";
    for (let i = 0; i < mealsList.length; i++) {
        temp += `<div class="col-md-3">
                <div class="item position-relative" id="${mealsList[i].idMeal}" onclick="getmealdetails(${mealsList[i].idMeal})">
                    <img src="${mealsList[i].strMealThumb}" class="w-100" alt="">
                    <div class="layer">
                        <h2>${mealsList[i].strMeal}</h2>
                    </div>
                </div>
            </div> `
    }
    mydata.innerHTML = temp;
}
async function getcategory() {
    closesidenav()
    $(".loading").fadeIn(500)
    searchcontent.innerHTML = ``
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    let categoryList = await data.json()
    displaycategory(categoryList.categories)
    $(".loading").fadeOut(500)
}
function displaycategory(categoryList) {
    let temp = "";
    for (let i = 0; i < categoryList.length; i++) {
        temp += `<div class="col-md-3">
                <div class="item position-relative" onclick="getmealbycategory('${categoryList[i].strCategory}')">
                    <img src="${categoryList[i].strCategoryThumb}" class="w-100" alt="">
                    <div class="c-layer">
                        <h2>${categoryList[i].strCategory}</h2>
                        <p class="text-center">${categoryList[i].strCategoryDescription.split(" ").slice(0, 15).join(" ")}</p>
                    </div>
                </div>
            </div> `
    }
    mydata.innerHTML = temp;
}
async function getingrediant() {
    closesidenav()
    $(".loading").fadeIn(500)
    searchcontent.innerHTML = ``
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    let ingredList = await data.json()
    displayingred(ingredList.meals.slice(0, 20))
    $(".loading").fadeOut(500)
}
function displayingred(ingredList) {
    let temp = "";
    for (let i = 0; i < ingredList.length; i++) {

        temp += `<div class="col-md-3">
                    <div class="item d-flex justify-content-center align-items-center flex-column text-white" onclick="getmealbyingred('${ingredList[i].strIngredient}')">
                        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                        <h2 class="text-center fs-4">${ingredList[i].strIngredient}</h2>
                        <p class="text-center">${ingredList[i].strDescription.split(" ").slice(0, 10).join(" ")}</p>
                    </div>
                </div>`

    }
    mydata.innerHTML = temp;
}
async function getarea() {
    closesidenav()
    $(".loading").fadeIn(500)
    searchcontent.innerHTML = ``
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    let areaList = await data.json()
    displayarea(areaList.meals)
    $(".loading").fadeOut(500)
}
function displayarea(areaList) {
    let temp = "";
    for (let i = 0; i < areaList.length; i++) {
        temp += `<div class="col-md-3">
                <div class="item d-flex justify-content-center align-items-center flex-column text-white" onclick="getmealbyarea('${areaList[i].strArea}')">
                    <i class="fa-solid fa-house-laptop fa-4x"></i>
                    <h2>${areaList[i].strArea}</h2>
                </div>
            </div>`
    }
    mydata.innerHTML = temp;
}
async function getmealbycategory(category) {
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    let categoryList = await data.json()
    console.log(categoryList.meals);
    displaymeals(categoryList.meals)
}
async function getmealbyingred(ingred) {
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingred}`)
    let ingredList = await data.json()
    console.log(ingredList.meals);
    displaymeals(ingredList.meals)
}
async function getmealbyarea(area) {
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    let areaList = await data.json()
    displaymeals(areaList.meals)
}
function search() {
    closesidenav()
    mydata.innerHTML = ``
    searchcontent.innerHTML = `<div class="col-md-6">
                    <input type="text" class="form-control mb-4" id="snameInput" placeholder="Search By Name" onkeyup="getmealbyname(this.value)">
                </div>
                <div class="col-md-6">
                    <input type="text" class="form-control mb-4" id="fletterInput" placeholder="Search By First Letter" onkeyup="getmealbyfirstletter(this.value)">
                </div>`
}
async function getmealbyname(searchval) {

    if (searchval.length == 0) {
        mydata.innerHTML = " "
    } else {

        let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchval}`)
        let mealsList = await data.json()
        displaymeals(mealsList.meals)
    }

}
async function getmealbyfirstletter(searchval) {

    if (searchval.length > 0) {
        searchval = searchval.slice(0, 1)
        let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchval}`)
        let mealsList = await data.json()
        displaymeals(mealsList.meals)
    } else {
        mydata.innerHTML = ""
    }
}
async function getmealdetails(id) {
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    let mealsList = await data.json()
    let meal = mealsList.meals[0]
    displaymealdetails(meal)
}
function displaymealdetails(meal) {
    let reciepe = ``;
    let tags = meal.strTags;
    if (tags == null) {
        mydata.innerHTML = `<div class="alert alert-danger text-center mt-5" role="alert">
                            There is no reciepe
                            </div>`;
    }
    tags = meal.strTags.split(",")
    let mealtags = ``
    for (let i = 0; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            reciepe += `<li class="alert alert-info m-2 p-1"> ${meal[`strMeasure${i}`]}${meal[`strIngredient${i}`]}</li>`
        }
    }
    if (tags) {
        for (let i = 0; i < tags.length; i++) {
            mealtags += `<li class="alert alert-danger p-1 m-2">${tags[i]}</li>`
        }
    }
    let temp = `<div class="col-md-5">
                    <img src="${meal.strMealThumb}" class="w-100 rounded-3 mt-3" alt="">
                    <h3 class="text-white">${meal.strMeal}</h3>
                  </div>
                  <div class="col-md-7">
                    <h2 class="text-white">Instructions</h2>
                    <p class="text-white"style="text-align: justify;">${meal.strInstructions}</p>
                    <h3 class="fw-bolder text-white">Area : <span>${meal.strArea}</span></h3>
                    <h3 class="fw-bolder text-white">Category : <span>${meal.strCategory}</span></h3>
                    <h3 class="fw-bolder text-white">Recipes :</h3>
                    <ul class="list-unstyled d-flex g-3 flex-wrap">${reciepe}</ul>
                    <h3 class="fw-bolder text-white">Tags :</h3>
                    <ul class="list-unstyled d-flex g-3">${mealtags}</ul>
                    <div> 
                      <a  href="${meal.strSource}" class="btn btn-success"  target="_blank">Source</a>
                      <a  href="${meal.strYoutube}" class="btn btn-danger" target="_blank">Youtube</a>
                    </div>
                  
                  </div> `

    mydata.innerHTML = temp;
}
