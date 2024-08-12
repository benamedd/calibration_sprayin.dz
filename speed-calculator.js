document.addEventListener('DOMContentLoaded', function() {
  // Add event listener for the back button
  document.getElementById('backButton').addEventListener('click', function() {
    window.location.href = 'index.html'; // Adjust this path if needed
  });

  // Add event listener for the calculate button
  document.getElementById('calculateButton').addEventListener('click', calculateSpeed);

  // Add event listener for the refresh button
  document.getElementById('refreshButton').addEventListener('click', refreshFields);
});

function calculateSpeed() {
  const distance = parseFloat(document.getElementById('distance').value);
  const time = parseFloat(document.getElementById('time').value);

  if (isNaN(distance) || isNaN(time) || time <= 0) {
    alert('Please enter valid distance and time values.');
    return;
  }

  // Speed in km/h = (Distance in meters / Time in seconds) * 3.6
  const speed = (distance / time) * 3.6;
  document.getElementById('speed').textContent = speed.toFixed(2);
}

function refreshFields() {
  document.getElementById('distance').value = '';
  document.getElementById('time').value = '';
  document.getElementById('speed').textContent = '0';
}
