import { Map, MarkerLayer, Marker, KeyboardControl, ZoomControl, MouseControl, SyncControl, CompassControl } from 'react-mapycz'


const Mapycz = () => {

  return (
    <Map zoom={16} loaderApiConfig={{poi: true}} height="75vh" center={{lat: 49.7436828, lng: 13.5949517}}>
      <KeyboardControl/>
      <ZoomControl/>
      <MouseControl zoom={true} pan={true} />
      <CompassControl right={10} top={50}/>
      <SyncControl />
    <MarkerLayer>
        <Marker coords={{lat: 49.7436828, lng: 13.5949517}}
            card={{
              header: "<strong>Zde si můžete otevřít mapy</strong>",
              body: "<a target='_blank' href='https://mapy.cz/zakladni?q=Smetanova%2049&source=addr&id=11422008&x=13.5949519&y=49.7437252&z=17'>Odkaz na Mapy.cz<a/>",
            }} 
        />
    </MarkerLayer>
</Map>
  )
}

export default Mapycz