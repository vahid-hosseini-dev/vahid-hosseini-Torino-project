"use client";

import PageNotFound from "@/app/not-found";
import ServerDisconnect from "@/components/templates/ServerDisconnect";
import { useEffect } from "react";

function CheckServer({ error }) {
  useEffect(() => {
    return <div>{error === 404 ? <PageNotFound /> : <ServerDisconnect />}</div>;
  }, [error]);
}

export default CheckServer;
