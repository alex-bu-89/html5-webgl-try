
// Get the WebGL context.
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('experimental-webgl');

// Pipeline setup.
//gl.clearColor(0.3, 0.35, 0.43, 1);
gl.clearColor(1, 1, 1, 1);
// Backface culling.
gl.frontFace(gl.CW);
gl.enable(gl.CULL_FACE);
gl.cullFace(gl.BACK); // or gl.FRONT

// Compile vertex shader.
var vsSource = ''+
    'attribute vec3 pos;'+
    'attribute vec4 col;'+
    'varying vec4 color;'+
    'void main(){'+
    'color = col;'+
    'gl_Position = vec4(pos.x * 0.3, pos.y * 0.3, 0, 1); ' +
    '}';
var vs = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vs, vsSource);
gl.compileShader(vs);

// Compile fragment shader.
fsSouce = 'precision mediump float;'+
    'varying vec4 color;'+
    'void main() {'+
    'gl_FragColor = color;'+
    '}';
var fs = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fs, fsSouce);
gl.compileShader(fs);

// Link shader together into a program.
var prog = gl.createProgram();
gl.attachShader(prog, vs);
gl.attachShader(prog, fs);
gl.linkProgram(prog);
gl.useProgram(prog);

// Vertex data.
// Positions.
var vertices = new Float32Array([

    -1.0, -1.3, 0, // 0
    -1.2, -1.0, 0,
    -1.0, 1.0,  0,
    -0.5, 2.0,  0,
    -0.3, 2.1, 0,
    -0.1, 2.0, 0, // 5
    0.5, 1.0, 0,
    0.7, -1.0, 0,
    0.5, -1.3, 0,
    1.1, -1.4, 0,
    1.4, -2.0, 0, // 10
    0.5, -1.8, 0,
    0.25, -1.8, 0,
    0.25, -2.0, 0,
    0.1, -2.2, 0,
    -0.60, -2.2, 0, // 15
    -0.75, -2.0, 0,
    -0.75, -1.8, 0,
    -1.0, -1.8, 0,
    -1.9, -2.0, 0,
    -1.5, -1.4, 0, // 20
    -1.0, -1.3, 0,

    -1.0, -1.3, 0,
    -1.0, 1.0,  0,
    -0.3, 2.1, 0,
    0.5, 1.0, 0,
    0.5, -1.3, 0,
    0.25, -1.8, 0,
    -0.75, -1.8, 0,

    -1.0, 1.0,  0,
    -0.5, 1.92,  0,
    -0.3, 2.1, 0,

    -0.3, 2.1, 0,
    -0.1, 1.92, 0, // 5
    0.5, 1.0, 0,
    //34
    //Flammen 
    //Flammen r
     0.25, -2.0, 0,
     0.1, -2.2, 0,
     //FlammenSpitzen Rechts
     0.4,-2.8,0,
     0.2,-3,0,
     //MittelPunkte
     -0.25,-2.2,0,
     
     //Flammen l
     -0.60, -2.2, 0,
    -0.75, -2.0, 0,
    
    //Flammenspitzen links
    -0.75,-2.8,0,
    -0.55,-3,0

]);

var c2 = {
    r: 0.73,
    g: 0.07,
    b: 0.07,
    a: 1
}

var c3 = {
    r: 0.53,
    g: 0.07,
    b: 0.07,
    a: 1
}

var c4 = {
    r: 0.6,
    g: 0.8,
    b: 1,
    a: 1
}

var cF1 = {
    r: 1.0,
    g: 1.0,
    b: 0.0,
    a: 1
}

var cF2 = {
    r: 1.0,
    g: 0.8,
    b: 0.0,
    a: 1
}

