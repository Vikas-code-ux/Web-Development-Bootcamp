import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'name', headerName: 'NAME', width: 200 },
  { field: 'phone', headerName: 'NUMBER', width: 200 },
  { field: 'email', headerName: 'EMAIL', width: 200 },
  { field: 'address.geo.lat', headerName: 'Latitude', width: 130 },
  { field: 'address.geo.lng', headerName: 'Longitude', width: 130 },
];


export default function DataTable({users}) {
  return (
    <div style={{ height: 900, width: '100%' }}>
      <div><h1>Users</h1></div>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[15]}
        checkboxSelection
      />
    </div>
  );
}