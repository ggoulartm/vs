import logo from './logo.jpg';
import './App.css';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryContainer, VictoryLabel } from 'victory';
import React, {useState} from 'react';


// Exemplo MQTT

//const mqtt = require('mqtt') 

//const client  = mqtt.connect('mqtt://test.mosquitto.org')

//client.on('connect', function () {
//  client.subscribe('presence', function (err) {
//   if (!err) {
//      client.publish('presence', 'Hello mqtt')
//    }
//  })
//})

//client.on('message', function (topic, message) {
    // message is Buffer
//  console.log(message.toString())
//  client.end()
//})

//

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

const SelectGraph = () =>{
  let array =    [<VicCharge />, <VicVolt />, <VicTemp />];
  const [chart, setChart] = useState(0)
  return(
  <div>
  {array[chart]}  
    <button className="button" onClick={() => setChart(2)}>Grafico de Temperatura</button> 
    <br></br>   
    <button className="button" onClick={() => setChart(1)}>Grafico de Tensão</button> 
    <br></br>
    <button className="button" onClick={() => setChart(0)}>Grafico de Carga</button>
    <br></br>
      
  </div>
);}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Telemetria</h1><center>
       <SelectGraph />
       <br></br>
       <img src={logo} className="App-logo" alt="logo" />
     </center><p></p>
      </header>
    </div>
    
  );
}

class VicVolt extends React.Component{
  render(){
return(  
     <VictoryChart height={200} width={300}
        style={{
        background: { fill: "#00004a" }
        }}
      containerComponent={<VictoryContainer responsive={false}/>}
        // domainPadding will add space to each side of VictoryBar to
        // prevent it from overlapping the axis
        domainPadding={15}
        // theme={VictoryTheme.material}
      >
          <VictoryLabel
            text={`Tensão das Baterias`}
            x={150}
            y={30}
            textAnchor="middle"
            style={{ fill: "#FF4500", fontSize: 16 }}
          />
        <VictoryAxis
        label="Célula"
        style={{axisLabel: {fill: "#FF4500", fontSize: 10, padding: 20},
                tickLabels: {fill: "#FF4500", fontSize: 8, padding: 5},
                axis: {stroke: "#FF4500"}
                }}
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Tensão 1", "Tensão 2", "Tensão 3", "Tensão 4"]}
        />
        <VictoryAxis
          dependentAxis
          style={{axisLabel: {fill: "#FF4500", fontSize: 10, padding: 30}, 
                  tickLabels: {fill: "#FF4500", fontSize: 8, padding: 5},
                  axis: {stroke: "#FF4500"}
                  }}
          label="Tensão"
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => (`${x / 2000} V`)}
          tickLabelComponent={<VictoryLabel dy={20}/>}
        />
        <VictoryBar
          style = {{data:{fill:"#FF4500"}}}
          data={data}
          x="quarter"
          y="earnings"
        />
      </VictoryChart>
);}
}

class VicTemp extends React.Component{
  render(){
return(  
     <VictoryChart height={200} width={300}
        style={{
        background: { fill: "#00004a" }
        }}
      containerComponent={<VictoryContainer responsive={false}/>}
        // domainPadding will add space to each side of VictoryBar to
        // prevent it from overlapping the axis
        domainPadding={15}
        // theme={VictoryTheme.material}
      >
          <VictoryLabel
            text={`Temperatura das Baterias`}
            x={150}
            y={30}
            textAnchor="middle"
            style={{ fill: "#FF4500", fontSize: 16 }}
          />
        <VictoryAxis
        label="Célula"
        style={{axisLabel: {fill: "#FF4500", fontSize: 10, padding: 20},
                tickLabels: {fill: "#FF4500", fontSize: 8, padding: 5},
                axis: {stroke: "#FF4500"}
                }}
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Temperatura 1", "Temperatura 2", "Temperatura 3", "Temperatura 4"]}
        />
        <VictoryAxis
          dependentAxis
          style={{axisLabel: {fill: "#FF4500", fontSize: 10, padding: 30}, 
                  tickLabels: {fill: "#FF4500", fontSize: 8, padding: 5},
                  axis: {stroke: "#FF4500"}
                  }}
          label="Temperatura"
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => (`${x / 500} ºC`)}
          tickLabelComponent={<VictoryLabel dy={10}/>}
        />
        <VictoryBar
          style = {{data:{fill:"#FF4500"}}}
          data={data}
          x="quarter"
          y="earnings"
        />
      </VictoryChart>
);}
}

class VicCharge extends React.Component{
    render(){
return(  
     <VictoryChart height={200} width={300}
        style={{
        background: { fill: "#00004a" }
        }}
      containerComponent={<VictoryContainer responsive={false}/>}
        // domainPadding will add space to each side of VictoryBar to
        // prevent it from overlapping the axis
        domainPadding={15}
        // theme={VictoryTheme.material}
      >
          <VictoryLabel
            text={`Carga das Baterias`}
            x={150}
            y={30}
            textAnchor="middle"
            style={{ fill: "#FF4500", fontSize: 16 }}
          />
        <VictoryAxis
        label="Célula"
        style={{axisLabel: {fill: "#FF4500", fontSize: 10, padding: 20},
                tickLabels: {fill: "#FF4500", fontSize: 8, padding: 5},
                axis: {stroke: "#FF4500"}
                }}
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Corrente 1", "Corrente 2", "Corrente 3", "Corrente 4"]}
        />
        <VictoryAxis
          dependentAxis
          style={{axisLabel: {fill: "#FF4500", fontSize: 10, padding: 30}, 
                  tickLabels: {fill: "#FF4500", fontSize: 8, padding: 5},
                  axis: {stroke: "#FF4500"}
                  }}
          label="Corrente Elétrica"
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => (`${x / 1000} mA`)}
          tickLabelComponent={<VictoryLabel dy={20}/>}
        />
        <VictoryBar
          style = {{data:{fill:"#FF4500"}}}
          data={data}
          x="quarter"
          y="earnings"
        />
      </VictoryChart>
);}
}


export default App;
