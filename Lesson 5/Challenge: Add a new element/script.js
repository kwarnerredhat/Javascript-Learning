const header = document.querySelector("header");
const navMenu = document.getElementById('navMenu');
const menuItems = ['Coffee', 'Burrito', 'Bagel', 'Toast'];
function createNavMenu() {
   for (let item of menuItems) {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        
       
    }
}

createNavMenu();
