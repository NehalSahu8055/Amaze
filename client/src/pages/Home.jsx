import React from "react";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Box } from "@mui/material";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import GppBadOutlinedIcon from "@mui/icons-material/GppBadOutlined";
import BrowseGalleryOutlinedIcon from "@mui/icons-material/BrowseGalleryOutlined";
function Home() {
  return (
    <article>
      <h2 className="pb-4 text-2xl font-bold capitalize">SMS stats</h2>
      <span className=" font-semibold capitalize text-slate-900">
        Quick stats
      </span>
      <Box className="grid w-full grid-cols-1 gap-2.5 pt-4 tab:w-fit tab:grid-cols-3 laptop:grid-cols-4">
        <Card
          elevation={1}
          className="flex w-full justify-between tab:w-[15rem]"
        >
          <CardContent className="flex w-full items-center justify-between">
            <Box className="flex flex-col">
              <span className="text-sm font-semibold uppercase text-sky-500">
                SMS IN TODAY
              </span>
              <span className="font-bold uppercase text-slate-800">4911</span>
            </Box>
            <CloudDownloadOutlinedIcon className="fill-gray-400 stroke-white text-[2.5rem]" />
          </CardContent>
        </Card>

        <Card
          elevation={1}
          className="flex w-full justify-between tab:w-[15rem] "
        >
          <CardContent className="flex w-full items-center justify-between">
            <Box className="flex flex-col">
              <span className="text-sm font-semibold uppercase text-sky-500">
                Scheduled
              </span>
              <span className="font-bold uppercase text-slate-800">4911</span>
            </Box>
            <PrivacyTipOutlinedIcon className="h-12 fill-gray-400 stroke-white text-[2.5rem]" />
          </CardContent>
        </Card>
        <Card
          elevation={1}
          className="flex w-full justify-between tab:w-[15rem] "
        >
          <CardContent className="flex w-full items-center justify-between">
            <Box className="flex flex-col">
              <span className="text-sm font-semibold uppercase text-sky-500">
                SMS out TODAY
              </span>
              <span className="font-bold uppercase text-slate-800">4911</span>
            </Box>
            <CloudUploadOutlinedIcon className="fill-gray-400 stroke-white text-[2.5rem]" />
          </CardContent>
        </Card>
        <Card
          elevation={1}
          className="flex w-full justify-between tab:w-[15rem] "
        >
          <CardContent className="flex w-full items-center justify-between">
            <Box className="flex flex-col">
              <span className="text-sm font-semibold uppercase text-sky-500">
                Delivered
              </span>
              <span className="font-bold uppercase text-slate-800">4911</span>
            </Box>
            <VerifiedUserOutlinedIcon className="fill-gray-400 stroke-white text-[2.5rem]" />
          </CardContent>
        </Card>
        <Card
          elevation={1}
          className="flex w-full justify-between tab:w-[15rem] "
        >
          <CardContent className="flex w-full items-center justify-between">
            <Box className="flex flex-col">
              <span className="text-sm font-semibold uppercase text-sky-500">
                Failed
              </span>
              <span className="font-bold uppercase text-slate-800">1667</span>
            </Box>
            <GppBadOutlinedIcon className="fill-gray-400 stroke-white text-[2.5rem]" />
          </CardContent>
        </Card>
        <Card
          elevation={1}
          className="flex w-full justify-between tab:w-[15rem] "
        >
          <CardContent className="flex w-full items-center justify-between">
            <Box className="flex flex-col">
              <span className="text-sm font-semibold uppercase text-sky-500">
                awaited
              </span>
              <span className="font-bold uppercase text-slate-800">25</span>
            </Box>
            <BrowseGalleryOutlinedIcon className="fill-gray-400 stroke-white text-[2.5rem]" />
          </CardContent>
        </Card>
      </Box>
    </article>
  );
}

export default Home;
