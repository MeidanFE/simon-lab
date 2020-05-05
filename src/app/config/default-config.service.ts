import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DefaultConfigService {
  constructor() {}

  get DEFAULT_FACE_DETECTOR() {
    return 'ssd_mobilenetv1';
  }

  get DEFAULT_INPUT_SIZE() {
    return 160;
  }

  get DEFAULT_MIN_CONFIDENCE() {
    return 5;
  }

  get MODELS_DIR() {
    return '/assets/models';
  }
}
