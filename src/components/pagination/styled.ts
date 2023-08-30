import styled from "@emotion/styled";
import { colors } from "../../utils/theme";

export const Wrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  flexWrap: "wrap",
  userSelect: "none",
});

export const PagiButton = styled.button<{ isActive?: boolean }>(
  {
    padding: "0.5rem 1rem",
    borderRadius: "2rem",

    border: `1px solid ${colors.secondary}`,
    color: colors.white,
    fontSize: "1rem",
    fontWeight: 700,
    cursor: "pointer",
    "&:disabled": {
      cursor: "default",
    },
  },
  ({ isActive }) => ({
    background: isActive ? colors.primary : colors.bg,
  })
);
