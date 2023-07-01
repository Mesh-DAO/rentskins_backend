import { HttpService } from '@nestjs/axios';
import { Injectable, Req, Res } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import queryString from 'query-string';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly httpService: HttpService,
  ) {}

  async createToken(data: any): Promise<string> {
    const token = await this.jwtService.signAsync(data);
    return token;
  }

  async authenticateCallback(req, res, params) {
    const key = 'CBED4D515E26D768D330CDDC83AB1AB2';
    const id = params['openid.claimed_id']?.slice(
      params['openid.claimed_id']?.lastIndexOf('/') + 1,
    );

    try {
      const { data } = await lastValueFrom(
        this.httpService.get(
          `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${key}&steamids=${id}`,
        ),
      );
      const player = data.response.players[0];

      if (player) {
        const tokenData = {
          username: player.personaname,
          picture: player.avatarfull,
          steamid: player.steamid,
          profile: player.profileurl,
          country: player.loccountrycode,
        };

        const token = await this.createToken(tokenData);

        return res.redirect(process.env.FRONTEND_URL + '/?token=' + token);
      } else {
        return res.redirect(process.env.FRONTEND_URL + '/?token=auth_failed');
      }
    } catch (error) {
      return res.redirect(process.env.FRONTEND_URL + '/?token=auth_failed');
    }
  }
}
