import React from 'react'
import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const ActiveRequests = () => {
  return (
    <div>
                      <TableContainer component={Paper}>
                  <Table
                    sx={{ minWidth: 650 }}
                    size="small"
                    aria-label="a dense table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell align="right">مرغدار</TableCell>
                        <TableCell align="right">کد سفارش</TableCell>
                        <TableCell align="right">تعداد مرغ</TableCell>
                        <TableCell align="right">تاریخ ثبت سفارش</TableCell>
                        <TableCell align="right">تاریخ جوجه ریزی</TableCell>
                        <TableCell align="right">
                          تاریخ درخواستی کشتار
                        </TableCell>
                        <TableCell align="right">سن مرغ</TableCell>
                        <TableCell align="right">وزن مرغ</TableCell>
                        <TableCell align="right">نژاد مرغ</TableCell>
                        <TableCell align="right">مشاهده</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="right">کاربر</TableCell>
                        <TableCell align="right">۱۲۳۴۵</TableCell>
                        <TableCell align="right">۲۰۰۰۰۰</TableCell>
                        <TableCell align="right">۱۴۰۰/۰۱/۰۲</TableCell>
                        <TableCell align="right">۱۴۰۰/۰۱/۰۲</TableCell>
                        <TableCell align="right">۱۴۰۰/۰۱/۰۲</TableCell>
                        <TableCell align="right">۳۳</TableCell>
                        <TableCell align="right">۳</TableCell>
                        <TableCell align="right">راس</TableCell>
                        <TableCell align="right">
                          <Button variant="outlined" color="error">
                            مشاهده
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
    </div>
  )
}