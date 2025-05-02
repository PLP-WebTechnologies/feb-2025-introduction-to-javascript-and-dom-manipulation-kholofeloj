// Change text content
document.getElementById('change-text-btn').addEventListener('click', function () {
    const text = document.getElementById('info-text');
    text.textContent = 'The text has been changed!';
    text.style.color = 'darkblue';
  });
  
  // Change text color
document.getElementById('change-text-color-btn').addEventListener('click', function () {
  const text_2 = document.getElementById('color-change-text');
  text_2.style.color = '#ff6347';
  text_2.style.fontSize = '20px';
});
  
  // Modify CSS style dynamically
  const box = document.getElementById('color-box');
  box.style.padding = '20px';
  box.style.marginTop = '10px';
  box.style.backgroundColor = '#ffd700';
  box.style.borderRadius = '10px';
  box.style.transition = 'all 0.3s ease';
  
  // Add/remove element when button is clicked
  let boxVisible = true;
  
  document.getElementById('toggle-box-btn').addEventListener('click', function () {
    if (boxVisible) {
      box.style.display = 'none';
      boxVisible = false;
    } else {
      box.style.display = 'block';
      boxVisible = true;
    }
  });
  