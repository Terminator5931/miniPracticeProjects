import restrauntImg from "./assets/restaurant.jpg";
export default function home() {
   document.getElementById('content').innerHTML = `
    <h1>Welcome to Terminator's Restaurant</h1>
    <img style="object-fit: contain; height: 50vh; width: 100%;" src="${restrauntImg}">`;
}
