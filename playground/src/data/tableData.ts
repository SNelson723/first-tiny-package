import { imageFormatter, ITableHeader, numberFormatter } from "../../../src";

export const tableHeaders: ITableHeader[] = [
  {
    column: "index",
    alias: "ID",
    visible: true,
    renderer: () => {},
    width: 100,
    align: "left",
    formatter: null,
    dataType: "number",
  },
  {
    column: "isActive",
    alias: "Active",
    visible: true,
    renderer: () => {},
    width: 100,
    align: "left",
    formatter: null,
    dataType: "boolean",
  },
  {
    column: "price",
    alias: "Price",
    visible: true,
    renderer: () => {},
    width: 100,
    align: "center",
    formatter: numberFormatter,
    dataType: "number",
  },
  {
    column: "cost",
    alias: "Cost",
    visible: true,
    renderer: () => {},
    width: 100,
    align: "center",
    formatter: numberFormatter,
    dataType: "number",
  },
  {
    column: "picture",
    alias: "Picture",
    visible: true,
    renderer: () => {},
    width: 100,
    align: "left",
    formatter: imageFormatter,
    dataType: "string",
  },
  {
    column: "upc",
    alias: "UPC",
    visible: true,
    renderer: () => {},
    width: 100,
    align: "left",
    formatter: null,
    dataType: "string",
  },
  {
    column: "department",
    alias: "Dept",
    visible: true,
    renderer: () => {},
    width: 100,
    align: "left",
    formatter: null,
    dataType: "string",
  },
  {
    column: "description",
    alias: "Name",
    visible: true,
    renderer: () => {},
    width: 100,
    align: "left",
    formatter: null,
    dataType: "string",
  },
  {
    column: "company",
    alias: "Company",
    visible: true,
    renderer: () => {},
    width: 100,
    align: "left",
    formatter: null,
    dataType: "string",
  },
];

