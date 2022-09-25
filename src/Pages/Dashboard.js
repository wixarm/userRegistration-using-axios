import {  Card, Grid } from "@mui/material";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AppBarComponent from "../features/authentication/app-bar/AppBar";
import { ActiveRequests } from "../features/authentication/components/active-requests/ActiveRequests";
import { NewRequests } from "../features/authentication/components/new-requests/NewRequests";


export const Dashboard = () => {
  return ( 
    <>
    <AppBarComponent/>
    <Grid container justifyContent="center" alignItems="center">
      <Grid xs={10} mt={10}>
        <Card>
          <Grid p={4}>
            <Accordion>
              <AccordionSummary sx={{backgroundColor:"#95afc0"}}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>درخواست های جدید</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <NewRequests/>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary sx={{backgroundColor:"#7ed6df"}}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>درخواست های فعال</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ActiveRequests/>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Card>
      </Grid>
    </Grid>
    </>
  );
};