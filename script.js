function volume_sphere() {

  var radius = document.getElementById('radius').value;

  if (radius === '' || radius <= 0) {
    alert('Please enter a valid positive radius.');
    return;
  }
  var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  document.getElementById('volume').value = volume.toFixed(4);
}

document.getElementById('MyForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  volume_sphere();
});


window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
