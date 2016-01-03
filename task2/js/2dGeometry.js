// Get the WebGL context
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('experimental-webgl');

// Pipeline setup
gl.clearColor(255, 255, 255, 1);
gl.lineWidth(2.0);

// Compile a vertex shader
var vsSource =  'attribute vec2 pos;'+
    'void main(){' +
    'gl_Position = vec4(pos.x * 0.3, pos.y * 0.3, 0, 1); ' +
    'gl_PointSize = 5.0; ' +
    '}';

var vs = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vs, vsSource);
gl.compileShader(vs);

// Compile a fragment shader
fsSouce =  'void main() { gl_FragColor = vec4(255, 0, 0, 1); }';
var fs = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fs, fsSouce);
gl.compileShader(fs);

// Link together into a program
var prog = gl.createProgram();
gl.attachShader(prog, vs);
gl.attachShader(prog, fs);
gl.linkProgram(prog);
gl.useProgram(prog);

// Load vertex data into a buffer
var vertices = new Float32Array([

    -1.0, -1.3,
    -1.2, -1.0,
    -1.0, 1.0,
    -0.5, 2.0,
    -0.3, 2.1,
    -0.1, 2.0,
    0.5, 1.0,
    0.7, -1.0,
    0.5, -1.3,
    1.1, -1.4,
    1.4, -2.0,
    0.5, -1.8,
    0.25, -1.8,
    0.25, -2.0,
    0.1, -2.2,
    -0.60, -2.2,
    -0.75, -2.0,
    -0.75, -1.8,
    -1.0, -1.8,
    -1.9, -2.0,
    -1.5, -1.4,
    -1.0, -1.3,




]);
var vbo = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

// Bind vertex buffer to attribute variable
var posAttrib = gl.getAttribLocation(prog, 'pos');
gl.vertexAttribPointer(posAttrib, 2, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(posAttrib);

// Clear framebuffer and render primitives
gl.clear(gl.COLOR_BUFFER_BIT);
gl.drawArrays(gl.LINE_STRIP, 0, 22);