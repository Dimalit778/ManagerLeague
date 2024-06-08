/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AppLeague } from "../../appLeague/base/AppLeague";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsBoolean,
  IsInt,
} from "class-validator";
import { Type } from "class-transformer";
import { AppMatch } from "../../appMatch/base/AppMatch";
import { Match } from "../../match/base/Match";

@ObjectType()
class AppRound {
  @ApiProperty({
    required: false,
    type: () => AppLeague,
  })
  @ValidateNested()
  @Type(() => AppLeague)
  @IsOptional()
  appLeague?: AppLeague | null;

  @ApiProperty({
    required: false,
    type: () => [AppMatch],
  })
  @ValidateNested()
  @Type(() => AppMatch)
  @IsOptional()
  appMatches?: Array<AppMatch>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isFinished!: boolean | null;

  @ApiProperty({
    required: false,
    type: () => [Match],
  })
  @ValidateNested()
  @Type(() => Match)
  @IsOptional()
  matches?: Array<Match>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  roundNumber!: number | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { AppRound as AppRound };