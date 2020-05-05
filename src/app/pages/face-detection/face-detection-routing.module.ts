import { ConfigModule } from './../../config/config.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaceDetectionComponent } from './face-detection.component';

const routes: Routes = [{ path: '', component: FaceDetectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), ConfigModule],
  exports: [RouterModule],
})
export class FaceDetectionRoutingModule {}
