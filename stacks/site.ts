import { RemixSite } from "sst/constructs";

export function Site({ stack }) {
  const site = new RemixSite(stack, "site");
  stack.addOutputs({
    url: site.url,
  });
}
