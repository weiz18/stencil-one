import { Component, Prop, h, JSX} from '@stencil/core';

@Component({
  tag: 'my-serial',
  styleUrl: 'serial.css',
  shadow: true
})
export class MySerialComponent {

  @Prop() value: string = "I am string";

  render() : JSX.Element {
    return (
      <div class="cool">
        <h1>I am a header </h1>
        <p>I am paragraph</p>
        <p>{this.value}</p>
      </div>
    );
  }
}
