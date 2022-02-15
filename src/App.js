import logo from './logo.jpg';
import './App.css';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryContainer, VictoryLabel } from 'victory';

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Telemetria</h1><center>
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
        label="Tempo (ms)"
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
      </VictoryChart></center><p></p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    
  );
}

export default App;
