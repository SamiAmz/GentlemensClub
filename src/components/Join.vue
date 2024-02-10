<template>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1>Nous joindre</h1>
        </v-col>
      </v-row>
  
      <v-row>
        <v-col cols="12" md="3" class="info">
            
            <v-card-text><v-icon>mdi-phone</v-icon>: +1 (514) 389 5921</v-card-text>
            <v-card-text><v-icon>mdi-email</v-icon>: GentlemensClub@outlook.com</v-card-text>
            <v-card-text><v-icon>mdi-map-marker</v-icon>: 9155 Rue St-Hubert, Montréal, QC H2M 1Y8</v-card-text>
        </v-col>
  
        <v-col cols="12" md="9" class="map-wrap">
          <div class="map" ref="mapContainer"></div>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <style scoped>


  .info {
    padding-top: 5%;
   
  }

  h1 {
    text-align: center;
    padding-bottom: 5%;
    color: rgb(255, 91, 8);
    font-size: 45px;
  }
  
  .map-wrap {
    position: relative;
    height: 800px; 
    overflow: hidden; 
    border-radius: 20px; 
    box-shadow: 0 0 15px rgba(0,0,0,0.2); 
    border: 2px solid rgba(0,0,0,0.1); 
  }
  
  .map {
    width: 100%; /* Adjusted to fill the container */

    height: 67%;
    border-radius: 20px; /* Ensure the map itself also has rounded corners if it can be seen */
  }
  </style>


  <script setup>
  import { Map, MapStyle, config, Marker } from '@maptiler/sdk';
  import { shallowRef, onMounted, onUnmounted, markRaw } from 'vue';
  import '@maptiler/sdk/dist/maptiler-sdk.css';
  
  const mapContainer = shallowRef(null);
  const map = shallowRef(null);
  
  onMounted(() => {
    config.apiKey = 'FkN7c0eFnIEXLkIrpTCH';
    const initialState = { lng: -73.64304747501262, lat: 45.55158481311014, zoom: 15 };
  
    map.value = markRaw(new Map({
      container: mapContainer.value,
      style: MapStyle.STREETS,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom
    }));
  
    // Add a marker at the initial state coordinates
    const marker = new Marker()
      .setLngLat([initialState.lng, initialState.lat])
      .addTo(map.value);
  
  }),
  onUnmounted(() => {
    map.value?.remove();
  })
  </script>