import React from "react";

export function ClientView({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return <div>{mounted ? children : null}</div>;
}
