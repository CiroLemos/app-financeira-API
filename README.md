COMO RODAR O PROJETO BAIXADO
Instalar todas as dependencias indicada pelo package.json
### npm install

Permitir acesso a API
### npm install --save cors


SEQUENCIA PARA CRIAR O PROJETO
Criar o arquivo package.json
### npm init

Gerenciar as requisições, rotas e URLs, entre outras funcionalidades.
### npm install express

Alterar o package.json para que o node monitore mudanças no projeto sem que precise parar o servidor.
Na propriedade script inclua a seguinte linha de comando.
### "start": "node --watch-path ./ app"

Para executar o projeto execute 
### npm start