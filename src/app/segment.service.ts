import { Injectable } from '@angular/core';
import { AnalyticsBrowser } from '@segment/analytics-next';

@Injectable({
  providedIn: 'root'
})
export class SegmentService {
  analytics: AnalyticsBrowser;

  constructor() { 
    this.analytics = AnalyticsBrowser.load({ writeKey: '123', cdnURL: process.env['SEGMENT_CDN'] || 'https://cdn.segment.com' });
  }
}
