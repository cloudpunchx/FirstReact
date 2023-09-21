import { ReactNode } from "react";

// Using the children prop, we can pass children to the component
interface Props {
  children: ReactNode;
}

// This is destructuring the props
const Alert = ({ children }: Props) => {
  return (
    <div className="alert alert-danger" role="alert">
      {children}
    </div>
  );
};

export default Alert;
