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
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { AppMatchService } from "../appMatch.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AppMatchCreateInput } from "./AppMatchCreateInput";
import { AppMatch } from "./AppMatch";
import { AppMatchFindManyArgs } from "./AppMatchFindManyArgs";
import { AppMatchWhereUniqueInput } from "./AppMatchWhereUniqueInput";
import { AppMatchUpdateInput } from "./AppMatchUpdateInput";
import { AppMatchDto } from "../AppMatchDto";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AppMatchControllerBase {
  constructor(
    protected readonly service: AppMatchService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AppMatch })
  @nestAccessControl.UseRoles({
    resource: "AppMatch",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [AppMatch] })
  @ApiNestedQuery(AppMatchFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "AppMatch",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AppMatch })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AppMatch",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
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

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: AppMatch })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AppMatch",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
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
  @nestAccessControl.UseRoles({
    resource: "AppMatch",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
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

  @common.Get("/rounds/:id/matches")
  @swagger.ApiOkResponse({
    type: AppMatchDto,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async GetAllMatchesInRound(
    @common.Body()
    body: string
  ): Promise<AppMatchDto[]> {
    return this.service.GetAllMatchesInRound(body);
  }

  @common.Get("/:id/get-matches-in-round")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async GetMatchesInRound(
    @common.Body()
    body: string
  ): Promise<string> {
    return this.service.GetMatchesInRound(body);
  }
}
