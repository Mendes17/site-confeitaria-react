import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { navigationHeader } from "../../server/navigation-header";
import { Link } from "react-router-dom";
import {SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "pink", color: "#000" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Roboto",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
              fontSize: "2.4rem",
            }}>
            MALU DOCES
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon sx={{ fontSize: "3.2rem" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}>
              {navigationHeader.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center", fontSize: "1.6rem" }}>
                    <Link
                      to={page.href}
                      style={{ color: "#000", textDecoration: "none" }}>
                      {page.textName}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Roboto",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
              fontSize: "2.4rem",
            }}>
            MaluDoces
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {navigationHeader.map((page) => (
              <Button
                key={page.id}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#000",
                  display: "block",
                  fontSize: "1.6rem",
                  "&:hover": {
                    color: "pink",
                  },
                  "&:focus": {
                    color: "pink",
                  },
                }}>
                <Link
                  to={page.href}
                  style={{ color: "#000", textDecoration: "none" }}>
                  {page.textName}
                </Link>
              </Button>
            ))}
          </Box>
            <SignedIn>
                <UserButton />
            </SignedIn>
            <SignedOut>
                <Link to="/sign-in">Sign In</Link>
            </SignedOut>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
