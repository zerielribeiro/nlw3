import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import {Map, TileLayer} from 'react-leaflet';

import {tileLayer} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import mapMarkerImg from '../imagens/Local.svg'
import '../styles/pages/orphanages-map.css';





function OrphanagesMap(){
    return(
       <div id="page-map">
           <aside>
               <header>
                   <img src={mapMarkerImg} alt="happy"/>
                   <h2>Escolha um Ofanato no mapa</h2>
                   <p>Muitas crainças estao esperando sua visita</p>
               </header>
               <footer>
                   <strong>Guarapuava</strong>
                   <span>Paraná</span>
               </footer>
           </aside>
           <Map
           center={[-25.3932143, -51.469997]}
           zoom={15}
           style={{width:'100%', height:'100%'}}
           >
             <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            </Map>
               
            <Link to="" className='create-orphanage'>
                <FiPlus size={32} color="#fff"/>
            </Link>


       </div> 
    )
}

export default OrphanagesMap;