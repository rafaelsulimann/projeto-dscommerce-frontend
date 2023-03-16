export const selectStyles = {
  control: (provided: any) => ({
    ...provided,
    padding: "0px 0px 0px 20px",
    border: "none",
    boxShadow: "none",
    "&:hover": {
      border: "none",
    },
  }),
  valueContainer: (provided: any) => ({
    ...provided,
    padding: 0,
    maxHeight: "40px",
    display: "flex",
    alignContent: "center"
  }),
  container: (provided: any) => ({
    ...provided,
    padding: 0,
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: "var(--gray-light-placeholder-color)",
    margin: 0,
    fontSize: "13px",
  }),
  option: (provided: any) => ({
    ...provided,
    color: "var(--gray-color)",
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    display: "none",
  }),
};
