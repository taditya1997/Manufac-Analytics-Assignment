import React,{ useState,useEffect } from "react";
import { wineData } from "../../utils/data";
import { calculatemeanModeMedianData } from "../../utils/utils";
import { AlcoholData} from "../../utils/type";
import { Table } from "../Table/table";
import "./display.css"

const Display = () => {
  const [alcohol, setAlcohoData] = useState<AlcoholData[]>([]);
    //useEffect to calculate the mean , mode an median details for the flavanoids and gamma
  useEffect(() => {
    function calculateData() {
     const filtredAlcoholdData:any =[]
      const flavanoidsdata = calculatemeanModeMedianData(
        wineData,
        "Flavanoids"
      );
      const gammaData = calculatemeanModeMedianData(wineData, "Gamma");    

      const alcoholdata ={
        type:"Flavanoids",
        data:flavanoidsdata
      }
        const gammaValue ={
            type:"Gamma",
            data:gammaData
        }

        //calculate the mean , mode an median details for the flavanoids and gamma and add it to the Array

        filtredAlcoholdData.push(alcoholdata)
        filtredAlcoholdData.push(gammaValue)

        setAlcohoData(filtredAlcoholdData);
     
    }

    calculateData();
  }, []);
 
  //display the data in the table for the flavanoid and gamma
  return (
    <div className="items">
      <h1>Manufac Analytics Assignment</h1>
      {alcohol.map((item) => (
        <div>
          <h2>{`${item.type} Data`}</h2>
          <Table alcholData={item.data} type={item.type} />
        </div>
      ))}
    </div>
  );
};

export default Display;
