import {
  ease,
  insurance,
  mutualfunds,
  mybank,
  pension,
  stocks,
} from "@/shared/assets/image";
import { OnePassRootStackParameterList } from "@/shared/screens/onePass/navigation/type";

type Module = {
  background: string;
  destination: keyof OnePassRootStackParameterList;
  id: string;
  image: number;
  title: string;
};

const profiles: Module[] = [
  {
    background: "primaryColor",
    destination: "OnePassLogin",
    id: "1",
    image: mybank,
    title: "Internet Banking",
  },

  {
    background: "mutualFundsContainer",
    destination: "OnePassLogin",
    id: "2",
    image: mutualfunds,
    title: "Mutual Funds",
  },

  {
    background: "pensionContainer",
    destination: "OnePassLogin",
    id: "3",
    image: pension,
    title: "Pension",
  },

  {
    background: "easeContainer",
    destination: "OnePassLogin",
    id: "4",
    image: ease,
    title: "@Ease",
  },

  {
    background: "insuranceContainer",
    destination: "OnePassLogin",
    id: "5",
    image: insurance,
    title: "Insurance",
  },

  {
    background: "black",
    destination: "OnePassLogin",
    id: "6",
    image: stocks,
    title: "Stock",
  },
];
export default profiles;
