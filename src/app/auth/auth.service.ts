import { Injectable } from '@nestjs/common';
import SteamAuth from 'node-steam-openid';


@Injectable()
export class AuthService {
  /* async authenticate(response) {
    const redirectUrl = await steam.getRedirectUrl();
    return response.redirect(redirectUrl);
  }

  async authenticateCallback(request: Request, response) {
    const user = await steam.authenticate(request);
    return response.redirect(
      `${process.env.FRONTEND_URL}/?steamid=${user.steamid}&picture=${user.avatar.large}&username=${user.username}`,
    );
  } */
}
