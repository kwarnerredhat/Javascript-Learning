const itemList = ['Jacket', 'Shoes', 'Socks', 'Glasses', 'Jewelry'];
const unorderedList = document.createElement('ul');

itemList.foreach(item => {
    const listItem = document.createElement('li');
    listItem.textContent,Content = item;
    unorderedList.appendChild(listItem);
});
const navContainer = document.getElementsById('navContainer');
navContainer.appendChild(unorderedList);