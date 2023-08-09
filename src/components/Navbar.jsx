import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { SearchBar } from "../components";

const Navbar = () => (
  <Stack
    direction="row"
    p={2}
    alignItems="center"
    sx={{
      background: "#000",
      position: "sticky",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/">
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
