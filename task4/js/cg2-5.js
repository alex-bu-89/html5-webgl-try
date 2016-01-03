// Get the WebGL context.
var canvas = document.getElementById('canvas5');
var gl = canvas.getContext('experimental-webgl');

// Pipeline setup.
gl.clearColor(.95, .95, .95, 1);
// Backface culling.
gl.frontFace(gl.CCW);
//gl.enable(gl.CULL_FACE);
gl.cullFace(gl.BACK);

// Depth(Z)-Buffer.
gl.enable(gl.DEPTH_TEST);
gl.depthFunc(gl.LEQUAL);
// Polygon offset of rastered Fragments.
gl.enable(gl.POLYGON_OFFSET_FILL);
gl.polygonOffset(1.0, 1.0);

// Compile vertex shader. 
var vsSource = '' +
    'attribute vec3 pos;' +
    'attribute vec4 col;' +
    'varying vec4 color;' +
    'void main(){' + 'color = col;' +
    	'gl_Position = vec4(pos * 0.1, 1);' +
    '}';
var vs = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vs, vsSource);
gl.compileShader(vs);
// Compile fragment shader.
fsSouce = 'precision mediump float;' +
    'varying vec4 color;' +
    'void main() {' +
    	'gl_FragColor = color;' +
    '}';
var fs = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fs, fsSouce);
gl.compileShader(fs);
// Link shader together into a program.
var prog = gl.createProgram();
gl.attachShader(prog, vs);
gl.attachShader(prog, fs);
gl.bindAttribLocation(prog, 0, "pos");
gl.linkProgram(prog);
gl.useProgram(prog);
// Vertex data.
// Positions, Index data.
var vertices, indicesLines, indicesTris, colors;
// Fill the data arrays.
createVertexData();
// Setup position vertex buffer object.
// Setup position vertex buffer object.
var vboPos = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vboPos);
gl.bufferData(gl.ARRAY_BUFFER,
        vertices, gl.STATIC_DRAW);
// Bind vertex buffer to attribute variable.
var posAttrib = gl.getAttribLocation(prog, 'pos');
gl.vertexAttribPointer(posAttrib, 3, gl.FLOAT,
        false, 0, 0);
gl.enableVertexAttribArray(posAttrib);

// Setup lines index buffer object.
var iboLines = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, iboLines);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,
        indicesLines, gl.STATIC_DRAW);
iboLines.numberOfElements = indicesLines.length;
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
// Bind vertex buffer to attribute variable.
var colAttrib = gl.getAttribLocation(prog, 'col');
// Setup rendering lines.
// Clear framebuffer and render primitives.
gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
gl.vertexAttrib4f(colAttrib, 0.4, 0.6, 0.8, 0.9);
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, iboLines);
gl.drawElements(gl.LINES,
        iboLines.numberOfElements, gl.UNSIGNED_SHORT, 0);

// Setup color vertex buffer object.    
var vboCol = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vboCol);
gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);
gl.vertexAttribPointer(colAttrib, 4, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(colAttrib);

// Setup tris index buffer object.
var iboTris = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, iboTris);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,
        indicesTris, gl.STATIC_DRAW);
iboTris.numberOfElements = indicesTris.length;
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

// Setup rendering tris.
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, iboTris);
gl.drawElements(gl.TRIANGLES,
        iboTris.numberOfElements, gl.UNSIGNED_SHORT, 0);
function createVertexData() {
    var n = 256;
    var m = 96;
    // Positions.
    vertices = new Float32Array(3 * (n + 1) * (m + 1));

    colors = new Float32Array(4 * (n + 1) * (m + 1));
    // Index data.
    indicesLines = new Uint16Array(2 * 2 * n * m);
    indicesTris = new Uint16Array(3 * 2 * n * m);
    var dt = 2 * Math.PI / n;
    var dr = 2 * Math.PI / m;
    // Counter for entries in index array.
    var iLines = 0;
    var iTris = 0;
    
    var g = n * (m + 1) + 30;
    // Loop angle t.
    for (var i = 0, t = 0; i <= n; i++, t += dt) {
        // Loop radius r.
        for (var j = 0, r = -Math.PI; j <= m; j++, r += dr) {
            var u = t;
            var v = r;

            var iVertex = i * (m + 1) + j;
            var x = Math.sin(u) * 4 * Math.cos(v + -Math.PI) ;
            var z = 2*Math.cosh(u) + 0.5*Math.sin(u)-10;
            var y = z;

            // Set vertex positions.
            vertices[iVertex * 3] = x;
            vertices[iVertex * 3 + 1] = y;
            vertices[iVertex * 3 + 2] = z;
            
             if (iVertex < (2 * g) / 10) {

                colors[iVertex * 4] = 16 / 256;
                colors[iVertex * 4 + 1] = 16 / 256;
                colors[iVertex * 4 + 2] = 200 / 256;
                colors[iVertex * 4 + 3] = 1;

            }
            else if (iVertex < (4 * g) / 10) {

                colors[iVertex * 4] = 16 / 256;
                colors[iVertex * 4 + 1] = 16 / 256;
                colors[iVertex * 4 + 2] = 200 / 256;
                colors[iVertex * 4 + 3] = 0.8;

            } else if (iVertex < (6 * g) / 10) {

                colors[iVertex * 4] = 16 / 256;
                colors[iVertex * 4 + 1] = 16 / 256;
                colors[iVertex * 4 + 2] = 200 / 256;
                colors[iVertex * 4 + 3] = 0.6;

            } else if (iVertex < (8 * g) / 10) {

                colors[iVertex * 4] = 16 / 256;
                colors[iVertex * 4 + 1] = 16 / 256;
                colors[iVertex * 4 + 2] = 200 / 256;
                colors[iVertex * 4 + 3] = 0.4;

            } else if (iVertex < (10 * g) / 10) {

                colors[iVertex * 4] = 16 / 256;
                colors[iVertex * 4 + 1] = 16 / 256;
                colors[iVertex * 4 + 2] = 200 / 256;
                colors[iVertex * 4 + 3] = 0.2;

            } 
                
          
            // Set index.
            // Line on beam.
            if (j > 0 && i > 0) {
                indicesLines[iLines++] = iVertex - 1;
                indicesLines[iLines++] = iVertex;
            }
            // Line on ring.
            if (j > 0 && i > 0) {
                indicesLines[iLines++] = iVertex - (m + 1);
                indicesLines[iLines++] = iVertex;
            }

            // Set index.
            // Two Triangles.
            if (j > 0 && i > 0) {

                indicesTris[iTris++] = iVertex;
                indicesTris[iTris++] = iVertex - 1;
                indicesTris[iTris++] = iVertex - (m + 1);
                indicesTris[iTris++] = iVertex - 1;
                indicesTris[iTris++] = iVertex - (m + 1) - 1;
                indicesTris[iTris++] = iVertex - (m + 1);
            }
        }
    }

}



