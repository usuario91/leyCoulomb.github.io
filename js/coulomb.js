//FUNCIONSE PARA IMPRIMIR 
//funcion de boton 
function funcionBoton(){
  boton = document.createElement("button");
  boton.textContent = "resolver";
  boton.classList.add("header_button")
  dato.appendChild(boton);
}
//variantes de cargas
function cargaVarianteQ1Si(){
  if(input1.value.includes("C")){
    cargaReplace1 = input1.value.replace("C", "");
    cargaResuelve1 = parseFloat(cargaReplace1);
  }
    else if(input1.value.includes("mc")){
      cargaReplace1 = input1.value.replace("mc", "");
      cargaResuelve1 = parseFloat(cargaReplace1) * 1e-3;
      carga = `q1 || q2 = ${input1.value} * 1x10¯³ / 1mc = ${cargaResuelve1}c`;
      pResuelve5.textContent = carga
      prosedimiento.appendChild(pResuelve5);
    }
    else if(input1.value.includes("uc")){
      cargaReplace1 = input1.value.replace("uc", "");
      cargaResuelve1 = parseFloat(cargaReplace1) * 1e-6;
      carga = `q1 || q2 = ${input1.value} * 1x10¯⁶ / 1µc = ${cargaResuelve1}c`;
      pResuelve5.textContent = carga
      prosedimiento.appendChild(pResuelve5);
    }
    else if(input1.value.includes("nc")){
      cargaReplace1 = input1.value.replace("nc", "");
      cargaResuelve1 = parseFloat(cargaReplace1) * 1e-9;
      carga = `q1 || q2 = ${input1.value} * 1x10¯⁹ / 1nc = ${cargaResuelve1}c`;
      pResuelve5.textContent = carga
      prosedimiento.appendChild(pResuelve5);
    }
    else if(input1.value.includes("pc")){
      cargaReplace1 = input1.value.replace("pc", "");
      cargaResuelve1 = parseFloat(cargaReplace1) * 1e-12;
      carga = `q1 || q2 = ${input1.value} * 1x10¯¹² / 1pc = ${cargaResuelve1}c`;
      pResuelve5.textContent = carga
      prosedimiento.appendChild(pResuelve5);
    }
    else if(input1.value.includes("stc")){
      cargaReplace1 = input1.value.replace("stc", "");
      cargaResuelve1 = parseFloat(cargaReplace1) * 2.998e9;
      carga = `q1 || q2 = ${input1.value} * 3.3356x10-¹⁰c / 1stc = ${cargaResuelve1}c`;
      pResuelve5.textContent = carga
      prosedimiento.appendChild(pResuelve5);

    }


    else{
      alert("Lo siento pero necesita especificar a que sistema de unidad pertenece el valor de la carga, lea bien la pregunta u fijese si el valor de las cargas no estan acompañadas de un: c, mc, uc, pc o nc");
    }
}
function cargaVarianteQ2Si(){
  if(input2.value.includes("C")){
    cargaReplace2 = input2.value.replace("C", "");
    cargaResuelve2 = parseFloat(cargaReplace2);
  }

  else if(input2.value.includes("mc")){
    cargaReplace2 = input2.value.replace("mc", "");
    cargaResuelve2 = parseFloat(cargaReplace2) * 1e-3;
    carga = `q2 || q1 = ${input2.value} * 1x10¯³ / 1mc = ${cargaResuelve2}c`;
    pResuelve6.textContent = carga
    prosedimiento.appendChild(pResuelve6);
  }
  else if(input2.value.includes("uc")){
    cargaReplace2 = input2.value.replace("uc", "");
    cargaResuelve2 = parseFloat(cargaReplace2) * 1e-6;
    carga = `q2 || q1 = ${input2.value} * 1x10¯⁶ / 1µc = ${cargaResuelve2}c`;
    pResuelve6.textContent = carga
    prosedimiento.appendChild(pResuelve6);
  }
  else if(input2.value.includes("nc")){
    cargaReplace2 = input2.value.replace("nc", "");
    cargaResuelve2 = parseFloat(cargaReplace2) * 1e-9;
    carga = `q2 || q1 = ${input2.value} * 1x10¯⁹ / 1nc = ${cargaResuelve2}c`;
    pResuelve6.textContent = carga
    prosedimiento.appendChild(pResuelve6);
  }
  else if(input2.value.includes("pc") ){
    cargaReplace2 = input2.value.replace("pc", "");
    cargaResuelve2 = parseFloat(cargaReplace2) * 1e-12;
    carga = `q2 || q1 = ${input2.value} * 1x10¯¹² / 1pc = ${cargaResuelve2}c`;
    pResuelve6.textContent = carga
    prosedimiento.appendChild(pResuelve6);
  }
  else if(input2.value.includes("stc")){
    cargaReplace2 = input2.value.replace("stc", "");
    cargaResuelve2 = parseFloat(cargaReplace2) * 2.998e9;
    carga = `q2 || q1 = ${input2.value} * 3.3356x10-¹⁰c / 1stc = ${cargaResuelve2}c`;
    pResuelve6.textContent = carga
    prosedimiento.appendChild(pResuelve6);
  }

  else{
    alert("Lo siento pero necesita especificar a que sistema de unidad pertenece el valor de la carga, lea bien la pregunta u fijese si el valor de las cargas no estan acompañadas de un: c, mc, uc, pc o nc");
  }
}



