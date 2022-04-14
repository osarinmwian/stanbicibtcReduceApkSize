import { MyBankRootStackParameterList } from "@/mybank/navigation/types";
import {
  ease,
  insurance,
  mutualfunds,
  mybank,
  pension,
  stocks,
} from "@/shared/assets/image";

type Module = {
  backgroundColor: string;
  destination: keyof MyBankRootStackParameterList;
  id: string;
  image: number;
  title: string;
};

const modules: Module[] = [
  {
    backgroundColor: "primaryColor",
    destination: "MyBank",
    id: "1",
    image: mybank,
    title: "My Bank",
  },

  {
    backgroundColor: "mutualFundsContainer",
    destination: "MyBank",
    id: "2",
    image: mutualfunds,
    title: "Mutual Funds",
  },

  {
    backgroundColor: "pensionContainer",
    destination: "MyBank",
    id: "3",
    image: pension,
    title: "Pension",
  },

  {
    backgroundColor: "easeContainer",
    destination: "MyBank",
    id: "4",
    image: ease,
    title: "@Ease",
  },

  {
    backgroundColor: "insuranceContainer",
    destination: "MyBank",
    id: "5",
    image: insurance,
    title: "Insurance",
  },

  {
    backgroundColor: "black",
    destination: "MyBank",
    id: "6",
    image: stocks,
    title: "Stock",
  },
];
export default modules;
