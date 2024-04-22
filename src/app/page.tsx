import React, { Suspense } from "react";
import HomePageView from "@/app/components/HomePageView";
import { Grid, Skeleton } from "@radix-ui/themes";

export const revalidate = 0;
export default async function Home() {
  return (
    <main>
      <Suspense
        fallback={
          <Grid columns="3" gap="3" height={"350px"} width="auto">
            <Skeleton>Loading</Skeleton>
            <Skeleton>Loading</Skeleton>
            <Skeleton>Loading</Skeleton>
          </Grid>
        }
      >
        <HomePageView />
      </Suspense>
    </main>
  );
}