function cargaVarianteQ1Cgs(){
  if(input1.value.includes("stc")){
    cargaReplace3 = input1.value.replace("stc", "");
    cargaResuelve3 = parseFloat(cargaReplace3);
  }

  else if(input1.value.includes("mc")){
    cargaReplace3 = input1.value.replace("mc", "");
    cargaResuelve3 = parseFloat(cargaReplace3) * 1e-3;
    cargaResuelve3 = cargaResuelve3 * 2.998e9;
    carga = `q1 || q2 = ${input1.value} * 1e-3 * 2.998e9stc / 1c = ${cargaResuelve3}stc`;
    pResuelve7.textContent = carga
    prosedimiento.appendChild(pResuelve7);
  }
  else if(input1.value.includes("uc")){
    cargaReplace3 = input1.value.replace("uc", "");
    cargaResuelve3 = parseFloat(cargaReplace3) * 1e-6;
    cargaResuelve3 = cargaResuelve3 * 2.998e9;
    carga = `q1 || q2 = ${input1.value}  * 1e-6 * 2.998e9stc / 1c = ${cargaResuelve3}stc`;
    pResuelve7.textContent = carga
    prosedimiento.appendChild(pResuelve7);
  }
  else if(input1.value.includes("nc")){
    cargaReplace3 = input1.value.replace("nc", "");
    cargaResuelve3 = parseFloat(cargaReplace3) * 1e-9;
    cargaResuelve3 = cargaResuelve3 * 2.998e9;
    carga = `q1 || q2 = ${input1.value}  * 1e-9 * 2.998e9stc / 1c = ${cargaResuelve3}stc`;
    pResuelve7.textContent = carga
    prosedimiento.appendChild(pResuelve7);
  }
  else if(input1.value.includes("pc")){
    cargaReplace3 = input1.value.replace("pc", "");
    cargaResuelve3 = parseFloat(cargaReplace3) * 1e-12;
    cargaResuelve3 = cargaResuelve3 * 2.998e9;
    carga = `q1 || q2 = ${input1.value}  * 1e-12 * 2.998e9stc / 1c = ${cargaResuelve3}stc`;
    pResuelve7.textContent = carga
    prosedimiento.appendChild(pResuelve7);
  }
  else if(input1.value.includes("C")){
    cargaReplace3 = input1.value.replace("C", "");
    cargaResuelve3 = parseFloat(cargaReplace3) * 2.998e9;
    carga = `q1 || q2 = ${input1.value} * 2.998e9stc / 1c = ${cargaResuelve3}stc`;
    pResuelve7.textContent = carga
    prosedimiento.appendChild(pResuelve7);
  }

  else{
    alert("Lo siento pero necesita especificar a que sistema de unidad pertenece el valor de la carga, lea bien la pregunta u fijese si el valor de las cargas no estan acompañadas de un: c, mc, uc, pc o nc");
  }
}


