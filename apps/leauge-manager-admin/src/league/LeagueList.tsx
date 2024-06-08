import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LeagueList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Leagues"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="leagueCode" source="leagueCode" />
        <TextField label="leagueName" source="leagueName" />
        <TextField label="members" source="members" />
        <TextField label="name" source="name" />
        <TextField label="rounds" source="rounds" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
