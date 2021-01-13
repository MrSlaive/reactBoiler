import React from 'react';
import Container from '@material-ui/core/Container';
import RenderUserTable from './components/RenderUserTable'
import { UsersContextProvider } from './utils/context';

export default function Users() {
  return (
    <UsersContextProvider>
      <Container>
        <RenderUserTable/>
      </Container>
    </UsersContextProvider>
  );
}