function cargaVarianteQ2Cgs(){
  if(input2.value.includes("stc")){
    cargaReplace4 = input2.value.replace("stc", "");
    cargaResuelve4 = parseFloat(cargaReplace4);
  }

  else if(input1.value.includes("mc")){
    cargaReplace4 = input2.value.replace("mc", "");
    cargaResuelve4 = parseFloat(cargaReplace4) * 1e-3;
    cargaResuelve4 = cargaResuelve4 * 2.998e9;
    carga = `q2 || q1 = ${input2.value}  * 1e-3 * 2.998e9stc / 1c = ${cargaResuelve4}stc`;
    pResuelve8.textContent = carga
    prosedimiento.appendChild(pResuelve8);
  }
  else if(input1.value.includes("uc")){
    cargaReplace = input2.value.replace("uc", "");
    cargaResuelve4 = parseFloat(cargaReplace) * 1e-6;
    cargaResuelve4 = cargaResuelve4 * 2.998e9;
    carga = `q2 || q1 = ${input2.value}  * 1e-6 * 2.998e9stc / 1c = ${cargaResuelve4}stc`;
    pResuelve8.textContent = carga
    prosedimiento.appendChild(pResuelve8);
  }
  else if(input1.value.includes("nc")){
    cargaReplace4 = input2.value.replace("nc", "");
    cargaResuelve4 = parseFloat(cargaReplace4) * 1e-9;
    cargaResuelve4 = cargaResuelve4 * 2.998e9;
    carga = `q2 || q1 = ${input2.value}  * 1e-9 * 2.998e9stc / 1c = ${cargaResuelve4}stc`;
    pResuelve8.textContent = carga
    prosedimiento.appendChild(pResuelve8);
  }
  else if(input1.value.includes("pc")){
    cargaReplace4 = input2.value.replace("pc", "");
    cargaResuelve4 = parseFloat(cargaReplace4) * 1e-12;
    cargaResuelve4 = cargaResuelve4 * 2.998e9;
    carga = `q2 || q1 = ${input2.value}  * 1e-12 * 2.998e9stc / 1c = ${cargaResuelve4}stc`;
    pResuelve8.textContent = carga
    prosedimiento.appendChild(pResuelve8);
  }
  else if(input2.value.includes("C")){
    cargaReplace4 = input2.value.replace("C", "");
    cargaResuelve4 = parseFloat(cargaReplace4) * 2.998e9;
    carga = `q2 || q1 = ${input2.value} * 2.998e9stc = ${cargaResuelve4}stc`;
    pResuelve8.textContent = carga
    prosedimiento.appendChild(pResuelve8);
  }

  else{
    alert("Lo siento pero necesita especificar a que sistema de unidad pertenece el valor de la carga, lea bien la pregunta u fijese si el valor de las cargas no estan acompañadas de un: c, mc, uc, pc o nc");
  }
}
//constante k
function dato_k(){
  if(kSi.checked){
    k = 9e9
  }
  else{
    k = 1
  }
}
function fResuelto(){      
  formula.innerHTML = `Formula: <br>${incog_f}`;

  p1.textContent = "q1 = " 
  p2.textContent = "q2 = "
  p3.textContent = "d = " 

  p1.appendChild(input1);
  p2.appendChild(input2);
  p3.appendChild(input3);

  dato.appendChild(p1);
  dato.appendChild(p2);
  dato.appendChild(p3);
}

//distancia
function dResuelto(){      
  formula.innerHTML = `Formula: <br>${incog_d}`;

  p1.textContent = "q1 = " 
  p2.textContent = "q2 = "
  p3.textContent = "f = " 

  p1.appendChild(input1);
  p2.appendChild(input2);
  p3.appendChild(input3);

  dato.appendChild(p1);
  dato.appendChild(p2);
  dato.appendChild(p3);
}

