const toggleBtn = document.getElementById('toggleCategories');
const menu = document.querySelector('.categories nav ul');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('show');
});
