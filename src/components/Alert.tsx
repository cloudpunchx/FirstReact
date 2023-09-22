import { ReactNode } from "react";

// Using the children prop, we can pass children to the component
interface Props {
  children: ReactNode;
  onClose: () => void;
}

// This is destructuring the props
const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-danger alert-dismissible" role="alert">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