export const tableData = [
  {
    index: 0,
    isActive: true,
    price: "$0.51",
    cost: "$9.63",
    picture: "http://placehold.it/32x32",
    upc: 3013,
    department: "NonFood",
    description: "Ethel",
    company: "MAGNEMO",
  },
  {
    index: 1,
    isActive: false,
    price: "$13.26",
    cost: "$1.27",
    picture: "http://placehold.it/32x32",
    upc: 4492,
    department: "Dairy",
    description: "Hampton",
    company: "TELLIFLY",
  },
  {
    index: 2,
    isActive: true,
    price: "$15.13",
    cost: "$15.90",
    picture: "http://placehold.it/32x32",
    upc: 3098,
    department: "HBC",
    description: "Kay",
    company: "ESCHOIR",
  },
  {
    index: 3,
    isActive: false,
    price: "$1.70",
    cost: "$13.28",
    picture: "http://placehold.it/32x32",
    upc: 3570,
    department: "Meat",
    description: "Kaye",
    company: "INTERODEO",
  },
  {
    index: 4,
    isActive: false,
    price: "$0.93",
    cost: "$18.82",
    picture: "http://placehold.it/32x32",
    upc: 2403,
    department: "Lottery",
    description: "Freda",
    company: "TETRATREX",
  },
  {
    index: 5,
    isActive: true,
    price: "$7.87",
    cost: "$3.92",
    picture: "http://placehold.it/32x32",
    upc: 832,
    department: "Dairy",
    description: "Brittany",
    company: "NORSUL",
  },
  {
    index: 6,
    isActive: true,
    price: "$6.96",
    cost: "$12.99",
    picture: "http://placehold.it/32x32",
    upc: 4309,
    department: "Lottery",
    description: "Phoebe",
    company: "XINWARE",
  },
  {
    index: 7,
    isActive: false,
    price: "$7.37",
    cost: "$0.01",
    picture: "http://placehold.it/32x32",
    upc: 4119,
    department: "Lottery",
    description: "Rosella",
    company: "VERBUS",
  },
  {
    index: 8,
    isActive: true,
    price: "$6.29",
    cost: "$0.72",
    picture: "http://placehold.it/32x32",
    upc: 330,
    department: "Dairy",
    description: "Wilkerson",
    company: "LUNCHPAD",
  },
  {
    index: 9,
    isActive: false,
    price: "$4.35",
    cost: "$14.99",
    picture: "http://placehold.it/32x32",
    upc: 4271,
    department: "NonFood",
    description: "Collier",
    company: "ISOTRONIC",
  },
  {
    index: 10,
    isActive: true,
    price: "$3.05",
    cost: "$6.79",
    picture: "http://placehold.it/32x32",
    upc: 4539,
    department: "Dairy",
    description: "Amanda",
    company: "STEELTAB",
  },
  {
    index: 11,
    isActive: false,
    price: "$19.28",
    cost: "$3.07",
    picture: "http://placehold.it/32x32",
    upc: 705,
    department: "NonFood",
    description: "Autumn",
    company: "KINDALOO",
  },
  {
    index: 12,
    isActive: true,
    price: "$11.49",
    cost: "$9.47",
    picture: "http://placehold.it/32x32",
    upc: 4848,
    department: "Dairy",
    description: "Cole",
    company: "ZEROLOGY",
  },
  {
    index: 13,
    isActive: true,
    price: "$10.62",
    cost: "$9.37",
    picture: "http://placehold.it/32x32",
    upc: 1518,
    department: "Dairy",
    description: "Salazar",
    company: "NIQUENT",
  },
  {
    index: 14,
    isActive: true,
    price: "$10.37",
    cost: "$19.93",
    picture: "http://placehold.it/32x32",
    upc: 3876,
    department: "Produce",
    description: "Thornton",
    company: "CEPRENE",
  },
  {
    index: 15,
    isActive: false,
    price: "$1.96",
    cost: "$1.71",
    picture: "http://placehold.it/32x32",
    upc: 3123,
    department: "HBC",
    description: "Sheppard",
    company: "CORMORAN",
  },
  {
    index: 16,
    isActive: false,
    price: "$0.23",
    cost: "$10.34",
    picture: "http://placehold.it/32x32",
    upc: 2828,
    department: "HBC",
    description: "Frederick",
    company: "VICON",
  },
  {
    index: 17,
    isActive: false,
    price: "$6.88",
    cost: "$8.15",
    picture: "http://placehold.it/32x32",
    upc: 2627,
    department: "NonFood",
    description: "Mckenzie",
    company: "SLOFAST",
  },
  {
    index: 18,
    isActive: false,
    price: "$14.85",
    cost: "$11.35",
    picture: "http://placehold.it/32x32",
    upc: 2671,
    department: "NonFood",
    description: "Claire",
    company: "BLUEGRAIN",
  },
  {
    index: 19,
    isActive: false,
    price: "$14.05",
    cost: "$3.15",
    picture: "http://placehold.it/32x32",
    upc: 2011,
    department: "Produce",
    description: "Curtis",
    company: "ESSENSIA",
  },
  {
    index: 20,
    isActive: true,
    price: "$5.75",
    cost: "$0.04",
    picture: "http://placehold.it/32x32",
    upc: 931,
    department: "Dairy",
    description: "Daniel",
    company: "INVENTURE",
  },
  {
    index: 21,
    isActive: true,
    price: "$8.04",
    cost: "$15.61",
    picture: "http://placehold.it/32x32",
    upc: 3481,
    department: "NonFood",
    description: "Stacie",
    company: "UBERLUX",
  },
  {
    index: 22,
    isActive: true,
    price: "$7.81",
    cost: "$8.76",
    picture: "http://placehold.it/32x32",
    upc: 165,
    department: "HBC",
    description: "Rosalie",
    company: "QUINTITY",
  },
  {
    index: 23,
    isActive: false,
    price: "$4.24",
    cost: "$2.80",
    picture: "http://placehold.it/32x32",
    upc: 577,
    department: "HBC",
    description: "Jennifer",
    company: "MANTRIX",
  },
  {
    index: 24,
    isActive: false,
    price: "$14.76",
    cost: "$10.92",
    picture: "http://placehold.it/32x32",
    upc: 3767,
    department: "HBC",
    description: "Sexton",
    company: "GEOSTELE",
  },
  {
    index: 25,
    isActive: true,
    price: "$19.98",
    cost: "$14.62",
    picture: "http://placehold.it/32x32",
    upc: 1348,
    department: "HBC",
    description: "Rogers",
    company: "RODEOCEAN",
  },
  {
    index: 26,
    isActive: true,
    price: "$13.03",
    cost: "$18.95",
    picture: "http://placehold.it/32x32",
    upc: 2742,
    department: "Produce",
    description: "Laurie",
    company: "PYRAMI",
  },
  {
    index: 27,
    isActive: true,
    price: "$16.72",
    cost: "$9.93",
    picture: "http://placehold.it/32x32",
    upc: 3002,
    department: "Lottery",
    description: "Allie",
    company: "MEDCOM",
  },
  {
    index: 28,
    isActive: false,
    price: "$17.64",
    cost: "$7.90",
    picture: "http://placehold.it/32x32",
    upc: 4748,
    department: "Grocery",
    description: "Maribel",
    company: "OATFARM",
  },
  {
    index: 29,
    isActive: false,
    price: "$4.63",
    cost: "$3.66",
    picture: "http://placehold.it/32x32",
    upc: 2861,
    department: "Lottery",
    description: "Black",
    company: "PYRAMIA",
  },
  {
    index: 30,
    isActive: true,
    price: "$16.92",
    cost: "$4.81",
    picture: "http://placehold.it/32x32",
    upc: 3066,
    department: "Meat",
    description: "Abigail",
    company: "PROGENEX",
  },
  {
    index: 31,
    isActive: false,
    price: "$16.46",
    cost: "$1.64",
    picture: "http://placehold.it/32x32",
    upc: 407,
    department: "Produce",
    description: "Matilda",
    company: "QUINEX",
  },
  {
    index: 32,
    isActive: false,
    price: "$4.59",
    cost: "$13.38",
    picture: "http://placehold.it/32x32",
    upc: 1624,
    department: "NonFood",
    description: "Billie",
    company: "AMTAS",
  },
  {
    index: 33,
    isActive: true,
    price: "$10.21",
    cost: "$18.95",
    picture: "http://placehold.it/32x32",
    upc: 3765,
    department: "HBC",
    description: "Sara",
    company: "BUNGA",
  },
  {
    index: 34,
    isActive: true,
    price: "$11.74",
    cost: "$6.31",
    picture: "http://placehold.it/32x32",
    upc: 1053,
    department: "Produce",
    description: "Jeannette",
    company: "ISOLOGIX",
  },
  {
    index: 35,
    isActive: true,
    price: "$5.08",
    cost: "$10.08",
    picture: "http://placehold.it/32x32",
    upc: 728,
    department: "Produce",
    description: "Thelma",
    company: "MANGELICA",
  },
  {
    index: 36,
    isActive: false,
    price: "$14.22",
    cost: "$18.62",
    picture: "http://placehold.it/32x32",
    upc: 3370,
    department: "Dairy",
    description: "Pate",
    company: "VERAQ",
  },
  {
    index: 37,
    isActive: false,
    price: "$15.12",
    cost: "$11.38",
    picture: "http://placehold.it/32x32",
    upc: 4545,
    department: "NonFood",
    description: "Miles",
    company: "PHARMACON",
  },
  {
    index: 38,
    isActive: false,
    price: "$5.09",
    cost: "$19.66",
    picture: "http://placehold.it/32x32",
    upc: 954,
    department: "NonFood",
    description: "Gates",
    company: "ECRATER",
  },
  {
    index: 39,
    isActive: true,
    price: "$7.54",
    cost: "$12.43",
    picture: "http://placehold.it/32x32",
    upc: 1466,
    department: "Grocery",
    description: "Rosemarie",
    company: "EARTHPURE",
  },
  {
    index: 40,
    isActive: true,
    price: "$8.96",
    cost: "$0.68",
    picture: "http://placehold.it/32x32",
    upc: 2017,
    department: "Dairy",
    description: "Pearson",
    company: "ANOCHA",
  },
  {
    index: 41,
    isActive: true,
    price: "$9.47",
    cost: "$13.15",
    picture: "http://placehold.it/32x32",
    upc: 4644,
    department: "HBC",
    description: "Sargent",
    company: "CORECOM",
  },
  {
    index: 42,
    isActive: true,
    price: "$6.31",
    cost: "$8.70",
    picture: "http://placehold.it/32x32",
    upc: 837,
    department: "NonFood",
    description: "Beryl",
    company: "INDEXIA",
  },
  {
    index: 43,
    isActive: true,
    price: "$0.61",
    cost: "$1.46",
    picture: "http://placehold.it/32x32",
    upc: 3362,
    department: "Grocery",
    description: "Sampson",
    company: "ECRATIC",
  },
  {
    index: 44,
    isActive: false,
    price: "$7.83",
    cost: "$18.17",
    picture: "http://placehold.it/32x32",
    upc: 3483,
    department: "Dairy",
    description: "Crane",
    company: "ONTAGENE",
  },
  {
    index: 45,
    isActive: true,
    price: "$0.47",
    cost: "$18.71",
    picture: "http://placehold.it/32x32",
    upc: 647,
    department: "Lottery",
    description: "Elsa",
    company: "ZOSIS",
  },
  {
    index: 46,
    isActive: false,
    price: "$1.19",
    cost: "$3.39",
    picture: "http://placehold.it/32x32",
    upc: 2430,
    department: "Produce",
    description: "Randi",
    company: "BLUPLANET",
  },
  {
    index: 47,
    isActive: false,
    price: "$13.99",
    cost: "$13.23",
    picture: "http://placehold.it/32x32",
    upc: 3196,
    department: "Produce",
    description: "Carla",
    company: "TERASCAPE",
  },
  {
    index: 48,
    isActive: false,
    price: "$18.92",
    cost: "$0.25",
    picture: "http://placehold.it/32x32",
    upc: 1479,
    department: "Meat",
    description: "Jimenez",
    company: "ZENOLUX",
  },
  {
    index: 49,
    isActive: true,
    price: "$3.04",
    cost: "$12.17",
    picture: "http://placehold.it/32x32",
    upc: 330,
    department: "Meat",
    description: "Jean",
    company: "UNI",
  },
  {
    index: 50,
    isActive: false,
    price: "$14.99",
    cost: "$4.17",
    picture: "http://placehold.it/32x32",
    upc: 1605,
    department: "Grocery",
    description: "Bettye",
    company: "ENVIRE",
  },
  {
    index: 51,
    isActive: false,
    price: "$2.93",
    cost: "$0.47",
    picture: "http://placehold.it/32x32",
    upc: 713,
    department: "Grocery",
    description: "Hopkins",
    company: "ACCEL",
  },
  {
    index: 52,
    isActive: true,
    price: "$8.67",
    cost: "$9.77",
    picture: "http://placehold.it/32x32",
    upc: 168,
    department: "Meat",
    description: "Mcgowan",
    company: "XYLAR",
  },
  {
    index: 53,
    isActive: false,
    price: "$11.16",
    cost: "$3.95",
    picture: "http://placehold.it/32x32",
    upc: 3772,
    department: "Dairy",
    description: "Josephine",
    company: "ELECTONIC",
  },
  {
    index: 54,
    isActive: false,
    price: "$3.71",
    cost: "$14.20",
    picture: "http://placehold.it/32x32",
    upc: 2194,
    department: "HBC",
    description: "Barnett",
    company: "TOYLETRY",
  },
  {
    index: 55,
    isActive: false,
    price: "$10.26",
    cost: "$1.99",
    picture: "http://placehold.it/32x32",
    upc: 2060,
    department: "NonFood",
    description: "Eva",
    company: "IMAGEFLOW",
  },
  {
    index: 56,
    isActive: false,
    price: "$18.45",
    cost: "$4.23",
    picture: "http://placehold.it/32x32",
    upc: 2898,
    department: "Meat",
    description: "Briana",
    company: "REMOTION",
  },
  {
    index: 57,
    isActive: false,
    price: "$16.65",
    cost: "$16.43",
    picture: "http://placehold.it/32x32",
    upc: 1615,
    department: "Lottery",
    description: "Ann",
    company: "QUIZMO",
  },
  {
    index: 58,
    isActive: true,
    price: "$1.91",
    cost: "$6.84",
    picture: "http://placehold.it/32x32",
    upc: 1068,
    department: "Dairy",
    description: "Waters",
    company: "ISOTERNIA",
  },
  {
    index: 59,
    isActive: true,
    price: "$1.98",
    cost: "$3.87",
    picture: "http://placehold.it/32x32",
    upc: 2985,
    department: "Meat",
    description: "Susanna",
    company: "JASPER",
  },
];