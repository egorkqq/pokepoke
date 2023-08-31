import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { colors } from "../../utils/theme";

export const Wrapper = styled.div<{ selected: boolean }>(
  {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "2rem",
    width: "100%",
    background: colors.bg,
    overflow: "hidden",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      transform: "scale(1.05)",
    },
  },
  ({ selected }) => ({
    border: selected ? `2px solid ${colors.primary}` : `2px solid ${colors.secondary}`,
  })
);

export const Picture = styled.img({
  width: "8rem",
  height: "8rem",
  objectFit: "cover",
});

export const Name = styled.div({
  fontSize: "1.25rem",
  fontWeight: 700,
  lineHeight: "2rem",
  textTransform: "capitalize",
  padding: "1rem",
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
});

const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;
export const Skeleton = styled.div({
  animation: `${pulse} 1.5s infinite`,
  borderRadius: "2rem",
  width: "100%",
  background: colors.secondary,
  border: `1px solid ${colors.bg}`,
  height: "12rem",
});
