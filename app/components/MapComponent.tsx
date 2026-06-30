"use client";
type MapProps = {
  lat: number;
  lng: number;
};

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "@/app/lib/LeafletFix";

export default function MapComponent({ lat, lng }:MapProps) {
  return (
    <MapContainer center={[lat, lng]} zoom={15} className="h-full w-full">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Marker position={[lat, lng]}>
        <Popup>Chabahil, Kathmandu</Popup>
      </Marker>
    </MapContainer>
  );
}