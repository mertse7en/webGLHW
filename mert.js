
var vertexColors = [
        [ 0.0, 0.0, 0.0, 1.0 ],  // black
        [ 1.0, 0.0, 0.0, 1.0 ],  // red
        [ 1.0, 1.0, 0.0, 1.0 ],  // yellow
        [ 0.0, 1.0, 0.0, 1.0 ],  // green
        [ 0.0, 0.0, 1.0, 1.0 ],  // blue
        [ 1.0, 0.0, 1.0, 1.0 ],  // magenta
        [ 0.0, 1.0, 1.0, 1.0 ],  // cyan
        [ 1.0, 1.0, 1.0, 1.0 ]   // white
    ];




var vertexColors2 = [
        [ 1.0, 1.0, 0.0, 1.0 ],  // yellow
        [ 1.0, 1.0, 1.0, 1.0 ],   // white
        [ 0.0, 1.0, 1.0, 1.0 ],  // cyan
        [ 0.0, 1.0, 0.0, 1.0 ],  // green
        [ 0.0, 0.0, 0.0, 1.0 ],  // black
        [ 1.0, 0.0, 1.0, 1.0 ],  // magenta
        [ 1.0, 0.0, 0.0, 1.0 ],  // red
        [ 0.0, 0.0, 1.0, 1.0 ]  // blue
    ];




var vertexColors3 = [
        [ 0.0, 0.0, 1.0, 1.0 ],  // blue
        [ 148.0, 226.0, 0.0, 1.0 ],   // white
        [ 0.0, 1.0, 0.0, 1.0 ],  // green
        [ 1.0, 0.0, 1.0, 1.0 ],  // magenta
        [ 255.0, 226.0, 0.0, 1.0],  // cyan
        [ 148., 140., 255., 1. ],  // yellow
        [ 1.0, 0.0, 0.0, 1.0 ],  // red
        [ 0.0, 0.0, 0.0, 1.0 ]  // black
    ];
var vColor;

var birimMatris = [1, 0 , 0, 0,
                                                          0 ,1 , 0 ,0,
                                                          0, 0,  1 ,0,
                                                          0, 0 , 0, 1]
    
//projectingi
var program;
var near = -1;
var far = 1;
var radius = 1.0;
var theta2  = 0.0;
var phi    = 0.0;
var dr = 5.0 * Math.PI/180.0;

var fovy = 45.0
var aspect;

var left = -1.0;
var right = 1.0;
var ytop = 1.0;
var bottom = -1.0;


var modelViewMatrix, projectionMatrix;
var modelViewMatrixLoc, projectionMatrixLoc;
var eye;

const at = vec3(0.0, 0.0, 0.0);
const up = vec3(0.0, 1.0, 0.0);
//


var numVertices =360;
var canvas;
var numDivs = 7;

//flaglar
var triggerFlag= 0;
var projectionFlag =0;
var move = 0; //flag1
var surfaceFlag=1;//f2
var colorFlag = 0;//
var clearFlag =1;
var trigger =0;
var ucgenlecizdir =1;



var points = [];
var colors = [];
var colors2 = [];
var colors3 = [];
var normalsArray = [];


var xAxis = 0;
var yAxis = 1;
var zAxis = 2;

var axis = 0;
var axisTr = 0;
var axisSc= 0 ;

var theta = [ 0, 0, 0 ];
var tr=[ 0, 0, 0 ];
var sc =[ 1,1, 1 ];




var thetaLoc;
var trLoc;
var scLoc;

var stop = false;

var scInput = 0;
var trInput = 0;
var degrees=5;



var renko=0;

//lighting
var lightPosition = vec4(1.0, 1.0, 1.0, 0.0 );
var lightAmbient = vec4(0.2, 0.2, 0.2, 1.0 );
var lightDiffuse = vec4( 1.0, 1.0, 1.0, 1.0 );
var lightSpecular = vec4( 1.0, 1.0, 1.0, 1.0 );

var lightPosition2 = vec4(1.0, 1.0, 1.0, 0.0 );
var lightAmbient2 = vec4(0.2, 0.2, 0.2, 1.0 );
var lightDiffuse2 = vec4( 1.0, 1.0, 1.0, 1.0 );
var lightSpecular2 = vec4( 1.0, 1.0, 1.0, 1.0 );

var lightPosition3 = vec4(1.0, 1.0, 1.0, 0.0 );
var lightAmbient3= vec4(0.5, 0.7, 0.12, 0.0 );
var lightDiffuse3 = vec4( 0.5, 0.5, 0.5, 1.0 );
var lightSpecular3 = vec4( 0.3, 0.3, 0.0, 1.0 );

