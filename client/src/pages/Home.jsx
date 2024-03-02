import React from "react";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Box } from "@mui/material";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";

function Home() {
  return (
    <article>
      <h2 className="text-3xl font-bold capitalize">SMS stats</h2>
      <Card className="flex justify-between">
        <CardContent>
          <Box className="flex flex-col">
            <span className="text-sm font-semibold uppercase text-sky-500">
              SMS IN TODAY
            </span>
            <span className="font-bold uppercase text-slate-800">4911</span>
          </Box>
        </CardContent>
      </Card>
    </article>
  );
}

export default Home;
