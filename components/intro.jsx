import { useState } from "react"

import { ParallaxLayer } from "@react-spring/parallax"

export default function Intro() {

    return (
        <ParallaxLayer
            offset={0}
            speed={1}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div id="introcontainer">
                <h1>Hi,<br />I&apos;m Onur,<br />Full Stack Developer,<br />And It Is My Journey.</h1>
                <ScrollDown />
            </div>
        </ParallaxLayer>
    )

}

function ScrollDown() {
    const [y, setY] = useState(0)
    const [dir, setDir] = useState(1)

    function animation() {
        let speed = 3;
        let mul = 1;

        if (y + dir * speed > 50 || y + dir * speed < 0) {
            mul = -1
            setDir(dir * -1)
        }

        setY(y + dir * speed * mul)

    }

    requestAnimationFrame(animation)

    return (
        <div style={{
            position: "absolute",
            right: 100,
            bottom: 100,
            textAlign: "center",
            fontSize: 40
        }}>
            <span style={{
                display: "block"
            }}>
                Scroll Down
            </span>
            <span style={{
                position: "relative",
                top: y
            }}>
                👇
            </span>
        </div>

    )
}