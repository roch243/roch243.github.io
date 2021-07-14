import { Component, h, Prop, } from "@stencil/core";


@Component({
    tag: 'toolbar-top',
    styleUrl: 'toolbar-top.css',
    shadow: true,
    assetsDirs: ['assets'],
})
export class ToolbarTop {

    @Prop() text: string;
    @Prop() appearance: string;
    @Prop() image: 'planet-img.png';



    render() {
        return (
            <div class="toolbar">
                <div class="img-container">
                    <img src="/assets/images/planet-img.png" alt="" />
                    <h1>Planeta</h1>

                </div>
                <div class="right">
                    <login-button class="button" />



                </div>
            </div>
        )
    }
}