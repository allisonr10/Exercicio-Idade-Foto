function verificar() {
  var data = new Date();
  var ano = data.getUTCFullYear();
  var fano = document.getElementById('txtano');
  var res = document.getElementById('res');
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    // irá verificar se
    //não foi digitado nenhum dado ou se foi digitado um valor maior do que
    // o ano atual
    window.alert('[ERRO] Verifique os dados e tente novamente!');
  } else {
    var fsex = document.getElementsByName('radsex');
    var idade = ano - Number(fano.value);
    var genero = '';
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');
    if (fsex[0].checked) {
      genero = 'homem';
      document.body.style.background = '#515154';
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', 'imagens/criancam.jpg');
      } else if (idade < 21) {
        //Jovem
        img.setAttribute('src', 'imagens/jovemm.jpg');
      } else {
        //adulto
        img.setAttribute('src', 'imagens/idosom.jpg');
      }
    } else if (fsex[1].checked) {
      genero = 'mulher';
      document.body.style.background = '#e2cd9f';
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', 'imagens/criancaf.jpg');
      } else if (idade < 21) {
        //Jovem
        img.setAttribute('src', 'imagens/jovemf.jpg');
      } else {
        //adulto
        img.setAttribute('src', 'imagens/idosof.jpg');
      }
    }
  }
  res.style.textAlign = 'center';
  res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos</p>`;
  res.appendChild(img);
}
