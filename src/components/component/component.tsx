import { Component, h, JSX} from '@stencil/core';
import videojs from 'video.js/dist/video.min.js';

@Component({
  tag: 'my-component',
  styleUrl: 'component.css',
  shadow: true
})
export class MyComponent {

  public videoEl;

  componentDidLoad() {
    videojs(this.videoEl);
  }
  render() : JSX.Element {
    return (
      <video ref={ el => this.videoEl = el}>

      </video>
    );
  }
}
