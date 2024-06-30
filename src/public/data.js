document.getElementById('Enviar_Ubicacion').addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      // Envía la ubicación al backend
      fetch('http://localhost:5000/api/CreateAlert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          titulo_Alerta: 'Alerta de Prueba',
          Descripcion_Alerta: 'Descripción de Prueba',
          Fecha_Alerta: new Date(),
          Categoria_Alerta: 'Policia',
          latitude: latitude,
          longitude: longitude
        })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log(data); // Aquí podrías manejar la respuesta del backend si es necesario
        // Mostrar la ubicación en el mapa usando Leaflet
        const map = L.map('map').setView([latitude, longitude], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 18,
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        L.marker([latitude, longitude]).addTo(map)
          .bindPopup('¡Aquí estás!')
          .openPopup();
      })
      .catch(error => console.error('Error:', error));
    });
  } else {
    console.log('Geolocalización no está soportada por este navegador.');
  }
});