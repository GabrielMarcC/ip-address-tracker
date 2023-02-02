import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { useRef, useState } from "react";
import { MapContainerStyle, TitlePoup } from "../style/MapStyle";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconMark from "../assets/images/icon-marker.png";
import { useData } from "../context/Context";

const markerIcon = new L.icon({
  iconUrl: iconMark,
  iconSize: [40, 20],
});

export const Map = () => {
  const [center, setCenter] = useState({ lat: 34.0648, lng: -118.086 });
  const zoomLevel = 13;
  const mapRef = useRef(null);
  const data = useData((state) => state.data);

  const LocationMarker = () => {
    const [position, setPosition] = useState(null);

    const map = useMapEvents({
      click() {
        map?.locate();
      },

      locationfound(e) {
        if (data.latitude && data.longitude) {
          setCenter({ lat: data.latitude, lng: data.longitude });
          map.flyTo(center, map.getZoom());
        } else {
          console.log("Invalid location");
        }
      },
    });

    return position === null ? null : (
      <Marker position={position} icon={markerIcon}>
        <Popup>My Location</Popup>
      </Marker>
    );
  };

  return (
    <MapContainerStyle>
      <MapContainer
        center={center}
        zoom={zoomLevel}
        style={{
          width: "100%",
          height: "100%",
        }}
        touch-action={true}
        scrollWheelZoom={true}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={center} icon={markerIcon}>
          <Popup>
            <TitlePoup>Location: {data?.state_prov}</TitlePoup>
          </Popup>
        </Marker>
        <LocationMarker />
      </MapContainer>
    </MapContainerStyle>
  );
};
