import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultConfigService } from './default-config.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [DefaultConfigService],
  exports: [],
})
export class ConfigModule {}
