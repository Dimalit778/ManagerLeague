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
import { AppUserService } from "../appUser.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AppUserCreateInput } from "./AppUserCreateInput";
import { AppUser } from "./AppUser";
import { AppUserFindManyArgs } from "./AppUserFindManyArgs";
import { AppUserWhereUniqueInput } from "./AppUserWhereUniqueInput";
import { AppUserUpdateInput } from "./AppUserUpdateInput";
import { LeagueFindManyArgs } from "../../league/base/LeagueFindManyArgs";
import { League } from "../../league/base/League";
import { LeagueWhereUniqueInput } from "../../league/base/LeagueWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AppUserControllerBase {
  constructor(
    protected readonly service: AppUserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AppUser })
  @nestAccessControl.UseRoles({
    resource: "AppUser",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createAppUser(
    @common.Body() data: AppUserCreateInput
  ): Promise<AppUser> {
    return await this.service.createAppUser({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        profileImage: true,
        totalPoint: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [AppUser] })
  @ApiNestedQuery(AppUserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "AppUser",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async appUsers(@common.Req() request: Request): Promise<AppUser[]> {
    const args = plainToClass(AppUserFindManyArgs, request.query);
    return this.service.appUsers({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        profileImage: true,
        totalPoint: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AppUser })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AppUser",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async appUser(
    @common.Param() params: AppUserWhereUniqueInput
  ): Promise<AppUser | null> {
    const result = await this.service.appUser({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        profileImage: true,
        totalPoint: true,
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
  @swagger.ApiOkResponse({ type: AppUser })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AppUser",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateAppUser(
    @common.Param() params: AppUserWhereUniqueInput,
    @common.Body() data: AppUserUpdateInput
  ): Promise<AppUser | null> {
    try {
      return await this.service.updateAppUser({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          profileImage: true,
          totalPoint: true,
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
  @swagger.ApiOkResponse({ type: AppUser })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AppUser",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAppUser(
    @common.Param() params: AppUserWhereUniqueInput
  ): Promise<AppUser | null> {
    try {
      return await this.service.deleteAppUser({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          profileImage: true,
          totalPoint: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/leagues")
  @ApiNestedQuery(LeagueFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "League",
    action: "read",
    possession: "any",
  })
  async findLeagues(
    @common.Req() request: Request,
    @common.Param() params: AppUserWhereUniqueInput
  ): Promise<League[]> {
    const query = plainToClass(LeagueFindManyArgs, request.query);
    const results = await this.service.findLeagues(params.id, {
      ...query,
      select: {
        appUser: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/leagues")
  @nestAccessControl.UseRoles({
    resource: "AppUser",
    action: "update",
    possession: "any",
  })
  async connectLeagues(
    @common.Param() params: AppUserWhereUniqueInput,
    @common.Body() body: LeagueWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      leagues: {
        connect: body,
      },
    };
    await this.service.updateAppUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/leagues")
  @nestAccessControl.UseRoles({
    resource: "AppUser",
    action: "update",
    possession: "any",
  })
  async updateLeagues(
    @common.Param() params: AppUserWhereUniqueInput,
    @common.Body() body: LeagueWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      leagues: {
        set: body,
      },
    };
    await this.service.updateAppUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/leagues")
  @nestAccessControl.UseRoles({
    resource: "AppUser",
    action: "update",
    possession: "any",
  })
  async disconnectLeagues(
    @common.Param() params: AppUserWhereUniqueInput,
    @common.Body() body: LeagueWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      leagues: {
        disconnect: body,
      },
    };
    await this.service.updateAppUser({
      where: params,
      data,
      select: { id: true },
    });
  }
}
