// Type definitions for manufac-analytics-assignment

export interface WineData {
    Alcohol: number;
    "Malic Acid": number;
    Ash: number;
    "Alcalinity of ash": number;
    Magnesium: number;
    "Total phenols": number;
    Flavanoids: number;
    "Nonflavanoid phenols": number;
    Proanthocyanins: number;
    "Color intensity": number;
    Hue: number;
    "OD280/OD315 of diluted wines": number;
    Unknown: number;
  }

export type windeDatArray = WineData[];

export interface FlavanoidsData{
    Alcohol: number;
    Flavanoids_Mean: number;
    Flavanoids_Median: number;
    Flavanoids_Mode: number;
}

export type FlavanoidsDataArray = FlavanoidsData[];

export interface AlcoholGammaData{
    Alcohol: number;
    Gamma_Mean: number;
    Gamma_Median: number;
    Gamma_Mode: number;
}
export interface MeanMedianModeData{
    Alcohol: number;
    Mean: number;
    Median: number;
    Mode: number;
}


export type AlcoholGammaDataArray = AlcoholGammaData[];

export interface AlcoholData{
  type: string;
  data: MeanMedianModeData[];
}
export interface tableInterfaceProps{  
    type: string;
    alcholData: MeanMedianModeData[]; 
}


