import type { ComponentType } from "react"; // gunakan type-only import
import { useEffect, useState } from "react";

interface WithLoadingProps {
  isLoading?: boolean;
}

function withLoadingAndLogging<P extends object>(
  WrappedComponent: ComponentType<P>
) {
  return function EnhancedComponent(props: P & WithLoadingProps) {
    const [loading] = useState(props.isLoading ?? false);

    useEffect(() => {
      console.log(`Render komponen: ${WrappedComponent.name}`);
    }, [props]);

    if (loading) {
      return <p>Sedang memuat data...</p>;
    }

    return <WrappedComponent {...props} />;
  };
}

export default withLoadingAndLogging;
