let botao = document.querySelector("#botao");
let novaImagem = document.querySelector("#imagem");
let novoEstado = document.querySelector("#fig");

botao.addEventListener("click", () => {
  console.log("Click");
  mudarImg(novaImagem, arrayImagens)
  mudaEstado()
  
  
});

let arrayImagens = [];
let est0 = "Monkey D.Luffy";
let est1 = "Gear One";
let est2 = "Snake Man";
let est3 = "Bound Man";
let est4 = "JoyBoy"
let arrayEstado = [est0, est1, est2, est3, est4];
let ind = 0;
let est = 0


for (let ind = 0; ind < 5; ind++) {
  arrayImagens.push(`./assets/img/luffy${ind}.png`);
  if(arrayImagens.length > 4){
    novaImagem.src = arrayImagens[0]
}
  
}
for (let est = 0; est < arrayEstado.length; est++) {
       arrayEstado[est];
      console.log(arrayEstado[est])
}
    



function mudarImg(novaImagem ,arrayImagens ){
    novaImagem.src = arrayImagens[ind]
    ind++
    if (ind > 4) {
        ind = 0
    }
    return
}
function mudaEstado() {
    
    const fig = document.querySelector('#fig');
    fig.textContent = `${arrayEstado[est] }`;
    est++    
    if (est > 4) {
        est = 0
    }
    return

}
