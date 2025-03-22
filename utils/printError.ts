import { PrintError } from "../../types";

export const printError = ({
  name,
  code,
  data,
  message,
}: Partial<PrintError>) =>
  console.log({
    name,
    code,
    data,
    message,
  });
