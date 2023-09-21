'use client';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Map from "./Map";
import { Store } from "api";
import { useState } from "react";
import Stores from "@/app/(main)/stores/page";
import StoreList from "./StoreList";
import Marker from "./Marker";


type Props = {
  stores: Array<Store>
}

export default function StoreLocator({stores}: Props){
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY ?? '';
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };
  
  const [center, setCenter] = useState({ lat: -37.3230533, lng: -59.138622 })
  const [zoom, setZoom] = useState(12)

  return (
    <div className="flex max-w-6xl mx-auto">
      <Wrapper apiKey={apiKey} render={render}>
        <section className="flex gap-12 w-full">
          <div className="w-[350px]">
            <StoreList stores={stores} setCenter={setCenter} setZoom={setZoom} />
          </div>
          <Map className="h-[600px] flex w-full" zoom={zoom} center={center}>     
            {stores.map((store) => (
              <Marker key={store.id} title={store.name} position={{lat: store.lat, lng: store.lng}} />
            ))}
          </Map>
        </section>
      </Wrapper>
    </div>
  )
}