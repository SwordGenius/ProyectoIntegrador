import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import logo from "../assets/logo.png";
import Sp from "../assets/Sp.svg"
import Inventory from "../assets/Inventory.svg"
import Users from "../assets/Users.svg"
import Money from "../assets/Money.svg"



const tiers = [

  {
    title: "Ventas",
    price: "30",
    description: [
      
      // eslint-disable-next-line react/jsx-key
      <img className="icon" id="Sp" src={Sp} alt="" />
    ],
    buttonText: "Ir",
    buttonVariant: "outlined",
  },
  {
    title: "Inventario",
    description: [
      // eslint-disable-next-line react/jsx-key
      <img className="icon" id="Inventory" src={Inventory} alt="" />

    ],
    buttonText: "Ir",
    buttonVariant: "outlined",
  },
  {
    title: "Inventario",
    price: "30",
    description: [
      // eslint-disable-next-line react/jsx-key
      <img className="icon" id="Users" src={Users} alt="" />

    ],
    buttonText: "Ir",
    buttonVariant: "outlined",
  },
  {
    title: "Corte de caja",
    price: "30",
    description: [
      // eslint-disable-next-line react/jsx-key
      <img className="icon" id="Money" src={Money} alt="" />

    ],
    buttonText: "Ir",
    buttonVariant: "outlined",
  },
];


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Pricing() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles
        styles={{ ul: { margin: 50, padding: 20, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar

        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}`  }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          <img className="logo" id="logo" src={logo} alt="" />
          </Typography>

          <Button href="#" variant="outlined" sx={{ my: 5, mx: 1.5 }}>
            Salir
          </Button>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 20, pb: 6 }}
      >
        <Typography
          variant="h5"
          align="center"
          color="text.primary"
          gutterBottom
        >
          ADMINISTRACIÓN
        </Typography>

      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={10} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise" ? 10 : 6}
              md={0}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >

                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
          
        </Grid>
      </Container>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 10,
          py: [5, 6],
        }}
      >

      </Container>
      {/* End footer */}
    </ThemeProvider>
  );
}
