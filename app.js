const $ = document.querySelector.bind(document)

const openForm = $(".btn-regis")
const openLogin = $(".btn-login")
const form = $(".container-form")
const login = $(".form-login")
openForm.addEventListener("click", function () {

    form.classList.add("open")
})
openLogin.addEventListener("click", function () {

    login.classList.add("open")
})
$(".close-form").addEventListener("click", function () {
    form.classList.remove("open")
})
$(".close-login").addEventListener("click", function () {
    login.classList.remove("open")
})
//class Usser
class users {
    constructor(Name, userName, email, passWord, nationnal) {
        this.Name = Name;
        this.userName = userName;
        this.email = email;
        this.passWord = passWord;
        this.nationnal = nationnal;
    }
    getUserName(){
        return this.userName;
    }
    getName() {
        return this.Name;
    }

    getPassWord(){
        return this.passWord;
    }
    xuatThongTin() {

        console.log(`Name: ${this.Name}`);
        console.log(`userName: ${this.userName}`);
        console.log(`passWord: ${this.passWord}`);
        console.log(`Email: ${this.email}`);
        console.log(`nationnal: ${this.nationnal}`);

    }
}
class StoreUsers {
    constructor(){
        this.users = []
    }

    addUser(user){
        const curentUser = this.users;
        let flag = false;
        for(let i = 0; i < curentUser.length; i++){
            let listUser = curentUser;
            if(listUser.getUserName() === user.getUserName()){
                flag = false;
            }
        }
        if(!flag) {
            this.users.push(user);
            return true;
        }
    }

    login(userName, passWord){
       
        let co = false;
        for(let i = 0; i < this.users.length; i++){
            if(this.users[i].getUserName() === userName &&
            this.users[i].getPassWord() === passWord){
                // user = this.users[i];
                co = true;
            }
        }
        return co;
    }
    getListUser(){
        return this.users;
    }
    save(){
        const data = JSON.stringify(this.users);
        localStorage.setItem('users' ,data);
    }
    getData(){ //lấy data từ localStorage
        const data= localStorage.getItem('users')
        if(data){
            const arrUser = JSON.parse(data)
            const listUserTam=[]
            for ( let i=0;i<arrUser.length;i++){
                const userTemp = new users(arrUser[i].Name,arrUser[i].userName,arrUser[i].email,arrUser[i].passWord,arrUser[i].nationnal)
                listUserTam.push(userTemp)
            }
            this.users = listUserTam
        }
  
    }
}
const listUsers = new StoreUsers();
listUsers.getData()

$("#frm") && $("#frm").addEventListener('submit', function (e) {
    e.preventDefault();
    const name = $("#name").value
    const userName = $("#code").value
    const email = $("#email").value
    const passWord = $("#password").value
    const nationnal = $("#nationnal").value

    if(name === "" || userName === "" || email === "" || passWord ===""||nationnal ===""){
        // alert("not value")
    }else {
        const createUser = new users(name, userName,email, passWord, nationnal);
        const isCheck = listUsers.addUser(createUser);
        if(isCheck){
            listUsers.save();
            alert("đăng kí thành công")
            // window.localStorage = "./login.html"
        }else{
            alert("Tên đăng nhập đã tồn tại")
        }
    }
})
console.log(listUsers);
$("#frm-login") && $("#frm-login").addEventListener('submit', function (e) {
    e.preventDefault();
    const userName = $("#user-name").value
    const passWord = $("#passWord-login").value
    const roleUser = $("#role").value
    if(userName === "" || passWord === ""){
        // alert("nhập đầy đủ thông tin ")
    }
    
    else {
        const isLogin = listUsers.login(userName, passWord);
        
        if(isLogin){
            alert("Đăng nhập thành công")

            if(roleUser === "admin"){
                window.location = "./admin.html"
            }else  {
                window.location = "./user.html"
            }
        } 
        else {
            alert("Đăng nhập thất bại")
        }
       
    }
})

//validation

    const Name = $("#name")
    const userName = $("#code")
    const email = $("#email")
    const passWord = $("#password")
$(".btn-submit").addEventListener('click' , function() {
    var message = "";
    let showError = $(".er1");
    let errorInput = $(".name-user")

    if(Name.value === "") {
        showError.classList.add("error")
        message = "Hãy nhập thông tin "
        errorInput.classList.add("error-input")
    }else {
        errorInput.classList.remove("error-input")
    }
    var showHTML = $(".er1")
    showHTML.innerHTML = message;
})
$(".btn-submit").addEventListener('click' , function() {
    var message = "";
    let showError = $(".er2");
    let errorInput = $(".user")

    if(userName.value === "") {
        showError.classList.add("error")
        message = "Hãy nhập thông tin "
        errorInput.classList.add("error-input")
    }else {
        errorInput.classList.remove("error-input")
    }
    var showHTML = $(".er2")
    showHTML.innerHTML = message;
})
$(".btn-submit").addEventListener('click' , function() {
    var message = "";
    let showError = $(".er3");
    let errorInput = $(".email")

    if(email.value === "") {
        showError.classList.add("error")
        message = "Hãy nhập thông tin "
        errorInput.classList.add("error-input")
    }else {
        errorInput.classList.remove("error-input")
    }
    var showHTML = $(".er3")
    showHTML.innerHTML = message;
})
$(".btn-submit").addEventListener('click' , function() {
    var message = "";
    let showError = $(".er4");
    let errorInput = $(".password")

    if(passWord.value === "") {
        showError.classList.add("error")
        message = "Hãy nhập thông tin "
        errorInput.classList.add("error-input")
    }else {
        errorInput.classList.remove("error-input")
    }
    var showHTML = $(".er4")
    showHTML.innerHTML = message;
})
const NameUser = $("#user-name")
const passLogin = $("#passWord-login")
$(".btn-premary").addEventListener('click' , function() {
    var message = "";
    let showError = $(".er7");
    let errorInput = $(".user-login")

    if(NameUser.value === "") {
        showError.classList.add("error")
        message = "Hãy nhập thông tin "
        errorInput.classList.add("error-input")
    }else {
        errorInput.classList.remove("error-input")
    }
    var showHTML = $(".er7")
    showHTML.innerHTML = message;
})

$(".btn-premary").addEventListener('click' , function() {
    var message = "";
    let showError = $(".er8");
    let errorInput = $(".pass-login")

    if(passLogin.value === "") {
        showError.classList.add("error")
        message = "Hãy nhập thông tin "
        errorInput.classList.add("error-input")
    }else {
        errorInput.classList.remove("error-input")
    }
    var showHTML = $(".er8")
    showHTML.innerHTML = message;
})