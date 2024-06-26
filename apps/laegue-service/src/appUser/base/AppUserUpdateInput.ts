/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LeagueUpdateManyWithoutAppUsersInput } from "./LeagueUpdateManyWithoutAppUsersInput";
import { ValidateNested, IsOptional, IsString, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";

@InputType()
class AppUserUpdateInput {
  @ApiProperty({
    required: false,
    type: () => LeagueUpdateManyWithoutAppUsersInput,
  })
  @ValidateNested()
  @Type(() => LeagueUpdateManyWithoutAppUsersInput)
  @IsOptional()
  @Field(() => LeagueUpdateManyWithoutAppUsersInput, {
    nullable: true,
  })
  leagues?: LeagueUpdateManyWithoutAppUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  profileImage?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  totalPoint?: number | null;
}

export { AppUserUpdateInput as AppUserUpdateInput };
