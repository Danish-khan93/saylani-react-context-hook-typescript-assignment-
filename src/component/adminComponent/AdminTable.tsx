// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../firebase";
import { useProductGet } from "../../productgetFirebase/useProductGet";
// import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export default function BasicTable() {
  // @ts-ignore
  const { product } = useProductGet();

  return (
    <TableContainer className="m-10" component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="bg-blue-500">
          <TableRow>
            <TableCell className="text-white">Title</TableCell>
            <TableCell align="right" className="text-white">
              ID
            </TableCell>
            <TableCell align="right" className="text-white">
              Quantity
            </TableCell>
            <TableCell align="right" className="text-white">
              price
            </TableCell>
            <TableCell align="right" className="text-white">
              Total
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {product.map((row: any, index: number) => (
            <TableRow
              key={row.title}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{index + 1}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{`${row.price}$`}</TableCell>
              <TableCell align="right">{`${
                row.quantity * row.price
              }$`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
