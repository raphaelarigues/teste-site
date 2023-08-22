/*
formas mais comuns de se iniciar m codigo jQuery

$(function(){
    alert("olá mundo")
})


$(document).readyState(function(){
    alert("olá mundo")
})

ambas são executadas asssim q o site carrega,
sem esperar carregar todos os elementos do site -
imagens, vídeos, gifs, links, etc. pra isso,
use a função q está logo abaixo:

$(window).on('load', function(){
    alert("olá mundo")
})
*/

$(function(){
    function MudaArtigo1(){
        $('.artigo1')
        .css('background-color', 'purple')
        .css('border-radius', '50px')
        .css('width', '300px')
        /*
            - pode colocar a cor em hex tb
            - qnd referenciar o elemento do css a ser
                alterado, leve em consideração o tipo de
                elemento. ex: padding é um elemento q pode ser
                definido 4x em apenas uma chamada dentro de
                uma stylesheet (padding: 0px 3px, 4px 70px),
                mas, qnd for alterar esse tipo de elemento
                dentro de uma func js, deve-se especificar
                qual parte do elemento será afetado.
                exemplo (margin-left: 15px)
            - vc pode definir qnts elementos forem necessários,
                basta vc colocar '.css' e continuar definindo
                o q vc desejar
        */
        setTimeout(function(){
            $('#teste')
            .css('background-color', 'green')
            .css('border-radius', '10px')
            .css('height', '40px')
            .css('width', '200px')
            .css('text-align', 'center')
            .css('padding-top', '10px')
        }, 2000)
        //muda os elementos indicados dps de 2s

        setTimeout(function(){
            $('.artigo1 > p')
            .css('font-size', '20px')
            .css('color', 'yellow')
        }, 3000)
        //pra poder atacar o paragrafo dentro da div

        $(function(){
            console.log($('#teste > p').css('color'))
        })
        /*
            qnd vc define um unico elemento, ao invés de
            alterar o elemento, vc vai coletar o dado q
            vc selecionou, nesse caso, no console
        */

        setTimeout(function(){
            console.log($('#teste > p').css('color'))
        }, 3500)
        //vc coleta os dados dps de 3,5s
    }
    
    function MudaArtigo2(){
        $(function(){
            $('.artigo1').click(function(){
                $('.artigo2').css('background-color', 'gray')
            })
            $('.artigo1').hover(function(){
                $('.artigo2')
                .css('background-color', 'red')
                .css('color', 'white')
            }, function(){
                /*
                 a segunda definição do hover serve para
                 qnd o mouse sair de cima do elemento
                 selecionado, cancelando a ação desejada
                */
                $('.artigo2')
                .css('background-color', 'orange')
                .css('color', 'blue')
            })
        })
        /*
         posso criar uma func pra um elemento q
         seja dependente de uma ação em outro elemento,
         seja um clique, hover, color, etc
        */
    }

    function MudaSelect(){
        $('select').change(function(){
            alert('Mudou o select')
        })
    }

    function MudaCorBotao(){
        $('textarea').focus(function(){
            $('.btn')
            .css('background-color', 'blue')
            .css('color', 'white')
            .css('cursor', 'pointer')
        })
        $('textarea').blur(function(){
            $('.btn')
            .css('background-color', 'gray')
            .css('color', 'balck')
            .css('cursor', 'default')
        })
        /*
         'focus' serve para qnd a textarea for selecionada
         pelo usuário, enquanto o 'blur' serve pra qnd o
         usuário clicar fora da textarea
        */
    }

    MudaArtigo1()
    MudaArtigo2()
    MudaSelect()
    MudaCorBotao()
})