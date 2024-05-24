# Informações Importantes sobre a Estrutura e Organização do Repositório

## 1. Nomeação de Arquivos e Pastas
- Todos os arquivos e pastas devem ser escritos em letra maiúscula.
- Todos os arquivos e pastas devem conter a sigla do SETOR_SISTEMA como prefixo para melhor organização e busca dos scripts.

### Exemplo:
- **Setor Financeiro:** possui sigla `FN`
- **Sistema Valeshop:** possui sigla `VLS`
- **Nome do Arquivo:** `FN_VLS_NOMEDOARQUIVO.SQL`

## 2. Estrutura de Pastas
- Toda pasta dentro do sistema deverá conter uma pasta chamada `CONSULTAS`, onde serão colocados os scripts destinados a queries de consulta.
- Caso haja vários scripts para a resolução de um problema, colocar a pasta inteira dentro da pasta `CONSULTAS`.

### Exemplo:
- Scripts que estão ligados a consultas de um cliente específico devem ser colocados na pasta `CONSULTAS` do sistema.
- Caso haja uma solução de problema que aborde scripts ligados a consultas e outros tipos de scripts, a pasta pode ser deixada na raiz do Sistema. No entanto, será necessário criar dentro dessa pasta uma subpasta contendo as consultas relacionadas àquela solução de problema.

## 3. Nomes de Scripts
- Os nomes dos scripts não devem conter espaçamento.

## 4. Referência da Resolução do Problema
- O nome dos arquivos deve ser uma referência da resolução do problema.

### Exemplo:
- Script com queries de consulta de cartões por credenciada:
  - Nome do arquivo: `SETOR_SISTEMA_CONSULTADECARTOESPORCREDENCIADA`

## 5. Organização por Assunto
- Caso haja resoluções de problemas de diferentes assuntos, mas que tenham como principal um tipo específico de query, criar uma pasta sobre o assunto e inserir dentro dessa pasta os arquivos/pastas relevantes.

### Exemplo:
- Para uma pasta de scripts ou scripts que abordam o assunto de taxa, criar uma pasta chamada `TAXAS` e colocar os arquivos/pastas dentro da mesma.
- **OBS:** Não esquecer de criar a pasta `CONSULTAS` dentro dessa pasta.

---

**Nota:** Seguir estas diretrizes ajudará a manter o repositório organizado e facilitará a localização e gerenciamento dos scripts.
