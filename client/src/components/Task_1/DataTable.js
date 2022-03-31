import React, { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import {Button, ButtonGroup} from "@mui/material"
import { AddingCarForm } from "./AddingCarForm";

const columns = [
  {
    field: 'carBrand',
    headerName: 'Car brand',
    width: 150,
    editable: true,
  },
  {
    field: 'countryOfOrigin',
    headerName: 'Country of origin',
    width: 150,
    editable: true,
  },
  {
    field: 'mostPopularModel',
    headerName: 'Most popular model',
    width: 110,
    editable: true,
  },
  {
    field: 'averagePrice',
    headerName: 'Average price',
    type: 'number',
    width: 160,
    editable: true,
  },
];


export const DataTable = ({data, setSelectedCarsData, deleteSelectedRows, addCarData, changeCarsData}) => {
    const [addingFormVisibility, setAddingFormVisibility] = useState(false)

    const showAddingCarForm = () => {
      setAddingFormVisibility(true)
    }
    const hideAddingCarForm = () => {
      setAddingFormVisibility(false)
    }

    const editCommitHandler = event => {
        changeCarsData({...event.row, [event.field]: event.value})
    }

    const selectRowsHandler = event => {
        const selectedCarsData = event.map(carId => data.find(item => item.id === carId))
        setSelectedCarsData(selectedCarsData)
    }

    const addingCarForm = () => {
      return(
        addingFormVisibility ?
          <AddingCarForm 
            addCarData={addCarData} 
            hideForm={hideAddingCarForm} 
            visble={setAddingFormVisibility}
          />
        : null
      )
    }

    return(
        <div style={{height:500, width: 800}}>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={7}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                onCellEditCommit={editCommitHandler}
                onSelectionModelChange={selectRowsHandler}
            />

            {addingCarForm()}

            <ButtonGroup sx={{margin: "10px", display: "block", position: "relative"}}>
                <Button onClick={showAddingCarForm}>Add Row</Button>
                <Button onClick={deleteSelectedRows}>Delete Selected Rows</Button>
            </ButtonGroup>
        </div>
    )
}