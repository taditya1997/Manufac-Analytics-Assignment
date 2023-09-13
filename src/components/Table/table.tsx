import React from "react";
import "./table.css";
import { tableInterfaceProps } from "../../utils/type";
export const Table = (props:tableInterfaceProps) => {
  const { alcholData, type } = props;

  return (
    <>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Measure</th>
            {alcholData.map((data) => (
              <th key={data.Alcohol}>{`Class ${data.Alcohol}`}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{`${type} Mean`}</td>
            {alcholData.map((data) => (
              <td key={data.Alcohol}>{data.Mean}</td>
            ))}
          </tr>
          <tr>
            <td>{`${type} Mode`}</td>
            {alcholData.map((data) => (
              <td key={data.Alcohol}>{data.Mode}</td>
            ))}
          </tr>
          <tr>
            <td>{`${type} Median`}</td>
            {alcholData.map((data) => (
              <td key={data.Alcohol}>{data.Median}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
};
