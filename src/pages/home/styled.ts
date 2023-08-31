import styled from "@emotion/styled";

export const Layout = styled.main({
  marginTop: "2rem",
  display: "flex",
  gap: "2rem",
  maxWidth: "100%",
});

export const FiltersWrapper = styled.aside({
  display: "flex",
  width: "18rem",
  flexShrink: 0,
});

export const ListWrapper = styled.section({
  display: "flex",
  flexGrow: 1,
  width: "calc(100% - 20rem)",
});

export const DetailWrapper = styled.aside({
  display: "flex",
  width: "18rem",
  flexShrink: 0,
});
