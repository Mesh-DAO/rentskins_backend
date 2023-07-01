import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CartModule } from './app/cart/cart.module';
import { WalletModule } from './app/wallet/wallet.module';
import { SkinsModule } from './app/skins/skins.module';
import { AuthModule } from './app/auth/auth.module';
import { ConfigurationModule } from './app/configuration/configuration.module';
import { NotificationModule } from './app/notification/notification.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CartModule,
    WalletModule,
    SkinsModule,
    AuthModule,
    ConfigurationModule,
    NotificationModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
