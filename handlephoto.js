function handleclick1() {
    var div = document.getElementById('divbro');
    div.innerHTML = '<div class="fullscreen"><img class="imagefullscreen"src="images/dossi_jw.jpg" alt="dossi_jw" onclick="handleclickback()" /></div>';

}

function handleclick2() {
    var div = document.getElementById('divbro');
    div.innerHTML = '<div class="fullscreen"><img class="imagefullscreen"src="images/kaglinn með kók.jp.jpg" alt="kaglinn með kók.jp" onclick="handleclickback()" /></div>';

}

function handleclick3() {
    var div = document.getElementById('divbro');
    div.innerHTML = '<div class="fullscreen"><img class="imagefullscreen"src="images/marques.jpg" alt="marques" onclick="handleclickback()" /></div>';

}

function handleclick4() {
    var div = document.getElementById('divbro');
    div.innerHTML = '<div class="fullscreen"><img class="imagefullscreen"src="images/peter.jpg" alt="peter" onclick="handleclickback()" /></div>';

}



function handleclickback() {
    var div = document.getElementById('divbro');
    div.innerHTML = '    <div id="divbro"><div class="row" ><div class="column"  onclick="handleclick1()" ><img class="image"src="images/dossi_jw.jpg" alt="dossi_jw" /></div>  <div class="column"><img class="image" src="images/kaglinn með kók.jp.jpg" alt="" onclick="handleclick2()" ></div>  <div class="column"><img class="image"src="images/marques.jpg" alt="" onclick="handleclick3()"></div>  <div class="column"><img class="image"src="images/peter.jpg" alt="" onclick="handleclick4()"></div> </div> </div>';
}