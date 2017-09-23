<!DOCTYPE html>
<title/> Caderneta do idoso </title/>
<html lang="pt">
  
<head>
  <!-- REACT -->
  <script src="https://unpkg.com/react@15.3.2/dist/react.js"></script>
  <script src="https://unpkg.com/react-dom@15.3.2/dist/react-dom.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
  <script src="https://npmcdn.com/react-router@3.0.2/umd/ReactRouter.min.js"></script>
  <!-- GOOGLE FONTS -->
  <link rel='stylesheet' type='text/css' href='https://fonts.googleapis.com/css?family=Open+Sans'>
  <!-- BOOTSTRAP -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <!-- JQUERY -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

  <style>
    body {
      background-color: #363530;
      padding: 20px;
      margin: 0;
    }
    p, span, label, input {
      font-family: Open Sans, Arial, sans-serif;
    }
    h1, h2, p, ul, li {
      font-family: Open Sans, Helvetica, Arial, sans-serif;
      font-weight: 100;
    }
    h1, h2 {
      color: #F5F1DA;
    }
    div h2 {
    	color: #363530;
    }
    ul.header li {
      display: inline;
      list-style-type: none;
      margin: 0;
    }
    ul.header {
      background-color: #FFF;
      padding: 0;
    }
    ul.header li a {
      color: #757368;
      font-weight: bold;
      text-decoration: none;
      padding: 20px;
      display: inline-block;
    }
    .content {
      background-color: #FFF;
      padding: 20px;
    }
    .content h2 {
      padding: 0;
      margin: 0;
    }
    .content li {
      margin-bottom: 10px;
    }
    .active {      
      background-color: #DBD8C3;
      text-decoration: underline;     
    }
    .progress {
    	width: 25%;
    	margin-bottom: 3px;
    }
  </style>
</head>
  
