import type { Props } from "./type";

const ErrorState = ({ message }: Props) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-red-500 text-lg">Error: {message}</p>
    </div>
  );
};

export default ErrorState;
