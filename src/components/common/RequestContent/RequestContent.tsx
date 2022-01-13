import React from "react";
import Loading from "./Loading";
import ErrorFeedback from "./ErrorFeedback";

type Props = {
  children: React.ReactNode;
  loading?: boolean;
  error?: string | null;
};

const RequestContent: React.FC<Props> = ({ loading, error, children }) => {
  if (loading) return <Loading />;

  if (error) return <ErrorFeedback message={error} />;

  return <>{children}</>;
};

export default React.memo(RequestContent);
