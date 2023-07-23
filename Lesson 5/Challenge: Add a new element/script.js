const navMenu = document.getElementById('navMenu');
const menuItems = ['Home', 'About', 'Services', 'Contact'];
function createNavMenu() {
   for (let item of menuItems) {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        
       
    }
}

createNavMenu();
