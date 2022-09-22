
import React, { useRef, useEffect, useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { initializeMap } from '../map/initializeMap';

const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

function Map(){

    const [pageIsMounted, setPageIsMounted] = useState(false);
    const [Mapa, setMap] = useState();


    mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaWFlbWlsaWE5ODIzNDc5MyIsImEiOiJjbDg4czdzYm8wMDVsM29vNXdqMnpyZWxkIn0.0MLW-8qKoYn3Y1uA32YDSQ'

    useEffect(() => {
        setPageIsMounted(true);

        let map = new mapboxgl.Map({
            container: "my-map",
            style: "mapbox://styles/mariaemilia98234793/cl88sdkp7003h14qqb1paoqe1",
            center: [27.587914, 47.158455 ],
            zoom: 12

        });

        initializeMap(mapboxgl, map);
        setMap(map);

    }, []);




  /*  useEffect(() => {
        if(pageIsMounted) {
            Map.on("load", function () {
                addDataLayer(Map, data);
            });
        }
    }, [pageIsMounted, setMap, Map]);  */


    return (
        <div className={styles.container}>
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
            <link
              href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
              rel="stylesheet"
            />
          </Head>
    
          <main className={styles.main}>
            <div id="my-map" style={{ height: 900, width: 900 }} />
          </main>
    
          
        </div>
      );
    }
    
    










export default Map;