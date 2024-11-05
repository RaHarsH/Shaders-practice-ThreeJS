varying vec2 vUv;
uniform float uTime;

void main() {
    vec4 color = vec4(vUv.x, vUv.y, 1., 1.);
    gl_FragColor = color;
}