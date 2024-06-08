/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { GrpcMethod } from "@nestjs/microservices";
import { AppMatchService } from "../appMatch.service";
import { AppMatchCreateInput } from "./AppMatchCreateInput";
import { AppMatchWhereInput } from "./AppMatchWhereInput";
import { AppMatchWhereUniqueInput } from "./AppMatchWhereUniqueInput";
import { AppMatchFindManyArgs } from "./AppMatchFindManyArgs";
import { AppMatchUpdateInput } from "./AppMatchUpdateInput";
import { AppMatch } from "./AppMatch";

export class AppMatchGrpcControllerBase {
  constructor(protected readonly service: AppMatchService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AppMatch })
  @GrpcMethod("AppMatchService", "createAppMatch")
  async createAppMatch(
    @common.Body() data: AppMatchCreateInput
  ): Promise<AppMatch> {
    return await this.service.createAppMatch({
      data: {
        ...data,

        appRound: data.appRound
          ? {
              connect: data.appRound,
            }
          : undefined,
      },
      select: {
        appRound: {
          select: {
            id: true,
          },
        },

        awayScore: true,
        createdAt: true,
        homeScore: true,
        id: true,
        isFinished: true,
        matchPoints: true,
        result: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [AppMatch] })
  @ApiNestedQuery(AppMatchFindManyArgs)
  @GrpcMethod("AppMatchService", "appMatches")
  async appMatches(@common.Req() request: Request): Promise<AppMatch[]> {
    const args = plainToClass(AppMatchFindManyArgs, request.query);
    return this.service.appMatches({
      ...args,
      select: {
        appRound: {
          select: {
            id: true,
          },
        },

        awayScore: true,
        createdAt: true,
        homeScore: true,
        id: true,
        isFinished: true,
        matchPoints: true,
        result: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AppMatch })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("AppMatchService", "appMatch")
  async appMatch(
    @common.Param() params: AppMatchWhereUniqueInput
  ): Promise<AppMatch | null> {
    const result = await this.service.appMatch({
      where: params,
      select: {
        appRound: {
          select: {
            id: true,
          },
        },

        awayScore: true,
        createdAt: true,
        homeScore: true,
        id: true,
        isFinished: true,
        matchPoints: true,
        result: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: AppMatch })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("AppMatchService", "updateAppMatch")
  async updateAppMatch(
    @common.Param() params: AppMatchWhereUniqueInput,
    @common.Body() data: AppMatchUpdateInput
  ): Promise<AppMatch | null> {
    try {
      return await this.service.updateAppMatch({
        where: params,
        data: {
          ...data,

          appRound: data.appRound
            ? {
                connect: data.appRound,
              }
            : undefined,
        },
        select: {
          appRound: {
            select: {
              id: true,
            },
          },

          awayScore: true,
          createdAt: true,
          homeScore: true,
          id: true,
          isFinished: true,
          matchPoints: true,
          result: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: AppMatch })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("AppMatchService", "deleteAppMatch")
  async deleteAppMatch(
    @common.Param() params: AppMatchWhereUniqueInput
  ): Promise<AppMatch | null> {
    try {
      return await this.service.deleteAppMatch({
        where: params,
        select: {
          appRound: {
            select: {
              id: true,
            },
          },

          awayScore: true,
          createdAt: true,
          homeScore: true,
          id: true,
          isFinished: true,
          matchPoints: true,
          result: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
