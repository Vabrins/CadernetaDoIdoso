# CadernetaDeSaúdeDoIdoso
Informatização da Caderneta de Saúde do Idoso

![alt text](https://raw.githubusercontent.com/Vabrins/CadernetaDoIdoso/master/public/images/idosa.jpeg)

Configuração
- Executar ``` composer install ```
- Criar uma cópia do arquivo .env-example e renomear para .env
- Executar ``` php artisan key:generate ```
- Executar ``` php artisan migrate ```
- Executar ``` composer dumpautoload ```
- Executar ``` php artisan serve ``` - p/ iniciar servidor do laravel

- Em outro terminal:
- Executar ``` npm install ``` - p/ instalar dependências
- Executar ``` webpack -w ``` - p/ escutar e aplicar mudanças do bundle.js
