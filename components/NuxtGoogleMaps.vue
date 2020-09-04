<template>
  <div>
    <GMap
      ref="gMap"
      language="en"
      :center="{lat: -6.239812, lng: 106.995690}"
      :options="{fullscreenControl: false, styles: mapStyle}"
      :zoom="14"
    >
      <GMapMarker
        v-for="(marker, index) in dataMarker"
        :key="index"
        :position="{lat: marker.latitude, lng: marker.longitude}"
        :options="{
          icon: marker.icon === 'marketplace' ? pins.marketplace : (marker.icon === 'hospital' ? pins.hospital : (marker.icon === 'education' ? pins.education : (marker.icon === 'station' ? pins.station : (marker.icon === 'busway' ? pins.busway : (marker.icon === 'gor' ? pins.gor : (marker.icon === 'goverment' ? pins.goverment : pins.tolls))))))
          }"
        @click="currentLocation = marker"
      >
        <GMapInfoWindow :options="{maxWidth: 200}">
          <code>{{marker.name}}</code>
        </GMapInfoWindow>
      </GMapMarker>
      <GMapMarker :position="{lat: -6.239812, lng: 106.995690}" :options="{icon: pins.company}">
        <GMapInfoWindow :options="{maxWidth: 200}">
          <code>The Maj Residence Bekasi</code>
        </GMapInfoWindow>
      </GMapMarker>
    </GMap>
  </div>
</template>
<script>
export default {
  props: ["dataMarker"],
  data() {
    return {
      currentLocation: {},
      locationsVisibleOnMap: "",
      locations: [
        {
          lat: 44.933076,
          lng: 15.629058,
        },
        {
          lat: 45.815,
          lng: "15.9819",
        },
        {
          lat: "45.12",
          lng: "16.21",
        },
      ],
      pins: {
        marketplace: "/maps/marketplace.svg",
        hospital: "/maps/hospital.svg",
        education: "maps/education.svg",
        station: "/maps/station.svg",
        busway: "/maps/busway.svg",
        gor: "/maps/gor.svg",
        goverment: "/maps/goverment.svg",
        tolls: "/maps/tolls.svg",
        company: "/maps/company.svg",
      },
      mapStyle: [
        {
          featureType: "administrative",
          elementType: "geometry",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "poi",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "transit",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
      ],
    };
  },
};
</script>