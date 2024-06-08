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
import { MatchService } from "../match.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MatchCreateInput } from "./MatchCreateInput";
import { Match } from "./Match";
import { MatchFindManyArgs } from "./MatchFindManyArgs";
import { MatchWhereUniqueInput } from "./MatchWhereUniqueInput";
import { MatchUpdateInput } from "./MatchUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MatchControllerBase {
  constructor(
    protected readonly service: MatchService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Match })
  @nestAccessControl.UseRoles({
    resource: "Match",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createMatch(@common.Body() data: MatchCreateInput): Promise<Match> {
    return await this.service.createMatch({
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

        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Match] })
  @ApiNestedQuery(MatchFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Match",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async matches(@common.Req() request: Request): Promise<Match[]> {
    const args = plainToClass(MatchFindManyArgs, request.query);
    return this.service.matches({
      ...args,
      select: {
        appRound: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Match })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Match",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async match(
    @common.Param() params: MatchWhereUniqueInput
  ): Promise<Match | null> {
    const result = await this.service.match({
      where: params,
      select: {
        appRound: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
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
  @swagger.ApiOkResponse({ type: Match })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Match",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateMatch(
    @common.Param() params: MatchWhereUniqueInput,
    @common.Body() data: MatchUpdateInput
  ): Promise<Match | null> {
    try {
      return await this.service.updateMatch({
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

          createdAt: true,
          id: true,
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
  @swagger.ApiOkResponse({ type: Match })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Match",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteMatch(
    @common.Param() params: MatchWhereUniqueInput
  ): Promise<Match | null> {
    try {
      return await this.service.deleteMatch({
        where: params,
        select: {
          appRound: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
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
