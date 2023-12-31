import { JwtService } from './jwt.service';
import { DynamicModule, Global, Module } from '@nestjs/common';
import { CONFIG_OPTIONS } from 'src/common/constants/common.constant';
import { JwtModuleOption } from './interface/jwt.interface';

@Module({})
@Global()
export class JwtModule {
  static forRoot(options: JwtModuleOption): DynamicModule {
    return {
      module: JwtModule,
      providers: [
        {
          provide: CONFIG_OPTIONS,
          useValue: options,
        },
        {
          provide: 'IJwtService',
          useClass: JwtService,
        },
      ],
      exports: ['IJwtService'],
    };
  }
}