<body>
  
  <div id="container" class="container-fluid">
  </div>
  
  <script type="text/babel">
    var destination = document.querySelector("#container");
    var Home = React.createClass({
        render: function() {
            return (
              	<div className="container" >
              		<form method="post">
						<h2>DADOS PESSOAIS</h2>                  
						<label>Nome:</label><br/>
						<input type="text" placeholder="Nome" className="answers-1" id="1-name" name="answers[1[name]]" />
						<br/><br/>
						<label>Apelido/nome social:</label><br/>
						<input type="text" placeholder="Nick Name" className="answers-2" id="1-nickname" name="answers[1[nickname]]" />
						<br/><br/>
						<label>Nº do cartão SUS :</label><br/>
						<input type="text" placeholder="Nº do cartão SUS " className="answers-3" id="1-cardnumber" name="answers[1[cardnumber]]" />
						<br/><br/>
						<label>Foto:</label><br/>
						<label className="custom-file">
						<input type="file" className="custom-file-input answers-4" id="1-photo" name="answers[1[photo]]" />
						<span className="custom-file-control"></span>
						</label>
						<br/><br/>
						<label>Documento de identidade :</label><br/>
						<input type="text" placeholder="Documento de identidade" className="answers-5" id="1-document" name="answers[1[Document]]" />
						<br/><br/>
						<label>CPF:</label><br/>
						<input type="text" placeholder="CPF" className="answers-5" id="1-document" name="answers[1[Document]]" />
						<br/><br/>
						<label>Nome completo da mãe:</label><br/>
						<input type="text" placeholder="Nome completo da mãe" className="answers-6" id="1-monthersname" name="answers[1[monthersname]]" />
						<br/><br/>
						<label>Data de nascimento:</label><br/>
						<input type="date" placeholder="Data de nascimento" className="answers-7" id="1-dateofbirth" name="answers[1[dateofbirth]]"/>
						<br/><br/>
						<label>Sexo:</label><br/>
						<input type="radio" className="answers-8" id="1-sexuality-f" name="answers[1[sexuality]]" value="F" /> Feminino
						<input type="radio" className="answers-8" id="1-sexuality-m" name="answers[1[sexuality]]" value="M" />Masculino
						<br/><br/>
						<label>Município de nascimento/UF:</label><br/>
						<input type="text"  placeholder="Município de nascimento/UF" className="answers-9" id="1-countryofbirth" name="answers[1[countryofbirth]]" />
						<br/><br/>
						<label>Nacionalidade:</label><br/>
						<input type="radio" className="answers-10" id="1-nationality" name="answers[1[nationality]]" value="brasileira" /> Brasileira
						<input type="radio" className="answers-10" id="1-nationality" name="answers[1[nationality]]" value="naturalizado"/>Naturalizado
						<input type="radio" className="answers-10" id="1-nationality" name="answers[1[nationality]]" value="estrageira" />Estrageira
						<br/><br/>
						<label>País de nascimento:</label><br/>
						<input type="text"  placeholder="País de nascimento" className="answers-10" id="1-birthparents" name="answers[1[birthparents]]" />
						<br/><br/>
						<label>Sabe ler e escrever? </label><br/>
						<input type="radio" className="answers-11" id="1-readwrite-y" name="answers[1[readwrite]]" value="y" /> Sim
						<input type="radio" className="answers-11" id="1-readwrite-n" name="answers[1[readwrite]]" value="n" /> Não
						<br/><br/>
						<label>Escolaridade:</label><br/>
						<input type="radio" className="answers-12" id="1-sholarity-n" name="answers[1[scholarity]]" value="nothing" />nenhuma
						<input type="radio" className="answers-12" id="1-sholarity-1/3" name="answers[1[scholarity]]" value="from1to3years" />
						de 1 a 3 anos
						<input type="radio" className="answers-12" id="1-sholarity-4/7" name="answers[1[scholarity]]" value="from4to7years" />
						de 4 a 7 anos
						<input type="radio" className="answers-12" id="1-sholarity-8" name="answers[1[scholarity]]" value="nenhuma" />
						8 anos ou mais
						<br/><br/>
						<label>Raça/cor:</label><br/>
						<input type="radio" className="answers-13" id="1-breedcolor-white"   name="answers[1[breedcolor]]" value="white" />Branca
						<input type="radio" className="answers-13" id="1-breedcolor-black"   name="answers[1[breedcolor]]" value="black" />Preto
						<input type="radio" className="answers-13" id="1-breedcolor-brown"   name="answers[1[breedcolor]]" value="brown" />Parda
						<input type="radio" className="answers-13" id="1-breedcolor-yellow"  name="answers[1[breedcolor]]" value="yellow" />Amarela
						<input type="radio" className="answers-13" id="1-breedcolor-undeclared" name="answers[1[breedcolor]]" value="undeclared" /> Não declarada
						<input type="text" placeholder="Qual etnia" className="answers-13" id="1-breedcolor-what" name="answers[1[breedcolor]]" />
						<br/><br/>
						<label>Tem religião?:</label><br/>
						<input type="radio" className="answers-14" id="1-religion-y" name="answers[1[religion]]" value="y" />Sim
						<input type="radio" className="answers-14" id="1-religion-n" name="answers[1[religion]]" value="n" />Não
						<input type="text" placeholder="Qual?" className="answers-14" id="1-religion-w" name="answers[1[religion]]" />
						<br/><br/>

						<label>OCUPAÇÃO/OCUPAÇÃO PROFISSIONAL:</label><br/>
						<input type="text"  placeholder="primary profession" className="answers-16" id="1-primaryprofession" name="answers[1[primaryprofession]]" />
						<br/><br/>
						<label>Situação conjugal:</label><br/>
						<input type="radio" className="answers-17" id="1-maritalstatus-s" name="answers[1[maritalstatus]]" value="notmarried" /> Solteiro(a)
						<input type="radio" className="answers-17" id="1-maritalstatus-m" name="answers[1[maritalstatus]]" value="married" /> Casado(a)/convivio com parceiro(a)
						<input type="radio" className="answers-17" id="1-maritalstatus-d" name="answers[1[maritalstatus]]" value="divorced" /> Divorciado(a)/separado(a)
						<input type="radio" className="answers-17" id="1-maritalstatus-w" name="answers[1[maritalstatus]]" value="widower" /> Viúvo(a)
						<input type="radio" className="answers-17" id="1-maritalstatus-o" name="answers[1[maritalstatus]]" value="Other" /> Outra
						<input type="text"  placeholder=" Desde quando(ano)?" className="answers-17" id="1-maritalstatus-sw" name="answers[1[maritalstatus]]" />
						<br/><br/>
						<label>Unidade básica de súade que frequenta:</label><br/>
						<input type="text"  placeholder="Unidade básica de súade que frequenta" className="answers-18" id="1-Basic unit" name="answers[1[Basicunit]]" />
						<br/><br/>
						<label>Tem alguma alergia de maior gravidade? Especificar:</label><br/>
						<input type="text"  placeholder="alergia de maior gravidade?" className="answers-19" id="1-Major allergy" name="answers[1[maritalstatus]]" />
						<br/><br/>
						<label>Tem alguma deficiência? :</label><br/>
						<input type="radio" className="answers-20" id="1-deficiency-y" name="answers[1[deficiency]]" value="yes" /> Sim
						<input type="radio" className="answers-20" id="1-deficiency-n" name="answers[1[deficiency]]" value="No" /> Não
						<br/><br/>
						<label>Qual? :</label><br/>
						<input type="radio"  className="answers-21" id="1-whatdeficiency-a" name="answers[1[whatdeficiency]]" value="Auditory" />Auditiva
						<input type="radio"  className="answers-21" id="1-whatdeficiency-v" name="answers[1[whatdeficiency]]" value="visual" />Visual
						<input type="radio"  className="answers-21" id="1-whatdeficiency-i" name="answers[1[whatdeficiency]]" value="Intellectual/cognitive" />Intelectual/Cognitiva
						<input type="radio"  className="answers-21" id="1-whatdeficiency-p" name="answers[1[whatdeficiency]]" value="physical" />Física
						<input type="radio"  className="answers-21" id="1-whatdeficiency-o" name="answers[1[whatdeficiency]]" value="other" />Outra
						<br/>
						<br/>
						<label>Especificar:</label><br/>
						<input type="text"  placeholder="Especificar" className="answers-21" id="1-specify" name="answers[1[whatdeficiency]]" />
						<br/>
						<br/>
						<label>Grupo sanguíneo:</label><br/>
						<input type="text"  placeholder="Grupo sanguíneo" className="answers-22" id="1-bloodtype" name="answers[1[bloodtype]]" />
						<br/>
						<br/>
						<label>Fator RH:</label>
						<br/>
						<input type="text"  placeholder="Fator RH" className="answers-23" id="1-rhfactor" name="answers[1[rhfactor]]" />

						<h2>ENDEREÇO RESIDENCIAL</h2>
						<label>Rua avenida praça</label><br/>
						<input type="text"  placeholder="Rua avenida praça" className="answers-24" id="1-street" name="answers[1[street]]" />
						<br/><br/>
						<label>N°</label><br/>
						<input type="Number" className="answers-25" id="1-number" name="answers[1[number]]" />
						<br/><br/>
						<label>Complemento</label><br/>
						<input type="text" placeholder="complemento" className="answers-26" id="1-complement" name="answers[1[complement]]" />
						<br/><br/>
						<label>Bairro</label><br/>
						<input type="text" placeholder="bairro" className="answers-26" id="1-distric" name="answers[1[distric]]" />
						<br/><br/>
						<label>Ponto de referência</label><br/>
						<input type="text" placeholder="Ponto de referência" className="answers-26" id="1-referencepoint" name="answers[1[referencepoint]]" />
						<br/><br/>
						<label>Cep</label><br/>
						<input type="text" placeholder="Cep" className="answers-27" id="1-zipcode" name="answers[1[zipcode]]"/>
						<br/><br/>
						<label>Município</label><br/>
						<input type="text" placeholder="Município" className="answers-28" id="1-country" name="answers[1[country]]" />
						<br/><br/>
						<label>Estado</label><br/>
						<input type="text" placeholder="Estado" className="answers-29" id="1-state" name="answers[1[state]]" />
						<br/><br/>
						<label>Telefone</label><br/>
						<input type="telephone" className="answers-29" id="1-telephone" name="answers[1[telephone]]" />
						<br/><br/>
						<label>Celular</label><br/>
						<input type="telephone" className="answers-30" id="1-cellphone" name="answers[1[cellphone]]" />
						<br/><br/>
						<label>Email</label><br/>
						<input type="email" className="answers-31" id="1-email" name="answers[1[email]]" />
						<br/><br/>

						<h2>1.B INFORMAÇÕES SOCIAIS</h2>
						<label>Você mora sozinho(a)?</label><br/>
						<input type="radio" className="answers-32" id="1.b-livingalone-y" name="answers[1.b[livingalone]]" value="y" />Sim
						<input type="radio" className="answers-32" id="1.b-livingalone-n" name="answers[1.b[livingalone]]" value="n" />Não
						<br/><br/>
						<label>Você mora com familiares?</label><br/>
						<input type="radio" className="answers-33" id="1.b-livefamily-y" name="answers[1.b[livefamily]]" value="y" />Sim
						<input type="radio" className="answers-33" id="1.b-livefamily-n" name="answers[1.b[livefamily]]" value="n" />Não
						<br/><br/>
						<label>Você mora com seu(sua) cônjuge ou companheiro(a)?</label><br/>
						<input type="radio" className="answers-34" id="1.b-lifepartner-y" name="answers[1.b[lifepartner]]" value="y" />Sim
						<input type="radio" className="answers-34" id="1.b-lifepartner-n" name="answers[1.b[lifepartner]]" value="n" />Não
						<br/><br/>
						<label>Você reside em instituição de longa permanência para idosos (ILPI), abrigo ou casa de repouso?</label><br/>
						<input type="radio" className="answers-35" id="1.b-resthome-y" name="answers[1.b[resthome]]" value="y" />Sim
						<input type="radio" className="answers-35" id="1.b-resthome-n" name="answers[1.b[resthome]]" value="n" />Não
						<br/><br/>
						<label>Nos últimos 30 dias, você se encontrou com amigos ou familiares para conversar ou fazer alguma atividade, como ir ao cinema ou à igreja, passear ou caminhar junto?</label><br/>
						<input type="radio" className="answers-36" id="1.b-walk-y" name="answers[1.b[walk]]" value="y" />Sim
						<input type="radio" className="answers-36" id="1.b-walk-n" name="answers[1.b[walk]]" value="n" />Não
						<br/><br/>
						<label>Em caso de necessidade, você conta com alguém para acompanhá-lo(a) à unidade de saúde ou a uma consulta?</label><br/>
						<input type="radio" className="answers-37" id="1.b-Monitoring-y" name="answers[1.b[Monitoring]]" value="y" />Sim
						<input type="radio" className="answers-37" id="1.b-Monitoring-n" name="answers[1.b[Monitoring]]" value="n" />Não
						<br/><br/>
						<label>Você tem fácil acesso aos serviços de farmácia, padaria ou supermercado?</label><br/>
						<input type="radio" className="answers-38" id="1.b-access-y" name="answers[1.b[access]]" value="y" />Sim
						<input type="radio" className="answers-38" id="1.b-access-n" name="answers[1.b[access]]" value="n" />Não
						<br/><br/>
						<label>Você tem fácil acesso a transporte? </label><br/>
						<input type="radio" className="answers-39" id="1.b-transport-y" name="answers[1.b[transport]]" value="y" />Sim
						<input type="radio" className="answers-39" id="1.b-transport-n" name="answers[1.b[transport]]" value="n" />Não
						<br/><br/>
						<label>Você trabalha atualmente? </label><br/>
						<input type="radio" className="answers-40" id="1.b-work-y" name="answers[1.b[work]]" value="y" />Sim
						<input type="radio" className="answers-40" id="1.b-work-n" name="answers[1.b[work]]" value="n" />Não
						<br/><br/>
						<label>Você recebe aposentadoria ou pensão? </label><br/>
						<input type="radio" className="answers-41" id="1.b-retirement-y" name="answers[1.b[retirement]]" value="y" />Sim
						<input type="radio" className="answers-41" id="1.b-retirement-n" name="answers[1.b[retirement]]" value="n" />Não
						<br/><br/>
						<label>Você recebe benefício de prestação continuada (BPC)?</label><br/>
						<input type="radio" className="answers-42" id="1.b-benefit-y" name="answers[1.b[benefit]]" value="y" />Sim
						<input type="radio" className="answers-42" id="1.b-benefit-n" name="answers[1.b[benefit]]" value="n" />Não
						<br/><br/>
						<label>Você recebe benefícios do Bolsa-Família?</label><br/>
						<input type="radio" className="answers-43" id="1.b-Bolsa-Familia-y" name="answers[1.b[BolsaFamilia]]" value="y" />Sim
						<input type="radio" className="answers-43" id="1.b-Bolsa-Familia-n" name="answers[1.b[BolsaFamilia]]" value="n" />Não
						<br/><br/>

						<h2>1.1 PESSOAS DE REFERÊNCIA </h2>
						<label>Nome</label><br/>
						<input type="text" placeholder="Nome" className="answers-44" id="1.1-name" name="answers[1.1[name]]"  />
						<br/><br/>
						<label>Data de nascimento</label><br/>
						<input type="date" className="answers-45" id="1.1-dateofbirth" name="answers[1.1[dateofbirt]]"  />
						<br/><br/>
						<label>Vínculo</label><br/>
						<input type="text" placeholder="Vínculo" className="answers-46" id="1.1-Link" name="answers[1.1[Link]]"  />
						<br/><br/>
						<label>Telefone</label><br/>
						<input type="telephone" className="answers-47" id="1.1-telephone" name="answers[1.1[telephone]]"  />
						<br/><br/>
						<label>Celular</label><br/>
						<input type="telephone" className="answers-48" id="1.1-cellphone" name="answers[1.1[cellphone]]"  />
						<br/><br/>
						<label>Essa pessoa mora com você? </label><br/>
						<input type="radio" className="answers-49" id="1.1-livespeople-y" name="answers[1.1[livespeople]]" value="y"  />Sim
						<input type="radio" className="answers-49" id="1.1-livespeople-n" name="answers[1.1[livespeople]]" value="n"  />Não
						<br/><br/>
						<label>Data dessa informação</label><br/>
						<input type="date" className="answers-50" id="1.1-data" name="answers[1.1[data]]"  />


						<h2>AVALIAÇÃO DA PESSOA IDOSA</h2>
						<br/><br/>
						<label>Nome do medicamento, do fitoterápico, do suplemento ou da vitamina e sua concentração</label><br/>
						<input type="text" className="answers-51" id="2.1-supplement" name="answers[1.1[supplement]]"  />
						<br/><br/>
						<label>Dose e frequência</label><br/>
						<input type="text" className="answers-52" id="2.1-dose" name="answers[1.1[dose]]"  />
						<br/><br/>
						<label>Data de início ou tempo de uso</label><br/>
						<input type="text" className="answers-53" id="2.1-startdate" name="answers[1.1[startdate]]"  />
						<br/><br/>
						<label>Uso concomitante de 5 ou mais medicamentos? </label><br/>
						<input type="radio" className="answers-54" id="2.1-livespeople-y" name="answers[1.1[livespeople]]" value="y"  />Sim
						<input type="radio" className="answers-54" id="2.1-medicines-n" name="answers[1.1[medicines]]" value="n"  />Não


						<h2> DIAGNÓSTICOS E INTERNAÇÕES PRÉVIOS </h2>
						<h2> CONDIÇÕES CRÔNICAS SENSÍVEIS À ATENÇÃO BÁSICA </h2>
						<br/><br/>
						<label>Acidente vascular cerebral(AVC) ou derrame</label><br/>
						<input type="text"  maxLength="5" className="answers-55" id="2.2-avc" name="answers[2.2[avc]]"  />
						<br/><br/>
						<label>Anemia</label><br/>
						<input type="text"  maxLength="5" className="answers-56" id="2.2-anemia" name="answers[2.2[anemia]]"  />
						<br/><br/>
						<label>Asma</label><br/>
						<input type="text"  maxLength="5" className="answers-57" id="2.2-asthma" name="answers[2.2[asthma]]"  />
						<br/><br/>
						<label>Diabetes mellitus</label><br/>
						<input type="text"  maxLength="5" className="answers-58" id="2.2-diabetes" name="answers[2.2[diabetes]]"  />
						<br/><br/>
						<label>Doença arterial coronariana</label><br/>
						<input type="text"  maxLength="5" className="answers-59" id="2.2-artery  " name="answers[2.2[artery ]]"  />
						<br/><br/>
						<label>Doença pulmonar obstrutiva crônica (DPOC</label><br/>
						<input type="text"  maxLength="5" className="answers-60" id="2.2-pulmonary" name="answers[2.2[pulmonary]]"  />
						<br/><br/>
						<label>Epilepsia</label><br/>
						<input type="text"  maxLength="5" className="answers-61" id="2.2-epilepsy" name="answers[2.2[epilepsy]]"  />
						<br/><br/>
						<label>Hipertensão arterial</label><br/>
						<input type="text"  maxLength="5" className="answers-62" id="2.2-hypertension" name="answers[2.2[hypertension]]"  />
						<br/><br/>
						<label>Insuficiência cardíaca</label><br/>
						<input type="text"  maxLength="5" className="answers-63" id="2.2-insufficiency" name="answers[2.2[insufficiency]]"  />
						<br/><br/>
						<label>Úlcera péptica</label><br/>
						<input type="text"  maxLength="5" className="answers-64" id="2.2-Ulcer" name="answers[2.2[Ulcer]]"  />
						<br/><br/>

						<h2> CONDIÇÕES FREQUENTES </h2>
						<label>Depressão</label><br/>
						<input type="text"  maxLength="5" className="answers-65" id="2.2-depression" name="answers[2.2[depression]]"  />
						<br/><br/>
						<label>Incontinência urinária</label><br/>
						<input type="text"  maxLength="5" className="answers-66" id="2.2-urinary" name="answers[2.2[urinary]]"  />
						<br/><br/>
						<label>Incontinência fecal</label><br/>
						<input type="text"  maxLength="5" className="answers-67" id="2.2-faecal" name="answers[2.2[faecal]]"  />
						<br/><br/>
						<label>Insuficiência cognitiva(demência)</label><br/>
						<input type="text"  maxLength="5" className="answers-68" id="2.2-insanity" name="answers[2.2[insanity]]"  />
						<br/><br/>
						<label>InsufiOutras condições(diagnósticos)</label><br/>
						<input type="text"  maxLength="5" className="answers-69" id="2.2-other" name="answers[2.2[other]]"  />
						<br/><br/>


						<h2> CIRURGIAS REALIZADAS </h2>
						<label>Cirurgia</label><br/>
						<input type="text" className="answers-70" id="2.3-surgery" name="answers[2.3[surgery]]"  />
						<br/><br/>
						<label>Ano</label><br/>
						<input type="text"  maxLength="5" className="answers-71" id="2.3-year" name="answers[2.3[year]]"  />
						<br/><br/>
						<label>Observações</label><br/>
						<input type="text" className="answers-72" id="2.3-comments" name="answers[2.3[comments]]"  />
						<br/><br/>

						<h2> REAÇÕES ADVERSAS OU ALERGIAS A MEDICAMENTOS </h2>
						<label>Medicamento</label><br/>
						<input type="text"  maxLength="5" className="answers-73" id="2.4-medication" name="answers[2.4[medication]]"  />
						<br/><br/>
						<label>Data</label><br/>
						<input type="date" className="answers-74" id="2.4-data" name="answers[2.4[data]]"  />
						<br/><br/>
						<label>Reações adversas ou alergias</label><br/>
						<input type="text"  maxLength="5" className="answers-75" id="2.4-allergies" name="answers[2.4[allergies]]"  />
						<br/><br/>

						<h2> 2.5 DADOS ANTROPOMÉTRICOS </h2>
						<label>Peso</label><br/>
						<input type="text"  maxLength="5" className="answers-73" id="2.5-weight" name="answers[2.5[weight]]"  />
						<br/><br/>
						<label>Altura</label><br/>
						<input type="text"  maxLength="5" className="answers-74" id="2.5-height" name="answers[2.5[height]]"  />
						<br/><br/>
						<label>IMC = peso/altura2</label><br/>
						<input type="text"  maxLength="5" className="answers-75" id="2.5-imc" name="answers[2.5[imc]]"  />
						<br/><br/>
						<label>Perímetro da panturrilha (PP) esquerda</label><br/>
						<input type="text"  maxLength="5" className="answers-76" id="2.5-pp" name="answers[2.5[pp]]"  />
						<br/><br/>
						<label>Você apresentou perda de peso não intencional* de, no mínimo, 4,5 kg ou de 5% do seu peso corporal no último ano? </label><br/>
						<input type="radio" className="answers-77" id="2.5-weightloss-y" name="answers[2.5[weightloss]]" value="y"  />Sim
						<input type="radio" className="answers-77" id="2.5-weightloss-n" name="answers[2.5[weightloss]]" value="n"  />Não
						<br/><br/>

						<h2> 2.6 PROTOCOLO DE IDENTIFICAÇÃO DO IDOSO VULNERÁVEL (VES-13 </h2>
						<label>Curvar-se, agachar ou ajoelhar-se</label><br/>
						<input type="text" className="answers-78" id="2.6-crouch" name="answers[2.6[crouch]]"  />
						<br/><br/>
						<label>Levantar ou carregar objetos com peso aproximado de 5 kg</label><br/>
						<input type="text" className="answers-79" id="2.6-tocharge" name="answers[2.6[tocharge]]"  />
						<br/><br/>
						<label>Elevar ou estender os braços acima do nível do ombro </label><br/>
						<input type="text" className="answers-80" id="2.6-arms" name="answers[2.6[arms]]"  />
						<br/><br/>
						<label>Escrever ou manusear e segurar pequenos objetos</label><br/>
						<input type="text" className="answers-81" id="2.6-Write" name="answers[2.6[Write]]"  />
						<br/><br/>
						<label>Andar 400 metros (aproximadamente quatro quarteirões)</label><br/>
						<input type="text" className="answers-82" id="2.6-walk" name="answers[2.6[walk]]"  />
						<br/><br/>
						<label>Fazer serviço doméstico pesado, como esfregar o chão ou limpar janelas</label><br/>
						<input type="text" className="answers-83" id="2.6-domestic" name="answers[2.6[domestic]]"  />
						<br/><br/>


						<h2> 2.7 INFORMAÇÕES COMPLEMENTARES </h2>
						<h2> COGNIÇÃO </h2>
						<label>Algum familiar ou amigo(a) falou que você está ficando esquecido(a)?  </label><br/>
						<input type="radio" className="answers-84" id="2.7-forgotten-y" name="answers[2.7[forgotten]]" value="y"  />Sim
						<input type="radio" className="answers-84" id="2.7-forgotten-n" name="answers[2.7[forgotten]]" value="n"  />Não
						<br/><br/>
						<label>O esquecimento está piorando nos últimos meses?  </label><br/>
						<input type="radio" className="answers-85" id="2.7-lastmonths-y" name="answers[2.7[lastmonths]]" value="y"  />Sim
						<input type="radio" className="answers-85" id="2.7-lastmonths-n" name="answers[2.7[lastmonths]]" value="n"  />Não
						<br/><br/>
						<label>O esquecimento está impedindo a realização de alguma atividade do cotidiano?  </label><br/>
						<input type="radio" className="answers-86" id="2.7-activity-y" name="answers[2.7[activity]]" value="y"  />Sim
						<input type="radio" className="answers-86" id="2.7-activity-n" name="answers[2.7[activity]]" value="n"  />Não
						<br/><br/>
						<h2> HUMOR </h2>
						<label>No último mês, você ficou com desânimo, tristeza ou desesperança? </label><br/>
						<input type="radio" className="answers-87" id="2.7-sad-y" name="answers[2.7[sad]]" value="y"  />Sim
						<input type="radio" className="answers-87" id="2.7-sad-n" name="answers[2.7[sad]]" value="n"  />Não
						<br/><br/>
						<label>No último mês, você perdeu o interesse ou o prazer por atividades anteriormente prazerosas?  </label><br/>
						<input type="radio" className="answers-88" id="2.7-pleasure-y" name="answers[2.7[pleasure]]" value="y"  />Sim
						<input type="radio" className="answers-88" id="2.7-pleasure-n" name="answers[2.7[pleasure]]" value="n"  />Não
						<br/><br/>


						<h2> 2.8 AVALIAÇÃO AMBIENTAL </h2>
						<h2> Áreas de locomoção </h2>
						<label>Áreas de locomoção desimpedidas </label><br/>
						<input type="radio" className="answers-89" id="2.8-locomotion-y" name="answers[2.8[locomotion]]" value="y"  />Sim
						<input type="radio" className="answers-89" id="2.8-locomotion-n" name="answers[2.8[locomotion]]" value="n"  />Não
						<br/><br/>
						<label>Presença de barras de apoio  </label><br/>
						<input type="radio" className="answers-90" id="2.8-supportbars-y" name="answers[2.8[supportbars]]" value="y"  />Sim
						<input type="radio" className="answers-90" id="2.8-supportbars-n" name="answers[2.8[supportbars]]" value="n"  />Não
						<br/><br/>
						<label>Pisos uniformes e tapetes bem fixos  </label><br/>
						<input type="radio" className="answers-91" id="2.8-carpet-y" name="answers[2.8[carpet]]" value="y"  />Sim
						<input type="radio" className="answers-91" id="2.8-carpet-n" name="answers[2.8[carpet]]" value="n"  />Não
						<br/><br/>
						<h2> Iluminação </h2>
						<label>Presença de iluminação suficiente para clarear todo o interior de cada cômodo, incluindo degraus</label><br/>
						<input type="radio" className="answers-92" id="2.8-lighting-y" name="answers[2.8[lighting]]" value="y"  />Sim
						<input type="radio" className="answers-92" id="2.8-lighting-n" name="answers[2.8[lighting]]" value="n"  />Não
						<br/><br/>
						<label>Interruptores acessíveis na entrada dos cômodos  </label><br/>
						<input type="radio" className="answers-93" id="2.8-Switches-y" name="answers[2.8[Switches]]" value="y"  />Sim
						<input type="radio" className="answers-93" id="2.8-Switches-n" name="answers[2.8[Switches]]" value="n"  />Não
						<br/><br/>
						<h2> Banheiro </h2>
						<label>Área do chuveiro com antiderrapante  </label><br/>
						<input type="radio" className="answers-94" id="2.8-shower-y" name="answers[2.8[shower]]" value="y"  />Sim
						<input type="radio" className="answers-94" id="2.8-shower-n" name="answers[2.8[shower]]" value="n"  />Não
						<br/><br/>
						<label>Box com abertura fácil ou presença de cortina bem firme </label><br/>
						<input type="radio" className="answers-95" id="2.8-openingbox-y" name="answers[2.8[openingbox]]" value="y"  />Sim
						<input type="radio" className="answers-95" id="2.8-openingbox-n" name="answers[2.8[openingbox]]" value="n"  />Não
						<br/><br/>
						<h2> Cozinha e quarto </h2>
						<label>Armários baixos, sem necessidade do uso de escada  </label><br/>
						<input type="radio" className="answers-96" id="2.8-Cabinets-y" name="answers[2.8[Cabinets]]" value="y"  />Sim
						<input type="radio" className="answers-96" id="2.8-Cabinets-n" name="answers[2.8[Cabinets]]" value="n"  />Não
						<br/><br/>
						<h2> Escada </h2>
						<label>Piso antiderrapante  </label><br/>
						<input type="radio" className="answers-97" id="2.8-Nonslipfloor-y" name="answers[2.8[Nonslipfloor]]" value="y"  />Sim
						<input type="radio" className="answers-97" id="2.8-Nonslipfloor-n" name="answers[2.8[Nonslipfloor]]" value="n"  />Não
						<br/><br/>
						<label>Corrimão dos dois lados e firme </label><br/>
						<input type="radio" className="answers-98" id="2.8-Handrail-y" name="answers[2.8[Handrail]]" value="y"  />Sim
						<input type="radio" className="answers-98" id="2.8-Handrail-n" name="answers[2.8[Handrail]]" value="n"  />Não
						<br/><br/>

						<h2> 2.9 QUEDAS </h2>
						<label>Data da queda (mês/ano)</label><br/>
						<input type="text" maxLength="12" className="answers-99" id="2.9-falldate" name="answers[2.9[falldate]]"  />
						<br/><br/>
						<label>Qual foi o local da queda?</label><br/>
						<input type="radio" className="answers-100" id="2.9-localfall-i" name="answers[2.9[localfall]]" value="y"  />Dentro de casa
						<input type="radio" className="answers-100" id="2.9-localfall-o" name="answers[2.9[localfall]]" value="n"  />Fora de casa
						<br/><br/>
						<label>A queda causou alguma fratura?</label><br/>
						<input type="text" className="answers-101" id="2.9-fracture" name="answers[2.9[fracture]]"  />
						<br/><br/>
						<label>Você parou de realizar alguma atividade por medo de cair novamente?</label><br/>
						<input type="radio" className="answers-102" id="2.9-afraidtofall-y" name="answers[2.9[afraidtofall]]" value="y"  />Sim
						<input type="radio" className="answers-103" id="2.9-afraidtofall-n" name="answers[2.9[afraidtofall]]" value="n"  />Não
						<br/><br/>

						<h2> 2.10 IDENTIFICAÇÃO DE DOR CRÔNICA </h2>
						<label>Você tem alguma dor com duração igual ou superior a 3 meses? </label><br/>
						<input type="radio" className="answers-104" id="2.10-upperpain-y" name="answers[2.10[upperpain]]" value="y"  />Sim
						<input type="radio" className="answers-104" id="2.10-upperpain-n" name="answers[2.10[upperpain]]" value="n"  />Não
						<br/><br/>
						<label>A dor é como um choque ou uma queimação? </label><br/>
						<input type="radio" className="answers-105" id="2.10-shockorburning-y" name="answers[2.10[shockorburning]]" value="y"  />Sim
						<input type="radio" className="answers-105" id="2.10-shockorburning-n" name="answers[2.10[shockorburning]]" value="n"  />Não
						<br/><br/>
						<label>A dor piora ao andar?</label><br/>
						<input type="radio" className="answers-106" id="2.10-painwhenwalking-y" name="answers[2.10[painwhenwalking]]" value="y"  />Sim
						<input type="radio" className="answers-106" id="2.10-painwhenwalking-n" name="answers[2.10[painwhenwalking]]" value="n"  />Não
						<br/><br/>
						<label>A dor melhora com o repouso?</label><br/>
						<input type="radio" className="answers-107" id="2.10-resting-y" name="answers[2.10[resting]]" value="y"  />Sim
						<input type="radio" className="answers-107" id="2.10-resting-n" name="answers[2.10[resting]]" value="n"  />Não
						<br/><br/>

						<h2> 2.10B IDENTIFICAÇÃO DE DOR CRÔNICA </h2>
						<label>Data</label><br/>
						<input type="date" className="answers-108" id="2.10b-data" name="answers[2.10b[data]]"  /><br/>
						<br/><br/>
						<label>Intensidade da dor</label><br/>
						<input type="number"  className="answers-109" id="2.10b-intensityofpain" name="answers[2.10b[crouch]]"  />
						<br/><br/>

						<h2> 2.11 HÁBITOS DE VIDA </h2>
						<h2> Identificação de hábitos de vida </h2>
						<h2> Interesse social e lazer </h2>
						<label>Você frequenta centros-dia, clubes ou grupos de convivência? </label><br/>
						<input type="radio" className="answers-110" id="2.11-attendclubs-y" name="answers[2.11[attendclubs]]" value="y"  />Sim
						<input type="radio" className="answers-110" id="2.11-attendclubs-n" name="answers[2.11[attendclubs]]" value="n"  />Não
						<br/><br/>
						<label>Você realiza algum trabalho voluntário? </label><br/>
						<input type="radio" className="answers-111" id="2.11-volunteerwork-y" name="answers[2.11[volunteerwork]]" value="y"  />Sim
						<input type="radio" className="answers-111" id="2.11-volunteerwork-n" name="answers[2.11[volunteerwork]]" value="n"  />Não
						<br/><br/>
						<label>Você tem alguma atividade de lazer? </label><br/>
						<input type="radio" className="answers-112" id="2.11-leisureactivity-y" name="answers[2.11[leisureactivity]]" value="y"  />Sim
						<input type="radio" className="answers-112" id="2.11-leisureactivity-n" name="answers[2.11[leisureactivity]]" value="n"  />Não
						<br/><br/>

						<h2> ATIVIDADE FÍSICA </h2>
						<label>Você pratica algum tipo de atividade física (como caminhadas, natação, dança, ginástica etc.) pelo menos três vezes por semana? </label><br/>
						<input type="radio" className="answers-113" id="2.11-physicalactivity-y" name="answers[2.11[physicalactivity]]" value="y"  />Sim
						<input type="radio" className="answers-113" id="2.11-physicalactivity-n" name="answers[2.11[physicalactivity]]" value="n"  />Não
						<br/><br/>
						<label>Você gostaria de começar algum programa de atividade física? </label><br/>
						<input type="radio" className="answers-114" id="2.11-activityprogram-y" name="answers[2.11[activityprogram]]" value="y"  />Sim
						<input type="radio" className="answers-114" id="2.11-activityprogram-n" name="answers[2.11[activityprogram]]" value="n"  />Não
						<br/><br/>

						<h2> ALIMENTAÇÃO </h2>
						<label>Você faz pelo menos três refeições por dia?</label><br/>
						<input type="radio" className="answers-115" id="2.11-threemeals-y" name="answers[2.11[threemeals]]" value="y"  />Sim
						<input type="radio" className="answers-115" id="2.11-threemeals-n" name="answers[2.11[threemeals]]" value="n"  />Não
						<br/><br/>
						<label>Você come frutas, legumes e verduras nas suas refeições ao longo do dia?  </label><br/>
						<input type="radio" className="answers-116" id="2.11-fruitsvegetables-y" name="answers[2.11[fruitsvegetables]]" value="y"  />Sim
						<input type="radio" className="answers-116" id="2.11-fruitsvegetables-n" name="answers[2.11[fruitsvegetables]]" value="n"  />Não
						<br/><br/>
						<label>Em pelo menos uma refeição diária, você come carnes, peixes ou ovos?</label><br/>
						<input type="radio" className="answers-117" id="2.11-meatfish-y" name="answers[2.11[meatfish]]" value="y"  />Sim
						<input type="radio" className="answers-117" id="2.11-meatfish-n" name="answers[2.11[meatfish]]" value="n"  />Não
						<br/><br/>
						<label>Você tem o costume de consumir bebidas açucaradas, bolos, biscoitos recheados e sobremesas? </label><br/>
						<input type="radio" className="answers-118" id="2.11-sugarydrinks-y" name="answers[2.11[sugarydrinks]]" value="y"  />Sim
						<input type="radio" className="answers-118" id="2.11-sugarydrinks-n" name="answers[2.11[sugarydrinks]]" value="n"  />Não
						<br/><br/>
						<label>No preparo das suas refeições, é utilizada grande quantidade de óleos, gorduras, açúcar e sal?</label><br/>
						<input type="radio" className="answers-119" id="2.11-greaseoils-y" name="answers[2.11[greaseoils]]" value="y"  />Sim
						<input type="radio" className="answers-119" id="2.11-greaseoils-n" name="answers[2.11[greaseoils]]" value="n"  />Não
						<br/><br/>
						<label>Você inclui a ingestão de água na sua rotina diária? </label><br/>
						<input type="radio" className="answers-120" id="2.11-water-y" name="answers[2.11[water]]" value="y"  />Sim
						<input type="radio" className="answers-120" id="2.11-water-n" name="answers[2.11[water]]" value="n"  />Não
						<br/><br/>

						<h2> TABAGISMO </h2>
						<label>Atualmente, você fuma algum produto do tabaco?</label><br/>
						<input type="radio" className="answers-121" id="2.11-tobacco-y" name="answers[2.11[tobacco]]" value="y"  />Sim
						<input type="radio" className="answers-121" id="2.11-tobacco-n" name="answers[2.11[tobacco]]" value="n"  />Não
						<br/><br/>
						<label>Você gostaria de parar de fumar? </label><br/>
						<input type="radio" className="answers-122" id="2.11-stopsmoking-y" name="answers[2.11[stopsmoking]]" value="y"  />Sim
						<input type="radio" className="answers-122" id="2.11-stopsmoking-n" name="answers[2.11[stopsmoking]]" value="n"  />Não
						<br/><br/>
						<label>Você é ex-fumante? </label><br/>
						<input type="radio" className="answers-123" id="2.11-exsmoker-y" name="answers[2.11[exsmoker]]" value="y"  />Sim
						<input type="radio" className="answers-123" id="2.11-exsmoker-n" name="answers[2.11[exsmoker]]" value="n"  />Não
						<br/><br/>

						<h2> ÁLCOOL </h2>
						<label>Você consome bebida alcoólica? </label><br/>
						<input type="radio" className="answers-124" id="2.11-alcoholicbeverage-y" name="answers[2.11[alcoholicbeverage]]" value="y"  />Sim
						<input type="radio" className="answers-124" id="2.11-alcoholicbeverage-n" name="answers[2.11[alcoholicbeverage]]" value="n"  />Não
						<br/><br/>
						<label>Você já sentiu a necessidade de reduzir ou suspender o consumo de álcool? </label><br/>
						<input type="radio" className="answers-125" id="2.11-suspendalcohol-y" name="answers[2.11[suspendalcohol]]" value="y"  />Sim
						<input type="radio" className="answers-125" id="2.11-suspendalcohol-n" name="answers[2.11[suspendalcohol]]" value="n"  />Não
						<br/><br/>
						<label>Alguém já lhe criticou por você beber? </label><br/>
						<input type="radio" className="answers-126" id="2.11-drink-y" name="answers[2.11[drink]]" value="y"  />Sim
						<input type="radio" className="answers-126" id="2.11-drink-n" name="answers[2.11[drink]]" value="n"  />Não
						<br/><br/>
						<label>Sente-se culpado(a) por beber? </label><br/>
						<input type="radio" className="answers-127" id="2.11-guiltyfordrinking-y" name="answers[2.11[guiltyfordrinking]]" value="y"  />Sim
						<input type="radio" className="answers-127" id="2.11-guiltyfordrinking-n" name="answers[2.11[guiltyfordrinking]]" value="n"  />Não
						<br/><br/>
						<label>Costuma beber logo pela manhã?</label><br/>
						<input type="radio" className="answers-128" id="2.11-drinkmorning-y" name="answers[2.11[drinkmorning]]" value="y"  />Sim
						<input type="radio" className="answers-128" id="2.11-drinkmorning-n" name="answers[2.11[drinkmorning]]" value="n"  />Não
						<br/><br/>


						<h2> 2.11A. CONTROLE DA PRESSÃO ARTERIAL </h2>
						<label>Data</label><br/>
						<input type="date" className="answers-129" id="2.11a-data" name="answers[2.11a[data]]"  />
						<br/><br/>
						<label>Pressão arterial</label><br/>
						<input type="text"  className="answers-130" id="2.11a-bloodpressure" name="answers[2.11a[bloodpressure]]"  />
						<br/><br/>

						<h2> 2.11b. CONTROLE DE GLICEMIA </h2>
						<label>Jejum</label><br/>
						<input type="radio" className="answers-131" id="2.11b-fasting-y" name="answers[2.11b[fasting]]" value="y"  />Sim
						<input type="radio" className="answers-131" id="2.11b-fasting-n" name="answers[2.11b[fasting]]" value="n"  />Não
						<br/><br/>
						<label>Casual</label><br/>
						<input type="radio" className="answers-132" id="2.11b-casual-y" name="answers[2.11b[casual]]" value="y"  />Sim
						<input type="radio" className="answers-132" id="2.11b-casual-n" name="answers[2.11b[casual]]" value="n"  />Não
						<br/><br/>
						<label>mg/dL</label><br/>
						<input type="text"  className="answers-133" id="2.11b-mgdl" name="answers[2.11b[mgdl]]"  />
						<br/><br/>

						<h2> 2.11c CALENDÁRIO DE VACINAÇÃO </h2>
						<label>Nome</label><br/>
						<input type="text"  className="answers-134" id="2.11c-name" name="answers[2.11c[name]]"  />
						<br/><br/>
						<label>Data</label><br/>
						<input type="date" className="answers-135" id="2.11c-data" name="answers[2.11c[data]]"  />
						<br/><br/>
						<label>Lote</label><br/>
						<input type="text"  className="answers-136" id="2.11c-lot" name="answers[2.11c[lot]]"  />
						<br/><br/>
						<label>Assinatura</label><br/>
						<input type="text"  className="answers-137" id="2.11c-signature" name="answers[2.11c[signature]]"  />
						<br/><br/>
						<label>Dose</label><br/>
						<input type="text"  className="answers-138" id="2.11c-dose" name="answers[2.11c[dose]]"  />
						<br/><br/>

						<h2> 2.11D AVALIAÇÃO DE SAÚDE BUCAL </h2>
						<h2> HÁBITOS </h2>
						<label>Álcool</label><br/>
						<input type="radio" className="answers-139" id="2.11d-Alcohol-y" name="answers[2.11d[Alcohol]]" value="y"  />Sim
						<input type="radio" className="answers-139" id="2.11d-Alcohol-n" name="answers[2.11d[Alcohol]]" value="n"  />Não
						<br/><br/>
						<label>Fumo</label><br/>
						<input type="radio" className="answers-140" id="2.11d-smoke-y" name="answers[2.11d[smoke]]" value="y"  />Sim
						<input type="radio" className="answers-140" id="2.11d-smoke-n" name="answers[2.11d[smoke]]" value="n"  />Não
						<br/><br/>
						<h2> ALTERAÇÕES OU LESÕES DE MUCOSA </h2>
						<label>Presença de lesão na mucosa bucal </label><br/>
						<input type="radio" className="answers-141" id="2.11d-mucosalinjury-y" name="answers[2.11d[mucosalinjury]]" value="y"  />Sim
						<input type="radio" className="answers-141" id="2.11d-mucosalinjury-n" name="answers[2.11d[mucosalinjury]]" value="n"  />Não
						<br/><br/>
						<label>Boca seca (xerostomia – falta de saliva)</label><br/>
						<input type="radio" className="answers-142" id="2.11d-drymouth-y" name="answers[2.11d[drymouth]]" value="y"  />Sim
						<input type="radio" className="answers-142" id="2.11d-drymouth-n" name="answers[2.11d[drymouth]]" value="n"  />Não
						<br/><br/>
						<label>Presença de língua saburrosa (língua branca)</label><br/>
						<input type="radio" className="answers-143" id="2.11d-whitetongue-y" name="answers[2.11d[whitetongue]]" value="y"  />Sim
						<input type="radio" className="answers-143" id="2.11d-whitetongue-n" name="answers[2.11d[whitetongue]]" value="n"  />Não
						<br/><br/>
						<label>Presença de candidíase bucal</label><br/>
						<input type="radio" className="answers-144" id="2.11d-oralcandidiasis-y" name="answers[2.11d[oralcandidiasis]]" value="y"  />Sim
						<input type="radio" className="answers-144" id="2.11d-oralcandidiasis-n" name="answers[2.11d[oralcandidiasis]]" value="n"  />Não
						<br/><br/>
						<label>Presença de halitose</label><br/>
						<input type="radio" className="answers-145" id="2.11d-halitosis-y" name="answers[2.11d[halitosis]]" value="y"  />Sim
						<input type="radio" className="answers-145" id="2.11d-halitosis-n" name="answers[2.11d[halitosis]]" value="n"  />Não
						<br/><br/>
						<h2> CÁRIE DENTÁRIA E DOENÇA PERIODONTAL </h2>
						<label>Presença de placa bacteriana (biofilme dental)</label><br/>
						<input type="radio" className="answers-146" id="2.11d-bacterialplaque-y" name="answers[2.11d[bacterialplaque]]" value="y"  />Sim
						<input type="radio" className="answers-146" id="2.11d-bacterialplaque-n" name="answers[2.11d[bacterialplaque]]" value="n"  />Não
						<br/><br/>
						<label>Fatores retentivos de placa (raízes residuais, cálculo)</label><br/>
						<input type="radio" className="answers-147" id="2.11d-residualroots-y" name="answers[2.11d[residualroots]]" value="y"  />Sim
						<input type="radio" className="answers-147" id="2.11d-residualroots-n" name="answers[2.11d[residualroots]]" value="n"  />Não
						<br/><br/>
						<label>Presença evidente de gengivite/sangramento gengival</label><br/>
						<input type="radio" className="answers-148" id="2.11d-gingivitis-y" name="answers[2.11d[gingivitis]]" value="y"  />Sim
						<input type="radio" className="answers-148" id="2.11d-gingivitis-n" name="answers[2.11d[gingivitis]]" value="n"  />Não
						<br/><br/>
						<label>Presença evidente de periodontite/perda óssea</label><br/>
						<input type="radio" className="answers-149" id="2.11d-periodontitis-y" name="answers[2.11d[periodontitis]]" value="y"  />Sim
						<input type="radio" className="answers-149" id="2.11d-periodontitis-n" name="answers[2.11d[periodontitis]]" value="n"  />Não
						<br/><br/>
						<label>Presença de cárie</label><br/>
						<input type="radio" className="answers-150" id="2.11d-caries-y" name="answers[2.11d[caries]]" value="y"  />Sim
						<input type="radio" className="answers-150" id="2.11d-caries-n" name="answers[2.11d[caries]]" value="n"  />Não
						<br/><br/>
						<label>Perda dental no último ano</label><br/>
						<input type="radio" className="answers-151" id="2.11d-dentalloss-y" name="answers[2.11d[dentalloss]]" value="y"  />Sim
						<input type="radio" className="answers-151" id="2.11d-dentalloss-n" name="answers[2.11d[dentalloss]]" value="n"  />Não
						<br/><br/>
						<h2> CONSULTA CLÍNICA(EQUIPE DE SAÚDE BUCAL </h2>
						<label>Atendimento na unidade de saúde</label><br/>
						<input type="radio" className="answers-152" id="2.11d-healthunit-y" name="answers[2.11d[healthunit]]" value="y"  />Sim
						<input type="radio" className="answers-152" id="2.11d-healthunit-n" name="answers[2.11d[healthunit]]" value="n"  />Não
						<br/><br/>
						<label>Atendimento no domicílio</label><br/>
						<input type="radio" className="answers-153" id="2.11d-homecare-y" name="answers[2.11d[homecare]]" value="y"  />Sim
						<input type="radio" className="answers-153" id="2.11d-homecare-n" name="answers[2.11d[homecare]]" value="n"  />Não
						<br/><br/>
						<label>Encaminhamento para especialidades odontológicas</label><br/>
						<input type="text"  maxLength="2" className="answers-154" id="2.11d-dentalspecialties" name="answers[2.11d[dentalspecialties]]"  />
						<br/><br/>

						<h2> 2.11.D.A PRÓTESE DENTÁRIA INFERIOR OU SUPERIOR </h2>
						<h2> PRÓTESE TOTAL (DENTADURA) </h2>
						<label>Superior</label><br/>
						<input type="radio" className="answers-155" id="2.11d.a-superior-y" name="answers[2.11d.a[superior]]" value="y"  />Sim
						<input type="radio" className="answers-155" id="2.11d.a-superior-n" name="answers[2.11d.a[superior]]" value="n"  />Não
						<br/><br/>
						<label>Inferior</label><br/>
						<input type="radio" className="answers-156" id="2.11d.a-bottom-y" name="answers[2.11d.a[bottom]]" value="y"  />Sim
						<input type="radio" className="answers-156" id="2.11d.a-bottom-n" name="answers[2.11d.a[bottom]]" value="n"  />Não
						<br/><br/>
						<label>Prótese total (dentadura)</label><br/>
						<input type="radio" className="answers-157" id="2.11d.a-denture-y" name="answers[2.11d.a[denture]]" value="y"  />Sim
						<input type="radio" className="answers-157" id="2.11d.a-denture-n" name="answers[2.11d.a[denture]]" value="n"  />Não
						<br/><br/>
						<label>Prótese parcial (ponte móvel)</label><br/>
						<input type="radio" className="answers-158" id="2.11d.a-mobilebridge-y" name="answers[2.11d.a[mobilebridge]]" value="y"  />Sim
						<input type="radio" className="answers-158" id="2.11d.a-mobilebridge-n" name="answers[2.11d.a[mobilebridge]]" value="n"  />Não
						<br/><br/>
						<label>Não utiliza e não necessita da prótese</label><br/>
						<input type="radio" className="answers-159" id="2.11d.a-notprosthesis-y" name="answers[2.11d.a[notprosthesis]]" value="y"  />Sim
						<input type="radio" className="answers-159" id="2.11d.a-notprosthesis-n" name="answers[2.11d.a[notprosthesis]]" value="n"  />Não
						<br/><br/>
						<label>Não utiliza, mas necessita da prótese</label><br/>
						<input type="radio" className="answers-160" id="2.11d.a-yesprosthesis-y" name="answers[2.11d.a[yesprosthesis]]" value="y"  />Sim
						<input type="radio" className="answers-160" id="2.11d.a-yesprosthesis-n" name="answers[2.11d.a[yesprosthesis]]" value="n"  />Não
						<br/><br/>
						<label>Utiliza (adaptada/sem necessidade de troca)</label><br/>
						<input type="radio" className="answers-170" id="2.11d.a-useadapted-y" name="answers[2.11d.a[useadapted]]" value="y"  />Sim
						<input type="radio" className="answers-170" id="2.11d.a-useadapted-n" name="answers[2.11d.a[useadapted]]" value="n"  />Não
						<br/><br/>
						<label>Utiliza (não adaptada/necessita de troca)</label><br/>
						<input type="radio" className="answers-171" id="2.11d.a-usesunadapted-y" name="answers[2.11d.a[usesunadapted]]" value="y"  />Sim
						<input type="radio" className="answers-171" id="2.11d.a-usesunadapted-n" name="answers[2.11d.a[usesunadapted]]" value="n"  />Não
						<br/><br/>


						<h2> 2.11E AGENDA DE CONSULTAS E EXAMES </h2>
						<label>Data</label><br/>
						<input type="date" className="answers-172" id="2.11e-data" name="answers[2.11e[data]]"  />
						<br/><br/>
						<label>Hora</label><br/>
						<input type="text"  maxLength="5" className="answers-173" id="2.11e-hour" name="answers[2.11e[hour]]"  />
						<br/><br/>
						<label>Local</label><br/>
						<input type="text"  maxLength="5" className="answers-174" id="2.11e-local" name="answers[2.11e[local]]"  />
						<br/><br/>
						<label>Consulta/exame</label><br/>
						<input type="text"  maxLength="5" className="answers-175" id="2.11e-exam" name="answers[2.11e[exam]]"  />
						<br/><br/>
						<label>Nome do profissional</label><br/>
						<input type="text"  maxLength="5" className="answers-176" id="2.11e-professionalname" name="answers[2.11e[professionalname]]"  />
						<br/><br/> 
						<a className="btn btn-dark" href="javascript:;" role="button">Enviar</a>
					</form>
              	</div>
            );
          }
      });
    var Opc3 = React.createClass({
      render: function() {
          return (
            <div>
              <h2>Hey</h2>
              <p>Sobre nós <a href="/sucesso">Sucesso!</a>.
              </p>
            </div>
          );
        }
    });
     
    var Opc2 = React.createClass({
      render: function() {
          return (
            <div>
              <h2>Opc2</h2>
            </div>
          );
        }
    });
    var App = React.createClass({
      render: function() {
        return (
          <div>
          	<header>
            	<h1>Caderneta Digital do Idoso</h1>
            </header>
            <ul className="header">
              <li><IndexLink to="/" activeClassName="active">Formulário</IndexLink></li>
              <li><Link to="/opc2" activeClassName="active">Opção2</Link></li>
              <li><Link to="/opc3" activeClassName="active">Opção3</Link></li>
            </ul>
			<div className="progress">
			  <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
			</div>
            <div className="content">
              {this.props.children}
            </div>
          </div>
        )
      }
    });
    var { Router,
      Route,
      IndexRoute,
      IndexLink,
      hashHistory,
      Link } = ReactRouter;
    ReactDOM.render(
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="opc2" component={Opc2} />
          <Route path="opc3" component={Opc3} />
        </Route>
      </Router>,
      destination
    );
  </script>
</body>
<footer/>
</footer/>
</html>