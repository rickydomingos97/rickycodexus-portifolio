document.getElementById('menuToggle').addEventListener('click', function() {
  document.getElementById('sideMenu').style.width = '250px';
  document.getElementById('mainContent').style.marginLeft = '250px';
});

document.getElementById('closeBtn').addEventListener('click', function() {
  document.getElementById('sideMenu').style.width = '0';
  document.getElementById('mainContent').style.marginLeft = '0';
});
