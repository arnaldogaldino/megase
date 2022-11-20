var loteriasCaixaJson = require('loterias-caixa-json');
var fs = require('fs');
var repository = require('./repository');
var logger = require('./logger');


loteriasCaixaJson.megaSena('./')
  .then((jsonArray) => {
    var json = JSON.stringify(jsonArray);

    fs.writeFile('megasena.json', json,'utf8',(error)=>{
      //logger.logConsoleDebug("<#[Error MySql]#>: " + error);
    });

    let headlinha = `Concurso,DataSorteio,Dezena1,Dezena2,Dezena4,Dezena5,Dezena3,Dezena6,ArrecadacaoTotal,GanhadoresSena,Cidade,UF,RateioSena,GanhadoresQuina,RateioQuina,GanhadoresQuadra,RateioQuadra,Acumulado,ValorAcumulado,EstimativaPremio,AcumuladoMegaVirada\n`;
    let linha = headlinha;
    for(let i = 0; i < jsonArray.length; i++) {
      let element = jsonArray[i];
      if(!isNaN(element.Concurso))       
        linha += `${element.Concurso};${element.DataSorteio};${element.Dezena1};${element.Dezena2};${element.Dezena4};${element.Dezena5};${element.Dezena3};${element.Dezena6};${element.Arrecadacao_Total};${element.Ganhadores_Sena};${element.Cidade};${element.UF};${element.Rateio_Sena};${element.Ganhadores_Quina};${element.Rateio_Quina};${element.Ganhadores_Quadra};${element.Rateio_Quadra};${element.Acumulado};${element.Valor_Acumulado};${element.Estimativa_Prêmio};${element.Acumulado_Mega_da_Virada}\n`;
    }

    fs.writeFile('megasena.csv', `${linha}`,'utf8',(error)=>{ });
    /*
    repository.myQuery.connect(function(error) {
      if (error) logger.logConsoleDebug("<#[Error MySql]#>: " + error);

      for(let i = 0; i < jsonArray.length; i++) {
        let element = jsonArray[i];
        
        let linha = `${element.Concurso};${element.DataSorteio};${element.Dezena1};${element.Dezena2};${element.Dezena4};${element.Dezena5};${element.Dezena3};${element.Dezena6};${element.Arrecadacao_Total};${element.Ganhadores_Sena};${element.Cidade};${element.UF};${element.Rateio_Sena};${element.Ganhadores_Quina};${element.Rateio_Quina};${element.Ganhadores_Quadra};${element.Rateio_Quadra};${element.Acumulado};${element.Valor_Acumulado};${element.Estimativa_Prêmio};${element.Acumulado_Mega_da_Virada}\n`;
    fs.writeFile('megasena.csv', json,'utf8',(error)=>{
      //logger.logConsoleDebug("<#[Error MySql]#>: " + error);
    });

        if(!isNaN(element.Concurso)) {
          var sql = `INSERT INTO concursos (Concurso,DataSorteio,Dezena1,Dezena2,Dezena4,Dezena5,Dezena3,Dezena6,ArrecadacaoTotal,GanhadoresSena,Cidade,UF,RateioSena,GanhadoresQuina,RateioQuina,GanhadoresQuadra,RateioQuadra,Acumulado,ValorAcumulado,EstimativaPremio,AcumuladoMegaVirada) VALUES ('${element.Concurso}',FROM_UNIXTIME('${element.DataSorteio}'),'${element.Dezena1}','${element.Dezena2}','${element.Dezena4}','${element.Dezena5}','${element.Dezena3}','${element.Dezena6}','${element.Arrecadacao_Total}','${element.Ganhadores_Sena}','${element.Cidade}','${element.UF}','${element.Rateio_Sena}','${element.Ganhadores_Quina}','${element.Rateio_Quina}','${element.Ganhadores_Quadra}','${element.Rateio_Quadra}','${element.Acumulado}','${element.Valor_Acumulado}','${element.Estimativa_Prêmio}','${element.Acumulado_Mega_da_Virada}')`;  
          repository.myQuery.query(sql, function (error, result) {
            // if (error) {
            //   logger.logConsoleDebug("<#[Error MySql]#>: " + error);
            //   logger.logConsoleDebug(JSON.stringify(element));
            // } else {
            //   logger.logConsoleDebug("1 record inserted, ID: " + result.insertId);
            // }
          });
        }
      }
      repository.myQuery.end();
    });*/
  });
 
