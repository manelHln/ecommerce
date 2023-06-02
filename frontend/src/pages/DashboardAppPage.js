import { Helmet } from "react-helmet-async";
import { Grid, Container, Typography } from "@mui/material";
import { AppTasks } from "../sections/@dashboard/app";

export default function DashboardAppPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Salut, Bienvenue
        </Typography>

        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Commandes"
              list={[
                { id: "1", label: "Create FireStone Logo" },
                { id: "2", label: "Add SCSS and JS files if required" },
                { id: "3", label: "Stakeholder Meeting" },
                { id: "4", label: "Scoping & Estimations" },
                { id: "5", label: "Sprint Showcase" },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
