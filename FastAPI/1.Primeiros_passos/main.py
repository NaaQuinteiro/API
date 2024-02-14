# Importando a biblioteca 
from fastapi import FastAPI

# A variável app cria uma instãncia da classe fastAPI
app = FastAPI()

# Aplicando o decoretor que define a operação com o metodo get, para acessar aquilo que voc~e deseja buscar 
# e apresentar na tela
@app.get('/')
async def root():
    return {'Hello word': 'Fiz sozinha e funfou'}

# não é obrigatorio utilizar o async, pode apenas definir a função
# lembre que esse app.get('/') meio que passa o caminho que voc~e quer acessar

# Passos:
# 1 - Import FastAPI
# 2 - Crie uma instância (Este será o principal ponto de interação para criar toda a sua API.)
#     O app será referenciado pelo uvicorn (uvicorn main:app --reload)
# 3 - Criar uma rota ('/') conhecida como endpoint
# 4 - Defina uma função de rota 
# 5 - retorne o conteudo 