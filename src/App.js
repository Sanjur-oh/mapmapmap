import "./App.css";
import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import ReactTooltip from "react-tooltip";

const markers = [
  // {
  //   markerOffset_0: -15,
  //   name_0: "Brazil",
  //   coordinates_0: [-45, -23],
  // },
  // {
  //   markerOffset: 25,
  //   name: "United States",
  //   coordinates: [-80, 35],
  // },
  // {
  //   markerOffset: 25,
  //   name: "Nigeria",
  //   coordinates: [7.5, 8],
  // },
  // {
  //   markerOffset: 25,
  //   name: "Jamaica",
  //   coordinates: [-77, 18],
  // },
  // {
  //   markerOffset: 25,
  //   name: "Czechia",
  //   coordinates: [15, 50],
  // },
  {
    markerOffset_5: 25,
    name_5: "Russia",
    coordinates_5: [40, 55],
  },
  // {
  //   markerOffset: 25,
  //   name: "Mexico",
  //   coordinates: [-100, 20.5],
  // },
  // {
  //   markerOffset: 25,
  //   name: "Ireland",
  //   coordinates: [-10.5, 51.5],
  // },
  // {
  //   markerOffset: 25,
  //   name: "Kazakhstan",
  //   coordinates: [71, 50],
  // },
  // {
  //   markerOffset: 25,
  //   name: "Iran",
  //   coordinates: [53, 34],
  // },
  // {
  //   markerOffset: 25,
  //   name: "China",
  //   coordinates: [117, 40],
  // },
];

// const brazilFighters = [
//   { W_Bantam_Weight: "Amanda Nunes" },
//   { W_Bantam_Weight: "Ketlen Vieira" },
//   { W_Straw_Weight: "Marina Rodriguez" },
//   { W_Straw_Weight: "Jessica Andrade" },
//   { W_Straw_Weight: "Amanda Ribas" },
//   { M_Welter_Weight: "Gilbert Burns" },
//   { M_Light_Weight: "Charles Oliveira" },
//   { M_Light_Weight: "Rafael Dos Anjos" },
// ];
  
  // const usaFighters = [
    // { W_Bantam_Weight: "Juianna Pena" },
    // { W_Bantam_Weight: "Holly Holm" },
    // { W_Bantam_Weight: "Raquel Pennington" },
    // { W_Bantam_Weight: "Aspen Ladd"},
    // { W_Bantam_Weight: "Sara McMann"},
    // { W_Bantam_Weight: "Miesha Tate"},
    // { W_Straw_Weight: "Carla Esparza"},
    // { W_Straw_Weight: "Rose Namajunas"},
    // { W_Straw_Weight: "Mackenzie Dern"},
    // { W_Straw_Weight: "Nina Ansaroff"},
    // { W_Straw_Weight: "Tecia Torres"},
    // { W_Straw_Weight: "Michelle Waterson"},
    // { M_Welter_Weight: "Colby Covington"},
    // { M_Welter_Weight: "Belal Muhammad"},
    // { M_Welter_Weight: "Vicente Luque"},
    // { M_Welter_Weight: "Stephen Thompson"},
    // { M_Welter_Weight: "Jorge Masvidal"},
    // { M_Welter_Weight: "Sean Brady"},
    // { M_Welter_Weight: "Neil Magny"},
    // { M_Light_Weight: "Dustin Poirer"},
    // { M_Light_Weight: "Justin Gaethje"},
    //{ M_Light_Weight: "Michael Chandler"},
    // { M_Light_Weight: "Tony Ferguson"},
    // { M_Light_Weight: "Gregor Gillespie"}
//]

  //   const nigeriaFighters = [
  //     {W_Bantam_Weight: "Yana Kunitskaya"},
  //     {M_Light_Weight: "Islam Makhachev"}]

  //     const jamaicaFighters = [
  //       {W_Bantam_Weight: "Yana Kunitskaya"},
  //       {M_Light_Weight: "Islam Makhachev"}]

const russiaFighters = [
  {W_Bantam_Weight: "Yana Kunitskaya"},
  {M_Light_Weight: "Islam Makhachev"}]

  // const mexicoFighters = [
  //   {W_Bantam_Weight: "Yana Kunitskaya"},
  //   {M_Light_Weight: "Islam Makhachev"}]

  //   const irelandFighters = [
  //     {W_Bantam_Weight: "Yana Kunitskaya"},
  //     {M_Light_Weight: "Islam Makhachev"}]
      
  //     const kazakhstanFighters = [
  //       {W_Bantam_Weight: "Yana Kunitskaya"},
  //       {M_Light_Weight: "Islam Makhachev"}]

  //       const iranFighters = [
  //         {W_Bantam_Weight: "Yana Kunitskaya"},
  //         {M_Light_Weight: "Islam Makhachev"}]

  //         const chinaFighters = [
  //           {W_Bantam_Weight: "Yana Kunitskaya"},
  //           {M_Light_Weight: "Islam Makhachev"}]


const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const handleClick = () => {
  console.log(russiaFighters);
};

// const handleClickTwo = () => {
//   console.log(brazilFighters);
// };

function App() {
  const [content, setcontent] = useState("");
  

  //fetch for fighter from each country
  // useEffect(()  => {
  //   fetch('')
  //   .then(res => res.json())
  //   .then(res => setFighters)
  // })


  return (
    <div
      className="App"
      style={{
        width: "90%",
        height: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#87ceeb",
      }}>
      
      <h1>Mixed Martial Arts Physiography</h1>
      <h2>MMAP</h2>

      <ReactTooltip>{content}</ReactTooltip>
      <div style={{ width: "1000px", borderStyle: "double" }}>
        <ComposableMap data-tip="">
          <ZoomableGroup zoom={0.9}>
            {" "}
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    // onClick={handleClick}
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      const { NAME, ABBREV } = geo.properties;

                      setcontent(`${NAME}, ${ABBREV}`);
                      // if (Brazil)
                      // return [{"Amanda Ribas"}]
                    }}
                    onMouseLeave={() => {
                      setcontent("");
                    }}
                    style={{
                      hover: {
                        fill: "#F00",
                        outline: "none",
                      },
                    }}
                  />
                ))
              }
            </Geographies>


            {markers.map(({ name_5, coordinates_5, markerOffset_5 }) => (
              <Marker onClick={handleClick} key={name_5} coordinates={coordinates_5}>
                <circle r={5} fill="#F00" stroke="#fff" strokeWidth={2} />
                <text
                  textAnchor="middle"
                  y={markerOffset_5}
                  style={{ fontFamily: "system-ui", fill: "white" }}
                >
                  {name_5}
                </text>
              </Marker>
              ))}

            {/* {markers.map(({ name_0, coordinates_0, markerOffset_0 }) => (
              <Marker onClick={handleClickTwo} key={name_0} coordinates={coordinates_0}>
              <circle r={0} fill="#F00" stroke="#fff" strokeWidth={2} />
              <text
                textAnchor="middle"
                y={markerOffset_0}
                style={{ fontFamily: "system-ui", fill: "white" }}
              >
                {name_0}
              </text>
            </Marker>
            ))} */}


          </ZoomableGroup>
        </ComposableMap>

      </div>
    </div>
  );
}

export default App;

