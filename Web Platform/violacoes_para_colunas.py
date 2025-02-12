import csv

# Etapa 1: Ler um arquivo CSV
def ler_arquivo_csv(nome_arquivo):
    with open(nome_arquivo, 'r', newline='', encoding='utf-8') as arquivo_csv:
        leitor_csv = csv.reader(arquivo_csv)
        dados = [linha for linha in leitor_csv]
    return dados

# Etapa 2: Tratar as linhas
def tratar_linhas(dados):
    linhas_tratadas = []
    for linha in dados:
        if dados[00] != linha:
            linha_tratada = linha[0].split(',')
            codigo, chave, descricao, conteudo = linha_tratada[:4]
            # Tratamento específico para a chave
            colunas_chave = chave.replace('"', "").replace('.', "|").replace('_', ".").split('|')
            # Aqui você pode adicionar a lógica de tratamento conforme necessário
            # Por enquanto, vou adicionar um exemplo simples de tratamento
            linhas_tratadas.append((codigo, *colunas_chave, descricao, conteudo))
    return linhas_tratadas

# Etapa 3: Adicionar uma nova coluna com os dados tratados
def adicionar_coluna_tratada(dados_tratados):
    dados_com_coluna = []
    for linha_tratada in dados_tratados:
        # Adicione aqui a lógica para criar a nova coluna com base nos dados tratados
        nova_coluna = f'NovaColuna_{linha_tratada[1]}_{linha_tratada[3]}'
        dados_com_coluna.append(linha_tratada + (nova_coluna,))
    return dados_com_coluna

# Etapa 4: Criar um novo arquivo CSV com os dados tratados
def criar_novo_arquivo_csv(nome_arquivo_saida, dados_com_coluna):
    with open(nome_arquivo_saida, 'w', newline='', encoding='utf-8') as arquivo_saida:
        escritor_csv = csv.writer(arquivo_saida)
        escritor_csv.writerows(dados_com_coluna)

# Etapa 5: Executar todas as etapas
nome_arquivo_entrada = 'csv_final_diretrizes.csv'  # Substitua com o nome do seu arquivo CSV
dados_originais = ler_arquivo_csv(nome_arquivo_entrada)
dados_tratados = tratar_linhas(dados_originais)
dados_com_coluna = adicionar_coluna_tratada(dados_tratados)
nome_arquivo_saida = 'novo_arquivo_tratado1.csv'  # Substitua com o nome desejado para o novo arquivo CSV
criar_novo_arquivo_csv(nome_arquivo_saida, dados_com_coluna)