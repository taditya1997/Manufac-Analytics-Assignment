// Calculate the mean mode median for flavanoids for the given data for different Alcohol types
import { WineData } from "./type";

export const calculatemeanModeMedianData = (data: WineData, identifier: String) => {
  const alcoholData = filterData(data);

  const calculatedData: any = [];
  for (const [key, value] of Object.entries(alcoholData)) {
    const alcohol = key;
    const fileteredArray = arrangeData(value, identifier);
    const mean = fileteredArray.reduce((a, b) => a + b) / fileteredArray.length;
    const medianValue = median(fileteredArray);
    const modeValue = mode(fileteredArray);

    const DataObj = {
      Alcohol: alcohol,
      Mean: mean.toFixed(3),
      Median: medianValue.toFixed(3),
      Mode: modeValue.toFixed(3),
    };
    calculatedData.push(DataObj);

    //Addinf each alcohol type data to the calculatedData array
  }
  return calculatedData;
};

// Arrange the data for the given key
export const arrangeData = (data: any, key: any) => {
  const filteredData = data.map((wine) => Number(wine[key]));
  return filteredData;
};

// Calculate the Gamma value and add it to the data
export const filterData = (data:any) => {
  const alcoholTypes = [...new Set(data.map((item) => item.Alcohol))];
  const flavanoidsDataHashmap = {};
  alcoholTypes.forEach((alcoholType: any) => {
    const filteredData = data.filter((item) => item.Alcohol === alcoholType);
    const finalFilteredData = filteredData.map((item) => {
      let gamma_value = (item["Ash"] * item["Hue"]) / item["Magnesium"];
      item["Gamma"] = gamma_value;
      return item;
    });
    flavanoidsDataHashmap[alcoholType] = finalFilteredData;
  });

  return flavanoidsDataHashmap;
};

//calculate the median value
export const median = (values:any) => {
  values.sort((a, b) => a - b);
  const half = Math.floor(values.length / 2);
  if (values.length % 2) {
    return values[half];
  }
  return (values[half - 1] + values[half]) / 2.0;
};

//calculate the mode value

export const mode = (values:any) => {
  const modeObj = {};
  let maxCount = 0;
  let maxValue = 0;
  values.forEach((item) => {
    if (modeObj[item]) {
      modeObj[item] += 1;
    } else {
      modeObj[item] = 1;
    }
    if (maxCount < modeObj[item]) {
      maxCount = modeObj[item];
      maxValue = item;
    }
  });
  return maxValue;
};
