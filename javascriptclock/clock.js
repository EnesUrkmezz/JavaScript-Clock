let userName = prompt("Adını girer misin acaba rica etsem?") //Kulanıcının adını yukarıda çıkan kısma girmesini istiyorum
let myName = document.querySelector('#myName')                    // querySelector ile id si myName olan div'e ulaşıyorum
myName.innerHTML =`${userName}` //myName.innerHTML i değiştiriyorum


let myClock = document.querySelector('#myClock')
function time() {
    let date = new Date().toLocaleString('tr-TR');
    myClock.innerHTML = date;
}
setInterval(time,1000)