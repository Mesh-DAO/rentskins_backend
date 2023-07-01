import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-steam';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SteamStrategy extends PassportStrategy(Strategy, 'steam') {
  constructor() {
    super({
      returnURL: `${process.env.FRONTEND_URL}/api/auth/steam/authenticate/callback`,
      realm: `${process.env.FRONTEND_URL}`,
      apiKey: 'CBED4D515E26D768D330CDDC83AB1AB2',
    });
  }

  async validate(identifier: string, profile: any): Promise<any> {
    return { identifier, profile };
  }
}
