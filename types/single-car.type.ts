export interface SingleCar {
    features:               any[];
    carFeatures:            any[];
    modelFeatures:          any[];
    damageMedia:            any[];
    id:                     string;
    year:                   number;
    insured:                boolean;
    mileage:                number;
    vin:                    string;
    marketplacePrice:       number;
    marketplaceVisible:     boolean;
    marketplaceVisibleDate: Date;
    isFeatured:             boolean;
    imageUrl:               string;
    model:                  Model;
    state:                  string;
    country:                string;
    ownerType:              string;
    transmission:           string;
    fuelType:               string;
    sellingCondition:       string;
    bodyType:               BodyType;
    city:                   string;
    marketplaceOldPrice:    number;
    createdAt:              Date;
    updatedAt:              Date;
    mileageUnit:            string;
    hasWarranty:            boolean;
    hasFinancing:           boolean;
    interiorColor:          string;
    exteriorColor:          string;
    engineType:             string;
    installment:            number;
    depositReceived:        boolean;
    loanValue:              number;
    websiteUrl:             string;
    sold:                   boolean;
    hasThreeDImage:         boolean;
    carName:                string;
    financingSettings:      FinancingSettings;
}

export interface BodyType {
    id:       number;
    name:     string;
    imageUrl: string;
}

export interface FinancingSettings {
    loanCalculator: LoanCalculator;
}

export interface LoanCalculator {
    loanPercentage: number;
    ranges:         Ranges;
    defaultValues:  DefaultValues;
}

export interface DefaultValues {
    interestRate: number;
    downPayment:  number;
    tenure:       number;
}

export interface Ranges {
    minInterestRate: number;
    maxInterestRate: number;
    minDownPayment:  number;
    maxDownPayment:  number;
    tenure:          number;
}

export interface Model {
    modelFeatures: any[];
    id:            number;
    name:          string;
    imageUrl:      string;
    wheelType:     string;
    make:          BodyType;
    popular:       boolean;
}
