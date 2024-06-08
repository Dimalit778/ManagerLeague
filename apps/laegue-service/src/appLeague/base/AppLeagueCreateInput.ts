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
import { AppRoundCreateNestedManyWithoutAppLeaguesInput } from "./AppRoundCreateNestedManyWithoutAppLeaguesInput";
import {
  ValidateNested,
  IsOptional,
  IsBoolean,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { RoundCreateNestedManyWithoutAppLeaguesInput } from "./RoundCreateNestedManyWithoutAppLeaguesInput";

@InputType()
class AppLeagueCreateInput {
  @ApiProperty({
    required: false,
    type: () => AppRoundCreateNestedManyWithoutAppLeaguesInput,
  })
  @ValidateNested()
  @Type(() => AppRoundCreateNestedManyWithoutAppLeaguesInput)
  @IsOptional()
  @Field(() => AppRoundCreateNestedManyWithoutAppLeaguesInput, {
    nullable: true,
  })
  appRounds?: AppRoundCreateNestedManyWithoutAppLeaguesInput;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isSelected?: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  joinCode?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  leagueCode?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  leagueName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  members?: string | null;

  @ApiProperty({
    required: false,
    type: () => RoundCreateNestedManyWithoutAppLeaguesInput,
  })
  @ValidateNested()
  @Type(() => RoundCreateNestedManyWithoutAppLeaguesInput)
  @IsOptional()
  @Field(() => RoundCreateNestedManyWithoutAppLeaguesInput, {
    nullable: true,
  })
  rounds?: RoundCreateNestedManyWithoutAppLeaguesInput;
}

export { AppLeagueCreateInput as AppLeagueCreateInput };
