import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/face_detection' },
  {
    path: 'face_detection',
    loadChildren: () =>
      import('./pages/face-detection/face-detection.module').then(
        (m) => m.FaceDetectionModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
