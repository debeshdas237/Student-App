import { Suspense } from "react";

const withSuspense = (Component) => {
  return (props) => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
};

export default withSuspense;