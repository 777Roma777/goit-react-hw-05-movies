import { Error } from "./errorMessage.styled";

export const ErrorMessage = ({message}) => {
  return <Error>Oops! Something does wrong! <br /> <span>({message})</span></Error>;
}