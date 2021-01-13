import React from 'react';
import TextField from '@material-ui/core/TextField';
import { UsersContext } from '../utils/context';

export default function AlertDialogSlide({formType}) {
    const [usersData, setUsersData] = React.useContext(UsersContext);
    const [editForm, setEditForm] = React.useState(false);
    const formData = usersData.slctdUser;
    React.useEffect(()=>{
        setEditForm(formType==='view');
    },[formType])
  return (
      <React.Fragment>
        <div>
            <TextField
                label="Name"
                id="name"
                value={formData.name}
                disabled={editForm}
                fullWidth
                margin="dense"
                variant="outlined"
            />
            <TextField
                label="Email"
                id="email"
                value={formData.email}
                disabled={editForm}
                fullWidth
                margin="dense"
                variant="outlined"
            />
            <TextField
                label="Phone Number"
                id="phone"
                value={formData.phone}
                disabled={editForm}
                fullWidth
                margin="dense"
                variant="outlined"
            />
            <TextField
                label="Company"
                id="company"
                value={formData.company.name}
                disabled={editForm}
                fullWidth
                margin="dense"
                variant="outlined"
            />
            <TextField
                label="Address"
                id="address"
                value={formData.address.city}
                disabled={editForm}
                fullWidth
                margin="dense"
                variant="outlined"
            />
        </div>
      </React.Fragment>
  );
}
