import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzMessageModule } from 'ng-zorro-antd/message';

import { FaceDetectionRoutingModule } from './face-detection-routing.module';
import { FaceDetectionComponent } from './face-detection.component';
import { IconsProviderModule } from '../../icons-provider.module';

@NgModule({
  declarations: [FaceDetectionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IconsProviderModule,

    NzInputModule,
    NzButtonModule,
    NzFormModule,
    NzUploadModule,
    NzSpaceModule,
    NzSelectModule,
    NzInputNumberModule,
    NzMessageModule,

    FaceDetectionRoutingModule,
  ],
})
export class FaceDetectionModule {}