// Colors as rgba.
var colors = new Float32Array([
    c2.r, c2.g, c2.b, c2.a,
    c2.r, c2.g, c2.b, c2.a,
    c2.r, c2.g, c2.b, c2.a,
    c2.r, c2.g, c2.b, c2.a,
    c2.r, c2.g, c2.b, c2.a,
    c2.r, c2.g, c2.b, c2.a,
    c2.r, c2.g, c2.b, c2.a,
    c2.r, c2.g, c2.b, c2.a,
    c2.r, c2.g, c2.b, c2.a,
    c2.r, c2.g, c2.b, c2.a,
    c2.r, c2.g, c2.b, c2.a,
    c2.r, c2.g, c2.b, c2.a,
    c2.r, c2.g, c2.b, c2.a,
    c2.r, c2.g, c2.b, c2.a,
    c2.r, c2.g, c2.b, c2.a,
    c2.r, c2.g, c2.b, c2.a,
    c2.r, c2.g, c2.b, c2.a,
    c2.r, c2.g, c2.b, c2.a,
    c2.r, c2.g, c2.b, c2.a,
    c2.r, c2.g, c2.b, c2.a,
    c2.r, c2.g, c2.b, c2.a,
    c2.r, c2.g, c2.b, c2.a,

    c3.r+0.05, c3.g, c3.b, c3.a,
    c3.r+0.05, c3.g, c3.b, c3.a,
    c3.r+0.05, c3.g, c3.b, c3.a,
    c3.r, c3.g, c3.b, c3.a,
    c3.r, c3.g, c3.b, c3.a,
    c3.r, c3.g, c3.b, c3.a,
    c3.r+0.05, c3.g, c3.b, c3.a,

    c4.r, c4.g, c4.b, c4.a,
    c4.r, c4.g, c4.b, c4.a,
    c4.r, c4.g, c4.b, c4.a,

    c4.r, c4.g, c4.b, c4.a,
    c4.r, c4.g, c4.b, c4.a,
    c4.r, c4.g, c4.b, c4.a,
    
    cF2.r, cF2.g, cF2.b, cF2.a,
    cF1.r, cF1.g, cF1.b, cF1.a,
    cF2.r, cF2.g, cF2.b, cF2.a,

    cF1.r, cF1.g, cF1.b, cF1.a,
    cF1.r, cF1.g, cF1.b, cF1.a,
    cF2.r, cF2.g, cF2.b, cF2.a,
    
    cF1.r, cF1.g, cF1.b, cF1.a,
    cF1.r, cF1.g, cF1.b, cF1.a,
    cF1.r, cF1.g, cF1.b, cF1.a,
    cF1.r, cF1.g, cF1.b, cF1.a,



]);
// Index data.
var indices = new Uint16Array([
    0,1,2,
    2,3,4,
    4,5,6,
    6,7,8,
    8,9,10,
    10,11,8,
    11,12,8,
    12,13,14,
    14,15,16,
    16,17,12,
    12,14,16,
    17,18,21,
    18,19,20,
    20,21,18,

    22,23,24,
    22,24,25,
    22,25,26,
    22,26,27,
    22,27,28,

    29,30,31,
    32,33,34,
    
    35,37,36,
    35,38,36,
    36,38,40,
    
    40,42,41,
    40,43,41,
    36,43,40
]);

// Setup position vertex buffer object.
var vboPos = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vboPos);
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
// Bind vertex buffer to attribute variable.
var posAttrib = gl.getAttribLocation(prog, 'pos');
gl.vertexAttribPointer(posAttrib, 3, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(posAttrib);

// Setup color vertex buffer object.
var vboCol = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vboCol);
gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);
// Bind vertex buffer to attribute variable.
var colAttrib = gl.getAttribLocation(prog, 'col');
gl.vertexAttribPointer(colAttrib, 4, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(colAttrib);

// Setup index buffer object.
var ibo = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices,
    gl.STATIC_DRAW);
ibo.numerOfEmements = indices.length;

// Clear framebuffer and render primitives.
gl.clear(gl.COLOR_BUFFER_BIT);
gl.drawElements(gl.TRIANGLES, ibo.numerOfEmements,
    gl.UNSIGNED_SHORT, 0);