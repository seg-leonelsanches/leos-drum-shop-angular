import { Component } from '@angular/core';
import { SegmentService } from './segment.service';
import { AnalyticsBrowser } from '@segment/analytics-next';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'leos-drum-shop-angular';
  analytics: AnalyticsBrowser;

  constructor(private segmentService: SegmentService) {
    this.analytics = this.segmentService.getAnalytics();
  }

  ngOnInit(): void {
    this.analytics.identify('123', { name: 'Leo' });
  }
}
