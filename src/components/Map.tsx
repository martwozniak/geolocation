
"use client"

import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'


export default function Map() {
  const MAP_URL = "https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=" + process.env.MAPTILER_TOKEN;

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url={MAP_URL}
    />
    <Marker position={[51.505, -0.09]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  )
}