import {
  FeatureAppLoader,
  FeatureHubContextProvider,
} from "@feature-hub/react";

import { loadFederatedModule } from "@feature-hub/module-loader-federation";
import { createFeatureHub } from "@feature-hub/core";
import { useRouter } from "next/router";
import Link from "next/link";

function FeatureApp() {
  const router = useRouter();
  const { featureApp } = router.query;
  const { featureAppManager } = createFeatureHub("acme:integrator", {
    moduleLoader: loadFederatedModule,
  });

  return (
    <>
      <header>
        <div>This is a Next js header hosted inside the feature hub</div>
        <Link href="/">Home</Link>
      </header>
      <FeatureHubContextProvider value={{ featureAppManager }}>
        <FeatureAppLoader
          featureAppId="some-feature-app:main"
          src={`http://localhost:${featureApp}/dist/featured-app.federated.js`}
          moduleType="federated"
          onError={console.warn}
        >
          {({ error, featureAppNode, loading }) => {
            if (loading) return <div>loading featured app...</div>;
            if (!featureAppNode)
              return (
                <div>
                  Failed to load featured app, make sure the federation file is
                  being served
                </div>
              );
            return featureAppNode;
          }}
        </FeatureAppLoader>
      </FeatureHubContextProvider>
    </>
  );
}

export default FeatureApp;
