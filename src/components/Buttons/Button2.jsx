import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import { StyledDiv } from "./Button.style";

export function BasicButtons(props) {
  return (
    <StyledDiv>
      <Stack
        spacing={2}
        direction="row"
        sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            width: "100%",
            maxWidth: "350px",
            fontSize: "1.6rem",
            borderRadius: "8px",
            "&:hover": {
              borderColor: "#fff",
              color: "#fff",
              boxShadow: "0 0.5em 0.5em -0.4em pink",
              backgroundColor: "pink",
            },
            "&focus": {
              borderColor: "pink",
              color: "pink",
              boxShadow: "0 0.5em 0.5em -0.4em pink",
            },
          }}>
          <a href={props.url}>{props.textButton}</a>
        </Button>
      </Stack>
    </StyledDiv>
  );
}

BasicButtons.propTypes = {
  url: PropTypes.string.isRequired,
  textButton: PropTypes.string.isRequired,
};

export function IfoodButton(props) {
  return (
    <StyledDiv>
      <Stack
        spacing={2}
        direction="row"
        sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            width: "100%",
            maxWidth: "350px",
            fontSize: "1.6rem",
            borderRadius: "8px",
            "&:hover": {
              borderColor: "#fff",
              color: "#fff",
              backgroundColor: "#E22D36",
            },
            "&focus": {
              borderColor: "#E22D36",
              color: "#E22D36",
            },
          }}>
          <a href={props.url}>{props.textButton}</a>
        </Button>
      </Stack>
    </StyledDiv>
  );
}

IfoodButton.propTypes = {
  url: PropTypes.string.isRequired,
  textButton: PropTypes.string.isRequired,
};

export function WhatsappButton(props) {
  return (
    <StyledDiv>
      <Stack
        spacing={2}
        direction="row"
        sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            width: "100%",
            maxWidth: "350px",
            fontSize: "1.6rem",
            borderRadius: "8px",
            "&:hover": {
              borderColor: "#fff",
              color: "#fff",
              boxShadow: "0 0.5em 0.5em -0.4em #25D366",
              backgroundColor: "#25D366",
            },
            "&focus": {
              borderColor: "#25D366",
              color: "#25D366",
              boxShadow: "0 0.5em 0.5em -0.4em #25D366",
            },
          }}>
          <a href={props.url}>{props.textButton}</a>
        </Button>
      </Stack>
    </StyledDiv>
  );
}

WhatsappButton.propTypes = {
  url: PropTypes.string.isRequired,
  textButton: PropTypes.string.isRequired,
};

export function InstagramButton(props) {
  return (
    <StyledDiv>
      <Stack
        spacing={2}
        direction="row"
        sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            width: "100%",
            maxWidth: "350px",
            fontSize: "1.6rem",
            borderRadius: "8px",
            "&:hover": {
              borderColor: "#fff",
              color: "#fff",
              background:
                "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
            },
            "&:focus": {
              borderColor: "#E22D36",
            },
          }}>
          <a href={props.url}>{props.textButton}</a>
        </Button>
      </Stack>
    </StyledDiv>
  );
}

InstagramButton.propTypes = {
  url: PropTypes.string.isRequired,
  textButton: PropTypes.string.isRequired,
};

export function FacebookButton(props) {
  return (
    <StyledDiv>
      <Stack
        spacing={2}
        direction="row"
        sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            width: "100%",
            maxWidth: "350px",
            fontSize: "1.6rem",
            borderRadius: "8px",
            "&:hover": {
              borderColor: "#fff",
              color: "#fff",
              boxShadow: "0 0.5em 0.5em -0.4em #1877F2",
              backgroundColor: "#1877F2",
            },
            "&focus": {
              borderColor: "#1877F2",
              color: "#1877F2",
              boxShadow: "0 0.5em 0.5em -0.4em #1877F2",
            },
          }}>
          <a href={props.url}>{props.textButton}</a>
        </Button>
      </Stack>
    </StyledDiv>
  );
}

FacebookButton.propTypes = {
  url: PropTypes.string.isRequired,
  textButton: PropTypes.string.isRequired,
};