//cargas joint
function qn2Resuelto(){      
  formula.innerHTML = `Formula: <br>${incog_qn2}`;

  p1.textContent = "f = " 
  p2.textContent = "d = "

  p1.appendChild(input2);
  p2.appendChild(input3);

  dato.appendChild(p1);
  dato.appendChild(p2);
}
//cargas no join
function datosq1_2(q1){
  if(q1.checked){
    qn = "q2"
  }
  else{
    qn = "q1"
  }
  return qn
}
function delta_datosq1_2(q1){
  if(q1.checked){
    qx = "q1"
  }
  else{
    qx = "q2"
  }
  return qx
}
function q_1_2Resuelto(){      
  formula.innerHTML = incog_q1_2();
  p1.textContent = `${datosq1_2(q1)} = `
  p2.textContent = "f = " 
  p3.textContent = "d = "


  p1.appendChild(input1);
  p2.appendChild(input2);
  p3.appendChild(input3);

  dato.appendChild(p1);
  dato.appendChild(p2);
  dato.appendChild(p3);
}




function dato_d(d){
  if(kSi.checked){
    if(d.includes("cm")){
      dDef = d.replace("cm", "")
      dDef = parseFloat(dDef) / 100
    }
    else{
      dDef = d.replace("M", "");
    }
  }
  else{
    if(d.includes("M")){
      dDef = d.replace("M", "")
      dDef = parseFloat(dDef) * 100
    }
    else{
      dDef = d.replace("cm", "");
    } 
  }
  return dDef
}
function dato_f(f){
  if(kSi.checked){
    if(f.includes("din")){
      fDef = f.replace("din", "")
      fDef = parseFloat(fDef) / 100000
    }
    else{
      fDef = f.replace("N", "");
    }
  }
  else{
    if(f.includes("N")){
      fDef = f.replace("N", "")
      fDef = parseFloat(fDef) * 100000;
      console.log(fDef);
    }
    else{
      fDef = f.replace("din", "");
    } 
  }
  return fDef
}
function definiendo_d(){
  if(kSi.checked){
    if(input3.value.includes("cm")){
      dPrint = `d = ${input3.value} * 1m / 100cm = ${dato_d(input3.value)}m`;
      pResuelve4.textContent = dPrint;
      prosedimiento.appendChild(pResuelve4);
    }
  }
  else{    
    if(input3.value.includes("M")){
    dPrint = `d = ${input3.value} * 100cm / 1m = ${dato_d(input3.value)}cm`;
    pResuelve4.textContent = dPrint;
    prosedimiento.appendChild(pResuelve4);
  }
}

}
function definiendo_f_for_qn(){
  if(kSi.checked){
    if(input2.value.includes("din")){
      dPrint = `f = ${input2.value} * 1N / 100000din = ${dato_f(input2.value)}N`;
      pResuelve9.textContent = dPrint;
      prosedimiento.appendChild(pResuelve9);
    }
  }
  else{
    if(input2.value.includes("N")){
      dPrint = `f = ${input2.value} * 100000din / 1N = ${dato_f(input2.value)}din`;
      console.log(dato_f(input2.value));
      pResuelve9.textContent = dPrint;
      prosedimiento.appendChild(pResuelve9);
    }
  }
}
function definiendo_f(){
  if(kSi.checked){
    if(input3.value.includes("din")){
      dPrint = `f = ${input3.value} * 1N / 100000din = ${dato_f(input3.value)}N`;
      pResuelve4.textContent = dPrint;
      prosedimiento.appendChild(pResuelve4);
    }
  }
  else{
    if(input3.value.includes("N")){
      dPrint = `f = ${input3.value} * 100000din / 1N = ${dato_f(input3.value)}din`;
      console.log(dato_f(input3.value));
      pResuelve4.textContent = dPrint;
      prosedimiento.appendChild(pResuelve4);
    }
  }
}
//funcion DEFINITIVA  
function variables(){
  if(qn2.checked){
    if(kSi.checked){
      qn2Resuelto()
      funcionBoton()
      bResolver = boton.addEventListener("click", function(){
        definiendo_f_for_qn()
        definiendo_d()
        convercion = `q =  ${dato_f(input2.value)}N * ${dato_d(input3.value)}²m / 9x10⁹Nm²/c² `;
        pResuelve1.textContent = convercion
        prosedimiento.appendChild(pResuelve1);
        eliminacion =  `q =  ${dato_f(input2.value)}<del class="eliminacion">N</del> * ${dato_d(input3.value)}²<del class="eliminacion">m</del> / 9x10⁹<del class="eliminacion">Nm²/c²</del>  `;
        pResuelve2.innerHTML = eliminacion
        prosedimiento.appendChild(pResuelve2);
        r = Math.sqrt((parseFloat(dato_f(input2.value)) * (parseFloat(dato_d(input3.value))**2) )/ 9e9 ) 
        r = `q = ${r}c²`
        pResuelve3.textContent = r
        prosedimiento.appendChild(pResuelve3);
      })

    }
    else{
      qn2Resuelto()
      funcionBoton()
      bResolver = boton.addEventListener("click", function(){
        definiendo_f_for_qn()
        definiendo_d()
        convercion = `q =  √${dato_f(input2.value)}din * ${dato_d(input3.value)}²cm / 1 din * cm²/stc² `;
        pResuelve1.textContent = convercion
        prosedimiento.appendChild(pResuelve1);
        eliminacion =  `q =  √${dato_f(input2.value)}<del class="eliminacion">din</del> * ${dato_d(input3.value)}²<del class="eliminacion">cm</del> / 1<del class="eliminacion">din * cm²/stc²</del>  `;
        pResuelve2.innerHTML = eliminacion
        prosedimiento.appendChild(pResuelve2);
        
        r = Math.sqrt((parseFloat(dato_f(input2.value)) * (parseFloat(dato_d(input3.value))**2) )/ 1 ) 
        r = `q = ${r}stc²`
        pResuelve3.textContent = r
        prosedimiento.appendChild(pResuelve3);
      })
    }
  }
  else if((q1.checked)||(q2.checked)){
    if(kSi.checked){
      q_1_2Resuelto(datosq1_2(q1));
      funcionBoton()
      bResolver = boton.addEventListener("click", function(){
        cargaVarianteQ1Si()
        definiendo_f_for_qn()
        definiendo_d()
        convercion = `q1 || q2=  ${dato_f(input2.value)}N * ${dato_d(input3.value)}²m / 9x10⁹Nm²/c² * (${cargaResuelve1}c) `;
        pResuelve1.textContent = convercion
        prosedimiento.appendChild(pResuelve1);
        eliminacion =  `q1 || q2=  ${dato_f(input2.value)}<del class="eliminacion">N</del> * ${dato_d(input3.value)}²<del class="eliminacion">m</del> / 9x10⁹<del class="eliminacion">Nm²/c²</del> * (${cargaResuelve1}<del class="eliminacion">c</del>) `;
        pResuelve2.innerHTML = eliminacion
        prosedimiento.appendChild(pResuelve2);
        r = (parseFloat(dato_f(input2.value)) * (parseFloat(dato_d(input3.value))**2) )/ (9e9 * cargaResuelve1)
        r = `q1 || q2 = ${r}c`
        pResuelve3.textContent = r
        prosedimiento.appendChild(pResuelve3);
      });
    }
    else{
      q_1_2Resuelto(datosq1_2(q1))
      funcionBoton()
      bResolver = boton.addEventListener("click", function(){
        cargaVarianteQ1Cgs()
        definiendo_f_for_qn()
        definiendo_d()
        convercion = `q1 || q2=  ${dato_f(input2.value)}din * ${dato_d(input3.value)}²cm / 1 din * cm²/stc² * (${cargaResuelve3}stc) `;
        pResuelve1.textContent = convercion
        prosedimiento.appendChild(pResuelve1);
        eliminacion =  `q1 || q2=  ${dato_f(input2.value)}<del class="eliminacion">din</del> * ${dato_d(input3.value)}²<del class="eliminacion">cm</del> / 1<del class="eliminacion">din * cm²/stc²</del> * (${cargaResuelve3}<del class="eliminacion">stc</del>) `;
        pResuelve2.innerHTML = eliminacion
        prosedimiento.appendChild(pResuelve2);
        r = (parseFloat(dato_f(input2.value)) * (parseFloat(dato_d(input3.value))**2) )/ (1 * cargaResuelve3)
        r = `q1 || q2 = ${r}stc`
        pResuelve3.textContent = r
        prosedimiento.appendChild(pResuelve3);
      });
    }
  }
  else if(d.checked){
    if(kSi.checked){
      dResuelto()
      funcionBoton()
      bResolver = boton.addEventListener("click", function(){
        cargaVarianteQ1Si()
        cargaVarianteQ2Si()
        definiendo_f()
        convercion = `d = √ 9x10⁹Nm²/c² * (${cargaResuelve1}c * ${cargaResuelve2}c) / ${dato_f(input3.value)}N`;
        pResuelve1.textContent = convercion
        prosedimiento.appendChild(pResuelve1);
        eliminacion = `d = 9x10⁹<del class="eliminacion">N</del>m²/<del class="eliminacion">c²</del> * (${cargaResuelve1}<del class="eliminacion">c</del> * ${cargaResuelve2}<del class="eliminacion">c</del>) / ${dato_f(input3.value)}<del class="eliminacion">N</del>`;
        pResuelve2.innerHTML = eliminacion
        prosedimiento.appendChild(pResuelve2);
        r = Math.sqrt((9e9 * parseFloat(cargaResuelve1) * parseFloat(cargaResuelve2)) / parseFloat(dato_f(input3.value)));
        r = `d = ${r}m²`
        pResuelve3.textContent = r
        prosedimiento.appendChild(pResuelve3);
      });
    }
    else{
      dResuelto()
      funcionBoton()
      bResolver = boton.addEventListener("click", function(){
        cargaVarianteQ1Cgs()
        cargaVarianteQ2Cgs()
        definiendo_f()
      convercion = `d = √ 1 din cm²/stc² * (${cargaResuelve3}stc * ${cargaResuelve4}stc) / ${dato_f(input3.value)}din`;
      pResuelve1.textContent = convercion
      prosedimiento.appendChild(pResuelve1);
      eliminacion = `d = 1<del class="eliminacion">din</del>cm²/<del class="eliminacion">stc²</del> * (${cargaResuelve3}<del class="eliminacion">stc</del> * ${cargaResuelve4}<del class="eliminacion">stc</del>) / ${dato_f(input3.value)}<del class="eliminacion">div</del>`;
      pResuelve2.innerHTML = eliminacion
      prosedimiento.appendChild(pResuelve2);
      r = Math.sqrt((1 * cargaResuelve3 * cargaResuelve4) / parseFloat(dato_f(input3.value)));
      r = `d = ${r}cm²`
      pResuelve3.textContent = r
      prosedimiento.appendChild(pResuelve3);
    });
    }
  }
  else if(f.checked){
    if(kSi.checked){
      fResuelto()
      funcionBoton()
      bResolver = boton.addEventListener("click", function(){
        cargaVarianteQ1Si()
        cargaVarianteQ2Si()
        definiendo_d()
        convercion = `f = 9x10⁹Nm²/c² * (${cargaResuelve1}c * ${cargaResuelve2}c) / ${dato_d(input3.value)}m²`;
        pResuelve1.textContent = convercion
        prosedimiento.appendChild(pResuelve1);
        eliminacion = `f = 9x10⁹N<del class="eliminacion">m²</del>/<del class="eliminacion">c²</del> * (${cargaResuelve1}<del class="eliminacion">c</del> * ${cargaResuelve2}<del class="eliminacion">c</del>) / ${dato_d(input3.value)}<del class="eliminacion">m²</del>`;
        pResuelve2.innerHTML = eliminacion
        prosedimiento.appendChild(pResuelve2);
        r = (9e9 * cargaResuelve1 * cargaResuelve2) / (parseFloat(dato_d(input3.value))**2);
        r = `f = ${r}N`
        pResuelve3.textContent = r
        prosedimiento.appendChild(pResuelve3);
      });

    }
    else{
      fResuelto()
      funcionBoton()
      bResolver = boton.addEventListener("click", function(){
        cargaVarianteQ1Cgs()
        cargaVarianteQ2Cgs()
        definiendo_d()
        convercion = `f = 1 din cm² * (${cargaResuelve3}c * ${cargaResuelve4}stc) / ${dato_d(input3.value)}m²`;
        pResuelve1.textContent = convercion
        prosedimiento.appendChild(pResuelve1);
        eliminacion = `f = 1 din<del class="eliminacion"> cm²</del>/<del class="eliminacion">stc²</del> * (${cargaResuelve3}<del class="eliminacion">stc</del> * ${cargaResuelve4}<del class="eliminacion">stc</del>) / ${dato_d(input3.value)}<del class="eliminacion">cm²</del>`;
        pResuelve2.innerHTML = eliminacion
        prosedimiento.appendChild(pResuelve2);
        r = (1 * cargaResuelve3 * cargaResuelve4) / (parseFloat(dato_d(input3.value))**2);
        r = `f = ${r}din`
        pResuelve3.textContent = r
        prosedimiento.appendChild(pResuelve3);
      });
    }
  }
  else{
    alert("Lo sentimos, pero debe seleccionar las obciones corespondiente");
  }

  // next.disabled = true;
}





