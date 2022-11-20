
arquivo = open('megasena.txt','w')
for dez1 in range(60):
    for dez2 in range(dez1 + 1, 60):
        for dez3 in range(dez2 + 1, 60):
            for dez4 in range(dez3 + 1, 60):
                for dez5 in range(dez4 + 1, 60):
                    for dez6 in range(dez5 + 1, 60):
                        arquivo.write(str(dez1 + 1) + ';' + str(dez2 + 1) + ';' + str(dez3 + 1) + ';' + str(dez4 + 1) + ';' + str(dez5 + 1) + ';' + str(dez6 + 1) + '\n')




