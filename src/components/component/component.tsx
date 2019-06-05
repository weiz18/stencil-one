import { Component, Prop, h, JSX, Host, Watch, Event, State, EventEmitter, Method } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'component.css',
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @Prop() language: string;

  @Prop({mutable: true}) values: Array<string> = [];

  @Watch('language')
  async onLanguageChange() {
    if (this.language) {
      return fetch('./assets/i18n/' + this.language + '.json')
        .then(response => {
          if (!response.ok) {
            throw new Error('HTTP error ' + response.status);
          }
          return response.json();
        })
        .then(json => {
          console.log('JSON', json);
        });
    }
  }

  @State() buttonFace: string = 'Click Me!';
  @State() clicked: boolean;

  @Event() somethingChanged: EventEmitter<any>;

  private inputElement: HTMLInputElement;

  format () {
    return [this.first, this.middle, this.last].filter (e => !!e).join(' ');
  }

  onInputChanged = () => {
    let value = this.inputElement.value;
    this.somethingChanged.emit({input: value});
  }

  @Method()
  async updateFace(value: string): Promise<string> {
    this.buttonFace = value;
    return this.buttonFace.toUpperCase();
  }

  private getText(): string {
    return this.format();
  }

  onClicked(value: string) {
    console.log('value is: ', value);
    this.clicked = !this.clicked;
    this.somethingChanged.emit({button: true});
  }

  render(): JSX.Element {
    return (
      <Host>
        <div class={{ nice: true, clicked: this.clicked }} >
          <span>
            Hello, World! I'm {this.getText()}
          </span>
          {this.values.map((item) => {
            return <div class="item">
                <span>{item}</span>
            </div>
        })}

          <button onClick={() => this.onClicked('ABCD')}>
            {this.buttonFace}
          </button>
          <input
          onInput={this.onInputChanged}
          ref={el => this.inputElement = el as HTMLInputElement}
        />
          <slot />
        </div>
      </Host>

    );
  }
}
