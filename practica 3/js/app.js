//eventos 
function ganso(){
    document.getElementById('app').innerHTML=`<img src="https://k60.kn3.net/taringa/2/7/9/8/3/8/16/konoha-chan/B3E.jpg">`

}


document.getElementById('gei').addEventListener('keydown',cortec)
function cortec(){
    document.getElementById('gei').style.backgroundColor= 'orange';
}
document.getElementById('gei').addEventListener('keyup',levantc)
function levantc(){
    document.getElementById('gei').style.backgroundColor = 'black'
}
function alejc(){
    document.getElementById('app1').innerHTML=`<iframe width="560" height="315" src="https://www.youtube.com/embed/t7lM7Bn16Zg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
}
function acerc(){
    document.getElementById('vag').innerHTML=`<img src="https://i.ebayimg.com/images/g/WMYAAOSwHIlZ1oqq/s-l300.jpg" alt=""><br><p>c..pellin</p>`
}
function cambic(){
    var x = document.getElementById('aq').value
    document.getElementById('app2').innerHTML=`nose que estas diciendo ${x}`
}