import PropTypes from "prop-types";
import Tooltip from "@mui/material/Tooltip";
import MDAvatar from "components/MDAvatar";
import MDBox from "components/MDBox";

function AuthorsDisplay({ authors }) {
  return (
    <MDBox display="flex" alignItems="center">
      {authors.map((author, index) => (
        <MDBox key={author.name} position="relative" ml={index !== 0 && "-20px"}>
          <Tooltip title={author.name} placement="bottom">
            <MDAvatar
              src={author.image}
              alt={author.name}
              size="xs"
              sx={({ borders: { borderWidth }, palette: { white } }) => ({
                border: `${borderWidth[2]} solid ${white.main}`,
                cursor: "pointer",
                zIndex: authors.length - index,
              })}
            />
          </Tooltip>
        </MDBox>
      ))}
    </MDBox>
  );
}


// Typechecking props for the AuthorsDisplay
AuthorsDisplay.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AuthorsDisplay;
