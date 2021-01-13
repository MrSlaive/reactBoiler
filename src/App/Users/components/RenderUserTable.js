import React from 'react';
import { withRouter } from "react-router-dom";
import MaterialTable from 'material-table';
import { forwardRef } from 'react';
import {
    AddBox,
    ArrowUpward,
    ChevronLeft,
    ChevronRight,
    Clear,
    DeleteOutline,
    Edit,
    FilterList,
    FirstPage,
    LastPage,
    Remove,
    SaveAlt,
    Search,
    ViewColumn,
    Check,
    EditOutlined,
} from '@material-ui/icons';
import { UsersContext } from '../utils/context';
import RenderUserDialog from './RenderUserDialog'

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const columns = [
    {
        title: 'Name',
        field: 'name'
    },
    {
        title: 'Email',
        field: 'email'
    },
    {
        title: 'Phone Numb',
        field: 'phone'
    },
    {
        title: 'Company',
        field: 'company.name'
    },
    {
        title: 'Address',
        field: 'address.city'
    },
  ];

function RenderTable() {
    const [usersData, setUsersData] = React.useContext(UsersContext);
    const [dialogType, setDialogType] = React.useState('');
    const handleDialog=(type,data)=>{
        setUsersData({...usersData, slctdUser: data});
        setDialogType(type);
    }
    return (
        <React.Fragment>
            <RenderUserDialog
                dialogType={dialogType}
                handleResetDialog={()=>setDialogType('')}
            />
            <MaterialTable
                icons={tableIcons}
                title="Member Listing"
                columns={columns}
                data={usersData.users}
                onRowClick={(e, rowData)=>handleDialog('view',rowData)}
                options={{
                    exportButton: true,
                    actionsColumnIndex: -1
                }}
                actions={[
                {
                    icon: EditOutlined,
                    tooltip: 'Save User',
                    onClick: (event, rowData) => handleDialog('edit',rowData)
                },
                {
                    icon: Clear,
                    tooltip: 'Delete User',
                    onClick: (event, rowData) => handleDialog('delete',rowData),
                }
                ]}
            />
        </React.Fragment>
    )
  }

export default  withRouter(RenderTable);