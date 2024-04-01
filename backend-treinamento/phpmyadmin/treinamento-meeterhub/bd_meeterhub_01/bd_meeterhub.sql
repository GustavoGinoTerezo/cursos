-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 24/10/2023 às 21:00
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `bd_meeterhub`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `assunto`
--

CREATE TABLE `assunto` (
  `CODIGO` int(11) NOT NULL,
  `DESCRICAO` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `autor`
--

CREATE TABLE `autor` (
  `MATRICULA` int(11) NOT NULL,
  `NOME` varchar(30) NOT NULL,
  `CPF` varchar(12) DEFAULT NULL,
  `ENDERECO` varchar(30) DEFAULT NULL,
  `CIDADE` varchar(30) DEFAULT 'SÃO PAULO',
  `UF` char(2) DEFAULT 'SP' CHECK (`UF` in ('SP','RJ','MG','ES'))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `autor_livro`
--

CREATE TABLE `autor_livro` (
  `CODIGO_LIVRO` int(5) NOT NULL,
  `MATRICULA_AUTOR` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `editora`
--

CREATE TABLE `editora` (
  `CODIGO` int(11) NOT NULL,
  `NOME` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `livro`
--

CREATE TABLE `livro` (
  `CODIGO` int(11) NOT NULL,
  `TITULO` varchar(30) NOT NULL,
  `PRECO` decimal(7,0) DEFAULT NULL,
  `LANCAMENTO` date DEFAULT NULL,
  `CODIGO_EDITORA` int(5) NOT NULL,
  `CODIGO_ASSUNTO` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `assunto`
--
ALTER TABLE `assunto`
  ADD PRIMARY KEY (`CODIGO`);

--
-- Índices de tabela `autor`
--
ALTER TABLE `autor`
  ADD PRIMARY KEY (`MATRICULA`),
  ADD UNIQUE KEY `CPF` (`CPF`);

--
-- Índices de tabela `autor_livro`
--
ALTER TABLE `autor_livro`
  ADD PRIMARY KEY (`CODIGO_LIVRO`,`MATRICULA_AUTOR`),
  ADD KEY `MATRICULA_AUTOR` (`MATRICULA_AUTOR`);

--
-- Índices de tabela `editora`
--
ALTER TABLE `editora`
  ADD PRIMARY KEY (`CODIGO`),
  ADD UNIQUE KEY `NOME` (`NOME`);

--
-- Índices de tabela `livro`
--
ALTER TABLE `livro`
  ADD PRIMARY KEY (`CODIGO`),
  ADD KEY `CODIGO_ASSUNTO` (`CODIGO_ASSUNTO`),
  ADD KEY `CODIGO_EDITORA` (`CODIGO_EDITORA`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `assunto`
--
ALTER TABLE `assunto`
  MODIFY `CODIGO` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `editora`
--
ALTER TABLE `editora`
  MODIFY `CODIGO` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `autor_livro`
--
ALTER TABLE `autor_livro`
  ADD CONSTRAINT `autor_livro_ibfk_1` FOREIGN KEY (`CODIGO_LIVRO`) REFERENCES `livro` (`CODIGO`),
  ADD CONSTRAINT `autor_livro_ibfk_2` FOREIGN KEY (`MATRICULA_AUTOR`) REFERENCES `autor` (`MATRICULA`);

--
-- Restrições para tabelas `livro`
--
ALTER TABLE `livro`
  ADD CONSTRAINT `livro_ibfk_1` FOREIGN KEY (`CODIGO_ASSUNTO`) REFERENCES `assunto` (`CODIGO`),
  ADD CONSTRAINT `livro_ibfk_2` FOREIGN KEY (`CODIGO_EDITORA`) REFERENCES `editora` (`CODIGO`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
