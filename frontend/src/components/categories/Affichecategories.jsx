import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Box, Button } from "@mui/material";
const Affichecategories = ({ categories }) => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "imagecategorie",
        header: "Image",
        Cell: ({ cell }) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <img
              alt=""
              width={200}
              height={80}
              src={cell.getValue()}
              loading="lazy"
              style={{ borderRadius: "5%" }}
            />
          </Box>
        ),
      },
      {
        accessorKey: "nomcategorie",
        header: "Nom Catégorie",
        size: 100,
      },

      {
        accessorKey: "_id",
        header: "actions",
        size: 10,
        Cell: ({ cell, row }) => (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",

              gap: "0.5rem",
            }}
          >
            <Button onClick={() => {}} variant="contained" color="warning">
              <i className="fa-solid fa-pen-to-square"></i>
            </Button>
            <Button
              onClick={() => {}}
              variant="contained"
              color="error"
              style={{ fontSize: "20px", padding: "12px 24px" }}
            >
              <i className="fa fa-trash"></i>
            </Button>
          </div>
        ),
      },
    ],
    [categories]
  );
  const table = useMaterialReactTable({
    columns,
    data: categories,
  });
  return (
    <div className="container">
      {categories && categories.length > 0 && (
        <MaterialReactTable table={table} />
      )}
    </div>
  );
};
export default Affichecategories;
