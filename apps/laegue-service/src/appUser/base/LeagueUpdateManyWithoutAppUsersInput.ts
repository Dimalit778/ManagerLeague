/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { LeagueWhereUniqueInput } from "../../league/base/LeagueWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class LeagueUpdateManyWithoutAppUsersInput {
  @Field(() => [LeagueWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LeagueWhereUniqueInput],
  })
  connect?: Array<LeagueWhereUniqueInput>;

  @Field(() => [LeagueWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LeagueWhereUniqueInput],
  })
  disconnect?: Array<LeagueWhereUniqueInput>;

  @Field(() => [LeagueWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LeagueWhereUniqueInput],
  })
  set?: Array<LeagueWhereUniqueInput>;
}

export { LeagueUpdateManyWithoutAppUsersInput as LeagueUpdateManyWithoutAppUsersInput };
