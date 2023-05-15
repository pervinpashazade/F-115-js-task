let id_input = document.getElementById("id")
let fullname = document.getElementById("fullname")
let email = document.getElementById("email")
const btn = document.getElementById("btn")
const table_body = document.querySelector("table tbody")

// step: 3 // new item added to array
let user_list = [{
    id: 1,
    fullname: "Pervin Pashazade",
    email: "pervin@gmail.com"
}]

function render() {
    // clear table body
    table_body.innerHTML = ""

    // loop array
    user_list.forEach(item => {

        // add every item to table body as table row
        table_body.innerHTML += `<tr>
        <th scope="row">${item.id}</th>
            <td>${item.fullname}</td>
            <td>${item.email}</td>
        </tr>`
    })
}

// step: 1
btn.addEventListener("click", addItem)

// step: 2
function addItem() {
    // add new item to array
    user_list.push({
        id: id_input.value,
        fullname: fullname.value,
        email: email.value,
    })
    // step: 4
    render()
}

render()


// task
// 1. submit edəndən sonra inputlar sıfırlansın
// 2. submit buttonun yanında "Sıfırla" buttonu olsun form itemları sıfırlasın
// 3. buttonlara icon əlavə edin
// 4. hər hansı input doldurulmayıbsa html-də bootstrap alertdə error mesajı görsənsin.
// 5. error yoxdusa alert görünməsin
// 6. error varsa submit etmək olmasın
// 7. table row-dan seçilən datanı silmək (Bonus)