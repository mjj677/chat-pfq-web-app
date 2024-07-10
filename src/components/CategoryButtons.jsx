import { Button, Skeleton, Box, useTheme } from "@mui/material";

export const CategoryButtons = ({
  handleClick,
  category,
  allCategories,
  loading,
}) => {
  const theme = useTheme();
  const skeletonCount = 14;

  return (
    <>
      <Button
        onClick={handleClick}
        value={"All"}
        variant={category === "All" ? "contained" : "outlined"}
        className="category-button"
        sx={{
          margin: "5px",
          padding: "5px",
          color: category === "All" ? theme.palette.primary.contrastText : theme.palette.text.primary,
          backgroundColor: category === "All" ? theme.palette.primary.main : theme.palette.background.paper,
          borderRadius: "15px",
        }}
      >
        All
      </Button>
      {loading === true ? (
        <Box sx={{ width: "100%" }}>
          {Array.from({ length: skeletonCount }).map((_, index) => (
            <Skeleton
              key={index}
              variant="rectangular"
              className ="category-button"
              sx={{
                margin: "5px",
                padding: "5px",
                borderRadius: "15px",
                width: "auto",
                height: "36px",
              }}
            />
          ))}
        </Box>
      ) : (
        allCategories.map((categoryItem) => {
          return (
            <Button
              key={categoryItem}
              variant={category === categoryItem ? "contained" : "outlined"}
              onClick={handleClick}
              value={categoryItem}
              className="category-button"
              sx={{
                margin: "5px",
                padding: "5px",
                color: category === categoryItem ? theme.palette.primary.contrastText : theme.palette.text.primary,
                backgroundColor: category === categoryItem ? theme.palette.primary.main : theme.palette.background.paper,
                borderRadius: "15px"
              }}
            >
              {categoryItem}
            </Button>
          );
        })
      )}
    </>
  );
};