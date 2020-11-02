import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import mapMarkerImg from '../imagens/Local.svg'
import MapIcon from '../utils/mapIcons';
import api from '../services/api';
import Orphanege from './Orphanage';
import '../styles/pages/orphanages-map.css';


interface Orphanege{
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

function OrphanagesMap(){
    const [orphaneges, setOrphaneges] = useState<Orphanege[]>([]);

useEffect(() => {
api.get('orphaneges').then(response =>{
      setOrphaneges(response.data);
      
});

},[]);
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
           center={[-25.3933459, -51.4822247]}
           zoom={15}
           style={{width:'100%', height:'100%'}}
           >
             <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            {orphaneges.map(orphanege =>{
                return(
                    <Marker 
                    key={orphanege.id}
                    icon={MapIcon}
                    position ={[orphanege.latitude, orphanege.longitude]}
                    >
                 <Popup closeButton={false} minWidth={240} maxHeight={240} className="map-popup">
                    {orphanege.name}
                    <Link to ={`/orphanage/${orphanege.id}`}>
                    <FiArrowRight size={20} color="#fff"/>
                    </Link>
                  </Popup>
                    </Marker>
                )
            })}

            </Map>
               
            <Link to="/orphanage/create" className='create-orphanage'>
                <FiPlus size={32} color="#fff"/>
            </Link>


       </div> 
    )
}

export default OrphanagesMap;