var lightPosition4 = vec4(1.0, 1.0, 1.0, 0.0 );
var lightAmbient4 = vec4(0.2, 0.2, 0.2, 1.0 );
var lightDiffuse4 = vec4( 1.0, 1.0, 1.0, 1.0 );
var lightSpecular4 = vec4( 1.0, 1.0, 1.0, 1.0 );
//
//var lightPosition2 = vec4(1.0, 1.0, 1.0, 0.0 );
//var lightAmbient2 = vec4(0.5, 0.3, 0.5, 1.0 );
//var lightDiffuse2= vec4( 0.2, 0.4, 1.0, 1.0 );
//var lightSpecular2 = vec4( 0.0, 0.1, 1.0, 1.0 );

var materialAmbient = vec4( 1.0, 0.0, 1.0, 1.0 );
var materialDiffuse = vec4( 1.0, 0.8, 0.0, 1.0);
var materialSpecular = vec4( 1.0, 0.8, 0.0, 1.0 );
var materialShininess = 100.0;

var materialAmbient2 = vec4( 0.5, 0.3, 1.0, 1.0 );
var materialDiffuse2 = vec4( 0.2, 0.4, 0.2, 1.0);
var materialSpecular2 = vec4( 0.4, 0.8, 0.8, 1.0 );
var materialShininess2 = 80.0;

var materialAmbient3 = vec4( 0.15, 0.33, 0.42, 1.0 );
var materialDiffuse3 = vec4( 0.6, 0.13, 0.42, 1.0);
var materialSpecular3 = vec4( 0.67, 0.12, 0.85, 1.0 );
var materialShininess3 = 80.0;

var materialAmbient4 = vec4( 0.8, 0.65, 0.42, 1.0 );
var materialDiffuse4 = vec4( 0.71, 0.34, 0.91, 0.85);
var materialSpecular4 = vec4( 0.31, 0.22, 0.33, 1.0 );
var materialShininess4 = 80.0;


var ambientColor, diffuseColor, specularColor;
var modelView, projection;
var viewerPos;




window.onload = function init(){
    
    canvas = document.getElementById("gl-canvas");
    

	gl = canvas.getContext("webgl"); // WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }
    
    colorCube();
    
//    console.log(colors[1]);
//    console.log(colors2[1]);
//    console.log(colors3[1]);
    
    
    
    gl.viewport( 0, 0, canvas.width, canvas.height );
	gl.clearColor(0.75,0.85,0.8,1.0);
    aspect = (canvas.width , canvas.height)
    
    gl.enable(gl.DEPTH_TEST);
    
    var vertShdr;
	var fragShdr;
   
    //////////////////////////

	var vertElem = document.getElementById( "vertex-shader" );
	if ( !vertElem ) {
		alert( "Unable to load the vertex shader!" );
	  return -1;
	}
	else {
		vertShdr = gl.createShader( gl.VERTEX_SHADER );
	  gl.shaderSource( vertShdr, vertElem.text );
	  gl.compileShader( vertShdr );
	  if ( !gl.getShaderParameter(vertShdr, gl.COMPILE_STATUS) ) {
			alert( "Vertex shader failed to compile!" );
	    return -1;
		}
	}

	var fragElem = document.getElementById( "fragment-shader" );
	if ( !fragElem ) {
		alert( "Unable to load fragment shader!" );
	  return -1;
	}
	else {
		fragShdr = gl.createShader( gl.FRAGMENT_SHADER );
	  gl.shaderSource( fragShdr, fragElem.text );
	  gl.compileShader( fragShdr );
	  if ( !gl.getShaderParameter(fragShdr, gl.COMPILE_STATUS) ) {
			alert( "Fragment shader failed to compile!" );
	    return -1;
		}
	}
	program = gl.createProgram();
	gl.attachShader( program, vertShdr );
	gl.attachShader( program, fragShdr );
	gl.linkProgram( program );

	if ( !gl.getProgramParameter(program, gl.LINK_STATUS) ) {
		alert( "Shader program failed to link!" );
		return -1;
	}
    //////////////////////////////

	gl.useProgram( program );
    
     var nBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, nBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(normalsArray), gl.STATIC_DRAW );

    var vNormal = gl.getAttribLocation( program, "vNormal" );
    gl.vertexAttribPointer( vNormal, 3, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vNormal );

    
    var cBuffer = gl.createBuffer();    
    gl.bindBuffer(gl.ARRAY_BUFFER,cBuffer);
    gl.bufferData(gl.ARRAY_BUFFER , flatten(colors),gl.STATIC_DRAW);
    
