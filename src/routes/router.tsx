import { createBrowserRouter } from "react-router-dom";

import { Vendas } from "@/pages/Vendas";
import { Cadastro } from "@/pages/Cadastro";
import { Compra } from "@/pages/Compra";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Vendas />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
  {
    path: "/compra",
    element: <Compra />,
  }
]);
