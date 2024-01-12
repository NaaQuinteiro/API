# bibliotecas 
import requests
import json 

# armezenar na variável os dados obtedos por meio do requsts.get do site de cotações
price = requests.get("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL")
price = price.json() #convertendo o json para python 

# price_dollar = price['USDBRL']['bid']

prices_now = {}

# add ao dicionario a chave e o valor desejado
for i in price:
    prices_now[i] = price[i]['bid']

# para printar a chave e o valor
for i in prices_now:
    print(f"{i}: {prices_now[i]}")

