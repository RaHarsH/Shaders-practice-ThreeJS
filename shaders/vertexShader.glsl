uniform float uTime;
varying vec2 vUv;

void main() {
    vUv = uv;

    vec3 pos = position;

    vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;
}