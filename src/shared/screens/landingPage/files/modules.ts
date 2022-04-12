import { MyBankRoutes } from "@/mybank/navigation/types";
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
  destination: keyof MyBankRoutes;
  id: string;
  image: number;
  title: string;
};

const modules: Module[] = [
  {
    backgroundColor: "primaryColor",
    destination: "LoginScreen",
    id: "1",
    image: mybank,
    title: "My Bank",
  },

  {
    backgroundColor: "mutualFundsContainer",
    destination: "LoginScreen",
    id: "2",
    image: mutualfunds,
    title: "Mutual Funds",
  },

  {
    backgroundColor: "pensionContainer",
    destination: "LoginScreen",
    id: "3",
    image: pension,
    title: "Pension",
  },

  {
    backgroundColor: "easeContainer",
    destination: "LoginScreen",
    id: "4",
    image: ease,
    title: "@Ease",
  },

  {
    backgroundColor: "insuranceContainer",
    destination: "LoginScreen",
    id: "5",
    image: insurance,
    title: "Insurance",
  },

  {
    backgroundColor: "black",
    destination: "LoginScreen",
    id: "6",
    image: stocks,
    title: "Stock",
  },
];
export default modules;
