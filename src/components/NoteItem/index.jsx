import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons/fi";
import PropTypes from "prop-types";

export function NoteItem({ isNew, value, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />

      <button type="button">{isNew ? <FiPlus /> : <FiX />}</button>
    </Container>
  );
}

NoteItem.propTypes = {
  isNew: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

NoteItem.propTypes = {
  isNew: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
