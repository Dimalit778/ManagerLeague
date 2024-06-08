import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const AppLeagueList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AppLeagues"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="isSelected" source="isSelected" />
        <TextField label="joinCode" source="joinCode" />
        <TextField label="leagueCode" source="leagueCode" />
        <TextField label="leagueName" source="leagueName" />
        <TextField label="members" source="members" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
