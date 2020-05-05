import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { UploadFile } from 'ng-zorro-antd/upload/ng-zorro-antd-upload';
import * as faceapi from 'face-api.js';
import { DefaultConfigService } from 'src/app/config/default-config.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-face-detection',
  templateUrl: './face-detection.component.html',
  styleUrls: ['./face-detection.component.less'],
})
export class FaceDetectionComponent implements OnInit, AfterViewInit {
  constructor(
    private fb: FormBuilder,
    private el: ElementRef,
    private defaultConfig: DefaultConfigService,
    private http: HttpClient,
    private message: NzMessageService
  ) {}

  get imageUrl() {
    return this.validateForm.value.imageUrl;
  }

  get faceDetector() {
    return this.validateForm.value.faceDetector;
  }

  get minConfidence() {
    return this.validateForm.value.minConfidence / 10;
  }

  get inputSize() {
    return this.validateForm.value.inputSize;
  }

  validateForm: FormGroup;

  previewUrl: string;

  // dom
  inputImgEl: HTMLImageElement;
  canvas: HTMLCanvasElement;

  private async getCurrentFaceDetector() {
    const { MODELS_DIR } = this.defaultConfig;

    switch (this.faceDetector) {
      case 'ssd_mobilenetv1':
        await faceapi.nets.ssdMobilenetv1.load(MODELS_DIR);
        return new faceapi.SsdMobilenetv1Options({
          minConfidence: this.minConfidence,
        });
      case 'tiny_face_detector':
        await faceapi.nets.tinyFaceDetector.load(MODELS_DIR);
        return new faceapi.TinyFaceDetectorOptions({
          inputSize: this.inputSize,
          scoreThreshold: this.minConfidence,
        });
      default:
        break;
    }
  }

  ngAfterViewInit(): void {
    this.inputImgEl = this.el.nativeElement.querySelector('#inputImg');
    this.canvas = this.el.nativeElement.querySelector('#overlay');
  }

  async ngOnInit(): Promise<void> {
    const {
      DEFAULT_FACE_DETECTOR,
      DEFAULT_INPUT_SIZE,
      DEFAULT_MIN_CONFIDENCE,
    } = this.defaultConfig;
    this.validateForm = this.fb.group({
      imageUrl: [''],
      faceDetector: [DEFAULT_FACE_DETECTOR],
      inputSize: [DEFAULT_INPUT_SIZE],
      minConfidence: [DEFAULT_MIN_CONFIDENCE],
    });

    this.previewUrl = '/assets/img/p1.jpg';
  }

  async submitForm(): Promise<void> {
    // for (const i in this.validateForm.controls) {
    //   if (this.validateForm.controls.hasOwnProperty(i)) {
    //     const element = this.validateForm.controls[i];
    //     element.markAsDirty();
    //     element.updateValueAndValidity();
    //   }
    // }

    if (!this.imageUrl) {
      this.message.create('warning', '请输入图片地址');
      return;
    }

    await this.getImageFromOrigin(this.imageUrl);

    this.updateResults();
  }

  async updateResults() {
    const results = await faceapi.detectAllFaces(
      this.inputImgEl,
      await this.getCurrentFaceDetector()
    );

    faceapi.matchDimensions(this.canvas, this.inputImgEl);
    faceapi.draw.drawDetections(
      this.canvas,
      faceapi.resizeResults(results, this.inputImgEl)
    );
  }

  /**
   * 上传图片
   *
   */
  beforeUpload = async (file: UploadFile): Promise<boolean> => {
    this.previewUrl = await blob2Base64(file);

    this.updateResults();

    return false;
  };

  async getImageFromOrigin(url: string) {
    const result = await this.http
      .get(url, { responseType: 'blob' })
      .toPromise();

    this.previewUrl = await blob2Base64(result);
    this.validateForm.patchValue({ imageUrl: '' });
  }
}

const blob2Base64 = (blob: any) => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => {
      resolve(reader.result as string);
    };
    reader.onerror = () => {
      reject(Error('[blob2Base64] 转换失败'));
    };
  });
};
