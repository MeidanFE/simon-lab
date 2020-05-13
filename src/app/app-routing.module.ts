import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

import { IconsProviderModule } from './icons-provider.module';

import { FaceDetectionComponent } from './pages/face-detection/face-detection.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/face_detection' },
  {
    path: 'face_detection',
    component: FaceDetectionComponent,
  },
];

@NgModule({
  declarations: [FaceDetectionComponent],
  imports: [
    RouterModule.forRoot(routes),
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
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