//    vColor = gl.getAttribLocation( program, "vColor" );
//    gl.vertexAttribPointer( vColor, 4, gl.FLOAT, false, 0, 0 );
//    gl.enableVertexAttribArray( vColor );
    
    var cBuffer2 = gl.createBuffer();    
    gl.bindBuffer(gl.ARRAY_BUFFER,cBuffer2);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(colors2), gl.STATIC_DRAW);
    
    var cBuffer3 = gl.createBuffer();    
    
    
   
    
    
    //var lightPosition2 = vec4(1.0, 1.0, 1.0, 0.0 );
    //var lightAmbient2 = vec4(0.5, 0.3, 0.5, 1.0 );
    //var lightDiffuse2= vec4( 0.2, 0.4, 1.0, 1.0 );
    //var lightSpecular2 = vec4( 0.0, 0.1, 1.0, 1.0 );
    
//    var materialAmbient = vec4( 1.0, 0.0, 1.0, 1.0 );
//var materialDiffuse = vec4( 1.0, 0.8, 0.0, 1.0);
//var materialSpecular = vec4( 1.0, 0.8, 0.0, 1.0 );
//var materialShininess = 100.0;
    

   var vBuffer = gl.createBuffer();
   gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer );
   gl.bufferData( gl.ARRAY_BUFFER, flatten(points),gl.STATIC_DRAW );

    var vPosition = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );
    
    viewerPos = vec3(0.0, 0.0, -40.0 );

    
    
    var ambientProduct = mult(lightAmbient, materialAmbient);
    var diffuseProduct = mult(lightDiffuse, materialDiffuse);
    var specularProduct = mult(lightSpecular, materialSpecular); 
    
    var ambientProduct2 = mult(lightAmbient2, materialAmbient2);
    var diffuseProduct2= mult(lightDiffuse2, materialDiffuse2);
    var specularProduct2 = mult(lightSpecular2, materialSpecular2);  
    
    var ambientProduct3 = mult(lightAmbient3, materialAmbient3);
    var diffuseProduct3= mult(lightDiffuse3, materialDiffuse3);
    var specularProduct3 = mult(lightSpecular3, materialSpecular3); 
    
    var ambientProduct4 = mult(lightAmbient4, materialAmbient4);
    var diffuseProduct4= mult(lightDiffuse4, materialDiffuse4);
    var specularProduct4 = mult(lightSpecular4, materialSpecular4);
    
   
    
    
    thetaLoc = gl.getUniformLocation(program, "theta");
    trLoc = gl.getUniformLocation(program, "tr");
    
    modelViewMatrixLoc = gl.getUniformLocation( program, "modelViewMatrix" );
    projectionMatrixLoc = gl.getUniformLocation( program, "projectionMatrix" );

    
    
     gl.uniform4fv(gl.getUniformLocation(program, "ambientProduct"),
       flatten(ambientProduct));
    gl.uniform4fv(gl.getUniformLocation(program, "diffuseProduct"),
       flatten(diffuseProduct) );
    gl.uniform4fv(gl.getUniformLocation(program, "specularProduct"),
       flatten(specularProduct) );
    gl.uniform4fv(gl.getUniformLocation(program, "lightPosition"),
       flatten(lightPosition) );

    gl.uniform1f(gl.getUniformLocation(program,
       "shininess"),materialShininess);
    
    
    
    
    
    
    
    ////buttoooooooooooooooooonnnnnnnnnnnnnnnnnnnnsssssssssssss
    //rotatex
    document.getElementById( "xButton" ).onclick = function () {
        theta[axis] += degrees;
        axis = xAxis;
        move=0;
        
    };
    //rotate y eaxis
    document.getElementById( "yButton" ).onclick = function () {
        theta[axis] += degrees;
        axis = yAxis;
        move=0;
    };
    // z eksenı
    document.getElementById( "zButton" ).onclick = function () {
        theta[axis] += degrees;
        axis = zAxis;
        move =0;
    }; 
    //start - stop
    document.getElementById("stopButton").onclick = function(){
        
        trigger = 0;

    }
    document.getElementById("wireButton").onclick = function(){
        
        ucgenlecizdir = !ucgenlecizdir;

    }
    document.getElementById("startButton").onclick = function(){
        
        trigger = 1;

    }
    
    document.getElementById("orthoButton").onclick = function(){
        projectionFlag = 3;
      
    };
    
    document.getElementById("persButton").onclick = function(){
        projectionFlag = 2;
      
    };
    
    document.getElementById("normalButton").onclick = function(){
        projectionFlag = 0;
      
    };
    document.getElementById("lightButton").onclick = function(){
        projectionFlag = 3;
        
    };
    
    
    
    document.getElementById("colorButton").onclick = function(){
        
        if ( triggerFlag == 0){
            
//        gl.bindBuffer(gl.ARRAY_BUFFER,cBuffer2);
//        gl.bufferData(gl.ARRAY_BUFFER, flatten(colors2) ,gl.STATIC_DRAW);
//        gl.bindBuffer(gl.ARRAY_BUFFER,cBuffer2);
//        
//        vColor = gl.getAttribLocation( program, "vColor" );
//        gl.vertexAttribPointer( vColor, 4, gl.FLOAT, false, 0, 0 );
//        gl.enableVertexAttribArray( vColor );
//        triggerFlag++;
            
            
            
            gl.uniform4fv(gl.getUniformLocation(program, "ambientProduct"),
       flatten(ambientProduct2));
    gl.uniform4fv(gl.getUniformLocation(program, "diffuseProduct"),
       flatten(diffuseProduct2) );
    gl.uniform4fv(gl.getUniformLocation(program, "specularProduct"),
       flatten(specularProduct2) );
    gl.uniform4fv(gl.getUniformLocation(program, "lightPosition"),
       flatten(lightPosition2) );
            triggerFlag++;
            
            
        }

        
        else if (triggerFlag ==1){
              
//            gl.bindBuffer(gl.ARRAY_BUFFER,cBuffer3);
//            gl.bufferData(gl.ARRAY_BUFFER, flatten(colors3), gl.STATIC_DRAW);
//            gl.bindBuffer(gl.ARRAY_BUFFER,cBuffer3);
//            
//            vColor = gl.getAttribLocation( program, "vColor" );
//            gl.vertexAttribPointer( vColor, 4, gl.FLOAT, false, 0, 0 );
//            gl.enableVertexAttribArray( vColor );
//            triggerFlag++;
             gl.uniform4fv(gl.getUniformLocation(program, "ambientProduct"),
           flatten(ambientProduct3));
          gl.uniform4fv(gl.getUniformLocation(program, "diffuseProduct"),
           flatten(diffuseProduct3) );
          gl.uniform4fv(gl.getUniformLocation(program, "specularProduct"),
           flatten(specularProduct3) );
            gl.uniform4fv(gl.getUniformLocation(program, "lightPosition"),
           flatten(lightPosition3) );
            triggerFlag++;
            
            
            
        }
        else{
            
//            var cBuffer = gl.createBuffer();    
//            gl.bindBuffer(gl.ARRAY_BUFFER,cBuffer);
//            gl.bufferData(gl.ARRAY_BUFFER , flatten(colors),gl.STATIC_DRAW);
//            
//            vColor = gl.getAttribLocation( program, "vColor" );
//            gl.vertexAttribPointer( vColor, 4, gl.FLOAT, false, 0, 0 );
//            gl.enableVertexAttribArray( vColor );
            gl.uniform4fv(gl.getUniformLocation(program, "ambientProduct"),
            flatten(ambientProduct4));
          gl.uniform4fv(gl.getUniformLocation(program, "diffuseProduct"),
           flatten(diffuseProduct4) );
          gl.uniform4fv(gl.getUniformLocation(program, "specularProduct"),
           flatten(specularProduct4) );
            gl.uniform4fv(gl.getUniformLocation(program, "lightPosition"),
           flatten(lightPosition4) );
            triggerFlag++;
            triggerFlag=0;
            
            
            
            
            
        }
    };
    
    document.getElementById("surfaceButton").onclick = function(){
 
        if(surfaceFlag)
            gl.enable(gl.DEPTH_TEST);
        else
            gl.disable(gl.DEPTH_TEST);
        
        surfaceFlag = !surfaceFlag;
        
        
    }
    
    
    
    
    //// buttttttttttttttttonnnnnnnnnnnnnssssssssss
    
    
    //mouse
    canvas.addEventListener("dblclick", function(event){
    if(renko ==0){
    gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT );
    gl.clearColor(1, 0, 1, 0.3);
        
    }
        if(renko ==1){
    gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT );
    gl.clearColor(1, 0, 0, 1);
        
    }
        if(renko ==2){
    gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT );
    gl.clearColor(0.7, 0, 0.5, 0.6);
        
    }
        if(renko ==3){
    gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT );
    gl.clearColor(0.25, 0.8, 0.2, 0.8);
        
    }
        if(renko ==4){
    gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT );
    gl.clearColor(1, 0, 1, 0.3);
        
    }
    renko++;
    
      
    });
    
    //mouse
    
    
    
    
    
    
    
    
    
    
    
    
    

    

    //slideeeeeeeeeeeeeeeeeeeessssssssssssssssssss
    
    
    
    
    
    
    document.getElementById( "slide" ).oninput = function(){
        degrees = parseInt(event.target.value,10);
   };
    
    document.getElementById( "slide1" ).oninput = function(){
        axisTr = xAxis;
        trInput = parseFloat(event.target.value,10);
   };
    
    document.getElementById( "slide2" ).oninput = function(){
        axisTr = yAxis;
        trInput = parseFloat(event.target.value,10);
   };
    
    document.getElementById( "slide3" ).oninput= function(){
        axisTr = zAxis;
        trInput = parseFloat(event.target.value,10);
   };