let reload = document.getElementById("reload");
reiniciar = reload.addEventListener("click", function(){
  location.reload();
});

let f = document.getElementById("f");
let d = document.getElementById("d");
let q1 = document.getElementById("q1");
let q2 = document.getElementById("q2");
let qn2 = document.getElementById("q²");
let kSi = document.getElementById("kSi");
let kCgs= document.getElementById("kCgs");

//CAJAS
dato = document.getElementById("datos"); 
formula = document.getElementById("formula");
prosedimiento = document.getElementById("prosedimiento");
//p de refuerzo
pResuelve1 = document.createElement("p");
pResuelve2 = document.createElement("p");
pResuelve3 = document.createElement("p");
pResuelve4 = document.createElement("p");
pResuelve5 = document.createElement("p");
pResuelve6 = document.createElement("p");
pResuelve7 = document.createElement("p");
pResuelve8 = document.createElement("p");
pResuelve9 = document.createElement("p");
pResuelve10 = document.createElement("p");

//P
let p1 = document.createElement("p");
let p2 = document.createElement("p");
let p3 = document.createElement("p");
let p4 = document.createElement("p");

//inputs
let input1 = document.createElement("input");
let input2 = document.createElement("input");
let input3 = document.createElement("input");
let input4 = document.createElement("input");
input1.type = "text"
input2.type = "text"
input3.type = "text"
input4.type = "text"
input1.placeholder = "insert"
input2.placeholder = "insert"
input3.placeholder = "insert"
input4.placeholder = "insert"
input1.classList.add("input_datos");
input2.classList.add("input_datos");
input3.classList.add("input_datos");
input4.classList.add("input_datos");

