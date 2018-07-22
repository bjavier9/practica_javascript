//operadores 
function operadores(){

   let x = 10, y=20

   document.getElementById('operadores').innerHTML=`<ul>
   <p>Operadores</p>
   <li>+= ${x+=y}</li>
   <li>-= ${x-=y}</li>
   <li>*= ${x*=y}</li>
   <li>/= ${x/=y}</li>
   <li>%= ${x%=y}</li>
   </ul>
   `
} 

function operadores_1(){
    document.getElementById('operadores1').innerHTML=`
    <ul>
    <p><strong>Operadores de comparacion</strong></p>   
    <li>== devuelve un true si ambos son iguales</li>
    <li>=== devuelve un true si ambos operadores son iguales y del mismo tipo</li>
    <li>!= devuelve un true si ambos operadores no son iguales</li>
    <li>!== devuelve un true si ambos operadores no son iguales ni son del mismo tipo.</li>
    <li>> devuelve un true si el operadore de la izq es mayor que el de la derecha.</li>
    <li>>= devuelve un true si el operador de la izquerda es mayor o igual que el de la derecha.</li>
    <li> '(<)' devuelv e un true si el operdaor de la izquierda es menor .</li>
    <li>'<=' devuelve un true si el operador de la izquierda es menor o igual al de la derecha.</li>    
</ul>
    
    `
}
function operadoresbit(){
document.getElementById('operadoresbit').innerHTML=`<ol>
    <li type="circle">Operador and ${5&1}</li>
    <li type="circle">Operador Or ${5|1}</li>
    <li type="circle">Operador NOT ${~ 5}</li>
    <li type="circle">Operador XOR ${5^1}</li>
    <li type="circle"></li>
</ol>
<table>
    <caption>Tabla 3.7 Precedencia de operadores</caption>
    <thead>
     <tr>
      <th scope="col">Tipo de operador</th>
      <th scope="col">operadores individuales</th>
     </tr>
    </thead>
    <tbody>
     <tr>
      <td>miembro</td>
      <td><code>. []</code></td>
     </tr>
     <tr>
      <td>llamar / crear instancia</td>
      <td><code>() new</code></td>
     </tr>
     <tr>
      <td>negación / incremento</td>
      <td><code>! ~ - + ++ -- typeof void delete</code></td>
     </tr>
     <tr>
      <td>multiplicación / división</td>
      <td><code>* / %</code></td>
     </tr>
     <tr>
      <td>adición / sustracción</td>
      <td><code>+ -</code></td>
     </tr>
     <tr>
      <td>desplazamiento binario</td>
      <td><code>&lt;&lt; &gt;&gt; &gt;&gt;&gt;</code></td>
     </tr>
     <tr>
      <td>relación</td>
      <td><code>&lt; &lt;= &gt; &gt;= in instanceof</code></td>
     </tr>
     <tr>
      <td>igualdad</td>
      <td><code>== != === !==</code></td>
     </tr>
     <tr>
      <td>AND binario</td>
      <td><code>&amp;</code></td>
     </tr>
     <tr>
      <td>XOR binario</td>
      <td><code>^</code></td>
     </tr>
     <tr>
      <td>OR binario</td>
      <td><code>|</code></td>
     </tr>
     <tr>
      <td>AND lógico</td>
      <td><code>&amp;&amp;</code></td>
     </tr>
     <tr>
      <td>OR lógico</td>
      <td><code>||</code></td>
     </tr>
     <tr>
      <td>condicional</td>
      <td><code>?:</code></td>
     </tr>
     <tr>
      <td>asignación</td>
      <td><code>= += -= *= /= %= &lt;&lt;= &gt;&gt;= &gt;&gt;&gt;= &amp;= ^= |=</code></td>
     </tr>
     <tr>
      <td>coma</td>
      <td><code>,</code></td>
     </tr>
    </tbody>
   </table>

`
}