//    document.getElementById( "slide4" ).oninput= function(){
//        scInput = parseFloat(event.target.value,10);
//   };
//    document.getElementById( "slide5" ).oninput= function(){
//        scInput = parseFloat(event.target.value,10);
//   };
//    document.getElementById( "slide6" ).oninput= function(){
//        scInput = parseFloat(event.target.value,10);
//   };
    
    
    //slideeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeessss
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    ///key presssseeeeeeeeed

    document.body.addEventListener("keydown",function(event){
       if(event.code == "KeyW"){
           trigger = 1;
           
           
       } 
        
        if(event.code =="KeyS"){
            
            trigger =0;
        }
        if(event.code == "KeyD"){
            axis = yAxis;
           trigger = 1;
           
           
       } 
        if(event.code == "KeyA"){
            axis = zAxis;
           trigger = 1;
           
           
       } 

        
    });
    

    render();



};

function colorCube(){
    
    quad( 1, 0, 3, 2 );
    quad( 2, 3, 7, 6 );
    quad( 3, 0, 4, 7 );
    quad( 6, 5, 1, 2 );
    quad( 4, 5, 6, 7 );
    quad( 5, 4, 0, 1 );
    
}
function quad(a,b,c,d){
  var vertices = [
        vec4( -0.5, -0.2,  0.5, 1.0 ),//1
        vec4( -0.5,  0.7,  0.5, 1.0 ),//2
        vec4(  0.5,  0.7,  0.5, 1.0 ),//3
        vec4(  0.5, -0.2,  0.5, 1.0 ),//4
        vec4( -0.5, -0.2, -0.5, 1.0 ),//5
        vec4( -0.5,  0.7, -0.5, 1.0 ),//6
        vec4(  0.5,  0.7, -0.5, 1.0 ),//7
        vec4(  0.5, -0.2, -0.5, 1.0 )
    ];
	var vertices2 = [
	    vec4( -0.8, 0.15,  0.2, 1.0 ),
        vec4( -0.8,  0.65,  0.2, 1.0 ),
        vec4( -0.6,  0.65,  0.2, 1.0 ),
        vec4( -0.6, 0.15,  0.2, 1.0 ),
        vec4( -0.8, 0.15, -0.2, 1.0 ),
        vec4( -0.8,  0.65, -0.2, 1.0 ),
        vec4( -0.6, 0.65, -0.2, 1.0 ),
        vec4( -0.6, 0.15, -0.2, 1.0 )
    ];
	
	var vertices3 = [
	    vec4( 0.6, 0.15,  0.2, 1.0 ),
        vec4( 0.6,  0.65,  0.2, 1.0 ),
        vec4( 0.8,  0.65,  0.2, 1.0 ),
        vec4( 0.8, 0.15,  0.2, 1.0 ),
        vec4( 0.6, 0.15,  -0.2, 1.0 ),
        vec4( 0.6,  0.65,  -0.2, 1.0 ),
        vec4( 0.8,  0.65,  -0.2, 1.0 ),
        vec4( 0.8, 0.15,  - 0.2, 1.0 )
    ];
	
	var vertices4 = [
	    vec4( -0.25, 0.75,  0.3, 1.0 ),
        vec4( -0.25,  0.98,  0.3, 1.0 ),
        vec4( 0.25,  0.98,  0.3, 1.0 ),
        vec4( 0.25, 0.75,  0.3, 1.0 ),
        vec4( -0.25, 0.75,  -0.3, 1.0 ),
        vec4( -0.25,  0.98,  -0.3, 1.0 ),
        vec4( 0.25,  0.98,  -0.3, 1.0 ),
        vec4( 0.25, 0.75,  -0.3, 1.0 ),
    ];
	
	var vertices5 = [
	    vec4( -0.76, -0.15,  0.17, 1.0 ),
        vec4( -0.76,  0.3,  0.17, 1.0 ),
        vec4( -0.64,  0.3,  0.17, 1.0 ),
        vec4( -0.64, -0.15,  0.17, 1.0 ),
        vec4( -0.76, -0.15, -0.17, 1.0 ),
        vec4( -0.76,  0.3, -0.17, 1.0 ),
        vec4( -0.64, 0.3, -0.17, 1.0 ),
        vec4( -0.64, -0.15, -0.17, 1.0 )
    ];
	
	var vertices6= [
	    vec4( 0.64, -0.15,  0.17, 1.0 ),
        vec4( 0.64,  0.3,  0.17, 1.0 ),
        vec4( 0.76,  0.3,  0.17, 1.0 ),
        vec4( 0.76, -0.15,  0.17, 1.0 ),
        vec4( 0.64, -0.15, -0.17, 1.0 ),
        vec4( 0.64,  0.3, -0.17, 1.0 ),
        vec4( 0.76, 0.3, -0.17, 1.0 ),
        vec4( 0.76, -0.15, -0.17, 1.0 )
    ];
	
	var vertices7= [
	    vec4( -0.4, -0.64,  0.3, 1.0 ),
        vec4( -0.4, -0.25,  0.3, 1.0 ),
        vec4( -0.1, -0.25,  0.3, 1.0 ),
        vec4( -0.1, -0.64,  0.3, 1.0 ),
		vec4( -0.4, -0.64,  -0.3, 1.0 ),
        vec4( -0.4, -0.25,  -0.3, 1.0 ),
        vec4( -0.1, -0.25,  -0.3, 1.0 ),
        vec4( -0.1, -0.64,  -0.3, 1.0 )
    ];
	
	var vertices8= [
	    vec4( 0.1, -0.64,  0.3, 1.0 ),
        vec4( 0.1, -0.25,  0.3, 1.0 ),
        vec4( 0.4, -0.25,  0.3, 1.0 ),
        vec4( 0.4, -0.64,  0.3, 1.0 ),
		vec4( 0.1, -0.64,  -0.3, 1.0 ),
        vec4( 0.1, -0.25,  -0.3, 1.0 ),
        vec4( 0.4, -0.25,  -0.3, 1.0 ),
        vec4( 0.4, -0.64,  -0.3, 1.0 )
    ];
	
	var vertices9= [
	    vec4( -0.34, -0.95,  0.25, 1.0 ),
        vec4( -0.34, -0.65,  0.25, 1.0 ),
        vec4( -0.16, -0.65,  0.25, 1.0 ),
        vec4( -0.16, -0.95,  0.25, 1.0 ),
		vec4( -0.34, -0.95,  -0.25, 1.0 ),
        vec4( -0.34, -0.65,  -0.25, 1.0 ),
        vec4( -0.16, -0.65,  -0.25, 1.0 ),
        vec4( -0.16, -0.95,  -0.25, 1.0 )
    ];
	
	var vertices10= [
	    vec4( 0.16, -0.95,  0.25, 1.0 ),
        vec4( 0.16, -0.65,  0.25, 1.0 ),
        vec4( 0.34, -0.65,  0.25, 1.0 ),
        vec4( 0.34, -0.95,  0.25, 1.0 ),
		vec4( 0.16, -0.95,  -0.25, 1.0 ),
        vec4( 0.16, -0.65,  -0.25, 1.0 ),
        vec4( 0.34, -0.65,  -0.25, 1.0 ),
        vec4( 0.34, -0.95,  -0.25, 1.0 )
    ];
    
    //color
    var vertexColors = [
        [ 0.0, 0.0, 0.0, 0.5 ],  // black
        [ 1.0, 0.0, 0.0, 0.5 ],  // red
        [ 1.0, 1.0, 0.0, 0.5 ],  // yellow
        [ 0.0, 1.0, 0.0, 0.5 ],  // green
        [ 0.0, 0.0, 1.0, 0.5 ],  // blue
        [ 1.0, 0.0, 1.0, 0.5 ],  // magenta
        [ 0.0, 1.0, 1.0, 0.5 ],   // cyan
        [ 1.0, 1.0, 1.0, 0.5 ]  // white
    ];
    
var vertexColors2 = [
        [ 1.0, 1.0, 0.0, 1.0 ],  // yellow
        [ 1.0, 1.0, 1.0, 1.0 ],   // white
        [ 0.0, 1.0, 1.0, 1.0 ],  // cyan
        [ 0.0, 1.0, 0.0, 1.0 ],  // green
        [ 0.0, 0.0, 0.0, 1.0 ],  // black
        [ 1.0, 0.0, 1.0, 1.0 ],  // magenta
        [ 1.0, 0.0, 0.0, 1.0 ],  // red
        [ 0.0, 0.0, 1.0, 1.0 ]  // blue
    ];
    
    var indices = [ a, b, c, a, c, d ];
    var t1 = subtract(vertices[b], vertices[a]);
         var t2 = subtract(vertices[c], vertices[b]);
         var normal = cross(t1, t2);
         var normal = vec3(normal);
    
    for(var i =0; i<indices.length ;i++){
        points.push(vertices[indices[i]]);
        
        
        
        
        colors.push(vertexColors[a]);
        colors2.push(vertexColors2[a]);
        colors3.push(vertexColors3[a]);
        normalsArray.push(normal);
        
        
    }
         var t1 = subtract(vertices2[b], vertices2[a]);
         var t2 = subtract(vertices2[c], vertices2[b]);
         var normal = cross(t1, t2);
         var normal = vec3(normal);
    
    for(var i =0; i<indices.length ;i++){
        points.push(vertices2[indices[i]]);
        
        
        
        colors.push(vertexColors[b]);
        colors2.push(vertexColors2[b]);
        colors3.push(vertexColors3[b]);
        normalsArray.push(normal);
        
    }
         var t1 = subtract(vertices3[b], vertices3[a]);
         var t2 = subtract(vertices3[c], vertices3[b]);
         var normal = cross(t1, t2);
         var normal = vec3(normal);
    for(var i =0; i<indices.length ;i++){
        points.push(vertices3[indices[i]]);
        
        colors.push(vertexColors[c]);
        colors2.push(vertexColors2[c]);
        colors3.push(vertexColors3[c]);
        normalsArray.push(normal);
        
    }
         var t1 = subtract(vertices4[b], vertices4[a]);
         var t2 = subtract(vertices4[c], vertices4[b]);
         var normal = cross(t1, t2);
         var normal = vec3(normal);
    for(var i =0; i<indices.length ;i++){
        
        points.push(vertices4[indices[i]]);
        
        
        colors.push(vertexColors[d]);
        colors2.push(vertexColors2[d]);
        colors3.push(vertexColors3[d]);
        normalsArray.push(normal);
        
        
    }
         var t1 = subtract(vertices5[b], vertices5[a]);
         var t2 = subtract(vertices5[c], vertices5[b]);
         var normal = cross(t1, t2);
         var normal = vec3(normal);
    for(var i =0; i<indices.length ;i++){
        points.push(vertices5[indices[i]]);
        
        
        colors.push(vertexColors[a]);
        colors2.push(vertexColors2[a]);
        colors3.push(vertexColors3[a]);
        normalsArray.push(normal);
        
    }
         var t1 = subtract(vertices6[b], vertices6[a]);
         var t2 = subtract(vertices6[c], vertices6[b]);
         var normal = cross(t1, t2);
         var normal = vec3(normal);
    for(var i =0; i<indices.length ;i++){
        points.push(vertices6[indices[i]]);
        
        colors.push(vertexColors[b]);
        colors2.push(vertexColors2[b]);
        colors3.push(vertexColors3[b]);
//        normalsArray.push(normal);
        
    }
        var t1 = subtract(vertices7[b], vertices7[a]);
         var t2 = subtract(vertices7[c], vertices7[b]);
         var normal = cross(t1, t2);
         var normal = vec3(normal);
   for(var i =0; i<indices.length ;i++){
        points.push(vertices7[indices[i]]);
       
        colors.push(vertexColors[c]);
       colors2.push(vertexColors2[c]);
       colors3.push(vertexColors3[c]);
       normalsArray.push(normal);
        
    }
         var t1 = subtract(vertices8[b], vertices8[a]);
         var t2 = subtract(vertices8[c], vertices8[b]);
         var normal = cross(t1, t2);
         var normal = vec3(normal);
    for(var i =0; i<indices.length ;i++){
        points.push(vertices8[indices[i]]);
        
        
        colors.push(vertexColors[d]);
        colors2.push(vertexColors2[d]);
        colors3.push(vertexColors3[d]);
        normalsArray.push(normal);
        
    }
         var t1 = subtract(vertices9[b], vertices9[a]);
         var t2 = subtract(vertices9[c], vertices9[b]);
         var normal = cross(t1, t2);
         var normal = vec3(normal);
    for(var i =0; i<indices.length ;i++){
        points.push(vertices9[indices[i]]);
        
        
        colors.push(vertexColors[a]);
        
        colors2.push(vertexColors2[a]);
        colors3.push(vertexColors3[a]);
        
        normalsArray.push(normal);
    }
         var t1 = subtract(vertices10[b], vertices10[a]);
         var t2 = subtract(vertices10[c], vertices10[b]);
         var normal = cross(t1, t2);
         var normal = vec3(normal);
    for(var i =0; i<indices.length ;i++){
        
        points.push(vertices10[indices[i]]);
        colors.push(vertexColors[3]);
        
        colors2.push(vertexColors2[3]);
        colors3.push(vertexColors3[3]);
        normalsArray.push(normal);
        
    }
    
    
     
}




