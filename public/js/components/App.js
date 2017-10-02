import React from 'react';

class App extends React.Component {
  constructor (props) {
    super(props)    
    this.state = {
      teste: 'teste'
    }
  }

  render () {
    return (
            <div className="container" >
              <div className="row">
                <div className="col">
                  <fieldset>
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
                  </fieldset>
                </div>
                <div className="col">
                  <fieldset>
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
                  </fieldset>
                </div>
                <div className="col">
                  <fieldset>
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
                  </fieldset>
                </div>
              </div>
              <nav aria-label="Dados Pessoais">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex="-1">Anterior</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">Próximo</a>
                  </li>
                </ul>
              </nav>
            </div>

    )
  }
}

export default App