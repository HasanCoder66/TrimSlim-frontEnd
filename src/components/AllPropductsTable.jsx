
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { RiSearchLine } from "react-icons/ri";
const initialRows = [
    { id: 1, fullname: 'Jon', status: 'pending' },
    { id: 2,  fullname: 'Cersei', status: 'pending' },
    { id: 3,  fullname: 'Jaime', status: 'pending' },
    { id: 4,  fullname: 'Arya', status: 'approved' },
    { id: 5,  fullname: 'Daenerys', status: 'approved' },
    { id: 6,  fullname: null, status: 'rejected' },
    { id: 7, fullname: 'Ferrara', status: 'approved' },
    { id: 8, fullname: 'Rossini', status: 'rejected' }
  ];
  
  const columns = [
    {
      field: 'image',
      headerName: 'Image',
      width: 150,
      editable: false,
    },
    {
      field: 'namename',
      headerName: 'Name',
      width: 450,
      editable: false,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 180,
      editable: false,
      renderCell: (params) => (
        <Select
          value={params.value || 'pending'}
          onChange={(event) => {
            const newValue = event.target.value;
            params.api.updateRows([{ id: params.id, status: newValue }]);
          }}
          displayEmpty
          fullWidth
          IconComponent={null}
          sx={{
            '& .MuiSelect-select': {
              padding: '5px 32px',
              textAlign: 'center',
              borderBottom: 'none', // Removing bottom border from the dropdown menu
              outline: 'none',
            },
            backgroundColor:
              params.value === 'approved'
                ? 'darkgreen'
                : params.value === 'rejected'
                ? 'darkred'
                : 'darkgoldenrod',
            color: '#fff',
            borderRadius: '10px',
          }}
        >
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="approved">Approved</MenuItem>
          <MenuItem value="rejected">Rejected</MenuItem>
        </Select>
      ),
    },
    {
      field: 'actions',
      headerName: '',
      width: 160,
      editable: false,
      renderCell: (params) => (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <IconButton aria-label="edit" size="small">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete" size="small">
            <DeleteIcon />
          </IconButton>
        </div>
      ),
    },
  ];
  

const AllPropductsTable = () => {
    const [rows, setRows] = React.useState(initialRows);

    const handleProcessRowUpdate = (newRow) => {
      const updatedRows = rows.map((row) => (row.id === newRow.id ? { ...row, status: newRow.status } : row));
      setRows(updatedRows);
      return newRow;
    };
  return (
    <div className='bg-white ml-5 mr-5 mb-5 py-3'>
      <div className='flex justify-end px-8 py-2'>
        <button className='bg-black text-white p-2'><span className=''>+</span>Add Product</button>

      </div>
    
<div className='flex justify-end px-8 py-4'>

 <input type="text" className='border  focus:outline-none focus:ring-0 focus:border-gray-600'/>
 <button className='bg-sky-800 text-white px-2 py-2 '><RiSearchLine/></button>
</div>
    <Box sx={{ height: 400, width: '95%', backgroundColor: 'white' , marginLeft:'25px' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        processRowUpdate={handleProcessRowUpdate}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        sx={{
          '& .css-14s9430-MuiDataGrid-root': {
            backgroundColor: 'gray',
            borderBottom: '1px solid #e0e0e0',
          
          },
          '& .MuiDataGrid-column': {
            borderRight: '1px solid #e0e0e0',
          },
          '& .MuiDataGrid-cell': {
            borderRight: '1px solid #e0e0e0',
          },
          '& .MuiDataGrid-columnSeparator': {
            display: 'none',
          },
          '& .MuiDataGrid-columnHeader': {
            borderRight: '1px solid #e0e0e0',
            backgroundColor:'rgba(211, 211, 211, 1)',
           fontSize:'18px',
           textAlign:'center'
          },
          '& .MuiDataGrid-columnHeader:last-child': {
            borderRight: 'none',
          },
          '& .MuiDataGrid-cell:last-child': {
            borderRight: 'none',
          },
        }}
      />
    </Box>

  </div>
    
  )
}

export default AllPropductsTable