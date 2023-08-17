import type { SSTConfig } from "sst";
import { Site } from "stacks/site";

export default {
  config(_input) {
    return {
      name: "posstrock-stack",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(Site);
  },
} satisfies SSTConfig;
