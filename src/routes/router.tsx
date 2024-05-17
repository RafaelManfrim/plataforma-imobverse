import { createBrowserRouter } from "react-router-dom";

import { Vendas } from "@/pages/Vendas";
import { Compra } from "@/pages/Compra";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Vendas />,
  },
  {
    path: "/checkout/:id",
    element: <Compra />,
  }
]);
