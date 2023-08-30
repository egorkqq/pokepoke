import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { colors } from "../../utils/theme";

export const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  borderRadius: "2rem",
  width: "100%",
  background: colors.bg,
  border: `1px solid ${colors.secondary}`,
  overflow: "hidden",
});

export const Picture = styled.img({
  width: "9rem",
  height: "9rem",
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
