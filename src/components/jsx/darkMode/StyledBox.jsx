import styled from '@emotion/styled';
import { useDarkMode } from '../../../context/DarkModeContext';
import PropTypes from 'prop-types';

const Box = styled.div`
  padding: 1rem;
  border-radius: 8px;
  background-color: ${(props) => (props.dark ? '#222' : '#eee')};
  color: ${(props) => (props.dark ? 'white' : 'black')};
  transition: background-color 0.3s ease;
`;

export default function StyledBox({ children }) {
  const { darkMode } = useDarkMode();
  return <Box dark={darkMode}>{children}</Box>;
}

StyledBox.propTypes = {
  children: PropTypes.node.isRequired,
};