//incogs
incog_f = `f = k * (q1 * q2) / d²`
incog_d = `d = √ k * (q1 * q2) / f`
function incog_q1_2(){
  incogqn = `Formula: <br>${delta_datosq1_2(q1)} = f *  d² / k * ${datosq1_2(q1)} `
  return incogqn
}
incog_qn2 = `q = √ f * d² / k`


boton = document.getElementById("next");
 boton.addEventListener("click", variables);










 

    // var miDiv = document.getElementById("miDiv");
    // var miBoton = document.getElementById("miBoton");
  
    // miBoton.addEventListener("click", function() {
    //   var input = document.createElement("input");
    //   input.type = "text";
    //   miDiv.appendChild(input);
  
    //   var boton = document.createElement("button");
    //   boton.textContent = "Multiplicar";
    //   miDiv.appendChild(boton);
  
    //   boton.addEventListener("click", function() {
    //     var valor = input.value;
    //     var resultado = parseFloat(valor) * 2;
  
    //     var resultadoParrafo = document.createElement("p");
    //     resultadoParrafo.textContent = "El resultado es: " + resultado;
    //     miDiv.appendChild(resultadoParrafo);
  
    //     // Desactivar el botón de multiplicar
    //     boton.disabled = true;
    //   });
  
    //   // Desactivar el botón de agregar input y botón de multiplicar
    //   miBoton.disabled = true;
    // });
  