function render(){
    
    gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    
  
    
         
//    var vColor = gl.getAttribLocation( program, "vColor" );
//    gl.vertexAttribPointer( vColor, 4, gl.FLOAT, false, 0, 0 );
//    gl.enableVertexAttribArray( vColor );
    
    
    
    
    
    // rotate için trigger başlarken sabit başlatiyorm
    
    if(trigger){
        theta[axis] += degrees;
    }
    
    tr[axisTr] = trInput;
    sc[axisSc] =scInput; 
    
   
    //ortographic
    if(projectionFlag == 1){
        
        
         modelViewMatrixLoc = gl.getUniformLocation( program, "modelViewMatrix" );
        projectionMatrixLoc = gl.getUniformLocation( program, "projectionMatrix" );
         aspect =  canvas.width/canvas.height;
        
        eye = vec3(radius*Math.sin(phi), radius*Math.sin(theta2),radius*Math.cos(phi));
        modelViewMatrix = lookAt(eye, at , up);
        projectionMatrix = ortho(left, right, bottom, ytop, near, far);
        
        gl.uniformMatrix4fv( modelViewMatrixLoc, false, flatten(modelViewMatrix) );
        gl.uniformMatrix4fv( projectionMatrixLoc, false, flatten(projectionMatrix) );
        
    }
    
    //perspective
  else if(projectionFlag == 2) {
       var near3 = 0.3;
    var far3 = 3.0;
    var radius3 = 4.0;
    var theta3  = 0.0;
    var phi3    = 0.0;
    var dr3 = 5.0 * Math.PI/180.0;
        
        eye =vec3(radius*Math.sin(theta3)*Math.cos(phi3),radius*Math.sin(theta3)*Math.sin(phi3),radius*Math.cos(theta3));
        
        modelViewMatrix = lookAt(eye, at , up);
        projectionMatrix = perspective(fovy, aspect, near, far);
        gl.uniformMatrix4fv( modelViewMatrixLoc, false, flatten(modelViewMatrix) );
        gl.uniformMatrix4fv( projectionMatrixLoc, false, flatten(projectionMatrix) );
  }
    //normal rotate
    else if(projectionFlag == 0){
        
        gl.uniformMatrix4fv( modelViewMatrixLoc, false,  [1, 0 , 0, 0,
                                                          0 ,1 , 0 ,0,
                                                          0, 0,  1 ,0,
                                                          0, 0 , 0, 1]);
         gl.uniformMatrix4fv( projectionMatrixLoc, false, 
                                                         [1, 0 , 0, 0,
                                                          0 ,1 , 0 ,0,
                                                          0, 0,  1 ,0,
                                                          0, 0 , 0, 1]);

    }
    
    
    
    else if (projectionFlag==3){
        ///////look at tha
        
        projection = ortho(-1, 1, -1, 1, -100, 100);

        gl.uniformMatrix4fv(  projectionMatrixLoc,
       false, flatten(projection));
        modelView = mat4();
        modelView = mult(modelView, rotate(theta[xAxis], [1, 0, 0] ));
        modelView = mult(modelView, rotate(theta[yAxis], [0, 1, 0 ] ));
        modelView = mult(modelView, rotate(theta[zAxis], [0, 0, 1] ));
        gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(modelView) );
  
    }
    
    


    
    
    gl.uniform3fv(trLoc, tr);
    gl.uniform3fv(thetaLoc, theta);
    gl.uniform3fv(scLoc, sc);
    
    
    

    if(ucgenlecizdir){
        
    gl.drawArrays( gl.TRIANGLES, 0, numVertices );
    }
    else{
     gl.drawArrays(gl.LINE_STRIP, 0 , numVertices);
    }

    requestAnimFrame( render );

}



function vec4(x, y, z, w) {
 return [x, y, z, w];
}
function vec3(x, y, z) {
 return [x, y, z];
}

function flatten(arrays) {
  return new Float32Array([].concat.apply([], arrays));
}






window.requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
         window.webkitRequestAnimationFrame ||
         window.mozRequestAnimationFrame ||
         window.oRequestAnimationFrame ||
         window.msRequestAnimationFrame ||
         function(/* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
           window.setTimeout(callback, 1000/60);
         };
})();












