import React from "react";

import { Callout, Grid } from "@radix-ui/themes";
import CardComponent from "@/app/components/CardComponent";

const HomePageView = async () => {
  const res = await fetch("http://localhost:3000/api").then((res) =>
    res.json(),
  );
  return (
    <>
      <Callout.Root className={"mb-5"}>
        {JSON.stringify(res) + " <= from server"}
      </Callout.Root>
      <Grid columns="3" gap="3" width="auto">
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </Grid>
    </>
  );
};

export default HomePageView;
