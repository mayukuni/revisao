# let resultado = 0
# for (let index = 10; index > 1; index -= 1) {
#   if (index === 10) {
#     resultado = resultado + (index * (index -1))
#   } else {
#     resultado = resultado * (index - 1)
#   }
# }

# console.log(`o fatorial de 10 é ${resultado}`);
numero = 10
resultado = 0
while numero > 1:
  if numero == 10:
    resultado = resultado + (numero * (numero - 1))
  else:
    resultado = resultado * (numero - 1)
  numero -= 1
print(resultado)