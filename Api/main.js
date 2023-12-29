class Api{
    static async api(cep) {
        const response = ((await fetch(`https://viacep.com.br/ws/${cep}/json/`)).json());    
      return response;
    }
}
Api.api(76801076).then(v => {console.log(v)})

