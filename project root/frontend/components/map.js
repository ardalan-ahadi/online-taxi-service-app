// Import
import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// Map
const CustomMap = ({ mapRef, locRegion, locPoint, categTheme, categOrint }) => {
  const userlocImageSource = require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/assets/image/userloc.png'); 
  
  const lightMapStyle = [];
  const darkMapStyle = [
    { elementType: "geometry", stylers: [{ color: "#212f3e" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#1F2A39" }] },
    { featureType: "administrative", elementType: "geometry.stroke", stylers: [{ color: "#2D3748" }] },
    { featureType: "administrative.country", elementType: "geometry.stroke", stylers: [{ color: "#a49173" }] },
    { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#D89865" }] },
    { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
    { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#263c3f" }] },
    { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#6b9a76" }] },
    { featureType: "road", elementType: "geometry", stylers: [{ color: "#38414e" }] },
    { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#212a37" }] },
    { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#9ca5b3" }] },
    { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#746855" }] },
    { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#1f2835" }] },
    { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#f3d19c" }] },
    { featureType: "transit", elementType: "geometry", stylers: [{ color: "#2f3948" }] },
    { featureType: "transit.station", elementType: "labels.text.fill", stylers: [{ color: "#C88C5B" }] },
    { featureType: "water", elementType: "geometry", stylers: [{ color: "#131F36" }] },
    { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#515c6d" }] },
    { featureType: "water", elementType: "labels.text.stroke", stylers: [{ color: "#17263c" }] },
  ];

  return (
    <>
    {(locRegion && locRegion.coords) && ( 
      <View style={[styles.mapContainer, categOrint === 'landscape' ? styles.land_mapContainer : {}]}>
        <MapView
          ref={mapRef}
          style={{ flex: 1 }} 
          initialRegion={{
            latitude: locRegion.coords.latitude,
            longitude: locRegion.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          customMapStyle={categTheme === 'dark' ? darkMapStyle : lightMapStyle}
        >
          {locPoint && locPoint.coords && (
            <Marker 
              coordinate={{ 
                latitude: locPoint.coords.latitude, 
                longitude: locPoint.coords.longitude, 
              }} 
              title="You are here!" 
              image={userlocImageSource} 
              anchor={{ x: 0.5, y: 0.5 }} 
              style={{ 
                transform: [{ rotate: `${locPoint.coords.heading}deg` }],
              }} 
            /> 
          )}
        </MapView>
      </View>
    )} 
    </>
  );
};

// Style
export const styles = StyleSheet.create({
  mapContainer: { 
    position: 'absolute', 
    flex: 1,
    display: 'flex', 
    width: '100%',
    height: '100%', 
    top: 0, 
    left: 0,      
  },
  land_mapContainer: {
    position: 'absolute', 
    flex: 1,
    display: 'flex', 
    width: '100%',
    height: '100%',       
    top: 0, 
    left: 0,
  },
});

// Export
export default CustomMap;