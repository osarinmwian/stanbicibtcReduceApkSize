import {
  account,
  airtime,
  atm,
  balance,
  complain,
  customer,
  flight,
  flights,
  forgotPassword,
} from "@/shared/assets/image";
import { RootStackParameterList } from "@/shared/navigation/types";

type Module = {
  backgroundColor: string;
  destination: keyof RootStackParameterList;
  id: string;
  image: number;
  title: string;
};

const quickOptions: Module[] = [
  {
    backgroundColor: "#0032A1",
    id: "1",
    image: airtime,
    title: "Buy Airtime",
    destination: "QuickAirtime",
  },

  {
    backgroundColor: "#00A2B1",
    id: "2",
    image: balance,
    title: "Check Balance",
    destination: "QuickAirtime",
  },

  {
    backgroundColor: "#0052FF",
    id: "3",
    image: flight,
    title: "Book Flights",
    destination: "QuickAirtime",
  },

  {
    backgroundColor: "#4D85FE",
    id: "4",
    image: atm,
    title: "Locate ATM",
    destination: "BranchLocator",
  },

  {
    backgroundColor: "#B150C4",
    id: "5",
    image: customer,
    title: "Customer Care",
    destination: "QuickAirtime",
  },

  {
    backgroundColor: "#000000",
    id: "6",
    image: forgotPassword,
    title: "Forgot Password",
    destination: "QuickAirtime",
  },

  {
    backgroundColor: "#000000",
    id: "7",
    image: complain,
    title: "Send Complain",
    destination: "QuickAirtime",
  },

  {
    backgroundColor: "#000000",
    id: "8",
    image: account,
    title: "Account Manager",
    destination: "QuickAirtime",
  },

  {
    backgroundColor: "#000000",
    id: "9",
    image: flights,
    title: "Book Flight",
    destination: "QuickAirtime",
  },
];

export default quickOptions;
