# soma = 0
# menor = 0

# for i in range(10):
#     numero = int(input())
#     soma += numero
#     if i == 0 or numero < menor:
#         menor = numero

# print(soma)
# print(menor)

# cont = 1
# # menor = 0
# soma = 0
# repeticoes = int(input("escolha a quantidade de numeros:"))
# while cont <= repeticoes:
#   numero = int(input("escolha o numero:"))
#   menor = numero
#   if numero < menor:
#     menor = numero
#   soma += numero
#   cont += 1
# print("a soma dos numeros é", soma)
# print("o menor numero é", menor)

print("1- De 1 a 10")
print("2- De 10 a 1")
print("3- Sair")
crescente = 1
decrescente = 10

escolhido = int(input())
if escolhido == 1:
  while crescente <= 10:
    print(crescente,".. ")
    crescente += 1
